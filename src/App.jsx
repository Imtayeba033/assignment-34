
import './App.css'
import Another from './components/another/Another'
import tayeba from "../public/vite.svg"
import ApiFetch from './components/ApiFetch/ApiFetch'

function App() {


  return (
    <div>
      <h1>Hi this is tayeba </h1>
      <img src={tayeba} alt="" />
      <Another></Another>
      <ApiFetch></ApiFetch>
    </div>
    
  )
}

export default App
