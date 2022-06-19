function shopping(input){
 
    let videoCardPrice = 250
     
    let budget = Number(input[0])
    let videoCardCount = Number(input[1])
    let proccesorsCount = Number(input[2])
    let ramCount = Number(input[3])
     
    let videoCard = videoCardCount * videoCardPrice
    let proccesors = videoCard * 0.35 
    let ram = videoCard * 0.1
     
    let totalSum = videoCard + proccesors * proccesorsCount + ram * ramCount
    if (videoCard > proccesors) {
        totalSum *= 0.85
    }
     
    let difference = Math.abs(totalSum - budget)
    if (totalSum <= budget){
        console.log (`You have ${difference.toFixed(2)} leva left!`)
    } else {
    console.log (`Not enough money! You need ${difference.toFixed(2)} leva more!`)
    }

    }
    shopping(["900", "2", "1", "3"]);
shopping(["920.45", "3", "1", "1"]);