import { createStore } from 'vuex';

export const mainStore = createStore({
	state: {
		countryFlag: sessionStorage.getItem('selectedCountryFlag') || '../src/assets/flag-def.svg',
		country: sessionStorage.getItem('selectedCountry') || '',
		city: sessionStorage.getItem('selectedCity') || '',
		location: sessionStorage.getItem('selectedLocation') || '',
		activity: sessionStorage.getItem('selectedActivity') || '',
		services: sessionStorage.getItem('selectedServices') || '',
		dategame: sessionStorage.getItem('selectedDateTimeGame') || '',
		giftcert: sessionStorage.getItem('selectedGiftCert') || '',
		promocode: sessionStorage.getItem('selectedPromocode') || '',
		name: sessionStorage.getItem('selectedName') || '',
		phone: sessionStorage.getItem('selectedPhone') || null,
		phoneMask: sessionStorage.getItem('selectedPhoneMask') || '+7(###) - ### - ## - ##',
		shape: JSON.parse(sessionStorage.getItem('selectedShape')) || ['line'],
		shapeBall: JSON.parse(sessionStorage.getItem('selectedShapeBall')) || ['line'],
		toggleCert: JSON.parse(sessionStorage.getItem('toggleCert')) || false,
		isBooked: false,
		showApplyButton: false,
		showSaleBlock: false,
		dialog: false,
		seamless: false,
		participants: 1,
		orderAmount: '3100',
		prepaymentAmount: '600',
	},
	mutations: {
		setCountryFlag(state, flag) {
			state.countryFlag = flag;
			sessionStorage.setItem('selectedCountryFlag', flag);
		},
		setCountry(state, country) {
			state.country = country;
			sessionStorage.setItem('selectedCountry', country);
		},
		setCity(state, city) {
			state.city = city;
			sessionStorage.setItem('selectedCity', city);
		},
		setLocation(state, location) {
			state.location = location;
			sessionStorage.setItem('selectedLocation', location);
		},
		setActivity(state, activity) {
			state.activity = activity;
			sessionStorage.setItem('selectedActivity', activity);
		},
		setServices(state, services) {
			state.services = services;
			sessionStorage.setItem('selectedServices', services);
		},
		setDateGame(state, dategame) {
			state.dategame = dategame;
			sessionStorage.setItem('selectedDateTimeGame', dategame);
		},
		setGiftCert(state, giftcert) {
			state.giftcert = giftcert;
			sessionStorage.setItem('selectedGiftCert', giftcert);
		},
		setPromocode(state, promocode) {
			state.promocode = promocode;
			state.showApplyButton = !!promocode;
			sessionStorage.setItem('selectedPromocode', promocode);
		},
		setName(state, name) {
			state.name = name;
			sessionStorage.setItem('selectedName', name);
		},
		setPhone(state, phone) {
			state.phone = phone;
			sessionStorage.setItem('selectedPhone', phone);
		},
		setShape(state, shape) {
			state.shape = shape;
			sessionStorage.setItem('selectedShape', JSON.stringify(shape));
		},
		setToggleCert(state, toggleCert) {
			state.toggleCert = toggleCert;
			sessionStorage.setItem('toggleCert', JSON.stringify(toggleCert));
		},
		setIsBooked(state, isBooked) {
			state.isBooked = isBooked;
		},
		setShowApplyButton(state, showApplyButton) {
			state.showApplyButton = showApplyButton;
		},
		setShowSaleBlock(state, showSaleBlock) {
			state.showSaleBlock = showSaleBlock;
		},
		setDialog(state, dialog) {
			state.dialog = dialog;
		},
		setSeamless(state, seamless) {
			state.seamless = seamless;
		},
		setParticipants(state, participants) {
			state.participants = participants;
		},
		setOrderAmount(state, orderAmount) {
			state.orderAmount = orderAmount;
		},
		setPrepaymentAmount(state, prepaymentAmount) {
			state.prepaymentAmount = prepaymentAmount;
		},
	},
	actions: {
		resetCity({ commit }) {
			commit('setCity', '');
		},
		applyPromocode({ commit }) {
			commit('setShowApplyButton', false);
			commit('setShowSaleBlock', true);
		},
		resetPromocode({ commit }) {
			commit('setPromocode', '');
			commit('setShowApplyButton', false);
			commit('setShowSaleBlock', false);
		},
		increaseQuantity({ state, commit }) {
			const newParticipants = Math.min(state.participants + 1, 10);
			commit('setParticipants', newParticipants);
		},
		decreaseQuantity({ state, commit }) {
			const newParticipants = Math.max(state.participants - 1, 1);
			commit('setParticipants', newParticipants);
		},
		handleCheckboxClick({ commit }) {
			commit('setDialog', true);
			commit('setSeamless', true);
		},
		closeAllDialogs({ commit }) {
			commit('setDialog', false);
			commit('setSeamless', false);
		},
		updateAmounts({ commit }) {
			const orderValue = prompt('Введите сумму заказа', this.state.orderAmount);
			const prepaymentValue = prompt('Введите сумму предоплаты', this.state.prepaymentAmount);

			if (orderValue !== null) {
				commit('setOrderAmount', orderValue);
			}
			if (prepaymentValue !== null) {
				commit('setPrepaymentAmount', prepaymentValue);
			}
		},
		collectAndSaveData({ state, commit }) {
			const bookingData = {
				city: state.city,
				location: state.location,
				dategame: state.dategame,
				activity: state.activity,
				services: state.services,
				orderAmount: state.orderAmount,
				prepaymentAmount: state.prepaymentAmount,
			};
			sessionStorage.setItem('bookingData', JSON.stringify(bookingData));
			commit('setIsBooked', true);
			this.$router.push('/booking');
		},
		updatePhoneMask({ commit, state }) {
			let mask = '+7(###) - ### - ## - ##'; // Маска по умолчанию
			if (state.country === 'USA') {
				mask = '+1(###) - ### - ####';
			} else if (state.country === 'UK') {
				mask = '+44(####) - ### - ###';
			}
			commit('setPhoneMask', mask);
		},
	},
	getters: {
		isActive: (state) => (field) => {
			return field && field.length > 0 ? '_active' : '';
		},
	},
});

export default mainStore;