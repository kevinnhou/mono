import { NativeTabs } from "expo-router/unstable-native-tabs";
import { useThemeColor } from "heroui-native";
import type { ImageSourcePropType } from "react-native";

interface TabImageIcon {
	label: string;
	name: string;
	src: ImageSourcePropType;
}

interface TabSymbolIcon {
	label: string;
	md: "search";
	name: string;
	role: "search";
	sf: "magnifyingglass";
}

const APP_TABS = [
	{
		label: "Pulse",
		name: "index",
		src: require("../../assets/tab-icons/lucide-pulse@4x.png"),
	},
	{
		label: "Social",
		name: "social",
		src: require("../../assets/tab-icons/lucide-social@4x.png"),
	},
	{
		label: "Insights",
		name: "insights",
		src: require("../../assets/tab-icons/lucide-insights@4x.png"),
	},
	{
		label: "Search",
		name: "search",
		role: "search",
		md: "search",
		sf: "magnifyingglass",
	},
] as const satisfies readonly (TabImageIcon | TabSymbolIcon)[];

export default function TabsLayout() {
	const themeColourAccent = useThemeColor("accent");
	const themeColourForeground = useThemeColor("foreground");
	const themeColourBackground = useThemeColor("background");

	return (
		<NativeTabs
			backgroundColor={themeColourBackground}
			iconColor={{
				default: themeColourForeground,
				selected: themeColourAccent,
			}}
			labelStyle={{
				default: { color: themeColourForeground },
				selected: { color: themeColourAccent },
			}}
			tintColor={themeColourAccent}
		>
			{APP_TABS.map((tab) => (
				<NativeTabs.Trigger
					key={tab.name}
					name={tab.name}
					{...("role" in tab ? { role: tab.role } : {})}
				>
					<NativeTabs.Trigger.Label>{tab.label}</NativeTabs.Trigger.Label>
					{"src" in tab ? (
						<NativeTabs.Trigger.Icon
							renderingMode="template"
							selectedColor={themeColourAccent}
							src={tab.src}
						/>
					) : (
						<NativeTabs.Trigger.Icon
							md={tab.md}
							selectedColor={themeColourAccent}
							sf={tab.sf}
						/>
					)}
				</NativeTabs.Trigger>
			))}
		</NativeTabs>
	);
}
