import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
  },
  define: {
    'process.env': {},
    '__firebase_config': JSON.stringify({
      apiKey: "demo-key",
      authDomain: "demo.firebaseapp.com",
      projectId: "demo",
      storageBucket: "demo.appspot.com",
      messagingSenderId: "123456789",
      appId: "1:123456789:web:abcdef"
    }),
    '__app_id': JSON.stringify('crystal-link-game'),
    '__initial_auth_token': JSON.stringify(null),
    'global': {}
  },
  optimizeDeps: {
    include: ['firebase/app', 'firebase/auth', 'firebase/firestore', 'firebase/analytics']
  }
})