<template>
	<div>
		<Switch v-model:checked="checked"></Switch>
	</div>
</template>
<script lang="ts">
import Switch from "../libs/Switch.vue";
import {ref} from "vue";
export default {
	components: {Switch},
	setup() {
		const checked = ref(false);
    return {
      checked
    }
	},
};
</script>
