import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const SearchResult = () => {
  return (
    <View style={styles.searchResult}>
      <Text style={[styles.result, styles.resultPosition]}>0 Result</Text>
      <Text style={[styles.manShoes, styles.resultTypo]}>Man Shoes</Text>
      <Image
        style={styles.systemIcon24pxbottom}
        contentFit="cover"
        source={require("../assets/system-icon24pxbottom.png")}
      />
      <Text style={[styles.productNotFound, styles.resultTypo]}>
        Product Not Found
      </Text>
      <Text style={[styles.thankYouFor, styles.thankYouForTypo]}>
        thank you for shopping using lafyuu
      </Text>
      <Image
        style={styles.alertIconnotFound}
        contentFit="cover"
        source={require("../assets/alert-iconnot-found.png")}
      />
      <View style={[styles.backButton, styles.backButtonFlexBox]}>
        <Text style={[styles.backToHome, styles.resultTypo]}>Back to Home</Text>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.headerChild, styles.textPosition]} />
        <View style={[styles.headerItem, styles.headerItemBorder]} />
        <View style={[styles.searchForm, styles.headerItemBorder]}>
          <Image
            style={styles.systemIcon16pxsearch}
            contentFit="cover"
            source={require("../assets/system-icon16pxsearch.png")}
          />
          <Text style={[styles.searchProduct, styles.thankYouForTypo]}>
            Search Product
          </Text>
        </View>
        <Image
          style={[styles.filterIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/filter.png")}
        />
        <Image
          style={[styles.shortIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/short-icon.png")}
        />
        <Image
          style={[styles.headerInner, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-113.png")}
        />
      </View>
      <View style={[styles.uiStatusBars, styles.headerPosition]}>
        <Image
          style={[styles.batteryIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/battery.png")}
        />
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi2.png")}
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
        <View style={[styles.homeIndicator, styles.resultPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  resultPosition: {
    opacity: 0.5,
    position: "absolute",
  },
  resultTypo: {
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
  },
  thankYouForTypo: {
    color: Color.neutralGrey,
    fontFamily: FontFamily.captionNormalregular,
    lineHeight: 22,
    letterSpacing: 1,
    fontSize: FontSize.formTextFill_size,
  },
  backButtonFlexBox: {
    flexDirection: "row",
    borderRadius: Border.br_8xs,
    overflow: "hidden",
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
  headerItemBorder: {
    borderColor: "#ebf0ff",
    borderStyle: "solid",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  result: {
    textAlign: "left",
    color: Color.neutralDark,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
    lineHeight: 22,
    fontSize: FontSize.formTextFill_size,
    left: 16,
    top: 138,
  },
  manShoes: {
    top: 139,
    left: 256,
    textAlign: "right",
    color: Color.neutralDark,
    lineHeight: 22,
    fontSize: FontSize.formTextFill_size,
    fontWeight: "700",
    letterSpacing: 1,
    position: "absolute",
  },
  systemIcon24pxbottom: {
    left: 335,
    width: 24,
    height: 24,
    top: 138,
    position: "absolute",
    overflow: "hidden",
  },
  productNotFound: {
    top: 381,
    left: 69,
    fontSize: FontSize.headingH2_size,
    lineHeight: 36,
    textAlign: "center",
    color: Color.neutralDark,
    fontWeight: "700",
    letterSpacing: 1,
    position: "absolute",
  },
  thankYouFor: {
    top: 425,
    left: 36,
    width: 303,
    textAlign: "center",
    position: "absolute",
  },
  alertIconnotFound: {
    top: 273,
    left: 121,
    width: 132,
    height: 132,
    position: "absolute",
  },
  backToHome: {
    fontSize: FontSize.buttonText_size,
    lineHeight: 25,
    color: Color.backgroundWhite,
    width: 311,
    textAlign: "center",
    fontWeight: "700",
    letterSpacing: 1,
  },
  backButton: {
    top: 463,
    backgroundColor: Color.primaryBlue,
    shadowColor: "rgba(64, 191, 255, 0.24)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    padding: Padding.p_base,
    alignItems: "center",
    left: 16,
    position: "absolute",
  },
  headerChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    backgroundColor: Color.backgroundWhite,
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
  systemIcon16pxsearch: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  searchProduct: {
    width: 207,
    marginLeft: 8,
    textAlign: "left",
  },
  searchForm: {
    height: "37.7%",
    width: "70.13%",
    top: "49.18%",
    right: "25.6%",
    bottom: "13.11%",
    left: "4.27%",
    borderWidth: 1,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    borderRadius: Border.br_8xs,
    overflow: "hidden",
  },
  filterIcon: {
    right: "4.27%",
    left: "89.33%",
    bottom: "22.13%",
    width: "6.4%",
    height: "19.67%",
    maxWidth: "100%",
    top: "58.2%",
  },
  shortIcon: {
    right: "14.93%",
    left: "78.67%",
    bottom: "22.13%",
    width: "6.4%",
    height: "19.67%",
    maxWidth: "100%",
    top: "58.2%",
  },
  headerInner: {
    height: "6.56%",
    width: "2.13%",
    right: "4.8%",
    bottom: "35.25%",
    left: "93.07%",
    top: "58.2%",
    maxWidth: "100%",
  },
  header: {
    height: 122,
    top: 0,
    width: 375,
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
  },
  uiHomeIndicator: {
    bottom: 0,
    height: 34,
  },
  searchResult: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
});

export default SearchResult;
