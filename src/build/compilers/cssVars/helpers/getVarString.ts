import { FlatValuesObject } from './accumulateValues';

interface GetVarStringParams {
	valuesObject: FlatValuesObject;
	prefix: string;
	delimeter?: string;
	callback?: (name: string, value: string | number) => void;
}
export const getVarString = ({
	valuesObject,
	prefix,
	delimeter = '\n',
	callback,
}: GetVarStringParams): string => {
	return Object.entries(valuesObject)
		.map(([name, value]) => {
			callback?.(name, value);
			return `${prefix}${name}: ${value};`;
		})
		.join(delimeter);
};
