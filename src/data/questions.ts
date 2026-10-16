import { Question } from '../types/quiz';

export const PASSAGE_RIPPLE_JAR = `THE RIPPLE JAR CHALLENGE
Can one jar change a neighbourhood?
Could one rinsed jar change what a block throws away? The Ripple Jar Challenge is a city campaign for residents (1) whose small choices are recorded on a shared map. By scanning the jar code, each household can (2) make a real dent in household waste before it reaches crowded landfills.
What happens after you join the ripple?
• Community points unlock new (3) community compost bins near apartment gardens.
• Weekly reports show the (4) reduction in food waste after sorted leftovers are added to compost piles.
• Eco-checks take only ten seconds (5) to complete before you leave home.
A tiny action, a visible result
Local volunteers are responsible (6) for checking clean jars, compost areas, and recycling corners every Friday. Add one jar, one lid, or one portion of leftovers today—and watch a quiet habit become a neighbourhood-wide transformation.`;

export const PASSAGE_FAKE_GREEN_LABELS = `Don’t Be Fooled by Fake Green Labels!
Many companies now sell products as “green”, but some only use leaves, soft colours, or big promises to look responsible. These tricks are called greenwashing. Bring one label you find at home.
How to spot it:
• Green Club members, who are (7) in charge of checking product claims, will show you real examples from local shops.
• A high (8) level of awareness helps shoppers ask better questions.
• Ask for clear (9) evidence before paying more for an “eco-friendly” product.
Smart shopper checklist:
• Be careful when brands (10) give away free bags or gifts to hide wasteful packaging.
• Compare two adverts: if one says “natural” and (11) the other says “clean”, check what each word really means. Choose better brands
Support companies with (12) sustainable plans, honest reports, and products that can be reused or recycled. Real eco-friendly action reduces waste and protects resources.`;

export const PASSAGE_GREEN_HOUSING = `Green Housing Beyond the Label
A green home is sometimes recognized by solar panels, plant-covered roofs, or a smart meter near the door. Yet an apartment can display such features and still waste energy if hot air is trapped inside or if residents must turn on lights at noon. During the renovation of a small apartment in Quy Nhon, the architect began with usage patterns, not showroom details. Her plan was not a matter of appearance; it was (18) the careful matching of insulation, ventilation, and routines to the apartment's use patterns.
The team mapped where afternoon heat entered, where cross-breezes were blocked, and which rooms were used at different hours. Instead of replacing every old surface, they kept the thick interior wall, (19) using its thermal mass to slow afternoon heat indoors. A narrow window was moved higher on the west side (20) so that daylight reached the kitchen without increasing glare, while a shaded opening on the opposite wall allowed air to leave slowly.
The results were modest rather than dramatic. The family still used fans in the hottest weeks, and the apartment did not become a model house for advertising. However, the rooms stayed brighter for longer, and fewer appliances were needed at the same time. That difference matters because green housing is not a single feature; (21) it works through linked choices that lower demand while preserving ordinary daily comfort indoors. In this sense, a greener home is less about displaying environmental intention than about (22) aligning heat, daylight, and routines before treating visible upgrades as proof of sustainability.`;

export const PASSAGE_GREENHUSHING = `The Quiet Side of Green Progress
[Paragraph 1]
The label on a pack of paper cups told shoppers almost nothing about the quiet work behind it, although the company had reduced the amount of plastic lining, changed part of its supply route, and tested a lighter form of packaging. The design looked plain, even forgettable, because the managers had decided that saying too much about “green progress” might invite more anger than trust. In a market where one exaggerated claim can become a public mistake, silence began to feel safer than explanation.

[Paragraph 2]
This habit is often called greenhushing. KPMG describes it as a company refusing to publicize sustainability information, partly because it fears criticism from people who may find its efforts too weak or from investors who dislike such priorities. Unlike greenwashing, greenhushing does not loudly pretend that a business is cleaner than it is. Its problem is quieter: when useful information is hidden, customers cannot easily tell which companies are improving and which are simply staying comfortable in the dark.

[Paragraph 3]
The fear behind this silence is not completely unreasonable. People have seen too many shiny claims placed over wasteful habits, so doubt has become a form of self-protection. A brand that speaks about one small improvement may be attacked for every larger problem it has not solved. Social media can make this pressure sharper, turning a careful sentence into a public trial. Still, when suspicion becomes the only language, honest progress may lose its voice.

[Paragraph 4]
A healthier culture would ask for evidence without treating every imperfect effort as a crime. Companies should admit limits, show numbers clearly, and explain what still needs work. Consumers should question claims, but not punish honesty more harshly than silence. Only when green action is spoken about with proof, humility, and courage can the public learn from it. Otherwise, the quiet may protect companies, but it leaves society with fewer lights to follow.
[Adapted from KPMG]`;

export const PASSAGE_HEAT_ISLAND = `The City That Keeps the Heat
[Paragraph 1]
By late afternoon, the bus stop outside the mall had become a small waiting room without walls. Students stood under a thin signboard, delivery riders checked their phones beside idling traffic, and an old woman held a paper fan over her medicine bag. Across the road, a luxury lobby glowed behind tinted glass, cool and almost silent. The same sun touched everyone, but the city did not share its heat fairly.

[Paragraph 2]
[I] The pattern has a name, urban heat island, but the feeling is more familiar than the term. [II] Roads, roofs, and buildings absorb and release heat more than trees, grass, or water, so crowded districts with little greenery are likely to stay hotter than nearby areas. [III] What looks like private comfort can quietly become public pressure, especially on nights when sleep itself becomes work. [IV]

[Paragraph 3]
Awareness can help when it turns heat from a boring weather complaint into a design problem people can see. A photo of workers resting under a narrow strip of shade may explain the issue faster than a chart. The danger comes when suffering is used only as a dramatic summer image, with no question about who gets shade, who pays the electricity bill, and whose neighbourhood receives trees last. Heat is physical, but its map is social.

[Paragraph 4]
A cooler city is not a fantasy of parks alone. Trees, reflective roofs, lighter pavements, and greener public spaces can reduce harmful effects when they are planned carefully and maintained in the long run. These changes may also cut down on energy use and prevent heat from becoming a daily punishment for those with fewer choices. Only when shade is treated as basic protection, not a pleasant extra, can urban comfort become more than something sold by private buildings. The question is not whether cities can look green from above. It is whether they can feel livable from the pavement.
[Adapted from EPA]`;

import { URBANISATION_QUESTIONS } from './urbanisationQuestions';
import { MOCK_EXAM_2026_QUESTIONS } from './mockExam2026';
import { CHEMISTRY_QUESTIONS } from './chemistryQuestions';
import { INFORMATICS_QUESTIONS } from './informaticsQuestions';

export { CHEMISTRY_QUESTIONS, INFORMATICS_QUESTIONS };

export const CHEMISTRY_SECTIONS = [
  { id: 'all', title: '🧪 Toàn bộ Đề Cương Hóa Học 12 (55 câu)', count: 55, category: 'chemistry' },
  { id: 'chem-part1', title: 'Phần I: Trắc nghiệm 4 lựa chọn (40 câu)', count: 40, category: 'chemistry' },
  { id: 'chem-ch1', title: 'Chương 1: Ester – Lipid (5 câu)', count: 5, category: 'chemistry' },
  { id: 'chem-ch2', title: 'Chương 2: Carbohydrate (5 câu)', count: 5, category: 'chemistry' },
  { id: 'chem-ch3', title: 'Chương 3: Hợp chất chứa nitrogen (10 câu)', count: 10, category: 'chemistry' },
  { id: 'chem-ch4', title: 'Chương 4: Polymer (10 câu)', count: 10, category: 'chemistry' },
  { id: 'chem-ch5', title: 'Chương 5: Pin điện – Điện phân (10 câu)', count: 10, category: 'chemistry' },
  { id: 'chem-part2', title: 'Phần II: Trắc nghiệm Đúng / Sai (6 câu)', count: 6, category: 'chemistry' },
  { id: 'chem-part3', title: 'Phần III: Bài tập Trả lời ngắn & Tính toán (9 câu)', count: 9, category: 'chemistry' },
];

export const INFORMATICS_SECTIONS = [
  { id: 'all', title: '💻 Toàn bộ Đề Cương Ôn Tập Cuối Kì I Tin Học 12 (72 câu ⭐)', count: 72, category: 'informatics' },
  { id: 'it-mcq', title: '🔘 Trắc nghiệm 4 lựa chọn (60 câu)', count: 60, category: 'informatics' },
  { id: 'it-tf', title: '⚖️ Trắc nghiệm Đúng / Sai tổng hợp (12 câu)', count: 12, category: 'informatics' },
  { id: 'it-b3', title: 'Bài 3: Một số thiết bị mạng thông dụng (12 câu)', count: 12, category: 'informatics' },
  { id: 'it-b4', title: 'Bài 4: Giao thức mạng (12 câu)', count: 12, category: 'informatics' },
  { id: 'it-b5', title: 'Bài 5: Thực hành chia sẻ tài nguyên trên mạng (12 câu)', count: 12, category: 'informatics' },
  { id: 'it-b6', title: 'Bài 6: Giao tiếp và ứng xử trong không gian mạng (12 câu)', count: 12, category: 'informatics' },
  { id: 'it-b7', title: 'Bài 7: HTML và cấu trúc trang web (12 câu)', count: 12, category: 'informatics' },
  { id: 'it-b8', title: 'Bài 8: Định dạng văn bản (12 câu)', count: 12, category: 'informatics' },
];

