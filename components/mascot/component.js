Vue.component('card-mascot', {
    data: () => {
        /* This is just a placeholder, feel free to add your own stuff here. */
        let mascots = [];

        mascots.push({
            directory: 'example',
            name: 'placeholder',
            images: 2,
            quotes: [
                'Quote text #1',
                'Quote text #2',
            ]
        });

        /* Pick a mascot randomly from the above array. */
        const directory = './components/mascot/images/mascots/';

        const mascot = mascots[Math.floor(Math.random() * mascots.length)];
        const mascot_dir = `${directory}/${mascot.directory}`;

        const character_img = `${mascot_dir}/${Math.floor(Math.random() * mascot.images) + 1}.png`;
        const quote_text = mascot.quotes[Math.floor(Math.random() * mascot.quotes.length)];

        /* Switch to the "failed" variant if applicable. */
        let background_img = './components/mascot/images/base/background_clear.png';

        if (score.dead || score.clearType === 'CLEAR_FAILED')
            background_img = './components/mascot/images/base/background_fail.png';

        return {
            background: background_img,

            /* You can set your own stuff here. */
            mascot: {
                name: mascot.name,
                img: character_img
            },
            quote: {
                text: quote_text
            }
        };
    },
    template: `<div id="card-mascot" v-if="score.config.showMascot">
        <img class="mascot-bg" :src="background">
        <img class="mascot-img" :src="mascot.img">
        <div v-if="mascot.name" class="mascot-name">
            {{ mascot.name }}
        </div>

        <img class="quote-bg" src="./components/mascot/images/base/quote.png">
        <div class="quote-text">
            {{ quote.text }}
        </div>
    </div>`
});