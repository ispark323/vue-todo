<template>
  <div>
    <input
      type="text"
      placeholder="Todo를 입력해주세요"
      v-model="content"
      @keypress="handleKeyPress"
    />
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
  </div>
</template>

<script>
import { mapActions } from "vuex";
// import { dbTodoRef } from "../firebase";

export default {
  name: "Todo",
  data() {
    return {
      content: ""
    };
  },
  computed: {
    todos() {
      return this.$store.getters.getTodos;
    }
  },
  methods: {
    ...mapActions(["bindTodosRef", "createTodo", "deleteTodo", "updateTodo"]),
    handleKeyPress: function(event) {
      if (event.key === "Enter") {
        if (this.content.length === 0) {
          return alert("텍스트를 입력해주세요.");
        }
        this.createTodo(this.content);
        this.content = "";
      }
    },
    handleDelete: function(todo) {
      this.deleteTodo(todo);
    },
    handleUpdate: function(todo) {
      this.updateTodo(todo);
    }
  },
  created() {
    this.bindTodosRef();
    // this.$store.dispatch("bindTodosRef", dbTodoRef);
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
