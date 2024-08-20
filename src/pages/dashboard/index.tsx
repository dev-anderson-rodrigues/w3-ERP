// import TableComponent from "../../components/Table"

import { Outlet } from "react-router-dom"
import { Container } from "./styles"
import Sidebar from "../../components/Sidebar"

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
        <Outlet/>
      </div>
      {/* <TableComponent columns={columns} data={data}/> */}
    </Container>

  )
}

export default Dashboard