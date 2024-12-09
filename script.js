
  // Get the context of the canvas element
  var ctx = document.getElementById('myChart').getContext('2d');
  
  // Define the data for the chart
  var data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{
      label: 'Sales',
      data: [100, 200, 300, 400, 500],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  };
  
  // Define the options for the chart
  var options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
  
  // Create the chart
  var chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });