import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const ChangeName = () => {
  return (
    <View style={styles.changeName}>
      <View style={[styles.firstName, styles.nameLayout]}>
        <Text style={[styles.firstName1, styles.maximusTypo]}>First Name</Text>
        <View style={[styles.firstNameForm, styles.headerItemBorder]}>
          <Text style={[styles.maximus, styles.maximusTypo]}>Maximus</Text>
        </View>
      </View>
      <View style={[styles.lastName, styles.nameLayout]}>
        <Text style={[styles.firstName1, styles.maximusTypo]}>Last Name</Text>
        <View style={[styles.firstNameForm, styles.headerItemBorder]}>
          <Text style={[styles.maximus, styles.maximusTypo]}>Gold</Text>
        </View>
      </View>
      <View style={[styles.saveButton, styles.saveButtonPosition]}>
        <Text style={styles.save}>Save</Text>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.headerChild, styles.textPosition]} />
        <Text style={styles.name}>Name</Text>
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
  nameLayout: {
    height: 81,
    width: 343,
    left: 16,
    position: "absolute",
  },
  maximusTypo: {
    textAlign: "left",
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
    position: "absolute",
  },
  headerItemBorder: {
    borderColor: "#ebf0ff",
    borderStyle: "solid",
    position: "absolute",
  },
  saveButtonPosition: {
    left: "50%",
    position: "absolute",
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
  firstName1: {
    lineHeight: 21,
    color: Color.neutralDark,
    fontSize: FontSize.buttonText_size,
    textAlign: "left",
    left: 0,
    top: 0,
  },
  maximus: {
    top: 13,
    fontSize: FontSize.formTextFill_size,
    lineHeight: 22,
    color: Color.neutralGrey,
    textAlign: "left",
    left: 16,
  },
  firstNameForm: {
    top: 33,
    right: 0,
    borderWidth: 1,
    height: 48,
    borderRadius: Border.br_8xs,
    overflow: "hidden",
    left: 0,
    borderStyle: "solid",
    backgroundColor: Color.backgroundWhite,
  },
  firstName: {
    top: 138,
  },
  lastName: {
    top: 243,
  },
  save: {
    lineHeight: 25,
    color: Color.backgroundWhite,
    width: 311,
    textAlign: "center",
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
    fontSize: FontSize.buttonText_size,
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
    alignItems: "center",
    borderRadius: Border.br_8xs,
    overflow: "hidden",
  },
  headerChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    backgroundColor: Color.backgroundWhite,
  },
  name: {
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
  changeName: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
});

export default ChangeName;
