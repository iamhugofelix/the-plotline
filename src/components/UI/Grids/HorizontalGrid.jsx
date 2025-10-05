export default function HorizontalGrid ({title, children}) {
  return (
    <div className="hor-page-section">
      <h3>{title}</h3>
      <div className="hor-scroll-wrapper">
        <div className="hor-grid">
          {children}
        </div>
      </div>
    </div>
  );
}