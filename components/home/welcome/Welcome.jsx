import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, JOB_TYPES, SIZES } from "../../../constants";

const Welcome = () => {
  const router = useRouter();

  const [activeJobType, setActiveJobType] = useState(JOB_TYPES[0]);

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Welcome</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="What are you looking for ?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image source={icons.search} style={styles.searchBtnImage} />
        </TouchableOpacity>
      </View>

      {/* Result list */}
      <View style={styles.tabsContainer}>
        <FlatList
          data={JOB_TYPES}
          horizontal
          keyExtractor={(item, index) => index}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: SIZES.small,
          }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Welcome;
