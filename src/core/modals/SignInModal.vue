<template>
  <div class="bg-black bg-opacity-60 fixed z-1 inset-0 flex justify-center items-center" v-if="display">
    <div class="flex-col justify-center bg-white rounded-md p-8">
      <div class="text-black">{{ message }}</div>

      <div class="flex justify-center pt-7">
        <button class="bg-blue-500 h-[30px] w-[50px] rounded-md" @click="hide">OK</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    show(message: string) {
      this.message = message;
      this.display = true;
    },
    hide() {
      this.display = false;
    },
  },
  data() {
    return {
      display: false,
      message: "Server error",
    };
  },
});
</script>
