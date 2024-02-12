'use strict';
let message = "";
function getShippingCost(country) {
    switch (country) {
        case "China":
            message = "Shipping to China will cost 100 credits";
            break;
        case "Chile":
            message = "Shipping to Chile will cost 250 credits";
            break;
        case "Australia":
            message = "Shipping to Australia will cost 170 credits";
            break;
        case "Jamaica":
            message = "Shipping to Jamaica will cost 120 credits";
            break;
        default:
            message = "Sorry, there is no delivery to your country";
            break;
    }

    return (message);
}

getShippingCost("Australia");
getShippingCost("Germany");
getShippingCost("China");
getShippingCost("Chile");
getShippingCost("Jamaica");
getShippingCost("Sweden");



