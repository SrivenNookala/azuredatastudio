/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { registerSharedProcessRemoteService } from 'vs/platform/ipc/electron-sandbox/services';
import { IRemoteTunnelService } from 'vs/platform/remoteTunnel/common/remoteTunnel';

registerSharedProcessRemoteService(IRemoteTunnelService, 'remoteTunnel');
