<script>
import LoginFormComponent from '@/components/LoginFormComponent.vue';
import frontStore from '@/stores/frontStore';
import { mapState, mapActions } from 'pinia';

// const { VITE_API, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      register: false,
    };
  },
  components: {
    LoginFormComponent,
  },
  computed: {
    ...mapState(frontStore, ['isLoading', 'fullPage']),
  },
  methods: {
    ...mapActions(frontStore, ['login']),
  },
  mounted() {
    // if (this.$route.fullPath === '/register') {
    //   this.register = true;
    // } else {
    //   this.register = false;
    // }
  },
};
</script>
<template>
  <!-- <loading v-model:active="isLoading" :is-full-page="fullPage" /> -->
  <LoginFormComponent :status="'登入'" @submit-form="login"></LoginFormComponent>
</template>
