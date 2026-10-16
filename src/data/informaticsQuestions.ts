import { Question } from '../types/quiz';

export const INFORMATICS_QUESTIONS: Question[] = [
  // =========================================================================
  // BÀI 3: MỘT SỐ THIẾT BỊ MẠNG THÔNG DỤNG (Câu 1 - 12)
  // =========================================================================
  {
    id: 2001,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b3',
    sectionTitle: 'Bài 3: Một số thiết bị mạng thông dụng',
    category: 'informatics',
    chapter: 'Bài 3: Thiết bị mạng thông dụng',
    questionNumber: 1,
    questionText: 'Thiết bị nào sau đây khi nhận dữ liệu từ một cổng sẽ phát tán tín hiệu tới tất cả các cổng còn lại?',
    options: {
      A: 'Switch',
      B: 'Hub',
      C: 'Router',
      D: 'Modem'
    },
    correctAnswer: 'B',
    explanation: 'Hub là bộ chia tín hiệu hoạt động ở tầng vật lý, khi nhận dữ liệu từ một cổng sẽ phát tán (broadcast) tín hiệu tới tất cả các cổng còn lại, dễ gây xung đột tín hiệu.'
  },
  {
    id: 2002,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b3',
    sectionTitle: 'Bài 3: Một số thiết bị mạng thông dụng',
    category: 'informatics',
    chapter: 'Bài 3: Thiết bị mạng thông dụng',
    questionNumber: 2,
    questionText: 'Điểm khác biệt cơ bản về nguyên lí hoạt động giữa Switch và Hub trong mạng cục bộ là gì?',
    options: {
      A: 'Switch chỉ phát tín hiệu không dây, còn Hub chỉ dùng cho mạng có dây.',
      B: 'Switch thiết lập kênh truyền tạm thời giữa cổng gửi và cổng nhận, còn Hub phát tán dữ liệu ra tất cả các cổng.',
      C: 'Switch làm tăng xung đột tín hiệu nhiều hơn so với Hub.',
      D: 'Switch chuyển đổi tín hiệu tương tự sang tín hiệu số, còn Hub thì không.'
    },
    correctAnswer: 'B',
    explanation: 'Switch thông minh hơn Hub nhờ khả năng đọc địa chỉ MAC, thiết lập kênh truyền tạm thời giữa cổng gửi và cổng nhận chính xác, không phát tán tràn lan ra mọi cổng.'
  },
  {
    id: 2003,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b3',
    sectionTitle: 'Bài 3: Một số thiết bị mạng thông dụng',
    category: 'informatics',
    chapter: 'Bài 3: Thiết bị mạng thông dụng',
    questionNumber: 3,
    questionText: 'Trong mạng cục bộ (LAN), hiện tượng xung đột tín hiệu (collision) xảy ra khi nào?',
    options: {
      A: 'Khi cáp mạng bị đứt hoặc cổng kết nối bị hỏng.',
      B: 'Khi có quá nhiều thiết bị kết nối vào trạm thu phát Wi-Fi.',
      C: 'Khi nhiều máy tính cùng đồng thời gửi dữ liệu lên đường truyền chung làm tín hiệu bị hỏng.',
      D: 'Khi chuyển tiếp dữ liệu qua các router trên mạng Internet.'
    },
    correctAnswer: 'C',
    explanation: 'Hiện tượng xung đột tín hiệu (collision) xảy ra khi hai hoặc nhiều thiết bị cùng lúc phát tín hiệu lên một đường truyền vật lý chung, khiến các sóng tín hiệu va chạm và làm hỏng gói dữ liệu.'
  },
  {
    id: 2004,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b3',
    sectionTitle: 'Bài 3: Một số thiết bị mạng thông dụng',
    category: 'informatics',
    chapter: 'Bài 3: Thiết bị mạng thông dụng',
    questionNumber: 4,
    questionText: 'Khi muốn thiết lập một mạng LAN không dây đơn giản trong phòng học mà không cần đi dây cáp mạng phức tạp, thiết bị nào sau đây là lựa chọn chính?',
    options: {
      A: 'Bộ thu phát Wi-Fi (Wireless Access Point - WAP)',
      B: 'Modem quay số',
      C: 'Cáp mạng xoắn đôi UTP',
      D: 'Switch nhiều cổng'
    },
    correctAnswer: 'A',
    explanation: 'Điểm truy cập không dây WAP (Wireless Access Point) cho phép các thiết bị kết nối vào mạng cục bộ thông qua sóng vô tuyến (Wi-Fi) mà không cần dây mạng.'
  },
  {
    id: 2005,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b3',
    sectionTitle: 'Bài 3: Một số thiết bị mạng thông dụng',
    category: 'informatics',
    chapter: 'Bài 3: Thiết bị mạng thông dụng',
    questionNumber: 5,
    questionText: 'Chức năng dẫn đường cho dữ liệu khi truyền giữa các mạng LAN khác nhau qua Internet thuộc về thiết bị nào?',
    options: {
      A: 'Hub',
      B: 'Switch',
      C: 'Router',
      D: 'WAP'
    },
    correctAnswer: 'C',
    explanation: 'Router (Bộ định tuyến) có chức năng định tuyến, tìm đường đi tối ưu và chuyển tiếp các gói tin giữa các mạng máy tính khác nhau trên toàn cầu.'
  },
  {
    id: 2006,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b3',
    sectionTitle: 'Bài 3: Một số thiết bị mạng thông dụng',
    category: 'informatics',
    chapter: 'Bài 3: Thiết bị mạng thông dụng',
    questionNumber: 6,
    questionText: 'Router kết nối trực tiếp vào mạng cục bộ (LAN) thông qua loại cổng nào sau đây?',
    options: {
      A: 'Cổng USB',
      B: 'Cổng LAN',
      C: 'Cổng WAN',
      D: 'Cổng Console'
    },
    correctAnswer: 'B',
    explanation: 'Trên Router, các cổng LAN dùng để cắm dây mạng kết nối trực tiếp với các máy tính hoặc Switch trong mạng nội bộ.'
  },
  {
    id: 2007,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b3',
    sectionTitle: 'Bài 3: Một số thiết bị mạng thông dụng',
    category: 'informatics',
    chapter: 'Bài 3: Thiết bị mạng thông dụng',
    questionNumber: 7,
    questionText: 'Để kết nối router mạng gia đình với nhà cung cấp dịch vụ Internet, người ta cắm cáp mạng vào cổng nào trên router?',
    options: {
      A: 'Cổng LAN',
      B: 'Cổng WAN',
      C: 'Cổng nguồn',
      D: 'Cổng USB'
    },
    correctAnswer: 'B',
    explanation: 'Cổng WAN (Wide Area Network - thường có màu vàng hoặc xanh dương nổi bật) dùng để nối với Modem của nhà cung cấp dịch vụ Internet (ISP).'
  },
  {
    id: 2008,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b3',
    sectionTitle: 'Bài 3: Một số thiết bị mạng thông dụng',
    category: 'informatics',
    chapter: 'Bài 3: Thiết bị mạng thông dụng',
    questionNumber: 8,
    questionText: 'Thiết bị mạng có chức năng chuyển đổi giữa tín hiệu số (digital) và tín hiệu tương tự (analog) được gọi là gì?',
    options: {
      A: 'Switch',
      B: 'Modem',
      C: 'Hub',
      D: 'Access Point'
    },
    correctAnswer: 'B',
    explanation: 'Modem thực hiện chức năng biến đổi qua lại giữa tín hiệu số (digital) của máy tính và tín hiệu tương tự (analog) trên đường truyền viễn thông.'
  },
  {
    id: 2009,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b3',
    sectionTitle: 'Bài 3: Một số thiết bị mạng thông dụng',
    category: 'informatics',
    chapter: 'Bài 3: Thiết bị mạng thông dụng',
    questionNumber: 9,
    questionText: 'Loại modem nào sử dụng khe cắm thẻ SIM để truy cập Internet thông qua mạng di động?',
    options: {
      A: 'Modem quay số (Dial-up)',
      B: 'Modem GSM',
      C: 'Modem ADSL',
      D: 'Modem quang'
    },
    correctAnswer: 'B',
    explanation: 'Modem GSM (hay modem 3G/4G/5G) sử dụng khe cắm thẻ SIM di động để nhận sóng và chuyển đổi kết nối Internet cho các thiết bị.'
  },
  {
    id: 2010,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b3',
    sectionTitle: 'Bài 3: Một số thiết bị mạng thông dụng',
    category: 'informatics',
    chapter: 'Bài 3: Thiết bị mạng thông dụng',
    questionNumber: 10,
    questionText: 'Cáp mạng thông dụng trong các mạng LAN gia đình và trường học hiện nay là cáp UTP có 4 đôi dây xoắn sử dụng chuẩn đầu cắm nào?',
    options: {
      A: 'Đầu cắm USB Type-C',
      B: 'Đầu cắm VGA',
      C: 'Đầu cắm RJ45',
      D: 'Đầu cắm HDMI'
    },
    correctAnswer: 'C',
    explanation: 'Đầu cắm RJ45 gồm 8 chân tiếp xúc bằng đồng là chuẩn đầu nối tiêu chuẩn cho cáp mạng xoắn đôi UTP trong mạng Ethernet LAN.'
  },
  {
    id: 2011,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b3',
    sectionTitle: 'Bài 3: Một số thiết bị mạng thông dụng',
    category: 'informatics',
    chapter: 'Bài 3: Thiết bị mạng thông dụng',
    questionNumber: 11,
    questionText: 'Khi tìm hiểu về bộ chia tín hiệu (Hub) và bộ chuyển mạch (Switch):\n(a) Hub truyền dữ liệu trực tiếp từ cổng gửi đến chính xác cổng nhận tương ứng.\n(b) Switch giúp giảm thiểu hiện tượng xung đột tín hiệu so với Hub.\n(c) Mạng có hàng trăm máy tính nên dùng Switch nhiều tầng kết hợp thay vì chỉ dùng Hub.\n(d) Hub và Switch là các thiết bị có khả năng chuyển đổi tín hiệu tương tự sang tín hiệu số.\nNhững nhận định ĐÚNG theo đề cương ôn tập là:',
    options: {
      A: '(a) và (d)',
      B: '(b) và (c)',
      C: '(a), (b) và (c)',
      D: 'Cả 4 nhận định'
    },
    correctAnswer: 'B',
    explanation: 'Theo đề cương ôn tập: (b) và (c) là nhận định đúng. (a) sai vì Hub phát tán ra tất cả các cổng chứ không gửi chính xác; (d) sai vì việc chuyển đổi tín hiệu tương tự sang số là chức năng của Modem.'
  },
  {
    id: 2012,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b3',
    sectionTitle: 'Bài 3: Một số thiết bị mạng thông dụng',
    category: 'informatics',
    chapter: 'Bài 3: Thiết bị mạng thông dụng',
    questionNumber: 12,
    questionText: 'Khi nói về Router và Modem trong hệ thống mạng máy tính:\n(a) Router có chức năng định tuyến, chọn đường thích hợp để truyền gói dữ liệu đến đích.\n(b) Cổng WAN trên Router dùng để kết nối trực tiếp với máy in trong mạng LAN gia đình.\n(c) Modem thực hiện chức năng điều chế và giải điều chế tín hiệu.\n(d) Tên gọi Modem bắt nguồn từ hai từ tiếng Anh là Modulation và Demodulation.\nNhững nhận định ĐÚNG theo đề cương ôn tập là:',
    options: {
      A: '(a), (c) và (d)',
      B: '(a) và (b)',
      C: '(b) và (c)',
      D: 'Cả 4 nhận định'
    },
    correctAnswer: 'A',
    explanation: 'Theo đề cương ôn tập: (a), (c), (d) là đúng. (b) sai vì cổng WAN dùng để kết nối với nhà cung cấp dịch vụ Internet ISP, không phải cắm máy in nội bộ.'
  },

  // =========================================================================
  // BÀI 4: GIAO THỨC MẠNG (Câu 13 - 24)
  // =========================================================================
  {
    id: 2013,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b4',
    sectionTitle: 'Bài 4: Giao thức mạng',
    category: 'informatics',
    chapter: 'Bài 4: Giao thức mạng',
    questionNumber: 1,
    questionText: 'Giao thức mạng (network protocol) được hiểu là gì?',
    options: {
      A: 'Là phần mềm dùng để diệt virus và bảo vệ máy tính khi duyệt web.',
      B: 'Là tập hợp các quy định về cách thức giao tiếp để truyền dữ liệu giữa các đối tượng tham gia mạng.',
      C: 'Là thiết bị phần cứng hỗ trợ chia sẻ dữ liệu trong mạng cục bộ.',
      D: 'Là cáp truyền dẫn tín hiệu quang tốc độ cao.'
    },
    correctAnswer: 'B',
    explanation: 'Giao thức mạng là tập hợp các quy tắc chuẩn mực quy định cấu trúc gói tin, phương thức truyền, kiểm tra lỗi và đồng bộ hóa truyền thông giữa các thiết bị mạng.'
  },
  {
    id: 2014,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b4',
    sectionTitle: 'Bài 4: Giao thức mạng',
    category: 'informatics',
    chapter: 'Bài 4: Giao thức mạng',
    questionNumber: 2,
    questionText: 'Internet là mạng thông tin toàn cầu hoạt động dựa trên bộ giao thức truyền thông cốt lõi nào sau đây?',
    options: {
      A: 'Bộ giao thức TCP/IP',
      B: 'Giao thức SMTP',
      C: 'Giao thức POP3',
      D: 'Giao thức Ethernet'
    },
    correctAnswer: 'A',
    explanation: 'TCP/IP (Transmission Control Protocol / Internet Protocol) là bộ giao thức nền tảng và cốt lõi nhất chi phối toàn bộ hoạt động của mạng Internet toàn cầu.'
  },
  {
    id: 2015,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b4',
    sectionTitle: 'Bài 4: Giao thức mạng',
    category: 'informatics',
    chapter: 'Bài 4: Giao thức mạng',
    questionNumber: 3,
    questionText: 'Địa chỉ phần cứng gắn cố định với mỗi thiết bị mạng và không thay đổi được gọi là gì?',
    options: {
      A: 'Địa chỉ IP',
      B: 'Địa chỉ URL',
      C: 'Địa chỉ MAC',
      D: 'Địa chỉ Email'
    },
    correctAnswer: 'C',
    explanation: 'Địa chỉ MAC (Media Access Control) là địa chỉ vật lý 48 bit (6 byte) được nhà sản xuất ghi cố định vào chip card mạng của thiết bị.'
  },
  {
    id: 2016,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b4',
    sectionTitle: 'Bài 4: Giao thức mạng',
    category: 'informatics',
    chapter: 'Bài 4: Giao thức mạng',
    questionNumber: 4,
    questionText: 'Địa chỉ IPv4 được cấu tạo gồm bao nhiêu byte?',
    options: {
      A: '2 byte',
      B: '4 byte',
      C: '6 byte',
      D: '16 byte'
    },
    correctAnswer: 'B',
    explanation: 'Địa chỉ IPv4 có độ dài 32 bit, tương đương đúng 4 byte (octet), mỗi byte nhận giá trị từ 0 đến 255.'
  },
  {
    id: 2017,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b4',
    sectionTitle: 'Bài 4: Giao thức mạng',
    category: 'informatics',
    chapter: 'Bài 4: Giao thức mạng',
    questionNumber: 5,
    questionText: "Địa chỉ IP nào sau đây được viết đúng định dạng 'dot decimal' của IPv4?",
    options: {
      A: '192.168.1.300',
      B: '192.168.1.1',
      C: '192,168,1,1',
      D: '192.168.1'
    },
    correctAnswer: 'B',
    explanation: 'Định dạng chuẩn của IPv4 gồm 4 số thập phân từ 0-255 cách nhau bởi dấu chấm. (A sai vì 300 > 255; C sai vì dùng dấu phẩy; D sai vì chỉ có 3 số).'
  },
  {
    id: 2018,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b4',
    sectionTitle: 'Bài 4: Giao thức mạng',
    category: 'informatics',
    chapter: 'Bài 4: Giao thức mạng',
    questionNumber: 6,
    questionText: 'Khi truyền dữ liệu giữa hai máy tính nằm ở hai mạng LAN khác nhau qua Internet, việc chuyển tiếp dữ liệu phải căn cứ vào địa chỉ nào?',
    options: {
      A: 'Địa chỉ MAC của máy gửi',
      B: 'Địa chỉ MAC của máy nhận',
      C: 'Địa chỉ IP',
      D: 'Tên người sử dụng'
    },
    correctAnswer: 'C',
    explanation: 'Địa chỉ IP là địa chỉ logic có tính phân cấp theo mạng, giúp các router trên Internet định tuyến và chuyển tiếp dữ liệu xuyên qua các mạng khác nhau.'
  },
  {
    id: 2019,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b4',
    sectionTitle: 'Bài 4: Giao thức mạng',
    category: 'informatics',
    chapter: 'Bài 4: Giao thức mạng',
    questionNumber: 7,
    questionText: 'Trong giao thức TCP/IP, chức năng chính của giao thức IP là gì?',
    options: {
      A: 'Đảm bảo các gói dữ liệu được gửi không bao giờ bị mất hoặc đến sai thứ tự.',
      B: 'Định dạng trang web và liên kết các văn bản lại với nhau.',
      C: 'Đánh địa chỉ và định tuyến để dẫn dữ liệu từ nơi gửi đến nơi nhận.',
      D: 'Tự động dịch ngôn ngữ cho người sử dụng trên Internet.'
    },
    correctAnswer: 'C',
    explanation: 'Giao thức IP chịu trách nhiệm gắn nhãn địa chỉ nguồn/đích và điều khiển định tuyến các gói tin qua các router trên mạng.'
  },
  {
    id: 2020,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b4',
    sectionTitle: 'Bài 4: Giao thức mạng',
    category: 'informatics',
    chapter: 'Bài 4: Giao thức mạng',
    questionNumber: 8,
    questionText: 'Để dữ liệu truyền qua mạng không bị chuyển nhầm giữa các phần mềm đang cùng hoạt động trên một máy tính, giao thức TCP sử dụng thông số nào?',
    options: {
      A: 'Địa chỉ MAC',
      B: 'Cổng ứng dụng',
      C: 'Độ dài cáp mạng',
      D: 'Mã kiểm tra lỗi'
    },
    correctAnswer: 'B',
    explanation: 'Số hiệu cổng ứng dụng (Port number, ví dụ cổng 80 cho web, 443 cho https, 25 cho mail) giúp TCP phân phối chính xác dữ liệu đến ứng dụng đang chạy.'
  },
  {
    id: 2021,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b4',
    sectionTitle: 'Bài 4: Giao thức mạng',
    category: 'informatics',
    chapter: 'Bài 4: Giao thức mạng',
    questionNumber: 9,
    questionText: 'Khi truyền tập tin lớn qua mạng, giao thức TCP xử lí dữ liệu tại nơi gửi như thế nào?',
    options: {
      A: 'Gửi nguyên vẹn tập tin trong một luồng truyền duy nhất mà không phân chia.',
      B: 'Cắt dữ liệu ra thành nhiều gói nhỏ có độ dài xác định và đánh số thứ tự.',
      C: 'Chuyển đổi dữ liệu thành âm thanh để truyền qua đường dây điện thoại.',
      D: 'Xóa bớt dữ liệu để giảm dung lượng rồi mới gửi đi.'
    },
    correctAnswer: 'B',
    explanation: 'TCP chia nhỏ tệp tin thành các phân đoạn (segments) có đánh số thứ tự tuần tự để gửi đi độc lập và lắp ghép lại chuẩn xác tại nơi nhận.'
  },
  {
    id: 2022,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b4',
    sectionTitle: 'Bài 4: Giao thức mạng',
    category: 'informatics',
    chapter: 'Bài 4: Giao thức mạng',
    questionNumber: 10,
    questionText: 'Giao thức mạng nào có nhiệm vụ chuyển đổi tên miền dễ nhớ (ví dụ: moet.edu.vn) thành địa chỉ IP để máy tính giao tiếp?',
    options: {
      A: 'Giao thức HTTP',
      B: 'Giao thức DNS',
      C: 'Giao thức ICMP',
      D: 'Giao thức SMTP'
    },
    correctAnswer: 'B',
    explanation: 'Hệ thống tên miền DNS (Domain Name System) chuyển đổi tên miền dạng chữ dễ nhớ sang địa chỉ IP dạng số mà máy tính sử dụng để kết nối.'
  },
  {
    id: 2023,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b4',
    sectionTitle: 'Bài 4: Giao thức mạng',
    category: 'informatics',
    chapter: 'Bài 4: Giao thức mạng',
    questionNumber: 11,
    questionText: 'Khi tìm hiểu về địa chỉ mạng IP và địa chỉ MAC:\n(a) Địa chỉ MAC là địa chỉ 6 byte gắn liền với phần cứng thiết bị mạng.\n(b) Địa chỉ IP là địa chỉ cố định, hoàn toàn không thể gán lại hay thay đổi.\n(c) Để truyền dữ liệu giữa hai máy tính trong cùng một mạng LAN chỉ cần dùng địa chỉ MAC.\n(d) Router sử dụng địa chỉ MAC của máy nhận ở xa để chọn đường truyền qua Internet.\nNhững nhận định ĐÚNG theo đề cương ôn tập là:',
    options: {
      A: '(a) và (c)',
      B: '(b) và (d)',
      C: '(a), (b) và (c)',
      D: 'Chỉ có (a)'
    },
    correctAnswer: 'A',
    explanation: 'Theo đề cương ôn tập: (a) và (c) là đúng. (b) sai vì địa chỉ IP logic có thể thay đổi/gán động qua DHCP; (d) sai vì Router dùng địa chỉ IP (không dùng MAC) để định tuyến trên Internet.'
  },
  {
    id: 2024,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b4',
    sectionTitle: 'Bài 4: Giao thức mạng',
    category: 'informatics',
    chapter: 'Bài 4: Giao thức mạng',
    questionNumber: 12,
    questionText: 'Khi nói về cơ chế hoạt động của giao thức TCP trên Internet:\n(a) Giao thức TCP giúp phân chia dữ liệu thành nhiều gói nhỏ và đánh số theo từng ứng dụng.\n(b) TCP có cơ chế xác nhận gói tin giúp phát hiện gói bị sai sót hoặc thất lạc để yêu cầu gửi lại.\n(c) Giao thức IP đảm bảo việc truyền dữ liệu chính xác đến từng ứng dụng cụ thể trên máy tính.\n(d) Việc chia nhỏ dữ liệu thành gói cho phép nhiều cuộc truyền xen kẽ nhau trên cùng đường cáp.\nNhững nhận định ĐÚNG theo đề cương ôn tập là:',
    options: {
      A: '(a) và (c)',
      B: '(b) và (d)',
      C: '(b), (c) và (d)',
      D: 'Cả 4 nhận định'
    },
    correctAnswer: 'B',
    explanation: 'Theo đề cương ôn tập: (b) và (d) là đúng. (b) TCP đảm bảo độ tin cậy bằng cờ ACK yêu cầu truyền lại; (d) chia nhỏ gói tin cho phép ghép kênh nhiều luồng truyền trên cùng một đường cáp.'
  },

  // =========================================================================
  // BÀI 5: THỰC HÀNH CHIA SẺ TÀI NGUYÊN TRÊN MẠNG (Câu 25 - 36)
  // =========================================================================
  {
    id: 2025,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b5',
    sectionTitle: 'Bài 5: Thực hành chia sẻ tài nguyên trên mạng',
    category: 'informatics',
    chapter: 'Bài 5: Chia sẻ tài nguyên mạng',
    questionNumber: 1,
    questionText: 'Hoạt động chia sẻ tài nguyên trong mạng cục bộ đem lại lợi ích gì cho người sử dụng?',
    options: {
      A: 'Cho phép máy tính nhìn thấy và sử dụng chung dữ liệu, phần mềm hoặc thiết bị trên máy khác trong mạng.',
      B: 'Tự động tăng tốc độ xử lí phần cứng cho tất cả các máy tính kết nối.',
      C: 'Ngăn chặn hoàn toàn mọi nguy cơ lây nhiễm mã độc từ bên ngoài.',
      D: 'Giúp máy tính kết nối Internet mà không cần modem hay đường truyền.'
    },
    correctAnswer: 'A',
    explanation: 'Chia sẻ tài nguyên giúp các máy tính trong mạng LAN dùng chung dữ liệu tệp tin, máy in, ổ đĩa mà không tốn công chép thủ công qua USB.'
  },
  {
    id: 2026,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b5',
    sectionTitle: 'Bài 5: Thực hành chia sẻ tài nguyên trên mạng',
    category: 'informatics',
    chapter: 'Bài 5: Chia sẻ tài nguyên mạng',
    questionNumber: 2,
    questionText: 'Khi muốn chia sẻ tệp và máy in an toàn giữa các máy tính đáng tin cậy trong nội bộ văn phòng, ta nên chọn cấu hình mạng nào trên Windows?',
    options: {
      A: 'Mạng công cộng (Public network)',
      B: 'Mạng riêng (Private network)',
      C: 'Mạng ẩn danh',
      D: 'Mạng khách'
    },
    correctAnswer: 'B',
    explanation: 'Chế độ mạng riêng (Private network) trên Windows cho phép máy tính nhận diện và được nhận diện bởi các máy tin cậy khác trong cùng mạng nội bộ.'
  },
  {
    id: 2027,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b5',
    sectionTitle: 'Bài 5: Thực hành chia sẻ tài nguyên trên mạng',
    category: 'informatics',
    chapter: 'Bài 5: Chia sẻ tài nguyên mạng',
    questionNumber: 3,
    questionText: 'Để các máy tính khác trong mạng có thể phát hiện thấy máy tính của mình qua File Explorer, tùy chọn nào cần được bật (On)?',
    options: {
      A: 'Network discovery',
      B: 'Turn off printer',
      C: 'Public network mode',
      D: 'Block all connections'
    },
    correctAnswer: 'A',
    explanation: 'Tính năng Network discovery (khám phá mạng) cho phép máy tính quét thấy và hiển thị với các thiết bị khác trong mạng LAN.'
  },
  {
    id: 2028,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b5',
    sectionTitle: 'Bài 5: Thực hành chia sẻ tài nguyên trên mạng',
    category: 'informatics',
    chapter: 'Bài 5: Chia sẻ tài nguyên mạng',
    questionNumber: 4,
    questionText: 'Trong hệ điều hành Windows, thư mục dùng chung mặc định có sẵn các thư mục con như Documents, Downloads, Music là thư mục nào?',
    options: {
      A: 'Thư mục System32',
      B: 'Thư mục Program Files',
      C: 'Thư mục Public',
      D: 'Thư mục Windows'
    },
    correctAnswer: 'C',
    explanation: 'Thư mục Public (C:\\Users\\Public) được Windows thiết kế sẵn để tất cả người dùng trên máy hoặc trong mạng dùng chung thuận tiện.'
  },
  {
    id: 2029,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b5',
    sectionTitle: 'Bài 5: Thực hành chia sẻ tài nguyên trên mạng',
    category: 'informatics',
    chapter: 'Bài 5: Chia sẻ tài nguyên mạng',
    questionNumber: 5,
    questionText: "Khi chia sẻ một thư mục cho người dùng với quyền truy cập là 'Read', người đó có thể thực hiện thao tác nào?",
    options: {
      A: 'Xóa vĩnh viễn các tệp trong thư mục.',
      B: 'Xem và mở các tệp trong thư mục nhưng không được chỉnh sửa nội dung.',
      C: 'Chỉnh sửa nội dung các tệp và lưu lại trực tiếp vào thư mục đó.',
      D: 'Thay đổi quyền chia sẻ của chủ sở hữu thư mục.'
    },
    correctAnswer: 'B',
    explanation: "Quyền 'Read' (Chỉ đọc) chỉ cho phép người dùng mở xem và sao chép nội dung tệp, không được chỉnh sửa, đổi tên hay xóa tệp trong thư mục."
  },
  {
    id: 2030,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b5',
    sectionTitle: 'Bài 5: Thực hành chia sẻ tài nguyên trên mạng',
    category: 'informatics',
    chapter: 'Bài 5: Chia sẻ tài nguyên mạng',
    questionNumber: 6,
    questionText: 'Nếu muốn người được chia sẻ vừa xem được vừa sửa hoặc thêm dữ liệu vào thư mục, ta cấp quyền (Permission Level) nào?',
    options: {
      A: 'Chỉ quyền Read',
      B: 'Quyền Read/Write',
      C: 'Quyền Remove',
      D: 'Quyền Deny'
    },
    correctAnswer: 'B',
    explanation: "Quyền 'Read/Write' (Đọc/Ghi) cho phép người được chia sẻ toàn quyền xem, chỉnh sửa nội dung, thêm tệp mới và lưu trực tiếp vào thư mục."
  },
  {
    id: 2031,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b5',
    sectionTitle: 'Bài 5: Thực hành chia sẻ tài nguyên trên mạng',
    category: 'informatics',
    chapter: 'Bài 5: Chia sẻ tài nguyên mạng',
    questionNumber: 7,
    questionText: "Khi không muốn chia sẻ một thư mục trên mạng nữa, tại cửa sổ Advanced Sharing ta cần thực hiện thao tác nào?",
    options: {
      A: "Bỏ chọn ô 'Share this folder' rồi nhấn Apply hoặc OK.",
      B: 'Đổi tên thư mục thành tên khác.',
      C: 'Xóa toàn bộ các tệp chứa bên trong thư mục.',
      D: 'Ngắt dây cáp mạng cắm vào máy tính.'
    },
    correctAnswer: 'A',
    explanation: "Để hủy chia sẻ thư mục, vào Advanced Sharing và bỏ dấu tích ở ô 'Share this folder' rồi lưu lại."
  },
  {
    id: 2032,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b5',
    sectionTitle: 'Bài 5: Thực hành chia sẻ tài nguyên trên mạng',
    category: 'informatics',
    chapter: 'Bài 5: Chia sẻ tài nguyên mạng',
    questionNumber: 8,
    questionText: 'Việc chia sẻ một máy in được nối trực tiếp vào một máy tính trong mạng LAN thực chất biến máy tính đó thành thiết bị gì?',
    options: {
      A: 'Máy chủ lưu trữ (File Server)',
      B: 'Máy chủ cung cấp dịch vụ in (Print Server)',
      C: 'Bộ định tuyến (Router)',
      D: 'Điểm truy cập không dây (WAP)'
    },
    correctAnswer: 'B',
    explanation: 'Máy tính cắm cáp trực tiếp với máy in sẽ đóng vai trò là một Print Server (máy chủ in), tiếp nhận và điều phối hàng đợi các lệnh in từ các máy khác.'
  },
  {
    id: 2033,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b5',
    sectionTitle: 'Bài 5: Thực hành chia sẻ tài nguyên trên mạng',
    category: 'informatics',
    chapter: 'Bài 5: Chia sẻ tài nguyên mạng',
    questionNumber: 9,
    questionText: 'Muốn chia sẻ máy in đang gắn trực tiếp trên máy tính Windows, người quản trị vào phần thuộc tính máy in và chọn thẻ nào?',
    options: {
      A: 'Thẻ Hardware',
      B: 'Thẻ Sharing',
      C: 'Thẻ Ports',
      D: 'Thẻ Color Management'
    },
    correctAnswer: 'B',
    explanation: "Trong Printer Properties, thẻ 'Sharing' chứa các thiết lập chia sẻ máy in (Share this printer)."
  },
  {
    id: 2034,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b5',
    sectionTitle: 'Bài 5: Thực hành chia sẻ tài nguyên trên mạng',
    category: 'informatics',
    chapter: 'Bài 5: Chia sẻ tài nguyên mạng',
    questionNumber: 10,
    questionText: 'Khi một máy tính khác muốn sử dụng máy in đã được chia sẻ trên mạng, thao tác đầu tiên cần làm trên máy đó là gì?',
    options: {
      A: 'Rút dây cáp cắm từ máy in sang máy tính của mình.',
      B: 'Vào mục Printers & scanners và thực hiện tìm kiếm, kết nối với máy in mạng.',
      C: 'Cài đặt lại toàn bộ hệ điều hành Windows.',
      D: 'Mua thêm một máy in mới để kết nối trực tiếp.'
    },
    correctAnswer: 'B',
    explanation: "Trên máy khách, vào Settings > Devices > Printers & scanners rồi bấm 'Add device' để hệ thống tự động tìm và kết nối máy in mạng."
  },
  {
    id: 2035,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b5',
    sectionTitle: 'Bài 5: Thực hành chia sẻ tài nguyên trên mạng',
    category: 'informatics',
    chapter: 'Bài 5: Chia sẻ tài nguyên mạng',
    questionNumber: 11,
    questionText: 'Khi thiết lập môi trường chia sẻ dữ liệu trên hệ điều hành Windows:\n(a) Trước khi chia sẻ tệp, cần chuyển cấu hình mạng sang chế độ Private và bật Network discovery.\n(b) Để việc chia sẻ tài nguyên trong mạng LAN thuận lợi, người ta thường tạm dừng tường lửa Defender.\n(c) Bất kỳ ai trên Internet đều có thể tự động truy cập vào tệp chia sẻ trong mạng LAN nội bộ.\n(d) Dữ liệu lưu trong thư mục Public luôn được chia sẻ cho mọi máy mà không thể tắt tính năng này.\nNhững nhận định ĐÚNG theo đề cương ôn tập là:',
    options: {
      A: '(a) và (b)',
      B: '(c) và (d)',
      C: '(a), (b) và (c)',
      D: 'Cả 4 nhận định'
    },
    correctAnswer: 'A',
    explanation: 'Theo đề cương ôn tập: (a) và (b) là đúng. (c) sai vì mạng LAN được bảo vệ bởi router NAT/Firewall; (d) sai vì tính năng chia sẻ thư mục Public có thể tắt/bật tùy ý.'
  },
  {
    id: 2036,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b5',
    sectionTitle: 'Bài 5: Thực hành chia sẻ tài nguyên trên mạng',
    category: 'informatics',
    chapter: 'Bài 5: Chia sẻ tài nguyên mạng',
    questionNumber: 12,
    questionText: 'Khi tìm hiểu về hoạt động chia sẻ máy in trong mạng cục bộ:\n(a) Chia sẻ máy in giúp các máy tính trong phòng làm việc in chung mà không phải copy file sang máy có máy in.\n(b) Máy tính gắn trực tiếp với máy in đóng vai trò là Print Server xếp các lệnh in thành hàng đợi.\n(c) Khi máy tính cắm máy in đang ở trạng thái ngủ (Sleep) hoặc tắt nguồn, các máy khác vẫn in được bình thường.\n(d) Khi chia sẻ máy in, nên đặt tên máy in ngắn gọn và gợi nhớ để người dùng khác dễ tìm kiếm.\nNhững nhận định ĐÚNG theo đề cương ôn tập là:',
    options: {
      A: '(a), (b) và (d)',
      B: '(a) và (c)',
      C: '(b) và (c)',
      D: 'Cả 4 nhận định'
    },
    correctAnswer: 'A',
    explanation: 'Theo đề cương ôn tập: (a), (b) và (d) là đúng. (c) sai vì máy in gắn trực tiếp qua máy tính chủ, nếu máy tính chủ tắt nguồn thì các máy khác sẽ không thể gửi lệnh in.'
  },

  // =========================================================================
  // BÀI 6: GIAO TIẾP VÀ ỨNG XỬ TRONG KHÔNG GIAN MẠNG (Câu 37 - 48)
  // =========================================================================
  {
    id: 2037,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b6',
    sectionTitle: 'Bài 6: Giao tiếp và ứng xử trong không gian mạng',
    category: 'informatics',
    chapter: 'Bài 6: Ứng xử không gian mạng',
    questionNumber: 1,
    questionText: 'Không gian mạng (thế giới ảo) được hiểu một cách chính xác là gì?',
    options: {
      A: 'Là một trò chơi thực tế ảo nhiều người tham gia trên mạng Internet.',
      B: 'Là môi trường được tạo ra nhờ sử dụng mạng máy tính để con người kết nối và giao tiếp trực tuyến.',
      C: 'Là một trang mạng xã hội cụ thể cho phép đăng tải hình ảnh cá nhân.',
      D: 'Là dịch vụ viễn thông chỉ dành riêng cho điện thoại thông minh.'
    },
    correctAnswer: 'B',
    explanation: 'Không gian mạng là môi trường số được kiến tạo nhờ các mạng máy tính kết nối liên thông, cho phép con người trao đổi thông tin, tương tác và giao tiếp từ xa.'
  },
  {
    id: 2038,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b6',
    sectionTitle: 'Bài 6: Giao tiếp và ứng xử trong không gian mạng',
    category: 'informatics',
    chapter: 'Bài 6: Ứng xử không gian mạng',
    questionNumber: 2,
    questionText: 'Ưu điểm nổi bật nhất của giao tiếp trong không gian mạng so với giao tiếp trực tiếp là gì?',
    options: {
      A: 'Có thể trò chuyện mọi lúc, mọi nơi khi có kết nối mạng, giúp tiết kiệm thời gian và chi phí di chuyển.',
      B: 'Không bao giờ xảy ra tình trạng hiểu lầm về mặt cảm xúc.',
      C: 'Bảo đảm an toàn tuyệt đối, không bao giờ có nguy cơ lộ lọt dữ liệu riêng tư.',
      D: 'Luôn thấy rõ được nét mặt, ngữ điệu thực tế của người trò chuyện qua tin nhắn văn bản.'
    },
    correctAnswer: 'A',
    explanation: 'Giao tiếp mạng xóa nhòa khoảng cách địa lý, cho phép liên lạc tức thời mọi lúc mọi nơi chỉ cần có đường truyền Internet.'
  },
  {
    id: 2039,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b6',
    sectionTitle: 'Bài 6: Giao tiếp và ứng xử trong không gian mạng',
    category: 'informatics',
    chapter: 'Bài 6: Ứng xử không gian mạng',
    questionNumber: 3,
    questionText: 'Khi giao tiếp bằng hình thức gửi tin nhắn văn bản hoặc thư điện tử, người dùng dễ gặp phải hạn chế nào sau đây?',
    options: {
      A: 'Tốn kém rất nhiều chi phí gửi tin nhắn.',
      B: 'Thiếu các tín hiệu phi ngôn ngữ như nét mặt, ánh mắt, ngữ điệu giọng nói dẫn đến dễ gây hiểu lầm.',
      C: 'Không thể trao đổi thông tin với những người ở xa.',
      D: 'Bắt buộc người nhận phải phản hồi lại ngay lập tức.'
    },
    correctAnswer: 'B',
    explanation: 'Văn bản thuần túy không truyền tải được giọng điệu, nụ cười hay nét mặt, dễ khiến người đọc hiểu sai sắc thái biểu cảm của người gửi.'
  },
  {
    id: 2040,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b6',
    sectionTitle: 'Bài 6: Giao tiếp và ứng xử trong không gian mạng',
    category: 'informatics',
    chapter: 'Bài 6: Ứng xử không gian mạng',
    questionNumber: 4,
    questionText: 'Hành vi nào sau đây tiềm ẩn nguy cơ mất an toàn thông tin và quyền riêng tư trong không gian mạng?',
    options: {
      A: 'Tự kiểm tra và điều chỉnh các phát ngôn của mình cho chuẩn mực.',
      B: 'Lưu trữ cẩn thận mật khẩu tài khoản cá nhân ở nơi an toàn.',
      C: 'Chia sẻ công khai thông tin cá nhân nhạy cảm hoặc mật khẩu cho người lạ trên mạng xã hội.',
      D: 'Chỉ trò chuyện bằng video với người thân trong gia đình.'
    },
    correctAnswer: 'C',
    explanation: 'Công khai số CCCD, tài khoản, mật khẩu hay hình ảnh nhạy cảm trên mạng tạo cơ hội cho kẻ xấu lợi dụng để lừa đảo, tống tiền hoặc chiếm quyền tài khoản.'
  },
  {
    id: 2041,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b6',
    sectionTitle: 'Bài 6: Giao tiếp và ứng xử trong không gian mạng',
    category: 'informatics',
    chapter: 'Bài 6: Ứng xử không gian mạng',
    questionNumber: 5,
    questionText: 'Vì sao việc xây dựng lòng tin trong các mối quan hệ trên không gian mạng thường gặp nhiều khó khăn hơn ngoài đời thực?',
    options: {
      A: 'Vì tốc độ truyền tải hình ảnh trên mạng quá chậm.',
      B: 'Vì người dùng trên mạng có thể giấu mặt, tạo tài khoản ảo hoặc làm giả thông tin cá nhân.',
      C: 'Vì pháp luật nghiêm cấm việc kết bạn qua Internet.',
      D: 'Vì các ứng dụng nhắn tin không hỗ trợ gửi biểu tượng cảm xúc.'
    },
    correctAnswer: 'B',
    explanation: 'Tính ẩn danh trên không gian mạng cho phép bất kỳ ai cũng có thể giả mạo thông tin, tạo hồ sơ ảo khiến việc thẩm định tính chân thật khó khăn.'
  },
  {
    id: 2042,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b6',
    sectionTitle: 'Bài 6: Giao tiếp và ứng xử trong không gian mạng',
    category: 'informatics',
    chapter: 'Bài 6: Ứng xử không gian mạng',
    questionNumber: 6,
    questionText: 'Biểu hiện nào sau đây thể hiện thái độ tôn trọng khi tham gia giao tiếp trong không gian mạng?',
    options: {
      A: 'Ép buộc người khác phải tán thành và chia sẻ bài viết theo quan điểm của mình.',
      B: 'Tự ý lấy ảnh cá nhân của bạn bè đăng lên mạng xã hội để trêu đùa.',
      C: 'Tôn trọng quan điểm riêng của người khác và không phát tán thông tin riêng tư khi chưa được phép.',
      D: 'Chụp lại tin nhắn trao đổi riêng tư của bạn gửi cho nhiều người khác xem.'
    },
    correctAnswer: 'C',
    explanation: 'Tôn trọng sự đa dạng quan điểm và giữ kín thông tin riêng tư của người khác là chuẩn mực đạo đức cốt lõi trong giao tiếp văn minh trên mạng.'
  },
  {
    id: 2043,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b6',
    sectionTitle: 'Bài 6: Giao tiếp và ứng xử trong không gian mạng',
    category: 'informatics',
    chapter: 'Bài 6: Ứng xử không gian mạng',
    questionNumber: 7,
    questionText: 'Sử dụng ngôn từ đúng mực, không nói tục, không lăng mạ hay châm chọc xúc phạm người khác trên mạng là biểu hiện của đức tính gì?',
    options: {
      A: 'Tính tò mò',
      B: 'Sự lịch sự',
      C: 'Tính tự cao',
      D: 'Sự bảo thủ'
    },
    correctAnswer: 'B',
    explanation: 'Sự lịch sự thể hiện qua ngôn từ nhã nhặn, tôn trọng nhân phẩm và cảm xúc của người đối thoại cả ngoài đời lẫn trên môi trường số.'
  },
  {
    id: 2044,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b6',
    sectionTitle: 'Bài 6: Giao tiếp và ứng xử trong không gian mạng',
    category: 'informatics',
    chapter: 'Bài 6: Ứng xử không gian mạng',
    questionNumber: 8,
    questionText: 'Biết lắng nghe, đồng cảm với những khó khăn của người khác và cố gắng đặt mình vào vị trí của họ khi giao tiếp trên mạng được gọi là gì?',
    options: {
      A: 'Sự thấu hiểu',
      B: 'Sự đố kị',
      C: 'Sự thờ ơ',
      D: 'Tính cả tin'
    },
    correctAnswer: 'A',
    explanation: 'Sự thấu hiểu (đồng cảm) giúp kết nối tâm tư con người, giảm thiểu tranh cãi bạo lực mạng và xây dựng cộng đồng trực tuyến nhân ái.'
  },
  {
    id: 2045,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b6',
    sectionTitle: 'Bài 6: Giao tiếp và ứng xử trong không gian mạng',
    category: 'informatics',
    chapter: 'Bài 6: Ứng xử không gian mạng',
    questionNumber: 9,
    questionText: 'Khi tham gia các cuộc thảo luận trực tuyến, hành động nào sau đây là văn minh và nhân văn?',
    options: {
      A: 'Sử dụng lời lẽ khiếm nhã để hạ bệ ý kiến người khác khi không đồng tình.',
      B: 'Bình tĩnh lắng nghe, đọc kĩ ý kiến của bạn rồi trao đổi, phản bác một cách lịch sự, có căn cứ.',
      C: 'Kêu gọi bạn bè vào trang cá nhân của người khác để bình luận đe dọa.',
      D: 'Chia sẻ các tin đồn chưa được kiểm chứng lên mạng để tăng tương tác.'
    },
    correctAnswer: 'B',
    explanation: 'Thảo luận văn minh đòi hỏi dựa trên căn cứ xác thực, lý lẽ mạch lạc và thái độ cầu thị, tôn trọng người cùng đối thoại.'
  },
  {
    id: 2046,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b6',
    sectionTitle: 'Bài 6: Giao tiếp và ứng xử trong không gian mạng',
    category: 'informatics',
    chapter: 'Bài 6: Ứng xử không gian mạng',
    questionNumber: 10,
    questionText: 'Khi tham gia một buổi học trực tuyến hoặc cuộc họp có bật camera (video call), hành vi nào sau đây là phù hợp?',
    options: {
      A: 'Mặc trang phục lịch sự, giữ thái độ nghiêm túc và chọn vị trí ngồi phù hợp trong suốt buổi học.',
      B: 'Vừa học vừa để lộ những hình ảnh, vật dụng nhạy cảm trong khung hình.',
      C: 'Bật mic nói chuyện riêng với bạn bè gây ồn ào lớp học.',
      D: 'Vừa bật camera vừa nằm ngủ trên giường.'
    },
    correctAnswer: 'A',
    explanation: 'Trang phục chỉnh tề, vị trí ngồi nghiêm túc thể hiện sự tôn trọng thầy cô giáo và tập thể lớp trong giờ học trực tuyến.'
  },
  {
    id: 2047,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b6',
    sectionTitle: 'Bài 6: Giao tiếp và ứng xử trong không gian mạng',
    category: 'informatics',
    chapter: 'Bài 6: Ứng xử không gian mạng',
    questionNumber: 11,
    questionText: 'Khi nhận xét về ưu và nhược điểm của giao tiếp trong không gian mạng:\n(a) Giao tiếp trong không gian mạng giúp tiết kiệm chi phí di chuyển và mở rộng kết nối xã hội.\n(b) Mọi thông tin tài khoản trên mạng xã hội đều được kiểm duyệt xác thực nên hoàn toàn đáng tin cậy.\n(c) Giao tiếp trực tuyến có thể bị gián đoạn do sự cố mất mạng hoặc lỗi phần mềm.\n(d) Giao tiếp qua thư điện tử luôn truyền tải trọn vẹn cảm xúc nhờ tín hiệu phi ngôn ngữ.\nNhững nhận định ĐÚNG theo đề cương ôn tập là:',
    options: {
      A: '(a) và (c)',
      B: '(b) và (d)',
      C: '(a), (c) và (d)',
      D: 'Cả 4 nhận định'
    },
    correctAnswer: 'A',
    explanation: 'Theo đề cương ôn tập: (a) và (c) là đúng. (b) sai vì tài khoản ảo và tin giả tràn lan; (d) sai vì email thiếu tín hiệu phi ngôn ngữ (cử chỉ, ánh mắt).'
  },
  {
    id: 2048,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b6',
    sectionTitle: 'Bài 6: Giao tiếp và ứng xử trong không gian mạng',
    category: 'informatics',
    chapter: 'Bài 6: Ứng xử không gian mạng',
    questionNumber: 12,
    questionText: 'Về việc thể hiện tính nhân văn trong không gian mạng:\n(a) Tôn trọng, lịch sự, thấu hiểu và hỗ trợ là các yếu tố cốt lõi của ứng xử nhân văn trên mạng.\n(b) Có thể tự ý lấy hình ảnh không đẹp của bạn cùng lớp đăng lên mạng để tạo tiếng cười.\n(c) Khi xảy ra bất đồng quan điểm, cần bình tĩnh trao đổi trên tinh thần tôn trọng lẫn nhau.\n(d) Nguyên tắc quan trọng để ứng xử nhân văn là đối xử với người khác theo cách mình muốn được đối xử.\nNhững nhận định ĐÚNG theo đề cương ôn tập là:',
    options: {
      A: '(a), (c) và (d)',
      B: '(a) và (b)',
      C: '(b) và (c)',
      D: 'Cả 4 nhận định'
    },
    correctAnswer: 'A',
    explanation: 'Theo đề cương ôn tập: (a), (c) và (d) là đúng. (b) sai vì việc tự ý đăng ảnh bạn bè bôi nhọ để câu like là hành vi miệt thị, vi phạm quyền riêng tư.'
  },

  // =========================================================================
  // BÀI 7: HTML VÀ CẤU TRÚC TRANG WEB (Câu 49 - 60)
  // =========================================================================
  {
    id: 2049,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b7',
    sectionTitle: 'Bài 7: HTML và cấu trúc trang web',
    category: 'informatics',
    chapter: 'Bài 7: Cấu trúc trang web',
    questionNumber: 1,
    questionText: 'HTML là tên viết tắt của cụm từ tiếng Anh nào sau đây?',
    options: {
      A: 'Hypertext Makeup Language',
      B: 'Hypertext Markup Language',
      C: 'Hyperlink Markup Language',
      D: 'High-level Text Markup Language'
    },
    correctAnswer: 'B',
    explanation: 'HTML là từ viết tắt của HyperText Markup Language (Ngôn ngữ đánh dấu siêu văn bản).'
  },
  {
    id: 2050,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b7',
    sectionTitle: 'Bài 7: HTML và cấu trúc trang web',
    category: 'informatics',
    chapter: 'Bài 7: Cấu trúc trang web',
    questionNumber: 2,
    questionText: 'Ngôn ngữ HTML có vai trò cơ bản gì trong việc tạo dựng trang web?',
    options: {
      A: 'Lập trình các thuật toán xử lí dữ liệu lớn trên máy chủ.',
      B: 'Là bộ quy tắc dùng để thiết lập cấu trúc và hiển thị nội dung của trang web.',
      C: 'Dùng để thiết kế và sản xuất các thiết bị phần cứng mạng.',
      D: 'Tự động vẽ sơ đồ tư duy cho người sử dụng.'
    },
    correctAnswer: 'B',
    explanation: 'HTML cung cấp các thẻ đánh dấu để tạo nên bộ khung, cấu trúc các thành phần (tiêu đề, hình ảnh, văn bản, bảng) hiển thị trên trình duyệt.'
  },
  {
    id: 2051,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b7',
    sectionTitle: 'Bài 7: HTML và cấu trúc trang web',
    category: 'informatics',
    chapter: 'Bài 7: Cấu trúc trang web',
    questionNumber: 3,
    questionText: 'Các tệp mã nguồn HTML thường có phần mở rộng mặc định là gì?',
    options: {
      A: '.doc hoặc .docx',
      B: '.html hoặc .htm',
      C: '.txt hoặc .pdf',
      D: '.exe hoặc .bat'
    },
    correctAnswer: 'B',
    explanation: 'Tệp chứa mã nguồn trang web HTML có đuôi mở rộng phổ biến là .html hoặc .htm.'
  },
  {
    id: 2052,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b7',
    sectionTitle: 'Bài 7: HTML và cấu trúc trang web',
    category: 'informatics',
    chapter: 'Bài 7: Cấu trúc trang web',
    questionNumber: 4,
    questionText: 'Dòng mã <!DOCTYPE html> nằm ở vị trí đầu tiên của tệp HTML có vai trò gì?',
    options: {
      A: 'Là phần tử HTML gốc chứa toàn bộ trang web.',
      B: 'Thông báo cho trình duyệt biết định dạng tệp là HTML5.',
      C: 'Dùng để chèn tiêu đề chính của trang web.',
      D: 'Tạo một dòng kẻ ngang phân cách trang.'
    },
    correctAnswer: 'B',
    explanation: '<!DOCTYPE html> là khai báo kiểu tài liệu (Document Type Declaration) giúp trình duyệt hiểu trang web tuân thủ chuẩn HTML5.'
  },
  {
    id: 2053,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b7',
    sectionTitle: 'Bài 7: HTML và cấu trúc trang web',
    category: 'informatics',
    chapter: 'Bài 7: Cấu trúc trang web',
    questionNumber: 5,
    questionText: 'Trong cấu trúc tệp HTML, phần tử bắt buộc nào đóng vai trò là nút gốc (root) bao bọc toàn bộ nội dung trang?',
    options: {
      A: 'Phần tử <head>',
      B: 'Phần tử <body>',
      C: 'Phần tử <html>',
      D: 'Phần tử <title>'
    },
    correctAnswer: 'C',
    explanation: 'Phần tử <html>...</html> là thẻ gốc (root element) chứa toàn bộ các phần tử khác của trang web.'
  },
  {
    id: 2054,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b7',
    sectionTitle: 'Bài 7: HTML và cấu trúc trang web',
    category: 'informatics',
    chapter: 'Bài 7: Cấu trúc trang web',
    questionNumber: 6,
    questionText: 'Nội dung nằm trong phần tử <body> của tệp HTML có đặc điểm gì?',
    options: {
      A: 'Chứa các thông tin cấu hình ẩn của trang web mà người dùng không thấy được.',
      B: 'Chứa toàn bộ các phần tử hiển thị nội dung chính của trang web đến người duyệt web.',
      C: 'Chỉ dùng để khai báo tác giả và bộ mã hóa Unicode.',
      D: 'Chỉ chứa tiêu đề xuất hiện trên thanh tiêu đề của trình duyệt.'
    },
    correctAnswer: 'B',
    explanation: 'Phần tử <body> bao bọc tất cả nội dung hiển thị trực quan đến người duyệt web (đoạn văn, hình ảnh, video, bảng, liên kết).'
  },
  {
    id: 2055,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b7',
    sectionTitle: 'Bài 7: HTML và cấu trúc trang web',
    category: 'informatics',
    chapter: 'Bài 7: Cấu trúc trang web',
    questionNumber: 7,
    questionText: 'Thẻ <title> dùng để đặt tiêu đề của trang web được đặt bên trong phần tử nào?',
    options: {
      A: 'Phần tử <head>',
      B: 'Phần tử <body>',
      C: 'Phần tử <p>',
      D: 'Phần tử <div>'
    },
    correctAnswer: 'A',
    explanation: 'Thẻ <title> được đặt trong phần đầu <head> để chỉ định tên trang hiển thị trên thẻ tab của trình duyệt web.'
  },
  {
    id: 2056,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b7',
    sectionTitle: 'Bài 7: HTML và cấu trúc trang web',
    category: 'informatics',
    chapter: 'Bài 7: Cấu trúc trang web',
    questionNumber: 8,
    questionText: 'Phần tử <meta charset="utf-8"> có tác dụng chính là gì?',
    options: {
      A: 'Tạo một đoạn văn bản in nghiêng trên trang web.',
      B: 'Quy định bảng mã kí tự Unicode cho trang web để hiển thị tiếng Việt chính xác.',
      C: 'Đổi màu nền của toàn bộ trang web sang màu đen.',
      D: 'Tạo đường dẫn liên kết đến một trang web khác.'
    },
    correctAnswer: 'B',
    explanation: 'Khai báo <meta charset="utf-8"> quy định chuẩn mã hóa ký tự Unicode UTF-8, giúp trang hiển thị tiếng Việt có dấu hoàn hảo không bị lỗi font.'
  },
  {
    id: 2057,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b7',
    sectionTitle: 'Bài 7: HTML và cấu trúc trang web',
    category: 'informatics',
    chapter: 'Bài 7: Cấu trúc trang web',
    questionNumber: 9,
    questionText: 'Khi người dùng soạn thảo mã HTML và nhấn phím Enter xuống dòng nhiều lần hoặc gõ nhiều dấu cách liên tiếp, trình duyệt web sẽ hiển thị như thế nào?',
    options: {
      A: 'Hiển thị đúng số lần xuống dòng và số dấu cách như trong mã nguồn.',
      B: 'Báo lỗi cú pháp và không hiển thị trang web.',
      C: 'Chỉ hiển thị tương đương một dấu cách và không tự động xuống dòng.',
      D: 'Tự động xóa toàn bộ nội dung đoạn văn bản đó.'
    },
    correctAnswer: 'C',
    explanation: 'Trình duyệt thu gọn các ký tự khoảng trắng liên tiếp và phím xuống dòng thành đúng một dấu cách duy nhất, muốn xuống dòng phải dùng thẻ <br> hoặc thẻ <p>.'
  },
  {
    id: 2058,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b7',
    sectionTitle: 'Bài 7: HTML và cấu trúc trang web',
    category: 'informatics',
    chapter: 'Bài 7: Cấu trúc trang web',
    questionNumber: 10,
    questionText: 'Phần mềm nào sau đây là phần mềm soạn thảo mã HTML miễn phí, mã nguồn mở chuyên nghiệp?',
    options: {
      A: 'Adobe Photoshop',
      B: 'Notepad++',
      C: 'VLC Media Player',
      D: 'Microsoft Excel'
    },
    correctAnswer: 'B',
    explanation: 'Notepad++ là trình soạn thảo mã nguồn miễn phí nổi tiếng, hỗ trợ tô màu cú pháp và quản lý tài liệu HTML rất trực quan.'
  },
  {
    id: 2059,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b7',
    sectionTitle: 'Bài 7: HTML và cấu trúc trang web',
    category: 'informatics',
    chapter: 'Bài 7: Cấu trúc trang web',
    questionNumber: 11,
    questionText: 'Khi tìm hiểu về cấu trúc cơ bản của một phần tử và tệp HTML:\n(a) Mỗi phần tử HTML thông thường gồm thẻ mở, nội dung và thẻ đóng.\n(b) Cặp dấu dùng để bao bọc tên thẻ HTML là cặp ngoặc vuông [ và ].\n(c) Dòng khai báo <!DOCTYPE html> được tính là một phần tử HTML cha.\n(d) Phần tử <html> bao bọc hai phần tử con trực tiếp cơ bản là <head> và <body>.\nNhững nhận định ĐÚNG theo đề cương ôn tập là:',
    options: {
      A: '(a) và (d)',
      B: '(b) và (c)',
      C: '(a), (b) và (d)',
      D: 'Cả 4 nhận định'
    },
    correctAnswer: 'A',
    explanation: 'Theo đề cương ôn tập: (a) và (d) là đúng. (b) sai vì tên thẻ dùng cặp ngoặc nhọn < và >; (c) sai vì <!DOCTYPE html> là dòng khai báo kiểu tài liệu, không phải phần tử cha.'
  },
  {
    id: 2060,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b7',
    sectionTitle: 'Bài 7: HTML và cấu trúc trang web',
    category: 'informatics',
    chapter: 'Bài 7: Cấu trúc trang web',
    questionNumber: 12,
    questionText: 'Khi tìm hiểu về các quy định của ngôn ngữ HTML và trình duyệt web:\n(a) Thẻ <title> được đặt trong thẻ <head> dùng để chỉ định tên trang hiển thị trên trình duyệt.\n(b) Google Chrome, Cốc Cốc, Firefox là các phần mềm chuyên dùng để soạn thảo mã HTML.\n(c) Tên thẻ HTML không phân biệt chữ in hoa và chữ in thường.\n(d) Các thẻ đơn như thẻ <hr> (kẻ ngang) hoặc thẻ <br> (ngắt dòng) không cần thẻ đóng tương ứng.\nNhững nhận định ĐÚNG theo đề cương ôn tập là:',
    options: {
      A: '(a), (c) và (d)',
      B: '(a) và (b)',
      C: '(b) và (c)',
      D: 'Cả 4 nhận định'
    },
    correctAnswer: 'A',
    explanation: 'Theo đề cương ôn tập: (a), (c) và (d) là đúng. (b) sai vì Chrome, Firefox là trình duyệt web (Web Browser) dùng để thông dịch và hiển thị trang web, không phải phần mềm soạn thảo mã.'
  },

  // =========================================================================
  // BÀI 8: ĐỊNH DẠNG VĂN BẢN (Câu 61 - 72)
  // =========================================================================
  {
    id: 2061,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b8',
    sectionTitle: 'Bài 8: Định dạng văn bản',
    category: 'informatics',
    chapter: 'Bài 8: Định dạng văn bản',
    questionNumber: 1,
    questionText: 'Thuộc tính của một thẻ HTML thường được đặt ở vị trí nào trong câu lệnh?',
    options: {
      A: 'Nằm trong thẻ mở, đặt ngay sau tên thẻ.',
      B: 'Nằm bên trong thẻ đóng.',
      C: 'Nằm ở dòng khai báo <!DOCTYPE html>.',
      D: 'Nằm ở cuối cùng của trang web sau thẻ </html>.'
    },
    correctAnswer: 'A',
    explanation: 'Các thuộc tính HTML (attributes) luôn được viết bên trong thẻ mở (opening tag), đặt sau tên thẻ theo cú pháp: tên_thuộc_tính="giá_trị".'
  },
  {
    id: 2062,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b8',
    sectionTitle: 'Bài 8: Định dạng văn bản',
    category: 'informatics',
    chapter: 'Bài 8: Định dạng văn bản',
    questionNumber: 2,
    questionText: 'Để định dạng trực tiếp màu sắc, cỡ chữ, phông chữ cho một phần tử HTML, người ta dùng thuộc tính phổ biến nào?',
    options: {
      A: 'Thuộc tính href',
      B: 'Thuộc tính src',
      C: 'Thuộc tính style',
      D: 'Thuộc tính name'
    },
    correctAnswer: 'C',
    explanation: "Thuộc tính 'style' (Inline CSS) cho phép định dạng trực tiếp màu sắc, kích thước và phông chữ ngay tại phần tử HTML."
  },
  {
    id: 2063,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b8',
    sectionTitle: 'Bài 8: Định dạng văn bản',
    category: 'informatics',
    chapter: 'Bài 8: Định dạng văn bản',
    questionNumber: 3,
    questionText: 'Các thẻ định dạng tiêu đề trong HTML gồm có bao nhiêu mức, tương ứng từ cấp quan trọng nhất đến thấp nhất?',
    options: {
      A: '3 mức từ <h1> đến <h3>',
      B: '5 mức từ <h1> đến <h5>',
      C: '6 mức từ <h1> đến <h6>',
      D: '10 mức từ <h1> đến <h10>'
    },
    correctAnswer: 'C',
    explanation: 'HTML định nghĩa 6 cấp bậc tiêu đề từ <h1> (quan trọng và to nhất) đến <h6> (nhỏ nhất).'
  },
  {
    id: 2064,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b8',
    sectionTitle: 'Bài 8: Định dạng văn bản',
    category: 'informatics',
    chapter: 'Bài 8: Định dạng văn bản',
    questionNumber: 4,
    questionText: 'Thẻ HTML nào sau đây được dùng để định nghĩa một đoạn văn bản (paragraph)?',
    options: {
      A: 'Thẻ <div>',
      B: 'Thẻ <p>',
      C: 'Thẻ <span>',
      D: 'Thẻ <text>'
    },
    correctAnswer: 'B',
    explanation: 'Thẻ <p> (paragraph) dùng để chứa một đoạn văn bản, trình duyệt sẽ tự động thêm khoảng cách trên và dưới đoạn văn.'
  },
  {
    id: 2065,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b8',
    sectionTitle: 'Bài 8: Định dạng văn bản',
    category: 'informatics',
    chapter: 'Bài 8: Định dạng văn bản',
    questionNumber: 5,
    questionText: 'Khi muốn tạo một đường kẻ ngang trên trang web để phân cách hai phần nội dung, ta sử dụng thẻ đơn nào?',
    options: {
      A: 'Thẻ <br>',
      B: 'Thẻ <hr>',
      C: 'Thẻ <line>',
      D: 'Thẻ <cut>'
    },
    correctAnswer: 'B',
    explanation: 'Thẻ đơn <hr> (horizontal rule) tạo ra một đường kẻ ngang phân tách các khối nội dung trên trang.'
  },
  {
    id: 2066,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b8',
    sectionTitle: 'Bài 8: Định dạng văn bản',
    category: 'informatics',
    chapter: 'Bài 8: Định dạng văn bản',
    questionNumber: 6,
    questionText: 'Thẻ nào sau đây được sử dụng để ngắt và xuống dòng văn bản ngay tại vị trí đặt thẻ?',
    options: {
      A: 'Thẻ <p>',
      B: 'Thẻ <br>',
      C: 'Thẻ <enter>',
      D: 'Thẻ <hr>'
    },
    correctAnswer: 'B',
    explanation: 'Thẻ đơn <br> (break line) dùng để ép trình duyệt xuống dòng ngay lập tức mà không tạo khoảng cách đoạn lớn như thẻ <p>.'
  },
  {
    id: 2067,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b8',
    sectionTitle: 'Bài 8: Định dạng văn bản',
    category: 'informatics',
    chapter: 'Bài 8: Định dạng văn bản',
    questionNumber: 7,
    questionText: 'Để in đậm văn bản nhằm nhấn mạnh ngữ nghĩa của từ ngữ theo chuẩn HTML5 hiện đại, người ta khuyến khích sử dụng thẻ nào?',
    options: {
      A: 'Thẻ <b> hoặc <strong>',
      B: 'Thẻ <i> hoặc <em>',
      C: 'Thẻ <u>',
      D: 'Thẻ <del>'
    },
    correctAnswer: 'A',
    explanation: 'Thẻ <b> (bold) hoặc <strong> dùng để in đậm, trong đó <strong> mang ý nghĩa ngữ nghĩa nhấn mạnh tầm quan trọng của nội dung.'
  },
  {
    id: 2068,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b8',
    sectionTitle: 'Bài 8: Định dạng văn bản',
    category: 'informatics',
    chapter: 'Bài 8: Định dạng văn bản',
    questionNumber: 8,
    questionText: 'Để hiển thị công thức toán học có dạng chỉ số trên như x² trong HTML, ta đặt số 2 vào giữa cặp thẻ nào?',
    options: {
      A: 'Cặp thẻ <sub>...</sub>',
      B: 'Cặp thẻ <sup>...</sup>',
      C: 'Cặp thẻ <top>...</top>',
      D: 'Cặp thẻ <small>...</small>'
    },
    correctAnswer: 'B',
    explanation: 'Cặp thẻ <sup>...</sup> (superscript) dùng để hiển thị chỉ số trên (số mũ), ví dụ: x<sup>2</sup> hiển thị thành x².'
  },
  {
    id: 2069,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b8',
    sectionTitle: 'Bài 8: Định dạng văn bản',
    category: 'informatics',
    chapter: 'Bài 8: Định dạng văn bản',
    questionNumber: 9,
    questionText: 'Cặp thẻ nào sau đây được dùng để tạo chỉ số dưới như công thức hóa học H₂O?',
    options: {
      A: 'Cặp thẻ <sub>...</sub>',
      B: 'Cặp thẻ <sup>...</sup>',
      C: 'Cặp thẻ <mark>...</mark>',
      D: 'Cặp thẻ <del>...</del>'
    },
    correctAnswer: 'A',
    explanation: 'Cặp thẻ <sub>...</sub> (subscript) dùng để tạo chỉ số dưới, ví dụ: H<sub>2</sub>O hiển thị thành H₂O.'
  },
  {
    id: 2070,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b8',
    sectionTitle: 'Bài 8: Định dạng văn bản',
    category: 'informatics',
    chapter: 'Bài 8: Định dạng văn bản',
    questionNumber: 10,
    questionText: 'Muốn thiết lập màu chữ đỏ cho một đoạn văn bản bằng thuộc tính style, cú pháp nào sau đây là chính xác?',
    options: {
      A: '<p style="color: red;">Nội dung</p>',
      B: '<p color="red">Nội dung</p>',
      C: '<p style="font-color: red;">Nội dung</p>',
      D: '<p style="background: red;">Nội dung</p>'
    },
    correctAnswer: 'A',
    explanation: 'Cú pháp chuẩn của thuộc tính style trong CSS để đổi màu chữ là: style="color: tên_màu;".'
  },
  {
    id: 2071,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b8',
    sectionTitle: 'Bài 8: Định dạng văn bản',
    category: 'informatics',
    chapter: 'Bài 8: Định dạng văn bản',
    questionNumber: 11,
    questionText: 'Khi tìm hiểu về các thẻ định dạng tiêu đề, đoạn văn và khối trong HTML:\n(a) Thẻ <h1> biểu thị tiêu đề ở cấp bậc lớn nhất, quan trọng nhất.\n(b) Cặp thẻ <p>...</p> hiển thị nội dung trên một khối dòng mới và có khoảng cách đệm nhỏ.\n(c) HTML5 khuyến khích dùng thẻ <u> để gạch chân chữ thay vì dùng thuộc tính style.\n(d) Phần tử <div> bắt đầu trên một dòng mới và là phần tử dạng khối chứa được nhiều thành phần.\nNhững nhận định ĐÚNG theo đề cương ôn tập là:',
    options: {
      A: '(a), (b) và (d)',
      B: '(a) và (c)',
      C: '(b) và (c)',
      D: 'Cả 4 nhận định'
    },
    correctAnswer: 'A',
    explanation: 'Theo đề cương ôn tập: (a), (b) và (d) là đúng. (c) sai vì HTML5 khuyến khích dùng CSS style (text-decoration: underline) thay vì thẻ cổ <u>.'
  },
  {
    id: 2072,
    subject: 'informatics',
    unit: 'it-12',
    unitTitle: 'Tin Học 12 - Học Kì I',
    sectionId: 'it-b8',
    sectionTitle: 'Bài 8: Định dạng văn bản',
    category: 'informatics',
    chapter: 'Bài 8: Định dạng văn bản',
    questionNumber: 12,
    questionText: 'Khi tìm hiểu về các thẻ định dạng kiểu chữ và thuộc tính style trong HTML:\n(a) Thẻ <em> được dùng để in nghiêng văn bản với ý nghĩa nhấn mạnh nội dung.\n(b) Thẻ <mark> dùng để đánh dấu (highlight) làm nổi bật đoạn văn bản.\n(c) Để viết số mũ ta dùng thẻ <sub>, để viết chỉ số dưới ta dùng thẻ <sup>.\n(d) Trong thuộc tính style, có thể kết hợp nhiều định dạng phân cách nhau bởi dấu chấm phẩy (;).\nNhững nhận định ĐÚNG theo đề cương ôn tập là:',
    options: {
      A: '(a), (b) và (d)',
      B: '(a) và (c)',
      C: '(c) và (d)',
      D: 'Cả 4 nhận định'
    },
    correctAnswer: 'A',
    explanation: 'Theo đề cương ôn tập: (a), (b) và (d) là đúng. (c) sai vì viết số mũ dùng <sup> (superscript), còn chỉ số dưới dùng <sub> (subscript).'
  }
];
