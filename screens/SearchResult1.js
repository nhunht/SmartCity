import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Padding, Border, Color, FontSize } from "../GlobalStyles";

const SearchResult1 = () => {
  return (
    <View style={styles.searchResult}>
      <Text style={[styles.result, styles.textFlexBox]}>145 Result</Text>
      <Text style={[styles.manShoes, styles.textTypo]}>Man Shoes</Text>
      <View style={[styles.searchResultChild, styles.headerItemBorder]} />
      <Image
        style={[styles.downIcon, styles.resultPosition]}
        contentFit="cover"
        source={require("../assets/system-icon24pxbottom.png")}
      />
      <View style={[styles.product01, styles.productBorder2]}>
        <Image
          style={styles.imageProductIcon}
          contentFit="cover"
          source={require("../assets/image-product12.png")}
        />
        <View style={styles.frame}>
          <View style={styles.nikeAirMax270ReactEngParent}>
            <Text style={[styles.nikeAirMax, styles.nikeLayout]}>
              Nike Air Max 270 React ENG
            </Text>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-391.png")}
            />
          </View>
          <View style={styles.parent}>
            <Text style={[styles.text, styles.textFlexBox]}>$299,43</Text>
            <View style={[styles.group, styles.groupFlexBox]}>
              <Text style={[styles.text1, styles.offLayout]}>$534,33</Text>
              <Text style={[styles.off, styles.offTypo]}>24% Off</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.product02, styles.productBorder2]}>
        <Image
          style={styles.imageProductIcon}
          contentFit="cover"
          source={require("../assets/image-product8.png")}
        />
        <View style={styles.frame}>
          <View style={styles.nikeAirMax270ReactEngParent}>
            <Text style={[styles.nikeAirMax, styles.nikeLayout]}>
              Nike Air Max 270 React ENG
            </Text>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-391.png")}
            />
          </View>
          <View style={styles.parent}>
            <Text style={[styles.text, styles.textFlexBox]}>$299,43</Text>
            <View style={[styles.group, styles.groupFlexBox]}>
              <Text style={[styles.text1, styles.offLayout]}>$534,33</Text>
              <Text style={[styles.off, styles.offTypo]}>24% Off</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.product03, styles.productBorder1]}>
        <Image
          style={styles.imageProductIcon}
          contentFit="cover"
          source={require("../assets/image-product5.png")}
        />
        <View style={styles.frame}>
          <View style={styles.nikeAirMax270ReactEngParent}>
            <Text style={[styles.nikeAirMax, styles.nikeLayout]}>
              Nike Air Max 270 React ENG
            </Text>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-391.png")}
            />
          </View>
          <View style={styles.parent}>
            <Text style={[styles.text, styles.textFlexBox]}>$299,43</Text>
            <View style={[styles.group, styles.groupFlexBox]}>
              <Text style={[styles.text1, styles.offLayout]}>$534,33</Text>
              <Text style={[styles.off, styles.offTypo]}>24% Off</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.product04, styles.productBorder1]}>
        <Image
          style={styles.imageProductIcon}
          contentFit="cover"
          source={require("../assets/image-product4.png")}
        />
        <View style={styles.frame}>
          <View style={styles.nikeAirMax270ReactEngParent}>
            <Text style={[styles.nikeAirMax, styles.nikeLayout]}>
              Nike Air Max 270 React ENG
            </Text>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-391.png")}
            />
          </View>
          <View style={styles.parent}>
            <Text style={[styles.text, styles.textFlexBox]}>$299,43</Text>
            <View style={[styles.group, styles.groupFlexBox]}>
              <Text style={[styles.text1, styles.offLayout]}>$534,33</Text>
              <Text style={[styles.off, styles.offTypo]}>24% Off</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.product05, styles.productBorder]}>
        <Image
          style={styles.imageProductIcon}
          contentFit="cover"
          source={require("../assets/image-product8.png")}
        />
        <View style={styles.frame}>
          <View style={styles.nikeAirMax270ReactEngParent}>
            <Text style={[styles.nikeAirMax, styles.nikeLayout]}>
              Nike Air Max 270 React ENG
            </Text>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-391.png")}
            />
          </View>
          <View style={styles.parent}>
            <Text style={[styles.text, styles.textFlexBox]}>$299,43</Text>
            <View style={[styles.group, styles.groupFlexBox]}>
              <Text style={[styles.text1, styles.offLayout]}>$534,33</Text>
              <Text style={[styles.off, styles.offTypo]}>24% Off</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.product06, styles.productBorder]}>
        <Image
          style={styles.imageProductIcon}
          contentFit="cover"
          source={require("../assets/image-product12.png")}
        />
        <View style={styles.frame}>
          <View style={styles.nikeAirMax270ReactEngParent}>
            <Text style={[styles.nikeAirMax, styles.nikeLayout]}>
              Nike Air Max 270 React ENG
            </Text>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-391.png")}
            />
          </View>
          <View style={styles.parent}>
            <Text style={[styles.text, styles.textFlexBox]}>$299,43</Text>
            <View style={[styles.group, styles.groupFlexBox]}>
              <Text style={[styles.text1, styles.offLayout]}>$534,33</Text>
              <Text style={[styles.off, styles.offTypo]}>24% Off</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.headerChild, styles.text12Position]} />
        <View style={[styles.headerItem, styles.headerItemBorder]} />
        <View style={[styles.searchForm, styles.groupFlexBox]}>
          <Image
            style={styles.systemIcon16pxsearch}
            contentFit="cover"
            source={require("../assets/system-icon16pxsearch.png")}
          />
          <Text style={[styles.nikeAirMax6, styles.offTypo]}>Nike Air Max</Text>
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
          <Text style={[styles.text12, styles.text12Position]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.uiHomeIndicator, styles.headerPosition]}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "left",
    letterSpacing: 1,
  },
  textTypo: {
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  headerItemBorder: {
    borderTopWidth: 1,
    borderColor: "#ebf0ff",
    borderStyle: "solid",
    position: "absolute",
  },
  resultPosition: {
    top: 138,
    position: "absolute",
  },
  productBorder2: {
    padding: Padding.p_base,
    top: 178,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: Border.br_8xs,
    borderColor: "#ebf0ff",
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.backgroundWhite,
  },
  nikeLayout: {
    lineHeight: 18,
    color: Color.neutralDark,
    fontSize: FontSize.formTextFill_size,
  },
  groupFlexBox: {
    flexDirection: "row",
    overflow: "hidden",
  },
  offLayout: {
    lineHeight: 15,
    fontSize: FontSize.captionNormalbold_size,
  },
  offTypo: {
    marginLeft: 8,
    textAlign: "left",
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
  },
  productBorder1: {
    top: 472,
    alignItems: "center",
    padding: Padding.p_base,
    borderWidth: 1,
    borderRadius: Border.br_8xs,
    borderColor: "#ebf0ff",
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.backgroundWhite,
  },
  productBorder: {
    top: 766,
    alignItems: "center",
    padding: Padding.p_base,
    borderWidth: 1,
    borderRadius: Border.br_8xs,
    borderColor: "#ebf0ff",
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.backgroundWhite,
  },
  headerPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  text12Position: {
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
  result: {
    opacity: 0.5,
    color: Color.neutralDark,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.formTextFill_size,
    textAlign: "left",
    left: 16,
    top: 138,
    position: "absolute",
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
  searchResultChild: {
    top: 122,
    width: 376,
    height: 1,
    left: 0,
    borderColor: "#ebf0ff",
    borderStyle: "solid",
  },
  downIcon: {
    left: 335,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  imageProductIcon: {
    height: 133,
    width: 133,
    borderRadius: Border.br_8xs,
  },
  nikeAirMax: {
    width: 133,
    textAlign: "left",
    letterSpacing: 1,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
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
    color: Color.primaryBlue,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.formTextFill_size,
    textAlign: "left",
  },
  text1: {
    textDecoration: "line-through",
    fontFamily: FontFamily.captionNormalregular,
    color: Color.neutralGrey,
    textAlign: "left",
    letterSpacing: 1,
  },
  off: {
    color: Color.primaryRed,
    lineHeight: 15,
    fontSize: FontSize.captionNormalbold_size,
  },
  group: {
    height: 15,
    marginTop: 4,
    alignItems: "center",
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
    alignItems: "center",
    left: 16,
  },
  product02: {
    left: 194,
    alignItems: "center",
  },
  product03: {
    left: 16,
  },
  product04: {
    left: 194,
  },
  product05: {
    left: 16,
  },
  product06: {
    left: 194,
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
  },
  systemIcon16pxsearch: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  nikeAirMax6: {
    width: 207,
    lineHeight: 18,
    color: Color.neutralDark,
    fontSize: FontSize.formTextFill_size,
    opacity: 0.5,
  },
  searchForm: {
    height: "34.43%",
    width: "70.13%",
    top: "50.82%",
    right: "25.6%",
    bottom: "14.75%",
    left: "4.27%",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    borderWidth: 1,
    flexDirection: "row",
    borderRadius: Border.br_8xs,
    borderColor: "#ebf0ff",
    borderStyle: "solid",
    position: "absolute",
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
  text12: {
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
    width: 375,
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
  searchResult: {
    flex: 1,
    height: 1100,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
});

export default SearchResult1;
