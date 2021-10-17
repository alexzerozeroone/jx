/*
	@name: autoResponse.js 0.1.3
    @author: alexzerozeroone
    @github: https://github.com/alexzerozeroone
*/

settings = {
    // use settings.enabled = !settings.enabled to disable/enable the script
    "enabled": true,

    // use settings.timeout = 0.5 to set the timeout in seconds
    "timeout": 0.5,

    // class name of the button
    "buttonClass": ".btn-answers",
};

setInterval(() => { 
    if (settings.enabled) {
        $(settings["buttonClass"]).click();
        gistIndex += 1;
        refreshUI();
    }
}, settings.timeout * 1e3);
