<template>
	<h3>tab demo</h3>
	<Tabs v-model:selected="title">
		<Tab title="nav1">content 1</Tab>
		<Tab title="nav2222222">content 222222</Tab>
	</Tabs>
</template>

<script lang="ts">
import Tab from "../libs/Tab.vue";
import Tabs from "../libs/Tabs.vue";
import {ref} from "vue";
export default {
	components: {
		Tabs,
		Tab,
	},
	setup() {
    const title = ref('nav1')
    return {
      title
    }
  },
};
</script>

<style></style>
