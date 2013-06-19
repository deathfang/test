$(function(){
    var t;
    var currId = 0;
	var rotateInProgress = false;
    $('.switch-dot li').each(function(){
		var $switchDot = $(this);
		$switchDot.click(function(event){
			var glideName = ($switchDot.parent().attr('class')).slice(11);
			var clickId = this.className.charAt(4) - 1;
			var currId = $('#' + glideName).data('currId');
			var btnPrev = $switchDot.parent().prev().children();
			var btnNext = $switchDot.parent().prev().prev().children();
			
			if (!currId) {
				currId = 0;
			}
			
			if (clickId != currId) {
				if (!rotateInProgress) {
					rotateInProgress = true;
					$('#' + glideName + ' ul').eq(currId).animate({
						'left': + clickId > currId ? '-605' : '605'
					}, 'normalt').end().eq(clickId).animate({
						'left': '0'
					}, 'normalt',function(){
						rotateInProgress = false;
						$('ul[class*=' + glideName + ']').children().removeClass('current');
						$switchDot.addClass('current');
						$('#' + glideName).data('currId', clickId);
					});
				}
			}
			else {
				return false;
			}

			if (clickId == 0) {
				btnPrev.addClass("dis")
			}
			else {
				btnPrev.removeClass();
			}
			
			if (clickId == 3) {
				btnNext.addClass('dis');
			}
			else {
				btnNext.removeClass();
			}
			
			event.preventDefault();
		})
	});
    
    $('.btn-next').click(function(event){
        var glideName = ($(this).next().next().attr('class')).slice(11);
        var currId = $('#' + glideName).data('currId');
        if (!currId) {
            currId = 0;
        }
        var clickId = currId + 1;
        
        if (currId < 3) {
			if (!rotateInProgress) {
				rotateInProgress = true;
				$('#' + glideName + ' ul').eq(currId).animate({
					'left': '-605'
				}, 'normalt').end().eq(clickId).animate({
					'left': '0'
				}, 'normalt',function(){
				rotateInProgress = false;
				dotChange(glideName, clickId, currId);
				$('#' + glideName).data('currId', clickId);
				});
            }
			$(this).next().children().removeClass();
		}
        if (currId == 2) {
            $('a', this).addClass('dis');
        }
        event.preventDefault();
    });
    
    $('.btn-prev').click(function(event){
       var glideName = ($(this).next().attr('class')).slice(11);
        var currId = $('#' + glideName).data('currId');
        if (!currId) {
            currId = 0;
        }
        var clickId = currId - 1;
        
        if (currId > 0) {
			if (!rotateInProgress) {
				rotateInProgress = true;
				$('#' + glideName + ' ul').eq(currId).animate({
					'left': '605'
				}, 'normalt').end().eq(clickId).animate({
					'left': '0'
				}, 'normalt',function(){
				rotateInProgress = false;
				dotChange(glideName, clickId, currId);
				$('#' + glideName).data('currId', clickId);
				});
            }
			$(this).prev().children().removeClass();
		}
        if (currId == 1) {
            $('a', this).addClass('dis');
        }
        event.preventDefault();
    });
    
    function dotChange(glideName, clickId, currId){
        $('ul[class*=' + glideName + ']').children().eq(clickId).addClass('current').end().eq(currId).removeClass('current');
    };

    $('.img_list li').hover(function(){
        if (t) {
            clearTimeout(t);
        }
        var that = this;
        t = setTimeout(function(){
            var detailFrame = $('.detail-frame', that).html();
            var thisX = $('img', that).offset().left;
            var thisY = $('img', that).offset().top;
            var ml = 119;
            $('body').append('<div class="detail-tip shadow-right"></div>');
            $('.detail-tip').html(detailFrame).append('<span class="arrow-left"></span>').css({left:thisX + ml,top:thisY - 2});
        }, 200);
    }, function(){
        if (t) {
            clearTimeout(t);
        }
        $('.detail-tip').remove();
    });
	
	var $container = $("<div id='character'></div").prependTo($(".guide"));
	$("<h2></h2>").html("人气角色&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;&middot;&nbsp;").insertBefore($container);
	var fadeHeight = $container.height() / 8;
	for (var yPos =0;yPos < fadeHeight; yPos += 2) {
		$("<div></div>").css({opacity:yPos / fadeHeight ,top:$container.height() - fadeHeight + yPos - 5,left:1})
							.addClass("fade-slice").appendTo($container);
	};
	var $loadingIndicator = $("<img />").attr({'src': 'images/loading.gif', 'alt': 'Loading. Please wait.'})
														.addClass("character-wait").appendTo($container);
	var $loadingImg = $loadingIndicator.clone();
	$.getJSON('b.json',function(data){
		$loadingIndicator.remove();
		$.each(data, function(index, headline) {
			var html = '<div class="headline">';
			html += '<h4>' + headline['title'] + '</h4>'
			html += '<a href="' + headline['url'] + '">';
			html += '<img src="characters/' + headline['src'] + '" ';
			html += 'alt="' + headline['alt'] + '" /></a></div>';
			$container.append(html);
		});
			var $headline = $("div.headline");
			$headline.children("h4").hide();
			var $bigPreview = $("<span></span>").text("查看大图").addClass("big-preview").appendTo($headline).hide();
			var $shadowText = $("<span></span>").addClass("shadow-text").appendTo($headline).hide();
			$headline.eq(0).append($loadingImg);
			var currentHeadline = 0,oldHeadline = 0;
			var hiddenPosition = $container.height() + 10;
			$headline.eq(currentHeadline).css("top",0);
			var headlineCount = $headline.length;
			var pause;
			var rotateInProgress = false;
			var headlineRotate = function(){
				if (!rotateInProgress) {
					if(document.getElementById("superbox-overlay").style.display == "none") {
						rotateInProgress = true;
						pause = false;
						currentHeadline = (oldHeadline + 1) % headlineCount;
						$headline.eq(oldHeadline).animate({top:-hiddenPosition},'slow',function(){$(this).css("top",hiddenPosition)});
						$headline.eq(currentHeadline).animate({top:0},'slow',function(){
							rotateInProgress = false;
							if (!pause) pause = setTimeout(headlineRotate,3000);
						});
						oldHeadline = currentHeadline;
					}
					else {pause = setTimeout(headlineRotate,3000);}
				}
			};
			if ($("div.headline a img")[0].complete) {
				$headline.eq(0).find(".character-wait").remove();
				if (!pause) pause = setTimeout(headlineRotate,5000)
			}
			else {
				$("div.headline a img:lt(5)").bind("load",function(){
					$headline.eq(0).find(".character-wait").remove();
					if (!pause) pause = setTimeout(headlineRotate,5000)
				});	
			}
			var $tooltip = $('<div id="tooltip"></div>').appendTo('body');
			var positionTooltip = function(event){var posX = event.pageX;var posY = event.pageY + 20;$tooltip.css({top:posY,left:posX})};
			var showTooltip = function(event){
				var characterName = $(this).children("h4").text();
				$tooltip.text(characterName).show();
				positionTooltip(event)
			};
			var hideTooltip = function(){$tooltip.hide()};
			$headline.hover(function(){
				clearTimeout(pause);pause = false;
				$bigPreview.add($shadowText).show();
				},function(){
					if (!pause)  pause = setTimeout(headlineRotate,250);
					$bigPreview.add($shadowText).hide();
				}
			).hover(showTooltip,hideTooltip).mousemove(positionTooltip);
			var $galleryButton = $("div.headline a").attr("rel","superbox[gallery][characters]");
			$(".piclist a").attr("rel","superbox[gallery][album]").add($galleryButton).one("click",function(e){
				e.preventDefault()
			});
			$.superbox();
			$bigPreview.click(function(){$(this).prev().click()});

	});
	
	
});


