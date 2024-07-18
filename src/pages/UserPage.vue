<template>

	<main class="page">

		<section class="page__about about"> 
			<div class="__container">

				<h1 class="page__title title">Title</h1>

				<my-button>Создать</my-button>

				<my-button>Очистить</my-button>

				<my-button @click="showDialog">Открыть окно</my-button>

				<my-input type="text" placeholder="Описание" />

				<my-dialog v-model:show="dialogVisible">Модальное окно</my-dialog>

			</div>
		</section>

	</main>

</template>

<script>

	export default {
		data() {
			return {
				dialogVisible: false,
			}
		},
		methods: {
			showDialog() {
				this.dialogVisible = true;
			},
		}
	}
	
</script>


<style lang="scss" scoped>

	.title	{
		font-size: 36px;
		font-weight: 700;
		line-height: 1.3;
	}

</style>