<template>
  <div :class="['app', currentTheme]">
    <div class="container">
      <section>
        <h2>🌗 Theme (Local Storage)</h2>
        <p>
          Current Theme: <strong>{{ currentTheme }}</strong>
        </p>
        <button @click="toggleTheme">Toggle Theme</button>
      </section>

      <section>
        <h2>🔢 Counter (Local Storage)</h2>
        <p>
          Value: <strong>{{ counter.get()?.value }}</strong>
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
import { computed } from "vue";
import { useLocalStorage, useSessionStorage } from "@imtapan/re-storage";

// Persistent state
const theme = useLocalStorage("theme", "light");
const counter = useLocalStorage("counter", { value: 0 });
const sessionUser = useSessionStorage("user", { loggedIn: false });

const currentTheme = computed(() => theme.get());

function toggleTheme() {
  const next = theme.get() === "light" ? "dark" : "light";
  theme.set(next);
}
function increment() {
  const value = counter.get()?.value ?? 0;
  counter.set({ value: value + 1 });
}
function decrement() {
  const value = counter.get()?.value ?? 0;
  counter.set({ value: value - 1 });
}
function resetCounter() {
  counter.set({ value: 0 });
}
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
