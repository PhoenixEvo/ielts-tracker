export const initialUserProfile = {
  name: "Nguyễn Nhật Phát",
  examDate: "2027-03-31",
  startDate: "2026-08-01",
  baselineBand: { l: 6.5, r: 6.0, w: 6.0, s: 5.5, overall: 6.0 },
  targetBand: 7.5,
  streakCount: 3,
  lastActiveDate: new Date().toISOString().split('T')[0]
};

export const prepPhases = [
  {
    id: 1,
    title: "Giai đoạn 1: Nền tảng & Củng cố",
    period: "Tháng 8 - Tháng 10/2026",
    weeks: "Tuần 1 - Tuần 12",
    focus: "Phát triển từ vựng C1/C2, làm quen dạng đề, sửa ngắc ngứ Speaking & cấu trúc Writing.",
    targetOverall: 6.5
  },
  {
    id: 2,
    title: "Giai đoạn 2: Nâng Band Chuyên sâu",
    period: "Tháng 11/2026 - Tháng 1/2027",
    weeks: "Tuần 13 - Tuần 24",
    focus: "Luyện 4 kỹ năng theo dạng khó (Reading Pass 3, Listening Sec 3/4, Writing Task 2 nâng cao, Speaking Part 3 PEEL).",
    targetOverall: 7.0
  },
  {
    id: 3,
    title: "Giai đoạn 3: Thực chiến Full Test",
    period: "Tháng 2 - Tháng 3/2027",
    weeks: "Tuần 25 - Tuần 31",
    focus: "Luyện thi nén áp lực thời gian thật trên máy IOT/Study4, làm Full Test 120p, phân tích tận gốc câu sai.",
    targetOverall: 7.5
  },
  {
    id: 4,
    title: "Giai đoạn 4: Sprint Tuần Thi",
    period: "Tuần cuối Tháng 3/2027",
    weeks: "Tuần 32",
    focus: "Ôn lại sổ tay từ vựng & lỗi sai, giữ tâm lý thoải mái, thi thử nhẹ nhàng.",
    targetOverall: 7.5
  }
];

