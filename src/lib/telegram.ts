/**
 * Утилита для отправки данных форм в Telegram
 * 
 * Для работы нужно:
 * 1. Создать бота через @BotFather в Telegram
 * 2. Получить Bot Token
 * 3. Получить свой Chat ID через @userinfobot
 * 4. Добавить переменные окружения или указать напрямую ниже
 */

// ВАЖНО: Замените эти значения на свои!
// Или настройте через переменные окружения в Vite
const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || "7325398202:AAGIlW2xUS3_xQCBBZgCKokJHDHfbmfEZQ";
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID || "72182936";

// Диагностика (удалите после проверки)
console.log("🔍 Диагностика Telegram:");
console.log("Token установлен:", !!TELEGRAM_BOT_TOKEN);
console.log("Chat ID установлен:", !!TELEGRAM_CHAT_ID);
console.log("Token первые 10 символов:", TELEGRAM_BOT_TOKEN.substring(0, 10) + "...");
console.log("Chat ID:", TELEGRAM_CHAT_ID);

/**
 * Интерфейс для данных контактной формы
 */
export interface ContactFormData {
  name: string;
  contactMethod: "phone" | "telegram";
  contact: string;
  email?: string;
  message?: string;
}

/**
 * Интерфейс для данных формы запроса КП
 */
export interface QuoteFormData {
  email: string;
  website?: string;
  task?: string;
}

/**
 * Форматирует сообщение для контактной формы
 */
function formatContactMessage(data: ContactFormData): string {
  const contactLabel = data.contactMethod === "phone" ? "📱 Телефон" : "💬 Telegram";
  
  let message = `🎓 <b>Новый вопрос с сайта Campus Connect</b>\n\n`;
  message += `👤 <b>Имя:</b> ${data.name}\n`;
  message += `${contactLabel}: ${data.contact}\n`;
  
  if (data.email) {
    message += `📧 <b>Email:</b> ${data.email}\n`;
  }
  
  if (data.message) {
    message += `\n💬 <b>Вопрос:</b>\n${data.message}`;
  }
  
  return message;
}

/**
 * Форматирует сообщение для формы запроса КП
 */
function formatQuoteMessage(data: QuoteFormData): string {
  let message = `💼 <b>Запрос коммерческого предложения</b>\n\n`;
  message += `📧 <b>Email:</b> ${data.email}\n`;
  
  if (data.website) {
    message += `🌐 <b>Сайт:</b> ${data.website}\n`;
  }
  
  if (data.task) {
    message += `\n📝 <b>Описание задачи:</b>\n${data.task}`;
  }
  
  return message;
}

/**
 * Отправляет сообщение в Telegram
 */
async function sendToTelegram(message: string): Promise<boolean> {
  // Проверка настроек
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error("❌ Telegram не настроен! Укажите TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID");
    console.log("📝 Данные формы:", message);
    console.log("🔧 Текущие значения:");
    console.log("   - Token:", TELEGRAM_BOT_TOKEN ? "Установлен" : "НЕ установлен");
    console.log("   - Chat ID:", TELEGRAM_CHAT_ID ? "Установлен" : "НЕ установлен");
    throw new Error("Telegram не настроен. Проверьте консоль для инструкций.");
  }

  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "HTML",
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("❌ Ошибка Telegram API:", error);
      throw new Error(`Ошибка отправки: ${error.description || "Неизвестная ошибка"}`);
    }

    return true;
  } catch (error) {
    console.error("❌ Ошибка при отправке в Telegram:", error);
    throw error;
  }
}

/**
 * Отправляет данные контактной формы в Telegram
 */
export async function sendContactForm(data: ContactFormData): Promise<boolean> {
  const message = formatContactMessage(data);
  return sendToTelegram(message);
}

/**
 * Отправляет данные формы запроса КП в Telegram
 */
export async function sendQuoteForm(data: QuoteFormData): Promise<boolean> {
  const message = formatQuoteMessage(data);
  return sendToTelegram(message);
}
