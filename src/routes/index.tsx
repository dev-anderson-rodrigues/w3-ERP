import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from '../pages/login'
import Dashboard from '../pages/dashboard'
import ProtectRoute from '../components/Protect_routes'
import NotFound from '../pages/notFound'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />}/>
        <Route element={<ProtectRoute />}>
              <Route path="dashboard" element={<Dashboard />}>
                <Route index element={<h1>aqui esta o componente dashboard</h1>}/>
                <Route path="predicoes" element={<h1>aqui esta o componente</h1>}/>
                <Route path="produtos" element={<h1>aqui esta o componente de produtos</h1>}/>
              </Route>
          </Route>
            <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes