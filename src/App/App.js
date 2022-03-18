import '../CSS/App.css';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import Section from '../Component/Section/Section';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Section />
      <Footer />
    </Router>
  );
}

export default App;
