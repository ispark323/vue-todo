<template>
  <div id="app">
    <Todo />
    <!-- <div id="nav">
      <router-link to="/">Todo</router-link>|
    </div>
    <router-view />-->
  </div>
</template>

<script>
// @ is an alias to /src
import Todo from "@/components/Todo.vue";

export default {
  components: {
    Todo
  }
};
</script>

<style lang="scss"></style>
