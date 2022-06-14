import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Card from './components/Card'
import Data from './data'

// - img ("katie-zaferes.png")
// - rating ("5.0")
// - reviewCount (6)
// - location (Whatever you want)
// - title ("Life Lessons with Katie Zaferes")
// - price (136)

function App (){
  const cardData = Data.map(item => {
    return <Card key={item.id} item={item} />
  })
  return(
    <div>
      <Navbar />
      <Header />
      <div className='cards-list'>
        {cardData}
      </div>
    </div>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Header />
//       <Card 
//         images = {require ("./images/katie-zaferes.png")}
//         state = {"SOLD OUT"}
//         rating = {5.0}
//         reviewCount = {6}
//         country = {"USA"}
//         title = {"Life Lessons with Katie Zaferes"}
//         price = {136}
//       />
//     </div>
//   );
// }

export default App;
