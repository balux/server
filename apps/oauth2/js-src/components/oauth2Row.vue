<template>
	<tr>
		<td>{{name}}</td>
		<td>{{redirectUri}}</td>
		<td>{{clientId}}</td>
		<td>{{clientSecret}}</td>
		<td>DELETE</td>
	</tr>
</template>

<script>
	export default {
		name: 'oauth2Row',
		data: function() {
			return {
				id: -1,
				name: '',
				redirectUri: '',
				clientId: '',
				clientSecret: '',
			};
		},
	}
</script>
