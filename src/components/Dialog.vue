<template>
	<div>Dialog 示例</div>
	<h1>示例1</h1>
	<Button @click="toggle">toggle</Button>
	<Dialog v-model:visible="x" :clickOverlayClose="true" :ok="f1" :cancel="f2"></Dialog>
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
			console.log(x);
		};

		// 支持传入回调
		const f1 = () => {
      console.log('ok')
			return true;
		};

		const f2 = () => {
      console.log('cancel')
		};

		return {
			x,
			toggle,
			f1,
			f2,
		};
	},
};
</script>
