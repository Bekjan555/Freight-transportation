import Header from './components/header';
import Hero from './components/hero';
import Transportation from './components/transportation/index.jsx';
import Services from './components/services/index.jsx';
import About from './components/about/index.jsx';
import Map from './components/map/index.jsx';
import Footer from './components/footer/index.jsx';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Transportation />
      <Services/>
      <About/>
      <Map/>
      <Footer/>
    </div>
  );
};

export default App;
