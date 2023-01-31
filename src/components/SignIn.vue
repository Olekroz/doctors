<template>
  <SignInModal ref="modal" />
  <div class="bg-primary-50 min-h-screen">
    <div class="flex justify-center py-12">
      <div class="space-y-8 w-[450px] mx-8">
        <div class="h-auto max-w-md mb-10">
          <!-- <icon name="icon" class="w-9 h-9 stroke-current m-auto mb-4"></icon> -->
          <div v-html="icon({ svgClasses: 'w-9 h-9 stroke-current m-auto mb-4' })"></div>

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
              <button class="bg-blue-600 text-white w-full h-[40px] rounded-md" @click="signIn">Sign in</button>
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
import { httpClient } from "../source";
import { icon } from "../core/model/icon";
import SignInModal from "../core/modals/SignInModal.vue";

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
          (this.$refs["modal"] as InstanceType<typeof SignInModal>).show("Sign in error");
        }
        if (res.success) {
          this.$router.push({ path: "/home", name: "Home" });
        }
      }
    },
  },
  data() {
    return {
      email: "",
      emailError: false,
      password: "",
      passwordError: false,
      icon: icon,
      modalError: false,
    };
  },
  components: {
    SignInModal,
  },
});
</script>
