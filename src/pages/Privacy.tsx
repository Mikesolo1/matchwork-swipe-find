
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-brand-primary transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Вернуться на главную</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-8">
            Политика конфиденциальности
          </h1>
          
          <div className="prose prose-lg max-w-none font-body">
            <p className="text-gray-600 mb-6">
              Дата последнего обновления: 11 июня 2025 года
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-gray-900 mb-4">
                1. Общие положения
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сервиса Мэ́тчворк (далее — «Сервис»), доступного через Telegram-бот @workswipematch_bot.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Мы серьезно относимся к защите ваших персональных данных и обязуемся обеспечивать их безопасность в соответствии с действующим законодательством.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-gray-900 mb-4">
                2. Какие данные мы собираем
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                В процессе использования Сервиса мы можем собирать следующие категории персональных данных:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Данные профиля Telegram (имя пользователя, ID)</li>
                <li>Информация о профессиональных предпочтениях</li>
                <li>Данные о взаимодействии с вакансиями (свайпы, матчи)</li>
                <li>Резюме и контактная информация (при добровольном предоставлении)</li>
                <li>Техническая информация об использовании бота</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-gray-900 mb-4">
                3. Цели обработки данных
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Мы обрабатываем ваши персональные данные для следующих целей:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Предоставление услуг по поиску работы</li>
                <li>Подбор релевантных вакансий</li>
                <li>Организация взаимодействия с работодателями</li>
                <li>Улучшение качества сервиса</li>
                <li>Техническая поддержка пользователей</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-gray-900 mb-4">
                4. Передача данных третьим лицам
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Мы можем передавать ваши данные следующим категориям получателей:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Работодателям — только после вашего явного согласия (матча)</li>
                <li>HR-агентствам — в рамках предоставления услуг</li>
                <li>Техническим партнерам — для обеспечения работы платформы</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Мы не продаем и не передаем ваши персональные данные третьим лицам для их собственных маркетинговых целей.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-gray-900 mb-4">
                5. Безопасность данных
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Мы применяем современные технические и организационные меры для защиты ваших персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-gray-900 mb-4">
                6. Ваши права
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Вы имеете право:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Получать информацию о способах обработки ваших персональных данных</li>
                <li>Требовать уточнения, блокирования или уничтожения персональных данных</li>
                <li>Отзывать согласие на обработку персональных данных</li>
                <li>Обращаться в органы по защите прав субъектов персональных данных</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-gray-900 mb-4">
                7. Контактная информация
              </h2>
              <p className="text-gray-700 leading-relaxed">
                По вопросам обработки персональных данных обращайтесь:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">Email: privacy@matchwork.ru</p>
                <p className="text-gray-700">Telegram: @matchwork_support</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Privacy;
