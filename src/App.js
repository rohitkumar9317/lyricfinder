import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import Index from "./components/Index";
import Navbar from "./components/Navbar";
import { configureStore } from "./store";
import Lyrics from "./components/Lyrics";
class App extends Component {
  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/lyrics/track/:id" component={Lyrics} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
