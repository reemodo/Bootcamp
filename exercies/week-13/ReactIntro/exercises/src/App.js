import logo from './logo.svg';
import './App.css';
// let companies = [
//   { name: "Tesla", revenue: 140 },
//   { name: "Microsoft", revenue: 300 },
//   { name: "Google", revenue: 600 }
// ]
// function App() {
//   const showCompany = (name, revenue) => { 
//     return  <div id={name}>{name} makes {revenue} every year</div>
//   }

//   return (
//     <div className="ex-space">
//       <h4 className='ex-title'>Exercise 1</h4>
//       <div className="exercise" id="ex-1">
//         {companies.map(comp => showCompany(comp.name,comp.revenue))}
//       </div>
//     </div>
//   )
// }
function App() {
  const getClassName = (temperature) => {
    if (temperature <=  15)
      return <div id="weatherBox" class="freezing"></div>
    else if (temperature >  15 && temperature <= 30)
      return <div id="weatherBox" class="fair"></div>
    else
      return <div id="weatherBox" class="hell-scape"></div>
   }

  return (
    <div className="ex-space">
      <h4 className='ex-title'>Exercise 2</h4>
      <div className="exercise" id="ex-2">
        {getClassName(43)}
      </div>
    </div>
  )
}
export default App;
