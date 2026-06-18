import {fib} from "../lab2/lab2.js";

export function getDecimal(num) {
    return Math.abs(+(Math.floor(num) - num).toFixed(6));
}

export function normalizeUrl(str) {
    if (str.indexOf("https://") == 0) {
        return str;
    } else if (str.indexOf("http://") == 0) {
        return str.replace("http://", "https://");
    } else {
        return "https://" + str;
    }
}

export function checkSpam(str) {
    if (str.indexOf("_XxX_") >= 0 || str.indexOf("__Viagra__") >= 0) {
        return true;
    } else {
        return false;
    }
}

export function truncate(str, len) {
    if (str.length > len) {
        return str.substr(0, len - 1) + "…";
    } else {
        return str.substr(0, len);
    }
}

export function camelize(str) {
    let str1 = "";
    let i = 0;

    while (i < str.length) {

        if (str[i] == "-") {
            i += 1;
            if (str[i] != "-") {
                str1 += str[i].toUpperCase();
                i += 1;
            }
        } else {
            str1 += str[i];
            i += 1;
        }
    }
    return str1;
}

export function fibs(n) {
    let mass = [];
    for (let i = 0; i < n; i++) {
        mass.push(fib(i));
    }
    console.log(mass);
    return mass;
}

export function arrReverseSorted(mass) {
    let mass2 = []
    for (let i = 0; i < mass.length; i++) {
        mass2.push(mass[mass.length - i - 1]);
    }
    return mass2;
}

export function unique(mass) {
    let mass2 = [];
    for (let i = 0; i < mass.length; i++) {
        if (!mass2.includes(mass[i])) {
            mass2.push(mass[i]);
        }
    }
    return mass2;
}