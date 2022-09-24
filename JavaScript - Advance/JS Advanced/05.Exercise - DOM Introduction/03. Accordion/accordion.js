function toggle() {
    let btn = document.querySelector('.button');
    let extra = document.getElementById('extra');

    btn.textContent =
        btn.textContent == 'More'
            ? (btn.textContent = 'Less')
            : (btn.textContent = 'More');
    // if (btn.textContent === 'More') {
    //     btn.textContent = 'Less';
    // } else {
    //     btn.textContent = 'More';
    // }

    extra.style.display =
        extra.style.display == 'none' || extra.style.display == ' '
            ? (extra.style.display = 'block')
            : (extra.style.display = 'none');

    // if (extra.style.display == 'none' || extra.style.display == ' ') {
    //     extra = extra.style.display = 'block';
    // } else {
    //     extra = extra.style.display = 'none';
    // }
}