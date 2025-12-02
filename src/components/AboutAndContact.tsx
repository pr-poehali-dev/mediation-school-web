import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface Teacher {
  name: string;
  position: string;
  experience: string;
  image: string;
}

interface AboutAndContactProps {
  scrollToSection: (section: string) => void;
}

const AboutAndContact = ({ scrollToSection }: AboutAndContactProps) => {
  const teachers: Teacher[] = [
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

  return (
    <>
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
    </>
  );
};

export default AboutAndContact;