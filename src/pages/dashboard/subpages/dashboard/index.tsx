import CardsGraphic from '../../../../components/Cards_graphic'
import FilterBar from '../../../../components/Filter_Button'
import TableComponent from '../../../../components/Table'
import icon1 from '../../../../assets/icons/Vector3.png'
import icon2 from '../../../../assets/icons/every-user.png'
import { ContainerBlue, ContainerTables } from './styles'
import { useEffect, useState } from 'react'
import NameTable from '../../../../components/Name_Table'

const TemplateDashboard = () => {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/products')
        const result = await response.json()
        setData(() => result) // Salvando diretamente o objeto no estado
        console.log('aqui', data)
      } catch (error) {
        console.error('Erro ao buscar dados:', error)
      }
    }

    fetchData()
  }, [])

  const tableData = data.map((item: any) => ({
    ID: item.id, // ID
    Produto: item.name, // Produto
    Percentual: `${(item.percentage * 100).toFixed(2)}%`, // Percentual
  }))

  tableData.length = 11
  return (
    <div>
      <ContainerBlue>
        <div>
          <h4>Dashboard</h4>
        </div>
        <div className="container_cards">
          <CardsGraphic
            text="Total produtos em alta"
            percentageGraphic={80}
            value={120}
            porcetage="+13%"
          />
          <CardsGraphic
            text="Total produtos em baixa"
            percentageGraphic={20}
            value={56}
            porcetage="+29%"
          />
          <CardsGraphic
            text="Total clientes em alta"
            percentageGraphic={72}
            value={501}
            porcetage="+25%"
          />
          <CardsGraphic
            text="Total clientes em baixa"
            percentageGraphic={28}
            value={102}
            porcetage="+15%"
          />
        </div>
      </ContainerBlue>
      {data.length > 0 ? (
        <ContainerTables>
          <div className="table">
            <div className="name_and_filter">
              <NameTable text="Produtos" img={icon1} />
              <FilterBar initialState="baixa" />
            </div>
            <TableComponent
              columns={['ID', 'Produto', 'Percentual']}
              data={tableData}
            />
          </div>
          <div className="table">
            <div className="name_and_filter2">
              <NameTable text="Clientes" img={icon2} />
              <FilterBar initialState="baixa" />
            </div>
            <TableComponent
              columns={['ID', 'Produto', 'Percentual']}
              data={tableData}
            />
          </div>
        </ContainerTables>
      ) : (
        <p style={{ paddingLeft: '20px' }}>Carregando dados...</p>
      )}
    </div>
  )
}

export default TemplateDashboard
