<template>
  <ul>
    <li v-for="(item, index) in todoListValue" :key="index">
      <button @click="handleDelete(index)">Delete</button>
      <slot name="before"></slot> {{ item }} <slot></slot>
    </li>
  </ul>
</template>

<script lang="ts">
import { Vue, Options, prop } from "vue-class-component";

class Props {
  todoListValue = prop<string[]>({ default: [] });
}

class TodoList extends Vue.props(Props) {
    handleDelete(index: number) {
        this.$emit("delete-item", index);
    }
}

export default TodoList;
</script>
