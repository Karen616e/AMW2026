import React from 'react';
import CallForPapers from '../components/home/CallForPapers';
import Submission from '../components/home/Submission';
import ReviewingProcess from '../components/home/ReviewingProcess';

const SubmissionView = () => {
  return (
    // Cambiamos bg-white por bg-white dark:bg-slate-900 y añadimos min-h-screen
    <div className="pt-24 pb-12 bg-white dark:bg-slate-900 transition-colors duration-300 min-h-screen">
      <CallForPapers />
      <Submission />
      <ReviewingProcess />
    </div>
  );
};

export default SubmissionView;