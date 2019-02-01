<template>
  <swiper ref="swiper" @slideChangeTransitionEnd="updateSelectedShip" :options="swiperOption">
    <swiper-slide v-for="(ship, index) in selectableShips" :key="index">
      <div><img :src="ship.imgUrl"></div>
      <div style="padding-bottom: 1.5em;">{{ship.name}}</div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"/>
  </swiper>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import ShipType from '@/models/ShipType';


@Component({
  components: {
    swiper,
    swiperSlide,
  },
})
export default class WSelectShip extends Vue {
  @Prop({ default: [] })
  private selectableShips!: ShipType[];

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

  public updateSelectedShip(item: any) {
    this.$emit('setShip', this.selectableShips[this.swiper.activeIndex]);
    // @ts-ignore
    // this.$refs.swiper.swiper.activeIndex = 0;
  }

  @Watch('selectableShips')
  public onChangeSelectableShips() {
    // @ts-ignore
    this.$refs.swiper.swiper.activeIndex = 0;
  }
}
</script>

<style lang="scss" scoped>
img {
    width: 160px;
    height: 180px;
  }

  p {
    font-size: 1.2em;
  } 
</style>