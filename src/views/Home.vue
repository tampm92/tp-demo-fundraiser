<template>
  <div>
    <div class="flex flex-col capitalize text-3xl">
      <span class="font-semibold">Fundraisers</span>
    </div>
    <div class="flex">
      <div class="mr-6 w-full mt-8 p-4 flex-shrink-0 flex flex-col bg-white dark:bg-gray-600 rounded-lg">
        <table class="min-w-full">
          <thead>
            <tr>
              <th class="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Id</th>
              <th class="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Image</th>
              <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Creator Name</th>
              <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Total</th>
              <th class="px-6 py-3 border-b-2 border-gray-300"></th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr v-for="fundraiser in fundraisers" :key="fundraiser.Id">
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div class="flex items-center">
                  <div class="text-sm leading-5 text-gray-800">#{{ fundraiser.Id }}</div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <img class="h-10" :src="fundraiser.ImagePath">
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{{ fundraiser.CreatorName }}</td>
              <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{{ fundraiser.Total }}</td>
              <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none"
                  @click="showModal(fundraiser)"
                >
                  View Details
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans">
          <div>
          </div>
          <div>
            <nav class="relative z-0 inline-flex shadow-sm">
              <div>
                <button class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Previous" 
                  @click="goToPage(pagination.PageNumber - 1)"
                  :disabled="pagination.PageNumber === 1"
                >
                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
              <div>
                <button href="#" class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-700 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary">
                  1
                </button>
                <button href="#" class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-600 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary">
                  2
                </button>
                <button href="#" class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-600 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary">
                  3
                </button>
              </div>
              <div>
                <button class="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Next"
                  @click="goToPage(pagination.PageNumber + 1)"
                  :disabled="pagination.PageNumber === pagination.TotalPages"
                >
                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <Modal
      ref="modal"
      :is-show-header="false"
      :is-show-footer="false"
      modal-class="w-2/4"
      @close="closeModal"
    >
      <template slot="body">
        <div class="-mx-3 md:flex mb-6">
          <div class="md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
              Id
            </label>
            <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
              :value="fundraiserSelected.Id"
              disabled
            >
          </div>
          <div class="md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
              Creator Name
            </label>
            <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
              :value="fundraiserSelected.CreatorName"
              disabled
            >
          </div>
        </div>
        <div class="-mx-3 md:flex mb-6">
          <div class="md:w-1/3 px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
              PageType
            </label>
            <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
              :value="fundraiserSelected.PageType"
              disabled
            >
          </div>
          <div class="md:w-1/3 px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
              Raise Target
            </label>
            <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
              :value="fundraiserSelected.RaiseTarget"
              disabled
            >
          </div>
          <div class="md:w-1/3 px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
              Total
            </label>
            <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
              :value="fundraiserSelected.Total"
              disabled
            >
          </div>
        </div>
        <div class="-mx-3 md:flex mb-6">
          <div class="md:w-full px-3 text-center">
            <img class="m-auto" :src="fundraiserSelected.ImagePath">
          </div>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from '../components/common/Modal'
import FundraiserService from '../services/FundraiserService'
const fundraiserService = new FundraiserService()

export default {
  components: {
    Modal
  },
  data() {
    return {
      pagination: {
        'ResultsReturned': 0,
        'PageNumber': 1,
        'TotalPages': 1
      },
      fundraisers: [],
      fundraiserSelected: {}
    }
  },
  created() {
    document.title = 'Home - Fundraiser'
    this.getFundraisers()
  },
  methods: {
		async getFundraisers() {
      this.$store.dispatch('startLoading')
			const data = await fundraiserService.search({
        eventcampaignid: 4,
        pagetype: 'S',
        sortorder: 'desc',
        sortby: 4,
        pagesize: 10
      })
			this.fundraisers = data.Pages
			this.pagination.ResultsReturned = data.ResultsReturned
			this.pagination.PageNumber = data.PageNumber
      this.pagination.TotalPages = data.TotalPages
      
      this.$store.dispatch('stopLoading')
		},
		showFundraiser(fundraiser){
			console.log(fundraiser)
    },
    goToPage(page) {
      console.log(page)
      this.pagination.PageNumber = page
      this.getFundraisers()
    },
    showModal(fundraiser) {
      this.fundraiserSelected = fundraiser
      this.$refs.modal.isShowModal = true;
    },
    closeModal() {
      this.fundraiserSelected = {}
      this.$refs.carousel.activeSlide = 0;
    },
	}
};
</script>
