import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const SplashScreen = () => {
  return (
    <View style={styles.splashScreen}>
      <View style={styles.iconAppsingleIconWhite}>
        <View style={[styles.iconAppsingleIconWhiteChild, styles.iconBg]} />
        <Image
          style={[styles.iconAppsingleIconWhiteItem, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-401.png")}
        />
      </View>
      <View style={[styles.uiStatusBars, styles.uiStatusBarsPosition]}>
        <Image
          style={[styles.batteryIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/battery1.png")}
        />
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi1.png")}
        />
        <Image
          style={styles.mobileSignalIcon}
          contentFit="cover"
          source={require("../assets/mobile-signal1.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={[styles.text, styles.iconPosition]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.uiHomeIndicator, styles.uiStatusBarsPosition]}>
        <View style={[styles.homeIndicator, styles.iconBg]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconBg: {
    backgroundColor: Color.backgroundWhite,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  uiStatusBarsPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  iconPosition: {
    left: "0%",
    width: "100%",
  },
  iconAppsingleIconWhiteChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_base,
    left: "0%",
    width: "100%",
  },
  iconAppsingleIconWhiteItem: {
    height: "44.44%",
    width: "44.44%",
    top: "27.78%",
    right: "27.78%",
    bottom: "27.78%",
    left: "27.78%",
  },
  iconAppsingleIconWhite: {
    top: 370,
    left: 151,
    width: 72,
    height: 72,
    position: "absolute",
  },
  batteryIcon: {
    height: "25.76%",
    width: "6.49%",
    top: "39.39%",
    right: "3.91%",
    bottom: "34.85%",
    left: "89.6%",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  text: {
    height: "85.71%",
    top: "9.52%",
    fontSize: FontSize.size_mini,
    letterSpacing: -0.3,
    fontWeight: "600",
    fontFamily: FontFamily.sFProTextSemibold,
    color: Color.backgroundWhite,
    textAlign: "center",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    position: "absolute",
  },
  timeStyle: {
    height: "47.73%",
    width: "14.4%",
    top: "27.27%",
    right: "80%",
    bottom: "25%",
    left: "5.6%",
    position: "absolute",
  },
  uiStatusBars: {
    top: 0,
    height: 44,
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
  },
  uiHomeIndicator: {
    bottom: 0,
    height: 34,
  },
  splashScreen: {
    backgroundColor: Color.primaryBlue,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default SplashScreen;
