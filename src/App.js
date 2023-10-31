import './App.css';
import './Body.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ResponsiveAppBar from './components/appBar';
import BodyLeft from './components/bodyLeft';
import BodyRight from './components/bodyRight';
import AdminAppBar from './adminComponents/adminAppBar';
import ListTrainLinesComponent from './adminComponents/trainLineList';
function App() {
  return (
    <Router>
      <div className='metro-map'>
        <Routes>
          <Route path="/admin" element={<AdminContent />} />
          <Route path="/" element={<CommonContent />} />
        </Routes>
      </div>
    </Router>
  );
}

function AdminContent() {
  return (
    <div>
    <AdminAppBar/>
      <body>
        <ListTrainLinesComponent/>
      </body>
  </div>
  );
}

function CommonContent() {
  return (
    <div>
      <ResponsiveAppBar/>
        <body>
          <div className='body'>
            <div className='container'>
              <BodyLeft/>
              <BodyRight/>
            </div>   
          </div>
        </body>
    </div>
  );
}

export default App;