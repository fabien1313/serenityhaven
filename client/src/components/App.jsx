import Home from "./Home"
import Dashboard from "./Dashboard"
import Admin from "./Admin"
import background from "../images/background.jpg"



function App() {

  return (
    <div className="app">
      <img src={background} alt="" />
      <Home />
      <Dashboard />
      <Admin />
    </div>
  )
}

export default App
