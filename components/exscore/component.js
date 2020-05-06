Vue.component('card-exscore', {
    data: () => {
        /* Determine whether this was an improvement. */
        let raise_type = 'default';

        const best_score = score.ex_score.best || 0;
        const current_score = score.ex_score.current;

        if (current_score > best_score)
            raise_type = 'up';
        else if (current_score < best_score)
            raise_type = 'down';

        /* Calculate difference between this and the previous best. */
        const diff = Math.abs(best_score - current_score);
        const diff_type = raise_type === 'default' ? 'up': raise_type;

        return {
            raise: raise_type,
            best: best_score,
            current: current_score,
            diff: diff,
            diff_type: diff_type
        };
    },
    template: `<div id="card-exscore">
        <card-score id="exscore-best" :value="best" unsigned></card-score> 
        <card-score id="exscore-current" :value="current" unsigned></card-score> 

        <card-score v-if="best !== -1 && current !== -1" id="exscore-diff" :type="diff_type" :value="diff"></card-score>

        <card-arrow :type="raise" />
    </div>`
});