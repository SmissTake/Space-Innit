<template>
  <v-dialog v-model="showDetails" max-width="500">
    <v-card>
      <v-card-title>{{ luminary.name }} Details</v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item v-if="luminary.id">
            <v-list-item-title>ID:</v-list-item-title>
            <v-list-item-subtitle>{{ luminary.id }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item v-if="luminary.englishName">
            <v-list-item-title>English Name:</v-list-item-title>
            <v-list-item-subtitle>{{ luminary.englishName }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item v-if="luminary.isPlanet !== undefined">
            <v-list-item-title>Is Planet:</v-list-item-title>
            <v-list-item-subtitle>{{ luminary.isPlanet }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item v-if="luminary.semimajorAxis">
            <v-list-item-title>Semimajor Axis:</v-list-item-title>
            <v-list-item-subtitle>{{ luminary.semimajorAxis }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item v-if="luminary.perihelion">
            <v-list-item-title>Perihelion:</v-list-item-title>
            <v-list-item-subtitle>{{ luminary.perihelion }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item v-if="luminary.aphelion">
            <v-list-item-title>Aphelion:</v-list-item-title>
            <v-list-item-subtitle>{{ luminary.aphelion }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item v-if="luminary.eccentricity">
            <v-list-item-title>Eccentricity:</v-list-item-title>
            <v-list-item-subtitle>{{ luminary.eccentricity }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item v-if="luminary.inclination">
            <v-list-item-title>Inclination:</v-list-item-title>
            <v-list-item-subtitle>{{ luminary.inclination }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item v-if="luminary.mass">
            <v-list-item-title>Mass:</v-list-item-title>
            <v-list-item-subtitle>{{ luminary.mass.massValue }} x 10^{{ luminary.mass.massExponent }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item v-if="luminary.vol">
            <v-list-item-title>Volume:</v-list-item-title>
            <v-list-item-subtitle>{{ luminary.vol.volValue }} x 10^{{ luminary.vol.volExponent }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item v-if="luminary.density">
            <v-list-item-title>Density:</v-list-item-title>
            <v-list-item-subtitle>{{ luminary.density }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item v-if="luminary.gravity">
            <v-list-item-title>Gravity:</v-list-item-title>
            <v-list-item-subtitle>{{ luminary.gravity }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item v-if="luminary.escape">
            <v-list-item-title>Escape Velocity:</v-list-item-title>
            <v-list-item-subtitle>{{ luminary.escape }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item v-if="luminary.meanRadius">
            <v-list-item-title>Mean Radius:</v-list-item-title>
            <v-list-item-subtitle>{{ luminary.meanRadius }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item v-if="luminary.equaRadius">
            <v-list-item-title>Equatorial Radius:</v-list-item-title>
            <v-list-item-subtitle>{{ luminary.equaRadius }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item v-if="luminary.polarRadius">
            <v-list-item-title>Polar Radius:</v-list-item-title>
            <v-list-item-subtitle>{{ luminary.polarRadius }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item v-if="luminary.flattening">
            <v-list-item-title>Flattening:</v-list-item-title>
            <v-list-item-subtitle>{{ luminary.flattening }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item v-if="luminary.dimension">
            <v-list-item-title>Dimension:</v-list-item-title>
            <v-list-item-subtitle>{{ luminary.dimension }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item v-if="luminary.sideralOrbit">
            <v-list-item-title>Sidereal Orbit:</v-list-item-title>
            <v-list-item-subtitle>{{ luminary.sideralOrbit }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item v-if="luminary.sideralRotation">
            <v-list-item-title>Sidereal Rotation:</v-list-item-title>
            <v-list-item-subtitle>{{ luminary.sideralRotation }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item v-if="luminary.aroundPlanet">
            <v-list-item-title>Around Planet:</v-list-item-title>
            <v-list-item-subtitle>{{ luminary.aroundPlanet.planet }} ({{ luminary.aroundPlanet.rel }})</v-list-item-subtitle>
          </v-list-item>
          <v-list-item v-if="luminary.discoveredBy">
            <v-list-item-title>Discovered By:</v-list-item-title>
            <v-list-item-subtitle>{{ luminary.discoveredBy }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item v-if="luminary.discoveryDate">
            <v-list-item-title>Discovery Date:</v-list-item-title>
            <v-list-item-subtitle>{{ luminary.discoveryDate }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item v-if="luminary.alternativeName">
            <v-list-item-title>Alternative Name:</v-list-item-title>
            <v-list-item-subtitle>{{ luminary.alternativeName }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item v-if="luminary.axialTilt">
            <v-list-item-title>Axial Tilt:</v-list-item-title>
            <v-list-item-subtitle>{{ luminary.axialTilt }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item v-if="luminary.avgTemp">
            <v-list-item-title>Average Temperature:</v-list-item-title>
            <v-list-item-subtitle>{{ luminary.avgTemp }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item v-if="luminary.mainAnomaly">
            <v-list-item-title>Main Anomaly:</v-list-item-title>
            <v-list-item-subtitle>{{ luminary.mainAnomaly }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item v-if="luminary.argPeriapsis">
            <v-list-item-title>Argument of Periapsis:</v-list-item-title>
            <v-list-item-subtitle>{{ luminary.argPeriapsis }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item v-if="luminary.longAscNode">
            <v-list-item-title>Longitude of Ascending Node:</v-list-item-title>
            <v-list-item-subtitle>{{ luminary.longAscNode }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item v-if="luminary.bodyType">
            <v-list-item-title>Body Type:</v-list-item-title>
            <v-list-item-subtitle>{{ luminary.bodyType }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item v-if="luminary.rel">
            <v-list-item-title>Rel:</v-list-item-title>
            <v-list-item-subtitle>{{ luminary.rel }}</v-list-item-subtitle>
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
