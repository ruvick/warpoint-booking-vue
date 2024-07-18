<template>

	<header class="header">
		<div class="header__wrapper">
			<div class="header__container _container">
				<div class="header__main">
					<div @click="$router.push('/')" class="header__logo">Logo</div>
					<Navbar/>
				</div>
			</div>
		</div>
	</header>

</template>

<script>

	import Navbar from '@/components/Navbar.vue';

export default {
	components: {
		Navbar,
	}
}

</script>

<style lang="scss" scoped>

.header {
	position: relative;
	z-index: 50;
	padding: 10px 0;
	background-color: #fff;

	// @media (min-width: 1025px) {
	// 	transform: translateY(0);
	// 	position: fixed;
	// 	top: 0;
	// 	left: 0;
	// 	width: 100%;
	// 	transition: all 0.4s ease 0.1s;
	// }

	&._header-scroll {
		transform: translateY(-200%);
		width: 100%;
		background-color: #fff;
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
	}

	&._header-show {
		top: 0%;
		transform: translateY(0);
	}
}

.lock .header {
	@media (min-width: 1025px) {
		left: auto;
		right: 3.3px;
	}
}
.header__main {
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 30px;
}
.header__logo {
	cursor: pointer;
}
//====================================================================================================

//Burger
.icon-menu {
	display: none;
	// @media (max-width: $mobile) {
	display: block;
	position: relative;
	width: 18px;
	height: 18px;
	cursor: pointer;
	z-index: 5;

	span,
	&::before,
	&::after {
		content: "";
		transition: all 0.3s ease 0s;
		left: 0px;
		position: absolute;
		width: 100%;
		height: 2px;
		background-color: #fff;
	}

	&::before {
		top: 0px;
	}

	&::after {
		bottom: 0px;
	}

	span {
		top: calc(50% - 1px);
	}

	.menu-open & {
		span {
			transform: scale(0);
		}

		&::before {
			transform: rotate(-45deg);
			top: calc(50% - 1px);
		}

		&::after {
			transform: rotate(45deg);
			bottom: calc(50% - 1px);
		}
	}
}

</style>