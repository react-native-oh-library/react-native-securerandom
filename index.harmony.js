import { NativeSecureRandom } from './src/NativeSecureRandom'

export default function harmonyGenerateSecureRandom(length) {
    if(!NativeSecureRandom || !NativeSecureRandom.generateSecureRandomAsBase64) {
        return Promise.reject(Error('react-native-securerandom is not properly linked'));
    }
    NativeSecureRandom.generateSecureRandomAsBase64(length).then(base64 => base64)
} 