import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const OrderDetails = () => {
  return (
    <View style={styles.orderDetails}>
      <View style={styles.tracking}>
        <Image
          style={[styles.lineIcon, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line.png")}
        />
        <Image
          style={[styles.lineIcon1, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line.png")}
        />
        <Image
          style={[styles.lineIcon2, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line1.png")}
        />
        <View style={styles.packing}>
          <Text style={[styles.packing1, styles.text7Position]}>Packing</Text>
          <Image
            style={[styles.pacingIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/pacing.png")}
          />
        </View>
        <View style={[styles.shipping, styles.successPosition]}>
          <Text style={[styles.packing1, styles.text7Position]}>Shipping</Text>
          <Image
            style={[styles.shippingIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/pacing.png")}
          />
        </View>
        <View style={[styles.arriving, styles.successPosition]}>
          <Text style={[styles.packing1, styles.text7Position]}>Arriving</Text>
          <Image
            style={[styles.arrivingIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/pacing.png")}
          />
        </View>
        <View style={[styles.success, styles.successPosition]}>
          <Text style={[styles.packing1, styles.text7Position]}>Success</Text>
          <Image
            style={[styles.successIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/success.png")}
          />
        </View>
      </View>
      <View style={styles.product}>
        <Text style={[styles.product1, styles.textFlexBox]}>Product</Text>
        <View style={styles.product2}>
          <View style={styles.productLayout}>
            <View style={[styles.product1Child, styles.totalPriceBorder]} />
            <Text style={[styles.nikeAirZoom, styles.nikeAirZoomTypo]}>
              Nike Air Zoom Pegasus 36 Miami
            </Text>
            <Text style={[styles.text, styles.textTypo]}>$299,43</Text>
            <Image
              style={[styles.image47Icon, styles.lineIconLayout]}
              contentFit="cover"
              source={require("../assets/image-47.png")}
            />
            <Image
              style={[styles.systemIcon24pxlove, styles.lineIconLayout]}
              contentFit="cover"
              source={require("../assets/system-icon24pxlove.png")}
            />
          </View>
          <View style={[styles.product21, styles.productLayout]}>
            <View style={[styles.product1Child, styles.totalPriceBorder]} />
            <Text style={[styles.nikeAirZoom, styles.nikeAirZoomTypo]}>
              Nike Air Zoom Pegasus 36 Miami
            </Text>
            <Text style={[styles.text, styles.textTypo]}>$299,43</Text>
            <Image
              style={[styles.image47Icon, styles.lineIconLayout]}
              contentFit="cover"
              source={require("../assets/image-471.png")}
            />
            <Image
              style={[styles.systemIcon24pxlove, styles.lineIconLayout]}
              contentFit="cover"
              source={require("../assets/add-favorite-icon.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.shippingDetails}>
        <Text style={[styles.product1, styles.textFlexBox]}>
          Shipping Details
        </Text>
        <View
          style={[styles.shippingDetails2, styles.notifyMeButtonSpaceBlock]}
        >
          <View style={styles.dateShippingParent}>
            <Text style={[styles.dateShipping, styles.textFlexBox]}>
              Date Shipping
            </Text>
            <Text style={[styles.january162015, styles.january162015Typo]}>
              January 16, 2015
            </Text>
          </View>
          <View style={[styles.shippingParent, styles.parentSpaceBlock]}>
            <Text style={[styles.dateShipping, styles.textFlexBox]}>
              Shipping
            </Text>
            <Text style={[styles.january162015, styles.january162015Typo]}>
              POS Reggular
            </Text>
          </View>
          <View style={[styles.shippingParent, styles.parentSpaceBlock]}>
            <Text style={[styles.dateShipping, styles.textFlexBox]}>
              No. Resi
            </Text>
            <Text style={[styles.january162015, styles.january162015Typo]}>
              000192848573
            </Text>
          </View>
          <View style={[styles.addressParent, styles.parentSpaceBlock]}>
            <Text style={[styles.dateShipping, styles.textFlexBox]}>
              Address
            </Text>
            <Text
              style={[styles.lakeshoreRdUndefined, styles.january162015Typo]}
            >
              2727 Lakeshore Rd undefined Nampa, Tennessee 78410
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.paymentDetails}>
        <Text style={[styles.paymentDetails1, styles.textFlexBox]}>
          Payment Details
        </Text>
        <View style={[styles.totalPrice, styles.totalPriceBorder]}>
          <View style={[styles.parent, styles.groupPosition]}>
            <Text style={[styles.text3, styles.textPosition]}>$598.86</Text>
            <Text style={[styles.items3, styles.textFlexBox]}>Items (3)</Text>
          </View>
          <View style={[styles.group, styles.groupPosition]}>
            <Text style={[styles.text3, styles.textPosition]}>$40.00</Text>
            <Text style={[styles.items3, styles.textFlexBox]}>Shipping</Text>
          </View>
          <View style={[styles.container, styles.groupPosition]}>
            <Text style={[styles.text3, styles.textPosition]}>$128.00</Text>
            <Text style={[styles.items3, styles.textFlexBox]}>
              Import charges
            </Text>
          </View>
          <View style={[styles.totalPriceChild, styles.headerItemPosition]} />
          <View style={[styles.groupView, styles.groupPosition]}>
            <Text style={[styles.text6, styles.textPosition]}>$766.86</Text>
            <Text style={[styles.totalPrice1, styles.nikeAirZoomTypo]}>
              Total Price
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.notifyMeButton, styles.homeIndicatorPosition]}>
        <Text style={[styles.notifyMe, styles.product1Typo]}>Notify Me</Text>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.headerChild, styles.childPosition]} />
        <Text style={styles.orderDetails1}>Order Details</Text>
        <View style={[styles.headerItem, styles.headerItemPosition]} />
        <Image
          style={styles.systemIcon24pxleft}
          contentFit="cover"
          source={require("../assets/system-icon24pxleft.png")}
        />
        <Image
          style={[styles.systemIcon24pxplus, styles.systemLayout]}
          contentFit="cover"
          source={require("../assets/system-icon24pxplus.png")}
        />
        <Image
          style={[styles.systemIcon24pxlove2, styles.systemLayout]}
          contentFit="cover"
          source={require("../assets/add-favorite-icon.png")}
        />
      </View>
      <View style={[styles.uiStatusBars, styles.headerPosition]}>
        <Image
          style={[styles.batteryIcon, styles.lineIconLayout]}
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
          <Text style={[styles.text7, styles.text7Position]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.uiHomeIndicator, styles.headerPosition]}>
        <View style={[styles.homeIndicator, styles.homeIndicatorPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lineIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text7Position: {
    textAlign: "center",
    left: "0%",
    position: "absolute",
  },
  iconPosition: {
    bottom: "58.62%",
    height: "41.38%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  successPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    letterSpacing: 1,
    position: "absolute",
  },
  totalPriceBorder: {
    borderWidth: 1,
    borderColor: "#ebf0ff",
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.backgroundWhite,
  },
  nikeAirZoomTypo: {
    lineHeight: 18,
    textAlign: "left",
    color: Color.neutralDark,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
    fontSize: FontSize.formTextFill_size,
    position: "absolute",
  },
  textTypo: {
    color: Color.primaryBlue,
    lineHeight: 18,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  productLayout: {
    height: 104,
    width: 343,
  },
  notifyMeButtonSpaceBlock: {
    padding: Padding.p_base,
    borderRadius: Border.br_8xs,
    alignItems: "center",
    overflow: "hidden",
  },
  january162015Typo: {
    width: 176,
    textAlign: "right",
    left: 135,
    color: Color.neutralDark,
    fontFamily: FontFamily.captionNormalregular,
    lineHeight: 22,
    letterSpacing: 1,
    fontSize: FontSize.formTextFill_size,
    position: "absolute",
  },
  parentSpaceBlock: {
    marginTop: 12,
    width: 311,
  },
  groupPosition: {
    width: 310,
    right: 17,
    position: "absolute",
  },
  textPosition: {
    right: 0,
    textAlign: "right",
    top: 0,
    letterSpacing: 1,
    fontSize: FontSize.formTextFill_size,
    position: "absolute",
  },
  headerItemPosition: {
    borderTopWidth: 1,
    borderColor: "#ebf0ff",
    position: "absolute",
  },
  homeIndicatorPosition: {
    left: "50%",
    position: "absolute",
  },
  product1Typo: {
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    fontSize: FontSize.buttonText_size,
  },
  headerPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  childPosition: {
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  systemLayout: {
    display: "none",
    bottom: "22.95%",
    width: "6.4%",
    height: "19.67%",
    top: "57.38%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  lineIcon: {
    right: "64.84%",
    left: "7.49%",
    bottom: "78.45%",
    top: "19.83%",
    width: "27.67%",
    height: "1.72%",
    maxWidth: "100%",
  },
  lineIcon1: {
    right: "37.18%",
    left: "35.16%",
    bottom: "78.45%",
    top: "19.83%",
    width: "27.67%",
    height: "1.72%",
    maxWidth: "100%",
  },
  lineIcon2: {
    right: "9.51%",
    left: "62.82%",
    bottom: "78.45%",
    top: "19.83%",
    width: "27.67%",
    height: "1.72%",
    maxWidth: "100%",
  },
  packing1: {
    top: "62.07%",
    color: Color.neutralGrey,
    fontFamily: FontFamily.captionNormalregular,
    lineHeight: 22,
    fontSize: FontSize.formTextFill_size,
    letterSpacing: 1,
    textAlign: "center",
  },
  pacingIcon: {
    width: "47.06%",
    right: "25.49%",
    left: "27.45%",
  },
  packing: {
    width: "14.7%",
    right: "85.3%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  shippingIcon: {
    width: "42.11%",
    right: "28.07%",
    left: "29.82%",
  },
  shipping: {
    width: "16.43%",
    right: "56.77%",
    left: "26.8%",
  },
  arrivingIcon: {
    width: "48.98%",
    right: "24.49%",
    left: "26.53%",
  },
  arriving: {
    width: "14.12%",
    right: "30.26%",
    left: "55.62%",
  },
  successIcon: {
    width: "45.28%",
    right: "30.19%",
    left: "24.53%",
  },
  success: {
    width: "15.27%",
    right: "1.44%",
    left: "83.29%",
  },
  tracking: {
    top: 138,
    left: 14,
    width: 347,
    height: 58,
    position: "absolute",
  },
  product1: {
    color: Color.neutralDark,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    fontSize: FontSize.buttonText_size,
    lineHeight: 21,
    textAlign: "left",
    top: 0,
    left: 0,
  },
  product1Child: {
    borderRadius: Border.br_8xs,
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  nikeAirZoom: {
    width: "46.06%",
    left: "29.15%",
    top: "15.38%",
  },
  text: {
    top: "67.31%",
    left: "29.15%",
    textAlign: "left",
    letterSpacing: 1,
    position: "absolute",
    fontSize: FontSize.formTextFill_size,
  },
  image47Icon: {
    height: "69.23%",
    width: "20.99%",
    right: "74.34%",
    bottom: "15.38%",
    left: "4.66%",
    top: "15.38%",
    borderRadius: Border.br_8xs,
  },
  systemIcon24pxlove: {
    height: "23.08%",
    width: "7%",
    right: "4.66%",
    bottom: "61.54%",
    left: "88.34%",
    top: "15.38%",
  },
  product21: {
    marginTop: 8,
  },
  product2: {
    alignItems: "center",
    top: 33,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  product: {
    top: 220,
    height: 249,
    width: 343,
    left: 16,
    position: "absolute",
  },
  dateShipping: {
    opacity: 0.5,
    color: Color.neutralDark,
    left: 0,
    top: 0,
    fontFamily: FontFamily.captionNormalregular,
    lineHeight: 22,
    fontSize: FontSize.formTextFill_size,
    textAlign: "left",
  },
  january162015: {
    top: 0,
  },
  dateShippingParent: {
    height: 22,
    width: 311,
  },
  shippingParent: {
    height: 22,
  },
  lakeshoreRdUndefined: {
    top: 1,
  },
  addressParent: {
    height: 67,
  },
  shippingDetails2: {
    borderWidth: 1,
    borderColor: "#ebf0ff",
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.backgroundWhite,
    top: 33,
    left: 0,
  },
  shippingDetails: {
    top: 493,
    height: 234,
    width: 343,
    left: 16,
    position: "absolute",
  },
  paymentDetails1: {
    left: 1,
    color: Color.neutralDark,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    fontSize: FontSize.buttonText_size,
    lineHeight: 21,
    textAlign: "left",
    top: 0,
  },
  text3: {
    color: Color.neutralDark,
    fontFamily: FontFamily.captionNormalregular,
    lineHeight: 22,
  },
  items3: {
    left: 0,
    top: 0,
    color: Color.neutralGrey,
    fontFamily: FontFamily.captionNormalregular,
    lineHeight: 22,
    fontSize: FontSize.formTextFill_size,
  },
  parent: {
    top: 16,
    height: 22,
  },
  group: {
    top: 50,
    height: 22,
  },
  container: {
    top: 84,
    height: 22,
  },
  totalPriceChild: {
    top: 118,
    right: 16,
    borderStyle: "dashed",
    borderRadius: 0.001,
    height: 1,
    left: 16,
  },
  text6: {
    color: Color.primaryBlue,
    lineHeight: 18,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  totalPrice1: {
    left: 0,
    top: 0,
  },
  groupView: {
    top: 130,
    height: 18,
  },
  totalPrice: {
    height: 164,
    borderRadius: Border.br_8xs,
    top: 33,
    borderColor: "#ebf0ff",
    left: 0,
    width: 343,
  },
  paymentDetails: {
    top: 751,
    left: 15,
    height: 197,
    width: 343,
    position: "absolute",
  },
  notifyMe: {
    lineHeight: 25,
    color: Color.backgroundWhite,
    width: 311,
    fontWeight: "700",
    fontSize: FontSize.buttonText_size,
    textAlign: "center",
    letterSpacing: 1,
  },
  notifyMeButton: {
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
    flexDirection: "row",
    padding: Padding.p_base,
    borderRadius: Border.br_8xs,
    alignItems: "center",
    overflow: "hidden",
  },
  headerChild: {
    position: "absolute",
    backgroundColor: Color.backgroundWhite,
  },
  orderDetails1: {
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
    borderStyle: "solid",
    borderTopWidth: 1,
  },
  systemIcon24pxleft: {
    right: "89.33%",
    left: "4.27%",
    bottom: "22.95%",
    width: "6.4%",
    height: "19.67%",
    top: "57.38%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  systemIcon24pxplus: {
    right: "4.27%",
    left: "89.33%",
  },
  systemIcon24pxlove2: {
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
  text7: {
    height: "85.71%",
    top: "9.52%",
    fontSize: FontSize.size_mini,
    letterSpacing: -0.3,
    fontWeight: "600",
    fontFamily: FontFamily.sFProTextSemibold,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    color: Color.neutralDark,
    textAlign: "center",
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
  orderDetails: {
    flex: 1,
    height: 1076,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
});

export default OrderDetails;
