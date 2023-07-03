const Stack = createNativeStackNavigator();
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import SplashScreen from "./screens/SplashScreen";
import OfferScreen1 from "./screens/OfferScreen1";
import LailyfaFebrinaCard from "./screens/LailyfaFebrinaCard";
import AddCardWrongForm from "./screens/AddCardWrongForm";
import AddCard from "./screens/AddCard";
import AddPayment from "./screens/AddPayment";
import CreditCardAndDebit from "./screens/CreditCardAndDebit";
import EditAddress from "./screens/EditAddress";
import AddAddressWrong from "./screens/AddAddressWrong";
import AddAddressFill from "./screens/AddAddressFill";
import Address from "./screens/Address";
import ChangePasswordWrong from "./screens/ChangePasswordWrong";
import ChangePassword from "./screens/ChangePassword";
import PhoneNumber from "./screens/PhoneNumber";
import Email from "./screens/Email";
import BirthdayChooseDate from "./screens/BirthdayChooseDate";
import Birthday from "./screens/Birthday";
import GenderChoose from "./screens/GenderChoose";
import Gender from "./screens/Gender";
import DeleteAddressConfirmation from "./screens/DeleteAddressConfirmation";
import Order from "./screens/Order";
import OrderDetails from "./screens/OrderDetails";
import AddAddress from "./screens/AddAddress";
import ChangeName from "./screens/ChangeName";
import Profile from "./screens/Profile";
import Account from "./screens/Account";
import OfferScreen from "./screens/OfferScreen";
import CartCuponWrong from "./screens/CartCuponWrong";
import ShortBy from "./screens/ShortBy";
import SearchResult from "./screens/SearchResult";
import ChooseCreditOrDebitCard from "./screens/ChooseCreditOrDebitCard";
import PaymentMethod from "./screens/PaymentMethod";
import ListCategory from "./screens/ListCategory";
import Filter from "./screens/Filter";
import SearchResult1 from "./screens/SearchResult1";
import SuccessScreen from "./screens/SuccessScreen";
import ShipTo from "./screens/ShipTo";
import Cart from "./screens/Cart";
import Explore from "./screens/Explore";
import NotificationOffer from "./screens/NotificationOffer";
import WriteReviewFill from "./screens/WriteReviewFill";
import LoginFormWrong from "./screens/LoginFormWrong";
import NotificationActivity from "./screens/NotificationActivity";
import NotificationFeed from "./screens/NotificationFeed";
import Notification1 from "./screens/Notification1";
import WriteReview from "./screens/WriteReview";
import ReviewProduct from "./screens/ReviewProduct";
import ProductDetail from "./screens/ProductDetail";
import RegisterForm from "./screens/RegisterForm";
import FavoriteProduct from "./screens/FavoriteProduct";
import Home from "./screens/Home";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = useState(false);
  useFonts({
    Poppins_regular: require("./assets/fonts/Poppins_regular.ttf"),
    Poppins_bold: require("./assets/fonts/Poppins_bold.ttf"),
    // "SF Pro Text_semibold": require("./assets/fonts/SF_Pro_Text_semibold.ttf"),
  });

  useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1500);
  }, []);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!hideSplashScreen ? (
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
          ) : (
            <>
              <Stack.Screen
                name="OfferScreen"
                component={OfferScreen1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LailyfaFebrinaCard"
                component={LailyfaFebrinaCard}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AddCardWrongForm"
                component={AddCardWrongForm}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AddCard"
                component={AddCard}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AddPayment"
                component={AddPayment}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CreditCardAndDebit"
                component={CreditCardAndDebit}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="EditAddress"
                component={EditAddress}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AddAddressWrong"
                component={AddAddressWrong}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AddAddressFill"
                component={AddAddressFill}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Address"
                component={Address}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ChangePasswordWrong"
                component={ChangePasswordWrong}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ChangePassword"
                component={ChangePassword}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PhoneNumber"
                component={PhoneNumber}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Email"
                component={Email}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="BirthdayChooseDate"
                component={BirthdayChooseDate}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Birthday"
                component={Birthday}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="GenderChoose"
                component={GenderChoose}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Gender"
                component={Gender}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DeleteAddressConfirmation"
                component={DeleteAddressConfirmation}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Order"
                component={Order}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="OrderDetails"
                component={OrderDetails}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AddAddress"
                component={AddAddress}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ChangeName"
                component={ChangeName}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Account"
                component={Account}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="OfferScreen1"
                component={OfferScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CartCuponWrong"
                component={CartCuponWrong}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ShortBy"
                component={ShortBy}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SearchResult"
                component={SearchResult}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ChooseCreditOrDebitCard"
                component={ChooseCreditOrDebitCard}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PaymentMethod"
                component={PaymentMethod}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ListCategory"
                component={ListCategory}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Filter"
                component={Filter}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SearchResult1"
                component={SearchResult1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SuccessScreen"
                component={SuccessScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ShipTo"
                component={ShipTo}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Cart"
                component={Cart}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Explore"
                component={Explore}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NotificationOffer"
                component={NotificationOffer}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="WriteReviewFill"
                component={WriteReviewFill}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LoginFormWrong"
                component={LoginFormWrong}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NotificationActivity"
                component={NotificationActivity}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NotificationFeed"
                component={NotificationFeed}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Notification"
                component={Notification1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="WriteReview"
                component={WriteReview}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ReviewProduct"
                component={ReviewProduct}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ProductDetail"
                component={ProductDetail}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="RegisterForm"
                component={RegisterForm}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="FavoriteProduct"
                component={FavoriteProduct}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;
