import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Email = () => {
  return (
    <View style={styles.email}>
      <View style={[styles.changeEmail, styles.changeEmailPosition]}>
        <Text style={styles.changeEmail1}>Change Email</Text>
        <View style={[styles.emailForm, styles.emailFormBorder]}>
          <Image
            style={[styles.systemIcon24pxmessage, styles.changeEmailPosition]}
            contentFit="cover"
            source={require("../assets/system-icon24pxmessage.png")}
          />
          <Text style={[styles.derlaxyyahoocom, styles.weWillSendTypo]}>
            Derlaxy@yahoo.com
          </Text>
        </View>
        <Text style={[styles.weWillSend, styles.weWillSendTypo]}>
          We Will Send verification to your New Email
        </Text>
      </View>
      <View style={[styles.changeEmailButton, styles.homeIndicatorPosition]}>
        <Text style={[styles.changeEmail2, styles.changeEmail2Typo]}>
          Change Email
        </Text>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.headerChild, styles.textPosition]} />
        <Text style={styles.email1}>Email</Text>
        <View style={[styles.headerItem, styles.emailFormBorder]} />
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
        <View style={[styles.homeIndicator, styles.homeIndicatorPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  changeEmailPosition: {
    left: 16,
    position: "absolute",
  },
  emailFormBorder: {
    borderColor: "#ebf0ff",
    borderStyle: "solid",
    position: "absolute",
  },
  weWillSendTypo: {
    lineHeight: 22,
    fontSize: FontSize.formTextFill_size,
    textAlign: "left",
    letterSpacing: 1,
    position: "absolute",
  },
  homeIndicatorPosition: {
    left: "50%",
    position: "absolute",
  },
  changeEmail2Typo: {
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
  changeEmail1: {
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
  systemIcon24pxmessage: {
    top: 12,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  derlaxyyahoocom: {
    top: 13,
    left: 50,
    color: Color.neutralGrey,
    width: 277,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  emailForm: {
    top: 33,
    right: 0,
    borderWidth: 1,
    height: 48,
    borderRadius: Border.br_8xs,
    overflow: "hidden",
    left: 0,
    backgroundColor: Color.backgroundWhite,
  },
  weWillSend: {
    top: 89,
    fontFamily: FontFamily.captionNormalregular,
    color: Color.primaryBlue,
    left: 0,
  },
  changeEmail: {
    top: 138,
    width: 343,
    height: 111,
  },
  changeEmail2: {
    lineHeight: 25,
    color: Color.backgroundWhite,
    width: 311,
    textAlign: "center",
    letterSpacing: 1,
    fontSize: FontSize.buttonText_size,
    fontWeight: "700",
  },
  changeEmailButton: {
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
  email1: {
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
  email: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
});

export default Email;
