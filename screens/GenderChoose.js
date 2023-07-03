import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const GenderChoose = () => {
  return (
    <View style={styles.genderChoose}>
      <View style={styles.chooseGender}>
        <Text style={styles.chooseGender1}>Choose Gender</Text>
        <View style={[styles.genderFormActive, styles.saveButtonFlexBox]}>
          <View style={styles.childLayout}>
            <Image
              style={[styles.frameChild, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-2561.png")}
            />
            <Text style={[styles.male, styles.malePosition]}>Male</Text>
            <Image
              style={styles.systemIcon24pxbottom}
              contentFit="cover"
              source={require("../assets/system-icon24pxbottom.png")}
            />
          </View>
          <View style={[styles.groupParent, styles.headerItemBorder]}>
            <View style={styles.childLayout}>
              <Text style={[styles.unitedStates, styles.male1Typo]}>
                United States
              </Text>
              <View style={[styles.groupChild, styles.childLayout]} />
              <Text style={[styles.male1, styles.male1Typo]}>Male</Text>
            </View>
            <View style={styles.childLayout}>
              <View style={[styles.groupChild, styles.childLayout]} />
              <Text style={[styles.female, styles.malePosition]}>Female</Text>
            </View>
            <View style={styles.childLayout}>
              <View style={[styles.groupChild, styles.childLayout]} />
              <Text style={[styles.female, styles.malePosition]}>Other</Text>
            </View>
            <View style={[styles.rectangleContainer, styles.childLayout]}>
              <View style={[styles.groupChild, styles.childLayout]} />
              <Text style={[styles.female, styles.malePosition]}>Albania</Text>
            </View>
            <View style={[styles.rectangleContainer, styles.childLayout]}>
              <Image
                style={[styles.rectangleIcon, styles.childLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-392.png")}
              />
              <Text style={[styles.female, styles.malePosition]}>
                American Samoa
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.saveButton, styles.saveButtonPosition]}>
        <Text style={[styles.save, styles.maleTypo]}>Save</Text>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.headerChild, styles.textPosition]} />
        <Text style={styles.gender}>Gender</Text>
        <View style={[styles.headerItem, styles.headerItemBorder]} />
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
      <View style={[styles.uiStatusBars, styles.headerPosition]}>
        <Image
          style={[styles.batteryIcon, styles.systemLayout]}
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
          <Text style={[styles.text, styles.textPosition]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.uiHomeIndicator, styles.headerPosition]}>
        <View style={[styles.homeIndicator, styles.saveButtonPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  saveButtonFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  childLayout: {
    height: 48,
    width: 343,
  },
  malePosition: {
    color: Color.neutralGrey,
    lineHeight: 22,
    fontSize: FontSize.formTextFill_size,
    top: 13,
    textAlign: "left",
    letterSpacing: 1,
    left: 16,
    position: "absolute",
  },
  headerItemBorder: {
    borderColor: "#ebf0ff",
    borderStyle: "solid",
  },
  male1Typo: {
    lineHeight: 22,
    fontSize: FontSize.formTextFill_size,
    top: 13,
    textAlign: "left",
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
    left: 16,
    position: "absolute",
  },
  saveButtonPosition: {
    left: "50%",
    position: "absolute",
  },
  maleTypo: {
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
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
  systemLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  chooseGender1: {
    lineHeight: 21,
    textAlign: "left",
    color: Color.neutralDark,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
    fontSize: FontSize.buttonText_size,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_8xs,
    left: 0,
    position: "absolute",
    top: 0,
  },
  male: {
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  systemIcon24pxbottom: {
    top: 12,
    left: 303,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  unitedStates: {
    opacity: 0.5,
    color: Color.neutralDark,
  },
  groupChild: {
    left: 0,
    position: "absolute",
    top: 0,
    backgroundColor: Color.backgroundWhite,
  },
  male1: {
    color: Color.primaryBlue,
  },
  female: {
    fontFamily: FontFamily.captionNormalregular,
  },
  rectangleContainer: {
    display: "none",
  },
  rectangleIcon: {
    left: 0,
    position: "absolute",
    top: 0,
  },
  groupParent: {
    borderWidth: 1,
    marginTop: 8,
    borderRadius: Border.br_8xs,
    alignItems: "center",
    overflow: "hidden",
  },
  genderFormActive: {
    top: 33,
    right: 0,
    left: 0,
    position: "absolute",
  },
  chooseGender: {
    top: 138,
    height: 233,
    width: 343,
    left: 16,
    position: "absolute",
  },
  save: {
    lineHeight: 25,
    color: Color.backgroundWhite,
    width: 311,
    textAlign: "center",
    letterSpacing: 1,
    fontSize: FontSize.buttonText_size,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  saveButton: {
    marginLeft: -171.5,
    bottom: 50,
    backgroundColor: Color.primaryBlue,
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
    borderRadius: Border.br_8xs,
    alignItems: "center",
    overflow: "hidden",
  },
  headerChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    backgroundColor: Color.backgroundWhite,
  },
  gender: {
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
    bottom: "22.95%",
    width: "6.4%",
    height: "19.67%",
    maxWidth: "100%",
    top: "57.38%",
    display: "none",
  },
  systemIcon24pxlove: {
    right: "14.93%",
    left: "78.67%",
    bottom: "22.95%",
    width: "6.4%",
    height: "19.67%",
    maxWidth: "100%",
    top: "57.38%",
    display: "none",
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
  genderChoose: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
});

export default GenderChoose;
