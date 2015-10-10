google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawAnnotations);

function drawAnnotations() {
    var data = google.visualization.arrayToDataTable([
        ['Age Ranges', 'Every Few Minutes', 'A Few Times an Hour'],
        ['18-29',22, 51 ],
        ['30-49',12, 47 ],
        ['50-64',6, 33 ],
        ['65+',3, 11 ],
        ['All Adults',11, 41]
    ]);

    var data = google.visualization.arrayToDataTable([
        ['Age Ranges', 'Every Few Minutes', {type: 'string', role: 'annotation'},
            'A Few Times an Hour', {type: 'string', role: 'annotation'}],
        ['18-29', 22, '22%', 51, '51%'],
        ['30-49', 12, '12%', 47, '47%'],
        ['50-64', 6, '6%', 33, '33%'],
        ['65+',3, '3%', 11, '11%'],
        ['All Adults', 11, '11%', 41, '41%']
    ]);

    var options = {
        title: 'Americans Growing Smartphone Addiction',
        chartArea: {width: '50%'},
        annotations: {
            alwaysOutside: true,
            textStyle: {
                fontSize: 12,
                auraColor: 'none',
                color: '#555'
            },
            boxStyle: {
                stroke: '#ccc',
                strokeWidth: 1,
                gradient: {
                    color1: '#f3e5f5',
                    color2: '#f3e5f5',
                    x1: '0%', y1: '0%',
                    x2: '100%', y2: '100%'
                }
            }
        },
        hAxis: {
            title: 'Total Phone Percentage',
            minValue: 0
        },
        vAxis: {
            title: 'Age Range'
        }
    };
    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

google.setOnLoadCallback(drawChart);
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['How They Feel', 'Percentages'],
        ['Panicked',     73],
        ['Desperate',      14],
        ['Sick',  7],
        ['Relieved', 6]
    ]);

    var options = {
        title: 'How People Feel When They Lose Their Phone'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}