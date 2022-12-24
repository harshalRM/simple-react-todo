import './App.css';
import Feature from './components/Feature';
import Header from './components/Header';
import Mainpage from './components/Mainpage';
import Quality from './components/Quality';

function App() {
  return (
    <div className='app'>
      <Header/>
      <Mainpage/>
      <Feature/>
      <Quality/>
    </div>
  );
}

export default App;
