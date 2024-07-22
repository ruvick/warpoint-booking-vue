<script setup>

	import { ref } from 'vue';
	import { useRouter } from 'vue-router';
	import HeaderLocation from '@/components/HeaderLocation.vue';

	const router = useRouter();

	const selectLocation = (title, address) => {
	const location = `${title} (${address})`;
	localStorage.setItem('selectedLocation', location);
	router.push({ name: 'main' });
};

</script> 

<template>
	<q-layout>
			<q-page-container class="my-page-container body--grey">
			 <q-page class="page-internal q-pt-md q-pb-md q-pl-sm q-pr-sm"> 

					<HeaderLocation/>

					<div class="location-cards row container-md q-pt-md q-pb-md">

						<div class="location-card-column row col-xs-12 col-sm-6 col-md-4" @click="selectLocation('ТРЦ «Авиапарк»', 'Ходынский бульвар, 4')">
							<div class="location-card column items-start">
								<div class="location-card__header header-location-card row q-mb-xl"> 
									<div class="header-location-card__left col">
										<div class="header-location-card__title q-mb-xs">ТРЦ «Авиапарк»</div>
										<div class="header-location-card__subtitle">Warpoint Park</div>
									</div>
									<div class="header-location-card__right col-auto column items-center">
										<div class="header-location-card__rating">
											<svg fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M11.9998 17.75L5.82784 20.995L7.00684 14.122L2.00684 9.25495L8.90684 8.25495L11.9928 2.00195L15.0788 8.25495L21.9788 9.25495L16.9788 14.122L18.1578 20.995L11.9998 17.75Z" fill="#C4C8CF" stroke="#C4C8CF" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
											</svg>
										</div>
										<div class="header-location-card__grade">4.8</div>
									</div>
								</div>
								<div class="location-card__footer footer-location-card column items-start">
									<div class="footer-location-card__map-icon">
										<svg fill="none" xmlns="http://www.w3.org/2000/svg">
											<g opacity="0.4">
												<path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 10.4167C3.25 5.62281 7.17493 1.75 12 1.75C16.8251 1.75 20.75 5.62281 20.75 10.4167C20.75 13.3982 19.0113 16.3409 17.1686 18.4829C16.236 19.5669 15.2463 20.482 14.3733 21.1328C13.9374 21.4577 13.5186 21.7258 13.1405 21.9162C12.786 22.0947 12.3812 22.25 12 22.25C11.6188 22.25 11.214 22.0947 10.8595 21.9162C10.4814 21.7258 10.0626 21.4577 9.62674 21.1328C8.75371 20.482 7.76395 19.5669 6.83144 18.4829C4.98872 16.3409 3.25 13.3982 3.25 10.4167ZM12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10C15 11.6569 13.6569 13 12 13Z" fill="#C4C8CF"/>
											</g>
										</svg>
									</div>
									<div class="footer-location-card__address">Ходынский бульвар, 4</div>
									<div class="footer-location-card__metro">Метро: ЦСКА</div>
								</div>
							</div>
						</div>

						<div class="location-card-column row col-xs-12 col-sm-6 col-md-4" @click="selectLocation('Академическая', 'ул. Винокурова 4 k1')">
							<div class="location-card column items-start">
								<div class="location-card__header header-location-card row q-mb-xl"> 
									<div class="header-location-card__left col">
										<div class="header-location-card__title q-mb-xs">Академическая</div>
										<div class="header-location-card__subtitle">Warpoint Arena</div>
									</div>
									<div class="header-location-card__right col-auto column items-center">
										<div class="header-location-card__rating">
											<svg fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M11.9998 17.75L5.82784 20.995L7.00684 14.122L2.00684 9.25495L8.90684 8.25495L11.9928 2.00195L15.0788 8.25495L21.9788 9.25495L16.9788 14.122L18.1578 20.995L11.9998 17.75Z" fill="#C4C8CF" stroke="#C4C8CF" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
											</svg>
										</div>
										<div class="header-location-card__grade">4.6</div>
									</div>
								</div>
								<div class="location-card__footer footer-location-card column items-start">
									<div class="footer-location-card__map-icon">
										<svg fill="none" xmlns="http://www.w3.org/2000/svg">
											<g opacity="0.4">
												<path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 10.4167C3.25 5.62281 7.17493 1.75 12 1.75C16.8251 1.75 20.75 5.62281 20.75 10.4167C20.75 13.3982 19.0113 16.3409 17.1686 18.4829C16.236 19.5669 15.2463 20.482 14.3733 21.1328C13.9374 21.4577 13.5186 21.7258 13.1405 21.9162C12.786 22.0947 12.3812 22.25 12 22.25C11.6188 22.25 11.214 22.0947 10.8595 21.9162C10.4814 21.7258 10.0626 21.4577 9.62674 21.1328C8.75371 20.482 7.76395 19.5669 6.83144 18.4829C4.98872 16.3409 3.25 13.3982 3.25 10.4167ZM12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10C15 11.6569 13.6569 13 12 13Z" fill="#C4C8CF"/>
											</g>
										</svg>
									</div>
									<div class="footer-location-card__address">ул. Винокурова 4 k1</div>
									<div class="footer-location-card__metro">Метро: Академическая</div>
								</div>
							</div>
						</div>

						<div class="location-card-column row col-xs-12 col-sm-6 col-md-4" @click="selectLocation('Волгоградский пр-т', 'Волгоградский пр-т 32 k8')">
							<div class="location-card column items-start">
								<div class="location-card__header header-location-card row q-mb-xl"> 
									<div class="header-location-card__left col">
										<div class="header-location-card__title q-mb-xs">Волгоградский пр-т</div>
										<div class="header-location-card__subtitle">Warpoint Arena</div>
									</div>
									<div class="header-location-card__right col-auto column items-center">
										<div class="header-location-card__rating">
											<svg fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M11.9998 17.75L5.82784 20.995L7.00684 14.122L2.00684 9.25495L8.90684 8.25495L11.9928 2.00195L15.0788 8.25495L21.9788 9.25495L16.9788 14.122L18.1578 20.995L11.9998 17.75Z" fill="#C4C8CF" stroke="#C4C8CF" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
											</svg>
										</div>
										<div class="header-location-card__grade">5.0</div>
									</div>
								</div>
								<div class="location-card__footer footer-location-card column items-start">
									<div class="footer-location-card__map-icon">
										<svg fill="none" xmlns="http://www.w3.org/2000/svg">
											<g opacity="0.4">
												<path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 10.4167C3.25 5.62281 7.17493 1.75 12 1.75C16.8251 1.75 20.75 5.62281 20.75 10.4167C20.75 13.3982 19.0113 16.3409 17.1686 18.4829C16.236 19.5669 15.2463 20.482 14.3733 21.1328C13.9374 21.4577 13.5186 21.7258 13.1405 21.9162C12.786 22.0947 12.3812 22.25 12 22.25C11.6188 22.25 11.214 22.0947 10.8595 21.9162C10.4814 21.7258 10.0626 21.4577 9.62674 21.1328C8.75371 20.482 7.76395 19.5669 6.83144 18.4829C4.98872 16.3409 3.25 13.3982 3.25 10.4167ZM12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10C15 11.6569 13.6569 13 12 13Z" fill="#C4C8CF"/>
											</g>
										</svg>
									</div>
									<div class="footer-location-card__address">Волгоградский пр-т 32 k8</div>
									<div class="footer-location-card__metro">Метро: Волгоградский пр-т</div>
								</div>
							</div>
						</div>

						<div class="location-card-column row col-xs-12 col-sm-6 col-md-4" @click="selectLocation('ТРК «Mari»', 'Волгоградский пр-т 32 k8')">
							<div class="location-card column items-start">
								<div class="location-card__header header-location-card row q-mb-xl"> 
									<div class="header-location-card__left col">
										<div class="header-location-card__title q-mb-xs">ТРК «Mari»</div>
										<div class="header-location-card__subtitle">Warpoint Arena</div>
									</div>
									<div class="header-location-card__right col-auto column items-center">
										<div class="header-location-card__rating">
											<svg fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M11.9998 17.75L5.82784 20.995L7.00684 14.122L2.00684 9.25495L8.90684 8.25495L11.9928 2.00195L15.0788 8.25495L21.9788 9.25495L16.9788 14.122L18.1578 20.995L11.9998 17.75Z" fill="#C4C8CF" stroke="#C4C8CF" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
											</svg>
										</div>
										<div class="header-location-card__grade">4.8</div>
									</div>
								</div>
								<div class="location-card__footer footer-location-card column items-start">
									<div class="footer-location-card__map-icon">
										<svg fill="none" xmlns="http://www.w3.org/2000/svg">
											<g opacity="0.4">
												<path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 10.4167C3.25 5.62281 7.17493 1.75 12 1.75C16.8251 1.75 20.75 5.62281 20.75 10.4167C20.75 13.3982 19.0113 16.3409 17.1686 18.4829C16.236 19.5669 15.2463 20.482 14.3733 21.1328C13.9374 21.4577 13.5186 21.7258 13.1405 21.9162C12.786 22.0947 12.3812 22.25 12 22.25C11.6188 22.25 11.214 22.0947 10.8595 21.9162C10.4814 21.7258 10.0626 21.4577 9.62674 21.1328C8.75371 20.482 7.76395 19.5669 6.83144 18.4829C4.98872 16.3409 3.25 13.3982 3.25 10.4167ZM12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10C15 11.6569 13.6569 13 12 13Z" fill="#C4C8CF"/>
											</g>
										</svg>
									</div>
									<div class="footer-location-card__address">Волгоградский пр-т 32 k8</div>
									<div class="footer-location-card__metro">Метро: Волгоградский пр-т</div>
								</div>
							</div>
						</div>

					</div>

			 </q-page>
			</q-page-container>
	</q-layout>
	</template>

