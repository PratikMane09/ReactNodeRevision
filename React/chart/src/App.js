import Chart from "react-apexcharts";

import { useState } from 'react';

function App() {
  const[chartstate,setchartstate]=useState(
    {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        },
        
          // colors: ['#546E7A', '#E91E63']
        
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        },
        {
          name: "series-2",
          data: [30, 50, 55, 50, 45, 90, 70, 81]
        }
      ]
    }
  
  )
  return (
    <div className="App">
     <Chart
              options={chartstate.options}
              series={chartstate.series}
              type="bar"
              width="500"
            />
    </div>
  );
}

export default App;