// Helper to generate full 32-week schedule (224 days with verified domain links)
function generateFull32WeekSchedule() {
  const tasks = [];
  const daysOfWeek = [
    { day: "Thứ Hai", skill: "Reading & Writing T1" },
    { day: "Thứ Ba", skill: "Listening & Speaking P1/P2" },
    { day: "Thứ Tư", skill: "Reading & Writing T2" },
    { day: "Thứ Năm", skill: "Listening & Speaking P3" },
    { day: "Thứ Sáu", skill: "Vocab SRS & Grammar" },
    { day: "Thứ Bảy", skill: "Full Mock Test" },
    { day: "Chủ Nhật", skill: "Review & Rest" }
  ];

  const w1Titles = [
    "Tuần 1: Khởi Động & Chuẩn Hóa Phương Pháp",
    "Tuần 2: Luyện Kỹ Thuật True/False/NG & Line Graph",
    "Tuần 3: Chuyên Sâu Matching Headings & Bar Chart",
    "Tuần 4: Luyện Listening Sec 2 & Speaking PPF",
    "Tuần 5: Pie Chart, Table & Paragraph Building",
    "Tuần 6: Listening Sec 3 & Part 3 PEEL Framework",
    "Tuần 7: Map & Process Diagrams trong Task 1",
    "Tuần 8: Writing Task 2 Opinion Essays",
    "Tuần 9: Reading Multiple Choice & Synonym Tables",
    "Tuần 10: Writing Task 2 Discussion Essays",
    "Tuần 11: Listening Sec 4 Academic Talks",
    "Tuần 12: Tổng Ôn Giai Đoạn 1 & Test Đánh Giá 6.5"
  ];

  const w2Titles = [
    "Tuần 13: Bứt Phá Reading Passage 3 Bài Khó",
    "Tuần 14: Listening Bẫy Từ Nối Change of Mind",
    "Tuần 15: Writing Task 2 Problem-Solution Essays",
    "Tuần 16: Speaking Part 2 Topics Nâng Cao C1",
    "Tuần 17: Writing Task 2 Advantage-Disadvantage",
    "Tuần 18: Reading Matching Features & Information",
    "Tuần 19: Speaking Part 3 Phản Xạ Bài Khó",
    "Tuần 20: Tăng Tốc Độ Đọc 20 Minute Rule/Passage",
    "Tuần 21: Phân Tích Bài Mẫu Writing Band 8.0+",
    "Tuần 22: Dictation Chép Chính Tả Listening Sec 4",
    "Tuần 23: Cohesive Devices & Lexical Resource C1",
    "Tuần 24: Tổng Ôn Giai Đoạn 2 & Test Đánh Giá 7.0"
  ];

  const w3Titles = [
    "Tuần 25: Thực Chiến Full Test Môi Trường Máy Tính",
    "Tuần 26: Kiểm Soát Thời Gian Nén 120 Phút",
    "Tuần 27: Tối Ưu Hóa Điểm Listening & Reading 8.0+",
    "Tuần 28: Luyện Đề Thi Thật IDP/BC Mới Nhất",
    "Tuần 29: Khắc Phục Lỗi Sai Kinh Điển Cuối Cùng",
    "Tuần 30: Full Test 4 Kỹ Năng Liền Tù Tì",
    "Tuần 31: Tổng Duyệt Lần Cuối Hướng Tới Band 7.5"
  ];

  for (let w = 1; w <= 32; w++) {
    let phase = 1;
    let weekTitle = `Tuần ${w}: Luyện Tập Chuẩn Hóa Band 7.5`;

    if (w <= 12) {
      phase = 1;
      weekTitle = w1Titles[w - 1] || weekTitle;
    } else if (w <= 24) {
      phase = 2;
      weekTitle = w2Titles[w - 13] || weekTitle;
    } else if (w <= 31) {
      phase = 3;
      weekTitle = w3Titles[w - 25] || weekTitle;
    } else {
      phase = 4;
      weekTitle = "Tuần 32: Sprint Tuần Thi & Tổng Ôn Tâm Lý";
    }

    daysOfWeek.forEach((dInfo, dIdx) => {
      const dayId = `w${w}-d${dIdx + 1}`;
      let subtasks = [];
      let siteName = "Study4 (Bộ đề Cambridge)";
      let siteUrl = "https://study4.com";

      if (dIdx === 0) {
        // Monday: Reading + Writing Task 1
        siteName = "Study4 (Bộ đề Cambridge)";
        siteUrl = "https://study4.com";
        subtasks = [
          { id: `${dayId}-s1`, text: `Reading: Giải 1 bài Passage 1 trong bộ Cambridge IELTS 10-19 trên Study4 (Bấm giờ 20p)`, duration: "20p", skill: "Reading", completed: w === 1 },
          { id: `${dayId}-s2`, text: `Reading: Tra đáp án & soi bản dịch giải thích tiếng Việt trên Study4 để làm Synonym Table`, duration: "35p", skill: "Reading", completed: w === 1 },
          { id: `${dayId}-s3`, text: `Writing T1: Học dạng bài Line Graph/Bar Chart trên IELTS Liz, viết Overview + 2 đoạn Body`, duration: "50p", skill: "Writing T1", completed: false }
        ];
      } else if (dIdx === 1) {
        // Tuesday: Listening + Speaking P1/P2
        siteName = "Study4 / IELTS Liz";
        siteUrl = "https://study4.com";
        subtasks = [
          { id: `${dayId}-s1`, text: `Listening: Nghe Section 1 & 2 bộ đề Cambridge trên Study4 + xem audio transcript`, duration: "35p", skill: "Listening", completed: w === 1 },
          { id: `${dayId}-s2`, text: `Speaking P1: Luyện 5 câu hỏi Part 1 trên IELTS Liz (Trả lời 2-3 câu/câu)`, duration: "30p", skill: "Speaking", completed: w === 1 },
          { id: `${dayId}-s3`, text: `Speaking P2: Thu âm bài nói Part 2 trong 2 phút theo mô hình PPF (Past-Present-Future)`, duration: "40p", skill: "Speaking", completed: w === 1 }
        ];
      } else if (dIdx === 2) {
        // Wednesday: Reading + Writing Task 2
        siteName = "Study4 / IELTS Liz";
        siteUrl = "https://study4.com";
        subtasks = [
          { id: `${dayId}-s1`, text: `Reading: Luyện kĩ thuật True/False/Not Given & Matching Headings (Passage 2) trên Study4`, duration: "40p", skill: "Reading", completed: w === 1 },
          { id: `${dayId}-s2`, text: `Writing T2: Lập dàn ý 4 đoạn cho đề Opinion / Discussion Essay`, duration: "25p", skill: "Writing T2", completed: w === 1 },
          { id: `${dayId}-s3`, text: `Writing T2: Viết bài luận 250+ từ & kiểm tra lỗi chính tả/từ nối Cohesive Devices`, duration: "40p", skill: "Writing T2", completed: false }
        ];
      } else if (dIdx === 3) {
        // Thursday: Listening + Speaking P3
        siteName = "Mini-IELTS / BBC Learning";
        siteUrl = "https://mini-ielts.com";
        subtasks = [
          { id: `${dayId}-s1`, text: `Listening: Nghe Section 3 (Học sinh thảo luận) trên Mini-IELTS + note bẫy keywords`, duration: "40p", skill: "Listening", completed: false },
          { id: `${dayId}-s2`, text: `Speaking P3: Trả lời 3 câu hỏi Part 3 theo công thức PEEL (Point-Explain-Example-Link)`, duration: "45p", skill: "Speaking", completed: false },
          { id: `${dayId}-s3`, text: `Dictation: Chép chính tả 1 đoạn audio ngắn trên BBC 6 Minute English`, duration: "20p", skill: "Listening", completed: false }
        ];
      } else if (dIdx === 4) {
        // Friday: Vocab & Grammar
        siteName = "Vocabulary.com / Magoosh";
        siteUrl = "https://www.vocabulary.com";
        subtasks = [
          { id: `${dayId}-s1`, text: `Vocab SRS: Học 20 Flashcards từ vựng B2-C1 trên mục Từ Vựng SRS của App`, duration: "30p", skill: "Vocab", completed: w === 1 },
          { id: `${dayId}-s2`, text: `Grammar: Ôn lại cấu trúc Mệnh đề quan hệ rút gọn & Cấu trúc câu ghép phức`, duration: "30p", skill: "Grammar", completed: false },
          { id: `${dayId}-s3`, text: `Collocations: Tra ngữ cảnh & học 10 cụm Collocations C1 trên Vocabulary.com`, duration: "30p", skill: "Vocab", completed: false }
        ];
      } else if (dIdx === 5) {
        // Saturday: Full Mock Test
        siteName = "IELTS Online Tests (IOT)";
        siteUrl = "https://ieltsonlinetests.com";
        subtasks = [
          { id: `${dayId}-s1`, text: `Full Test: Làm 1 bài Mock Test Reading + Listening (120p) bấm giờ trên IOT`, duration: "120p", skill: "Mock Test", completed: false },
          { id: `${dayId}-s2`, text: `Review: Chấm điểm, nhập kết quả vào mục Mock Test Log & soi câu sai`, duration: "30p", skill: "Analytics", completed: false }
        ];
      } else {
        // Sunday: Rest & Review
        siteName = "TED Talks / BBC English";
        siteUrl = "https://www.ted.com";
        subtasks = [
          { id: `${dayId}-s1`, text: `Review: Xem lại toàn bộ sổ tay từ vựng & lỗi sai đã ghi chép trong tuần`, duration: "30p", skill: "Review", completed: false },
          { id: `${dayId}-s2`, text: `Entertainment: Nghe Podcast 1 bài diễn thuyết TED Talks để mở rộng ý tưởng Writing T2`, duration: "30p", skill: "Listening", completed: false }
        ];
      }

      tasks.push({
        id: dayId,
        weekNumber: w,
        weekTitle: weekTitle,
        phase: phase,
        day: dInfo.day,
        dateStr: "",
        skill: dInfo.skill,
        subtasks: subtasks,
        site: siteName,
        url: siteUrl,
        note: ""
      });
    });
  }

  return tasks;
}

