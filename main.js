let customChart = document.getElementById("custom-chart").getContext("2d");

let programmingChart = new Chart(customChart, {
  type: "bar",
  data: {
    labels: ["PHP", "JavaScript", "Java", "C++", "Python"],
    datasets: [
      {
        label: "# of Votes (in Thousands)",
        data: [12, 15, 11, 10, 13],
        backgroundColor: [
          "rgba(0, 176, 255, 0.6)",
          "rgba(164, 118, 255, 0.6)",
          "rgba(255, 240, 0, 0.6)",
          "rgba(255, 0, 89, 0.6)",
          "rgba(12, 255, 65, 0.6)",
        ],
        borderColor: [
          "rgba(0, 176, 255, 1)",
          "rgba(164, 118, 255, 1)",
          "rgba(255, 240, 0, 1)",
          "rgba(255, 0, 89, 1)",
          "rgba(12, 255, 65, 1)",
        ],
        borderWidth: 2,
      },
    ],
  },

  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
