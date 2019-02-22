<template>
  <div class="w-select-ug-modal">
    <div class="backdrop" @click="$emit('close')"/>
    <div class="modal">
      <div v-for="(ug, index) of ugData" :key="index">
        <w-ug-card 
          :ug="ug"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import SkillUgType from '@/models/SkillUgType';
import WUgCard from '@/components/WUgCard.vue';

@Component({
  components: {
    WUgCard,
  },
})
export default class WSelectUgModal extends Vue {
  @Prop()
  private ugData!: SkillUgType[];

}
</script>

<style lang="scss" scoped>
.w-select-ug-modal {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0; 

  .backdrop {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 0;
    left: 0; 
    z-index: 10;
  }

  .modal {
    width: calc(100% - 64px);
    height: calc(100% - 64px);
    background: #ffffff;
    border-radius: 10px;
    box-shadow:0px 0px 19px 0px #969696;
    z-index: 100;
    overflow: auto;
  }

  .swiper-container swiper-container-horizontal swiper-container-ios {
    width: 100%;
    height: 100%;
    background: #ffffff;
    border-radius: 10px;
    box-shadow:0px 0px 19px 0px #969696;
    //  position: absolute;
    z-index: 100;
    overflow: auto;
  }
}
</style>