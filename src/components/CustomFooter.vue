<template>
  <div 
    class="custom-footer white"  
    v-if="allTasks.length"
  >
  
    <div class="item-left">
      {{itemLeft}} 
    </div>
    <div class="btn-footer mx-auto">
      <v-btn-toggle
          v-model="mode"
          mandatory
          group
      >
        <v-btn 
          class="text-capitalize"
          value="ALL"
          :ripple="false"
          small
        >
          All
        </v-btn>

        <v-btn 
          class="text-capitalize"
          value="ACTIVE"
          :ripple="false"
          small
        >
          Active
        </v-btn>

        <v-btn 
          class="text-capitalize"
          value="COMPLITED"
          :ripple="false"
          small
        >
          Complited
        </v-btn>
      </v-btn-toggle>
    </div>
    <div 
      class="clear-completed"
       
    >
      <v-btn 
        text 
        x-small
        @click="clearTasks"
        :style="`visibility:${selected ? 'visible' : 'hidden'}`"
        
        
      >
        clear completed
      </v-btn> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'custom-footer',
  data: () => ({
    
  }),
  computed: {
    selected() {
      return  this.allTasks.filter(item => item.select).length 
    },
    allTasks: {
      get() {
        return this.$store.getters.get_allTasks
      },
      set(val) {
        this.$store.commit('set_allTasks', val)
      },
    },
    itemLeft() {
      let count = this.allTasks.filter(item => !item.select).length 
      if (count == 0) {
        return `${count} item left`
      } else {
        return  `${count} items left`
      } 
    },
    mode: {
      get() {
        return this.$store.getters.get_mode
      },
      set(val) {
        this.$store.commit('set_mode', val)
      }
    }
  },
  methods: {
    clearTasks() {
      this.allTasks = this.allTasks.filter(item => !item.select)
    },

  },
}
</script>

<style lang="scss" scoped>
.custom-footer{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px;
  box-shadow: 0 1px 1px rgb(0 0 0 / 20%),
              0 8px 0 -3px #f6f6f6,
              0 9px 1px -3px rgb(0 0 0 / 20%),
              0 16px 0 -6px #f6f6f6,
              0 17px 2px -6px rgb(0 0 0 / 20%);
  margin-bottom: 50px;
  
  .item-left {
    min-width: 20%;    
  }

  .btn-footer{
    display: flex;
    align-items: center;
    

    .custom-button:not(:first-child) {
      margin-left:5px;
    }
  }

  
  
}
</style>