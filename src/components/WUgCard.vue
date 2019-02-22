<template>
  <div class="w-ug-card">
    <!-- <img :src="imgUrl"> 
    <p>{{name}}</p> -->
    <!-- <p>{{ugData}}</p> -->
    <div @click="setUg(ug)">
      <img :src="ug.imgUrl">
      {{ug.name}}
    </div>
  </div>

</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import SkillUgType from '@/models/SkillUgType';

@Component({})
export default class WUgCard extends Vue {
  @Prop()
  private ug!: SkillUgType;

  public setUg(ug: SkillUgType) {
    ug.flag = !ug.flag;
    console.log(ug.name);
    console.log(ug.flag);
  }
}
</script>

<style lang="scss" scoped>
.w-ug-card {
  width: 90%;
  height: 50px;
  border: 1px solid; 
  margin: auto;

  img {
    width: 50px;
    height: 50px;
  }

  p {
    font-size: 1.2em;
  } 
}
</style>