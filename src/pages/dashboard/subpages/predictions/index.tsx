import CardsPredictions from '../../../../components/Cards_predictions'
import Input from '../../../../components/Input'
import { AppContainer } from './styles'

const Predictions = () => {
  return (
    <AppContainer>
      <h4 className="title">Predições</h4>

      <div className="containerFilter">
        <Input
          placeholder="Pesquise uma palavra-chave"
          sx={{
            '& .MuiOutlinedInput-root': {
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
              border: '1px solid #E0E0E0',
              borderRadius: '20px',
              padding: '0 10px',
              width: '400px',
            },
            '& .MuiInputBase-input': {
              color: '#757575',
              fontSize: '16px',
              fontWeight: '400',
              fontFamily: 'Poppins',
              padding: '10px',
              lineHeight: '24px',
            },
          }}
        />
      </div>

      <div className="containerCards">
        <CardsPredictions />
        <CardsPredictions />
        <CardsPredictions />
        <CardsPredictions />
        <CardsPredictions />
        <CardsPredictions />
        <CardsPredictions />
        <CardsPredictions />
        <CardsPredictions />
        <CardsPredictions />
        <CardsPredictions />
        <CardsPredictions />
        <CardsPredictions />
        <CardsPredictions />
      </div>
    </AppContainer>
  )
}

export default Predictions
