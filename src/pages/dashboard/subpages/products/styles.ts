import styled from 'styled-components'

export const AppContainer = styled.div`
  margin-left: 20px;
  margin-right: 20px;

  .TitlePage {
    color: #212121;
    font-family: Sora;
    font-size: 32px;
    font-weight: 600;
    line-height: 48px;
    margin-bottom: 2;
  }
  .filter {
    display: flex;
    gap: 10px;
    align-items: center;
    height: 60px;
    margin-bottom: 20px;

    .iconPageProducts {
      position: relative;
      img {
        width: 24px;
        height: 24px;
        cursor: pointer;
        padding: 10px;
        border-radius: 10px;
        background-color: #f5f5f5;
      }
    }
    .containerFilter {
      position: absolute;
      left: -10px;
      z-index: 9999;
    }
  }
  .status_high,
  .status_low {
    display: inline-flex;
    width: 100px;
    height: 17px;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    font-weight: 400;
    font-family: Poppins;
    font-size: 16px;
    line-height: 24px;
  }
  .status_high {
    background-color: #d9fee6;
    color: #00c247;
  }
  .status_low {
    background-color: #ffe1e1;
    color: #ff3333;
  }
  .columnNameTable {
    width: 100%;
    text-align: left;
    display: flex;
    align-items: center;
    padding-left: 215px;
  }
  .id_column {
    width: 10%;
  }
  .produto-column {
    width: 30%;
  }
  .containerPaginationTable {
    background-color: #fafafa;
    margin-top: 10px;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      margin-right: 50px;
      margin-left: 50px;
    }
    .span-left {
      display: flex;
      gap: 10px;
      color: #9e9e9e;
      font-size: 14px;
      font-family: Poppins;
      line-height: 19.6px;
      font-weight: 400;
    }
    .span-right {
      display: flex;
      height: 100%;
      align-items: center;
      gap: 10px;
      color: #9e9e9e;
      font-size: 14px;
      font-family: Poppins;
      line-height: 19.6px;
      font-weight: 400;

      .pages-select {
        display: flex;
        gap: 10px;
        height: 100%;
        align-items: center;

        .selected {
          background-color: #001c98;
          padding: 4px 9px;
          border-radius: 10%;
        }
        .page_number {
          color: #9e9e9e;
          font-size: 14px;
          font-family: Poppins;
          line-height: 19.6px;
          font-weight: 400;
        }
      }
    }
    img {
      cursor: pointer;
    }
  }
  table {
    tbody {
      tr {
        td {
          padding: 0;
        }
      }
    }
  }
`
