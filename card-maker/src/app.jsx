import Login from "./components/login/login";
import styles from "./app.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Maker from "./components/maker/maker";

function App({ FileInput, authService, cardRepository }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService}></Login>
          </Route>
          <Route path="/maker">
            <Maker
              authService={authService}
              FileInput={FileInput}
              cardRepository={cardRepository}
            ></Maker>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
