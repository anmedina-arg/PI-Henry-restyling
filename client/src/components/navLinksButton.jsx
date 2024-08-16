import { NavLink } from "react-router-dom";

export default function NavLinkButton({label, to}) {
  return <NavLink className="item_navbar" to={to}>{label}</NavLink>
}