export const UNITS = [
  { id: 'it-12', title: '💻 Tin Học 12: Đề Cương Cuối Kì I (Bài 3 đến Bài 8, 72 câu ⭐)', count: 72, subject: 'informatics' as const },
  { id: 'chem-sem1', title: '🧪 Hóa Học 12: Đề Cương Cuối Kì I (Chương 1 - 5, 55 câu ⭐)', count: 55, subject: 'chemistry' as const },
  { id: 'mock2026', title: '🎯 Tiếng Anh 12: Đề Minh Họa Cuối Kì I (40 câu)', count: 40, subject: 'english' as const },
  { id: 'environment', title: '📄 Tiếng Anh 12: Unit 3 Môi Trường & Sống Xanh (75 câu)', count: 75, subject: 'english' as const },
  { id: 'urbanisation', title: '🏙️ Tiếng Anh 12: Unit Đô Thị Hóa (104 câu)', count: 104, subject: 'english' as const },
  { id: 'all', title: '🌟 Tất Cả Câu Hỏi (346 câu)', count: 346, subject: 'english' as const },
];

export const SECTIONS = [
  // General Category Filters
  { id: 'all', title: '🌟 Tất cả câu hỏi trong Unit đã chọn', count: 40, category: 'all' },
  { id: 'grammar-only', title: '📐 Câu hỏi Ngữ pháp & Sắp xếp câu riêng', count: 5, category: 'grammar' },
  { id: 'reading-all', title: '📖 Toàn bộ câu hỏi Bài đọc riêng (Kèm trích dẫn dữ kiện)', count: 35, category: 'reading' },
  { id: 'vocab-only', title: '🌿 Câu hỏi Từ vựng riêng', count: 12, category: 'vocabulary' },

  // Mock Exam 2026-2027 Specific Parts (New User Request)
  { id: 'mock-xanh-sm', title: 'Quảng cáo: XANH SM - Cleaner Trips (6 câu)', count: 6, category: 'cloze', unit: 'mock2026' },
  { id: 'mock-leaflet', title: 'Tờ rơi: Inner-City Pressure (6 câu)', count: 6, category: 'cloze', unit: 'mock2026' },
  { id: 'mock-arrangement', title: 'Sắp xếp câu & đoạn văn logic (5 câu)', count: 5, category: 'grammar', unit: 'mock2026' },
  { id: 'mock-cloze-health', title: 'Đọc điền câu: Y tế đô thị (5 câu)', count: 5, category: 'reading', unit: 'mock2026' },
  { id: 'mock-reading-greenwishing', title: 'Đọc hiểu: The Promise Before the Plan - Greenwishing (8 câu)', count: 8, category: 'reading', unit: 'mock2026' },
  { id: 'mock-reading-density', title: 'Đọc hiểu: Too Close for Comfort? Singapore (10 câu)', count: 10, category: 'reading', unit: 'mock2026' },

  // Environment specific exercises (From User PDF Unit 3)
  { id: 'ex1', title: 'Exercise 1: Từ vựng & Collocations Môi trường (20 câu)', count: 20, category: 'vocabulary', unit: 'environment' },
  { id: 'ex2', title: 'Exercise 2: Ngữ pháp Mệnh đề quan hệ & Cụm động từ (20 câu)', count: 20, category: 'grammar', unit: 'environment' },
  { id: 'practice-heat-island', title: 'Đọc hiểu: Đảo nhiệt đô thị (The City That Keeps the Heat - EPA) (10 câu)', count: 10, category: 'reading', unit: 'environment' },
  { id: 'practice-greenhushing', title: 'Đọc hiểu: Greenhushing (The Quiet Side of Green Progress - KPMG) (8 câu)', count: 8, category: 'reading', unit: 'environment' },
  { id: 'practice-green-housing', title: 'Đọc hiểu: Kiến trúc xanh Quy Nhơn (Green Housing Beyond the Label) (5 câu)', count: 5, category: 'reading', unit: 'environment' },
  { id: 'practice-cloze', title: 'Bài đọc điền từ: The Ripple Jar Challenge & Fake Green Labels (12 câu)', count: 12, category: 'reading', unit: 'environment' },

  // Urbanisation specific exercises
  { id: 'urb-ex1', title: 'Exercise 1 (Đô thị hóa): Từ vựng & Collocations (29 câu)', count: 29, category: 'vocabulary', unit: 'urbanisation' },
  { id: 'urb-ex2', title: 'Exercise 2 (Đô thị hóa): Hiện tại hoàn thành & Hòa hợp (20 câu)', count: 20, category: 'grammar', unit: 'urbanisation' },
  { id: 'urb-ex3', title: 'Exercise 3 (Đô thị hóa): So sánh kép & Càng ngày càng (20 câu)', count: 20, category: 'grammar', unit: 'urbanisation' },
  { id: 'urb-read-1', title: 'Reading 1: Flow & Field City Weekend (6 câu)', count: 6, category: 'reading', unit: 'urbanisation' },
  { id: 'urb-read-2', title: 'Reading 2: Ride & Repair Morning (6 câu)', count: 6, category: 'reading', unit: 'urbanisation' },
  { id: 'urb-read-3', title: 'Reading 3: Y tế đô thị (5 câu)', count: 5, category: 'reading', unit: 'urbanisation' },
  { id: 'urb-read-4', title: 'Reading 4: Smart Cities & Dữ liệu OECD (8 câu)', count: 8, category: 'reading', unit: 'urbanisation' },
  { id: 'urb-read-5', title: 'Reading 5: Sụt lún TP.HCM - NASA (10 câu)', count: 10, category: 'reading', unit: 'urbanisation' },
];

