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

Vue.component('message',{
    props: ['title','body'],

    data() {
        return {
            isVisible: true
        };
    },

    template: `
        <article class="message" v-show="isVisible">
            <div class="message-header">
            <p>{{ title }}</p>
            <button class="delete" aria-label="delete" @click="isVisible = false"></button>
            </div>
            <div class="message-body">
            {{ body }}
            </div>
        </article>
    `
});
new Vue({
    el: '#root'
});