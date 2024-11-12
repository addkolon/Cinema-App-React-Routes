import { NavLink } from "react-router-dom"

export default function Header() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/oneMovie" activeClassName="active">
              One Movie
            </NavLink>
          </li>
          <li>
            <NavLink to="/myProfile" activeClassName="active">
              My profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}
