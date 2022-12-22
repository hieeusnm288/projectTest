import "./App.scss";
import TableUser from "./componemt/TableUser";
import { Switch, Router, Route } from "react-router-dom";
import UpdateUser from "./componemt/UpdateUsers";
import { createBrowserHistory } from "history";
import { _student } from "./utils/Settings/configPath";
export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={TableUser} />
        <Route path={`${_student}/:id`} exact component={UpdateUser} />
      </Switch>
    </Router>
  );
}

export default App;
