import { Stack } from "expo-router";

export default function SearchIndex() {
	return (
		<>
			<Stack.Screen.Title>Search</Stack.Screen.Title>
			<Stack.SearchBar
				// onChangeText={() => {}}
				placeholder="Search"
				placement="automatic"
			/>
			{/* <ScrollView></ScrollView> */}
		</>
	);
}
