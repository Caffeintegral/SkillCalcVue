<template>
  <div class="skill-page">
    <w-top-bar
      name="title"
    />
    <w-skill-page
      :countries="countries"
      :selectedCountry="selectedCountry"
      @setCountry="selectedCountry = $event; selectedShip = selectableShips.length > 0 ? selectableShips[0] : null;"
      :shipTypes="shipTypes"
      :selectedShipType="selectedShipType"
      @setShipType="selectedShipType = $event; selectedShip = selectableShips.length > 0 ? selectableShips[0] : null;"
      :selectableShips="selectableShips"
      :selectedShip="selectedShip"
      @setShip="selectedShip = $event"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import WSkillPage from '@/components/WSkillPage.vue';
import '@/datas/countries';
import ReferenceType from '@/models/ReferenceType';
import countries from '@/datas/countries';
import shipTypes from '@/datas/shipTypes';
import shipDatas from '@/datas/shipDatas';
import ShipType from '@/models/ShipType';
import WTopBar from '@/components/WTopBar.vue';

@Component({
  components: {
    WSkillPage,
    WTopBar,
  },
})
export default class SkillPage extends Vue {
  private countries: ReferenceType[] = countries;
  private shipTypes: ReferenceType[] = shipTypes;
  private selectedCountry: ReferenceType = countries[0];
  private selectedShipType: ReferenceType = shipTypes[1];
  private selectedShip: ShipType  | null =
    this.selectedShip = this.selectableShips.length > 0 ? this.selectableShips[0] : null;

  get selectableShips() {
    const result = shipDatas.filter((ship) => {
      return ship.type === this.selectedShipType.name && ship.country === this.selectedCountry.name;
    });
    result.sort((ship1: ShipType, ship2: ShipType) => {
      return ship1.tier - ship2.tier;
    });
    // this.selectableShips.length > 0 trueなら　this.selectableShips[0]　false なら　null
    return result;
  }
}
</script>

<style lang="scss" scoped>
</style>