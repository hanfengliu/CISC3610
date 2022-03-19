const labels = ["0 - 11", "12 - 17", "18 - 24", "25 - 34", "35 - 44", "45 - 54","55 - 64","65 +"]
const backgroundColor = ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#f8b195", "#f67280", "#355c7d"]
const data = [11.1, 81.1, 95.7, 94.5, 90.0, 85.7, 76.4, 47.2]
const text = "Hanfeng Liu - US Smartphone User, by Age, in 2018 (% of population in each group)"

new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
      labels: labels,
      datasets: [
        {
          label: "Percentage",
          backgroundColor: backgroundColor,
          data: data
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: text
      }
    }
});

new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [
        {
          label: "Percentage",
          backgroundColor: backgroundColor,
          data: data
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: text
      }
    }
});

const backToHomePage = document.querySelector('#return');

backToHomePage.addEventListener('click', (e)=>{
    window.location.replace("../index.html");
})