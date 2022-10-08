import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Search extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			zipCode: 11228,
			weatherData: {},
		};

		this.handleClick = this.handleClick.bind(this);
	}

	getWeatherDataByZipCode() {
		const search = document.querySelector('.search');
		const zip = search.value;
		console.log(search);
		console.log(zip);
		const lat = 0;
		const lon = 0;
	}

	getWeatherDataByCoordinates() {}

	handleClick() {
		console.log('click received');
	}

	render() {
		return (
			<div className="search-container">
				<input className="search" placeholder="ZIP code"></input>
				<button onClick={this.handleClick}>
					<FontAwesomeIcon icon={faSearch} />
				</button>
			</div>
		);
	}
}

export default Search;
