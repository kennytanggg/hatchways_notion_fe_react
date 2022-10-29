import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import DateUtil from '../utils/DateUtil';
const api_key = 'b7dc88a8227d0789516251f9056a5c12';

class Search extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			zipCode: 11228,
			weatherData: {},
		};
	}

	async getWeatherDataByZipCode() {
		const search = document.querySelector('.search');
		const zip = search.value;

		let lat = 0;
		let lon = 0;

		const url_get_coordinates = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${api_key}`;

		const request_coordinates = await fetch(url_get_coordinates);
		if (request_coordinates.ok) {
			const response = await request_coordinates.json();

			lat = response.coord.lat;
			lon = response.coord.lon;
			console.log(lat, lon);
		}

		const url_5dayforecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}&units=imperial`;
		const request_weatherdata = await fetch(url_5dayforecast);

		if (request_weatherdata.ok) {
			const data = await request_weatherdata.json();
			console.log(data.list);

			// how to update state with zip code and pass this data up to the App
			this.setState((state) => {
				return {
					zipCode: zip,
					weatherData: data.list,
				};
			});

			console.log(data);
		}
		console.log(this.state);
	}

	async getLatLonCoordinates(zip) {
		console.log(zip);
	}
	getWeatherDataByCoordinates() {}

	//ToDo - get zip code from user input, make a request to API.
	// Use response and zip code to update state

	render() {
		return (
			<div className="search-container">
				<input className="search" placeholder="ZIP code"></input>
				<button onClick={this.getWeatherDataByZipCode}>
					<FontAwesomeIcon icon={faSearch} />
				</button>
			</div>
		);
	}
}

export default Search;
