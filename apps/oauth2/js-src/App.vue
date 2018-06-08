<template>
	<div id="oauth22" class="section">
		<h2>{{ t('oauth2', 'OAuth 2.0 clients') }}</h2>
		<p class="settings-hint">{{ t('oauth2', 'OAuth 2.0 allows external services to request access to {instanceName}.', { instanceName: oc_defaults.name}) }}</p>
		<table class="grid">
			<thead>
				<tr>
					<th id="headerName" scope="col">{{ t('oauth2', 'Name') }}</th>
					<th id="headerRedirectUri" scope="col">{{ t('oauth2', 'Redirection URI') }}</th>
					<th id="headerClientIdentifier" scope="col">{{ t('oauth2', 'Client Identifier') }}</th>
					<th id="headerSecret" scope="col">{{ t('oauth2', 'Secret') }}</th>
					<th id="headerRemove">&nbsp;</th>
				</tr>
			</thead>
			<tbody>

			</tbody>
		</table>

		<br/>
		<h3>{{ t('oauth2', 'Add client') }}</h3>
		<form action="" method="POST">
			<input type="text" id="name" name="name" :placeholder="t('oauth2', 'Name')">
			<input type="url" id="redirectUri" name="redirectUri" :placeholder="t('oauth2', 'Redirection URI')">
			<input type="submit" class="button" :value="t('oauth2', 'Add')">
		</form>
	</div>
</template>

<script>
	import oauth2Row from './components/oauth2Row';

	export default {
		name: 'App',
		components: {
			oauth2Row,
		},
		data: function() {
			return {
				message: 'HELLO WORLD!'
			};
		},
	}
</script>
