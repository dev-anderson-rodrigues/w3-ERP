import Chart from 'react-apexcharts'
import { ChartWrapper } from './styles'

export type RadialBarProps = {
  percentageGraphic: number
}

const RadialBarDasboard = ({ percentageGraphic }: RadialBarProps) => {
  const defaultOptions: ApexCharts.ApexOptions = {
    fill: { colors: ['#796CE0'] }, // Cor azul2
    grid: { padding: { top: 0, left: 0, right: 0, bottom: 0 } },
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        hollow: { size: '45%' },
        track: { background: '#000E4D' }, // Cor azul4
        dataLabels: {
          name: { show: false },
          value: {
            offsetY: 5,
            fontSize: '14px',
            color: '#FFFFFF', // Cor branca
            fontWeight: '400',
            fontFamily: 'Poppins',
          },
        },
      },
    },
  }

  return (
    <ChartWrapper>
      <Chart
        series={[percentageGraphic]}
        options={defaultOptions}
        type="radialBar"
      />
    </ChartWrapper>
  )
}

export default RadialBarDasboard
