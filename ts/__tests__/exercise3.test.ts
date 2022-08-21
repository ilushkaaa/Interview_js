import { getLocale, Locale } from '../exercise3';

const locale: Locale = {
	'test': {
		'page': {
			'title': 'Hello, world',
			'subtitle': 'Test'
		}
	}
}

test('execise3 test1', () => {
  expect(getLocale(locale, 'test.page.title')).toBe('Hello, world');
});

test('execise3 test2', () => {
  expect(getLocale(locale, 'test.page.title.subtitle')).toBe('');
})

test('execise3 test3', () => {
  expect(getLocale(locale, '')).toBe('');
})