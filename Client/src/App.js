import "./App.css";
import NavBar from './Components/NavBar';
import { BrowserRouter,Route,Switch } from "react-router-dom";
import About from "./Components/About";
import { Contact } from "./Components/Contact";
import { Terms } from "./Components/Terms";
import TopBar from "./Components/TopBar";
import HomeScreen from "./Screens/HomeScreen";
function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <TopBar />
    <Switch>
      <Route path="/about" component={About} exact/>
      <Route path="/contact" component={Contact} exact/>
      <Route path="/policy" component={Terms} exact/>
      <Route path="/" component={HomeScreen} exact/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
