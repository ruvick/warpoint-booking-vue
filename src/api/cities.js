import axios from 'axios';

const allowedCountries = {
    'Россия': 'Russian Federation',
    'Беларусь': 'Belarus',
    'Казахстан': 'Kazakhstan',
    'Кыргызстан': 'Kyrgyzstan',
    'Узбекистан': 'Uzbekistan'
};

const translatedCities = {
    // 'MOSKVA': 'Москва',
    // 'Saint Petersburg': 'Санкт-Петербург',
    // 'Novosibirsk': 'Новосибирск',
    // 'Yekaterinburg': 'Екатеринбург',
    // 'Nizhny Novgorod': 'Нижний Новгород',
    // 'Kazan': 'Казань',
    // 'Chelyabinsk': 'Челябинск',
    // 'Omsk': 'Омск',
    // 'Samara': 'Самара',
    // 'Rostov-on-Don': 'Ростов-на-Дону',
    // 'Ufa': 'Уфа',
    // 'Krasnoyarsk': 'Красноярск',
    // 'Voronezh': 'Воронеж',
    // 'Perm': 'Пермь',
    // 'Volgograd': 'Волгоград',
};

export const fetchCities = async (selectedCountry) => {
    try {
        const response = await axios.get('https://countriesnow.space/api/v0.1/countries/population/cities', {
            headers: {
                'Accept-Language': 'ru-RU'
            }
        });

        return response.data.data
            .filter(city => allowedCountries[selectedCountry] === city.country)
            .map(city => ({
                ...city,
                city: translatedCities[city.city] || city.city
            }));
    } catch (error) {
        console.error('Error fetching cities:', error);
        throw error;
    }
};