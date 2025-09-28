import { ClipLoader, PacmanLoader } from "react-spinners";

export default function Loading () {
  return (
    <div className="loading-page">
      <ClipLoader color="#ff1744" size={48} speedMultiplier={0.6}/>
    </div>
  );
}