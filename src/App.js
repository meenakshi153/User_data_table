import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Todolist from "./components/Todolist";
import RegisterForm from "./components/Registerform";
import Todolistlearning from "./components/Todolistlearning";
import Useataeanduseeffectandtostify from "./components/Useataeanduseeffectandtostify";
import Onemoretimelearningtodolist from "./components/Onemoretimelearningtodolist";
import Formnuchidata from './components/Formnuchidata';
import Againnewlearning from './components/Againnewlearning';
import Longtimetodolistlearning from './components/Longtimetodolistlearning';
import Useeffectlearning from './components/Useeffectlearning';
import Onemoretimelearnuseeffect from './components/Onemoretimelearnuseeffect';
import Usereflearning from './components/Usereflearning';


const App = () => {


  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      

        {/* Routing of the pages */}

        <Router>
          <Routes>
         
            <Route path="/onemoretime" element={<Onemoretimelearningtodolist/>}/>
            
            <Route path='/' element={<Onemoretimelearnuseeffect/>} />
          
          </Routes>
        </Router>


    </div>
  );
};


export default App;

