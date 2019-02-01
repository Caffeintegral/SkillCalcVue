<template>
  <div>
    <div @click="isModalOpened = true">
      <w-card :name="selectedShipType.name" :imgUrl="selectedShipType.imgUrl"/>
    </div>
    <w-select-modal v-if="isModalOpened" @close="isModalOpened = false" :refs="shipTypes" @setRef="$emit('setShipType', $event); isModalOpened = false"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import WCard from '@/components/WCard.vue';
import WSelectModal from '@/components/WSelectModal.vue';
import ReferenceType from '@/models/ReferenceType';

@Component({
  components: {
    WCard,
    WSelectModal,
  },
})
export default class WSelectType extends Vue {
  @Prop()
  private shipTypes!: ReferenceType[];

  @Prop()
  private selectedShipType!: ReferenceType;

  private isModalOpened: boolean = false;
}
</script>

<style lang="scss" scoped>
</style>