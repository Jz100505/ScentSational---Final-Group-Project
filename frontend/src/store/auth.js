import { reactive } from 'vue';

// Create a reactive object to store authentication state.
export const auth = reactive({
  isAuthenticated: false,
  user: null,

  /**
   * Logs the user in by updating the state and storing user data in sessionStorage.
   * @param {object} userData - The user data received from the server.
   */
  login(userData) {
    this.isAuthenticated = true;
    this.user = userData;

    sessionStorage.setItem('user', JSON.stringify(userData));
  },

  /**
   * Logs the user out by clearing the state and removing user data from sessionStorage.
   */
  logout() {
    this.isAuthenticated = false;
    this.user = null;
    sessionStorage.removeItem('user');
  },

  initialize() {
    const user = sessionStorage.getItem('user');
    if (user) {
      this.login(JSON.parse(user));
    }
  }
});
