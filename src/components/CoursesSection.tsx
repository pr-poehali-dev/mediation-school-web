import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface Course {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  format: string;
  description: string;
  modules: string[];
  outcomes: string[];
}

interface CoursesSectionProps {
  courses: Course[];
  selectedCourse: string | null;
  openCourseDetails: (courseId: string) => void;
  scrollToSection: (section: string) => void;
}

const CoursesSection = ({ courses, selectedCourse, openCourseDetails, scrollToSection }: CoursesSectionProps) => {
  return (
    <>
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
    </>
  );
};

export default CoursesSection;