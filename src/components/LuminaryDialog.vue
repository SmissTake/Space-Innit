<template>
  <v-dialog v-model="showDetails" max-width="500">
    <v-card>
      <v-card-title>{{ luminary.name }} Details</v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item>
            <v-list-item-content>ID:</v-list-item-content>
            <v-list-item-content>{{ luminary.id }}</v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>English Name:</v-list-item-content>
            <v-list-item-content>{{
              luminary.englishName
            }}</v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>Is Planet:</v-list-item-content>
            <v-list-item-content>{{ luminary.isPlanet }}</v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>Semimajor Axis:</v-list-item-content>
            <v-list-item-content>{{
              luminary.semimajorAxis
            }}</v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>Perihelion:</v-list-item-content>
            <v-list-item-content>{{ luminary.perihelion }}</v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>Aphelion:</v-list-item-content>
            <v-list-item-content>{{ luminary.aphelion }}</v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>Eccentricity:</v-list-item-content>
            <v-list-item-content>{{
              luminary.eccentricity
            }}</v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>Inclination:</v-list-item-content>
            <v-list-item-content>{{
              luminary.inclination
            }}</v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>Mass:</v-list-item-content>
            <v-list-item-content
              >{{ luminary.mass.massValue }} x 10^{{
                luminary.mass.massExponent
              }}</v-list-item-content
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-content>Volume:</v-list-item-content>
            <v-list-item-content
              >{{ luminary.vol.volValue }} x 10^{{
                luminary.vol.volExponent
              }}</v-list-item-content
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-content>Density:</v-list-item-content>
            <v-list-item-content>{{ luminary.density }}</v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>Gravity:</v-list-item-content>
            <v-list-item-content>{{ luminary.gravity }}</v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>Escape Velocity:</v-list-item-content>
            <v-list-item-content>{{ luminary.escape }}</v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>Mean Radius:</v-list-item-content>
            <v-list-item-content>{{ luminary.meanRadius }}</v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>Equatorial Radius:</v-list-item-content>
            <v-list-item-content>{{ luminary.equaRadius }}</v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>Polar Radius:</v-list-item-content>
            <v-list-item-content>{{
              luminary.polarRadius
            }}</v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>Flattening:</v-list-item-content>
            <v-list-item-content>{{ luminary.flattening }}</v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>Dimension:</v-list-item-content>
            <v-list-item-content>{{ luminary.dimension }}</v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>Sidereal Orbit:</v-list-item-content>
            <v-list-item-content>{{
              luminary.sideralOrbit
            }}</v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>Sidereal Rotation:</v-list-item-content>
            <v-list-item-content>{{
              luminary.sideralRotation
            }}</v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>Around Planet:</v-list-item-content>
            <v-list-item-content
              >{{ luminary.aroundPlanet.planet }} ({{
                luminary.aroundPlanet.rel
              }})</v-list-item-content
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-content>Discovered By:</v-list-item-content>
            <v-list-item-content>{{
              luminary.discoveredBy
            }}</v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>Discovery Date:</v-list-item-content>
            <v-list-item-content>{{
              luminary.discoveryDate
            }}</v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>Alternative Name:</v-list-item-content>
            <v-list-item-content>{{
              luminary.alternativeName
            }}</v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>Axial Tilt:</v-list-item-content>
            <v-list-item-content>{{ luminary.axialTilt }}</v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>Average Temperature:</v-list-item-content>
            <v-list-item-content>{{ luminary.avgTemp }}</v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>Main Anomaly:</v-list-item-content>
            <v-list-item-content>{{
              luminary.mainAnomaly
            }}</v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>Argument of Periapsis:</v-list-item-content>
            <v-list-item-content>{{
              luminary.argPeriapsis
            }}</v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content
              >Longitude of Ascending Node:</v-list-item-content
            >
            <v-list-item-content>{{
              luminary.longAscNode
            }}</v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>Body Type:</v-list-item-content>
            <v-list-item-content>{{ luminary.bodyType }}</v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>Rel:</v-list-item-content>
            <v-list-item-content>{{ luminary.rel }}</v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Luminary from "@/models/luminary";

export default defineComponent({
  name: "LuminaryCard",
  props: {
    luminary: {
      type: Object as () => Luminary,
      required: true,
    },
  },
  data() {
    return {
      showDetails: false,
    };
  },
});
</script>
