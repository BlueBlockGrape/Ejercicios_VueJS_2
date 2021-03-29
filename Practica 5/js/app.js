const app = new Vue({
    el: '#app',
    data:{ //solo datos sin lógica
        mensaje: 'hola soy BlueBlock',
        contador: 0
    },
    computed:{
        invertido(){
            return this.mensaje.split('').reverse().join('');
        },
        color(){
            return {
                'bg-success' : this.contador <= 10,
                'bg-warning' : this.contador > 10 && this.contador < 20,
                'bg-danger' : this.contador >= 20
            }
        }
    }
})