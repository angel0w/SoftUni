function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', onMove);
    let output = document.getElementById('result');


        function onMove(event) {
            let position = event.offsetX;
            let gradientWidth = event.target.clientWidth;
            let result = Math.floor((position / gradientWidth) * 100);
            output.textContent = `${result}%`
        }
}