export const defaultScheduleTasks = generateFull32WeekSchedule();

export const initialMockScores = [
  {
    id: "trf-2024",
    date: "2024-01-11",
    source: "Kết Quả Thi Thật TRF (Official VN101)",
    testType: "Official Test",
    l: 6.5,
    r: 6.0,
    w: 6.0,
    s: 5.5,
    overall: 6.0,
    notes: "Điểm thi gốc chính thức. Speaking 5.5 cần cải thiện nhất."
  },
  {
    id: "mock-1",
    date: "2026-08-10",
    source: "Study4 - Cambridge 18 Test 1",
    testType: "Full Test",
    l: 6.5,
    r: 6.5,
    w: 6.0,
    s: 6.0,
    overall: 6.5,
    notes: "Reading lên 6.5 nhờ làm kĩ True/False/Not Given trên Study4. Speaking đã bớt ngắc ngứ."
  }
];

export const initialVocabList = [
  {
    id: 1,
    term: "Substantial increase",
    definition: "Sự tăng trưởng đáng kể (thay cho 'big increase' trong Task 1)",
    type: "collocation",
    skillTag: "Writing Task 1",
    dateAdded: "2026-08-01",
    srsStage: 2,
    intervalDays: 4,
    easeFactor: 2.5,
    nextReviewDate: new Date().toISOString().split('T')[0],
    example: "The graph illustrates a substantial increase in international student enrolment."
  },
  {
    id: 2,
    term: "Play a pivotal role in",
    definition: "Đóng vai trò then chốt trong (Dùng trong Task 2 body paragraph)",
    type: "collocation",
    skillTag: "Writing Task 2",
    dateAdded: "2026-08-02",
    srsStage: 1,
    intervalDays: 2,
    easeFactor: 2.5,
    nextReviewDate: new Date().toISOString().split('T')[0],
    example: "Education plays a pivotal role in shaping a country's economic future."
  },
  {
    id: 3,
    term: "Listening Distractor Trap",
    definition: "Bẫy thay đổi ý kiến đột ngột bằng từ 'However', 'Actually', 'Mind you'",
    type: "error",
    skillTag: "Listening",
    dateAdded: "2026-08-03",
    srsStage: 3,
    intervalDays: 7,
    easeFactor: 2.6,
    nextReviewDate: "2026-08-20",
    example: "Họ nói chọn A nhưng sau từ 'Actually' đáp án đúng chuyển thành C."
  },
  {
    id: 4,
    term: "Exacerbate the problem",
    definition: "Làm trầm trọng thêm vấn đề (C1 vocabulary cho bài luận)",
    type: "vocab",
    skillTag: "Writing Task 2",
    dateAdded: "2026-08-05",
    srsStage: 0,
    intervalDays: 1,
    easeFactor: 2.5,
    nextReviewDate: new Date().toISOString().split('T')[0],
    example: "Rapid urbanisation can exacerbate environmental pollution."
  },
  {
    id: 5,
    term: "At the end of the day",
    definition: "Suy cho cùng (Idiom tự nhiên cho Speaking Part 3)",
    type: "idiom",
    skillTag: "Speaking",
    dateAdded: "2026-08-08",
    srsStage: 1,
    intervalDays: 2,
    easeFactor: 2.5,
    nextReviewDate: new Date().toISOString().split('T')[0],
    example: "At the end of the day, governments must take primary responsibility."
  }
];

