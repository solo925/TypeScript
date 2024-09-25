"use strict";
const parseValue = (value) => {
    // Check if value is an object and has the expected shape
    if (typeof value === 'object' &&
        value !== null &&
        'data' in value &&
        typeof value.data.id === 'string') {
        return value.data.id;
    }
    throw new Error('Parsing error!');
};
