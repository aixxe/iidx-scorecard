Vue.component('card-chart', {
    data: () => {
        const img_base = `./components/chart/images/`;

        /* Strip off prefixes from enums to match the image filenames. */
        let style, difficulty;

        switch (score.chart.play_style) {
            case 0: style = 'sp'; break;
            case 1: style = 'dp'; break;
        }

        switch (score.chart.difficulty) {
            case 0: difficulty = 'normal'; break;
            case 1: difficulty = 'hyper'; break;
            case 2: difficulty = 'another'; break;
        }

        /* Emulate game behavior by defaulting to 12 when rating is abnormal. */
        let rating = score.chart.rating;

        if (rating < 1 || rating > 12)
            rating = 12;

        return {
            style: img_base + `/style/${style}.png`,
            difficulty: img_base + `/difficulty/${difficulty}.png`,
            rating: img_base + `/rating/${difficulty}/${rating}.png`
        };
    },
    template: `<div id="card-chart">
        <img class="playstyle" :src="style">
        <img class="difficulty" :src="difficulty">
        <img class="rating" :src="rating">
    </div>`
});