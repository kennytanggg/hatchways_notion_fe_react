import React from 'react';
import DayForecast from './DayForecast';

function Weather(props) {
	// console.log('props is', props);
	return props.data.map(({ day, high_temp, low_temp, icon_style }) => {
		return (
			<DayForecast
				day={day}
				temp_high={Math.round(high_temp)}
				temp_low={Math.round(low_temp)}
				icon_style={`http://openweathermap.org/img/wn/${icon_style}${'@2x.png'}`}
			/>
		);
	});
}

export default Weather;
