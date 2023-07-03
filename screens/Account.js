import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Account = () => {
  return (
    <View style={styles.account}>
      <View style={styles.list}>
        <View style={styles.user}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.profile, styles.profileTypo]}>Profile</Text>
          <Image
            style={[styles.systemIcon24pxuser, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/system-icon24pxuser.png")}
          />
        </View>
        <View style={styles.user}>
          <View style={[styles.rectangle1, styles.rectanglePosition]} />
          <Text style={[styles.profile, styles.profileTypo]}>Order</Text>
          <Image
            style={[styles.systemIcon24pxuser, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/system-icon24pxbag.png")}
          />
        </View>
        <View style={styles.user}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.profile, styles.profileTypo]}>Address</Text>
          <Image
            style={[styles.systemIcon24pxuser, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/system-icon24pxlocation.png")}
          />
        </View>
        <View style={styles.user}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.profile, styles.profileTypo]}>Payment</Text>
          <Image
            style={[styles.systemIcon24pxuser, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/system-icon24pxcredit-card.png")}
          />
        </View>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.rectangle, styles.rectanglePosition]} />
        <Text style={[styles.account1, styles.account1Position]}>Account</Text>
        <View style={[styles.headerItem, styles.headerItemPosition]} />
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
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.mobileSignalIcon}
          contentFit="cover"
          source={require("../assets/mobile-signal.png")}
        />
        <View style={[styles.timeStyle, styles.homePosition]}>
          <Text style={styles.text}>9:41</Text>
        </View>
      </View>
      <View style={[styles.tabBartabBar, styles.tabBartabBarPosition]}>
        <View style={[styles.tabBartabBarChild, styles.headerItemPosition]} />
        <View style={[styles.tabBartabBarItem, styles.menuPosition]} />
        <View style={[styles.menu, styles.menuPosition]}>
          <View style={[styles.home, styles.homeLayout]}>
            <View style={[styles.rectangle, styles.rectanglePosition]} />
            <Image
              style={[styles.systemIcon24pxhome, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/system-icon24pxhome.png")}
            />
            <Text style={[styles.home1, styles.home1Typo]}>Home</Text>
          </View>
          <View style={[styles.explore, styles.homeLayout]}>
            <View style={[styles.rectangle, styles.rectanglePosition]} />
            <Image
              style={[styles.systemIcon24pxhome, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/system-icon24pxsearch.png")}
            />
            <Text style={[styles.home1, styles.home1Typo]}>Explore</Text>
          </View>
          <View style={[styles.cart, styles.homeLayout]}>
            <View style={[styles.rectangle, styles.rectanglePosition]} />
            <Image
              style={[styles.systemIcon24pxhome, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/system-icon24pxcart.png")}
            />
            <Text style={[styles.home1, styles.home1Typo]}>Cart</Text>
            <View style={[styles.notificationmark, styles.offerPosition]}>
              <Image
                style={[styles.ellipseIcon, styles.text1Position]}
                contentFit="cover"
                source={require("../assets/ellipse.png")}
              />
              <Text style={[styles.text1, styles.text1Position]}>2</Text>
            </View>
          </View>
          <View style={[styles.offer, styles.offerPosition]}>
            <View style={[styles.rectangle, styles.rectanglePosition]} />
            <Image
              style={[styles.systemIcon24pxhome, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/system-icon24pxoffer1.png")}
            />
            <Text style={[styles.home1, styles.home1Typo]}>Offer</Text>
          </View>
          <View style={[styles.profile1, styles.homeLayout]}>
            <View style={[styles.rectangle, styles.rectanglePosition]} />
            <Image
              style={[styles.systemIcon24pxhome, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/system-icon24pxuser.png")}
            />
            <Text style={[styles.account2, styles.home1Typo]}>Account</Text>
          </View>
        </View>
      </View>
      <View style={[styles.uiHomeIndicator, styles.tabBartabBarPosition]}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectanglePosition: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  profileTypo: {
    textAlign: "left",
    color: Color.neutralDark,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  headerPosition: {
    top: 0,
    width: 375,
    left: 0,
    position: "absolute",
  },
  account1Position: {
    left: "4.27%",
    position: "absolute",
  },
  headerItemPosition: {
    borderTopWidth: 1,
    borderColor: "#ebf0ff",
    borderStyle: "solid",
    left: "-0.13%",
    right: "-0.13%",
    width: "100.27%",
    position: "absolute",
  },
  homePosition: {
    right: "80%",
    position: "absolute",
  },
  tabBartabBarPosition: {
    bottom: 0,
    width: 375,
    left: 0,
    position: "absolute",
  },
  menuPosition: {
    bottom: "36.56%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  homeLayout: {
    width: "20%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  home1Typo: {
    lineHeight: 15,
    fontSize: FontSize.captionNormalbold_size,
    textAlign: "center",
    letterSpacing: 1,
  },
  offerPosition: {
    right: "20%",
    position: "absolute",
  },
  text1Position: {
    display: "none",
    position: "absolute",
  },
  rectangle: {
    left: "0%",
    position: "absolute",
    backgroundColor: Color.backgroundWhite,
  },
  profile: {
    top: "33.93%",
    left: "14.93%",
    fontSize: FontSize.formTextFill_size,
    lineHeight: 18,
    letterSpacing: 1,
    textAlign: "left",
    color: Color.neutralDark,
    position: "absolute",
  },
  systemIcon24pxuser: {
    height: "42.86%",
    width: "6.4%",
    top: "28.57%",
    right: "89.33%",
    bottom: "28.57%",
    left: "4.27%",
    position: "absolute",
  },
  user: {
    height: 56,
    width: 375,
    backgroundColor: Color.backgroundWhite,
  },
  rectangle1: {
    backgroundColor: Color.neutralLight,
    left: "0%",
    position: "absolute",
  },
  list: {
    top: 122,
    alignItems: "center",
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  account1: {
    top: "57.38%",
    fontSize: FontSize.headingH4_size,
    letterSpacing: 0.1,
    lineHeight: 24,
    textAlign: "left",
    color: Color.neutralDark,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  headerItem: {
    height: "0.82%",
    top: "99.59%",
    bottom: "-0.41%",
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
    position: "absolute",
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
    color: Color.neutralDark,
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  timeStyle: {
    height: "47.73%",
    width: "14.4%",
    top: "27.27%",
    bottom: "25%",
    left: "5.6%",
  },
  uiStatusBars: {
    height: 44,
    backgroundColor: Color.backgroundWhite,
  },
  tabBartabBarChild: {
    height: "1.08%",
    top: "-0.54%",
    bottom: "99.46%",
  },
  tabBartabBarItem: {
    height: "52.69%",
    top: "10.75%",
    backgroundColor: Color.backgroundWhite,
  },
  systemIcon24pxhome: {
    height: "40.68%",
    width: "32%",
    top: "27.12%",
    right: "33.33%",
    bottom: "32.2%",
    left: "34.67%",
    position: "absolute",
  },
  home1: {
    fontFamily: FontFamily.captionNormalregular,
    color: Color.neutralGrey,
    top: "74.58%",
    lineHeight: 15,
    fontSize: FontSize.captionNormalbold_size,
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  home: {
    right: "80%",
    position: "absolute",
    left: "0%",
  },
  explore: {
    right: "60%",
    left: "20%",
    position: "absolute",
  },
  ellipseIcon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    left: "0%",
    bottom: "0%",
    height: "100%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  text1: {
    top: "15%",
    left: "35%",
    color: Color.backgroundWhite,
    lineHeight: 15,
    fontSize: FontSize.captionNormalbold_size,
    textAlign: "center",
    letterSpacing: 1,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  notificationmark: {
    height: "33.9%",
    width: "26.67%",
    top: "10.17%",
    bottom: "55.93%",
    left: "53.33%",
  },
  cart: {
    right: "40%",
    left: "40%",
    position: "absolute",
  },
  offer: {
    left: "60%",
    width: "20%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  account2: {
    color: Color.primaryBlue,
    top: "74.58%",
    lineHeight: 15,
    fontSize: FontSize.captionNormalbold_size,
    left: "0%",
    position: "absolute",
    width: "100%",
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  profile1: {
    left: "80%",
    right: "0%",
    width: "20%",
    position: "absolute",
  },
  menu: {
    height: "63.44%",
    top: "0%",
    bottom: "36.56%",
  },
  tabBartabBar: {
    height: 93,
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
    height: 34,
  },
  account: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
});

export default Account;
