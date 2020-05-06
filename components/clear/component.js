Vue.component('card-clear', {
    data: () => {
        /* Define clear types from best to worst. */
        const clear_types = [
            'clear_fullcombo', 'clear_ex', 'clear_hard', 'clear_clear',
            'clear_easy', 'clear_assist', 'clear_failed', 'clear_noplay'
        ];

        /* Map clear types from score data to image. */
        const best_clear = score.clear.best;
        const current_clear = score.clear.current;

        /* Determine whether this was an improvement. */
        const best_index = clear_types.indexOf(best_clear);
        const current_index = clear_types.indexOf(current_clear);

        let raise_type = 'default';

        if (best_index > current_index)
            raise_type = 'up';
        else if (best_index < current_index)
            raise_type = 'down';

        return {
            raise: raise_type,
            best: `./components/clear/images/${best_clear.toLowerCase()}.png`,
            current: `./components/clear/images/${current_clear.toLowerCase()}.png`
        };
    },
    template: `<div id="card-clear">
        <div class="best">
            <img :src="best">
        </div>
        <div class="current">
            <img :src="current">
        </div>
        <card-arrow :type="raise" />
    </div>`
});