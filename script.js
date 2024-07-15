document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Button clicked!');
        });
    });

    // Hero section chart
    const ctxHero = document.getElementById('heroChart').getContext('2d');
    const heroChart = new Chart(ctxHero, {
        type: 'bar',
        data: {
            labels: ['18-34', '35-44', '45-54', '55-64'],
            datasets: [{
                label: 'Prioritize Work Over Health',
                data: [22, 18, 15, 12],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }, {
                label: 'Routine Checkup in Past Year',
                data: [20, 17, 15, 12],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Health statistics chart
    const ctxHealthStats = document.getElementById('healthStatsChart').getContext('2d');
    const healthStatsChart = new Chart(ctxHealthStats, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Hypertension Cases',
                data: [5, 15, 25, 35, 45, 55],
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 2,
                fill: false
            },
            {
                label: 'NCD Risk Factor Cases',
                data: [7, 17, 27, 37, 47, 57],
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
