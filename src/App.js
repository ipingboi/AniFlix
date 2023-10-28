import { Header, Footer } from './components';
import { Details } from './pages'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className="App">
      <Header />
      <Details />
      <Footer />
    </div>
  );
}


export default App;