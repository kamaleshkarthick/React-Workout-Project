
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import DashboardContent from './components/DashboardContent';

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <TopBar />
        <DashboardContent />
      </div>
    </div>
  );
}

export default App;
