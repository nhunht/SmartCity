import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const WriteReviewFill = () => {
  return (
    <View style={styles.writeReviewFill}>
      <View style={styles.review}>
        <Text style={[styles.pleaseWriteOverall, styles.writeTypo]}>
          Please write Overall level of satisfaction with your shipping /
          Delivery Service
        </Text>
        <Image
          style={styles.ratingStarIcon}
          contentFit="cover"
          source={require("../assets/rating-star.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>4/5</Text>
      </View>
      <View style={styles.writeReview}>
        <Text style={[styles.writeYourReview, styles.writeTypo]}>
          Write Your Review
        </Text>
        <View style={[styles.formtextAreafill, styles.reviewaddImageFlexBox]}>
          <Text
            style={[styles.adVelitVoluptate, styles.textTypo]}
          >{`Ad velit voluptate laboris excepteur ex. Ea tempor veniam cillum ea cillum anim fugiat pariatur qui mollit `}</Text>
        </View>
      </View>
      <Text style={[styles.addPhoto, styles.writeTypo]}>Add Photo</Text>
      <View style={[styles.reviewaddImage, styles.reviewaddImageFlexBox]}>
        <Image
          style={styles.image01Icon}
          contentFit="cover"
          source={require("../assets/image01.png")}
        />
        <Image
          style={[styles.image02Icon, styles.image02IconLayout]}
          contentFit="cover"
          source={require("../assets/image02.png")}
        />
        <Image
          style={[styles.image02Icon, styles.image02IconLayout]}
          contentFit="cover"
          source={require("../assets/image03.png")}
        />
        <Image
          style={styles.image02IconLayout}
          contentFit="cover"
          source={require("../assets/buttonadd-photo-image.png")}
        />
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.headerChild, styles.text1Position]} />
        <Text style={styles.writeReview1}>Write Review</Text>
        <View style={[styles.headerItem, styles.headerItemBorder]} />
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
      <View style={[styles.uiStatusBars, styles.headerPosition]}>
        <Image
          style={[styles.batteryIcon, styles.batteryIconLayout]}
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
          <Text style={[styles.text1, styles.text1Position]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.uiHomeIndicator, styles.headerPosition]}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  writeTypo: {
    textAlign: "left",
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
    color: Color.neutralDark,
    lineHeight: 21,
    fontSize: FontSize.buttonText_size,
    position: "absolute",
  },
  textTypo: {
    color: Color.neutralGrey,
    textAlign: "left",
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
  },
  reviewaddImageFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  image02IconLayout: {
    marginLeft: 12,
    height: 72,
    width: 72,
  },
  headerPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  text1Position: {
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  headerItemBorder: {
    borderColor: "#ebf0ff",
    borderStyle: "solid",
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
  pleaseWriteOverall: {
    left: 0,
    top: 0,
    width: 343,
  },
  ratingStarIcon: {
    top: 58,
    width: 224,
    height: 32,
    left: 0,
    position: "absolute",
  },
  text: {
    top: 63,
    left: 240,
    lineHeight: 21,
    fontSize: FontSize.buttonText_size,
    color: Color.neutralGrey,
    position: "absolute",
  },
  review: {
    top: 138,
    height: 90,
    width: 343,
    left: 16,
    position: "absolute",
  },
  writeYourReview: {
    left: 0,
    top: 0,
  },
  adVelitVoluptate: {
    fontSize: FontSize.formTextFill_size,
    lineHeight: 22,
    width: 311,
  },
  formtextAreafill: {
    top: 33,
    borderWidth: 1,
    height: 160,
    padding: Padding.p_base,
    borderColor: "#ebf0ff",
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    left: 0,
    backgroundColor: Color.backgroundWhite,
  },
  writeReview: {
    top: 252,
    height: 193,
    width: 343,
    left: 16,
    position: "absolute",
  },
  addPhoto: {
    top: 469,
    left: 16,
  },
  image01Icon: {
    height: 72,
    width: 72,
    borderRadius: Border.br_8xs,
  },
  image02Icon: {
    borderRadius: Border.br_8xs,
  },
  reviewaddImage: {
    top: 502,
    alignItems: "center",
    left: 16,
    overflow: "hidden",
  },
  headerChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    backgroundColor: Color.backgroundWhite,
  },
  writeReview1: {
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
  header: {
    height: 122,
    top: 0,
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
  text1: {
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
  writeReviewFill: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
});

export default WriteReviewFill;
