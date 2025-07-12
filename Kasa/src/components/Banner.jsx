import "./Banner.css";
import { useLocation } from "react-router-dom";

function Banner({ imgBanner, children }) {
  const location = useLocation();
  const isAPropos = location.pathname === "/a-propos";

  return (
    <section
      className={`banner ${isAPropos ? "banner-apropos" : ""}`}
      style={{ backgroundImage: `url(${imgBanner})` }}
    >
      {children && <h1>{children}</h1>}
    </section>
  );
}

export default Banner;