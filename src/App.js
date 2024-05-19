import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Domain from './pages/domain/Domain';
import Pharma from './pages/domain/Phrama';
import Welfare from './pages/domain/Welfare';
import Defence from './pages/domain/Defence';
import Logistics from './pages/domain/Logistics';
import Product1 from './pages/products/Product1';
import Product2 from './pages/products/Product2';
import Product3 from './pages/products/Product3';
import Product4 from './pages/products/Product4';
import Product5 from './pages/products/Product5';
import Product6 from './pages/products/Product6';
import Team from './pages/Team';
import Pricing from './pages/Pricing';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        
        <div className="App">
          <Navbar/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/about' element={<About/>} />
            <Route exact path='/blog' element={<Blog/>} />
            <Route exact path='/contact' element={<Contact/>}/>
            <Route exact path='/domain' element={<Domain/>}/>
            <Route exact path='/domain/pharma' element={<Pharma/>}/>
            <Route exact path='/domain/welfare' element={<Welfare/>}/>
            <Route exact path='/domain/defence' element={<Defence/>}/>
            <Route exact path='/domain/logistics' element={<Logistics/>}/>
            <Route exact path='/pricing' element={<Pricing/>}/>
            <Route exact path='/products/ev-l3' element={<Product1/>}/>
            <Route exact path='/products/ev-l5' element={<Product2/>}/>
            <Route exact path='/products/tcb' element={<Product3/>}/>
            <Route exact path='/products/tcpb' element={<Product4/>}/>
            <Route exact path='/products/sscb' element={<Product5/>}/>
            <Route exact path='/products/smart-reefer' element={<Product6/>}/>
            <Route exact path='/team' element={<Team/>} />
          </Routes>
          <Footer/>
        </div>
        
      </Router>
    </>
  );
}

export default App;
