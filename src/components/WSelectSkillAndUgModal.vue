<template>
  <div class="w-select-modal">
    <div class="backdrop" @click="$emit('close')"/>
    <div class="modal">
      <swiper ref="swiper" @slideChangeTransitionEnd="updateSkillAndUg" :options="swiperOption">
        <swiper-slide v-for="(test, index) in testDatas" :key="index">
          <div class="content" style="padding-bottom: 1.5em;">{{test}}</div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"/>
      </swiper>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

@Component({
  components: {
    swiper,
    swiperSlide,
  },
})
export default class WSelectSkillAndUgModal extends Vue {
  private testDatas: string[] = ['3', '4'];

   private swiperOption = {
    slidesPerView: 2,
    spaceBetween: 60,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  };

  get swiper() {
    // @ts-ignore
    return this.$refs.swiper.swiper;
  }

  public updateSkillAndUg(item: any) {
    console.log('updateSkillAndUg');
  }
}
</script>

<style lang="scss" scoped>
.w-select-modal {
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