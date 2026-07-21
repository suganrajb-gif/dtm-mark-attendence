// @ts-check
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 180_000, // 3 minutes per test

  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,

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
