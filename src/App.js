import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './assets/styles/style.scss';
import HomePage from './components/pages/homePage';
import CharacterPage from './components/pages/charachterPage/component';
import CharactersListPage from './components/organisms/CardList/component';

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
