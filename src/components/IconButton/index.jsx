import "./iconbutton.scss";

export default function Index({ icon, size,handleClick }) {
  return (
    <button style={{fontSize:size}} onClick={()=>handleClick()} className="iconbutton">
      {icon}
    </button>
  );
}
