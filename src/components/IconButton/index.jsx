import './iconbutton.scss';

export default function Index({ icon, color, size,handleClick }) {
  return (
    <button style={{fontSize:size,color:color}} onClick={()=>handleClick()} className='iconbutton'>
      {icon}
    </button>
  );
}
