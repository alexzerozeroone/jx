settings = {
    /* 
        use
            settings.enabled = !settings.enabled 
        to toggle on and off 
    */
    enabled: true,

    /*
        use 
            settings.timeout = 0.5
        to set the timeout in seconds
    */
    timeout: 0.5,
};

setInterval(() => { 
    if (settings.enabled) {
        $(".btn-answers").click();
        gistIndex += 1;
        refreshUI();
    }
}, settings.timeout * 1e3)
