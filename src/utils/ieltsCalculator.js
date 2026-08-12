/**
 * Calculates official IELTS Overall Band score using standard IELTS rounding rules:
 * - Average of Listening, Reading, Writing, and Speaking.
 * - Fractional part < 0.25 rounds down to the nearest whole band (e.g., 6.125 -> 6.0).
 * - Fractional part >= 0.25 and < 0.75 rounds to the half band (e.g., 6.25 -> 6.5, 6.625 -> 6.5).
 * - Fractional part >= 0.75 rounds up to the next whole band (e.g., 6.75 -> 7.0).
 * 
 * @param {number} l - Listening score (0.0 - 9.0)
 * @param {number} r - Reading score (0.0 - 9.0)
 * @param {number} w - Writing score (0.0 - 9.0)
 * @param {number} s - Speaking score (0.0 - 9.0)
 * @returns {number} Rounded overall band score
 */
export function calculateIeltsOverall(l, r, w, s) {
  const numL = parseFloat(l) || 0;
  const numR = parseFloat(r) || 0;
  const numW = parseFloat(w) || 0;
  const numS = parseFloat(s) || 0;

  const rawAvg = (numL + numR + numW + numS) / 4;
  const floorVal = Math.floor(rawAvg);
  const decimal = rawAvg - floorVal;

  if (decimal < 0.25) {
    return floorVal;
  } else if (decimal >= 0.25 && decimal < 0.75) {
    return floorVal + 0.5;
  } else {
    return floorVal + 1.0;
  }
}

/**
 * Calculates distance from target 7.5 band score per skill.
 */
export function analyzeWeaknesses(scores = { l: 6.5, r: 6.0, w: 6.0, s: 5.5 }) {
  const target = 7.5;
  const skills = [
    { name: 'Speaking', code: 's', score: parseFloat(scores.s) || 5.5, priority: 1 },
    { name: 'Writing', code: 'w', score: parseFloat(scores.w) || 6.0, priority: 2 },
    { name: 'Reading', code: 'r', score: parseFloat(scores.r) || 6.0, priority: 3 },
    { name: 'Listening', code: 'l', score: parseFloat(scores.l) || 6.5, priority: 4 }
  ];

  skills.sort((a, b) => a.score - b.score);

  return skills.map(skill => ({
    ...skill,
    gap: (target - skill.score).toFixed(1),
    recommendation: getSkillAdvice(skill.name, skill.score)
  }));
}

function getSkillAdvice(skillName, score) {
  switch (skillName) {
    case 'Speaking':
      if (score < 6.0) {
        return 'Tập trung phản xạ nói lưu loát, mở rộng Speaking Part 1 & 2 theo kỹ thuật PPF (Past-Present-Future) và tránh ngắc ngứ dài.';
      } else if (score < 7.0) {
        return 'Nâng cấp từ vựng C1/C2 (idioms tự nhiên, collocations) và trả lời Part 3 theo cấu trúc PEEL (Point, Example, Explanation, Link).';
      } else {
        return 'Duy trì phong độ với ngữ điệu tự nhiên, phản xạ bài khó và giảm thiểu tối đa rào cản từ ngữ.';
      }
    case 'Writing':
      if (score < 6.5) {
        return 'Viết Task 1 đúng cấu trúc (Overview + 2 Body) & Task 2 đủ 4 đoạn (Intro, 2 Body, Conclusion) với từ nối Cohesive Devices chuẩn.';
      } else {
        return 'Mở rộng vốn Lexical Resource C1, dùng câu phức đúng ngữ pháp và phát triển ý sâu sắc trong Writing Task 2.';
      }
    case 'Reading':
      if (score < 6.5) {
        return 'Luyện kỹ thuật Skimming/Scanning, phân biệt bẫy True/False/Not Given và lập danh sách Paraphrase/Synonym hàng ngày.';
      } else {
        return 'Tăng tốc độ đọc bài khó Passage 3, kiểm soát thời gian 20 phút/passage và phân tích kĩ câu sai.';
      }
    case 'Listening':
      if (score < 7.0) {
        return 'Tập trung Section 3 & 4 (học sinh thảo luận & bài giảng chuyên ngành), cảnh giác bẫy từ nối thay đổi ý kiến (however, actually).';
      } else {
        return 'Duy trì nghe podcast BBC / TED Talks 1.25x và làm bài thi trên máy IOT để đạt mốc 8.0+.';
      }
    default:
      return '';
  }
}
