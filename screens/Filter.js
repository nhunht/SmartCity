import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, Padding, FontFamily } from "../GlobalStyles";

const Filter = () => {
  return (
    <View style={styles.filter}>
      <View style={[styles.priceRange, styles.priceLayout]}>
        <Text style={styles.priceRange1}>Price Range</Text>
        <View style={[styles.minPrice, styles.priceBorder]}>
          <Text style={styles.text}>$1.245</Text>
        </View>
        <View style={[styles.maxPrice, styles.priceBorder]}>
          <Text style={styles.text}>$9.344</Text>
        </View>
        <View style={[styles.sliderPrice, styles.priceLayout]}>
          <Text style={[styles.min, styles.minTypo]}>MIN</Text>
          <Text style={[styles.max, styles.minTypo]}>MAX</Text>
          <Image
            style={[styles.sliderPriceIcon, styles.priceLayout]}
            contentFit="cover"
            source={require("../assets/slider-price.png")}
          />
        </View>
      </View>
      <View style={styles.condition}>
        <Text style={styles.priceRange1}>Condition</Text>
        <View style={[styles.new, styles.selectedFlexBox]}>
          <Text style={[styles.new1, styles.minTypo]}>New</Text>
        </View>
        <View style={[styles.usedSelected, styles.selectedFlexBox]}>
          <Text style={[styles.used, styles.minTypo]}>Used</Text>
        </View>
        <View style={[styles.notSpecifiedSelected, styles.selectedFlexBox]}>
          <Text style={[styles.used, styles.minTypo]}>Not Specified</Text>
        </View>
      </View>
      <View style={[styles.buyingFormat, styles.buyingFormatPosition]}>
        <Text style={styles.priceRange1}>Buying Format</Text>
        <View style={[styles.new, styles.selectedFlexBox]}>
          <Text style={[styles.new1, styles.minTypo]}>All Listings</Text>
        </View>
        <View style={[styles.acceptsOffersSelected, styles.selectedFlexBox]}>
          <Text style={[styles.used, styles.minTypo]}>Accepts Offers</Text>
        </View>
        <View style={[styles.auction, styles.selectedFlexBox]}>
          <Text style={[styles.new1, styles.minTypo]}>Auction</Text>
        </View>
        <View style={[styles.buyItNow, styles.buyItNowBorder]}>
          <Text style={[styles.new1, styles.minTypo]}>Buy It Now</Text>
        </View>
        <View style={[styles.classifiedAds, styles.buyItNowBorder]}>
          <Text style={[styles.new1, styles.minTypo]}>Classified Ads</Text>
        </View>
      </View>
      <View style={[styles.itemLocation, styles.buyingFormatPosition]}>
        <Text style={styles.priceRange1}>Item Location</Text>
        <View style={[styles.new, styles.selectedFlexBox]}>
          <Text style={[styles.new1, styles.minTypo]}>US Only</Text>
        </View>
        <View style={[styles.northAmericaSelected, styles.selectedFlexBox]}>
          <Text style={[styles.used, styles.minTypo]}>North America</Text>
        </View>
        <View style={[styles.europe, styles.selectedFlexBox]}>
          <Text style={[styles.new1, styles.minTypo]}>Europe</Text>
        </View>
        <View style={[styles.buyItNow, styles.buyItNowBorder]}>
          <Text style={[styles.new1, styles.minTypo]}>Asia</Text>
        </View>
      </View>
      <View style={styles.showOnly}>
        <Text style={styles.priceRange1}>Show Only</Text>
        <View style={[styles.new, styles.selectedFlexBox]}>
          <Text style={[styles.new1, styles.minTypo]}>Free Returns</Text>
        </View>
        <View style={[styles.returnsAccepted, styles.selectedFlexBox]}>
          <Text style={[styles.used, styles.minTypo]}>Returns Accepted</Text>
        </View>
        <View style={[styles.buyItNow, styles.buyItNowBorder]}>
          <Text style={[styles.new1, styles.minTypo]}>Authorized Seller</Text>
        </View>
        <View style={[styles.completedItems, styles.buyItNowBorder]}>
          <Text style={[styles.new1, styles.minTypo]}>Completed Items</Text>
        </View>
        <View style={[styles.soldItems, styles.soldItemsPosition]}>
          <Text style={[styles.used, styles.minTypo]}>Sold Items</Text>
        </View>
        <View style={[styles.dealsSavings, styles.soldItemsPosition]}>
          <Text style={[styles.new1, styles.minTypo]}>{`Deals & Savings`}</Text>
        </View>
        <View style={[styles.saleItems, styles.saleItemsBorder]}>
          <Text style={[styles.new1, styles.minTypo]}>Sale Items</Text>
        </View>
        <View style={[styles.listedAsLots, styles.saleItemsBorder]}>
          <Text style={[styles.new1, styles.minTypo]}>Listed as Lots</Text>
        </View>
        <View
          style={[styles.searchInDescription, styles.benefitsCharityPosition]}
        >
          <Text style={[styles.used, styles.minTypo]}>
            Search in Description
          </Text>
        </View>
        <View style={[styles.benefitsCharity, styles.benefitsCharityPosition]}>
          <Text style={[styles.new1, styles.minTypo]}>Benefits charity</Text>
        </View>
        <View style={[styles.authenticityVerified, styles.selectedFlexBox]}>
          <Text style={[styles.new1, styles.minTypo]}>
            Authenticity Verified
          </Text>
        </View>
      </View>
      <View style={[styles.applyButton, styles.applyButtonPosition]}>
        <Text style={[styles.apply, styles.usedTypo]}>Apply</Text>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.headerChild, styles.text2Position]} />
        <Text style={styles.filterSearch}>Filter Search</Text>
        <View style={styles.headerItem} />
        <Image
          style={[styles.systemIcon24pxx, styles.batteryIconLayout]}
          contentFit="cover"
          source={require("../assets/system-icon24pxx.png")}
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
          <Text style={[styles.text2, styles.text2Position]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.uiHomeIndicator, styles.headerPosition]}>
        <View style={[styles.homeIndicator, styles.applyButtonPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  priceLayout: {
    width: 343,
    position: "absolute",
  },
  priceBorder: {
    height: 48,
    borderRadius: Border.br_8xs,
    borderWidth: 1,
    borderColor: "#ebf0ff",
    borderStyle: "solid",
    top: 33,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.backgroundWhite,
  },
  minTypo: {
    lineHeight: 18,
    fontSize: FontSize.formTextFill_size,
    textAlign: "left",
    letterSpacing: 1,
  },
  selectedFlexBox: {
    alignItems: "center",
    padding: Padding.p_base,
    flexDirection: "row",
    borderRadius: Border.br_8xs,
    overflow: "hidden",
  },
  buyingFormatPosition: {
    height: 141,
    left: 16,
    position: "absolute",
  },
  buyItNowBorder: {
    top: 91,
    alignItems: "center",
    padding: Padding.p_base,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ebf0ff",
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    position: "absolute",
    overflow: "hidden",
  },
  soldItemsPosition: {
    top: 149,
    alignItems: "center",
    padding: Padding.p_base,
    flexDirection: "row",
    borderRadius: Border.br_8xs,
    position: "absolute",
    overflow: "hidden",
  },
  saleItemsBorder: {
    top: 207,
    alignItems: "center",
    padding: Padding.p_base,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ebf0ff",
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    position: "absolute",
    overflow: "hidden",
  },
  benefitsCharityPosition: {
    top: 265,
    alignItems: "center",
    padding: Padding.p_base,
    flexDirection: "row",
    borderRadius: Border.br_8xs,
    position: "absolute",
    overflow: "hidden",
  },
  applyButtonPosition: {
    left: "50%",
    position: "absolute",
  },
  usedTypo: {
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  headerPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  text2Position: {
    left: "0%",
    position: "absolute",
    width: "100%",
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
  priceRange1: {
    lineHeight: 21,
    textAlign: "left",
    color: Color.neutralDark,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
    fontSize: FontSize.buttonText_size,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text: {
    top: 13,
    lineHeight: 22,
    color: Color.neutralGrey,
    fontSize: FontSize.formTextFill_size,
    textAlign: "left",
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
    left: 16,
    position: "absolute",
  },
  minPrice: {
    right: 178,
    left: 0,
  },
  maxPrice: {
    right: 0,
    left: 178,
  },
  min: {
    top: 32,
    lineHeight: 18,
    color: Color.neutralGrey,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    position: "absolute",
    left: 0,
  },
  max: {
    left: 313,
    top: 32,
    lineHeight: 18,
    color: Color.neutralGrey,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    position: "absolute",
  },
  sliderPriceIcon: {
    height: 28,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  sliderPrice: {
    top: 93,
    height: 50,
    left: 0,
  },
  priceRange: {
    top: 138,
    height: 143,
    left: 16,
  },
  new1: {
    fontFamily: FontFamily.captionNormalregular,
    color: Color.neutralGrey,
  },
  new: {
    borderWidth: 1,
    borderColor: "#ebf0ff",
    borderStyle: "solid",
    top: 33,
    padding: Padding.p_base,
    flexDirection: "row",
    position: "absolute",
    left: 0,
  },
  used: {
    color: Color.primaryBlue,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  usedSelected: {
    left: 68,
    backgroundColor: Color.deepskyblue_100,
    top: 33,
    padding: Padding.p_base,
    flexDirection: "row",
    position: "absolute",
  },
  notSpecifiedSelected: {
    left: 141,
    backgroundColor: Color.deepskyblue_100,
    top: 33,
    padding: Padding.p_base,
    flexDirection: "row",
    position: "absolute",
  },
  condition: {
    top: 305,
    width: 261,
    height: 83,
    left: 16,
    position: "absolute",
  },
  acceptsOffersSelected: {
    left: 107,
    backgroundColor: Color.deepskyblue_100,
    top: 33,
    padding: Padding.p_base,
    flexDirection: "row",
    position: "absolute",
  },
  auction: {
    left: 244,
    borderWidth: 1,
    borderColor: "#ebf0ff",
    borderStyle: "solid",
    top: 33,
    padding: Padding.p_base,
    flexDirection: "row",
    position: "absolute",
  },
  buyItNow: {
    left: 0,
  },
  classifiedAds: {
    left: 106,
  },
  buyingFormat: {
    top: 412,
    width: 325,
  },
  northAmericaSelected: {
    left: 89,
    backgroundColor: Color.deepskyblue_100,
    top: 33,
    padding: Padding.p_base,
    flexDirection: "row",
    position: "absolute",
  },
  europe: {
    left: 226,
    borderWidth: 1,
    borderColor: "#ebf0ff",
    borderStyle: "solid",
    top: 33,
    padding: Padding.p_base,
    flexDirection: "row",
    position: "absolute",
  },
  itemLocation: {
    top: 577,
    width: 303,
  },
  returnsAccepted: {
    left: 120,
    backgroundColor: Color.deepskyblue_100,
    top: 33,
    padding: Padding.p_base,
    flexDirection: "row",
    position: "absolute",
  },
  completedItems: {
    left: 148,
  },
  soldItems: {
    backgroundColor: Color.deepskyblue_100,
    left: 0,
  },
  dealsSavings: {
    left: 109,
    borderWidth: 1,
    borderColor: "#ebf0ff",
    borderStyle: "solid",
  },
  saleItems: {
    left: 0,
  },
  listedAsLots: {
    left: 107,
  },
  searchInDescription: {
    backgroundColor: Color.deepskyblue_100,
    left: 0,
  },
  benefitsCharity: {
    left: 182,
    borderWidth: 1,
    borderColor: "#ebf0ff",
    borderStyle: "solid",
  },
  authenticityVerified: {
    top: 323,
    borderWidth: 1,
    borderColor: "#ebf0ff",
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  showOnly: {
    top: 742,
    width: 314,
    height: 373,
    left: 16,
    position: "absolute",
  },
  apply: {
    lineHeight: 25,
    color: Color.backgroundWhite,
    width: 311,
    textAlign: "center",
    letterSpacing: 1,
    fontSize: FontSize.buttonText_size,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  applyButton: {
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
    padding: Padding.p_base,
    flexDirection: "row",
    borderRadius: Border.br_8xs,
    overflow: "hidden",
  },
  headerChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    backgroundColor: Color.backgroundWhite,
  },
  filterSearch: {
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
  systemIcon24pxx: {
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
  text2: {
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
  filter: {
    flex: 1,
    height: 1244,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
});

export default Filter;
