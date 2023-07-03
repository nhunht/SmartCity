import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const BirthdayChooseDate = () => {
  return (
    <View style={styles.birthdayChooseDate}>
      <View style={styles.birthday}>
        <Text style={styles.yourBirhday}>Your Birhday</Text>
        <View style={[styles.birthdayFormActive, styles.frameChildPosition]}>
          <View style={[styles.frameParent, styles.groupFramePosition]}>
            <View style={[styles.vectorParent, styles.vectorParentPosition]}>
              <Image
                style={[styles.frameChild, styles.frameChildPosition]}
                contentFit="cover"
                source={require("../assets/rectangle-2562.png")}
              />
              <Text style={styles.text}>12/12/2020</Text>
              <Image
                style={styles.systemIcon24pxdate}
                contentFit="cover"
                source={require("../assets/system-icon24pxdate.png")}
              />
            </View>
            <View style={[styles.frameGroup, styles.groupFramePosition]}>
              <Image
                style={[styles.frameIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/frame1.png")}
              />
              <Text style={[styles.september2020, styles.text36FlexBox]}>
                September 2020
              </Text>
              <Image
                style={[styles.systemIcon24pxright, styles.systemLayout1]}
                contentFit="cover"
                source={require("../assets/system-icon24pxright.png")}
              />
              <Image
                style={[styles.systemIcon24pxleft, styles.systemLayout1]}
                contentFit="cover"
                source={require("../assets/system-icon24pxleft.png")}
              />
              <View
                style={[styles.frameContainer, styles.vectorParentPosition]}
              >
                <Image
                  style={[styles.frameIcon1, styles.frameIconLayout5]}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <Image
                  style={[styles.frameIcon2, styles.frameIconPosition5]}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <Image
                  style={[styles.frameIcon3, styles.frameIconPosition4]}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <Image
                  style={[styles.frameIcon4, styles.frameIconPosition3]}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <Image
                  style={[styles.frameIcon5, styles.frameIconPosition2]}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <Image
                  style={[styles.frameIcon6, styles.frameIconPosition1]}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <Image
                  style={[styles.frameIcon7, styles.frameIconPosition]}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <Text style={[styles.sun, styles.textClr]}>Sun</Text>
                <Text style={[styles.mon, styles.sunTypo]}>Mon</Text>
                <Text style={[styles.tue, styles.textPosition3]}>Tue</Text>
                <Text style={[styles.wed, styles.textPosition2]}>Wed</Text>
                <Text style={[styles.thu, styles.sunTypo]}>Thu</Text>
                <Text style={[styles.fri, styles.sunTypo]}>Fri</Text>
                <Text style={[styles.sat, styles.sunTypo]}>Sat</Text>
              </View>
              <View style={[styles.groupView, styles.groupFramePosition]}>
                <Image
                  style={[styles.frameIcon8, styles.frameIconLayout4]}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <Image
                  style={[styles.frameIcon9, styles.frameIconLayout3]}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <Image
                  style={[styles.frameIcon10, styles.frameIconLayout2]}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <Image
                  style={[styles.frameIcon11, styles.frameIconLayout1]}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <Image
                  style={[styles.frameIcon12, styles.frameIconLayout]}
                  contentFit="cover"
                  source={require("../assets/frame3.png")}
                />
                <Image
                  style={[styles.frameIcon13, styles.frameIconLayout4]}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <Image
                  style={[styles.frameIcon14, styles.frameIconLayout3]}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <Image
                  style={[styles.frameIcon15, styles.frameIconLayout2]}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <Image
                  style={[styles.frameIcon16, styles.frameIconLayout1]}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <Image
                  style={[styles.frameIcon17, styles.frameIconLayout]}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <Image
                  style={[styles.frameIcon18, styles.frameIconLayout4]}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <Image
                  style={[styles.frameIcon19, styles.frameIconLayout3]}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <Image
                  style={[styles.frameIcon20, styles.frameIconLayout2]}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <Image
                  style={[styles.frameIcon21, styles.frameIconLayout1]}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <Image
                  style={[styles.frameIcon22, styles.frameIconLayout]}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <Image
                  style={[styles.frameIcon23, styles.frameIconLayout4]}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <Image
                  style={[styles.frameIcon24, styles.frameIconLayout3]}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <Image
                  style={[styles.frameIcon25, styles.frameIconLayout2]}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <Image
                  style={[styles.frameIcon26, styles.frameIconLayout1]}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <Image
                  style={[styles.frameIcon27, styles.frameIconLayout]}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <Image
                  style={[styles.frameIcon28, styles.frameIconLayout4]}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <Image
                  style={[styles.frameIcon29, styles.frameIconLayout3]}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <Image
                  style={[styles.frameIcon30, styles.frameIconLayout2]}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <Image
                  style={[styles.frameIcon31, styles.frameIconLayout1]}
                  contentFit="cover"
                  source={require("../assets/frame4.png")}
                />
                <Image
                  style={[styles.frameIcon32, styles.frameIconLayout]}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <Image
                  style={[styles.frameIcon33, styles.frameIconLayout4]}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <Image
                  style={[styles.frameIcon34, styles.frameIconLayout3]}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <Image
                  style={[styles.frameIcon35, styles.frameIconLayout2]}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <Image
                  style={[styles.frameIcon36, styles.frameIconLayout1]}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <Image
                  style={[styles.frameIcon37, styles.frameIconLayout]}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <Image
                  style={[styles.frameIcon38, styles.frameIconLayout4]}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <Image
                  style={[styles.frameIcon39, styles.frameIconLayout3]}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <Image
                  style={[styles.frameIcon40, styles.frameIconLayout2]}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <Image
                  style={[styles.frameIcon41, styles.frameIconLayout1]}
                  contentFit="cover"
                  source={require("../assets/frame2.png")}
                />
                <Image
                  style={[styles.frameIcon42, styles.frameIconLayout]}
                  contentFit="cover"
                  source={require("../assets/frame5.png")}
                />
                <Text style={[styles.text1, styles.textTypo3]}>29</Text>
                <Text style={[styles.text2, styles.textTypo2]}>6</Text>
                <Text style={[styles.text3, styles.textTypo1]}>13</Text>
                <Text style={[styles.text4, styles.textPosition]}>20</Text>
                <Text style={[styles.text5, styles.textTypo]}>27</Text>
                <Text style={[styles.text6, styles.textTypo3]}>30</Text>
                <Text style={[styles.text7, styles.textTypo2]}>7</Text>
                <Text style={[styles.text8, styles.textTypo1]}>14</Text>
                <Text style={[styles.text9, styles.textPosition]}>21</Text>
                <Text style={[styles.text10, styles.textTypo]}>28</Text>
                <Text style={[styles.text11, styles.textTypo3]}>1</Text>
                <Text style={[styles.text12, styles.textTypo2]}>8</Text>
                <Text style={[styles.text13, styles.textTypo1]}>15</Text>
                <Text style={[styles.text14, styles.textPosition]}>22</Text>
                <Text style={[styles.text15, styles.textTypo]}>29</Text>
                <Text style={[styles.text16, styles.textTypo3]}>2</Text>
                <Text style={[styles.text17, styles.textTypo2]}>9</Text>
                <Text style={[styles.text18, styles.textTypo1]}>16</Text>
                <Text style={[styles.text19, styles.textPosition]}>23</Text>
                <Text style={[styles.text20, styles.textTypo]}>30</Text>
                <Text style={[styles.text21, styles.textTypo3]}>3</Text>
                <Text style={[styles.text22, styles.textTypo2]}>10</Text>
                <Text style={[styles.text23, styles.textTypo1]}>17</Text>
                <Text style={[styles.text24, styles.saveTypo]}>24</Text>
                <Text style={[styles.text25, styles.textTypo]}>1</Text>
                <Text style={[styles.text26, styles.textTypo3]}>4</Text>
                <Text style={[styles.text27, styles.textTypo2]}>11</Text>
                <Text style={[styles.text28, styles.textTypo1]}>18</Text>
                <Text style={[styles.text29, styles.textPosition]}>25</Text>
                <Text style={[styles.text30, styles.textTypo]}>2</Text>
                <Text style={[styles.text31, styles.textTypo3]}>5</Text>
                <Text style={[styles.text32, styles.textTypo2]}>12</Text>
                <Text style={[styles.text33, styles.textTypo1]}>19</Text>
                <Text style={[styles.text34, styles.textPosition]}>26</Text>
                <Text style={[styles.text35, styles.textTypo]}>3</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.saveButton, styles.saveButtonPosition]}>
        <Text style={[styles.save, styles.saveTypo]}>Save</Text>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.headerChild, styles.groupFramePosition]} />
        <Text style={styles.birthday1}>Birthday</Text>
        <View style={styles.headerItem} />
        <Image
          style={styles.systemIcon24pxleft1}
          contentFit="cover"
          source={require("../assets/system-icon24pxleft.png")}
        />
        <Image
          style={[styles.systemIcon24pxplus, styles.systemLayout]}
          contentFit="cover"
          source={require("../assets/system-icon24pxplus.png")}
        />
        <Image
          style={[styles.systemIcon24pxlove, styles.systemLayout]}
          contentFit="cover"
          source={require("../assets/add-favorite-icon.png")}
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
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.mobileSignalIcon}
          contentFit="cover"
          source={require("../assets/mobile-signal.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={[styles.text36, styles.text36FlexBox]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.uiHomeIndicator, styles.headerPosition]}>
        <View style={[styles.homeIndicator, styles.saveButtonPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildPosition: {
    left: 0,
    position: "absolute",
  },
  groupFramePosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  vectorParentPosition: {
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text36FlexBox: {
    textAlign: "center",
    color: Color.neutralDark,
    position: "absolute",
  },
  systemLayout1: {
    bottom: "88.29%",
    top: "4.86%",
    width: "7%",
    height: "6.86%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIconLayout5: {
    bottom: "-1.02%",
    top: "-1.02%",
    width: "14.58%",
    height: "102.04%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIconPosition5: {
    left: "14.14%",
    right: "71.28%",
  },
  frameIconPosition4: {
    left: "28.43%",
    right: "57%",
  },
  frameIconPosition3: {
    left: "42.71%",
    right: "42.71%",
  },
  frameIconPosition2: {
    left: "57%",
    right: "28.43%",
  },
  frameIconPosition1: {
    left: "71.28%",
    right: "14.14%",
  },
  frameIconPosition: {
    left: "85.57%",
    right: "-0.15%",
  },
  textClr: {
    color: Color.primaryRed,
    left: "0%",
  },
  sunTypo: {
    lineHeight: 18,
    top: "32.65%",
    width: "14.29%",
    textAlign: "center",
    letterSpacing: 0.1,
    fontSize: FontSize.formTextFill_size,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    position: "absolute",
  },
  textPosition3: {
    left: "28.57%",
    color: Color.neutralGrey,
  },
  textPosition2: {
    left: "42.86%",
    color: Color.neutralGrey,
  },
  frameIconLayout4: {
    bottom: "79.8%",
    top: "-0.2%",
    height: "20.41%",
    width: "14.58%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIconLayout3: {
    bottom: "59.8%",
    top: "19.8%",
    height: "20.41%",
    width: "14.58%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIconLayout2: {
    bottom: "39.8%",
    top: "39.8%",
    height: "20.41%",
    width: "14.58%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIconLayout1: {
    bottom: "19.8%",
    top: "59.8%",
    height: "20.41%",
    width: "14.58%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIconLayout: {
    bottom: "-0.2%",
    top: "79.8%",
    height: "20.41%",
    width: "14.58%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo3: {
    fontFamily: FontFamily.captionNormalregular,
    textAlign: "center",
  },
  textTypo2: {
    top: "26.53%",
    fontFamily: FontFamily.captionNormalregular,
    lineHeight: 18,
    width: "14.29%",
    textAlign: "center",
    letterSpacing: 0.1,
    fontSize: FontSize.formTextFill_size,
    position: "absolute",
  },
  textTypo1: {
    top: "46.53%",
    fontFamily: FontFamily.captionNormalregular,
    lineHeight: 18,
    width: "14.29%",
    textAlign: "center",
    letterSpacing: 0.1,
    fontSize: FontSize.formTextFill_size,
    position: "absolute",
  },
  textPosition: {
    top: "66.53%",
    lineHeight: 18,
    width: "14.29%",
    letterSpacing: 0.1,
    fontSize: FontSize.formTextFill_size,
    position: "absolute",
  },
  textTypo: {
    top: "86.53%",
    fontFamily: FontFamily.captionNormalregular,
    lineHeight: 18,
    width: "14.29%",
    textAlign: "center",
    letterSpacing: 0.1,
    fontSize: FontSize.formTextFill_size,
    position: "absolute",
  },
  saveTypo: {
    color: Color.backgroundWhite,
    textAlign: "center",
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
  },
  saveButtonPosition: {
    left: "50%",
    position: "absolute",
  },
  headerPosition: {
    width: 375,
    left: 0,
    position: "absolute",
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
  yourBirhday: {
    textAlign: "left",
    color: Color.neutralDark,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    lineHeight: 21,
    letterSpacing: 1,
    fontSize: FontSize.buttonText_size,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameChild: {
    width: 344,
    height: 49,
    borderRadius: Border.br_8xs,
    top: 0,
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
  systemIcon24pxdate: {
    top: 12,
    left: 303,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  vectorParent: {
    height: "11.74%",
    bottom: "88.26%",
    left: "0%",
    top: "0%",
  },
  frameIcon: {
    height: "100.29%",
    width: "100.29%",
    top: "-0.14%",
    bottom: "-0.14%",
    left: "-0.15%",
    right: "-0.15%",
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_8xs,
  },
  september2020: {
    top: "5.14%",
    left: "32.65%",
    letterSpacing: 0.1,
    textAlign: "center",
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    lineHeight: 21,
    fontSize: FontSize.buttonText_size,
  },
  systemIcon24pxright: {
    right: "4.66%",
    left: "88.34%",
  },
  systemIcon24pxleft: {
    right: "88.34%",
    left: "4.66%",
  },
  frameIcon1: {
    right: "85.57%",
    left: "-0.15%",
  },
  frameIcon2: {
    bottom: "-1.02%",
    top: "-1.02%",
    width: "14.58%",
    height: "102.04%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon3: {
    bottom: "-1.02%",
    top: "-1.02%",
    width: "14.58%",
    height: "102.04%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon4: {
    bottom: "-1.02%",
    top: "-1.02%",
    width: "14.58%",
    height: "102.04%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon5: {
    bottom: "-1.02%",
    top: "-1.02%",
    width: "14.58%",
    height: "102.04%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon6: {
    bottom: "-1.02%",
    top: "-1.02%",
    width: "14.58%",
    height: "102.04%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon7: {
    bottom: "-1.02%",
    top: "-1.02%",
    width: "14.58%",
    height: "102.04%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  sun: {
    lineHeight: 18,
    top: "32.65%",
    width: "14.29%",
    textAlign: "center",
    letterSpacing: 0.1,
    fontSize: FontSize.formTextFill_size,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    position: "absolute",
  },
  mon: {
    left: "14.29%",
    color: Color.neutralGrey,
  },
  tue: {
    lineHeight: 18,
    top: "32.65%",
    width: "14.29%",
    textAlign: "center",
    letterSpacing: 0.1,
    fontSize: FontSize.formTextFill_size,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    position: "absolute",
  },
  wed: {
    lineHeight: 18,
    top: "32.65%",
    width: "14.29%",
    textAlign: "center",
    letterSpacing: 0.1,
    fontSize: FontSize.formTextFill_size,
    fontFamily: FontFamily.headingH2,
    fontWeight: "700",
    position: "absolute",
  },
  thu: {
    left: "57.14%",
    color: Color.neutralGrey,
  },
  fri: {
    left: "71.43%",
    color: Color.neutralGrey,
  },
  sat: {
    left: "85.71%",
    color: Color.neutralGrey,
  },
  frameContainer: {
    height: "14%",
    top: "16%",
    bottom: "70%",
    left: "0%",
  },
  frameIcon8: {
    right: "85.57%",
    left: "-0.15%",
  },
  frameIcon9: {
    right: "85.57%",
    left: "-0.15%",
  },
  frameIcon10: {
    right: "85.57%",
    left: "-0.15%",
  },
  frameIcon11: {
    right: "85.57%",
    left: "-0.15%",
  },
  frameIcon12: {
    right: "85.57%",
    left: "-0.15%",
  },
  frameIcon13: {
    left: "14.14%",
    right: "71.28%",
  },
  frameIcon14: {
    left: "14.14%",
    right: "71.28%",
  },
  frameIcon15: {
    left: "14.14%",
    right: "71.28%",
  },
  frameIcon16: {
    left: "14.14%",
    right: "71.28%",
  },
  frameIcon17: {
    left: "14.14%",
    right: "71.28%",
  },
  frameIcon18: {
    left: "28.43%",
    right: "57%",
  },
  frameIcon19: {
    left: "28.43%",
    right: "57%",
  },
  frameIcon20: {
    left: "28.43%",
    right: "57%",
  },
  frameIcon21: {
    left: "28.43%",
    right: "57%",
  },
  frameIcon22: {
    left: "28.43%",
    right: "57%",
  },
  frameIcon23: {
    left: "42.71%",
    right: "42.71%",
  },
  frameIcon24: {
    left: "42.71%",
    right: "42.71%",
  },
  frameIcon25: {
    left: "42.71%",
    right: "42.71%",
  },
  frameIcon26: {
    left: "42.71%",
    right: "42.71%",
  },
  frameIcon27: {
    left: "42.71%",
    right: "42.71%",
  },
  frameIcon28: {
    left: "57%",
    right: "28.43%",
  },
  frameIcon29: {
    left: "57%",
    right: "28.43%",
  },
  frameIcon30: {
    left: "57%",
    right: "28.43%",
  },
  frameIcon31: {
    left: "57%",
    right: "28.43%",
  },
  frameIcon32: {
    left: "57%",
    right: "28.43%",
  },
  frameIcon33: {
    left: "71.28%",
    right: "14.14%",
  },
  frameIcon34: {
    left: "71.28%",
    right: "14.14%",
  },
  frameIcon35: {
    left: "71.28%",
    right: "14.14%",
  },
  frameIcon36: {
    left: "71.28%",
    right: "14.14%",
  },
  frameIcon37: {
    left: "71.28%",
    right: "14.14%",
  },
  frameIcon38: {
    left: "85.57%",
    right: "-0.15%",
  },
  frameIcon39: {
    left: "85.57%",
    right: "-0.15%",
  },
  frameIcon40: {
    left: "85.57%",
    right: "-0.15%",
  },
  frameIcon41: {
    left: "85.57%",
    right: "-0.15%",
  },
  frameIcon42: {
    left: "85.57%",
    right: "-0.15%",
  },
  text1: {
    color: Color.neutralLight,
    top: "6.53%",
    fontFamily: FontFamily.captionNormalregular,
    lineHeight: 18,
    width: "14.29%",
    letterSpacing: 0.1,
    fontSize: FontSize.formTextFill_size,
    position: "absolute",
    left: "0%",
  },
  text2: {
    color: Color.primaryRed,
    left: "0%",
  },
  text3: {
    color: Color.primaryRed,
    left: "0%",
  },
  text4: {
    fontFamily: FontFamily.captionNormalregular,
    textAlign: "center",
    color: Color.primaryRed,
    left: "0%",
  },
  text5: {
    color: Color.primaryRed,
    left: "0%",
  },
  text6: {
    color: Color.neutralLight,
    top: "6.53%",
    fontFamily: FontFamily.captionNormalregular,
    lineHeight: 18,
    width: "14.29%",
    letterSpacing: 0.1,
    fontSize: FontSize.formTextFill_size,
    position: "absolute",
    left: "14.29%",
  },
  text7: {
    left: "14.29%",
    color: Color.neutralGrey,
  },
  text8: {
    left: "14.29%",
    color: Color.neutralGrey,
  },
  text9: {
    fontFamily: FontFamily.captionNormalregular,
    textAlign: "center",
    left: "14.29%",
    color: Color.neutralGrey,
  },
  text10: {
    left: "14.29%",
    color: Color.neutralGrey,
  },
  text11: {
    top: "6.53%",
    fontFamily: FontFamily.captionNormalregular,
    lineHeight: 18,
    width: "14.29%",
    letterSpacing: 0.1,
    fontSize: FontSize.formTextFill_size,
    position: "absolute",
    left: "28.57%",
    color: Color.neutralGrey,
  },
  text12: {
    left: "28.57%",
    color: Color.neutralGrey,
  },
  text13: {
    left: "28.57%",
    color: Color.neutralGrey,
  },
  text14: {
    fontFamily: FontFamily.captionNormalregular,
    textAlign: "center",
    left: "28.57%",
    color: Color.neutralGrey,
  },
  text15: {
    left: "28.57%",
    color: Color.neutralGrey,
  },
  text16: {
    top: "6.53%",
    fontFamily: FontFamily.captionNormalregular,
    lineHeight: 18,
    width: "14.29%",
    letterSpacing: 0.1,
    fontSize: FontSize.formTextFill_size,
    position: "absolute",
    left: "42.86%",
    color: Color.neutralGrey,
  },
  text17: {
    left: "42.86%",
    color: Color.neutralGrey,
  },
  text18: {
    left: "42.86%",
    color: Color.neutralGrey,
  },
  text19: {
    fontFamily: FontFamily.captionNormalregular,
    textAlign: "center",
    left: "42.86%",
    color: Color.neutralGrey,
  },
  text20: {
    left: "42.86%",
    color: Color.neutralGrey,
  },
  text21: {
    top: "6.53%",
    fontFamily: FontFamily.captionNormalregular,
    lineHeight: 18,
    width: "14.29%",
    letterSpacing: 0.1,
    fontSize: FontSize.formTextFill_size,
    position: "absolute",
    left: "57.14%",
    color: Color.neutralGrey,
  },
  text22: {
    left: "57.14%",
    color: Color.neutralGrey,
  },
  text23: {
    left: "57.14%",
    color: Color.neutralGrey,
  },
  text24: {
    top: "66.53%",
    lineHeight: 18,
    width: "14.29%",
    letterSpacing: 0.1,
    fontSize: FontSize.formTextFill_size,
    position: "absolute",
    left: "57.14%",
  },
  text25: {
    color: Color.neutralLight,
    left: "57.14%",
  },
  text26: {
    top: "6.53%",
    fontFamily: FontFamily.captionNormalregular,
    lineHeight: 18,
    width: "14.29%",
    letterSpacing: 0.1,
    fontSize: FontSize.formTextFill_size,
    position: "absolute",
    left: "71.43%",
    color: Color.neutralGrey,
  },
  text27: {
    left: "71.43%",
    color: Color.neutralGrey,
  },
  text28: {
    left: "71.43%",
    color: Color.neutralGrey,
  },
  text29: {
    fontFamily: FontFamily.captionNormalregular,
    textAlign: "center",
    left: "71.43%",
    color: Color.neutralGrey,
  },
  text30: {
    color: Color.neutralLight,
    left: "71.43%",
  },
  text31: {
    top: "6.53%",
    fontFamily: FontFamily.captionNormalregular,
    lineHeight: 18,
    width: "14.29%",
    letterSpacing: 0.1,
    fontSize: FontSize.formTextFill_size,
    position: "absolute",
    left: "85.71%",
    color: Color.neutralGrey,
  },
  text32: {
    left: "85.71%",
    color: Color.neutralGrey,
  },
  text33: {
    left: "85.71%",
    color: Color.neutralGrey,
  },
  text34: {
    fontFamily: FontFamily.captionNormalregular,
    textAlign: "center",
    left: "85.71%",
    color: Color.neutralGrey,
  },
  text35: {
    color: Color.neutralLight,
    left: "85.71%",
  },
  groupView: {
    height: "70%",
    top: "30%",
    left: "0%",
  },
  frameGroup: {
    height: "85.57%",
    top: "14.43%",
    left: "0%",
  },
  frameParent: {
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
  },
  birthdayFormActive: {
    top: 33,
    right: 0,
    height: 409,
  },
  birthday: {
    top: 138,
    width: 343,
    height: 442,
    left: 16,
    position: "absolute",
  },
  save: {
    lineHeight: 25,
    width: 311,
    letterSpacing: 1,
    fontSize: FontSize.buttonText_size,
    color: Color.backgroundWhite,
  },
  saveButton: {
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
    alignItems: "center",
    borderRadius: Border.br_8xs,
    overflow: "hidden",
  },
  headerChild: {
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    backgroundColor: Color.backgroundWhite,
  },
  birthday1: {
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
    borderColor: "#ebf0ff",
    borderTopWidth: 1,
    position: "absolute",
  },
  systemIcon24pxleft1: {
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
  systemIcon24pxlove: {
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
  text36: {
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
  birthdayChooseDate: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
});

export default BirthdayChooseDate;
