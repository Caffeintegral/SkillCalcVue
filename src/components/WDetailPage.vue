<template>
  <div class="w-detail-page">
    <w-select-skill-and-ug 
      :shipData="shipData"
      :ugData="ugData"
      :skillData="skillData"
      :flagData="flagData"
    />
    <!-- <w-select-ug
      :shipData="shipData"
      :ugData="ugData"
    /> -->
    <!-- <div>{{shipData}}</div> -->
    <!-- <div>{{skillData}}</div> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import WSelectSkillAndUg from '@/components/WSelectSkillAndUg.vue';
import WSelectUg from '/@components/WSelectUg.vue';
import ShipType from '@/models/ShipType';
import SkillUgType from '@/models/SkillUgType';
import ugDatas from '@/datas/ugData';
import SkillPage from '@/views/SkillPage.vue';

@Component({
  components: {
    WSelectSkillAndUg,
    WSelectUg,
  },
})

export default class WDetailPage extends Vue {
  private ug!: SkillUgType;
  @Prop()
  private shipData!: ShipType;

  @Prop()
  private ugData!: SkillUgType[];

  @Prop()
  private skillData!: SkillUgType[];

  @Prop()
  private flagData!: SkillUgType[];

  public created() {
    this.ug = this.ugData.filter((ug) => {
      return ug.name === 'cyakudankansokukikairyou1';
    })[0];
  } // test
}
</script>

<style lang="scss" scoped>
  .w-detail-page {
    width: 100%;
    padding-top: 52px;
  }
</style>