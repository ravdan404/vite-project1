<template>
  <Header />
  <div class="p-4">
    <div
      class="w-full flex justify-between items-center bg-slate-100 rounded px-4 py-2 mb-4"
    >
      <div class="">
        <h1 class="text-gray-700 text-lg">Table</h1>
      </div>
      <button
        class="px-4 py-2 bg-slate-700 rounded-md text-gray-200"
        type="button"
        @click="isShowModal = true"
      >
        Add Data
      </button>
    </div>
    <DataTable :data="userData" :header="userTable" />
    <div
      v-if="isShowModal"
      class="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div
          @click="isShowModal = false"
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >

        <div
          class="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <form class="p-6">
            <div class="mb-6">
              <label
                for="text"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Name</label
              >
              <input
                type="text"
                v-model="fname"
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
                v-model="email"
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
                v-model="gender"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div class="flex justify-between">
              <button
                type="submit"
                @click="saveBtn"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
              <button
                @click="isShowModal = false"
                class="text-white bg-gray-400 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header.vue';
  import DataTable from '../components/DataTable.vue';
  import axios from 'axios';

  export default {
    data() {
      return {
        fname: '',
        email: '',
        gender: '',
        isShowModal: false,
        userTable: [
          { key: 'id', title: 'ID' },
          { key: 'fname', title: 'Нэр' },
          { key: 'email', title: 'Email' },
          { key: 'gender', title: 'Хүйс' },
        ],
        userData: [],
      };
    },
    mounted() {
      fetch('http://localhost:3000/userData')
        .then((res) => res.json())
        .then((data) => (this.userData = data))
        .catch((err) => console.log(err.messege));
    },
    components: { Header, DataTable },
    methods: {
      async saveBtn() {
        const result = await axios.post('http://localhost:3000/userData', {
          fname: this.fname,
          email: this.email,
          gender: this.gender,
        });
        this.isShowModal = false;
      },
    },
  };
</script>

<style></style>
