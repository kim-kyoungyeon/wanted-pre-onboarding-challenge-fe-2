import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <BrowserRouter basename="">
      <Switch>
        <Route path={"/home"} exact>
          <ToDoList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
