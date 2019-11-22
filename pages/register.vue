<template>
  <div class="register">
    <h1>Register</h1>
    <form-default
      :field-list="form.fieldList"
      :button-list="form.buttonList"
      @update="updateFieldList"
      @submit="save"
    />
  </div>
</template>

<script>
import FormDefault from '~/components/form/default'
import { setPayload } from '~/utils/form'

export default {
  components: {
    FormDefault
  },
  data () {
    return {
      form: {
        fieldList: [
          {
            id: 'login',
            value: '',
            label: 'Login',
            field: 'input',
            type: 'text',
            required: true,
            range: {
              min: 4,
              max: 20
            }
          },
          {
            id: 'email',
            value: '',
            label: 'Email',
            field: 'input',
            type: 'text',
            required: true,
            range: {
              min: 4,
              max: 20
            }
          },
          {
            id: 'password',
            value: '',
            label: 'Password',
            field: 'input',
            type: 'password',
            required: true,
            range: {
              min: 6,
              max: 30
            }
          }
        ],
        buttonList: [
          {
            id: 'save',
            value: 'save'
          }
        ]
      }
    }
  },
  computed: {
  },
  asyncData (context) {
  },
  methods: {
    updateFieldList (fieldList) {
      this.form.fieldList = fieldList
    },
    /**
     * Set payload and make request to create user
     */
    async save () {
      const payload = setPayload(
        { login: null, email: null, password: null },
        this.form.fieldList
      )
      await this.$store.dispatch('user/create', payload)
      // redirect to home page
      if (!this.$store.getters['auth/authorized']) { return }
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
