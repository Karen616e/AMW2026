import React from 'react';
import Registration from '../components/home/Registration';
import Grants from '../components/home/Grants';
import Venue from '../components/home/Venue';
import Diversity from '../components/home/Diversity';

const AttendView = () => {
  return (
    <div className="pt-24 pb-12 bg-slate-50">
      <Registration />
      <Grants />
      <Venue />
      <Diversity />
    </div>
  );
};

export default AttendView;