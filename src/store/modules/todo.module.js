import { firestoreAction } from "vuexfire";
import { dbTodoRef } from "../../firebase";
import crs from "crypto-random-string";

const state = {
  todos: []
};
const getters = {
  getTodos: state => state.todos
};

const mutations = {
  // ADD_TODO(state, todo) {
  //   state.todos = [...state.todos, todo];
  // },
  // DELETE_TODO(state, id) {
  //   state.todos = state.todos.filter(todo => todo.id !== id);
  // },
  // UPDATE_TODO(state, id) {
  //   state.todos = state.todos.map(todo =>
  //     todo.id === id ? { ...todo, completed: !todo.completed } : todo
  //   );
  // },
};
const actions = {
  bindTodosRef: firestoreAction(async context => {
    try {
      return await context.bindFirestoreRef(
        "todos",
        dbTodoRef.orderBy("createdAt")
      );
    } catch (error) {
      alert(error);
    }
  }),
  createTodo: async (context, content) => {
    try {
      const newTodo = {
        text: content,
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      await dbTodoRef.doc(crs({ length: 8 })).set(newTodo);
    } catch (error) {
      alert(error);
    }
  },
  deleteTodo: async (context, todo) => {
    try {
      await dbTodoRef.doc(todo.id).delete();
    } catch (error) {
      alert(error);
    }
  },
  updateTodo: async (context, todo) => {
    try {
      await dbTodoRef.doc(todo.id).update({
        completed: !todo.completed
      });
    } catch (error) {
      alert(error);
    }
  }
  // updateTodo({ commit }, id) {
  //   commit("UPDATE_TODO", id);
  // }
};

export default {
  state,
  getters,
  mutations,
  actions
};
