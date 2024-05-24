import { useState } from "react";
import { StyleSheet, FlatList, Image, Platform, Pressable } from "react-native";

interface EmojiListProps {
  onSelect: (item: any) => unknown;
  onCloseModal: () => unknown;
}

const emoji = [
  { image: require("../assets/images/emoji1.png"), label: "100" },
  { image: require("../assets/images/emoji2.png"), label: "smile" },
  { image: require("../assets/images/emoji3.png"), label: "nails" },
  { image: require("../assets/images/emoji4.png"), label: "goat" },
  { image: require("../assets/images/emoji5.png"), label: "donuts" },
  { image: require("../assets/images/emoji6.png"), label: "rainbow" },
];

export default function EmojiList({ onSelect, onCloseModal }: EmojiListProps) {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}
          accessibilityLabel={item.label}
        >
          <Image source={item.image} key={index} style={styles.image} />
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
