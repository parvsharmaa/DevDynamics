import React from 'react';
import {
  BugAntIcon,
  UserIcon,
  SquaresPlusIcon,
  RssIcon,
} from '@heroicons/react/24/outline';

export const COLORS: string[] = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

interface Stat {
  title: string;
  value: string;
  change: string;
}

export const Stats: Stat[] = [
  {
    title: 'Active Contributors',
    value: '24',
    change: '+15%',
  },
  {
    title: 'Deployments',
    value: '236',
    change: '-0.03%',
  },
  {
    title: 'Incidents',
    value: '19',
    change: '+15.03%',
  },
  {
    title: 'PR Merged',
    value: '2K',
    change: '+6.08%',
  },
];

interface Notification {
  title: string;
  time: string;
  icon: React.ReactElement;
}

export const Notifications: Notification[] = [
  {
    title: 'You have an issue that needs your attention',
    time: 'Just now',
    icon: React.createElement(BugAntIcon, {
      className: 'h-6 w-6 text-gray-500',
    }),
  },
  {
    title: 'New team member joined',
    time: '59 minutes ago',
    icon: React.createElement(UserIcon, { className: 'h-6 w-6 text-gray-500' }),
  },
  {
    title: 'New PR Merged',
    time: '12 hours ago',
    icon: React.createElement(SquaresPlusIcon, {
      className: 'h-6 w-6 text-gray-500',
    }),
  },
  {
    title: 'Andi Lane added a new comment',
    time: 'Today, 11:59 AM',
    icon: React.createElement(RssIcon, { className: 'h-6 w-6 text-gray-500' }),
  },
];

interface Activity {
  title: string;
  user: string;
  time: string;
}

export const Activities: Activity[] = [
  {
    title: 'Added 2 new commits',
    user: 'Rishi',
    time: 'Just now',
  },
  {
    title: 'Ritik reviewed the PR',
    user: 'Ritik',
    time: '59 minutes ago',
  },
  {
    title: 'Opened a new PR',
    user: 'Avjit',
    time: '12 hours ago',
  },
  {
    title: 'Resolved merge conflicts on PR',
    user: 'Rishi',
    time: 'Today, 11:59 AM',
  },
  {
    title: 'Raised a new Issue',
    user: 'Arvind',
    time: 'Feb 2, 2024',
  },
];
