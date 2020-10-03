<template>
  <div class="modal" :class="{'modal-hidden': !isShowModal}">
    <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50" @click="close"></div>
    <div v-if="isShowModal" class="modal-container" :class="modalClass">
      <div 
        class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
        @click="close"
      >
        <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
          <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
        </svg>
        <span class="text-sm">(Esc)</span>
      </div>

      <div class="modal-content">
        <div v-if="isShowHeader" class="modal-header">
          <slot name="header">
            <p class="text-2xl font-bold text-teal-500">
                {{ headerTitle }}
            </p>
            <div class="modal-close cursor-pointer z-50" @click="close">
              <svg class="fill-current text-teal-500 font-bold" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
              </svg>
            </div>
          </slot>
        </div>

        <div class="modal-body">
          <slot name="body">
            <p>Modal Body</p>
          </slot>
        </div>
        
        <div v-if="isShowFooter" class="modal-footer">
          <slot name="footer">
            <button class="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2">
                Action
            </button>
            <button class="modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400" @click="close">
                Close
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * <Modal
      ref="modal"
      :isShowHeader="false"
      :isShowFooter="false"
      headerTitle="title"
      modalClass="w-10/12"
      @close="closeModal"
    >
      <template slot="header"></template>
      <template slot="body"></template>
      <template slot="footer"></template>
    </Modal>

    // show
    this.$refs.modal.isShowModal = true;
    // hide
    this.$refs.modal.isShowModal = false;
 */
export default {
  props: {
    isShowHeader: {
      type: Boolean,
      default: true
    },
    isShowFooter: {
      type: Boolean,
      default: true
    },
    headerTitle: {
      type: String,
      default: ''
    },
    modalClass: {
      type: String,
      default: 'w-6/12'
    }
  },
  data() {
    return {
      isShowModal: false
    }
  },
  watch: {
    isShowModal(newValue) {
      if (newValue) {
        this.addEventEscape()
        document.body.classList.add('overflow-hidden')
      } else {
        this.removeEventEscape()
        document.body.classList.remove('overflow-hidden')
      }
    }
  },
  created() {
    this.$once('hook:destroyed', () => {
      document.removeEventListener('keydown', this.onEscape)
    })
  },
  methods: {
    show() {
      this.isShowModal = true
    },
    close() {
      this.$emit('onClose')
      this.isShowModal = false
    },
    addEventEscape() {
      document.addEventListener('keydown', this.onEscape)
    },
    removeEventEscape() {
      document.removeEventListener('keydown', this.onEscape)
    },
    onEscape(e) {
      if (this.isShowModal && e.keyCode === 27) {
        this.close()
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  @apply fixed w-full h-full top-0 left-0 flex items-center justify-center z-40 overflow-hidden;
  transition: opacity 0.25s ease;
}
.modal-hidden {
  @apply opacity-0 pointer-events-none;
}
.modal-container {
  @apply flex bg-white mx-auto rounded shadow-lg z-50 overflow-hidden;
  max-height: 100%;
}
@screen sm {
  .modal-container {
    max-height: calc(100% - 64px);
  }
}

.modal-content {
  @apply flex flex-col w-full text-left overflow-hidden;
}
.modal-header {
  @apply flex p-6 justify-between items-center border-b;
}
.modal-body {
  @apply p-6 overflow-y-auto;
}
.modal-footer {
  @apply flex p-6 justify-end border-t;
}
</style>