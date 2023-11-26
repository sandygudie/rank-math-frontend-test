import { useState } from 'react';
import Tabs from '../Tabs/Index';
import ChartView from '../ChartCard';


export default function Index() {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const handleTabChange=(selectedIndex)=>{
    setSelectedIndex(selectedIndex)
  }
  return (
    <>
      <Tabs selectedIndex={selectedIndex} handleTabChange={handleTabChange} />
      <ChartView selectedIndex={selectedIndex}/>
    </>
  );
}
