import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const ListCategory = () => {
  return (
    <View style={styles.listCategory}>
      <View style={[styles.listCategory1, styles.listCategory1Position]}>
        <View style={styles.shirt}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.shirt1, styles.shirt1Typo]}>Shirt</Text>
          <Image
            style={[styles.productIcon24pxshirt, styles.batteryIconLayout]}
            contentFit="cover"
            source={require("../assets/product-icon24pxshirt.png")}
          />
        </View>
        <View style={styles.shirt}>
          <View style={[styles.rectangle1, styles.rectanglePosition]} />
          <Text style={[styles.bikini1, styles.textClr]}>Bikini</Text>
          <Image
            style={[styles.productIcon24pxshirt, styles.batteryIconLayout]}
            contentFit="cover"
            source={require("../assets/product-icon24pxbikini.png")}
          />
        </View>
        <View style={styles.shirt}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.bikini1, styles.textClr]}>Dress</Text>
          <Image
            style={[styles.productIcon24pxshirt, styles.batteryIconLayout]}
            contentFit="cover"
            source={require("../assets/product-icon24pxdress.png")}
          />
        </View>
        <View style={styles.shirt}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.bikini1, styles.textClr]}>Work Equipment</Text>
          <Image
            style={[styles.productIcon24pxshirt, styles.batteryIconLayout]}
            contentFit="cover"
            source={require("../assets/product-icon24pxman-bag.png")}
          />
        </View>
        <View style={styles.shirt}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.bikini1, styles.textClr]}>Man Pants</Text>
          <Image
            style={[styles.productIcon24pxshirt, styles.batteryIconLayout]}
            contentFit="cover"
            source={require("../assets/product-icon24pxman-pants.png")}
          />
        </View>
        <View style={styles.shirt}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.bikini1, styles.textClr]}>Man Shoes</Text>
          <Image
            style={[styles.productIcon24pxshirt, styles.batteryIconLayout]}
            contentFit="cover"
            source={require("../assets/product-icon24pxman-shoes.png")}
          />
        </View>
        <View style={styles.shirt}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.bikini1, styles.textClr]}>Man Underwear</Text>
          <Image
            style={[styles.productIcon24pxshirt, styles.batteryIconLayout]}
            contentFit="cover"
            source={require("../assets/product-icon24pxman-underwear.png")}
          />
        </View>
        <View style={styles.shirt}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.bikini1, styles.textClr]}>Man T-Shirt</Text>
          <Image
            style={[styles.productIcon24pxshirt, styles.batteryIconLayout]}
            contentFit="cover"
            source={require("../assets/product-icon24pxtshirt.png")}
          />
        </View>
        <View style={styles.shirt}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.bikini1, styles.textClr]}>Woman Bag</Text>
          <Image
            style={[styles.productIcon24pxshirt, styles.batteryIconLayout]}
            contentFit="cover"
            source={require("../assets/product-icon24pxwoman-bag.png")}
          />
        </View>
        <View style={styles.shirt}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.bikini1, styles.textClr]}>Woman Pants</Text>
          <Image
            style={[styles.productIcon24pxshirt, styles.batteryIconLayout]}
            contentFit="cover"
            source={require("../assets/product-icon24pxwoman-pants.png")}
          />
        </View>
        <View style={styles.shirt}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.bikini1, styles.textClr]}>High Heels</Text>
          <Image
            style={[styles.productIcon24pxshirt, styles.batteryIconLayout]}
            contentFit="cover"
            source={require("../assets/product-icon24pxwoman-shoes.png")}
          />
        </View>
        <View style={styles.shirt}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.bikini1, styles.textClr]}>Woman T-Shirt</Text>
          <Image
            style={[styles.productIcon24pxshirt, styles.batteryIconLayout]}
            contentFit="cover"
            source={require("../assets/product-icon24pxwoman-tshirt.png")}
          />
        </View>
        <View style={styles.shirt}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.bikini1, styles.textClr]}>Skirt</Text>
          <Image
            style={[styles.productIcon24pxshirt, styles.batteryIconLayout]}
            contentFit="cover"
            source={require("../assets/product-icon24pxskirt.png")}
          />
        </View>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.rectangle, styles.rectanglePosition]} />
        <Text style={styles.category}>Category</Text>
        <View style={styles.headerItem} />
        <Image
          style={styles.systemIcon24pxleft}
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
          <Text style={[styles.text, styles.textClr]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.uiHomeIndicator, styles.listCategory1Position]}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listCategory1Position: {
    left: 0,
    position: "absolute",
  },
  rectanglePosition: {
    left: "0%",
    width: "100%",
  },
  shirt1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    lineHeight: 18,
    letterSpacing: 1,
    fontSize: FontSize.formTextFill_size,
    left: "14.93%",
    top: "33.93%",
  },
  batteryIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textClr: {
    color: Color.neutralDark,
    position: "absolute",
  },
  headerPosition: {
    top: 0,
    width: 375,
    left: 0,
    position: "absolute",
  },
  systemLayout: {
    display: "none",
    bottom: "22.95%",
    height: "19.67%",
    top: "57.38%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "6.4%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangle: {
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    position: "absolute",
    backgroundColor: Color.backgroundWhite,
  },
  shirt1: {
    color: Color.primaryBlue,
    position: "absolute",
  },
  productIcon24pxshirt: {
    height: "42.86%",
    top: "28.57%",
    bottom: "28.57%",
    left: "4.27%",
    right: "89.33%",
    width: "6.4%",
    maxWidth: "100%",
  },
  shirt: {
    height: 56,
    width: 375,
    backgroundColor: Color.backgroundWhite,
  },
  rectangle1: {
    backgroundColor: Color.neutralLight,
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    position: "absolute",
  },
  bikini1: {
    textAlign: "left",
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    lineHeight: 18,
    letterSpacing: 1,
    fontSize: FontSize.formTextFill_size,
    left: "14.93%",
    top: "33.93%",
  },
  listCategory1: {
    top: 122,
    alignItems: "center",
    overflow: "hidden",
  },
  category: {
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
    borderStyle: "solid",
    borderColor: "#ebf0ff",
    borderTopWidth: 1,
    position: "absolute",
  },
  systemIcon24pxleft: {
    bottom: "22.95%",
    height: "19.67%",
    top: "57.38%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "4.27%",
    right: "89.33%",
    width: "6.4%",
    position: "absolute",
    overflow: "hidden",
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
    textAlign: "center",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    left: "0%",
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
    width: 375,
  },
  listCategory: {
    flex: 1,
    height: 894,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
});

export default ListCategory;
