<template lang="html">
  <div class="faq-page">
    <div class="container">
      <h1 class="h1-header faq-header text-uppercase">часто задаваемые вопросы</h1>
      <ul class="faq-accordion">
        <li v-for='(item, index) in questions' :key='index' v-b-toggle="`collapse-${index}`" class="faq-accordion-item">
          <p><span class="round-plus">+</span> {{item.title}}</p>
          <b-collapse :id="`collapse-${index}`" class="ml-5">
            <p>{{item.body}}</p>
          </b-collapse>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          title: 'На какое время можно заказать уборку квартиры?',
          body: 'Уборка квартиры проводится в любое удобное для вас время с 8.00 до 20.00. Мы сможем к Вам приехать уже на следующий день после заказа.',
        },
        {
          title: 'Сколько времени требуется на уборку?',
          body: 'Обычно на уборку требуется от 3-х до 6-ти часов, в зависимости от размера квартиры и выбранных дополнительных услуг.',
        },
        {
          title: 'Нужно ли клинеру предоставлять моющие средства для уборки?',
          body: 'Нет, мы привозим свои компактные пылесосы, моющие средства и удобный инвентарь с телескопическими ручками. В то же время, если Вы сможете предоставить свой пылесос, то клинер приедет без него.',
        },
        {
          title: 'Какие существуют способы оплаты?',
          body: 'Предпочтительный вариант – перевод на карту Visa или Mastercard. В случае оплаты наличными денежные средства необходимо передать клинеру.',
        },
        {
          title: 'Есть ли система скидок на уборку квартиры для постоянных клиентов?',
          body: 'При регулярном заказе клининговых услуг – действует система скидок. Подробности можно узнать у администратора.',
        },
        {
          title: 'Нужно ли присутствовать во время уборки квартиры?',
          body: 'Присутствие необязательно. Вы можете оставить клинеров одних, но закрывать их в помещении строго запрещается по технике безопасности. И вам необходимо вернуться в квартиру до окончания уборки, чтобы принять работу. Вы можете не волноваться за сохранность своих вещей. А если вы обеспокоены, мы поможем составить опись ценных вещей перед уборкой.',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
.faq-header {
  padding-top: 6rem;
}
.faq-accordion {
  margin-top: 4rem;
}
.round-plus {
  background-color: $primary;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: $white;
  margin-right: 20px;
}
</style>
