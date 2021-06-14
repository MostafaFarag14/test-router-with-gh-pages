import { Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() => <div>Home</div>} />
        <Route exact path='/about' render={() => <div>About</div>} />
        <Route render={() => <div>Not Found</div>} />
      </Switch>
    </div>
  );
}

export default App;
