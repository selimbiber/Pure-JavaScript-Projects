const CHART_PERCENTAGES = document.querySelectorAll('.chart-percentage');
const CHART_BARS = document.querySelectorAll('.chart-bar');
const DAY_NAMES = document.querySelectorAll('.day-name');

const TOTAL_SPENDING_AMOUNT = 921.48;
let highestPercentage = 0;
let highestChartBar;

async function fetchData() {
  const CHART_FETCH = await fetch('./data.json');
  const CHART_DATA = await CHART_FETCH.json();
  CHART_DATA.forEach((item, index) => {
    CHART_PERCENTAGES[index].textContent = '$' + item.amount;
  
    const DAILY_SPENDING_AMOUNT = Number(item.amount);
    const CALC_RESULT = (DAILY_SPENDING_AMOUNT / TOTAL_SPENDING_AMOUNT) * 1250;
    CHART_BARS[index].style.height = CALC_RESULT + '%';

    if (CALC_RESULT > highestPercentage) {
      highestPercentage = CALC_RESULT;
      highestChartBar = CHART_BARS[index];
    }
    
    DAY_NAMES[index].textContent = item.day;
  });
  highestChartBar.classList.add('highest-chart-bar');
}
fetchData();

CHART_BARS.forEach(chartBar => {
  const CHART_PERCENTAGE = chartBar.previousElementSibling;

  chartBar.addEventListener('mouseover', () => CHART_PERCENTAGE.style.display = 'block');
  chartBar.addEventListener('mouseout', () => CHART_PERCENTAGE.style.display = 'none');
});