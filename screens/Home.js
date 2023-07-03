import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <View style={[styles.offerBanner, styles.bannerLayout]}>
        <Image
          style={[styles.promotionImageIcon, styles.bannerLayout]}
          contentFit="cover"
          source={require("../assets/promotion-image.png")}
        />
        <Text style={[styles.title, styles.titleTypo]}>{`Super Flash Sale
50% Off`}</Text>
        <View style={styles.promotionPriod}>
          <View style={[styles.rectangleParent, styles.childGroupPosition]}>
            <View style={[styles.groupChild, styles.childGroupPosition]} />
            <Text style={[styles.text, styles.textClr]}>08</Text>
          </View>
          <Text style={[styles.text1, styles.textTypo1]}>:</Text>
          <Text style={[styles.text2, styles.textTypo1]}>:</Text>
          <View style={[styles.rectangleGroup, styles.childGroupPosition]}>
            <View style={[styles.groupChild, styles.childGroupPosition]} />
            <Text style={[styles.text, styles.textClr]}>34</Text>
          </View>
          <View style={[styles.rectangleContainer, styles.childGroupPosition]}>
            <View style={[styles.groupChild, styles.childGroupPosition]} />
            <Text style={[styles.text4, styles.textClr]}>52</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.slideshowImageIcon}
        contentFit="cover"
        source={require("../assets/slide-show-image.png")}
      />
      <View style={styles.category}>
        <Text style={[styles.category1, styles.textTypo1]}>Category</Text>
        <Text style={[styles.moreCategoryLink, styles.moreTypo]}>
          More Category
        </Text>
        <View style={styles.category2}>
          <View style={styles.manShirt}>
            <Image
              style={styles.productIcon}
              contentFit="cover"
              source={require("../assets/product-icon4.png")}
            />
            <Text style={[styles.manShirt1, styles.manClr]}>Man Shirt</Text>
          </View>
          <View style={styles.dress}>
            <Image
              style={styles.productIcon}
              contentFit="cover"
              source={require("../assets/product-icon1.png")}
            />
            <Text style={[styles.manShirt1, styles.manClr]}>Dress</Text>
          </View>
          <View style={styles.manWorkEquipment}>
            <Image
              style={styles.productIcon}
              contentFit="cover"
              source={require("../assets/product-icon21.png")}
            />
            <Text style={[styles.manWorkEquipment1, styles.manClr]}>
              Man Work Equipment
            </Text>
          </View>
          <View style={styles.womanBag}>
            <Image
              style={styles.productIcon}
              contentFit="cover"
              source={require("../assets/product-icon3.png")}
            />
            <Text style={[styles.manShirt1, styles.manClr]}>Woman Bag</Text>
          </View>
          <View style={styles.manShoes}>
            <Image
              style={styles.productIcon}
              contentFit="cover"
              source={require("../assets/product-icon41.png")}
            />
            <Text style={[styles.manShirt1, styles.manClr]}>Man Shoes</Text>
          </View>
          <View style={styles.highHeels}>
            <View style={styles.productIcon}>
              <View
                style={[styles.productIconChild, styles.productIconChildBorder]}
              />
              <Image
                style={[styles.productIcon24pxwomanShoes, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/product-icon24pxwoman-shoes.png")}
              />
            </View>
            <Text style={[styles.manShirt1, styles.manClr]}>High Heels</Text>
          </View>
        </View>
      </View>
      <View style={[styles.flashSale, styles.saleLayout]}>
        <Text style={[styles.seeMoreLink, styles.moreTypo]}>See More</Text>
        <Text style={[styles.category1, styles.textTypo1]}>Flash Sale</Text>
        <View style={styles.flashSaleProduct}>
          <View style={[styles.product01, styles.productBorder1]}>
            <Image
              style={styles.imageProductIcon}
              contentFit="cover"
              source={require("../assets/image-product.png")}
            />
            <Text style={[styles.fsNike, styles.nikeTypo]}>
              FS - Nike Air Max 270 React...
            </Text>
            <Text style={[styles.text5, styles.textLayout]}>$299,43</Text>
            <View style={[styles.discount, styles.groupFlexBox]}>
              <Text style={[styles.text6, styles.manClr]}>$534,33</Text>
              <Text style={[styles.off, styles.offSpaceBlock]}>24% Off</Text>
            </View>
          </View>
          <View style={[styles.product02, styles.productBorder1]}>
            <Image
              style={styles.imageProductIcon}
              contentFit="cover"
              source={require("../assets/image-product1.png")}
            />
            <Text style={[styles.fsNike, styles.nikeTypo]}>
              FS - QUILTED MAXI CROS...
            </Text>
            <Text style={[styles.text5, styles.textLayout]}>$299,43</Text>
            <View style={[styles.discount, styles.groupFlexBox]}>
              <Text style={[styles.text6, styles.manClr]}>$534,33</Text>
              <Text style={[styles.off, styles.offSpaceBlock]}>24% Off</Text>
            </View>
          </View>
          <View style={[styles.product03, styles.productBorder1]}>
            <Image
              style={styles.imageProductIcon}
              contentFit="cover"
              source={require("../assets/image-product2.png")}
            />
            <Text style={[styles.fsNike, styles.nikeTypo]}>
              FS - Nike Air Max 270 React...
            </Text>
            <Text style={[styles.text5, styles.textLayout]}>$299,43</Text>
            <View style={[styles.discount, styles.groupFlexBox]}>
              <Text style={[styles.text6, styles.manClr]}>$534,33</Text>
              <Text style={[styles.off, styles.offSpaceBlock]}>24% Off</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.megaSale, styles.saleLayout]}>
        <Text style={[styles.category1, styles.textTypo1]}>Mega Sale</Text>
        <Text style={[styles.seeMoreLink, styles.moreTypo]}>See More</Text>
        <View style={styles.flashSaleProduct}>
          <View style={[styles.product01, styles.productBorder1]}>
            <Image
              style={styles.imageProductIcon}
              contentFit="cover"
              source={require("../assets/image-product9.png")}
            />
            <Text style={[styles.fsNike, styles.nikeTypo]}>
              MS - Nike Air Max 270 React...
            </Text>
            <Text style={[styles.text5, styles.textLayout]}>$299,43</Text>
            <View style={[styles.discount, styles.groupFlexBox]}>
              <Text style={[styles.text6, styles.manClr]}>$534,33</Text>
              <Text style={[styles.off, styles.offSpaceBlock]}>24% Off</Text>
            </View>
          </View>
          <View style={[styles.product02, styles.productBorder1]}>
            <Image
              style={styles.imageProductIcon}
              contentFit="cover"
              source={require("../assets/image-product10.png")}
            />
            <Text style={[styles.fsNike, styles.nikeTypo]}>
              MS - Nike Air Max 270 React...
            </Text>
            <Text style={[styles.text5, styles.textLayout]}>$299,43</Text>
            <View style={[styles.discount, styles.groupFlexBox]}>
              <Text style={[styles.text6, styles.manClr]}>$534,33</Text>
              <Text style={[styles.off, styles.offSpaceBlock]}>24% Off</Text>
            </View>
          </View>
          <View style={[styles.product03, styles.productBorder1]}>
            <Image
              style={styles.imageProductIcon}
              contentFit="cover"
              source={require("../assets/image-product11.png")}
            />
            <Text style={[styles.fsNike, styles.nikeTypo]}>
              MS - Nike Air Max 270 React...
            </Text>
            <Text style={[styles.text5, styles.textLayout]}>$299,43</Text>
            <View style={[styles.discount, styles.groupFlexBox]}>
              <Text style={[styles.text6, styles.manClr]}>$534,33</Text>
              <Text style={[styles.off, styles.offSpaceBlock]}>24% Off</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.recomendedProductBanner, styles.bannerLayout]}>
        <Image
          style={[styles.promotionImageIcon, styles.bannerLayout]}
          contentFit="cover"
          source={require("../assets/image-51.png")}
        />
        <Text style={[styles.title1, styles.titleTypo]}>{`Recomended
Product`}</Text>
        <Text style={[styles.title2, styles.textLayout]}>
          We recommend the best for you
        </Text>
      </View>
      <View style={styles.productList}>
        <View style={[styles.product012, styles.productBorder1]}>
          <Image
            style={styles.imageProductIcon6}
            contentFit="cover"
            source={require("../assets/image-product8.png")}
          />
          <View style={styles.frame}>
            <View style={styles.nikeAirMax270ReactEngParent}>
              <Text style={[styles.nikeAirMax, styles.nikeTypo]}>
                Nike Air Max 270 React ENG
              </Text>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/group-391.png")}
              />
            </View>
            <View style={styles.parent}>
              <Text style={[styles.text17, styles.textLayout]}>$299,43</Text>
              <View style={[styles.group, styles.groupFlexBox]}>
                <Text style={[styles.text6, styles.manClr]}>$534,33</Text>
                <Text style={[styles.off6, styles.offSpaceBlock]}>24% Off</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.product022, styles.productBorder1]}>
          <Image
            style={styles.imageProductIcon6}
            contentFit="cover"
            source={require("../assets/image-product3.png")}
          />
          <View style={styles.frame}>
            <View style={styles.nikeAirMax270ReactEngParent}>
              <Text style={[styles.nikeAirMax, styles.nikeTypo]}>
                Nike Air Max 270 React ENG
              </Text>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/group-391.png")}
              />
            </View>
            <View style={styles.parent}>
              <Text style={[styles.text17, styles.textLayout]}>$299,43</Text>
              <View style={[styles.group, styles.groupFlexBox]}>
                <Text style={[styles.text6, styles.manClr]}>$534,33</Text>
                <Text style={[styles.off6, styles.offSpaceBlock]}>24% Off</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.product032, styles.productBorder]}>
          <Image
            style={styles.imageProductIcon6}
            contentFit="cover"
            source={require("../assets/image-product7.png")}
          />
          <View style={styles.frame}>
            <View style={styles.nikeAirMax270ReactEngParent}>
              <Text style={[styles.nikeAirMax, styles.nikeTypo]}>
                Nike Air Max 270 React ENG
              </Text>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/group-391.png")}
              />
            </View>
            <View style={styles.parent}>
              <Text style={[styles.text17, styles.textLayout]}>$299,43</Text>
              <View style={[styles.group, styles.groupFlexBox]}>
                <Text style={[styles.text6, styles.manClr]}>$534,33</Text>
                <Text style={[styles.off6, styles.offSpaceBlock]}>24% Off</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.product04, styles.productBorder]}>
          <Image
            style={styles.imageProductIcon6}
            contentFit="cover"
            source={require("../assets/image-product12.png")}
          />
          <View style={styles.frame}>
            <View style={styles.nikeAirMax270ReactEngParent}>
              <Text style={[styles.nikeAirMax, styles.nikeTypo]}>
                Nike Air Max 270 React ENG
              </Text>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/group-391.png")}
              />
            </View>
            <View style={styles.parent}>
              <Text style={[styles.text17, styles.textLayout]}>$299,43</Text>
              <View style={[styles.group, styles.groupFlexBox]}>
                <Text style={[styles.text6, styles.manClr]}>$534,33</Text>
                <Text style={[styles.off6, styles.offSpaceBlock]}>24% Off</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.tabBar, styles.tabBarPosition]}>
        <View style={[styles.tabBarChild, styles.headerItemPosition]} />
        <View style={[styles.tabBarItem, styles.menuPosition]} />
        <View style={[styles.menu, styles.menuPosition]}>
          <View style={[styles.home1, styles.home1Position]}>
            <View style={[styles.homeChild, styles.childGroupPosition]} />
            <Image
              style={[styles.systemIcon24pxhome, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/system-icon24pxhome1.png")}
            />
            <Text style={[styles.home2, styles.home2Position]}>Home</Text>
          </View>
          <View style={[styles.explore, styles.cartLayout]}>
            <View style={[styles.homeChild, styles.childGroupPosition]} />
            <Image
              style={[styles.systemIcon24pxhome, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/system-icon24pxsearch.png")}
            />
            <Text style={[styles.explore1, styles.home2Position]}>Explore</Text>
          </View>
          <View style={[styles.cart, styles.cartLayout]}>
            <View style={[styles.homeChild, styles.childGroupPosition]} />
            <Image
              style={[styles.systemIcon24pxhome, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/system-icon24pxcart.png")}
            />
            <Text style={[styles.explore1, styles.home2Position]}>Cart</Text>
            <View style={[styles.notificationmark, styles.offerPosition]}>
              <Image
                style={[styles.ellipseIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/ellipse.png")}
              />
              <Text style={[styles.text25, styles.textLayout1]}>2</Text>
            </View>
          </View>
          <View style={[styles.offer, styles.offerPosition]}>
            <View style={[styles.homeChild, styles.childGroupPosition]} />
            <Image
              style={[styles.systemIcon24pxhome, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/system-icon24pxoffer1.png")}
            />
            <Text style={[styles.explore1, styles.home2Position]}>Offer</Text>
          </View>
          <View style={[styles.profile, styles.cartLayout]}>
            <View style={[styles.homeChild, styles.childGroupPosition]} />
            <Image
              style={[styles.systemIcon24pxhome, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/system-icon24pxuser2.png")}
            />
            <Text style={[styles.explore1, styles.home2Position]}>Account</Text>
          </View>
        </View>
      </View>
      <View style={[styles.header, styles.tabBarPosition]}>
        <View style={[styles.homeChild, styles.childGroupPosition]} />
        <View style={[styles.headerItem, styles.headerItemPosition]} />
        <View style={[styles.formsearchdefault, styles.groupFlexBox]}>
          <Image
            style={styles.systemIcon16pxsearch}
            contentFit="cover"
            source={require("../assets/system-icon16pxsearch.png")}
          />
          <Text style={[styles.searchProduct, styles.offSpaceBlock]}>
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
      <View style={[styles.uiStatusBars, styles.tabBarPosition]}>
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
        <View style={[styles.timeStyle, styles.home1Position]}>
          <Text style={[styles.text26, styles.textClr]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.uiHomeIndicator, styles.tabBarPosition]}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerLayout: {
    height: 206,
    width: 343,
    position: "absolute",
  },
  titleTypo: {
    color: Color.backgroundWhite,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    position: "absolute",
  },
  childGroupPosition: {
    bottom: "0%",
    height: "100%",
    top: "0%",
  },
  textClr: {
    color: Color.neutralDark,
    textAlign: "center",
    position: "absolute",
  },
  textTypo1: {
    lineHeight: 21,
    fontSize: FontSize.buttonText_size,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    position: "absolute",
  },
  moreTypo: {
    textAlign: "right",
    color: Color.primaryBlue,
    lineHeight: 21,
    fontSize: FontSize.buttonText_size,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
    top: 0,
    position: "absolute",
  },
  manClr: {
    color: Color.neutralGrey,
    fontFamily: FontFamily.captionNormalregular,
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
  saleLayout: {
    height: 271,
    width: 455,
    left: 16,
    position: "absolute",
  },
  productBorder1: {
    padding: Padding.p_base,
    borderWidth: 1,
    borderColor: "#ebf0ff",
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    top: 0,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.backgroundWhite,
  },
  nikeTypo: {
    lineHeight: 18,
    fontSize: FontSize.formTextFill_size,
    color: Color.neutralDark,
    textAlign: "left",
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
  },
  textLayout: {
    lineHeight: 22,
    fontSize: FontSize.formTextFill_size,
  },
  groupFlexBox: {
    flexDirection: "row",
    overflow: "hidden",
  },
  offSpaceBlock: {
    marginLeft: 8,
    textAlign: "left",
    letterSpacing: 1,
  },
  productBorder: {
    top: 294,
    padding: Padding.p_base,
    borderWidth: 1,
    borderColor: "#ebf0ff",
    borderStyle: "solid",
    alignItems: "center",
    borderRadius: Border.br_8xs,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.backgroundWhite,
  },
  tabBarPosition: {
    width: 375,
    left: 0,
    position: "absolute",
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
  menuPosition: {
    bottom: "36.56%",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  home1Position: {
    right: "80%",
    position: "absolute",
  },
  home2Position: {
    top: "74.58%",
    lineHeight: 15,
    fontSize: FontSize.captionNormalbold_size,
    textAlign: "center",
    left: "0%",
    letterSpacing: 1,
    position: "absolute",
    width: "100%",
  },
  cartLayout: {
    width: "20%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  offerPosition: {
    right: "20%",
    position: "absolute",
  },
  textLayout1: {
    lineHeight: 15,
    fontSize: FontSize.captionNormalbold_size,
    letterSpacing: 1,
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
  promotionImageIcon: {
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
  },
  title: {
    top: 32,
    textAlign: "left",
    lineHeight: 36,
    fontSize: FontSize.headingH2_size,
    color: Color.backgroundWhite,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
    left: 24,
  },
  groupChild: {
    right: "0%",
    left: "0%",
    height: "100%",
    bottom: "0%",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  text: {
    left: "21.43%",
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.headingH4_size,
    top: "19.51%",
    color: Color.neutralDark,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
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
    letterSpacing: 0.1,
    top: "24.39%",
    lineHeight: 21,
    fontSize: FontSize.buttonText_size,
    textAlign: "center",
    color: Color.backgroundWhite,
  },
  text2: {
    left: "66.67%",
    letterSpacing: 0.1,
    top: "24.39%",
    lineHeight: 21,
    fontSize: FontSize.buttonText_size,
    textAlign: "center",
    color: Color.backgroundWhite,
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
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.headingH4_size,
    top: "19.51%",
    color: Color.neutralDark,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
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
  offerBanner: {
    top: 138,
    left: 16,
    height: 206,
  },
  slideshowImageIcon: {
    top: 360,
    left: 151,
    width: 72,
    height: 8,
    position: "absolute",
  },
  category1: {
    lineHeight: 21,
    fontSize: FontSize.buttonText_size,
    color: Color.neutralDark,
    textAlign: "left",
    letterSpacing: 1,
    left: 0,
    top: 0,
  },
  moreCategoryLink: {
    left: 229,
  },
  productIcon: {
    height: 70,
    width: 70,
  },
  manShirt1: {
    height: 30,
    marginTop: 8,
    lineHeight: 15,
    fontSize: FontSize.captionNormalbold_size,
    letterSpacing: 1,
    width: 70,
    textAlign: "center",
  },
  manShirt: {
    alignItems: "center",
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  dress: {
    left: 82,
    alignItems: "center",
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  manWorkEquipment1: {
    marginTop: 8,
    lineHeight: 15,
    fontSize: FontSize.captionNormalbold_size,
    letterSpacing: 1,
    width: 70,
    textAlign: "center",
  },
  manWorkEquipment: {
    left: 164,
    alignItems: "center",
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  womanBag: {
    left: 246,
    alignItems: "center",
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  manShoes: {
    left: 328,
    alignItems: "center",
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  productIconChild: {
    borderRadius: Border.br_47xl,
    right: "0%",
    left: "0%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
  productIcon24pxwomanShoes: {
    height: "34.29%",
    width: "34.29%",
    top: "32.86%",
    right: "32.86%",
    bottom: "32.86%",
    left: "32.86%",
  },
  highHeels: {
    left: 410,
    alignItems: "center",
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  category2: {
    height: 108,
    top: 33,
    width: 480,
    left: 0,
    position: "absolute",
  },
  category: {
    top: 392,
    height: 141,
    width: 480,
    left: 16,
    position: "absolute",
  },
  seeMoreLink: {
    left: 274,
  },
  imageProductIcon: {
    height: 109,
    width: 109,
    borderRadius: Border.br_8xs,
  },
  fsNike: {
    width: 109,
    marginTop: 8,
  },
  text5: {
    marginTop: 8,
    color: Color.primaryBlue,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    textAlign: "left",
    letterSpacing: 1,
    lineHeight: 22,
  },
  text6: {
    textDecoration: "line-through",
    lineHeight: 15,
    fontSize: FontSize.captionNormalbold_size,
    letterSpacing: 1,
    textAlign: "left",
  },
  off: {
    width: 59,
    color: Color.primaryRed,
    marginLeft: 8,
    lineHeight: 15,
    fontSize: FontSize.captionNormalbold_size,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  discount: {
    height: 15,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  product01: {
    left: 0,
  },
  product02: {
    left: 157,
  },
  product03: {
    left: 314,
  },
  flashSaleProduct: {
    height: 238,
    width: 455,
    top: 33,
    left: 0,
    position: "absolute",
  },
  flashSale: {
    top: 557,
  },
  megaSale: {
    top: 852,
  },
  title1: {
    top: 48,
    textAlign: "left",
    lineHeight: 36,
    fontSize: FontSize.headingH2_size,
    color: Color.backgroundWhite,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    letterSpacing: 1,
    left: 24,
  },
  title2: {
    top: 136,
    fontFamily: FontFamily.captionNormalregular,
    lineHeight: 22,
    textAlign: "left",
    color: Color.backgroundWhite,
    letterSpacing: 1,
    left: 24,
    position: "absolute",
  },
  recomendedProductBanner: {
    top: 1132,
    left: 16,
    height: 206,
  },
  imageProductIcon6: {
    height: 133,
    width: 133,
    borderRadius: Border.br_8xs,
  },
  nikeAirMax: {
    width: 133,
  },
  frameChild: {
    width: 68,
    height: 12,
    marginTop: 4,
  },
  nikeAirMax270ReactEngParent: {
    overflow: "hidden",
  },
  text17: {
    color: Color.primaryBlue,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    textAlign: "left",
    letterSpacing: 1,
    lineHeight: 22,
  },
  off6: {
    color: Color.primaryRed,
    marginLeft: 8,
    lineHeight: 15,
    fontSize: FontSize.captionNormalbold_size,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  group: {
    marginTop: 4,
    height: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  parent: {
    marginTop: 16,
    overflow: "hidden",
  },
  frame: {
    marginTop: 8,
    overflow: "hidden",
  },
  product012: {
    alignItems: "center",
    left: 0,
  },
  product022: {
    left: 178,
    alignItems: "center",
  },
  product032: {
    left: 0,
  },
  product04: {
    left: 178,
  },
  productList: {
    top: 1354,
    height: 576,
    width: 343,
    left: 16,
    position: "absolute",
  },
  tabBarChild: {
    height: "1.08%",
    top: "-0.54%",
    bottom: "99.46%",
  },
  tabBarItem: {
    height: "52.69%",
    top: "10.75%",
    backgroundColor: Color.backgroundWhite,
  },
  homeChild: {
    right: "0%",
    left: "0%",
    height: "100%",
    bottom: "0%",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
    position: "absolute",
  },
  systemIcon24pxhome: {
    height: "40.68%",
    width: "32%",
    top: "27.12%",
    right: "33.33%",
    bottom: "32.2%",
    left: "34.67%",
  },
  home2: {
    color: Color.primaryBlue,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  home1: {
    width: "20%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
  },
  explore1: {
    color: Color.neutralGrey,
    fontFamily: FontFamily.captionNormalregular,
  },
  explore: {
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
  text25: {
    top: "15%",
    left: "35%",
    textAlign: "center",
    color: Color.backgroundWhite,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    position: "absolute",
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
    bottom: "36.56%",
  },
  tabBar: {
    height: 93,
    bottom: 0,
    width: 375,
    backgroundColor: Color.backgroundWhite,
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
    width: 207,
    lineHeight: 22,
    fontSize: FontSize.formTextFill_size,
    color: Color.neutralGrey,
    fontFamily: FontFamily.captionNormalregular,
  },
  formsearchdefault: {
    height: "37.7%",
    width: "70.13%",
    top: "49.18%",
    right: "25.6%",
    bottom: "13.11%",
    left: "4.27%",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    borderWidth: 1,
    borderColor: "#ebf0ff",
    borderStyle: "solid",
    position: "absolute",
    borderRadius: Border.br_8xs,
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
  text26: {
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
    left: "0%",
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
    height: 34,
    bottom: 0,
    width: 375,
  },
  home: {
    flex: 1,
    height: 2037,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
});

export default Home;
