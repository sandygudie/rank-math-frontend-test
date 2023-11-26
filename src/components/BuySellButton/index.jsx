import "./buysellbutton.scss";
import { FaDollarSign } from "react-icons/fa";

export default function Index({ width, height }) {
  return (
    <div className="buysell-container">
      <button style={{width:width,
      height:height}} className="buysell-button">
        <span className="buy-dollar-icon">
          {" "}
          <FaDollarSign size={17} />
        </span>
        <p className="btn-text">Buy BTC</p>
      </button>
      <button style={{width:width,
      height:height}} className="buysell-button">
        <span className="sell-dollar-icon">
          {" "}
          <FaDollarSign size={17} />
        </span>
        <p className="btn-text">Sell BTC</p>
      </button>
    </div>
  );
}
