"use strict";

/**
 * @type {NodeListOf<Element>}
 *
 * all fields with mask
 */
const fieldMask = document.querySelectorAll('[data-mask]');

/**
 * @param string
 * @param pattern
 * @param mask
 * @return {string}
 */
function formattingData(string, pattern, mask) {

    const stringReplace = string.replace(/[^0-9]/g, '');
    const chars = stringReplace.split('');

    let count = 0;
    let formatted = '';

    for (let i = 0; i < pattern.length; i++) {

        const curPattern = pattern[i];

        if (chars[count]) {

            if (/\*/.test(curPattern)) {
                formatted += chars[count];
                count++;
            } else {
                formatted += curPattern;
            }

        } else if (mask) {

            if (mask.split('')[i]) {
                formatted += mask.split('')[i];
            }
        }
    }

    return formatted;
}

/**
 *
 * @param elem
 */
function format(elem) {

    const value = elem.value;
    const pattern = elem.getAttribute('data-format');
    const mask = elem.getAttribute('data-mask');
    const getValue = formattingData(value, pattern);

    /**
     * @type {string}
     * writes the received value
     */
    elem.value = formattingData(value, pattern, mask);

    /**
     * sets the start and end positions of the current text selection
     */
    elem.setSelectionRange(getValue.length, getValue.length);
}

/**
 * listen to events of all fields
 */
fieldMask.forEach(function (e) {

    /**
     * listening to focus event
     * sets the value
     */
    e.addEventListener('focus', function () {
        e.value = '+7';
    });

    /**
     * listening to input event
     * starts formatting
     */
    e.addEventListener('input', function () {
        format(e);
    });
});