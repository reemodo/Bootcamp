import { Home } from './compmnents/Home';
import './App.css';
import { Landing } from './compmnents/Landing';
import { useState } from 'react';
const user = "Robyn"
const store = [
  { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
  { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
  { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
]
function findHottest(store) {
  return store.find(item => item.hottest === true)
}
function showPage(currentPage, shouldDiscount, updateShouldDiscount) {
  if (currentPage === "Landing") {
    return <Landing user={user} hottestItem={findHottest(store)} />
  }
  return (
    <>
      <h4>Store</h4>
      <Home store={store} shouldDiscount={shouldDiscount} />
      <button onClick={updateShouldDiscount}>showDiscount</button>
    </>
  )
}
function App() {
  const [shouldDiscount, setShouldDiscount] = useState(false)
  const [currentPage, setCurrentPage] = useState("Landing")
  const updateCurrentPage = () => {
    if (currentPage === "Landing")
      setCurrentPage("Home")
    else
      setCurrentPage("Landing")
  }
  const updateShouldDiscount = () => {
    if (shouldDiscount === true)
      setShouldDiscount(false)
    else
      setShouldDiscount(true)
  }

  return (
    <>
      {/* ex1
      <Landing user= {user} hottestItem={findHottest(store)}/>
     <hr></hr>
     <h4>Store</h4>
      <Home store={store}/> */}
      {showPage(currentPage, shouldDiscount, updateShouldDiscount)}
      <button onClick={updateCurrentPage}>Change your page</button>

    </>

  );
}

export default App;
