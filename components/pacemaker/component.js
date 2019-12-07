Vue.component('card-pacemaker', {
    data: () => {
        let img_base = `./components/pacemaker/images/`;

        /* Define the default pacemaker data. */
        let pacemaker_data = {
            type: img_base + 'pacemaker_none.png',
            percentage: [],
            target: -1
        };

        /* Use default 'off' data if the pacemaker is disabled. */
        if (score.pacemaker === undefined || score.pacemaker.type === 'PACEMAKER_NONE')
            return pacemaker_data;

        /* When enabled, if the current percentage exceeds 94.45%, the pacemaker
           will always display 100% instead, aka. "MAX-". (thanks Lain!) */
        let auto_max_pacemaker = (score.config.autoMaxPacemaker === true);

        if (auto_max_pacemaker) {
            let percentage_value = ((score.exScore / (score.chart.notes * 2)) * 100);

            if (percentage_value > 94.45) {
                score.pacemaker.type = 'PACEMAKER_PERCENTAGE';
                score.pacemaker.score = score.chart.notes * 2;
                score.pacemaker.target = 100;
            }
        }

        /* Set the type, target and delta between current score and target. */
        pacemaker_data.type = img_base + score.pacemaker.type.toLowerCase() + '.png';
        pacemaker_data.target = score.pacemaker.score;
        pacemaker_data.delta = score.exScore - pacemaker_data.target;

        /* Handle pacemaker target text. This can include rival names but only
           custom percentages are displayed to replicate original behaviour. */
        if (score.pacemaker.type === 'PACEMAKER_PERCENTAGE') {
            /* Parse target as integer, push each digit as an image link. */
            let target = parseInt(score.pacemaker.target);

            if (!isNaN(+target)) {
                let digits = target.toString().split('');

                digits.forEach(v =>
                    pacemaker_data.percentage.push(img_base + `target/${v}.png`)
                );

                /* Add the final "%" character. */
                pacemaker_data.percentage.push(img_base + 'target/percent.png');
            }
        }

        /* Determine the arrow image to use. */
        let arrow_type = 'default';

        if (pacemaker_data.delta > 0)
            arrow_type = 'up';

        if (pacemaker_data.delta < 0)
            arrow_type = 'down';

        /* Set arrow and determine text color for the differential frame. */
        pacemaker_data.raise = arrow_type;
        pacemaker_data.delta_type = (arrow_type === 'default') ? 'up': arrow_type;

        return pacemaker_data;
    },
    template: `<div id="card-pacemaker">
        <div class="type">
            <img :src="type">
            <span class="percentage">
                <img v-for="digit in percentage" :src="digit">
            </span>
        </div>

        <template v-if="target === -1">
            <card-score class="target" :value="target" unsigned></card-score>
        </template>
        
        <template v-if="target !== -1">
            <card-score class="target" :value="target"></card-score>
            <card-score class="delta" :type="delta_type" :value="delta"></card-score>
            <card-arrow :type="raise" />
        </template>
    </div>`
});
