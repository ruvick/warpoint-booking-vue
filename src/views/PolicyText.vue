<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import HeaderLogin from '@/components/HeaderLogin.vue';

const router = useRouter();

const defaultTexts = [
  "Ф.И.О. родителя/законного представителя полностью в именительном падеже по документу, удостоверяющему личность",
  "указать каком городе, а для города Екатеринбург, в том числе каком административном районе: Верх-Исетский, Ленинский, Орджоникидзевский, Железнодорожный, Чкаловский, Академический",
  "ФИО ребенка, дата рождения",
  "фамилия, имя, отчество родителя (законного представителя) ребенка",
  "ФИО ребенка, дата рождения",
  "ФИО ребенка, дата рождения",
  "ФИО ребенка, дата рождения",
];

const texts = ref([...defaultTexts]);

const updateText = (index) => {
  const element = document.getElementById(`editable-${index}`); // Используйте обратные кавычки
  texts.value[index] = element.innerText; // Обновляем текст из элемента
};

const clearPlaceholder = (index) => {
  if (texts.value[index] === defaultTexts[index]) {
    texts.value[index] = ""; // Очищаем текст при фокусе
  }
};

const setPlaceholder = (index) => {
  if (!texts.value[index].trim()) {
    texts.value[index] = defaultTexts[index]; // Возвращаем текст по умолчанию, если ничего не введено
  }
};

const goBack = () => {
  router.go(-1);
};

</script>

<template>
  <q-layout>
    <q-page-container class="my-page-container body--dark-light">
      <q-page class="page-main column q-pb-md">

        <HeaderLogin style="position: fixed; z-index: 100; width: 100%;"/>

        <div class="page-main__body body-main row q-pb-lg q-pl-sm q-pr-sm" style="width: 100%; flex: 1 1 auto; padding-top: 100px;">

          <div class="body-main__wrapper" style="width: 100%;">

            <div class="body-main__butons row items-center" style="margin: 0 auto 80px auto;">
              <q-btn
                class="no-hover"
                primary
                style="font-size: 11px; color: #C4C8CF; border: 1px solid #30343B; border-radius: 24px;"
                 @click="goBack"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 4px;">
                  <path d="M12.5 5L7.5 10L12.5 15" stroke="#C4C8CF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Назад</span>
              </q-btn>
            </div>

            <div class="body-main__inner row container-md justify-center items-center">

              <div class="card-text">

                <div class="card-text__item q-mb-lg" style="gap: 3px;">
                  Я,
                  <span  
                    id="editable-0"
                    class="card-text__descp" 
                    contenteditable="true" 
                    @input="updateText(0)" 
                    @focus="clearPlaceholder(0)" 
                    @blur="setPlaceholder(0)"
                  >{{ texts[0] }}</span>
                  , проживающая(щий) в
                  <span 
                    id="editable-1"
                    class="card-text__descp" 
                    contenteditable="true" 
                    @input="updateText(1)" 
                    @focus="clearPlaceholder(1)" 
                    @blur="setPlaceholder(1)"
                  >{{ texts[1] }}</span>
						являюсь законным представителем
						<span 
                    id="editable-2"
                    class="card-text__descp" 
                    contenteditable="true" 
                    @input="updateText(2)" 
                    @focus="clearPlaceholder(2)" 
                    @blur="setPlaceholder(2)"
                  >{{ texts[2] }}</span>
					</div>

					<div class="card-text__item q-mb-lg">
						и, как его (ее) законный представитель, настоящим:
					</div>

					<div class="card-text__item q-mb-lg">
						даю свое согласие на участие ребёнка в Игре, а также подтверждаю, что физическое и психологическое состояние ребенка соответствует
						условиям, порядку проведения Игры и участия в ней, что у ребёнка отсутствуют какие-либо медицинские противопоказания,
						заболевания, препятствующие участию в Игре, и/или рецидив или обострение которых может вызвать участие в Игре, что ребенок не
						проявлял и не проявляет признаки девиантного (общественно опасного) поведения, даю свое согласие Организатору и привлекаемым
						им третьим лицам в целях организации и проведения Игры на обработку персональных данных ребенка, к которым относятся ФИО, дата
						рождения, пол ребенка, состояние здоровья, место проживания. 
					</div>

					<div class="card-text__item q-mb-lg">
						Настоящее согласие предоставляется на осуществление любых
						действий в отношении персональных данных ребенка, которые необходимы или желаемы для достижения указанных выше целей,
						включая (без ограничений): сбор, систематизацию, накопление, хранение, уточнение (обновление, изменение), использование,
						распространение (в том числе, передачу третьим лицам), обезличивание, блокирование, а также осуществление любых иных действий
						с персональными данными ребенка, предусмотренных действующим законодательством Российской Федерации. 
					</div>

					<div class="card-text__item q-mb-lg">
						Я проинформирован(а), что Организатор будет обрабатывать персональные данные как неавтоматизированным, так и автоматизированным способом обработки. Данное Согласие действует 
						до достижения целей обработки персональных данных ребенка Организатором. Согласие на обработку персональных данных ребенка может быть отозвано мною путем направления 
						Организатору письменного отзыва.
					</div>

					<div class="card-text__item q-mb-lg">
						Я, 
						<span 
                    id="editable-3"
                    class="card-text__descp" 
                    contenteditable="true" 
                    @input="updateText(3)" 
                    @focus="clearPlaceholder(3)" 
                    @blur="setPlaceholder(3)"
                  >{{ texts[3] }}</span>
						так же несу полную ответственность за ниже перечисленных участников, по устному соглашению из законных представителей.
					</div>

					<div class="card-text__item">
						<span 
                    id="editable-4"
                    class="card-text__descp" 
                    contenteditable="true" 
                    @input="updateText(4)" 
                    @focus="clearPlaceholder(4)" 
                    @blur="setPlaceholder(4)"
                  >{{ texts[4] }}</span>
					</div>

					<div class="card-text__item">
						<span 
                    id="editable-5"
                    class="card-text__descp" 
                    contenteditable="true" 
                    @input="updateText(5)" 
                    @focus="clearPlaceholder(5)" 
                    @blur="setPlaceholder(5)"
                  >{{ texts[5] }}</span>
					</div>

					<div class="card-text__item">
						<span 
                    id="editable-6"
                    class="card-text__descp" 
                    contenteditable="true" 
                    @input="updateText(6)" 
                    @focus="clearPlaceholder(6)" 
                    @blur="setPlaceholder(6)"
                  >{{ texts[6] }}</span>
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
	.body--dark-light {
		background-color: #141517;
	}
	.card-text {
		font-size: 16px;
		font-weight: 500;
		line-height: 22.4px;
		color: #fff;
		width: 100%;
	}
	.card-text__item {
		width: 100%;
	}
	.card-text__descp {
		font-size: 16px;
		font-weight: 500;
		line-height: 22.4px;
		color: #FF545D;
		border: none;
		cursor: text;
		}
		.card-text__descp:focus {
		outline: none; 
		}
</style>

