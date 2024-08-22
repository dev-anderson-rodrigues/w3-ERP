import styled from 'styled-components'

export const ContainerBlue = styled.div`
  display: flex;
  flex-direction: column;
  height: 220px;
  background-color: #001c98;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 24px;

  h4 {
    color: #ffffff;
    margin-left: 20px;
    font-size: 25px;
    font-weight: 600;
    margin-left: 20px;
    margin-top: 25px;
    margin-bottom: 0px;
    font-family: Sora, Poppins;
  }
  .container_cards {
    display: flex;
    margin-left: 20px;
    margin-right: 20px;
    justify-content: space-around;
  }
`

export const ContainerTables = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;

  table {
    th {
      width: 50vw;
      max-width: 50vw;
    }
  }
  .table {
    .name_and_filter {
      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        background-color: #c5cfff;
        padding: 15px;
        border-radius: 8px;
      }
    }
    .name_and_filter2 {
      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        background-color: #001c98;
        padding: 15px;
        border-radius: 8px;
      }
    }
  }
`
