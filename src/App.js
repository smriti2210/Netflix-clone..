import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import './App.scss';
import Home from "./Components/Home"
import Header from "./Components/Header";
import Header2 from "./Components/Header copy";

function App() {
  return (
    <Router>
      <Header/>
      <Header2/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>

    </Router>
  );
}

export default App;