const RAW_ENVIRONMENT_QUESTIONS: Question[] = [
  // ==================== EXERCISE 1 (Questions 1 - 20) ====================
  {
    id: 1,
    sectionId: 'ex1',
    sectionTitle: 'Exercise 1: Vocabulary & Collocations',
    category: 'vocabulary',
    questionNumber: 1,
    questionText: 'Many commuters try to __________ short car trips by using shared bikes for nearby errands.',
    options: {
      A: 'cut down on',
      B: 'look for',
      C: 'care for',
      D: 'give away'
    },
    correctAnswer: 'A',
    explanation: 'Cụm động từ "cut down on" mang nghĩa là cắt giảm, giảm bớt (cut down on short car trips = cắt giảm những chuyến đi xe hơi ngắn).'
  },
  {
    id: 2,
    sectionId: 'ex1',
    sectionTitle: 'Exercise 1: Vocabulary & Collocations',
    category: 'vocabulary',
    questionNumber: 2,
    questionText: 'New policies require __________ reports before companies build large warehouses near protected rivers in fast-growing regions.',
    options: {
      A: 'environments',
      B: 'environment',
      C: 'environmentally',
      D: 'environmental'
    },
    correctAnswer: 'D',
    explanation: 'Cần tính từ "environmental" để bổ nghĩa cho danh từ "reports" (environmental reports = các báo cáo môi trường).'
  },
  {
    id: 3,
    sectionId: 'ex1',
    sectionTitle: 'Exercise 1: Vocabulary & Collocations',
    category: 'vocabulary',
    questionNumber: 3,
    questionText: 'Many shoppers are now aware __________ hidden packaging waste when buying small products online every week.',
    options: {
      A: 'from',
      B: 'with',
      C: 'of',
      D: 'to'
    },
    correctAnswer: 'C',
    explanation: 'Cấu trúc cố định: "aware of something" (nhận thức được điều gì).'
  },
  {
    id: 4,
    sectionId: 'ex1',
    sectionTitle: 'Exercise 1: Vocabulary & Collocations',
    category: 'vocabulary',
    questionNumber: 4,
    questionText: 'A travel app estimates your __________ after each flight, train ride, and hotel stay during the trip.',
    options: {
      A: 'compost pile',
      B: 'carbon footprint',
      C: 'sensor light',
      D: 'leaflet'
    },
    correctAnswer: 'B',
    explanation: '"carbon footprint" nghĩa là dấu chân carbon (lượng khí thải carbon của một cá nhân từ các chuyến đi).'
  },
  {
    id: 5,
    sectionId: 'ex1',
    sectionTitle: 'Exercise 1: Vocabulary & Collocations',
    category: 'vocabulary',
    questionNumber: 5,
    questionText: 'A brand calling ordinary plastic “planet-safe” without evidence may be accused of __________ online.',
    options: {
      A: 'ecotourism',
      B: 'greenwashing',
      C: 'composting',
      D: 'recycling'
    },
    correctAnswer: 'B',
    explanation: '"greenwashing" nghĩa là tẩy xanh (tuyên truyền sai sự thật rằng sản phẩm thân thiện với môi trường).'
  },
  {
    id: 6,
    sectionId: 'ex1',
    sectionTitle: 'Exercise 1: Vocabulary & Collocations',
    category: 'vocabulary',
    questionNumber: 6,
    questionText: 'The city’s new lighting system improved energy __________ in several parks near the river last winter.',
    options: {
      A: 'efficient',
      B: 'efficiently',
      C: 'efficiency',
      D: 'efficiencies'
    },
    correctAnswer: 'C',
    explanation: 'Cụm danh từ: "energy efficiency" nghĩa là hiệu quả sử dụng năng lượng.'
  },
  {
    id: 7,
    sectionId: 'ex1',
    sectionTitle: 'Exercise 1: Vocabulary & Collocations',
    category: 'vocabulary',
    questionNumber: 7,
    questionText: 'Many offices __________ computers after meetings, which cuts electricity bills without affecting work quality.',
    options: {
      A: 'switch off',
      B: 'pick up',
      C: 'rinse out',
      D: 'give away'
    },
    correctAnswer: 'A',
    explanation: '"switch off" nghĩa là tắt (thiết bị điện, máy tính) để tiết kiệm điện.'
  },
  {
    id: 8,
    sectionId: 'ex1',
    sectionTitle: 'Exercise 1: Vocabulary & Collocations',
    category: 'vocabulary',
    questionNumber: 8,
    questionText: 'A balanced __________ can recover faster when local people protect rivers and native trees nearby.',
    options: {
      A: 'package',
      B: 'ecosystem',
      C: 'resource',
      D: 'container'
    },
    correctAnswer: 'B',
    explanation: '"ecosystem" nghĩa là hệ sinh thái. Cụm "A balanced ecosystem" nghĩa là một hệ sinh thái cân bằng.'
  },
  {
    id: 9,
    sectionId: 'ex1',
    sectionTitle: 'Exercise 1: Vocabulary & Collocations',
    category: 'vocabulary',
    questionNumber: 9,
    questionText: 'City planners must __________ natural resources when designing housing projects for a growing population today.',
    options: {
      A: 'conserve',
      B: 'release',
      C: 'throw',
      D: 'fill'
    },
    correctAnswer: 'A',
    explanation: '"conserve" nghĩa là bảo tồn, giữ gìn (conserve natural resources = bảo tồn tài nguyên thiên nhiên).'
  },
  {
    id: 10,
    sectionId: 'ex1',
    sectionTitle: 'Exercise 1: Vocabulary & Collocations',
    category: 'vocabulary',
    questionNumber: 10,
    questionText: '__________ energy sources such as sunlight and wind are central to many green city plans.',
    options: {
      A: 'Renewable',
      B: 'Polluted',
      C: 'Wasteful',
      D: 'Contaminated'
    },
    correctAnswer: 'A',
    explanation: '"Renewable energy sources" là các nguồn năng lượng tái tạo (như ánh nắng mặt trời và gió).'
  },
  {
    id: 11,
    sectionId: 'ex1',
    sectionTitle: 'Exercise 1: Vocabulary & Collocations',
    category: 'vocabulary',
    questionNumber: 11,
    questionText: 'Which order best completes the sentence: The article compares __________ across several busy Asian capitals.',
    options: {
      A: 'transport low-emission systems',
      B: 'systems transport low-emission',
      C: 'low-emission systems transport',
      D: 'low-emission transport systems'
    },
    correctAnswer: 'D',
    explanation: 'Trật tự cụm danh từ: "low-emission transport systems" (hệ thống giao thông phát thải thấp) với "low-emission" (tính từ ghép) + "transport" (danh từ bổ nghĩa) + "systems" (danh từ chính).'
  },
  {
    id: 12,
    sectionId: 'ex1',
    sectionTitle: 'Exercise 1: Vocabulary & Collocations',
    category: 'vocabulary',
    questionNumber: 12,
    questionText: 'Oil leaked from a workshop and left the stream __________ after a night of heavy rain.',
    options: {
      A: 'renewable',
      B: 'contaminated',
      C: 'efficient',
      D: 'resourceful'
    },
    correctAnswer: 'B',
    explanation: 'Cấu trúc "leave something + adj": "contaminated" nghĩa là bị ô nhiễm, bị nhiễm độc (do dầu rò rỉ).'
  },
  {
    id: 13,
    sectionId: 'ex1',
    sectionTitle: 'Exercise 1: Vocabulary & Collocations',
    category: 'vocabulary',
    questionNumber: 13,
    questionText: 'Students often __________ cheap refill ideas after checking waste bins near the cafeteria.',
    options: {
      A: 'cut down on',
      B: 'give away',
      C: 'rinse out',
      D: 'come up with'
    },
    correctAnswer: 'D',
    explanation: 'Phrasal verb "come up with" nghĩa là nảy ra, nghĩ ra (come up with ideas = nghĩ ra ý tưởng).'
  },
  {
    id: 14,
    sectionId: 'ex1',
    sectionTitle: 'Exercise 1: Vocabulary & Collocations',
    category: 'vocabulary',
    questionNumber: 14,
    questionText: 'A rise in __________ threatens coral reefs, which are already stressed by warmer seas globally.',
    options: {
      A: 'packaging',
      B: 'pollution',
      C: 'resourcefulness',
      D: 'renewal'
    },
    correctAnswer: 'B',
    explanation: '"pollution" (sự ô nhiễm). Sự gia tăng ô nhiễm đe dọa các rạn san hô.'
  },
  {
    id: 15,
    sectionId: 'ex1',
    sectionTitle: 'Exercise 1: Vocabulary & Collocations',
    category: 'vocabulary',
    questionNumber: 15,
    questionText: 'The campaign criticised __________ habits, such as leaving air conditioners on in empty rooms overnight.',
    options: {
      A: 'wasteful',
      B: 'renewable',
      C: 'protective',
      D: 'biodegradable'
    },
    correctAnswer: 'A',
    explanation: '"wasteful" nghĩa là lãng phí (wasteful habits = những thói quen lãng phí).'
  },
  {
    id: 16,
    sectionId: 'ex1',
    sectionTitle: 'Exercise 1: Vocabulary & Collocations',
    category: 'vocabulary',
    questionNumber: 16,
    questionText: 'City officials will __________ public awareness of recycling through short videos on buses this month.',
    options: {
      A: 'look',
      B: 'care',
      C: 'raise',
      D: 'throw'
    },
    correctAnswer: 'C',
    explanation: 'Collocation quen thuộc: "raise public awareness of..." (nâng cao nhận thức cộng đồng về...).'
  },
  {
    id: 17,
    sectionId: 'ex1',
    sectionTitle: 'Exercise 1: Vocabulary & Collocations',
    category: 'vocabulary',
    questionNumber: 17,
    questionText: 'The island promotes __________ because visitors can support local families without damaging forests or reefs.',
    options: {
      A: 'contamination',
      B: 'ecotourism',
      C: 'wastage',
      D: 'packaging'
    },
    correctAnswer: 'B',
    explanation: '"ecotourism" nghĩa là du lịch sinh thái (vừa hỗ trợ người dân địa phương vừa không tàn phá rừng hay rạn san hô).'
  },
  {
    id: 18,
    sectionId: 'ex1',
    sectionTitle: 'Exercise 1: Vocabulary & Collocations',
    category: 'vocabulary',
    questionNumber: 18,
    questionText: 'Energy experts can __________ a prediction that battery prices will keep falling in the long term.',
    options: {
      A: 'make',
      B: 'raise',
      C: 'rinse',
      D: 'conserve'
    },
    correctAnswer: 'A',
    explanation: 'Collocation: "make a prediction" (đưa ra dự đoán).'
  },
  {
    id: 19,
    sectionId: 'ex1',
    sectionTitle: 'Exercise 1: Vocabulary & Collocations',
    category: 'vocabulary',
    questionNumber: 19,
    questionText: 'During the clean-up, volunteers should __________ small glass pieces before children return to the park.',
    options: {
      A: 'pick up',
      B: 'switch off',
      C: 'throw away',
      D: 'cut down on'
    },
    correctAnswer: 'A',
    explanation: '"pick up" nghĩa là nhặt lên, thu gom (nhặt những mảnh thủy tinh nhỏ).'
  },
  {
    id: 20,
    sectionId: 'ex1',
    sectionTitle: 'Exercise 1: Vocabulary & Collocations',
    category: 'vocabulary',
    questionNumber: 20,
    questionText: 'Some cities track __________ to decide where factories must install cleaner filters first each year.',
    options: {
      A: 'emissions',
      B: 'resourcefulness',
      C: 'eco-friendliness',
      D: 'leaflets'
    },
    correctAnswer: 'A',
    explanation: '"emissions" nghĩa là lượng khí thải/khí xả. Các thành phố theo dõi lượng khí thải để yêu cầu lắp bộ lọc sạch hơn.'
  },

  // ==================== EXERCISE 2 (Questions 1 - 20) ====================
  {
    id: 21,
    sectionId: 'ex2',
    sectionTitle: 'Exercise 2: Phrasal Verbs & Relative Clauses',
    category: 'grammar',
    questionNumber: 1,
    questionText: 'Families can __________ plastic packaging by choosing products sold in larger reusable containers.',
    options: {
      A: 'cut down on',
      B: 'set up',
      C: 'give off',
      D: 'carry out'
    },
    correctAnswer: 'A',
    explanation: '"cut down on" = cắt giảm (cắt giảm bao bì nhựa).'
  },
  {
    id: 22,
    sectionId: 'ex2',
    sectionTitle: 'Exercise 2: Phrasal Verbs & Relative Clauses',
    category: 'grammar',
    questionNumber: 2,
    questionText: 'Residents should __________ old batteries safely because they can pollute water and soil.',
    options: {
      A: 'take part in',
      B: 'raise awareness of',
      C: 'get rid of',
      D: 'break down'
    },
    correctAnswer: 'C',
    explanation: '"get rid of" = vứt bỏ, loại bỏ an toàn (bỏ pin cũ an toàn để tránh ô nhiễm nước và đất).'
  },
  {
    id: 23,
    sectionId: 'ex2',
    sectionTitle: 'Exercise 2: Phrasal Verbs & Relative Clauses',
    category: 'grammar',
    questionNumber: 3,
    questionText: 'Posters around the park can __________ plastic pollution among tourists and local residents.',
    options: {
      A: 'raise awareness of',
      B: 'get rid of',
      C: 'switch off',
      D: 'break down'
    },
    correctAnswer: 'A',
    explanation: '"raise awareness of" = nâng cao nhận thức về ô nhiễm nhựa.'
  },
  {
    id: 24,
    sectionId: 'ex2',
    sectionTitle: 'Exercise 2: Phrasal Verbs & Relative Clauses',
    category: 'grammar',
    questionNumber: 4,
    questionText: 'Air conditioners that are not maintained well may __________ harmful gases into the air.',
    options: {
      A: 'sort out',
      B: 'take part in',
      C: 'release',
      D: 'depend on'
    },
    correctAnswer: 'C',
    explanation: '"release" = thải ra, phóng thích (thải khí độc hại vào không khí).'
  },
  {
    id: 25,
    sectionId: 'ex2',
    sectionTitle: 'Exercise 2: Phrasal Verbs & Relative Clauses',
    category: 'grammar',
    questionNumber: 5,
    questionText: 'The workshop will __________ reducing household waste rather than designing more leaflets.',
    options: {
      A: 'focus on',
      B: 'release into',
      C: 'rinse out',
      D: 'phase out'
    },
    correctAnswer: 'A',
    explanation: '"focus on + V-ing" = tập trung vào việc gì đó.'
  },
  {
    id: 26,
    sectionId: 'ex2',
    sectionTitle: 'Exercise 2: Phrasal Verbs & Relative Clauses',
    category: 'grammar',
    questionNumber: 6,
    questionText: 'Several clubs, which share the same environmental goal, will __________ a clean-up day.',
    options: {
      A: 'give off',
      B: 'rinse out',
      C: 'break down',
      D: 'set up'
    },
    correctAnswer: 'D',
    explanation: '"set up" = tổ chức, thiết lập (tổ chức một ngày làm sạch môi trường).'
  },
  {
    id: 27,
    sectionId: 'ex2',
    sectionTitle: 'Exercise 2: Phrasal Verbs & Relative Clauses',
    category: 'grammar',
    questionNumber: 7,
    questionText: 'Students sort household waste before lunch, __________ reduces contamination in recycling bins.',
    options: {
      A: 'that',
      B: 'where',
      C: 'which',
      D: 'what'
    },
    correctAnswer: 'C',
    explanation: 'Đại từ quan hệ "which" đứng sau dấu phẩy dùng để thay thế cho cả mệnh đề đứng trước nó. Không được dùng "that" sau dấu phẩy.'
  },
  {
    id: 28,
    sectionId: 'ex2',
    sectionTitle: 'Exercise 2: Phrasal Verbs & Relative Clauses',
    category: 'grammar',
    questionNumber: 8,
    questionText: 'The recycling bin __________ near the cafeteria collects paper only.',
    options: {
      A: 'which stand',
      B: 'standed',
      C: 'standing',
      D: 'which are standing'
    },
    correctAnswer: 'C',
    explanation: 'Rút gọn mệnh đề quan hệ chủ động dùng V-ing: "The recycling bin standing near the cafeteria" (= which stands...).'
  },
  {
    id: 29,
    sectionId: 'ex2',
    sectionTitle: 'Exercise 2: Phrasal Verbs & Relative Clauses',
    category: 'grammar',
    questionNumber: 9,
    questionText: 'The buses, __________ harmful gases, are used near schools.',
    options: {
      A: 'which reduce',
      B: 'reduced',
      C: 'are reducing',
      D: 'which reduces'
    },
    correctAnswer: 'A',
    explanation: 'Chủ ngữ "The buses" là số nhiều, mệnh đề quan hệ không xác định cần động từ nguyên mẫu: "which reduce harmful gases".'
  },
  {
    id: 30,
    sectionId: 'ex2',
    sectionTitle: 'Exercise 2: Phrasal Verbs & Relative Clauses',
    category: 'grammar',
    questionNumber: 10,
    questionText: 'The school asks each class to turn off unused lights, __________ electricity every day.',
    options: {
      A: 'which saves',
      B: 'that saves',
      C: 'which save',
      D: 'which are saved'
    },
    correctAnswer: 'A',
    explanation: 'Dùng ", which + V(số ít)" để thay thế cho toàn bộ hành động phía trước ("which saves electricity"). Không dùng "that" sau dấu phẩy.'
  },
  {
    id: 31,
    sectionId: 'ex2',
    sectionTitle: 'Exercise 2: Phrasal Verbs & Relative Clauses',
    category: 'grammar',
    questionNumber: 11,
    questionText: 'The reusable bags __________ by local shoppers are made from recycled material.',
    options: {
      A: 'used',
      B: 'using',
      C: 'which use',
      D: 'which uses'
    },
    correctAnswer: 'A',
    explanation: 'Rút gọn mệnh đề quan hệ dạng bị động (V3/ed): "The reusable bags used by local shoppers" (= which are used by...).'
  },
  {
    id: 32,
    sectionId: 'ex2',
    sectionTitle: 'Exercise 2: Phrasal Verbs & Relative Clauses',
    category: 'grammar',
    questionNumber: 12,
    questionText: 'The city uses low-emission buses near schools, __________.',
    options: {
      A: 'that makes the policy more popular',
      B: 'which making the policy more popular',
      C: 'what makes the policy more popular',
      D: 'which makes the policy more popular'
    },
    correctAnswer: 'D',
    explanation: 'Mệnh đề quan hệ thay thế cho cả ý của câu trước: ", which makes the policy more popular".'
  },
  {
    id: 33,
    sectionId: 'ex2',
    sectionTitle: 'Exercise 2: Phrasal Verbs & Relative Clauses',
    category: 'grammar',
    questionNumber: 13,
    questionText: 'The compost pile __________ behind the canteen needs more dry leaves.',
    options: {
      A: 'creating',
      B: 'which creates',
      C: 'created',
      D: 'which reduces'
    },
    correctAnswer: 'C',
    explanation: 'Rút gọn mệnh đề quan hệ thể bị động: "The compost pile created behind the canteen" (= which was created...).'
  },
  {
    id: 34,
    sectionId: 'ex2',
    sectionTitle: 'Exercise 2: Phrasal Verbs & Relative Clauses',
    category: 'grammar',
    questionNumber: 14,
    questionText: 'The company uses recyclable packaging, __________ its public image.',
    options: {
      A: 'which improve',
      B: 'which improves',
      C: 'that improves',
      D: 'which improved'
    },
    correctAnswer: 'B',
    explanation: 'Sau dấu phẩy dùng "which improves" để bổ nghĩa cho cả hành động dùng bao bì tái chế.'
  },
  {
    id: 35,
    sectionId: 'ex2',
    sectionTitle: 'Exercise 2: Phrasal Verbs & Relative Clauses',
    category: 'grammar',
    questionNumber: 15,
    questionText: 'Many families buy reusable bags, which __________ to protect the environment.',
    options: {
      A: 'design',
      B: 'designs',
      C: 'designed',
      D: 'are designed'
    },
    correctAnswer: 'D',
    explanation: 'Chủ ngữ "reusable bags" là danh từ số nhiều chỉ vật, cần thể bị động hiện tại đơn: "which are designed to protect the environment".'
  },
  {
    id: 36,
    sectionId: 'ex2',
    sectionTitle: 'Exercise 2: Phrasal Verbs & Relative Clauses',
    category: 'grammar',
    questionNumber: 16,
    questionText: 'The sensor light __________ on automatically saves electricity at night.',
    options: {
      A: 'which turns',
      B: 'which turn',
      C: 'which turning',
      D: 'which are turned'
    },
    correctAnswer: 'A',
    explanation: 'Chủ ngữ "The sensor light" là số ít, mệnh đề quan hệ xác định động từ chia ở thì hiện tại đơn: "which turns on automatically".'
  },
  {
    id: 37,
    sectionId: 'ex2',
    sectionTitle: 'Exercise 2: Phrasal Verbs & Relative Clauses',
    category: 'grammar',
    questionNumber: 17,
    questionText: 'The hotel encourages guests to bring their own bottles, __________.',
    options: {
      A: 'that reduces single-use plastic waste',
      B: 'which reduces single-use plastic waste',
      C: 'which is brought from home by guests',
      D: 'which reducing single-use plastic waste'
    },
    correctAnswer: 'B',
    explanation: 'Dùng ", which reduces single-use plastic waste" để thay thế cho toàn bộ hành động khuyến khích khách mang bình riêng.'
  },
  {
    id: 38,
    sectionId: 'ex2',
    sectionTitle: 'Exercise 2: Phrasal Verbs & Relative Clauses',
    category: 'grammar',
    questionNumber: 18,
    questionText: 'The bottles __________ by hotel guests are washed and reused after the event.',
    options: {
      A: 'which brings',
      B: 'bringing',
      C: 'which bring',
      D: 'brought'
    },
    correctAnswer: 'D',
    explanation: 'Rút gọn mệnh đề quan hệ bị động: "The bottles brought by hotel guests" (= which are brought...).'
  },
  {
    id: 39,
    sectionId: 'ex2',
    sectionTitle: 'Exercise 2: Phrasal Verbs & Relative Clauses',
    category: 'grammar',
    questionNumber: 19,
    questionText: 'The app shows each traveller’s carbon footprint, __________ people more aware of their choices.',
    options: {
      A: 'that makes',
      B: 'which make',
      C: 'which making',
      D: 'which makes'
    },
    correctAnswer: 'D',
    explanation: 'Dùng ", which makes" để thay thế cho toàn bộ sự việc hiển thị dấu chân carbon của ứng dụng.'
  },
  {
    id: 40,
    sectionId: 'ex2',
    sectionTitle: 'Exercise 2: Phrasal Verbs & Relative Clauses',
    category: 'grammar',
    questionNumber: 20,
    questionText: 'The school creates a compost pile behind the canteen, __________ food waste after lunch.',
    options: {
      A: 'which reduces',
      B: 'which reduce',
      C: 'that reduces',
      D: 'which is reduced'
    },
    correctAnswer: 'A',
    explanation: 'Dùng ", which reduces" thay cho toàn bộ việc tạo đống ủ phân hữu cơ ở sau căng tin.'
  },

  // ==================== PRACTICE TEST - THE RIPPLE JAR CHALLENGE (Q1 - Q6) ====================
  {
    id: 41,
    sectionId: 'practice-cloze',
    sectionTitle: 'Practice Test: The Ripple Jar Challenge',
    category: 'cloze',
    questionNumber: 1,
    questionText: 'The Ripple Jar Challenge is a city campaign for residents (1) __________ small choices are recorded on a shared map.',
    options: {
      A: 'who',
      B: 'which',
      C: 'whose',
      D: 'where'
    },
    correctAnswer: 'C',
    passageTitle: 'THE RIPPLE JAR CHALLENGE',
    excerpt: 'Dữ kiện trong bài: "...The Ripple Jar Challenge is a city campaign for residents (1) [whose] small choices are recorded on a shared map."',
    fullPassage: PASSAGE_RIPPLE_JAR,
    explanation: 'Dùng "whose" chỉ sở hữu: "residents whose small choices" (những cư dân mà những lựa chọn nhỏ của họ được ghi lại).'
  },
  {
    id: 42,
    sectionId: 'practice-cloze',
    sectionTitle: 'Practice Test: The Ripple Jar Challenge',
    category: 'cloze',
    questionNumber: 2,
    questionText: 'By scanning the jar code, each household can (2) __________ a real dent in household waste before it reaches crowded landfills.',
    options: {
      A: 'take',
      B: 'make',
      C: 'keep',
      D: 'draw'
    },
    correctAnswer: 'B',
    passageTitle: 'THE RIPPLE JAR CHALLENGE',
    excerpt: 'Dữ kiện trong bài: "By scanning the jar code, each household can (2) [make] a real dent in household waste before it reaches crowded landfills."',
    fullPassage: PASSAGE_RIPPLE_JAR,
    explanation: 'Cụm thành ngữ cố định: "make a dent in something" = tạo sự giảm bớt đáng kể, giảm bớt tác động tiêu cực.'
  },
  {
    id: 43,
    sectionId: 'practice-cloze',
    sectionTitle: 'Practice Test: The Ripple Jar Challenge',
    category: 'cloze',
    questionNumber: 3,
    questionText: 'Community points unlock new (3) __________ near apartment gardens.',
    options: {
      A: 'compost community bins',
      B: 'bins community compost',
      C: 'community bins compost',
      D: 'community compost bins'
    },
    correctAnswer: 'D',
    passageTitle: 'THE RIPPLE JAR CHALLENGE',
    excerpt: 'Dữ kiện trong bài: "• Community points unlock new (3) [community compost bins] near apartment gardens."',
    fullPassage: PASSAGE_RIPPLE_JAR,
    explanation: 'Trật tự cụm danh từ chuẩn: "community" (cộng đồng) + "compost" (phân hữu cơ) + "bins" (thùng rác) -> "community compost bins" (các thùng ủ phân hữu cơ cộng đồng).'
  },
  {
    id: 44,
    sectionId: 'practice-cloze',
    sectionTitle: 'Practice Test: The Ripple Jar Challenge',
    category: 'cloze',
    questionNumber: 4,
    questionText: 'Weekly reports show the (4) __________ in food waste after sorted leftovers are added to compost piles.',
    options: {
      A: 'reduce',
      B: 'reduced',
      C: 'reducing',
      D: 'reduction'
    },
    correctAnswer: 'D',
    passageTitle: 'THE RIPPLE JAR CHALLENGE',
    excerpt: 'Dữ kiện trong bài: "• Weekly reports show the (4) [reduction] in food waste after sorted leftovers are added to compost piles."',
    fullPassage: PASSAGE_RIPPLE_JAR,
    explanation: 'Sau mạo từ "the" và trước giới từ "in" cần một danh từ: "reduction" (sự giảm bớt).'
  },
  {
    id: 45,
    sectionId: 'practice-cloze',
    sectionTitle: 'Practice Test: The Ripple Jar Challenge',
    category: 'cloze',
    questionNumber: 5,
    questionText: 'Eco-checks take only ten seconds (5) __________ before you leave home.',
    options: {
      A: 'complete',
      B: 'to complete',
      C: 'completing',
      D: 'to completing'
    },
    correctAnswer: 'B',
    passageTitle: 'THE RIPPLE JAR CHALLENGE',
    excerpt: 'Dữ kiện trong bài: "• Eco-checks take only ten seconds (5) [to complete] before you leave home."',
    fullPassage: PASSAGE_RIPPLE_JAR,
    explanation: 'Cấu trúc "take + [khoảng thời gian] + to V": "take only ten seconds to complete" (chỉ mất mười giây để hoàn thành).'
  },
  {
    id: 46,
    sectionId: 'practice-cloze',
    sectionTitle: 'Practice Test: The Ripple Jar Challenge',
    category: 'cloze',
    questionNumber: 6,
    questionText: 'Local volunteers are responsible (6) __________ checking clean jars, compost areas, and recycling corners every Friday.',
    options: {
      A: 'for',
      B: 'with',
      C: 'of',
      D: 'on'
    },
    correctAnswer: 'A',
    passageTitle: 'THE RIPPLE JAR CHALLENGE',
    excerpt: 'Dữ kiện trong bài: "Local volunteers are responsible (6) [for] checking clean jars, compost areas, and recycling corners every Friday."',
    fullPassage: PASSAGE_RIPPLE_JAR,
    explanation: 'Cấu trúc tính từ: "responsible for + V-ing/N" (chịu trách nhiệm về việc gì).'
  },

  // ==================== PRACTICE TEST - FAKE GREEN LABELS (Q7 - Q12) ====================
  {
    id: 47,
    sectionId: 'practice-cloze',
    sectionTitle: 'Practice Test: Don’t Be Fooled by Fake Green Labels!',
    category: 'cloze',
    questionNumber: 7,
    questionText: 'Green Club members, who are (7) __________ checking product claims, will show you real examples from local shops.',
    options: {
      A: 'in charge of',
      B: 'owing to',
      C: 'as a result',
      D: 'therefore'
    },
    correctAnswer: 'A',
    passageTitle: 'Don’t Be Fooled by Fake Green Labels!',
    excerpt: 'Dữ kiện trong bài: "• Green Club members, who are (7) [in charge of] checking product claims, will show you real examples from local shops."',
    fullPassage: PASSAGE_FAKE_GREEN_LABELS,
    explanation: 'Cụm thành ngữ "in charge of + V-ing" mang nghĩa là phụ trách, đảm nhận nhiệm vụ.'
  },
  {
    id: 48,
    sectionId: 'practice-cloze',
    sectionTitle: 'Practice Test: Don’t Be Fooled by Fake Green Labels!',
    category: 'cloze',
    questionNumber: 8,
    questionText: 'A high (8) __________ of awareness helps shoppers ask better questions.',
    options: {
      A: 'number',
      B: 'level',
      C: 'jar',
      D: 'pile'
    },
    correctAnswer: 'B',
    passageTitle: 'Don’t Be Fooled by Fake Green Labels!',
    excerpt: 'Dữ kiện trong bài: "• A high (8) [level] of awareness helps shoppers ask better questions."',
    fullPassage: PASSAGE_FAKE_GREEN_LABELS,
    explanation: 'Cụm từ "level of awareness" = mức độ nhận thức (high level of awareness).'
  },
  {
    id: 49,
    sectionId: 'practice-cloze',
    sectionTitle: 'Practice Test: Don’t Be Fooled by Fake Green Labels!',
    category: 'cloze',
    questionNumber: 9,
    questionText: 'Ask for clear (9) __________ before paying more for an “eco-friendly” product.',
    options: {
      A: 'prediction',
      B: 'slogan',
      C: 'evidence',
      D: 'image'
    },
    correctAnswer: 'C',
    passageTitle: 'Don’t Be Fooled by Fake Green Labels!',
    excerpt: 'Dữ kiện trong bài: "• Ask for clear (9) [evidence] before paying more for an “eco-friendly” product."',
    fullPassage: PASSAGE_FAKE_GREEN_LABELS,
    explanation: '"evidence" = bằng chứng xác thực (yêu cầu bằng chứng rõ ràng trước khi trả thêm tiền cho sản phẩm).'
  },
  {
    id: 50,
    sectionId: 'practice-cloze',
    sectionTitle: 'Practice Test: Don’t Be Fooled by Fake Green Labels!',
    category: 'cloze',
    questionNumber: 10,
    questionText: 'Be careful when brands (10) __________ free bags or gifts to hide wasteful packaging.',
    options: {
      A: 'throw away',
      B: 'rinse out',
      C: 'give away',
      D: 'switch off'
    },
    correctAnswer: 'C',
    passageTitle: 'Don’t Be Fooled by Fake Green Labels!',
    excerpt: 'Dữ kiện trong bài: "• Be careful when brands (10) [give away] free bags or gifts to hide wasteful packaging."',
    fullPassage: PASSAGE_FAKE_GREEN_LABELS,
    explanation: '"give away" = tặng miễn phí (tặng túi hay quà miễn phí để che giấu bao bì lãng phí).'
  },
  {
    id: 51,
    sectionId: 'practice-cloze',
    sectionTitle: 'Practice Test: Don’t Be Fooled by Fake Green Labels!',
    category: 'cloze',
    questionNumber: 11,
    questionText: 'Compare two adverts: if one says “natural” and (11) __________ says “clean”, check what each word really means.',
    options: {
      A: 'another',
      B: 'the other',
      C: 'others',
      D: 'the others'
    },
    correctAnswer: 'B',
    passageTitle: 'Don’t Be Fooled by Fake Green Labels!',
    excerpt: 'Dữ kiện trong bài: "• Compare two adverts: if one says “natural” and (11) [the other] says “clean”, check what each word really means."',
    fullPassage: PASSAGE_FAKE_GREEN_LABELS,
    explanation: 'Cấu trúc đối chiếu giữa 2 đối tượng xác định ("two adverts"): "one ... and the other" (một cái... và cái còn lại).'
  },
  {
    id: 52,
    sectionId: 'practice-cloze',
    sectionTitle: 'Practice Test: Don’t Be Fooled by Fake Green Labels!',
    category: 'cloze',
    questionNumber: 12,
    questionText: 'Support companies with (12) __________ plans, honest reports, and products that can be reused or recycled.',
    options: {
      A: 'selective',
      B: 'short-term',
      C: 'sustainable',
      D: 'promotional'
    },
    correctAnswer: 'C',
    passageTitle: 'Don’t Be Fooled by Fake Green Labels!',
    excerpt: 'Dữ kiện trong bài: "Support companies with (12) [sustainable] plans, honest reports, and products that can be reused or recycled."',
    fullPassage: PASSAGE_FAKE_GREEN_LABELS,
    explanation: '"sustainable" = bền vững (sustainable plans = kế hoạch phát triển bền vững).'
  },

  // ==================== PRACTICE TEST - GREEN HOUSING BEYOND THE LABEL (Q18 - Q22) ====================
  {
    id: 53,
    sectionId: 'practice-green-housing',
    sectionTitle: 'Practice Test: Green Housing Beyond the Label',
    category: 'reading',
    questionNumber: 18,
    questionText: 'During the renovation of a small apartment in Quy Nhon, the architect began with usage patterns, not showroom details. Her plan was not a matter of appearance; it was (18) __________.',
    options: {
      A: 'a practical adjustment plan shaped more by comfort claims than measured energy use',
      B: 'the careful matching of insulation, ventilation, and routines to the apartment\'s use patterns',
      C: 'an effort to make natural materials visible before checking how rooms were used',
      D: 'a decision to treat airflow as important mainly after devices had been installed'
    },
    correctAnswer: 'B',
    passageTitle: 'Green Housing Beyond the Label',
    excerpt: 'Dữ kiện đoạn 1: "...During the renovation of a small apartment in Quy Nhon, the architect began with usage patterns, not showroom details. Her plan was not a matter of appearance; it was (18) [the careful matching of insulation, ventilation, and routines to the apartment\'s use patterns]."',
    fullPassage: PASSAGE_GREEN_HOUSING,
    explanation: 'Ý nghĩa nhấn mạnh sự kết hợp cẩn thận giữa khả năng cách nhiệt, thông gió và thói quen sinh hoạt khớp với thói quen sử dụng của căn hộ, chứ không chỉ là hình thức bên ngoài.'
  },
  {
    id: 54,
    sectionId: 'practice-green-housing',
    sectionTitle: 'Practice Test: Green Housing Beyond the Label',
    category: 'reading',
    questionNumber: 19,
    questionText: 'Instead of replacing every old surface, they kept the thick interior wall, (19) __________.',
    options: {
      A: 'as if thermal mass alone cooled the whole apartment',
      B: 'with afternoon heat stored before the wall was kept',
      C: 'using its thermal mass to slow afternoon heat indoors',
      D: 'so that the wall\'s mass made sunlight enter later'
    },
    correctAnswer: 'C',
    passageTitle: 'Green Housing Beyond the Label',
    excerpt: 'Dữ kiện đoạn 2: "The team mapped where afternoon heat entered, where cross-breezes were blocked... Instead of replacing every old surface, they kept the thick interior wall, (19) [using its thermal mass to slow afternoon heat indoors]."',
    fullPassage: PASSAGE_GREEN_HOUSING,
    explanation: 'Mệnh đề phân từ chỉ mục đích/tác dụng: tận dụng khối nhiệt (thermal mass) của bức tường dày để làm chậm nhiệt lượng buổi chiều vào nhà.'
  },
  {
    id: 55,
    sectionId: 'practice-green-housing',
    sectionTitle: 'Practice Test: Green Housing Beyond the Label',
    category: 'reading',
    questionNumber: 20,
    questionText: 'A narrow window was moved higher on the west side (20) __________, while a shaded opening on the opposite wall allowed air to leave slowly.',
    options: {
      A: 'so that daylight reached the kitchen without increasing glare',
      B: 'with daylight improved but glare treated as unavoidable',
      C: 'because higher windows had already reduced glare indoors',
      D: 'although the kitchen needed light more than ventilation'
    },
    correctAnswer: 'A',
    passageTitle: 'Green Housing Beyond the Label',
    excerpt: 'Dữ kiện đoạn 2: "A narrow window was moved higher on the west side (20) [so that daylight reached the kitchen without increasing glare], while a shaded opening on the opposite wall allowed air to leave slowly."',
    fullPassage: PASSAGE_GREEN_HOUSING,
    explanation: 'Mục đích nâng cửa sổ hẹp lên cao ở phía tây là để ánh sáng ban ngày chiếu tới nhà bếp mà không làm tăng độ chói lóa (without increasing glare).'
  },
  {
    id: 56,
    sectionId: 'practice-green-housing',
    sectionTitle: 'Practice Test: Green Housing Beyond the Label',
    category: 'reading',
    questionNumber: 21,
    questionText: 'That difference matters because green housing is not a single feature; (21) __________.',
    options: {
      A: 'one efficient feature can guide later choices, even if overall demand remains similar',
      B: 'materials with natural finishes matter most when residents feel less dependent on appliances',
      C: 'comfort usually improves once residents accept higher bills as part of greener design',
      D: 'it works through linked choices that lower demand while preserving ordinary daily comfort indoors'
    },
    correctAnswer: 'D',
    passageTitle: 'Green Housing Beyond the Label',
    excerpt: 'Dữ kiện đoạn 3: "That difference matters because green housing is not a single feature; (21) [it works through linked choices that lower demand while preserving ordinary daily comfort indoors]."',
    fullPassage: PASSAGE_GREEN_HOUSING,
    explanation: 'Nhà ở xanh không phải là một đặc điểm đơn lẻ, mà nó vận hành thông qua các giải pháp liên kết giúp giảm nhu cầu năng lượng trong khi vẫn giữ được sự thoải mái hàng ngày.'
  },
  {
    id: 57,
    sectionId: 'practice-green-housing',
    sectionTitle: 'Practice Test: Green Housing Beyond the Label',
    category: 'reading',
    questionNumber: 22,
    questionText: 'In this sense, a greener home is less about displaying environmental intention than about (22) __________.',
    options: {
      A: 'selecting upgrades that signal intention before checking heat, daylight, and indoor routines',
      B: 'aligning heat, daylight, and routines before treating visible upgrades as proof of sustainability',
      C: 'using comfort labels to prove that residents understand heat, daylight, and routine changes',
      D: 'letting daily routines depend on upgrades that make heat and daylight easier to advertise'
    },
    correctAnswer: 'B',
    passageTitle: 'Green Housing Beyond the Label',
    excerpt: 'Dữ kiện kết bài (đoạn 3): "In this sense, a greener home is less about displaying environmental intention than about (22) [aligning heat, daylight, and routines before treating visible upgrades as proof of sustainability]."',
    fullPassage: PASSAGE_GREEN_HOUSING,
    explanation: 'Ngôi nhà xanh thực chất là sự đồng bộ giữa nhiệt độ, ánh sáng tự nhiên và thói quen sinh hoạt trước khi coi những nâng cấp bề ngoài là minh chứng cho sự bền vững.'
  },

  // ==================== PRACTICE TEST - THE QUIET SIDE OF GREEN PROGRESS (Q23 - Q30) ====================
  {
    id: 58,
    sectionId: 'practice-greenhushing',
    sectionTitle: 'Practice Test: The Quiet Side of Green Progress',
    category: 'reading',
    questionNumber: 23,
    questionText: 'Which paragraph mentions small practical changes that are not clearly shown on the product label?',
    options: {
      A: 'Paragraph 1',
      B: 'Paragraph 2',
      C: 'Paragraph 3',
      D: 'Paragraph 4'
    },
    correctAnswer: 'A',
    passageTitle: 'The Quiet Side of Green Progress',
    excerpt: 'Dữ kiện Đoạn 1: "The label on a pack of paper cups told shoppers almost nothing about the quiet work behind it, although the company had reduced the amount of plastic lining, changed part of its supply route, and tested a lighter form of packaging."',
    fullPassage: PASSAGE_GREENHUSHING,
    explanation: 'Đoạn 1 nêu rõ các thay đổi thực tế nhỏ (giảm lót nhựa, đổi lộ trình cung ứng, thử nghiệm bao bì nhẹ hơn) nhưng không được thể hiện trên nhãn sản phẩm.'
  },
  {
    id: 59,
    sectionId: 'practice-greenhushing',
    sectionTitle: 'Practice Test: The Quiet Side of Green Progress',
    category: 'reading',
    questionNumber: 24,
    questionText: 'The word “invite” in paragraph 1 is closest in meaning to __________.',
    options: {
      A: 'cause',
      B: 'reduce',
      C: 'hide',
      D: 'compare'
    },
    correctAnswer: 'A',
    passageTitle: 'The Quiet Side of Green Progress',
    excerpt: 'Dữ kiện Đoạn 1: "...the managers had decided that saying too much about “green progress” might invite more anger than trust."',
    fullPassage: PASSAGE_GREENHUSHING,
    explanation: 'Trong ngữ cảnh này, "invite more anger" nghĩa là dẫn đến / gây ra (cause) thêm sự giận dữ thay vì niềm tin.'
  },
  {
    id: 60,
    sectionId: 'practice-greenhushing',
    sectionTitle: 'Practice Test: The Quiet Side of Green Progress',
    category: 'reading',
    questionNumber: 25,
    questionText: 'According to paragraph 1, all of the following are mentioned as actions taken by the company EXCEPT __________.',
    options: {
      A: 'reducing part of the plastic lining',
      B: 'changing part of its supply route',
      C: 'testing lighter packaging',
      D: 'printing detailed green claims'
    },
    correctAnswer: 'D',
    passageTitle: 'The Quiet Side of Green Progress',
    excerpt: 'Dữ kiện Đoạn 1: "...reduced the amount of plastic lining, changed part of its supply route, and tested a lighter form of packaging. The design looked plain, even forgettable... silence began to feel safer than explanation."',
    fullPassage: PASSAGE_GREENHUSHING,
    explanation: 'Công ty giữ im lặng ("silence began to feel safer than explanation") và thiết kế nhãn đơn giản, không hề in các tuyên bố chi tiết về môi trường (printing detailed green claims).'
  },
  {
    id: 61,
    sectionId: 'practice-greenhushing',
    sectionTitle: 'Practice Test: The Quiet Side of Green Progress',
    category: 'reading',
    questionNumber: 26,
    questionText: 'The phrase “such priorities” in paragraph 2 refers to __________.',
    options: {
      A: 'public criticism from careful customers',
      B: 'business choices related to sustainability',
      C: 'investors who dislike public mistakes',
      D: 'weak efforts that companies try to hide'
    },
    correctAnswer: 'B',
    passageTitle: 'The Quiet Side of Green Progress',
    excerpt: 'Dữ kiện Đoạn 2: "KPMG describes it as a company refusing to publicize sustainability information, partly because it fears criticism from people who may find its efforts too weak or from investors who dislike such priorities."',
    fullPassage: PASSAGE_GREENHUSHING,
    explanation: '"such priorities" quy chiếu về các quyết định, ưu tiên kinh doanh liên quan đến tính bền vững ("sustainability information / efforts").'
  },
  {
    id: 62,
    sectionId: 'practice-greenhushing',
    sectionTitle: 'Practice Test: The Quiet Side of Green Progress',
    category: 'reading',
    questionNumber: 27,
    questionText: 'The word “publicize” in paragraph 2 is OPPOSITE in meaning to __________.',
    options: {
      A: 'announce',
      B: 'explain',
      C: 'conceal',
      D: 'describe'
    },
    correctAnswer: 'C',
    passageTitle: 'The Quiet Side of Green Progress',
    excerpt: 'Dữ kiện Đoạn 2: "KPMG describes it as a company refusing to publicize sustainability information... when useful information is hidden..."',
    fullPassage: PASSAGE_GREENHUSHING,
    explanation: '"publicize" mang nghĩa công bố, công khai rộng rãi; trái nghĩa (OPPOSITE) với nó là "conceal" (che giấu, giấu kín).'
  },
  {
    id: 63,
    sectionId: 'practice-greenhushing',
    sectionTitle: 'Practice Test: The Quiet Side of Green Progress',
    category: 'reading',
    questionNumber: 28,
    questionText: 'According to paragraph 3, why may a company be afraid to mention one small environmental improvement?',
    options: {
      A: 'People may judge that small step against larger problems the company has not solved.',
      B: 'Customers may immediately believe that the company has become fully sustainable.',
      C: 'Investors may ask the company to make stronger green claims on social media.',
      D: 'The company may lose interest in improving once one change has been announced.'
    },
    correctAnswer: 'A',
    passageTitle: 'The Quiet Side of Green Progress',
    excerpt: 'Dữ kiện Đoạn 3: "A brand that speaks about one small improvement may be attacked for every larger problem it has not solved. Social media can make this pressure sharper, turning a careful sentence into a public trial."',
    fullPassage: PASSAGE_GREENHUSHING,
    explanation: 'Một thương hiệu nêu một cải tiến nhỏ có thể bị công kích vì những vấn đề lớn hơn mà họ chưa giải quyết được.'
  },
  {
    id: 64,
    sectionId: 'practice-greenhushing',
    sectionTitle: 'Practice Test: The Quiet Side of Green Progress',
    category: 'reading',
    questionNumber: 29,
    questionText: 'Which of the following best paraphrases the underlined sentence in paragraph 3: "Still, when suspicion becomes the only language, honest progress may lose its voice."?',
    options: {
      A: 'If people respond only with distrust, sincere improvements may no longer be shared openly.',
      B: 'If companies speak honestly, public suspicion will disappear from the market quickly.',
      C: 'When customers become more suspicious, dishonest companies will stop making green claims.',
      D: 'When progress is honest, it should remain silent until all environmental problems are solved.'
    },
    correctAnswer: 'A',
    passageTitle: 'The Quiet Side of Green Progress',
    excerpt: 'Dữ kiện Đoạn 3: "Still, when suspicion becomes the only language, honest progress may lose its voice." (Khi sự ngờ vực trở thành ngôn ngữ duy nhất, tiến trình chân thành có thể mất đi tiếng nói)',
    fullPassage: PASSAGE_GREENHUSHING,
    explanation: 'Diễn giải đúng: Nếu mọi người chỉ phản ứng bằng sự thiếu tin tưởng/ngờ vực, những cải tiến chân thành sẽ không còn được chia sẻ công khai nữa.'
  },
  {
    id: 65,
    sectionId: 'practice-greenhushing',
    sectionTitle: 'Practice Test: The Quiet Side of Green Progress',
    category: 'reading',
    questionNumber: 30,
    questionText: 'Which paragraph suggests that both companies and consumers have responsibilities in creating a healthier culture of green communication?',
    options: {
      A: 'Paragraph 1',
      B: 'Paragraph 2',
      C: 'Paragraph 3',
      D: 'Paragraph 4'
    },
    correctAnswer: 'D',
    passageTitle: 'The Quiet Side of Green Progress',
    excerpt: 'Dữ kiện Đoạn 4: "A healthier culture would ask for evidence without treating every imperfect effort as a crime. Companies should admit limits, show numbers clearly... Consumers should question claims, but not punish honesty more harshly than silence."',
    fullPassage: PASSAGE_GREENHUSHING,
    explanation: 'Đoạn 4 nêu rõ cả trách nhiệm của doanh nghiệp (Companies should admit limits, show numbers clearly...) và người tiêu dùng (Consumers should question claims, but not punish honesty...).'
  },

  // ==================== PRACTICE TEST - THE CITY THAT KEEPS THE HEAT (Q31 - Q40) ====================
  {
    id: 66,
    sectionId: 'practice-heat-island',
    sectionTitle: 'Practice Test: The City That Keeps the Heat',
    category: 'reading',
    questionNumber: 31,
    questionText: 'Where in the passage does the following sentence best fit: "Air conditioners may protect the people inside, while pushing warm air and energy demand back into the street."?',
    options: {
      A: '[I]',
      B: '[II]',
      C: '[III]',
      D: '[IV]'
    },
    correctAnswer: 'C',
    passageTitle: 'The City That Keeps the Heat',
    excerpt: 'Dữ kiện Đoạn 2: "[II] Roads, roofs, and buildings absorb and release heat more than trees... [III] What looks like private comfort can quietly become public pressure, especially on nights when sleep itself becomes work."',
    fullPassage: PASSAGE_HEAT_ISLAND,
    explanation: 'Vị trí [III] nối tiếp liền mạch: Câu cần điền nói về máy lạnh bảo vệ người bên trong nhưng đẩy khí nóng ra đường, giải thích chính xác cho câu sau: "What looks like private comfort can quietly become public pressure".'
  },
  {
    id: 67,
    sectionId: 'practice-heat-island',
    sectionTitle: 'Practice Test: The City That Keeps the Heat',
    category: 'reading',
    questionNumber: 32,
    questionText: 'According to paragraph 1, what is suggested by the contrast between the bus stop and the luxury lobby?',
    options: {
      A: 'Heat mainly affects people who choose to wait outside for transport.',
      B: 'Expensive buildings usually prevent nearby streets from becoming hotter.',
      C: 'Urban heat is experienced unequally, depending on people’s surroundings and access to comfort.',
      D: 'Public places become uncomfortable only because traffic is heavy in the afternoon.'
    },
    correctAnswer: 'C',
    passageTitle: 'The City That Keeps the Heat',
    excerpt: 'Dữ kiện Đoạn 1: "Students stood under a thin signboard, delivery riders checked their phones... Across the road, a luxury lobby glowed behind tinted glass, cool and almost silent. The same sun touched everyone, but the city did not share its heat fairly."',
    fullPassage: PASSAGE_HEAT_ISLAND,
    explanation: 'Sự đối lập giữa trạm xe buýt nóng nực và sảnh cao ốc mát lạnh cho thấy nhiệt độ đô thị được trải nghiệm không đồng đều, phụ thuộc vào môi trường xung quanh và khả năng tiếp cận sự tiện nghi.'
  },
  {
    id: 68,
    sectionId: 'practice-heat-island',
    sectionTitle: 'Practice Test: The City That Keeps the Heat',
    category: 'reading',
    questionNumber: 33,
    questionText: 'The word “idling” in paragraph 1 is closest in meaning to __________.',
    options: {
      A: 'waiting',
      B: 'moving',
      C: 'turning',
      D: 'falling'
    },
    correctAnswer: 'A',
    passageTitle: 'The City That Keeps the Heat',
    excerpt: 'Dữ kiện Đoạn 1: "...delivery riders checked their phones beside idling traffic..."',
    fullPassage: PASSAGE_HEAT_ISLAND,
    explanation: '"idling traffic" nghĩa là dòng xe cộ dừng nổ máy chờ đợi tại chỗ (waiting).'
  },
  {
    id: 69,
    sectionId: 'practice-heat-island',
    sectionTitle: 'Practice Test: The City That Keeps the Heat',
    category: 'reading',
    questionNumber: 34,
    questionText: 'The word "they" in paragraph 4 refers to __________.',
    options: {
      A: 'harmful effects',
      B: 'private buildings',
      C: 'lighter pavements',
      D: 'these cooling measures'
    },
    correctAnswer: 'D',
    passageTitle: 'The City That Keeps the Heat',
    excerpt: 'Dữ kiện Đoạn 4: "Trees, reflective roofs, lighter pavements, and greener public spaces can reduce harmful effects when they are planned carefully and maintained in the long run."',
    fullPassage: PASSAGE_HEAT_ISLAND,
    explanation: 'Từ "they" thay thế cho các giải pháp làm mát đã liệt kê ở đầu câu (cây xanh, mái phản quang, vỉa hè sáng màu, không gian công cộng xanh = these cooling measures).'
  },
  {
    id: 70,
    sectionId: 'practice-heat-island',
    sectionTitle: 'Practice Test: The City That Keeps the Heat',
    category: 'reading',
    questionNumber: 35,
    questionText: 'According to the passage, all of the following are presented as part of the urban heat problem EXCEPT __________.',
    options: {
      A: 'hard city surfaces can hold and release more heat',
      B: 'private lobbies share cool air equally with people outside',
      C: 'areas with little greenery may remain hotter than nearby places',
      D: 'heat can become a daily punishment for people with fewer choices'
    },
    correctAnswer: 'B',
    passageTitle: 'The City That Keeps the Heat',
    excerpt: 'Dữ kiện Đoạn 1: "Across the road, a luxury lobby glowed behind tinted glass, cool and almost silent. The same sun touched everyone, but the city did not share its heat fairly."',
    fullPassage: PASSAGE_HEAT_ISLAND,
    explanation: 'Các sảnh riêng biệt giấu kín khí mát sau cửa kính và KHÔNG hề chia sẻ khí mát cho người bên ngoài đường.'
  },
  {
    id: 71,
    sectionId: 'practice-heat-island',
    sectionTitle: 'Practice Test: The City That Keeps the Heat',
    category: 'reading',
    questionNumber: 36,
    questionText: 'Which of the following best summarises paragraph 3?',
    options: {
      A: 'Public awareness is useful only when it connects visible heat suffering with deeper questions of urban fairness and design.',
      B: 'Photos of tired workers are stronger than charts because they make people care more about summer weather.',
      C: 'Heat should mainly be understood as a physical danger that affects workers more seriously than other groups.',
      D: 'Dramatic summer images can solve the problem when they show clearly how uncomfortable hot cities feel.'
    },
    correctAnswer: 'A',
    passageTitle: 'The City That Keeps the Heat',
    excerpt: 'Dữ kiện Đoạn 3: "Awareness can help when it turns heat from a boring weather complaint into a design problem people can see... The danger comes when suffering is used only as a dramatic summer image, with no question about who gets shade... Heat is physical, but its map is social."',
    fullPassage: PASSAGE_HEAT_ISLAND,
    explanation: 'Tóm tắt chuẩn: Nhận thức cộng đồng chỉ thực sự hữu ích khi nó liên kết sự khổ sở do nắng nóng với các câu hỏi sâu sắc hơn về sự công bằng và thiết kế đô thị.'
  },
  {
    id: 72,
    sectionId: 'practice-heat-island',
    sectionTitle: 'Practice Test: The City That Keeps the Heat',
    category: 'reading',
    questionNumber: 37,
    questionText: 'Which of the following best paraphrases the underlined sentence in paragraph 3: "Heat is physical, but its map is social."?',
    options: {
      A: 'Heat spreads through the city mainly because physical surfaces are arranged in a scientific pattern.',
      B: 'Heat is a natural condition, so social differences do not greatly change how people experience it.',
      C: 'Heat is a real bodily problem, but its effects follow social patterns of protection and disadvantage.',
      D: 'Heat maps should focus on temperature levels rather than the people living in different areas.'
    },
    correctAnswer: 'C',
    passageTitle: 'The City That Keeps the Heat',
    excerpt: 'Dữ kiện Đoạn 3 câu gạch chân: "Heat is physical, but its map is social."',
    fullPassage: PASSAGE_HEAT_ISLAND,
    explanation: 'Nhiệt độ là hiện tượng vật lý tác động lên cơ thể, nhưng bản đồ phân bổ tác động của nó lại phụ thuộc vào yếu tố xã hội (ai được bảo vệ, ai chịu thiệt thòi).'
  },
  {
    id: 73,
    sectionId: 'practice-heat-island',
    sectionTitle: 'Practice Test: The City That Keeps the Heat',
    category: 'reading',
    questionNumber: 38,
    questionText: 'According to paragraph 4, what can be inferred about making cities cooler?',
    options: {
      A: 'Parks alone are enough if they are placed near tall private buildings.',
      B: 'Green solutions work best when they are cheap and temporary.',
      C: 'Reflective roofs matter more than trees in crowded districts.',
      D: 'Cooling measures need careful planning and long-term maintenance to be effective.'
    },
    correctAnswer: 'D',
    passageTitle: 'The City That Keeps the Heat',
    excerpt: 'Dữ kiện Đoạn 4: "...can reduce harmful effects when they are planned carefully and maintained in the long run."',
    fullPassage: PASSAGE_HEAT_ISLAND,
    explanation: 'Các giải pháp làm mát cần phải được lên kế hoạch cẩn thận và bảo trì duy trì lâu dài thì mới phát huy hiệu quả.'
  },
  {
    id: 74,
    sectionId: 'practice-heat-island',
    sectionTitle: 'Practice Test: The City That Keeps the Heat',
    category: 'reading',
    questionNumber: 39,
    questionText: 'Which of the following can be inferred from the passage?',
    options: {
      A: 'Urban heat becomes less serious once people understand its scientific name.',
      B: 'A city’s heat problem is both environmental and social, so solutions must consider fairness as well as design.',
      C: 'Private buildings should be responsible for replacing public parks in crowded neighbourhoods.',
      D: 'Air conditioners are presented as the most reliable way to protect everyone from extreme heat.'
    },
    correctAnswer: 'B',
    passageTitle: 'The City That Keeps the Heat',
    excerpt: 'Dữ kiện xuyên suốt: "The same sun touched everyone, but the city did not share its heat fairly... Heat is physical, but its map is social... Only when shade is treated as basic protection, not a pleasant extra..."',
    fullPassage: PASSAGE_HEAT_ISLAND,
    explanation: 'Vấn đề nhiệt độ đô thị vừa mang tính môi trường vừa mang tính xã hội, do đó các giải pháp bắt buộc phải tính tới sự công bằng bên cạnh thiết kế kiến trúc.'
  },
  {
    id: 75,
    sectionId: 'practice-heat-island',
    sectionTitle: 'Practice Test: The City That Keeps the Heat',
    category: 'reading',
    questionNumber: 40,
    questionText: 'Which of the following best summarises the passage?',
    options: {
      A: 'Urban heat islands are caused by roads and buildings, so cities should replace most hard surfaces with parks.',
      B: 'Air conditioners help people sleep during hot nights, but they also increase energy use in crowded streets.',
      C: 'Urban heat is not shared equally, and cities become truly livable only when cooling is planned as basic public protection.',
      D: 'Heat awareness depends on dramatic images, because charts cannot explain why some neighbourhoods lack trees.'
    },
    correctAnswer: 'C',
    passageTitle: 'The City That Keeps the Heat',
    excerpt: 'Dữ kiện toàn bài và câu kết: "The question is not whether cities can look green from above. It is whether they can feel livable from the pavement. Only when shade is treated as basic protection..."',
    fullPassage: PASSAGE_HEAT_ISLAND,
    explanation: 'Nhiệt độ thành phố không được chia đều cho tất cả mọi người, và các thành phố chỉ thực sự đáng sống khi việc làm mát được quy hoạch như một biện pháp bảo vệ công cộng cơ bản.'
  }
];

export const ENVIRONMENT_QUESTIONS: Question[] = RAW_ENVIRONMENT_QUESTIONS.map((q) => ({
  ...q,
  unit: 'environment' as const,
  unitTitle: 'Môi Trường & Sống Xanh',
}));

export const ALL_QUESTIONS: Question[] = [
  ...INFORMATICS_QUESTIONS.map(q => ({ ...q, subject: 'informatics' as const })),
  ...CHEMISTRY_QUESTIONS.map(q => ({ ...q, subject: 'chemistry' as const })),
  ...MOCK_EXAM_2026_QUESTIONS.map(q => ({ ...q, subject: 'english' as const })),
  ...ENVIRONMENT_QUESTIONS.map(q => ({ ...q, subject: 'english' as const })),
  ...URBANISATION_QUESTIONS.map(q => ({ ...q, subject: 'english' as const })),
];


