<template>
  <div class="row row-equal">
    <div class="flex xl6 xs12">
      <div class="row">
        <div
          class="flex xs12 sm4"
          v-for="(info, idx) in infoTiles"
          :key="idx"
        >
          <va-card class="mb-4" :color="info.color">
            <p class="display-2 mb-0" style="color: white;">{{ info.value }}</p>
            <p>{{$t('dashboard.info.' + info.text)}}</p>
          </va-card>
        </div>
      </div>

      <div class="row">
        <div class="flex xs12 md6">
          <va-card>
            <p class="display-2 mb-1" :style="{color: this.$themes.primary}">291</p>
            <p class="no-wrap">{{$t('dashboard.info.completedPullRequests')}}</p>
          </va-card>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'DashboardInfoBlock',
  data () {
    return {
      infoTiles: [{
        color: 'success',
        value: '803',
        text: 'commits',
        icon: '',
      }, {
        color: 'danger',
        value: '57',
        text: 'components',
        icon: '',
      }, {
        color: 'info',
        value: '5',
        text: 'teamMembers',
        icon: '',
      }],
    }
  },
  methods: {
  },
}
</script>

<style lang="scss">
  .row-separated {
    .flex + .flex {
      border-left: 1px solid #e3eaeb;
    }
  }
</style>
