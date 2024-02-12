'use strict';

function checkForSpam(message) {
    const normalizedMessage = message.toLowerCase();
    const includesSale = normalizedMessage.includes("sale")
    const includesSpam = normalizedMessage.includes("spam");
    
    const isSpam = includesSale || includesSpam;
    
    return(isSpam);
}



checkForSpam("Latest technology news");
checkForSpam("JavaScript weekly newsletter");
checkForSpam("Get best sale offers now!");
checkForSpam("Amazing SalE, only tonight!");
checkForSpam("Trust me, this is not a spam message");
checkForSpam("Get rid of sPaM emails. Our book in on sale!");
checkForSpam("[SPAM] How to earn fast money?");

