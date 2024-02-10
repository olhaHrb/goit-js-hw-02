'use strict';

function checkForSpam(message) {
    const messageLower = message.toLowerCase();
    const includSale = messageLower.includes("sale")
    const includSpam = messageLower.includes("spam");
    if (includSale||includSpam) {
        console.log("true");
    } else {
        console.log("false");
    }
}

checkForSpam("Latest technology news");
checkForSpam("JavaScript weekly newsletter");
checkForSpam("Get best sale offers now!");
checkForSpam("Amazing SalE, only tonight!");
checkForSpam("Trust me, this is not a spam message");
checkForSpam("Get rid of sPaM emails. Our book in on sale!");
checkForSpam("[SPAM] How to earn fast money?");
