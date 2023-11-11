import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from './components/appBar';
import BodyLeft from './components/bodyLeft';
import BodyRight from './components/bodyRight';
import AdminAppBar from './adminComponents/adminAppBar';
import ListTrainLinesComponent from './adminComponents/trainLineList';
import ListTrainComponent from './adminComponents/trainList';
import CreateTrainLineComponent from './adminComponents/createTrainLine';
import TrainLineDetail from './adminComponents/trainLineDetail';
import UpdateTrainLineComponent from './adminComponents/updatedTrainLine';
import './Body.css'
import './App.css'

function App() {
  return (
    <Router>
      <div className='metro-map'>
        <Routes>
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="*" element={<CommonContent />} />
        </Routes>
      </div>
    </Router>
  );
}

function AdminRoutes() {
  return (
    <>
      <AdminAppBar />
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/Tuyến tàu" element={<ListTrainLinesComponent />} />
        <Route path="/detailtrainline/:id" element={<TrainLineDetail />} />
        <Route path="/addtrainline" element={<CreateTrainLineComponent />} />
        <Route path="/edittrainline/:id" element = {<UpdateTrainLineComponent/>}/>
        <Route path="/Tàu/:id" element={<ListTrainComponent />} />
      </Routes>
    </>
  );
}

function AdminDashboard() {
  return (
    <h1>Welcome to Admin Dashboard</h1>
  );
}

function CommonContent() {
  return (
    <>
      <ResponsiveAppBar />
      <div className='body'>
        <div className='container-user'>
          <BodyLeft />
          <BodyRight />
        </div>
      </div>
    </>
  );
}

export default App;
