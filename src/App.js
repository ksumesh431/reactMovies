import Movies from './Components/Movies';
import Home from './Components/Home';
import About from './Components/About';
import Nav from './Components/Nav';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/movies" component={Movies} />
        <Route path="/about" render={(props)=>(
          <About {...props} randomProp={true} />
        )} />
      </Switch>
    </Router>
  );
}

export default App;
//route matches every path
//switch stops rendering after 1st successful match of path