import './App.css';
import Homepage  from "./page/Homepage/homepage";
import {Route} from 'react-router-dom';
import Shop from './page/Shop/shop'


const Hatspage =() => {
  <div>
    <h1>
      Hats Page
    </h1>
  </div>
}

function App() {
  return (
    <div className="App">
    <switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/shops" component={Shop} />

    </switch>
    </div>
  );
}

export default App;
