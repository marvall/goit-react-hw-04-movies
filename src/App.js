import { Redirect, Route, Switch } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import navigation from "./utils/navigation";
import "./sass/reset.scss";

function App() {
  return (
    <>
      <NavMenu />

      {navigation.map(({ path, component, exact }) => (
        <Route key={path} path={path} exact={exact} component={component} />
      ))}

      <Redirect to="/" />
    </>
  );
}

export default App;
