/*
	what's really happenning here:
	
	we are inserting jquery from unpkg.com (default) through document.createElement so we can easily manipulate DOM elements
	we are selecting the text box rather specifically so we don't have to deal with arrays
	the selection is as follows:
	div#contenteditable-root.style-scope.yt-formatted-string
	^			^			^			^
	element		id			class		class
	
	after the selection, we set the text to "hello world"
	after that, we repeat the selection but this time finding the comment button
	we then remove the attribute "disabled" and add empty attribute enabled so the button is clickable
	we then click it, and we have commented
*/

settings = {
    "comment": "hello world", // comment content
    "spam": 0, // set to anything besides 0 for spamming (consider ratelimting before doing so)

    "jquerySource": "https://unpkg.com/jquery" // https://unpkg.com/jquery is the default jquery source
}

// inject jquery
s=document.createElement("script"),s.src=settings["jquerySource"],document.body.appendChild(s);

for (i = 0; i < settings["spam"]; i++) {
    // select text box
    $("div#contenteditable-root.style-scope.yt-formatted-string")
    // set content
    .text("hello world");

    // select comment button
    $("tp-yt-paper-button#button.style-scope.ytd-button-renderer.style-primary.size-default")
    // remove disabled attribute
    .removeAttr("disabled")
    // add empty enabled attribute
    .attr("enabled", "")
    // send comment
    .click();
}