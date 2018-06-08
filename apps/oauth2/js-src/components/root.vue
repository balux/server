<template>
	<div id="oauth22" class="section">
		{{ message }}
	</div>
</template>

<script>
	import vSelect from 'vue-select';

	export default {
		name: 'root',
		el: '#oauth22',
		components: {
			vSelect,
		},
		data: {
			message: 'HELLO WORLD!'
		},
	}
</script>
