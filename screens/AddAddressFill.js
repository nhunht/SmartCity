import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, Border, FontFamily, Padding } from "../GlobalStyles";

const AddAddressFill = () => {
  return (
    <View style={styles.addAddressFill}>
      <View style={styles.country}>
        <Text style={styles.countryOrRegion}>Country or region</Text>
        <View
          style={[styles.countryFormAcitve, styles.formdefaultfillPosition]}
        >
          <View style={styles.vectorParent}>
            <Image
              style={[styles.frameChild, styles.childPosition]}
              contentFit="cover"
              source={require("../assets/rectangle-2561.png")}
            />
            <Text style={[styles.unitedStates, styles.unitedPosition]}>
              United States
            </Text>
            <Image
              style={styles.systemIcon24pxbottom}
              contentFit="cover"
              source={require("../assets/system-icon24pxbottom.png")}
            />
          </View>
          <View style={[styles.groupParent, styles.groupParentBorder]}>
            <View style={styles.vectorParent}>
              <Text style={[styles.unitedStates1, styles.unitedTypo]}>
                United States
              </Text>
              <View style={[styles.groupChild, styles.childPosition]} />
              <Text style={[styles.unitedStates2, styles.unitedTypo]}>
                United States
              </Text>
            </View>
            <View style={styles.vectorParent}>
              <View style={[styles.groupChild, styles.childPosition]} />
              <Text style={[styles.unitedKingdom, styles.unitedPosition]}>
                United Kingdom
              </Text>
            </View>
            <View style={styles.vectorParent}>
              <View style={[styles.groupChild, styles.childPosition]} />
              <Text style={[styles.unitedKingdom, styles.unitedPosition]}>
                Afghanistan
              </Text>
            </View>
            <View style={styles.vectorParent}>
              <View style={[styles.groupChild, styles.childPosition]} />
              <Text style={[styles.unitedKingdom, styles.unitedPosition]}>
                Albania
              </Text>
            </View>
            <View style={styles.vectorParent}>
              <Image
                style={[styles.rectangleIcon, styles.childPosition]}
                contentFit="cover"
                source={require("../assets/rectangle-392.png")}
              />
              <Text style={[styles.unitedKingdom, styles.unitedPosition]}>
                American Samoa
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.firstName, styles.nameLayout]}>
        <Text style={styles.countryOrRegion}>First Name</Text>
        <View style={[styles.formdefaultfill, styles.groupParentBorder]}>
          <Text style={[styles.unitedStates, styles.unitedPosition]}>
            Ahmad
          </Text>
        </View>
      </View>
      <View style={[styles.lastName, styles.nameLayout]}>
        <Text style={styles.countryOrRegion}>Last Name</Text>
        <View style={[styles.formdefaultfill, styles.groupParentBorder]}>
          <Text style={[styles.unitedStates, styles.unitedPosition]}>
            Khaidir
          </Text>
        </View>
      </View>
      <View style={[styles.streetAddress, styles.nameLayout]}>
        <Text style={styles.countryOrRegion}>Street Address</Text>
        <View style={[styles.formdefaultfill, styles.groupParentBorder]}>
          <Text style={[styles.unitedStates, styles.unitedPosition]}>
            7021 Parker Rd undefined
          </Text>
        </View>
      </View>
      <View style={[styles.streetAddress2Optional, styles.nameLayout]}>
        <Text style={styles.countryOrRegion}>Street Address 2 (Optional)</Text>
        <View style={[styles.formdefaultfill, styles.groupParentBorder]}>
          <Text style={[styles.unitedStates, styles.unitedPosition]}>
            4333 Edwards Rd undefined
          </Text>
        </View>
      </View>
      <View style={[styles.city, styles.nameLayout]}>
        <Text style={styles.countryOrRegion}>City</Text>
        <View style={[styles.formdefaultfill, styles.groupParentBorder]}>
          <Text style={[styles.unitedStates, styles.unitedPosition]}>
            Richardson
          </Text>
        </View>
      </View>
      <View style={[styles.stateprovinceregion, styles.nameLayout]}>
        <Text style={styles.countryOrRegion}>State/Province/Region</Text>
        <View style={[styles.formdefaultfill, styles.groupParentBorder]}>
          <Text style={[styles.unitedStates, styles.unitedPosition]}>
            Oregon
          </Text>
        </View>
      </View>
      <View style={[styles.zipCode, styles.nameLayout]}>
        <Text style={styles.countryOrRegion}>Zip Code</Text>
        <View style={[styles.formdefaultfill, styles.groupParentBorder]}>
          <Text style={[styles.unitedStates, styles.unitedPosition]}>
            57793
          </Text>
        </View>
      </View>
      <View style={[styles.phoneNumber, styles.nameLayout]}>
        <Text style={styles.countryOrRegion}>Phone Number</Text>
        <View style={[styles.formdefaultfill, styles.groupParentBorder]}>
          <Text style={[styles.unitedStates, styles.unitedPosition]}>
            (316) 555-0116
          </Text>
        </View>
      </View>
      <View style={[styles.addAddressReview, styles.homeIndicatorPosition]}>
        <Text style={[styles.addAddress, styles.addAddressTypo]}>
          Add Address
        </Text>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.headerChild, styles.text2Position]} />
        <Text style={styles.addAddress1}>Add Address</Text>
        <View style={styles.headerItem} />
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
      <View style={[styles.uiHomeIndicator, styles.headerPosition]}>
        <View style={[styles.homeIndicator, styles.homeIndicatorPosition]} />
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
    </View>
  );
};

