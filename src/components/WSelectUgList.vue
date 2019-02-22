<template>
  <div class="w-select-ug-list">
    <div @click="isModalOpened = true">
      <p>UG選択</p>
    </div>
    <w-select-ug-modal 
      v-if="isModalOpened" 
      @close="isModalOpened = false"
      :ugData="ugData"
    />

  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import WSelectUgModal from '@/components/WSelectUgModal.vue';
import SkillUgType from '@/models/SkillUgType';

@Component({
  components: {
    WSelectUgModal,
  },
})
export default class WSelectUgList extends Vue {
  private isModalOpened: boolean = false;
  @Prop()
  private ugData!: SkillUgType[];
}

</script>
<style lang="scss" scoped>
  .w-select-ug-list {
    width: 100%;
    height: 100%;
  }
</style>