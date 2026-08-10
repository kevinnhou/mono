// biome-ignore lint/correctness/noUndeclaredVariables: WXT injects this global.
export default defineContentScript({
	matches: ["*://*.google.com/*"],
	main() {
		// Content script behavior will be added with the extension feature.
	},
});
