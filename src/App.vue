<template>
  <input v-model="inputValue" />
  <button @click="handleClick">Add</button>

  <todo-list 
    :todoListValue="todoListValue"
    @delete-item="handleDelete"
  >
    <template #before="slotProps">
      <button @click="handleDelete(slotProps.index)">Delete</button>
    </template>
    <template #="slotProps">
      {{slotProps.item}}
    </template>
  </todo-list>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TodoList from '@/components/TodoList.vue';

@Options({
  components: {TodoList}
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


}

export default App;

</script>

<style>
</style>
