import styled from 'styled-components'

export const TableWrapper = styled.div`
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  overflow: hidden;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;

  thead {
    width: 100%;
    background-color: #001c98;
    height: 40px;

    tr {
      color: #c5cfff;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.2px;
      font-weight: 600;
      font-family: Poppins;
    }
  }
  th {
    min-width: 130px;
  }
  td {
    text-align: center;
    padding: 10px;
    color: #212121;
    font-size: 16px;
    font-weight: 400;
    font-family: Poppins;
    /* cursor: pointer; */
  }
  tbody {
    tr:hover {
      background-color: #c5cfff;
    }
    tr {
      position: relative;
      height: 50px;
      transition: background-color 0.3s ease;

      .badge {
        position: absolute;
        top: 47%; /* Vertical center */
        right: 1%; /* Horizontal center */
        transform: translate(-50%, -50%); /* Center the badge */
        width: 20px; /* Adjust size as needed */
        height: 20px; /* Adjust size as needed */
        z-index: 1; /* Ensure badge is above other content */
      }
    }
  }
`
