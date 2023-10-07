import './App.css';
import './Body.css';
import ResponsiveAppBar from './components/appBar';
import BodyLeft from './components/bodyLeft';
import BodyRight from './components/bodyRight';

function App() {
  return (
    <div className='metro-map'>
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