/*
 * Copyright (c) 2024 Huawei Device Co., Ltd. All rights reserved
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import { NativeSecureRandom } from './src/NativeSecureRandom'

export function harmonyGenerateSecureRandom(length) {
    if(!NativeSecureRandom || !NativeSecureRandom.generateSecureRandomAsBase64) {
        return Promise.reject(Error('react-native-securerandom is not properly linked'));
    }
    return NativeSecureRandom.generateSecureRandomAsBase64(length).then(base64 => base64)
} 