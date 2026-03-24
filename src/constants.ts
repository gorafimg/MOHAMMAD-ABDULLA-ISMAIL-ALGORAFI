import { NavItem, Service, Project, Value } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', title: { ar: 'الرئيسية', en: 'Home' } },
  { id: 'about', title: { ar: 'من نحن', en: 'About Us' } },
  { id: 'services', title: { ar: 'الخدمات', en: 'Services' } },
  { id: 'projects', title: { ar: 'المشاريع', en: 'Projects' } },
  { id: 'news', title: { ar: 'الأخبار', en: 'News' } },
  { id: 'contact', title: { ar: 'اتصل بنا', en: 'Contact Us' } },
  { id: 'dr-mohammad', title: { ar: 'د. محمد القرافي', en: 'Dr. Mohammad Algorafi' } },
];

export const CORE_VALUES: Value[] = [
  { title: { ar: 'الاحترافية', en: 'Professionalism' }, icon: 'ShieldCheck' },
  { title: { ar: 'النزاهة', en: 'Integrity' }, icon: 'UserCheck' },
  { title: { ar: 'السلامة العامة', en: 'Public Safety' }, icon: 'HardHat' },
  { title: { ar: 'رضا العملاء', en: 'Customer Satisfaction' }, icon: 'Smile' },
  { title: { ar: 'المساءلة', en: 'Accountability' }, icon: 'ClipboardCheck' },
  { title: { ar: 'الأمانة', en: 'Honesty' }, icon: 'CheckCircle' },
  { title: { ar: 'الجودة', en: 'Quality' }, icon: 'Award' },
  { title: { ar: 'الالتزام بالوقت', en: 'Timeliness' }, icon: 'Clock' },
];

export const SERVICES: Service[] = [
  { id: 'assessment', title: { ar: 'تقييم السلامة الإنشائية', en: 'Structural Integrity Assessment' }, icon: 'ShieldAlert' },
  { id: 'roads', title: { ar: 'مشاريع الطرق والجسور', en: 'Roads & Bridges Projects' }, icon: 'Milestone' },
  { id: 'buildings', title: { ar: 'مشاريع المباني', en: 'Buildings Projects' }, icon: 'Building2' },
  { id: 'architecture', title: { ar: 'التصميم المعماري', en: 'Architectural Design' }, icon: 'PencilRuler' },
  { id: 'geotechnical', title: { ar: 'الجيوتقنية والسدود', en: 'Geotechnical & Dams' }, icon: 'Mountain' },
  { id: 'feasibility', title: { ar: 'دراسات الجدوى', en: 'Feasibility Studies' }, icon: 'BarChart3' },
  { id: 'supervision', title: { ar: 'الإشراف على التنفيذ', en: 'Project Supervision' }, icon: 'Eye' },
  { id: 'hydrology', title: { ar: 'الدراسات الهيدرولوجية', en: 'Hydrological Studies' }, icon: 'Droplets' },
  { id: 'surveying', title: { ar: 'أعمال المساحة', en: 'Surveying Works' }, icon: 'Map' },
  { id: 'review', title: { ar: 'المراجعة الفنية', en: 'Technical Review' }, icon: 'Search' },
  { id: 'procurement', title: { ar: 'المشتريات والتحليل الفني', en: 'Procurement & Technical Analysis' }, icon: 'ShoppingCart' },
  { id: 'codes', title: { ar: 'إعداد الأدلة والمواصفات', en: 'Manuals & Specifications' }, icon: 'BookOpen' },
  { id: 'electro-mech', title: { ar: 'المشاريع الكهربائية والميكانيكية', en: 'Electrical & Mechanical Projects' }, icon: 'Zap' },
];

