import React from 'react';
import './components/Weather.css';
import Weather from './components/Weather';
import DateUtil from './utils/DateUtil';

const api_key = 'b7dc88a8227d0789516251f9056a5c12';
const lat = 40.6174;
const lon = -74.0121;
const url_5dayforecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}&units=imperial`;

let req_counter = 0;

class App extends React.Component {
	constructor(props) {
		super(props);
		console.log('initializing component');
		this.state = {
			weeklyForecast: [],
		};
	}

	componentDidMount() {
		this.getWeatherData();
	}

	updateWeatherData({ day, high_temp, low_temp, icon_style }) {
		this.setState((state) => {
			return {
				weeklyForecast: [
					...state.weeklyForecast,
					{ day: day, high_temp: high_temp, low_temp: low_temp, icon_style: icon_style },
				],
			};
		});
	}

	async getWeatherData() {
		req_counter++;
		console.log('retrieving weather data', 'count:', req_counter);
		if (req_counter < 100) {
			const response = await fetch(url_5dayforecast);
			if (response.ok) {
				let data = await response.json();

				data.list.forEach((time) => {
					if (time.dt_txt.includes('12:00:00')) {
						let day = DateUtil.convertDayToText(new Date(time.dt_txt).getDay());
						let {
							main: { temp_max: high_temp, temp_min: low_temp },
							weather: {
								0: { icon: icon_style }, //Gets the primary weather condition
							},
						} = time;

						console.log('weather data is:', { day, high_temp, low_temp, icon_style });

						// KT: Why does this return a duplicate copy of the 5 day forecast?
						this.updateWeatherData({ day, high_temp, low_temp, icon_style });
						console.log('state weather data is:', this.state.weeklyForecast);
					}
				});
			}
		}
	}
	// KT: Why is this rendering 4 times? (initial painting, after function to retrieve data completes, ?, ?)
	render() {
		return (
			<div className="weather-container">
				{/* <Weather data={this.state.weeklyForecast}></Weather> */}
				{console.log('state weather data is:', this.state.weeklyForecast)}
				<Weather data={this.state.weeklyForecast}></Weather>
			</div>
		);
	}
}

export default App;
