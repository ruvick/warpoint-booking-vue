<template>
  <div class="card-column row col-xs-12 col-sm-6 col-md-4">
    <div class="card-main q-pt-lg q-pl-lg q-pr-lg q-pb-xl">
      <div class="card-main__header row items-center q-mb-xl">
        <div class="card-main__title text-h8 text-dark-10">{{ title }}</div>
      </div>
      <div class="card-main__body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>