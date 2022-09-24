function createAssemblyLine(params) {
    return {
        hasClima(car) {
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = () => {
                if (car.temp < car.tempSettings) {
                    car.temp++;
                } else if (car.temp > car.tempSettings) {
                    car.temp--;
                }
            };
        },
        hasAudio(car) {
            car.nowPlaying = function () {
                if (
                    this.currentTrack !== null &&
                    this.currentTrack !== undefined
                ) {
                    console.log(
                        `Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`
                    );
                }
            };
        },
        hasParktronic(car) {
            car.checkDistance = (distance) => {
                if (distance < 0.1) {
                    console.log('Beep! Beep! Beep!');
                } else if (0.1 <= distance && distance < 0.25) {
                    console.log('Beep! Beep!');
                } else if ((0.25 <= distance) & (distance < 0.5)) {
                    console.log('Beep!');
                }
            };
        },
    };
}
const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',

    model: 'Avensis',
};

assemblyLine.hasParktronic(myCar);

myCar.checkDistance(0.4);

myCar.checkDistance(0.2);
