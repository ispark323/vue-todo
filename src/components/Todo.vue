<template>
  <div>
    <input
      type="text"
      placeholder="Todo를 입력해주세요"
      v-model="newTodo"
      @keypress="handleKeyPress"
    />
    <div>
      <p v-for="todo in todos" :key="todo.id">
        <span
          @click="handleUpdate(todo.id)"
          v-bind:class="{ done: todo.completed }"
        >
          {{ todo.text }}
        </span>
        <button @click="handleDelete(todo.id)">X</button>
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Todo",
  data() {
    return {
      newTodo: ""
    };
  },
  computed: {
    todos() {
      return this.$store.getters.getTodos;
    }
  },
  methods: {
    ...mapActions(["createTodo", "deleteTodo", "updateTodo"]),
    handleKeyPress: function(event) {
      if (event.key === "Enter") {
        this.createTodo(this.newTodo);
        this.newTodo = "";
      }
    },
    handleDelete: function(id) {
      this.deleteTodo(id);
    },
    handleUpdate: function(id) {
      this.updateTodo(id);
    }
  }
};
</script>

<style scoped>
input {
  width: 70%;
}

div {
  text-align: center;
  margin: 20px;
}

.done {
  color: blue;
  text-decoration: line-through;
}
</style>
