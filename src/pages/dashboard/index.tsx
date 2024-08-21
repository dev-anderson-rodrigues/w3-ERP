// import TableComponent from "../../components/Table"

import { Outlet } from "react-router-dom"
import { Container } from "./styles"
import Sidebar from "../../components/Sidebar"
import Header from "../../components/Header"
// import TableComponent from "../../components/Table"

// const columns = ["id","name", "gender", "birth"]
// const data = [{
//   id: 1,
//   name: "John Doe",
//   gender: "male",
//   birth: "1990-01-01",
// }]

const Dashboard = () => {
  return (
    <Container>
      <div className="sidebar">
        <Sidebar/>
      </div>
      <div className="content_pages">
        <Header/>
        <Outlet/>
        {/* <TableComponent columns={columns} data={data}/> */}
      </div>
    </Container>

  )
}

export default Dashboard