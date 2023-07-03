import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const NotificationOffer = () => {
  return (
    <View style={styles.notificationOffer}>
      <View style={[styles.list, styles.listFlexBox]}>
        <View style={styles.offerList01}>
          <Image
            style={styles.systemIcon24pxoffer}
            contentFit="cover"
            source={require("../assets/system-icon24pxoffer.png")}
          />
          <View style={[styles.theBestTitleParent, styles.listFlexBox]}>
            <Text style={styles.theBestTitle}>The Best Title</Text>
            <Text
              style={[styles.culpaCillumConsectetur, styles.april302014Typo]}
            >
              Culpa cillum consectetur labore nulla nulla magna irure. Id veniam
              culpa officia aute dolor amet deserunt ex proident commodo
            </Text>
            <Text style={[styles.april302014, styles.april302014Typo]}>
              April 30, 2014 1:01 PM
            </Text>
          </View>
        </View>
        <View style={styles.offerList01}>
          <Image
            style={styles.systemIcon24pxoffer}
            contentFit="cover"
            source={require("../assets/system-icon24pxoffer.png")}
          />
          <View style={[styles.theBestTitleParent, styles.listFlexBox]}>
            <Text style={styles.theBestTitle}>SUMMER OFFER 98% Cashback</Text>
            <Text
              style={[styles.culpaCillumConsectetur, styles.april302014Typo]}
            >
              Culpa cillum consectetur labore nulla nulla magna irure. Id veniam
              culpa officia aute dolor
            </Text>
            <Text style={[styles.april302014, styles.april302014Typo]}>
              April 30, 2014 1:01 PM
            </Text>
          </View>
        </View>
        <View style={styles.offerList01}>
          <Image
            style={styles.systemIcon24pxoffer}
            contentFit="cover"
            source={require("../assets/system-icon24pxoffer.png")}
          />
          <View style={[styles.theBestTitleParent, styles.listFlexBox]}>
            <Text style={styles.theBestTitle}>Special Offer 25% OFF</Text>
            <Text
              style={[styles.culpaCillumConsectetur, styles.april302014Typo]}
            >
              Culpa cillum consectetur labore nulla nulla magna irure. Id veniam
              culpa officia aute dolor amet deserunt ex proident commodo
            </Text>
            <Text style={[styles.april302014, styles.april302014Typo]}>
              April 30, 2014 1:01 PM
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.headerChild, styles.textPosition]} />
        <Text style={styles.notification}>Notification</Text>
        <View style={styles.headerItem} />
        <Image
          style={[styles.systemIcon24pxleft, styles.batteryIconLayout]}
          contentFit="cover"
          source={require("../assets/system-icon24pxleft.png")}
        />
        <Image
          style={[styles.systemIcon24pxmore, styles.systemLayout]}
          contentFit="cover"
          source={require("../assets/system-icon24pxmore.png")}
        />
        <Image
          style={[styles.systemIcon24pxsearch, styles.systemLayout]}
          contentFit="cover"
          source={require("../assets/system-icon24pxsearch.png")}
        />
      </View>
      <View style={[styles.uiStatusBars, styles.headerPosition]}>
        <Image
          style={[styles.batteryIcon, styles.batteryIconLayout]}
          contentFit="cover"
          source={require("../assets/battery.png")}
        />
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi2.png")}
        />
        <Image
          style={styles.mobileSignalIcon}
          contentFit="cover"
          source={require("../assets/mobile-signal.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={[styles.text, styles.textPosition]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.uiHomeIndicator, styles.headerPosition]}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  april302014Typo: {
    marginTop: 8,
    fontFamily: FontFamily.captionNormalregular,
    width: 307,
    textAlign: "left",
    letterSpacing: 1,
  },
  headerPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  textPosition: {
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  batteryIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  systemLayout: {
    display: "none",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "22.95%",
    width: "6.4%",
    height: "19.67%",
    top: "57.38%",
    position: "absolute",
    overflow: "hidden",
  },
  systemIcon24pxoffer: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  theBestTitle: {
    fontSize: FontSize.buttonText_size,
    lineHeight: 21,
    width: 307,
    textAlign: "left",
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
    color: Color.neutralDark,
  },
  culpaCillumConsectetur: {
    fontSize: FontSize.formTextFill_size,
    lineHeight: 22,
    color: Color.neutralGrey,
  },
  april302014: {
    fontSize: FontSize.captionNormalbold_size,
    lineHeight: 15,
    color: Color.neutralDark,
  },
  theBestTitleParent: {
    marginLeft: 12,
  },
  offerList01: {
    flexDirection: "row",
    padding: Padding.p_base,
    overflow: "hidden",
    backgroundColor: Color.backgroundWhite,
  },
  list: {
    top: 122,
    left: 0,
    alignItems: "center",
    position: "absolute",
  },
  headerChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    backgroundColor: Color.backgroundWhite,
  },
  notification: {
    left: "13.87%",
    fontSize: FontSize.headingH4_size,
    lineHeight: 24,
    top: "57.38%",
    textAlign: "left",
    color: Color.neutralDark,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
    position: "absolute",
  },
  headerItem: {
    height: "0.82%",
    width: "100.27%",
    top: "99.59%",
    right: "-0.13%",
    bottom: "-0.41%",
    left: "-0.13%",
    borderStyle: "solid",
    borderColor: "#ebf0ff",
    borderTopWidth: 1,
    position: "absolute",
  },
  systemIcon24pxleft: {
    right: "89.33%",
    left: "4.27%",
    bottom: "22.95%",
    width: "6.4%",
    height: "19.67%",
    maxWidth: "100%",
    top: "57.38%",
  },
  systemIcon24pxmore: {
    right: "4.27%",
    left: "89.33%",
  },
  systemIcon24pxsearch: {
    right: "14.93%",
    left: "78.67%",
  },
  header: {
    height: 122,
    top: 0,
    width: 375,
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
    textAlign: "center",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    color: Color.neutralDark,
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
    height: 44,
    top: 0,
    width: 375,
    backgroundColor: Color.backgroundWhite,
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.primarySoftGrey,
    width: 134,
    height: 5,
    opacity: 0.5,
    position: "absolute",
  },
  uiHomeIndicator: {
    bottom: 0,
    height: 34,
  },
  notificationOffer: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
});

export default NotificationOffer;
