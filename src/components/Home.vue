<template>
  <div class="bg-primary-50 min-h-screen flex justify-center">
    <div class="space-y-8 w-full max-w-md my-10">
      <div class="h-auto max-w-md mb-10">
        <div v-html="icon({ svgClasses: 'w-9 h-9 stroke-current m-auto mb-4' })"></div>
        <h2 class="text-center">Onboarding</h2>
      </div>

      <div class="py-6 bg-white rounded-xl px-8 shadow text-sm relative mx-10 sm:mx-0">
        <div
          class="bg-blue-400 text-white w-[120px] h-[40px] rounded-md flex items-center justify-center absolute left-[50%] -translate-x-[50%] top-[0%] -translate-y-[50%]"
        >
          Step 1 of 1
        </div>

        <form @submit.prevent class="flex-column pb-3 space-y-6 mx-8">
          <h3 class="font-normal mb-2">Identification</h3>
          <div>
            <div class="flex flex-col sm:flex-row sm:justify-between">
              <label for="firstname" class="">Firstname</label>
              <input
                type="text"
                id="firstname"
                placeholder="Mike"
                @input="onInput"
                class="border rounded appearance-none h-9 py-2 px-3 placeholder:text-end"
              />
            </div>

            <p v-if="inputError" class="text-red-500 flex row">
              The input must be at least 2 characters long and maximum 150 characters long.
            </p>
          </div>

          <div>
            <div class="flex-none sm:flex sm:justify-between items-center">
              <label for="middlename">Middlename</label>
              <input
                type="text"
                id="middlename"
                placeholder="John"
                @input="onInput2"
                class="border rounded appearance-none h-9 py-2 px-3 placeholder:text-end"
              />
            </div>
            <p v-if="inputError2" class="text-red-500">
              The input must be at least 2 characters long and maximum 150 characters long.
            </p>
          </div>

          <div>
            <div class="flex-none sm:flex sm:justify-between items-center">
              <label for="lastname">Lastname</label>
              <input
                type="text"
                id="lastname"
                placeholder="Smith"
                @input="onInput3"
                class="border rounded appearance-none h-9 py-2 px-3 placeholder:text-end"
              />
            </div>
            <p v-if="inputError3" class="text-red-500">
              The input must be at least 2 characters long and maximum 150 characters long.
            </p>
          </div>

          <div>
            <div class="flex-none sm:flex sm:justify-between items-center">
              <label for="birthdate">Birthdate</label>
              <input
                type="text"
                id="birthdate"
                placeholder="04-22-1982"
                @input="onInput4"
                class="border rounded appearance-none h-9 py-2 px-3 placeholder:text-end"
              />
            </div>

            <p v-if="inputError4" class="text-red-500">
              The input must be at least 2 characters long and maximum 150 characters long.
            </p>
          </div>

          <div>
            <div class="flex-none sm:flex sm:justify-between items-center">
              <label for="phone number">Phone number</label>
              <input
                type="text"
                id="phone number"
                placeholder="(123)456-7890"
                @input="onInput5"
                class="border rounded appearance-none h-9 py-2 px-3 placeholder:text-end"
              />
            </div>

            <p v-if="inputError5" class="text-red-500">
              The input must be at least 2 characters long and maximum 150 characters long.
            </p>
          </div>

          <div>
            <div class="flex-none sm:flex sm:justify-between items-center">
              <label for="NPI">NPI</label>
              <input
                type="text"
                id="NPI"
                placeholder="04-22-1982"
                @input="onInput6"
                class="border rounded appearance-none h-9 py-2 px-3 placeholder:text-end"
              />
            </div>

            <p v-if="inputError6" class="text-red-500">
              The input must be at least 2 characters long and maximum 150 characters long.
            </p>
          </div>
          <div class="flex justify-end pt-4">
            <button class="bg-blue-400 text-white w-[80px] h-[35px] rounded-md" @click="onboarding">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { validate } from "../core/validators/onboarding-validator";
import { icon } from "../core/model/icon";
import { OnboardingInput } from "../core/model/onboarding-input";
import { httpClient } from "../source";
import SignInModal from "../core/modals/SignInModal.vue";

export default defineComponent({
  methods: {
    onInput(event: any) {
      this.input.firstname = event.target.value;
      this.inputError = validate(this.input.firstname);
    },
    onInput2(event: any) {
      this.input.middlename = event.target.value;
      this.inputError2 = validate(this.input.middlename);
    },
    onInput3(event: any) {
      this.input.lastname = event.target.value;
      this.inputError3 = validate(this.input.lastname);
    },
    onInput4(event: any) {
      this.input.birthdate = event.target.value;
      this.inputError4 = validate(this.input.birthdate);
    },
    onInput5(event: any) {
      this.input.phone = event.target.value;
      this.inputError5 = validate(this.input.phone);
    },
    onInput6(event: any) {
      this.input.NPI = event.target.value;
      this.inputError6 = validate(this.input.NPI);
    },
    async onboarding() {
      this.inputError = validate(this.input.firstname);
      this.inputError2 = validate(this.input.middlename);
      this.inputError3 = validate(this.input.lastname);
      this.inputError4 = validate(this.input.birthdate);
      this.inputError5 = validate(this.input.phone);
      this.inputError6 = validate(this.input.NPI);

      if (
        !this.inputError &&
        !this.inputError2 &&
        !this.inputError3 &&
        !this.inputError4 &&
        !this.inputError5 &&
        !this.inputError6
      ) {
        let res = await httpClient.request("http://localhost:3000/onboarding", "POST", {
          firstname: this.input.firstname,
          middlename: this.input.middlename,
          lastname: this.input.lastname,
          birthdate: this.input.birthdate,
          phone: this.input.phone,
          NPI: this.input.NPI,
        });
        console.log(res);
        if (res.success == false) {
          (this.$refs["modal"] as InstanceType<typeof SignInModal>).show("Onboarding in error");
        }
        if (res.success) {
          console.log("w środku");
          this.$router.push({ name: "New" });
        }
      }
    },
  },
  data() {
    return {
      inputValue: "",
      inputError: false,
      inputError2: false,
      inputError3: false,
      inputError4: false,
      inputError5: false,
      inputError6: false,
      icon: icon,

      input: new OnboardingInput("", "", "", "", "", ""),
    };
  },
  components: {
    SignInModal,
  },
});
</script>
