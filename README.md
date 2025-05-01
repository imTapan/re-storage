## 🗃️ re-storage

**A lightweight universal state persistence utility for JavaScript, Vue, React, Nuxt, Next, and more.**  
Access browser `localStorage` and `sessionStorage` using simple, reactive-like functions.

---

### 📦 Installation

```bash
npm i re-storage
```

Or using Yarn:

```bash
yarn add re-storage
```

---

### 🚀 Usage

```ts
import { useLocalStorage, useSessionStorage } from "re-storage";

const local = useLocalStorage("myKey", "defaultValue");
local.set("newValue");
console.log(local.get()); // 'newValue'

const session = useSessionStorage("sessionKey", { loggedIn: false });
session.set({ loggedIn: true });
console.log(session.get()); // { loggedIn: true }
```

---

### 📘 API

#### `useLocalStorage(key: string, defaultValue?: any)`

#### `useSessionStorage(key: string, defaultValue?: any)`

Each returns an object with:

| Method       | Description                        |
| ------------ | ---------------------------------- |
| `get()`      | Get the current value from storage |
| `set(value)` | Set a new value to storage         |
| `remove()`   | Remove the item from storage       |
| `key`        | The original key you passed        |

> Note: Automatically serializes/deserializes objects and arrays.

---

### 🔧 Works in

- ✅ Vanilla JS / TS
- ✅ Vue 3 / Nuxt 3
- ✅ React / Next.js
- ✅ Vite / Webpack / Node (in browser context)

---

### 💡 Example in Vue 3

```ts
<script setup>
import { useLocalStorage } from 're-storage';

const theme = useLocalStorage('theme', 'light');

function toggleTheme() {
  theme.set(theme.get() === 'light' ? 'dark' : 'light');
}
</script>
```

---

### 📄 License

MIT © [imTapan](https://github.com/imTapan)
