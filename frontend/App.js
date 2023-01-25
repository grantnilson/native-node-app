import DetailList from "./DetailList";

import React from "react";
import { Text, View } from "react-native";

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DetailList />
    </View>
  );
};

export default App;
