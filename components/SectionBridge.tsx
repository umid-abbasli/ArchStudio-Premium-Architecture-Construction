export default function SectionBridge({ label }: { label: string }) {
  return (
    <div className="section-bridge">
      <div className="section-bridge-line" />
      <span className="section-bridge-label">{label}</span>
    </div>
  );
}
