Vue.component('card-music', {
    data: () => score,
    template: `<div id="card-music">
        <div class="title">{{ music.title }}</div>
        <div class="artist">{{ music.artist }}</div>
    </div>`
});