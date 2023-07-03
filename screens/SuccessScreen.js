import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const SuccessScreen = () => {
  return (
    <View style={styles.successScreen}>
      <View style={styles.successIcon}>
        <View style={[styles.successIconChild, styles.backButtonShadowBox]} />
        <Image
          style={[styles.successIconItem, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector-41.png")}
        />
      </View>
      <Text style={[styles.success, styles.textClr]}>Success</Text>
      <Text style={[styles.thankYouFor, styles.textClr]}>
        thank you for shopping using lafyuu
      </Text>
      <View style={[styles.backButton, styles.backButtonPosition]}>
        <Text style={[styles.backToOrder, styles.successTypo]}>
          Back To Order
        </Text>
      </View>
      <View style={[styles.uiStatusBars, styles.uiStatusBarsPosition]}>
        <Image
          style={[styles.batteryIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/battery.png")}
        />
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.mobileSignalIcon}
          contentFit="cover"
          source={require("../assets/mobile-signal.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={[styles.text, styles.textClr]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.uiHomeIndicator, styles.uiStatusBarsPosition]}>
        <View style={[styles.homeIndicator, styles.backButtonPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backButtonShadowBox: {
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(64, 191, 255, 0.24)",
    backgroundColor: Color.primaryBlue,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textClr: {
    color: Color.neutralDark,
    textAlign: "center",
    position: "absolute",
  },
  backButtonPosition: {
    left: "50%",
    position: "absolute",
  },
  successTypo: {
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
  },
  uiStatusBarsPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  successIconChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    borderRadius: 56,
    left: "0%",
    width: "100%",
    position: "absolute",
  },
  successIconItem: {
    height: "29.17%",
    width: "40.28%",
    top: "36.11%",
    right: "29.17%",
    bottom: "34.72%",
    left: "30.56%",
  },
  successIcon: {
    top: 292,
    left: 152,
    width: 72,
    height: 72,
    position: "absolute",
  },
  success: {
    top: 380,
    left: 135,
    fontSize: FontSize.headingH2_size,
    lineHeight: 36,
    textAlign: "center",
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
  },
  thankYouFor: {
    top: 424,
    left: 36,
    fontSize: FontSize.formTextFill_size,
    lineHeight: 22,
    fontFamily: FontFamily.captionNormalregular,
    width: 303,
    opacity: 0.5,
    textAlign: "center",
    letterSpacing: 1,
    color: Color.neutralDark,
  },
  backToOrder: {
    fontSize: FontSize.buttonText_size,
    lineHeight: 25,
    color: Color.backgroundWhite,
    width: 311,
    textAlign: "center",
  },
  backButton: {
    marginLeft: -171.5,
    bottom: 293,
    borderRadius: Border.br_8xs,
    flexDirection: "row",
    padding: Padding.p_base,
    alignItems: "center",
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(64, 191, 255, 0.24)",
    backgroundColor: Color.primaryBlue,
    overflow: "hidden",
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
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    textAlign: "center",
    left: "0%",
    width: "100%",
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
    backgroundColor: Color.backgroundWhite,
    width: 375,
    left: 0,
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.primarySoftGrey,
    width: 134,
    height: 5,
    opacity: 0.5,
  },
  uiHomeIndicator: {
    bottom: 0,
    height: 34,
  },
  successScreen: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
});

export default SuccessScreen;
