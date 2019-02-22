<template>
  <div class="w-select-ug">
    <div @click="isModalOpened = true">
      <p>UG選択</p>
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
export default class WSelectUg extends Vue {
  private isModalOpened: boolean = false;
  @Prop()
  private ugData!: SkillUgType[];

  @Prop()
  private skillData!: SkillUgType[];

  @Prop()
  private flagData!: SkillUgType[];
}

</script>
<style lang="scss" scoped>
  .w-select-ug {
    width: 100%;
    height: 100%;
  }
</style>