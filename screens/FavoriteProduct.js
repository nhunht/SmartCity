import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Padding, Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const FavoriteProduct = () => {
  return (
    <View style={styles.favoriteProduct}>
      <View style={[styles.product01, styles.productBorder1]}>
        <Image
          style={styles.imageProductIcon}
          contentFit="cover"
          source={require("../assets/image-product3.png")}
        />
        <View style={styles.frame}>
          <View style={styles.nikeAirMax270ReactEngParent}>
            <Text style={[styles.nikeAirMax, styles.textTypo]}>
              Nike Air Max 270 React ENG
            </Text>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-391.png")}
            />
          </View>
          <View style={[styles.frameParent, styles.groupFlexBox]}>
            <View style={styles.nikeAirMax270ReactEngParent}>
              <Text style={[styles.text, styles.textTypo]}>$299,43</Text>
              <View style={[styles.group, styles.groupFlexBox]}>
                <Text style={[styles.text1, styles.offTypo]}>$534,33</Text>
                <Text style={[styles.off, styles.offTypo]}>24% Off</Text>
              </View>
            </View>
            <Image
              style={styles.systemIcon24pxtrash}
              contentFit="cover"
              source={require("../assets/system-icon24pxtrash.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.product02, styles.productBorder1]}>
        <Image
          style={styles.imageProductIcon}
          contentFit="cover"
          source={require("../assets/image-product4.png")}
        />
        <View style={styles.frame}>
          <View style={styles.nikeAirMax270ReactEngParent}>
            <Text style={[styles.nikeAirMax, styles.textTypo]}>
              Nike Air Max 270 React ENG
            </Text>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-391.png")}
            />
          </View>
          <View style={[styles.frameParent, styles.groupFlexBox]}>
            <View style={styles.nikeAirMax270ReactEngParent}>
              <Text style={[styles.text, styles.textTypo]}>$299,43</Text>
              <View style={[styles.group, styles.groupFlexBox]}>
                <Text style={[styles.text1, styles.offTypo]}>$534,33</Text>
                <Text style={[styles.off, styles.offTypo]}>24% Off</Text>
              </View>
            </View>
            <Image
              style={styles.systemIcon24pxtrash}
              contentFit="cover"
              source={require("../assets/system-icon24pxtrash.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.product03, styles.productBorder]}>
        <Image
          style={styles.imageProductIcon}
          contentFit="cover"
          source={require("../assets/image-product5.png")}
        />
        <View style={styles.frame}>
          <View style={styles.nikeAirMax270ReactEngParent}>
            <Text style={[styles.nikeAirMax, styles.textTypo]}>
              Nike Air Max 270 React ENG
            </Text>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-391.png")}
            />
          </View>
          <View style={[styles.frameParent, styles.groupFlexBox]}>
            <View style={styles.nikeAirMax270ReactEngParent}>
              <Text style={[styles.text, styles.textTypo]}>$299,43</Text>
              <View style={[styles.group, styles.groupFlexBox]}>
                <Text style={[styles.text1, styles.offTypo]}>$534,33</Text>
                <Text style={[styles.off, styles.offTypo]}>24% Off</Text>
              </View>
            </View>
            <Image
              style={styles.systemIcon24pxtrash}
              contentFit="cover"
              source={require("../assets/system-icon24pxtrash.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.product04, styles.productBorder]}>
        <Image
          style={styles.imageProductIcon}
          contentFit="cover"
          source={require("../assets/image-product6.png")}
        />
        <View style={styles.frame}>
          <View style={styles.nikeAirMax270ReactEngParent}>
            <Text style={[styles.nikeAirMax, styles.textTypo]}>
              Nike Air Max 270 React ENG
            </Text>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-391.png")}
            />
          </View>
          <View style={[styles.frameParent, styles.groupFlexBox]}>
            <View style={styles.nikeAirMax270ReactEngParent}>
              <Text style={[styles.text, styles.textTypo]}>$299,43</Text>
              <View style={[styles.group, styles.groupFlexBox]}>
                <Text style={[styles.text1, styles.offTypo]}>$534,33</Text>
                <Text style={[styles.off, styles.offTypo]}>24% Off</Text>
              </View>
            </View>
            <Image
              style={styles.systemIcon24pxtrash}
              contentFit="cover"
              source={require("../assets/system-icon24pxtrash.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.headernormalHeader, styles.uiStatusBarsPosition]}>
        <View style={[styles.headernormalHeaderChild, styles.text8Position]} />
        <Text style={styles.favoriteProduct1}>Favorite Product</Text>
        <View style={styles.headernormalHeaderItem} />
        <Image
          style={[styles.systemIcon24pxleft, styles.batteryIconLayout]}
          contentFit="cover"
          source={require("../assets/system-icon24pxleft.png")}
        />
        <Image
          style={[styles.systemIcon24pxmore, styles.systemLayout]}
          contentFit="cover"
          source={require("../assets/system-icon24pxmore.png")}
        />
        <Image
          style={[styles.systemIcon24pxsearch, styles.systemLayout]}
          contentFit="cover"
          source={require("../assets/system-icon24pxsearch.png")}
        />
      </View>
      <View style={[styles.uiStatusBars, styles.uiStatusBarsPosition]}>
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
          <Text style={[styles.text8, styles.text8Position]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.uiHomeIndicator, styles.uiStatusBarsPosition]}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productBorder1: {
    padding: Padding.p_base,
    borderWidth: 1,
    top: 138,
    borderColor: "#ebf0ff",
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.backgroundWhite,
  },
  textTypo: {
    textAlign: "left",
    letterSpacing: 1,
    fontSize: FontSize.formTextFill_size,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  groupFlexBox: {
    flexDirection: "row",
    overflow: "hidden",
  },
  offTypo: {
    lineHeight: 15,
    fontSize: FontSize.captionNormalbold_size,
    textAlign: "left",
    letterSpacing: 1,
  },
  productBorder: {
    top: 432,
    padding: Padding.p_base,
    borderWidth: 1,
    borderColor: "#ebf0ff",
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.backgroundWhite,
  },
  uiStatusBarsPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  text8Position: {
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
  imageProductIcon: {
    height: 133,
    width: 133,
    borderRadius: Border.br_8xs,
  },
  nikeAirMax: {
    lineHeight: 18,
    color: Color.neutralDark,
    width: 133,
  },
  frameChild: {
    width: 68,
    height: 12,
    marginTop: 4,
  },
  nikeAirMax270ReactEngParent: {
    overflow: "hidden",
  },
  text: {
    lineHeight: 22,
    color: Color.primaryBlue,
  },
  text1: {
    textDecoration: "line-through",
    fontFamily: FontFamily.captionNormalregular,
    color: Color.neutralGrey,
  },
  off: {
    color: Color.primaryRed,
    width: 51,
    marginLeft: 8,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    fontSize: FontSize.captionNormalbold_size,
  },
  group: {
    marginTop: 4,
    alignItems: "center",
  },
  systemIcon24pxtrash: {
    width: 24,
    height: 24,
    marginLeft: 8,
    overflow: "hidden",
  },
  frameParent: {
    marginTop: 16,
  },
  frame: {
    marginTop: 8,
    alignItems: "center",
    overflow: "hidden",
  },
  product01: {
    left: 16,
  },
  product02: {
    left: 194,
  },
  product03: {
    left: 16,
  },
  product04: {
    left: 194,
  },
  headernormalHeaderChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    backgroundColor: Color.backgroundWhite,
  },
  favoriteProduct1: {
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
  headernormalHeaderItem: {
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
  systemIcon24pxmore: {
    right: "4.27%",
    left: "89.33%",
  },
  systemIcon24pxsearch: {
    right: "14.93%",
    left: "78.67%",
  },
  headernormalHeader: {
    height: 122,
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
  text8: {
    height: "85.71%",
    top: "9.52%",
    fontSize: FontSize.size_mini,
    letterSpacing: -0.3,
    fontWeight: "600",
    fontFamily: FontFamily.sFProTextSemibold,
    textAlign: "center",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
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
  },
  favoriteProduct: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
});

export default FavoriteProduct;
