async function getWeatherData(city) {
  try {
    const RESPONSE = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=5a9afe1d8dba4ccabe5172309230111&q=${city}&days=1&aqi=no&alerts=no`,
    );
    if (!RESPONSE.ok) {
      throw new Error('No city with this name was found.');
    } else {
      document.querySelector('.error-text').classList.remove('show');
      return RESPONSE.json();
    }
  } catch (error) {
    document.querySelector('.error-text').textContent = error;
    document.querySelector('.error-text').classList.add('show');
  }
}

export default async function validateSearchingForm() {
  document
    .getElementById('city-searching-form')

    .addEventListener('submit', async (e) => {
      e.preventDefault();

      if (document.querySelector('.searching-result-section')) {
        document.querySelector('.searching-result-section').innerHTML = '';
      }

      const ENTERED_CITY = document.getElementById('text-input').value;

      const NEW_WEATHER_OBJ = await getWeatherData(ENTERED_CITY);

      const CURRENT_YEAR = findOutCurrentYear(
        NEW_WEATHER_OBJ.location.localtime,
      );

      const CURRENT_HOUR = findOutCurrentHour(
        NEW_WEATHER_OBJ.location.localtime,
      );

      createWeatherInfoCard(
        NEW_WEATHER_OBJ.location.name,
        NEW_WEATHER_OBJ.location.country,
        CURRENT_YEAR,
        CURRENT_HOUR,
        NEW_WEATHER_OBJ.current.temp_c,
        NEW_WEATHER_OBJ.current.condition.text,
        NEW_WEATHER_OBJ.current.condition.icon,
      );
      e.target.reset();
    });
}

function createWeatherInfoCard(
  city,
  country,
  currentYear,
  currentHour,
  currentTemperature,
  currentCondition,
  currentWeatherIcon,
) {
  const RESULT_SUBSECTION = document.createElement('section');
  RESULT_SUBSECTION.className = 'searching-result-section';

  const RESULT_HEADER = document.createElement('header');

  const RESULT_HEADING = document.createElement('h2');
  RESULT_HEADING.textContent = `${city} (${country})`;
  RESULT_HEADER.appendChild(RESULT_HEADING);

  RESULT_SUBSECTION.appendChild(RESULT_HEADER);

  const WEATHER_INFO_CARD = document.createElement('ul');
  WEATHER_INFO_CARD.className = 'info-card';

  const DATE = document.createElement('li');

  DATE.innerHTML = `
    <p>Date:</p>
    <p>${currentYear}</p>`;
  WEATHER_INFO_CARD.appendChild(DATE);

  const LOCALTIME = document.createElement('li');
  LOCALTIME.innerHTML = `
  <p>Localtime:</p>
  <p>${currentHour}</p>`;
  WEATHER_INFO_CARD.appendChild(LOCALTIME);

  const TEMPERATURE = document.createElement('li');
  TEMPERATURE.innerHTML = `
  <p>Temperature:</p>
  <p>${currentTemperature}°C</p>`;
  WEATHER_INFO_CARD.appendChild(TEMPERATURE);

  const CONDITION = document.createElement('li');
  CONDITION.innerHTML = `
  <p>Condition:</p>
  <p class="current-condition">${currentCondition} <img class=weather-icon src=${currentWeatherIcon} alt=""></p>`;

  WEATHER_INFO_CARD.appendChild(CONDITION);

  RESULT_SUBSECTION.appendChild(WEATHER_INFO_CARD);

  const SEARCH_ANOTHER_CITY = document.createElement('button');
  SEARCH_ANOTHER_CITY.textContent = 'Search Another City';
  SEARCH_ANOTHER_CITY.addEventListener('click', showSearchingForm);
  RESULT_SUBSECTION.appendChild(SEARCH_ANOTHER_CITY);

  document.querySelector('.main-section').appendChild(RESULT_SUBSECTION);
  hideSearchingForm();
}

function findOutCurrentHour(currentTime) {
  const DATE_TIME = new Date(currentTime);
  return `${DATE_TIME.getHours()}:00`;
}

function findOutCurrentYear(currentTime) {
  const DATE_TIME = new Date(currentTime);
  const READABLE_MONTH = DATE_TIME.getMonth() + 1;
  const READABLE_DATE = DATE_TIME.getDate();

  const MONTH_VALUE =
    READABLE_MONTH < 10 ? `0${READABLE_MONTH}` : READABLE_MONTH;
  const DATE_VALUE = READABLE_DATE < 10 ? `0${READABLE_DATE}` : READABLE_DATE;

  return `${DATE_TIME.getFullYear()}-${MONTH_VALUE}-${DATE_VALUE}`;
}

function showSearchingForm() {
  document.getElementById('city-searching-form').classList.remove('hidden');
  document.querySelector('.searching-result-section').remove();
}

function hideSearchingForm() {
  document.getElementById('city-searching-form').classList.add('hidden');
}
