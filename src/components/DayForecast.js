import React from 'react';
import './DayForecast.css';

function DayForecast(props) {
	console.log('initializing DayForecast Component');
	return (
		<div className="day-container">
			<label>{props.day}</label>
			<img src={props.icon_style} alt="weather"></img>
			<div className="temperature-container">
				<label className="temperature-high">{props.temp_high}&deg;</label>
				<label className="temperature-low">{props.temp_low}&deg;</label>
			</div>
		</div>
	);
}

export default DayForecast;
