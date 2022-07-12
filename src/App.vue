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
						<list :todos="todos" @delete-todo="deleteTodo" @done-todo="doneTodo"/>
						<small>Total Todo : {{ countTodo }}</small>
					</div>
			</div>
		</div>
	</div>
</template>
<script>
import List from "./components/List.vue";

export default{
	components:{
		List
	},
	data(){
		return{
			todo:"",
			todos:[],
		}
	},
	mounted(){
		this.todos = JSON.parse(localStorage.getItem("todos"));
	},
	computed:{
		countTodo(){
			return this.todos.length
		}
	},
	methods:{
		addTodo(){
			this.todos.unshift({
				activity: this.todo,
				isDone: false
			});
			this.todo = "";
			this.saveLocalStorage();
		},
		deleteTodo(indexTodo){
			this.todos = this.todos.filter((item, index) => {
				if(index != indexTodo)
					return item;
			});
			this.saveLocalStorage();
		},
		doneTodo(indexTodo){
			this.todos = this.todos.filter((item, index) => {
				if(index == indexTodo){
					item.isDone = true;
				}
				return item;
			});
			this.saveLocalStorage();
		},
		saveLocalStorage(){
			localStorage.setItem("todos", JSON.stringify(this.todos))
		}
	}
}
</script>
