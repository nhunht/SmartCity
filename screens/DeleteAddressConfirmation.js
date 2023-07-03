import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, Padding, Border, FontSize, FontFamily } from "../GlobalStyles";

const DeleteAddressConfirmation = () => {
  return (
    <View style={styles.deleteAddressConfirmation}>
      <Image
        style={styles.alertIcon}
        contentFit="cover"
        source={require("../assets/alert-icon.png")}
      />
      <Text style={[styles.confirmation, styles.textFlexBox]}>
        Confirmation
      </Text>
      <Text style={styles.areYouSure}>Are you sure wanna delete address</Text>
      <View style={[styles.deleteButton, styles.buttonShadowBox]}>
        <Text style={[styles.delete, styles.deleteTypo]}>Delete</Text>
      </View>
      <View style={[styles.cancelButton, styles.buttonShadowBox]}>
        <Text style={[styles.cancel, styles.deleteTypo]}>Cancel</Text>
      </View>
      <View style={[styles.uiStatusBars, styles.uiStatusBarsPosition]}>
        <Image
          style={styles.batteryIcon}
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
          <Text style={[styles.text, styles.textFlexBox]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.uiHomeIndicator, styles.uiStatusBarsPosition]}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "center",
    color: Color.neutralDark,
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
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  deleteTypo: {
    width: 311,
    lineHeight: 25,
    fontSize: FontSize.buttonText_size,
    textAlign: "center",
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
  },
  uiStatusBarsPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  alertIcon: {
    top: 236,
    left: 121,
    width: 132,
    height: 132,
    position: "absolute",
  },
  confirmation: {
    top: 344,
    left: 101,
    fontSize: FontSize.headingH2_size,
    lineHeight: 36,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
    color: Color.neutralDark,
  },
  areYouSure: {
    top: 388,
    left: 36,
    fontSize: FontSize.formTextFill_size,
    lineHeight: 22,
    fontFamily: FontFamily.captionNormalregular,
    width: 303,
    opacity: 0.5,
    textAlign: "center",
    color: Color.neutralDark,
    letterSpacing: 1,
    position: "absolute",
  },
  delete: {
    color: Color.backgroundWhite,
  },
  deleteButton: {
    bottom: 329,
    backgroundColor: Color.primaryBlue,
  },
  cancel: {
    color: Color.neutralGrey,
  },
  cancelButton: {
    top: 499,
    borderStyle: "solid",
    borderColor: "#ebf0ff",
    borderWidth: 1,
  },
  batteryIcon: {
    height: "25.76%",
    width: "6.49%",
    top: "39.39%",
    right: "3.91%",
    bottom: "34.85%",
    left: "89.6%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
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
    left: "0%",
    fontSize: FontSize.size_mini,
    letterSpacing: -0.3,
    fontWeight: "600",
    fontFamily: FontFamily.sFProTextSemibold,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
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
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.primarySoftGrey,
    width: 134,
    height: 5,
    left: "50%",
    opacity: 0.5,
    position: "absolute",
  },
  uiHomeIndicator: {
    bottom: 0,
    height: 34,
  },
  deleteAddressConfirmation: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
});

export default DeleteAddressConfirmation;
