'use strict';

function checkForSpam(message) {
    const messageLower = message.toLowerCase();
    const includSale = messageLower.includes("sale")
    const includSpam = messageLower.includes("spam");
    if (includSale||includSpam) {
        return("true");
    } else {
        return("false");
    }
}


