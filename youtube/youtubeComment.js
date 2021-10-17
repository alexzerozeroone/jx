/*
	@name: youtubeComment.js 0.2.2
    @author: alexzerozeroone
    @github: https://github.com/alexzerozeroone
*/

settings = {
    // set to anything besides 1 for spamming (consider ratelimting before doing so)
    "spam": 1,

    // https://unpkg.com/jquery is the default jquery source
    "jquerySource": "https://unpkg.com/jquery",

    // UI elements
    // only change text if the UI elements are the same as 2021's
    "youtube": {
        "textbox": {
            "element": "div#contenteditable-root.style-scope.yt-formatted-string",
            "text": "",
        },

        "button": {
            "element": "ytd-button-renderer#submit-button.style-scope.ytd-commentbox.style-primary.size-default",
            "toggleAttributes": ["enabled", "disabled"],
            "enabledValue": "",
        }
    }
}

// test for youtube link
if (/(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w-_]+)/g.test(window.location.href)) {
    console.log("On YouTube: true");

    // inject jquery
    s=document.createElement("script"),s.src=settings["jquerySource"],document.body.appendChild(s);

    for (i = 0; i < settings["spam"]; i++) {
        // select text box
        $(settings["youtube"]["textbox"]["element"])
        // set content
        .text(settings["youtube"]["textbox"]["text"]);

        // select comment button
        $(settings["youtube"]["button"]["element"])
        // remove disabled attribute
        .removeAttr(settings["youtube"]["button"]["toggleAttributes"][1])
        // add empty enabled attribute
        .attr(settings["youtube"]["button"]["toggleAttributes"][0], settings["youtube"]["button"]["enabledValue"])
        // send comment
        .click();
    }
} else {
    console.log("On YouTube: false");
    console.log("Quiting!");    
}