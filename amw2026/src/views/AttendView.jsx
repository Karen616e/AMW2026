import React from 'react';
import Registration from '../components/home/Registration';
import Grants from '../components/home/Grants';


const AttendView = () => {
  return (
    // Agregamos dark:bg-slate-900 y la transición suave
    <div className="pt-24 pb-12 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 min-h-screen">
      <Registration />
      <Grants />
      
    </div>
  );
};

export default AttendView;