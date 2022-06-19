function tradeCommissions(input) {
    const town = input[0];
    const sells = Number(input[1]);
    let commission = 0;

    switch (town) {
        case "Sofia":

            if ( sells <= 0){
                console.log("error");
            }else if(sells >= 0 && sells <= 500) {
                 commission = sells * 0.05;
            } else if ( sells > 500 && sells <= 1000){
                 commission = sells * 0.07;
            } else if ( sells > 1000 && sells <= 10000){
                 commission = sells * 0.08;
            } else if ( sells > 10000){
                 commission = sells * 0.12;
            } 
            break;

        case "Varna":
            if ( sells < 0){
                console.log("error");
            } else if(sells >= 0 && sells <= 500) {
                 commission = sells * 0.045;
            } else if ( sells > 500 && sells <= 1000){
                 commission = sells * 0.075;
            } else if ( sells > 1000 && sells <= 10000){
                 commission = sells * 0.10;
            } else if ( sells > 10000){
                commission = sells * 0.13;
            }break;

        case "Plovdiv":
            if ( sells < 0){
                console.log("error");
            } else if(sells >= 0 && sells <= 500) {
                commission = sells * 0.055;
            } else if ( sells > 500 && sells <= 1000){
                commission = sells * 0.08;
            } else if ( sells > 1000 && sells <= 10000){
                commission = sells * 0.12;
            } else if ( sells > 10000){
                commission = sells * 0.145;
            }break;
            }

    if (!(town === "Sofia" || town === "Varna" || town === "Plovdiv")){
            console.log("error");
    }

    if(commission != 0){
        console.log(commission.toFixed(2));
         }

}
tradeCommissions(["Sofia", "1500"]);
tradeCommissions(["Plovdiv", "499.99"]);
tradeCommissions(["Varna", "3874.50"]);
tradeCommissions(["Kaspichan", "-50"]);
