// Sticky v1.0 by Daniel Raftery
// http://thrivingkings.com/sticky
//
// http://twitter.com/ThrivingKings

(function( $ )
	{
	
	// Using it without an object
	$.sticky = function(note, options, callback) { return $.fn.sticky(note, options, callback); };
	
	$.fn.sticky = function(note, options, callback) 
		{
		// Default settings
		var position = 'top-left'; // top-left, top-right, bottom-left, or bottom-right
		
		var settings =
			{
			'speed'			:	2000,	 // animations: fast, slow, or integer
			'duplicates'	:	false,  // true or false
			'autoclose'		:	4500  // integer or false
			};
		
		// Passing in the object instead of specifying a note
		if(!note)
			{ note = this.html(); }
		
		if(options)
			{ $.extend(settings, options); }
		
		// Variables
		var display = true;
		var duplicate = 'no';
		
		// Somewhat of a unique ID
		var uniqID = Math.floor(Math.random()*99999);
		
		// Handling duplicate notes and IDs
		$('.sticky-note').each(function()
			{
			if($(this).html() == note && $(this).is(':visible'))
				{ 
				duplicate = 'yes';
				if(!settings['duplicates'])
					{ display = false; }
				}
			if($(this).attr('id')==uniqID)
				{ uniqID = Math.floor(Math.random()*9999999); }
			});
		
		// Make sure the sticky queue exists
		if(!$('#recent-activity').find('.sticky-queue').html())
			{ $('#recent-activity').append('<div class="sticky-queue ' + position + '"></div>'); }
		
		// Can it be displayed?
		if(display)
			{
			// Building and inserting sticky note
			$('.sticky-queue').prepend('<div class="sticky border-' + position + '" id="' + uniqID + '"></div>');
			$('#' + uniqID).append('<img src="../img/close.png" class="sticky-close" rel="' + uniqID + '" title="Close" />');
			$('#' + uniqID).append('<div class="sticky-note" rel="' + uniqID + '">' + note + '</div>');
			
			// Smoother animation
			var height = $('#' + uniqID).height();
			$('#' + uniqID).css('height', height);
			
			$('#' + uniqID).slideDown(settings['speed']);
			display = true;
			}
		
		// Listeners
		$('.sticky').ready(function()
			{
			// If 'autoclose' is enabled, set a timer to close the sticky
			if(settings['autoclose'])
				{ $('#' + uniqID).delay(settings['autoclose']).fadeOut(settings['speed']); }
			});
		// Closing a sticky
		$('.sticky-close').click(function()
			{ $('#' + $(this).attr('rel')).dequeue().fadeOut(settings['speed']); });
		
		
		// Callback data
		var response = 
			{
			'id'		:	uniqID,
			'duplicate'	:	duplicate,
			'displayed'	: 	display,
			'position'	:	position
			}
		
		// Callback function?
		if(callback)
			{ callback(response); }
		else
			{ return(response); }
		
		}
	})( jQuery );
	
	var UserName = ["حماد","حصة","إيهاب","مروة","رقية","وليد","هاني","أمية","حبشي","أرواح","شادي","هالة","غزل","رياض","أصالة","رشدي","أبية","باسل","حجازي","رابح","ليلى","برلنتي","ثواب","عبد الرحمن","براك","عبد الإله","أسامة","الوليد","سامر","معز","وعد","ألطاف","عامر","حبيبة","أماني","إسعاد","دعد","بدري","آيات","سالي","عزيز","حاتم","جعيل","سعد","حميدة","دانة","تيجان","برعم","سماهر","براح","أحمد","بدوي","حمادة","أسيل","تراث","رجاء","ليث","رحاب","ثراء","النعمان","خاتون","جلاء","توسل","حسيب","فوزية","جهام","راشد","لؤي","هنادي","رزان","فريال","حبيب","تسبيح","أصيلة","إشفاق","خيرية","عبد الله","تحية","سلطان","ربى","حميدو","هدى","ماجد","ختام","بينة","غسان","شمائل","قيس","خلود","مريم","فاروق","طارق","عبيدة","شذى","بنفسج","صفوان","شيماء","بهيجة","رمزية","خلدون","أسمر","نغم","جاسم","ضرغام","منى","بسام","فيحاء","رشا","معتصم","أمنية","عفاف","صابر","عصمت","رؤى","فاطمة","بريهان","هند","بلبلة","مرام","إنعام","سالم","راوية","برئ","علاء","نرمين","عادل","جليل","علي","حنظلة","تيسير","حجي","بشامة","حسين","إشراق","بتلاء","أسمى","تركية","بنانة","جميلة","حيدر","أبي","عروة","رانية","تقاء","ابتسام","خولة","بكري","بيسان","عبلة","بدر","عدنان","بادي","سهى","بيداء","سارة","ولاء","حسنين","توحيدة","حمزة","براق","تهامة","حجاج","محمد نور","فدوى","نزار","جهراء","إنصاف","آمر","مسرة","براعم","بنان","غازي","أنيسة","ثائرة","أسد","إسمهان","عاتكة","هديل","أليفة","حنفي","أحنف","بشير","خالد","طه","إسراء","هبة","عبد الحميد","أرجوان","هيثم","كمال","أفراح","رمضان","قتيبة","مزنة","حمدان","المثنى","تحفة","خازم","محاسن","دانية","حمدي","ربيع","غيداء","غياث","عثمان","درية","رضا","جاهد","كوثر","تسنيم","تامر","فتحية","رضوان","تي","فاتن","تذكار","هواش","ثابتة","شادية","إمام","ميساء","نوفل","حداد","سامي","إناس","أفنان","برهان","سهيل","نورا","جيهان","أكرم","بهاء","عبير","نبيلة","زكية","سهير","أريج","بيان","سرحان","بريئة","صياح","نجود","أريحا","إفتكار","ماجدة","معاذ","الأخضر","أيسر","حنبل","طلال","بوران","مصعب","نديم","إبتهال","مازن","رامه","مهند","ميادة","هزاع","بلال","أشواق","أمينة","إياد","كنعان","رهام","أشرف","ساري","فواز","لبنى","زياد","توفيقة","عمار","ياسر","حسون","مشعل","داوود","بندر","تلال","جمال","شكيب","حلا","بريكة","جويرية","ندى","حسام","أميرة","حوراء","براء","أفكار","برهوم","أمة الله","رضوى","بكر","أسرار","بسيم","مصطفى","أزهر","لؤلؤة","نهى","نادية","مها","بصيرة","آمال","تسامح","دعاء","وداد","جواد","زمردة","دريد","ميسون","رسول","باشر","بهية","فادي","باهر","جمانة","إيناس","نعمان","انجي","عنود","نذير","سناء","ديمة","بشرى","جمعة","مي","مطلق","خيري","إنتصار","كايد","وائل","سلوى","حلمي","مؤيد","ريما","مشاري","علا","ذكرى","أنصاري","بيضاء","تيجاني","مأمون","تركي","روعة","مرهف","صلاح","هيفاء","حسان","ريم","ثنيان","فهد","جاسر","حاكمة","أمين","مناف","صابرين","غادة","راغدة","سمر","أوس","تماضر","بديعة","هشام","جعيفر","صبا","براءة","محمد","بطل","آمنة","تمام","معاوية","إيثار","نوال","رهف","عزة","نوفة","يامن","عبد المعين","قتادة","حياة","روضة","بسطام","دلال","نشوى","حفيظ","زاهد","رفيف","جورية","وسام","ممدوح","أسيمة","خواطر","بجاد","جوهري","أسوة","إيناس","زينب","أنور","جلال","ألحان","سمية","مسعود","قصي","جحا","لقمان","بنداري","نابغة","أيمن","فهمية","زايد","قحطان","نواف","منال","نايف","فراس","ثناء","سحر","هلال","زهران","بارعة","يمنى","لمى","حسناء","حذيفه","تيماء","حيدرة","رامية","خميس","بدوية","حنان","تهاني","شهاب","جندل","جبير","تودد","ناصر","منيرة","عايد","تقوى","هلا","حمود","سمير","بلبل","إلهام","تهنيد","ضاحي","أسلية","خويلد","مرح","خديجة","حمودة","وضاح","خطاب"];
	var CountryFlags = [
		"img/cf/Saudi-Arabia.png",
		"img/cf/Algeria.png",
		"img/cf/Egypt.png",
		"img/cf/Yemen.png",
		"img/cf/Saudi-Arabia.png",
		"img/cf/Israel.png",
		"img/cf/Morocco.png",
		"img/cf/Saudi-Arabia.png",
		"img/cf/Spain.png",
		"img/cf/UK.png",
		"img/cf/Saudi-Arabia.png",
		"img/cf/US.png",
		"img/cf/Germany.png",
		"img/cf/Saudi-Arabia.png",
		"img/cf/Saudi-Arabia.png",
		"img/cf/France.png",
		"img/cf/Canada.png",
		"img/cf/Italy.png",
		"img/cf/Saudi-Arabia.png",
		"img/cf/Jordan.png",
		"img/cf/Tunisia.png",
		"img/cf/Saudi-Arabia.png",
		"img/cf/Kuwait.png",
		"img/cf/Lebanon.png",
		"img/cf/Bahrain.png",
		"img/cf/Qatar.png",
		"img/cf/Afghanistan.png",
		"img/cf/Iraq.png",
		"img/cf/Oman.png",
		"img/cf/Turkey.png",
		"img/cf/Saudi-Arabia.png",
		"img/cf/United-Arab-Emirates.png",
	];
	var Platforms =["<span class='platfrom-append'></span> Android","<span class='platfrom-append'></span> iOS"];	
	var FUTresources =["<span class='activity-futcoins'>1.000.000 BP</span><span class='activity-futpoints'>100.000 UC</span>","<span class='activity-futcoins'>800.000 BP</span><span class='activity-futpoints'>80.000 UC</span>","<span class='activity-futcoins'>600.000 BP</span><span class='activity-futpoints'>100.000 UC</span>","<span class='activity-futcoins'>800.000 BP</span><span class='activity-futpoints'>100.000 UC</span>","<span class='activity-futcoins'>600.000 BP</span><span class='activity-futpoints'>80.000 UC</span>", "<span class='activity-futcoins'>600.000 BP</span><span class='activity-futpoints'>60.000 UC</span>", "<span class='activity-futcoins'>1.000.000 BP</span><span class='activity-futpoints'>100.000 UC</span>", "<span class='activity-futcoins'>400.000 BP</span><span class='activity-futpoints'>80.000 UC</span>"];	
	$(document).ready(function() {
   
 
	$.sticky('<div class="recent-activity-tab"><div class="recent-activity-user-wrapper"><img class="activity-flag-img" src="'+random_flag()+'"/><span class="activity-username">' + random_username() +'</span></div><span class="activity-platform">'+random_platform() +'</span><div class="activity-generated-amount">'+random_futresource() +'</div></div>');
	var call_recent_activity_tab = function() {
		$.sticky('<div class="recent-activity-tab"><div class="recent-activity-user-wrapper"><img class="activity-flag-img" src="'+random_flag()+'"/><span class="activity-username">' + random_username() +'</span></div><span class="activity-platform">'+random_platform() +'</span><div class="activity-generated-amount">'+random_futresource() +'</div></div>');
	}
	setInterval(call_recent_activity_tab, 2500);
	var call_recent_activity_tab = function() {
		$.sticky('<div class="recent-activity-tab"><div class="recent-activity-user-wrapper"><img class="activity-flag-img" src="'+random_flag()+'"/><span class="activity-username">' + random_username() +'</span></div><span class="activity-platform">'+random_platform() +'</span><div class="activity-generated-amount">'+random_futresource() +'</div></div>');
	}
	setInterval(call_recent_activity_tab, 6500);
	var call_recent_activity_tab = function() {
		$.sticky('<div class="recent-activity-tab"><div class="recent-activity-user-wrapper"><img class="activity-flag-img" src="'+random_flag()+'"/><span class="activity-username">' + random_username() +'</span></div><span class="activity-platform">'+random_platform() +'</span><div class="activity-generated-amount">'+random_futresource() +'</div></div>');
	}
	
	function random_username()
	{
	 return UserName[rng(0,UserName['length']-1)];
	}
	function random_platform()
	{
	 return Platforms[rng(0,Platforms['length']-1)];
	}
	function random_flag()
	{
	 return CountryFlags[rng(0,CountryFlags['length']-1)];
	}
	function random_futresource()
	{
	 return FUTresources[rng(0,FUTresources['length']-1)];
	}
}); 
