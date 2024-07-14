document.addEventListener('DOMContentLoaded', function () {
    // Chart.js configuration for Males
    const maleCtx = document.getElementById('maleHealthChart').getContext('2d');
    const maleHealthChart = new Chart(maleCtx, {
        type: 'bar',
        data: {
            labels: ['18-24', '25-34', '35-44', '45-54', '55-64'],
            datasets: [
                {
                    label: 'Height (cm)',
                    data: [172.5, 173.5, 172, 170.5, 167.5],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Weight (kg)',
                    data: [57.5, 60, 62, 64, 66],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                },
                {
                    label: 'BP Systolic (mmHg)',
                    data: [115, 120, 125, 130, 135],
                    backgroundColor: 'rgba(255, 206, 86, 0.2)',
                    borderColor: 'rgba(255, 206, 86, 1)',
                    borderWidth: 1
                },
                {
                    label: 'BP Diastolic (mmHg)',
                    data: [75, 80, 85, 90, 95],
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1
                },
                {
                    label: 'FBS (mg/dL)',
                    data: [80, 85, 90, 95, 100],
                    backgroundColor: 'rgba(255, 159, 64, 0.2)',
                    borderColor: 'rgba(255, 159, 64, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Hb (g/dL)',
                    data: [16, 16.5, 17, 17.5, 18],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Cholesterol (mg/dL)',
                    data: [160, 167.5, 175, 182.5, 190],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                },
                {
                    label: 'BMI',
                    data: [21.7, 22.4, 23.1, 23.8, 24.5],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Chart.js configuration for Females
    const femaleCtx = document.getElementById('femaleHealthChart').getContext('2d');
    const femaleHealthChart = new Chart(femaleCtx, {
        type: 'bar',
        data: {
            labels: ['18-24', '25-34', '35-44', '45-54', '55-64'],
            datasets: [
                {
                    label: 'Height (cm)',
                    data: [161, 162, 160.5, 158.5, 156.5],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Weight (kg)',
                    data: [48.5, 51, 53.5, 56.5, 59],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                },
                {
                    label: 'BP Systolic (mmHg)',
                    data: [110, 115, 120, 125, 130],
                    backgroundColor: 'rgba(255, 206, 86, 0.2)',
                    borderColor: 'rgba(255, 206, 86, 1)',
                    borderWidth: 1
                },
                {
                    label: 'BP Diastolic (mmHg)',
                    data: [70, 75, 80, 85, 90],
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1
                },
                {
                    label: 'FBS (mg/dL)',
                    data: [80, 85, 90, 95, 100],
                    backgroundColor: 'rgba(255, 159, 64, 0.2)',
                    borderColor: 'rgba(255, 159, 64, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Hb (g/dL)',
                    data: [14.5, 15, 15.5, 16, 16.5],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Cholesterol (mg/dL)',
                    data: [160, 167.5, 175, 182.5, 190],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                },
                {
                    label: 'BMI',
                    data: [21.7, 22.4, 23.1, 23.8, 24.5],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
