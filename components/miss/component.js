Vue.component('card-miss', {
    data: () => {
        const best_miss = (score.bestMissCount !== -1 ? score.bestMissCount: -1);
        const current_miss = (score.missCount !== -1 ? score.missCount: -1);

        /* Determine whether this was an improvement. */
        let raise_type = 'default';

        if (current_miss > best_miss)
            raise_type = 'down';
        else if (current_miss < best_miss)
            raise_type = 'up';

        /* Handle cases where one value is missing. */
        if (best_miss !== -1 && current_miss === -1)
            raise_type = 'down';
        else if (best_miss === -1 && current_miss !== -1)
            raise_type = 'up';

        /* Calculate difference between this and the previous best. */
        const diff = Math.abs(best_miss - current_miss);
        const diff_type = raise_type === 'up' ? 'down': 'up';

        return {
            raise: raise_type,
            best: best_miss,
            current: current_miss,
            diff: diff,
            diff_type: diff_type
        }
    },
    template: `<div id="card-miss">
        <card-score class="best" :value="best" unsigned></card-score> 
        <card-score class="current" :value="current" unsigned></card-score> 
        
        <card-score v-if="best !== -1 && current !== -1 && diff !== 0" class="diff" :type="diff_type" :value="diff"></card-score>
         
        <card-arrow :type="raise" />
    </div>`
});