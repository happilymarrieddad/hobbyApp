<template lang='pug'>
	div.row
		div.col
		div.col
			//- Main Image
			img.mx-auto.d-block(src='/static/images/main.png',alt='No Image Yet')
			br

			//- Login Card
			b-card.card-outline-primary(show-header,show-footer)

				span(slot='header')
					span Sign In
					router-link.float-right(to='/password/forgot') Forgot Password?

				b-input-group
					b-input-group-button(slot='left')
						b-btn(variant='default',disabled=true)
							span.glyphicon.glyphicon-user
					b-form-input(v-model='email')
				br
				b-input-group
					b-input-group-button(slot='left')
						b-btn(variant='default',disabled=true)
							span.glyphicon.glyphicon-lock
					b-form-input(v-model='password',type='password')
				hr
				b-btn.float-right(variant='default',@click='login',:disabled='submitDisabled') Login

				span(slot='footer')
					router-link(to='/api') API Page
					router-link.float-right(to='/terms') Terms of Service

		div.col
</template>

<script>

	
	export default {
		data() {
			return {
				image:null,
				message:null,
				submitDisabled:false,

				email:'',
				password:'',
				image:null
			}
		},
		methods:{
			login() {
				let vm = this
				vm.error = ''
				let email = vm.email
				let password = vm.password
				if (!email || email.indexOf('@') == -1) return vm.error = 'A valid email is required'
				if (!password) return vm.error = 'A valid password is required'
				vm.submitDisabled = true
				setTimeout(() => vm.submitDisabled = false,5000)

				vm.$socket.emit('login',{
					email,
					password
				}).then(user => {

					if (user && user.reset_password) {
						vm.$growl.error('warning',`
							Your account requires a password reset.
							Please check your email.
						`)
						return setTimeout(() => vm.submitDisabled = false,2000)
					}

					vm.submitDisabled = false
				}).catch(err => {
					vm.$growl.error(err)
					vm.submitDisabled = false
				})
			}
		},
		mounted() {
			
		}
	}

</script>

<style>
	
</style>