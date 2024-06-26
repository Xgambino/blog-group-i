
// vite.config.js
import reactRefresh from '@vitejs/plugin-react-refresh';

export default {
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      // If you have any custom aliases, you can define them here
      // For example:
      // 'my-lib': 'path/to/my-lib',
    },
  },
};
