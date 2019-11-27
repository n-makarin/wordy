<template>
  <div class="login">
    <h1>{{ $t('login') }}</h1>
    <form-default
      :field-list="form.fieldList"
      :button-list="form.buttonList"
      @update="updateFieldList"
      @submit="submit"
    />
  </div>
</template>

<script>
import FormDefault from '~/components/form/default'

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
            label: 'Username or email address',
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
            id: 'submit',
            value: 'submit'
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
    async submit () {
      const login = this.form.fieldList[0].value
      const password = this.form.fieldList[1].value
      await this.$store.dispatch('auth/login', { login, password })
      if (!this.$store.getters['auth/authorized']) { return }
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
