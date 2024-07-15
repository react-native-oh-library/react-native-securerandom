import type { TurboModule } from 'react-native/Libraries/TurboModule/RCTExport';
import { TurboModuleRegistry } from 'react-native';
interface DataBlob {
  data: Uint8Array;
}
export interface Spec extends TurboModule {
  readonly randomBytes: (len: number, cb: (err: string, base64String: string)=> void) => void
} 
export interface Spec extends TurboModule {
  generateSecureRandomAsBase64: (length:number) => Promise<DataBlob>;
}

export const NativeSecureRandom = TurboModuleRegistry.getEnforcing<Spec>('SecureRandomNativeModule')