import { View, SafeAreaView, ScrollView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";

import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";
import Welcome from "../components/home/welcome/Welcome";
import Popularjobs from "../components/home/popular/Popularjobs";
import Nearbyjobs from "../components/home/nearby/Nearbyjobs";

const Homepage = () => {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.lightWhite,
        flex: 1,
      }}
    >
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerTitleAlign: "center",
          headerTitle: "",
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homepage;
