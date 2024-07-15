const calendarInput = document.getElementById('calendar-input');
const calendarDisplay = document.getElementById('calendar-display');

calendarInput.addEventListener('input', () => {
    const date = new Date(calendarInput.value);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    calendarDisplay.textContent = `${month} ${day}, ${year}`;
});

const ctx1 = document.getElementById('chart-1').getContext('2d');
const chart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['18-24', '25-34', '35-44', '45-54', '55-64'],
        datasets: [{
            label: 'Percentage of People Neglecting Health Checkups',
            data: [20, 18, 15, 12, 10],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
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

const ctx2 = document.getElementById('chart-2').getContext('2d');
const chart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['18-29', '30-39', '20-24', '25-29'],
        datasets: [{
            label: 'Prevalence of NCDs among Younger Adults in India',
            data: [39, 55, 22, 26],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
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

const ctx3 = document.getElementById('chart-3').getContext('2d');
const chart3 = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['18-24', '25-34', '35-44', '45-54', '55-64'],
        datasets: [
            {
                label: 'Males: Height (cm)',
                data: [172.5, 173.5, 172, 170.5, 167.5],
                backgroundColor: 'rgba(10, 110, 211, 0.6)',
                borderColor: 'rgba(10, 110, 211, 1)',
                borderWidth: 1
            },
            {
                label: 'Males: Weight (kg)',
                data: [57.5, 60, 62, 64, 66],
                backgroundColor: 'rgba(4, 53, 106, 0.6)',
                borderColor: 'rgba(4, 53, 106, 1)',
                borderWidth: 1
            },
            {
                label: 'Females: Height (cm)',
                data: [161, 162, 160.5, 158.5, 156.5],
                backgroundColor: 'rgba(5, 78, 152, 0.6)',
                borderColor: 'rgba(5, 78, 152, 1)',
                borderWidth: 1
            },
            {
                label: 'Females: Weight (kg)',
                data: [48.5, 51, 53.5, 56.5, 59],
                backgroundColor: 'rgba(0, 13, 63, 0.6)',
                borderColor: 'rgba(0, 13, 63, 1)',
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            },
            x: {
                stacked: true
            },
            y: {
                stacked: true
            }
        }
    }
});
