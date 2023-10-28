import { Header, Footer } from './components';
import { Details, Home, Search } from './pages'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="App">
      <Header />
        <Details />
        <Home />
        <Search />
      <Footer />
    </div>
  );
}

export default App;