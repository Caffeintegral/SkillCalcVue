<template>
<div class="detail-page">
  <w-top-bar
    :name="name" 
    :inDetailPage="true"
  />
  <w-detail-page 
    :shipData="shipData"
    :ugData="ugData"
    :skillData="skillData"
    :flagData="flagData"
  />
</div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import ShipType from '@/models/ShipType';
import SkillUgType from '@/models/SkillUgType';
import shipDatas from '@/datas/shipDatas';
import ugDatas from '@/datas/ugData';
import skillDatas from '@/datas/skillData';
import flagDatas from '@/datas/flagDatas';
import WDetailPage from '@/components/WDetailPage.vue';
import WTopBar from '@/components/WTopBar.vue';

@Component({
  components: {
    WDetailPage,
    WTopBar,
  },
})
export default class DetailPage extends Vue {
  private shipData: ShipType | null = null;
  private ugData: SkillUgType[] = ugDatas;
  private skillData: SkillUgType[] = skillDatas;
  private flagData: SkillUgType[] = flagDatas;
  @Prop()
  private name!: string;

  public created() {
    this.shipData = shipDatas.filter((ship) => {
      return ship.name === this.name;
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