<template>
	<div id="app">
		{{ data }}
		<button @click="getdata">click to change data</button>
		<nav>
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</nav>
		<!-- <router-view/> -->
	</div>
</template>
<script>
import axios from "@/axios/index.js";
export default {
	name: "App",
	methods: {
		getdata() {
			axios.get("/login").then((res) => {
				console.log(res.data);
			});
		},
	},
};
</script>
<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
