import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const AddAddress = () => {
  return (
    <View style={styles.addAddress}>
      <View style={[styles.country, styles.nameLayout]}>
        <Text style={styles.countryOrRegion}>Country or region</Text>
        <View
          style={[
            styles.formselectDropdowndefault,
            styles.firstNameFormPosition,
          ]}
        >
          <Image
            style={styles.formselectDropdowndefaultChild}
            contentFit="cover"
            source={require("../assets/rectangle-256.png")}
          />
          <Text style={[styles.unitedStates, styles.firstName2Typo]}>
            United States
          </Text>
          <Image
            style={styles.systemIcon24pxbottom}
            contentFit="cover"
            source={require("../assets/system-icon24pxbottom.png")}
          />
        </View>
      </View>
      <View style={[styles.firstName, styles.nameLayout]}>
        <Text style={styles.countryOrRegion}>First Name</Text>
        <View style={[styles.firstNameForm, styles.headerItemBorder]}>
          <Text style={[styles.firstName2, styles.firstName2Typo]}>
            FIrst Name
          </Text>
        </View>
      </View>
      <View style={[styles.lastName, styles.nameLayout]}>
        <Text style={styles.countryOrRegion}>Last Name</Text>
        <View style={[styles.firstNameForm, styles.headerItemBorder]}>
          <Text style={[styles.firstName2, styles.firstName2Typo]}>
            Last Name
          </Text>
        </View>
      </View>
      <View style={[styles.streetAddress, styles.nameLayout]}>
        <Text style={styles.countryOrRegion}>Street Address</Text>
        <View style={[styles.firstNameForm, styles.headerItemBorder]}>
          <Text style={[styles.firstName2, styles.firstName2Typo]}>
            Placeholder
          </Text>
        </View>
      </View>
      <View style={[styles.streetAddress2Optional, styles.nameLayout]}>
        <Text style={styles.countryOrRegion}>Street Address 2 (Optional)</Text>
        <View style={[styles.firstNameForm, styles.headerItemBorder]}>
          <Text style={[styles.firstName2, styles.firstName2Typo]}>
            Placeholder
          </Text>
        </View>
      </View>
      <View style={[styles.city, styles.nameLayout]}>
        <Text style={styles.countryOrRegion}>City</Text>
        <View style={[styles.firstNameForm, styles.headerItemBorder]}>
          <Text style={[styles.firstName2, styles.firstName2Typo]}>
            Placeholder
          </Text>
        </View>
      </View>
      <View style={[styles.stateprovinceregion, styles.nameLayout]}>
        <Text style={styles.countryOrRegion}>State/Province/Region</Text>
        <View style={[styles.firstNameForm, styles.headerItemBorder]}>
          <Text style={[styles.firstName2, styles.firstName2Typo]}>
            Placeholder
          </Text>
        </View>
      </View>
      <View style={[styles.zipCode, styles.nameLayout]}>
        <Text style={styles.countryOrRegion}>Zip Code</Text>
        <View style={[styles.firstNameForm, styles.headerItemBorder]}>
          <Text style={[styles.firstName2, styles.firstName2Typo]}>
            Placeholder
          </Text>
        </View>
      </View>
      <View style={[styles.phoneNumber, styles.nameLayout]}>
        <Text style={styles.countryOrRegion}>Phone Number</Text>
        <View style={[styles.firstNameForm, styles.headerItemBorder]}>
          <Text style={[styles.firstName2, styles.firstName2Typo]}>
            Placeholder
          </Text>
        </View>
      </View>
      <View style={[styles.addAddressReview, styles.homeIndicatorPosition]}>
        <Text style={[styles.addAddress1, styles.addAddress1Typo]}>
          Add Address
        </Text>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.headerChild, styles.textPosition]} />
        <Text style={styles.addAddress2}>Add Address</Text>
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
      <View style={[styles.uiHomeIndicator, styles.headerPosition]}>
        <View style={[styles.homeIndicator, styles.homeIndicatorPosition]} />
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
  firstNameFormPosition: {
    top: 33,
    left: 0,
  },
  firstName2Typo: {
    color: Color.neutralGrey,
    lineHeight: 22,
    fontSize: FontSize.formTextFill_size,
    textAlign: "left",
    letterSpacing: 1,
  },
  headerItemBorder: {
    borderColor: "#ebf0ff",
    borderStyle: "solid",
    position: "absolute",
  },
  homeIndicatorPosition: {
    left: "50%",
    position: "absolute",
  },
  addAddress1Typo: {
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
  countryOrRegion: {
    lineHeight: 21,
    textAlign: "left",
    left: 0,
    color: Color.neutralDark,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
    fontSize: FontSize.buttonText_size,
    top: 0,
    position: "absolute",
  },
  formselectDropdowndefaultChild: {
    width: 344,
    height: 49,
    borderRadius: Border.br_8xs,
  },
  unitedStates: {
    marginTop: 8,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  systemIcon24pxbottom: {
    width: 24,
    height: 24,
    marginTop: 8,
    overflow: "hidden",
  },
  formselectDropdowndefault: {
    position: "absolute",
  },
  country: {
    top: 138,
  },
  firstName2: {
    top: 13,
    fontFamily: FontFamily.captionNormalregular,
    display: "none",
    left: 16,
    lineHeight: 22,
    fontSize: FontSize.formTextFill_size,
    position: "absolute",
  },
  firstNameForm: {
    right: 0,
    borderWidth: 1,
    height: 48,
    borderRadius: Border.br_8xs,
    top: 33,
    left: 0,
    overflow: "hidden",
    backgroundColor: Color.backgroundWhite,
  },
  firstName: {
    top: 243,
  },
  lastName: {
    top: 348,
  },
  streetAddress: {
    top: 453,
  },
  streetAddress2Optional: {
    top: 558,
  },
  city: {
    top: 663,
  },
  stateprovinceregion: {
    top: 768,
  },
  zipCode: {
    top: 873,
  },
  phoneNumber: {
    top: 978,
  },
  addAddress1: {
    lineHeight: 25,
    color: Color.backgroundWhite,
    width: 311,
    textAlign: "center",
    letterSpacing: 1,
    fontSize: FontSize.buttonText_size,
    fontWeight: "700",
  },
  addAddressReview: {
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
  addAddress2: {
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
    width: 375,
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
  addAddress: {
    flex: 1,
    height: 1186,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
});

export default AddAddress;
