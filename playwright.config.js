// @ts-check
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 600_000, // 10 minutes per test to handle many red blocks

  fullyParallel: true, // Allow parallel execution
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 4, // Explicitly set workers > 1 to force parallel execution even in headed mode

  reporter: [
    ['html'],
    ['list'],
    ['allure-playwright'],
  ],

  use: {
    headless: false,

    // TRUE MAXIMIZE
    viewport: null,
    launchOptions: {
      args: ['--start-maximized'],
    },

    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
      },
    },
  ],
});
