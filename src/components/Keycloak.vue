<template>
  <h1 id="app-details"> Welcome to my app</h1>
  <a id="login" href="http://localhost:8080/realms/myrealm/protocol/openid-connect/auth?client_id=myclient&redirect_uri=http%3A%2F%2Flocalhost%3A8081%2F%23url%3Dhttp%3A%2F%2Flocalhost%3A8080%26realm%3Dmyrealm%26client%3Dmyclient&state=95fc5616-4e00-4914-8225-8dd2dd7d8a1a&response_mode=fragment&response_type=code&scope=openid&nonce=afca4942-441b-48c6-9145-5f4a146946cd"> sign in </a>
</template>

<script>
export default {
  name: 'KeyCloak',
}
</script>