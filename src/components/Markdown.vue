<template>
	<article class="markdown-body" v-html="content"></article>
</template>

<script lang="ts">
import {ref} from "vue";
export default {
	props: {
		path: {
			type: String,
			required: true,
		},
	},
	setup(props) {
		const content = ref<string>(null);
    // 异步引入
		import(props.path).then((result) => {
      console.log(result)
			content.value = result.default;
		});
		return {
			content,
		};
	},
};
</script>
