<template>
  <div
    class="pop-up overflow-hidden fixed z-50 rounded-2xl p-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-lb-primary"
  >
    <div class="flex items-center justify-between">
      <h5 class="text-2xl text-lb-rot font-medium">{{ title }}</h5>
      <CloseBtn @close-window="closePopUp" />
    </div>

    <div class="pt-4">
      <!-- Name -->
      <label class="text-sm opacity-60" for="name">Name: *</label>
      <input
        v-model="name.value"
        id="name"
        class="p-2 my-2 w-full rounded-md bg-orange-50"
        placeholder="Name"
        type="text"
      />
      <Transition>
        <p class="text-xs opacity-80 mb-2" v-if="name.value.length < 3">
          Name should be at least 3 charracters
        </p>
      </Transition>
      <!-- Phone -->
      <label class="text-sm opacity-60" for="number">Phone Number: *</label>
      <input
        v-model="phone.value"
        id="number"
        class="p-2 my-2 w-full rounded-md bg-orange-50"
        placeholder="+38(098) 123-45-67"
        type="number"
      />

      <!-- Email -->
      <label class="text-sm opacity-60" for="email">Email: *</label>
      <input
        @input="validateEmail"
        id="email"
        v-model="email.value"
        class="p-2 my-2 w-full rounded-md bg-orange-50"
        placeholder="your_email@gmail.com"
        type="text"
      />
      <Transition>
        <p v-if="checkEmail" class="mb-2 text-xs opacity-80">
          Wrong email format
        </p>
      </Transition>

      <!-- Company Name -->
      <label class="text-sm opacity-60" for="company_name">Company Name:</label>
      <input
        v-model="company_name.value"
        id="company_name"
        class="p-2 my-2 w-full rounded-md bg-orange-50"
        placeholder="Company Name"
        type="text"
      />

      <!-- Company Name -->
      <label class="text-sm opacity-60" for="subject">Subject:</label>
      <input
        v-model="subject.value"
        id="subject"
        class="p-2 my-2 w-full rounded-md bg-orange-50"
        placeholder="Subject"
        type="text"
      />

      <!-- Company Name -->
      <label class="text-sm opacity-60" for="message">Message: *</label>
      <textarea
        v-model="message.value"
        id="message"
        class="p-2 my-2 w-full rounded-md bg-orange-50"
        placeholder="Message"
        type="text"
      ></textarea>

      <!-- Submit Form -->
      <ButtonLg class="w-full mt-2 max-w-full">Submit</ButtonLg>
    </div>
  </div>
</template>

<script>
import ButtonLg from './ButtonLg.vue'
import CloseBtn from './CloseBtn.vue'

export default {
  components: { CloseBtn, ButtonLg },
  props: {
    title: String,
  },

  data() {
    return {
      name: {
        type: String,
        value: '',
      },
      phone: {
        type: Number,
        value: '',
      },
      email: {
        type: String,
        value: '',
      },
      company_name: {
        type: String,
        value: '',
      },
      subject: {
        type: String,
        value: '',
      },
      message: {
        type: String,
        value: '',
      },
    }
  },

  methods: {
    closePopUp() {
      this.$emit('close-popup')
    },

    validateEmail() {
      this.checkEmail
    },
  },

  computed: {
    checkEmail() {
      const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return !emailValidation.test(this.email.value)
    },
  },
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.pop-up {
  height: max-content;
  @media screen and (max-width: 767px) {
    width: calc(100% - 32px);
  }
  @media screen and (min-width: 768px) {
    width: 600px;
  }
}
</style>
