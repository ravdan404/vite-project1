<template>
  <Header />
  <form class="p-20">
    <div class="mb-6">
      <label
        for="text"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Name</label
      >
      <input
        type="text"
        v-model="rest.fname"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="username"
        required=""
      />
    </div>
    <div class="mb-6">
      <label
        for="email"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Email</label
      >
      <input
        type="email"
        v-model="rest.email"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Email"
        required=""
      />
    </div>
    <div class="mb-6">
      <label
        for="countries"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >Select Gender</label
      >
      <select
        id="gender"
        v-model="rest.gender"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
    <div class="flex justify-between">
      <button
        type="submit"
        @click="updateBtn"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
      <button
        class="text-white bg-gray-400 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center hover:bg-gray-500"
      >
        <router-link to="/">Cancel</router-link>
      </button>
    </div>
  </form>
</template>

<script>
  import Header from '../components/Header.vue';
  import axios from 'axios';

  export default {
    data() {
      return {
        rest: {
          fname: '',
          email: '',
          gender: '',
        },
      };
    },
    methods: {
      async updateBtn() {
        const result = await axios.put(
          'http://localhost:3000/userData/' + this.$route.params.id,
          {
            fname: this.rest.fname,
            email: this.rest.email,
            gender: this.rest.gender,
          }
        );
        if (result.status == 200) {
          this.$router.push({ name: 'Home' });
        }
        this.isShowModal = false;
      },
    },
    async mounted() {
      const result = await axios.get(
        'http://localhost:3000/userData/' + this.$route.params.id
      );
      this.rest = result.data;
    },
    components: { Header },
  };
</script>

<style></style>
