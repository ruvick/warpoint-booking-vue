import axios from 'axios';

const phoneMasks = {
    RU: '+7(###) - ### - ## - ##',
    BY: '+375(##) - ### - ## - ##',
    KZ: '+7(###) - ### - ## - ##',
    KG: '+996(###) - ### - ## - ##',
    UZ: '+998(##) - ### - ## - ##'
};

const getPhoneMask = (countryCode) => {
    return phoneMasks[countryCode] || '+#(###) - ### - ## - ##';
};

export const fetchCountries = async () => {
    try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countryList = response.data.map(country => ({
            name: country.translations.rus.common,
            flag: country.flags.svg,
            phoneMask: getPhoneMask(country.cca2)
        }));

        return countryList.filter(country =>
            ['Россия', 'Беларусь', 'Казахстан', 'Кыргызстан', 'Узбекистан'].includes(country.name)
        );
    } catch (error) {
        console.error('Error fetching countries:', error);
        throw error;
    }
};