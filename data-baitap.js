// ╔══════════════════════════════════════════════════════════╗
// ║           FILE QUẢN LÝ BÀI TẬP – data-baitap.js         ║
// ║  Chỉ cần sửa file này để thêm / xoá / cập nhật bài tập  ║
// ║  Không cần chạm vào file HTML chính                      ║
// ╚══════════════════════════════════════════════════════════╝

const BAITAP_LIST = [

  // ── CÁCH THÊM BÀI MỚI: copy một object {} bên dưới, điền thông tin ──
  //
  // title        : Tên hiển thị của bài tập
  // url          : Link Azota đầy đủ (vd: https://azota.vn/de-thi/XXXXX)
  // iframeTitle  : Tên file tài liệu (lấy từ thẻ title="" trong mã nhúng Azota)
  // subject      : Emoji môn học (📄 📐 🔬 📖 🧮 🌍 🎨 💻 ...)
  // status       : "online" = đang mở  |  "offline" = đã đóng
  // deadline     : Hạn nộp (vd: "25/03/2025")  hoặc "" nếu không có
  // teacher      : Tên giáo viên hoặc môn học

  {
    title:       "Đề cương ôn tập Vật Lý 11",
    url:         "https://azota.vn/de-thi/pq5vzy",
    iframeTitle: "ĐỀ CƯƠNG ÔN TẬP VẬT LÝ 11 GHK2",
    subject:     "📄",
    status:      "online",
    deadline:    "20/03/2025",
    teacher:     "GV Vật Lý",
  },
  {
    title:       "Đề cương ôn tập Sinh Học 11",
    url:         "https://azota.vn/de-thi/i7cqwm",
    iframeTitle: "ĐỀ CƯƠNG ÔN TẬP Sinh Học 11 GHK2",
    subject:     "📄",
    status:      "online",
    deadline:    "20/03/2025",
    teacher:     "GV Vật Lý",
  },

  // ── THÊM BÀI MỚI PHÍA DƯỚI ĐÂY ──────────────────────────────────────

  // {
  //   title:       "Bài kiểm tra Toán chương 3",
  //   url:         "https://azota.vn/de-thi/XXXXX",
  //   iframeTitle: "Bai kiem tra Toan chuong 3.docx",
  //   subject:     "📐",
  //   status:      "online",
  //   deadline:    "25/03/2025",
  //   teacher:     "GV Toán",
  // },

  // {
  //   title:       "Đề cương Hóa học HK2",
  //   url:         "https://azota.vn/de-thi/YYYYY",
  //   iframeTitle: "De cuong Hoa hoc HK2.docx",
  //   subject:     "🔬",
  //   status:      "offline",
  //   deadline:    "10/03/2025",
  //   teacher:     "GV Hóa",
  // },

  // ─────────────────────────────────────────────────────────────────────
];
