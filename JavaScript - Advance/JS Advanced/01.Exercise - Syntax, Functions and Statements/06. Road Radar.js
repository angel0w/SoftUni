function roadRadar(speed, area) {
    // const motorwayLimit = 130;
    // const interstateLimit = 90;
    // const cityLimit = 50;
    // const residentialLimit = 20;

    // let diff = 0;
    // let status = '';
    // // motorway limit is 130 km/h
    // if (area === 'motorway') {
    //     if (speed > 130) {
    //         diff = Math.abs(motorwayLimit - speed);
    //         if (diff <= 20) {
    //             status = 'speeding';
    //         } else if (diff <= 40) {
    //             status = 'excessive speeding';
    //         } else {
    //             status = 'reckless driving';
    //         }
    //         console.log(
    //             `The speed is ${diff} km/h faster than the allowed speed of ${motorwayLimit} - ${status}`
    //         );
    //     } else {
    //         console.log(`Driving ${speed} km/h in a ${motorwayLimit} zone`);
    //     }
    //     // ·  interstate limit is 90 km/h
    // } else if (area === 'interstate') {
    //     if (speed > 90) {
    //         diff = Math.abs(interstateLimit - speed);
    //         if (diff <= 20) {
    //             status = 'speeding';
    //         } else if (diff <= 40) {
    //             status = 'excessive speeding';
    //         } else {
    //             status = 'reckless driving';
    //         }
    //         console.log(
    //             `The speed is ${diff} km/h faster than the allowed speed of ${interstateLimit} - ${status}`
    //         );
    //     } else {
    //         console.log(`Driving ${speed} km/h in a ${interstateLimit} zone`);
    //     }

    //     // ·  city limit 50 km/h
    // } else if (area === 'city') {
    //     if (speed > cityLimit) {
    //         diff = Math.abs(cityLimit - speed);
    //         if (diff <= 20) {
    //             status = 'speeding';
    //         } else if (diff <= 40) {
    //             status = 'excessive speeding';
    //         } else {
    //             status = 'reckless driving';
    //         }
    //         console.log(
    //             `The speed is ${diff} km/h faster than the allowed speed of ${cityLimit} - ${status}`
    //         );
    //     } else {
    //         console.log(`Driving ${speed} km/h in a ${cityLimit} zone`);
    //     }

    //     // ·  residential area, the limit is 20 km/h
    // } else if (area === 'residential') {
    //     if (speed > residentialLimit) {
    //         diff = Math.abs(residentialLimit - speed);
    //         if (diff <= 20) {
    //             status = 'speeding';
    //         } else if (diff <= 40) {
    //             status = 'excessive speeding';
    //         } else {
    //             status = 'reckless driving';
    //         }
    //         console.log(
    //             `The speed is ${diff} km/h faster than the allowed speed of ${residentialLimit} - ${status}`
    //         );
    //     } else {
    //         console.log(`Driving ${speed} km/h in a ${residentialLimit} zone`);
    //     }
    // }

    let speedLimit = 0;
    let status;
    switch (area) {
        case 'motorway':
            speedLimit = 130;
            break;
        case 'interstate':
            speedLimit = 90;
            break;
        case 'city':
            speedLimit = 50;
            break;
        case 'residential':
            speedLimit = 20;
            break;
    }

    if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
        let diff = Math.abs(speed - speedLimit);
        if (diff > 0 && diff <= 20) {
            status = 'speeding';
        } else if (diff > 20 && diff <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        console.log(
            `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`
        );
    }
}
roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');
