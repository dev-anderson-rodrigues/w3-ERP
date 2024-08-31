import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/dashboard'
import ProtectRoute from '../components/Protect_routes'
import NotFound from '../pages/notFound'
import ElementIndexDashboard from '../pages/dashboard/subpages/dashboard'
import Login from '../pages/login'
import GetById from '../pages/dashboard/subpages/getById'
import Predictions from '../pages/dashboard/subpages/predictions'
import PredictionById from '../pages/dashboard/subpages/predictions/subpages'
import ProductsPage from '../pages/dashboard/subpages/products'
import RedirectOnRefresh from '../components/RedirectOnRefresh'

const AppRoutes = () => {
  return (
    <Router>
      <RedirectOnRefresh />
      <Routes>
        <Route index element={<Login />} />
        <Route element={<ProtectRoute />}>
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<ElementIndexDashboard />} />
            <Route path="predictions">
              <Route index element={<Predictions />} />
              <Route path=":id" element={<PredictionById />} />
            </Route>
            <Route path="products" element={<ProductsPage />} />
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
