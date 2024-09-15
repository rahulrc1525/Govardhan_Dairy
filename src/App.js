
import './App.css';
import {Routes,Route} from 'react-router-dom';



//react slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Homepage from './pages/home';

//pages

function App() {
  return (
    <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/about_us" element={<about_us_page/>}/>
    
    
    </Routes>


  );
}

export default App;
