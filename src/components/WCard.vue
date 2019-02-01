<template>
  <div class="w-country-card">
    <img :src="imgUrl"> <!-- :で""の中身を変数に -->
    <p>{{name}}</p>
  </div>

</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

@Component({})
export default class WCard extends Vue {
  @Prop()
  private imgUrl!: string; // ! は　必ずあるとプログラムに明示

  @Prop()
  private name!: string;
}
</script>

<style lang="scss" scoped>
.w-country-card {
  width: 180px;
  height: 250px;
  border: 1px solid; 

  img {
    width: 160px;
    height: 180px;
  }

  p {
    font-size: 1.2em;
  } 
}
</style>