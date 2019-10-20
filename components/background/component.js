Vue.component('card-background', {
    data: () => {
        const img_base = `./components/background/images/`;

        /* Use the clear background by default. */
        let img_bg = 'bg_clear.png';

        /* Switch to the "failed" variant if applicable. */
        if (score.dead || score.clearType === 'CLEAR_FAILED')
            img_bg = 'bg_fail.png';

        return {image: img_base + img_bg};
    },
    template: `<div id="card-background">
        <img :src="image">
    </div>`
});