<script setup>
import { ref, defineProps } from "vue";

const count = ref(0);
const message = ref("");

const increaseCounter = () => {
  count.value += 1;
};

defineProps({
  messageText: String,
  messageFunction: Function,
});
</script>

<template>
  <div>
    <div>Hello {{ messageText }}</div>
    <button @click="increaseCounter">Click {{ count }}</button>
    <div>
      <input type="text" v-model="message" />
      <button @click="messageFunction(message)">send message to app</button>
    </div>
  </div>
</template>