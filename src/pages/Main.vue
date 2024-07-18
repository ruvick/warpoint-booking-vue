<template>

	<main class="page">

		<section class="page__about about"> 
			<div class="__container">

				<div class="row">Main</div>

				<div class="router-link">
					<router-link to="/users">Пользователи</router-link>
					<router-link to="/about">О нас</router-link>
				</div>

			</div>
		</section>

	</main>

</template>

<script>

	export default {
	}
	
</script>


<style lang="scss" scoped>

	.router-link {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 10px;
		margin-top: 25px;
	}

</style>