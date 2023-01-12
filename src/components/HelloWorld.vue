<template>
  <div class="bg-blue-200 h-screen font-nunito">
     <div class="flex justify-center py-12">
      <div class="space-y-8 w-[500px]">
        <div class="h-10 ">
          <h1 class="text-center">Sign in to your account</h1>
        </div>
      
        <div class="h-full w-full py-4 bg-white rounded-xl px-8">
          <form class="bg-white flex-column py-3 space-y-6">
            <div>
              <label for="email" class="block font-bold">Email address</label>
              <input type="email" name="email" id="email" class="b">
            </div>
            <div>
              <label for="password" class="block font-bold">Password</label>
              <input type="password" name="password" id="password">
            </div>
            <div>
              <p class="text-blue-500">Forgot your password?</p>
            </div>
            <div>
              <button class="bg-blue-600 text-white w-full">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({ })
</script>