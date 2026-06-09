// 完整进度管理系统 - 腾讯云 ADP 学习工坊

// ========================================
// 1. SafeStorage 安全存储封装
// ========================================
const SafeStorage = {
  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.warn('读取存储数据失败:', error);
      return defaultValue;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.warn('保存存储数据失败:', error);
      return false;
    }
  },
  remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.warn('删除存储数据失败:', error);
      return false;
    }
  }
};

// ========================================
// 2. 存储键名（项目前缀）
// ========================================
const STORAGE_KEYS = {
  MASTERED_ITEMS: 'tcadp_mastered',
  LEARNING_PROGRESS: 'tcadp_progress',
  QUIZ_RESULTS: 'tcadp_quiz_results',
  LAST_VISITED: 'tcadp_last_visited',
  SETTINGS: 'tcadp_settings'
};

// ========================================
// 3. 掌握状态管理
// ========================================
function loadMasteredItems() {
  return SafeStorage.get(STORAGE_KEYS.MASTERED_ITEMS, []);
}

function saveMastered(itemId, mastered) {
  const masteredItems = loadMasteredItems();
  const itemIdNum = parseInt(itemId);
  if (mastered) {
    if (!masteredItems.includes(itemIdNum)) masteredItems.push(itemIdNum);
  } else {
    const index = masteredItems.indexOf(itemIdNum);
    if (index > -1) masteredItems.splice(index, 1);
  }
  SafeStorage.set(STORAGE_KEYS.MASTERED_ITEMS, masteredItems);
  window.dispatchEvent(new CustomEvent('masteredChanged', {
    detail: { itemId: itemIdNum, isMastered: mastered }
  }));
}

function isMastered(itemId) {
  return loadMasteredItems().includes(parseInt(itemId));
}

function getMasteredCount() {
  return loadMasteredItems().length;
}

// ========================================
// 4. 学习进度管理
// ========================================
function loadProgress() {
  return SafeStorage.get(STORAGE_KEYS.LEARNING_PROGRESS, {
    currentItem: 1, visitedItems: [], totalTime: 0, lastStudyDate: null
  });
}

function saveProgress(progressData) {
  const currentProgress = loadProgress();
  SafeStorage.set(STORAGE_KEYS.LEARNING_PROGRESS, { ...currentProgress, ...progressData });
}

function markItemVisited(itemId) {
  const progress = loadProgress();
  const itemIdNum = parseInt(itemId);
  if (!progress.visitedItems.includes(itemIdNum)) progress.visitedItems.push(itemIdNum);
  progress.currentItem = Math.max(progress.currentItem, itemIdNum);
  progress.lastStudyDate = new Date().toISOString();
  saveProgress(progress);
}

function getVisitedCount() {
  return loadProgress().visitedItems.length;
}

// ========================================
// 5. Quiz 测试结果记录
// ========================================
function loadQuizResults() {
  return SafeStorage.get(STORAGE_KEYS.QUIZ_RESULTS, {});
}

function saveQuizResult(itemId, isCorrect, selectedOption, correctOption) {
  const results = loadQuizResults();
  const itemIdNum = parseInt(itemId);
  if (!results[itemIdNum]) results[itemIdNum] = [];
  results[itemIdNum].push({
    timestamp: new Date().toISOString(),
    isCorrect, selectedOption, correctOption
  });
  SafeStorage.set(STORAGE_KEYS.QUIZ_RESULTS, results);
}

function getQuizStats(itemId) {
  const results = loadQuizResults();
  if (itemId !== undefined && itemId !== null) {
    const itemResults = results[parseInt(itemId)] || [];
    const correct = itemResults.filter(r => r.isCorrect).length;
    const total = itemResults.length;
    return { correct, total, accuracy: total > 0 ? (correct / total) * 100 : 0 };
  }
  let totalCorrect = 0, totalAttempts = 0;
  Object.values(results).forEach(itemResults => {
    totalAttempts += itemResults.length;
    totalCorrect += itemResults.filter(r => r.isCorrect).length;
  });
  return { correct: totalCorrect, total: totalAttempts, accuracy: totalAttempts > 0 ? (totalCorrect / totalAttempts) * 100 : 0 };
}

// ========================================
// 6. 数据导出/导入/清除
// ========================================
function exportData() {
  return JSON.stringify({
    mastered: loadMasteredItems(),
    progress: loadProgress(),
    quizResults: loadQuizResults(),
    exportDate: new Date().toISOString(),
    version: '1.0'
  }, null, 2);
}

