import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface HeroAndAdvantagesProps {
  scrollToSection: (section: string) => void;
}

const HeroAndAdvantages = ({ scrollToSection }: HeroAndAdvantagesProps) => {
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

  return (
    <>
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
    </>
  );
};

export default HeroAndAdvantages;