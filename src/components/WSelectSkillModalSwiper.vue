<template>
    <div class="w-select-skill-modal-swiper">
    <p>{{skillData}}</p>
    <div v-for="(skill, index) of skillData" :key="index" @click="setSkill(skill)">
      {{skill.name}}
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
export default class WSelectSkillModalSwiper extends Vue {
  @Prop()
  private skillData!: SkillUgType[];

  public setSkill(skill: SkillUgType) {
    skill.flag = !skill.flag;
    console.log(skill.name);
    console.log(skill.flag);
  }
}

</script>
<style lang="scss" scoped>
  .w-select-skill-modal-swiper {
    // width: 100%;
    height: 100%;
  }
</style>