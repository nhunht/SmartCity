import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Notification1 = () => {
  return (
    <View style={styles.notification}>
      <View style={[styles.list, styles.listPosition]}>
        <View style={styles.offer}>
          <View style={styles.offerChild} />
          <Text style={styles.offer1}>Offer</Text>
          <Image
            style={[styles.systemIcon24pxoffer, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/system-icon24pxoffer.png")}
          />
          <View style={styles.notificationmark}>
            <Image
              style={[styles.ellipseIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse.png")}
            />
            <Text style={[styles.text, styles.textFlexBox]}>2</Text>
          </View>
        </View>
        <View style={styles.offer}>
          <View style={styles.offerChild} />
          <Text style={styles.offer1}>Feed</Text>
          <Image
            style={[styles.systemIcon24pxoffer, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/system-icon24pxlist.png")}
          />
          <View style={styles.notificationmark}>
            <Image
              style={[styles.ellipseIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse.png")}
            />
            <Text style={[styles.text, styles.textFlexBox]}>3</Text>
          </View>
        </View>
        <View style={styles.offer}>
          <View style={styles.offerChild} />
          <Text style={styles.offer1}>Acivity</Text>
          <Image
            style={[styles.systemIcon24pxoffer, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/system-icon24pxnotification.png")}
          />
          <View style={styles.notificationmark}>
            <Image
              style={[styles.ellipseIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse.png")}
            />
            <Text style={[styles.text, styles.textFlexBox]}>3</Text>
          </View>
        </View>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={styles.offerChild} />
        <Text style={styles.notification1}>Notification</Text>
        <View style={styles.headerItem} />
        <Image
          style={styles.systemIcon24pxleft}
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
          style={[styles.batteryIcon, styles.iconLayout]}
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
          <Text style={[styles.text3, styles.textFlexBox]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.uiHomeIndicator, styles.listPosition]}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listPosition: {
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  headerPosition: {
    top: 0,
    width: 375,
    left: 0,
    position: "absolute",
  },
  systemLayout: {
    display: "none",
    bottom: "22.95%",
    height: "19.67%",
    top: "57.38%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "6.4%",
    position: "absolute",
    overflow: "hidden",
  },
  offerChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
  offer1: {
    top: "33.93%",
    left: "14.93%",
    fontSize: FontSize.formTextFill_size,
    lineHeight: 18,
    textAlign: "left",
    color: Color.neutralDark,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
    position: "absolute",
  },
  systemIcon24pxoffer: {
    height: "42.86%",
    top: "28.57%",
    bottom: "28.57%",
    left: "4.27%",
    right: "89.33%",
    width: "6.4%",
    maxWidth: "100%",
  },
  ellipseIcon: {
    height: "120%",
    width: "120%",
    top: "-10%",
    right: "-10%",
    bottom: "-10%",
    left: "-10%",
  },
  text: {
    top: "15%",
    left: "35%",
    fontSize: FontSize.captionNormalbold_size,
    lineHeight: 15,
    color: Color.backgroundWhite,
    textAlign: "center",
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
  },
  notificationmark: {
    height: "35.71%",
    width: "5.33%",
    top: "32.14%",
    bottom: "32.14%",
    left: "90.4%",
    right: "4.27%",
    position: "absolute",
  },
  offer: {
    height: 56,
    width: 375,
  },
  list: {
    top: 122,
    alignItems: "center",
    overflow: "hidden",
  },
  notification1: {
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
    bottom: "22.95%",
    height: "19.67%",
    top: "57.38%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "4.27%",
    right: "89.33%",
    width: "6.4%",
    position: "absolute",
    overflow: "hidden",
  },
  systemIcon24pxmore: {
    left: "89.33%",
    right: "4.27%",
  },
  systemIcon24pxsearch: {
    right: "14.93%",
    left: "78.67%",
  },
  header: {
    height: 122,
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
  text3: {
    height: "85.71%",
    top: "9.52%",
    fontSize: FontSize.size_mini,
    letterSpacing: -0.3,
    fontWeight: "600",
    fontFamily: FontFamily.sFProTextSemibold,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    color: Color.neutralDark,
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
    height: 44,
    backgroundColor: Color.backgroundWhite,
    top: 0,
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
    width: 375,
  },
  notification: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
});

export default Notification1;
