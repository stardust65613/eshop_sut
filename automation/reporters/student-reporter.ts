import 'dotenv/config';
import fs from 'fs';
import path from 'path';

import type {
  FullConfig,
  FullResult,
  Reporter
} from '@playwright/test/reporter';

class MyReporter implements Reporter {
  private startTime = '';

  onBegin(config: FullConfig) {
    this.startTime = new Date().toLocaleString('vi-VN');
  }

  onEnd(result: FullResult) {
    const reportPath = path.resolve('reports/html/index.html');

    if (!fs.existsSync(reportPath)) {
      console.error('Không tìm thấy Playwright HTML report.');
      return;
    }

    const escapeHtml = (value: string) =>
      value.replace(/[&<>"']/g, char => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      })[char]!);

    const banner = `
      <div style="
        padding: 12px 20px;
        background: #1e293b;
        color: white;
        font-family: Arial, sans-serif;
        font-size: 13px;
        display: flex;
        gap: 28px;
        position: relative;
        z-index: 9999;
      ">
        <span><b>Run by:</b> ${escapeHtml(process.env.STUDENT_ID ?? 'Unknown')}</span>
        <span><b>Timestamp:</b> ${escapeHtml(this.startTime)}</span>
        <span><b>Result:</b> ${escapeHtml(result.status)}</span>
      </div>
    `;

    let html = fs.readFileSync(reportPath, 'utf-8');

    html = html.replace(/<body[^>]*>/i, match => match + banner);

    fs.writeFileSync(reportPath, html, 'utf-8');
  }
}

export default MyReporter;
