new Vue({
    el: '#app',
    data: {
      newTodo: '',
      todos: [],
    },
    methods: {
      addTodo() {
        this.todos.push({ text: this.newTodo, completed: false });
        this.newTodo = '';
      },
    },
  });
  