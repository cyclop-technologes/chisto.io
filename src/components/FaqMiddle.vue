<template lang="html">
  <div class="faq-page">
    <div class="container">
      <h1 class="h1-header faq-header text-uppercase">часто задаваемые вопросы</h1>
      <ul class="faq-accordion">
        <li v-b-toggle.collapse-1 class="faq-accordion-item mb-3 d-flex">
          <p class="round-plus">+</p>
          На какое время можно заказать уборку квартиры?
        </li>
        <b-collapse id="collapse-1" class="mb-3">
          <b-card>Уборка квартиры проводится в любое удобное для вас время с 8.00 до 20.00.
            Мы сможем к Вам приехать уже на следующий день после заказа.</b-card>
        </b-collapse>
        <li v-b-toggle.collapse-2 class="faq-accordion-item mb-3 d-flex">
          <p class="round-plus">+</p>
          Сколько времени требуется на уборку?
        </li>
        <b-collapse id="collapse-2" class="mb-3">
          <b-card>Обычно на уборку требуется от 3-х до 6-ти часов,
            в зависимости от размера квартиры и выбранных дополнительных услуг.</b-card>
        </b-collapse>
        <li v-b-toggle.collapse-3 class="faq-accordion-item mb-3 d-flex">
          <p class="round-plus">+</p>
          Нужно ли клинеру предоставлять моющие средства для уборки
        </li>
        <b-collapse id="collapse-3" class="mb-3">
          <b-card>Нет, мы привозим свои компактные пылесосы, моющие средства и удобный инвентарь с телескопическими ручками.
            В то же время, если Вы сможете предоставить свой пылесос, то клинер приедет без него.</b-card>
        </b-collapse>
        <li v-b-toggle.collapse-4 class="faq-accordion-item mb-3 d-flex">
          <p class="round-plus">+</p>
          Какие существуют способы оплаты?
        </li>
        <b-collapse id="collapse-4" class="mb-3">
          <b-card>Предпочтительный вариант – перевод на карту Visa или Mastercard.
            В случае оплаты наличными денежные средства необходимо передать клинеру.</b-card>
        </b-collapse>
        <li v-b-toggle.collapse-5 class="faq-accordion-item mb-3 d-flex">
          <p class="round-plus">+</p>
          Есть ли система скидок на уборку квартиры для постоянных клиентов?
        </li>
        <b-collapse id="collapse-5" class="mb-3">
          <b-card>При регулярном заказе клининговых услуг – действует система скидок.
            Подробности можно узнать у администратора.</b-card>
        </b-collapse>
        <li v-b-toggle.collapse-6 class="faq-accordion-item mb-3 d-flex">
          <p class="round-plus">+</p>
          Нужно ли присутствовать во время уборки квартиры?
        </li>
        <b-collapse id="collapse-6" class="mb-3">
          <b-card>Присутствие необязательно.
            Вы можете оставить клинеров одних, но закрывать их в помещении строго запрещается по технике безопасности.
            И вам необходимо вернуться в квартиру до окончания уборки, чтобы принять работу.
            Вы можете не волноваться за сохранность своих вещей.
            А если вы обеспокоены, мы поможем составить опись ценных вещей перед уборкой.</b-card>
        </b-collapse>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
}
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
  display: flex;
  justify-content: center;
  align-items: center;
  color: $white;
  margin-right: 20px;
}
</style>
