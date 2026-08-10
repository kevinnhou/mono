// biome-ignore-all lint: PASS

export default defineBackground(() => {
	void browser.sidePanel?.setPanelBehavior?.({ openPanelOnActionClick: true });
});
