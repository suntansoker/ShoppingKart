import { Component, OnInit } from '@angular/core';
import {  ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { ChartService } from './chart.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './product-chart.component.html'
 // styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  // Pie
  showChart: boolean=false;
  chart: any;
  pieChartType='pie';
  pieChartLegend=true;
  pieChartData:number[]=[];
  dummyLabels:Label[]=[];
  pieChartLabels:Label[]=[];
  defCount:number=1;
  list: any;
  flag: boolean;
 
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
  constructor(private _chartService: ChartService) { }

  ngOnInit() {
    
    this._chartService.share.subscribe(x=>{
      this.list=x;
      //console.log(`Length is ${this.pieChartLabels.length}`)
      
      if(this.list.length==2){
        if(this.pieChartLabels.length!=0){
          this.flag=false;
          for(var i=0; i<this.pieChartLabels.length;i++){
            if(this.dummyLabels[i][1]==this.list[1]){
              console.log("Inside revisit");
              //this.pieChartLabels[i]=this.list[0];
              this.pieChartData[i]+=1;
              this.flag=true;
              break;
            }
          }
          if(this.flag==false){
            console.log("Inside flag false");
            this.dummyLabels.push(this.list);
            this.pieChartLabels.push(this.list[0]);
            this.pieChartData.push(this.defCount);
            this.pieChartColors[0].backgroundColor.push('rgba('+this.genColor()+','+this.genColor()+','+this.genColor()+','+0.3+')');
          }
        }
        else{
          console.log("Inside outside else");
          this.dummyLabels.push(this.list);
          this.pieChartLabels.push(this.list[0]);
            this.pieChartData.push(this.defCount);
            this.pieChartColors[0].backgroundColor.push('rgba('+this.genColor()+','+this.genColor()+','+this.genColor()+','+0.3+')');
        }
      }
      else if(this.list[2]=="edit"){
        if(this.pieChartLabels.length!=0){
          //this.flag=false;
          for(var i=0; i<this.pieChartLabels.length;i++){
            if(this.dummyLabels[i][1]==this.list[1]){
              console.log("Editing in chart");
              this.pieChartLabels[i]=this.list[0];
              //this.pieChartData[i]+=1;
              //this.flag=true;
              break;
            }
          }
        }
      }
      
    });
     
      
    }
    genColor(){
      return Math.floor(Math.random() * 256);
    }

    toggleChart(){
      this.showChart=!this.showChart;
    }
  }
  

  // change(){
  //     this.pieChartLabels.push(["R"+Math.floor(Math.random()* 10),"100"]);
  //     this.pieChartData.push(Math.floor(Math.random() * 100) + 1)
  //     this.pieChartColors[0].backgroundColor.push('rgba('+this.genColor()+','+this.genColor()+','+this.genColor()+','+0.3+')');
  // }

