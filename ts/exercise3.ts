export type Locale = Record<string, unknown>;

/**
 * Возвращает значение по ключу. Если ключ не найден, то возвращает пустую строку
 * @param locale файл локализации
 * @param key ключ в файле локализации вида 'test.page.title'
 * @returns строка локализация, найденная по ключу
 */
export function getLocale(locale: Locale, key: string): string {
  return '';
}