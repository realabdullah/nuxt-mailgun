<script lang="ts" setup>
const form = reactive({
  name: "",
  email: "",
  password: "",
});

const handleSubmission = async () => {
  await useFetch("/api/email", {
    method: "POST",
    body: {
      name: form.name,
      email: form.email,
    },
  });
  console.log(form);
  alert("Sign up successful!");
};
</script>

<template>
  <form @submit.prevent="handleSubmission">
    <label for="name">
      Name
      <input v-model="form.name" id="name" type="text" placeholder="Enter your name" required />
    </label>
    <label for="email">
      Email
      <input v-model="form.email" id="email" type="email" placeholder="Enter your email" required />
    </label>
    <label for="password">
      Password
      <input v-model="form.password" id="password" type="password" placeholder="Enter your password" required />
    </label>
    <button type="submit">Sign up</button>
  </form>
</template>

<style scoped>
form {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  margin-top: 30px;
}

form label input {
  box-sizing: border-box;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 15px;
  padding: 15px;
  border: 1px solid #333333;
  border-radius: 10px;
}

form button {
  width: 100%;
  padding: 15px;
  background: #333333;
  color: #ffffff;
  border: none;
}
</style>
