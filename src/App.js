
import { Provider } from 'react-redux';
import './App.css';
import appStore from './Redux/appStore';
import Body from './components/Body';
function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
      <Body />
    </div>
    </Provider>
  );
}

export default App;
