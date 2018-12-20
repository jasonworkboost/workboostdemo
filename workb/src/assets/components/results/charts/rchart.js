import { Line } from 'vue-chartjs'
import {mapGetters} from 'vuex';

export default {
  extends: Line,
  // data () {
  //   return {
  //   }
  // },
  computed:{
    ...mapGetters([
    'colorsWB', 'resultsWB', 'labelsWB'
    ]),
  },
  methods: {
    renderLineChart: function(){
      this.renderChart({ //dataset
        labels: this.resultsWB.grLabels, 
        datasets: [{
          lineTension: 0.3,
          label: this.labelsWB.resultsChartLbl,
          backgroundColor: 'transparent',
          pointBackgroundColor: this.colorsWB.color1,
          borderWidth: 3,
          pointBorderColor: this.colorsWB.color1,
          borderColor: 'whitesmoke',
          //Data to be represented on y-axis
          data: this.resultsWB.grResults
          }]}
        ,{//options
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              padding: 10,
              callback: function(value, index, values) {
                  if (Math.floor(value) === value) {
                      return value;
                  }
              }
            },
            gridLines: {
              display: false
            }
          }],
          xAxes: [{
            ticks:{
              padding: 10,
              autoSkip: false,
              maxRotation: 45,
              minRotation: 45
            },
            gridLines: {
              display: false
            }
          }]
        },
      legend: {
        display: false,
      },
      responsive: true,
      maintainAspectRatio: false,
      animation: false
      })
    }
  },
  mounted () {
    this.renderLineChart();
  },
  watch: {
    resultsWB: function(){
      this.renderLineChart();
    } 
  }
}

