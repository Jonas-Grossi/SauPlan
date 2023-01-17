<template>
  <div class="auth-content">
    <div class="auth-modal">
      <img src="" alt="Logo" />
      <hr />

      <div class="auth-title">{{ showSignup ? "Cadastro" : "Login" }}</div>
      <input
        v-if="showSignup"
        v-model="user.name"
        type="text"
        placeholder="Nome"
      />
      <input
        v-model="user.password"
        name="password"
        type="password"
        placeholder="Senha"
      />
      <input
        v-if="showSignup"
        v-model="user.confirmPassword"
        type="password"
        placeholder="Confirme a Senha"
      />

      <button v-if="showSignup" @click="signup">Registrar</button>
      <button v-else @click="signin">Entrar</button>

      <a href @click.prevent="showSignup = !showSignup">
        <span v-if="showSignup">Já tem cadastro? Acesse o Login!</span>
        <span v-else>Não tem cadastro? Registre-se aqui!</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthLogin",
};
</script>

<style>
</style>