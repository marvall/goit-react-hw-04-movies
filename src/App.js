import { Redirect, Route } from "react-router-dom";
import { Suspense } from "react";
import NavMenu from "./components/NavMenu";
import navigation from "./utils/navigation";
import "./sass/reset.scss";

function App() {
  return (
    <>
      <NavMenu />
      <Suspense fallback={<div>Loading...</div>}>
        {navigation.map(({ path, component, exact }) => (
          <Route key={path} path={path} exact={exact} component={component} />
        ))}
      </Suspense>
      <Redirect to="/" />
    </>
  );
}

export default App;
