import './App.css'
import Header from './components/Header'
import Footer from './components/footer'
import SearchBar from './components/searchBar'
import React, {useState} from 'react'

function App() {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <Header />
      <SearchBar value={searchText} onValueChange={setSearchText}/>
      <Footer />
    </>
  )
}

export default App;