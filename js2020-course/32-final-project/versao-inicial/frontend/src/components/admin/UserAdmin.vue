<template>
  <div class="user-admin">
    <b-form>
      <input type="hidden" id="user-id" v-model="user.id" />

      <b-row>
        <b-col md="6" sm="12">
          <b-form-group label="Name:" label-for="user-name">
            <b-form-input id="user-name" type="text" v-model="user.name" required placeholder="Enter user name...">              
            </b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12">
          <b-form-group label="E-mail:" label-for="user-email">
            <b-form-input id="user-email" type="text" v-model="user.email" required placeholder="Enter user E-mail...">              
            </b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-form-checkbox id="user-admin" v-model="user.admin" class="mt-3 mb-3">
        Administrator
      </b-form-checkbox>

      <b-row>
        <b-col md="6" sm="12">
          <b-form-group label="Password:" label-for="user-password">
            <b-form-input id="user-password" type="password" v-model="user.password" required placeholder="Enter user password...">              
            </b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12">
          <b-form-group label="Confirm password:" label-for="user-confirm-password">
            <b-form-input id="user-confirm-password" type="password" v-model="user.confirmPassword" required placeholder="Confirm user password...">              
            </b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      
      <b-button variant="primary" v-if="mode === 'save'" @click="save">
        Save
      </b-button>
      <b-button variant="danger" v-if="mode === 'remove'" @click="remove">
        Delete
      </b-button>
      <b-button class="ml-2" @click="reset">
        Cancel
      </b-button>
    </b-form>

    <hr>

    <b-table hover striped :items="users" :fields="fields"></b-table>
  </div>
</template>

<script>
import axios from "axios"
import { baseApiUrl, showError } from "@/global"

export default {
  name: "UserAdmin",
  data: function () {
    return {
      mode: "save",
      user: {},
      users: [],
      fields: [
        {key: 'id', label: 'Code', sortable: true },
        {key: 'name', label: 'Name', sortable: true },
        {key: 'email', label: 'E-mail', sortable: true },
        {key: 'admin', label: 'Administrator', sortable: true , 
          formatter: value => value ? 'Yes' : 'No'},
        {key: 'action', label: 'Actions'}
      ]
    }
  },
  methods: {
    loadUsers() {
      const url = `${baseApiUrl}/users`
      axios.get(url).then(res => {
        this.users = res.data                
      })      
    },
    reset() {
      this.mode = 'save'
      this.user = {},
      this.loadUsers()
    }, 
    save() {
      const method = this.user.id ? 'put' : 'post'
      const id = this.user.id ? `/${this.user.id}` : ''
      axios[method](`${baseApiUrl}/users${id}`, this.user)
        .then(() => {
          this.$toasted.global.defaultSuccess('User saved or updated successfully!')
          this.reset()
        })
        .catch(showError)
    },
    remove() {
      const id = this.user.id
      axios.delete(`${baseApiUrl}/users${id}`)
      .then(() => {
        this.$toasted.global.defaultSuccess('Use deleted successfully...')
        this.reset()
      })
      .catch(showError)
    }
  },
  mounted() {
    this.loadUsers()
  }
}
</script>

<style>
</style>