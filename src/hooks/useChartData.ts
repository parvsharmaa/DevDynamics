import { useEffect, useState } from 'react';
import {
  extractActivitySummaryData,
  extractDayWiseActivityData,
  extractDeveloperActiveDays,
} from '../api/api';

const useChartData = () => {
  const [activeDaysData, setActiveDaysData] = useState<any[]>([]);
  const [activitySummaryData, setActivitySummaryData] = useState<any[]>([]);
  const [dayWiseActivityData, setDayWiseActivityData] = useState<any[]>([]);

  useEffect(() => {
    setActiveDaysData(extractDeveloperActiveDays());
    setActivitySummaryData(extractActivitySummaryData());
    setDayWiseActivityData(extractDayWiseActivityData());
  }, []);

  return { activeDaysData, activitySummaryData, dayWiseActivityData };
};

export default useChartData;
