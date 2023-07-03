import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const ChooseCreditOrDebitCard = () => {
  return (
    <View style={styles.chooseCreditOrDebitCard}>
      <View style={styles.othercreditCard}>
        <View style={[styles.othercreditCardChild, styles.payButtonBg]} />
        <Image
          style={[styles.othercreditCardItem, styles.othercreditCardLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-105.png")}
        />
        <Image
          style={[styles.othercreditCardInner, styles.othercreditCardLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-105.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>6326 9124 8124 9875</Text>
        <Text style={[styles.cardHolder, styles.cardTypo]}>CARD HOLDER</Text>
        <Text style={[styles.cardSave, styles.text1Position]}>CARD SAVE</Text>
        <Text style={[styles.lailyfaFebrina, styles.cardHolderPosition]}>
          Lailyfa Febrina
        </Text>
        <Text style={[styles.text1, styles.text1Position]}>19/2042</Text>
      </View>
      <Image
        style={styles.slideCardIcon}
        contentFit="cover"
        source={require("../assets/slide-show-image.png")}
      />
      <View style={[styles.payButton, styles.payButtonPosition]}>
        <Text style={[styles.pay76686, styles.textTypo]}>Pay $766.86</Text>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.headerChild, styles.childPosition]} />
        <Text style={[styles.chooseCard, styles.text2Clr]}>Choose Card</Text>
        <View style={styles.headerItem} />
        <Image
          style={[styles.systemIcon24pxleft, styles.systemLayout]}
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
      <View style={[styles.uiHomeIndicator, styles.headerPosition]}>
        <View style={[styles.homeIndicator, styles.payButtonPosition]} />
      </View>
      <View style={[styles.uiStatusBars, styles.headerPosition]}>
        <Image
          style={[styles.batteryIcon, styles.othercreditCardLayout]}
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
          <Text style={[styles.text2, styles.text2Clr]}>9:41</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  payButtonBg: {
    backgroundColor: Color.primaryBlue,
    borderRadius: Border.br_8xs,
  },
  othercreditCardLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    color: Color.backgroundWhite,
    letterSpacing: 1,
    textAlign: "center",
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  cardTypo: {
    textAlign: "left",
    fontFamily: FontFamily.captionNormalregular,
    opacity: 0.5,
  },
  text1Position: {
    left: "38.19%",
    lineHeight: 15,
    fontSize: FontSize.captionNormalbold_size,
    color: Color.backgroundWhite,
    letterSpacing: 1,
    position: "absolute",
  },
  cardHolderPosition: {
    lineHeight: 15,
    fontSize: FontSize.captionNormalbold_size,
    color: Color.backgroundWhite,
    letterSpacing: 1,
    left: "6.12%",
    position: "absolute",
  },
  payButtonPosition: {
    left: "50%",
    position: "absolute",
  },
  headerPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  childPosition: {
    left: "0%",
    width: "100%",
  },
  text2Clr: {
    color: Color.neutralDark,
    position: "absolute",
  },
  systemLayout: {
    bottom: "22.95%",
    width: "6.4%",
    height: "19.67%",
    top: "57.38%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  othercreditCardChild: {
    left: "0%",
    width: "100%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  othercreditCardItem: {
    right: "86.59%",
    left: "7%",
    bottom: "75.79%",
    top: "12.63%",
    width: "6.41%",
    height: "11.58%",
    maxWidth: "100%",
  },
  othercreditCardInner: {
    right: "82.51%",
    left: "11.08%",
    bottom: "75.79%",
    top: "12.63%",
    width: "6.41%",
    height: "11.58%",
    maxWidth: "100%",
  },
  text: {
    top: "40.53%",
    fontSize: FontSize.headingH2_size,
    lineHeight: 36,
    textAlign: "center",
    left: "6.12%",
    color: Color.backgroundWhite,
    letterSpacing: 1,
    position: "absolute",
  },
  cardHolder: {
    top: "69.47%",
    opacity: 0.5,
    lineHeight: 15,
    fontSize: FontSize.captionNormalbold_size,
    color: Color.backgroundWhite,
    letterSpacing: 1,
    left: "6.12%",
    position: "absolute",
  },
  cardSave: {
    top: "68.42%",
    opacity: 0.5,
    textAlign: "left",
    fontFamily: FontFamily.captionNormalregular,
  },
  lailyfaFebrina: {
    top: "79.47%",
    textAlign: "center",
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  text1: {
    top: "78.42%",
    textAlign: "center",
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  othercreditCard: {
    top: 138,
    left: 16,
    width: 343,
    height: 190,
    position: "absolute",
  },
  slideCardIcon: {
    top: 344,
    left: 152,
    width: 72,
    height: 8,
    position: "absolute",
  },
  pay76686: {
    fontSize: FontSize.buttonText_size,
    lineHeight: 25,
    width: 311,
    textAlign: "center",
  },
  payButton: {
    marginLeft: -171.5,
    bottom: 50,
    shadowColor: "rgba(64, 191, 255, 0.24)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    flexDirection: "row",
    padding: Padding.p_base,
    alignItems: "center",
    backgroundColor: Color.primaryBlue,
    borderRadius: Border.br_8xs,
    overflow: "hidden",
  },
  headerChild: {
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    position: "absolute",
    backgroundColor: Color.backgroundWhite,
  },
  chooseCard: {
    left: "13.87%",
    fontSize: FontSize.headingH4_size,
    lineHeight: 24,
    top: "57.38%",
    color: Color.neutralDark,
    textAlign: "left",
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
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
  },
  systemIcon24pxplus: {
    right: "4.27%",
    left: "89.33%",
  },
  systemIcon24pxlove: {
    right: "14.93%",
    left: "78.67%",
    display: "none",
  },
  header: {
    height: 122,
    top: 0,
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
    height: 44,
    top: 0,
    left: 0,
    backgroundColor: Color.backgroundWhite,
  },
  chooseCreditOrDebitCard: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
});

export default ChooseCreditOrDebitCard;
