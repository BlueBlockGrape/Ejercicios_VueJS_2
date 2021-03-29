Vue.component('hijo',{
    template: /*template*/
    `
    <div class="py-5 bg-success">
        <h4>Componente hijo {{numero}}</h4>
    </div>
    `,
    props: ['numero']
});