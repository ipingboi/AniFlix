import { AllRoutes } from './routes/AllRoutes';
import { Header, Footer } from './components';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="App">
      <Header />
        <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
