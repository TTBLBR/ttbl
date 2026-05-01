export default function NeonBackground({ className = '' }) {
  return (
    <div className={`neon-lines ${className}`} aria-hidden="true">
      <span className="line l1" />
      <span className="line l2" />
      <span className="line l3" />
      <span className="line l4" />
      <span className="line l5" />
      <span className="line l6" />
    </div>
  );
}
