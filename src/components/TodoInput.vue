<template>
  <input
    type="text"
    placeholder="Todo를 입력해주세요"
    v-model="content"
    @keypress="handleKeyPress"
  />
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      content: ""
    };
  },
  methods: {
    ...mapActions(["createTodo"]),
    handleKeyPress: function(event) {
      if (event.key === "Enter") {
        if (this.content.length === 0) {
          return alert("텍스트를 입력해주세요.");
        }
        this.createTodo(this.content);
        this.content = "";
      }
    }
  }
};
</script>
