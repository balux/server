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
				<tr v-for="client, i in clients">
					<td>{{client.name}}</td>
					<td>{{client.redirectUri}}</td>
					<td><code>{{client.clientId}}</code></td>
					<td><code v-if="client.secret === undefined">****</code><a class='icon-toggle has-tooltip' :title="t('oauth2', 'Show client secret')" v-on:click="toggleSecret(i)">SHOW SECRET</a></td>
					<td class="action-column"><span><a class="icon-delete has-tooltip" :title="t('oauth2', 'Delete')" v-on:click="deleteClient(client.id, i)">DELETE</a></span></td>
				</tr>
			</tbody>
		</table>

		<br/>
		<h3>{{ t('oauth2', 'Add client') }}</h3>
		<form @submit.prevent="addClient">
			<input type="text" id="name" name="name" :placeholder="t('oauth2', 'Name')" v-model="newClient.name">
			<input type="url" id="redirectUri" name="redirectUri" :placeholder="t('oauth2', 'Redirection URI')" v-model="newClient.redirctUri">
			<input type="submit" class="button" :value="t('oauth2', 'Add')">
		</form>
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
		name: 'App',
		data: function() {
			return {
				clients: [],
				newClient: {
					name: '',
					redirctUri: ''
				}
			};
		},
		mounted: function() {
			var requestToken = document.getElementsByTagName('head')[0].getAttribute('data-requesttoken');
			var tokenHeaders = { headers: { requesttoken: requestToken } };

			axios.get(OC.linkTo('oauth2', 'clients'), tokenHeaders)
				.then((response) => {
					this.clients = response.data;
				});
		},
		methods: {
			deleteClient(id, i) {
				var requestToken = document.getElementsByTagName('head')[0].getAttribute('data-requesttoken');
				var tokenHeaders = { headers: { requesttoken: requestToken } };

				axios.delete(OC.linkTo('oauth2', 'clients/' + id), tokenHeaders)
					.then((response) => {
						this.clients.splice(i, 1)
					});
			},
			addClient() {
				var requestToken = document.getElementsByTagName('head')[0].getAttribute('data-requesttoken');
				var tokenHeaders = { headers: { requesttoken: requestToken } };

				axios.post(
						OC.linkTo('oauth2', 'clients'),
						{
							name: this.newClient.name,
							redirectUri: this.newClient.redirctUri
						},
						tokenHeaders)
					.then((response) => {
						this.clients.push(response.data)

						this.newClient.name = '';
						this.newClient.redirctUri = '';
					});
			},
			toggleSecret(i) {
				console.log(this.clients[i].secret);
				if (this.clients[i].secret === undefined) {
					this.clients[i].secret = this.clients[i].clientSecret;
				} else {
					this.clients[i].secret = undefined;
				}
				console.log(this.clients[i].secret);
			}
		},
	}
</script>
