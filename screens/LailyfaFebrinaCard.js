import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const LailyfaFebrinaCard = () => {
  return (
    <View style={styles.lailyfaFebrinaCard}>
      <View style={styles.creditCard1}>
        <View style={[styles.creditCard1Child, styles.addCardButtonBg]} />
        <Image
          style={[styles.creditCard1Item, styles.creditLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-105.png")}
        />
        <Image
          style={[styles.creditCard1Inner, styles.creditLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-105.png")}
        />
        <Text style={[styles.text, styles.textClr]}>6326 9124 8124 9875</Text>
        <Text style={[styles.cardHolder, styles.cardTypo]}>CARD HOLDER</Text>
        <Text style={[styles.cardSave, styles.text1Position]}>CARD SAVE</Text>
        <Text style={[styles.lailyfaFebrina, styles.cardHolderPosition]}>
          Lailyfa Febrina
        </Text>
        <Text style={[styles.text1, styles.text1Position]}>19/2042</Text>
      </View>
      <View style={[styles.cardNumber, styles.cardLayout]}>
        <Text style={[styles.cardNumber1, styles.text5Clr]}>Card Number</Text>
        <View style={[styles.cardNumberForm, styles.headerItemBorder]}>
          <Text style={[styles.text2, styles.textTypo]}>
            1231 - 2312 - 3123 - 1231
          </Text>
        </View>
      </View>
      <View style={[styles.expirationDate, styles.securityCodePosition]}>
        <View style={[styles.cardNumberForm, styles.headerItemBorder]}>
          <Text style={[styles.text2, styles.textTypo]}>12/12</Text>
        </View>
        <Text style={[styles.cardNumber1, styles.text5Clr]}>
          Expiration Date
        </Text>
      </View>
      <View style={[styles.securityCode, styles.securityCodePosition]}>
        <View style={[styles.cardNumberForm, styles.headerItemBorder]}>
          <Text style={[styles.text2, styles.textTypo]}>1219</Text>
        </View>
        <Text style={[styles.cardNumber1, styles.text5Clr]}>Security Code</Text>
      </View>
      <View style={[styles.cardHolder1, styles.cardLayout]}>
        <Text style={[styles.cardNumber1, styles.text5Clr]}>Card Holder</Text>
        <View style={[styles.cardNumberForm, styles.headerItemBorder]}>
          <Text style={[styles.text2, styles.textTypo]}>Lailyfa Febrina</Text>
        </View>
      </View>
      <View style={[styles.addCardButton, styles.addCardButtonPosition]}>
        <Text style={[styles.save, styles.saveTypo]}>Save</Text>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.headerChild, styles.childPosition]} />
        <Text style={styles.lailyfaFebrinaCard1}>Lailyfa Febrina Card</Text>
        <View style={[styles.headerItem, styles.headerItemBorder]} />
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
          style={[styles.batteryIcon, styles.creditLayout]}
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
          <Text style={[styles.text5, styles.text5Clr]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.uiHomeIndicator, styles.headerPosition]}>
        <View style={[styles.homeIndicator, styles.addCardButtonPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addCardButtonBg: {
    backgroundColor: Color.primaryBlue,
    borderRadius: Border.br_8xs,
  },
  creditLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textClr: {
    color: Color.backgroundWhite,
    textAlign: "center",
  },
  cardTypo: {
    fontFamily: FontFamily.captionNormalregular,
    opacity: 0.5,
    textAlign: "left",
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
  cardLayout: {
    height: 81,
    left: 18,
    width: 343,
    position: "absolute",
  },
  text5Clr: {
    color: Color.neutralDark,
    position: "absolute",
  },
  headerItemBorder: {
    borderColor: "#ebf0ff",
    borderStyle: "solid",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  securityCodePosition: {
    top: 457,
    height: 81,
    position: "absolute",
  },
  addCardButtonPosition: {
    left: "50%",
    position: "absolute",
  },
  saveTypo: {
    fontSize: FontSize.buttonText_size,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
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
  systemLayout: {
    display: "none",
    bottom: "22.95%",
    width: "6.4%",
    height: "19.67%",
    top: "57.38%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  creditCard1Child: {
    left: "0%",
    width: "100%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  creditCard1Item: {
    right: "86.59%",
    left: "7%",
    bottom: "75.79%",
    top: "12.63%",
    width: "6.41%",
    height: "11.58%",
    maxWidth: "100%",
  },
  creditCard1Inner: {
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
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
    position: "absolute",
    left: "6.12%",
    color: Color.backgroundWhite,
  },
  cardHolder: {
    top: "69.47%",
    opacity: 0.5,
    textAlign: "left",
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
  creditCard1: {
    top: 138,
    height: 190,
    width: 343,
    left: 16,
    position: "absolute",
  },
  cardNumber1: {
    lineHeight: 21,
    fontSize: FontSize.buttonText_size,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
    left: 0,
    top: 0,
    textAlign: "left",
  },
  text2: {
    top: 13,
    fontSize: FontSize.formTextFill_size,
    lineHeight: 22,
    color: Color.neutralGrey,
    textAlign: "left",
    letterSpacing: 1,
    fontWeight: "700",
    position: "absolute",
    left: 16,
  },
  cardNumberForm: {
    top: 33,
    right: 0,
    borderWidth: 1,
    height: 48,
    left: 0,
    borderRadius: Border.br_8xs,
    borderStyle: "solid",
    overflow: "hidden",
    backgroundColor: Color.backgroundWhite,
  },
  cardNumber: {
    top: 352,
  },
  expirationDate: {
    right: 192,
    left: 18,
    top: 457,
  },
  securityCode: {
    right: 14,
    left: 196,
  },
  cardHolder1: {
    top: 562,
  },
  save: {
    lineHeight: 25,
    width: 311,
    textAlign: "center",
    color: Color.backgroundWhite,
  },
  addCardButton: {
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
  lailyfaFebrinaCard1: {
    left: "13.87%",
    fontSize: FontSize.headingH4_size,
    lineHeight: 24,
    top: "57.38%",
    color: Color.neutralDark,
    textAlign: "left",
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
    borderTopWidth: 1,
  },
  systemIcon24pxleft: {
    right: "89.33%",
    left: "4.27%",
    bottom: "22.95%",
    width: "6.4%",
    height: "19.67%",
    top: "57.38%",
    maxHeight: "100%",
    maxWidth: "100%",
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
  text5: {
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
    backgroundColor: Color.backgroundWhite,
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
  lailyfaFebrinaCard: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
});

export default LailyfaFebrinaCard;
