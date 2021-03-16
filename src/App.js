import { Redirect, Route, Switch } from "react-router-dom";
import navigation from "./utils/navigation";

function App() {
  return (
    <>
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
