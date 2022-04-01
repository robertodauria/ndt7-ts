import Worker from 'web-worker';

var f: Object = (typeof fetch !== 'undefined' ? fetch : import('node-fetch'));


// cb creates a default-empty callback function, allowing library users to
// only need to specify callback functions for the events they care about.
//
// This function is not exported.
const cb = function (name: string, callbacks: any, defaultFn: any) {
    if (typeof (callbacks) !== 'undefined' && name in callbacks) {
        return callbacks[name];
    } else if (typeof defaultFn !== 'undefined') {
        return defaultFn;
    } else {
        // If no default function is provided, use the empty function.
        return function () { };
    }
};

// The default response to an error is to throw an exception.
const defaultErrCallback = function (err: string) {
    throw new Error(err);
};