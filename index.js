import { Platform } from 'react-native';
import { generateSecureRandom as generateSecureRandomisIosOrAndroid  } from 'react-native-securerandom';
import { harmonyGenerateSecureRandom } from './index.harmony'
const isIosOrAndroid = Platform.OS === 'android' || Platform.OS === 'ios'
export const generateSecureRandom = isIosOrAndroid ? generateSecureRandomisIosOrAndroid : harmonyGenerateSecureRandom;