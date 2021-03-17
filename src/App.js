import { Redirect, Route, Switch } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import navigation from "./utils/navigation";
import "./App.css";

function App() {
  return (
    <>
      <NavMenu />
      <Switch>
        {navigation.map(({ path, component, exact }) => (
          <Route key={path} path={path} exact={exact} component={component} />
        ))}

        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
