<template>
  <div class="w-top-bar">
    <div class="name-space">
      <div class="back-button">
      <div v-if="inDetailPage">
        戻る
      </div>
    </div>
    {{name}}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

@Component({})
export default class WTopBar extends Vue {
  @Prop()
  private name!: string;

  @Prop()
  private inDetailPage!: boolean;
}
</script>

<style lang="scss" scoped>
.w-top-bar {
  height: 52px;
  width: 100%;
  position: fixed;
  top: 0;
  box-shadow:0px 0px 11px -1px #b7b7b7;

  .name-space {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  }

  .back-button {
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 16px;
    position: absolute;
    left: 0;
  }

}
</style>