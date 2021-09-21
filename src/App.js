import Header from './Components/Header';
import Gallery from './Components/Gallery';
import { useState } from "react";
import './App.css';

function App() {

  const [searchTerm, setSearchTerm] = useState("sun");

  return(
    <div className="app">
      <Header setSearchTerm={setSearchTerm} />
      <Gallery searchQuery={searchTerm} />
    </div>
  )
  
  
}

export default App;

// Make responsive
// Add loading state (component)
// Clean up console log
