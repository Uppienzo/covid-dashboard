import './index.css'

import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const VaccinationByAge = props => {
  const {details} = props
  console.log(details)

  return (
    <div className="vaccine-gender-container">
      <h1 className="vaccination-gender-heading">Vaccination by age</h1>
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
            startAngle={0}
            endAngle={360}
            innerRadius="0%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name={details[0].age} fill="#64c2a6" />
            <Cell name={details[1].age} fill="#5a8dee" />
            <Cell name={details[2].age} fill="#a3df9f" />
          </Pie>

          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByAge
