import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Order = () => {
  return (
    <View style={styles.order}>
      <View style={[styles.order01, styles.orderBorder]}>
        <Text style={styles.lqnsu346jk}>LQNSU346JK</Text>
        <Text style={[styles.orderAtLafyuu, styles.shippingTypo]}>
          Order at Lafyuu : August 1, 2017
        </Text>
        <View style={[styles.order01Child, styles.headerItemBorder]} />
        <View style={styles.orderStatusParent}>
          <Text style={styles.orderStatus}>Order Status</Text>
          <Text style={[styles.shipping, styles.textPosition]}>Shipping</Text>
        </View>
        <View style={styles.orderStatusParent}>
          <Text style={styles.orderStatus}>Items</Text>
          <Text style={[styles.shipping, styles.textPosition]}>
            2 Items purchased
          </Text>
        </View>
        <View style={styles.orderStatusParent}>
          <Text style={styles.orderStatus}>Price</Text>
          <Text style={[styles.text, styles.textPosition]}>$299,43</Text>
        </View>
      </View>
      <View style={[styles.order02, styles.orderBorder]}>
        <Text style={styles.lqnsu346jk}>SDG1345KJD</Text>
        <Text style={[styles.orderAtLafyuu, styles.shippingTypo]}>
          Order at Lafyuu : August 1, 2017
        </Text>
        <View style={[styles.order01Child, styles.headerItemBorder]} />
        <View style={styles.orderStatusParent}>
          <Text style={styles.orderStatus}>Order Status</Text>
          <Text style={[styles.shipping, styles.textPosition]}>Shipping</Text>
        </View>
        <View style={styles.orderStatusParent}>
          <Text style={styles.orderStatus}>Items</Text>
          <Text style={[styles.shipping, styles.textPosition]}>
            1 Items purchased
          </Text>
        </View>
        <View style={styles.orderStatusParent}>
          <Text style={styles.orderStatus}>Price</Text>
          <Text style={[styles.text, styles.textPosition]}>$299,43</Text>
        </View>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.headerChild, styles.text2Position]} />
        <Text style={styles.order1}>Order</Text>
        <View style={[styles.headerItem, styles.headerItemBorder]} />
        <Image
          style={[styles.systemIcon24pxleft, styles.batteryIconLayout]}
          contentFit="cover"
          source={require("../assets/system-icon24pxleft.png")}
        />
        <Image
          style={[styles.systemIcon24pxplus, styles.systemLayout]}
          contentFit="cover"
          source={require("../assets/system-icon24pxplus.png")}
        />
        <Image
          style={[styles.systemIcon24pxlove, styles.systemLayout]}
          contentFit="cover"
          source={require("../assets/add-favorite-icon.png")}
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
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.mobileSignalIcon}
          contentFit="cover"
          source={require("../assets/mobile-signal.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={[styles.text2, styles.text2Position]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.uiHomeIndicator, styles.headerPosition]}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  orderBorder: {
    padding: Padding.p_base,
    borderWidth: 1,
    borderColor: "#ebf0ff",
    borderRadius: Border.br_8xs,
    left: 15,
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.backgroundWhite,
  },
  shippingTypo: {
    fontFamily: FontFamily.captionNormalregular,
    color: Color.neutralDark,
  },
  headerItemBorder: {
    borderTopWidth: 1,
    borderColor: "#ebf0ff",
  },
  textPosition: {
    width: 155,
    textAlign: "right",
    left: 156,
    top: 0,
    lineHeight: 22,
    fontSize: FontSize.formTextFill_size,
    letterSpacing: 1,
    position: "absolute",
  },
  headerPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  text2Position: {
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
  lqnsu346jk: {
    fontSize: FontSize.buttonText_size,
    lineHeight: 21,
    textAlign: "left",
    letterSpacing: 1,
    color: Color.neutralDark,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  orderAtLafyuu: {
    marginTop: 12,
    opacity: 0.5,
    lineHeight: 22,
    fontSize: FontSize.formTextFill_size,
    fontFamily: FontFamily.captionNormalregular,
    textAlign: "left",
    letterSpacing: 1,
  },
  order01Child: {
    borderStyle: "dashed",
    borderRadius: 0.001,
    width: 313,
    height: 1,
    marginTop: 12,
  },
  orderStatus: {
    left: 0,
    top: 0,
    opacity: 0.5,
    fontFamily: FontFamily.captionNormalregular,
    lineHeight: 22,
    fontSize: FontSize.formTextFill_size,
    textAlign: "left",
    color: Color.neutralDark,
    letterSpacing: 1,
    position: "absolute",
  },
  shipping: {
    fontFamily: FontFamily.captionNormalregular,
    color: Color.neutralDark,
  },
  orderStatusParent: {
    width: 311,
    height: 22,
    marginTop: 12,
  },
  text: {
    color: Color.primaryBlue,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    textAlign: "right",
    left: 156,
  },
  order01: {
    top: 138,
  },
  order02: {
    top: 355,
  },
  headerChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    backgroundColor: Color.backgroundWhite,
  },
  order1: {
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
  systemIcon24pxplus: {
    right: "4.27%",
    left: "89.33%",
  },
  systemIcon24pxlove: {
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
  text2: {
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
    left: "0%",
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
  order: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
});

export default Order;
