import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Main from "./routes/Main"
import Detail from "./routes/Detail"
import "./css/global.css"

function App() {

  return <BrowserRouter>
    <Switch>
      <Route path="/movie/:id" >
        <Detail />
      </Route>
      <Route path="/">
        <Main />
      </Route>
    </Switch>
  </BrowserRouter>;
}

export default App;
