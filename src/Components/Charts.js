import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import "./../App.css";

function Charts({ newdata }) {
  const [centroids, setCentroids] = useState([[], [], [], [], []]);
  useEffect(() => {
    getItems().then((data) => setCentroids(data));
  }, []);

  const url = "http://localhost:8080/gokmeans/centroids";
  const getItems = () => fetch(url).then((res) => res.json());
  console.log(centroids);
  const data1 = [{ x: centroids[0][0], y: centroids[0][1], z: 400 }];
  const data2 = [{ x: centroids[1][0], y: centroids[1][1], z: 400 }];
  const data3 = [{ x: centroids[2][0], y: centroids[2][1], z: 400 }];
  const data4 = [{ x: centroids[3][0], y: centroids[3][1], z: 400 }];
  const data5 = [{ x: centroids[4][0], y: centroids[4][1], z: 400 }];
  return (
    <div className="divCharts">
      <h2 className="centroid">Centroides</h2>
      <ResponsiveContainer width="100%" height="95%">
        <ScatterChart
          margin={{
            top: 25,
            right: 20,
            bottom: 20,
            left: 0,
          }}
        >
          <CartesianGrid strokeDasharray="4" />
          <XAxis type="number" dataKey="x" name="stature" domain={[-2, 4]} />
          <YAxis type="number" dataKey="y" name="weight" domain={[-2, 4]} />
          <ZAxis
            type="number"
            dataKey="z"
            range={[60, 400]}
          />
          <Tooltip cursor={false} />
          <Scatter  data={data1} fill="#8884d8" shape="star" />
          <Scatter  data={data2} fill="#f882d8" shape="star" />
          <Scatter  data={data3} fill="#0084d8" shape="star" />
          <Scatter  data={data4} fill="#00ff00" shape="star" />
          <Scatter  data={data5} fill="#FF0000" shape="star" />
          <Scatter name="Nodo" data={newdata} fill="#000000" shape="circle" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
export default Charts;
