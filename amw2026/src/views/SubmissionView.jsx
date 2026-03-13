import React from 'react';
import CallForPapers from '../components/home/CallForPapers';
import Submission from '../components/home/Submission';
import ReviewingProcess from '../components/home/ReviewingProcess';

const SubmissionView = () => {
  return (
    <div className="pt-24 pb-12 bg-white">
      <CallForPapers />
      <Submission />
      <ReviewingProcess />
    </div>
  );
};

export default SubmissionView;