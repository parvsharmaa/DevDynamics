import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';

interface ChartCardProps {
  title: string;
  data: Array<{
    date: string;
    Commits: number;
    'PR Open': number;
    'PR Merged': number;
    'PR Reviewed': number;
    'PR Comments': number;
  }>;
}

const ChartCard: React.FC<ChartCardProps> = ({ title, data }) => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <div
      className={`p-4 rounded-lg shadow ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <h3
        className={`text-lg font-semibold mb-5 ${
          darkMode ? 'text-gray-300' : 'text-gray-800'
        }`}
      >
        {title}
      </h3>
      <ResponsiveContainer width='100%' height={300}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
        >
          <CartesianGrid
            strokeDasharray='3 3'
            stroke={darkMode ? '#555' : '#ccc'}
          />
          <XAxis
            dataKey='date'
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            stroke={darkMode ? '#ccc' : '#555'}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            stroke={darkMode ? '#ccc' : '#555'}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: darkMode ? '#333' : '#fff',
              border: 'none',
              borderRadius: '4px',
            }}
            itemStyle={{ color: darkMode ? '#fff' : '#000' }}
          />
          <Bar dataKey='Commits' fill='#FAC76E' />
          <Bar dataKey='PR Open' fill='#EF6B6B' />
          <Bar dataKey='PR Merged' fill='#61CDBB' />
          <Bar dataKey='PR Reviewed' fill='#C2528B' />
          <Bar dataKey='PR Comments' fill='#0396A6' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartCard;
