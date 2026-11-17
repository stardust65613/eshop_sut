import 'dotenv/config';
import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['html', {
      outputFolder: 'reports/html',
      open: 'never'
    }],
    ['./reporters/student-reporter.ts']
  ],

  use: {
    baseURL: process.env.BASE_URL,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure'
  },

  projects: [
     {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        channel: 'chrome'
      }
    },
    {
      name: 'firefox',
      use: {
        browserName: 'firefox'
      }
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' }
    }
  ]
});