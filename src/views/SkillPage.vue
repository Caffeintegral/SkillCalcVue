<template>
  <w-skill-page/>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import WSkillPage from '@/components/WSkillPage.vue';

@Component({
  components: {
    WSkillPage,
  },
})
export default class SkillPage extends Vue {
}
</script>

<style lang="scss" scoped>
</style>