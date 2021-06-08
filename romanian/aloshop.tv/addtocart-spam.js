/*
*** run at https://aloshop.tv/client/cos-cumparaturi in console
*** how to use:
*** if it gives you an alert that "you went over 20 products" press "ok" or "yes"
*** put a product in your cart then in https://aloshop.tv/client/cos-cumparaturi press + on it, then run the script in the console

*** this can get laggy as the numbers go up
*/

// put the amout of products here
var o = 100;

/*
*** don’t change below
*/

$("div .c_plus").each(function (index) {
    $(this).on("click", function(event){
        event.preventDefault();
        var id = $(this).parent().attr('id');
        
        var i;
        for (i = 0; i < o; i++) {
            update_cant(id, 'plus');
        }
    });
});
