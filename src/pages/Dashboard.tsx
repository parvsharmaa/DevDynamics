import React from 'react';
import StatCard from '../components/dashboard/StatCard';
import ChartCard from '../components/dashboard/ChartCard';
import BarChartCard from '../components/dashboard/BarChartCard';
import PieChartCard from '../components/dashboard/PieChartCard';
import useChartData from '../hooks/useChartData';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Stats } from '../utils/constants';

const Dashboard: React.FC = () => {
  const { activeDaysData, activitySummaryData, dayWiseActivityData } =
    useChartData();

  const formattedData = activitySummaryData.map((item) => ({
    name: item.name,
    value: item.activity,
    color: '#3182ce',
  }));

  return (
    <main className='flex-1 overflow-y-auto'>
      <div className='m-2 flex gap-1'>
        Today
        <ChevronDownIcon className='h-3 w-3 text-gray-500 mt-1.5' />
      </div>
      <div className='grid grid-cols-4 gap-6 mb-4'>
        {Stats.map((stat, index) => (
          <StatCard key={index} ind={index} {...stat} />
        ))}
      </div>
      <div className='mb-4'>
        <ChartCard
          title='Daily Developer Activity'
          data={dayWiseActivityData}
        />
      </div>
      <div className='grid grid-cols-2 gap-6'>
        <BarChartCard
          title='Developer Activity Summary'
          data={formattedData as never[]}
        />
        <PieChartCard title='Developer Active Days' data={activeDaysData} />
      </div>
    </main>
  );
};

export default Dashboard;
