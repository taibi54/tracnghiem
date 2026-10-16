import { Question } from '../types/quiz';

export const PASSAGE_FLOW_AND_FIELD = `FLOW & FIELD CITY WEEKEND
▪ Smarter Movement: When urbanisation brings convenience but also smog, expensive flats, and traffic congestion, choose a better Saturday. Flow & Field City Weekend welcomes residents (1) affected by rising rents and overcrowded roads to explore a cleaner way through the city. At the main gate, try our (2) multimodal transit hub, where tram displays, shaded footpaths, bike lockers, and reliable shuttle updates come together.
▪ Heritage, Not Hype: Follow the river walk past colonial buildings and craft stalls from nearby villages. Each display is designed to (3) strike a balance between modern infrastructure and rural identity, so visitors can enjoy progress without losing memory.
▪ Try It Tonight: Before heading home, consider (4) replacing your usual motorbike trip with a low-emission route suggested by the GreenLink app. It offers a practical response (5) to crowding, pollution, and the shortage of safe public spaces. Come before sunset and discover how a rapidly urbanised neighbourhood can become genuinely (6) liveable.`;

export const PASSAGE_RIDE_AND_REPAIR = `Ride & Repair Morning: One Street Without Car Noise!
▪ A cleaner route to school: Is your residential street too noisy before 7 a.m.? (7) Thanks to recent investment in a small tram stop, our ward is testing a car-light morning this Friday.
▪ Pick a map: At the gate, you will receive two route cards. One shows the tram line; (8) the other marks safe walking lanes past the old colonial building.
▪ Meet your guides: Your guides will help residents (9) get around without using a motorbike. They will also run a quick repair table. A (10) number of simple checks—brakes, lights and tyres—can make short trips safer.
▪ Use the shared space: The market gate is now a small community (11) facility with seats, shade and refill bottles. Try one low-emission trip, talk to neighbours and help create a calmer (12) urban street. Sign up at the board by Thursday.`;

export const PASSAGE_URBAN_HEALTH = `The city’s health problem is not always visible in its hospitals first; it often begins in the speed with which new neighbourhoods appear before clinics, pharmacies and preventive services can follow. Urbanisation has brought workers closer to jobs and children closer to schools, but it has also stretched public healthcare across areas planned mainly for housing, roads and commerce. When thousands of new residents rely on a few existing public clinics, routine illnesses become harder to treat early, and hospital waiting rooms (18) have become overflow points for conditions that should have been treated earlier. This pressure is not only about the number of patients. Newcomers may live far from registered providers, work irregular hours, or lack documents needed for subsidised care, a situation (19) in which healthcare access is shaped by location, paperwork and working hours.
City leaders sometimes respond by building bigger hospitals, and such investment can save lives in emergencies. (20) Even so, larger hospitals do not automatically make everyday healthcare easier to reach. If basic care, vaccination, mental-health support, and disease screening remain distant, minor problems are more likely to become serious before anyone receives help. Digital booking systems and mobile clinics can reduce some delays, but they work only when residents trust them and can use them. (21) Technology therefore improves access unevenly unless matched with practical community support, especially in informal districts where stable addresses, internet access, and paid time off are unevenly available. The challenge, therefore, is not simply to add beds after a crisis, (22) but to build everyday care into the city’s growth itself.`;

export const PASSAGE_SMART_CITIES_OECD = `Smart Cities and the Price of Being Seen
[Paragraph 1]
At 7 a.m., a resident opens an app and sees which tram is crowded, which road is blocked, and where an accident has slowed traffic. The city feels more convenient than it did a decade ago, when urbanisation made buses late and congestion ordinary. Sensors and connected lights now help people get around with less wasted time. For commuters, that is not a cold technical promise. It is breakfast not missed, a child not left waiting, a job reached reliably.

[Paragraph 2]
Yet the same system that improves comfort also asks the public to accept a bargain. Internet of Things integration means that street lights, buses, buildings and phones can share information. Realtime data analytics can help officials respond to pollution, crime, broken facilities or unsafe roads quickly. Not only can such tools improve infrastructure, but they can also make public services more equal when poorer districts are no longer invisible.

[Paragraph 3]
The difficulty begins when useful data becomes personal data. A camera used to manage traffic may also record where a worker goes after work. An automated transit system may reduce jams, while leaving behind a trail of daily habits. The more the city learns, the more residents may feel watched. Data privacy concerns are therefore not a luxury for people who dislike technology. They are a basic question about who may turn ordinary movement into permanent memory.

[Paragraph 4]
There is a better way to imagine the smart city. It should not be a place where ubiquitous surveillance is accepted simply because trains arrive faster. Nor should fear make cities reject every digital improvement. The wiser question is whether officials can make sure that data is limited, protected and clearly explained. A modern city should be smart enough to solve problems, and decent enough to know when not to look.
[Adapted from OECD]`;

export const PASSAGE_SINKING_HCMC_NASA = `Sinking of Ho Chi Minh City
[Paragraph 1]
Residents of Ho Chi Minh City have long grown accustomed to wading through deep water after a heavy downpour. Walking down flooded alleys, many simply blame unpredictable weather or inadequate drainage. The reality is far more complex. The real danger is not just the sky pouring down, but the earth pulling away. [I] Ho Chi Minh City’s flooding problem is not only a story of rising water, but also of sinking land, as rapid migration increases demand for housing, water, and infrastructure faster than the municipality can manage.

[Paragraph 2]
People do not uproot their lives without reason. Drawn by the promise of employment and modern facilities, millions have migrated to the metropolis, seeking better opportunities and an escape from rural stagnation. This influx brings undeniable economic vitality. The more the population grows, the greater the need for affordable housing and reliable clean water becomes. [II] To accommodate these aspirations, the urban landscape has expanded at a breakneck pace. New residential blocks replace former wetlands, creating a bustling environment where dreams of prosperity take shape.

[Paragraph 3]
Meeting such massive demand requires resources, often extracted directly from beneath the feet of the very dwellers seeking comfort. Driven by surface water shortages, industrial zones and communities have pumped millions of cubic metres from underground aquifers daily. Stripped of its subterranean liquid foundation, the soil compacts. Adding to this structural vulnerability is the immense weight of concrete. High-rise buildings, pressing down on soft geological layers, accelerate the subsidence. A city built to elevate human potential is literally crushing its own foundation.

[Paragraph 4]
Sinking land transforms ordinary high tides into devastating urban disasters, a phenomenon damaging vital infrastructure and placing the poorest citizens at severe risk. [III] Those residing in lowrise areas bear the brunt of this subtle collapse, finding their homes submerged. The issue extends far beyond engineering flaws. [IV] The true challenge lies not merely in constructing larger sewers, but in rethinking how a metropolis balances human ambition with ecological limits, ensuring that the pursuit of upward mobility does not inadvertently drag an entire community downward.
[Adapted from Earth Observatory NASA: Sinking of Ho Chi Minh City]`;

