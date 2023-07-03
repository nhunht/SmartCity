import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const LoginFormWrong = () => {
  return (
    <View style={styles.loginFormWrong}>
      <View style={styles.icon}>
        <View style={[styles.iconChild, styles.iconChildPosition]} />
        <Image
          style={[styles.iconItem, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-400.png")}
        />
      </View>
      <Text style={[styles.welcomeToLafyuu, styles.text2Clr]}>
        Welcome to Lafyuu
      </Text>
      <Text style={[styles.signInTo, styles.signInToClr]}>
        Sign in to continue
      </Text>
      <View style={[styles.emailForm, styles.formLayout]}>
        <Image
          style={[styles.systemIcon24pxmessage, styles.otherIcongoogleLayout]}
          contentFit="cover"
          source={require("../assets/system-icon24pxmessage1.png")}
        />
        <Text style={[styles.derlaxyyahoocom, styles.derlaxyyahoocomLayout]}>
          Derlaxy@yahoo.com
        </Text>
      </View>
      <View style={[styles.passwordFormWrong, styles.loginBorder]}>
        <View style={[styles.formpasswordactive, styles.emailFormBorder]}>
          <Image
            style={[styles.systemIcon24pxmessage, styles.otherIcongoogleLayout]}
            contentFit="cover"
            source={require("../assets/system-icon24pxpassword1.png")}
          />
          <Text style={[styles.derlaxyyahoocom, styles.derlaxyyahoocomLayout]}>
            •••••••••••••••••
          </Text>
        </View>
        <Text
          style={[styles.oopsYourPassword, styles.passwordLayout]}
        >{` Oops! Your Password Is Not Correct `}</Text>
      </View>
      <View style={[styles.signInButton, styles.buttonShadowBox]}>
        <Text style={[styles.signIn, styles.signInTypo]}>Sign In</Text>
      </View>
      <View style={[styles.orLine, styles.formLayout]}>
        <Text style={styles.or}>OR</Text>
        <View style={[styles.orLineChild, styles.linePosition]} />
        <View style={[styles.orLineItem, styles.linePosition]} />
      </View>
      <View style={[styles.loginWithGoogleButton, styles.buttonShadowBox]}>
        <Image
          style={styles.otherIcongoogleLayout}
          contentFit="cover"
          source={require("../assets/other-icongoogle.png")}
        />
        <Text style={[styles.loginWithGoogle, styles.signInTypo]}>
          Login with Google
        </Text>
      </View>
      <View style={[styles.loginWithFacebookButton, styles.buttonShadowBox]}>
        <Image
          style={styles.otherIcongoogleLayout}
          contentFit="cover"
          source={require("../assets/other-iconfacebook.png")}
        />
        <Text style={[styles.loginWithGoogle, styles.signInTypo]}>
          Login with facebook
        </Text>
      </View>
      <Text style={[styles.forgotPassword, styles.passwordLayout]}>
        Forgot Password?
      </Text>
      <Text style={[styles.dontHaveAContainer, styles.passwordLayout]}>
        <Text style={styles.signInToClr}>Don’t have a account?</Text>
        <Text style={styles.registerTypo}>
          <Text style={styles.text1}>{` `}</Text>
          <Text style={styles.register1}>Register</Text>
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
          <Text style={[styles.text2, styles.text2Clr]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.uiHomeIndicator, styles.uiStatusBarsPosition]}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconChildPosition: {
    right: "0%",
    top: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text2Clr: {
    color: Color.neutralDark,
    textAlign: "center",
    position: "absolute",
  },
  signInToClr: {
    color: Color.neutralGrey,
    fontFamily: FontFamily.captionNormalregular,
  },
  formLayout: {
    width: 343,
    position: "absolute",
  },
  otherIcongoogleLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  derlaxyyahoocomLayout: {
    width: 277,
    color: Color.neutralGrey,
  },
  loginBorder: {
    borderColor: "#ebf0ff",
    borderWidth: 1,
    borderStyle: "solid",
    left: 16,
  },
  emailFormBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    overflow: "hidden",
  },
  passwordLayout: {
    lineHeight: 18,
    fontSize: FontSize.formTextFill_size,
    letterSpacing: 1,
    position: "absolute",
  },
  buttonShadowBox: {
    alignItems: "center",
    padding: Padding.p_base,
    flexDirection: "row",
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(64, 191, 255, 0.24)",
    borderRadius: Border.br_8xs,
    position: "absolute",
    overflow: "hidden",
  },
  signInTypo: {
    lineHeight: 25,
    fontSize: FontSize.buttonText_size,
    textAlign: "center",
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
  },
  linePosition: {
    height: 1,
    borderTopWidth: 1,
    top: 10,
    borderColor: "#ebf0ff",
    borderStyle: "solid",
    position: "absolute",
  },
  uiStatusBarsPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  iconChild: {
    height: "100%",
    bottom: "0%",
    borderRadius: Border.br_base,
    backgroundColor: Color.primaryBlue,
    left: "0%",
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
    top: 112,
    left: 152,
    width: 72,
    height: 72,
    position: "absolute",
  },
  welcomeToLafyuu: {
    top: 200,
    left: 104,
    fontSize: FontSize.headingH4_size,
    lineHeight: 24,
    textAlign: "center",
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
    color: Color.neutralDark,
  },
  signInTo: {
    top: 232,
    left: 127,
    lineHeight: 22,
    fontSize: FontSize.formTextFill_size,
    letterSpacing: 1,
    position: "absolute",
    textAlign: "center",
  },
  systemIcon24pxmessage: {
    top: 12,
    left: 16,
    position: "absolute",
  },
  derlaxyyahoocom: {
    top: 13,
    left: 50,
    textAlign: "left",
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.formTextFill_size,
    letterSpacing: 1,
    position: "absolute",
  },
  emailForm: {
    top: 282,
    borderColor: "#40bfff",
    height: 48,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    overflow: "hidden",
    left: 16,
    backgroundColor: Color.backgroundWhite,
  },
  formpasswordactive: {
    height: "64.86%",
    bottom: "35.14%",
    borderColor: "#fb7181",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  oopsYourPassword: {
    top: "75.68%",
    color: Color.primaryRed,
    textAlign: "left",
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    left: "0%",
  },
  passwordFormWrong: {
    top: 338,
    height: 74,
    width: 343,
    position: "absolute",
  },
  signIn: {
    color: Color.backgroundWhite,
    width: 311,
  },
  signInButton: {
    marginLeft: -171.5,
    top: 428,
    left: "50%",
    backgroundColor: Color.primaryBlue,
  },
  or: {
    left: 162,
    letterSpacing: 0.1,
    lineHeight: 21,
    top: 0,
    fontSize: FontSize.buttonText_size,
    textAlign: "left",
    color: Color.neutralGrey,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    position: "absolute",
  },
  orLineChild: {
    width: 135,
    left: 0,
    borderTopWidth: 1,
    top: 10,
  },
  orLineItem: {
    left: 206,
    width: 138,
    borderTopWidth: 1,
    top: 10,
  },
  orLine: {
    top: 506,
    height: 21,
    left: 16,
  },
  loginWithGoogle: {
    marginLeft: 10,
    width: 277,
    color: Color.neutralGrey,
  },
  loginWithGoogleButton: {
    top: 543,
    borderColor: "#ebf0ff",
    borderWidth: 1,
    borderStyle: "solid",
    left: 16,
  },
  loginWithFacebookButton: {
    top: 608,
    borderColor: "#ebf0ff",
    borderWidth: 1,
    borderStyle: "solid",
    left: 16,
  },
  forgotPassword: {
    top: 681,
    left: 129,
    color: Color.primaryBlue,
    textAlign: "center",
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  text1: {
    color: Color.primaryPurple,
  },
  register1: {
    color: Color.primaryBlue,
  },
  registerTypo: {
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  dontHaveAContainer: {
    top: 707,
    left: 86,
    textAlign: "center",
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
    left: "50%",
    position: "absolute",
  },
  uiHomeIndicator: {
    bottom: 0,
    height: 34,
  },
  loginFormWrong: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
});

export default LoginFormWrong;
