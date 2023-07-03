import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const PaymentMethod = () => {
  return (
    <View style={styles.paymentMethod}>
      <View style={[styles.list, styles.listPosition]}>
        <View style={styles.creditCardOrDebit}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={styles.creditCardOr}>Credit Card Or Debit</Text>
          <Image
            style={[styles.systemIcon24pxcreditCard, styles.batteryIconLayout]}
            contentFit="cover"
            source={require("../assets/system-icon24pxcredit-card.png")}
          />
        </View>
        <View style={[styles.paypal, styles.paypalLayout]}>
          <View style={[styles.rectangle1, styles.rectanglePosition]} />
          <Text style={styles.creditCardOr}>Paypal</Text>
          <Image
            style={[styles.systemIcon24pxcreditCard, styles.batteryIconLayout]}
            contentFit="cover"
            source={require("../assets/other-iconpaypal.png")}
          />
        </View>
        <View style={[styles.bankTransfer, styles.rectanglePosition]}>
          <View style={[styles.rectangle1, styles.rectanglePosition]} />
          <Text style={styles.creditCardOr}>Bank Transfer</Text>
          <Image
            style={[styles.systemIcon24pxcreditCard, styles.batteryIconLayout]}
            contentFit="cover"
            source={require("../assets/system-icon24pxbank.png")}
          />
        </View>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.rectangle1, styles.rectanglePosition]} />
        <Text style={styles.payment}>Payment</Text>
        <View style={styles.headerItem} />
        <Image
          style={styles.systemIcon24pxleft}
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
          <Text style={styles.text}>9:41</Text>
        </View>
      </View>
      <View style={[styles.uiHomeIndicator, styles.headerPosition]}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listPosition: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  rectanglePosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  batteryIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  paypalLayout: {
    height: "33.33%",
    backgroundColor: Color.backgroundWhite,
  },
  headerPosition: {
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
  rectangle: {
    backgroundColor: Color.neutralLight,
    height: "100%",
    bottom: "0%",
    top: "0%",
  },
  creditCardOr: {
    top: "33.93%",
    left: "14.93%",
    fontSize: FontSize.formTextFill_size,
    lineHeight: 18,
    textAlign: "left",
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
    color: Color.neutralDark,
    position: "absolute",
  },
  systemIcon24pxcreditCard: {
    height: "42.86%",
    top: "28.57%",
    bottom: "28.57%",
    left: "4.27%",
    right: "89.33%",
    width: "6.4%",
    maxWidth: "100%",
  },
  creditCardOrDebit: {
    bottom: "66.67%",
    top: "0%",
    height: "33.33%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
  rectangle1: {
    height: "100%",
    bottom: "0%",
    top: "0%",
    backgroundColor: Color.backgroundWhite,
  },
  paypal: {
    top: "33.33%",
    bottom: "33.33%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  bankTransfer: {
    top: "66.67%",
    height: "33.33%",
    backgroundColor: Color.backgroundWhite,
  },
  list: {
    height: "20.69%",
    top: "15.02%",
    bottom: "64.29%",
  },
  payment: {
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
    left: 0,
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
    left: "0%",
    position: "absolute",
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
    top: 0,
    width: 375,
    left: 0,
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
  paymentMethod: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
});

export default PaymentMethod;
