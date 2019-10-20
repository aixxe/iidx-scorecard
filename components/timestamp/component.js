Vue.component('card-timestamp', {
    data: () => {
    	/* Date formatting from UNIX timestamp to "YYYY-MM-DD HH:MM". */
    	const date = new Date(score.timestamp * 1000);

		const time = date.toTimeString().split(":");
    	let month = '' + (date.getMonth() + 1);
        let day = '' + date.getDate();
        let year = date.getFullYear();

	    if (month.length < 2)
	    	month = '0' + month;
	    if (day.length < 2)
	    	day = '0' + day;

		let date_string = [year, month, day].join('-');
	    let time_string = time[0] + ':' + time[1];

	    return {timestamp: `${date_string} ${time_string}`};
    },
    template: `<div id="card-timestamp">
        <span class="timestamp">{{ timestamp }}</span>
    </div>`
});