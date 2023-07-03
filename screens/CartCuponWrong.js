import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const CartCuponWrong = () => {
  return (
    <View style={styles.cartCuponWrong}>
      <View style={[styles.product1, styles.productLayout]}>
        <View style={[styles.product1Child, styles.childBorder]} />
        <Text style={[styles.nikeAirZoom, styles.yourTypo]}>
          Nike Air Zoom Pegasus 36 Miami
        </Text>
        <Text style={[styles.text, styles.textTypo]}>$299,43</Text>
        <Image
          style={[styles.image47Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-47.png")}
        />
        <View style={styles.buttoninputNumber}>
          <Image
            style={[styles.buttoninputNumberChild, styles.buttoninputPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-430.png")}
          />
          <View
            style={[styles.buttoninputNumberItem, styles.buttoninputPosition]}
          />
          <Image
            style={[styles.buttoninputNumberInner, styles.buttoninputPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-432.png")}
          />
          <Text style={[styles.text1, styles.text1Position]}>1</Text>
          <Image
            style={[styles.systemIcon16pxplus, styles.systemLayout1]}
            contentFit="cover"
            source={require("../assets/system-icon16pxplus.png")}
          />
          <Image
            style={[styles.systemIcon16pxminus, styles.systemLayout1]}
            contentFit="cover"
            source={require("../assets/system-icon16pxminus.png")}
          />
        </View>
        <Image
          style={[styles.systemIcon24pxtrash, styles.systemLayout]}
          contentFit="cover"
          source={require("../assets/system-icon24pxtrash.png")}
        />
        <Image
          style={[styles.systemIcon24pxlove, styles.systemLayout]}
          contentFit="cover"
          source={require("../assets/system-icon24pxlove.png")}
        />
      </View>
      <View style={[styles.product2, styles.productLayout]}>
        <View style={[styles.product1Child, styles.childBorder]} />
        <Text style={[styles.nikeAirZoom, styles.yourTypo]}>
          Nike Air Zoom Pegasus 36 Miami
        </Text>
        <Text style={[styles.text, styles.textTypo]}>$299,43</Text>
        <Image
          style={[styles.image47Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-471.png")}
        />
        <View style={styles.buttoninputNumber}>
          <Image
            style={[styles.buttoninputNumberChild, styles.buttoninputPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-430.png")}
          />
          <View
            style={[styles.buttoninputNumberItem, styles.buttoninputPosition]}
          />
          <Image
            style={[styles.buttoninputNumberInner, styles.buttoninputPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-432.png")}
          />
          <Text style={[styles.text1, styles.text1Position]}>1</Text>
          <Image
            style={[styles.systemIcon16pxplus, styles.systemLayout1]}
            contentFit="cover"
            source={require("../assets/system-icon16pxplus.png")}
          />
          <Image
            style={[styles.systemIcon16pxminus, styles.systemLayout1]}
            contentFit="cover"
            source={require("../assets/system-icon16pxminus.png")}
          />
        </View>
        <Image
          style={[styles.systemIcon24pxtrash, styles.systemLayout]}
          contentFit="cover"
          source={require("../assets/system-icon24pxtrash.png")}
        />
        <Image
          style={[styles.systemIcon24pxlove, styles.systemLayout]}
          contentFit="cover"
          source={require("../assets/add-favorite-icon.png")}
        />
      </View>
      <View style={styles.wrongCuponForm}>
        <View style={[styles.formcuponactive, styles.profilePosition]}>
          <View style={[styles.formcuponactiveChild, styles.items3Position]} />
          <Text style={[styles.xzop014524bdh, styles.yourTypo]}>
            XzOp014524BDH
          </Text>
          <View style={[styles.applyWrapper, styles.applyWrapperFlexBox]}>
            <Text style={[styles.apply, styles.applyTypo]}>Apply</Text>
          </View>
        </View>
        <Text
          style={[styles.yourCuponIs, styles.yourTypo]}
        >{`* Your Cupon Is Not Correct `}</Text>
      </View>
      <View style={[styles.totalPrice, styles.childBorder]}>
        <View style={[styles.parent, styles.groupLayout]}>
          <Text style={[styles.text4, styles.textPosition]}>$598.86</Text>
          <Text style={[styles.items3, styles.items3Position]}>Items (3)</Text>
        </View>
        <View style={[styles.group, styles.groupLayout]}>
          <Text style={[styles.text4, styles.textPosition]}>$40.00</Text>
          <Text style={[styles.items3, styles.items3Position]}>Shipping</Text>
        </View>
        <View style={[styles.container, styles.groupLayout]}>
          <Text style={[styles.text4, styles.textPosition]}>$128.00</Text>
          <Text style={[styles.items3, styles.items3Position]}>
            Import charges
          </Text>
        </View>
        <View style={styles.totalPriceChild} />
        <View style={styles.groupView}>
          <Text style={[styles.text7, styles.textPosition]}>$766.86</Text>
          <Text style={[styles.totalPrice1, styles.items3Position]}>
            Total Price
          </Text>
        </View>
      </View>
      <View style={[styles.checkOutPrice, styles.applyWrapperFlexBox]}>
        <Text style={[styles.checkOut, styles.applyTypo]}>Check Out</Text>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.headerChild, styles.childPosition]} />
        <Text style={[styles.yourCart, styles.text1Clr]}>Your Cart</Text>
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
          <Text style={[styles.text8, styles.text8Layout]}>9:41</Text>
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
            <Text style={[styles.home1, styles.home1Typo]}>Home</Text>
          </View>
          <View style={[styles.explore, styles.homeLayout]}>
            <View style={[styles.headerChild, styles.childPosition]} />
            <Image
              style={[styles.systemIcon24pxhome, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/system-icon24pxsearch.png")}
            />
            <Text style={[styles.home1, styles.home1Typo]}>Explore</Text>
          </View>
          <View style={[styles.cart, styles.homeLayout]}>
            <View style={[styles.headerChild, styles.childPosition]} />
            <Image
              style={[styles.systemIcon24pxhome, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/system-icon24pxcart1.png")}
            />
            <Text style={[styles.cart1, styles.home1Typo]}>Cart</Text>
            <View style={[styles.notificationmark, styles.offerPosition]}>
              <Image
                style={[styles.ellipseIcon, styles.text9Position]}
                contentFit="cover"
                source={require("../assets/ellipse.png")}
              />
              <Text style={[styles.text9, styles.text9Position]}>2</Text>
            </View>
          </View>
          <View style={[styles.offer, styles.offerPosition]}>
            <View style={[styles.headerChild, styles.childPosition]} />
            <Image
              style={[styles.systemIcon24pxhome, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/system-icon24pxoffer1.png")}
            />
            <Text style={[styles.home1, styles.home1Typo]}>Offer</Text>
          </View>
          <View style={[styles.profile, styles.homeLayout]}>
            <View style={[styles.headerChild, styles.childPosition]} />
            <Image
              style={[styles.systemIcon24pxhome, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/system-icon24pxuser1.png")}
            />
            <Text style={[styles.home1, styles.home1Typo]}>Account</Text>
          </View>
        </View>
      </View>
      <View style={[styles.uiHomeIndicator, styles.tabBartabBarPosition]}>
        <View style={[styles.homeIndicator, styles.text1Position]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productLayout: {
    height: 104,
    width: 343,
    left: 16,
    position: "absolute",
  },
  childBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.backgroundWhite,
  },
  yourTypo: {
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    textAlign: "left",
  },
  textTypo: {
    color: Color.primaryBlue,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  buttoninputPosition: {
    bottom: "-2.08%",
    top: "-2.08%",
    height: "104.17%",
    position: "absolute",
  },
  text1Position: {
    opacity: 0.5,
    position: "absolute",
  },
  systemLayout1: {
    bottom: "16.67%",
    top: "16.67%",
    width: "15.38%",
    height: "66.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  systemLayout: {
    bottom: "61.54%",
    width: "7%",
    height: "23.08%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "15.38%",
    position: "absolute",
    overflow: "hidden",
  },
  profilePosition: {
    right: "0%",
    position: "absolute",
  },
  items3Position: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  applyWrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.primaryBlue,
    position: "absolute",
    overflow: "hidden",
  },
  applyTypo: {
    color: Color.backgroundWhite,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  groupLayout: {
    height: 22,
    width: 310,
    right: 17,
    position: "absolute",
  },
  textPosition: {
    textAlign: "right",
    right: 0,
    top: 0,
    letterSpacing: 1,
    fontSize: FontSize.formTextFill_size,
    position: "absolute",
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
  },
  text1Clr: {
    letterSpacing: 0.1,
    color: Color.neutralDark,
  },
  headerItemPosition: {
    left: "-0.13%",
    right: "-0.13%",
    width: "100.27%",
    borderTopWidth: 1,
    borderColor: "#ebf0ff",
    borderStyle: "solid",
    position: "absolute",
  },
  homePosition: {
    right: "80%",
    position: "absolute",
  },
  text8Layout: {
    width: "100%",
    left: "0%",
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
  home1Typo: {
    lineHeight: 15,
    fontSize: FontSize.captionNormalbold_size,
    textAlign: "center",
    letterSpacing: 1,
  },
  offerPosition: {
    right: "20%",
    position: "absolute",
  },
  text9Position: {
    display: "none",
    position: "absolute",
  },
  product1Child: {
    borderColor: "#ebf0ff",
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    left: "0%",
    bottom: "0%",
    height: "100%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  nikeAirZoom: {
    width: "46.06%",
    textAlign: "left",
    color: Color.neutralDark,
    lineHeight: 18,
    letterSpacing: 1,
    fontSize: FontSize.formTextFill_size,
    left: "29.15%",
    position: "absolute",
    top: "15.38%",
    fontWeight: "700",
  },
  text: {
    top: "67.31%",
    textAlign: "left",
    lineHeight: 18,
    letterSpacing: 1,
    fontSize: FontSize.formTextFill_size,
    left: "29.15%",
    position: "absolute",
  },
  image47Icon: {
    height: "69.23%",
    width: "20.99%",
    right: "74.34%",
    left: "4.66%",
    bottom: "15.38%",
    maxWidth: "100%",
    top: "15.38%",
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  buttoninputNumberChild: {
    right: "68.75%",
    left: "-0.48%",
    width: "31.73%",
    top: "-2.08%",
    height: "104.17%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  buttoninputNumberItem: {
    width: "39.42%",
    right: "30.29%",
    left: "30.29%",
    backgroundColor: Color.neutralLight,
    top: "-2.08%",
    height: "104.17%",
    borderWidth: 1,
    borderColor: "#ebf0ff",
    borderStyle: "solid",
  },
  buttoninputNumberInner: {
    right: "-0.48%",
    left: "68.75%",
    width: "31.73%",
    top: "-2.08%",
    height: "104.17%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  text1: {
    top: "12.5%",
    left: "48.08%",
    textAlign: "center",
    fontFamily: FontFamily.captionNormalregular,
    letterSpacing: 0.1,
    color: Color.neutralDark,
    lineHeight: 18,
    fontSize: FontSize.formTextFill_size,
  },
  systemIcon16pxplus: {
    right: "7.69%",
    left: "76.92%",
  },
  systemIcon16pxminus: {
    right: "76.92%",
    left: "7.69%",
  },
  buttoninputNumber: {
    width: "30.32%",
    top: "61.54%",
    left: "65.01%",
    right: "4.66%",
    height: "23.08%",
    bottom: "15.38%",
    position: "absolute",
  },
  systemIcon24pxtrash: {
    left: "88.34%",
    right: "4.66%",
  },
  systemIcon24pxlove: {
    right: "13.99%",
    left: "79.01%",
  },
  product1: {
    top: 138,
  },
  product2: {
    top: 258,
  },
  formcuponactiveChild: {
    borderColor: "#fb7181",
    height: 56,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.backgroundWhite,
    left: 0,
    width: 343,
  },
  xzop014524bdh: {
    width: "31.38%",
    top: "30.36%",
    left: "4.69%",
    color: Color.neutralGrey,
    lineHeight: 22,
    textAlign: "left",
    letterSpacing: 1,
    fontSize: FontSize.formTextFill_size,
    position: "absolute",
  },
  apply: {
    lineHeight: 22,
    textAlign: "center",
    letterSpacing: 1,
    fontSize: FontSize.formTextFill_size,
  },
  applyWrapper: {
    left: 256,
    borderTopRightRadius: Border.br_8xs,
    borderBottomRightRadius: Border.br_8xs,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_mid,
    top: 0,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.primaryBlue,
  },
  formcuponactive: {
    height: "65.12%",
    bottom: "34.88%",
    left: "0%",
    top: "0%",
    width: "100%",
  },
  yourCuponIs: {
    top: "74.42%",
    color: Color.primaryRed,
    lineHeight: 22,
    textAlign: "left",
    letterSpacing: 1,
    fontSize: FontSize.formTextFill_size,
    left: "0%",
    position: "absolute",
  },
  wrongCuponForm: {
    top: 394,
    height: 86,
    width: 343,
    left: 16,
    position: "absolute",
  },
  text4: {
    lineHeight: 22,
    fontFamily: FontFamily.captionNormalregular,
    color: Color.neutralDark,
  },
  items3: {
    color: Color.neutralGrey,
    lineHeight: 22,
    fontFamily: FontFamily.captionNormalregular,
    textAlign: "left",
    letterSpacing: 1,
    fontSize: FontSize.formTextFill_size,
  },
  parent: {
    top: 16,
  },
  group: {
    top: 50,
  },
  container: {
    top: 84,
  },
  totalPriceChild: {
    top: 118,
    right: 16,
    borderStyle: "dashed",
    borderRadius: 0.001,
    height: 1,
    borderTopWidth: 1,
    borderColor: "#ebf0ff",
    left: 16,
    position: "absolute",
  },
  text7: {
    color: Color.primaryBlue,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    lineHeight: 18,
  },
  totalPrice1: {
    textAlign: "left",
    color: Color.neutralDark,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    lineHeight: 18,
    letterSpacing: 1,
    fontSize: FontSize.formTextFill_size,
  },
  groupView: {
    top: 130,
    height: 18,
    width: 310,
    right: 17,
    position: "absolute",
  },
  totalPrice: {
    top: 496,
    left: 15,
    height: 164,
    borderColor: "#ebf0ff",
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    width: 343,
  },
  checkOut: {
    fontSize: FontSize.buttonText_size,
    lineHeight: 25,
    width: 311,
    textAlign: "center",
    letterSpacing: 1,
  },
  checkOutPrice: {
    top: 676,
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
    flexDirection: "row",
    backgroundColor: Color.primaryBlue,
    borderRadius: Border.br_8xs,
    left: 16,
  },
  headerChild: {
    left: "0%",
    position: "absolute",
    backgroundColor: Color.backgroundWhite,
  },
  yourCart: {
    top: "57.38%",
    left: "4.27%",
    fontSize: FontSize.headingH4_size,
    lineHeight: 24,
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
  text8: {
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
    left: "0%",
    position: "absolute",
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
    position: "absolute",
  },
  home1: {
    top: "74.58%",
    lineHeight: 15,
    fontSize: FontSize.captionNormalbold_size,
    left: "0%",
    position: "absolute",
    width: "100%",
    color: Color.neutralGrey,
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
  cart1: {
    top: "74.58%",
    lineHeight: 15,
    fontSize: FontSize.captionNormalbold_size,
    left: "0%",
    position: "absolute",
    width: "100%",
    color: Color.primaryBlue,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  ellipseIcon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    left: "0%",
    bottom: "0%",
    height: "100%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  text9: {
    top: "15%",
    left: "35%",
    lineHeight: 15,
    fontSize: FontSize.captionNormalbold_size,
    textAlign: "center",
    letterSpacing: 1,
    color: Color.backgroundWhite,
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
    position: "absolute",
  },
  menu: {
    height: "63.44%",
    top: "0%",
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
  },
  uiHomeIndicator: {
    height: 34,
  },
  cartCuponWrong: {
    flex: 1,
    height: 842,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
});

export default CartCuponWrong;
