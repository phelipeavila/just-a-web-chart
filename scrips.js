//plot the array in a Chart
function plotValues(dataArr){
    
    var tempValues = dataArr.map(function(d) {return d.value});
    var timeValues = dataArr.map(function(d) {return d.time});

    var tempChart = document.getElementById('tempChart').getContext('2d');

    var chart = new Chart(tempChart, {
        type: 'line',
                            
        data: {
            labels: timeValues,
                        
            datasets: [
                {
                    label: 'Room Temperature (\u00B0C)',
                    data: tempValues
                }
            ]
        }
    })
}


//get CSV file from AWS S3 with temperature values from 1 day, convert it to an array and send
//and send it to the function plotValues
d3.csv('https://hoolp1.s3.amazonaws.com/devops_sketch/justawebchart/data.csv').then(plotValues);