export const PROJECTS: Project[] = [
  { 
    id: 'P12-03', 
    year: '2012-2013', 
    title: { ar: 'مبنى سكني', en: 'Resident building' },
    type: { ar: 'تصميم إنشائي', en: 'Structure Design' },
    client: { ar: 'مكتب ثري دي أكسس', en: '3D Axes Office' }
  },
  { 
    id: 'P13-02', 
    year: '2013', 
    title: { ar: 'جسر جامعة إب', en: 'Ibb university Bridge' },
    type: { ar: 'إنشائي', en: 'Structure' },
    client: { ar: 'شركة التام', en: 'Alltam company' }
  },
  { 
    id: 'P13-03', 
    year: '2013', 
    title: { ar: 'ديكور قاعة الندوات', en: 'Décor of Seminar Room' },
    type: { ar: 'تصميم وتنفيذ', en: 'Design & Construction' },
    client: { ar: 'جامعة الناصر', en: 'Alnasser University' }
  },
  { 
    id: 'P13-04', 
    year: '2013-2014', 
    title: { ar: 'خدمات استشارية لتصميم جسر في مدينة الحديدة', en: 'Consultancy services for the design of Bridge in Hodedah city' },
    type: { ar: 'تصميم إنشائي', en: 'Structure Design' },
    client: { ar: 'المؤسسة العامة للطرق والجسور', en: 'General Corporation for Roads & Bridges' }
  },
  { 
    id: 'P14-01', 
    year: '2014-2015', 
    title: { ar: 'خدمات استشارية للإشراف على جامعة الأندلس', en: 'Consultancy services for the supervision of ALandalus University' },
    type: { ar: 'إشراف', en: 'Supervision' },
    client: { ar: 'وزارة الأشغال العامة والطرق', en: 'Ministry of Public Works and Highways' }
  },
  { 
    id: 'P14-02', 
    year: '2014-2015', 
    title: { ar: 'إعداد معايير الإشراف للجمهورية اليمنية', en: 'Preparing the Supervision Standard of Republic of Yemen' },
    type: { ar: 'دراسة', en: 'Study' },
    client: { ar: 'وزارة الأشغال العامة والطرق', en: 'Ministry of Public Works and Highways' }
  },
  { 
    id: 'P14-03', 
    year: '2014-2015', 
    title: { ar: 'استشاريو الإشراف لعقد صيانة الحديدة المجموعة 1 و2', en: 'Supervision consultants for Term maintenance contract for Hodeidah Group 1 & 2' },
    type: { ar: 'إشراف', en: 'Supervision' },
    client: { ar: 'صندوق صيانة الطرق / وزارة الأشغال', en: 'Road Maintenance Fund / MPWH' }
  },
  { 
    id: 'P16-01', 
    year: '2016-Ongoing', 
    title: { ar: 'الإشراف على المرحلة الرابعة، المجموعة الأولى في مدينة صنعاء', en: 'Construction supervision Stage four, Group I in Sana’a city' },
    type: { ar: 'مراجعة التصميم والإشراف', en: 'Design Review and Supervision' },
    client: { ar: 'أمانة العاصمة صنعاء', en: 'Capital Secretarial Sana’a' }
  },
  { 
    id: 'P16-02', 
    year: '2016-Ongoing', 
    title: { ar: 'الإشراف على المرحلة الرابعة، المجموعة الثانية في مدينة صنعاء', en: 'Construction supervision Stage four, Group II in Sana’a city' },
    type: { ar: 'مراجعة التصميم والإشراف', en: 'Design Review and Supervision' },
    client: { ar: 'أمانة العاصمة صنعاء', en: 'Capital Secretarial Sana’a' }
  },
  { 
    id: 'P16-03', 
    year: '2016-2017', 
    title: { ar: 'دراسات الجدوى والتصاميم الأولية للطرق الثانوية في مقديشو', en: 'Mogadishu Secondary/Community Roads Feasibility and Preliminary Designs' },
    type: { ar: 'دراسة وتصميم', en: 'Study, Design' },
    client: { ar: 'البنك الدولي / اليونوبس', en: 'World Bank / UNOPS' }
  },
  { 
    id: 'P19-01', 
    year: '2019', 
    title: { ar: 'التقييم الإنشائي لـ 20 مبنى (مستشفى ومدرسة) في صنعاء وذمار', en: 'Structural Evaluation of 20 Buildings (Hospital and school) In Sana’a & Dhamar' },
    type: { ar: 'تقييم واختبارات', en: 'Assessment, tests' },
    client: { ar: 'اليونوبس', en: 'UNOPS' }
  },
  { 
    id: 'P21-01', 
    year: '2021', 
    title: { ar: 'التقييم الإنشائي لـ 12 مستشفى في 9 محافظات', en: 'Structural Evaluation of 12 Hospitals in 9 governorates' },
    type: { ar: 'تقييم واختبارات', en: 'Assessment, tests' },
    client: { ar: 'اليونوبس', en: 'UNOPS' }
  },
  { 
    id: 'P21-02', 
    year: '2021', 
    title: { ar: 'التقييم الإنشائي لجسور الكسارة في مصنع عمران', en: 'Structural Evaluation of Crasher Girders in Amran Factory' },
    type: { ar: 'تقييم واختبارات', en: 'Assessment, tests' },
    client: { ar: 'مصنع أسمنت عمران', en: 'Amran Factory' }
  },
  { 
    id: 'P21-03', 
    year: '2021', 
    title: { ar: 'توفير تقييم سلامة المباني في مواقع متعددة في شبوة والضالع وعدن', en: 'Provision of Building Integrity Assessment in Multiple locations in Shabwah, Aldaleea & Aden' },
    type: { ar: 'تقييم واختبارات', en: 'Assessment, tests' },
    client: { ar: 'تسلا / تجدد للتجارة والمقاولات', en: 'Tesla / Tagadod for trading & Contracting' }
  },
  { 
    id: 'P21-04', 
    year: '2021-2022', 
    title: { ar: 'التقييم الإنشائي لجسر الصين في المكلا وإعداد المواصفات للإصلاح', en: 'Structural assessment of China Bridge in Almokkla and specifications for repair' },
    type: { ar: 'تقييم واختبارات', en: 'Assessment, tests' },
    client: { ar: 'صندوق صيانة الطرق / وزارة الأشغال', en: 'Road Maintenance Fund / MPWH' }
  },
  { 
    id: 'P22-01', 
    year: '2022-2024', 
    title: { ar: 'توفير التحريات الجيوتقنية والمسح الطبوغرافي وتقييم السلامة الإنشائية للمرافق الخدمية في اليمن', en: 'Provision of Geotechnical Investigation, Topographical Survey & Structural Integrity Assessment in Yemen' },
    type: { ar: 'تقييم واختبارات', en: 'Assessment, tests' },
    client: { ar: 'مكتب الأمم المتحدة لخدمات المشاريع (UNOPS)', en: 'United Nations Office for Project Services' }
  },
  { 
    id: 'P22-02', 
    year: '2022', 
    title: { ar: 'توفير تقييم سلامة المباني في مواقع متعددة في تعز وصنعاء', en: 'Provision of Building Integrity Assessment in Multiple locations in Taiz & Sana\'a' },
    type: { ar: 'تقييم واختبارات', en: 'Assessment, tests' },
    client: { ar: 'مكتب الأمم المتحدة لخدمات المشاريع (UNOPS)', en: 'United Nations Office for Project Services' }
  },
  { 
    id: 'P23-01', 
    year: '2023', 
    title: { ar: 'توفير تقييم سلامة المباني في مواقع متعددة في شبوة وحضرموت', en: 'Provision of Building Integrity Assessment in Multiple locations in Shabwah & Hadramot' },
    type: { ar: 'تقييم واختبارات', en: 'Assessment, tests' },
    client: { ar: 'مكتب الأمم المتحدة لخدمات المشاريع (UNOPS)', en: 'United Nations Office for Project Services' }
  },
  { 
    id: 'P23-02', 
    year: '2023', 
    title: { ar: 'توفير تقييم سلامة المباني في مواقع متعددة في شبوة والضالع وعدن', en: 'Provision of Building Integrity Assessment in Multiple locations in Shabwah, Aldaleea & Aden' },
    type: { ar: 'تقييم واختبارات', en: 'Assessment, tests' },
    client: { ar: 'تسلا', en: 'Tesla' }
  },
  { 
    id: 'P23-03', 
    year: '2023-2025', 
    title: { ar: 'تصميم جسرين نمطيين والأعمال المرتبطة بهما في صنعاء وحضرموت', en: 'Design of Two Modular Bridges and Associated Works in Sana\'a & Hadramot' },
    type: { ar: 'مسح وتصميم إنشائي وطرق', en: 'Site survey, Highway & Structure Design' },
    client: { ar: 'مكتب الأمم المتحدة لخدمات المشاريع (UNOPS)', en: 'United Nations Office for Project Services' }
  },
  { 
    id: 'P24-01', 
    year: '2023-2024', 
    title: { ar: 'تصميم جسرين نمطيين والأعمال المرتبطة بهما في صنعاء وحضرموت', en: 'Design of Two Modular Bridges and Associated Works in Sana\'a & Hadramot' },
    type: { ar: 'مسح وتصميم إنشائي وطرق', en: 'Site survey, Highway & Structure Design' },
    client: { ar: 'مكتب الأمم المتحدة لخدمات المشاريع (UNOPS)', en: 'United Nations Office for Project Services' }
  }
];

export const CONTACT_INFO = {
  address: { 
    ar: 'شارع الرئيسي، ديس، المكلا، 12345، حضرموت، اليمن', 
    en: 'Main Street, Dees, Al MUKALLA, 12345, Hadramout, Yemen' 
  },
  phone: '00967-1-517142',
  fax: '00967-1-514384',
  mobile: '00967777170500',
  email: 'mg@mgengineeringco.com',
  altEmail: 'mgengineeringco@gmail.com',
  website: 'www.mgengineeringco.com',
};
