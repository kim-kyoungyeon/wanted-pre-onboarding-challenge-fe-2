import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ToDoList from './components/ToDoList';
import GlobalStyle from './styles/Global';
function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact>
            <ToDoList />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
