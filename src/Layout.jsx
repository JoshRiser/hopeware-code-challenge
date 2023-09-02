import { useLocation, Outlet } from 'react-router-dom';
import Routes, { getRoute } from './Routes'
import classnames from 'classnames'

function Layout() {
  const location = useLocation();
  const currentRoute = getRoute(location.pathname)
  return (
    <>
      <nav role="menu">
        <ul className="menu">
          {Routes.map((route, i) => 
            <li key={i} className={classnames(['menu-item', (location.pathname == route.path ? 'menu-item--current' : null)])}>
              <a href={route.path}>{route.menu}</a>
            </li>
          )}
        </ul>
      </nav>
      <main role="content">
        <h1 className="content-title">{currentRoute.title}</h1>
        <div className="content-body">
          <Outlet />
        </div>
      </main>
    </>
  )
}

export default Layout
