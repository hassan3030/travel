import logo from "../../images/logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="dubai-icon" className="logo-img" />
      <div className="logo-text">
        <b>traveling</b>
        <b>tourist </b>
        <b>relaxing</b>
      </div>
    </div>
  );
};

export default Logo;
