import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

/* import router in here */
import IDERouter from './routers/IDE-Rotuer';

/* import config files in here */
import reducers from './reducers';

/* import static files in here */
import './App.scss';

const store = createStore(reducers)

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <p>공사중입니다. 여긴 메인 페이지가 될듯싶사옵니다 ㅎㅎ</p>
          </Route>
          <Route exact path="/projects">
            <p>공사중입니다. 여긴 프로젝트 선택 페이지가 될듯싶사옵니다 ㅎㅎ</p>
          </Route>
          <Route exact path="/ide">
            <IDERouter/>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
