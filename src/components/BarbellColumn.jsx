export default function BarbellColumn({ side = 'left' }) {
  return (
    <div className={`barbell barbell-${side}`} aria-hidden="true">
      <div className="plates top">
        <span />
        <span />
        <span />
      </div>
      <div className="shaft" />
      <div className="knurl" />
      <div className="shaft lower" />
      <div className="plates bottom">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
