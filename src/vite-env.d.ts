/// <reference types="vite/client" />

/**
 * Расширяем типы ImportMetaEnv для переменных окружения Vite
 */
interface ImportMetaEnv {
  readonly VITE_TELEGRAM_BOT_TOKEN: string;
  readonly VITE_TELEGRAM_CHAT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}