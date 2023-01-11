<template>
  <div class="bg-blue-200">
    <div>
      Sign in to your account
      <div>
        <form class="bg-white">
          <label for="email">Email address</label>
          <input type="text" name="email" id="email">
          <label for="password">Password</label>
          <input type="password" name="password" id="password">
          <p>Forgot your password?</p>
          <button>Sign in</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({ })
</script>