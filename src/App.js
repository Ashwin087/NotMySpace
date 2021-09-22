import Header from './Components/Header';
import Gallery from './Components/Gallery';
import Footer from './Components/Footer';
import { useState } from "react";
import './App.css';

function App() {

  const [searchTerm, setSearchTerm] = useState("sun");

  return(
    <div className="app">
      <Header setSearchTerm={setSearchTerm} />
      <Gallery searchQuery={searchTerm} />
      <Footer />
    </div>
  )
  
  
}

export default App;

// style header
// fix error screen
