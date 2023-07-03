import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Address = () => {
  return (
    <View style={styles.address}>
      <View style={[styles.address1Selected, styles.address2Layout]}>
        <Text style={styles.priscekila}>Priscekila</Text>
        <Text style={[styles.springHillRd, styles.textTypo]}>
          3711 Spring Hill Rd undefined Tallahassee, Nevada 52874 United States
        </Text>
        <Text style={[styles.text, styles.textTypo]}>+99 1234567890</Text>
        <View style={styles.buttondefaultsmallprimaryParent}>
          <View
            style={[
              styles.buttondefaultsmallprimary,
              styles.buttondefaultsmallprimaryShadowBox,
            ]}
          >
            <Text style={[styles.edit, styles.editTypo]}>Edit</Text>
          </View>
          <Image
            style={styles.frameIcon}
            contentFit="cover"
            source={require("../assets/frame.png")}
          />
        </View>
      </View>
      <View style={[styles.address2, styles.address2Border]}>
        <Text style={styles.priscekila}>Ahmad Khaidir</Text>
        <Text style={[styles.springHillRd, styles.textTypo]}>
          3711 Spring Hill Rd undefined Tallahassee, Nevada 52874 United States
        </Text>
        <Text style={[styles.text, styles.textTypo]}>+99 1234567890</Text>
        <View style={styles.buttondefaultsmallprimaryParent}>
          <View
            style={[
              styles.buttondefaultsmallprimary1,
              styles.buttondefaultsmallprimaryShadowBox,
            ]}
          >
            <Text style={[styles.edit, styles.editTypo]}>Edit</Text>
          </View>
          <Image
            style={styles.frameIcon}
            contentFit="cover"
            source={require("../assets/frame.png")}
          />
        </View>
      </View>
      <View style={[styles.nextButton, styles.nextButtonPosition]}>
        <Text style={[styles.addAddress, styles.editTypo]}>Add Address</Text>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.headerChild, styles.text2Position]} />
        <Text style={styles.address1}>Address</Text>
        <View style={[styles.headerItem, styles.address2Border]} />
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
        <View style={[styles.homeIndicator, styles.nextButtonPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  address2Layout: {
    padding: Padding.p_5xl,
    borderWidth: 1,
    borderRadius: Border.br_8xs,
    left: 16,
    overflow: "hidden",
    backgroundColor: Color.backgroundWhite,
  },
  textTypo: {
    color: Color.neutralGrey,
    fontFamily: FontFamily.captionNormalregular,
    lineHeight: 22,
    fontSize: FontSize.formTextFill_size,
    marginTop: 16,
    textAlign: "left",
    letterSpacing: 1,
  },
  buttondefaultsmallprimaryShadowBox: {
    alignItems: "center",
    flexDirection: "row",
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(64, 191, 255, 0.24)",
    backgroundColor: Color.primaryBlue,
    borderRadius: Border.br_8xs,
    overflow: "hidden",
  },
  editTypo: {
    color: Color.backgroundWhite,
    lineHeight: 25,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
    fontSize: FontSize.buttonText_size,
  },
  address2Border: {
    borderColor: "#ebf0ff",
    borderStyle: "solid",
    position: "absolute",
  },
  nextButtonPosition: {
    left: "50%",
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
  priscekila: {
    lineHeight: 21,
    textAlign: "left",
    color: Color.neutralDark,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
    fontSize: FontSize.buttonText_size,
  },
  springHillRd: {
    width: 295,
    marginTop: 16,
  },
  text: {
    marginTop: 16,
  },
  edit: {
    textAlign: "left",
  },
  buttondefaultsmallprimary: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xl,
    left: 0,
    alignItems: "center",
    flexDirection: "row",
    borderColor: "#ebf0ff",
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(64, 191, 255, 0.24)",
    backgroundColor: Color.primaryBlue,
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  frameIcon: {
    top: 17,
    left: 101,
    width: 24,
    height: 24,
    opacity: 0.5,
    position: "absolute",
    overflow: "hidden",
  },
  buttondefaultsmallprimaryParent: {
    width: 125,
    height: 57,
    marginTop: 16,
  },
  address1Selected: {
    top: 138,
    borderColor: "#40bfff",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: Border.br_8xs,
    left: 16,
    position: "absolute",
  },
  buttondefaultsmallprimary1: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xl,
    left: 0,
    alignItems: "center",
    flexDirection: "row",
    borderColor: "#ebf0ff",
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(64, 191, 255, 0.24)",
    backgroundColor: Color.primaryBlue,
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  address2: {
    top: 394,
    padding: Padding.p_5xl,
    borderWidth: 1,
    borderRadius: Border.br_8xs,
    left: 16,
    overflow: "hidden",
    backgroundColor: Color.backgroundWhite,
    borderColor: "#ebf0ff",
  },
  addAddress: {
    width: 311,
    textAlign: "center",
  },
  nextButton: {
    marginLeft: -171.5,
    bottom: 50,
    padding: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(64, 191, 255, 0.24)",
    backgroundColor: Color.primaryBlue,
    borderRadius: Border.br_8xs,
    overflow: "hidden",
    left: "50%",
  },
  headerChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    backgroundColor: Color.backgroundWhite,
  },
  address1: {
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
    borderTopWidth: 1,
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
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    textAlign: "center",
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
  address: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
});

export default Address;
