<template>
  <div>
    <div @click="isModalOpened = true">
      <p>スキル選択</p>
    </div>
    <w-select-skill-and-ug-modal v-if="isModalOpened" @close="isModalOpened = false" />

  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import WSelectSkillAndUgModal from '@/components/WSelectSkillAndUgModal.vue';

@Component({
  components: {
    WSelectSkillAndUgModal,
  },
})
export default class WSelectSkillAndUg extends Vue {
  private isModalOpened: boolean = false;
}

</script>
<style lang="scss" scoped>
</style>