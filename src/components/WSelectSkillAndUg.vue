<template>
  <div class="w-select-skill-and-ug">
    <div @click="isModalOpened = true">
      <p>スキル選択</p>
    </div>
    <w-select-skill-and-ug-modal 
      v-if="isModalOpened" 
      @close="isModalOpened = false"
      :ugData="ugData"
    />

  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import WSelectSkillAndUgModal from '@/components/WSelectSkillAndUgModal.vue';
import SkillUgType from '@/models/SkillUgType';

@Component({
  components: {
    WSelectSkillAndUgModal,
  },
})
export default class WSelectSkillAndUg extends Vue {
  private isModalOpened: boolean = false;
  @Prop()
  private ugData!: SkillUgType[];
}

</script>
<style lang="scss" scoped>
  .w-select-skill-and-ug {
    width: 100%;
    height: 100%;
  }
</style>