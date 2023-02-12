import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from "./routes/Index";
import Detail from "./routes/Detail";
import "./css/global.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Index />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
