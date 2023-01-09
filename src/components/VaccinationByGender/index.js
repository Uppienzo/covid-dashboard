import './index.css'

import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const VaccinationByGender = props => {
  const {details} = props
  console.log(details)

  return (
    <div className="vaccine-gender-container">
      <h1 className="vaccination-gender-heading">Vaccination by gender</h1>
      <ResponsiveContainer
        width="100%"
        height={300}
        className="responsive-gender-container"
      >
        <PieChart className="align">
          <Pie
            cx="50%"
            cy="50%"
            data={details}
            startAngle={180}
            endAngle={0}
            innerRadius="50%"
            outerRadius="100%"
            dataKey="count"
          >
            <Cell name="Male" fill="#2cc6c6" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill="#f5439e" />
          </Pie>

          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByGender
