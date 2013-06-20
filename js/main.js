/* =========================================================
 ******************Img auto margin-top***********************
 ============================================================ */
function auto_margin_t(){

    var imgs = jQuery('a.auto-margin');
    var img_height;
    var div_height;

    jQuery.each( imgs, function( index, value){
        img_height = parseInt(jQuery(this).height());

        div_height = parseInt(jQuery(this).parent().height());

        number = div_height - img_height;
        number = parseInt( number / 2);

        jQuery(this).css('margin-top', number);
    });

    var imgs_service = jQuery('i.auto-margin-top');
    var img_service_height;
    var div_service_height;

    jQuery.each( imgs_service, function( index, value){
        img_service_height = parseInt(jQuery(this).height());

        div_service_height = parseInt(jQuery(this).parent().height());

        number = div_service_height - img_service_height;
        number = parseInt( number / 2);

        jQuery(this).css('margin-top', number);
    });
}

jQuery(document).ready(function(){
    auto_margin_t();
});
jQuery(window).resize(function() {
    auto_margin_t();
});