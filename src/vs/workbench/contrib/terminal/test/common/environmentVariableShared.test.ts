/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { deepStrictEqual } from 'assert';
import { deserializeEnvironmentVariableCollection, serializeEnvironmentVariableCollection } from 'vs/platform/terminal/common/environmentVariableShared';
import { EnvironmentVariableMutatorType, IEnvironmentVariableMutator } from 'vs/platform/terminal/common/environmentVariable';

suite('EnvironmentVariable - deserializeEnvironmentVariableCollection', () => {
	test('should construct correctly with 3 arguments', () => {
		const c = deserializeEnvironmentVariableCollection([
			['A', { value: 'a', type: EnvironmentVariableMutatorType.Replace, variable: 'A' }],
			['B', { value: 'b', type: EnvironmentVariableMutatorType.Append, variable: 'B' }],
			['C', { value: 'c', type: EnvironmentVariableMutatorType.Prepend, variable: 'C' }]
		]);
		const keys = [...c.keys()];
		deepStrictEqual(keys, ['A', 'B', 'C']);
		deepStrictEqual(c.get('A'), { value: 'a', type: EnvironmentVariableMutatorType.Replace, variable: 'A' });
		deepStrictEqual(c.get('B'), { value: 'b', type: EnvironmentVariableMutatorType.Append, variable: 'B' });
		deepStrictEqual(c.get('C'), { value: 'c', type: EnvironmentVariableMutatorType.Prepend, variable: 'C' });
	});
});

suite('EnvironmentVariable - serializeEnvironmentVariableCollection', () => {
	test('should correctly serialize the object', () => {
		const collection = new Map<string, IEnvironmentVariableMutator>();
		deepStrictEqual(serializeEnvironmentVariableCollection(collection), []);
		collection.set('A', { value: 'a', type: EnvironmentVariableMutatorType.Replace, variable: 'A' });
		collection.set('B', { value: 'b', type: EnvironmentVariableMutatorType.Append, variable: 'B' });
		collection.set('C', { value: 'c', type: EnvironmentVariableMutatorType.Prepend, variable: 'C' });
		deepStrictEqual(serializeEnvironmentVariableCollection(collection), [
			['A', { value: 'a', type: EnvironmentVariableMutatorType.Replace, variable: 'A' }],
			['B', { value: 'b', type: EnvironmentVariableMutatorType.Append, variable: 'B' }],
			['C', { value: 'c', type: EnvironmentVariableMutatorType.Prepend, variable: 'C' }]
		]);
	});
});
