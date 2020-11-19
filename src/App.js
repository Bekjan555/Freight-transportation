import Header from './components/header';
import Hero from './components/hero';
import Transportation from './components/transportation/index.jsx';
import Services from './components/services/index.jsx';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Transportation />
      <Services/>
    </div>
  );
};

export default App;
