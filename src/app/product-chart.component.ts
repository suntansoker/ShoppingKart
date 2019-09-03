import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './product-chart.component.html'
 // styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  // Pie
  showChart: boolean=false;
  chart: any;
  pieChartType:string;
  pieChartLegend:boolean;
  pieChartData:number[];
  pieChartLabels:Label[];
 
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    }
  };

  
//   public pieChartColors = [
//     {
//       backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
//     },
//   ];
  constructor() { }

  ngOnInit() {
    this.pieChartLabels = ["R1","R2","R3"];
    this.pieChartData = [30, 50, 10];
    this.pieChartType = 'pie';
    this.pieChartLegend = true;
  }

  toggleChart(){
      this.showChart = !this.showChart;
  }

  change(){
      this.pieChartLabels.push("R4");
      this.pieChartData.push(Math.floor(Math.random() * 100) + 1)
  }


}