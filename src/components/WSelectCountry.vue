<template>
  <div>
    <div @click="isModalOpened = true">
      <w-card :name="selectedCountry.name" :imgUrl="selectedCountry.imgUrl"/>
    </div>
    <w-select-modal v-if="isModalOpened" @close="isModalOpened = false" :refs="countries" @setRef="$emit('setCountry', $event); isModalOpened = false"/>
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
export default class WSelectCountry extends Vue {
  @Prop()
  private countries!: ReferenceType[];

  @Prop()
  private selectedCountry!: ReferenceType;

  private isModalOpened: boolean = false;
}
</script>

<style lang="scss" scoped>
</style>