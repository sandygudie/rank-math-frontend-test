import { Area, AreaChart, ResponsiveContainer } from 'recharts';
import { PiDotOutlineFill } from 'react-icons/pi';
import './chartview.scss';
import { chartData } from '../../utlis/data';

export default function Index({ selectedIndex }) {

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
      <ResponsiveContainer width='100%' height={100}>
        <AreaChart
          width={350}
          height={110}
          data={chartData[selectedIndex].data}
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
            className='area-plot'
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className='chart-bottom'>
        <PiDotOutlineFill color={'#ffb736'} size={35} />
        <p className='dollar-rate'>
          1 BTC = ${chartData[selectedIndex].dollarRate}
        </p>
      </div>
    </div>
  )
}