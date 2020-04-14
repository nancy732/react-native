import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
function Blink(props) {
  const [isShowingText, setIsShowingText] = useState(true);

  // Toggle the state every second
  useEffect(() => {
    setTimeout(() => {
      setIsShowingText(!isShowingText);
    }, 1000);
  }, [isShowingText]);

  if (!isShowingText) {
    return <Text> </Text>;
  }

  return <Text>{props.text}</Text>;
}

export default Blink;
