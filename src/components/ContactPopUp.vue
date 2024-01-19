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
      <div class="relative">
        <label class="text-sm opacity-60" for="name">Name: *</label>
        <input
          :required="name.required"
          v-model="name.value"
          id="name"
          class="p-2 my-2 w-full rounded-md bg-orange-50"
          placeholder="Name"
          type="text"
        />
        <Transition>
          <CheckMarkIcon
            v-if="name.value.trim().length >= 3"
            class="absolute top-1/2 right-2 mt-1 text-xs opacity-80"
          />
        </Transition>
      </div>

      <!-- Phone -->
      <div class="flex mb-2 relative flex-col">
        <label class="text-sm mb-2 opacity-60" for="number"
          >Phone Number: *</label
        >
        <input
          :required="phone.required"
          v-model="phone.value"
          id="number"
          class="p-2 my-2 w-full rounded-md bg-orange-50"
          type="tel"
          @input="validatePhoneNumber"
        />
        <Transition>
          <CheckMarkIcon
            v-if="isPhoneNumberValid"
            class="absolute top-1/2 right-2 mt-1 text-xs opacity-80"
          />
        </Transition>
      </div>

      <!-- Email -->
      <div class="relative">
        <label class="text-sm opacity-60" for="email">Email: *</label>
        <input
          :required="email.required"
          @input="validateEmail"
          id="email"
          v-model="email.value"
          class="p-2 my-2 w-full rounded-md bg-orange-50"
          placeholder="your_email@gmail.com"
          type="text"
        />
        <Transition>
          <CheckMarkIcon
            v-if="!checkEmail"
            class="absolute top-1/2 right-2 mb-1 text-xs opacity-80"
          />
        </Transition>
      </div>

      <!-- Company Name -->
      <div class="relative">
        <label class="text-sm opacity-60" for="company_name"
          >Company Name:</label
        >
        <input
          :required="company_name.required"
          v-model="company_name.value"
          id="company_name"
          class="p-2 my-2 w-full rounded-md bg-orange-50"
          placeholder="Company Name"
          type="text"
        />
        <Transition>
          <CheckMarkIcon
            v-if="company_name.value.trim().length >= 3"
            class="absolute top-1/2 right-2 mt-1 text-xs opacity-80"
          />
        </Transition>
      </div>

      <!-- Subject -->
      <div class="relative">
        <label class="text-sm opacity-60" for="subject">Subject: *</label>
        <input
          :required="subject.required"
          v-model="subject.value"
          id="subject"
          class="p-2 my-2 w-full rounded-md bg-orange-50"
          placeholder="Subject"
          type="text"
        />
        <Transition>
          <CheckMarkIcon
            v-if="subject.value.length >= 3"
            class="absolute top-1/2 right-2 mt-1 text-xs opacity-80"
          />
        </Transition>
      </div>

      <!-- Message -->
      <div class="relative">
        <label class="text-sm opacity-60" for="message">Message: *</label>
        <textarea
          v-model="message.value"
          id="message"
          class="p-2 my-2 w-full rounded-md bg-orange-50"
          placeholder="Message"
          type="text"
        ></textarea>
        <Transition>
          <CheckMarkIcon
            v-if="message.value.length >= 3"
            class="absolute top-1/2 right-2 mt-1 text-xs opacity-80"
          />
        </Transition>
      </div>

      <!-- Submit Form -->
      <ButtonSubmitLg
        :text="'Submit'"
        :readyToSend="readyToSend"
        class="w-full mt-2 max-w-full"
      />
    </div>
  </div>
</template>

<script>
import ButtonSubmitLg from './ButtonSubmitLg.vue'
import CloseBtn from './CloseBtn.vue'
import CheckMarkIcon from './CheckMarkIcon.vue'
import intlTelInput from 'intl-tel-input'
import 'intl-tel-input/build/css/intlTelInput.css'

export default {
  components: { CloseBtn, CheckMarkIcon, ButtonSubmitLg },
  props: {
    title: String,
  },

  data() {
    return {
      name: {
        type: String,
        value: '',
        required: true,
      },
      phone: {
        type: String,
        value: '',
        required: true,
      },
      email: {
        type: String,
        value: '',
        required: true,
      },
      company_name: {
        type: String,
        value: '',
        required: false,
      },
      subject: {
        type: String,
        value: '',
        required: true,
      },
      message: {
        type: String,
        value: '',
        required: true,
      },
      isPhoneNumberValid: false,
    }
  },

  methods: {
    closePopUp() {
      this.$emit('close-popup')
    },

    validateEmail() {
      this.checkEmail
    },

    validatePhoneNumber() {
      const input = document.querySelector('#number')
      const iti = window.intlTelInputGlobals.getInstance(input)
      this.isPhoneNumberValid = iti.isValidNumber()
      console.log('Full phone number:', iti.getNumber())
    },
  },

  computed: {
    readyToSend() {
      return Object.values(this.$data).every(
        (input) => !input.required || input.value.trim().length >= 3
      )
    },

    checkEmail() {
      const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return !emailValidation.test(this.email.value)
    },
  },

  mounted() {
    const input = document.querySelector('#number')
    if (input) {
      intlTelInput(input, {
        initialCountry: 'auto',
        geoIpLookup: (callback) => {
          fetch('https://ipapi.co/json')
            .then((res) => res.json())
            .then((data) => callback(data.country_code))
            .catch(() => callback('us'))
        },
        showSelectedDialCode: false,
        countrySearch: false,
        autoPlaceholder: 'aggressive',
        formatAsYouType: true,
        formatOnDisplay: true,
        utilsScript: './node_modules/intl-tel-input/build/js/utils.js',
      })
    }
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
.iti__flag {
  background-image: url('path/to/flags.png');
}

@media (min-resolution: 2x) {
  .iti__flag {
    background-image: url('path/to/flags@2x.png');
  }
}
</style>
