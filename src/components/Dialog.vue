<template>
	<div>Dialog 示例</div>
	<h1>示例1</h1>
	<Button @click="toggle">toggle</Button>
	<Dialog v-model:visible="x" :clickOverlayClose="true" :ok="f1" :cancel="f2">
		<template v-slot:content>
			<p>2131</p>
			<p>2312</p>
		</template>
		<template v-slot:title>
			<strong>title</strong>
		</template>
	</Dialog>
	<h2>示例2 一个按钮展示组件</h2>
	<button @click="showDialog">展示</button>
</template>

<script lang="ts">
import Button from "../libs/Button.vue";
import Dialog from "../libs/Dialog.vue";
import {ref, h} from "vue";
import {openDialog} from "../libs/openDialog";
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
			console.log("ok");
			return true;
		};

		const f2 = () => {
			console.log("cancel");
		};

		const showDialog = () => {
			openDialog({
				title: h("strong", {}, "title123"),
				content: "hello world",
				ok() {
					console.log("ok");
				},
				cancel() {
					console.log("cancel");
				},
			});
		};

		return {
			x,
			toggle,
			f1,
			f2,
			showDialog,
		};
	},
};
</script>
