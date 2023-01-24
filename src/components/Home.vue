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
          <h2 class="text-center">Onboarding</h2>
        </div>

        <div class="bg-blue-300 text-white w-[120px] h-[40px] rounded-md text-center">
          <span class="">Step 1 of 1</span>
        </div>

        <div class="h-auto w-full py-6 bg-white rounded-xl px-8 shadow text-sm">
          <form @submit.prevent class="bg-white flex-column py-3 space-y-6 mx-8">
            <h3 class="block font-normal mb-2">Identification</h3>
            <div class="block">
              <label for="firstname">Firstname</label>
              <input
                type="text"
                id="firstname"
                placeholder="Mike"
                class="border rounded appearance-none w-full h-9 py-2 px-3"
              />
            </div>
            <div>
              <label for="middlename">Middlename</label>
              <input
                type="text"
                id="middlename"
                placeholder="John"
                class="border rounded appearance-none w-full h-9 py-2 px-3"
              />
            </div>
            <div>
              <label for="lastname">Lastname</label>
              <input
                type="text"
                id="lastname"
                placeholder="Smith"
                class="border rounded appearance-none w-full h-9 py-2 px-3"
              />
            </div>
            <div>
              <label for="birthdate">Birthdate</label>
              <input
                type="text"
                id="birthdate"
                placeholder="04-22-1982"
                class="border rounded appearance-none w-full h-9 py-2 px-3"
              />
            </div>
            <div>
              <label for="phone number">Phone number</label>
              <input
                type="text"
                id="phone number"
                placeholder="04-22-1982"
                class="border rounded appearance-none w-full h-9 py-2 px-3"
              />
            </div>
            <div>
              <label for="1234567890">NPI</label>
              <input
                type="text"
                id="1234567890"
                placeholder="04-22-1982"
                class="border rounded appearance-none w-full h-9 py-2 px-3"
              />
            </div>
            <div>
              <button class="bg-blue-600 text-white w-[80px] h-[40px] rounded-md">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>
