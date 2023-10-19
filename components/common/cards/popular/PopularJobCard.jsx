import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableHighlight,
} from "react-native";

import styles from "./popularjobcard.style";
import { COLORS, icons } from "../../../../constants";

/**
 *
 * @param {*} data {
 */
const PopularJobCard = ({
  data = {},
  selectedJob,
  isFav = false,
  handlePress,
  handleFavPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, data)}
      onPress={() => {
        if (handlePress) handlePress(data?.job_id);
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity style={styles.logoContainer(selectedJob, data)}>
          <Image
            style={styles.logoImage}
            source={{ uri: data?.employer_logo }}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            if (handleFavPress) handleFavPress(data?.job_id);
          }}
          style={styles.favBtn(isFav)}
        >
          <Image source={icons.heart} style={styles.logoImage} />
        </TouchableOpacity>
      </View>
      <Text style={styles.companyName}>{data?.employer_name}</Text>
      <Text style={styles.jobName(selectedJob, data)} numberOfLines={1}>
        {data?.job_title}
      </Text>
      <View style={styles.infoWrapper}>
        <Text style={styles.publisher(selectedJob, data)}>
          {data?.job_min_salary}
          {data?.job_salary_currency}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
