import { NativeSecureRandom } from './src/NativeSecureRandom'

export function harmonyGenerateSecureRandom(length) {
    if(!NativeSecureRandom || !NativeSecureRandom.generateSecureRandomAsBase64) {
        return Promise.reject(Error('react-native-securerandom is not properly linked'));
    }
    return NativeSecureRandom.generateSecureRandomAsBase64(length).then(base64 => base64)
} 