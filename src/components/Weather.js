import React from 'react';
import DayForecast from './DayForecast';

function Weather(props) {
	console.log('props is', props);
	// I've got the data I want and now I'm putting it into the state variable. I've set the state of the Weather component to be the WeeklyForecastData.  How do I use this to render multiple components?  Can't I iterate through the array?
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
