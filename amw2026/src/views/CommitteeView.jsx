import Organization from '../components/home/Organization';

const CommitteeView = () => {
  return (
    // Agregamos el fondo dinámico y la transición para el modo oscuro
    <div className="pt-24 pb-12 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 min-h-screen">
      <Organization />
    </div>
  );
};

export default CommitteeView;