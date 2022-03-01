<template>
	<h1>示例1</h1>
	<div>
    <Button @click="onClick">hello1</Button>
		<Button theme="button">hello</Button>
		<Button theme="text">hello</Button>
		<Button theme="link">hello</Button>
	</div>
	<h1>示例2</h1>
	<div>
		<Button size="big">hello</Button>
		<Button>hello</Button>
		<Button size="small">hello</Button>
	</div>
	<h1>示例3</h1>
	<div>
		<Button level="main">主要按钮</Button>
		<Button>普通按钮</Button>
		<Button level="danger">危险按钮</Button>
	</div>
	<br />
	<div>
		<Button theme="link" level="main">主要链接按钮</Button>
		<Button theme="link">普通链接按钮</Button>
		<Button theme="link" level="danger">危险链接按钮</Button>
	</div>
	<br />
	<div>
		<Button theme="text" level="main">主要文字按钮</Button>
		<Button theme="text">普通文字按钮</Button>
		<Button theme="text" level="danger">危险文字按钮</Button>
	</div>
	<h1>示例4</h1>
	<div>
		<Button disabled>禁用按钮</Button>
		<Button theme="link" disabled>禁用链接按钮</Button>
		<Button theme="text" disabled>禁用按钮</Button>
	</div>
	<h1>示例5</h1>
	<div>
		<Button loading>加载中</Button>
    <Button>加载完毕</Button>
	</div>
</template>

<script lang="ts">
import Button from "../libs/Button.vue";
export default {
	components: {Button},
	setup() {
		const onClick = () => {
			console.log("hi");
		};

		return {onClick};
	},
};
</script>
