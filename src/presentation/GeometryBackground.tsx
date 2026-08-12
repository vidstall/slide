import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

interface GeoNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

const NODE_COUNT = 40;

// Bounding box nodes bounce within — full width/height (small margin so
// nodes don't visually clip at the exact viewport edge), framing the
// centered cover text symmetrically on both sides.
const X_MIN = 3;
const X_MAX = 97;
const Y_MIN = 3;
const Y_MAX = 97;
const SPEED = 3; // percent of container per second

// Hysteresis thresholds (percent, same 0-100 space as node x/y) so a pair
// sitting right at the boundary doesn't flicker connected/disconnected.
const CONNECT_DIST = 10;
const DISCONNECT_DIST = 13.5;

const SYNC_INTERVAL_MS = 120;

/** Deterministic pseudo-random in [0, 1), so the layout is stable across reloads. */
function seeded(seed: number): number {
  const v = Math.sin(seed * 12.9898) * 43758.5453;
  return v - Math.floor(v);
}

function buildNodes(): GeoNode[] {
  const nodes: GeoNode[] = [];
  for (let i = 0; i < NODE_COUNT; i++) {
    const angle = seeded(i * 11 + 1) * Math.PI * 2;
    const speed = SPEED * (0.5 + seeded(i * 3 + 7));
    nodes.push({
      x: X_MIN + seeded(i * 2 + 1) * (X_MAX - X_MIN),
      y: Y_MIN + seeded(i * 2 + 2) * (Y_MAX - Y_MIN),
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size: 5 + seeded(i * 3 + 1) * 5,
    });
  }
  return nodes;
}

function pairKey(i: number, j: number): string {
  return `${i}-${j}`;
}

function sameKeys(a: Set<string>, b: string[]): boolean {
  if (a.size !== b.length) return false;
  for (const key of b) if (!a.has(key)) return false;
  return true;
}

/**
 * Decorative, ambient node-network background for cover screens.
 * Nodes drift at a constant velocity and bounce off the bounding box's edges
 * and corners. Connections between nearby nodes fade in/out as they drift
 * close together or apart (hysteresis prevents boundary flicker). Node
 * motion and connected-line tracking run every frame via direct DOM writes
 * (not React state); which pairs are connected is synced into React state at
 * a throttled rate, since topology changes don't need 60fps precision.
 */
export function GeometryBackground() {
  const nodes = useMemo(() => buildNodes(), []);

  const nodeElsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const lineElsRef = useRef(new Map<string, SVGLineElement>());
  const connectedRef = useRef(new Set<string>());
  const [visiblePairs, setVisiblePairs] = useState<string[]>([]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      // No animation loop, but still compute one static set of connections
      // from the initial layout so the network doesn't render as bare dots.
      const initial: string[] = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          if (Math.sqrt(dx * dx + dy * dy) < CONNECT_DIST) initial.push(pairKey(i, j));
        }
      }
      setVisiblePairs(initial);
      return;
    }

    let frameId: number;
    let last = performance.now();
    let sinceSync = 0;

    function tick(now: number) {
      const dt = Math.min((now - last) / 1000, 0.05);
      sinceSync += now - last;
      last = now;

      nodes.forEach((n, i) => {
        n.x += n.vx * dt;
        n.y += n.vy * dt;
        if (n.x < X_MIN) {
          n.x = X_MIN;
          n.vx = Math.abs(n.vx);
        } else if (n.x > X_MAX) {
          n.x = X_MAX;
          n.vx = -Math.abs(n.vx);
        }
        if (n.y < Y_MIN) {
          n.y = Y_MIN;
          n.vy = Math.abs(n.vy);
        } else if (n.y > Y_MAX) {
          n.y = Y_MAX;
          n.vy = -Math.abs(n.vy);
        }

        const el = nodeElsRef.current[i];
        if (el) {
          el.style.left = `${n.x}%`;
          el.style.top = `${n.y}%`;
        }
      });

      const connected = connectedRef.current;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const key = pairKey(i, j);
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const isConnected = connected.has(key);
          if (!isConnected && dist < CONNECT_DIST) {
            connected.add(key);
          } else if (isConnected && dist > DISCONNECT_DIST) {
            connected.delete(key);
          }
        }
      }

      lineElsRef.current.forEach((el, key) => {
        const [i, j] = key.split("-").map(Number);
        el.setAttribute("x1", String(nodes[i].x));
        el.setAttribute("y1", String(nodes[i].y));
        el.setAttribute("x2", String(nodes[j].x));
        el.setAttribute("y2", String(nodes[j].y));
      });

      if (sinceSync >= SYNC_INTERVAL_MS) {
        sinceSync = 0;
        setVisiblePairs((prev) => (sameKeys(connected, prev) ? prev : Array.from(connected)));
      }

      frameId = requestAnimationFrame(tick);
    }

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [nodes]);

  return (
    <div className="geometry-bg" aria-hidden="true">
      <svg className="geometry-bg-edges" viewBox="0 0 100 100" preserveAspectRatio="none">
        <AnimatePresence>
          {visiblePairs.map((key) => {
            const [i, j] = key.split("-").map(Number);
            return (
              <motion.line
                key={key}
                ref={(el) => {
                  if (el) lineElsRef.current.set(key, el);
                  else lineElsRef.current.delete(key);
                }}
                x1={nodes[i].x}
                y1={nodes[i].y}
                x2={nodes[j].x}
                y2={nodes[j].y}
                className="geo-edge"
                vectorEffect="non-scaling-stroke"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.13 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            );
          })}
        </AnimatePresence>
      </svg>
      {nodes.map((node, i) => (
        <span
          key={i}
          ref={(el) => {
            nodeElsRef.current[i] = el;
          }}
          className="geo-node"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            width: `${node.size}px`,
            height: `${node.size}px`,
          }}
        />
      ))}
    </div>
  );
}
