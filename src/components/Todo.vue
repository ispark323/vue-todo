<template>
  <div>
    <TodoInput />
    <TodoItem :todos="todos" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
// import { dbTodoRef } from "../firebase";

export default {
  name: "Todo",
  components: {
    TodoInput,
    TodoItem
  },
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
    ...mapActions(["bindTodosRef"])
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
