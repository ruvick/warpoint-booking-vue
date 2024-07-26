<script setup>

	import {ref} from 'vue';

	defineProps ({
		imageSrc: String,
		imageAlt: String,
		title: String,
		price: Number,
		description: String,  
	})

</script>

<template>

	<div class="activity-card-column row col-xs-12 col-sm-6 col-md-4">
		<div class="activity-card column items-start">
			<div class="activity-card__img q-mb-md">
				<img 
					v-if="imageSrc"
					:src="imageSrc"
					:alt="imageAlt"
				> 
			</div>
			<div class="activity-card__title-block row justify-between items-center q-mb-md">
				<div class="activity-card__title" v-if="title"> {{ title }} </div>
				<div class="activity-card__price" v-if="price">от {{ price }} ₽</div>
			</div>
			<div class="activity-card__descp" v-if="description"> {{ description }} </div>
		</div>
	</div>
	
</template>

<style lang="scss">
	.activity-card {
		flex: 0 1 100%;
		padding: 16px 12px;
		background-color: #25272D;
		border-radius: 16px;
		overflow: hidden;
	}
	.activity-card__img {
		position: relative;
		width: 100%;
		padding-bottom: 58.3%;
		background-color: grey;
		border-radius: 4px;
		overflow: hidden;
		img {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.activity-card__title-block {
		width: 100%;
		// flex: 1 1 auto;
		gap: 20px;
	}
	.activity-card__title {
		font-size: 18px;
		font-weight: 600;
		line-height: 20px;
		text-transform: uppercase;
		color: #C4C8CF;
	}
	.activity-card__price {
		font-size: 13px;
		font-weight: 600;
		line-height: 16px;
		letter-spacing: 0.06em;
		color: #C4C8CF;
	}
	.activity-card__descp {
		font-size: 11px;
		font-weight: 600;
		line-height: 14px;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: #5E6573;
	}
</style>