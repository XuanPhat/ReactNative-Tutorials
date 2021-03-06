/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import FriendAvatar from './src/components/FriendAvatar';
import HeartButton from './src/components/HeartButton';
// import Product from './src/components/Product';
// import Products from './src/components/Products';

import Basic from './src/Session04/Basic';
import FlexExample from './src/Session04/FlexExample';
import ImageBgExample from './src/Session04/ImageBgExample';
import Login1 from './src/Session04/Login/Login1';

import UI01 from './src/Session04/UI01';
import UI02 from './src/Session04/UI02';
import UI03 from './src/Session04/UI03';
import UI04 from './src/Session04/UI04';

// SESION 05
import ScrollViewExample from './src/Session05/ScrollViewExample';
import ScrollViewWithManyDataExample from './src/Session05/ScrollViewWithManyDataExample';
import FlatListExample from './src/Session05/FlatListExample';
import SectionListExample from './src/Session05/SectionListExample';
import SectionListAdvancedExample from './src/Session05/SectionListAdvancedExample';
import NetworkingExample from './src/Session06/NetworkingExample';
import GalleryHomework from './src/Session06/GalleryHomework';

// Session 06
import Login from './src/Session06/Login';
import Product from './src/Session06/Product';
// Session 07

import UseEffectExample from './src/Session07/UseEffectExample';
import CustomHookExample from './src/Session07/CustomHookExample';
import UseContextExample from './src/Session07/UseContextExample';
import UseReducerExample from './src/Session07/UseReducerExample';
import UseCallbackExample from './src/Session07/UseCallbackExample';

// Session08
import AppNavigator from './src/Session08/AppNavigator';

// Session 09
import Session09 from './src/Session09';
import PaperExample from './src/Session09/PaperExample';
import AsyncStorageExample from './src/Session09/AsyncStorageExample';
import MomentExample from './src/Session09/MomentExample';
import LoginFormikExample from './src/Session10/LoginFormikExample';
import FireStoreExample from './src/Session11/FirestoreExamples/FirestoreExample';
import FirestoreProducts from './src/Session11/FirestoreExamples/FirestoreProducts';
import FirestoreQuiz from './src/Session11/FirestoreExamples/FirestoreQuiz';
import FirestoreRealtimeExample from './src/Session11/FirestoreExamples/FirestoreRealtimeExample';
import FirestoreRealtimeChat from './src/Session11/FirestoreExamples/FirestoreRealtimeChat';
import ChatApplication from './src/Session11/ChatApplication';
import StorageUploadImageExample from './src/Session11/StorageExamples/StorageUploadImageExample';

import EmailAuthExample from './src/Session11/AuthenticationExamples/EmailAuthExample';
import PhoneAuthExample from './src/Session11/AuthenticationExamples/PhoneAuthExample';
import AnalyticsExample from './src/Session11/AnalyticsExample';
import RemoteConfigExample from './src/Session11/RemoteConfigExample';
import AuthAppNavigator from './src/Session11/AuthenticationExamples/AuthenticationFlow/AppNavigator';

// Sessopn 12
import OneSignalExample from './src/Session12/OneSignalExample';
import CloudMessageExample from './src/Session12/CloudMessageExample';

// Session 13

import ReduxApp from './src/Session13/';

const App = () => {
  return (
    <React.Fragment>
      {/* <Text>Hello React Native 1</Text> */}
      {/* <FriendAvatar></FriendAvatar> */}
      {/* <HeartButton></HeartButton> */}
      {/* <Product></Product> */}
      {/* <Products></Products> */}
      {/* <FlexExample /> */}
      {/* <ImageBgExample /> */}
      {/* <Login1 /> */}
      {/* <UI01 /> */}
      {/* <UI02 /> */}
      {/* <ScrollViewExample /> */}
      {/* <ScrollViewWithManyDataExample /> */}
      {/* <FlatListExample /> */}
      {/* <SectionListExample /> */}
      {/* <SectionListAdvancedExample /> */}
      {/* <NetworkingExample /> */}
      {/* <GalleryHomework /> */}
      {/* <Login /> */}
      {/* <Product /> */}

      {/* <Example01 /> */}
      {/* <AppNavigator /> */}
      {/* <Product2
        data={{
          id: 1,
          name: 'Kids Jumpsuit',
          coverImageUrl:
            'https://cb2.scene7.com/is/image/CB2/SnakeTableLampSHF19',
          price: 39,
          status: 'In stock',
          color: 'red',
          sizes: ['M', 'L', 'XL'],
          freeShip: false,
        }}
      /> */}
      {/* <Session09 /> */}
      {/* <PaperExample /> */}
      {/* <AsyncStorageExample /> */}
      {/* <MomentExample /> */}
      {/* <LoginFormikExample /> */}
      {/* <FireStoreExample /> */}
      {/* <FirestoreProducts /> */}
      {/* <FirestoreQuiz /> */}
      {/* <FirestoreRealtimeExample /> */}
      {/* <FirestoreRealtimeChat /> */}
      {/* <ChatApplication /> */}
      {/* <StorageUploadImageExample /> */}
      {/* <EmailAuthExample /> */}
      {/* <PhoneAuthExample /> */}
      {/* <AnalyticsExample /> */}
      {/* <RemoteConfigExample /> */}
      {/* <AuthAppNavigator /> */}
      {/* <UI03 /> */}
      {/* <UI04 /> */}
      {/* <OneSignalExample /> */}
      {/* <CloudMessageExample /> */}

      {/* <CustomHookExample /> */}
      {/* <UseContextExample /> */}
      {/* <UseReducerExample /> */}
      {/* <UseCallbackExample /> */}

      <ReduxApp />
    </React.Fragment>
  );
};

export default App;
