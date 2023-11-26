import { useState } from "react";
import "./cryptocard.scss";
import IconButton from "../IconButton";
import { TbChevronCompactDown, TbChevronCompactUp } from "react-icons/tb";
import BuySellButton from "../BuySellButton";

export default function Index({
  icon,
  title,
  currency,
  value,
  dollarvalue,
  percent,
}) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="crypto-card">
      <div className="crypto-topbar">
        <div className="crypto-left">
          <span className="crypto-logo">{icon}</span>
          <p className="crypto-title">{title}</p>
        </div>
        <p className="crypto-currency">{currency}</p>
      </div>
      <div className="crypto-value">
        <p className="crypto-value-text">
          {value}
          {currency}
        </p>
        <div className="crypto-value-subtext">
          <p className="crypto-value-dollars">{dollarvalue} USD</p>
          <p className="crypto-value-percent">{percent}</p>
        </div>
      </div>
      <div className="down-arrow-icon">
        <IconButton
          handleClick={handleToggle}
          icon={
            toggle ? (
              <TbChevronCompactUp size={30} />
            ) : (
              <TbChevronCompactDown size={30} />
            )
          }
        />
      </div>
      <div
        style={{
          height: toggle ? "7rem" : "0",
        }}
        className={`btn-toggle`}
      >
        <div style={{ padding: "1em" }}>
          <BuySellButton width={"8rem"} height={"5rem"} />
        </div>
      </div>
    </div>
  );
}
