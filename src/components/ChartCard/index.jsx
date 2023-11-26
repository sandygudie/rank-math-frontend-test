import { Area, AreaChart } from 'recharts';
import { PiDotOutlineFill } from 'react-icons/pi';
import './chartview.scss';
import { chartData } from '../../utlis/data';

export default function Index({ selectedIndex }) {
  const data = [
    {
      name: 'Page A',
      uv: 2100,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 2398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2900,
      pv: 2500,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 3180,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 3590,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 3290,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3400,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className='chart-view'>
      <div className='chart-info'>
        <div className='chart-info-lower'>
          <PiDotOutlineFill color={'red'} size={35} />

          <span className='text-lower'>
            Lower: ${chartData[selectedIndex].lower}
          </span>
        </div>
        <div className='chart-info-higher'>
          <PiDotOutlineFill color={'#6ecd6e'} size={35} />
          <span className='text-higher'>
            Higher: ${chartData[selectedIndex].higher}
          </span>
        </div>
      </div>
      <AreaChart
        width={350}
        height={110}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 0,
          bottom: 0,
        }}
        className='area-chart-display'
      >
        <Area
          strokeWidth={3}
          type='monotone'
          dataKey='uv'
          fillOpacity={0.5}
          stroke={chartData[selectedIndex].areaStroke}
          fill={chartData[selectedIndex].areaFill}
        />
      </AreaChart>
      <div className='chart-bottom'>
        <PiDotOutlineFill color={'#ffb736'} size={35} />
        <p className='dollar-rate'>
          1 BTC = ${chartData[selectedIndex].dollarRate}
        </p>
      </div>
    </div>
  );
}
