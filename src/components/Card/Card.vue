<template>
  <div class="Card_component">
    <div class="Card_people_component">
      <span class="Card_people_icon">
        <i class="fas fa-user-friends" aria-hidden="true"></i>
      </span>
      <div class="Card_people_count">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {};
  }
};
</script>

<style scoped>
.Card_people_icon {
  background: linear-gradient(to right, #6478FB, #8763FB);
  width: 3rem;
}
</style>