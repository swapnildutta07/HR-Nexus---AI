import dotenv from 'dotenv';
// Load environment variables at the very beginning of the process lifecycle
dotenv.config();

import app from './app.js';

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

const server = app.listen(PORT, () => {
  console.log(`[HR Nexus AI Backend] Server is running in ${NODE_ENV} mode on port ${PORT}`);
});

// Handle unhandled promise rejections globally
process.on('unhandledRejection', (err) => {
  console.error(`[Unhandled Rejection] Shutting down server due to: ${err.message}`);
  if (err.stack) {
    console.error(err.stack);
  }
  
  // Close the server and gracefully exit
  server.close(() => {
    process.exit(1);
  });
});
