import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const OfferScreen = () => {
  return (
    <View style={styles.offerScreen}>
      <View style={[styles.offerBanner1, styles.offerLayout]}>
        <Image
          style={[styles.promotionImageIcon, styles.promotionPosition]}
          contentFit="cover"
          source={require("../assets/promotion-image.png")}
        />
        <Text style={[styles.title, styles.titleFlexBox]}>{`Super Flash Sale
50% Off`}</Text>
        <View style={styles.promotionPriod}>
          <View style={[styles.rectangleParent, styles.groupChildPosition]}>
            <View style={[styles.groupChild, styles.groupChildPosition]} />
            <Text style={[styles.text, styles.textFlexBox]}>08</Text>
          </View>
          <Text style={[styles.text1, styles.textTypo]}>:</Text>
          <Text style={[styles.text2, styles.textTypo]}>:</Text>
          <View style={[styles.rectangleGroup, styles.groupChildPosition]}>
            <View style={[styles.groupChild, styles.groupChildPosition]} />
            <Text style={[styles.text, styles.textFlexBox]}>34</Text>
          </View>
          <View style={[styles.rectangleContainer, styles.groupChildPosition]}>
            <View style={[styles.groupChild, styles.groupChildPosition]} />
            <Text style={[styles.text4, styles.textFlexBox]}>52</Text>
          </View>
        </View>
      </View>
      <View style={[styles.offerBanner2, styles.offerLayout]}>
        <Image
          style={[styles.promotionImageIcon, styles.promotionPosition]}
          contentFit="cover"
          source={require("../assets/image-51.png")}
        />
        <Text style={[styles.title1, styles.titlePosition]}>
          90% Off Super Mega Sale
        </Text>
        <Text style={[styles.title2, styles.titlePosition]}>
          Special birthday Lafyuu
        </Text>
      </View>
      <View style={[styles.cuponPromotion, styles.cuponLayout]}>
        <View style={[styles.cuponPromotionChild, styles.cuponLayout]} />
        <Text style={[styles.useMegslCupon, styles.textTypo1]}>
          Use “MEGSL” Cupon For Get 90%off
        </Text>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.headerChild, styles.groupChildPosition]} />
        <Text style={styles.offer}>Offer</Text>
        <View style={[styles.headerItem, styles.headerItemPosition]} />
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
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.mobileSignalIcon}
          contentFit="cover"
          source={require("../assets/mobile-signal.png")}
        />
        <View style={[styles.timeStyle, styles.homePosition]}>
          <Text style={[styles.text5, styles.textFlexBox]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.uiHomeIndicator, styles.tabBartabBarPosition]}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={[styles.tabBartabBar, styles.tabBartabBarPosition]}>
        <View style={[styles.tabBartabBarChild, styles.headerItemPosition]} />
        <View style={[styles.tabBartabBarItem, styles.menuPosition]} />
        <View style={[styles.menu, styles.menuPosition]}>
          <View style={[styles.home, styles.homeLayout]}>
            <View style={[styles.headerChild, styles.groupChildPosition]} />
            <Image
              style={[styles.systemIcon24pxhome, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/system-icon24pxhome.png")}
            />
            <Text style={[styles.home1, styles.home1Typo]}>Home</Text>
          </View>
          <View style={[styles.explore, styles.homeLayout]}>
            <View style={[styles.headerChild, styles.groupChildPosition]} />
            <Image
              style={[styles.systemIcon24pxhome, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/system-icon24pxsearch.png")}
            />
            <Text style={[styles.home1, styles.home1Typo]}>Explore</Text>
          </View>
          <View style={[styles.cart, styles.homeLayout]}>
            <View style={[styles.headerChild, styles.groupChildPosition]} />
            <Image
              style={[styles.systemIcon24pxhome, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/system-icon24pxcart.png")}
            />
            <Text style={[styles.home1, styles.home1Typo]}>Cart</Text>
            <View style={[styles.notificationmark, styles.offer1Position]}>
              <Image
                style={[styles.ellipseIcon, styles.text6Position]}
                contentFit="cover"
                source={require("../assets/ellipse.png")}
              />
              <Text style={[styles.text6, styles.text6Position]}>2</Text>
            </View>
          </View>
          <View style={[styles.offer1, styles.offer1Position]}>
            <View style={[styles.headerChild, styles.groupChildPosition]} />
            <Image
              style={[styles.systemIcon24pxhome, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/system-icon24pxoffer.png")}
            />
            <Text style={[styles.offer2, styles.home1Typo]}>Offer</Text>
          </View>
          <View style={[styles.profile, styles.homeLayout]}>
            <View style={[styles.headerChild, styles.groupChildPosition]} />
            <Image
              style={[styles.systemIcon24pxhome, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/system-icon24pxuser1.png")}
            />
            <Text style={[styles.home1, styles.home1Typo]}>Account</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  offerLayout: {
    height: 206,
    width: 343,
    position: "absolute",
  },
  promotionPosition: {
    left: 0,
    top: 0,
    borderRadius: Border.br_8xs,
  },
  titleFlexBox: {
    textAlign: "left",
    color: Color.backgroundWhite,
    position: "absolute",
  },
  groupChildPosition: {
    bottom: "0%",
    height: "100%",
    top: "0%",
  },
  textFlexBox: {
    textAlign: "center",
    color: Color.neutralDark,
    position: "absolute",
  },
  textTypo: {
    lineHeight: 21,
    fontSize: FontSize.buttonText_size,
    top: "24.39%",
    letterSpacing: 0.1,
    textAlign: "center",
    color: Color.backgroundWhite,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    position: "absolute",
  },
  titlePosition: {
    width: 295,
    textAlign: "left",
    color: Color.backgroundWhite,
    letterSpacing: 1,
    left: 24,
    position: "absolute",
  },
  cuponLayout: {
    height: 80,
    width: 343,
    position: "absolute",
  },
  textTypo1: {
    lineHeight: 24,
    fontSize: FontSize.headingH4_size,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
  },
  headerPosition: {
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  headerItemPosition: {
    borderTopWidth: 1,
    borderColor: "#ebf0ff",
    borderStyle: "solid",
    left: "-0.13%",
    right: "-0.13%",
    width: "100.27%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  homePosition: {
    right: "80%",
    position: "absolute",
  },
  tabBartabBarPosition: {
    bottom: 0,
    width: 375,
    left: 0,
    position: "absolute",
  },
  menuPosition: {
    bottom: "36.56%",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  homeLayout: {
    width: "20%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  home1Typo: {
    lineHeight: 15,
    fontSize: FontSize.captionNormalbold_size,
    textAlign: "center",
    letterSpacing: 1,
  },
  offer1Position: {
    right: "20%",
    position: "absolute",
  },
  text6Position: {
    display: "none",
    position: "absolute",
  },
  promotionImageIcon: {
    borderRadius: Border.br_8xs,
    height: 206,
    width: 343,
    position: "absolute",
  },
  title: {
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    lineHeight: 36,
    fontSize: FontSize.headingH2_size,
    top: 32,
    letterSpacing: 1,
    textAlign: "left",
    left: 24,
  },
  groupChild: {
    right: "0%",
    left: "0%",
    bottom: "0%",
    height: "100%",
    width: "100%",
    borderRadius: Border.br_8xs,
    position: "absolute",
    backgroundColor: Color.backgroundWhite,
  },
  text: {
    left: "21.43%",
    lineHeight: 24,
    fontSize: FontSize.headingH4_size,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
    top: "19.51%",
    textAlign: "center",
    color: Color.neutralDark,
  },
  rectangleParent: {
    right: "72%",
    left: "0%",
    width: "28%",
    bottom: "0%",
    height: "100%",
    position: "absolute",
  },
  text1: {
    left: "30.67%",
  },
  text2: {
    left: "66.67%",
  },
  rectangleGroup: {
    right: "36%",
    left: "36%",
    width: "28%",
    bottom: "0%",
    height: "100%",
    position: "absolute",
  },
  text4: {
    left: "26.19%",
    lineHeight: 24,
    fontSize: FontSize.headingH4_size,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
    top: "19.51%",
    textAlign: "center",
    color: Color.neutralDark,
  },
  rectangleContainer: {
    left: "72%",
    right: "0%",
    width: "28%",
    bottom: "0%",
    height: "100%",
    position: "absolute",
  },
  promotionPriod: {
    top: 133,
    width: 150,
    height: 41,
    left: 24,
    position: "absolute",
  },
  offerBanner1: {
    top: 234,
    left: 16,
  },
  title1: {
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    lineHeight: 36,
    fontSize: FontSize.headingH2_size,
    top: 32,
    width: 295,
  },
  title2: {
    top: 120,
    fontSize: FontSize.formTextFill_size,
    lineHeight: 22,
    fontFamily: FontFamily.captionNormalregular,
  },
  offerBanner2: {
    top: 456,
    left: 16,
  },
  cuponPromotionChild: {
    backgroundColor: Color.primaryBlue,
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
  },
  useMegslCupon: {
    top: 16,
    width: 212,
    textAlign: "left",
    color: Color.backgroundWhite,
    position: "absolute",
    left: 16,
  },
  cuponPromotion: {
    top: 138,
    left: 16,
  },
  headerChild: {
    right: "0%",
    left: "0%",
    bottom: "0%",
    height: "100%",
    width: "100%",
    position: "absolute",
    backgroundColor: Color.backgroundWhite,
  },
  offer: {
    top: "57.38%",
    left: "4.27%",
    letterSpacing: 0.1,
    color: Color.neutralDark,
    lineHeight: 24,
    fontSize: FontSize.headingH4_size,
    textAlign: "left",
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    position: "absolute",
  },
  headerItem: {
    height: "0.82%",
    top: "99.59%",
    bottom: "-0.41%",
  },
  header: {
    height: 122,
  },
  batteryIcon: {
    height: "25.76%",
    width: "6.49%",
    top: "39.39%",
    right: "3.91%",
    bottom: "34.85%",
    left: "89.6%",
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  text5: {
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
    textAlign: "center",
    color: Color.neutralDark,
    width: "100%",
  },
  timeStyle: {
    height: "47.73%",
    width: "14.4%",
    top: "27.27%",
    bottom: "25%",
    left: "5.6%",
  },
  uiStatusBars: {
    height: 44,
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
    height: 34,
  },
  tabBartabBarChild: {
    height: "1.08%",
    top: "-0.54%",
    bottom: "99.46%",
  },
  tabBartabBarItem: {
    height: "52.69%",
    top: "10.75%",
    backgroundColor: Color.backgroundWhite,
  },
  systemIcon24pxhome: {
    height: "40.68%",
    width: "32%",
    top: "27.12%",
    right: "33.33%",
    bottom: "32.2%",
    left: "34.67%",
    position: "absolute",
  },
  home1: {
    color: Color.neutralGrey,
    top: "74.58%",
    lineHeight: 15,
    fontSize: FontSize.captionNormalbold_size,
    left: "0%",
    position: "absolute",
    width: "100%",
    fontFamily: FontFamily.captionNormalregular,
  },
  home: {
    right: "80%",
    position: "absolute",
    left: "0%",
  },
  explore: {
    right: "60%",
    left: "20%",
    position: "absolute",
  },
  ellipseIcon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    right: "0%",
    left: "0%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    width: "100%",
  },
  text6: {
    top: "15%",
    left: "35%",
    lineHeight: 15,
    fontSize: FontSize.captionNormalbold_size,
    textAlign: "center",
    letterSpacing: 1,
    color: Color.backgroundWhite,
    display: "none",
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  notificationmark: {
    height: "33.9%",
    width: "26.67%",
    top: "10.17%",
    bottom: "55.93%",
    left: "53.33%",
  },
  cart: {
    right: "40%",
    left: "40%",
    position: "absolute",
  },
  offer2: {
    color: Color.primaryBlue,
    top: "74.58%",
    lineHeight: 15,
    fontSize: FontSize.captionNormalbold_size,
    left: "0%",
    position: "absolute",
    width: "100%",
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  offer1: {
    left: "60%",
    width: "20%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  profile: {
    left: "80%",
    right: "0%",
    position: "absolute",
  },
  menu: {
    height: "63.44%",
    top: "0%",
    bottom: "36.56%",
  },
  tabBartabBar: {
    height: 93,
    backgroundColor: Color.backgroundWhite,
  },
  offerScreen: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
});

export default OfferScreen;
