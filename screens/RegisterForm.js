import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const RegisterForm = () => {
  return (
    <View style={styles.registerForm}>
      <View style={styles.icon}>
        <View style={styles.iconChild} />
        <Image
          style={[styles.iconItem, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-400.png")}
        />
      </View>
      <Text style={[styles.letsGetStarted, styles.text1Clr]}>
        Let’s Get Started
      </Text>
      <Text style={[styles.createAnNew, styles.fullNameClr]}>
        Create an new account
      </Text>
      <View style={[styles.fullNameForm, styles.formLayout]}>
        <Image
          style={styles.systemIcon24pxuser}
          contentFit="cover"
          source={require("../assets/system-icon24pxuser1.png")}
        />
        <Text style={[styles.fullName, styles.fullNameClr]}>Full Name</Text>
      </View>
      <View style={[styles.emailForm, styles.formLayout]}>
        <Image
          style={styles.systemIcon24pxuser}
          contentFit="cover"
          source={require("../assets/system-icon24pxmessage.png")}
        />
        <Text style={[styles.fullName, styles.fullNameClr]}>Your Email</Text>
      </View>
      <View style={[styles.passwordForm, styles.formLayout]}>
        <Image
          style={styles.systemIcon24pxuser}
          contentFit="cover"
          source={require("../assets/system-icon24pxpassword.png")}
        />
        <Text style={[styles.fullName, styles.fullNameClr]}>Password</Text>
      </View>
      <View style={[styles.passwordAgainFrom, styles.formLayout]}>
        <Image
          style={styles.systemIcon24pxuser}
          contentFit="cover"
          source={require("../assets/system-icon24pxpassword.png")}
        />
        <Text style={[styles.fullName, styles.fullNameClr]}>
          Password Again
        </Text>
      </View>
      <View style={[styles.signUpButton, styles.signUpButtonPosition]}>
        <Text style={[styles.signUp, styles.signTypo]}>Sign Up</Text>
      </View>
      <Text style={styles.haveAAccountContainer}>
        <Text style={styles.fullNameClr}>have a account?</Text>
        <Text style={styles.signTypo}>
          <Text style={styles.text}>{` `}</Text>
          <Text style={styles.signIn1}>Sign In</Text>
        </Text>
      </Text>
      <View style={[styles.uiStatusBars, styles.uiStatusBarsPosition]}>
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
        <View style={styles.timeStyle}>
          <Text style={[styles.text1, styles.text1Clr]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.uiHomeIndicator, styles.uiStatusBarsPosition]}>
        <View style={[styles.homeIndicator, styles.signUpButtonPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text1Clr: {
    color: Color.neutralDark,
    textAlign: "center",
    position: "absolute",
  },
  fullNameClr: {
    color: Color.neutralGrey,
    fontFamily: FontFamily.captionNormalregular,
  },
  formLayout: {
    height: 48,
    width: 343,
    borderWidth: 1,
    borderColor: "#ebf0ff",
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    left: 16,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.backgroundWhite,
  },
  signUpButtonPosition: {
    left: "50%",
    position: "absolute",
  },
  signTypo: {
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  uiStatusBarsPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  iconChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_base,
    backgroundColor: Color.primaryBlue,
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  iconItem: {
    height: "44.44%",
    width: "44.44%",
    top: "27.78%",
    right: "27.78%",
    bottom: "27.78%",
    left: "27.78%",
  },
  icon: {
    top: 155,
    left: 151,
    width: 72,
    height: 72,
    position: "absolute",
  },
  letsGetStarted: {
    top: 243,
    left: 116,
    fontSize: FontSize.headingH4_size,
    lineHeight: 24,
    textAlign: "center",
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
  },
  createAnNew: {
    top: 275,
    left: 111,
    lineHeight: 22,
    fontFamily: FontFamily.captionNormalregular,
    fontSize: FontSize.formTextFill_size,
    letterSpacing: 1,
    position: "absolute",
    textAlign: "center",
  },
  systemIcon24pxuser: {
    top: 12,
    width: 24,
    height: 24,
    left: 16,
    position: "absolute",
    overflow: "hidden",
  },
  fullName: {
    top: 13,
    left: 50,
    textAlign: "left",
    width: 277,
    lineHeight: 22,
    fontFamily: FontFamily.captionNormalregular,
    fontSize: FontSize.formTextFill_size,
    letterSpacing: 1,
    position: "absolute",
  },
  fullNameForm: {
    top: 325,
  },
  emailForm: {
    top: 381,
  },
  passwordForm: {
    top: 437,
  },
  passwordAgainFrom: {
    top: 493,
  },
  signUp: {
    fontSize: FontSize.buttonText_size,
    lineHeight: 25,
    color: Color.backgroundWhite,
    width: 311,
    textAlign: "center",
    letterSpacing: 1,
    fontWeight: "700",
  },
  signUpButton: {
    marginLeft: -171.5,
    top: 557,
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
    left: "50%",
    backgroundColor: Color.primaryBlue,
    overflow: "hidden",
  },
  text: {
    color: Color.primaryPurple,
  },
  signIn1: {
    color: Color.primaryBlue,
  },
  haveAAccountContainer: {
    top: 638,
    left: 109,
    lineHeight: 18,
    fontSize: FontSize.formTextFill_size,
    textAlign: "center",
    letterSpacing: 1,
    position: "absolute",
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
  text1: {
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
    color: Color.neutralDark,
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
    top: 0,
    height: 44,
    backgroundColor: Color.backgroundWhite,
    width: 375,
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
  registerForm: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
});

export default RegisterForm;
