<template>
  <div class="row row-equal">
    <div class="flex xs12 md6 xl3">
      <va-card :title="$t('dashboard.charts.loadingSpeed')">
        <va-button
          flat
          slot="actions"
          class="mr-0"
        />
        <va-chart class="chart chart--donut" :data="donutChartData" type="donut"/>
      </va-card>
    </div>

  </div>
</template>

<script>
import { getDonutChartData } from '../../data/charts/DonutChartData'

export default {
  name: 'dashboard-charts',
  components: { },
  data () {
    return {
      donutChartData: getDonutChartData(this.$themes),
      lineChartFirstMonthIndex: 0,
    }
  },
  watch: {
    '$themes.primary' () {
      this.donutChartData = getDonutChartData(this.$themes)
    },

    '$themes.info' () {
      this.donutChartData = getDonutChartData(this.$themes)
    },

    '$themes.danger' () {
      this.donutChartData = getDonutChartData(this.$themes)
    },
  },
  methods: {
  },
  computed: {
    donutChartDataURL () {
      return document.querySelector('.chart--donut canvas').toDataURL('image/png')
    },
  },
}
</script>

<style scoped>
  .chart {
    height: 400px;
  }
</style>
