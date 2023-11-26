import CryptoCard from '../BitcoinCard';
import Chart from '../Chart';
import BuySellButton from '../BuySellButton';
import './home.scss';
import { SiBitcoinsv } from 'react-icons/si';
export default function Index() {
  return (
    <main className="home-container">
      <CryptoCard
        icon={<SiBitcoinsv size={35} color={'#feb131'}/>}
        title="Bitcoin"
        currency="BTC"
        value="3.529020"
        dollarvalue="$19.153"
        percent="-2.32%"
      />
      <Chart />
      <BuySellButton width={'10rem' } height={'6rem'}/>
   
    </main>
  );
}
