import './index.css'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const VaccinationCoverage = props => {
  const {details} = props

  return (
    <div className="vaccine-cover-container">
      <h1 className="vaccination-coverage-heading">Vaccination Coverage</h1>
      <ResponsiveContainer
        width="100%"
        height={500}
        className="responsive-container "
      >
        <BarChart
          data={details}
          margin={{
            top: 5,
          }}
          width={1000}
          height={300}
        >
          <XAxis
            dataKey="vaccineDate"
            tick={{
              stroke: 'gray',
              strokeWidth: 1,
            }}
          />
          <YAxis
            tickFormatter="1000"
            tick={{
              stroke: 'gray',
              strokeWidth: 0,
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />
          <Bar dataKey="dose1" name="Dose1" fill="#5a8dee" barSize="20%" />
          <Bar dataKey="dose2" name="Dose2" fill="#f54394" barSize="20%" />
        </BarChart>
      </ResponsiveContainer>{' '}
    </div>
  )
}

export default VaccinationCoverage
