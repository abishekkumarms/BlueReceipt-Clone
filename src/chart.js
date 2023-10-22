import { Chart } from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import{
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js';
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);
const labels = [
  "12:00 AM",
  " ",
  " ",
  " ",
  " ",
  " ",
  "Now",
  " ",
  " ",
  " ",
  " ",
  "11:59 PM",
];
function MyChart(){
const data={
  labels,
  datasets: [{
    labels:'DataSet 1',
    data: labels.map(() =>
          faker.datatype.number({ min: 0, max: 500 })
        ),
        borderColor: "rgb(100, 50, 113)",
        backgroundColor: "rgba(100, 50, 113, 0.5)",
  },
  {
    label: "Dataset 2",
        data: labels.map(() =>
          faker.datatype.number({ min: 0, max: 500 })
        ),
        borderColor: "rgb(53, 16, 235)",
        backgroundColor: "rgba(53, 16, 235, 0.5)",
  }
]
  
}

const options={
  responsive: true,
  maintainAspectRatio:false,
  plugins: {
    legend: {
      display: false,
      position: "top",
    },
    title: {
      display: true,
      text: 'Abishek'
    },
    
    
  }
}
  return(
    <div style={{height:250, padding:'20px'}}>
      <Line data={data} options={options} ></Line>
    </div>
  );

}

export default MyChart;