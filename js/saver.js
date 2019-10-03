function saver(mode) {
    let gtime = $(".time");
    let se = $(".sec");
    let mi = $(".min");
    let ho = $(".hour");
    if (mode == 1) {
        gtime.css({ position: 'absolute' });
        gtime.css({ top: '80px' });
        gtime.css({ left: '80px' });
    } else {
        gtime.css({ position: 'fixed' });
        gtime.css({ top: '1123px;' });
        gtime.css({ left: '224px;' });

    }

}