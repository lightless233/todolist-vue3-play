<template>
  <ul>
    <li v-for="(item, index) in todoListValue" :key="index">
      <!-- <button @click="handleDelete(index)">Delete</button> -->
      <slot name="before" :index="index"></slot>
      <slot :item="item"></slot>
    </li>
  </ul>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        todoListValue: Array
    },

    methods: {
        handleDelete(index: number) {
            this.$emit("delete-item", index);
        }
    },

    setup(props, context) {
        console.log(context);
    }

});

</script>