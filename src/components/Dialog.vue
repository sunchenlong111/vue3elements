<template>
	<div>Dialog 示例</div>
	<h1>示例1</h1>
	<Button @click="toggle">toggle</Button>
	<Dialog v-model:visible="x"></Dialog>
</template>

<script lang="ts">
import Button from "../libs/Button.vue";
import Dialog from "../libs/Dialog.vue";
import {ref} from "vue";
export default {
	components: {
		Dialog,
		Button,
	},
	setup() {
		const x = ref(false);
		const toggle = () => {  
			x.value = !x.value;
      console.log(x)
		};
		return {
			x,
			toggle,
		};
	},
};
</script>
