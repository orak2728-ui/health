/**
 * Central content config for the 최원락내과 landing page.
 * Fields set to `null` are unconfirmed real-world facts (address, phone, hours,
 * doctor's official history, images, links) and must never be guessed —
 * they render as visible "정보 확인 중" placeholders until filled in here.
 * Copy fields already have PRD-approved text and can be edited directly.
 */

export const siteUrl = "https://health-lovat-five.vercel.app";

export type BioItem = {
  label: string;
  value: string | null;
};

export type BusinessHourRow = {
  label: string;
  hours: string | null;
};

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
};

export type ContentCard = {
  id: string;
  category: string;
  title: string;
  summary: string;
  href: string | null;
  type: "video" | "article";
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type StorySection = {
  heading: string;
  body: string[];
};

export type PhotographyGalleryImage = {
  src: string;
  caption: string;
};

export type PhotographyWork = {
  id: string;
  title: string;
  type: string;
  description: string | null;
  exhibitionYear: string | null;
  publishYear: string | null;
  publisher: string | null;
  image: string | null;
  gallery?: PhotographyGalleryImage[];
};

export type BipfEdition = {
  edition: string;
  year: string;
  theme: string;
  role: string;
  venue: string;
  period: string;
  image: string;
};

export const clinicOpenYear = 1991;

export const siteConfig = {
  clinicName: "최원락 내과의원" as string | null,
  clinicNameFallback: "최원락내과",
  phone: "051-207-2700" as string | null,
  address: "부산시 사하구 감천동 옥천로 5" as string | null,
  mapUrl: null as string | null,
  parkingInfo: null as string | null,
  transitInfo: null as string | null,
  reservationMethod: null as string | null,
  businessHours: [
    { label: "평일 (월~금)", hours: "08:00 - 18:00" },
    { label: "점심시간", hours: "12:30 - 14:00" },
    { label: "토요일", hours: "08:00 - 12:30" },
    { label: "휴진일", hours: "일요일 · 공휴일" },
  ] satisfies BusinessHourRow[],
  socials: {
    youtube: null as string | null,
    blog: null as string | null,
    instagram: null as string | null,
  },
};

export const heroContent = {
  headline: "암과 만성질환, 발견부터 지속적인 관리까지",
  subcopy:
    "오랜 임상 경험과 정확한 설명으로 검사 결과의 의미를 함께 살피고, 지금의 질환뿐 아니라 앞으로의 건강 위험까지 관리합니다.",
};

const practiceYears = new Date().getFullYear() - clinicOpenYear;

export const trustStats: { label: string; value: string | null; suffix: string }[] = [
  { label: "내과 임상 진료 경력", value: String(practiceYears), suffix: "년" },
  { label: "집중 진료 분야", value: "3", suffix: "개 핵심 영역" },
  { label: "건강 콘텐츠", value: null, suffix: "편 이상" },
];

export const doctorInfo = {
  name: "최원락",
  title: "내과 전문의",
  photoAvailable: true,
  bioItems: [
    { label: "의과대학 졸업", value: "부산의대 졸업" },
    { label: "내과 전문의 자격", value: "내과 전문의 · 의학박사" },
    { label: "개원 · 지역 진료 경력", value: `${clinicOpenYear}년 개원 (개원 ${practiceYears}년차)` },
    {
      label: "주요 학회 · 의사회 경력",
      value:
        "부산시 의사회 의장\n대한의사협회 운영위원\n대한소화기내시경학회 정회원\n대한임상초음파학회 정회원",
    },
    {
      label: "진료 중점 분야",
      value: "내시경 · 초음파 · 만성질환\n기능의학 · 암 관리\n면역 · 영양(식사요법) 등 보조요법",
    },
    {
      label: "대외 활동",
      value: "한국사진작가협회 평론분과위원장\n부산국제사진제 제1·2·3회 전시기획자(2017~2019)",
    },
  ] satisfies BioItem[],
  introCopy:
    "복잡한 의학 정보를 정확하고 쉽게 설명하는 것을 진료의 중요한 부분으로 생각합니다. 검사 결과를 나열하는 데 그치지 않고, 지금의 상태가 무엇을 의미하는지, 앞으로 무엇을 살펴야 하는지를 환자와 함께 확인합니다.",
  photographerNote:
    "동시에 카메라로 삶과 죽음을 오래 들여다보는 사진작가이기도 합니다. 몸을 살피는 진료실 안의 시선과, 삶을 담는 사진 속의 시선은 다르지 않다고 생각합니다.",
  photographerNoteImage: "/images/photography/life-art-and-death.jpg",
};

export const doctorStory: StorySection[] = [
  {
    heading: "이 자리를 지켜온 시간",
    body: [
      "저는 부산의대를 졸업하고 내과 전문의와 의학박사가 된 뒤, 1991년 이 자리에 의원을 열어 오늘에 이르렀습니다. 개원 35년, 그동안 내시경과 초음파, 그리고 만성질환 진료를 손에서 놓지 않으려 여러 학회와 세미나를 부지런히 다녔습니다. 진료실 밖에서는 부산시의사회 의장과 대한의사협회 운영위원을 맡아, 의료가 나아가야 할 방향을 함께 고민했습니다.",
      "의사로 지내는 동안 마음이 무거워지는 일이 있었습니다. 사람의 생명을 곧바로 다루는 내과·외과·산부인과·소아과가 점점 외면받고, 젊은 의사들이 피부과와 성형외과로 향하는 모습을 지켜보는 일이었습니다. 소아과와 산부인과가 하나둘 문을 닫는 동네를 보며, 불합리한 의료수가라도 바로잡아 보려 애썼습니다. 그럼에도 저는 이 자리를 지켰습니다. 동네 어르신들과 함께 나이 들어가며, 계속 공부하고 계속 진료하는 내과 의사로 남고 싶었기 때문입니다.",
    ],
  },
  {
    heading: "카메라로 담은 마을, 그리고 부모님",
    body: [
      "그러던 중 우연히 카메라를 만났습니다. 사진예술과 사진철학을 공부하며 한국사진작가협회 평론분과위원장, 부산국제사진제 제1·2·3회 전시기획자로 세상을 사진에 담던 중에, 제가 진료하던 감천마을이 감천문화마을로 변해가는 과정과 그 안에서 살아가는 사람들의 얼굴을 사진에 담기 시작했습니다. 그리고 개인적으로는 아버지의 삶과 죽음, 어머니의 삶과 죽음을 사진으로 남겼습니다. 그렇게 찍은 사진들로 《아버지의 자리》, 《반달고개》, 《어머니》 전시를 열었고, 그중 두 권을 사진집으로 세상에 내놓았습니다. 진료가 몸을 살피는 일이라면, 사진은 삶을 오래 들여다보는 일이었습니다. 제 안에서 그 둘은 다르지 않았습니다.",
    ],
  },
  {
    heading: "스스로 겪은 암, 그리고 새로운 공부",
    body: [
      "나이가 들며 제 몸도 예전 같지 않음을 느끼던 어느 날, 오랫동안 많은 환자의 암을 진단해 온 감각으로 스스로를 살피다 제 전립선암을 발견했습니다. 다행히 아주 이른 시기였습니다. 그동안 제가 암을 진단해드린 동네 어르신들은 대개 자녀분들의 손을 빌려 서울의 큰 병원으로 향하시곤 했습니다. 하지만 저는 제가 사는 이 동네에서 가까운 부산대학교병원에서 수술을 받았습니다. 좋은 치료는 멀리 있지 않다는 것을, 저는 제 몸으로 먼저 확인하고 싶었습니다.",
      "수술 뒤에는 기력이 완전히 무너져, 몸이 천근만근 무겁게 가라앉는 시간을 보내게 되면서 저는 그동안의 고전적인 내과 진료에서 한 걸음 더 나아가 기능의학, 암 진단과 치료후의 관리, 그리고 인체의 대사와 식이요법에 매달려 다시 공부했습니다. 지금은 기력과 체력이 거의 회복되었고, 그 과정에서 예전에는 무심코 지나쳤던 비타민 등 여러 보조요법 치료, 기능의학적 접근, 암 예방과 관리 그리고 면역에 깊은 관심을 가지게 되었습니다. 병을 겪어본 의사로서, 이제는 치료를 넘어 회복과 예방까지 함께 살피는 진료를 하고자 합니다.",
    ],
  },
  {
    heading: "진료에서 가장 중요하게 생각하는 것",
    body: [
      "검사 결과를 나열하는 데 그치지 않고, 지금의 상태가 무엇을 의미하는지, 앞으로 무엇을 살펴야 하는지를 환자분과 함께 확인하는 것 — 저는 그것이 진료의 가장 중요한 부분이라고 믿습니다.",
    ],
  },
];

export const photographyIntro =
  "감천마을이 감천문화마을로 변해가는 과정과 그 안에서 살아가는 사람들의 얼굴, 그리고 아버지와 어머니의 삶과 죽음을 사진으로 오래 들여다보았습니다. 진료가 몸을 살피는 일이라면, 사진은 삶을 오래 들여다보는 일이었습니다.";

export const featuredPhotographyWork: PhotographyWork = {
  id: "life-art-and-death",
  title: "Life, Art, and Death",
  type: "전시",
  description: null,
  exhibitionYear: null,
  publishYear: null,
  publisher: null,
  image: "/images/photography/life-art-and-death.jpg",
};

export const photographyWorks: PhotographyWork[] = [
  {
    id: "father",
    title: "아버지의 자리",
    type: "전시(I·II) · 사진집",
    description:
      "아버지의 삶과 죽음을 좇은 작업입니다. 한 사람의 아버지가 지나온 시간과, 그 자리에 남은 흔적들을 조용히 따라갑니다. 화려한 순간이 아니라 묵묵히 지켜온 일상을 담아, '아버지'라는 이름이 품은 무게를 사진의 언어로 옮겼습니다. 전시로 선보인 뒤 사진집으로 엮었습니다.",
    exhibitionYear: null,
    publishYear: null,
    publisher: null,
    image: null,
  },
  {
    id: "half-moon-hill",
    title: "반달고개",
    type: "전시 · 사진집",
    description:
      "감천동 언덕 판자집에서 살아가는 이웃들의 삶을 담은 작업입니다. 반달처럼 휘어 오른 골목과 고개, 그 비탈에 기대어 살아가는 사람들의 표정을 오래 들여다보았습니다. 마을이 감천문화마을로 변해가는 과정 속에서도 자리를 지켜온 삶들을, 진료실 밖에서 만난 또 다른 방식의 기록으로 남겼습니다. 전시와 사진집으로 세상에 내놓았습니다.",
    exhibitionYear: null,
    publishYear: null,
    publisher: null,
    image: "/images/photography/gamchuen1.jpg",
    gallery: [
      { src: "/images/photography/gamchuen1.jpg", caption: "그냥 바라본 마을" },
      {
        src: "/images/photography/gamchuen2.jpg",
        caption: "비 오는 날, 왜곡된 마을",
      },
      {
        src: "/images/photography/gamchuen3.jpg",
        caption: "깨어진 유리창 너머로 본 마을",
      },
    ],
  },
  {
    id: "mother",
    title: "어머니",
    type: "전시",
    description:
      "어머니의 삶과 죽음을 담은 전시입니다. 한평생 가족을 위해 자리를 지켜온 어머니의 시간을, 그 마지막 순간까지 사진으로 곁에서 기록했습니다. 가장 가까운 사람을 오래 들여다보는 일이 어떤 것인지, 카메라를 통해 다시 배운 작업이었습니다.",
    exhibitionYear: null,
    publishYear: null,
    publisher: null,
    image: null,
  },
  {
    id: "cotton-candy",
    title: "솜사탕",
    type: "전시",
    description: null,
    exhibitionYear: null,
    publishYear: null,
    publisher: null,
    image: null,
  },
];

export const bipfIntro =
  "2016년 겨울, 부산에서 각기 다른 사진동아리로 활동하던 사진가들이 뜻을 모아 부산국제사진제 조직위원회를 꾸렸습니다. 저는 제1회부터 제3회까지 전시기획자로 참여해, 칸트의 판단력 비판·순수이성 비판·실천이성 비판을 한 해씩 이론적 바탕으로 삼아 美(아름다움)·眞(참됨)·善(선함)을 사진으로 살펴왔습니다.";

export const bipfEditions: BipfEdition[] = [
  {
    edition: "제1회",
    year: "2017",
    theme: "아름다움이란 무엇인가? — 칸트의 판단력 비판을 바탕으로 美(아름다움)를 사진으로 살피다",
    role: "조직위원 · 전시기획 총괄 및 주제전 기획",
    venue: "부산문화회관 대전시실",
    period: "2017.9.2 - 9.17",
    image: "/images/bipf/bipf-2017.jpg",
  },
  {
    edition: "제2회",
    year: "2018",
    theme: "나에게 사진이란 무엇인가? — 칸트의 순수이성 비판(직관·감성·이성)을 바탕으로 眞(참됨)을 사진으로 살피다",
    role: "전시기획자",
    venue: "부산문화회관 대전시실 · 부산디자인센터 전시실",
    period: "2018.8.11 - 9.2",
    image: "/images/bipf/bipf-2018.jpg",
  },
  {
    edition: "제3회",
    year: "2019",
    theme: "나는 사진으로 무엇을 할 것인가? — 칸트의 실천이성 비판을 바탕으로 善(선함)을 사진으로 살피다",
    role: "전시기획자",
    venue: "(주)거청 (부산광역시 영도구 해양로 125)",
    period: "2019.8.31 - 9.28",
    image: "/images/bipf/bipf-2019.jpg",
  },
];

export type BipfEventPhoto = {
  id: string;
  image: string;
  caption: string;
};

export const bipfEventPhotos: BipfEventPhoto[] = [
  {
    id: "2022-1",
    image: "/images/bipf/bipf-2022-1.jpg",
    caption:
      "2022 부산국제사진제 《살과 돌 Flesh and Stone》 폐막 — 조직위원장으로서 전시를 마무리하며 함께한 기념사진",
  },
  {
    id: "2022-2",
    image: "/images/bipf/bipf-2022-2.jpg",
    caption:
      "작품이 모두 철거된 빈 전시장, 조직위원장으로서 마지막으로 공간을 둘러보던 순간 — 마침 전시기획자 겸 전시감독과 마주 보게 되었습니다.",
  },
];

export const problemStatements = [
  "아프지 않다고 안심할 수는 없습니다. 중요한 질환 중에는 증상 없이 진행되는 경우가 있기 때문입니다.",
  "검사는 많이 하는 것보다, 현재의 위험에 맞는 검사를 선택하고 결과의 의미를 이해하는 것이 중요합니다.",
  "한 번의 정상 결과보다 변화의 흐름을 살피겠습니다. 치료가 끝난 뒤의 건강관리도 함께 생각하겠습니다.",
];

export const coreValues = [
  {
    id: "cancer",
    title: "암의 조기 발견과 지속 관리",
    points: [
      "위험요인과 현재 상태를 함께 평가합니다.",
      "필요한 검사와 추적 시점을 이해하기 쉽게 설명합니다.",
      "진단 후 치료기관 연계와 치료 후 건강관리 방향을 제공합니다.",
    ],
  },
  {
    id: "chronic",
    title: "만성질환의 장기 관리",
    points: [
      "고혈압, 당뇨병, 이상지질혈증 등을 진료합니다.",
      "단일 수치가 아닌 변화 추세와 생활 습관을 함께 확인합니다.",
      "약물, 검사, 식사 · 운동 등 지속 가능한 관리 방향을 제시합니다.",
    ],
  },
  {
    id: "screening",
    title: "증상 없는 위험의 조기 확인",
    points: [
      "증상이 없어도 진행될 수 있는 질환에 대해 안내합니다.",
      "연령, 가족력, 기존 질환과 검사 결과에 따라 상담합니다.",
      "정기 검진과 이상 소견 후 추적관리의 중요성을 안내합니다.",
    ],
  },
  {
    id: "comprehensive",
    title: "건강에 영향을 주는 상태의 종합적 평가",
    points: [
      "혈당, 지질, 염증, 호르몬 등 실제 시행 · 해석 가능한 범위를 안내합니다.",
      "근거 수준과 표준진료 여부가 다른 항목은 구분하여 설명합니다.",
    ],
  },
];

export const processSteps = [
  { title: "현재 상태 상담", description: "지금의 증상과 걱정, 검사 이력을 함께 확인합니다." },
  { title: "필요한 검사 선택", description: "현재 위험에 맞는 검사를 선택합니다." },
  { title: "결과와 의미 설명", description: "검사 결과가 뜻하는 바를 이해하기 쉽게 설명합니다." },
  { title: "치료 · 전원 · 생활관리", description: "필요 시 상급기관 연계와 생활관리 방향을 안내합니다." },
  { title: "재검과 추적관리", description: "변화의 흐름을 지속적으로 살핍니다." },
];

export const coreServices: ServiceItem[] = [
  {
    id: "cancer-care",
    title: "암 조기발견 · 치료 후 관리",
    description: "위험요인 평가부터 진단 후 지속 관리까지 함께 살핍니다.",
    bullets: [],
  },
  {
    id: "chronic-care",
    title: "만성질환 관리",
    description: "당뇨병 · 고혈압 · 이상지질혈증 등 장기적인 관리가 필요한 질환을 진료합니다.",
    bullets: [],
  },
  {
    id: "checkup-ultrasound",
    title: "건강검진 · 초음파 검사",
    description: "증상이 없을 때 발견하는 위험까지 살피는 정기 검진과 초음파 검사입니다.",
    bullets: [
      "위 내시경",
      "대장 내시경",
      "유방 촬영",
      "갑상선초음파",
      "복부초음파",
      "경동맥초음파",
      "혈액검사",
      "소변검사",
    ],
  },
];

export const healthContentCards: ContentCard[] = [
  {
    id: "content-1",
    category: "건강 콘텐츠",
    title: "콘텐츠 제목 입력 예정",
    summary: "대표 유튜브 영상 또는 글의 요약이 이 자리에 들어갑니다.",
    href: null,
    type: "video",
  },
  {
    id: "content-2",
    category: "건강 콘텐츠",
    title: "콘텐츠 제목 입력 예정",
    summary: "대표 유튜브 영상 또는 글의 요약이 이 자리에 들어갑니다.",
    href: null,
    type: "video",
  },
  {
    id: "content-3",
    category: "건강 콘텐츠",
    title: "콘텐츠 제목 입력 예정",
    summary: "대표 유튜브 영상 또는 글의 요약이 이 자리에 들어갑니다.",
    href: null,
    type: "article",
  },
];

export const doctorMessage =
  "진료실에서 다 설명하지 못한 건강 이야기를, 영상과 글로 쉽게 전하려 합니다. 오늘의 검사 결과뿐 아니라 앞으로의 건강까지 함께 생각하는 진료를 하겠습니다.";

export const faqItems: FaqItem[] = [
  {
    question: "예약 없이 방문해도 되나요?",
    answer:
      "예약 방식은 준비 중입니다. 확정되는 대로 전화 · 온라인 예약 여부를 안내해 드리겠습니다.",
  },
  {
    question: "건강검진은 어떤 검사를 받을 수 있나요?",
    answer: "실제 시행 검사 항목은 정보 확인 후 안내해 드리겠습니다.",
  },
  {
    question: "검사 전 준비해야 할 것이 있나요?",
    answer: "검사 종류에 따라 금식 등 준비사항이 다를 수 있어 방문 전 전화로 확인해 주세요.",
  },
  {
    question: "응급 증상이 있을 때도 문의하면 되나요?",
    answer:
      "응급 증상은 온라인 문의 대신 즉시 응급의료기관을 이용해 주세요. 이 페이지는 진료 상담 및 방문 안내용입니다.",
  },
];

export const legalDisclaimer =
  "본 웹사이트의 건강 정보는 일반적인 정보 제공을 목적으로 하며 개별 진단이나 치료를 대신하지 않습니다. 정확한 진단과 치료는 반드시 의료진과의 진료를 통해 확인해 주세요.";
