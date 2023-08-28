function toggle() {


    let btn = document.getElementsByClassName('button')[0];
    let text = document.getElementById('extra');
    // console.log(btn.textContent);


    
    if (btn.textContent === 'Less') {
        btn.textContent = 'More'
        text.style.display = 'none'
    } else {
        btn.textContent = 'Less'
        text.style.display = 'block'
    }
}