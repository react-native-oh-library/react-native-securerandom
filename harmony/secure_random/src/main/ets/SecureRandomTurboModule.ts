/*
 * Copyright (c) 2024 Huawei Device Co., Ltd. All rights reserved
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import { TurboModule } from '@rnoh/react-native-openharmony/ts';
import { TM } from '@rnoh/react-native-openharmony/generated/ts';
import cryptoFramework from '@ohos.security.cryptoFramework';
import Logger from './Logger';

export class SecureRandomTurboModule extends TurboModule implements TM.SecureRandomNativeModule.Spec {

  constructor(ctx) {
    super(ctx);
  }

  async generateSecureRandomAsBase64(length: number): Promise<cryptoFramework.DataBlob> {
    let rand = cryptoFramework.createRandom();
    let randOutput:cryptoFramework.DataBlob = await rand.generateRandom(length);
    Logger.info('rand output:' + randOutput.data)
    Logger.info(`generateSecureRandomAsBase64 running:${length}`)
    return Promise.resolve(randOutput)
  }

}