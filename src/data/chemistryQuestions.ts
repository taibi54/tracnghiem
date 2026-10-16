import { Question } from '../types/quiz';

export const CHEMISTRY_QUESTIONS: Question[] = [
  // ==========================================
  // PHẦN I: TRẮC NGHIỆM NHIỀU LỰA CHỌN (40 CÂU)
  // ==========================================

  // --- Chương 1: Ester – Lipid (Câu 1 - 5) ---
  {
    id: 1001,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch1',
    sectionTitle: 'Chương 1: Ester – Lipid',
    category: 'chemistry',
    chapter: 'Chương 1: Ester – Lipid',
    questionNumber: 1,
    questionText: 'Nhóm chức nào sau đây là nhóm chức của ester?',
    options: {
      A: '–OH.',
      B: '–COO–.',
      C: '–COOH.',
      D: '–CHO.'
    },
    correctAnswer: 'B',
    explanation: 'Nhóm chức của ester là –COO–. (–OH là alcohol/phenol, –COOH là carboxylic acid, –CHO là aldehyde).'
  },
  {
    id: 1002,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch1',
    sectionTitle: 'Chương 1: Ester – Lipid',
    category: 'chemistry',
    chapter: 'Chương 1: Ester – Lipid',
    questionNumber: 2,
    questionText: 'Tên gọi của ester CH3COOC2H5 là',
    options: {
      A: 'methyl acetate.',
      B: 'ethyl acetate.',
      C: 'methyl formate.',
      D: 'ethyl formate.'
    },
    correctAnswer: 'B',
    explanation: 'Gốc C2H5– là ethyl, gốc CH3COO– là acetate. Do đó tên gọi là ethyl acetate.'
  },
  {
    id: 1003,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch1',
    sectionTitle: 'Chương 1: Ester – Lipid',
    category: 'chemistry',
    chapter: 'Chương 1: Ester – Lipid',
    questionNumber: 3,
    questionText: 'Phản ứng thủy phân ester trong môi trường base gọi là phản ứng',
    options: {
      A: 'ester hóa.',
      B: 'iodoform.',
      C: 'tráng gương.',
      D: 'xà phòng hóa.'
    },
    correctAnswer: 'D',
    explanation: 'Phản ứng thủy phân ester trong môi trường base (kiềm) là phản ứng một chiều, được gọi là phản ứng xà phòng hóa.'
  },
  {
    id: 1004,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch1',
    sectionTitle: 'Chương 1: Ester – Lipid',
    category: 'chemistry',
    chapter: 'Chương 1: Ester – Lipid',
    questionNumber: 4,
    questionText: '“Chất béo là các triester của…(1)… với các…(2)…, gọi chung là các triglyceride”. Nội dung phù hợp trong các vị trí (1), (2) lần lượt là:',
    options: {
      A: 'glycerol, carboxylic acid.',
      B: 'ethylene glycol, acid béo.',
      C: 'glycerol, acid béo.',
      D: 'ethylene glycol, carboxylic acid.'
    },
    correctAnswer: 'C',
    explanation: 'Định nghĩa: Chất béo là triester của glycerol với các acid béo, gọi chung là triglyceride.'
  },
  {
    id: 1005,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch1',
    sectionTitle: 'Chương 1: Ester – Lipid',
    category: 'chemistry',
    chapter: 'Chương 1: Ester – Lipid',
    questionNumber: 5,
    questionText: 'Thành phần chính của chất giặt rửa tổng hợp thường là',
    options: {
      A: 'muối sodium hoặc potassium của acid béo.',
      B: 'muối potassium oleate hoặc potassium linoleate.',
      C: 'muối sodium alkylsulfate hoặc sodium alkylbenzenesulfonate.',
      D: 'muối sodium hoặc potassium của carboxylic acid.'
    },
    correctAnswer: 'C',
    explanation: 'Chất giặt rửa tổng hợp thường chứa muối sodium alkylsulfate hoặc sodium alkylbenzenesulfonate (khác với xà phòng truyền thống là muối của acid béo).'
  },

  // --- Chương 2: Carbohydrate (Câu 6 - 10) ---
  {
    id: 1006,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch2',
    sectionTitle: 'Chương 2: Carbohydrate',
    category: 'chemistry',
    chapter: 'Chương 2: Carbohydrate',
    questionNumber: 6,
    questionText: 'Công thức phân tử của saccharose là',
    options: {
      A: 'C5H10O5.',
      B: 'C6H12O6.',
      C: 'C12H22O11.',
      D: '(C6H10O5)n.'
    },
    correctAnswer: 'C',
    explanation: 'Saccharose là disaccharide có công thức phân tử là C12H22O11.'
  },
  {
    id: 1007,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch2',
    sectionTitle: 'Chương 2: Carbohydrate',
    category: 'chemistry',
    chapter: 'Chương 2: Carbohydrate',
    questionNumber: 7,
    questionText: 'Chất nào sau đây thuộc loại monosaccharide?',
    options: {
      A: 'Tinh bột.',
      B: 'Cellulose.',
      C: 'Fructose.',
      D: 'Saccharose.'
    },
    correctAnswer: 'C',
    explanation: 'Fructose và glucose là monosaccharide. Saccharose là disaccharide; tinh bột và cellulose là polysaccharide.'
  },
  {
    id: 1008,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch2',
    sectionTitle: 'Chương 2: Carbohydrate',
    category: 'chemistry',
    chapter: 'Chương 2: Carbohydrate',
    questionNumber: 8,
    questionText: 'Chất nào sau đây không có phản ứng thủy phân?',
    options: {
      A: 'Tinh bột.',
      B: 'Cellulose.',
      C: 'Glucose.',
      D: 'Saccharose.'
    },
    correctAnswer: 'C',
    explanation: 'Glucose là monosaccharide (đường đơn) nên không bị thủy phân.'
  },
  {
    id: 1009,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch2',
    sectionTitle: 'Chương 2: Carbohydrate',
    category: 'chemistry',
    chapter: 'Chương 2: Carbohydrate',
    questionNumber: 9,
    questionText: 'Ở nhiệt độ thường, nhỏ vài giọt dung dịch iodine vào lát cắt củ khoai lang thấy xuất hiện màu',
    options: {
      A: 'đỏ.',
      B: 'xanh tím.',
      C: 'nâu đỏ.',
      D: 'hồng.'
    },
    correctAnswer: 'B',
    explanation: 'Khoai lang chứa nhiều tinh bột. Tinh bột tác dụng với iodine tạo hợp chất màu xanh tím đặc trưng.'
  },
  {
    id: 1010,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch2',
    sectionTitle: 'Chương 2: Carbohydrate',
    category: 'chemistry',
    chapter: 'Chương 2: Carbohydrate',
    questionNumber: 10,
    questionText: 'Tinh bột chứa hỗn hợp chất nào sau đây?',
    options: {
      A: 'Glucose và fructose.',
      B: 'Amylose và cellulose.',
      C: 'Amylose và amylopectin.',
      D: 'Glucose và saccharose.'
    },
    correctAnswer: 'C',
    explanation: 'Tinh bột là hỗn hợp của 2 loại polysaccharide: amylose (mạch không phân nhánh) và amylopectin (mạch phân nhánh).'
  },

  // --- Chương 3: Hợp chất chứa nitrogen (Câu 11 - 20) ---
  {
    id: 1011,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch3',
    sectionTitle: 'Chương 3: Hợp chất chứa nitrogen',
    category: 'chemistry',
    chapter: 'Chương 3: Hợp chất chứa nitrogen',
    questionNumber: 11,
    questionText: 'Amine là dẫn xuất của ammonia, trong đó một hay nhiều nguyên tử hydrogen trong phân tử ammonia được thay thế bằng một hay nhiều gốc',
    options: {
      A: 'NH2.',
      B: 'hydrocarbon.',
      C: 'Cl.',
      D: 'alkyl.'
    },
    correctAnswer: 'B',
    explanation: 'Theo định nghĩa SGK Hóa 12 mới: Amine là dẫn xuất của ammonia khi thay thế nguyên tử H bằng gốc hydrocarbon.'
  },
  {
    id: 1012,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch3',
    sectionTitle: 'Chương 3: Hợp chất chứa nitrogen',
    category: 'chemistry',
    chapter: 'Chương 3: Hợp chất chứa nitrogen',
    questionNumber: 12,
    questionText: 'Chất nào sau đây là amine bậc hai?',
    options: {
      A: 'H2N[CH2]6NH2.',
      B: '(CH3)2CHNH2.',
      C: 'CH3NHCH3.',
      D: 'C6H5NH2.'
    },
    correctAnswer: 'C',
    explanation: 'CH3–NH–CH3 (dimethylamine) có nguyên tử N liên kết với 2 gốc hydrocarbon nên là amine bậc hai.'
  },
  {
    id: 1013,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch3',
    sectionTitle: 'Chương 3: Hợp chất chứa nitrogen',
    category: 'chemistry',
    chapter: 'Chương 3: Hợp chất chứa nitrogen',
    questionNumber: 13,
    questionText: 'Hợp chất nào sau đây là amino acid?',
    options: {
      A: 'H2NCH2COOCH3.',
      B: 'CH3NHCH2CH3.',
      C: 'H2NCH2COOH.',
      D: 'HOCH2COOH.'
    },
    correctAnswer: 'C',
    explanation: 'Amino acid chứa đồng thời nhóm amino (–NH2) và nhóm carboxyl (–COOH). H2NCH2COOH chính là glycine.'
  },
  {
    id: 1014,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch3',
    sectionTitle: 'Chương 3: Hợp chất chứa nitrogen',
    category: 'chemistry',
    chapter: 'Chương 3: Hợp chất chứa nitrogen',
    questionNumber: 14,
    questionText: 'Protein là hợp chất cao phân tử được tạo thành từ một hay nhiều',
    options: {
      A: 'monosaccharide.',
      B: 'chuỗi polypeptide.',
      C: 'polysaccharide.',
      D: 'disaccharide.'
    },
    correctAnswer: 'B',
    explanation: 'Protein là hợp chất cao phân tử được cấu tạo từ một hay nhiều chuỗi polypeptide liên kết với nhau.'
  },
  {
    id: 1015,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch3',
    sectionTitle: 'Chương 3: Hợp chất chứa nitrogen',
    category: 'chemistry',
    chapter: 'Chương 3: Hợp chất chứa nitrogen',
    questionNumber: 15,
    questionText: 'Khi thủy phân hoàn toàn protein đơn giản, thu được các',
    options: {
      A: 'β– amino acid.',
      B: 'dipeptide.',
      C: 'α– amino acid.',
      D: 'polypeptide.'
    },
    correctAnswer: 'C',
    explanation: 'Protein được tạo thành từ các đơn vị α-amino acid liên kết bằng liên kết peptide. Khi thủy phân hoàn toàn thu được hỗn hợp các α-amino acid.'
  },
  {
    id: 1016,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch3',
    sectionTitle: 'Chương 3: Hợp chất chứa nitrogen',
    category: 'chemistry',
    chapter: 'Chương 3: Hợp chất chứa nitrogen',
    questionNumber: 16,
    questionText: 'Cho dãy chất: C2H5NH2, CH3NH2, CH3COOH, CH3NHCH3. Số chất trong dãy phản ứng với HCl trong dung dịch là',
    options: {
      A: '3.',
      B: '2.',
      C: '4.',
      D: '1.'
    },
    correctAnswer: 'A',
    explanation: 'Các amine có tính base nên phản ứng với acid HCl: C2H5NH2, CH3NH2, CH3NHCH3 (3 chất). CH3COOH là acid nên không phản ứng.'
  },
  {
    id: 1017,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch3',
    sectionTitle: 'Chương 3: Hợp chất chứa nitrogen',
    category: 'chemistry',
    chapter: 'Chương 3: Hợp chất chứa nitrogen',
    questionNumber: 17,
    questionText: 'Cho vài giọt nước bromine vào dung dịch aniline, lắc nhẹ thấy xuất hiện',
    options: {
      A: 'kết tủa trắng.',
      B: 'kết tủa đỏ nâu.',
      C: 'bọt khí.',
      D: 'dung dịch màu xanh.'
    },
    correctAnswer: 'A',
    explanation: 'Aniline (C6H5NH2) tác dụng với nước bromine tạo kết tủa trắng 2,4,6-tribromoaniline.'
  },
  {
    id: 1018,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch3',
    sectionTitle: 'Chương 3: Hợp chất chứa nitrogen',
    category: 'chemistry',
    chapter: 'Chương 3: Hợp chất chứa nitrogen',
    questionNumber: 18,
    questionText: 'Tính chất hóa học nào sau đây đặc trưng của amino acid?',
    options: {
      A: 'Tính oxi hóa mạnh.',
      B: 'Tính khử mạnh.',
      C: 'Tính lưỡng tính.',
      D: 'Tính acid mạnh.'
    },
    correctAnswer: 'C',
    explanation: 'Phân tử amino acid có nhóm –NH2 (tính base) và nhóm –COOH (tính acid), do đó có tính lưỡng tính đặc trưng.'
  },
  {
    id: 1019,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch3',
    sectionTitle: 'Chương 3: Hợp chất chứa nitrogen',
    category: 'chemistry',
    chapter: 'Chương 3: Hợp chất chứa nitrogen',
    questionNumber: 19,
    questionText: 'Để phân biệt hai peptide Ala–Ala và Ala–Ala–Ala ta có thể dùng hóa chất nào sau đây?',
    options: {
      A: 'Dung dịch NaOH.',
      B: 'Dung dịch H2SO4.',
      C: 'Cu(OH)2/OH–.',
      D: 'Quỳ tím.'
    },
    correctAnswer: 'C',
    explanation: 'Ala–Ala là dipeptide không có phản ứng màu biuret. Ala–Ala–Ala là tripeptide có phản ứng biuret với Cu(OH)2/OH– tạo phức màu tím.'
  },
  {
    id: 1020,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch3',
    sectionTitle: 'Chương 3: Hợp chất chứa nitrogen',
    category: 'chemistry',
    chapter: 'Chương 3: Hợp chất chứa nitrogen',
    questionNumber: 20,
    questionText: 'Phát biểu nào sau đây sai khi nói về enzyme?',
    options: {
      A: 'Phần lớn enzyme là những protein xúc tác cho các phản ứng hóa học và sinh hóa.',
      B: 'Enzyme không có tính chọn lọc cao, mỗi enzyme xúc tác cho một phản ứng sinh hóa.',
      C: 'Tốc độ phản ứng có xúc tác enzyme thường nhanh hơn nhiều lần so với với xúc tác hóa học.',
      D: 'Enzyme chỉ hoạt động hiệu quả trong một khoảng nhiệt độ và pH nhất định.'
    },
    correctAnswer: 'B',
    explanation: 'Phát biểu B sai vì enzyme có tính chọn lọc RẤT CAO (mỗi enzyme chỉ xúc tác cho một phản ứng hoặc một kiểu phản ứng nhất định).'
  },

  // --- Chương 4: Polymer (Câu 21 - 30) ---
  {
    id: 1021,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch4',
    sectionTitle: 'Chương 4: Polymer',
    category: 'chemistry',
    chapter: 'Chương 4: Polymer',
    questionNumber: 21,
    questionText: 'Phát biểu nào sau đây không đúng về tính chất vật lý của polymer?',
    options: {
      A: 'Hầu hết polymer là chất rắn, không bay hơi.',
      B: 'Các polymer không có nhiệt độ nóng chảy xác định.',
      C: 'Đa số polymer tan tốt trong các dung môi thông thường như nước, alcohol.',
      D: 'Một số polymer có tính dẻo, một số có tính đàn hồi.'
    },
    correctAnswer: 'C',
    explanation: 'Phát biểu C không đúng: Đa số polymer KHÔNG tan trong nước và các dung môi thông thường.'
  },
  {
    id: 1022,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch4',
    sectionTitle: 'Chương 4: Polymer',
    category: 'chemistry',
    chapter: 'Chương 4: Polymer',
    questionNumber: 22,
    questionText: 'Các động vật ăn cỏ như trâu, bò, dê, cừu,... có thể chuyển hoá cellulose trong thức ăn thành glucose bằng enzyme cellulase để cung cấp năng lượng cho cơ thể. Phản ứng chuyển hoá cellulose thành glucose thuộc loại phản ứng nào sau đây?',
    options: {
      A: 'Tăng mạch polymer.',
      B: 'Cắt mạch polymer.',
      C: 'Trùng ngưng',
      D: 'Giữ nguyên mạch polymer.'
    },
    correctAnswer: 'B',
    explanation: 'Thủy phân cellulose (mạch dài) thành glucose (phân tử nhỏ) là phản ứng cắt mạch polymer.'
  },
  {
    id: 1023,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch4',
    sectionTitle: 'Chương 4: Polymer',
    category: 'chemistry',
    chapter: 'Chương 4: Polymer',
    questionNumber: 23,
    questionText: 'Tơ nào sau đây thuộc loại tơ bán tổng hợp?',
    options: {
      A: 'Tơ capron.',
      B: 'Tơ visco.',
      C: 'Tơ tằm.',
      D: 'Tơ nitron.'
    },
    correctAnswer: 'B',
    explanation: 'Tơ visco và tơ cellulose acetate là tơ bán tổng hợp (tơ nhân tạo, chế biến hóa học từ cellulose).'
  },
  {
    id: 1024,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch4',
    sectionTitle: 'Chương 4: Polymer',
    category: 'chemistry',
    chapter: 'Chương 4: Polymer',
    questionNumber: 24,
    questionText: 'Monomer được dùng để điều chế poly(propylene) (PP) là',
    options: {
      A: 'CH2=CH–CH3.',
      B: 'CH2=CH2.',
      C: 'CH≡CH.',
      D: 'CH2=CH–CH=CH2.'
    },
    correctAnswer: 'A',
    explanation: 'Poly(propylene) (PP) được điều chế bằng phản ứng trùng hợp propylene (propene): CH2=CH–CH3.'
  },
  {
    id: 1025,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch4',
    sectionTitle: 'Chương 4: Polymer',
    category: 'chemistry',
    chapter: 'Chương 4: Polymer',
    questionNumber: 25,
    questionText: 'Cao su là vật liệu polymer có tính chất nào sau đây?',
    options: {
      A: 'Tính đàn hồi.',
      B: 'Tính dẻo.',
      C: 'Dễ kéo thành sợi mảnh.',
      D: 'Dễ tan trong nước.'
    },
    correctAnswer: 'A',
    explanation: 'Cao su là vật liệu polymer có tính đàn hồi đặc trưng (khả năng biến dạng khi chịu lực và trở lại hình dạng ban đầu khi thôi lực).'
  },
  {
    id: 1026,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch4',
    sectionTitle: 'Chương 4: Polymer',
    category: 'chemistry',
    chapter: 'Chương 4: Polymer',
    questionNumber: 26,
    questionText: 'Vật liệu polymer nào sau đây có khả năng kết dính bề mặt của hai vật liệu rắn với nhau mà không làm biến đổi bản chất các vật liệu được kết dính?',
    options: {
      A: 'Cao su.',
      B: 'Keo dán.',
      C: 'Chất dẻo.',
      D: 'Tơ.'
    },
    correctAnswer: 'B',
    explanation: 'Định nghĩa: Keo dán là vật liệu có khả năng kết dính bề mặt của hai vật liệu rắn với nhau mà không làm biến đổi bản chất của chúng.'
  },
  {
    id: 1027,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch4',
    sectionTitle: 'Chương 4: Polymer',
    category: 'chemistry',
    chapter: 'Chương 4: Polymer',
    questionNumber: 27,
    questionText: 'Phát biểu nào sau đây đúng?',
    options: {
      A: 'Polymer nhiệt dẻo thích hợp cho việc tái chế.',
      B: 'Tơ tằm, tơ acetate đều thuộc loại tơ thiên nhiên.',
      C: 'Cao su lưu hóa có cấu trúc mạch không phân nhánh.',
      D: 'Tơ nylon–6,6 được điều chế bằng phản ứng trùng hợp.'
    },
    correctAnswer: 'A',
    explanation: 'Phát biểu A đúng vì polymer nhiệt dẻo khi đun nóng bị mềm ra, có thể định hình lại nên thích hợp cho tái chế. (Tơ acetate là bán tổng hợp; cao su lưu hóa có mạch không gian; nylon-6,6 điều chế bằng trùng ngưng).'
  },
  {
    id: 1028,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch4',
    sectionTitle: 'Chương 4: Polymer',
    category: 'chemistry',
    chapter: 'Chương 4: Polymer',
    questionNumber: 28,
    questionText: 'Vật liệu composite thường bao gồm hai thành phần nào sau đây?',
    options: {
      A: 'Dạng cốt sợi và dạng cốt hạt.',
      B: 'Vật liệu cứng và vật liệu mềm.',
      C: 'Vật liệu cốt và vật liệu móng.',
      D: 'Vật liệu cốt và vật liệu nền.'
    },
    correctAnswer: 'D',
    explanation: 'Vật liệu composite gồm hai thành phần chính: vật liệu nền (chất kết dính) và vật liệu cốt (chất gia cường/độn).'
  },
  {
    id: 1029,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch4',
    sectionTitle: 'Chương 4: Polymer',
    category: 'chemistry',
    chapter: 'Chương 4: Polymer',
    questionNumber: 29,
    questionText: 'Quá trình kết hợp nhiều phân tử nhỏ (monomer) thành phân tử lớn (polymer) đồng thời giải phóng những phân tử nhỏ khác (thí dụ H2O) được gọi là phản ứng',
    options: {
      A: 'trùng ngưng.',
      B: 'trùng hợp.',
      C: 'xà phòng hóa.',
      D: 'thủy phân.'
    },
    correctAnswer: 'A',
    explanation: 'Định nghĩa: Phản ứng trùng ngưng là quá trình kết hợp nhiều phân tử nhỏ thành phân tử lớn đồng thời giải phóng phân tử nhỏ khác (như H2O).'
  },
  {
    id: 1030,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch4',
    sectionTitle: 'Chương 4: Polymer',
    category: 'chemistry',
    chapter: 'Chương 4: Polymer',
    questionNumber: 30,
    questionText: 'Tại sao không nên giặt quần áo làm bằng tơ tằm hoặc len lông cừu bằng xà phòng có độ kiềm cao?',
    options: {
      A: 'Vì bản chất protein của chúng dễ bị thủy phân (phân hủy) trong môi trường kiềm.',
      B: 'Vì xà phòng kiềm làm vải bị cứng.',
      C: 'Vì sẽ làm quần áo bị phai màu.',
      D: 'Vì chúng sẽ bị co rút lại thành cục.'
    },
    correctAnswer: 'A',
    explanation: 'Tơ tằm và len lông cừu có bản chất là protein. Các liên kết peptide trong protein rất dễ bị thủy phân và phá hủy trong môi trường kiềm mạnh.'
  },

  // --- Chương 5: Pin điện – Điện phân (Câu 31 - 40) ---
  {
    id: 1031,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch5',
    sectionTitle: 'Chương 5: Pin điện – Điện phân',
    category: 'chemistry',
    chapter: 'Chương 5: Pin điện – Điện phân',
    questionNumber: 31,
    questionText: 'Kí hiệu cặp oxi hoá − khử ứng với quá trình khử: Fe3+ + 1e → Fe2+ là',
    options: {
      A: 'Fe3+/Fe2+.',
      B: 'Fe2+/Fe.',
      C: 'Fe3+/Fe.',
      D: 'Fe2+/Fe3+.'
    },
    correctAnswer: 'A',
    explanation: 'Theo quy ước viết dạng oxi hóa trước, dạng khử sau: Fe3+/Fe2+.'
  },
  {
    id: 1032,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch5',
    sectionTitle: 'Chương 5: Pin điện – Điện phân',
    category: 'chemistry',
    chapter: 'Chương 5: Pin điện – Điện phân',
    questionNumber: 32,
    questionText: 'Cho dãy sắp xếp các kim loại theo chiều giảm dần tính khử: Na, Mg, Al, Fe. Trong số các cặp oxi hoá − khử sau, cặp nào có giá trị thế điện cực chuẩn nhỏ nhất?',
    options: {
      A: 'Mg2+/Mg.',
      B: 'Fe2+/Fe.',
      C: 'Na+/Na.',
      D: 'Al3+/Al.'
    },
    correctAnswer: 'C',
    explanation: 'Kim loại có tính khử càng mạnh thì thế điện cực chuẩn E° của cặp oxh/khử càng âm (càng nhỏ). Na có tính khử mạnh nhất nên cặp Na+/Na có giá trị E° nhỏ nhất (-2,71 V).'
  },
  {
    id: 1033,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch5',
    sectionTitle: 'Chương 5: Pin điện – Điện phân',
    category: 'chemistry',
    chapter: 'Chương 5: Pin điện – Điện phân',
    questionNumber: 33,
    questionText: 'Trong nước, thế điện cực chuẩn của kim loại M2+/M càng lớn thì dạng khử có tính khử..(1).. và dạng oxi hoá có tính oxi hoá..(2).. Cụm từ cần điền vào (1) và (2) lần lượt là',
    options: {
      A: 'càng mạnh và càng yếu.',
      B: 'càng yếu và càng yếu.',
      C: 'càng mạnh và càng mạnh.',
      D: 'càng yếu và càng mạnh.'
    },
    correctAnswer: 'D',
    explanation: 'Quy luật: E° càng lớn thì dạng oxi hóa có tính oxi hóa CÀNG MẠNH, còn dạng khử có tính khử CÀNG YẾU.'
  },
  {
    id: 1034,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch5',
    sectionTitle: 'Chương 5: Pin điện – Điện phân',
    category: 'chemistry',
    chapter: 'Chương 5: Pin điện – Điện phân',
    questionNumber: 34,
    questionText: 'Theo quy ước, kí hiệu pin điện hoá với điện cực âm hay còn gọi là...(1)... đặt ở bên trái và điện cực dương hay còn gọi là...(2)... đặt ở bên phải. Thông tin phù hợp điền vào (1) và (2) là',
    options: {
      A: 'anode và cathode.',
      B: 'cathode và anode.',
      C: 'anion và cation.',
      D: 'cation và anion.'
    },
    correctAnswer: 'A',
    explanation: 'Trong pin điện hóa: Cực âm là anode (xảy ra quá trình oxi hóa) đặt bên trái, cực dương là cathode (xảy ra quá trình khử) đặt bên phải.'
  },
  {
    id: 1035,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch5',
    sectionTitle: 'Chương 5: Pin điện – Điện phân',
    category: 'chemistry',
    chapter: 'Chương 5: Pin điện – Điện phân',
    questionNumber: 35,
    questionText: 'Trong quá trình hoạt động của pin điện hoá Zn − Cu, nhận định nào sau đây không đúng về vai trò của cầu muối?',
    options: {
      A: 'Ngăn cách hai dung dịch chất điện li.',
      B: 'Cho dòng electron chạy qua.',
      C: 'Trung hoà điện ở mỗi dung dịch điện li.',
      D: 'Đóng kín mạch điện.'
    },
    correctAnswer: 'B',
    explanation: 'Nhận định B không đúng vì dòng electron chỉ di chuyển qua dây dẫn kim loại bên ngoài; trong cầu muối chỉ có sự di chuyển của các ION (anion và cation) để trung hòa điện tích.'
  },
  {
    id: 1036,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch5',
    sectionTitle: 'Chương 5: Pin điện – Điện phân',
    category: 'chemistry',
    chapter: 'Chương 5: Pin điện – Điện phân',
    questionNumber: 36,
    questionText: 'Trong quá trình hoạt động của pin điện Zn − Cu, dòng electron di chuyển từ',
    options: {
      A: 'cực zinc (Zn) sang cực copper (Cu).',
      B: 'cực bên phải sang cực bên trái.',
      C: 'cathode sang anode.',
      D: 'cực dương sang cực âm.'
    },
    correctAnswer: 'A',
    explanation: 'Tại cực Zn (anode, cực âm) xảy ra sự oxi hóa: Zn → Zn2+ + 2e. Electron giải phóng di chuyển qua dây dẫn sang cực Cu (cathode, cực dương).'
  },
  {
    id: 1037,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch5',
    sectionTitle: 'Chương 5: Pin điện – Điện phân',
    category: 'chemistry',
    chapter: 'Chương 5: Pin điện – Điện phân',
    questionNumber: 37,
    questionText: 'Bình điện phân là công cụ để chuyển...(1)... thành hoá năng (năng lượng phản ứng hoá học). Thông tin phù hợp điền vào (1) là',
    options: {
      A: 'điện năng.',
      B: 'quang năng.',
      C: 'động năng.',
      D: 'thế năng.'
    },
    correctAnswer: 'A',
    explanation: 'Quá trình điện phân tiêu thụ điện năng từ nguồn ngoài để thúc đẩy phản ứng hóa học xảy ra (chuyển điện năng thành hóa năng).'
  },
  {
    id: 1038,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch5',
    sectionTitle: 'Chương 5: Pin điện – Điện phân',
    category: 'chemistry',
    chapter: 'Chương 5: Pin điện – Điện phân',
    questionNumber: 38,
    questionText: 'Nhận xét nào sau đây đúng về quá trình điện phân ở hai điện cực?',
    options: {
      A: 'Cation nhường electron ở cathode.',
      B: 'Anion nhận electron ở anode.',
      C: 'Sự oxi hoá xảy ra ở anode.',
      D: 'Sự oxi hoá xảy ra ở cathode.'
    },
    correctAnswer: 'C',
    explanation: 'Trong mọi hệ điện hóa (cả pin điện và bình điện phân): Tại anode luôn xảy ra quá trình oxi hóa (nhường e); tại cathode luôn xảy ra quá trình khử (nhận e).'
  },
  {
    id: 1039,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch5',
    sectionTitle: 'Chương 5: Pin điện – Điện phân',
    category: 'chemistry',
    chapter: 'Chương 5: Pin điện – Điện phân',
    questionNumber: 39,
    questionText: 'Khi điện phân dung dịch CuSO4 bằng dòng điện một chiều (với điện cực anode bằng Cu) thì ở anode xảy ra quá trình',
    options: {
      A: 'khử Cu2+ thành Cu.',
      B: 'oxi hoá H2O thành H+ và O2.',
      C: 'oxi hoá Cu thành Cu2+.',
      D: 'khử H2O thành H2 và OH–.'
    },
    correctAnswer: 'C',
    explanation: 'Đây là hiện tượng dương cực tan (anode tan): Anode bằng đồng bị oxi hóa tan ra: Cu → Cu2+ + 2e.'
  },
  {
    id: 1040,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-ch5',
    sectionTitle: 'Chương 5: Pin điện – Điện phân',
    category: 'chemistry',
    chapter: 'Chương 5: Pin điện – Điện phân',
    questionNumber: 40,
    questionText: 'Trong công nghiệp, quá trình điện phân dung dịch NaCl bão hoà (điện cực trơ, có màng ngăn xốp) tạo ra khí nào sau đây ở cathode?',
    options: {
      A: 'Hydrogen.',
      B: 'Chlorine.',
      C: 'Oxygen.',
      D: 'Hydrogen chloride.'
    },
    correctAnswer: 'A',
    explanation: 'Tại cathode (cực âm): H2O bị khử: 2H2O + 2e → H2↑ + 2OH–. Do đó khí thu được ở cathode là Hydrogen (H2). Khí thu ở anode là Cl2.'
  },

  // ==========================================
  // PHẦN II: TRẮC NGHIỆM ĐÚNG SAI (CÂU 1 - 6)
  // ==========================================
  {
    id: 1041,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-part2',
    sectionTitle: 'Phần II: Trắc nghiệm Đúng/Sai',
    category: 'chemistry',
    chapter: 'Chương 3: Hợp chất chứa nitrogen',
    questionNumber: 1,
    questionText: `[Đúng / Sai] Cho các phát biểu về Glycine:
a) Tên bán hệ thống của glycine là aminoacetic acid.
b) Glycine vừa tác dụng với dung dịch HCl, vừa tác dụng với dung dịch NaOH.
c) Glycine không tham gia phản ứng este hóa.
d) Trong môi trường có pH = 2, glycine tồn tại dạng anion và di chuyển về cực dương của điện trường.
Tổ hợp tính Đúng (Đ) / Sai (S) lần lượt là:`,
    options: {
      A: 'a-Đ, b-Đ, c-Đ, d-S',
      B: 'a-Đ, b-Đ, c-S, d-S',
      C: 'a-S, b-Đ, c-S, d-Đ',
      D: 'a-Đ, b-S, c-S, d-Đ'
    },
    correctAnswer: 'B',
    explanation: 'Đáp án: a Đ, b Đ, c S, d S. Giải thích: c) Sai vì nhóm –COOH của glycine tham gia este hóa với alcohol; d) Sai vì ở pH = 2 (môi trường acid), glycine nhận H+ tồn tại dạng cation H3N+-CH2-COOH và di chuyển về cực âm.'
  },
  {
    id: 1042,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-part2',
    sectionTitle: 'Phần II: Trắc nghiệm Đúng/Sai',
    category: 'chemistry',
    chapter: 'Chương 3: Hợp chất chứa nitrogen',
    questionNumber: 2,
    questionText: `[Đúng / Sai] Vị tanh của cá mè do amine X (bậc ba, M = 59, %C = 61,02%, %H = 15,25%, %N = 23,73%).
a) Công thức phân tử của X là C3H9N.
b) Tên của X là propylamine.
c) Công thức cấu tạo của X là (CH3)3N.
d) Khi cho dung dịch nitrous acid vào dung dịch X thấy có khí nitrogen thoát ra.
Tổ hợp tính Đúng (Đ) / Sai (S) lần lượt là:`,
    options: {
      A: 'a-Đ, b-S, c-Đ, d-S',
      B: 'a-Đ, b-Đ, c-S, d-S',
      C: 'a-S, b-S, c-Đ, d-Đ',
      D: 'a-Đ, b-S, c-Đ, d-Đ'
    },
    correctAnswer: 'A',
    explanation: 'Đáp án: a Đ, b S, c Đ, d S. Giải thích: X là amine bậc ba C3H9N nên X là trimethylamine (CH3)3N. b) Sai vì X không phải propylamine; d) Sai vì amine bậc ba không giải phóng khí N2 với nitrous acid.'
  },
  {
    id: 1043,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-part2',
    sectionTitle: 'Phần II: Trắc nghiệm Đúng/Sai',
    category: 'chemistry',
    chapter: 'Chương 4: Polymer',
    questionNumber: 3,
    questionText: `[Đúng / Sai] Nhựa X (số 3 - PVC dùng làm ống nước, vải mưa, nhiệt cao sinh khí độc) và Nhựa Y (số 2 - HDPE mềm, nóng chảy >110°C, trơ acid kiềm).
a) Thành phần của 2 loại chất dẻo trên đều là các hydrocarbon.
b) Nhựa Y được đánh giá an toàn cho sức khỏe có thể đựng thực phẩm.
c) Nhựa X được khuyến cáo sử dụng để bọc thực phẩm hoặc sử dụng trong lò vi sóng.
d) Polymer tạo ra nhựa X và Y đều thuộc loại polymer tổng hợp.
Tổ hợp tính Đúng (Đ) / Sai (S) lần lượt là:`,
    options: {
      A: 'a-Đ, b-Đ, c-S, d-Đ',
      B: 'a-S, b-Đ, c-S, d-Đ',
      C: 'a-S, b-Đ, c-Đ, d-S',
      D: 'a-Đ, b-S, c-S, d-Đ'
    },
    correctAnswer: 'B',
    explanation: 'Đáp án: a S, b Đ, c S, d Đ. Giải thích: a) Sai vì X là PVC (-CH2-CHCl-) chứa clo nên là dẫn xuất halogen, không phải hydrocarbon; c) Sai vì PVC không an toàn để bọc thực phẩm nóng hoặc quay lò vi sóng.'
  },
  {
    id: 1044,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-part2',
    sectionTitle: 'Phần II: Trắc nghiệm Đúng/Sai',
    category: 'chemistry',
    chapter: 'Chương 4: Polymer',
    questionNumber: 4,
    questionText: `[Đúng / Sai] Poly(ethylene terephthalate) (PET) điều chế từ terephthalic acid và ethylene glycol:
a) Tơ được chế tạo từ PET thuộc loại tơ tổng hợp.
b) Trong một mắt xích PET, phần trăm khối lượng carbon là 62,5%.
c) Phản ứng tổng hợp PET từ terephthalic acid và ethylene glycol thuộc loại phản ứng trùng hợp.
d) PET có thể tái sử dụng nhiều lần để đựng nước uống nóng mà không gây ảnh hưởng đến sức khỏe.
Tổ hợp tính Đúng (Đ) / Sai (S) lần lượt là:`,
    options: {
      A: 'a-Đ, b-Đ, c-S, d-S',
      B: 'a-Đ, b-S, c-Đ, d-S',
      C: 'a-S, b-Đ, c-S, d-Đ',
      D: 'a-Đ, b-Đ, c-Đ, d-S'
    },
    correctAnswer: 'A',
    explanation: 'Đáp án: a Đ, b Đ, c S, d S. Giải thích: b) Đúng: Mắt xích C10H8O4 (M = 192), %C = 120/192 = 62,5%; c) Sai vì đây là phản ứng trùng ngưng; d) Sai vì chai PET không thích hợp đựng nước nóng nhiều lần.'
  },
  {
    id: 1045,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-part2',
    sectionTitle: 'Phần II: Trắc nghiệm Đúng/Sai',
    category: 'chemistry',
    chapter: 'Chương 5: Pin điện – Điện phân',
    questionNumber: 5,
    questionText: `[Đúng / Sai] Xét hoạt động của pin điện hóa Al–Cu (E°(Al3+/Al) = -1,676 V; E°(Cu2+/Cu) = +0,340 V):
a) Ở anode xảy ra quá trình oxi hóa Al, ở cathode xảy ra quá trình khử Cu2+.
b) Điện cực Al tăng khối lượng, điện cực Cu giảm khối lượng.
c) Phản ứng hóa học xảy ra trong pin là: 2Al3+(aq) + 3Cu(s) → 2Al(s) + 3Cu2+(aq).
d) Giá trị sức điện động chuẩn của pin trên là 1,016 V.
Tổ hợp tính Đúng (Đ) / Sai (S) lần lượt là:`,
    options: {
      A: 'a-Đ, b-S, c-S, d-S',
      B: 'a-Đ, b-Đ, c-S, d-S',
      C: 'a-S, b-Đ, c-S, d-Đ',
      D: 'a-Đ, b-S, c-Đ, d-S'
    },
    correctAnswer: 'A',
    explanation: 'Đáp án: a Đ, b S, c S, d S. Giải thích: b) Sai vì Al bị tan ra nên giảm khối lượng, Cu bám vào cực Cu nên tăng khối lượng; c) Sai vì chiều phản ứng tự diễn ra là 2Al + 3Cu2+ → 2Al3+ + 3Cu; d) Sai vì E°pin = 0,340 - (-1,676) = 2,016 V.'
  },
  {
    id: 1046,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-part2',
    sectionTitle: 'Phần II: Trắc nghiệm Đúng/Sai',
    category: 'chemistry',
    chapter: 'Chương 5: Pin điện – Điện phân',
    questionNumber: 6,
    questionText: `[Đúng / Sai] Thí nghiệm mạ đồng lên chìa khóa (m ban đầu: chìa khóa 10g, thanh Cu 15g; sau 15 phút điện phân: chìa khóa 10,32g, thanh Cu 14,68g):
a) Thanh đồng được nối với cực âm, chiếc chìa khoá được nối với cực dương của nguồn điện.
b) Tại cathode xảy ra quá trình khử ion Cu2+, tại anode xảy ra quá trình oxi hoá Cu.
c) Do khối lượng của thanh đồng giảm nên giả thuyết ban đầu của nhóm học sinh là sai.
d) Sau khi mạ xong, độ giảm khối lượng của thanh đồng bằng độ tăng khối lượng của chiếc chìa khoá.
Tổ hợp tính Đúng (Đ) / Sai (S) lần lượt là:`,
    options: {
      A: 'a-S, b-Đ, c-S, d-Đ',
      B: 'a-Đ, b-Đ, c-S, d-S',
      C: 'a-S, b-Đ, c-Đ, d-Đ',
      D: 'a-S, b-S, c-S, d-Đ'
    },
    correctAnswer: 'A',
    explanation: 'Đáp án: a S, b Đ, c S, d Đ. Giải thích: a) Sai vì vật cần mạ (chìa khóa) phải nối với cực âm (cathode), kim loại mạ (thanh Cu) nối với cực dương (anode); c) Sai vì n(Cu tan) = n(Cu bám) = 0,32/64 = 0,005 mol nên [Cu2+] không đổi, giả thuyết là đúng.'
  },

  // ==========================================
  // PHẦN III: TRẮC NGHIỆM TRẢ LỜI NGẮN (CÂU 1 - 9)
  // ==========================================
  {
    id: 1047,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-part3',
    sectionTitle: 'Phần III: Bài tập Trả lời ngắn',
    category: 'chemistry',
    chapter: 'Chương 3: Hợp chất chứa nitrogen',
    questionNumber: 1,
    questionText: 'Cho các chất sau: lysine, methylamine, glutamic acid, aniline và Gly–Ala. Có bao nhiêu chất phản ứng được với dung dịch HCl?',
    options: {
      A: '3 chất.',
      B: '4 chất.',
      C: '5 chất.',
      D: '2 chất.'
    },
    correctAnswer: 'C',
    explanation: 'Đáp số: 5. Cả 5 chất đều có nhóm amino (–NH2) hoặc nguyên tử N có khả năng nhận proton H+ từ HCl: lysine, methylamine, glutamic acid, aniline và dipeptide Gly–Ala.'
  },
  {
    id: 1048,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-part3',
    sectionTitle: 'Phần III: Bài tập Trả lời ngắn',
    category: 'chemistry',
    chapter: 'Chương 3: Hợp chất chứa nitrogen',
    questionNumber: 2,
    questionText: 'Tổng số đồng phân amine bậc một và bậc hai ứng với công thức phân tử C4H11N là bao nhiêu?',
    options: {
      A: '6.',
      B: '7.',
      C: '8.',
      D: '5.'
    },
    correctAnswer: 'B',
    explanation: 'Đáp số: 7. Gồm 4 đồng phân amine bậc một (butylamine, sec-butylamine, isobutylamine, tert-butylamine) và 3 đồng phân amine bậc hai (methyl-n-propylamine, methyl-isopropylamine, diethylamine). Tổng là 4 + 3 = 7.'
  },
  {
    id: 1049,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-part3',
    sectionTitle: 'Phần III: Bài tập Trả lời ngắn',
    category: 'chemistry',
    chapter: 'Chương 3: Hợp chất chứa nitrogen',
    questionNumber: 3,
    questionText: 'Phần trăm khối lượng của nguyên tố nitrogen trong alanine là a%. Giá trị của a là bao nhiêu? (Làm tròn kết quả đến hàng phần mười).',
    options: {
      A: '15,7%.',
      B: '18,7%.',
      C: '13,5%.',
      D: '16,2%.'
    },
    correctAnswer: 'A',
    explanation: 'Đáp số: 15,7%. Alanine có CTPT là C3H7NO2 (M = 89). %N = (14 / 89) × 100% ≈ 15,7%.'
  },
  {
    id: 1050,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-part3',
    sectionTitle: 'Phần III: Bài tập Trả lời ngắn',
    category: 'chemistry',
    chapter: 'Chương 4: Polymer',
    questionNumber: 4,
    questionText: 'Cho các loại tơ sau: tơ visco, tơ capron, tơ cellulose acetate, tơ tằm, tơ nylon–6,6. Có bao nhiêu tơ thuộc loại tơ bán tổng hợp?',
    options: {
      A: '1.',
      B: '2.',
      C: '3.',
      D: '4.'
    },
    correctAnswer: 'B',
    explanation: 'Đáp số: 2. Hai tơ bán tổng hợp (nhân tạo) là tơ visco và tơ cellulose acetate. Capron và nylon-6,6 là tơ tổng hợp; tơ tằm là tơ thiên nhiên.'
  },
  {
    id: 1051,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-part3',
    sectionTitle: 'Phần III: Bài tập Trả lời ngắn',
    category: 'chemistry',
    chapter: 'Chương 4: Polymer',
    questionNumber: 5,
    questionText: 'Phần trăm về khối lượng của nguyên tử carbon có trong một mắt xích của phân tử PVC là bao nhiêu? (Làm tròn kết quả đến hàng phần mười).',
    options: {
      A: '32,5%.',
      B: '38,4%.',
      C: '42,1%.',
      D: '56,8%.'
    },
    correctAnswer: 'B',
    explanation: 'Đáp số: 38,4%. Mắt xích PVC là –CH2–CHCl– (C2H3Cl), M = 2×12 + 3×1 + 35,5 = 62,5. %C = (24 / 62,5) × 100% = 38,4%.'
  },
  {
    id: 1052,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-part3',
    sectionTitle: 'Phần III: Bài tập Trả lời ngắn',
    category: 'chemistry',
    chapter: 'Chương 4: Polymer',
    questionNumber: 6,
    questionText: 'Tơ nylon–6 được tổng hợp từ acid ε–amino caproic với H = 80%. Khối lượng acid ε–amino caproic cần dùng để sản xuất 2 triệu hộp chỉ phẫu thuật CARELON 7/0 (mỗi hộp 12 sợi, mỗi sợi nặng 0,1664 gam) là bao nhiêu kg? (Làm tròn đến hàng đơn vị).',
    options: {
      A: '4820 kg.',
      B: '5787 kg.',
      C: '6215 kg.',
      D: '3994 kg.'
    },
    correctAnswer: 'B',
    explanation: 'Đáp số: 5787 kg. Khối lượng tơ cần = 2.000.000 × 12 × 0,1664 gam = 3.993,6 kg. M(acid) = 131; M(mắt xích) = 113. Khối lượng acid lý thuyết = 3.993,6 × 131 / 113. Với H = 80%, m(acid) thực tế = (3.993,6 × 131) / (113 × 0,80) ≈ 5.787 kg.'
  },
  {
    id: 1053,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-part3',
    sectionTitle: 'Phần III: Bài tập Trả lời ngắn',
    category: 'chemistry',
    chapter: 'Chương 5: Pin điện – Điện phân',
    questionNumber: 7,
    questionText: 'Ở điều kiện chuẩn, sức điện động của pin Zn–Cu và pin Mg–Zn lần lượt đo được là 1,10 V và 1,61 V. Sức điện động của pin Mg–Cu đo được ở điều kiện chuẩn là bao nhiêu V?',
    options: {
      A: '2,71 V.',
      B: '0,51 V.',
      C: '1,35 V.',
      D: '2,42 V.'
    },
    correctAnswer: 'A',
    explanation: 'Đáp số: 2,71 V. E°(Mg–Cu) = E°(Cu2+/Cu) - E°(Mg2+/Mg) = [E°(Cu2+/Cu) - E°(Zn2+/Zn)] + [E°(Zn2+/Zn) - E°(Mg2+/Mg)] = E°(Zn–Cu) + E°(Mg–Zn) = 1,10 + 1,61 = 2,71 V.'
  },
  {
    id: 1054,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-part3',
    sectionTitle: 'Phần III: Bài tập Trả lời ngắn',
    category: 'chemistry',
    chapter: 'Chương 5: Pin điện – Điện phân',
    questionNumber: 8,
    questionText: 'Điện phân 4 lít dung dịch NaCl 1 M (cực trơ, màng ngăn) với I = 0,193 A trong 6 phút. Dung dịch thu được có pH bằng bao nhiêu ở 25 °C? (Làm tròn đến hàng phần mười).',
    options: {
      A: '9,8.',
      B: '10,3.',
      C: '11,2.',
      D: '12,5.'
    },
    correctAnswer: 'B',
    explanation: 'Đáp số: 10,3. Tại cathode: 2H2O + 2e → H2 + 2OH-. n(e) = n(OH-) = It/F = 0,193 × 6 × 60 / 96500 = 0,00072 mol. [OH-] = 0,00072 / 4 = 1,8 × 10^-4 M. pOH = -log(1,8 × 10^-4) ≈ 3,74. pH = 14 - 3,74 ≈ 10,3.'
  },
  {
    id: 1055,
    subject: 'chemistry',
    unit: 'chem-sem1',
    unitTitle: 'Hóa Học 12 - Học Kì I',
    sectionId: 'chem-part3',
    sectionTitle: 'Phần III: Bài tập Trả lời ngắn',
    category: 'chemistry',
    chapter: 'Chương 5: Pin điện – Điện phân',
    questionNumber: 9,
    questionText: 'Điện phân dung dịch AuCl3 với I = 0,5 A trong 3 giờ để mạ vàng (Au = 197). Khối lượng vàng được mạ lên vật là bao nhiêu gam? (Làm tròn đến hàng phần trăm, H = 100%).',
    options: {
      A: '2,45 gam.',
      B: '3,67 gam.',
      C: '4,89 gam.',
      D: '11,02 gam.'
    },
    correctAnswer: 'B',
    explanation: 'Đáp số: 3,67 gam. Tại cathode: Au3+ + 3e → Au. Áp dụng định luật Faraday: m = (A × I × t) / (n × F) = (197 × 0,5 × 3 × 3600) / (3 × 96500) ≈ 3,67 gam.'
  }
];
