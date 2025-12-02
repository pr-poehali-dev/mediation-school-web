import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroAndAdvantages from '@/components/HeroAndAdvantages';
import CoursesSection from '@/components/CoursesSection';
import AboutAndContact from '@/components/AboutAndContact';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const courses = [
    {
      id: 'beginner',
      title: 'Медиатор с нуля',
      subtitle: 'Для начинающих',
      duration: '120 часов',
      format: 'Онлайн',
      description: 'Освойте профессию медиатора с нуля. Получите все необходимые знания и навыки для успешной практики.',
      modules: [
        'Введение в медиацию и конфликтологию',
        'Психология конфликта',
        'Техники ведения переговоров',
        'Практические кейсы',
        'Правовые основы медиации',
        'Этика медиатора'
      ],
      outcomes: [
        'Диплом о профессиональной переподготовке',
        'Запись в реестр медиаторов',
        'Практические навыки ведения медиации',
        'Портфолио разобранных кейсов'
      ]
    },
    {
      id: 'advanced',
      title: 'Повышение квалификации',
      subtitle: 'Для практикующих медиаторов',
      duration: '72 часа',
      format: 'Онлайн',
      description: 'Углубите свои знания и освойте продвинутые техники медиации.',
      modules: [
        'Сложные конфликты и их разрешение',
        'Медиация в бизнесе',
        'Семейная медиация',
        'Кросс-культурная медиация',
        'Супервизия и саморазвитие'
      ],
      outcomes: [
        'Удостоверение о повышении квалификации',
        'Новые техники и инструменты',
        'Сертификат международного образца',
        'Доступ к профессиональному сообществу'
      ]
    },
    {
      id: 'requalification',
      title: 'Переквалификация',
      subtitle: 'Для юристов, психологов, HR',
      duration: '250 часов',
      format: 'Онлайн',
      description: 'Получите новую профессию на базе имеющегося образования.',
      modules: [
        'Теория и практика медиации',
        'Специализированные виды медиации',
        'Правовое регулирование',
        'Психологические аспекты',
        'Бизнес-медиация',
        'Подготовка к аттестации'
      ],
      outcomes: [
        'Диплом о профессиональной переподготовке',
        'Право на осуществление медиативной деятельности',
        'Включение в реестр медиаторов',
        'Методические материалы'
      ]
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const openCourseDetails = (courseId: string) => {
    setSelectedCourse(courseId);
    scrollToSection('courses');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation scrollToSection={scrollToSection} />
      <HeroAndAdvantages scrollToSection={scrollToSection} />
      <CoursesSection 
        courses={courses}
        selectedCourse={selectedCourse}
        openCourseDetails={openCourseDetails}
        scrollToSection={scrollToSection}
      />
      <AboutAndContact scrollToSection={scrollToSection} />
    </div>
  );
};

export default Index;