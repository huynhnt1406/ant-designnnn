<template>
  <div class="container">
    <h3>User {{data.id}}</h3>
    <div class="user">
        <div>
            <label for="name">Full Name</label>
            <b-form-input
                v-model="data.name"
            ></b-form-input>
        </div>
        <div>
            <label for="username">User Name</label>
            <b-form-input
                v-model="data.username"
            ></b-form-input>
        </div>
        <div>
            <label for="email">Email</label>
            <b-form-input
                v-model="data.email"
            ></b-form-input>
        </div>
        <div>
            <label for="city">City</label>
            <b-form-input
                v-model="data.address.city"
            ></b-form-input>
        </div>
        <div>
            <label for="street">Street</label>
            <b-form-input
                v-model="data.address.street"
            ></b-form-input>
        </div>
        <div class="actbtn">
            <b-button variant="danger"  @click="deleteUSER(data.id)" class="mt-2 mr-2">Delete</b-button>
            <b-button variant="success" @click="updateUSER(data)"  class="mt-2 mr-2">Update</b-button>
        </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { mapActions } from 'vuex'
const key ='updatable'
export default {
    name:'UserDetail',
    props:['id'],
    data(){
        return{
            data:{
                id:'',
                name:'',
                username:'',
                email:'',
                address: {
                    city:'',
                    street:''
                }
            }
        }
    },
    created(){
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.id}`)
            .then(res => this.data = res.data)
    },
    methods:{
        ...mapActions(["deleteUser","updateUser"]),
        deleteUSER(id){
            if(id){
                this.deleteUser(id)
                setTimeout(() => {
                    this.$notification.open({
                        message: 'Action Notification',
                        description:
                        'Deleted successfully',
                        icon: <a-icon type="smile" style="color: #108ee9" />,
                    });
                }, 3000);
                this.$message.loading({ content: 'Deleting...', key });
                setTimeout(() => {
                    this.$message.success({ content: 'Deleted!', key, duration: 2 });
                }, 1000);
                this.$router.push({path:'/users'})
            }
        },
        updateUSER(data){
              if(data){
                this.updateUser(data)
                setTimeout(() => {
                    this.$notification.open({
                        message: 'Action Notification',
                        description:
                        'Updated successfully',
                        icon: <a-icon type="smile" style="color: #108ee9" />,
                    });
                }, 2000);
                this.$message.loading({ content: 'Updating...', key });
                setTimeout(() => {
                    this.$message.success({ content: 'Updated!', key, duration: 2 });
                }, 1000);
                this.$router.push({path:'/users'})
            }
        }
    }
}
</script>
<style>
    
</style>
