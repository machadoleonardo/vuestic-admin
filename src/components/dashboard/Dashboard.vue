<template>
  <div class="dashboard">
    <dashboard-charts />
    <dashboard-info-block />
    <div class="row">
      <div class="flex xs12">
        <dashboard-table />
      </div>
    </div>
  </div>
</template>

<script>
import DashboardCharts from './DashboardCharts'
import DashboardInfoBlock from './DashboardInfoBlock'
import DashboardTable from './DashboardTable'

export default {
  name: 'dashboard',
  components: {
    DashboardCharts,
    DashboardInfoBlock,
    DashboardTable,
  },
  methods: {
  },
}
</script>

<style lang="scss">
  .row-equal .flex {
    .va-card {
      height: 100%;
    }
  }

  .dashboard {
    .va-card {
      margin-bottom: 0 !important;
    }
  }
</style>
