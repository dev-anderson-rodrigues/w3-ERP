import InputFilter from '../../../../components/InputFilter'
import { AppContainer } from './styles'
import iconFilter from '../../../../assets/icons/filter.png'
import TableComponent from '../../../../components/Table'
import { useProduct } from '../../../../context/Products/useProducts'
import { useRef, useState } from 'react'
import iconChevronLeft from '../../../../assets/icons/chevron left.png'
import iconChevronRight from '../../../../assets/icons/chevron right.png'

const ProductsPage = () => {
  const productRef = useRef(0)
  const { products } = useProduct()
  const [page, setPage] = useState(0)
  const rowsPerPage = useRef(9)

  const formatPercentage = (percentage: number | undefined) => {
    if (typeof percentage === 'number' && !isNaN(percentage)) {
      const formattedPercentage = percentage * 100
      return {
        formatted: `${formattedPercentage.toFixed(2)}%`,
        value: formattedPercentage,
      }
    }
    return { formatted: '0.00%', value: 0 }
  }

  const sortedProducts = products
    ? [...products]
        .filter((product) => product.id !== 0)
        .sort((a, b) => {
          const idA = Number(a.id)
          const idB = Number(b.id)

          return productRef.current === 0 ? idA - idB : idB - idA
        })
    : []

  // Função para ir para a página anterior
  const goToPreviousPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 0))
  }

  // Função para ir para a próxima página
  const goToNextPage = () => {
    setPage((prevPage) =>
      Math.min(
        prevPage + 1,
        Math.ceil(products!.length / rowsPerPage.current) - 1,
      ),
    )
  }
  // Produtos para exibir na página atual
  const currentProducts = sortedProducts
    .slice(
      page * rowsPerPage.current,
      page * rowsPerPage.current + rowsPerPage.current,
    )
    .map((item) => {
      const { formatted, value } = formatPercentage(item.percentage)

      return {
        ID: item.id,
        Produto: <div className="columnNameTable">{item.name}</div>,
        Status:
          value > 0 ? (
            <span className="status_high">Em alta</span>
          ) : (
            <span className="status_low">Em baixa</span>
          ),
        Percentual: formatted,
      }
    })
  // Número total de páginas
  const totalPages = Math.ceil(products!.length / rowsPerPage.current)

  // Páginas de visualização (4 páginas em torno da página atual)
  const getPaginationPreview = () => {
    const previewPages = []
    const maxPagesToShow = 4
    // const start = Math.max(page - 0, 0)
    // const end = Math.min(page + 3, totalPages - 1)

    // Define o início e o fim da faixa de páginas a ser exibida
    const start = Math.max(page - Math.floor(maxPagesToShow / 2), 0)
    const end = Math.min(start + maxPagesToShow - 1, totalPages - 1)
    // for (let i = start; i <= end; i++) {
    //   previewPages.push(i + 1)
    // }

    // Ajusta o início se a faixa ultrapassar o total de páginas
    const adjustedStart = Math.max(end - maxPagesToShow + 1, 0)
    // Adiciona todas as páginas de 1 até o total de páginas
    // Adiciona as páginas à lista
    for (let i = adjustedStart; i <= end; i++) {
      previewPages.push(i + 1)
    }
    return previewPages
  }

  const currentPreviwsPerPage = getPaginationPreview()
  return (
    <AppContainer>
      <h4 className="TitlePage">Produtos</h4>

      <div className="filter">
        <InputFilter />
        <div className="iconPageProducts">
          <img src={iconFilter} />
        </div>
      </div>

      <TableComponent
        columns={[
          { header: 'ID', className: 'id_column' },
          { header: 'Produto', className: 'produto-column' },
          { header: 'Status' },
          { header: 'Percentual' },
        ]}
        data={currentProducts}
      />
      <div className="containerPaginationTable">
        <span className="span-left">
          {page * rowsPerPage.current + currentProducts.length} <div>de</div>{' '}
          {products!.length} <div>itens</div>
        </span>

        <span className="span-right">
          <div>
            <img
              src={iconChevronLeft}
              alt="Previous"
              onClick={goToPreviousPage}
            />
          </div>
          <div className="pages-select">
            {currentPreviwsPerPage.map((item) => (
              <div
                key={item}
                className={`page_number ${page === item - 1 ? 'selected' : ''}`}
                onClick={() => setPage(item - 1)}
                style={{ cursor: 'pointer' }}
              >
                {item}
              </div>
            ))}
          </div>
          <div>
            <img src={iconChevronRight} alt="Next" onClick={goToNextPage} />
          </div>
        </span>
      </div>
    </AppContainer>
  )
}

export default ProductsPage
