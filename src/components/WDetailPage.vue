<template>
  <div class="w-detail-page">
    <w-select-skill-and-ug />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import WSelectSkillAndUg from '@/components/WSelectSkillAndUg.vue';

@Component({
  components: {
    WSelectSkillAndUg,
  },
})

export default class WDetailPage extends Vue {
}
</script>

<style lang="scss" scoped>
  .w-detail-page {
    width: 100%;
    padding-top: 52px;
  }
</style>