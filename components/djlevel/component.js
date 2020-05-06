Vue.component('card-djlevel', {
    data: () => {
        /* Define letter grades from best to worst. */
        const dj_levels = [
            'level_s_aaa', 'level_s_aa', 'level_s_a', 'level_s_b', 'level_s_c',
            'level_s_d', 'level_s_e', 'level_s_f'
        ];

        /* Map clear types from score data to image. */
        const best_dj_level = score.dj_level.best;
        const current_dj_level = score.dj_level.current;

        /* Determine whether this was an improvement. */
        const best_index = dj_levels.indexOf(best_dj_level);
        const current_index = dj_levels.indexOf(current_dj_level);

        let raise_type = 'default';

        if (best_index > current_index)
            raise_type = 'up';
        else if (best_index < current_index)
            raise_type = 'down';

        return {
            raise: raise_type,
            best: `./components/djlevel/images/${best_dj_level.toLowerCase()}.png`,
            current: `./components/djlevel/images/${current_dj_level.toLowerCase()}.png`
        };
    },
    template: `<div id="card-djlevel">
        <div class="best">
            <img :src="best">
        </div>
        <div class="current">
            <img :src="current">
        </div>
        <card-arrow :type="raise" />
    </div>`
});