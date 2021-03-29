Vue.component('padre',{

    template:/*template*/
    `
    <div class="p-5 bg-dark text-white">
        <h2>componente Padre: {{numeroPadre}}</h2>
        <button class= "btn btn-danger" @click="numeroPadre++">+</button>
        <hijo v-bind:numero = "numeroPadre"></hijo>
    </div>
    `,
    data(){
        return{
            numeroPadre: 0
        }
    }
});