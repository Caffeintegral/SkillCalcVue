<template>
  <div class="w-select-ug-modal-swiper">
    <p>{{ugDataA}}</p>
    <div v-for="(ug, index) of ugDataA" :key="index" @click="setUg(ug)">
      {{ug.name}}
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
export default class WSelectUgModalSwiper extends Vue {
  @Prop()
  private ugDataA!: SkillUgType[];

  public setUg(ug: SkillUgType) {
    ug.flag = !ug.flag;
    console.log(ug.name);
    console.log(ug.flag);
  }
}

</script>
<style lang="scss" scoped>
  .w-select-ug-modal-swiper {
    // width: 100%;
    height: 100%;
  }
</style>