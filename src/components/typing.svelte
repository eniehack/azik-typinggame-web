<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
    import type { Keyword } from './keyword';

    export let keywords: Keyword[];
    let current: number = 0;

    const keyword: Writable<Keyword> = writable(
    	keywords[Math.ceil(Math.random() * keywords.length)]
    );

    const remainRoma: Writable<string> = writable('');

	const keypressed = (event: KeyboardEvent) => {
		if ($keyword.roma.charAt(current) == event.key) {
			current++;
			remainRoma.set($keyword.roma.substring(current, $keyword.roma.length));
		}
	};

	remainRoma.subscribe(() => {
		if ($remainRoma.length === 0) {
			$keyword = keywords[Math.floor(Math.random() * keywords.length)];
			$remainRoma = $keyword.roma;
			current = 0;
		}
	});
</script>

<svelte:document on:keydown={keypressed} />

<p>{$keyword.kana}</p>
<p>{$remainRoma}</p>