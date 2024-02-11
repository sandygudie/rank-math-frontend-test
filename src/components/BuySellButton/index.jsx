import './buysellbutton.scss';
import { FaDollarSign } from 'react-icons/fa';

export default function Index({ width, height, currency }) {
  return (
    <div className='buysell-container'>
      <button
        style={{ width: width, height: height }}
        className='buysell-button'
      >
        <span className='buy-dollar-icon'>
          {' '}
          <FaDollarSign size={17} />
        </span>
        <p className='btn-text'>Buy {currency}</p>
      </button>
      <button
        style={{ width: width, height: height }}
        className='buysell-button'
      >
        <span className='sell-dollar-icon'>
          <FaDollarSign size={17} />
        </span>
        <p className='btn-text'>Sell {currency}</p>
      </button>
    </div>
  );
}
