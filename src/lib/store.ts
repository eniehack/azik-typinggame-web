import { writable, type Writable } from 'svelte/store';

type Keyword = {
	roma: string;
	kana: string;
};

export const keywords: Keyword[] = [
	{
		roma: 'kkmedaru',
		kana: 'きんめだる'
	},
	{
		roma: 'ka;ke',
		kana: 'かっけ'
	},
	{
		roma: 'suta:to',
		kana: 'スタート'
	},
	{
		roma: 'kzzi',
		kana: 'かんじ'
	},
	{
		roma: 'kqtp',
		kana: 'かいとう'
	},
	{
		roma: 'sq',
		kana: 'さい'
	},
	{
		roma: 'swkq',
		kana: 'せいかい'
	},
	{
		roma: 'sw',
		kana: 'せい'
	}
];

export const keyword: Writable<Keyword> = writable(
	keywords[Math.ceil(Math.random() * keywords.length)]
);
export const remainRoma: Writable<string> = writable('');
