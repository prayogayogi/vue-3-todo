<template>
	<div class="containter" style="margin-top: 20px;">
		<div class="card">
			<div class="card-body">
				<h5 class="card-title">Simple Todo App</h5>
					<div class="row">
						<div class="col-10">
							<input type="text" v-model="todo" @keyup.enter="addTodo" class="form-control">
						</div>
						<div class="col-2">
							<button class="btn btn-success" @click="addTodo">ADD</button>
						</div>
					</div>
					<div> 
						<list :todos="list" @delete-todo="deleteTodo" @done-todo="doneTodo"/>
						<small>Total Todo : {{ countTodo }}</small>
					</div>
			</div>
		</div>
	</div>
</template>
<script>
import { ref, reactive, toRefs, onMounted, computed } from "vue";
import List from "./components/List.vue";

export default{
	components:{
		List
	},
	setup(){
		const todo = ref("");
		const todos = reactive({
			list: []
		});

		onMounted(() => {
			const items = localStorage.getItem("todos");
      todos.list = items ? JSON.parse(items) : [];
		});

		const countTodo = computed(() => {
			return todos.list.length
		});

		const addTodo = (() => {
			todos.list.unshift({
				activity: todo.value,
				isDone: false
			});
			todo.value = "";
			saveLocalStorage();
		})

		const deleteTodo = ((indexTodo) =>{
			todos.list = todos.list.filter((item, index) => {
				if(index != indexTodo)
					return item;
			});
			saveLocalStorage();
		})

		const doneTodo = ((indexTodo) => {
			todos.list = todos.list.filter((item, index) => {
				if(index == indexTodo){
					item.isDone = true;
				}
				return item;
			});
			saveLocalStorage();
		})

		const saveLocalStorage = (() => {
			localStorage.setItem("todos", JSON.stringify(todos.list))
		})

		return {
			todo, ...toRefs(todos), countTodo, addTodo, deleteTodo, doneTodo
		}
		
	}
}
</script>
