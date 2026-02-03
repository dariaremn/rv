import "./dboard.css";
import navline from "./line1nav.png";
import navbg from "./navbg.png";
import searchIcon from "./navlook.png";

function Dboard() {
  return (
    <section className="dboard">
      <img src={navbg} alt="" className="dboard-bg" />
      <div className="dboard-overlay"></div> 

      <div className="dboard-content">
        <h1 className="dboard-title">Weather dashboard</h1>


        <div className="dboard-middle">
          <div className="dboard-description">
            Create your personal list <br />
            of favorite cities and always be <br />
            aware of the weather.
          </div>

          <img src={navline} alt="" className="dboard-line" />

          <div className="dboard-date">
            <span className="month">October 2023</span>
            <span className="day">Friday, 13</span>
          </div>
        </div>

        <div className="dboard-search">
          <input type="text" placeholder="Search location..." />
          <button className="search-btn">
            <img src={searchIcon} alt="search" />
          </button>
        </div>
      </div>
    </section>
  );
}
export default Dboard