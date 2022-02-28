<template>
	<div>
		<Button @click="onClick" @focus="onClick" @mouseover="onClick" size="small">hello</Button>
    <Button>hello</Button>
    <Button theme="button">hello</Button>
    <Button theme="text">hello</Button>
    <Button theme="link">hello</Button>
	</div>
</template>
<script lang="ts">
import Button from "../libs/Button.vue";
import {ref} from "vue";
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
