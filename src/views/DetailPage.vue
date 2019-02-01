<template>
<div class="detail-page">
  <w-top-bar
    :name="name" 
    :inDetailPage="true"
  />
</div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import ShipType from '@/models/ShipType';
import shipDatas from '@/datas/shipDatas';
import WDetailPage from '@/components/WDetailPage.vue';
import WTopBar from '@/components/WTopBar.vue';

@Component({
  components: {
    WDetailPage,
    WTopBar,
  },
})
export default class DetailPage extends Vue {
  @Prop()
  private name!: string;

  private shipData: ShipType | null = null;

  public created() {
    this.shipData = shipDatas.filter((ship) => {
      return ship.name === this.name ;
    })[0];
  }
}
</script>

<style lang="scss" scoped>
.detail-page {
  width: 100vw;
  height: 100vh;
}
</style>