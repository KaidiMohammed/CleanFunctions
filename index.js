module.exports = {
    isEqual: (arr, value) => arr.every(item => item === value),

    // isEqual(['foo', 'foo'], 'foo') === true
    // isEqual(['foo', 'bar'], 'foo') === false
    // isEqual(['bar', 'bar'], 'foo') === false
    areEqual1: arr => arr.length > 0 && arr.every(item => item === arr[0]),

    // Or
    areEqual2: arr => new Set(arr).size === 1,

    // areEqual([1, 2, 3, 4]) === false
    // areEqual(['hello', 'hello', 'hello']) === true


    contains: (arr, criteria) => arr.some(v => criteria(v)),

    // contains([10, 20, 30], v => v > 25 )  === true
    // contains([10, 20, 30], v => v > 100 || v < 15 )  === true
    // contains([10, 20, 30], v => v > 100 )  === false


    isNotEmpty: arr => Array.isArray(arr) && arr.length > 0,

    // isNotEmpty([]) === false
    // isNotEmpty([1, 2, 3]) === true


    isSubset: (a, b) => (new Set(b)).size === (new Set(b.concat(a))).size,

    // isSubset([1,2], [1,2,3,4]) === true
    // isSubset([1,2,5], [1,2,3,4]) === false
    // isSubset([6], [1,2,3,4]) === false


    isArray: obj => Array.isArray(obj),

    // `arr` is an array
    clone1: arr => arr.slice(0),

    // Or
    clone2: arr => [...arr],

    // Or
    clone3: arr => Array.from(arr),

    // Or
    clone4: arr => arr.map(x => x),

    // Or
    clone5: arr => JSON.parse(JSON.stringify(arr)),

    // Or
    clone6: arr => arr.concat([]),


    // `a` and `b` are arrays
    isEqual1: (a, b) => JSON.stringify(a.sort()) === JSON.stringify(b.sort()),

    // Or
    isEqual2: (a, b) => a.length === b.length && a.every((v) => b.includes(v)),

    // Or
    isEqual3: (a, b) => a.length === b.length && (new Set(a.concat(b)).size === a.length),

    // isEqual([1, 2, 3], [1, 2, 3]) === true
    // isEqual([1, 2, 3], [1, 3, 2]) === true
    // isEqual([1, 2, 3], [1, '2', 3]) === false


    // `a` and `b` are arrays
    isEqual4: (a, b) => JSON.stringify(a) === JSON.stringify(b),

    // Or
    isEqual5: (a, b) => a.length === b.length && a.every((v, i) => v === b[i]),

    // isEqual([1, 2, 3], [1, 2, 3]) === true
    // isEqual([1, 2, 3], [1, '2', 3]) === false


    toObject: (arr, identifier) => arr.reduce((a, b) => ({ ...a, [b[identifier]]: b }), {}),

    /*
    toObject(
        [
            { id: '1', name: 'Alpha', gender: 'Male' },
            { id: '2', name: 'Bravo', gender: 'Male' },
            { id: '3', name: 'Charlie', gender: 'Female' },
        ],
        'id'
    )
    returns
    {
        '1': { id: '1', name: 'Alpha', gender: 'Male' },
        '2': { id: '2', name: 'Bravo', gender: 'Male' },
        '3': { id: '3', name: 'Charlie', gender: 'Female' },
    }
    */


    toNumbers1: arr => arr.map(Number),

    // Or
    toNumbers2: arr => arr.map(x => +x),

    // toNumbers(['2', '3', '4']) returns [2, 3, 4]


    accumulate1: arr => arr.map((sum => value => sum += value)(0)),

    // Or
    accumulate2: arr => arr.reduce((a, b, i) => i === 0 ? [b] : [...a, b + a[i - 1]], []),

    // Or
    accumulate3: arr => arr.reduce((a, b, i) => i === 0 ? [b] : [...a, b + a[i - 1]], 0),

    /*
    accumulate([1, 2, 3, 4]) === [1, 3, 6, 10]
    // 1            : 1
    // 1 + 2         = 3
    // 1 + 2 + 3     = 6
    // 1 + 2 + 3 + 4 = 10
    */

    range1: (min, max) => [...Array(max - min + 1).keys()].map(i => i + min),

    // Or
    range2: (min, max) => Array(max - min + 1).fill(0).map((_, i) => min + i),

    // Or
    range3: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

    // range(5, 10) === [5, 6, 7, 8, 9, 10]


    empty: arr => arr.length = 0,

    // Or
    //    arr =[],

    findLongest: words => Math.max(...(words.map(el => el.length))),

    // findLongest(['always','look','on','the','bright','side','of','life']) === 6,


    max: arr => Math.max(...arr),

    min: arr => Math.min(...arr),

    flat: arr => [].concat.apply([], arr.map(a => Array.isArray(a) ? flat(a) : a)),
    // Or
    flat: arr => arr.reduce((a, b) => Array.isArray(b) ? [...a, ...flat(b)] : [...a, b], []),

    // Or
    // See the browser compatibility at https://caniuse.com/#feat=array-flat
    flat: arr => arr.flat(),

    // flat(['cat', ['lion', 'tiger']]) returns ['cat', 'lion', 'tiger']


    randomItem: arr => arr[(Math.random() * arr.length) | 0],


    average: arr => arr.reduce((a, b) => a + b, 0) / arr.length,

    // space: O(n)
    // time: O(n)
    getIntersection: (...arr) => [...(arr.flat().reduce((map, v) => map.set(v, (map.get(v) || 0) + 1), new Map()))].reduce((acc, [v, count]) => void (count === arr.length && acc.push(v)) || acc, []),

    // Or
    // Only support two arrays
    getIntersection: (a, b) => [...new Set(a)].filter(v => b.includes(v)),

    // getIntersection([1, 2, 3], [2, 3, 4, 5]) returns [2, 3]
    // getIntersection([1, 2, 3], [2, 3, 4, 5], [1, 3, 5]) returns [3]

    sum: arr => arr.reduce((a, b) => a + b, 0),

    unique: arr => [...new Set(arr)],

    // Or
    unique: arr => arr.filter((el, i, array) => array.indexOf(el) === i),

    // Or
    unique: arr => arr.reduce((acc, el) => acc.includes(el) ? acc : [...acc, el], []),

    union: (...arr) => [...new Set(arr.flat())],

    // union([1, 2], [2, 3], [3]) returns [1, 2, 3]


    // Merge but don't remove the duplications
    merge1: (a, b) => a.concat(b),
    // Or
    merge2: (a, b) => [...a, ...b],

    // Merge and remove the duplications
    // merge3: [...new Set(a.concat(b))],
    // Or
    // merge4: [...new Set([...a, ...b])],

    removeFalsy: arr => arr.filter(Boolean),

    // removeFalsy([0, 'a string', '', NaN, true, 5, undefined, 'another string', false])
    // returns ['a string', true, 5, 'another string']

    diffDays: (date, otherDate) => Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24)),

    // diffDays(new Date('2014-12-19'), new Date('2020-01-01')) === 1839

    // `min`, `max` and `date` are `Date` instances
    isBetween: (date, min, max) => (date.getTime() >= min.getTime() && date.getTime() <= max.getTime()),

    // `date` is a Date object
    isToday: (date) => date.toISOString().slice(0, 10) === new Date().toISOString().slice(0, 10),

    isLeapYear: year => (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)),

    // Or
    // Get the number of days in February
    isLeapYear: year => new Date(year, 1, 29).getDate() === 29,

    // `a` and `b` are `Date` instances
    compare: (a, b) => a.getTime() > b.getTime(),

    // compare(new Date('2020-03-30'), new Date('2020-01-01')) === true

    // `date` is a `Date` object
    formatYmd: date => date.toISOString().slice(0, 10),

    // formatYmd(new Date()) returns `2020-05-06`


    // `date` is a `Date` object
    extract: date => date.toISOString().split(/[^0-9]/).slice(0, -1),

    // `extract` is an array of [year, month, day, hour, minute, second, millisecond]

    // `date` is a `Date` object
    // `locale` is a locale (en-US, pt-BR, for example)
    format: (date, locale) => new Intl.DateTimeFormat(locale).format(date),

    // format(new Date(), 'pt-BR') returns `06/05/2020`


    ts: () => Math.floor(new Date().getTime() / 1000),

    // `date` is a Date object
    getMonthName: date => ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', ' November', 'December'][date.getMonth()],

    // `month` is zero-based index
    daysInMonth: (month, year) => new Date(year, month, 0).getDate(),

    // `date` is a Date object
    getWeekday: date => ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()],

    // `arr` is an array of `Date` items
    sortDescending: arr => arr.sort((a, b) => a.getTime() > b.getTime()),
    sortAscending: arr => arr.sort((a, b) => a.getTime() < b.getTime()),


    // `m`: the month (zero-based index)
    // `d`: the day
    // `y`: the year
    isValidDate: (m, d, y) => 0 <= m && m <= 11 && 0 < y && y < 32768 && 0 < d && d <= (new Date(y, m, 0)).getDate(),

    isDescendant: (child, parent) => parent.contains(child),

    hasFocus: ele => (ele === document.activeElement),

    touchSupported: () => ('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),

    // isIE:!!document.documentMode,


    //isMacBrowser:/Mac|iPod|iPhone|iPad/.test(navigator.platform),

    siblings: ele => [].slice.call(ele.parentNode.children).filter((child) => (child !== ele)),

    getSelectedText: () => window.getSelection().toString(),


    //  history.back(),

    // Or
    // history.go(-1),

    // Pick the method that is suitable for your use case
    hide: ele => ele.style.display = 'none',

    // Or
    hide: ele => ele.style.visibility = 'hidden',


    insertAfter: (ele, anotherEle) => anotherEle.parentNode.insertBefore(ele, anotherEle.nextSibling),

    // Or
    insertAfter: (ele, anotherEle) => anotherEle.insertAdjacentElement('afterend', ele),

    insertBefore: (ele, anotherEle) => anotherEle.parentNode.insertBefore(ele, anotherEle),

    // Or
    insertBefore: (ele, anotherEle) => anotherEle.insertAdjacentElement('beforebegin', ele),

    insertHtmlAfter: (html, ele) => ele.insertAdjacentHTML('afterend', html),

    insertHtmlBefore: (html, ele) => ele.insertAdjacentHTML('beforebegin', html),

    goTo: url => location.href = url,

    reload: () => location.reload(),

    // Or
    reload: () => (location.href = location.href),

    replace: (ele, newEle) => ele.parentNode.replaceChild(newEle, ele),

    goToTop: () => window.scrollTo(0, 0),

    show: ele => ele.style.display = '',


    stripHtml: html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '',

    toggle: ele => (ele.style.display = (ele.style.display === 'none') ? 'block' : 'none'),

    // Compose functions from left to right
    pipe: (...fns) => x => fns.reduce((y, f) => f(y), x),

    // Example
    lowercase: str => str.toLowerCase(),
    capitalize: str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`,
    reverse: str => str.split('').reverse().join(''),

    //fn: pipe(lowercase, capitalize, reverse),

    // We will execute `lowercase`, `capitalize` and `reverse` in order
    //fn('Hello World') === 'dlrow olleH',

    // Compose functions from right to left
    compose: (...fns) => x => fns.reduceRight((y, f) => f(y), x),

    // Example
    lowercase: str => str.toLowerCase(),
    capitalize: str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`,
    reverse: str => str.split('').reverse().join(''),

    //fn: compose(reverse, capitalize, lowercase),

    // We will execute `lowercase`, `capitalize` and `reverse` in order
    //fn('Hello World') === 'dlrow olleH',

    noop: () => { },

    // Or
    noop: Function.prototype,

    // javascript
    // returns a new version of `fn` that returns values as lazy evaluable
    thunkfy: fn => (...args) => () => fn(...args),

    // Example
    heavyComputation: x => doStuff(x),
    // unnecessarySlow: [].map(linearFn.heavyComputation())
    //     .find(result => result.criteria),
    // probablyFaster: [].map(thunkfy(heavyComputation))
    //     .find(thunk => thunk().criteria),


    // Reverse the order of arguments
    flip: fn => (...args) => fn(...args.reverse()),

    // For binary functions
    flip: fn => (b, a) => fn(a, b),

    // Or for curried functions
    flip: fn => b => a => fn(a)(b),

    // Example
    isParent: (parent, child) => parent.children.includes(child),
    //isChild: flip(isParent),


    identity: x => x,


    isNumber: value => !isNaN(parseFloat(value)) && isFinite(value),

    isNil: (value) => value == null,


    isPromise: obj => !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function',


    isEmpty: obj => Object.keys(obj).length === 0 && obj.constructor === Object,

    // Or
    isEmpty: obj => JSON.stringify(obj) === '{}',

    isNode: typeof process !== 'undefined' && process.versions != null && process.versions.node != null,

    isBrowser: typeof window === 'object' && typeof document === 'object',

    celsiusToFahrenheit: celsius => celsius * 9 / 5 + 32,

    fahrenheitToCelsius: fahrenheit => (fahrenheit - 32) * 5 / 9,

    // celsiusToFahrenheit(15) === 59
    // celsiusToFahrenheit(0) === 32
    // celsiusToFahrenheit(-20) === -4

    // fahrenheitToCelsius(59) === 15
    // fahrenheitToCelsius(32) === 0


    hexToRgb: hex => hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_, r, g, b) => `#${r}${r}${g}${g}${b}${b}`).substring(1).match(/.{2}/g).map(x => parseInt(x, 16)),

    // hexToRgb('#00ffff') === [0, 255, 255] 
    // hexToRgb('#0ff') === [0, 255, 255]

    rgbToHex: (red, green, blue) => `#${((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)}`,

    // Or
    rgbToHex: (red, green, blue) => `#${[red, green, blue].map(v => v.toString(16).padStart(2, '0')).join('')}`,

    // rgbToHex(0, 255, 255) === '#00ffff' 

    // `map` doesn't have any properties
    map: Object.create(null),

    // The following `map` has `__proto__` property
    // map:{},

    //isDarkMode: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,

    // Some easing functions
    // See https://gist.github.com/gre/1650294 and https://easings.net

    linear: t => t,

    easeInQuad: t => t * t,
    easeOutQuad: t => t * (2 - t),
    easeInOutQuad: t => t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t,

    easeInCubic: t => t * t * t,
    easeOutCubic: t => (--t) * t * t + 1,
    easeInOutCubic: t => t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,

    easeInQuart: t => t * t * t * t,
    easeOutQuart: t => 1 - (--t) * t * t * t,
    easeInOutQuart: t => t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t,

    easeInQuint: t => t * t * t * t * t,
    easeOutQuint: t => 1 + (--t) * t * t * t * t,
    easeInOutQuint: t => t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t,

    easeInSine: t => 1 + Math.sin(Math.PI / 2 * t - Math.PI / 2),
    easeOutSine: t => Math.sin(Math.PI / 2 * t),
    easeInOutSine: t => (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2,

    easeInElastic: t => (.04 - .04 / t) * Math.sin(25 * t) + 1,
    easeOutElastic: t => .04 * t / (--t) * Math.sin(25 * t),
    easeInOutElastic: t => (t -= .5) < 0 ? (.02 + .01 / t) * Math.sin(50 * t) : (.02 - .01 / t) * Math.sin(50 * t) + 1,


    throwdice: () => ~~(Math.random() * 6) + 1,

    // throwdice() === 4 
    // throwdice() === 1 
    // throwdice() === 6 

    // `encodeURIComponent` doesn't encode -_.!~*'()
    encode: url => encodeURIComponent(url).replace(/!/g, '%21').replace(/~/g, '%7E').replace(/\*/g, '%2A').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/%20/g, '+'),

    randomBoolean: () => Math.random() >= 0.5,


    randomColor: () => `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`,


    uuid: (a) => a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid),

    getParam: (url, param) => new URLSearchParams(new URL(url).search).get(param),

    // getParam('http://domain.com?message=hello', 'message') === 'hello'

    // `promises` is an array of `Promise`
    run: promises => promises.reduce((p, c) => p.then(rp => c.then(rc => [...rp, rc])), Promise.resolve([])),

    /*
    run(promises).then((results) => {
        // results is an array of promise results in the same order
    }),
    */

    //[a, b]:[b, a],

    wait: async (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds)),


    // `n` is a position number
    addOrdinal: n => `${n}${['st', 'nd', 'rd'][((n + 90) % 100 - 10) % 10 - 1] || 'th'}`,

    // Or
    addOrdinal: n => `${n}${[, 'st', 'nd', 'rd'][/1?.$/.exec(n)] || 'th'}`,

    // Or
    addOrdinal: n => `${n}${[, 'st', 'nd', 'rd'][n % 100 >> 3 ^ 1 && n % 10] || 'th'}`,

    // Or
    addOrdinal: n => `${n}${{ one: 'st', two: 'nd', few: 'rd', other: 'th' }[new Intl.PluralRules('en', { type: 'ordinal' }).select(n)]}`,

    // addOrdinal(1) === '1st'
    // addOrdinal(2) === '2nd'
    // addOrdinal(3) === '3rd'
    // addOrdinal(11) === '11th'
    // addOrdinal(12) === '13th'
    // addOrdinal(13) === '13th'

    average: (...args) => args.reduce((a, b) => a + b) / args.length,

    // average(1, 2, 3, 4) === 2.5


    division: (...args) => args.reduce((a, b) => a / b),

    // division(1, 2, 3, 4) === 0.04166666666666666


    mod: (a, b) => ((a % b) + b) % b,

    // mod(-1, 5) === 4
    // mod(3, 5) === 3
    // mod(6, 5) === 1


    remainder: (...args) => args.reduce((a, b) => a % b),

    // remainder(1, 2, 3, 4) === 1


    sum: (...args) => args.reduce((a, b) => a + b),

    // sum(1, 2, 3, 4) === 10


    isPrime: num => (num > 1) && Array(Math.floor(Math.sqrt(num)) - 1).fill(0).map((_, i) => i + 2).every(i => num % i !== 0),

    isPowerOfTwo: number => (number & (number - 1)) === 0,

    // isPowerOfTwo(256) === true
    // isPowerOfTwo(129) === false

    isEven: number => number % 2 === 0,

    // isEven(1) === false
    // isEven(2) === true

    isNegative: number => Math.sign(number) === -1,

    // isNegative(-3) === true
    // isNegative(8) === false

    isOdd: number => number % 2 !== 0,

    // isOdd(1) === true
    // isOdd(2) === false

    isPositive: number => Math.sign(number) === 1,

    // isPositive(3) === true
    // isPositive(-8) === false

    clamp: (val, min = 0, max = 1) => Math.max(min, Math.min(max, val)),

    // clamp(199, 10, 25) === 25,


    gcd: (a, b) => b === 0 ? a : gcd(b, a % b),

    // gcd(10, 15) === 5

    toNumber: str => +str,

    // toNumber('42') === 42

    randomFloat: (min, max) => Math.random() * (max - min) + min,

    randomInteger: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,

    mul: (...args) => args.reduce((a, b) => a * b),

    // mul(1, 2, 3, 4) === 24


    prefixWithZeros: (number, length) => (number / Math.pow(10, length)).toFixed(length).substr(2),

    // Or
    prefixWithZeros: (number, length) => `${Array(length).join('0')}${number}`.slice(-length),

    // Or
    prefixWithZeros: (number, length) => String(number).padStart(length, '0'),

    // prefixWithZeros(42, 5) === '00042'


    subtract: (...args) => args.reduce((a, b) => a - b),

    // subtract(1, 2, 3, 4) === -8


    capitalize: str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`,

    // capitalize('hello world') === 'Hello world'

    isNumeric: str => !/[^0-9]/.test(str),

    // isNumeric(2) === true
    // isNumeric('23') === true
    // isNumeric('00123') === true

    // isNumeric('1.23') === false
    // isNumeric('-Infinity') === false
    // isNumeric('Infinity') === false
    // isNumeric('NaN') === false

    containsWhitespace: str => str => /\s/.test(str),

    // containsWhitespace('hello world') === true

    isLowerCase: str => str === str.toLowerCase(),

    isUpperCase: str => str === str.toUpperCase(),

    areAnagram: (str1, str2) => str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join(''),

    // areAnagram('listen', 'silent') === true
    // areAnagram('they see', 'the eyes') === true

    slugify: string => string.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''),

    // slugify('Chapter One: Once upon a time...') === 'chapter-one-once-upon-a-time'


    kebabToCamel: str => str.replace(/-./g, m => m.toUpperCase()[1]),

    // kebabToCamel('background-color') === 'backgroundColor',

    camelToKebab: str => str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),

    // camelToKebab('backgroundColor') === 'background-color',


    snakeToCamel: str => str.toLowerCase().replace(/(_\w)/g, m => m.toUpperCase().substr(1)),

    // snakeToCamel('HELLO_world') === 'helloWorld'


    generateString: (length, chars) => Array(length).fill('').map((v) => chars[Math.floor(Math.random() * chars.length)]).join(''),

    // generateString(10, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')

    generateString: length => Array(length).fill('').map((v) => Math.random().toString(36).charAt(2)).join(''),

    ext: fileName => fileName.split('.').pop(),

    fileName: url => url.substring(url.lastIndexOf('/') + 1),

    // fileName('http://domain.com/path/to/document.pdf') === 'document.pdf'

    lowercaseFirst: str => `${str.charAt(0).toLowerCase()}${str.slice(1)}`,

    // lowercaseFirst('Hello World') === 'hello World'

    removeSpaces: str => str.replace(/\s/g, ''),

    // removeSpaces('hel lo wor ld') === 'helloworld'

    repeat: (str, numberOfTimes) => str.repeat(numberOfTimes),

    // Or
    repeat: (str, numberOfTimes) => Array(numberOfTimes).join(str),

    nl2br: str => str.replace(new RegExp('\r?\n', 'g'), '<br>'),

    // In React
    // str.split('\n').map((item, index) => <React.Fragment key={index}>{item}<br /></React.Fragment>)

    // Replace spaces, tabs and new line characters
    replaceSpaces: str => str.replace(/\s\s+/g, ' '),

    // Only replace spaces
    replaceOnlySpaces: str => str.replace(/  +/g, ' '),

    // replaceSpaces('this\n   is     \ta    \rmessage') === 'this is a message'

    reverse: str => str.split('').reverse().join(''),

    // Or
    reverse: str => [...str].reverse().join(''),

    // Or
    reverse: str => str.split('').reduce((rev, char) => `${char}${rev}`, ''),

    // Or
    reverse: str => (str === '') ? '' : `${reverse(str.substr(1))}${str.charAt(0)}`,

    // reverse('hello world') === 'dlrow olleh'

    uppercaseWords: str => str.split(' ').map(w => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join(' '),

    // Or
    uppercaseWords: str => str.replace(/^(.)|\s+(.)/g, c => c.toUpperCase())
    // uppercaseWords('hello world') === 'Hello World'

}