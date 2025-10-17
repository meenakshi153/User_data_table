import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Onemoretimelearningtodolist from "./components/Onemoretimelearningtodolist";

import Onemoretimelearnuseeffect from './components/Onemoretimelearnuseeffect';



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

