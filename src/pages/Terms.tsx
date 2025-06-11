
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms = () => {
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
            Пользовательское соглашение
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
                Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует отношения между пользователем и администрацией сервиса Мэ́тчворк при использовании Telegram-бота @workswipematch_bot.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Используя сервис, вы подтверждаете, что ознакомились с условиями настоящего Соглашения и согласны их соблюдать.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-gray-900 mb-4">
                2. Описание сервиса
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Мэ́тчворк — это платформа для поиска работы, которая позволяет:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Просматривать вакансии в формате свайпов</li>
                <li>Создавать матчи с работодателями при взаимном интересе</li>
                <li>Получать персонализированные предложения о работе</li>
                <li>Взаимодействовать с HR-специалистами через Telegram</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-gray-900 mb-4">
                3. Права и обязанности пользователя
              </h2>
              <h3 className="text-xl font-display font-medium text-gray-900 mb-3">
                3.1. Пользователь имеет право:
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Бесплатно использовать основные функции сервиса</li>
                <li>Получать техническую поддержку</li>
                <li>Удалить свой аккаунт в любое время</li>
                <li>Обращаться с жалобами и предложениями</li>
              </ul>

              <h3 className="text-xl font-display font-medium text-gray-900 mb-3">
                3.2. Пользователь обязуется:
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Предоставлять достоверную информацию о себе</li>
                <li>Не использовать сервис в незаконных целях</li>
                <li>Соблюдать этику общения с работодателями</li>
                <li>Не создавать множественные аккаунты</li>
                <li>Не распространять спам или неприемлемый контент</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-gray-900 mb-4">
                4. Права и обязанности администрации
              </h2>
              <h3 className="text-xl font-display font-medium text-gray-900 mb-3">
                4.1. Администрация имеет право:
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Модерировать контент и вакансии</li>
                <li>Блокировать аккаунты при нарушении правил</li>
                <li>Изменять функциональность сервиса</li>
                <li>Приостанавливать работу сервиса для технического обслуживания</li>
              </ul>

              <h3 className="text-xl font-display font-medium text-gray-900 mb-3">
                4.2. Администрация обязуется:
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Обеспечивать работоспособность сервиса</li>
                <li>Защищать персональные данные пользователей</li>
                <li>Предоставлять техническую поддержку</li>
                <li>Уведомлять об изменениях в Соглашении</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-gray-900 mb-4">
                5. Ответственность сторон
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Администрация не несет ответственности за:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Достоверность информации, предоставленной работодателями</li>
                <li>Результат трудоустройства через сервис</li>
                <li>Действия третьих лиц (работодателей, HR-агентств)</li>
                <li>Временные технические сбои</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-gray-900 mb-4">
                6. Интеллектуальная собственность
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Все права на сервис Мэ́тчворк, включая дизайн, программный код и товарные знаки, принадлежат администрации. Использование материалов сервиса без письменного разрешения запрещено.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-gray-900 mb-4">
                7. Изменение условий
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Администрация оставляет за собой право изменять условия настоящего Соглашения. Уведомление об изменениях размещается в боте. Продолжение использования сервиса после внесения изменений означает согласие с новыми условиями.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-gray-900 mb-4">
                8. Контактная информация
              </h2>
              <p className="text-gray-700 leading-relaxed">
                По вопросам, связанным с настоящим Соглашением, обращайтесь:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">Email: legal@matchwork.ru</p>
                <p className="text-gray-700">Telegram: @matchwork_support</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Terms;
