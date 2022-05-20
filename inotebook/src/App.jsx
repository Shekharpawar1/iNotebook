
import {BrowserRouter as  Router,Routes,Route } from "react-router-dom";
import About from "./component/About";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import {NoteState} from "./context/NotesState";


// function App() {
//   return (
//     <div className="App">
//       <Navbar>
//     </div>
//   );
// }
const App=()=>{
  return (
  <>
    <NoteState>
    <Router>
    <Navbar/>

   
   
        <div className="container">
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/about" element={<About/>} />
            
            </Routes>
        </div>
      
     
         </Router>
    
    </NoteState>
       
    </>
  )
}

export default App;
