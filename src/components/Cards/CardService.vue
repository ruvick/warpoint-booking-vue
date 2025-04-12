<script setup>
	import { defineProps, defineEmits } from 'vue';

	// Определение свойств компонента с указанием типов и значений по умолчанию
	const props = defineProps({
		imageSrc: {
			type: String,
			required: true 
		},
		imageAlt: {
			type: String,
			default: 'Изображение' 
		},
		title: {
			type: String,
			required: true 
		},
		subtitle: {
			type: String,
			default: '' 
		},
		time: {
			type: String,
			default: '' 
		},
		quantity: {
			type: String,
			default: '0' 
		},
		price: {
			type: Number,
			required: true 
		},
		btn: {
			type: String,
			default: 'Кнопка' 
		},
	});

	// Определение событий, которые компонент может эмитировать
	const emit = defineEmits(['select']);

	// Обработчик клика, который эмитирует событие 'select' с заголовком
	const handleClick = () => {
		emit('select', props.title); // Эмитируем событие с заголовком
	};
</script>

<template>
	<div class="services-card-column row col-xs-12 col-sm-6 col-md-4" @click="handleClick">
		<div class="services-card column items-start">
			<div class="services-card__img">
				<img v-if="imageSrc" :src="imageSrc" :alt="imageAlt" />
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
					<q-btn unelevated class="footer-services-card__btn text-weight-bold col" @click.stop="$router.push('/tarif')">
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
		background-color: #25272d;
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
	.header-services-card__title {
		font-size: 16.22px;
		font-weight: 600;
		line-height: 18.02px;
		letter-spacing: 0.02em;
		color: #c7cccc;
		&:not(:last-child) {
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
		&:not(:last-child) {
			margin-bottom: 6px;
		}
	}
	.footer-services-card__quantity {
		&:not(:last-child) {
			margin-bottom: 6px;
		}
	}
	.footer-services-card__price {
		color: #c4c8cf;
	}
	.footer-services-card__btn {
		font-size: 10.81px;
		font-weight: 600;
		line-height: 12.62px;
		letter-spacing: 0.1em;
		color: #c4c8cf;
		background-color: #0554f8;
		border-radius: 3.6px;
	}
</style>
