<template>
  <div class="user-container"> 
    <a-list item-layout="horizontal" >
      <a-list-item v-for="user in allUsers" :key="user.id" >
        <a-list-item-meta
          :description="user.email"
        >
          <a slot="title" href="#">{{ user.username }} </a>
          <a-avatar
            slot="avatar"
            src="https://i.pinimg.com/originals/ee/0b/83/ee0b8322db7fb7939469a67e889318d4.png"
          />
          </a-list-item-meta>
          <a-button  @click="showModal"   type="secondary">
              <router-link :to="{name:'UserDetail', params:{id:user.id}}">Detail</router-link>
          </a-button>
      </a-list-item>
    </a-list>
  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name:'Users',
    data(){
        return{
            visible:true
        }
    },
    computed: mapGetters(["allUsers"]),
    created(){
        this.getUsers()
    },
    methods:{
        ...mapActions(["getUsers"]),
    }
}
</script>
<style >
</style>