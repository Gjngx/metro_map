import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from './components/appBar';
import BodyLeft from './components/bodyLeft';
import BodyRight from './components/bodyRight';
import AdminAppBar from './adminComponents/adminAppBar';
import ListTrainLinesComponent from './adminComponents/trainLineList';
import CreateTrainLineComponent from './adminComponents/createTrainLine';
import TrainLineDetail from './adminComponents/trainLineDetail';
import UpdateTrainLineComponent from './adminComponents/updatedTrainLine';
import ListTrainComponent from './adminComponents/trainList';
import TrainDetail from './adminComponents/trainDetail';
import CreateTrainComponent from './adminComponents/createTrain';
import UpdateTrainComponent from './adminComponents/updatedTrain';
import BodyLeftInfoTrain from './components/bodyLeftInfoTrain';
import BodyRightInfoTrain from './components/bodyRightInfoTrain';
import './Body.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className='metro-map'>
        <Routes>
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="*" element={<UserContent />} />
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
        <Route path="/detailtrain/:id" element={<TrainDetail />} />
        <Route path="/addtrainbyidtrainline/:id" element={<CreateTrainComponent />} />
        <Route path="/edittrain/:id" element = {<UpdateTrainComponent/>}/>
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
      <BodyLeft />
      <BodyRight />
    </>
  );
}
function InfoTrainContent() {
  return (
    <>
      <BodyLeftInfoTrain />
      <BodyRightInfoTrain />
    </>
  );
}


function UserContent() {
  return (
    <>
      <ResponsiveAppBar />
      <div className='body'>
        <div className='container-user'>
          <Routes>
            <Route path="*" element={<CommonContent />} />
            <Route path="/listtrain/:id" element={<InfoTrainContent />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