function importData(jsonData) {
  try {
    const data = JSON.parse(jsonData);
    if (data.mastered) SafeStorage.set(STORAGE_KEYS.MASTERED_ITEMS, data.mastered);
    if (data.progress) SafeStorage.set(STORAGE_KEYS.LEARNING_PROGRESS, data.progress);
    if (data.quizResults) SafeStorage.set(STORAGE_KEYS.QUIZ_RESULTS, data.quizResults);
    return true;
  } catch (error) {
    console.error('导入数据失败:', error);
    return false;
  }
}

function clearAllData() {
  Object.values(STORAGE_KEYS).forEach(key => SafeStorage.remove(key));
  window.location.reload();
}

// ========================================
// 7. 统计与学习建议
// ========================================
function getOverallStats() {
  const masteredCount = getMasteredCount();
  const visitedCount = getVisitedCount();
  const quizStats = getQuizStats();
  const progress = loadProgress();
  const totalItems = (typeof WordRoots !== 'undefined') ? WordRoots.length : 0;
  return {
    mastered: masteredCount, visited: visitedCount, totalItems,
    masteredPercentage: totalItems > 0 ? (masteredCount / totalItems) * 100 : 0,
    visitedPercentage: totalItems > 0 ? (visitedCount / totalItems) * 100 : 0,
    quizAccuracy: quizStats.accuracy, totalQuizAttempts: quizStats.total,
    lastStudyDate: progress.lastStudyDate
  };
}

function getStudyRecommendations() {
  const stats = getOverallStats();
  const recommendations = [];
  if (stats.masteredPercentage < 25) {
    recommendations.push({ type: 'learning', title: '建议使用学习模式', description: '从基础知识点入手，按顺序系统学习 ADP 的核心概念，建立完整知识框架。' });
  }
  if (stats.visitedPercentage > 50 && stats.masteredPercentage < 30) {
    recommendations.push({ type: 'review', title: '建议加强复习', description: '使用闪卡模式快速过一遍已学概念，巩固记忆，提升掌握率。' });
  }
  if (stats.quizAccuracy < 70 && stats.totalQuizAttempts > 5) {
    recommendations.push({ type: 'practice', title: '建议多做练习', description: '当前测试正确率偏低，可针对错过的知识点进入详情页重新练习。' });
  }
  if (stats.masteredPercentage > 80) {
    recommendations.push({ type: 'advanced', title: '考虑深入实践', description: '基础知识已掌握，建议开通 ADP 控制台，搭一个真实智能体应用！' });
  }
  return recommendations;
}

// ========================================
// 8. 兼容旧版 StorageManager API
// ========================================
const StorageManager = {
  getProgress() {
    const mastered = loadMasteredItems();
    const progress = loadProgress();
    return {
      masteredRoots: mastered,
      currentRootIndex: progress.currentItem - 1 >= 0 ? progress.currentItem - 1 : 0,
      lastStudyDate: progress.lastStudyDate
    };
  },
  markRootAsMastered(rootId) { saveMastered(rootId, true); return this.getProgress(); },
  unmarkRootAsMastered(rootId) { saveMastered(rootId, false); return this.getProgress(); },
  updateProgress(rootIndex) { saveProgress({ currentItem: rootIndex + 1 }); return this.getProgress(); },
  resetProgress() { Object.values(STORAGE_KEYS).forEach(key => SafeStorage.remove(key)); return true; }
};

// ========================================
// 9. 挂载到 window
// ========================================
if (typeof window !== 'undefined') {
  window.StorageManager = StorageManager;
  window.loadMasteredItems = loadMasteredItems;
  window.saveMastered = saveMastered;
  window.isMastered = isMastered;
  window.getMasteredCount = getMasteredCount;
  window.loadProgress = loadProgress;
  window.saveProgress = saveProgress;
  window.markItemVisited = markItemVisited;
  window.getVisitedCount = getVisitedCount;
  window.loadQuizResults = loadQuizResults;
  window.saveQuizResult = saveQuizResult;
  window.getQuizStats = getQuizStats;
  window.exportData = exportData;
  window.importData = importData;
  window.clearAllData = clearAllData;
  window.getOverallStats = getOverallStats;
  window.getStudyRecommendations = getStudyRecommendations;
}
