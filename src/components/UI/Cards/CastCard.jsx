export default function CastCard({
  castPhoto,
  castRole,
  castName
}) {
  return (
      <div className="cast-card">
        <img
          src={`https://image.tmdb.org/t/p/w500/${castPhoto}`}
          alt={`${castName} Poster`}
          className="cast-photo"
        />
        <p className="link">{castRole}</p>
        <p className="small">{castName}</p>
      </div>
  );
}
