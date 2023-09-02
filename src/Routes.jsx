import Home from './pages/Home'
import Search from './pages/Search'

const Routes = [
  {
    path: '/',
    element: <Home />,
    menu: 'Home',
    title: 'Latest Comic',
  },
  {
    path: '/search',
    element: <Search />,
    menu: 'Search',
    title: 'Search for a Comic',
  },
]

export default Routes