import { NavLink } from "react-router-dom";
import Style from "./NavMenu.module.scss";
function NavMenu() {
  return (
    <>
      <div className={Style.nav__menu}>
        <NavLink
          exact
          to="/"
          activeClassName={Style.nav__link_active}
          className={Style.nav__link}
        >
          HOME
        </NavLink>
        <NavLink
          to="/movies"
          activeClassName={Style.nav__link_active}
          className={Style.nav__link}
        >
          MOVIES
        </NavLink>
      </div>
    </>
  );
}

export default NavMenu;
