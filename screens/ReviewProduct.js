import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const ReviewProduct = () => {
  return (
    <View style={styles.reviewProduct}>
      <View style={styles.reviewfilterReview}>
        <View style={[styles.buttoncheckboxactive, styles.reviewFlexBox]}>
          <Text style={styles.allReview}>All Review</Text>
        </View>
        <View
          style={[styles.buttoncheckboxnormalWithSt, styles.headerItemBorder]}
        >
          <Image
            style={styles.buttoncheckboxnormalWithStChild}
            contentFit="cover"
            source={require("../assets/star-10.png")}
          />
          <Text style={styles.text}>1</Text>
        </View>
        <View
          style={[styles.buttoncheckboxnormalWithSt, styles.headerItemBorder]}
        >
          <Image
            style={styles.buttoncheckboxnormalWithStChild}
            contentFit="cover"
            source={require("../assets/star-10.png")}
          />
          <Text style={styles.text}>2</Text>
        </View>
        <View
          style={[styles.buttoncheckboxnormalWithSt, styles.headerItemBorder]}
        >
          <Image
            style={styles.buttoncheckboxnormalWithStChild}
            contentFit="cover"
            source={require("../assets/star-10.png")}
          />
          <Text style={styles.text}>3</Text>
        </View>
        <View
          style={[styles.buttoncheckboxnormalWithSt, styles.headerItemBorder]}
        >
          <Image
            style={styles.buttoncheckboxnormalWithStChild}
            contentFit="cover"
            source={require("../assets/star-10.png")}
          />
          <Text style={styles.text}>4</Text>
        </View>
        <View
          style={[styles.buttoncheckboxnormalWithSt, styles.headerItemBorder]}
        >
          <Image
            style={styles.buttoncheckboxnormalWithStChild}
            contentFit="cover"
            source={require("../assets/star-10.png")}
          />
          <Text style={styles.text}>5</Text>
        </View>
      </View>
      <View style={[styles.review, styles.reviewFlexBox]}>
        <View style={styles.reiview01}>
          <View style={styles.profile}>
            <Image
              style={styles.profilePictureIcon}
              contentFit="cover"
              source={require("../assets/profile-picture1.png")}
            />
            <Text style={[styles.jamesLawson, styles.jamesLawsonTypo]}>
              James Lawson
            </Text>
            <Image
              style={[styles.ratingmediumStarIcon, styles.jamesLawsonPosition]}
              contentFit="cover"
              source={require("../assets/ratingmedium-star.png")}
            />
          </View>
          <Text style={[styles.airMaxAre, styles.airMaxAreTypo]}>
            air max are always very comfortable fit, clean and just perfect in
            every way. just the box was too small and scrunched the sneakers up
            a little bit, not sure if the box was always this small but the 90s
            are and will always be one of my favorites.
          </Text>
          <View style={styles.productLayout1}>
            <Image
              style={[styles.productPicture01Icon, styles.productIconLayout1]}
              contentFit="cover"
              source={require("../assets/image03.png")}
            />
            <Image
              style={[styles.productPicture02Icon, styles.productIconLayout]}
              contentFit="cover"
              source={require("../assets/product-picture02.png")}
            />
            <Image
              style={[styles.productPicture03Icon, styles.productIconLayout]}
              contentFit="cover"
              source={require("../assets/product-picture03.png")}
            />
          </View>
          <Text style={[styles.december102016, styles.airMaxAreTypo]}>
            December 10, 2016
          </Text>
        </View>
        <View style={styles.reiview02}>
          <View style={styles.profile1}>
            <Image
              style={styles.profilePictureIcon}
              contentFit="cover"
              source={require("../assets/profile-picture11.png")}
            />
            <Text style={[styles.jamesLawson, styles.jamesLawsonTypo]}>
              Laura Octavian
            </Text>
            <Image
              style={[styles.ratingmediumStarIcon, styles.jamesLawsonPosition]}
              contentFit="cover"
              source={require("../assets/ratingmedium-star1.png")}
            />
          </View>
          <Text style={[styles.airMaxAre, styles.airMaxAreTypo]}>
            This is really amazing product, i like the design of product, I hope
            can buy it again!
          </Text>
          <View style={[styles.productPicture1, styles.productLayout1]}>
            <Image
              style={[styles.productPicture01Icon, styles.productIconLayout1]}
              contentFit="cover"
              source={require("../assets/image03.png")}
            />
            <Image
              style={[styles.productPicture02Icon, styles.productIconLayout]}
              contentFit="cover"
              source={require("../assets/product-picture02.png")}
            />
            <Image
              style={[styles.productPicture03Icon, styles.productIconLayout]}
              contentFit="cover"
              source={require("../assets/product-picture03.png")}
            />
          </View>
          <Text style={[styles.december102016, styles.airMaxAreTypo]}>
            December 10, 2016
          </Text>
        </View>
        <View style={styles.reiview02}>
          <View style={styles.profile2}>
            <Image
              style={styles.profilePictureIcon}
              contentFit="cover"
              source={require("../assets/profile-picture2.png")}
            />
            <Text style={[styles.jamesLawson, styles.jamesLawsonTypo]}>
              Jhonson Bridge
            </Text>
            <Image
              style={[styles.ratingmediumStarIcon, styles.jamesLawsonPosition]}
              contentFit="cover"
              source={require("../assets/ratingmedium-star.png")}
            />
          </View>
          <Text style={[styles.airMaxAre, styles.airMaxAreTypo]}>
            air max are always very comfortable fit, clean and just perfect in
            every way. just the box was too small and scrunched the sneakers up
            a little bit
          </Text>
          <View style={[styles.productPicture2, styles.productLayout]}>
            <Image
              style={[styles.productPicture01Icon2, styles.productIconLayout1]}
              contentFit="cover"
              source={require("../assets/image03.png")}
            />
            <Image
              style={[styles.productPicture02Icon, styles.productIconLayout]}
              contentFit="cover"
              source={require("../assets/product-picture02.png")}
            />
            <Image
              style={[styles.productPicture03Icon, styles.productIconLayout]}
              contentFit="cover"
              source={require("../assets/product-picture03.png")}
            />
          </View>
          <Text style={[styles.december102016, styles.airMaxAreTypo]}>
            December 10, 2016
          </Text>
        </View>
        <View style={styles.reiview02}>
          <View style={styles.profile3}>
            <Image
              style={styles.profilePictureIcon}
              contentFit="cover"
              source={require("../assets/profile-picture3.png")}
            />
            <Text style={[styles.jamesLawson, styles.jamesLawsonTypo]}>
              Griffin Rod
            </Text>
            <Image
              style={[styles.ratingmediumStarIcon, styles.jamesLawsonPosition]}
              contentFit="cover"
              source={require("../assets/ratingmedium-star.png")}
            />
          </View>
          <Text
            style={[styles.airMaxAre, styles.airMaxAreTypo]}
          >{`air max are always very comfortable fit, clean and just perfect in every way. just the box was too small  `}</Text>
          <View style={styles.productLayout}>
            <Image
              style={[styles.productPicture01Icon3, styles.productIconLayout1]}
              contentFit="cover"
              source={require("../assets/image03.png")}
            />
            <Image
              style={[styles.productPicture02Icon, styles.productIconLayout]}
              contentFit="cover"
              source={require("../assets/product-picture02.png")}
            />
            <Image
              style={[styles.productPicture03Icon, styles.productIconLayout]}
              contentFit="cover"
              source={require("../assets/product-picture03.png")}
            />
          </View>
          <Text style={[styles.december102016, styles.airMaxAreTypo]}>
            December 10, 2016
          </Text>
        </View>
      </View>
      <View style={[styles.writeReviewButton, styles.homeIndicatorPosition]}>
        <Text style={[styles.writeReview, styles.jamesLawsonTypo]}>
          Write Review
        </Text>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.headerChild, styles.text5Position]} />
        <Text style={styles.review1}>5 Review</Text>
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
          <Text style={[styles.text5, styles.text5Position]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.uiHomeIndicator, styles.headerPosition]}>
        <View style={[styles.homeIndicator, styles.homeIndicatorPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  reviewFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  headerItemBorder: {
    borderColor: "#ebf0ff",
    borderStyle: "solid",
  },
  jamesLawsonTypo: {
    fontSize: FontSize.buttonText_size,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
  },
  jamesLawsonPosition: {
    left: 64,
    position: "absolute",
  },
  airMaxAreTypo: {
    marginTop: 16,
    width: 343,
    color: Color.neutralGrey,
    fontFamily: FontFamily.captionNormalregular,
    textAlign: "left",
    letterSpacing: 1,
  },
  productIconLayout1: {
    width: 72,
    left: 168,
    height: 72,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  productIconLayout: {
    borderRadius: Border.br_5xs,
    width: 72,
    height: 72,
    top: 0,
    position: "absolute",
  },
  productLayout1: {
    height: 72,
    width: 240,
    marginTop: 16,
  },
  productLayout: {
    width: 156,
    height: 72,
    marginTop: 16,
  },
  homeIndicatorPosition: {
    left: "50%",
    position: "absolute",
  },
  headerPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  text5Position: {
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
  allReview: {
    color: Color.primaryBlue,
    textAlign: "left",
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    lineHeight: 18,
    letterSpacing: 1,
    fontSize: FontSize.formTextFill_size,
  },
  buttoncheckboxactive: {
    backgroundColor: Color.deepskyblue_100,
    padding: Padding.p_base,
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
  },
  buttoncheckboxnormalWithStChild: {
    width: 16,
    height: 16,
  },
  text: {
    marginLeft: 10,
    color: Color.neutralGrey,
    fontFamily: FontFamily.captionNormalregular,
    textAlign: "left",
    lineHeight: 18,
    letterSpacing: 1,
    fontSize: FontSize.formTextFill_size,
  },
  buttoncheckboxnormalWithSt: {
    borderWidth: 1,
    marginLeft: 12,
    alignItems: "center",
    overflow: "hidden",
    padding: Padding.p_base,
    borderRadius: Border.br_8xs,
    flexDirection: "row",
  },
  reviewfilterReview: {
    top: 138,
    flexDirection: "row",
    left: 16,
    position: "absolute",
    overflow: "hidden",
  },
  profilePictureIcon: {
    width: 48,
    left: 0,
    top: 0,
    height: 48,
    position: "absolute",
  },
  jamesLawson: {
    top: 3,
    lineHeight: 21,
    color: Color.neutralDark,
    left: 64,
    position: "absolute",
    textAlign: "left",
  },
  ratingmediumStarIcon: {
    top: 28,
    width: 96,
    height: 16,
  },
  profile: {
    width: 176,
    height: 48,
  },
  airMaxAre: {
    lineHeight: 22,
    fontSize: FontSize.formTextFill_size,
    marginTop: 16,
    width: 343,
  },
  productPicture01Icon: {
    top: 0,
  },
  productPicture02Icon: {
    left: 0,
  },
  productPicture03Icon: {
    left: 84,
  },
  december102016: {
    fontSize: FontSize.captionNormalbold_size,
    lineHeight: 15,
  },
  reiview01: {
    overflow: "hidden",
  },
  profile1: {
    width: 182,
    height: 48,
  },
  productPicture1: {
    display: "none",
  },
  reiview02: {
    marginTop: 24,
    overflow: "hidden",
  },
  profile2: {
    width: 183,
    height: 48,
  },
  productPicture01Icon2: {
    display: "none",
    top: 0,
  },
  productPicture2: {
    display: "none",
  },
  profile3: {
    width: 160,
    height: 48,
  },
  productPicture01Icon3: {
    top: 124,
    display: "none",
  },
  review: {
    top: 208,
    alignItems: "center",
    left: 16,
    position: "absolute",
  },
  writeReview: {
    lineHeight: 25,
    color: Color.backgroundWhite,
    width: 311,
    textAlign: "center",
  },
  writeReviewButton: {
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
    alignItems: "center",
    overflow: "hidden",
    padding: Padding.p_base,
    borderRadius: Border.br_8xs,
    flexDirection: "row",
  },
  headerChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    backgroundColor: Color.backgroundWhite,
  },
  review1: {
    left: "13.87%",
    fontSize: FontSize.headingH4_size,
    lineHeight: 24,
    top: "57.38%",
    color: Color.neutralDark,
    textAlign: "left",
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
    backgroundColor: Color.backgroundWhite,
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
  reviewProduct: {
    flex: 1,
    height: 1237,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
});

export default ReviewProduct;
