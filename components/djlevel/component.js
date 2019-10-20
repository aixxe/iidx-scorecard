Vue.component('card-djlevel', {
    data: () => {
        /* Define letter grades from best to worst. */
        const dj_levels = [
            'LV_AAA', 'LV_AA', 'LV_A', 'LV_B', 'LV_C', 'LV_D', 'LV_E', 'LV_F'
        ];

        /* Map clear types from score data to image. */
        const best_dj_level = (score.bestDjLevel || 'LV_F');
        const current_dj_level = score.djLevel;

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