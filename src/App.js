import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//komponentler buraya gelecek
import Navbar from './components/Navbar'
import Header from './components/Header'

function App() {
  return (
    // React fragment
    <>
    <Navbar/>
    <Header/>
    </>
  );
}

export default App;
