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
                    done: false
                },
                {
                    text: 'Portare il cane a spasso',
                    done: false
                },
                {
                    text: 'Andare a fare la spesa',
                    done: false
                }
            ],
            taskText: ''
        }
    },
    methods: {
        removeItem(index) {
            this.tasks.splice(index,1);
        },
        addItem(taskText) {
            if(taskText !== '' && taskText.length > 3) {
                const item = {
                    text: taskText,
                    done: false
                }
                this.tasks.push(item);
    
                this.taskText = ''
            }
        },
        changeStatus(index) {
            this.tasks[index].done = !this.tasks[index].done;
        }
    }
}).mount('#app');