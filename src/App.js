import NavBar from './components/navBar';
import Home from './components/Home';
import Explorer from './components/explorer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div>
      <NavBar logged={false} />
      <Router>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/explore" element={<Explorer />}></Route>
        </Routes>
      </Router>
    </div>

  );
}


export default App;
