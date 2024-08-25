// import { Outlet } from 'react-router-dom'
import { Container } from './styles'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import { Outlet } from 'react-router-dom'
// import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <Container>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content_pages">
        <Header />
        <Outlet />
      </div>
    </Container>
  )
}

export default Dashboard
