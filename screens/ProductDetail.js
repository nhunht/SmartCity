import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const ProductDetail = () => {
  return (
    <View style={styles.productDetail}>
      <View style={[styles.product, styles.productPosition]}>
        <Image
          style={[styles.productImageIcon, styles.productPosition]}
          contentFit="cover"
          source={require("../assets/product-image.png")}
        />
        <Image
          style={[styles.slideShowImage, styles.slideShowImageLayout]}
          contentFit="cover"
          source={require("../assets/slide-show-image.png")}
        />
        <Text style={[styles.title, styles.titleTypo]}>
          Nike Air Zoom Pegasus 36 Miami
        </Text>
        <Image
          style={styles.addFavoriteIcon}
          contentFit="cover"
          source={require("../assets/add-favorite-icon.png")}
        />
        <Image
          style={[styles.starRatingIcon, styles.starIconLayout]}
          contentFit="cover"
          source={require("../assets/ratingmedium-star1.png")}
        />
        <Text style={[styles.price, styles.priceTypo]}>$299,43</Text>
      </View>
      <View style={[styles.sizeSelect, styles.selectLayout]}>
        <Text style={[styles.selectSize, styles.selectSizeTypo]}>
          Select Size
        </Text>
        <View style={styles.productDetailsproductSize}>
          <View style={[styles.view, styles.viewLayout]}>
            <View style={[styles.component, styles.componentBorder]} />
            <Text style={[styles.text, styles.textTypo1]}>6</Text>
          </View>
          <View style={styles.redLayout}>
            <View style={[styles.component, styles.componentBorder]} />
            <Text style={[styles.text1, styles.textTypo1]}>6.5</Text>
          </View>
          <View style={styles.redLayout}>
            <View style={[styles.component2, styles.componentBorder]} />
            <Text style={[styles.text, styles.textTypo1]}>7</Text>
          </View>
          <View style={styles.redLayout}>
            <View style={[styles.component, styles.componentBorder]} />
            <Text style={[styles.text1, styles.textTypo1]}>7.5</Text>
          </View>
          <View style={styles.redLayout}>
            <View style={[styles.component, styles.componentBorder]} />
            <Text style={[styles.text4, styles.textTypo1]}>8</Text>
          </View>
          <View style={styles.redLayout}>
            <View style={[styles.component, styles.componentBorder]} />
            <Text style={[styles.text5, styles.textTypo1]}>8.5</Text>
          </View>
        </View>
      </View>
      <View style={[styles.colorSelect, styles.selectLayout]}>
        <Text style={[styles.selectSize, styles.selectSizeTypo]}>
          Select Color
        </Text>
        <View
          style={[styles.productDetailscolorSelect, styles.discountFlexBox]}
        >
          <View style={[styles.view, styles.viewLayout]}>
            <View style={[styles.yellow, styles.componentPosition]} />
            <View style={styles.selected} />
          </View>
          <View style={[styles.blue, styles.redLayout]} />
          <View style={[styles.red, styles.redLayout]} />
          <View style={[styles.green, styles.redLayout]} />
          <View style={[styles.purple, styles.redLayout]} />
          <View style={[styles.dark, styles.redLayout]} />
        </View>
      </View>
      <View style={styles.specification}>
        <Text style={[styles.description, styles.text7Typo]}>
          The Nike Air Max 270 React ENG combines a full-length React foam
          midsole with a 270 Max Air unit for unrivaled comfort and a striking
          visual experience.
        </Text>
        <Text style={[styles.selectSize, styles.selectSizeTypo]}>
          Specification
        </Text>
        <View style={[styles.shown, styles.shownPosition]}>
          <Text style={[styles.shown1, styles.text7Typo]}>Shown:</Text>
          <Text
            style={[styles.laserBlueanthracitewatermel, styles.cd0113400Typo]}
          >
            Laser Blue/Anthracite/Watermelon/White
          </Text>
        </View>
        <View style={styles.style}>
          <Text style={[styles.shown1, styles.text7Typo]}>Style:</Text>
          <Text style={[styles.cd0113400, styles.cd0113400Typo]}>
            CD0113-400
          </Text>
        </View>
      </View>
      <View style={styles.review}>
        <Text style={[styles.selectSize, styles.selectSizeTypo]}>
          Review Product
        </Text>
        <Text style={styles.seeMoreLink}>See More</Text>
        <View style={styles.totalReview}>
          <Image
            style={[styles.ratingStarIcon, styles.starIconLayout]}
            contentFit="cover"
            source={require("../assets/ratingmedium-star1.png")}
          />
          <Text style={[styles.text6, styles.textTypo]}>4.5</Text>
          <Text style={[styles.review1, styles.textTypo]}>(5 Review)</Text>
        </View>
        <View style={styles.reviewcontentReview}>
          <View style={styles.profile}>
            <Image
              style={[styles.profilePictureIcon, styles.viewLayout]}
              contentFit="cover"
              source={require("../assets/profile-picture1.png")}
            />
            <Text style={[styles.jamesLawson, styles.jamesLawsonPosition]}>
              James Lawson
            </Text>
            <Image
              style={[styles.ratingmediumStarIcon, styles.jamesLawsonPosition]}
              contentFit="cover"
              source={require("../assets/ratingmedium-star1.png")}
            />
          </View>
          <Text style={[styles.airMaxAre, styles.text7Typo]}>
            air max are always very comfortable fit, clean and just perfect in
            every way. just the box was too small and scrunched the sneakers up
            a little bit, not sure if the box was always this small but the 90s
            are and will always be one of my favorites.
          </Text>
          <View style={styles.productPicture}>
            <Image
              style={[styles.productPicture01Icon, styles.slideShowImageLayout]}
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
          <Text style={[styles.december102016, styles.textTypo]}>
            December 10, 2016
          </Text>
        </View>
      </View>
      <View style={[styles.recomendedProduct, styles.recomendedLayout]}>
        <Text style={[styles.youMightAlso, styles.selectSizeTypo]}>
          You Might Also Like
        </Text>
        <View style={[styles.recomended, styles.recomendedLayout]}>
          <View style={[styles.product01, styles.productSpaceBlock]}>
            <Image
              style={styles.imageProductIcon}
              contentFit="cover"
              source={require("../assets/image-product.png")}
            />
            <Text style={styles.fsNike}>FS - Nike Air Max 270 React...</Text>
            <Text style={[styles.text7, styles.text7Typo]}>$299,43</Text>
            <View style={[styles.discount, styles.discountFlexBox]}>
              <Text style={[styles.text8, styles.textTypo]}>$534,33</Text>
              <Text style={[styles.off, styles.textTypo]}>24% Off</Text>
            </View>
          </View>
          <View style={[styles.product02, styles.productSpaceBlock]}>
            <Image
              style={styles.imageProductIcon}
              contentFit="cover"
              source={require("../assets/image-product1.png")}
            />
            <Text style={styles.fsNike}>FS - QUILTED MAXI CROS...</Text>
            <Text style={[styles.text7, styles.text7Typo]}>$299,43</Text>
            <View style={[styles.discount, styles.discountFlexBox]}>
              <Text style={[styles.text8, styles.textTypo]}>$534,33</Text>
              <Text style={[styles.off, styles.textTypo]}>24% Off</Text>
            </View>
          </View>
          <View style={[styles.product03, styles.productSpaceBlock]}>
            <Image
              style={styles.imageProductIcon}
              contentFit="cover"
              source={require("../assets/image-product2.png")}
            />
            <Text style={styles.fsNike}>FS - Nike Air Max 270 React...</Text>
            <Text style={[styles.text7, styles.text7Typo]}>$299,43</Text>
            <View style={[styles.discount, styles.discountFlexBox]}>
              <Text style={[styles.text8, styles.textTypo]}>$534,33</Text>
              <Text style={[styles.off, styles.textTypo]}>24% Off</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.header, styles.productPosition]}>
        <View style={[styles.headerChild, styles.componentPosition]} />
        <Text style={styles.nikeAirMax}>Nike Air Max 270 Rea...</Text>
        <View style={styles.headerItem} />
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
      <View style={[styles.uiStatusBars, styles.productPosition]}>
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
          <Text style={[styles.text13, styles.componentPosition]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.addCartButton, styles.addCartButtonPosition]}>
        <Text style={styles.addToCart}>Add To Cart</Text>
      </View>
      <View style={[styles.uiHomeIndicator, styles.productPosition]}>
        <View style={[styles.homeIndicator, styles.addCartButtonPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  slideShowImageLayout: {
    width: 72,
    position: "absolute",
  },
  titleTypo: {
    textAlign: "left",
    lineHeight: 30,
    fontSize: FontSize.headingH3_size,
    letterSpacing: 1,
    left: 16,
    position: "absolute",
  },
  starIconLayout: {
    width: 96,
    height: 16,
  },
  priceTypo: {
    color: Color.primaryBlue,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  selectLayout: {
    height: 81,
    width: 368,
    left: 16,
    position: "absolute",
  },
  selectSizeTypo: {
    lineHeight: 21,
    fontSize: FontSize.buttonText_size,
    textAlign: "left",
    color: Color.neutralDark,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  viewLayout: {
    width: 48,
    height: 48,
  },
  componentBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.backgroundWhite,
  },
  textTypo1: {
    top: "29.17%",
    textAlign: "center",
    lineHeight: 21,
    fontSize: FontSize.buttonText_size,
    color: Color.neutralDark,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
    position: "absolute",
  },
  discountFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  componentPosition: {
    left: "0%",
    width: "100%",
  },
  redLayout: {
    marginLeft: 16,
    height: 48,
    width: 48,
  },
  text7Typo: {
    lineHeight: 22,
    fontSize: FontSize.formTextFill_size,
    textAlign: "left",
    letterSpacing: 1,
  },
  shownPosition: {
    top: 33,
    left: 0,
  },
  cd0113400Typo: {
    width: 171,
    textAlign: "right",
    color: Color.neutralGrey,
    fontFamily: FontFamily.captionNormalregular,
    lineHeight: 22,
    fontSize: FontSize.formTextFill_size,
    letterSpacing: 1,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    lineHeight: 15,
    fontSize: FontSize.captionNormalbold_size,
    textAlign: "left",
    letterSpacing: 1,
  },
  jamesLawsonPosition: {
    left: 64,
    position: "absolute",
  },
  productIconLayout: {
    borderRadius: Border.br_5xs,
    height: 72,
    width: 72,
    top: 0,
    position: "absolute",
  },
  recomendedLayout: {
    width: 455,
    position: "absolute",
  },
  productSpaceBlock: {
    padding: Padding.p_base,
    borderRadius: Border.br_8xs,
    overflow: "hidden",
  },
  systemLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  addCartButtonPosition: {
    left: "50%",
    position: "absolute",
  },
  productImageIcon: {
    height: 238,
    top: 0,
  },
  slideShowImage: {
    top: 254,
    left: 151,
    height: 8,
  },
  title: {
    top: 278,
    width: 275,
    color: Color.neutralDark,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  addFavoriteIcon: {
    top: 280,
    left: 335,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  starRatingIcon: {
    top: 346,
    height: 16,
    left: 16,
    position: "absolute",
  },
  price: {
    top: 378,
    textAlign: "left",
    lineHeight: 30,
    fontSize: FontSize.headingH3_size,
    letterSpacing: 1,
    left: 16,
    position: "absolute",
  },
  product: {
    top: 122,
    height: 408,
  },
  selectSize: {
    letterSpacing: 1,
    lineHeight: 21,
    top: 0,
    left: 0,
    position: "absolute",
  },
  component: {
    borderColor: "#ebf0ff",
    borderRadius: Border.br_47xl,
    left: "0%",
    width: "100%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  text: {
    left: "41.67%",
    textAlign: "center",
  },
  view: {
    height: 48,
  },
  text1: {
    left: "27.08%",
    textAlign: "center",
  },
  component2: {
    borderColor: "#40bfff",
    borderRadius: Border.br_47xl,
    left: "0%",
    width: "100%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  text4: {
    left: "39.58%",
    textAlign: "center",
  },
  text5: {
    left: "25%",
    textAlign: "center",
  },
  productDetailsproductSize: {
    flexDirection: "row",
    top: 33,
    left: 0,
    position: "absolute",
  },
  sizeSelect: {
    top: 554,
  },
  yellow: {
    backgroundColor: "#ffc833",
    borderRadius: Border.br_47xl,
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    position: "absolute",
  },
  selected: {
    height: "33.33%",
    width: "33.33%",
    top: "33.33%",
    right: "33.33%",
    bottom: "33.33%",
    left: "33.33%",
    borderRadius: Border.br_47xl,
    position: "absolute",
    backgroundColor: Color.backgroundWhite,
  },
  blue: {
    backgroundColor: Color.primaryBlue,
    borderRadius: Border.br_47xl,
  },
  red: {
    backgroundColor: Color.primaryRed,
    borderRadius: Border.br_47xl,
  },
  green: {
    backgroundColor: Color.primaryGreen,
    borderRadius: Border.br_47xl,
  },
  purple: {
    backgroundColor: Color.primaryPurple,
    borderRadius: Border.br_47xl,
  },
  dark: {
    backgroundColor: Color.neutralDark,
    borderRadius: Border.br_47xl,
  },
  productDetailscolorSelect: {
    top: 33,
    left: 0,
    position: "absolute",
  },
  colorSelect: {
    top: 659,
  },
  description: {
    top: 153,
    color: Color.neutralGrey,
    fontFamily: FontFamily.captionNormalregular,
    width: 343,
    left: 0,
    position: "absolute",
  },
  shown1: {
    fontFamily: FontFamily.captionNormalregular,
    color: Color.neutralDark,
    top: 0,
    left: 0,
    position: "absolute",
  },
  laserBlueanthracitewatermel: {
    right: 0,
  },
  shown: {
    height: 66,
    width: 343,
    position: "absolute",
  },
  cd0113400: {
    left: 172,
  },
  style: {
    top: 115,
    height: 22,
    width: 343,
    left: 0,
    position: "absolute",
  },
  specification: {
    top: 764,
    height: 241,
    width: 343,
    left: 16,
    position: "absolute",
  },
  seeMoreLink: {
    left: 274,
    textAlign: "right",
    lineHeight: 21,
    fontSize: FontSize.buttonText_size,
    color: Color.primaryBlue,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
    top: 0,
    position: "absolute",
  },
  ratingStarIcon: {
    height: 16,
    top: 0,
    left: 0,
    position: "absolute",
  },
  text6: {
    left: 104,
    color: Color.neutralGrey,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    top: 0,
    position: "absolute",
  },
  review1: {
    left: 125,
    color: Color.neutralGrey,
    fontFamily: FontFamily.captionNormalregular,
    top: 0,
    position: "absolute",
  },
  totalReview: {
    top: 29,
    width: 183,
    height: 16,
    left: 0,
    position: "absolute",
  },
  profilePictureIcon: {
    height: 48,
    top: 0,
    left: 0,
    position: "absolute",
  },
  jamesLawson: {
    top: 3,
    lineHeight: 21,
    fontSize: FontSize.buttonText_size,
    textAlign: "left",
    color: Color.neutralDark,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
  },
  ratingmediumStarIcon: {
    top: 28,
    height: 16,
    width: 96,
  },
  profile: {
    width: 176,
    height: 48,
  },
  airMaxAre: {
    marginTop: 16,
    color: Color.neutralGrey,
    fontFamily: FontFamily.captionNormalregular,
    width: 343,
  },
  productPicture01Icon: {
    left: 168,
    borderRadius: Border.br_8xs,
    height: 72,
    top: 0,
  },
  productPicture02Icon: {
    left: 0,
  },
  productPicture03Icon: {
    left: 84,
  },
  productPicture: {
    width: 240,
    height: 72,
    marginTop: 16,
  },
  december102016: {
    marginTop: 16,
    color: Color.neutralGrey,
    fontFamily: FontFamily.captionNormalregular,
    width: 343,
  },
  reviewcontentReview: {
    top: 61,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  review: {
    top: 1029,
    height: 354,
    width: 343,
    left: 16,
    position: "absolute",
  },
  youMightAlso: {
    letterSpacing: 0.1,
    top: 0,
    left: 0,
    position: "absolute",
  },
  imageProductIcon: {
    height: 109,
    width: 109,
    borderRadius: Border.br_8xs,
  },
  fsNike: {
    lineHeight: 18,
    marginTop: 8,
    width: 109,
    fontSize: FontSize.formTextFill_size,
    textAlign: "left",
    color: Color.neutralDark,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
  },
  text7: {
    marginTop: 8,
    color: Color.primaryBlue,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  text8: {
    textDecoration: "line-through",
    color: Color.neutralGrey,
    fontFamily: FontFamily.captionNormalregular,
  },
  off: {
    color: Color.primaryRed,
    width: 59,
    marginLeft: 8,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  discount: {
    height: 15,
    marginTop: 8,
    overflow: "hidden",
  },
  product01: {
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.backgroundWhite,
    borderColor: "#ebf0ff",
    top: 0,
    left: 0,
  },
  product02: {
    left: 157,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.backgroundWhite,
    borderColor: "#ebf0ff",
    top: 0,
  },
  product03: {
    left: 314,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.backgroundWhite,
    borderColor: "#ebf0ff",
    top: 0,
  },
  recomended: {
    top: 33,
    left: 0,
    height: 238,
  },
  recomendedProduct: {
    top: 1406,
    height: 271,
    left: 16,
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
  nikeAirMax: {
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
  systemIcon24pxmore: {
    right: "4.27%",
    left: "89.33%",
    bottom: "22.95%",
    width: "6.4%",
    height: "19.67%",
    maxWidth: "100%",
    top: "57.38%",
  },
  systemIcon24pxsearch: {
    right: "14.93%",
    left: "78.67%",
    bottom: "22.95%",
    width: "6.4%",
    height: "19.67%",
    maxWidth: "100%",
    top: "57.38%",
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
    textAlign: "center",
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
  addToCart: {
    lineHeight: 25,
    color: Color.backgroundWhite,
    width: 311,
    textAlign: "center",
    fontSize: FontSize.buttonText_size,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
  },
  addCartButton: {
    marginLeft: -171.5,
    bottom: 50,
    shadowColor: "rgba(64, 191, 255, 0.24)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    padding: Padding.p_base,
    borderRadius: Border.br_8xs,
    overflow: "hidden",
    backgroundColor: Color.primaryBlue,
    alignItems: "center",
    flexDirection: "row",
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
  productDetail: {
    flex: 1,
    height: 1805,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
});

export default ProductDetail;
