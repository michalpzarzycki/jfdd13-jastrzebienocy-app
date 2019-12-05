import React, {Component} from 'react';
import {Bar, Line, Pie } from 'react-chartjs-2';
import styles from "./Charts.module.css";
import {   getCookingTime, watchRecipes,  } from '../services/ForFetchDB';


class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
        chartData: {
        }
    }
}
componentDidMount() {
    watchRecipes(recipes => {
        const barChartData = getCookingTime(recipes)
        const labels = Object.keys(barChartData)
        const data = Object.values(barChartData)
        const chartData = {
            labels: data,
            datasets: [
                {
                label: 'Czas Gotowania ',
                data: labels,
                backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 199, 192, 0.6)',
                        'rgba(153, 99, 232, 0.6)',
                        'rgba(15, 99, 200, 0.6)',
                        'rgba(133, 199, 232, 0.6)',
                        'rgba(53, 199, 232, 0.6)',
                    ]
                }
            ]
        }
        this.setState({
            chartData
        })
    });
}
    
    render() {
        return (
    <div  className={styles.chart}>
    <Bar
  data={this.state.chartData}
  width={90}
  height={80}
  
 
    ///Other configurable options
  

  options={
    {
       responsive: false,
       maintainAspectRatio: false,
     },{
   
    tooltips: {
        bodyFontColor: "white",
        bodyFontSize: 10,
    },
    scales: {
        yAxes: [
          {
            ticks: {
              min: 0,
              max: 500
            },
            ticks: {
                fontColor: "#212121",
                fontFamily: "Oswald sans-serif",
                fontSize: 14,
                fontStyle: "bold",
                mode: "single",
              }
        }
        ],
        xAxes: [
            {
              ticks: {
                  fontColor: "#212121",
                  fontFamily: "Oswald sans-serif",
                  fontSize: 12,
                  fontStyle: "bold"
                }
          }
          ]

      },
        title:{
        display: true,
          text: 'Przepisy / czas gotowania',
          fontSize:20,
          fontFamily: "Oswald sans-serif",
          fontColor: "black",
      },
        legend:{
          maintainAspectRatio: false,
          responsive: true,
          display: true,
          position: 'bottom',  
          labels: {
            fontColor: "black",
            fontSize: 18,
            fontFamily: "Oswald sans-serif",
        }
      },
     

       }}

/> 

    </div>
   
   ) }
}

export default BarChart;