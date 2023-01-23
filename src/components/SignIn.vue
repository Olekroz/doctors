<template>
  <div class="bg-primary-50 min-h-screen">
    <div class="flex justify-center py-12">
      <div class="space-y-8 w-[450px] mx-8">
        <div class="h-auto max-w-md mb-10">
          <span class="">
            <svg
              class="w-9 h-9 stroke-current m-auto mb-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 45 45"
              stroke-width="1.5"
            >
              <path
                d="m24.15 34.15-9 8.95q-.85.95-2.15.95-1.3 0-2.15-.95L4.9 37.15q-.95-.85-.925-2.125Q4 33.75 4.9 32.85l8.9-8.95-8.9-9q-.85-.85-.975-2.025Q3.8 11.7 4.65 10.85l6.2-6.2q.9-.9 2.15-.9t2.15.9l9 9 8.95-9q.9-.9 2.15-.875 1.25.025 2.15.875l5.95 5.95q.85.9.875 2.15.025 1.25-.875 2.15l-8.95 9 8.95 8.95q.9.9.9 2.15t-.9 2.15l-6.2 6.2q-.85.85-2.025.725-1.175-.125-2.025-.975Zm0-12q.85 0 1.4-.55.55-.55.55-1.4 0-.85-.55-1.4-.55-.55-1.4-.55-.85 0-1.4.55-.55.55-.55 1.4 0 .85.55 1.4.55.55 1.4.55Zm-8.4-.2 6.35-6.3-9-8.95-6.2 6.2Zm4.7 3.85q.85 0 1.4-.55.55-.55.55-1.4 0-.85-.55-1.4-.55-.55-1.4-.55-.85 0-1.4.55-.55.55-.55 1.4 0 .85.55 1.4.55.55 1.4.55Zm3.7 3.7q.85 0 1.4-.55.55-.55.55-1.4 0-.85-.55-1.4-.55-.55-1.4-.55-.85 0-1.4.55-.55.55-.55 1.4 0 .85.55 1.4.55.55 1.4.55Zm3.65-3.7q.85 0 1.4-.55.55-.55.55-1.4 0-.85-.55-1.4-.55-.55-1.4-.55-.85 0-1.4.55-.55.55-.55 1.4 0 .85.55 1.4.55.55 1.4.55Zm-1.7 6.3 9 9 6.2-6.2-8.95-8.95Zm-8.2-14.4Zm12.4 12.4Z"
              />
            </svg>
          </span>
          <h1 class="text-center">Sign in to your account</h1>
        </div>

        <div class="h-auto w-full py-6 bg-white rounded-xl px-8 shadow text-sm">
          <form @submit.prevent class="bg-white flex-column py-3 space-y-6 mx-8">
            <div>
              <label for="email" class="block font-bold mb-2">Email address</label>
              <input
                type="email"
                name="email"
                id="email"
                @input="onInput"
                class="border rounded appearance-none w-full h-9 py-2 px-3"
              />
              <p v-if="emailError" class="text-red-500">Wrong email address. Please enter correct email.</p>
            </div>
            <div>
              <label for="password" class="block font-bold mb-2">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                @input="onPassword"
                class="border rounded appearance-none w-full h-9 py-2 px-3"
              />
              <p v-if="passwordError" class="text-red-500">
                The password must be at least 10 characters long, contain at least one uppercase letter and at least one
                number.
              </p>
            </div>
            <div>
              <p class="text-blue-500">Forgot your password?</p>
            </div>
            <div>
              <button
                data-modal-target="defaultModal"
                data-modal-toggle="defaultModal"
                class="bg-blue-600 text-white w-full h-[40px] rounded-md"
                @click="signIn"
              >
                Sign in
              </button>

              <div id="defaultModal">
                <div></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { validateEmail } from "../core/validators/email-validator";
import { validatePassword } from "../core/validators/password-validator";
import { a, httpClient } from "../source";

export default defineComponent({
  methods: {
    onInput(event: any) {
      this.email = event.target.value;
      this.emailError = validateEmail(this.email);
    },
    onPassword(event: any) {
      this.password = event.target.value;
      this.passwordError = validatePassword(this.password);
    },
    async signIn() {
      this.emailError = validateEmail(this.email);
      this.passwordError = validatePassword(this.password);
      if (!this.emailError && !this.passwordError) {
        let res = await httpClient.request("http://localhost:3000/sign-in", "POST", {
          email: this.email,
          password: this.password,
        });
        console.log(res);
        if (res.success == false) {
          alert("Błąd logowania!");
        }
        if (res.success) {
          this.$router.push({ path: "/home", name: "Home" });
        }
      } else {
      }
    },
  },
  data() {
    return {
      email: "",
      emailError: false,
      password: "",
      passwordError: false,
    };
  },
});
</script>
