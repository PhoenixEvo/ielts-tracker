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
    focus: "Phát triển từ vựng C1/C2, làm quen dạng đề, sửa ngắc ngứ Speaking & cấu trúc Writing.",
    targetOverall: 6.5
  },
  {
    id: 2,
    title: "Giai đoạn 2: Nâng Band Chuyên sâu",
    period: "Tháng 11/2026 - Tháng 1/2027",
    focus: "Luyện 4 kỹ năng theo dạng khó (Reading Pass 3, Listening Sec 3/4, Writing Task 2 nâng cao, Speaking Part 3 PEEL).",
    targetOverall: 7.0
  },
  {
    id: 3,
    title: "Giai đoạn 3: Thực chiến Full Test",
    period: "Tháng 2 - Tháng 3/2027",
    focus: "Luyện thi nén áp lực thời gian thật trên máy IOT, làm Full Test 120p, phân tích tận gốc câu sai.",
    targetOverall: 7.5
  },
  {
    id: 4,
    title: "Giai đoạn 4: Sprint Tuần Thi",
    period: "Tuần cuối Tháng 3/2027",
    focus: "Ôn lại sổ tay từ vựng & lỗi sai, giữ tâm lý thoải mái, thi thử nhẹ nhàng.",
    targetOverall: 7.5
  }
];

export const defaultScheduleTasks = [
  {
    id: 1,
    day: "Thứ Hai",
    skill: "Reading & Writing T1",
    task: "Luyện 1 bài Passage Reading (Passage 1/2) + Phân tích câu sai. Viết 1 bài Writing Task 1 (Bar/Line/Map).",
    site: "IELTS Online Tests / IELTS Liz",
    url: "https://ieltsonlinetests.com",
    time: "105 phút",
    phase: 1,
    completed: false,
    note: ""
  },
  {
    id: 2,
    day: "Thứ Ba",
    skill: "Listening & Speaking P1/P2",
    task: "Luyện Listening Section 1 & 2. Thu âm Speaking Part 1 & Part 2 theo đề thi thực tế.",
    site: "Mini-IELTS / IELTS Liz",
    url: "https://mini-ielts.com",
    time: "105 phút",
    phase: 1,
    completed: true,
    note: "Đã thu âm Part 2 chủ đề Describe a memorable event."
  },
  {
    id: 3,
    day: "Thứ Tư",
    skill: "Reading & Writing T2",
    task: "Phân tích kĩ thuật True/False/Not Given bài Reading. Lập dàn ý & viết 1 bài Writing Task 2.",
    site: "IELTS Online Tests / IELTS Liz",
    url: "https://ieltsonlinetests.com",
    time: "105 phút",
    phase: 1,
    completed: true,
    note: "Cần chú ý từ nối Cohesive Devices."
  },
  {
    id: 4,
    day: "Thứ Năm",
    skill: "Listening & Speaking P3",
    task: "Luyện Listening Section 3 & 4 (Phân tích bẫy Synonyms). Luyện Speaking Part 3 theo mô hình PEEL.",
    site: "Mini-IELTS / BBC Learning",
    url: "https://www.bbc.co.uk/learningenglish",
    time: "105 phút",
    phase: 1,
    completed: false,
    note: ""
  },
  {
    id: 5,
    day: "Thứ Sáu",
    skill: "Vocab & Grammar",
    task: "Học 20 Flashcards từ vựng B2-C1 theo chủ đề. Ôn lại các cấu trúc câu phức & mệnh đề quan hệ.",
    site: "Magoosh / Vocabulary.com",
    url: "https://ielts.magoosh.com/flashcards",
    time: "90 phút",
    phase: 1,
    completed: true,
    note: "Thuộc 15/20 từ mới."
  },
  {
    id: 6,
    day: "Thứ Bảy",
    skill: "Full Mock Test",
    task: "Làm 1 bài Full Test Reading + Listening nghiêm túc trong đúng 120 phút. Chấm điểm & soi câu sai.",
    site: "IELTS Online Tests",
    url: "https://ieltsonlinetests.com",
    time: "150 phút",
    phase: 1,
    completed: false,
    note: ""
  },
  {
    id: 7,
    day: "Chủ Nhật",
    skill: "Review & Thư giãn",
    task: "Nghe Podcast BBC / TED Talks giải trí. Ôn lại toàn bộ từ vựng đã học trong tuần từ sổ tay.",
    site: "BBC Learning English",
    url: "https://www.bbc.co.uk/learningenglish",
    time: "45 phút",
    phase: 1,
    completed: false,
    note: ""
  }
];

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
    source: "IELTS Online Tests - Cambridge 18 Test 1",
    testType: "Full Test",
    l: 6.5,
    r: 6.5,
    w: 6.0,
    s: 6.0,
    overall: 6.5,
    notes: "Reading lên 6.5 nhờ làm kĩ True/False/Not Given. Speaking đã bớt ngắc ngứ."
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
    title: "IELTS Online Tests (IOT)",
    url: "https://ieltsonlinetests.com",
    category: "Mock Test Bank",
    isFree: true,
    description: "Kho đề thi thử Reading & Listening khổng lồ, giao diện thi trên máy hệt như thi thật tại IDP/BC. Có đáp án & giải thích từng câu."
  },
  {
    id: 2,
    title: "Mini-IELTS",
    url: "https://mini-ielts.com",
    category: "Section Practice",
    isFree: true,
    description: "Luyện bài ngắn 10-15 phút từng dạng câu hỏi Reading/Listening. Cực kỳ tiện cho những ngày bận rộn."
  },
  {
    id: 3,
    title: "IELTS Liz",
    url: "https://ieltsliz.com",
    category: "Writing & Speaking Tips",
    isFree: true,
    description: "Trang web uy tín của cựu giám khảo Liz. Bài mẫu Writing/Speaking Band 8.0+ và mẹo làm bài chuẩn chỉ."
  },
  {
    id: 4,
    title: "Magoosh IELTS Flashcards",
    url: "https://ielts.magoosh.com/flashcards",
    category: "Vocabulary SRS",
    isFree: true,
    description: "Bộ flashcards từ vựng IELTS phân cấp độ từ cơ bản đến Band 8.0, rèn phản xạ từ vựng академи script."
  },
  {
    id: 5,
    title: "BBC Learning English (6 Minute English)",
    url: "https://www.bbc.co.uk/learningenglish",
    category: "Listening & Pronunciation",
    isFree: true,
    description: "Nghe giọng Anh-Anh chuẩn qua các podcast ngắn 6 phút. Học collocations và ngữ điệu tự nhiên."
  },
  {
    id: 6,
    title: "Vocabulary.com",
    url: "https://www.vocabulary.com",
    category: "Dictionary & Nuance",
    isFree: true,
    description: "Tra cứu từ vựng theo ngữ cảnh thực tế, hiểu sắc thái nghĩa (nuance) để dùng từ chuẩn xác trong Writing Task 2."
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
