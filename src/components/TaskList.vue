<template>
  <v-list
    class="taskList"
  >
    <!-- <v-list-item-group
      multiple
      active-class=""
    > -->
    
      <template 
        v-for="(item, index) in filtred"
      >
      
        <v-list-item 
          class="px-0"
          :key="index"
        >
        <template v-slot:default="{ active }">
          <v-list-item-action class="mx-3 my-2">
            <v-checkbox 
              :input-value="active" 
              v-model="item.select"
              color="#af2f2f59"
            ></v-checkbox>
          </v-list-item-action>
          <v-hover
            v-slot="{ hover }"
            
          >
            <div class="hover-wrapper">
              <v-list-item-content
               class="py-0"
                @dblclick="edit = item.id"
              >
                <v-list-item-title 
                  v-if="edit != item.id"
                  :class="{'text-decoration-line-through': item.select}"
                >
                  {{item.value}}
                </v-list-item-title>
                
                <v-text-field
                  v-else
                  outlined 
                  color="black"
                  dense
                  height= "48"
                  v-model="item.value"
                  class="input"
                  autofocus
                  hide-details 
                  @keydown.enter="edit = ''"
                  @blur="edit = ''"
                ></v-text-field>
                
              </v-list-item-content>
              <v-list-item-action
                  v-show="hover && edit != item.id" class="mx-3">
                <v-btn
                  icon
                  color="red"
                  x-small
                  @click="() => deleteItem(item.id)"
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-list-item-action>
            </div>
          </v-hover>
        </template>
      </v-list-item>
      <v-divider
        :key="index + 'div'"></v-divider>
      </template>
      
    <!-- </v-list-item-group> -->
    
  </v-list>
</template>

<script>
export default {
  name: 'task-list',
  data: () => ({
    edit: ''
    // settings: [],
  }),
  props: {
    // todos: Array
  },
  created() {
    this.allTasks = JSON.parse(localStorage.getItem('allTasks')) || []
  },
  computed: {
    filtred() {
      if (this.mode == 'ALL') {
        return this.allTasks
      }
      return this.allTasks.filter(item => {
        return item.select ? this.mode == 'COMPLITED' : this.mode == 'ACTIVE' 
      })
    },
    allTasks: {
      get() {
        return this.$store.getters.get_allTasks
      },
      set(val) {
        this.$store.commit('set_allTasks', val )
      },
    },
    mode() {
      return this.$store.getters.get_mode
    }
  },
  methods: {
    deleteItem(id) {
      this.allTasks = this.allTasks.filter(item => item.id !== id)
    }
  }
}
</script>

<style lang="scss" scoped>
.taskList {
    width: 100%;
    padding: 0;

  .hover-wrapper{
    display: flex;
    width: -webkit-fill-available;
    
    .v-list-item__title {
      overflow: visible;
      white-space: normal;
      padding-left: 12px;
    }
  }
}

</style>
