<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import HeaderBooking from '@/components/HeaderBooking.vue';

export default {
  components: {
    HeaderBooking
  },
  setup() {
    const router = useRouter();
    const bookingData = ref({}); // Реактивная переменная для хранения данных бронирования

    // Загружаем данные бронирования из sessionStorage при монтировании компонента
    onMounted(() => {
      const savedData = sessionStorage.getItem('bookingData');
      if (savedData) {
        bookingData.value = JSON.parse(savedData); // Парсим и сохраняем данные в реактивную переменную
      }
    });

    // Функция для выбора бронирования
    const selectBooking = (title) => {
      sessionStorage.setItem('selectedBooking', title); // Сохраняем выбранное бронирование в sessionStorage
      router.push({ name: 'main' }); // Перенаправляем на страницу 'main'
    };

    return {
      bookingData,
      selectBooking
    };
  }
};
</script>

<template>

	<q-layout>
		<q-page-container class="my-page-container body--dark">
			<q-page class="page-internal q-pt-md q-pb-md q-pl-sm q-pr-sm">  

				<HeaderBooking/>

				<div class="tarif-inner column items-start" style="width: 100%;">

					<div class="container-md q-pt-md q-pl-sm q-pr-sm"> 
						
						<div class="row q-pt-md q-pb-md" style="flex: 1 1 auto;">

							<div class="booking-card-column row col-xs-12 col-sm-6 col-md-4" @click="selectServices('Открытая игра')">
								<div class="booking-card column items-start q-pt-lg q-pb-lg q-pl-lg q-pr-lg">

									<div class="booking-card__header header-booking-card row justify-between">
										<div class="header-booking-card__title col-8">
											Ваше бронирование подтверждено!
										</div>
										<div class="header-booking-card__icon col-auto row">
											<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
												<circle cx="18" cy="18" r="18" fill="#0043CE"/>
												<path d="M11 18L16 23L26 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
											</svg>
										</div>
									</div>

									<div class="booking-card__body body-booking-card q-pt-xl q-pb-md">

										<div class="input-main input-main--dooble q-pt-sm q-pb-md q-mb-lg">
											<div class="input-main__label q-mb-md">Номер бронирования</div>
											<div class="input-main__info row items-center">
												102934
											</div>
										</div>

										<div class="input-main input-main--dooble q-pt-sm q-pb-md q-mb-lg">
											<div class="input-main__label q-mb-md">Город</div>
											<div class="input-main__info row items-center">
												{{ bookingData.city }}
											</div>
										</div>

										<div class="input-main input-main--dooble q-pt-sm q-pb-md q-mb-lg">
											<div class="input-main__label q-mb-md">Место</div>
											<div class="input-main__info row items-center">
												{{ bookingData.location }}
											</div>
										</div>

										<div class="input-main input-main--dooble q-pt-sm q-pb-md q-mb-lg">
											<div class="input-main__label q-mb-md">Дата и время</div>
											<div class="input-main__info row items-center">
												{{ bookingData.dategame }}
											</div>
										</div>

										<div class="input-main input-main--dooble q-pt-sm q-pb-md q-mb-lg">
											<div class="input-main__label q-mb-md">Игровая зона, УСЛУГА</div>
											<div class="input-main__info row items-center">
												{{ bookingData.activity }}, {{ bookingData.services }}
											</div>
										</div>

										<div class="body-booking-card__inner row justify-between">

											<div class="input-main input-main--dooble col q-pt-sm q-pb-md">
												<div class="input-main__label q-mb-md">Итого (сумма заказа)</div>
												<div class="input-main__info row items-center">
													{{ bookingData.orderAmount }} ₽
												</div>
											</div>

											<div class="input-main input-main--dooble col q-pt-sm q-pb-md">
												<div class="input-main__label q-mb-md">Внесена Предоплата</div>
												<div class="input-main__info row items-center">
													{{ bookingData.prepaymentAmount }} ₽
												</div>
											</div>

										</div>

									</div>
								</div>
							</div>

						</div>

					</div>

				</div>

			</q-page>
		</q-page-container>
	</q-layout>

</template>

<style lang="scss">
	.booking-card-column {
		padding: 4px;
	}
	.booking-card {
		flex: 0 1 100%;
		background-color: #1C1E22;
		border-radius: 24px;
		overflow: hidden;
	}
	.booking-card__header {
	}
	.header-booking-card {
		width: 100%;
	}
	.header-booking-card__title {
		font-size: 18px;
		font-weight: 900;
		line-height: 18px;
		letter-spacing: 0.02em;
		color: #fff;
	}
	.header-booking-card__icon {
	}
	.booking-card__body {
	}
	.body-booking-card {
		width: 100%;
	}
	.input-main__label {
		font-size: 11px;
		font-weight: 600;
		line-height: 12px;
		letter-spacing: 0.06em;
    	max-width: 133%;
		color: #535965;
		text-transform: uppercase;
	}
	.input-main input {
		font-size: 18px;
		font-weight: 600;
		line-height: 18px;
		letter-spacing: 0.02em;
		color: #535965;
	} 
	.input-main .q-field__control:before {
    border-bottom: 1px solid #25272D;
	}
	.input-main__info {
		font-size: 18px;
		font-weight: 600;
		line-height: 18px;
		letter-spacing: 0.02em;
		color: #C4C8CF;
	}
	.input-main--dooble {
		border-bottom: 1px solid #25272D;
	}
</style>

