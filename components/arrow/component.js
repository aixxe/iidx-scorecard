Vue.component('card-arrow', {
    props: ['type'],
    data: (el) => {
    	return {img: `./components/arrow/images/arrow_${el.type}.png`};
    },
    template: `<img class="card-arrow diff" :src="img">`
});