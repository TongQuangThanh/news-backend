const sources = [
  {
    code: 'vnexpress',
    name: 'VNExpress',
    logo: './logo/vnexpress.png',
    child: [
      { code: 0, group: [0], name: 'Trang chủ', link: 'https://vnexpress.net/rss/tin-moi-nhat.rss' },
      { code: 1, group: [23], name: 'Tin xem nhiều', link: 'https://vnexpress.net/rss/tin-xem-nhieu.rss' },
      { code: 2, group: [4], name: 'Thế giới', link: 'https://vnexpress.net/rss/the-gioi.rss' },
      { code: 3, group: [9], name: 'Thời sự', link: 'https://vnexpress.net/rss/thoi-su.rss' },
      { code: 4, group: [4], name: 'Kinh doanh', link: 'https://vnexpress.net/rss/kinh-doanh.rss' },
      { code: 5, group: [4], name: 'Startup', link: 'https://vnexpress.net/rss/startup.rss' },
      { code: 6, group: [10], name: 'Giải trí', link: 'https://vnexpress.net/rss/giai-tri.rss' },
      { code: 7, group: [11], name: 'Thể thao', link: 'https://vnexpress.net/rss/the-thao.rss' },
      { code: 8, group: [5], name: 'Pháp luật', link: 'https://vnexpress.net/rss/phap-luat.rss' },
      { code: 9, group: [2], name: 'Giáo dục', link: 'https://vnexpress.net/rss/giao-duc.rss' },
      { code: 11, group: [23], name: 'Tin nổi bật', link: 'https://vnexpress.net/rss/tin-noi-bat.rss' },
      { code: 12, group: [7], name: 'Sức khỏe', link: 'https://vnexpress.net/rss/suc-khoe.rss' },
      { code: 13, group: [12], name: 'Đời sống', link: 'https://vnexpress.net/rss/gia-dinh.rss' },
      { code: 14, group: [8], name: 'Du lịch', link: 'https://vnexpress.net/rss/du-lich.rss' },
      { code: 15, group: [1], name: 'Khoa học', link: 'https://vnexpress.net/rss/khoa-hoc.rss' },
      { code: 16, group: [14], name: 'Số hóa', link: 'https://vnexpress.net/rss/so-hoa.rss' },
      { code: 17, group: [15], name: 'Xe', link: 'https://vnexpress.net/rss/oto-xe-may.rss' },
      { code: 18, group: [24], name: 'Ý kiến', link: 'https://vnexpress.net/rss/y-kien.rss' },
      { code: 19, group: [24], name: 'Tâm sự', link: 'https://vnexpress.net/rss/tam-su.rss' },
      { code: 20, group: [13], name: 'Cười', link: 'https://vnexpress.net/rss/cuoi.rss' }
    ]
  },
  {
    code: 'tuoitre',
    name: 'Tuổi trẻ',
    logo: './logo/tuoitre.png',
    child: [
      { code: 0, group: [0], name: 'Trang chủ', link: 'https://tuoitre.vn/rss/tin-moi-nhat.rss' },
      { code: 1, group: [9], name: 'Thời sự', link: 'https://tuoitre.vn/rss/thoi-su.rss' },
      { code: 2, group: [4], name: 'Thế giới', link: 'https://tuoitre.vn/rss/the-gioi.rss' },
      { code: 3, group: [5], name: 'Pháp luật', link: 'https://tuoitre.vn/rss/phap-luat.rss' },
      { code: 4, group: [3], name: 'Kinh doanh', link: 'https://tuoitre.vn/rss/kinh-doanh.rss' },
      { code: 5, group: [8], name: 'Du lịch', link: 'https://tuoitre.vn/rss/du-lich.rss' },
      { code: 6, group: [14], name: 'Công nghệ', link: 'https://tuoitre.vn/rss/nhip-song-so.rss' },
      { code: 7, group: [15], name: 'Xe', link: 'https://tuoitre.vn/rss/xe.rss' },
      { code: 8, group: [12], name: 'Nhịp sống trẻ', link: 'https://tuoitre.vn/rss/nhip-song-tre.rss' },
      { code: 9, group: [6], name: 'Văn hóa', link: 'https://tuoitre.vn/rss/van-hoa.rss' },
      { code: 10, group: [10], name: 'Giải trí', link: 'https://tuoitre.vn/rss/giai-tri.rss' },
      { code: 11, group: [11], name: 'Thể thao', link: 'https://tuoitre.vn/rss/the-thao.rss' },
      { code: 12, group: [2], name: 'Giáo dục', link: 'https://tuoitre.vn/rss/giao-duc.rss' },
      { code: 13, group: [1], name: 'Khoa học', link: 'https://tuoitre.vn/rss/khoa-hoc.rss' },
      { code: 14, group: [7], name: 'Sức khỏe', link: 'https://tuoitre.vn/rss/suc-khoe.rss' },
      { code: 21, group: [23], name: 'Giả thật', link: 'https://tuoitre.vn/rss/gia-that.rss' },
      { code: 15, group: [13], name: 'Thư giãn', link: 'https://tuoitre.vn/rss/thu-gian.rss' },
      { code: 16, group: [24], name: 'Bạn đọc', link: 'https://tuoitre.vn/rss/ban-doc-lam-bao.rss' }
    ]
  },
  // {
  //   code: 'thanhnien',   // incorrect header check
  //   name: 'Thanh niên',
  //   logo: './logo/thanhnien.png',
  //   child: [
  //     { code: 0, group: [0], name: 'Trang chủ', link: 'https://thanhnien.vn/rss/home.rss' },
  //     { code: 1, group: [25], name: 'Video', link: 'https://thanhnien.vn/rss/video-316.rss' },
  //     { code: 2, group: [9], name: 'Thời sự', link: 'https://thanhnien.vn/rss/thoi-su-4.rss' },
  //     { code: 3, group: [4], name: 'Thế giới', link: 'https://thanhnien.vn/rss/the-gioi-66.rss' },
  //     { code: 4, group: [3], name: 'Kinh doanh', link: 'https://thanhnien.vn/rss/tai-chinh-kinh-doanh-49.rss' },
  //     { code: 5, group: [16], name: 'Game', link: 'https://thanhnien.vn/rss/game-315.rss' },
  //     { code: 6, group: [14], name: 'Công nghệ', link: 'https://thanhnien.vn/rss/cong-nghe-12.rss' },
  //     { code: 7, group: [12], name: 'Giới trẻ', link: 'https://thanhnien.vn/rss/gioi-tre-69.rss' },
  //     { code: 8, group: [12], name: 'Đời sống', link: 'https://thanhnien.vn/rss/doi-song-17.rss' },
  //     { code: 9, group: [6], name: 'Văn hóa', link: 'https://thanhnien.vn/rss/van-hoa-93.rss' },
  //     { code: 10, group: [10], name: 'Giải trí', link: 'https://thanhnien.vn/rss/giai-tri-285.rss' },
  //     { code: 11, group: [11], name: 'Thể thao', link: 'https://thanhnien.vn/rss/the-thao-318.rss' },
  //     { code: 12, group: [2], name: 'Giáo dục', link: 'https://thanhnien.vn/rss/giao-duc-26.rss' },
  //     { code: 13, group: [15], name: 'Xe', link: 'https://thanhnien.vn/rss/xe-317.rss' },
  //     { code: 14, group: [7], name: 'Sức khỏe', link: 'https://thanhnien.vn/rss/suc-khoe-65.rss' },
  //     { code: 15, group: [24], name: 'Tôi viết', link: 'https://thanhnien.vn/rss/toi-viet-89.rss' },
  //     { code: 16, group: [17], name: 'Việc làm', link: 'https://thanhnien.vn/rss/viec-lam-558.rss' },
  //     { code: 17, group: [18], name: 'Thời trang', link: 'https://thanhnien.vn/rss/thoi-trang-tre-319.rss' },
  //     { code: 18, group: [24], name: 'Bạn đọc', link: 'https://thanhnien.vn/rss/ban-doc-190.rss' },
  //     { code: 19, group: [23], name: 'Bạn cần biết', link: 'https://thanhnien.vn/rss/ban-can-biet-153.rss' },
  //   ]
  // },
  {
    code: 'vietnamnet',
    name: 'Vietnamnet',
    logo: './logo/vietnamnet.png',
    child: [
      { code: 0, group: [0], name: 'Trang chủ', link: 'https://vietnamnet.vn/rss/tin-moi-nhat.rss' },
      { code: 1, group: [23], name: 'Talkshow', link: 'https://vietnamnet.vn/rss/talkshow.rss' },
      { code: 2, group: [9], name: 'Thời sự', link: 'https://vietnamnet.vn/rss/thoi-su.rss' },
      { code: 3, group: [4], name: 'Thế giới', link: 'https://vietnamnet.vn/rss/the-gioi.rss' },
      { code: 4, group: [3], name: 'Kinh doanh', link: 'https://vietnamnet.vn/rss/kinh-doanh.rss' },
      { code: 5, group: [23], name: 'Tuần Việt Nam', link: 'https://vietnamnet.vn/rss/tuanvietnam.rss' },
      { code: 6, group: [14], name: 'Công nghệ', link: 'https://vietnamnet.vn/rss/cong-nghe.rss' },
      { code: 7, group: [3], name: 'Bất động sản', link: 'https://vietnamnet.vn/rss/bat-dong-san.rss' },
      { code: 8, group: [12], name: 'Đời sống', link: 'https://vietnamnet.vn/rss/doi-song.rss' },
      { code: 9, group: [6], name: 'Pháp luật', link: 'https://vietnamnet.vn/rss/phap-luat.rss' },
      { code: 10, group: [10], name: 'Giải trí', link: 'https://vietnamnet.vn/rss/giai-tri.rss' },
      { code: 11, group: [11], name: 'Thể thao', link: 'https://vietnamnet.vn/rss/the-thao.rss' },
      { code: 12, group: [2], name: 'Giáo dục', link: 'https://vietnamnet.vn/rss/giao-duc.rss' },
      { code: 13, group: [15], name: 'Xe', link: 'https://vietnamnet.vn/rss/oto-xe-may.rss' },
      { code: 14, group: [7], name: 'Sức khỏe', link: 'https://vietnamnet.vn/rss/suc-khoe.rss' },
      { code: 15, group: [19], name: 'Chính trị', link: 'https://vietnamnet.vn/rss/thoi-su-chinh-tri.rss' },
      { code: 16, group: [23], name: 'Góc nhìn thẳng', link: 'https://vietnamnet.vn/rss/goc-nhin-thang.rss' },
      { code: 17, group: [23], name: 'Tin mới nóng', link: 'https://vietnamnet.vn/rss/tin-moi-nong.rss' },
      { code: 18, group: [24], name: 'Bạn đọc', link: 'https://vietnamnet.vn/rss/ban-doc.rss' }
    ]
  },
  {
    code: 'laodong',
    name: 'Lao Động',
    logo: './logo/laodong.png',
    child: [
      { code: 0, group: [0], name: 'Trang chủ', link: 'https://nld.com.vn/tin-moi-nhat.rss' },
      { code: 1, group: [23], name: 'Thời sự', link: 'https://nld.com.vn/thoi-su.rss' },
      { code: 2, group: [4], name: 'Quốc tế', link: 'https://nld.com.vn/thoi-su-quoc-te.rss' },
      { code: 3, group: [26], name: 'Công đoàn', link: 'https://nld.com.vn/cong-doan.rss' },
      { code: 4, group: [24], name: 'Bạn đọc', link: 'https://nld.com.vn/ban-doc.rss' },
      { code: 5, group: [3], name: 'Kinh tế', link: 'https://nld.com.vn/kinh-te.rss' },
      { code: 6, group: [7], name: 'Sức khỏe', link: 'https://nld.com.vn/suc-khoe.rss' },
      { code: 7, group: [2], name: 'Giáo dục', link: 'https://nld.com.vn/giao-duc-khoa-hoc.rss' },
      { code: 8, group: [6], name: 'Pháp luật', link: 'https://nld.com.vn/phap-luat.rss' },
      { code: 9, group: [10], name: 'Giải trí', link: 'https://nld.com.vn/giai-tri.rss' },
      { code: 10, group: [11], name: 'Thể thao', link: 'https://nld.com.vn/the-thao.rss' },
      { code: 11, group: [14], name: 'Công nghệ', link: 'https://nld.com.vn/cong-nghe.rss' },
      { code: 12, group: [8], name: 'Điểm đến', link: 'https://nld.com.vn/diem-den-hap-dan.rss' },
      { code: 13, group: [26], name: 'Lý tưởng sống', link: 'https://nld.com.vn/ly-tuong-song.rss' },
      { code: 14, group: [23], name: 'Nói thẳng', link: 'https://nld.com.vn/noi-thang.rss' },
      { code: 15, group: [23], name: 'Tin độc quyền', link: 'https://nld.com.vn/tin-doc-quyen.rss' },
      { code: 16, group: [3], name: 'Địa ốc', link: 'https://nld.com.vn/dia-oc.rss' },
      { code: 17, group: [26], name: 'Chuyên trang phụ nữ', link: 'https://nld.com.vn/chuyen-trang-phu-nu.rss' },
      { code: 18, group: [3], name: 'Thị trường', link: 'https://nld.com.vn/thi-truong.rss' },
    ]
  },
  // {
  //   code: 'dantri',  // no link
  //   name: 'Dân Trí',
  //   logo: './logo/dantri.png',
  //   child: [
  //     { code: 0, group: [0], name: 'Trang chủ', link: 'http://dantri.com.vn/trangchu.rss' },
  //     { code: 1, group: [26], name: 'Xã hội', link: 'http://dantri.com.vn/xa-hoi.rss' },
  //     { code: 2, group: [10], name: 'Giải trí', link: 'http://dantri.com.vn/giai-tri.rss' },
  //     { code: 3, group: [4], name: 'Thế giới', link: 'http://dantri.com.vn/the-gioi.rss' },
  //     { code: 4, group: [3], name: 'Kinh doanh', link: 'http://dantri.com.vn/kinh-doanh.rss' },
  //     { code: 5, group: [14], name: 'Sức mạnh số', link: 'http://dantri.com.vn/suc-manh-so.rss' },
  //     { code: 6, group: [12], name: 'Tình yêu - giới tính', link: 'http://dantri.com.vn/tinh-yeu-gioi-tinh.rss' },
  //     { code: 7, group: [13], name: 'Chuyện lạ', link: 'http://dantri.com.vn/chuyen-la.rss' },
  //     { code: 8, group: [12], name: 'Nhịp sóng trẻ', link: 'http://dantri.com.vn/nhip-song-tre.rss' },
  //     { code: 9, group: [26], name: 'Tấm lòng nhân ái', link: 'http://dantri.com.vn/tam-long-nhan-ai.rss' },
  //     { code: 10, group: [2], name: 'Giáo dục', link: 'http://dantri.com.vn/giao-duc-khuyen-hoc.rss' },
  //     { code: 11, group: [6], name: 'Pháp luật', link: 'http://dantri.com.vn/phap-luat.rss' },
  //     { code: 12, group: [24], name: 'Bạn đọc', link: 'http://dantri.com.vn/ban-doc.rss' },
  //     { code: 13, group: [11], name: 'Thể thao', link: 'http://dantri.com.vn/the-thao.rss' },
  //     { code: 14, group: [26], name: 'Diễn đàn', link: 'http://dantri.com.vn/dien-dan.rss' },
  //     { code: 15, group: [2], name: 'Tuyển sinh', link: 'http://dantri.com.vn/tuyen-sinh.rss' },
  //     { code: 16, group: [15], name: 'Ô tô - Xe máy', link: 'http://dantri.com.vn/o-to-xe-may.rss' },
  //     { code: 17, group: [26], name: 'Blog', link: 'http://dantri.com.vn/blog.rss' },
  //     { code: 18, group: [8], name: 'Du lịch', link: 'http://dantri.com.vn/du-lich.rss' },
  //     { code: 19, group: [7], name: 'Sức khỏe', link: 'http://dantri.com.vn/suc-khoe.rss' },
  //     { code: 20, group: [2], name: 'Du học', link: 'http://dantri.com.vn/du-hoc.rss' },
  //     { code: 21, group: [12], name: 'Đời sống', link: 'http://dantri.com.vn/doi-song.rss' },
  //     { code: 22, group: [1, 14], name: 'Khoa học công nghệ', link: 'http://dantri.com.vn/khoa-hoc-cong-nghe.rss' },
  //     { code: 23, group: [17], name: 'Việc làm', link: 'http://dantri.com.vn/viec-lam.rss' },
  //     { code: 24, group: [6], name: 'Văn hóa', link: 'http://dantri.com.vn/van-hoa.rss' },
  //   ]
  // },
  {
    code: 'soha',
    name: 'SOHA',
    logo: './logo/soha.png',
    child: [
      { code: 0, group: [0], name: 'Trang chủ', link: 'https://soha.vn/thoi-su.rss' },
      { code: 1, group: [10], name: 'Giải trí', link: 'https://soha.vn/giai-tri.rss' },
      { code: 2, group: [26], name: 'Hành trình từ trái tim', link: 'https://soha.vn/hanh-trinh-tu-trai-tim.rss' },
      { code: 3, group: [6], name: 'Pháp luật', link: 'https://soha.vn/phap-luat.rss' },
      { code: 4, group: [3], name: 'Kinh doanh', link: 'https://soha.vn/kinh-doanh.rss' },
      { code: 5, group: [4], name: 'Quốc tế', link: 'https://soha.vn/quoc-te.rss' },
      { code: 6, group: [7], name: 'Sống khỏe', link: 'https://soha.vn/song-khoe.rss' },
      { code: 7, group: [21], name: 'Quân sự', link: 'https://soha.vn/quan-su.rss' },
      { code: 8, group: [13], name: 'Cư dân mạng', link: 'https://soha.vn/cu-dan-mang.rss' },
      { code: 9, group: [8], name: 'Khám phá', link: 'https://soha.vn/kham-pha.rss' },
      { code: 10, group: [23], name: 'Infographic', link: 'https://soha.vn/infographic.rss' },
      { code: 11, group: [12], name: 'Đời sống', link: 'https://soha.vn/doi-song.rss' },
      { code: 12, group: [14], name: 'Công nghệ', link: 'https://soha.vn/cong-nghe.rss' },
      { code: 13, group: [11], name: 'Thể thao', link: 'https://soha.vn/the-thao.rss' }
    ]
  },
  {
    code: '24h',
    name: '24H',
    logo: './logo/24h.png',
    child: [
      { code: 0, group: [0], name: 'Trang chủ', link: 'https://www.24h.com.vn/upload/rss/trangchu24h.rss' },
      { code: 1, group: [23], name: 'Tin tức trong ngày', link: 'https://www.24h.com.vn/upload/rss/tintuctrongngay.rss' },
      { code: 2, group: [11], name: 'Bóng đá', link: 'https://www.24h.com.vn/upload/rss/bongda.rss' },
      { code: 3, group: [20], name: 'An ninh - hình sự', link: 'https://www.24h.com.vn/upload/rss/anninhhinhsu.rss' },
      { code: 4, group: [18], name: 'Thời trang', link: 'https://www.24h.com.vn/upload/rss/thoitrang.rss' },
      { code: 5, group: [14], name: 'Hi-tech', link: 'https://www.24h.com.vn/upload/rss/thoitranghitech.rss' },
      { code: 6, group: [3], name: 'Tài chính - bất động sản', link: 'https://www.24h.com.vn/upload/rss/taichinhbatdongsan.rss' },
      { code: 7, group: [22], name: 'Ẩm thực', link: 'https://www.24h.com.vn/upload/rss/amthuc.rss' },
      { code: 8, group: [6], name: 'Làm đẹp', link: 'https://www.24h.com.vn/upload/rss/lamdep.rss' },
      { code: 9, group: [10], name: 'Phim', link: 'https://www.24h.com.vn/upload/rss/phim.rss' },
      { code: 10, group: [2], name: 'Giáo dục', link: 'https://www.24h.com.vn/upload/rss/giaoducduhoc.rss' },
      { code: 11, group: [12], name: 'Bạn trẻ - cuộc sống', link: 'https://www.24h.com.vn/upload/rss/bantrecuocsong.rss' },
      { code: 12, group: [10], name: 'Ca nhạc - MTV', link: 'https://www.24h.com.vn/upload/rss/canhacmtv.rss' },
      { code: 13, group: [11], name: 'Thể thao', link: 'https://www.24h.com.vn/upload/rss/thethao.rss' },
      { code: 14, group: [13], name: 'Phi thường - kỳ quặc', link: 'https://www.24h.com.vn/upload/rss/phithuongkyquac.rss' },
      { code: 15, group: [14], name: 'Công nghệ thông tin', link: 'https://www.24h.com.vn/upload/rss/congnghethongtin.rss' },
      { code: 16, group: [15], name: 'Ô tô', link: 'https://www.24h.com.vn/upload/rss/oto.rss' },
      { code: 17, group: [3], name: 'Thị trường - Tiêu dùng', link: 'https://www.24h.com.vn/upload/rss/thitruongtieudung.rss' },
      { code: 18, group: [8], name: 'Du lịch', link: 'https://www.24h.com.vn/upload/rss/dulich.rss' },
      { code: 19, group: [7], name: 'Sức khỏe đời sống', link: 'https://www.24h.com.vn/upload/rss/suckhoedoisong.rss' },
      { code: 20, group: [13], name: 'Cười 24h', link: 'https://www.24h.com.vn/upload/rss/cuoi24h.rss' },
    ]
  },
  {
    code: 'trainghiemso',
    name: 'Trải Nghiệm Số',
    logo: './logo/trainghiemso.png',
    child: [
      { code: 0, group: [0, 14], name: 'Trang chủ', link: 'https://trainghiemso.vn/feed/' },
    ]
  },
  // {
  //   code: 'techrum',   // Refused to display 'https://www.techrum.vn/' in a frame because it set 'X-Frame-Options' to 'sameorigin'.
  //   name: 'Techrum',
  //   logo: './logo/techrum.png',
  //   child: [
  //     { code: 0, group: [0, 14], name: 'Trang chủ', link: 'http://www.techrum.vn/forums/-/index.rss' }
  //   ]
  // },
  {
    code: 'ictnews',
    name: 'ICTNews',
    logo: './logo/ictnews.png',
    child: [
      { code: 0, group: [0, 14], name: 'Trang chủ', link: 'https://ictnews.vietnamnet.vn/rss/tin-nong-ict.rss' },
      { code: 1, group: [14], name: 'Cuộc sống số', link: 'https://ictnews.vietnamnet.vn/rss/cuoc-song-so.rss' },
      { code: 2, group: [14], name: 'Viễn thông', link: 'https://ictnews.vietnamnet.vn/rss/vien-thong.rss' },
      { code: 3, group: [14], name: 'Sản phẩm số', link: 'https://ictnews.vietnamnet.vn/rss/san-pham-so.rss' },
      { code: 4, group: [16], name: 'Game', link: 'https://ictnews.vietnamnet.vn/rss/game.rss' },
      { code: 5, group: [3], name: 'Khởi nghiệp', link: 'https://ictnews.vietnamnet.vn/rss/khoi-nghiep.rss' },
      { code: 6, group: [14], name: 'Multimedia', link: 'https://ictnews.vietnamnet.vn/rss/multimedia.rss' },
      { code: 7, group: [14], name: 'Khám phá', link: 'https://ictnews.vietnamnet.vn/rss/kham-pha.rss' }
    ]
  },
  {
    code: 'infonet',
    name: 'Infonet',
    logo: './logo/infonet.png',
    child: [
      { code: 0, group: [0, 12], name: 'Đời sống', link: 'https://infonet.vietnamnet.vn/rss/doi-song.rss' },
      { code: 1, group: [15], name: 'Phương tiện', link: 'https://infonet.vietnamnet.vn/rss/phuong-tien.rss' },
      { code: 2, group: [3], name: 'Thị trường', link: 'https://infonet.vietnamnet.vn/rss/thi-truong.rss' },
      { code: 3, group: [26], name: 'Gia đình', link: 'https://infonet.vietnamnet.vn/rss/gia-dinh.rss' },
      { code: 4, group: [12], name: 'Giới trẻ', link: 'https://infonet.vietnamnet.vn/rss/gioi-tre.rss' },
      { code: 5, group: [7], name: 'Khỏe đẹp', link: 'https://infonet.vietnamnet.vn/rss/khoe-dep.rss' },
      { code: 6, group: [13], name: 'Chuyện lạ', link: 'https://infonet.vietnamnet.vn/rss/chuyen-la.rss' },
      { code: 7, group: [21], name: 'Quân sự', link: 'https://infonet.vietnamnet.vn/rss/quan-su.rss' },
      { code: 8, group: [6], name: 'Văn hóa', link: 'https://infonet.vietnamnet.vn/rss/van-hoa.rss' },
    ]
  },
  {
    code: 'gamek',
    name: 'GameK',
    logo: './logo/gamek.png',
    child: [
      { code: 0, group: [0, 16], name: 'Trang chủ', link: 'http://gamek.vn/home.rss' }
    ]
  },
  // {
  //   code: 'game4v',    // Refused to display 'https://game4v.com/' in a frame because it set 'X-Frame-Options' to 'sameorigin'.
  //   name: 'Game4v',
  //   logo: './logo/game4v.png',
  //   child: [
  //     { code: 0, group: [0, 16], name: 'Trang chủ', link: 'http://game4v.com/feed' },
  //   ]
  // }
];

