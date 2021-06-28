import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  YAxis,
  Tooltip,
  Legend,
  } from "recharts";
import "./../App.css";
function Charts(props) {
  const [centroids, setCentroids] = useState([]);
  useEffect(() => {
    getItems().then((data) => setCentroids(data));
  }, []);
  const url = "http://localhost:8080/gokmeans/centroids";
  const getItems = () => fetch(url).then((res) => res.json());

  return (
    <div className="divCharts">
      <p></p>
      <p></p>
      <LineChart className="linecharts"
        width={1200}
        height={600}
        data={centroids}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Claster 1"
          stroke="#D93654"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="Claster 2" stroke="#0583F2" />
      </LineChart>
    </div>
  );
}
export default Charts;
