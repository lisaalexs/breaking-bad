import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './assets/styles/style.scss';
import HomePage from './components/pages/homePage';
import CharactersListPage from './components/pages/charactersListPage/index';
import CharacterPage from './components/pages/characterPage/index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/list" component={CharactersListPage} />
        <Route path="/character" component={CharacterPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
