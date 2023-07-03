import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const WriteReview = () => {
  return (
    <View style={styles.writeReview}>
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
        <Text style={[styles.text, styles.textClr]}>4/5</Text>
      </View>
      <View style={styles.writeReview1}>
        <Text style={[styles.writeYourReview, styles.writeTypo]}>
          Write Your Review
        </Text>
        <View style={styles.writeReviewForm}>
          <View
            style={[styles.writeReviewFormChild, styles.headerItemBorder]}
          />
          <Text style={[styles.writeYourReview1, styles.textClr]}>
            Write your review here
          </Text>
        </View>
      </View>
      <Text style={[styles.addPhoto, styles.writeTypo]}>Add Photo</Text>
      <View style={styles.reviewaddImage}>
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
        <View style={[styles.headerChild, styles.childPosition]} />
        <Text style={styles.writeReview2}>Write Review</Text>
        <View style={[styles.headerItem, styles.headerItemBorder]} />
        <Image
          style={[styles.systemIcon24pxleft, styles.systemLayout]}
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
          style={[styles.batteryIcon, styles.systemLayout]}
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
          <Text style={[styles.text1, styles.childPosition]}>9:41</Text>
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
    letterSpacing: 1,
    color: Color.neutralDark,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    lineHeight: 21,
    fontSize: FontSize.buttonText_size,
    position: "absolute",
  },
  textClr: {
    color: Color.neutralGrey,
    textAlign: "left",
    letterSpacing: 1,
    position: "absolute",
  },
  headerItemBorder: {
    borderColor: "#ebf0ff",
    borderStyle: "solid",
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
  childPosition: {
    left: "0%",
    width: "100%",
  },
  systemLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
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
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    lineHeight: 21,
    fontSize: FontSize.buttonText_size,
    color: Color.neutralGrey,
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
  writeReviewFormChild: {
    borderWidth: 1,
    borderRadius: Border.br_8xs,
    left: "0%",
    width: "100%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  writeYourReview1: {
    width: "90.67%",
    top: "10%",
    left: "4.66%",
    fontSize: FontSize.formTextFill_size,
    lineHeight: 22,
    fontFamily: FontFamily.captionNormalregular,
  },
  writeReviewForm: {
    top: 33,
    height: 160,
    left: 0,
    width: 343,
    position: "absolute",
    backgroundColor: Color.backgroundWhite,
  },
  writeReview1: {
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
    display: "none",
    height: 72,
    width: 72,
    borderRadius: Border.br_8xs,
  },
  image02Icon: {
    display: "none",
    borderRadius: Border.br_8xs,
  },
  reviewaddImage: {
    top: 502,
    flexDirection: "row",
    alignItems: "center",
    left: 16,
    position: "absolute",
    overflow: "hidden",
  },
  headerChild: {
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    position: "absolute",
    backgroundColor: Color.backgroundWhite,
  },
  writeReview2: {
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
  systemIcon24pxmore: {
    right: "4.27%",
    left: "89.33%",
    bottom: "22.95%",
    width: "6.4%",
    height: "19.67%",
    maxWidth: "100%",
    top: "57.38%",
    display: "none",
  },
  systemIcon24pxsearch: {
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
    left: "0%",
    color: Color.neutralDark,
    position: "absolute",
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
  writeReview: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
});

export default WriteReview;
