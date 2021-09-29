<template>
  <div class="addTodos">
    <v-text-field
      v-model="newTask"
      class="input"
      placeholder="What needs to be done?"
      solo
      hide-details
      @keydown.enter="keydown"
    >
      <template #prepend-inner>
        <v-icon 
          v-if="allTasks.length"
          @click="selectAll"
        >
          mdi-chevron-down
        </v-icon>
        <div 
          v-else
          class="pl-6"
        >
        </div>
      </template>
    </v-text-field>
  </div>
</template>

<script>
export default {
  name: 'custom-input',
  data: () => ({
    newTask: '',
  }),
  props: {
  },
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
    }
  },
  methods: {
    keydown() {
      this.$store.commit('push_to_allTasks', this.newTask)
      this.newTask = ''
    },
    selectAll() {
      let condition = !this.selected || this.selected < this.allTasks.length
      this.allTasks.forEach(item => item.select = condition)
    }
  }
}
</script>

<style lang="scss" >
.addTodos {
  height: 50px;
  display: flex;
  align-items:stretch;
  .input {
    .v-icon.notranslate.mdi.mdi-chevron-down.theme--light {
      color: #000;
    }
  }
  .v-input__slot {
    margin: 0;
  }
}  
</style>