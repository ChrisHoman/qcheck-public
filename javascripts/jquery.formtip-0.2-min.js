/**
 * JS Formtip
 *
 * This software is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 *
 * @copyright Copyright (c) 2010, ecto.lt
 * @author    Benas ValanÄ�ius <benas@ecto.lt>
 * @url       http://ecto.lt
 * @version   0.2
 *
 * $Id: jquery.formtip.js 599 2010-06-03 07:28:32Z noen $
 */

(function($){
$.fn.formtip = function(options)
{
    var defaults = {
        message    : false,
        handler    : true, // Jei sitas uzsetintas tada pozicija skaiciuojama pagal sita
		toolTipCss : 'uitooltip',
        marginTop  : -90,
        marginLeft : 12,
        maxOpacity : 0.9,
        template   : '<div id="{$elementId}" class="{$uitooltip}">{$message}<div class="ui-tooltip-arrow"><!-- --></div></div>',
        onHover	   : false,
        
        // System
        itemId     : false
    };

    var idGenerator = function()
    {
        var chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
        var code = '';
        for(x = 0; x < 5; x++)
        {
            i = Math.floor(Math.random() * chars.length);
            code += chars.charAt(i);
        }
        return code;
    };

    var options = $.extend(defaults, options);

    return this.each(function()
    {
        var input  = $(this);
        
        if(!options.itemId) {
            if(options.handler) {
                var obj = $(options.handler);
            	options.template = options.template.replace('div', 'span');
            } else {
                var obj = $(this);
            }

            options.itemId = 'formTip_'+ idGenerator();

            options.template = options.template.replace('{$elementId}', options.itemId);
            options.template = options.template.replace('{$uitooltip}', options.toolTipCss);
            options.template = options.template.replace('{$message}', options.message);

            $(options.template).insertAfter(obj);

            var pos = obj.offset();

            if(options.handler) {
	            $('#'+ options.itemId).hide().css({
	                position   : 'relative',
	                marginTop  : options.marginTop,
	                marginLeft : options.marginLeft
	            });
            } else {
            	$('#'+ options.itemId).hide().css({
	                position   : 'absolute',
	                marginTop  : -obj.outerHeight(true) + options.marginTop,
	                marginLeft : obj.outerWidth(true) + options.marginLeft
	            });
            }
            
            if(options.handler)
            {
                obj.hover(function()
                {
                    $('.ui-tooltip-focus:visible').stop().fadeTo(200, 0);
                    $('#'+ options.itemId).stop().fadeTo(300, options.maxOpacity);
                },
                function()
                {
                    $('.ui-tooltip-focus:visible').stop().fadeTo(200, options.maxOpacity);
                    if(!input.hasClass('ui-input-focus'))
                    {
                        $('#'+ options.itemId).stop().fadeTo(200, 0, function(){
                            $(this).hide();
                        });
                    }
                });
            }
        }
        
        if(options.onHover) {
        	input.hover(function()
                {
	                $(this).addClass('ui-input-focus');
	                $('#'+ options.itemId).addClass('ui-tooltip-focus').stop().fadeTo(300, options.maxOpacity);
                },
                function()
                {
                    $(this).removeClass('ui-input-focus');
                    $('#'+ options.itemId).removeClass('ui-tooltip-focus').stop().fadeTo(200, 0, function(){
                        $(this).hide();
                    });
                });
        }

        input.focus(function(){
            $(this).addClass('ui-input-focus');
            $('#'+ options.itemId).addClass('ui-tooltip-focus').stop().fadeTo(300, options.maxOpacity);
        });

        input.blur(function(){
            $(this).removeClass('ui-input-focus');
            $('#'+ options.itemId).removeClass('ui-tooltip-focus').stop().fadeTo(200, 0, function(){
                $(this).hide();
            });
        });
    });
};
})(jQuery);
