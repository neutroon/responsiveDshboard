import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexStroke,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill,
  ApexGrid,
  ApexLegend

} from "ng-apexcharts";
export type ChartOptions = {
  title?: any,
  subtitle?: any
  series?: any;
  chart?: any;
  labels?: any;
  plotOptions?: any;
  fill?: any;
  stroke?: any,
};

export type columnChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title?: ApexTitleSubtitle;
  stroke: ApexStroke;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend

};

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {

  @ViewChild("chart") chart: ChartComponent | undefined;
  // public chartOptions: Partial<ChartOptions>;

  constructor() {

  }
//   chartOptions:ChartOptions = {

//     subtitle: {
//       text: 'undefined',
//       align: 'left',
//       margin: 10,
//       offsetX: 0,
//       offsetY: 0,
//       floating: true,
//       style: {
//         fontSize:  '12px',
//         fontWeight:  'normal',
//         fontFamily:  'sans serif',
//         color:  '#9699a2'
//       },
//   },


//   title: {
//     text: 'fs',
//     align: 'left',
//     margin: 10,
//     offsetX: 0,
//     offsetY: 0,
//     floating: true,
//     style: {
//       fontSize:  '14px',
//       fontWeight:  'bold',
//       fontFamily:  undefined,
//       color:  '#263238'
//     },
// },




//     series: [70],
//     chart: {

//       width: 100,
//       height: 150,
//       type: "radialBar"
//     },
//     plotOptions: {
//       radialBar: {
//         hollow: {
//           size: "70%"
//         }
//       }
//     },
//     labels: ["Cricket"]
//   };



  radailChart: ChartOptions = {
    series: [75],
    chart: {
      width: '140',
      type: "radialBar",
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: "70%",
          background: "#fff",
          image: undefined,
          position: "front",
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24
          }
        },
        track: {
          background: "#fff",
          strokeWidth: "67%",
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35
          }
        },

        dataLabels: {
          show: true,
          name: {
            offsetY: 15,
            show: true,
            color: "#83899F",
            fontWeight: 400,
            fontSize: "0.75rem"
          },
          value: {
            formatter: function() {
              return parseInt('250'.toString(), 10).toString();
            },
            offsetY: -20,
            color: "#1C1C28",
            fontSize: "1rem",
            fontWeight: 700,
            show: true
          }
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: ["#ABE5A1"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: "round"
    },
    labels: ["منتج"]
  };



  columnChart:columnChartOptions = {
    series: [
      {
        name: "distibuted",
        data: [0.6, 0.5, 0.2, 10, 12, 15]
      }
    ],

    chart: {
      height: 140,
      type: "bar",
      toolbar:{
        show: false
      }

    },
    colors: [

      "#1DA8FF",
      "#FABE7A",
      "#7661E2",
      "#FFE5B5",
      "#BEA3FF",
      "#FFA4A9"

    ],
    plotOptions: {
      bar: {
        columnWidth: '15',
        horizontal: false,
        distributed: true,
        dataLabels: {
          total: {
            enabled: false
          },
          position: "top" // top, center, bottom
        },
        borderRadius: 1.6,
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'all'
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function(val) {
        return val + "k";
      },
      offsetY: -10,
      style: {
        fontSize: "0.5rem",
        fontWeight: 500,
        colors: ["#3F4254"]
      }
    },

    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.2,
        gradientToColors: undefined,
        inverseColors: true,
        // opacityFrom: 1,
        // opacityTo: 1,
        // stops: [50, 0, 100, 100]
      }
    },
    yaxis: {
      show: false,
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false,
        formatter: function(val) {
          return val + "%";
        }
      }
    },
    xaxis: {


      position: "top",
      labels: {
        show: false,
        offsetY: -18
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#78E3F0",
            colorTo: "#0ED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5
          }
        }
      },
      tooltip: {
        enabled: true,
        offsetY: -35
      }
    },
    stroke:{
      show: true
    },
    grid: {
      show: false
    },

    legend: {
      show: false
    }
  };
}

