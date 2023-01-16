

<template>



<RouterView>
    <SignIn />
    <Home />
</RouterView>

</template>


<script lang="ts">
import { defineComponent } from 'vue';
import SignIn from './components/SignIn.vue';
import Home from './components/Home.vue';


export default defineComponent({ components: {SignIn, Home} })
</script>