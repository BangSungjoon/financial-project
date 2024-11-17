<template>
	<div>
		<h1>회원가입 페이지</h1>
		<form @submit.prevent="SignUp">
			<label for="username">username : </label>
			<input type="text" id="username" v-model.trim="username" autocomplete="username"><br>

            <!-- <label for="email">email : </label>
            <input type="email" id="email" v-model.trim="email"><br> -->
			
			<label for="password1"> password : </label>
			<input type="password" id="password1" v-model.trim="password1" autocomplete="new-password"><br>
			
			<label for="password2"> password confirmation : </label>
			<input type="password" id="password2" v-model.trim="password2" autocomplete="new-password">
			
			<input type="submit" value="SignUp">
		</form>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { useFinancialStore } from '@/stores/finance'
const store = useFinancialStore()

const username = ref(null)
// const email = ref(null)
const password1 = ref(null)
const password2 = ref(null)

const SignUp = function () {
    const payload = {
        username: username.value,
        // email: email.value,
        password1: password1.value,
        password2: password2.value,
    }
    store.signUp(payload)
}
</script>

<style scoped>

</style>