const styles = StyleSheet.create({
  formdefaultfillPosition: {
    top: 33,
    left: 0,
    position: "absolute",
  },
  childPosition: {
    left: 0,
    height: 48,
    top: 0,
    width: 343,
    position: "absolute",
  },
  unitedPosition: {
    color: Color.neutralGrey,
    lineHeight: 22,
    fontSize: FontSize.formTextFill_size,
    top: 13,
    textAlign: "left",
    letterSpacing: 1,
    left: 16,
    position: "absolute",
  },
  groupParentBorder: {
    borderWidth: 1,
    borderColor: "#ebf0ff",
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    overflow: "hidden",
  },
  unitedTypo: {
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
  nameLayout: {
    height: 81,
    width: 343,
    left: 16,
    position: "absolute",
  },
  homeIndicatorPosition: {
    left: "50%",
    position: "absolute",
  },
  addAddressTypo: {
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
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
  countryOrRegion: {
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
    height: 48,
  },
  unitedStates: {
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
  vectorParent: {
    height: 48,
    width: 343,
  },
  unitedStates1: {
    opacity: 0.5,
    color: Color.neutralDark,
  },
  groupChild: {
    height: 48,
    backgroundColor: Color.backgroundWhite,
  },
  unitedStates2: {
    color: Color.primaryBlue,
  },
  unitedKingdom: {
    fontFamily: FontFamily.captionNormalregular,
  },
  rectangleIcon: {
    height: 48,
  },
  groupParent: {
    marginTop: 8,
    alignItems: "center",
  },
  countryFormAcitve: {
    alignItems: "center",
    overflow: "hidden",
  },
  country: {
    top: 138,
    height: 329,
    width: 343,
    left: 16,
    position: "absolute",
  },
  formdefaultfill: {
    right: 0,
    height: 48,
    top: 33,
    left: 0,
    position: "absolute",
    backgroundColor: Color.backgroundWhite,
  },
  firstName: {
    top: 491,
  },
  lastName: {
    top: 596,
  },
  streetAddress: {
    top: 701,
  },
  streetAddress2Optional: {
    top: 806,
  },
  city: {
    top: 911,
  },
  stateprovinceregion: {
    top: 1016,
  },
  zipCode: {
    top: 1121,
  },
  phoneNumber: {
    top: 1226,
  },
  addAddress: {
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
  addAddress1: {
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
    borderColor: "#ebf0ff",
    borderStyle: "solid",
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
  addAddressFill: {
    flex: 1,
    height: 1438,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
});

export default AddAddressFill;
