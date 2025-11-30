const mobile = require('./lighthouse-mobile.json');
const desktop = require('./lighthouse-desktop.json');

console.log('=== 移动端性能分析 ===');
console.log('Performance Score:', Math.round(mobile.categories.performance.score * 100));

console.log('\n核心Web指标:');
const mobileMetrics = mobile.audits.metrics.details.items[0];
console.log('- FCP (首次内容绘制):', mobileMetrics.firstContentfulPaint, 'ms');
console.log('- LCP (最大内容绘制):', mobileMetrics.largestContentfulPaint, 'ms');
console.log('- TBT (总阻塞时间):', mobileMetrics.totalBlockingTime, 'ms');
console.log('- CLS (累积布局偏移):', mobileMetrics.cumulativeLayoutShift);
console.log('- SI (速度指数):', mobileMetrics.speedIndex, 'ms');

console.log('\n主要优化建议:');
const audits = mobile.audits;

// 查找所有opportunity类型的建议
const opportunities = [];
for (const key in audits) {
  const audit = audits[key];
  if (audit.details && audit.details.type === 'opportunity' && audit.score !== 1) {
    opportunities.push({
      title: audit.title,
      description: audit.description,
      savings: audit.details.overallSavingsMs || 0
    });
  }
}

// 按节省时间排序
opportunities.sort((a, b) => b.savings - a.savings);

// 显示前10个
opportunities.slice(0, 10).forEach((opp, i) => {
  console.log(`${i + 1}. ${opp.title} - 可节省 ${Math.round(opp.savings)}ms`);
});

// 诊断性问题
console.log('\n诊断性问题:');
const diagnostics = [];
for (const key in audits) {
  const audit = audits[key];
  if (audit.score !== null && audit.score < 1 && audit.details && audit.details.type !== 'opportunity') {
    diagnostics.push({
      title: audit.title,
      score: audit.score
    });
  }
}

diagnostics.slice(0, 10).forEach((diag, i) => {
  console.log(`${i + 1}. ${diag.title}`);
});
