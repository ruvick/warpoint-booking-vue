<script setup>
	import { defineProps, defineEmits } from 'vue';

	// Определение свойств компонента
	const props = defineProps({
		imageSrc: {
			type: String,
			required: true 
		},
		imageAlt: {
			type: String,
			required: true 
		},
		title: {
			type: String,
			required: true 
		},
		price: {
			type: Number,
			required: true 
		},
		description: {
			type: String,
			default: '' 
		}
	});

	// Определение событий, которые компонент может эмитировать
	const emit = defineEmits(['select']);

	// Обработчик клика, который эмитирует событие 'select' с заголовком
	const handleClick = () => {
		emit('select', props.title); 
	};
</script>

<template>
	<div class="activity-card-column row col-xs-12 col-sm-6 col-md-4" @click="handleClick">
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