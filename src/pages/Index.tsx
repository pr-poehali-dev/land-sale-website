import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                <Icon name="Waves" size={20} className="text-white" />
              </div>
              <span className="text-xl font-semibold text-charcoal">SEA LAND</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#участок" className="text-slate-600 hover:text-gold transition-colors">Участок</a>
              <a href="#бизнес" className="text-slate-600 hover:text-gold transition-colors">Бизнес</a>
              <a href="#галерея" className="text-slate-600 hover:text-gold transition-colors">Галерея</a>
              <a href="#документы" className="text-slate-600 hover:text-gold transition-colors">Документы</a>
              <a href="#контакты" className="text-slate-600 hover:text-gold transition-colors">Контакты</a>
            </nav>
            <Button className="bg-gold hover:bg-gold-dark text-white">
              <Icon name="Phone" size={18} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/img/197fba34-9a93-4045-b1d8-34a601407081.jpg" 
            alt="Участок у моря в Крыму" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-6 bg-gold text-white px-4 py-2 text-sm">
            ПЕРВАЯ ЛИНИЯ МОРЯ
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Участок у моря<br />
            <span className="text-gold">в Крыму</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-200 max-w-2xl mx-auto">
            1,5 метра до береговой линии Азовского моря. 
            Идеально для туристического бизнеса — глэмпинга или мини-отеля
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gold hover:bg-gold-dark text-white px-8 py-4 text-lg">
              <Icon name="Building2" size={20} className="mr-2" />
              Возможности бизнеса
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal px-8 py-4 text-lg">
              <Icon name="MapPin" size={20} className="mr-2" />
              Показать на карте
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="участок" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Характеристики участка
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Уникальный участок для туристического бизнеса на первой линии моря
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Waves" size={32} className="text-gold" />
                </div>
                <CardTitle className="text-2xl text-charcoal">Первая линия моря</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-4">
                  Всего 1,5 метра до береговой линии Азовского моря с прямым выходом к пляжу
                </p>
                <Badge variant="secondary" className="bg-gold/10 text-gold">
                  6 соток
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mountain" size={32} className="text-gold" />
                </div>
                <CardTitle className="text-2xl text-charcoal">Трёхуровневый участок</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-4">
                  Каскадная застройка с видом на море из каждого домика. До 6 глэмпингов
                </p>
                <Badge variant="secondary" className="bg-gold/10 text-gold">
                  70% застройки
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Car" size={32} className="text-gold" />
                </div>
                <CardTitle className="text-2xl text-charcoal">Готовая инфраструктура</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-4">
                  Асфальт до участка, электричество, вода и интернет по границе
                </p>
                <Badge variant="secondary" className="bg-gold/10 text-gold">
                  25 км до моста
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Opportunities */}
      <section id="бизнес" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Возможности для бизнеса
            </h2>
            <p className="text-xl text-slate-600">
              Уникальная возможность для запуска туристического проекта
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Tent" size={24} className="text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-2">Эко-глэмпинг</h3>
                  <p className="text-slate-600">Панорамные домики с видом на море. Полная приватность и уникальная атмосфера</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Building2" size={24} className="text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-2">Мини-отель</h3>
                  <p className="text-slate-600">Комфортабельные номера с террасами. Высокая арендная привлекательность</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Utensils" size={24} className="text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-2">Общий бассейн и кафе</h3>
                  <p className="text-slate-600">Дополнительные зоны отдыха, СПА-зона для повышения доходности</p>
                </div>
              </div>
            </div>
            
            <Card className="border-0 shadow-xl p-8">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl text-charcoal">Потенциал участка</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="space-y-2">
                    <p className="text-2xl font-bold text-gold">6</p>
                    <p className="text-sm text-slate-600">глэмпингов</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-2xl font-bold text-gold">100%</p>
                    <p className="text-sm text-slate-600">вид на море</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-2xl font-bold text-gold">25 км</p>
                    <p className="text-sm text-slate-600">до моста</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-2xl font-bold text-gold">1,5 м</p>
                    <p className="text-sm text-slate-600">до пляжа</p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="text-center">
                  <p className="text-lg font-semibold text-charcoal mb-2">Бухта Булганак</p>
                  <p className="text-slate-600">Вода прогревается раньше и держит тепло дольше</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery & Location */}
      <section id="галерея" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="gallery" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="gallery" className="text-lg">Галерея</TabsTrigger>
              <TabsTrigger value="location" className="text-lg">Расположение</TabsTrigger>
            </TabsList>
            
            <TabsContent value="gallery" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-charcoal mb-4">Галерея участка</h2>
                <p className="text-xl text-slate-600">Фотографии участка у моря в Крыму</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative overflow-hidden rounded-lg shadow-lg group">
                  <img 
                    src="/img/197fba34-9a93-4045-b1d8-34a601407081.jpg" 
                    alt="Seaside view" 
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-semibold">Вид на море</h3>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-lg group">
                  <img 
                    src="/img/e3451d2b-e5c7-4809-9780-c78f06b35e14.jpg" 
                    alt="Location map" 
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-semibold">Карта расположения</h3>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="location" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-charcoal mb-4">Расположение</h2>
                <p className="text-xl text-slate-600">Первая линия пляжа Азовского моря в бухте Булганак</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Waves" size={24} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-charcoal mb-2">Песчаный пляж</h3>
                      <p className="text-slate-600">Пологий вход в море, идеально для семейного отдыха</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Thermometer" size={24} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-charcoal mb-2">Теплая вода</h3>
                      <p className="text-slate-600">Бухта Булганак — вода прогревается раньше и дольше остается теплой</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Car" size={24} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-charcoal mb-2">Удобный подъезд</h3>
                      <p className="text-slate-600">25 км до Крымского моста по новой асфальтированной дороге</p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="/img/197fba34-9a93-4045-b1d8-34a601407081.jpg" 
                    alt="Location advantages" 
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Documents & Contacts */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Documents */}
            <div id="документы">
              <h2 className="text-4xl font-bold text-charcoal mb-8">Документы</h2>
              <div className="space-y-4">
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="flex items-center justify-between p-6">
                    <div className="flex items-center space-x-4">
                      <Icon name="FileText" size={24} className="text-gold" />
                      <div>
                        <h3 className="font-semibold text-charcoal">Свидетельство о собственности</h3>
                        <p className="text-sm text-slate-600">PDF, 2.1 МБ</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Icon name="Download" size={16} className="mr-2" />
                      Скачать
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="flex items-center justify-between p-6">
                    <div className="flex items-center space-x-4">
                      <Icon name="Map" size={24} className="text-gold" />
                      <div>
                        <h3 className="font-semibold text-charcoal">Кадастровый план</h3>
                        <p className="text-sm text-slate-600">PDF, 1.8 МБ</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Icon name="Download" size={16} className="mr-2" />
                      Скачать
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="flex items-center justify-between p-6">
                    <div className="flex items-center space-x-4">
                      <Icon name="CheckCircle" size={24} className="text-gold" />
                      <div>
                        <h3 className="font-semibold text-charcoal">Справка о назначении</h3>
                        <p className="text-sm text-slate-600">PDF, 0.9 МБ</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Icon name="Download" size={16} className="mr-2" />
                      Скачать
                    </Button>
                  </CardContent>
                </Card>
                
                <div className="mt-6 p-4 bg-gold/10 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Shield" size={20} className="text-gold" />
                    <span className="font-semibold text-charcoal">Прямая продажа от собственника</span>
                  </div>
                  <p className="text-sm text-slate-600">
                    Все документы готовы. Полное право собственности, никаких обременений.
                  </p>
                </div>
              </div>
            </div>

            {/* Contacts */}
            <div id="контакты">
              <h2 className="text-4xl font-bold text-charcoal mb-8">Контакты</h2>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-charcoal">Свяжитесь с нами</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Icon name="Phone" size={24} className="text-gold" />
                    <div>
                      <p className="font-semibold text-charcoal">+7 (978) 123-45-67</p>
                      <p className="text-sm text-slate-600">Звонки принимаются с 9:00 до 21:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Icon name="Mail" size={24} className="text-gold" />
                    <div>
                      <p className="font-semibold text-charcoal">info@sealand-crimea.ru</p>
                      <p className="text-sm text-slate-600">Ответим в течение часа</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Icon name="MapPin" size={24} className="text-gold" />
                    <div>
                      <p className="font-semibold text-charcoal">Участок в Крыму</p>
                      <p className="text-sm text-slate-600">Бухта Булганак, первая линия моря</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <Button className="w-full bg-gold hover:bg-gold-dark text-white py-4 text-lg">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Записаться на просмотр
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                <Icon name="Waves" size={20} className="text-white" />
              </div>
              <span className="text-2xl font-semibold">SEA LAND</span>
            </div>
            <p className="text-slate-300 mb-6">
              Участок у моря в Крыму для туристического бизнеса
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-slate-300 hover:text-gold transition-colors">
                <Icon name="Phone" size={24} />
              </a>
              <a href="#" className="text-slate-300 hover:text-gold transition-colors">
                <Icon name="Mail" size={24} />
              </a>
              <a href="#" className="text-slate-300 hover:text-gold transition-colors">
                <Icon name="MessageCircle" size={24} />
              </a>
            </div>
            <Separator className="my-8 bg-slate-700" />
            <p className="text-slate-400 text-sm">
              © 2024 Sea Land. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;