import logo from './logo.svg';
import './App.css';
import { Company } from './Components/Company';
import { Wardrobe } from './Components/Wardrobe';
function upperCase(name){
  return name.charAt(0).toUpperCase() + name.slice(1)
  
}
function generateCompanyTags(companies){
  let companyTags = []
    for (let c of companies) {
      companyTags.push(<Company name={upperCase(c.name)} revenue={c.revenue} />)
    }
  return companyTags
}
function App() {
  let companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 }]
  // return (
  //   <div>
  //     {generateCompanyTags(companies)}
  //   </div>
  // )
  return <Wardrobe />
}

export default App;
