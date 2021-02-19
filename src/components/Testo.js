import React, { Component } from 'react';
import Chart from './Chart';
import axios from 'axios'
export class Testo extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
   // this.getchartData(); // this should be this.getChartData();
    this.getChartData();
  }

  
  getChartData(){
    axios.get("http://localhost:3400/api/xlstojson").then(res => {
      const coin = res.data;
      let labels = [];
      let data = [];
      coin.forEach(element => {
        if (element.name!=""){
          labels.push(element.name);
          data.push(element.number);
        }
        

          });

    this.setState({
      chartData:{
        labels: labels,
        datasets:[
          {
            label:'Population',
            data:data,
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    });
  });
  }

  render() {
    return (
      <div>
        {Object.keys(this.state.chartData).length && <Chart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/>}
      
      </div>
        
    );
  }
}
