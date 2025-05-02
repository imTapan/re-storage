<template>
  <div :class="['app', theme.get()]">
    <div class="container">
      <section>
        <h2>🌗 Theme (Local Storage)</h2>
        <p>
          Current Theme: <strong>{{ theme.get() }}</strong>
        </p>
        <button @click="toggleTheme">Toggle Theme</button>
      </section>

      <section>
        <h2>🔢 Counter (Local Storage)</h2>
        <p>
          Value: <strong>{{ counter?.get()?.value }}</strong>
        </p>
        <div class="button-group">
          <button @click="increment">+</button>
          <button @click="decrement">-</button>
          <button @click="resetCounter">Reset</button>
        </div>
      </section>

      <section>
        <h2>🔐 Session User</h2>
        <p>
          Status:
          <strong>{{
            sessionUser.get()?.loggedIn ? "Logged In" : "Logged Out"
          }}</strong>
        </p>
        <div class="button-group">
          <button @click="login">Login</button>
          <button @click="logout">Logout</button>
          <button @click="removeSession">Clear Session</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useLocalStorage, useSessionStorage } from "@imtapan/re-storage";

// LocalStorage: Theme and Counter
const theme = useLocalStorage("theme", "light");
const counter = useLocalStorage("counter", { value: 0 });

// SessionStorage: User Session
const sessionUser = useSessionStorage("user", { loggedIn: false });

// Theme Toggle
function toggleTheme() {
  theme.set(theme.get() === "light" ? "dark" : "light");
}

// Counter Handlers
function increment() {
  counter.set({ value: counter.get()?.value + 1 });
}
function decrement() {
  counter.set({ value: counter.get()?.value - 1 });
}
function resetCounter() {
  counter.set({ value: 0 });
}

// Session Handlers
function login() {
  sessionUser.set({ loggedIn: true });
}
function logout() {
  sessionUser.set({ loggedIn: false });
}
function removeSession() {
  sessionUser.remove();
}
</script>

<style scoped>
.app {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s, color 0.3s;
}
.app.light {
  background-color: #f8f8f8;
  color: #111;
}
.app.dark {
  background-color: #111;
  color: #f8f8f8;
}
.container {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  width: 320px;
}
.dark .container {
  background-color: #222;
}
h1 {
  text-align: center;
  margin-bottom: 1.5rem;
}
section {
  margin-bottom: 2rem;
}
.button-group {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
}
button:hover {
  opacity: 0.9;
}
</style>
