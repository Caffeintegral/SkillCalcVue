<template>
  <div class="w-select-modal">
    <div class="backdrop" @click="$emit('close')"/>
    <div class="modal">
      <swiper ref="swiper" @slideChangeTransitionEnd="updateSkillAndUg" :options="swiperOption">
        <swiper-slide v-for="(test, index) in testDatas" :key="index">
          <div class="content" style="padding-bottom: 1.5em;">
            <div v-if="index==0">
              <w-select-skill-modal-swiper/>
            </div>
            <div v-if="index==1">
              <w-select-ug-modal-swiper
                :ugData="ugData"
              />
            </div>
          </div>
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

import WSelectSkillModalSwiper from '@/components/WSelectSkillModalSwiper.vue';
import WSelectUgModalSwiper from '@/components/WSelectUgModalSwiper.vue';
import SkillUgType from '@/models/SkillUgType';

@Component({
  components: {
    swiper,
    swiperSlide,
    WSelectSkillModalSwiper,
    WSelectUgModalSwiper,
  },
})
export default class WSelectSkillAndUgModal extends Vue {
  private testDatas: string[] = ['0', '1'];

   private swiperOption = {
    slidesPerView: 2,
    spaceBetween: 60,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  };

  @Prop()
  private ugData!: SkillUgType[];

  get swiper() {
    // @ts-ignore
    return this.$refs.swiper.swiper;
  }

  public updateSkillAndUg(item: any) {
    // console.log('updateSkillAndUg');
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