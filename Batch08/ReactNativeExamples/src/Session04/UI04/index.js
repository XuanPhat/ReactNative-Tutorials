import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { SvgXml } from 'react-native-svg';

import Container from './Container';

const logoXml = `
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="12" fill="#FF968E"/>
<g clip-path="url(#clip0)">
<path d="M31.781 22.375L27.781 17.375C27.6873 17.2579 27.5684 17.1634 27.4332 17.0985C27.298 17.0336 27.15 16.9999 27 17V22C27 22.7956 26.6839 23.5587 26.1213 24.1213C25.5587 24.6839 24.7956 25 24 25H15V28C15 28.2652 15.1054 28.5196 15.2929 28.7071C15.4804 28.8946 15.7348 29 16 29H27C27.15 29.0001 27.298 28.9664 27.4332 28.9015C27.5684 28.8366 27.6873 28.7421 27.781 28.625L31.781 23.625C31.923 23.4476 32.0004 23.2272 32.0004 23C32.0004 22.7728 31.923 22.5524 31.781 22.375Z" fill="white"/>
<path d="M24 23H13C12.85 23.0001 12.702 22.9664 12.5668 22.9015C12.4316 22.8366 12.3127 22.7421 12.219 22.625L8.21901 17.625C8.07701 17.4476 7.99963 17.2272 7.99963 17C7.99963 16.7728 8.07701 16.5524 8.21901 16.375L12.219 11.375C12.3127 11.2579 12.4316 11.1634 12.5668 11.0985C12.702 11.0336 12.85 10.9999 13 11H24C24.2652 11 24.5196 11.1054 24.7071 11.2929C24.8947 11.4804 25 11.7348 25 12V22C25 22.2652 24.8947 22.5196 24.7071 22.7071C24.5196 22.8946 24.2652 23 24 23Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="24" height="24" fill="white" transform="translate(8 8)"/>
</clipPath>
</defs>
</svg>

`;

const { height } = Dimensions.get('window');

var styles = StyleSheet.create({
  container: {
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function SplashScreen() {
  return (
    <Container style={styles.container}>
      <SvgXml xml={logoXml} width="100%" />
    </Container>
  );
}
