import Piechart from "./piechart";
import BarChart from "./barChart";
import UseFetch from "../hooks/useFetch";
import LineChartWithXAxisPadding from "./lineChart";
import  { useEffect,useState } from 'react'


const Dashboard = () => {
  const url = import.meta.env.VITE_timeTracker_api
  const [dat, error, loading] = UseFetch(url, [],[])
  const [pieChartData, setPieChartData] = useState([]);
  const [barChartData, setBarChartData] = useState([])

  useEffect(() => {
      
      if(!loading) {
         const sortedData = dat.data.sort((a, b) => {
              if((a.endTime - a.startTime) > (b.endTime - b.startTime)){
                  return -1
              }
              return 1
          }).map((entry) => {
              return {
                  name: entry.title ? entry.title : "untitled",
                  value: Number((((entry.endTime - entry.startTime) / 1000) / 60).toFixed(1))
              }
          })
          setPieChartData(sortedData.slice(0, 4))
          const dupArray = [...dat.data]
          


          const projectData = dat.data.map((entry) => {
            return {
              project: entry.project ? entry.project : "untitled",
              totalTime: entry.endTime - entry.startTime

            }
          })
        


      }
  }, [dat])
  return (
    <div className="py-24 w-full">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 md:px-5 px-2 gap-y-16">

        <div className="col-span-1">
            <BarChart />
        </div>

        <div className="col-span-1   rounded-sm">
          <Piechart data={pieChartData}/>
        </div>

        <div className="col-span-2">
          <LineChartWithXAxisPadding />
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
