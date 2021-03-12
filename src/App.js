import logo from './logo.svg';
import {BrowserRouter as Router} from 'react-router-dom';
import { AppRoutes } from './Router'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './Components/Guest/Login';

function App() {
  return (
      <Router>
          <div>
            <AppRoutes />
          </div>
      </Router>
  );
}

export default App;
