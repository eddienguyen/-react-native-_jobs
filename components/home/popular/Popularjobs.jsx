import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  FlatList,
} from "react-native";

import styles from "./popularjobs.style";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import { COLORS, SIZES, icons } from "../../../constants";
import useFetch from "../../../hook/useFetch";
import API_ROUTES from "../../../constants/api_routes";

const Popularjobs = () => {
  const { data, isLoading, error, refetch } = useFetch({
    method: "GET",
    endpoint: API_ROUTES.SEARCH(),
    queries: {
      query: "React developer ",
      page: "1",
      num_pages: "1",
    },
  });

  const [selectedJob, setSelectedJob] = useState(null);
  const [favs, setFavs] = useState([]);

  const handleCardPress = (jobID) => {
    setSelectedJob(jobID);
  };

  const handleFavPress = (jobID) => {
    let _favs = favs || [];
    setSelectedJob(jobID);
    if (_favs.includes(jobID)) {
      _favs.splice(favs.indexOf(jobID), 1);
    } else {
      _favs.push(jobID);
    }
    console.log("_favs", _favs);
    setFavs(_favs);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator color={COLORS.primary} size={"large"} />
        ) : error ? (
          <Text>Something went wrong : {error.toString()}</Text>
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item) => item?.job_id}
            horizontal
            renderItem={(each) => (
              <PopularJobCard
                data={each.item}
                selectedJob={selectedJob}
                handlePress={handleCardPress}
                handleFavPress={handleFavPress}
                isFav={favs.indexOf(each.item.job_id) != -1}
              />
            )}
            contentContainerStyle={{
              columnGap: SIZES.medium,
            }}
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
