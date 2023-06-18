import './App.css'
import Header from './components/Header'
import FoodType from './components/foodType'
import Footer from './components/footer'
import MapComponent from './components/map'
import SearchBar from './components/searchBar'
import React, {useState} from 'react'

function App() {
  const [searchText, setSearchText] = useState("");
  const [login, setLogin] = useState(false)

  return (
    <>
      <Header login={login}/>
      {/* <SearchBar value={searchText} onValueChange={setSearchText}/> */}
      <Footer />
      <h2>Recommended Types</h2>
      <FoodType />
      <MapComponent />
    </>
  )
}

export default App;