import {BrowserRouter, Route, Routes} from "react-router-dom";
import Components from "./pages/components_07-07-2026/Components";
import StateProps from "./pages/state&props_07-07-2026/StateProps";
import Jsx from "./pages/jsx_07-07-2026/jsx";
import MyApp from "./pages/myapp_06-07-2026/MyApp";
import Miniproject from "./pages/miniproject_07-07-2026/Miniproject";
import PtoC from "./react_08-07-2026/pages/PtoC/PtoC";
import Props from "./react_08-07-2026/pages/Props-State/Props-State";
import PtooC from "./react_08-07-2026/pages/PtooC_Communication/PtooC";
import CtoP from "./react_08-07-2026/pages/CtoP_communications/CtoP";
import CtoC from "./react_08-07-2026/pages/CtoC/CtoC";
import MiniAssignment from "./react_08-07-2026/pages/MiniAssignment/MiniAssignment";



function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/components' element={<Components/>}/>
      <Route path='/stateprops' element={<StateProps/>}/>
      <Route path='/jsx' element={<Jsx/>}/>
      <Route path='/myapp' element={<MyApp/>}/>
      <Route path='/miniprojects' element={<Miniproject/>}/>
      <Route path='/PtoC-Component' element={<PtoC/>}/>
      <Route path='/Props-State' element={<Props/>}/>
      <Route path='/PtooC_Communication' element={<PtooC/>}/>
      <Route path='/ctopcommunications' element={<CtoP/>}/>
      <Route path='/ctoc' element={<CtoC/>}/>
      <Route path='/MiniAssignment' element={<MiniAssignment/>}/>
      
      
      </Routes>   
       </BrowserRouter>

  )
}
export default App;
