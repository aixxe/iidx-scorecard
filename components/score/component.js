Vue.component('card-score', {
    props: ['type', 'value', 'unsigned'],
    data: (element) => {
        /* Define the image source set -- either default, up or down. */
        const source = `./components/score/images/${element.type || 'default'}/`;

        /* Add plus or minus for up and down image sets. */
        const images = [];

        if (element.type === 'up')
            images.push({type: 'regular', url: source + 'plus.png'});

        if (element.type === 'down')
            images.push({type: 'regular', url: source + 'minus.png'});

        if (element.value === -1 && element.unsigned !== undefined) {
            return {images: [{
                url: './components/score/images/score_blank.png',
                type: 'blank'
            }]};
        }

        let faded = true;
        const value = Math.abs(element.value).toString().padStart(4, '0');

        for (let i = 0; i < 4; i++) {
            let num = parseInt(value[i]);

            if (faded && num !== 0)
                faded = false;

            /* Last number should always be solid. */
            if (faded && i === 3)
                faded = false;

            images.push({
                url: source + num + '.png',
                type: faded ? 'fade': 'regular'
            });
        }

        return {images: images};
    },
    template: `<div class="card-score">
        <div :class="type">
            <img v-for="image in images" :class="image.type" :src="image.url">
        </div>
        <img class="frame" v-if="type === 'up' || type === 'down'" src="./components/score/images/diff_frame.png">
    </div>`
});