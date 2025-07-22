import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [investmentAmount, setInvestmentAmount] = useState(5000000);
  const [developmentPeriod, setDevelopmentPeriod] = useState(5);

  const calculatePotential = () => {
    const annualReturn = 0.15;
    const totalReturn = investmentAmount * Math.pow(1 + annualReturn, developmentPeriod);
    const profit = totalReturn - investmentAmount;
    return { totalReturn, profit, annualReturn };
  };

  const { totalReturn, profit, annualReturn } = calculatePotential();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                <Icon name="Mountain" size={20} className="text-white" />
              </div>
              <span className="text-xl font-semibold text-charcoal">PREMIUM LAND</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#участок" className="text-slate-600 hover:text-gold transition-colors">Участок</a>
              <a href="#расположение" className="text-slate-600 hover:text-gold transition-colors">Расположение</a>
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
            src="/img/4a03bb6f-2e64-4d25-a72c-324e67d1f979.jpg" 
            alt="Премиальный участок земли" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-6 bg-gold text-white px-4 py-2 text-sm">
            ЭКСКЛЮЗИВНОЕ ПРЕДЛОЖЕНИЕ
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Элитный участок<br />
            <span className="text-gold">для развития</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-200 max-w-2xl mx-auto">
            Уникальная возможность инвестировать в перспективную недвижимость 
            с высоким потенциалом роста стоимости
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gold hover:bg-gold-dark text-white px-8 py-4 text-lg">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать доходность
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal px-8 py-4 text-lg">
              <Icon name="MapPin" size={20} className="mr-2" />
              Показать на карте
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Преимущества участка
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Исключительные характеристики для успешного инвестирования
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="TrendingUp" size={32} className="text-gold" />
                </div>
                <CardTitle className="text-2xl text-charcoal">Высокая доходность</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-4">
                  Ожидаемая доходность до 15% годовых с учетом роста стоимости земли
                </p>
                <Badge variant="secondary" className="bg-gold/10 text-gold">
                  15% годовых
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={32} className="text-gold" />
                </div>
                <CardTitle className="text-2xl text-charcoal">Премиальное расположение</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-4">
                  Стратегическое расположение в развивающемся районе с отличной инфраструктурой
                </p>
                <Badge variant="secondary" className="bg-gold/10 text-gold">
                  А+ локация
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-gold" />
                </div>
                <CardTitle className="text-2xl text-charcoal">Юридическая чистота</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-4">
                  Все документы готовы, полное право собственности, никаких обременений
                </p>
                <Badge variant="secondary" className="bg-gold/10 text-gold">
                  100% готов
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="калькулятор" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Калькулятор доходности
            </h2>
            <p className="text-xl text-slate-600">
              Рассчитайте потенциальную прибыль от инвестиций в земельный участок
            </p>
          </div>
          
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-charcoal">
                Расчет инвестиционного потенциала
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="investment" className="text-lg font-medium">
                    Сумма инвестиций (₽)
                  </Label>
                  <Input
                    id="investment"
                    type="number"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                    className="text-lg h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="period" className="text-lg font-medium">
                    Период развития (лет)
                  </Label>
                  <Input
                    id="period"
                    type="number"
                    value={developmentPeriod}
                    onChange={(e) => setDevelopmentPeriod(Number(e.target.value))}
                    className="text-lg h-12"
                    min="1"
                    max="20"
                  />
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <p className="text-sm text-slate-600">Годовая доходность</p>
                  <p className="text-3xl font-bold text-gold">
                    {(annualReturn * 100).toFixed(0)}%
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-slate-600">Общая прибыль</p>
                  <p className="text-3xl font-bold text-green-600">
                    ₽{profit.toLocaleString('ru-RU')}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-slate-600">Итоговая сумма</p>
                  <p className="text-3xl font-bold text-charcoal">
                    ₽{totalReturn.toLocaleString('ru-RU')}
                  </p>
                </div>
              </div>

              <div className="text-center pt-4">
                <Button className="bg-gold hover:bg-gold-dark text-white px-8 py-4 text-lg">
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать расчет
                </Button>
              </div>
            </CardContent>
          </Card>
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
                <p className="text-xl text-slate-600">Фотографии и визуализации земельного участка</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative overflow-hidden rounded-lg shadow-lg group">
                  <img 
                    src="/img/4a03bb6f-2e64-4d25-a72c-324e67d1f979.jpg" 
                    alt="Aerial view" 
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-semibold">Вид с высоты</h3>
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
                <p className="text-xl text-slate-600">Стратегическое местоположение с развитой инфраструктурой</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Car" size={24} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-charcoal mb-2">Транспортная доступность</h3>
                      <p className="text-slate-600">5 минут до крупной автомагистрали, удобный подъезд</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Zap" size={24} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-charcoal mb-2">Коммуникации</h3>
                      <p className="text-slate-600">Электричество, газ, водоснабжение на границе участка</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Building" size={24} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-charcoal mb-2">Инфраструктура</h3>
                      <p className="text-slate-600">Школы, больницы, торговые центры в 10-15 минутах</p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="/img/e3451d2b-e5c7-4809-9780-c78f06b35e14.jpg" 
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
                      <p className="font-semibold text-charcoal">+7 (495) 123-45-67</p>
                      <p className="text-sm text-slate-600">Звонки принимаются с 9:00 до 21:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Icon name="Mail" size={24} className="text-gold" />
                    <div>
                      <p className="font-semibold text-charcoal">info@premiumland.ru</p>
                      <p className="text-sm text-slate-600">Ответим в течение часа</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Icon name="MapPin" size={24} className="text-gold" />
                    <div>
                      <p className="font-semibold text-charcoal">Офис продаж</p>
                      <p className="text-sm text-slate-600">Москва, ул. Тверская, 15, офис 201</p>
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
                <Icon name="Mountain" size={20} className="text-white" />
              </div>
              <span className="text-2xl font-semibold">PREMIUM LAND</span>
            </div>
            <p className="text-slate-300 mb-6">
              Эксклюзивные земельные участки для успешных инвестиций
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
              © 2024 Premium Land. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;