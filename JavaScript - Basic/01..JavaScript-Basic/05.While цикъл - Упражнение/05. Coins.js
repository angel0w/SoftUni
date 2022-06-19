function coins (input){
    let resto = (input[0]);
    let converted = parseInt(resto * 100);
    let coins = 0;

        while ( converted > 0){
            if (converted - 200 >= 0) {
                coins++;
                converted -=200 
            } else if (converted - 100 >= 0){
                coins++;
                converted -=100;
            } else if (converted - 50 >=0){
                coins++;
                converted -=50;
            } else if ( converted -20 >= 0){
                coins++;
                converted -=20;

            } else if ( converted -10 >= 0){
                coins++;
                converted -=10;
            } else if (converted -5 >= 0){
                coins++;
                converted -=5;

            }else if ( converted - 2 >= 0){
                coins++;
                converted -=2;
            } else if ( converted - 1 >= 0) {
                coins++;
                converted -=1;
            }
      
        }
        console.log(coins)
    }
coins(["1.23"])