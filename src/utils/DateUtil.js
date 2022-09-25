class DateUtil {
	static days = {
		0: 'Sun',
		1: 'Mon',
		2: 'Tue',
		3: 'Wed',
		4: 'Thu',
		5: 'Fri',
		6: 'Sat',
	};

	static convertDayToText(day) {
		if (this.days[day]) return this.days[day];
	}
}

export default DateUtil;
