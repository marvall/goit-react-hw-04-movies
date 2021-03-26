import { Redirect, Route, Switch } from "react-router-dom";
import { Suspense } from "react";
import NavMenu from "./components/NavMenu";
import { navApp } from "./utils/navigation";
import "./sass/reset.scss";

function App() {
  return (
    <>
      <NavMenu />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {navApp.map(({ path, component, exact }) => (
            <Route key={path} path={path} exact={exact} component={component} />
          ))}
        </Switch>
        <Redirect to="/" />
      </Suspense>
    </>
  );
}

export default App;
