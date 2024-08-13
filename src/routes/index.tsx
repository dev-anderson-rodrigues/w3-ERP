import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from '../pages/login'
import Dashboard from '../pages/dashboard'
import ProtectRoute from '../components/protect_routes'
import NotFound from '../pages/notFound'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />}/>
        <Route element={<ProtectRoute />}>
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
            <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes