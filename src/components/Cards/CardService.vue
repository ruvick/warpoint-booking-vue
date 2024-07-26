<script setup>

	import {ref} from 'vue';

	defineProps ({
		imageSrc: String,
		imageAlt: String,
		title: String, 
		subtitle: String,
		time: String,
		quantity: String,
		price: Number,
		btn: String,
	})

</script>

<template>

	<div class="services-card-column row col-xs-12 col-sm-6 col-md-4">
		<div class="services-card column items-start">
			<div class="services-card__img">
				<img 
					v-if="imageSrc"
					:src="imageSrc"
					:alt="imageAlt"
				>
			</div>
			<div class="services-card__header header-services-card">
				<div class="header-services-card__title" v-if="title"> {{ title }} </div>
				<div class="header-services-card__subtitle" v-if="subtitle"> {{ subtitle }} </div>
			</div>
			<div class="services-card__footer footer-services-card row items-end">
				<div class="footer-services-card__descp col">
					<div class="footer-services-card__titme" v-if="time"> {{ time }} </div>
					<div class="footer-services-card__quantity" v-if="quantity"> {{ quantity }} </div>
					<div class="footer-services-card__price" v-if="price">от {{ price }} ₽</div>
				</div>
				<div class="footer-services-card__buttons col-auto">
					<q-btn unelevated class="footer-services-card__btn text-weight-bold col" @click="$router.push('/tarif')">
						<span class="block" v-if="btn"> {{ btn }} </span> 
					</q-btn>
				</div>
			</div>
		</div>
	</div>
	
</template>

<style lang="scss">
		.services-card {
		position: relative;
		flex: 0 1 100%;
		min-height: 180px;
		padding: 18px 18px 14px 18px;
		background-color: #25272D;
		border-radius: 15px;
		overflow: hidden;
	}
	.services-card__img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
			object-position: right;
		}
	}
	.services-card__header {
		width: 100%;
		flex: 1 1 auto;
		z-index: 3;
	}
	.header-services-card {
	}
	.header-services-card__title {
		font-size: 16.22px;
		font-weight: 600;
		line-height: 18.02px;
		letter-spacing: 0.02em;
		color: #C7CCCC;
		&:not(:last-child){
			margin-bottom: 6px;
		}
	}
	.header-services-card__subtitle {
		font-size: 10.81px;
		font-weight: 600;
		line-height: 12.62px;
		letter-spacing: 0.1em;
		color: #535965;
	}
	.services-card__footer {
		z-index: 3;
	}
	.footer-services-card {
		width: 100%;
		font-size: 10.81px;
		font-weight: 600;
		line-height: 12.62px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: #535965;
	}
	.footer-services-card__titme {
		&:not(:last-child){
			margin-bottom: 6px;
		}
	}
	.footer-services-card__quantity {
		&:not(:last-child){
			margin-bottom: 6px;
		}
	}
	.footer-services-card__price {
		color: #C4C8CF;
	}
	.footer-services-card__btn {
		font-size: 10.81px;
		font-weight: 600;
		line-height: 12.62px;
		letter-spacing: 0.1em;
		color: #C4C8CF;
		background-color: #0554F8;
		border-radius: 3.6px;
	}
</style>