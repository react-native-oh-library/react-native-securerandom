/*
 * Copyright (c) 2024 Huawei Device Co., Ltd. All rights reserved
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import { Platform } from 'react-native';
import { generateSecureRandom as generateSecureRandomisIosOrAndroid } from 'react-native-securerandom';
import { harmonyGenerateSecureRandom } from './index.harmony'
const isIosOrAndroid = Platform.OS === 'android' || Platform.OS === 'ios'
export const generateSecureRandom = isIosOrAndroid ? generateSecureRandomisIosOrAndroid : harmonyGenerateSecureRandom;