export const URBANISATION_QUESTIONS: Question[] = [
  // ==================== EXERCISE 1 (Questions 1 - 29) ====================
  {
    id: 101,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex1',
    sectionTitle: 'Exercise 1: Từ vựng Đô thị hóa',
    category: 'vocabulary',
    questionNumber: 1,
    questionText: 'Since the metro extension opened, many residents have found cross-city commuting more __________ than before.',
    options: {
      A: 'crowded',
      B: 'rural',
      C: 'convenient',
      D: 'expensive'
    },
    correctAnswer: 'C',
    explanation: '"convenient" = thuận tiện, tiện lợi. Từ khi tuyến metro mở rộng đi vào hoạt động, việc đi lại xuyên thành phố trở nên thuận tiện hơn trước.'
  },
  {
    id: 102,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex1',
    sectionTitle: 'Exercise 1: Từ vựng Đô thị hóa',
    category: 'vocabulary',
    questionNumber: 2,
    questionText: 'Rapid __________ has created jobs, but it has also increased pressure on schools and hospitals.',
    options: {
      A: 'urbanisation',
      B: 'urbanise',
      C: 'urban',
      D: 'urbanised'
    },
    correctAnswer: 'A',
    explanation: 'Sau tính từ "Rapid" cần danh từ: "urbanisation" (quá trình đô thị hóa nhanh chóng).'
  },
  {
    id: 103,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex1',
    sectionTitle: 'Exercise 1: Từ vựng Đô thị hóa',
    category: 'vocabulary',
    questionNumber: 3,
    questionText: 'Young nurses have struggled to rent __________ rooms near hospitals because prices have risen sharply.',
    options: {
      A: 'temporary',
      B: 'affordable',
      C: 'residential',
      D: 'spacious'
    },
    correctAnswer: 'B',
    explanation: '"affordable rooms" = phòng trọ giá cả phải chăng, vừa túi tiền.'
  },
  {
    id: 104,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex1',
    sectionTitle: 'Exercise 1: Từ vựng Đô thị hóa',
    category: 'vocabulary',
    questionNumber: 4,
    questionText: 'The air beside the ring road has worsened because vehicle __________ have increased during rush hours.',
    options: {
      A: 'emissions',
      B: 'facilities',
      C: 'residents',
      D: 'expenses'
    },
    correctAnswer: 'A',
    explanation: '"vehicle emissions" = khí thải từ các phương tiện giao thông.'
  },
  {
    id: 105,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex1',
    sectionTitle: 'Exercise 1: Từ vựng Đô thị hóa',
    category: 'vocabulary',
    questionNumber: 5,
    questionText: 'After three rainy seasons, the district finally upgraded its drainage systems, bridges, and basic __________.',
    options: {
      A: 'architecture',
      B: 'infrastructure',
      C: 'immigration',
      D: 'congestion'
    },
    correctAnswer: 'B',
    explanation: '"basic infrastructure" = cơ sở hạ tầng cơ bản (hệ thống thoát nước, cầu cống,...).'
  },
  {
    id: 106,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex1',
    sectionTitle: 'Exercise 1: Từ vựng Đô thị hóa',
    category: 'vocabulary',
    questionNumber: 6,
    questionText: 'Tourists often struggle to get __________ the old quarter because several streets are pedestrian-only now.',
    options: {
      A: 'through',
      B: 'over',
      C: 'around',
      D: 'across'
    },
    correctAnswer: 'C',
    explanation: 'Cụm động từ "get around" = đi lại, di chuyển quanh khu vực.'
  },
  {
    id: 107,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex1',
    sectionTitle: 'Exercise 1: Từ vựng Đô thị hóa',
    category: 'vocabulary',
    questionNumber: 7,
    questionText: 'When the garment factory moved overseas, local __________ rose faster than officials had expected last year.',
    options: {
      A: 'unemployment',
      B: 'investment',
      C: 'convenience',
      D: 'attraction'
    },
    correctAnswer: 'A',
    explanation: '"local unemployment" = nạn thất nghiệp tại địa phương.'
  },
  {
    id: 108,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex1',
    sectionTitle: 'Exercise 1: Từ vựng Đô thị hóa',
    category: 'vocabulary',
    questionNumber: 8,
    questionText: 'Compared with nearby towns, the capital is more __________ populated and needs stricter land-use planning.',
    options: {
      A: 'lightly',
      B: 'equally',
      C: 'densely',
      D: 'privately'
    },
    correctAnswer: 'C',
    explanation: '"densely populated" = có mật độ dân số đông đúc, đông dân cư.'
  },
  {
    id: 109,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex1',
    sectionTitle: 'Exercise 1: Từ vựng Đô thị hóa',
    category: 'vocabulary',
    questionNumber: 9,
    questionText: 'The climate plan promises more __________ to reduce heat and support residents’ mental health in summer.',
    options: {
      A: 'green spaces accessible',
      B: 'spaces accessible green',
      C: 'accessible spaces green',
      D: 'accessible green spaces'
    },
    correctAnswer: 'D',
    explanation: 'Trật tự tính từ và danh từ: "accessible" (dễ tiếp cận) + "green spaces" (không gian xanh) -> "accessible green spaces".'
  },
  {
    id: 110,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex1',
    sectionTitle: 'Exercise 1: Từ vựng Đô thị hóa',
    category: 'vocabulary',
    questionNumber: 10,
    questionText: 'The council must __________ noise complaints before allowing another night market in the same area.',
    options: {
      A: 'adapt with',
      B: 'settle to',
      C: 'compete for',
      D: 'deal with'
    },
    correctAnswer: 'D',
    explanation: 'Cụm động từ "deal with" = giải quyết, xử lý (deal with complaints = xử lý các khiếu nại).'
  },
  {
    id: 111,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex1',
    sectionTitle: 'Exercise 1: Từ vựng Đô thị hóa',
    category: 'vocabulary',
    questionNumber: 11,
    questionText: 'The council rejected the warehouse project because it was too close to a quiet __________ area.',
    options: {
      A: 'industrial',
      B: 'residential',
      C: 'agricultural',
      D: 'commercial'
    },
    correctAnswer: 'B',
    explanation: '"residential area" = khu dân cư, khu vực sinh sống của người dân.'
  },
  {
    id: 112,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex1',
    sectionTitle: 'Exercise 1: Từ vựng Đô thị hóa',
    category: 'vocabulary',
    questionNumber: 12,
    questionText: 'The more reliable public transport becomes, __________ private cars residents may need for daily commuting.',
    options: {
      A: 'fewer than',
      B: 'the least',
      C: 'fewest',
      D: 'the fewer'
    },
    correctAnswer: 'D',
    explanation: 'Cấu trúc so sánh kép (The more..., the fewer...): "The more reliable..., the fewer private cars...".'
  },
  {
    id: 113,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex1',
    sectionTitle: 'Exercise 1: Từ vựng Đô thị hóa',
    category: 'vocabulary',
    questionNumber: 13,
    questionText: 'Preserving the market’s old __________ has become harder as developers prefer taller glass buildings nearby.',
    options: {
      A: 'architecture',
      B: 'employment',
      C: 'equality',
      D: 'residency'
    },
    correctAnswer: 'A',
    explanation: '"old architecture" = kiến trúc cổ kính lâu đời.'
  },
  {
    id: 114,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex1',
    sectionTitle: 'Exercise 1: Từ vựng Đô thị hóa',
    category: 'vocabulary',
    questionNumber: 14,
    questionText: 'After comparing rent, schools, and flood risks, the family finally __________ a flat uphill nearby.',
    options: {
      A: 'decided on',
      B: 'agreed with',
      C: 'looked after',
      D: 'paid for'
    },
    correctAnswer: 'A',
    explanation: '"decide on" = đưa ra quyết định chọn cái gì sau khi đã cân nhắc.'
  },
  {
    id: 115,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex1',
    sectionTitle: 'Exercise 1: Từ vựng Đô thị hóa',
    category: 'vocabulary',
    questionNumber: 15,
    questionText: 'Bus __________ has improved since real-time arrival boards were installed at major stops last month.',
    options: {
      A: 'reliable',
      B: 'reliability',
      C: 'reliably',
      D: 'unreliable'
    },
    correctAnswer: 'B',
    explanation: 'Cần danh từ làm chủ ngữ: "Bus reliability" = độ tin cậy, sự đúng giờ của xe buýt.'
  },
  {
    id: 116,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex1',
    sectionTitle: 'Exercise 1: Từ vựng Đô thị hóa',
    category: 'vocabulary',
    questionNumber: 16,
    questionText: 'Children near the industrial zone are more exposed to __________ air than those in greener suburbs.',
    options: {
      A: 'residential',
      B: 'agricultural',
      C: 'polluted',
      D: 'reliable'
    },
    correctAnswer: 'C',
    explanation: '"polluted air" = bầu không khí bị ô nhiễm (ở gần khu công nghiệp).'
  },
  {
    id: 117,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex1',
    sectionTitle: 'Exercise 1: Từ vựng Đô thị hóa',
    category: 'vocabulary',
    questionNumber: 17,
    questionText: 'Longer commutes have become a hidden __________ for workers living far from industrial parks daily.',
    options: {
      A: 'comfort',
      B: 'expense',
      C: 'equality',
      D: 'facility'
    },
    correctAnswer: 'B',
    explanation: '"hidden expense" = chi phí ẩn (tốn kém tiền bạc và thời gian cho việc đi lại xa).'
  },
  {
    id: 118,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex1',
    sectionTitle: 'Exercise 1: Từ vựng Đô thị hóa',
    category: 'vocabulary',
    questionNumber: 18,
    questionText: 'Officials __________ a rent-support scheme after workers protested outside the industrial park last week during meetings.',
    options: {
      A: 'turned down',
      B: 'came up with',
      C: 'looked after',
      D: 'broke away from'
    },
    correctAnswer: 'B',
    explanation: '"came up with" = nghĩ ra, đề xuất (nghĩ ra chương trình hỗ trợ tiền thuê nhà).'
  },
  {
    id: 119,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex1',
    sectionTitle: 'Exercise 1: Từ vựng Đô thị hóa',
    category: 'vocabulary',
    questionNumber: 19,
    questionText: 'Even after a new park opened, the bus interchange still feels __________ at peak time.',
    options: {
      A: 'rural',
      B: 'crowded',
      C: 'coastal',
      D: 'equal'
    },
    correctAnswer: 'B',
    explanation: '"crowded" = đông đúc, chật ních người vào giờ cao điểm.'
  },
  {
    id: 120,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex1',
    sectionTitle: 'Exercise 1: Từ vựng Đô thị hóa',
    category: 'vocabulary',
    questionNumber: 20,
    questionText: 'The city wants public services to be more __________, especially for migrants and disabled residents today.',
    options: {
      A: 'included',
      B: 'inclusion',
      C: 'inclusive',
      D: 'inclusively'
    },
    correctAnswer: 'C',
    explanation: 'Tính từ "inclusive" = bao trùm, hòa nhập cho mọi đối tượng (kể cả người di cư và người khuyết tật).'
  },
  {
    id: 121,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex1',
    sectionTitle: 'Exercise 1: Từ vựng Đô thị hóa',
    category: 'vocabulary',
    questionNumber: 21,
    questionText: 'As more bus routes connect suburbs to factories, fewer workers will __________ on costly taxis.',
    options: {
      A: 'rely',
      B: 'spend',
      C: 'wait',
      D: 'ride'
    },
    correctAnswer: 'A',
    explanation: 'Cấu trúc "rely on" = phụ thuộc vào, trông cậy vào.'
  },
  {
    id: 122,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex1',
    sectionTitle: 'Exercise 1: Từ vựng Đô thị hóa',
    category: 'vocabulary',
    questionNumber: 22,
    questionText: 'Water __________ has become less seasonal because more apartment blocks share the same reservoir now.',
    options: {
      A: 'equality',
      B: 'shortage',
      C: 'convenience',
      D: 'comfort'
    },
    correctAnswer: 'B',
    explanation: '"Water shortage" = tình trạng thiếu nước sinh hoạt.'
  },
  {
    id: 123,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex1',
    sectionTitle: 'Exercise 1: Từ vựng Đô thị hóa',
    category: 'vocabulary',
    questionNumber: 23,
    questionText: 'Many drivers now leave earlier to __________ longer queues at the city’s toll stations daily.',
    options: {
      A: 'deal about',
      B: 'adapt for',
      C: 'cope with',
      D: 'suffer to'
    },
    correctAnswer: 'C',
    explanation: '"cope with" = đối phó, xoay xở với (đối phó với những hàng dài chờ đợi ở trạm thu phí).'
  },
  {
    id: 124,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex1',
    sectionTitle: 'Exercise 1: Từ vựng Đô thị hóa',
    category: 'vocabulary',
    questionNumber: 24,
    questionText: 'Newcomers often need time to __________ before they feel confident using local services in cities.',
    options: {
      A: 'take off',
      B: 'put away',
      C: 'settle in',
      D: 'break out'
    },
    correctAnswer: 'C',
    explanation: '"settle in" = hòa nhập, ổn định cuộc sống ở nơi ở mới.'
  },
  {
    id: 125,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex1',
    sectionTitle: 'Exercise 1: Từ vựng Đô thị hóa',
    category: 'vocabulary',
    questionNumber: 25,
    questionText: 'Sudden rent increases have put __________ teachers who work near the city centre this year.',
    options: {
      A: 'pressure to',
      B: 'pressure on',
      C: 'pressure with',
      D: 'pressure from'
    },
    correctAnswer: 'B',
    explanation: 'Cụm cố định "put pressure on somebody" = gây áp lực lên ai đó.'
  },
  {
    id: 126,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex1',
    sectionTitle: 'Exercise 1: Từ vựng Đô thị hóa',
    category: 'vocabulary',
    questionNumber: 26,
    questionText: 'Although the city is expanding, this village still keeps a strong __________ identity through festivals.',
    options: {
      A: 'coastal',
      B: 'residential',
      C: 'rural',
      D: 'industrial'
    },
    correctAnswer: 'C',
    explanation: '"rural identity" = bản sắc nông thôn, thôn quê truyền thống.'
  },
  {
    id: 127,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex1',
    sectionTitle: 'Exercise 1: Từ vựng Đô thị hóa',
    category: 'vocabulary',
    questionNumber: 27,
    questionText: 'Many parents are __________ the lack of playgrounds in newly built apartment blocks nearby today.',
    options: {
      A: 'familiar with',
      B: 'responsible for',
      C: 'similar to',
      D: 'concerned about'
    },
    correctAnswer: 'D',
    explanation: '"concerned about" = lo ngại, bận tâm về điều gì (lo ngại về việc thiếu sân chơi).'
  },
  {
    id: 128,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex1',
    sectionTitle: 'Exercise 1: Từ vựng Đô thị hóa',
    category: 'vocabulary',
    questionNumber: 28,
    questionText: 'Better pavements and lighting have made the neighbourhood more __________ for elderly residents at night.',
    options: {
      A: 'liveable',
      B: 'populous',
      C: 'coastal',
      D: 'industrial'
    },
    correctAnswer: 'A',
    explanation: '"liveable" = đáng sống, tiện nghi, dễ sinh sống an toàn.'
  },
  {
    id: 129,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex1',
    sectionTitle: 'Exercise 1: Từ vựng Đô thị hóa',
    category: 'vocabulary',
    questionNumber: 29,
    questionText: 'The rapid __________ of suburbs has turned many vegetable fields into roads and apartment towers.',
    options: {
      A: 'employment',
      B: 'convenience',
      C: 'expansion',
      D: 'attraction'
    },
    correctAnswer: 'C',
    explanation: '"rapid expansion" = sự mở rộng, bành trướng nhanh chóng của các vùng ngoại ô.'
  },

  // ==================== EXERCISE 2 (Questions 1 - 20) ====================
  {
    id: 130,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex2',
    sectionTitle: 'Exercise 2: Thì Hiện Tại Hoàn Thành & Sự Hòa Hợp',
    category: 'grammar',
    questionNumber: 1,
    questionText: 'The local council has not completed the affordable housing project __________, so rents remain high.',
    options: {
      A: 'already',
      B: 'ever',
      C: 'yet',
      D: 'since'
    },
    correctAnswer: 'C',
    explanation: 'Dùng "yet" ở cuối câu phủ định của thì Hiện tại hoàn thành (chưa hoàn thành).'
  },
  {
    id: 131,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex2',
    sectionTitle: 'Exercise 2: Thì Hiện Tại Hoàn Thành & Sự Hòa Hợp',
    category: 'grammar',
    questionNumber: 2,
    questionText: 'A new metro line __________, so residents can reach the centre faster today.',
    options: {
      A: 'just has opened',
      B: 'has just opened',
      C: 'just had opened',
      D: 'has opened just'
    },
    correctAnswer: 'B',
    explanation: 'Vị trí của trạng từ "just" đứng giữa trợ động từ "has" và quá khứ phân từ "opened": "has just opened".'
  },
  {
    id: 132,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex2',
    sectionTitle: 'Exercise 2: Thì Hiện Tại Hoàn Thành & Sự Hòa Hợp',
    category: 'grammar',
    questionNumber: 3,
    questionText: 'The rural village has become more urbanised __________ 2016, with new roads and shops.',
    options: {
      A: 'for',
      B: 'during',
      C: 'since',
      D: 'ago'
    },
    correctAnswer: 'C',
    explanation: 'Đi với mốc thời gian "2016" dùng "since" trong thì Hiện tại hoàn thành.'
  },
  {
    id: 133,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex2',
    sectionTitle: 'Exercise 2: Thì Hiện Tại Hoàn Thành & Sự Hòa Hợp',
    category: 'grammar',
    questionNumber: 4,
    questionText: 'Many workers have lived in this residential district __________ more than ten years.',
    options: {
      A: 'for',
      B: 'since',
      C: 'during',
      D: 'ago'
    },
    correctAnswer: 'A',
    explanation: 'Đi với khoảng thời gian "more than ten years" dùng giới từ "for".'
  },
  {
    id: 134,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex2',
    sectionTitle: 'Exercise 2: Thì Hiện Tại Hoàn Thành & Sự Hòa Hợp',
    category: 'grammar',
    questionNumber: 5,
    questionText: '__________ the city built a new subway line, traffic in the centre has improved.',
    options: {
      A: 'Although',
      B: 'Unless',
      C: 'Before',
      D: 'Since'
    },
    correctAnswer: 'D',
    explanation: 'Cấu trúc "Since + S + V(quá khứ đơn), S + has/have V(P2)". Kể từ khi thành phố xây tuyến tàu điện ngầm mới, giao thông đã cải thiện.'
  },
  {
    id: 135,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex2',
    sectionTitle: 'Exercise 2: Thì Hiện Tại Hoàn Thành & Sự Hòa Hợp',
    category: 'grammar',
    questionNumber: 6,
    questionText: 'The government __________ the main road last year to reduce traffic jams.',
    options: {
      A: 'has widened',
      B: 'widened',
      C: 'has been widened',
      D: 'was widening'
    },
    correctAnswer: 'B',
    explanation: 'Có trạng từ thời gian xác định trong quá khứ "last year" -> dùng thì Quá khứ đơn chủ động: "widened".'
  },
  {
    id: 136,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex2',
    sectionTitle: 'Exercise 2: Thì Hiện Tại Hoàn Thành & Sự Hòa Hợp',
    category: 'grammar',
    questionNumber: 7,
    questionText: 'Many new residents __________ such an overcrowded bus station before in their lives.',
    options: {
      A: 'have never seen',
      B: 'never have seen',
      C: 'had seen never',
      D: 'have seen never'
    },
    correctAnswer: 'A',
    explanation: 'Trạng từ "never" đứng giữa trợ động từ "have" và phân từ "seen": "have never seen".'
  },
  {
    id: 137,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex2',
    sectionTitle: 'Exercise 2: Thì Hiện Tại Hoàn Thành & Sự Hòa Hợp',
    category: 'grammar',
    questionNumber: 8,
    questionText: 'The city authority has __________ finished the bridge, but commuters are already using it.',
    options: {
      A: 'just',
      B: 'yet',
      C: 'ever',
      D: 'never'
    },
    correctAnswer: 'A',
    explanation: '"has just finished" = vừa mới hoàn thành.'
  },
  {
    id: 138,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex2',
    sectionTitle: 'Exercise 2: Thì Hiện Tại Hoàn Thành & Sự Hòa Hợp',
    category: 'grammar',
    questionNumber: 9,
    questionText: 'The new bus route has __________ reduced travel time for suburban residents this week.',
    options: {
      A: 'yet',
      B: 'never',
      C: 'already',
      D: 'ago'
    },
    correctAnswer: 'C',
    explanation: 'Trong câu khẳng định mang nghĩa "đã ... rồi", trạng từ "already" đứng giữa has và reduced: "has already reduced".'
  },
  {
    id: 139,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex2',
    sectionTitle: 'Exercise 2: Thì Hiện Tại Hoàn Thành & Sự Hòa Hợp',
    category: 'grammar',
    questionNumber: 10,
    questionText: 'The new resident and his neighbour __________ about overcrowded buses several times.',
    options: {
      A: 'has complained',
      B: 'have complained',
      C: 'complained',
      D: 'had complained'
    },
    correctAnswer: 'B',
    explanation: 'Chủ ngữ nối bằng "and" gồm 2 người ("The new resident and his neighbour") là số nhiều -> dùng "have complained". Có "several times" diễn tả số lần.'
  },
  {
    id: 140,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex2',
    sectionTitle: 'Exercise 2: Thì Hiện Tại Hoàn Thành & Sự Hòa Hợp',
    category: 'grammar',
    questionNumber: 11,
    questionText: 'The city planner with several assistants __________ the infrastructure report already.',
    options: {
      A: 'have finished',
      B: 'finished',
      C: 'has finished',
      D: 'had finished'
    },
    correctAnswer: 'C',
    explanation: 'Chủ ngữ nối bằng cụm "with..." thì động từ chia theo chủ ngữ đầu tiên ("The city planner" - số ít) -> "has finished".'
  },
  {
    id: 141,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex2',
    sectionTitle: 'Exercise 2: Thì Hiện Tại Hoàn Thành & Sự Hòa Hợp',
    category: 'grammar',
    questionNumber: 12,
    questionText: 'This is the first time many rural workers __________ in such an overcrowded city.',
    options: {
      A: 'live',
      B: 'lived',
      C: 'have lived',
      D: 'had lived'
    },
    correctAnswer: 'C',
    explanation: 'Cấu trúc "This is the first time + S + have/has V(P2)": "This is the first time... have lived...".'
  },
  {
    id: 142,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex2',
    sectionTitle: 'Exercise 2: Thì Hiện Tại Hoàn Thành & Sự Hòa Hợp',
    category: 'grammar',
    questionNumber: 13,
    questionText: 'Residents __________ the road plan online; the council __________ clear answers yet.',
    options: {
      A: 'discussed / gave',
      B: 'have discussed / did not give',
      C: 'discuss / had not given',
      D: 'are discussing / has not given'
    },
    correctAnswer: 'B',
    explanation: 'Vế đầu diễn tả hành động thảo luận đã xảy ra: "have discussed", vế sau có "yet" ở câu trần thuật: "did not give" (đáp án in đậm trong đề thi).'
  },
  {
    id: 143,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex2',
    sectionTitle: 'Exercise 2: Thì Hiện Tại Hoàn Thành & Sự Hòa Hợp',
    category: 'grammar',
    questionNumber: 14,
    questionText: 'The mayor, as well as many residents, __________ the traffic problem yet.',
    options: {
      A: 'have not solved',
      B: 'has not solved',
      C: 'did not solve',
      D: 'had not solved'
    },
    correctAnswer: 'B',
    explanation: 'Khi chủ ngữ nối bằng "as well as", động từ chia theo chủ ngữ trước ("The mayor" - danh từ số ít) -> "has not solved".'
  },
  {
    id: 144,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex2',
    sectionTitle: 'Exercise 2: Thì Hiện Tại Hoàn Thành & Sự Hòa Hợp',
    category: 'grammar',
    questionNumber: 15,
    questionText: 'Some young workers have lived in rural areas before, but they have __________ worked in a big city.',
    options: {
      A: 'yet',
      B: 'never',
      C: 'since',
      D: 'already'
    },
    correctAnswer: 'B',
    explanation: '"have never worked" = chưa bao giờ làm việc ở thành phố lớn.'
  },
  {
    id: 145,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex2',
    sectionTitle: 'Exercise 2: Thì Hiện Tại Hoàn Thành & Sự Hòa Hợp',
    category: 'grammar',
    questionNumber: 16,
    questionText: 'The number of rural migrants __________ sharply since the factory opened.',
    options: {
      A: 'have increased',
      B: 'increased',
      C: 'has increased',
      D: 'had increased'
    },
    correctAnswer: 'C',
    explanation: 'Cấu trúc "The number of + N(số nhiều)" luôn đi với động từ số ít -> "has increased". Có "since the factory opened" báo hiệu hiện tại hoàn thành.'
  },
  {
    id: 146,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex2',
    sectionTitle: 'Exercise 2: Thì Hiện Tại Hoàn Thành & Sự Hòa Hợp',
    category: 'grammar',
    questionNumber: 17,
    questionText: 'Every residential district __________ new public facilities this year.',
    options: {
      A: 'have received',
      B: 'received',
      C: 'had received',
      D: 'has received'
    },
    correctAnswer: 'D',
    explanation: '"Every + danh từ số ít" đi với động từ số ít -> "has received".'
  },
  {
    id: 147,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex2',
    sectionTitle: 'Exercise 2: Thì Hiện Tại Hoàn Thành & Sự Hòa Hợp',
    category: 'grammar',
    questionNumber: 18,
    questionText: 'Huy: Has the local council done anything to reduce overcrowding in the suburbs? Win: Yes. It __________ affordable housing projects several times.',
    options: {
      A: 'has been launching',
      B: 'launched',
      C: 'has launched',
      D: 'was launching'
    },
    correctAnswer: 'C',
    explanation: 'Có "several times" (nhiều lần) và câu hỏi thì Hiện tại hoàn thành -> trả lời "has launched".'
  },
  {
    id: 148,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex2',
    sectionTitle: 'Exercise 2: Thì Hiện Tại Hoàn Thành & Sự Hòa Hợp',
    category: 'grammar',
    questionNumber: 19,
    questionText: '__________, the government has built three new public facilities in the suburbs.',
    options: {
      A: 'For 1999',
      B: 'Last year',
      C: 'So far',
      D: 'Since 1999s'
    },
    correctAnswer: 'C',
    explanation: '"So far" = cho đến nay (dấu hiệu nhận biết đặc trưng của thì Hiện tại hoàn thành).'
  },
  {
    id: 149,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex2',
    sectionTitle: 'Exercise 2: Thì Hiện Tại Hoàn Thành & Sự Hòa Hợp',
    category: 'grammar',
    questionNumber: 20,
    questionText: 'Up to now, urbanisation __________ many changes to the local countryside.',
    options: {
      A: 'brought',
      B: 'brings',
      C: 'had brought',
      D: 'has brought'
    },
    correctAnswer: 'D',
    explanation: '"Up to now" = cho tới tận bây giờ -> dùng thì Hiện tại hoàn thành "has brought".'
  },

  // ==================== EXERCISE 3 (Questions 1 - 20) ====================
  {
    id: 150,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex3',
    sectionTitle: 'Exercise 3: So Sánh Kép & Càng Ngày Càng',
    category: 'grammar',
    questionNumber: 1,
    questionText: 'As more rural migrants arrive, the city is becoming __________.',
    options: {
      A: 'more bigger and bigger',
      B: 'more and more big',
      C: 'bigger and bigger',
      D: 'the biggest and biggest'
    },
    correctAnswer: 'C',
    explanation: 'So sánh lũy tiến (càng ngày càng) với tính từ ngắn "big": "bigger and bigger".'
  },
  {
    id: 151,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex3',
    sectionTitle: 'Exercise 3: So Sánh Kép & Càng Ngày Càng',
    category: 'grammar',
    questionNumber: 2,
    questionText: 'Urban areas are becoming __________ during rush hour because of population growth.',
    options: {
      A: 'crowdeder and crowdeder',
      B: 'more and more crowded',
      C: 'crowded and crowded',
      D: 'the most and most crowded'
    },
    correctAnswer: 'B',
    explanation: 'So sánh lũy tiến với tính từ dài "crowded": "more and more crowded".'
  },
  {
    id: 152,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex3',
    sectionTitle: 'Exercise 3: So Sánh Kép & Càng Ngày Càng',
    category: 'grammar',
    questionNumber: 3,
    questionText: '__________ green space is available as high-rise buildings replace parks and gardens.',
    options: {
      A: 'Fewer and fewer',
      B: 'The least and least',
      C: 'Less and less',
      D: 'Smaller and smaller'
    },
    correctAnswer: 'C',
    explanation: '"green space" là danh từ không đếm được -> dùng "Less and less" (càng ngày càng ít).'
  },
  {
    id: 153,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex3',
    sectionTitle: 'Exercise 3: So Sánh Kép & Càng Ngày Càng',
    category: 'grammar',
    questionNumber: 4,
    questionText: 'There are __________ green spaces in the city centre as urbanisation continues.',
    options: {
      A: 'less and less',
      B: 'fewer and fewer',
      C: 'little and little',
      D: 'the fewest and fewest'
    },
    correctAnswer: 'B',
    explanation: '"green spaces" là danh từ đếm được số nhiều -> dùng "fewer and fewer".'
  },
  {
    id: 154,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex3',
    sectionTitle: 'Exercise 3: So Sánh Kép & Càng Ngày Càng',
    category: 'grammar',
    questionNumber: 5,
    questionText: 'The more high-rise buildings appear, __________ green space residents have.',
    options: {
      A: 'the fewer',
      B: 'the less',
      C: 'less and less',
      D: 'the least'
    },
    correctAnswer: 'B',
    explanation: 'Cấu trúc so sánh kép: The more + S + V, the less + danh từ không đếm được ("green space") + S + V.'
  },
  {
    id: 155,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex3',
    sectionTitle: 'Exercise 3: So Sánh Kép & Càng Ngày Càng',
    category: 'grammar',
    questionNumber: 6,
    questionText: 'The bigger the city is, __________ the cost of living becomes.',
    options: {
      A: 'higher',
      B: 'more high',
      C: 'the higher',
      D: 'the highest'
    },
    correctAnswer: 'C',
    explanation: 'Cấu trúc so sánh kép: "The bigger..., the higher..." (Thành phố càng lớn thì chi phí sinh hoạt càng cao).'
  },
  {
    id: 156,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex3',
    sectionTitle: 'Exercise 3: So Sánh Kép & Càng Ngày Càng',
    category: 'grammar',
    questionNumber: 7,
    questionText: 'The less planning is done, __________ problems urban areas face.',
    options: {
      A: 'more and more',
      B: 'the more',
      C: 'the most',
      D: 'the worse'
    },
    correctAnswer: 'B',
    explanation: 'Cấu trúc so sánh kép: "The less planning..., the more problems...".'
  },
  {
    id: 157,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex3',
    sectionTitle: 'Exercise 3: So Sánh Kép & Càng Ngày Càng',
    category: 'grammar',
    questionNumber: 8,
    questionText: 'Public transport is working __________ as the metro network expands.',
    options: {
      A: 'more and more well',
      B: 'good and good',
      C: 'the best and best',
      D: 'better and better'
    },
    correctAnswer: 'D',
    explanation: 'So sánh lũy tiến của trạng từ "well": "better and better" (ngày càng tốt hơn).'
  },
  {
    id: 158,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex3',
    sectionTitle: 'Exercise 3: So Sánh Kép & Càng Ngày Càng',
    category: 'grammar',
    questionNumber: 9,
    questionText: 'Air quality near the industrial zone is getting __________ every year.',
    options: {
      A: 'more and more bad',
      B: 'badder and badder',
      C: 'worse and worse',
      D: 'the worst and worst'
    },
    correctAnswer: 'C',
    explanation: 'So sánh lũy tiến bất quy tắc của "bad": "worse and worse" (ngày càng tồi tệ hơn).'
  },
  {
    id: 159,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex3',
    sectionTitle: 'Exercise 3: So Sánh Kép & Càng Ngày Càng',
    category: 'grammar',
    questionNumber: 10,
    questionText: 'The city spends __________ money on traffic control as congestion increases.',
    options: {
      A: 'much and much',
      B: 'more and more',
      C: 'many and many',
      D: 'most and most'
    },
    correctAnswer: 'B',
    explanation: 'So sánh lũy tiến với lượng từ: "more and more money" (ngày càng nhiều tiền).'
  },
  {
    id: 160,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex3',
    sectionTitle: 'Exercise 3: So Sánh Kép & Càng Ngày Càng',
    category: 'grammar',
    questionNumber: 11,
    questionText: 'With rising housing costs, __________ money is left for low-income families.',
    options: {
      A: 'fewer and fewer',
      B: 'smaller and smaller',
      C: 'less and less',
      D: 'the least and least'
    },
    correctAnswer: 'C',
    explanation: '"money" không đếm được -> dùng "less and less money" (càng ngày càng ít tiền).'
  },
  {
    id: 161,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex3',
    sectionTitle: 'Exercise 3: So Sánh Kép & Càng Ngày Càng',
    category: 'grammar',
    questionNumber: 12,
    questionText: 'The farther the suburbs spread from the city centre, __________ commuting becomes.',
    options: {
      A: 'more expensive',
      B: 'the most expensive',
      C: 'the more expensive',
      D: 'more and more expensive'
    },
    correctAnswer: 'C',
    explanation: 'Cấu trúc: The farther... the more expensive commuting becomes.'
  },
  {
    id: 162,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex3',
    sectionTitle: 'Exercise 3: So Sánh Kép & Càng Ngày Càng',
    category: 'grammar',
    questionNumber: 13,
    questionText: 'During heat waves, the city centre is getting __________ because of concrete surfaces.',
    options: {
      A: 'hoter and hoter',
      B: 'more and more hot',
      C: 'the hottest and hottest',
      D: 'hotter and hotter'
    },
    correctAnswer: 'D',
    explanation: 'Tính từ ngắn "hot" gấp đôi phụ âm: "hotter and hotter" (ngày càng nóng hơn).'
  },
  {
    id: 163,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex3',
    sectionTitle: 'Exercise 3: So Sánh Kép & Càng Ngày Càng',
    category: 'grammar',
    questionNumber: 14,
    questionText: 'Metropolitan areas are becoming __________ as nearby villages are absorbed.',
    options: {
      A: 'biger and biger',
      B: 'more and more big',
      C: 'bigger and bigger',
      D: 'the biggest and biggest'
    },
    correctAnswer: 'C',
    explanation: 'Tính từ ngắn "big" gấp đôi phụ âm g: "bigger and bigger".'
  },
  {
    id: 164,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex3',
    sectionTitle: 'Exercise 3: So Sánh Kép & Càng Ngày Càng',
    category: 'grammar',
    questionNumber: 15,
    questionText: 'Commuters are becoming __________ with the new electric bus service.',
    options: {
      A: 'happyer and happier',
      B: 'more happy and more happy',
      C: 'happier and happier',
      D: 'the happiest and happiest'
    },
    correctAnswer: 'C',
    explanation: 'Tính từ 2 âm tiết kết thúc bằng y ("happy") đổi y thành i: "happier and happier".'
  },
  {
    id: 165,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex3',
    sectionTitle: 'Exercise 3: So Sánh Kép & Càng Ngày Càng',
    category: 'grammar',
    questionNumber: 16,
    questionText: 'The road becomes __________ as it enters the old village area.',
    options: {
      A: 'narrow and narrow',
      B: 'more narrow and more narrow',
      C: 'narrower and narrower',
      D: 'the narrowest and narrowest'
    },
    correctAnswer: 'C',
    explanation: '"narrow" thêm -er: "narrower and narrower" (ngày càng hẹp hơn).'
  },
  {
    id: 166,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex3',
    sectionTitle: 'Exercise 3: So Sánh Kép & Càng Ngày Càng',
    category: 'grammar',
    questionNumber: 17,
    questionText: 'The once busy village is becoming __________ after many young people move away.',
    options: {
      A: 'quietter and quietter',
      B: 'quiet and quiet',
      C: 'the quietest and quietest',
      D: 'quieter and quieter'
    },
    correctAnswer: 'D',
    explanation: '"quiet" thêm đuôi -er thành "quieter and quieter" (ngày càng yên ắng, vắng vẻ).'
  },
  {
    id: 167,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex3',
    sectionTitle: 'Exercise 3: So Sánh Kép & Càng Ngày Càng',
    category: 'grammar',
    questionNumber: 18,
    questionText: 'Urban expansion is happening __________, so small farms are disappearing quickly.',
    options: {
      A: 'more and more rapid',
      B: 'more and more rapidly',
      C: 'rapidlier and rapidlier',
      D: 'the most and most rapidly'
    },
    correctAnswer: 'B',
    explanation: 'Bổ nghĩa cho động từ "is happening" cần trạng từ: "more and more rapidly" (ngày càng nhanh chóng).'
  },
  {
    id: 168,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex3',
    sectionTitle: 'Exercise 3: So Sánh Kép & Càng Ngày Càng',
    category: 'grammar',
    questionNumber: 19,
    questionText: '__________ residents can afford homes in the city centre as prices rise.',
    options: {
      A: 'Less and less',
      B: 'Little and little',
      C: 'Fewer and fewer',
      D: 'The fewest and fewest'
    },
    correctAnswer: 'C',
    explanation: '"residents" là danh từ đếm được số nhiều -> dùng "Fewer and fewer" (ngày càng ít cư dân có đủ khả năng chi trả).'
  },
  {
    id: 169,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-ex3',
    sectionTitle: 'Exercise 3: So Sánh Kép & Càng Ngày Càng',
    category: 'grammar',
    questionNumber: 20,
    questionText: 'Public transport systems are performing __________ during peak hours, frustrating commuters.',
    options: {
      A: 'less and less effective',
      B: 'the least and least effectively',
      C: 'fewer and fewer effectively',
      D: 'less and less effectively'
    },
    correctAnswer: 'D',
    explanation: 'Bổ nghĩa cho động từ "are performing" cần trạng từ "effectively" kết hợp cấu trúc "less and less effectively" (ngày càng kém hiệu quả).'
  },

  // ==================== READING 1: FLOW & FIELD CITY WEEKEND (Q1 - Q6) ====================
  {
    id: 170,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-read-1',
    sectionTitle: 'Reading 1: Flow & Field City Weekend',
    category: 'cloze',
    questionNumber: 1,
    questionText: 'Flow & Field City Weekend welcomes residents (1) __________ by rising rents and overcrowded roads to explore a cleaner way through the city.',
    options: {
      A: 'affected',
      B: 'affecting',
      C: 'who affect',
      D: 'which affected'
    },
    correctAnswer: 'A',
    passageTitle: 'FLOW & FIELD CITY WEEKEND',
    excerpt: 'Dữ kiện đoạn 1: "...Flow & Field City Weekend welcomes residents (1) [affected] by rising rents and overcrowded roads to explore a cleaner way through the city."',
    fullPassage: PASSAGE_FLOW_AND_FIELD,
    explanation: 'Rút gọn mệnh đề quan hệ ở thể bị động: "residents affected by..." (= residents who are affected by...).'
  },
  {
    id: 171,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-read-1',
    sectionTitle: 'Reading 1: Flow & Field City Weekend',
    category: 'cloze',
    questionNumber: 2,
    questionText: 'At the main gate, try our (2) __________, where tram displays, shaded footpaths, bike lockers, and reliable shuttle updates come together.',
    options: {
      A: 'transit multimodal hub',
      B: 'multimodal transit hub',
      C: 'multimodal hub transit',
      D: 'transit hub multimodal'
    },
    correctAnswer: 'B',
    passageTitle: 'FLOW & FIELD CITY WEEKEND',
    excerpt: 'Dữ kiện đoạn 1: "...At the main gate, try our (2) [multimodal transit hub], where tram displays, shaded footpaths, bike lockers, and reliable shuttle updates come together."',
    fullPassage: PASSAGE_FLOW_AND_FIELD,
    explanation: 'Trật tự cụm danh từ chuẩn: "multimodal" (đa phương thức) + "transit" (trung chuyển) + "hub" (đầu mối) -> "multimodal transit hub" (đầu mối trung chuyển đa phương thức).'
  },
  {
    id: 172,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-read-1',
    sectionTitle: 'Reading 1: Flow & Field City Weekend',
    category: 'cloze',
    questionNumber: 3,
    questionText: 'Each display is designed to (3) __________ a balance between modern infrastructure and rural identity, so visitors can enjoy progress without losing memory.',
    options: {
      A: 'strike',
      B: 'draw',
      C: 'put',
      D: 'set'
    },
    correctAnswer: 'A',
    passageTitle: 'FLOW & FIELD CITY WEEKEND',
    excerpt: 'Dữ kiện đoạn 2: "...Each display is designed to (3) [strike] a balance between modern infrastructure and rural identity, so visitors can enjoy progress without losing memory."',
    fullPassage: PASSAGE_FLOW_AND_FIELD,
    explanation: 'Thành ngữ cố định: "strike a balance (between A and B)" = tạo lập/đạt được sự cân bằng giữa hai yếu tố.'
  },
  {
    id: 173,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-read-1',
    sectionTitle: 'Reading 1: Flow & Field City Weekend',
    category: 'cloze',
    questionNumber: 4,
    questionText: 'Before heading home, consider (4) __________ your usual motorbike trip with a low-emission route suggested by the GreenLink app.',
    options: {
      A: 'to replace',
      B: 'replacing',
      C: 'replace',
      D: 'to replacing'
    },
    correctAnswer: 'B',
    passageTitle: 'FLOW & FIELD CITY WEEKEND',
    excerpt: 'Dữ kiện đoạn 3: "...Before heading home, consider (4) [replacing] your usual motorbike trip with a low-emission route suggested by the GreenLink app."',
    fullPassage: PASSAGE_FLOW_AND_FIELD,
    explanation: 'Cấu trúc: "consider + V-ing" (cân nhắc việc làm gì đó).'
  },
  {
    id: 174,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-read-1',
    sectionTitle: 'Reading 1: Flow & Field City Weekend',
    category: 'cloze',
    questionNumber: 5,
    questionText: 'It offers a practical response (5) __________ crowding, pollution, and the shortage of safe public spaces.',
    options: {
      A: 'to',
      B: 'for',
      C: 'with',
      D: 'against'
    },
    correctAnswer: 'A',
    passageTitle: 'FLOW & FIELD CITY WEEKEND',
    excerpt: 'Dữ kiện đoạn 3: "...It offers a practical response (5) [to] crowding, pollution, and the shortage of safe public spaces."',
    fullPassage: PASSAGE_FLOW_AND_FIELD,
    explanation: 'Giới từ đi với response: "a response to something" = lời giải đáp/phản hồi đối với vấn đề gì.'
  },
  {
    id: 175,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-read-1',
    sectionTitle: 'Reading 1: Flow & Field City Weekend',
    category: 'cloze',
    questionNumber: 6,
    questionText: 'Come before sunset and discover how a rapidly urbanised neighbourhood can become genuinely (6) __________.',
    options: {
      A: 'live',
      B: 'living',
      C: 'liveliness',
      D: 'liveable'
    },
    correctAnswer: 'D',
    passageTitle: 'FLOW & FIELD CITY WEEKEND',
    excerpt: 'Dữ kiện đoạn 3: "...discover how a rapidly urbanised neighbourhood can become genuinely (6) [liveable]."',
    fullPassage: PASSAGE_FLOW_AND_FIELD,
    explanation: 'Sau trạng từ "genuinely" và động từ nối "become" cần tính từ: "liveable" (đáng sống).'
  },

  // ==================== READING 2: RIDE & REPAIR MORNING (Q7 - Q12) ====================
  {
    id: 176,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-read-2',
    sectionTitle: 'Reading 2: Ride & Repair Morning Leaflet',
    category: 'cloze',
    questionNumber: 7,
    questionText: '(7) __________ recent investment in a small tram stop, our ward is testing a car-light morning this Friday.',
    options: {
      A: 'Apart from',
      B: 'Instead of',
      C: 'Thanks to',
      D: 'Unlike'
    },
    correctAnswer: 'C',
    passageTitle: 'Ride & Repair Morning',
    excerpt: 'Dữ kiện gạch đầu dòng 1: "(7) [Thanks to] recent investment in a small tram stop, our ward is testing a car-light morning this Friday."',
    fullPassage: PASSAGE_RIDE_AND_REPAIR,
    explanation: '"Thanks to + N" = Nhờ có khoản đầu tư gần đây vào trạm xe điện.'
  },
  {
    id: 177,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-read-2',
    sectionTitle: 'Reading 2: Ride & Repair Morning Leaflet',
    category: 'cloze',
    questionNumber: 8,
    questionText: 'At the gate, you will receive two route cards. One shows the tram line; (8) __________ marks safe walking lanes past the old colonial building.',
    options: {
      A: 'another',
      B: 'other',
      C: 'the other',
      D: 'others'
    },
    correctAnswer: 'C',
    passageTitle: 'Ride & Repair Morning',
    excerpt: 'Dữ kiện gạch đầu dòng 2: "One shows the tram line; (8) [the other] marks safe walking lanes past the old colonial building."',
    fullPassage: PASSAGE_RIDE_AND_REPAIR,
    explanation: 'Đối chiếu giữa 2 thẻ lộ trình ("two route cards"): Một cái là "One...", cái còn lại là "the other".'
  },
  {
    id: 178,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-read-2',
    sectionTitle: 'Reading 2: Ride & Repair Morning Leaflet',
    category: 'cloze',
    questionNumber: 9,
    questionText: 'Your guides will help residents (9) __________ without using a motorbike.',
    options: {
      A: 'get around',
      B: 'go up',
      C: 'bring back',
      D: 'settle in'
    },
    correctAnswer: 'A',
    passageTitle: 'Ride & Repair Morning',
    excerpt: 'Dữ kiện gạch đầu dòng 3: "Your guides will help residents (9) [get around] without using a motorbike."',
    fullPassage: PASSAGE_RIDE_AND_REPAIR,
    explanation: '"get around" = đi lại, di chuyển quanh khu phố.'
  },
  {
    id: 179,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-read-2',
    sectionTitle: 'Reading 2: Ride & Repair Morning Leaflet',
    category: 'cloze',
    questionNumber: 10,
    questionText: 'A (10) __________ of simple checks—brakes, lights and tyres—can make short trips safer.',
    options: {
      A: 'number',
      B: 'amount',
      C: 'level',
      D: 'deal'
    },
    correctAnswer: 'A',
    passageTitle: 'Ride & Repair Morning',
    excerpt: 'Dữ kiện gạch đầu dòng 3: "A (10) [number] of simple checks—brakes, lights and tyres—can make short trips safer."',
    fullPassage: PASSAGE_RIDE_AND_REPAIR,
    explanation: 'Cụm từ "A number of + danh từ đếm được số nhiều" (A number of simple checks = Một vài bước kiểm tra đơn giản).'
  },
  {
    id: 180,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-read-2',
    sectionTitle: 'Reading 2: Ride & Repair Morning Leaflet',
    category: 'cloze',
    questionNumber: 11,
    questionText: 'The market gate is now a small community (11) __________ with seats, shade and refill bottles.',
    options: {
      A: 'complaint',
      B: 'facility',
      C: 'expense',
      D: 'shortage'
    },
    correctAnswer: 'B',
    passageTitle: 'Ride & Repair Morning',
    excerpt: 'Dữ kiện gạch đầu dòng 4: "The market gate is now a small community (11) [facility] with seats, shade and refill bottles."',
    fullPassage: PASSAGE_RIDE_AND_REPAIR,
    explanation: '"community facility" = cơ sở / tiện ích cộng đồng phục vụ người dân.'
  },
  {
    id: 181,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-read-2',
    sectionTitle: 'Reading 2: Ride & Repair Morning Leaflet',
    category: 'cloze',
    questionNumber: 12,
    questionText: 'Try one low-emission trip, talk to neighbours and help create a calmer (12) __________ street.',
    options: {
      A: 'agricultural',
      B: 'coastal',
      C: 'colonial',
      D: 'urban'
    },
    correctAnswer: 'D',
    passageTitle: 'Ride & Repair Morning',
    excerpt: 'Dữ kiện gạch đầu dòng 4: "...talk to neighbours and help create a calmer (12) [urban] street."',
    fullPassage: PASSAGE_RIDE_AND_REPAIR,
    explanation: '"urban street" = con phố đô thị êm ả và thanh bình hơn.'
  },

  // ==================== READING 3: URBAN HEALTHCARE (Q18 - Q22) ====================
  {
    id: 182,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-read-3',
    sectionTitle: 'Reading 3: Y Tế Đô Thị',
    category: 'reading',
    questionNumber: 18,
    questionText: 'When thousands of new residents rely on a few existing public clinics, routine illnesses become harder to treat early, and hospital waiting rooms (18) __________.',
    options: {
      A: 'which, as overcrowded waiting areas for delayed cases, encourage officials to blame migration',
      B: 'have become overflow points for conditions that should have been treated earlier',
      C: 'and local clinics have handled cases already requiring hospital-level care',
      D: 'that routine care can be delayed until hospital treatment becomes urgently necessary'
    },
    correctAnswer: 'B',
    passageTitle: 'The city’s health problem',
    excerpt: 'Dữ kiện đoạn 1: "...routine illnesses become harder to treat early, and hospital waiting rooms (18) [have become overflow points for conditions that should have been treated earlier]."',
    fullPassage: PASSAGE_URBAN_HEALTH,
    explanation: 'Ý nghĩa mạch lạc: các phòng chờ bệnh viện trở thành nơi quá tải chứa các tình trạng bệnh đáng lẽ phải được điều trị sớm hơn ở tuyến cơ sở.'
  },
  {
    id: 183,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-read-3',
    sectionTitle: 'Reading 3: Y Tế Đô Thị',
    category: 'reading',
    questionNumber: 19,
    questionText: 'Newcomers may live far from registered providers, work irregular hours, or lack documents needed for subsidised care, a situation (19) __________.',
    options: {
      A: 'in which healthcare access is shaped by location, paperwork and working hours',
      B: 'turning subsidised care into a reward for residents with better health habits',
      C: 'that proves medical inequality is caused mainly by patients’ poor planning',
      D: 'under a system of registration, distance and clinic schedules that appears neutral'
    },
    correctAnswer: 'A',
    passageTitle: 'The city’s health problem',
    excerpt: 'Dữ kiện đoạn 1: "...a situation (19) [in which healthcare access is shaped by location, paperwork and working hours]."',
    fullPassage: PASSAGE_URBAN_HEALTH,
    explanation: 'Mệnh đề quan hệ bổ nghĩa cho "a situation": một tình cảnh mà trong đó việc tiếp cận y tế bị chi phối bởi vị trí địa lý, thủ tục giấy tờ và giờ giấc làm việc.'
  },
  {
    id: 184,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-read-3',
    sectionTitle: 'Reading 3: Y Tế Đô Thị',
    category: 'reading',
    questionNumber: 20,
    questionText: 'City leaders sometimes respond by building bigger hospitals, and such investment can save lives in emergencies. (20) __________.',
    options: {
      A: 'As a result, emergency investment proves that neighbourhood clinics no longer deserve public funding',
      B: 'Even so, larger hospitals do not automatically make everyday healthcare easier to reach',
      C: 'For this reason, city growth can be managed mainly through specialised hospital departments',
      D: 'In practice, emergency care should replace prevention once urban migration accelerates each year'
    },
    correctAnswer: 'B',
    passageTitle: 'The city’s health problem',
    excerpt: 'Dữ kiện đoạn 2: "...and such investment can save lives in emergencies. (20) [Even so, larger hospitals do not automatically make everyday healthcare easier to reach]. If basic care, vaccination... remain distant, minor problems are more likely to become serious..."',
    fullPassage: PASSAGE_URBAN_HEALTH,
    explanation: 'Liên kết tương phản: Dù bệnh viện lớn cứu người lúc cấp cứu, nhưng ngay cả vậy thì bệnh viện to không tự động làm cho việc chăm sóc y tế thường ngày dễ tiếp cận hơn.'
  },
  {
    id: 185,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-read-3',
    sectionTitle: 'Reading 3: Y Tế Đô Thị',
    category: 'reading',
    questionNumber: 21,
    questionText: 'Digital booking systems and mobile clinics can reduce some delays, but they work only when residents trust them and can use them. (21) __________, especially in informal districts where stable addresses, internet access, and paid time off are unevenly available.',
    options: {
      A: 'Technology therefore improves access unevenly unless matched with practical community support',
      B: 'Mobile services therefore matter less than hospital image when neighbourhoods lack stable addresses',
      C: 'Technology therefore removes access barriers once clinics provide a few online appointment slots',
      D: 'Trust becomes unnecessary whenever residents receive enough information about clinics online'
    },
    correctAnswer: 'A',
    passageTitle: 'The city’s health problem',
    excerpt: 'Dữ kiện đoạn 2: "(21) [Technology therefore improves access unevenly unless matched with practical community support], especially in informal districts where stable addresses, internet access, and paid time off are unevenly available."',
    fullPassage: PASSAGE_URBAN_HEALTH,
    explanation: 'Công nghệ do đó cải thiện khả năng tiếp cận một cách không đồng đều trừ phi đi đôi với sự hỗ trợ cộng đồng thực tế.'
  },
  {
    id: 186,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-read-3',
    sectionTitle: 'Reading 3: Y Tế Đô Thị',
    category: 'reading',
    questionNumber: 22,
    questionText: 'The challenge, therefore, is not simply to add beds after a crisis, (22) __________.',
    options: {
      A: 'but building daily services around each new residential area',
      B: 'but to build everyday care into the city’s growth itself',
      C: 'while everyday care is built after residential growth slows',
      D: 'and the city’s growth itself can build everyday care'
    },
    correctAnswer: 'B',
    passageTitle: 'The city’s health problem',
    excerpt: 'Dữ kiện câu kết: "The challenge, therefore, is not simply to add beds after a crisis, (22) [but to build everyday care into the city’s growth itself]."',
    fullPassage: PASSAGE_URBAN_HEALTH,
    explanation: 'Cấu trúc song song: "not simply to add beds..., but to build everyday care into the city’s growth itself".'
  },

  // ==================== READING 4: SMART CITIES AND THE PRICE OF BEING SEEN (Q23 - Q30) ====================
  {
    id: 187,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-read-4',
    sectionTitle: 'Reading 4: Smart Cities & Privacy (OECD)',
    category: 'reading',
    questionNumber: 23,
    questionText: 'What can be inferred about real-time data in paragraph 2?',
    options: {
      A: 'It can help officials notice and respond to urban problems in areas that might otherwise be underserved.',
      B: 'It makes public services equal as soon as buildings, buses and phones exchange information.',
      C: 'It is useful mainly when richer districts receive faster updates about transport and safety.',
      D: 'It prevents urban problems by removing the need for repairs, planning or local decisions.'
    },
    correctAnswer: 'A',
    passageTitle: 'Smart Cities and the Price of Being Seen',
    excerpt: 'Dữ kiện Đoạn 2: "...Not only can such tools improve infrastructure, but they can also make public services more equal when poorer districts are no longer invisible."',
    fullPassage: PASSAGE_SMART_CITIES_OECD,
    explanation: 'Dữ liệu thời gian thực giúp chính quyền nhận biết và giải quyết vấn đề tại các khu vực nghèo vốn trước đây hay bị bỏ qua/vô hình (underserved areas).'
  },
  {
    id: 188,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-read-4',
    sectionTitle: 'Reading 4: Smart Cities & Privacy (OECD)',
    category: 'reading',
    questionNumber: 24,
    questionText: 'The word “bargain” in paragraph 2 is closest in meaning to __________.',
    options: {
      A: 'trade-off',
      B: 'routine',
      C: 'discount',
      D: 'warning'
    },
    correctAnswer: 'A',
    passageTitle: 'Smart Cities and the Price of Being Seen',
    excerpt: 'Dữ kiện Đoạn 2: "Yet the same system that improves comfort also asks the public to accept a bargain."',
    fullPassage: PASSAGE_SMART_CITIES_OECD,
    explanation: '"bargain" trong ngữ cảnh này mang nghĩa sự đánh đổi (trade-off) giữa tiện ích công nghệ và quyền riêng tư.'
  },
  {
    id: 189,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-read-4',
    sectionTitle: 'Reading 4: Smart Cities & Privacy (OECD)',
    category: 'reading',
    questionNumber: 25,
    questionText: 'The word “They” in paragraph 3 refers to __________.',
    options: {
      A: 'concerns about how personal data may be used',
      B: 'doubts about whether traffic systems reduce jams',
      C: 'worries about whether officials can repair roads quickly',
      D: 'questions about whether apps make commuting convenient'
    },
    correctAnswer: 'A',
    passageTitle: 'Smart Cities and the Price of Being Seen',
    excerpt: 'Dữ kiện Đoạn 3: "Data privacy concerns are therefore not a luxury for people who dislike technology. They are a basic question about who may turn ordinary movement into permanent memory."',
    fullPassage: PASSAGE_SMART_CITIES_OECD,
    explanation: '"They" quy chiếu trực tiếp về "Data privacy concerns" (những lo ngại về quyền riêng tư dữ liệu).'
  },
  {
    id: 190,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-read-4',
    sectionTitle: 'Reading 4: Smart Cities & Privacy (OECD)',
    category: 'reading',
    questionNumber: 26,
    questionText: 'According to paragraph 3, all of the following are raised as privacy-related risks EXCEPT __________.',
    options: {
      A: 'traffic cameras may record people’s movements beyond traffic control',
      B: 'automated transport may leave records of repeated daily routines',
      C: 'ordinary movement may become information kept for a long time',
      D: 'transport data may be sold to advertisers to target residents personally'
    },
    correctAnswer: 'D',
    passageTitle: 'Smart Cities and the Price of Being Seen',
    excerpt: 'Dữ kiện Đoạn 3: Đoạn 3 đề cập camera ghi lại điểm đến sau giờ làm, hệ thống tự động để lại dấu vết thói quen, biến di chuyển thành ký ức vĩnh cửu. KHÔNG hề nhắc tới việc bán dữ liệu cho nhà quảng cáo (sold to advertisers).',
    fullPassage: PASSAGE_SMART_CITIES_OECD,
    explanation: 'Bài viết không đề cập đến việc dữ liệu bị bán cho các công ty quảng cáo.'
  },
  {
    id: 191,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-read-4',
    sectionTitle: 'Reading 4: Smart Cities & Privacy (OECD)',
    category: 'reading',
    questionNumber: 27,
    questionText: 'Which of the following best paraphrases the underlined sentence in paragraph 4: "A modern city should be smart enough to solve problems, and decent enough to know when not to look."?',
    options: {
      A: 'Cities should prioritize solving urban problems through smart technology over focusing on the moral behaviors of their residents.',
      B: 'The primary responsibility of a smart city is to monitor problems constantly so that residents do not have to look out for themselves.',
      C: 'To solve complex urban challenges, modern cities need smart systems that intentionally completely ignore personal data.',
      D: 'An advanced city must balance its technological capacity to resolve issues with an ethical respect for citizens\' privacy.'
    },
    correctAnswer: 'D',
    passageTitle: 'Smart Cities and the Price of Being Seen',
    excerpt: 'Dữ kiện Đoạn 4 câu gạch chân: "A modern city should be smart enough to solve problems, and decent enough to know when not to look."',
    fullPassage: PASSAGE_SMART_CITIES_OECD,
    explanation: 'Thành phố hiện đại phải cân bằng giữa năng lực công nghệ giải quyết vấn đề và chuẩn mực đạo đức tôn trọng quyền riêng tư của người dân.'
  },
  {
    id: 192,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-read-4',
    sectionTitle: 'Reading 4: Smart Cities & Privacy (OECD)',
    category: 'reading',
    questionNumber: 28,
    questionText: 'The word “ubiquitous” in paragraph 4 is OPPOSITE in meaning to __________.',
    options: {
      A: 'rare',
      B: 'legal',
      C: 'useful',
      D: 'hidden'
    },
    correctAnswer: 'A',
    passageTitle: 'Smart Cities and the Price of Being Seen',
    excerpt: 'Dữ kiện Đoạn 4: "...ubiquitous surveillance..." (sự giám sát có mặt khắp mọi nơi).',
    fullPassage: PASSAGE_SMART_CITIES_OECD,
    explanation: '"ubiquitous" = phổ biến ở khắp nơi, trái nghĩa (OPPOSITE) với nó là "rare" (hiếm gặp).'
  },
  {
    id: 193,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-read-4',
    sectionTitle: 'Reading 4: Smart Cities & Privacy (OECD)',
    category: 'reading',
    questionNumber: 29,
    questionText: 'In which paragraph does the author describe how smart-city technology can make daily travel more convenient for residents?',
    options: {
      A: 'Paragraph 1',
      B: 'Paragraph 2',
      C: 'Paragraph 3',
      D: 'Paragraph 4'
    },
    correctAnswer: 'A',
    passageTitle: 'Smart Cities and the Price of Being Seen',
    excerpt: 'Dữ kiện Đoạn 1: "...a resident opens an app and sees which tram is crowded, which road is blocked... help people get around with less wasted time. For commuters... breakfast not missed, a child not left waiting, a job reached reliably."',
    fullPassage: PASSAGE_SMART_CITIES_OECD,
    explanation: 'Đoạn 1 mô tả chi tiết việc công nghệ giúp di chuyển buổi sáng thuận tiện và không bị trễ nải.'
  },
  {
    id: 194,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-read-4',
    sectionTitle: 'Reading 4: Smart Cities & Privacy (OECD)',
    category: 'reading',
    questionNumber: 30,
    questionText: 'In which paragraph does the author discuss the hidden cost of using urban data?',
    options: {
      A: 'Paragraph 1',
      B: 'Paragraph 2',
      C: 'Paragraph 3',
      D: 'Paragraph 4'
    },
    correctAnswer: 'C',
    passageTitle: 'Smart Cities and the Price of Being Seen',
    excerpt: 'Dữ kiện Đoạn 3: "The difficulty begins when useful data becomes personal data. A camera used to manage traffic may also record where a worker goes after work... The more the city learns, the more residents may feel watched."',
    fullPassage: PASSAGE_SMART_CITIES_OECD,
    explanation: 'Đoạn 3 phân tích mặt trái/cái giá tiềm ẩn của dữ liệu khi biến thành sự theo dõi cá nhân.'
  },

  // ==================== READING 5: SINKING OF HO CHI MINH CITY (NASA) (Q31 - Q40) ====================
  {
    id: 195,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-read-5',
    sectionTitle: 'Reading 5: Sụt Lún TP.HCM (NASA)',
    category: 'reading',
    questionNumber: 31,
    questionText: 'Where in the passage does the following sentence best fit: "It poses a fundamental question about equitable urbanisation."?',
    options: {
      A: '[I]',
      B: '[II]',
      C: '[III]',
      D: '[IV]'
    },
    correctAnswer: 'D',
    passageTitle: 'Sinking of Ho Chi Minh City',
    excerpt: 'Dữ kiện Đoạn 4: "...The issue extends far beyond engineering flaws. [IV] [It poses a fundamental question about equitable urbanisation.] The true challenge lies not merely in constructing larger sewers, but in rethinking how a metropolis balances human ambition with ecological limits..."',
    fullPassage: PASSAGE_SINKING_HCMC_NASA,
    explanation: 'Vị trí [IV] đặt ngay trước câu nói về việc đô thị cần cân bằng giữa tham vọng và giới hạn sinh thái để không kéo cả cộng đồng đi xuống (equitable urbanisation = đô thị hóa công bằng).'
  },
  {
    id: 196,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-read-5',
    sectionTitle: 'Reading 5: Sụt Lún TP.HCM (NASA)',
    category: 'reading',
    questionNumber: 32,
    questionText: 'The phrase “grown accustomed to” in paragraph 1 is closest in meaning to __________.',
    options: {
      A: 'become worried about',
      B: 'become used to',
      C: 'become tired of',
      D: 'become responsible for'
    },
    correctAnswer: 'B',
    passageTitle: 'Sinking of Ho Chi Minh City',
    excerpt: 'Dữ kiện Đoạn 1: "Residents of Ho Chi Minh City have long grown accustomed to wading through deep water after a heavy downpour."',
    fullPassage: PASSAGE_SINKING_HCMC_NASA,
    explanation: '"grown accustomed to" = trở nên quen với việc gì (= become used to).'
  },
  {
    id: 197,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-read-5',
    sectionTitle: 'Reading 5: Sụt Lún TP.HCM (NASA)',
    category: 'reading',
    questionNumber: 33,
    questionText: 'The phrase “This influx” in paragraph 2 refers to __________.',
    options: {
      A: 'the spread of modern facilities',
      B: 'the search for rural stability',
      C: 'the arrival of many migrants',
      D: 'the growth of housing demand'
    },
    correctAnswer: 'C',
    passageTitle: 'Sinking of Ho Chi Minh City',
    excerpt: 'Dữ kiện Đoạn 2: "...millions have migrated to the metropolis, seeking better opportunities... This influx brings undeniable economic vitality."',
    fullPassage: PASSAGE_SINKING_HCMC_NASA,
    explanation: '"This influx" (dòng người đổ về) quy chiếu về hàng triệu người di cư đến thành phố lớn (the arrival of many migrants).'
  },
  {
    id: 198,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-read-5',
    sectionTitle: 'Reading 5: Sụt Lún TP.HCM (NASA)',
    category: 'reading',
    questionNumber: 34,
    questionText: 'Which of the following is NOT stated in the first two paragraphs?',
    options: {
      A: 'Many residents tend to connect flooding with bad weather or poor drainage.',
      B: 'Migration has increased pressure on housing, water, and public systems.',
      C: 'Urban expansion has turned some former wetlands into residential areas.',
      D: 'City authorities have slowed new construction to protect natural wetlands.'
    },
    correctAnswer: 'D',
    passageTitle: 'Sinking of Ho Chi Minh City',
    excerpt: 'Dữ kiện Đoạn 1 & 2: Đoạn 2 nói các khu nhà mới thay thế vùng đất ngập nước với tốc độ chóng mặt (breakneck pace), chính quyền không hề làm chậm xây dựng để bảo vệ đất ngập nước.',
    fullPassage: PASSAGE_SINKING_HCMC_NASA,
    explanation: 'Bài viết không hề nêu chính quyền làm chậm việc xây dựng để bảo vệ vùng đất ngập nước tự nhiên.'
  },
  {
    id: 199,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-read-5',
    sectionTitle: 'Reading 5: Sụt Lún TP.HCM (NASA)',
    category: 'reading',
    questionNumber: 35,
    questionText: 'Which of the following best summarises paragraph 2?',
    options: {
      A: 'Migration brings economic energy to the city, but it also increases demand for housing and water, pushing urban expansion into former wetlands.',
      B: 'Migrants mainly leave rural areas because modern facilities have become unavailable outside the city, making urban life their only realistic choice.',
      C: 'Ho Chi Minh City’s expansion is presented as an entirely positive process because it creates prosperity without serious environmental pressure.',
      D: 'New residential blocks are built mostly to reduce rural stagnation, although they have little connection to population growth or water demand.'
    },
    correctAnswer: 'A',
    passageTitle: 'Sinking of Ho Chi Minh City',
    excerpt: 'Dữ kiện Đoạn 2: Dòng di cư đem lại sức sống kinh tế nhưng làm tăng nhu cầu nhà ở và nước sạch, dẫn tới việc mở rộng đô thị san lấp các vùng đất ngập nước.',
    fullPassage: PASSAGE_SINKING_HCMC_NASA,
    explanation: 'Tóm tắt chuẩn đoạn 2: Sự di cư mang lại sức sống kinh tế nhưng cũng gia tăng nhu cầu nhà ở/nước, thúc đẩy mở rộng đô thị lấn vào các vùng đất ngập nước trước đây.'
  },
  {
    id: 200,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-read-5',
    sectionTitle: 'Reading 5: Sụt Lún TP.HCM (NASA)',
    category: 'reading',
    questionNumber: 36,
    questionText: 'The word “accelerate” in paragraph 3 is OPPOSITE in meaning to __________.',
    options: {
      A: 'support',
      B: 'slow down',
      C: 'push forward',
      D: 'add to'
    },
    correctAnswer: 'B',
    passageTitle: 'Sinking of Ho Chi Minh City',
    excerpt: 'Dữ kiện Đoạn 3: "High-rise buildings, pressing down on soft geological layers, accelerate the subsidence."',
    fullPassage: PASSAGE_SINKING_HCMC_NASA,
    explanation: '"accelerate" = làm tăng tốc, đẩy nhanh; trái nghĩa (OPPOSITE) với nó là "slow down" (làm chậm lại).'
  },
  {
    id: 201,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-read-5',
    sectionTitle: 'Reading 5: Sụt Lún TP.HCM (NASA)',
    category: 'reading',
    questionNumber: 37,
    questionText: 'What does paragraph 3 suggest about land subsidence in Ho Chi Minh City?',
    options: {
      A: 'It results mostly from natural geological weakness, while human construction plays a minor role.',
      B: 'It happens because underground aquifers rise too quickly after heavy seasonal rainfall.',
      C: 'It is worsened by both groundwater extraction below and heavy construction above.',
      D: 'It can be controlled once industrial zones stop using surface water supplies.'
    },
    correctAnswer: 'C',
    passageTitle: 'Sinking of Ho Chi Minh City',
    excerpt: 'Dữ kiện Đoạn 3: "...pumped millions of cubic metres from underground aquifers daily... Adding to this structural vulnerability is the immense weight of concrete. High-rise buildings... accelerate the subsidence."',
    fullPassage: PASSAGE_SINKING_HCMC_NASA,
    explanation: 'Hiện tượng sụt lún bị làm trầm trọng hơn bởi cả hai nguyên nhân: khai thác nước ngầm bên dưới và tải trọng nặng của các công trình bê tông bên trên.'
  },
  {
    id: 202,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-read-5',
    sectionTitle: 'Reading 5: Sụt Lún TP.HCM (NASA)',
    category: 'reading',
    questionNumber: 38,
    questionText: 'Which of the following best paraphrases the underlined sentence in paragraph 3: "A city built to elevate human potential is literally crushing its own foundation."?',
    options: {
      A: 'Development meant to improve people’s lives is also causing the physical ground beneath the city to sink.',
      B: 'The city’s social progress depends mainly on replacing weak buildings with taller and stronger concrete structures.',
      C: 'Urban growth has raised living standards so effectively that geological risks have become less important.',
      D: 'Human ambition can succeed only when the city builds upward instead of depending on underground resources.'
    },
    correctAnswer: 'A',
    passageTitle: 'Sinking of Ho Chi Minh City',
    excerpt: 'Dữ kiện Đoạn 3 câu gạch chân: "A city built to elevate human potential is literally crushing its own foundation." (Thành phố được xây dựng để nâng cao tiềm năng con người nhưng theo nghĩa đen lại đang nghiền nát nền móng của chính mình)',
    fullPassage: PASSAGE_SINKING_HCMC_NASA,
    explanation: 'Sự phát triển nhằm cải thiện đời sống con người lại đang khiến cho nền đất vật lý bên dưới thành phố bị sụt lún.'
  },
  {
    id: 203,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-read-5',
    sectionTitle: 'Reading 5: Sụt Lún TP.HCM (NASA)',
    category: 'reading',
    questionNumber: 39,
    questionText: 'Which of the following can be inferred from the passage?',
    options: {
      A: 'Flooding in Ho Chi Minh City would disappear if the city invested more heavily in larger drainage systems.',
      B: 'Migration is described mainly as a harmful force that should be prevented to protect urban infrastructure.',
      C: 'The poorest residents are affected because they choose to live in risky areas despite better housing options.',
      D: 'Urban progress can create hidden environmental costs that fall most severely on vulnerable communities.'
    },
    correctAnswer: 'D',
    passageTitle: 'Sinking of Ho Chi Minh City',
    excerpt: 'Dữ kiện Đoạn 4: "...placing the poorest citizens at severe risk. Those residing in lowrise areas bear the brunt of this subtle collapse... ensuring that the pursuit of upward mobility does not inadvertently drag an entire community downward."',
    fullPassage: PASSAGE_SINKING_HCMC_NASA,
    explanation: 'Tiến trình đô thị hóa có thể tạo ra những cái giá môi trường tiềm ẩn đè nặng nhất lên những cộng đồng dân cư dễ bị tổn thương.'
  },
  {
    id: 204,
    unit: 'urbanisation',
    unitTitle: 'Đô Thị Hóa (Urbanisation)',
    sectionId: 'urb-read-5',
    sectionTitle: 'Reading 5: Sụt Lún TP.HCM (NASA)',
    category: 'reading',
    questionNumber: 40,
    questionText: 'Which of the following best serves as the title for the passage?',
    options: {
      A: 'When Heavy Rain Exposes Ho Chi Minh City’s Weak Drainage',
      B: 'Sinking Ground, Rising Risk: Urban Growth in Ho Chi Minh City',
      C: 'Migration and the Search for Opportunity in a Modern Metropolis',
      D: 'Building Higher: A Temporary Engineering Challenge for Ho Chi Minh City'
    },
    correctAnswer: 'B',
    passageTitle: 'Sinking of Ho Chi Minh City',
    excerpt: 'Dữ kiện toàn bài: Toàn bài phân tích về hiện tượng nền đất sụt lún và rủi ro ngập lụt gia tăng đi liền với sự phát triển đô thị tại TP.HCM.',
    fullPassage: PASSAGE_SINKING_HCMC_NASA,
    explanation: 'Tiêu đề phù hợp và toàn diện nhất: "Sinking Ground, Rising Risk: Urban Growth in Ho Chi Minh City" (Nền đất lún, rủi ro tăng: Tăng trưởng đô thị tại TP.HCM).'
  }
];
