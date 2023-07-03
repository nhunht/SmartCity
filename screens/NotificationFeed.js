import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Border, FontSize, Color, Padding } from "../GlobalStyles";

const NotificationFeed = () => {
  return (
    <View style={styles.notificationFeed}>
      <View style={styles.list}>
        <View style={styles.feedList01}>
          <Image
            style={styles.image46Icon}
            contentFit="cover"
            source={require("../assets/image-46.png")}
          />
          <View style={styles.newProductParent}>
            <Text style={styles.newProduct}>New Product</Text>
            <Text style={[styles.nikeAirZoom, styles.june32015Typo]}>
              Nike Air Zoom Pegasus 36 Miami - Special For your Activity
            </Text>
            <Text style={[styles.june32015, styles.june32015Typo]}>
              June 3, 2015 5:06 PM
            </Text>
          </View>
        </View>
        <View style={styles.feedList01}>
          <Image
            style={styles.image46Icon}
            contentFit="cover"
            source={require("../assets/image-461.png")}
          />
          <View style={styles.newProductParent}>
            <Text style={styles.newProduct}>Best Product</Text>
            <Text style={[styles.nikeAirZoom, styles.june32015Typo]}>
              Nike Air Zoom Pegasus 36 Miami - Special For your Activity
            </Text>
            <Text style={[styles.june32015, styles.june32015Typo]}>
              June 3, 2015 5:06 PM
            </Text>
          </View>
        </View>
        <View style={styles.feedList01}>
          <Image
            style={styles.image46Icon}
            contentFit="cover"
            source={require("../assets/image-462.png")}
          />
          <View style={styles.newProductParent}>
            <Text style={styles.newProduct}>New Product</Text>
            <Text style={[styles.nikeAirZoom, styles.june32015Typo]}>
              Nike Air Zoom Pegasus 36 Miami - Special For your Activity
            </Text>
            <Text style={[styles.june32015, styles.june32015Typo]}>
              June 3, 2015 5:06 PM
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.headernormalHeader, styles.uiStatusBarsPosition]}>
        <View style={[styles.headernormalHeaderChild, styles.textPosition]} />
        <Text style={styles.feed}>Feed</Text>
        <View style={styles.headernormalHeaderItem} />
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
      <View style={[styles.uiStatusBars, styles.uiStatusBarsPosition]}>
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
      <View style={[styles.uiHomeIndicator, styles.uiStatusBarsPosition]}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  june32015Typo: {
    marginTop: 4,
    fontFamily: FontFamily.captionNormalregular,
    width: 283,
    textAlign: "left",
    letterSpacing: 1,
  },
  uiStatusBarsPosition: {
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
  image46Icon: {
    borderRadius: Border.br_8xs,
    width: 48,
    height: 48,
  },
  newProduct: {
    fontSize: FontSize.buttonText_size,
    lineHeight: 21,
    width: 283,
    textAlign: "left",
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
    color: Color.neutralDark,
  },
  nikeAirZoom: {
    fontSize: FontSize.formTextFill_size,
    lineHeight: 22,
    color: Color.neutralGrey,
  },
  june32015: {
    fontSize: FontSize.captionNormalbold_size,
    lineHeight: 15,
    color: Color.neutralDark,
  },
  newProductParent: {
    marginLeft: 12,
    overflow: "hidden",
  },
  feedList01: {
    flexDirection: "row",
    padding: Padding.p_base,
    overflow: "hidden",
    backgroundColor: Color.backgroundWhite,
  },
  list: {
    top: 122,
    alignItems: "center",
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  headernormalHeaderChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    backgroundColor: Color.backgroundWhite,
  },
  feed: {
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
  headernormalHeaderItem: {
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
  headernormalHeader: {
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
  notificationFeed: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
});

export default NotificationFeed;
