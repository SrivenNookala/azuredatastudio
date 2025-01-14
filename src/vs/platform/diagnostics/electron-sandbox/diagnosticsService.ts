/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IDiagnosticsService } from 'vs/platform/diagnostics/common/diagnostics';
import { registerSharedProcessRemoteService } from 'vs/platform/ipc/electron-sandbox/services';

registerSharedProcessRemoteService(IDiagnosticsService, 'diagnostics');
