const mobile = require('./lighthouse-mobile-prod.json');

console.log('=== 生产版本移动端性能分析 ===');
console.log('Performance Score:', Math.round(mobile.categories.performance.score * 100));

console.log('\n核心Web指标:');
const mobileMetrics = mobile.audits.metrics.details.items[0];
console.log('- FCP (首次内容绘制):', mobileMetrics.firstContentfulPaint, 'ms');
console.log('- LCP (最大内容绘制):', mobileMetrics.largestContentfulPaint, 'ms');
console.log('- TBT (总阻塞时间):', mobileMetrics.totalBlockingTime, 'ms');
console.log('- CLS (累积布局偏移):', mobileMetrics.cumulativeLayoutShift);
console.log('- SI (速度指数):', mobileMetrics.speedIndex, 'ms');

console.log('\n仍可优化的项目:');
const audits = mobile.audits;

// 查找所有opportunity类型的建议
const opportunities = [];
for (const key in audits) {
  const audit = audits[key];
  if (audit.details && audit.details.type === 'opportunity' && audit.score !== 1 && audit.score !== null) {
    opportunities.push({
      id: key,
      title: audit.title,
      savings: audit.details.overallSavingsMs || 0,
      score: audit.score
    });
  }
}

// 按节省时间排序
opportunities.sort((a, b) => b.savings - a.savings);

if (opportunities.length > 0) {
  opportunities.forEach((opp, i) => {
    console.log(`${i + 1}. ${opp.title} - 可节省 ${Math.round(opp.savings)}ms`);
  });
} else {
  console.log('没有重大优化机会！');
}

// 未通过的审计项
console.log('\n未完全通过的审计项:');
const failed = [];
for (const key in audits) {
  const audit = audits[key];
  if (audit.score !== null && audit.score < 1 && audit.score >= 0 && !audit.scoreDisplayMode) {
    failed.push({
      title: audit.title,
      score: Math.round(audit.score * 100)
    });
  }
}

if (failed.length > 0) {
  failed.slice(0, 10).forEach((item, i) => {
    console.log(`${i + 1}. ${item.title} (${item.score}/100)`);
  });
} else {
  console.log('所有审计项都已通过！');
}
