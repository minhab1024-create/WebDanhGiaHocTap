// ╔══════════════════════════════════════════════════════════════╗
// ║         FILE QUẢN LÝ ĐỀ THI'S – data-files.js              ║
// ║                                                              ║
// ║  1. Bỏ file Word / PDF vào thư mục  hwfiles/               ║
// ║  2. Thêm thông tin file vào danh sách bên dưới             ║
// ║  3. Lưu file → trang web tự cập nhật, không cần sửa HTML  ║
// ╚══════════════════════════════════════════════════════════════╝

const HW_FILES = [

  // ── CÁCH THÊM FILE MỚI ──────────────────────────────────────
  //
  // file  : Tên file chính xác trong thư mục hwfiles/
  //         (phân biệt hoa thường, gồm cả đuôi .pdf / .docx)
  // name  : Tên hiển thị trên web (có thể đặt tùy ý)
  // size  : Dung lượng để hiển thị, vd: "1.2 MB" (tuỳ chọn, để "" nếu không cần)
  //
  // Các đuôi file được hỗ trợ XEM TRƯỚC:
  //   .pdf   → nhúng trực tiếp trong trang
  //   .docx  → xem qua Google Docs Viewer (cần internet)
  // Các đuôi còn lại chỉ có nút Tải xuống
  // ────────────────────────────────────────────────────────────

  {
    file: "de-cuong-vat-ly-11.pdf",
    name: "Đề cương ôn tập Vật Lý 11 - HK2",
    size: "",
  },

  // {
  //   file: "bai-tap-toan-chuong3.docx",
  //   name: "Bài tập Toán chương 3",
  //   size: "450 KB",
  // },

  // {
  //   file: "de-thi-hoa-hk2.pdf",
  //   name: "Đề thi Hóa học HK2",
  //   size: "800 KB",
  // },

  // ── THÊM FILE MỚI Ở ĐÂY ↑ ──────────────────────────────────
];
