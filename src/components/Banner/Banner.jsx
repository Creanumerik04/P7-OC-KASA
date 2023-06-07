/* import bannerImg from "../../assets/banner-img.png"; */
import "./Banner.css";

export default function Banner() {
  return (
    <div className="banner">
      <div className="bannerBack">
        {/* <img
        src={bannerImg}
        alt="Un paysage de bord de mer"
        className="banner-img"
      /> */}
        <h1 className="banner-title">
          Chez vous, <span>partout et ailleurs</span>
        </h1>
      </div>
    </div>
  );
}