const groups = [
  { code: 'nogroup', id: 0, name: 'Mục Khác' },
  { code: 'khoahoc', id: 1, name: 'Khoa học' },
  { code: 'giaoduc', id: 2, name: 'Giáo dục' },
  { code: 'kinhdoanh', id: 3, name: 'Kinh doanh' },
  { code: 'thegioi', id: 4, name: 'Thế giới' },
  { code: 'phapluat', id: 5, name: 'Pháp luật' },
  { code: 'vanhoa', id: 6, name: 'Văn hóa' },
  { code: 'suckhoe', id: 7, name: 'Sức khỏe' },
  { code: 'dulich', id: 8, name: 'Du lịch' },
  { code: 'thoisu', id: 9, name: 'Thời sự' },
  { code: 'giaitri', id: 10, name: 'Giải trí' },
  { code: 'thethao', id: 11, name: 'Thể thao' },
  { code: 'doisong', id: 12, name: 'Đời sống' },
  { code: 'thugian', id: 13, name: 'Thư giãn' },
  { code: 'congnghe', id: 14, name: 'Công nghệ' },
  { code: 'xe', id: 15, name: 'Xe' },
  { code: 'game', id: 16, name: 'Game' },
  { code: 'vieclam', id: 17, name: 'Việc làm' },
  { code: 'thoitrang', id: 18, name: 'Thời trang' },
  { code: 'chinhtri', id: 19, name: 'Chính trị' },
  { code: 'anninh', id: 20, name: 'An ninh' },
  { code: 'quocphong', id: 21, name: 'Quốc phòng' },
  { code: 'amthuc', id: 22, name: 'Ẩm thực' },
  { code: 'tintuc', id: 23, name: 'Tin tức' },
  { code: 'bandoc', id: 24, name: 'Bạn đọc' },
  { code: 'video', id: 25, name: 'Video' },
  { code: 'xahoi', id: 26, name: 'Xã hội' }
];

module.exports = { sources, groups };
