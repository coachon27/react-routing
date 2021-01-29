import './App.css';
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";
import NotFound from "./components/notFound/NotFound";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <p>
        Congratulations! <Welcome name ="Bill" />
        <Clock />
        <Contact />
      </p>    */}
      
        <Navigation />
        <Switch>
        <Route exact path="/" render={(props) => <Welcome {...props} name="Bill"/>} />
          <Route path="/clock" component={Clock} />
          <Route path="/contact" component={Contact} />
          <Route path="/welcome/:name" component={Welcome} />
          <Route component={NotFound} />
        </Switch>
      
    </div>
  );
}

export default App;
