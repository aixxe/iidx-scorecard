Vue.component('card-judgement', {
    data: () => score,
    template: `<div id="card-judgement">
        <card-score class="pgreat" :value="judgement.pgreat"></card-score> 
        <card-score class="great" :value="judgement.great"></card-score> 
        <card-score class="good" :value="judgement.good"></card-score> 
        <card-score class="bad" :value="judgement.bad"></card-score> 
        <card-score class="poor" :value="judgement.poor"></card-score> 
        
        <card-score class="combo-break" :value="judgement.combo_break"></card-score>
         
        <card-score class="fast" :value="judgement.fast"></card-score> 
        <card-score class="slow" :value="judgement.slow"></card-score> 
    </div>`
});