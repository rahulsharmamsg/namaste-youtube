import { Provider } from 'react-redux';
import './App.css';
import Webroutes from './routes/Webroutes';
import AppStore from './store/AppStore';

function App() {
  return (
    <Provider store={AppStore}><Webroutes /></Provider>
   
  );
}

export default App;
