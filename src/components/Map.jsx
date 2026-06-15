import { useSearchParams } from "react-router-dom";
import styles from "../components/CSSModules/Map.module.css";

export default function Map() {
  const [searchParms, setSearchParams] = useSearchParams();
  const lat = searchParms.get("lat");
  const lng = searchParms.get("lng");

  return (
    <div className={styles.mapContainer}>
      <h1>Map</h1>
      <h2>
        Position: {lat}, {lng}
      </h2>
      <button
        onClick={() => {
          setSearchParams({ lat: 50, lng: 100 });
        }}
      >
        Changes Pos
      </button>
    </div>
  );
}
