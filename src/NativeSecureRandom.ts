/*
 * Copyright (c) 2024 Huawei Device Co., Ltd. All rights reserved
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import type { TurboModule } from 'react-native/Libraries/TurboModule/RCTExport';
import { TurboModuleRegistry } from 'react-native';
interface Uint8Array {
  readonly BYTES_PER_ELEMENT: number;
  readonly buffer: ArrayBufferLike;
  readonly byteLength: number;
  readonly byteOffset: number;
  copyWithin(target: number, start: number, end?: number): this;
  every(predicate: (value: number, index: number, array: Uint8Array) => unknown, thisArg?: any): boolean;
  fill(value: number, start?: number, end?: number): this;
  filter(predicate: (value: number, index: number, array: Uint8Array) => any, thisArg?: any): Uint8Array;
  find(predicate: (value: number, index: number, obj: Uint8Array) => boolean, thisArg?: any): number | undefined;
  findIndex(predicate: (value: number, index: number, obj: Uint8Array) => boolean, thisArg?: any): number;
  forEach(callbackfn: (value: number, index: number, array: Uint8Array) => void, thisArg?: any): void;
  indexOf(searchElement: number, fromIndex?: number): number;
  join(separator?: string): string;
  lastIndexOf(searchElement: number, fromIndex?: number): number;
  readonly length: number;
  map(callbackfn: (value: number, index: number, array: Uint8Array) => number, thisArg?: any): Uint8Array;
  reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number): number;
  reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number, initialValue: number): number;
  reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8Array) => U, initialValue: U): U;
  reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number): number;
  reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number, initialValue: number): number;
  reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8Array) => U, initialValue: U): U;
  reverse(): Uint8Array;
  set(array: ArrayLike<number>, offset?: number): void;
  slice(start?: number, end?: number): Uint8Array;
  some(predicate: (value: number, index: number, array: Uint8Array) => unknown, thisArg?: any): boolean;
  sort(compareFn?: (a: number, b: number) => number): this;
  subarray(begin?: number, end?: number): Uint8Array;
  toLocaleString(): string;
  toString(): string;
  valueOf(): Uint8Array;
  [index: number]: number;
}
interface DataBlob {
  data: Uint8Array;
}
export interface Spec extends TurboModule {
  generateSecureRandomAsBase64: (length: number) => Promise<DataBlob>;
}

export const NativeSecureRandom = TurboModuleRegistry.getEnforcing<Spec>('SecureRandomNativeModule')