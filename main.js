Vue.component('task-list',{
    template: `
        <div>
            <task v-for="task in tasks">{{ task.description }}</task>
        </div>
    `,

    data() {
        return {
            tasks: [
                { description: 'Go to Store', completed: true},
                { description: 'Sleep', completed: true},
                { description: 'Eat', completed: false},
                { description: 'Exercise', completed: false}
            ]
        }
    }
});

Vue.component('task',{
    template: '<li><slot></slot></li>'
});

new Vue({
    el: '#root'
});