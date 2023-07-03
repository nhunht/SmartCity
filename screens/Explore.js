import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Explore = () => {
  return (
    <View style={styles.explore}>
      <View style={[styles.womanCategory, styles.categoryLayout]}>
        <Text style={[styles.womanFashion, styles.womanFashionFlexBox]}>
          Woman Fashion
        </Text>
        <View style={[styles.dress, styles.womanPosition]}>
          <Image
            style={styles.productIcon}
            contentFit="cover"
            source={require("../assets/product-icon1.png")}
          />
          <Text style={[styles.dress1, styles.dress1Typo]}>Dress</Text>
        </View>
        <View style={[styles.womanTShirt, styles.womanPosition]}>
          <View style={styles.productIcon}>
            <View
              style={[styles.productIconChild, styles.productIconChildBorder]}
            />
            <Image
              style={[styles.productIcon24pxwomanTshirt, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/product-icon24pxwoman-tshirt.png")}
            />
          </View>
          <Text style={styles.dress1Typo}>Woman T-Shirt</Text>
        </View>
        <View style={[styles.womanPants, styles.womanPosition]}>
          <View style={styles.productIcon}>
            <View
              style={[styles.productIconChild, styles.productIconChildBorder]}
            />
            <Image
              style={[styles.productIcon24pxwomanTshirt, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/product-icon24pxwoman-pants.png")}
            />
          </View>
          <Text style={styles.dress1Typo}>Woman Pants</Text>
        </View>
        <View style={[styles.skirt, styles.womanPosition]}>
          <Image
            style={styles.productIcon}
            contentFit="cover"
            source={require("../assets/product-icon.png")}
          />
          <Text style={[styles.dress1, styles.dress1Typo]}>Skirt</Text>
        </View>
        <View style={[styles.womanBag, styles.bikiniPosition]}>
          <Image
            style={styles.productIcon}
            contentFit="cover"
            source={require("../assets/product-icon3.png")}
          />
          <Text style={[styles.dress1, styles.dress1Typo]}>Woman Bag</Text>
        </View>
        <View style={[styles.highHeels, styles.bikiniPosition]}>
          <View style={styles.productIcon}>
            <View
              style={[styles.productIconChild, styles.productIconChildBorder]}
            />
            <Image
              style={[styles.productIcon24pxwomanTshirt, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/product-icon24pxwoman-shoes.png")}
            />
          </View>
          <Text style={[styles.dress1, styles.dress1Typo]}>High Heels</Text>
        </View>
        <View style={[styles.bikini, styles.bikiniPosition]}>
          <Image
            style={styles.productIcon}
            contentFit="cover"
            source={require("../assets/product-icon2.png")}
          />
          <Text style={[styles.dress1, styles.dress1Typo]}>Bikini</Text>
        </View>
      </View>
      <View style={[styles.manCategory, styles.categoryLayout]}>
        <Text style={[styles.womanFashion, styles.womanFashionFlexBox]}>
          Man Fashion
        </Text>
        <View style={[styles.dress, styles.womanPosition]}>
          <Image
            style={styles.productIcon}
            contentFit="cover"
            source={require("../assets/product-icon4.png")}
          />
          <Text style={[styles.dress1, styles.dress1Typo]}>Man Shirt</Text>
        </View>
        <View style={[styles.womanTShirt, styles.womanPosition]}>
          <Image
            style={styles.productIcon}
            contentFit="cover"
            source={require("../assets/product-icon21.png")}
          />
          <Text style={styles.dress1Typo}>Man Work Equipment</Text>
        </View>
        <View style={[styles.womanPants, styles.womanPosition]}>
          <View style={styles.productIcon}>
            <View
              style={[styles.productIconChild, styles.productIconChildBorder]}
            />
            <Image
              style={[styles.productIcon24pxwomanTshirt, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/product-icon24pxtshirt.png")}
            />
          </View>
          <Text style={[styles.dress1, styles.dress1Typo]}>Man T-Shirt</Text>
        </View>
        <View style={[styles.skirt, styles.womanPosition]}>
          <Image
            style={styles.productIcon}
            contentFit="cover"
            source={require("../assets/product-icon41.png")}
          />
          <Text style={[styles.dress1, styles.dress1Typo]}>Man Shoes</Text>
        </View>
        <View style={[styles.womanBag, styles.bikiniPosition]}>
          <Image
            style={styles.productIcon}
            contentFit="cover"
            source={require("../assets/product-icon5.png")}
          />
          <Text style={[styles.dress1, styles.dress1Typo]}>Man Pants</Text>
        </View>
        <View style={[styles.highHeels, styles.bikiniPosition]}>
          <Image
            style={styles.productIcon}
            contentFit="cover"
            source={require("../assets/product-icon6.png")}
          />
          <Text style={styles.dress1Typo}>Man Underwear</Text>
        </View>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.headerChild, styles.childPosition]} />
        <View style={[styles.headerItem, styles.headerItemPosition]} />
        <View style={[styles.formsearchdefault, styles.productIconChildBorder]}>
          <Image
            style={styles.systemIcon16pxsearch}
            contentFit="cover"
            source={require("../assets/system-icon16pxsearch.png")}
          />
          <Text style={[styles.searchProduct, styles.home1Clr]}>
            Search Product
          </Text>
        </View>
        <Image
          style={[styles.systemIcon24pxnotification, styles.systemLayout]}
          contentFit="cover"
          source={require("../assets/system-icon24pxnotification1.png")}
        />
        <Image
          style={[styles.systemIcon24pxlove, styles.systemLayout]}
          contentFit="cover"
          source={require("../assets/add-favorite-icon.png")}
        />
        <Image
          style={styles.headerInner}
          contentFit="cover"
          source={require("../assets/ellipse-1131.png")}
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
        <View style={[styles.timeStyle, styles.homePosition]}>
          <Text style={[styles.text, styles.textFlexBox]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.tabBartabBar, styles.tabBartabBarPosition]}>
        <View style={[styles.tabBartabBarChild, styles.headerItemPosition]} />
        <View style={[styles.tabBartabBarItem, styles.menuPosition]} />
        <View style={[styles.menu, styles.menuPosition]}>
          <View style={[styles.home, styles.homeLayout]}>
            <View style={[styles.headerChild, styles.childPosition]} />
            <Image
              style={[styles.systemIcon24pxhome, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/system-icon24pxhome.png")}
            />
            <Text style={[styles.home1, styles.home1Position]}>Home</Text>
          </View>
          <View style={[styles.explore1, styles.homeLayout]}>
            <View style={[styles.headerChild, styles.childPosition]} />
            <Image
              style={[styles.systemIcon24pxhome, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/system-icon24pxsearch1.png")}
            />
            <Text style={[styles.explore2, styles.home1Position]}>Explore</Text>
          </View>
          <View style={[styles.cart, styles.homeLayout]}>
            <View style={[styles.headerChild, styles.childPosition]} />
            <Image
              style={[styles.systemIcon24pxhome, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/system-icon24pxcart.png")}
            />
            <Text style={[styles.home1, styles.home1Position]}>Cart</Text>
            <View style={[styles.notificationmark, styles.offerPosition]}>
              <Image
                style={[styles.ellipseIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/ellipse.png")}
              />
              <Text style={[styles.text1, styles.textFlexBox]}>2</Text>
            </View>
          </View>
          <View style={[styles.offer, styles.offerPosition]}>
            <View style={[styles.headerChild, styles.childPosition]} />
            <Image
              style={[styles.systemIcon24pxhome, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/system-icon24pxoffer1.png")}
            />
            <Text style={[styles.home1, styles.home1Position]}>Offer</Text>
          </View>
          <View style={[styles.profile, styles.homeLayout]}>
            <View style={[styles.headerChild, styles.childPosition]} />
            <Image
              style={[styles.systemIcon24pxhome, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/system-icon24pxuser1.png")}
            />
            <Text style={[styles.home1, styles.home1Position]}>Account</Text>
          </View>
        </View>
      </View>
      <View style={[styles.uiHomeIndicator, styles.tabBartabBarPosition]}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryLayout: {
    height: 265,
    width: 343,
    left: 16,
    position: "absolute",
  },
  womanFashionFlexBox: {
    textAlign: "left",
    letterSpacing: 1,
  },
  womanPosition: {
    alignItems: "center",
    top: 33,
    position: "absolute",
    overflow: "hidden",
  },
  dress1Typo: {
    marginTop: 8,
    textAlign: "center",
    color: Color.neutralGrey,
    fontFamily: FontFamily.captionNormalregular,
    lineHeight: 15,
    fontSize: FontSize.captionNormalbold_size,
    width: 70,
    letterSpacing: 1,
  },
  productIconChildBorder: {
    borderWidth: 1,
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
  bikiniPosition: {
    top: 157,
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  headerPosition: {
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  childPosition: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
  headerItemPosition: {
    borderTopWidth: 1,
    left: "-0.13%",
    right: "-0.13%",
    width: "100.27%",
    borderColor: "#ebf0ff",
    borderStyle: "solid",
    position: "absolute",
  },
  home1Clr: {
    color: Color.neutralGrey,
    fontFamily: FontFamily.captionNormalregular,
  },
  systemLayout: {
    bottom: "22.13%",
    width: "6.4%",
    height: "19.67%",
    top: "58.2%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homePosition: {
    right: "80%",
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "center",
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
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  homeLayout: {
    width: "20%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  home1Position: {
    top: "74.58%",
    left: "0%",
    textAlign: "center",
    lineHeight: 15,
    fontSize: FontSize.captionNormalbold_size,
    letterSpacing: 1,
    position: "absolute",
    width: "100%",
  },
  offerPosition: {
    right: "20%",
    position: "absolute",
  },
  womanFashion: {
    fontSize: FontSize.buttonText_size,
    lineHeight: 21,
    color: Color.neutralDark,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    left: 0,
    top: 0,
    textAlign: "left",
    letterSpacing: 1,
    position: "absolute",
  },
  productIcon: {
    height: 70,
    width: 70,
  },
  dress1: {
    height: 30,
  },
  dress: {
    left: 0,
  },
  productIconChild: {
    borderRadius: Border.br_47xl,
    left: "0%",
    bottom: "0%",
    height: "100%",
    right: "0%",
    top: "0%",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
  productIcon24pxwomanTshirt: {
    height: "34.29%",
    width: "34.29%",
    top: "32.86%",
    right: "32.86%",
    bottom: "32.86%",
    left: "32.86%",
  },
  womanTShirt: {
    left: 91,
  },
  womanPants: {
    left: 182,
  },
  skirt: {
    left: 273,
  },
  womanBag: {
    left: 0,
  },
  highHeels: {
    left: 91,
  },
  bikini: {
    left: 182,
  },
  womanCategory: {
    top: 427,
  },
  manCategory: {
    top: 138,
  },
  headerChild: {
    left: "0%",
    position: "absolute",
  },
  headerItem: {
    height: "0.82%",
    top: "99.59%",
    bottom: "-0.41%",
  },
  systemIcon16pxsearch: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  searchProduct: {
    fontSize: FontSize.formTextFill_size,
    lineHeight: 22,
    width: 207,
    marginLeft: 8,
    textAlign: "left",
    letterSpacing: 1,
  },
  formsearchdefault: {
    height: "37.7%",
    width: "70.13%",
    top: "49.18%",
    right: "25.6%",
    bottom: "13.11%",
    left: "4.27%",
    borderRadius: Border.br_8xs,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    overflow: "hidden",
  },
  systemIcon24pxnotification: {
    right: "4.27%",
    left: "89.33%",
  },
  systemIcon24pxlove: {
    right: "14.93%",
    left: "78.67%",
  },
  headerInner: {
    height: "6.56%",
    width: "2.13%",
    right: "4.8%",
    bottom: "35.25%",
    left: "93.07%",
    top: "58.2%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
    left: "0%",
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
  },
  home1: {
    color: Color.neutralGrey,
    fontFamily: FontFamily.captionNormalregular,
  },
  home: {
    right: "80%",
    position: "absolute",
    left: "0%",
  },
  explore2: {
    color: Color.primaryBlue,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  explore1: {
    right: "60%",
    left: "20%",
    position: "absolute",
  },
  ellipseIcon: {
    height: "120%",
    width: "120%",
    top: "-10%",
    right: "-10%",
    bottom: "-10%",
    left: "-10%",
  },
  text1: {
    top: "15%",
    left: "35%",
    color: Color.backgroundWhite,
    lineHeight: 15,
    fontSize: FontSize.captionNormalbold_size,
    textAlign: "center",
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
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
  offer: {
    left: "60%",
    width: "20%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  profile: {
    left: "80%",
    right: "0%",
    width: "20%",
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
  explore: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
});

export default Explore;
