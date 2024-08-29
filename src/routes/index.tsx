import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Login from '../pages/login'
import Dashboard from '../pages/dashboard'
import ProtectRoute from '../components/Protect_routes'
import NotFound from '../pages/notFound'
import TemplateDashboard from '../pages/dashboard/subpages/dashboard'
import Login from '../pages/login'
import GetById from '../components/Get_By_Id'
// import Get_By_Id from '../components/Get_By_Id'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route element={<ProtectRoute />}>
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<TemplateDashboard />} />
            <Route
              path="Predictions"
              element={<h1>aqui esta o componente</h1>}
            />
            <Route
              path="products"
              element={<h1>aqui esta o componente de produtos</h1>}
            />
            <Route path="product/:id" element={<GetById />} />
            <Route path="client/:id" element={<GetById />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
