<template>
  <div style="margin-left: 10px; margin-top: 10px">
    <div style="margin-bottom: 20px">
      <a-input
        v-model="inputValue"
        placeholder="Basic usage"
        style="width: 300px"
      />
      <a-button type="primary" @click="handleClick" style="margin-left: 10px">Add</a-button>
    </div>

    <todo-list :todoListValue="todoListValue" @delete-item="handleDelete">
      <template #before="slotProps">
        <a-button type="danger" @click="handleDelete(slotProps.index)">Delete</a-button>
      </template>
      <template #="slotProps">
        <span style="margin-left: 10px">{{ slotProps.item }}</span>
      </template>
    </todo-list>
  </div>
</template>

<script lang="ts">
import { Options, prop, Vue } from "vue-class-component";
import axios from "./utils/axios";

// import TodoList from '@/components/TodoListClass.vue';
import TodoList from "@/components/TodoListNormal.vue";

@Options({
  components: { TodoList },
})
class App extends Vue {
  inputValue = "";
  todoListValue: string[] = [];

  handleClick() {
    this.todoListValue.push(this.inputValue);
    this.inputValue = "";
  }

  handleDelete(index: number) {
    this.todoListValue.splice(index, 1);
  }

  async mounted() {
    const response = await axios.get("todo.json");
    const data = response.data;
    this.todoListValue = data;
  }
}

export default App;
</script>

<style>
</style>
