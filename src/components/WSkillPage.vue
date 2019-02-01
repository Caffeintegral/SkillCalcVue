<template>
<div class="w-skill-page">
  <div class="upper-selector">
    <w-select-country :countries="countries" :selectedCountry="selectedCountry" @setCountry="$emit('setCountry', $event)"/>
    <w-select-type :shipTypes="shipTypes" :selectedShipType="selectedShipType" @setShipType="$emit('setShipType', $event)"/>
  </div>
  <div class="bottom-selector">
    <w-select-ship :selectableShips="selectableShips" @setShip="$emit('setShip', $event)"/>
  </div>
  <div class="next-button" :disabled="!selectedShip">
    <div v-if="selectedShip">
      {{selectedShip.name}}>
    </div>
    <div v-else>
      選択してください
    </div>
  </div>
</div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import WSelectCountry from '@/components/WSelectCountry.vue';
import WSelectType from '@/components/WSelectType.vue';
import ReferenceType from '@/models/ReferenceType';
import ShipType from '@/models/ShipType';
import WSelectShip from '@/components/WSelectShip.vue';

@Component({
  components: {
    WSelectCountry,
    WSelectType,
    WSelectShip,
  },
})
export default class WSkillPage extends Vue {
  @Prop()
  private countries!: ReferenceType[];

  @Prop()
  private selectedCountry!: ReferenceType;

  @Prop()
  private shipTypes!: ReferenceType[];

  @Prop()
  private selectedShipType!: ReferenceType;

  @Prop()
  private selectableShips!: ShipType[];

  @Prop({ default: null })
  private selectedShip!: ShipType | null;

}
</script>
<style lang="scss" scoped>
.w-skill-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 52px;

  .upper-selector {
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;    
  }

  .bottom-selector {
    height: 40%;
    width: 100%;
  }

  .next-button {
    width: 80%;
    height: 52px;
    border-radius: 5px;
    border: none;
    background: #89c;
    color: #fff;
  }
}
</style>