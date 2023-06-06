import bannerImg from "../../assets/banner-img.png";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <img
        src={bannerImg}
        alt="Un paysage de bord de mer"
        className="banner-img"
      />
      <h1 className="banner-title">
        Chez vous, <span>partout et ailleurs</span>
      </h1>
    </div>
  );
}

export default Banner;
