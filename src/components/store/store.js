import Vue from "vue";

export const store = Vue.observable({
  isCollapse: false
});

export const mutations = {
  setIsNavOpen(yesno) {
    store.isCollapse = yesno;
  },
  toggleNav() {
    store.isCollapse = !store.isCollapse;
  }
};
