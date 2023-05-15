import bannerImg from "../assets/banner-img.png";
import "../styles/Banner.css";

function Banner() {
  return (
    <div className="banner">
      <img
        src={bannerImg}
        alt="Un paysage de bord de mer"
        className="banner-img"
      />
      <h1 className="banner-text">Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