<style lang="scss">
	.location-card-column {
		padding: 4px;
	}
	.location-card {
		flex: 0 1 100%;
		padding: 20px;
		background-color: #25272D;
		border-radius: 24px;
		overflow: hidden;
	}
	.location-card__header {
	}
	.header-location-card {
		width: 100%;
		flex: 1 1 auto;
	}
	.header-location-card__left {
	}
	.header-location-card__title {
		font-size: 18px;
		font-weight: 600;
		line-height: 20px;
		letter-spacing: 0.02em;
		color: #C4C8CF;
	}
	.header-location-card__subtitle {
		font-size: 11px;
		font-weight: 600;
		line-height: 12px;
		letter-spacing: 0.06em;
		color: #535965;
		text-transform: uppercase;
	}
	.header-location-card__right {
	}
	.items-start {
	}
	.header-location-card__rating {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 24px;
		flex: 0 0 24px;
		height: 24px;
		overflow: hidden;
			svg {
				width: 100%;
				height: 100%;
			}
			&:not(:last-child){
				margin-bottom: 4px;
			}
	}
	.header-location-card__grade {
		font-size: 11px;
		font-weight: 600;
		line-height: 12px;
		letter-spacing: 0.06em;
		color: #C4C8CF;
	}
	.location-card__footer {
		width: 100%;
	}
	.footer-location-card {
	}
	.footer-location-card__map-icon {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 24px;
		flex: 0 0 24px;
		height: 24px;
		overflow: hidden;
			svg {
				width: 100%;
				height: 100%;
			}
			&:not(:last-child){
				margin-bottom: 8px;
			}
	}
	.footer-location-card__address {
		font-size: 11px;
		font-weight: 600;
		line-height: 12px;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: #C4C8CF;
		&:not(:last-child){
			margin-bottom: 8px;
		}
	}
	.footer-location-card__metro {
		font-size: 11px;
		font-weight: 600;
		line-height: 12px;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: #535965;
	}
</style>