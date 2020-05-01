<template>
  <div>
    <p v-for="todo in todos" :key="todo.id">
      <span
        @click="handleUpdate(todo)"
        v-bind:class="{ done: todo.completed }"
        >{{ todo.text }}</span
      >
      <button @click="handleDelete(todo)">X</button>
    </p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    todos: Object
  },
  methods: {
    ...mapActions(["deleteTodo", "updateTodo"]),
    handleDelete: function(todo) {
      this.deleteTodo(todo);
    },
    handleUpdate: function(todo) {
      this.updateTodo(todo);
    }
  }
};
</script>
