function attachEventsListeners() {
    let btnConvert = document.getElementById('convert');
    btnConvert.addEventListener('click', onClick);

    let metrickUnits = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    }

    function onClick(e) {
        let fromValue = document.getElementById('inputUnits').value;
        let toValue = document.getElementById('outputUnits').value;

        let inputDistance = Number(document.getElementById('inputDistance').value);
        let ouputDistanceEl = document.getElementById('outputDistance');

        let valueInMeters = inputDistance * metrickUnits[fromValue];
        let convertedValue = valueInMeters / metrickUnits[toValue];

        ouputDistanceEl.value = convertedValue;
    }
}