export const initialResources = [
  {
    id: 1,
    title: "Study4 (Luyện Đề Cambridge 1-19)",
    url: "https://study4.com",
    category: "Cambridge Test Bank",
    isFree: true,
    description: "Nền tảng luyện giải đề Cambridge Academic IELTS 10-19 trực tuyến miễn phí có bấm giờ 60p, đáp án & giải thích tiếng Việt chi tiết từng câu."
  },
  {
    id: 2,
    title: "IELTS Online Tests (IOT)",
    url: "https://ieltsonlinetests.com",
    category: "Mock Test Bank",
    isFree: true,
    description: "Kho đề thi thử Reading & Listening khổng lồ (Recent Actual Tests), giao diện thi trên máy hệt như thi thật tại IDP/BC."
  },
  {
    id: 3,
    title: "Mini-IELTS",
    url: "https://mini-ielts.com",
    category: "Section Practice",
    isFree: true,
    description: "Luyện bài ngắn 10-15 phút từng dạng câu hỏi Reading/Listening. Cực kỳ tiện cho những ngày bận rộn."
  },
  {
    id: 4,
    title: "IELTS Liz",
    url: "https://ieltsliz.com",
    category: "Writing & Speaking Tips",
    isFree: true,
    description: "Trang web uy tín của cựu giám khảo Liz. Bài mẫu Writing/Speaking Band 8.0+ và mẹo làm bài chuẩn chỉ."
  },
  {
    id: 5,
    title: "Magoosh IELTS Flashcards",
    url: "https://ielts.magoosh.com/flashcards",
    category: "Vocabulary SRS",
    isFree: true,
    description: "Bộ flashcards từ vựng IELTS phân cấp độ từ cơ bản đến Band 8.0, rèn phản xạ từ vựng academic."
  },
  {
    id: 6,
    title: "BBC Learning English (6 Minute English)",
    url: "https://www.bbc.co.uk/learningenglish",
    category: "Listening & Pronunciation",
    isFree: true,
    description: "Nghe giọng Anh-Anh chuẩn qua các podcast ngắn 6 phút. Học collocations và ngữ điệu tự nhiên."
  },
  {
    id: 7,
    title: "Vocabulary.com",
    url: "https://www.vocabulary.com",
    category: "Dictionary & Nuance",
    isFree: true,
    description: "Tra cứu từ vựng theo ngữ cảnh thực tế, hiểu sắc thái nghĩa (nuance) để dùng từ chuẩn xác trong Writing Task 2."
  },
  {
    id: 8,
    title: "TED Talks",
    url: "https://www.ted.com",
    category: "Listening & Essay Ideas",
    isFree: true,
    description: "Luyện nghe bài diễn thuyết tiếng Anh chuẩn từ các diễn giả hàng đầu thế giới, mở rộng vốn ý tưởng (ideas) phong phú cho Writing Task 2."
  },
  {
    id: 9,
    title: "Cambridge Dictionary",
    url: "https://dictionary.cambridge.org",
    category: "Official Dictionary",
    isFree: true,
    description: "Từ điển chuẩn Cambridge tra từ vựng C1/C2, phát âm chuẩn Anh-Anh / Anh-Mỹ & ví dụ câu chuẩn mực."
  }
];

