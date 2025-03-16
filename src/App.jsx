import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Homepage from './views/Homepage.jsx'
import Aboutpage from './views/Aboutpage.jsx' 
import Contact from './views/Contact.jsx'       
import Loginpage from './views/Loginpage.jsx' 
import Registerpage from './views/Registerpage.jsx'   

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Loginpage/>}/>
      <Route path='/registerpage' element={<Registerpage/>}/>
      <Route path='/homepage' element={<Homepage/>}/>
      <Route path='/aboutpage' element={<Aboutpage/>}/>
      <Route path='/contact' element={<Contact/>}/>
      
     </Routes>
    </BrowserRouter>
  )
}

export default App
