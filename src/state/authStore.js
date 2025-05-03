import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false,
    username: null,
    email: null
  }),
  actions: {
    // Session ellenőrzése
    async checkAuthStatus() {
      try {
        const response = await fetch('/api/check_session.php', { 
          credentials: 'include' 
        });

        // HTTP státusz ellenőrzése
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        
        // Adatok ellenőrzése
        if (data.authenticated) {
          this.isLoggedIn = true;
          this.username = data.username || null;
          this.email = data.email || null;
        } else {
          this.resetState();
        }

      } catch (error) {
        console.error('Session check failed:', error);
        this.resetState(); // Reseteljük az állapotot hiba esetén
      }
    },

    // Bejelentkezés
    async login(email, password) { 
      try {
        const response = await fetch('/auth/login.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ identifier: email, password }),
          credentials: 'include' // Fontos a session kezeléshez
        });

        // HTTP státusz ellenőrzése
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Login failed');
        }

        const data = await response.json();
        
        // Sikeres bejelentkezés
        if (data.success) {
          this.isLoggedIn = true;
          this.username = data.username;
          this.email = data.email;
        }
        
        return data;

      } catch (error) {
        console.error('Login error:', error.message);
        return { 
          success: false, 
          message: error.message || 'Hálózati hiba!' 
        };
      }
    },

    // Kijelentkezés
    async logout() {
      try {
        const response = await fetch('/auth/logout.php', { 
          method: 'POST',
          credentials: 'include' 
        });

        // Sikerült a kijelentkezés?
        if (!response.ok) {
          throw new Error('Logout failed');
        }

        this.resetState();

      } catch (error) {
        console.error('Logout error:', error);
        this.resetState();
      }
    },

    // Állapot resetelése
    resetState() {
      this.isLoggedIn = false;
      this.username = null;
      this.email = null;
    }
  }
});