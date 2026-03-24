import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, Download, Book, GraduationCap, Briefcase, 
  Award, FileText, Mail, Phone, Linkedin, ExternalLink,
  Search, Globe, ShieldCheck, ShieldAlert
} from 'lucide-react';
import { Language } from './types';

interface Props {
  lang: Language;
  onBack: () => void;
}

export default function DrMohammadAlgorafi({ lang, onBack }: Props) {
  const t = (key: { ar: string; en: string }) => key[lang];
  const isRtl = lang === 'ar';

  return (
    <div className={`min-h-screen bg-[#E4E3E0] text-[#141414] font-sans ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#141414] text-[#E4E3E0] py-4 px-6 flex justify-between items-center border-b border-[#E4E3E0]/10">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 hover:opacity-70 transition-opacity font-mono text-sm"
        >
          <ArrowLeft size={18} className={isRtl ? 'rotate-180' : ''} />
          {lang === 'ar' ? 'العودة للرئيسية' : 'BACK TO HOME'}
        </button>
        <div className="font-mono text-xs tracking-widest uppercase opacity-50">
          CURRICULUM VITAE / DR. MOHAMMAD AL-GORAFI
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-8 md:p-16">
        {/* Header Section */}
        <header className="grid md:grid-cols-[1fr_300px] gap-12 items-start mb-24">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              {lang === 'ar' ? 'د. محمد عبدالله إسماعيل القرافي' : 'Dr. Mohammad Abdulla Ismail Al-Gorafi'}
            </motion.h1>
            <p className="text-xl md:text-2xl font-serif italic opacity-70 mb-8">
              {lang === 'ar' ? 'أستاذ مشارك في الهندسة الإنشائية' : 'Associate Professor of Structural Engineering'}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-sm">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-indigo-600" />
                <div className="flex flex-col">
                  <span>gorafimg@gmail.com</span>
                  <span className="text-xs opacity-60">m.algorafi@su.edu.ye</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-indigo-600" />
                <span>00967777170500</span>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin size={16} className="text-indigo-600" />
                <a href="https://www.linkedin.com/in/dr-mohammad-algorafi-" target="_blank" rel="noreferrer" className="underline">LinkedIn Profile</a>
              </div>
              <div className="flex items-center gap-3">
                <Search size={16} className="text-indigo-600" />
                <a href="https://scholar.google.com/citations?user=eFvHPRUAAAAJ&hl=en" target="_blank" rel="noreferrer" className="underline">Google Scholar</a>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative aspect-square bg-[#141414] rounded-2xl overflow-hidden border-4 border-[#141414]"
          >
            <img 
              src="/Drmohammad algorafi2026.png" 
              alt="Dr. Mohammad Al-Gorafi"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </header>

        {/* Attachments Section */}
        <section className="mb-24">
          <h2 className="text-xs font-mono tracking-widest uppercase opacity-40 mb-8 border-b border-[#141414]/10 pb-2">
            {lang === 'ar' ? 'المرفقات' : 'ATTACHMENTS'}
          </h2>
          <div className="flex flex-wrap gap-4">
            <button 
              className="flex items-center gap-3 bg-[#141414] text-[#E4E3E0] px-8 py-4 rounded-full font-bold hover:bg-indigo-600 transition-colors"
            >
              <Download size={20} />
              {lang === 'ar' ? 'تحميل السيرة الذاتية (PDF)' : 'DOWNLOAD CV (PDF)'}
            </button>
            <a 
              href="https://drive.google.com/file/d/1v8BmEkQe61l2T-Yy0Ts5PUAs4hRNQRSe/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 border-2 border-[#141414] px-8 py-4 rounded-full font-bold hover:bg-[#141414] hover:text-[#E4E3E0] transition-colors"
            >
              <Book size={20} />
              {lang === 'ar' ? 'تحميل الكتاب (PDF)' : 'DOWNLOAD BOOK (PDF)'}
            </a>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScHTKyofItZ5SUitTMjCUhrQBVViBwwf8BzfTVqx601VDDBFg/viewform?usp=header"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-700 transition-colors"
            >
              <ExternalLink size={20} />
              {lang === 'ar' ? 'استبيان تقييم التدريس للدكتور محمد القرافي' : 'Teaching evaluation questionnaire for Dr. Mohammad Algorafi'}
            </a>
          </div>
        </section>

        {/* Biography Section */}
        <section className="mb-24">
          <h2 className="text-xs font-mono tracking-widest uppercase opacity-40 mb-8 border-b border-[#141414]/10 pb-2">
            {lang === 'ar' ? 'السيرة الذاتية' : 'BIOGRAPHY'}
          </h2>
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-[#141414]/10 shadow-sm">
            <p className="text-lg leading-relaxed opacity-80 whitespace-pre-line">
              {lang === 'ar' 
                ? `يتمتع د. محمد بأكثر من 25 عاماً من الخبرة في المجال الأكاديمي في ماليزيا واليمن.
د. محمد أستاذ مشارك في قسم الهندسة المدنية بجامعة صنعاء منذ أكثر من 14 عاماً.
عمل عميداً لعدة جامعات في اليمن لأكثر من 7 سنوات.
يعمل كمستشار لضمان الجودة للبرامج الأكاديمية الهندسية في عدة جامعات في ماليزيا واليمن منذ أكثر من 12 عاماً. أدار أكثر من 30 ورشة عمل لإعداد 10 برامج ماجستير هندسية و3 برامج دكتوراه هندسية في كلية الهندسة بجامعة صنعاء، من مايو إلى يوليو 2021. أدار ورشة عمل للتقييم الذاتي لـ 7 برامج هندسية في كلية الهندسة بجامعة صنعاء، 26-28 أكتوبر 2020. أدار ورشة عمل "تحديث برنامج الهندسة الميكانيكية لتلبية احتياجات التنمية وسوق العمل" في كلية الهندسة بجامعة صنعاء، 20 يناير 2020. أدار ورشة عمل "تحديث البرامج الهندسية السبعة لتلبية متطلبات NARS" في كلية الهندسة بجامعة صنعاء، 26-29 يوليو 2020.
لديه أكثر من 17 ورقة بحثية في مجال ضمان الجودة الأكاديمية والهندسة المدنية، بما في ذلك كتاب منشور في هندسة الجسور.
يعمل كمستشار في الهيئة العليا للعلوم والتكنولوجيا والابتكار. يترأس فريق رسم الخرائط البحثية لقطاع الإنشاءات والتخطيط الحضري في اليمن من مايو 2022 إلى مايو 2023.
يتمتع د. محمد بأكثر من 25 عاماً من الخبرة في العمل على تصميم الجسور والطرق السريعة والطرق في ماليزيا والصومال واليمن. يتمتع د. محمد بأكثر من 10 سنوات من الخبرة في إدارة المشاريع. لديه خبرة واسعة في إدارة فرق من المهندسين في العديد من المشاريع لضمان إكمال المشروع بأمان وفعالية من حيث التكلفة وفي الوقت المناسب لتلبية وتجاوز توقعات العملاء.
يشارك د. محمد في الخدمة المجتمعية منذ سنوات عديدة، ويشغل منصب المدير التنفيذي لمؤسسة المواساة التنموية النسوية منذ أغسطس 2023.`
                : `Dr. Mohammad has over 25 years of experience in the academic field in Malaysia and Yemen.
Dr. Mohammad has been an Associate Professor in the Civil Engineering Department at Sana’a University for over 14 years.
He has worked as Dean for several universities in Yemen for over 7 years.
He has been working as a quality assurance consultant for engineering academic programs at several universities in Malaysia and Yemen for over 12 years. He managed more than 30 workshops for preparing 10 engineering master's programs & 3 engineering PhD programs in the Faculty of Engineering, Sana’a University, May to July 2021. Mange workshop of self-evaluation of 7 engineering programs in the Faculty of Engineering, Sana'a University, 26-28 October 2020. Mange workshop of "Modernization of the Mechanical Engineering program to meet Development and market labour" in the Faculty of Engineering, Sana'a University, 20 January 2020. Mange workshop of “Modernization of the Seven Engineering programs to meet NARS Requirements” in the Faculty of Engineering, Sana'a University, 26-29 July 2020.
He has more than 17 research papers on academic quality assurance and the civil engineering field, including a published book in bridges engineering.
He works as a consultant at the Higher Authority for Science, Technology, and Innovation. He heads the research mapping team for the construction and urban planning sector in Yemen from May 2022 to May 2023.
Dr. Mohammad has over 25 years of experience working on the design of bridges, highways, and roads in Malaysia, Somalia, and Yemen. Dr. Mohammad has more than 10 years of experience in project management. He has vast experience in managing teams of engineers in many projects to ensure safe, cost-effective, and timely completion of the project to meet and exceed clients’ expectations.
Dr. Mohammad has been involved in community service for many years, and has been the Executive Director of the Mowasat Women's Charitable Foundation since August 2023.`}
            </p>
          </div>
        </section>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-[1fr_2px_1fr] gap-16">
          {/* Left Column */}
          <div className="space-y-24">
            {/* Education */}
            <section>
              <h2 className="text-xs font-mono tracking-widest uppercase opacity-40 mb-8 border-b border-[#141414]/10 pb-2">
                {lang === 'ar' ? 'التعليم' : 'EDUCATION'}
              </h2>
              <div className="space-y-8">
                {[
                  { year: '2011', degree: 'Ph.D. in Structure', school: 'Universiti Putra Malaysia (UPM)' },
                  { year: '2006', degree: "Master's Degree in Structure", school: 'Universiti Putra Malaysia (UPM)' },
                  { year: '2002', degree: 'Higher Diploma in Highway and Geotechnical', school: "Sana'a University, Yemen" },
                  { year: '1998', degree: 'B.Sc. in Civil Engineering', school: "Sana'a University, Yemen" },
                ].map((edu, i) => (
                  <div key={i} className="group">
                    <span className="text-xs font-mono text-indigo-600 block mb-1">{edu.year}</span>
                    <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                    <p className="text-sm opacity-60">{edu.school}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Expertise & Skills */}
            <section>
              <h2 className="text-xs font-mono tracking-widest uppercase opacity-40 mb-8 border-b border-[#141414]/10 pb-2">
                {lang === 'ar' ? 'مجالات الخبرة والمهارات' : 'EXPERTISE & SKILLS'}
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-bold uppercase mb-4 opacity-70">{lang === 'ar' ? 'الخبرة الفنية' : 'Technical Expertise'}</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Bridge Design', 'Prestressed Concrete', 'Structure Analysis', 
                      'Concrete Design', 'Soil Structure Interaction', 'Earthquake Engineering',
                      'Traditional Yemeni Materials', 'Qadad Construction'
                    ].map((skill, i) => (
                      <span key={i} className="px-3 py-1.5 bg-white border border-[#141414]/10 rounded text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase mb-4 opacity-70">{lang === 'ar' ? 'المهارات الحاسوبية' : 'Computer Knowledge'}</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'AutoCAD', 'Staad Pro', 'Estem', 'Strap', 'Ansys', 'SPSS', 
                      'Programming (Basic, VB, Fortran)', 'Land Development'
                    ].map((skill, i) => (
                      <span key={i} className="px-3 py-1.5 bg-[#141414] text-[#E4E3E0] rounded text-xs font-mono">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Awards */}
            <section>
              <h2 className="text-xs font-mono tracking-widest uppercase opacity-40 mb-8 border-b border-[#141414]/10 pb-2">
                {lang === 'ar' ? 'الجوائز والتكريم' : 'AWARDS & RECOGNITION'}
              </h2>
              <div className="bg-white p-8 rounded-2xl border border-[#141414]/10">
                <Award size={32} className="text-indigo-600 mb-4" />
                <p className="text-lg font-medium leading-relaxed">
                  {lang === 'ar' 
                    ? 'تم تكريم د. محمد من بين أفضل 93 أكاديمياً في جامعة صنعاء من حيث الاستشهادات العلمية وفقاً لتصنيف "AD SCIENTIFIC INDEX 2013" في مارس 2023.'
                    : 'Honored among the 93 highest-cited academics at Sana’a University according to the "AD SCIENTIFIC INDEX 2013" in March 2023.'}
                </p>
              </div>
            </section>

            {/* Community Service */}
            <section>
              <h2 className="text-xs font-mono tracking-widest uppercase opacity-40 mb-8 border-b border-[#141414]/10 pb-2">
                {lang === 'ar' ? 'الخدمة المجتمعية' : 'COMMUNITY SERVICE'}
              </h2>
              <div className="space-y-4">
                <div className="p-6 bg-indigo-50 rounded-xl border border-indigo-100">
                  <h3 className="font-bold mb-2">{lang === 'ar' ? 'مؤسسة المواساة التنموية النسوية' : 'Mowasat Women\'s Charitable Foundation'}</h3>
                  <p className="text-sm opacity-70">
                    {lang === 'ar' ? 'المدير التنفيذي منذ أغسطس 2023' : 'Executive Director since August 2023'}
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Divider */}
          <div className="hidden lg:block bg-[#141414]/5" />

          {/* Right Column */}
          <div className="space-y-24">
            {/* Academic Experience */}
            <section>
              <h2 className="text-xs font-mono tracking-widest uppercase opacity-40 mb-8 border-b border-[#141414]/10 pb-2">
                {lang === 'ar' ? 'الخبرة الأكاديمية' : 'ACADEMIC EXPERIENCE'}
              </h2>
              <div className="space-y-8">
                {[
                  { period: '2021 – 2025', role: 'Dean of the Faculty of Engineering', org: 'International University Of Technology, Twintech' },
                  { period: '2015 – 2016', role: 'Head of Department of Civil Engineering', org: 'Al-Andalus University' },
                  { period: '2013 – 2015', role: 'Dean of the Faculty of Engineering', org: 'AL Nasser University' },
                  { period: '2011 – Now', role: 'Lecturer', org: "Sana'a University" },
                  { period: '2009 – 2010', role: 'Lecturer', org: "University of Nottingham Malaysia Campus" },
                  { period: '2007 – 2011', role: 'Lecturer', org: "Kuala Lumpur Infrastructure University College" },
                ].map((exp, i) => (
                  <div key={i} className="relative pl-6 border-l-2 border-indigo-600/20">
                    <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-indigo-600" />
                    <span className="text-xs font-mono text-indigo-600 block mb-1">{exp.period}</span>
                    <h3 className="text-lg font-bold mb-1">{exp.role}</h3>
                    <p className="text-sm opacity-60">{exp.org}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Publications */}
            <section>
              <h2 className="text-xs font-mono tracking-widest uppercase opacity-40 mb-8 border-b border-[#141414]/10 pb-2">
                {lang === 'ar' ? 'المنشورات العلمية' : 'PUBLICATIONS'}
              </h2>
              <div className="space-y-8">
                <div className="group">
                  <div className="flex items-center gap-2 text-indigo-600 mb-2">
                    <Book size={16} />
                    <span className="text-xs font-mono font-bold uppercase">Published Book</span>
                  </div>
                  <h3 className="text-lg font-bold leading-snug">
                    "Introduction to Bridge Engineering", Sana'a University, 2015.
                  </h3>
                </div>
                
                <div>
                  <h3 className="text-sm font-bold uppercase mb-4 opacity-70">{lang === 'ar' ? 'أوراق بحثية مختارة' : 'Selected Journal Papers'}</h3>
                  <div className="space-y-6">
                    {[
                      { title: 'Physical, Hydraulic, and Mineralogical Characterization study of Traditional Qadad Material', journal: 'Journal of Science and Technology', year: '2025' },
                      { title: 'Student Perceptions of Quality Education in Faculty of Engineering', journal: 'Studies in University Education', year: '2020' },
                      { title: 'Comparison of Bridge Codes Loading with Actual Overloading Track in Yemen', journal: 'Academic Journal of Science', year: '2014' },
                      { title: 'Experimental Study of Externally Prestressed Segmental Beam under Torsion', journal: 'Journal of Engineering Structures', year: '2010' }
                    ].map((pub, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <FileText size={18} className="shrink-0 mt-1 opacity-30" />
                        <div>
                          <p className="text-sm font-bold leading-relaxed mb-1">{pub.title}</p>
                          <p className="text-xs opacity-50 font-mono">{pub.journal} • {pub.year}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Research & Supervision */}
            <section>
              <h2 className="text-xs font-mono tracking-widest uppercase opacity-40 mb-8 border-b border-[#141414]/10 pb-2">
                {lang === 'ar' ? 'الأبحاث والإشراف' : 'RESEARCH & SUPERVISION'}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold uppercase mb-4 opacity-70">{lang === 'ar' ? 'الأبحاث الجارية' : 'Ongoing Research'}</h3>
                  <ul className="grid grid-cols-1 gap-2 text-sm opacity-80">
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-indigo-600 rounded-full" /> Traditional Qadad material</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-indigo-600 rounded-full" /> Seismic Performance of Yemeni Buildings</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-indigo-600 rounded-full" /> Recycled Concrete Properties</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase mb-4 opacity-70">{lang === 'ar' ? 'إشراف الدراسات العليا' : 'Graduate Supervision'}</h3>
                  <p className="text-sm opacity-60 leading-relaxed">
                    {lang === 'ar' 
                      ? 'يشرف د. محمد حالياً على عدد من مرشحي الدكتوراه والماجستير في مجالات تقييم أداء الخرسانة، تقوية الجسور، والتحليل الإنشائي.'
                      : 'Supervising multiple PhD and Master\'s candidates in fields of concrete performance evaluation, bridge strengthening, and structural analysis.'}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#141414] text-[#E4E3E0]/40 py-12 px-6 text-center text-xs font-mono tracking-widest uppercase">
        © {new Date().getFullYear()} DR. MOHAMMAD AL-GORAFI / M.G. ENGINEERING
      </footer>
    </div>
  );
}
