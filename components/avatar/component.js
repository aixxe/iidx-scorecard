Vue.component('card-avatar', {
    data: () => {
        return {
            avatar: './components/avatar/images/avatar.png',
            name: score.player.name
        };
    },
    template: `<div id="card-avatar">
        <div class="dj-name">DJ {{ name }}</div>
        <div class="image" v-bind:style="{ backgroundImage: 'url(' + avatar + ')' }"></div>
    </div>`
});