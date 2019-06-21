<template lang="html">
  <div class="text-center">
    <h1 class="h1-header flat-header text-uppercase">в чем отличия от обычной уборки</h1>
    <div class="d-flex justify-content-center align-items-center text-left mt-5">
      <div class="left-block">
        <img src="../assets/img/repair-img.png">
      </div>
      <div class="right-block">
        <ul>
          <li v-for="(item, index) in repair" :key="index" class="repair-list-item mb-4">{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      repair: [
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


</style>
