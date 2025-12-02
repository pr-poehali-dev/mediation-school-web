import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

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

  const advantages = [
    {
      icon: 'Video',
      title: 'Живые вебинары',
      description: 'Онлайн-занятия с преподавателями в режиме реального времени'
    },
    {
      icon: 'PlayCircle',
      title: 'Библиотека записей',
      description: 'Доступ ко всем материалам курса без ограничений по времени'
    },
    {
      icon: 'FileCheck',
      title: 'Проверка заданий',
      description: 'Индивидуальная обратная связь по всем практическим работам'
    },
    {
      icon: 'Award',
      title: 'Официальный диплом',
      description: 'Диплом/сертификат установленного образца с занесением в реестр'
    },
    {
      icon: 'Users',
      title: 'Поддержка куратора',
      description: 'Персональное сопровождение на протяжении всего обучения'
    },
    {
      icon: 'BookOpen',
      title: 'Практический опыт',
      description: 'Разбор реальных кейсов и практика под руководством экспертов'
    }
  ];

  const teachers = [
    {
      name: 'Анна Петрова',
      position: 'Руководитель программы',
      experience: 'Более 15 лет практики в медиации, аккредитованный медиатор',
      image: '👩‍🏫'
    },
    {
      name: 'Михаил Соколов',
      position: 'Эксперт по бизнес-медиации',
      experience: '12 лет опыта, более 300 успешных кейсов',
      image: '👨‍💼'
    },
    {
      name: 'Елена Волкова',
      position: 'Специалист по семейной медиации',
      experience: 'Психолог, медиатор, 10 лет практики',
      image: '👩‍⚕️'
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
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Icon name="Scale" size={28} className="text-primary" />
              <span className="text-xl font-bold text-foreground">Рязанский Центр Медиации</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('courses')} className="text-sm font-medium hover:text-primary transition-colors">
                Курсы
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">
                О школе
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-primary transition-colors">
                Контакты
              </button>
              <Button onClick={() => scrollToSection('contact')}>Записаться</Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 text-sm px-4 py-1">Лицензированная образовательная программа</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              Онлайн-школа медиации
            </h1>
            <p className="text-2xl md:text-3xl text-primary font-semibold mb-6">
              Профессия будущего
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Получите востребованную профессию медиатора дистанционно. 
              Официальный диплом, признанная квалификация, практические навыки.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('courses')} className="text-lg px-8">
                Выбрать курс
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('about')} className="text-lg px-8">
                О центре
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Мы создали образовательную программу, которая сочетает академические знания с практическими навыками
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-scale-in border-2">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={advantage.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши программы обучения</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Выберите программу, которая подходит именно вам
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="hover:shadow-xl transition-all hover:-translate-y-1 border-2">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary">{course.subtitle}</Badge>
                    <Icon name="GraduationCap" size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{course.title}</CardTitle>
                  <CardDescription className="text-base">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Clock" size={16} className="text-muted-foreground" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Monitor" size={16} className="text-muted-foreground" />
                      <span>{course.format}</span>
                    </div>
                  </div>
                  <Button className="w-full" onClick={() => openCourseDetails(course.id)}>
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="courses" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {courses.map((course) => (
              <Card key={course.id} className={`mb-8 border-2 ${selectedCourse === course.id ? 'ring-2 ring-primary' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-3">{course.subtitle}</Badge>
                      <CardTitle className="text-3xl mb-3">{course.title}</CardTitle>
                      <CardDescription className="text-lg">{course.description}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={20} className="text-primary" />
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Monitor" size={20} className="text-primary" />
                      <span className="font-medium">{course.format}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Icon name="BookOpen" size={24} className="text-primary" />
                      Программа курса
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {course.modules.map((module, idx) => (
                        <div key={idx} className="flex items-start gap-2 p-3 bg-background rounded-lg">
                          <Icon name="CheckCircle2" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{module}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Icon name="Award" size={24} className="text-accent" />
                      Что вы получите
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {course.outcomes.map((outcome, idx) => (
                        <div key={idx} className="flex items-start gap-2 p-4 bg-accent/5 rounded-lg border border-accent/20">
                          <Icon name="Star" size={18} className="text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-medium">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div className="bg-primary/5 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Формат обучения</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Icon name="Video" size={20} className="text-primary mt-1" />
                        <div>
                          <p className="font-medium">Живые вебинары</p>
                          <p className="text-sm text-muted-foreground">Онлайн-занятия по расписанию с возможностью задать вопросы</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="PlayCircle" size={20} className="text-primary mt-1" />
                        <div>
                          <p className="font-medium">Библиотека записей</p>
                          <p className="text-sm text-muted-foreground">Все уроки сохраняются и доступны в любое время</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="FileEdit" size={20} className="text-primary mt-1" />
                        <div>
                          <p className="font-medium">Практические задания</p>
                          <p className="text-sm text-muted-foreground">Домашние работы с детальной обратной связью от преподавателей</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button size="lg" className="w-full md:w-auto" onClick={() => scrollToSection('contact')}>
                    Оставить заявку на курс
                    <Icon name="Send" size={18} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">О Рязанском Центре Медиации</h2>
              <p className="text-lg text-muted-foreground">
                Мы создаём профессиональное сообщество медиаторов и обучаем специалистов высшего уровня
              </p>
            </div>

            <Card className="mb-12 border-2">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">15+</div>
                    <p className="text-sm text-muted-foreground">лет опыта</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <p className="text-sm text-muted-foreground">выпускников</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">95%</div>
                    <p className="text-sm text-muted-foreground">трудоустроены</p>
                  </div>
                </div>

                <Separator className="my-8" />

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Target" size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Наша миссия</h4>
                      <p className="text-muted-foreground">
                        Развитие института медиации в России через качественное образование и профессиональное сообщество
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Shield" size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Официальная лицензия</h4>
                      <p className="text-muted-foreground">
                        Образовательная деятельность лицензирована. Выдаем дипломы государственного образца
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Users" size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Экспертная команда</h4>
                      <p className="text-muted-foreground">
                        Преподаватели — практикующие медиаторы с большим опытом успешных кейсов
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Наши преподаватели</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {teachers.map((teacher, idx) => (
                  <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="text-6xl mb-4">{teacher.image}</div>
                      <h4 className="font-semibold text-lg mb-1">{teacher.name}</h4>
                      <p className="text-sm text-primary font-medium mb-2">{teacher.position}</p>
                      <p className="text-sm text-muted-foreground">{teacher.experience}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Оставить заявку</h2>
              <p className="text-muted-foreground">
                Заполните форму, и наш специалист свяжется с вами для консультации
              </p>
            </div>

            <Card className="border-2">
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя *</label>
                    <Input placeholder="Иван Иванов" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email *</label>
                    <Input type="email" placeholder="ivan@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон *</label>
                    <Input type="tel" placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Какой курс вас интересует?</label>
                    <select className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background">
                      <option value="">Выберите программу</option>
                      <option value="beginner">Медиатор с нуля</option>
                      <option value="advanced">Повышение квалификации</option>
                      <option value="requalification">Переквалификация</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Комментарий</label>
                    <Textarea placeholder="Расскажите о себе и своих целях..." rows={4} />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Отправить заявку
                    <Icon name="Send" size={18} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Icon name="Mail" size={24} className="text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium mb-1">Email</p>
                  <p className="text-sm text-muted-foreground">info@mediation-rzn.ru</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Icon name="Phone" size={24} className="text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium mb-1">Телефон</p>
                  <p className="text-sm text-muted-foreground">+7 (4912) 123-456</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Icon name="MapPin" size={24} className="text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium mb-1">Адрес</p>
                  <p className="text-sm text-muted-foreground">г. Рязань</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Scale" size={24} />
                <span className="font-bold">РЦМ</span>
              </div>
              <p className="text-sm opacity-90">
                Рязанский Центр Медиации и Права
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Программы</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:opacity-100">Медиатор с нуля</a></li>
                <li><a href="#" className="hover:opacity-100">Повышение квалификации</a></li>
                <li><a href="#" className="hover:opacity-100">Переквалификация</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:opacity-100">О школе</a></li>
                <li><a href="#" className="hover:opacity-100">Преподаватели</a></li>
                <li><a href="#" className="hover:opacity-100">Лицензия</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>info@mediation-rzn.ru</li>
                <li>+7 (4912) 123-456</li>
                <li>г. Рязань</li>
              </ul>
            </div>
          </div>
          <Separator className="mb-8 opacity-20" />
          <div className="text-center text-sm opacity-75">
            <p>© 2024 Рязанский Центр Медиации и Права. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;