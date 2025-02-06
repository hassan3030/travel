import "./main-header.css";

const MainHeader = () => {
  return (
    <div className="main-header">
      <div className="search-box">
        <div className="input-wrapper">
          <i className="bi bi-search"></i>
          <input
            className="search-box-input"
            type="search"
            placeholder="What are you looking for?"
          />
        </div>
        <button className="search-box-btn">Search</button>
      </div>
      <div className="main-header-title">
        <h3>Travel</h3>
        <h1>World Trips</h1>
      </div>
    </div>
  );
};

export default MainHeader;
