import { FlashList, FlashListRef } from "@shopify/flash-list";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  LayoutChangeEvent,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const { width: screenWidth } = Dimensions.get("window");
const AnimatedFlashList = Animated.createAnimatedComponent(
  FlashList
) as unknown as typeof FlashList;

interface Tab {
  key: string;
  title: string;
  content: React.ReactNode;
}

interface LocalTabsProps {
  tabs: Tab[];
}

export function LocalTabs({ tabs }: LocalTabsProps) {
  const scrollX = useSharedValue(0);
  const listRef = useRef<FlashListRef<Tab>>(null);
  const [containerWidth, setContainerWidth] = useState(screenWidth);

  const tabWidth = containerWidth / tabs.length;

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const handleTabPress = (index: number) => {
    listRef.current?.scrollToOffset({
      offset: index * screenWidth,
      animated: true,
    });
  };

  const indicatorStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      scrollX.value,
      [0, (tabs.length - 1) * screenWidth],
      [0, (tabs.length - 1) * tabWidth],
      Extrapolation.CLAMP
    );
    return { transform: [{ translateX }] };
  });

  const lastScroll = useSharedValue(0);
  const fade = useSharedValue(1);

  const imageStyle = useAnimatedStyle(() => {
    const delta = Math.abs(scrollX.value - lastScroll.value);

    if (delta > 2) {
      fade.value = withTiming(0.4, { duration: 150 });
    } else {
      fade.value = withTiming(1, { duration: 400 });
    }

    lastScroll.value = scrollX.value;

    return { opacity: fade.value };
  });

  return (
    <View style={{ flex: 1 }}>
      <View
        onLayout={(event: LayoutChangeEvent) =>
          setContainerWidth(event.nativeEvent.layout.width)
        }
        style={{
          flexDirection: "row",
          position: "relative",
          borderRadius: 12,
          marginVertical: 8,
          overflow: "hidden",
        }}
      >
        <Animated.View
          style={[
            {
              position: "absolute",
              top: 0,
              bottom: 0,
              width: tabWidth,
              backgroundColor: "#fff",
              borderRadius: 12,
            },
            indicatorStyle,
          ]}
        >
          <Animated.Image
            source={require("@assets/icons/small-bird.png")}
            style={[
              {
                position: "absolute",
                right: 0, // pequeno destaque visual
                top: "50%",
                width: 24,
                height: 24,
                transform: [{ translateY: -12 }],
              },
              imageStyle,
            ]}
            resizeMode="contain"
          />
        </Animated.View>

        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={tab.key}
            onPress={() => handleTabPress(index)}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 12,
            }}
          >
            <Text style={{ fontWeight: "600" }}>{tab.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Animated.View style={{ flex: 1 }}>
        <AnimatedFlashList<Tab>
          ref={listRef}
          data={tabs}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          // @ts-ignore
          estimatedItemSize={screenWidth}
          scrollEventThrottle={16}
          onScroll={scrollHandler}
          renderItem={({ item }) => (
            <View style={{ width: screenWidth, padding: 16 }}>
              {item.content}
            </View>
          )}
        />
      </Animated.View>
    </View>
  );
}
