<template>
  <div class="w-select-modal">
    <div class="backdrop" @click="$emit('close')"/>
    <div class="modal">
      <div v-for="(ref, index) of refs" :key="index" @click="$emit('setRef', ref)">
      <w-card :name="ref.name" :imgUrl="ref.imgUrl"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import ReferenceType from '@/models/ReferenceType';
import WCard from '@/components/WCard.vue';

@Component({
  components: {
    WCard,
  },
})

export default class WSelectModal extends Vue {
  @Prop()
  private refs!: ReferenceType[];
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
}

</style>