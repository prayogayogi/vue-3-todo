<template>
  <ul class="list-group">
    <li class="list-group-item mt-3" v-for="(todo, index) in todos" :key="index">
      <div class="row">
        <div class="col">
          <span v-if="todo.isDone">
            <del>{{ todo.activity }}</del>
          </span>
          <span v-else>{{ todo.activity }}</span>
        </div>
        <div class="col-auto">
          <div class="row gx-2">
            <div class="col">
              <button @click="doneTodo(index)" class="btn btn-info">
                <i class="bi bi-check-circle"></i>
              </button>
            </div>
            <div class="col">
              <button @click="deleteTodo(index)" class="btn btn-danger">X</button>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
export default { 
  emits:["delete-todo","done-todo"],
  props:{
    todos:{
      type: Array,
      default: ["tidak ada todo"]
    }
  },
  methods:{
    deleteTodo(index){
      this.$emit("delete-todo", index)
    },
    doneTodo(index){
      this.$emit("done-todo", index)
    }
  }
}
</script>