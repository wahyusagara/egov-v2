import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart } from "chart.js";

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss'],
})
export class ChartjsComponent implements OnInit, AfterViewInit {
  @ViewChild("barCanvas", {static: false}) barCanvas: ElementRef;
  private barChart: Chart;

  constructor() {}

  async ngOnInit() {
  }

  async ngAfterViewInit() {
    await this.chart();
  }

  async chart() {
    this.barChart = await new Chart(this.barCanvas.nativeElement, {
      type: "doughnut",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#00ff2b", "#36A2EB", "#FFCE56"]
          }
        ],
      },
      options: {
        // This chart will not respond to mousemove, etc
        events: ['click'],
        onClick: (e) => {
          var activePoints = this.barChart.getElementsAtEvent(e);
          var dataseIndex = activePoints;
          console.log(dataseIndex);
          var selectedIndex = JSON.parse(JSON.stringify(activePoints[0]))._index;
          console.log(selectedIndex);
        }
      }
    });
  }
}
