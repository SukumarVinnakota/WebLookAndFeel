var ctx = document.getElementById('myChart');
var stars = [1763, 12213, 37161, 3711, 762];
var frameworks = ['Audi', 'Nissan', 'Tesla', 'BMW', 'Honda'];
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
       labels: frameworks,
       datasets: [{
           label: 'EV Make in Washington',
           data: stars,
           backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)"
            ]
       }]
    },
    options: {
        maintainAspectRatio: false,
    responsive: false
    }
   })