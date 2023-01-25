import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import PrivateComponent from "./components/PrivateComponents"
function App() {
  return (
    <div>
      <Router>
        <Routes>
          	  <Route element={<PrivateComponent/>}>
                <Route path="dashboard" element={<Home />} />
                <Route path="/" element={<Home />} />
                </Route>             
            
        </Routes>
      </Router>
    </div>
  );
}

export default App;
