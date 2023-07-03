import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Profile = () => {
  return (
    <View style={styles.profile}>
      <View style={styles.profile1}>
        <Image
          style={[styles.profilePictureIcon, styles.listPosition]}
          contentFit="cover"
          source={require("../assets/profile-picture.png")}
        />
        <Text style={[styles.name, styles.nameFlexBox]}>Maximus Gold</Text>
        <Text style={[styles.username, styles.gender1Typo]}>@derlaxy</Text>
      </View>
      <View style={[styles.list, styles.listPosition]}>
        <View style={styles.gender}>
          <View style={[styles.genderChild, styles.text3Position]} />
          <Text style={[styles.gender1, styles.gender1Typo]}>Gender</Text>
          <Text style={[styles.male, styles.textTypo]}>Male</Text>
          <Image
            style={[styles.systemIcon24pxgender, styles.systemLayout1]}
            contentFit="cover"
            source={require("../assets/system-icon24pxgender.png")}
          />
          <Image
            style={[styles.systemIcon24pxright, styles.systemPosition]}
            contentFit="cover"
            source={require("../assets/system-icon24pxright.png")}
          />
        </View>
        <View style={styles.gender}>
          <View style={[styles.genderChild, styles.text3Position]} />
          <Text style={[styles.gender1, styles.gender1Typo]}>Birthday</Text>
          <Text style={[styles.text, styles.textTypo]}>12-12-2000</Text>
          <Image
            style={[styles.systemIcon24pxgender, styles.systemLayout1]}
            contentFit="cover"
            source={require("../assets/system-icon24pxdate.png")}
          />
          <Image
            style={[styles.systemIcon24pxright, styles.systemPosition]}
            contentFit="cover"
            source={require("../assets/system-icon24pxright.png")}
          />
        </View>
        <View style={styles.gender}>
          <View style={[styles.genderChild, styles.text3Position]} />
          <Text style={[styles.gender1, styles.gender1Typo]}>Email</Text>
          <Text style={[styles.derlaxyyahoocom, styles.textTypo]}>
            Derlaxy@yahoo.com
          </Text>
          <Image
            style={[styles.systemIcon24pxgender, styles.systemLayout1]}
            contentFit="cover"
            source={require("../assets/system-icon24pxmessage1.png")}
          />
          <Image
            style={[styles.systemIcon24pxright, styles.systemPosition]}
            contentFit="cover"
            source={require("../assets/system-icon24pxright.png")}
          />
        </View>
        <View style={styles.gender}>
          <View style={[styles.genderChild, styles.text3Position]} />
          <Text style={[styles.gender1, styles.gender1Typo]}>Phone Number</Text>
          <Text style={[styles.text1, styles.textTypo]}>(307) 555-0133</Text>
          <Image
            style={[styles.systemIcon24pxgender, styles.systemLayout1]}
            contentFit="cover"
            source={require("../assets/system-icon24pxphone1.png")}
          />
          <Image
            style={[styles.systemIcon24pxright, styles.systemPosition]}
            contentFit="cover"
            source={require("../assets/system-icon24pxright.png")}
          />
        </View>
        <View style={styles.gender}>
          <View style={[styles.genderChild, styles.text3Position]} />
          <Text style={[styles.gender1, styles.gender1Typo]}>
            Change Password
          </Text>
          <Text style={[styles.text2, styles.textTypo]}>•••••••••••••••••</Text>
          <Image
            style={[styles.systemIcon24pxgender, styles.systemLayout1]}
            contentFit="cover"
            source={require("../assets/system-icon24pxpassword2.png")}
          />
          <Image
            style={[styles.systemIcon24pxright, styles.systemPosition]}
            contentFit="cover"
            source={require("../assets/system-icon24pxright.png")}
          />
        </View>
      </View>
      <View style={[styles.header, styles.listPosition]}>
        <View style={[styles.genderChild, styles.text3Position]} />
        <Text style={styles.profile2}>Profile</Text>
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
      <View style={[styles.uiStatusBars, styles.listPosition]}>
        <Image
          style={[styles.batteryIcon, styles.systemLayout1]}
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
          <Text style={[styles.text3, styles.text3Position]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.uiHomeIndicator, styles.listPosition]}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listPosition: {
    left: 0,
    position: "absolute",
  },
  nameFlexBox: {
    textAlign: "center",
    color: Color.neutralDark,
  },
  gender1Typo: {
    textAlign: "left",
    fontSize: FontSize.formTextFill_size,
    letterSpacing: 1,
    position: "absolute",
  },
  text3Position: {
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  textTypo: {
    textAlign: "right",
    top: "29.63%",
    color: Color.neutralGrey,
    fontFamily: FontFamily.captionNormalregular,
    lineHeight: 22,
    fontSize: FontSize.formTextFill_size,
    letterSpacing: 1,
    position: "absolute",
  },
  systemLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  systemPosition: {
    left: "89.33%",
    right: "4.27%",
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
  profilePictureIcon: {
    width: 72,
    top: 0,
    left: 0,
    height: 72,
  },
  name: {
    top: 12,
    fontSize: FontSize.buttonText_size,
    lineHeight: 21,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
    left: 88,
    textAlign: "center",
    color: Color.neutralDark,
    position: "absolute",
  },
  username: {
    top: 37,
    color: Color.neutralGrey,
    fontFamily: FontFamily.captionNormalregular,
    lineHeight: 22,
    textAlign: "left",
    fontSize: FontSize.formTextFill_size,
    left: 88,
  },
  profile1: {
    top: 146,
    left: 16,
    width: 197,
    height: 72,
    position: "absolute",
  },
  genderChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    backgroundColor: Color.backgroundWhite,
  },
  gender1: {
    top: "33.33%",
    left: "14.93%",
    lineHeight: 18,
    textAlign: "left",
    fontSize: FontSize.formTextFill_size,
    color: Color.neutralDark,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  male: {
    left: "76.8%",
  },
  systemIcon24pxgender: {
    left: "4.27%",
    right: "89.33%",
    maxWidth: "100%",
    bottom: "27.78%",
    top: "27.78%",
    width: "6.4%",
    height: "44.44%",
  },
  systemIcon24pxright: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    bottom: "27.78%",
    top: "27.78%",
    width: "6.4%",
    height: "44.44%",
    right: "4.27%",
  },
  gender: {
    height: 54,
    width: 375,
  },
  text: {
    left: "66.67%",
  },
  derlaxyyahoocom: {
    left: "49.87%",
  },
  text1: {
    left: "59.2%",
  },
  text2: {
    left: "60.27%",
  },
  list: {
    top: 250,
    alignItems: "center",
    overflow: "hidden",
  },
  profile2: {
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
    left: "89.33%",
    right: "4.27%",
  },
  systemIcon24pxlove: {
    right: "14.93%",
    left: "78.67%",
  },
  header: {
    height: 122,
    width: 375,
    top: 0,
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
  text3: {
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
    width: 375,
    top: 0,
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
    width: 375,
  },
  profile: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
});

export default Profile;
