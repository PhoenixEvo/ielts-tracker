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
    focus: "Luyện thi nén áp lực thời gian thật trên máy IOT, làm Full Test 120p, phân tích tận gốc câu sai.",
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

export const defaultScheduleTasks = [
  {
    id: "w1-d1",
    weekNumber: 1,
    weekTitle: "Tuần 1: Khởi Động & Chuẩn Hóa Phương Pháp",
    phase: 1,
    day: "Thứ Hai",
    dateStr: "12/08",
    skill: "Reading & Writing T1",
    subtasks: [
      { id: "w1-d1-s1", text: "Reading: Làm Passage 1 (Cambridge 18 Test 1) bấm giờ 20p", duration: "20p", skill: "Reading", completed: true },
      { id: "w1-d1-s2", text: "Reading: Soi đáp án, dịch lại câu sai & lập bảng Synonym/Paraphrase Table", duration: "35p", skill: "Reading", completed: true },
      { id: "w1-d1-s3", text: "Writing T1: Phân tích đề Line Graph, viết Overview + 2 đoạn Body", duration: "50p", skill: "Writing T1", completed: false }
    ],
    site: "IELTS Online Tests / IELTS Liz",
    url: "https://ieltsonlinetests.com",
    note: "Đã làm xong Reading Passage 1 đúng 11/13 câu."
  },
  {
    id: "w1-d2",
    weekNumber: 1,
    weekTitle: "Tuần 1: Khởi Động & Chuẩn Hóa Phương Pháp",
    phase: 1,
    day: "Thứ Ba",
    dateStr: "13/08",
    skill: "Listening & Speaking P1/P2",
    subtasks: [
      { id: "w1-d2-s1", text: "Listening: Nghe Section 1 & 2 (Cam 18 Test 1) + soi bẫy từ nối", duration: "35p", skill: "Listening", completed: true },
      { id: "w1-d2-s2", text: "Speaking P1: Luyện 5 câu hỏi chủ đề Work/Study (Trả lời 2-3 câu/câu)", duration: "30p", skill: "Speaking", completed: true },
      { id: "w1-d2-s3", text: "Speaking P2: Thu âm bài nói 2 phút chủ đề 'Describe a skill you learned' (PPF Framework)", duration: "40p", skill: "Speaking", completed: true }
    ],
    site: "Mini-IELTS / IELTS Liz",
    url: "https://mini-ielts.com",
    note: "Đã thu âm file Part 2, phát âm trôi chảy hơn."
  },
  {
    id: "w1-d3",
    weekNumber: 1,
    weekTitle: "Tuần 1: Khởi Động & Chuẩn Hóa Phương Pháp",
    phase: 1,
    day: "Thứ Tư",
    dateStr: "14/08",
    skill: "Reading & Writing T2",
    subtasks: [
      { id: "w1-d3-s1", text: "Reading: Luyện chuyên sâu dạng bài True/False/Not Given (Passage 2)", duration: "40p", skill: "Reading", completed: true },
      { id: "w1-d3-s2", text: "Writing T2: Lập dàn ý 4 đoạn cho đề Opinion Essay (Education/Technology)", duration: "25p", skill: "Writing T2", completed: true },
      { id: "w1-d3-s3", text: "Writing T2: Viết hoàn chỉnh bài luận 250+ từ & tự check lại Cohesive Devices", duration: "40p", skill: "Writing T2", completed: false }
    ],
    site: "IELTS Online Tests / IELTS Liz",
    url: "https://ieltsonlinetests.com",
    note: "Dàn ý bài Opinion Essay đã chuẩn bị xong."
  },
  {
    id: "w1-d4",
    weekNumber: 1,
    weekTitle: "Tuần 1: Khởi Động & Chuẩn Hóa Phương Pháp",
    phase: 1,
    day: "Thứ Năm",
    dateStr: "15/08",
    skill: "Listening & Speaking P3",
    subtasks: [
      { id: "w1-d4-s1", text: "Listening: Luyện Section 3 (Học sinh thảo luận bài nghiên cứu) + note keywords", duration: "40p", skill: "Listening", completed: false },
      { id: "w1-d4-s2", text: "Speaking P3: Luyện 3 câu hỏi Part 3 theo mô hình PEEL (Point-Explain-Example-Link)", duration: "45p", skill: "Speaking", completed: false },
      { id: "w1-d4-s3", text: "Listening Dictation: Chép chính tả 1 đoạn audio BBC 6 Minute English", duration: "20p", skill: "Listening", completed: false }
    ],
    site: "Mini-IELTS / BBC Learning",
    url: "https://www.bbc.co.uk/learningenglish",
    note: ""
  },
  {
    id: "w1-d5",
    weekNumber: 1,
    weekTitle: "Tuần 1: Khởi Động & Chuẩn Hóa Phương Pháp",
    phase: 1,
    day: "Thứ Sáu",
    dateStr: "16/08",
    skill: "Vocab SRS & Grammar",
    subtasks: [
      { id: "w1-d5-s1", text: "Vocab: Học 20 Flashcards từ vựng B2-C1 trên mục Từ Vựng SRS", duration: "30p", skill: "Vocab", completed: true },
      { id: "w1-d5-s2", text: "Grammar: Ôn lại cấu trúc Mệnh đề quan hệ rút gọn (Reduced Relative Clauses)", duration: "30p", skill: "Grammar", completed: false },
      { id: "w1-d5-s3", text: "Collocations: Luyện ghép 10 cụm từ Collocation ăn điểm cho Writing T2", duration: "30p", skill: "Vocab", completed: false }
    ],
    site: "Magoosh / Vocabulary.com",
    url: "https://ielts.magoosh.com/flashcards",
    note: ""
  },
  {
    id: "w1-d6",
    weekNumber: 1,
    weekTitle: "Tuần 1: Khởi Động & Chuẩn Hóa Phương Pháp",
    phase: 1,
    day: "Thứ Bảy",
    dateStr: "17/08",
    skill: "Full Mock Test",
    subtasks: [
      { id: "w1-d6-s1", text: "Full Test: Làm 1 bài Mock Reading + Listening nghiêm túc 120p bấm giờ", duration: "120p", skill: "Mock Test", completed: false },
      { id: "w1-d6-s2", text: "Review: Chấm điểm, ghi lại điểm số vào Mock Test Log & phân tích câu sai", duration: "30p", skill: "Analytics", completed: false }
    ],
    site: "IELTS Online Tests",
    url: "https://ieltsonlinetests.com",
    note: ""
  },
  {
    id: "w1-d7",
    weekNumber: 1,
    weekTitle: "Tuần 1: Khởi Động & Chuẩn Hóa Phương Pháp",
    phase: 1,
    day: "Chủ Nhật",
    dateStr: "18/08",
    skill: "Review & Rest",
    subtasks: [
      { id: "w1-d7-s1", text: "Review: Xem lại toàn bộ sổ tay từ vựng & lỗi sai đã ghi chép trong tuần", duration: "30p", skill: "Review", completed: false },
      { id: "w1-d7-s2", text: "Entertainment: Nghe Podcast TED Talks / BBC 6 Minute English thư giãn", duration: "30p", skill: "Listening", completed: false }
    ],
    site: "BBC Learning English",
    url: "https://www.bbc.co.uk/learningenglish",
    note: ""
  },
  {
    id: "w2-d1",
    weekNumber: 2,
    weekTitle: "Tuần 2: Nâng Cao Kỹ Năng Đoạn Văn & Từ Vựng C1",
    phase: 1,
    day: "Thứ Hai",
    dateStr: "19/08",
    skill: "Reading & Writing T1",
    subtasks: [
      { id: "w2-d1-s1", text: "Reading: Làm Passage 2 (Matching Headings) - Bấm giờ 20p", duration: "20p", skill: "Reading", completed: false },
      { id: "w2-d1-s2", text: "Reading: Lập bảng Synonym Table phân tích lý do chọn sai Heading", duration: "30p", skill: "Reading", completed: false },
      { id: "w2-d1-s3", text: "Writing T1: Viết bài Bar Chart so sánh 2 năm (Cụm từ tăng/giảm C1)", duration: "45p", skill: "Writing T1", completed: false }
    ],
    site: "IELTS Online Tests / IELTS Liz",
    url: "https://ieltsonlinetests.com",
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
