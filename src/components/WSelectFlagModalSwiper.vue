<template>
    <div class="w-select-flag-modal-swiper">
    <p>{{flagData}}</p>
    <div v-for="(flag, index) of flagData" :key="index" @click="setFlag(flag)">
      {{flag.name}}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import SkillUgType from '@/models/SkillUgType';

@Component({
  components: {
  },
})
export default class WSelectFlagModalSwiper extends Vue {
  @Prop()
  private flagData!: SkillUgType[];

  public setFlag(flag: SkillUgType) {
    flag.flag = !flag.flag;
    console.log(flag.name);
    console.log(flag.flag);
  }
}

</script>
<style lang="scss" scoped>
  .w-select-skill-modal-swiper {
    // width: 100%;
    height: 100%;
  }
</style>