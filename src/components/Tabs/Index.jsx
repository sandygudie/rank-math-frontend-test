import "./tabs.scss";
import { chartData } from "../../utlis/data";

export default function Index({ selectedIndex, handleTabChange }) {
  return (
    <div className="tabs-container">
      {chartData.map((data) => {
        return (
          <button
            style={{
              color: selectedIndex === data.id ? "#ffff" : "#aeb8c4",
              backgroundColor:
                selectedIndex === data.id ? "#aeb8c4" : "transparent",
            }}
            className="tab-button"
            onClick={() => handleTabChange(data.id)}
            key={data.id}
          >
            {data.period}
          </button>
        );
      })}
    </div>
  );
}
