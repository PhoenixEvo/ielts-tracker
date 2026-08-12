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

// Helper to generate full 32-week schedule (224 days with pre-populated subtasks)
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

      if (phase === 1) {
        if (dIdx === 0) {
          subtasks = [
            { id: `${dayId}-s1`, text: `Reading: Làm 1 bài Passage 1 (Cam 18/19) bấm giờ 20p`, duration: "20p", skill: "Reading", completed: w === 1 },
            { id: `${dayId}-s2`, text: `Reading: Soi đáp án, tra từ mới & lập bảng Synonym Table`, duration: "35p", skill: "Reading", completed: w === 1 },
            { id: `${dayId}-s3`, text: `Writing T1: Luyện viết Overview + 2 đoạn Body bài Line Graph/Bar Chart`, duration: "50p", skill: "Writing T1", completed: false }
          ];
        } else if (dIdx === 1) {
          subtasks = [
            { id: `${dayId}-s1`, text: `Listening: Nghe Section 1 & 2 (Cam 18/19) + soi bẫy từ nối`, duration: "35p", skill: "Listening", completed: w === 1 },
            { id: `${dayId}-s2`, text: `Speaking P1: Luyện 5 câu hỏi Part 1 theo 3 chủ đề phổ biến`, duration: "30p", skill: "Speaking", completed: w === 1 },
            { id: `${dayId}-s3`, text: `Speaking P2: Thu âm bài nói 2 phút theo công thức PPF (Past-Present-Future)`, duration: "40p", skill: "Speaking", completed: w === 1 }
          ];
        } else if (dIdx === 2) {
          subtasks = [
            { id: `${dayId}-s1`, text: `Reading: Luyện kĩ thuật True/False/Not Given & Matching Headings`, duration: "40p", skill: "Reading", completed: w === 1 },
            { id: `${dayId}-s2`, text: `Writing T2: Lập dàn ý 4 đoạn cho đề Opinion / Discussion Essay`, duration: "25p", skill: "Writing T2", completed: w === 1 },
            { id: `${dayId}-s3`, text: `Writing T2: Viết bài luận 250+ từ & kiểm tra lỗi chính tả/từ nối`, duration: "40p", skill: "Writing T2", completed: false }
          ];
        } else if (dIdx === 3) {
          subtasks = [
            { id: `${dayId}-s1`, text: `Listening: Nghe Section 3 (Học sinh thảo luận) + ghi chú keywords`, duration: "40p", skill: "Listening", completed: false },
            { id: `${dayId}-s2`, text: `Speaking P3: Luyện 3 câu hỏi Part 3 theo mô hình PEEL (Point-Explain-Example-Link)`, duration: "45p", skill: "Speaking", completed: false },
            { id: `${dayId}-s3`, text: `Listening Dictation: Chép chính tả 1 đoạn audio BBC 6 Minute English`, duration: "20p", skill: "Listening", completed: false }
          ];
        } else if (dIdx === 4) {
          subtasks = [
            { id: `${dayId}-s1`, text: `Vocab SRS: Học 20 Flashcards từ vựng B2-C1 trên mục Từ Vựng SRS`, duration: "30p", skill: "Vocab", completed: w === 1 },
            { id: `${dayId}-s2`, text: `Grammar: Ôn lại cấu trúc Mệnh đề quan hệ & Cấu trúc câu ghép phức`, duration: "30p", skill: "Grammar", completed: false },
            { id: `${dayId}-s3`, text: `Collocations: Học 10 cụm Collocation C1 dùng cho bài viết Task 2`, duration: "30p", skill: "Vocab", completed: false }
          ];
        } else if (dIdx === 5) {
          subtasks = [
            { id: `${dayId}-s1`, text: `Full Test: Làm 1 bài Mock Reading + Listening nghiêm túc 120p bấm giờ`, duration: "120p", skill: "Mock Test", completed: false },
            { id: `${dayId}-s2`, text: `Review: Chấm điểm, ghi lại điểm số vào Mock Test Log & soi câu sai`, duration: "30p", skill: "Analytics", completed: false }
          ];
        } else {
          subtasks = [
            { id: `${dayId}-s1`, text: `Review: Xem lại toàn bộ sổ tay từ vựng & lỗi sai đã ghi chép trong tuần`, duration: "30p", skill: "Review", completed: false },
            { id: `${dayId}-s2`, text: `Entertainment: Nghe Podcast TED Talks / BBC 6 Minute English thư giãn`, duration: "30p", skill: "Listening", completed: false }
          ];
        }
      } else if (phase === 2) {
        if (dIdx === 0) {
          subtasks = [
            { id: `${dayId}-s1`, text: `Reading: Giải bài Passage 3 chuyên sâu (Khoa học/Lịch sử khó) trong 20p`, duration: "20p", skill: "Reading", completed: false },
            { id: `${dayId}-s2`, text: `Reading: Phân tích chi tiết câu sai & bổ sung 15 từ vựng C1 vào SRS`, duration: "40p", skill: "Reading", completed: false },
            { id: `${dayId}-s3`, text: `Writing T1: Luyện viết bài Process / Map Diagram nâng cao`, duration: "45p", skill: "Writing T1", completed: false }
          ];
        } else if (dIdx === 1) {
          subtasks = [
            { id: `${dayId}-s1`, text: `Listening: Luyện Section 4 (Bài giảng chuyên ngành) tốc độ 1.25x`, duration: "40p", skill: "Listening", completed: false },
            { id: `${dayId}-s2`, text: `Speaking P2: Thu âm Part 2 chủ đề khó (Kinh tế, Môi trường, Công nghệ)`, duration: "40p", skill: "Speaking", completed: false },
            { id: `${dayId}-s3`, text: `Speaking P3: Trả lời phản xạ 4 câu hỏi thảo luận sâu với PEEL`, duration: "30p", skill: "Speaking", completed: false }
          ];
        } else if (dIdx === 2) {
          subtasks = [
            { id: `${dayId}-s1`, text: `Reading: Luyện dạng Multiple Choice & Matching Features bài Passage 3`, duration: "40p", skill: "Reading", completed: false },
            { id: `${dayId}-s2`, text: `Writing T2: Viết bài luận Problem-Solution / Advantage-Disadvantage`, duration: "50p", skill: "Writing T2", completed: false },
            { id: `${dayId}-s3`, text: `Writing T2: So sánh bài viết với bài mẫu Band 8.0+ của IELTS Liz`, duration: "30p", skill: "Writing T2", completed: false }
          ];
        } else if (dIdx === 3) {
          subtasks = [
            { id: `${dayId}-s1`, text: `Listening: Dictation chép chính tả 1 đoạn Section 4 nâng phản xạ từ khó`, duration: "35p", skill: "Listening", completed: false },
            { id: `${dayId}-s2`, text: `Speaking P3: Dùng các Discourse Markers tự nhiên (Well, having said that...)`, duration: "35p", skill: "Speaking", completed: false }
          ];
        } else if (dIdx === 4) {
          subtasks = [
            { id: `${dayId}-s1`, text: `Vocab SRS: Ôn 30 Flashcards từ vựng C1/C2 đến lịch hẹn`, duration: "30p", skill: "Vocab", completed: false },
            { id: `${dayId}-s2`, text: `Error Log: Ôn lại toàn bộ các bẫy Listening/Reading đã ghi chép`, duration: "30p", skill: "Review", completed: false }
          ];
        } else if (dIdx === 5) {
          subtasks = [
            { id: `${dayId}-s1`, text: `Full Test: Làm 1 bài Mock Test Listening + Reading + Writing (180p)`, duration: "180p", skill: "Mock Test", completed: false },
            { id: `${dayId}-s2`, text: `Analytics: Cập nhật điểm số vào biểu đồ tiến độ Recharts`, duration: "20p", skill: "Analytics", completed: false }
          ];
        } else {
          subtasks = [
            { id: `${dayId}-s1`, text: `Weekly Summary: Xem lại tổng kết tuần trên mục Báo Cáo Tổng Kết`, duration: "20p", skill: "Review", completed: false },
            { id: `${dayId}-s2`, text: `Listening Passive: Nghe tin tức BBC World Service giải trí`, duration: "30p", skill: "Listening", completed: false }
          ];
        }
      } else if (phase === 3) {
        if (dIdx === 0) {
          subtasks = [
            { id: `${dayId}-s1`, text: `Reading: Làm Full Reading Test 3 Passages (60p) áp lực thi máy IOT`, duration: "60p", skill: "Reading", completed: false },
            { id: `${dayId}-s2`, text: `Reading: Phân tích tận gốc câu sai, ghi lại bẫy vào Sổ tay Lỗi sai`, duration: "30p", skill: "Reading", completed: false }
          ];
        } else if (dIdx === 1) {
          subtasks = [
            { id: `${dayId}-s1`, text: `Listening: Làm Full Listening Test 40 câu (40p) áp lực thi thật`, duration: "40p", skill: "Listening", completed: false },
            { id: `${dayId}-s2`, text: `Speaking: Thu âm Full Speaking 3 Part (15p) giống như đối thoại giám khảo`, duration: "30p", skill: "Speaking", completed: false }
          ];
        } else if (dIdx === 2) {
          subtasks = [
            { id: `${dayId}-s1`, text: `Writing T1: Viết bài Task 1 trong đúng 20 phút chuẩn xác`, duration: "20p", skill: "Writing T1", completed: false },
            { id: `${dayId}-s2`, text: `Writing T2: Viết bài Task 2 trong đúng 40 phút đủ 250+ từ`, duration: "40p", skill: "Writing T2", completed: false },
            { id: `${dayId}-s3`, text: `Writing Self-Check: Dùng Checklist Band 7.5 tự chấm 4 tiêu chí`, duration: "20p", skill: "Writing T2", completed: false }
          ];
        } else if (dIdx === 3) {
          subtasks = [
            { id: `${dayId}-s1`, text: `Skill Focus: Tập trung kỹ năng còn xa mốc 7.5 nhất (Speaking/Writing)`, duration: "60p", skill: "Weakness Focus", completed: false }
          ];
        } else if (dIdx === 4) {
          subtasks = [
            { id: `${dayId}-s1`, text: `Vocab SRS: Ôn 50 Flashcards từ vựng C1/C2 đã tích lũy`, duration: "40p", skill: "Vocab", completed: false }
          ];
        } else if (dIdx === 5) {
          subtasks = [
            { id: `${dayId}-s1`, text: `Full Mock Test: Thi thử Full 4 Kỹ năng liên tục trong 1 ngày`, duration: "200p", skill: "Mock Test", completed: false },
            { id: `${dayId}-s2`, text: `Log: Nhập điểm số vào hệ thống & ăn mừng nếu đạt 7.5+!`, duration: "15p", skill: "Analytics", completed: false }
          ];
        } else {
          subtasks = [
            { id: `${dayId}-s1`, text: `Rest & Reflection: Nghỉ ngơi thư giãn, duy trì năng lượng tích cực`, duration: "30p", skill: "Rest", completed: false }
          ];
        }
      } else {
        // Phase 4: Final Exam Week (Week 32)
        if (dIdx === 0 || dIdx === 1 || dIdx === 2) {
          subtasks = [
            { id: `${dayId}-s1`, text: `Review: Ôn lại toàn bộ Sổ Tay Từ Vựng C1 & Lỗi Sai Thường Gặp`, duration: "40p", skill: "Vocab", completed: false },
            { id: `${dayId}-s2`, text: `Listening/Reading: Làm 1 bài test nhẹ nhàng duy trì cảm giác đề`, duration: "40p", skill: "Practice", completed: false }
          ];
        } else if (dIdx === 3 || dIdx === 4) {
          subtasks = [
            { id: `${dayId}-s1`, text: `Checklist: Đọc lại Checklist Tiêu Chí Chấm Điểm Band 7.5`, duration: "30p", skill: "Checklist", completed: false },
            { id: `${dayId}-s2`, text: `Prep: Chuẩn bị Căn cước công dân / Hộ chiếu & phiếu dự thi`, duration: "20p", skill: "Admin", completed: false }
          ];
        } else {
          subtasks = [
            { id: `${dayId}-s1`, text: `Exam Day: Tự tin bước vào phòng thi & chinh phục mốc 7.5 Overall! 🎓`, duration: "240p", skill: "Official Exam", completed: false }
          ];
        }
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
        site: dIdx === 5 ? "IELTS Online Tests" : "IELTS Online Tests / IELTS Liz",
        url: "https://ieltsonlinetests.com",
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
