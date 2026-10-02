// src/views/ProgramView.jsx
import ScheduleTable from '../components/home/ScheduleTable';

const ProgramView = () => {
  return (
    <div className="bg-white dark:bg-slate-900 transition-colors duration-300 min-h-screen">
      <ScheduleTable />
    </div>
  );
};

export default ProgramView;