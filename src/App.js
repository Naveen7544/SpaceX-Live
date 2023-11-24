import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.scss';
import Dashboard from './pages/Dashboard';
import Rockets from './pages/Rockets';
import Header from './components/Header';

function App() {
  return (
    <>
      <Router>
        
        <Header/>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/rockets" component={Rockets} />        
        </Switch>
      </Router>
    </>
  );
}

export default App;
