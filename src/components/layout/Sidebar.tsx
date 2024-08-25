import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDownIcon,
  ChevronRightIcon,
  RocketLaunchIcon,
  PresentationChartLineIcon,
  NewspaperIcon,
  ChartBarSquareIcon,
  Cog8ToothIcon,
} from '@heroicons/react/24/outline';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import logo from '../../assets/devdynamics.svg';

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  to: string;
  subItems?: { text: string; to: string }[] | null;
  darkMode: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  text,
  to,
  subItems = [],
  darkMode,
}) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const active = location.pathname === to;
  const hasSubItems = subItems ? subItems.length > 0 : '';

  return (
    <li>
      <Link
        to={to}
        className={`flex items-center gap-1 py-2 px-4 ${
          active ? (darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200') : ''
        } ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
        onClick={() => hasSubItems && setIsOpen(!isOpen)}
      >
        {hasSubItems && (
          <span>
            {isOpen ? (
              <ChevronDownIcon className='h-4 w-4' />
            ) : (
              <ChevronRightIcon className='h-4 w-4' />
            )}
          </span>
        )}
        <div className='flex items-center space-x-3'>
          <span>{icon}</span>
          <span>{text}</span>
        </div>
      </Link>
      {isOpen && hasSubItems && (
        <ul className={`ml-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {subItems &&
            subItems.map((item, index) => (
              <li key={index}>
                <Link to={item.to} className='block py-2 px-4'>
                  {item.text}
                </Link>
              </li>
            ))}
        </ul>
      )}
    </li>
  );
};

function Sidebar() {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <div
      className={`w-64 ${
        darkMode ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-700'
      } shadow-md flex flex-col h-full p-2`}
    >
      <div className='p-4 flex items-center space-x-2'>
        <div className='rounded-full pb-3'>
          <img
            src={
              darkMode
                ? logo
                : 'https://cdn.prod.website-files.com/642535c7875ea6e60927dd49/65cb115f23533388f1d0b7e2_DevDynamics_Logo.svg'
            }
            alt='DevDynamics'
          />
        </div>
      </div>
      <div
        className={`px-4 py-2 flex justify-between text-sm ${
          darkMode ? 'text-gray-500' : 'text-gray-700'
        }`}
      >
        <span>Favorites</span>
        <span>Recently</span>
      </div>
      <nav className='flex-1 overflow-y-auto'>
        <ul>
          <SidebarItem
            icon='•'
            text='Overview'
            to='/'
            subItems={null}
            darkMode={darkMode}
          />
          <SidebarItem
            icon='•'
            text='Activity'
            to='/activities'
            subItems={null}
            darkMode={darkMode}
          />
          <div
            className={`px-4 py-2 text-sm ${
              darkMode ? 'text-gray-500' : 'text-gray-700'
            }`}
          >
            Pages
          </div>
          <SidebarItem
            icon={<RocketLaunchIcon className='h-6 w-6' />}
            text='Overview'
            to='/'
            darkMode={darkMode}
          />
          <SidebarItem
            icon={<PresentationChartLineIcon className='h-6 w-6' />}
            text='Activity'
            to='/activities'
            darkMode={darkMode}
          />
          <SidebarItem
            icon={<NewspaperIcon className='h-6 w-6' />}
            text='Invoices'
            to='/invoices'
            darkMode={darkMode}
          />
          <SidebarItem
            icon={<ChartBarSquareIcon className='h-6 w-6' />}
            text='Reports'
            to='/reports'
            darkMode={darkMode}
          />
          <SidebarItem
            icon={<Cog8ToothIcon className='h-6 w-6' />}
            text='Settings'
            to='/settings'
            darkMode={darkMode}
          />
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
