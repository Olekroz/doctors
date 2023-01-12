<template>
  <div class="bg-blue-100 h-screen font-nunito">
     <div class="flex justify-center py-12">
      <div class="space-y-8 w-[500px]">

        <div class="h-auto max-w-md">
          <span class="">
            <svg class="w-10 h-10 stroke-current text-blue-700 m-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
            </svg>

          </span>
          <h1 class="text-center font-bold">Sign in to your account</h1>
        </div>
      
        <div class="h-auto w-full py-8 bg-white rounded-xl px-10">
          <form class="bg-white flex-column py-3 space-y-6">
            <div>
              <label for="email" class="block font-bold">Email address</label>
              <input type="email" name="email" id="email" class="border-solid">
            </div>
            <div>
              <label for="password" class="block font-bold">Password</label>
              <input type="password" name="password" id="password">
            </div>
            <div>
              <p class="text-blue-500">Forgot your password?</p>
            </div>
            <div>
              <button class="bg-blue-600 text-white w-full h-[40px] rounded-md">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { isSVGTag } from '@vue/shared';
import { defineComponent } from 'vue';

export default defineComponent({ components: { isSVGTag } })
</script>