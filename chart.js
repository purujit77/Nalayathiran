var xValues = [50,60,70,80,90,100,110,120,130,140,150];
var yValues = [7,8,8,9,9,9,10,11,14,14,15];
const ctx = document.getElementById("myChart").getContext("2d");

let gradient = ctx.createLinearGradient(0,0,0,400);
gradient.addColorStop(0, "rgba(58,123,213,1)");
gradient.addColorStop(1,"rgba(0,210,255,0)");

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: true,
      lineTension: 0,
      backgroundColor: gradient,
      borderColor: "white",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    responsive: true,
    // maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          min: 6, 
          max:16, 
          // fontColor: "white",
        },
        scaleLabel: {
            display: true,
            labelString: 'Month',
            // fontColor: "white",
        }
      }],
      xAxes: [{
        ticks: {min: 6, max:16,},
        scaleLabel: {
            display: true,
            labelString: 'Month',
            // fontColor: "white",
        }
      }]
    }
    
  }
});