export const initialChecklists = {
  writingTask1: [
    { id: 'w1-1', text: "Đã có bài Overview nêu rõ 2 xu hướng chính/đặc điểm nổi bật nhất (không đưa số liệu cụ thể vào Overview).", category: "Task Achievement" },
    { id: 'w1-2', text: "Đã chia 2 đoạn Body theo tiêu chí so sánh/nhóm dữ liệu hợp lý.", category: "Coherence & Cohesion" },
    { id: 'w1-3', text: "Sử dụng đa dạng các cụm từ mô tả xu hướng (surge, plummet, fluctuate, reach a peak, level off).", category: "Lexical Resource" },
    { id: 'w1-4', text: "Thay đổi cấu trúc so sánh (X was twice as high as Y / Compared to X, Y experienced...).", category: "Grammar Range" },
    { id: 'w1-5', text: "Dùng từ nối thời gian và so sánh mượt mà (Meanwhile, Subsequently, In stark contrast).", category: "Coherence & Cohesion" }
  ],
  writingTask2: [
    { id: 'w2-1', text: "Mở bài đã paraphrase câu hỏi và nêu rõ vị thế/quan điểm bài viết (Clear position throughout).", category: "Task Achievement" },
    { id: 'w2-2', text: "Mỗi Body có 1 Topic Sentence rõ ràng, theo sau là Explanation và Concrete Example.", category: "Coherence & Cohesion" },
    { id: 'w2-3', text: "Không dùng từ quá thông dụng (big -> substantial, help -> facilitate, good -> beneficial).", category: "Lexical Resource" },
    { id: 'w2-4', text: "Sử dụng kết hợp câu đơn, câu ghép và câu phức (Conditional, Relative Clauses, Reduced Clauses).", category: "Grammar Range" },
    { id: 'w2-5', text: "Đạt độ dài trên 250 từ và dành 3-5 phút cuối soi lỗi chính tả & thì của động từ.", category: "Task Achievement" }
  ],
  speaking: [
    { id: 's-1', text: "Part 1: Trả lời 2-3 câu ngắn gọn, có mở rộng lý do/ví dụ, không chỉ nói Yes/No.", category: "Fluency" },
    { id: 's-2', text: "Part 2: Dùng cấu trúc PPF (Past - Present - Future) để kéo dài thời gian nói đúng 2 phút.", category: "Fluency" },
    { id: 's-3', text: "Part 3: Trả lời theo công thức PEEL (Point -> Explanation -> Example -> Link).", category: "Fluency & Coherence" },
    { id: 's-4', text: "Sử dụng các Discourse Markers tự nhiên (Well, honestly speaking, to be fair, having said that).", category: "Lexical Resource" },
    { id: 's-5', text: "Chú ý phát âm đuôi (-s, -ed), trọng âm từ và nhấn giọng tương phản (contrastive stress).", category: "Pronunciation" }
  ]
};
