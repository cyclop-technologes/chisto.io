<template lang="html">
  <b-container class="repair-middle text-center">
    <h1 class="h1-header text-uppercase">в чем отличия от обычной уборки</h1>
    <b-row class="middle-container text-left">
      <b-col cols="12" lg="4" md="12" class="text-center">
        <img src="../assets/img/repair-img.png">
      </b-col>
      <b-col cols="12" lg="8" md="12" class="mt-5">
        <ul class="pl-0">
          <li
            v-for='(item, index) in list'
            :key='index'
            class="repair-list-item mb-4">{{item}}</li>
        </ul>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      list: [
        'Комплексная очистка помещения и удаление всех следов строительных работ',
        'Очистка стеклопакетов, рам и подоконников от краски, клея, скотча и строительных смесей',
        'Обеспыливание и влажная обработка потолков и декорированных стен',
        'Очистка радиаторов отопления от пыли и строительных смесей снаружи и внутри',
        'Очистка напольных покрытий от затирки и остатков строительных смесей',
        'Обеспыливание и влажная уборка напольных покрытий в несколько этапов',
        'Снятие защитной пленки с различных поверхностей, а также вынос строительного мусора',
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
.repair-middle {
  padding: 8rem 0;
}
.middle-container {
  padding-top:: 2.5rem;
}
.repair-list-item {
  font-size: 14px;
}

.repair-list-item:nth-child(2),
.repair-list-item:nth-child(6) {
  margin-left: 30px;
}

.repair-list-item:nth-child(3),
.repair-list-item:nth-child(5) {
  margin-left: 60px;
}

.repair-list-item:nth-child(4) {
  margin-left: 90px;
}

@include media-breakpoint-down(md) {
  .repair-list-item {
    margin-left: 0 !important;
  }
}


</style>
