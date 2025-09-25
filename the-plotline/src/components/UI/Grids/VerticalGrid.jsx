export default function VerticalGrid({ title, children }) {
  return (
    <div className="page-section">
      <h3>{title}</h3>
      <div className="ver-grid">
        {children}
        </div>
    </div>
  );
}
