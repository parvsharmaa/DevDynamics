import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';

const Invoice: React.FC = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <div
      className={`container mx-auto p-2 ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      Coming soon .....
    </div>
  );
};

export default Invoice;
