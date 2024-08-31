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
    margin-bottom: 0px;
    font-family: Sora, Poppins;
  }
  .container_cards {
    display: flex;
    justify-content: space-around;
  }
  .content_top {
    display: flex;
    align-items: center;
    width: 100%;
    height: 20%;
    padding-bottom: 20px;
    justify-content: space-between;

    img {
      margin-top: 30px;
      margin-right: 20px;
    }
  }
`

export const ContainerTables = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
  justify-content: center;
  height: 546px;
  margin-top: 10px;
  overflow-y: scroll;

  table {
    width: 41vw;
    thead {
      width: 20px;
    }
    th {
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
  @media (min-width: 1400px) {
    gap: 50px;
  }
  .columnNameTable {
    width: 100%;
    text-align: left;
    display: flex;
    align-items: center;
    padding-left: 70px;
  }

  .id_column {
    width: 10%;
  }
  .client-column,
  .produto-column {
    width: 30%;
  }
  .percentege-column {
    width: 60%;
  }
`
