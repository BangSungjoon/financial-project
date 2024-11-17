import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useFinancialStore = defineStore('finance', () => {
	const API_URL = 'http://127.0.0.1:8000'
	const signUp = function (payload) {
		const username = payload.username
		const password1 = payload.password1
		const password2 = payload.password2

		axios({
			method: 'post',
			url: `${API_URL}/accounts/signup/`,
			data: {
				username, password1, password2
			}
		})
			.then(res => {
				console.log('회원가입이 완료되었습니다.')
				const password = password1
				login({ username, password })
			})
			.catch(err => console.log(err, '문제발생'))
	}
	return { API_URL, signUp }
}, { persist: true })