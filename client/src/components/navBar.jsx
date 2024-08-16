import { Outlet } from "react-router"
import "../styles/navbar.css"
import NavLinkButton from "./navLinksButton";

export default function NavBar() {
  return (
    <>
      <nav className="nav_bar_container">
        <NavLinkButton to='/' label='landing'/>
        <NavLinkButton to='/home' label='Home'/>
        <NavLinkButton to='/addactivity' label='Activity'/>
      </nav>
      <Outlet/> 
    </>
  )
}

/*
Después de los enlaces de navegación, hay un componente <Outlet/>. Este componente proviene de la versión más reciente de react-router. Su función es renderizar el contenido de las rutas secundarias que coinciden con la ruta actual.
Este fragmento indica que cualquier ruta secundaria anidada bajo la ruta actual (en este caso, las rutas especificadas en los NavLinkButton) se renderizará en el lugar donde se coloca el componente Outlet. Es decir, el contenido de las rutas secundarias se insertará en este punto específico de tu interfaz de usuario.

El componente Outlet es especialmente útil cuando trabajas con rutas anidadas y quieres modularizar y organizar tu aplicación de manera más limpia y jerárquica. Permite que las rutas secundarias se integren de manera natural en la jerarquía de tu interfaz de usuario sin tener que preocuparte demasiado por dónde renderizar su contenido.
*/