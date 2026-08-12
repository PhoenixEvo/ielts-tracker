/**
 * SuperMemo 2 (SM-2) Spaced Repetition Algorithm Helper
 */

/**
 * Calculates next SRS state based on recall rating
 * @param {Object} item Current item state ({ srsStage, intervalDays, easeFactor, reviewsCount })
 * @param {'again' | 'hard' | 'good' | 'easy'} rating User rating
 * @returns {Object} Updated item state
 */
export function calculateNextSRS(item, rating) {
  const stage = item.srsStage || 0;
  let interval = item.intervalDays || 1;
  let easeFactor = item.easeFactor || 2.5;
  let count = (item.reviewsCount || 0) + 1;

  let quality = 4;
  if (rating === 'again') quality = 1;
  else if (rating === 'hard') quality = 3;
  else if (rating === 'good') quality = 4;
  else if (rating === 'easy') quality = 5;

  // Adjust Ease Factor (EF)
  easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  if (easeFactor < 1.3) easeFactor = 1.3;

  if (quality < 3) {
    // Failed recall: reset to beginning
    interval = 1;
  } else {
    // Successful recall
    if (stage === 0) {
      interval = rating === 'easy' ? 3 : 1;
    } else if (stage === 1) {
      interval = rating === 'easy' ? 6 : 3;
    } else {
      interval = Math.round(interval * easeFactor);
      if (rating === 'easy') interval = Math.round(interval * 1.3);
    }
  }

  const nextStage = quality < 3 ? 0 : stage + 1;
  const today = new Date();
  const nextReview = new Date(today);
  nextReview.setDate(today.getDate() + interval);

  return {
    ...item,
    srsStage: nextStage,
    intervalDays: interval,
    easeFactor: parseFloat(easeFactor.toFixed(2)),
    reviewsCount: count,
    lastReviewedDate: today.toISOString().split('T')[0],
    nextReviewDate: nextReview.toISOString().split('T')[0]
  };
}

/**
 * Filter items that are due for review today or overdue
 */
export function isDueForReview(item) {
  if (!item.nextReviewDate) return true;
  const today = new Date().toISOString().split('T')[0];
  return item.nextReviewDate <= today;
}
