import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Padding, Border, Color } from "../GlobalStyles";

const OfferScreen1 = () => {
  return (
    <View style={styles.offerScreen}>
      <View style={[styles.product01, styles.productFlexBox]}>
        <Image
          style={styles.imageProductIcon}
          contentFit="cover"
          source={require("../assets/image-product4.png")}
        />
        <View style={styles.frame}>
          <View style={styles.nikeAirMax270ReactEngParent}>
            <Text style={[styles.nikeAirMax, styles.textTypo2]}>
              Nike Air Max 270 React ENG
            </Text>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-391.png")}
            />
          </View>
          <View style={styles.parent}>
            <Text style={[styles.text, styles.textTypo2]}>$299,43</Text>
            <View style={[styles.group, styles.productFlexBox]}>
              <Text style={[styles.text1, styles.offTypo]}>$534,33</Text>
              <Text style={[styles.off, styles.offTypo]}>24% Off</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.product02, styles.productFlexBox]}>
        <Image
          style={styles.imageProductIcon}
          contentFit="cover"
          source={require("../assets/image-product3.png")}
        />
        <View style={styles.frame}>
          <View style={styles.nikeAirMax270ReactEngParent}>
            <Text style={[styles.nikeAirMax, styles.textTypo2]}>
              Nike Air Max 270 React ENG
            </Text>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-391.png")}
            />
          </View>
          <View style={styles.parent}>
            <Text style={[styles.text, styles.textTypo2]}>$299,43</Text>
            <View style={[styles.group, styles.productFlexBox]}>
              <Text style={[styles.text1, styles.offTypo]}>$534,33</Text>
              <Text style={[styles.off, styles.offTypo]}>24% Off</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.product03, styles.productBorder]}>
        <Image
          style={styles.imageProductIcon}
          contentFit="cover"
          source={require("../assets/image-product7.png")}
        />
        <View style={styles.frame}>
          <View style={styles.nikeAirMax270ReactEngParent}>
            <Text style={[styles.nikeAirMax, styles.textTypo2]}>
              Nike Air Max 270 React ENG
            </Text>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-391.png")}
            />
          </View>
          <View style={styles.parent}>
            <Text style={[styles.text, styles.textTypo2]}>$299,43</Text>
            <View style={[styles.group, styles.productFlexBox]}>
              <Text style={[styles.text1, styles.offTypo]}>$534,33</Text>
              <Text style={[styles.off, styles.offTypo]}>24% Off</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.product04, styles.productBorder]}>
        <Image
          style={styles.imageProductIcon}
          contentFit="cover"
          source={require("../assets/image-product8.png")}
        />
        <View style={styles.frame}>
          <View style={styles.nikeAirMax270ReactEngParent}>
            <Text style={[styles.nikeAirMax, styles.textTypo2]}>
              Nike Air Max 270 React ENG
            </Text>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-391.png")}
            />
          </View>
          <View style={styles.parent}>
            <Text style={[styles.text, styles.textTypo2]}>$299,43</Text>
            <View style={[styles.group, styles.productFlexBox]}>
              <Text style={[styles.text1, styles.offTypo]}>$534,33</Text>
              <Text style={[styles.off, styles.offTypo]}>24% Off</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.offerBanner}>
        <Image
          style={styles.promotionImageIcon}
          contentFit="cover"
          source={require("../assets/promotion-image.png")}
        />
        <Text style={styles.title}>{`Super Flash Sale
50% Off`}</Text>
        <View style={styles.promotionPriod}>
          <View style={[styles.rectangleParent, styles.rectanglePosition]}>
            <View style={[styles.groupChild, styles.childPosition]} />
            <Text style={[styles.text8, styles.textFlexBox]}>08</Text>
          </View>
          <Text style={[styles.text9, styles.textTypo]}>:</Text>
          <Text style={[styles.text10, styles.textTypo]}>:</Text>
          <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
            <View style={[styles.groupChild, styles.childPosition]} />
            <Text style={[styles.text8, styles.textFlexBox]}>34</Text>
          </View>
          <View style={[styles.rectangleContainer, styles.childPosition]}>
            <View style={[styles.groupChild, styles.childPosition]} />
            <Text style={[styles.text12, styles.textFlexBox]}>52</Text>
          </View>
        </View>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.headerChild, styles.childPosition]} />
        <Text style={styles.superFlashSale}>Super Flash Sale</Text>
        <View style={styles.headerItem} />
        <Image
          style={[styles.systemIcon24pxleft, styles.systemLayout]}
          contentFit="cover"
          source={require("../assets/system-icon24pxleft.png")}
        />
        <Image
          style={[styles.systemIcon24pxsearch, styles.systemLayout]}
          contentFit="cover"
          source={require("../assets/system-icon24pxsearch.png")}
        />
        <Image
          style={[styles.systemIcon24pxlove, styles.systemLayout]}
          contentFit="cover"
          source={require("../assets/add-favorite-icon.png")}
        />
      </View>
      <View style={[styles.uiHomeIndicator, styles.headerPosition]}>
        <View style={styles.homeIndicator} />
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
          <Text style={[styles.text13, styles.textFlexBox]}>9:41</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  textTypo2: {
    textAlign: "left",
    letterSpacing: 1,
    fontSize: FontSize.formTextFill_size,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  offTypo: {
    lineHeight: 15,
    fontSize: FontSize.captionNormalbold_size,
    textAlign: "left",
    letterSpacing: 1,
  },
  productBorder: {
    top: 654,
    alignItems: "center",
    padding: Padding.p_base,
    borderWidth: 1,
    borderColor: "#ebf0ff",
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.backgroundWhite,
  },
  rectanglePosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "28%",
    position: "absolute",
  },
  childPosition: {
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "center",
    color: Color.neutralDark,
    position: "absolute",
  },
  textTypo: {
    lineHeight: 21,
    letterSpacing: 0.1,
    fontSize: FontSize.buttonText_size,
    top: "24.39%",
    textAlign: "center",
    color: Color.backgroundWhite,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    position: "absolute",
  },
  headerPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  systemLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
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
    textAlign: "left",
    letterSpacing: 1,
    fontSize: FontSize.formTextFill_size,
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
    textAlign: "left",
    letterSpacing: 1,
    fontSize: FontSize.formTextFill_size,
  },
  text1: {
    textDecoration: "line-through",
    fontFamily: FontFamily.captionNormalregular,
    color: Color.neutralGrey,
  },
  off: {
    color: Color.primaryRed,
    marginLeft: 8,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    fontSize: FontSize.captionNormalbold_size,
  },
  group: {
    height: 15,
    flexDirection: "row",
    marginTop: 4,
  },
  parent: {
    marginTop: 16,
    overflow: "hidden",
  },
  frame: {
    marginTop: 8,
    overflow: "hidden",
  },
  product01: {
    padding: Padding.p_base,
    borderWidth: 1,
    top: 360,
    alignItems: "center",
    borderColor: "#ebf0ff",
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    position: "absolute",
    backgroundColor: Color.backgroundWhite,
    left: 16,
  },
  product02: {
    left: 194,
    padding: Padding.p_base,
    borderWidth: 1,
    top: 360,
    alignItems: "center",
    borderColor: "#ebf0ff",
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    position: "absolute",
    backgroundColor: Color.backgroundWhite,
  },
  product03: {
    left: 16,
  },
  product04: {
    left: 194,
  },
  promotionImageIcon: {
    left: 0,
    top: 0,
    height: 206,
    width: 343,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  title: {
    top: 32,
    fontSize: FontSize.headingH2_size,
    lineHeight: 36,
    color: Color.backgroundWhite,
    left: 24,
    textAlign: "left",
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
    position: "absolute",
  },
  groupChild: {
    left: "0%",
    borderRadius: Border.br_8xs,
    right: "0%",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
  text8: {
    left: "21.43%",
    lineHeight: 24,
    fontSize: FontSize.headingH4_size,
    top: "19.51%",
    textAlign: "center",
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
  },
  rectangleParent: {
    right: "72%",
    left: "0%",
  },
  text9: {
    left: "30.67%",
  },
  text10: {
    left: "66.67%",
  },
  rectangleGroup: {
    right: "36%",
    left: "36%",
  },
  text12: {
    left: "26.19%",
    lineHeight: 24,
    fontSize: FontSize.headingH4_size,
    top: "19.51%",
    textAlign: "center",
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
  },
  rectangleContainer: {
    left: "72%",
    width: "28%",
    right: "0%",
  },
  promotionPriod: {
    top: 133,
    width: 150,
    height: 41,
    left: 24,
    position: "absolute",
  },
  offerBanner: {
    top: 138,
    height: 206,
    width: 343,
    left: 16,
    position: "absolute",
  },
  headerChild: {
    left: "0%",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
  superFlashSale: {
    left: "13.87%",
    top: "57.38%",
    lineHeight: 24,
    fontSize: FontSize.headingH4_size,
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
  systemIcon24pxsearch: {
    right: "4.27%",
    left: "89.33%",
    bottom: "22.95%",
    width: "6.4%",
    height: "19.67%",
    maxWidth: "100%",
    top: "57.38%",
  },
  systemIcon24pxlove: {
    right: "14.93%",
    left: "78.67%",
    display: "none",
    bottom: "22.95%",
    width: "6.4%",
    height: "19.67%",
    maxWidth: "100%",
    top: "57.38%",
  },
  header: {
    height: 122,
    top: 0,
    width: 375,
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
  text13: {
    height: "85.71%",
    top: "9.52%",
    fontSize: FontSize.size_mini,
    letterSpacing: -0.3,
    fontWeight: "600",
    fontFamily: FontFamily.sFProTextSemibold,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    left: "0%",
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
    width: 375,
    backgroundColor: Color.backgroundWhite,
  },
  offerScreen: {
    flex: 1,
    height: 987,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
});

export default OfferScreen1;
