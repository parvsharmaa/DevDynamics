import React, { useState, useEffect } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';

type Activity = {
  id: number;
  user: string;
  activity: string;
  commitCount: number;
  linesChanged: number;
  date: string;
  status: string;
};

const ActivityTable: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [filteredActivities, setFilteredActivities] = useState<Activity[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 14;
  const [sortColumn, setSortColumn] = useState<keyof Activity | ''>('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [filters, setFilters] =
    useState<Partial<Record<keyof Activity, string>>>();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  useEffect(() => {
    const dummyData = generateDummyData(56);
    setActivities(dummyData);
    setFilteredActivities(dummyData);
  }, []);

  const generateDummyData = (count: number): Activity[] => {
    const users = ['ritik', 'rishi', 'avjit', 'arvind.shelke'];
    const activities = ['Commits', 'Pull Requests', 'Issues', 'Code Reviews'];
    const statuses = ['Open', 'In Progress', 'Resolved'];

    const data: Activity[] = [];
    for (let i = 0; i < count; i++) {
      data.push({
        id: i + 1,
        user: users[Math.floor(Math.random() * users.length)],
        activity: activities[Math.floor(Math.random() * activities.length)],
        commitCount: Math.floor(Math.random() * 100) + 1,
        linesChanged: Math.floor(Math.random() * 500) + 1,
        date: new Date(Date.now() - Math.floor(Math.random() * 10000000000))
          .toISOString()
          .split('T')[0],
        status: statuses[Math.floor(Math.random() * statuses.length)],
      });
    }
    return data;
  };

  const handleSort = (column: keyof Activity) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const handleFilter = (column: keyof Activity, value: string) => {
    const newFilters = { ...filters, [column]: value };
    setFilters(newFilters);
    filterActivities(newFilters);
  };

  const filterActivities = (
    appliedFilters: Partial<Record<keyof Activity, string>>
  ) => {
    let filtered = activities;
    Object.keys(appliedFilters).forEach((key) => {
      const filterValue = appliedFilters[key as keyof Activity];
      if (filterValue) {
        filtered = filtered.filter((activity) =>
          activity[key as keyof Activity]
            .toString()
            .toLowerCase()
            .includes(filterValue.toLowerCase())
        );
      }
    });
    setFilteredActivities(filtered);
    setCurrentPage(1);
  };

  const sortedActivities = filteredActivities.sort((a, b) => {
    if (sortColumn === '') return 0;
    const aValue = a[sortColumn];
    const bValue = b[sortColumn];

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortDirection === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
    }
    return 0;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedActivities.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div
      className={`container mx-auto p-2 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-100'
      }`}
    >
      <table className={`min-w-full ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <thead>
          <tr>
            {[
              'ID',
              'User',
              'Activity',
              'Commit Count',
              'Lines Changed',
              'Date',
              'Status',
            ].map((column) => (
              <th
                key={column.toLowerCase().replace(/\s+/g, '')}
                className={`px-6 py-3 border-b-2 ${
                  darkMode
                    ? 'border-gray-700 text-gray-400'
                    : 'border-gray-300 text-gray-500'
                } text-left text-xs leading-4 font-medium uppercase tracking-wider`}
              >
                <div className='flex items-center'>
                  <span>{column}</span>
                  <button
                    className='ml-2'
                    onClick={() =>
                      handleSort(
                        column
                          .toLowerCase()
                          .replace(/\s+/g, '') as keyof Activity
                      )
                    }
                  >
                    {sortColumn === column.toLowerCase().replace(/\s+/g, '') ? (
                      sortDirection === 'asc' ? (
                        <ChevronUpIcon className='h-4 w-4' />
                      ) : (
                        <ChevronDownIcon className='h-4 w-4' />
                      )
                    ) : (
                      <ChevronUpIcon className='h-4 w-4 text-gray-400' />
                    )}
                  </button>
                </div>
                <input
                  type='text'
                  placeholder={`Filter ${column}`}
                  className={`mt-1 p-1 block w-full rounded-md ${
                    darkMode
                      ? 'bg-gray-700 text-gray-300 border-gray-600'
                      : 'border-gray-300'
                  } shadow-sm focus:border-indigo-100 focus:ring focus:ring-indigo-100 focus:ring-opacity-50`}
                  onChange={(e) =>
                    handleFilter(
                      column
                        .toLowerCase()
                        .replace(/\s+/g, '') as keyof Activity,
                      e.target.value
                    )
                  }
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((activity) => (
            <tr key={activity.id}>
              <td
                className={`px-6 py-4 whitespace-no-wrap border-b ${
                  darkMode ? 'border-gray-700 text-gray-300' : 'border-gray-200'
                }`}
              >
                {activity.id}
              </td>
              <td
                className={`px-6 py-4 whitespace-no-wrap border-b ${
                  darkMode ? 'border-gray-700 text-gray-300' : 'border-gray-200'
                }`}
              >
                {activity.user}
              </td>
              <td
                className={`px-6 py-4 whitespace-no-wrap border-b ${
                  darkMode ? 'border-gray-700 text-gray-300' : 'border-gray-200'
                }`}
              >
                {activity.activity}
              </td>
              <td
                className={`px-6 py-4 whitespace-no-wrap border-b ${
                  darkMode ? 'border-gray-700 text-gray-300' : 'border-gray-200'
                }`}
              >
                {activity.commitCount}
              </td>
              <td
                className={`px-6 py-4 whitespace-no-wrap border-b ${
                  darkMode ? 'border-gray-700 text-gray-300' : 'border-gray-200'
                }`}
              >
                {activity.linesChanged}
              </td>
              <td
                className={`px-6 py-4 whitespace-no-wrap border-b ${
                  darkMode ? 'border-gray-700 text-gray-300' : 'border-gray-200'
                }`}
              >
                {activity.date}
              </td>
              <td
                className={`px-6 py-4 whitespace-no-wrap border-b ${
                  darkMode ? 'border-gray-700' : 'border-gray-200'
                }`}
              >
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    activity.status === 'Resolved'
                      ? 'bg-green-100 text-green-800'
                      : activity.status === 'In Progress'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {activity.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='mt-4'>
        <nav className='flex justify-between'>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md ${
              darkMode
                ? 'border-gray-600 text-gray-300 bg-gray-800 hover:bg-gray-700'
                : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-50'
            }`}
          >
            Previous
          </button>
          <span className='relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md'>
            Page {currentPage} of{' '}
            {Math.ceil(filteredActivities.length / itemsPerPage)}
          </span>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={
              currentPage ===
              Math.ceil(filteredActivities.length / itemsPerPage)
            }
            className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md ${
              darkMode
                ? 'border-gray-600 text-gray-300 bg-gray-800 hover:bg-gray-700'
                : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-50'
            }`}
          >
            Next
          </button>
        </nav>
      </div>
    </div>
  );
};

export default ActivityTable;
