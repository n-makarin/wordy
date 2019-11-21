<template>
  <div class="login">
    <h1>Login</h1>
    <form-default
      :field-list="form.fieldList"
      :button-list="form.buttonList"
      @update="update"
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
    update (fieldList) {
      this.form.fieldList = fieldList
    },
    submit () {
      console.log(this.form.fieldList)
      console.log('submitted')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
