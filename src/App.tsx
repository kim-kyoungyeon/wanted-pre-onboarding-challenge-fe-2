import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <Router>
      <Switch>
        <Route  path='/'>
          <ToDoList />
     </Route>
      </Switch>
    </Router>
  );
}

export default App;
