const {createApp} = Vue;

createApp({
    data() {
        return{
            tasks: [
                {
                    text: 'Lavare la macchina',
                    done: false
                },
                {
                    text: 'Andare in palestra',
                    done: false
                },
                {
                    text: 'Aggiustare orologio',
                    done: true
                },
                {
                    text: 'Portare il cane a spasso',
                    done: false
                },
                {
                    text: 'Andare a fare la spesa',
                    done: false
                }
            ]
        }
    }
}).mount('#app');