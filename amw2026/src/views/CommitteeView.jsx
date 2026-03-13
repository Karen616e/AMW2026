// src/views/CommitteeView.jsx
import Organization from '../components/home/Organization';

const CommitteeView = () => {
  return (
    <div className="pt-24 pb-12"> {/* pt-24 da espacio para que el Navbar no tape el título */}
      <Organization />
    </div>
  );
};

export default CommitteeView;