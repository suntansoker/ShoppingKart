import { Component, OnInit } from '@angular/core';
import {  ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

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
  pieChartData:number[]=[];
  pieChartLabels:Label[];
  defCount:number=1;
 
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    }
  };
  public pieChartColors = [
    {
      backgroundColor: [//'rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'
    ],
    },
  ];

  
//   public pieChartColors = [
//     {
//       backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
//     },
//   ];
  constructor() { }

  ngOnInit() {
    this.pieChartLabels = [];
    //this.pieChartData = [];
    this.pieChartType = 'pie';
    this.pieChartLegend = true;
  }

  getVisit(list:any[]){
    if(this.pieChartLabels.indexOf(list)==-1){
      this.pieChartLabels.push(list);
      this.pieChartData.push(this.defCount);
      this.pieChartColors[0].backgroundColor.push('rgba('+this.genColor()+','+this.genColor()+','+this.genColor()+','+0.3+')');
    }
    else{
        var i:number;
        //var index: number;
        for (i=0; i<this.pieChartLabels.length;i++){
            if(this.pieChartLabels[i][1]==list[1]){
                this.pieChartData[i]+=1;
            }
        }
    }
  }

  toggleChart(){
      this.showChart = !this.showChart;
  }

  genColor(){
      return Math.floor(Math.random() * 256);
  }

  change(){
      this.pieChartLabels.push(["R"+Math.floor(Math.random()* 10),"100"]);
      this.pieChartData.push(Math.floor(Math.random() * 100) + 1)
      this.pieChartColors[0].backgroundColor.push('rgba('+this.genColor()+','+this.genColor()+','+this.genColor()+','+0.3+')');
  }


}