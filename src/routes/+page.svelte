<script lang="ts">
	import { keyword, keywords, remainRoma } from '$lib/store';

	let current: number = 0;

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

<svelte:head>
	<title>AZIKタイピングゲーム</title>
</svelte:head>

<svelte:document on:keydown={keypressed} />

<p>{$keyword.kana}</p>
<p>{$remainRoma}</p>
