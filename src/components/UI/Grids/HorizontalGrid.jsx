export default function HorizontalGrid ({title, children}) {
  return (
    <div className="page-section">
      <h3>{title}</h3>
      <div className="hor-grid">
        {children}
      </div>
    </div>
  );
}