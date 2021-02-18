import './App.css';
import Homepage from "./page/Homepage/homepage";
import { Route } from 'react-router-dom';
import Shop from './page/Shop/shop';
import Header from './component/header/header';
import SignIn from './page/signIn/signIn'


const Hatspage = () => {
  <div>
    <h1>
      Hats Page
    </h1>
  </div>
}

function App() {
  return (
    <div className="App">
      <Header />
      <switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/login" component={SignIn} />
      </switch>
    </div>
  );
}

export default App;
