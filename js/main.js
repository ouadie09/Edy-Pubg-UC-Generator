$(document).ready(function() {
	
	// Trigger Locker
	$('.buttonVerify').on('click', function() {
		og_load(); // OGADS Locker
	});
	
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 100);
	
	function progressBar(percent, $element) {
		var progressBarWidth = percent * $element.width() / 100;
		$element.find('div').animate({ width: progressBarWidth }, 500).html(percent + "%&nbsp;");
	}
	progressBar(20, $('#progressBar'));
		
	var select = $( "#futcoins-amount-wrapper" );
	var slider = $( "<div id='slider-futcoins'></div>" ).insertAfter( select ).slider({
		min: 200000,
		max: 1000000,
		value: 200000,
		range: "min",
		change: function(event, ui) { 
			var sliderValue = $( "#slider-futcoins" ).slider( "option", "value" );				
			$('#futcoins-amount').html(sliderValue);
			if(sliderValue == '200000') {
				progressBar(20, $('#progressBar'));
				$('#decrease-futcoins').addClass('btn-disabled');
				$('.max-amount-coins').fadeOut();
			}
			else if (sliderValue == '400000') {
				progressBar(40, $('#progressBar'));
				$('#decrease-futcoins').removeClass('btn-disabled');
			}
			else if (sliderValue == '600000') {
				progressBar(60, $('#progressBar'));
			}
			else if (sliderValue == '800000') {
				progressBar(80, $('#progressBar'));
				$('#increase-futcoins').removeClass('btn-disabled');
				$('.max-amount-coins').fadeOut();
			}
			else if (sliderValue == '1000000') {
				progressBar(100, $('#progressBar'));
				$('#increase-futcoins').addClass('btn-disabled');
				$('.max-amount-coins').fadeIn();
			}
		}        
	});	
	
	$('#increase-futcoins').click(function() {
	var sliderCurrentValue = $( "#slider-futcoins" ).slider( "option", "value" );
	  slider.slider( "value", sliderCurrentValue + 200000 );
	});

	$('#decrease-futcoins').click(function() {
	var sliderCurrentValue = $( "#slider-futcoins" ).slider( "option", "value" );
	  slider.slider( "value", sliderCurrentValue - 200000 );
	});

	function progressBarPoints(percent, $element) {
		var progressBarPointsWidth = percent * $element.width() / 100;
		$element.find('div').animate({ width: progressBarPointsWidth }, 500).html(percent + "%&nbsp;");
	}
	progressBarPoints(20, $('#progressBarPoints'));
	var selectPoints = $( "#futpoints-amount-wrapper" );
	var sliderPoints = $( "<div id='slider-futpoints'></div>" ).insertAfter( selectPoints ).slider({
		min: 20000,
		max: 100000,
		value: 20000,
		range: "min",
		change: function(event, ui) { 
				var sliderValuePoints = $( "#slider-futpoints" ).slider( "option", "value" );
				$('#futpoints-amount').html(sliderValuePoints);
					if(sliderValuePoints == '20000') {
						progressBarPoints(20, $('#progressBarPoints'));
						$('#decrease-futpoints').addClass('btn-disabled');
						$('.max-amount-points').fadeOut();
					}
					else if (sliderValuePoints == '40000') {
						progressBarPoints(40, $('#progressBarPoints'));
						$('#decrease-futpoints').removeClass('btn-disabled');
					}
					else if (sliderValuePoints == '60000') {
						progressBarPoints(60, $('#progressBarPoints'));
					}
					else if (sliderValuePoints == '80000') {
						progressBarPoints(80, $('#progressBarPoints'));
						$('#increase-futpoints').removeClass('btn-disabled');
						$('.max-amount-points').fadeOut();
					}
					else if (sliderValuePoints == '100000') {
						progressBarPoints(100, $('#progressBarPoints'));
						$('#increase-futpoints').addClass('btn-disabled');
						$('.max-amount-points').fadeIn();
					}
				}        
	});				

	$('#increase-futpoints').click(function() {
		var sliderCurrentPointsValue = $( "#slider-futpoints" ).slider( "option", "value" );
		sliderPoints.slider( "value", sliderCurrentPointsValue + 20000 );
	});

	$('#decrease-futpoints').click(function() {
		var sliderCurrentPointsValue = $( "#slider-futpoints" ).slider( "option", "value" );
		sliderPoints.slider( "value", sliderCurrentPointsValue - 20000 );
	});
	
	$('#first-step-button').click(function () {
		$('#account-information-wrapper').fadeIn(250);
		$('#close-account-information-wrapper').click(function () {
			$('#account-information-wrapper').fadeOut(100);
		});
	});
	
	function progressBarConsole(percent, $element) {
		var progressBarConsoleWidth = percent * $element.width() / 100;
		$element.find('div').animate({ width: progressBarConsoleWidth }, 500).html(percent + "%&nbsp;");
	}
	progressBarConsole(1, $('#progressBarConsole'));	

	function loading_step() {
		$('#account-information-wrapper').fadeOut(50);
		$('#resources-select-wrapper').fadeOut(500, function() {
			$('#processing-wrapper').fadeIn(500, function() {
				var $console_message_username_msg = $('#account-username').val();
				var $console_message_platform_msg = $('#account-platform').val();
				var $console_message_futcoins_msg = $('#slider-futcoins').slider("option", "value");   
				var $console_message_futpoints_msg = $('#slider-futpoints').slider("option", "value");
				var $console_message = $('.console-message');
				if ($(window).width() < 600) {
					window.scrollTo(0, $("#processing-wrapper").offset().top);
				}	
				setTimeout(function() {
					$('.starting-loading-wrapper').fadeIn();
					$console_message.text('جارٍي تحميل المعلومات ...');	
					progressBarConsole(3, $('#progressBarConsole'));			
				}, 0 );
				setTimeout(function() { 
					$console_message.text('تحليل المعلومات ...');	
					progressBarConsole(15, $('#progressBarConsole'));			
				}, 1000 );
				setTimeout(function() { 
					$console_message.text('جاري التحميل ...');	
					progressBarConsole(18, $('#progressBarConsole'));			
				}, 1800 );
				setTimeout(function() { 
					$console_message.html("البحث عن المستخدم <span class='console-message-connected-item'>" + $console_message_username_msg + "</span> ...");	
					progressBarConsole(22, $('#progressBarConsole'));			
				}, 3000 );
				setTimeout(function() { 
					$console_message.html("الاتصال بالمستخدم <span class='console-message-connected-item'>" + $console_message_username_msg + "</span> على جهاز <span class='console-message-connected-item'>" + $console_message_platform_msg + "</span>");	
					$('.starting-loading-wrapper').fadeOut(500, function() {
						$('.console-username-wrapper').fadeIn();
						$('.console-platform-wrapper').fadeIn(500);
					});		
					progressBarConsole(26, $('#progressBarConsole'));			
				}, 5000 );
				setTimeout(function() { 
					$console_message.html("تم الاتصال بنجاح بالمستخدم <span class='console-message-connected-item'>" + $console_message_username_msg + "</span>");
					$('#console-username-value').text($('#account-username').val());
					$('#console-platform-value').text($('#account-platform').val());
					$('#console-success-confirmation-username').fadeIn();
					$('#console-success-confirmation-platform').fadeIn();
					$(".console-message").addClass('pulse animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('pulse animated');
					});					
					progressBarConsole(30, $('#progressBarConsole'));			
				}, 8000 );
				setTimeout(function() { 
					$console_message.html("التحضير للشحن");	
					progressBarConsole(35, $('#progressBarConsole'));			
				}, 10000 );
				setTimeout(function() { 
					$console_message.html("شحن نقاط PB");	
					progressBarConsole(38, $('#progressBarConsole'));			
				}, 11000 );
				setTimeout(function() { 
					$console_message.html("تحضير <span class='console-message-connected-item'>" + $console_message_futcoins_msg + "</span> نقاط PB");
					$('.console-futcoins-wrapper').fadeIn(500, function() {
						var $console_futcoins_countto = $('#slider-futcoins').slider("option", "value");
						$('#console-futcoins-value').countTo({
							from: 0,
							to: $console_futcoins_countto,
							speed: 2500,
							refreshInterval: 10,
							formatter: function (value, options) {
							  return value.toFixed(options.decimals);
							}
						});
					});
					progressBarConsole(42, $('#progressBarConsole'));			
				}, 12500 );
				setTimeout(function() {
					$console_message.html("<span class='console-message-connected-item'>" + $console_message_futcoins_msg + "</span> <span class='console-message-success'>تم حجز النقاط بنجاح</span>");
					$('#console-success-confirmation-futcoins').fadeIn();
					$(".console-message").addClass('pulse animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('pulse animated');
					});
					progressBarConsole(55, $('#progressBarConsole'));			
				}, 16000 );
				setTimeout(function() { 
					$console_message.html(" شحن شدات UC");	
					progressBarConsole(58, $('#progressBarConsole'));			
				}, 18000 );
				setTimeout(function() { 
					$console_message.html("تحضير <span class='console-message-connected-item'>" + $console_message_futpoints_msg + "</span>  شدات UC");
					$('.console-futpoints-wrapper').fadeIn(500, function() {
						var $console_futpoints_countto = $('#slider-futpoints').slider("option", "value");
						$('#console-futpoints-value').countTo({
							from: 0,
							to: $console_futpoints_countto,
							speed: 2500,
							refreshInterval: 10,
							formatter: function (value, options) {
							    return value.toFixed(options.decimals);
							}
						});
					});
					progressBarConsole(62, $('#progressBarConsole'));			
				}, 19500 );
				setTimeout(function() { 
					$console_message.html("<span class='console-message-connected-item'>" + $console_message_futpoints_msg + "</span> <span class='console-message-success'>تم حجز الشدات بنجاح</span>");
					$('#console-success-confirmation-futpoints').fadeIn();
					$(".console-message").addClass('pulse animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('pulse animated');
					});
					progressBarConsole(74, $('#progressBarConsole'));			
				}, 23000 );
				setTimeout(function() { 
					$console_message.html("<span class='console-message-success'>النقاط والشدات جاهزة للإرسال</span>");	
					progressBarConsole(80, $('#progressBarConsole'));			
				}, 24900 );
				setTimeout(function() { 
					$console_message.html("الإستعداد لإرسال الباقة");	
					progressBarConsole(84, $('#progressBarConsole'));			
				}, 25900 );
				setTimeout(function() { 
					$console_message.html("تسجيل تفاصيل التحويل");	
					progressBarConsole(90, $('#progressBarConsole'));			
				}, 27000 );
				setTimeout(function() { 
					$console_message.html("التحقق من هوية المستخدم قبل الإرسال");	
					progressBarConsole(93, $('#progressBarConsole'));			
				}, 28000 );
				setTimeout(function() { 
					$console_message.html("<span class='console-message-error'>فشل في التحقق التلقائي</span>");	
					progressBarConsole(93, $('#progressBarConsole'));			
				}, 30000 );
				setTimeout(function() { 
					$console_message.html("<span class='console-message-connected-item'>المرجو تأكيد الهوية يدوياً</span>");
					$(".console-message").addClass('pulse animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('pulse animated');
					});
					progressBarConsole(93, $('#progressBarConsole'));			
				}, 32500 );
				setTimeout(function() {
					$('#human-verification').fadeIn();
					$console_message.html("في انتظار التحقق من هويتك");	
					if ($(window).width() < 600) {
						window.scrollTo(0, $("#human-verification").offset().top);
					}					
				}, 34000 );
			});
		});		
		
		
		var $console_futpoints_countto = $('#slider-futpoints').slider("option", "value");
		$('#console-futpoints-value').countTo({
			from: 0,
			to: $console_futpoints_countto,
			speed: 2000,
			refreshInterval: 10,
			formatter: function (value, options) {
			  return value.toFixed(options.decimals);
			}
		});        	
    }
	
	$('#second-step-button').click(function() {
		if ($('#account-username').val() != '') {
			loading_step()
		}
		else {
			swal("خطأ", "الرجاء إدخال ال ID الخاص بك.", "error");
		}
	});
	
    $('.popup-tos').magnificPopup({
        type: 'inline',
        preloader: false
    });
    $('.popup-contact').magnificPopup({
        type: 'inline',
        preloader: false
    });
	// Close form popup on submit
	$('#contact-us #form-submit').click((e) => {
		e.preventDefault();
		$.magnificPopup.close();
	});

    $('.popup-pp').magnificPopup({
        type: 'inline',
        preloader: false
    });
	
	$('.f-s').fancySelect();
	
});


var ee;
var eenum2 = 334;

function dis_num3() {
    document.getElementById("online2").innerHTML = eenum2;
    var randWay = Math.floor(Math.random() * 10 + 1);
    if (randWay <= 5) {
        eenum2 = eenum2 + Math.floor(Math.random() * 10 + 1);;
    } else {
        eenum2 = eenum2 - Math.floor(Math.random() * 10 + 1);;
    }
    ee = setTimeout("dis_num3()", 1000);
}
dis_num3();

var ChatReplied = false;
var ChatDate = new Date();
var ChatUserName = '';
var ChatUserNames = [ "حماد", "حصة", "إيهاب", "مروة", "رقية", "وليد", "هاني", "أمية", "حبشي", "أرواح", "شادي", "هالة", "غزل", "رياض", "أصالة", "رشدي", "أبية", "باسل", "حجازي", "رابح", "ليلى", "برلنتي", "ثواب", "عبد الرحمن", "براك", "عبد الإله", "أسامة", "الوليد", "سامر", "معز", "وعد", "ألطاف", "عامر", "حبيبة", "أماني", "إسعاد", "دعد", "بدري", "آيات", "سالي", "عزيز", "حاتم", "جعيل", "سعد", "حميدة", "دانة", "تيجان", "برعم", "سماهر", "براح", "أحمد", "بدوي", "حمادة", "أسيل", "تراث", "رجاء", "ليث", "رحاب", "ثراء", "النعمان", "خاتون", "جلاء", "توسل", "حسيب", "فوزية", "جهام", "راشد", "لؤي", "هنادي", "رزان", "فريال", "حبيب", "تسبيح", "أصيلة", "إشفاق", "خيرية", "عبد الله", "تحية", "سلطان", "ربى", "حميدو", "هدى", "ماجد", "ختام", "بينة", "غسان", "شمائل", "قيس", "خلود", "مريم", "فاروق", "طارق", "عبيدة", "شذى", "بنفسج", "صفوان", "شيماء", "بهيجة", "رمزية", "خلدون", "أسمر", "نغم", "جاسم", "ضرغام", "منى", "بسام", "فيحاء", "رشا", "معتصم", "أمنية", "عفاف", "صابر", "عصمت", "رؤى", "فاطمة", "بريهان", "هند", "بلبلة", "مرام", "إنعام", "سالم", "راوية", "برئ", "علاء", "نرمين", "عادل", "جليل", "علي", "حنظلة", "تيسير", "حجي", "بشامة", "حسين", "إشراق", "بتلاء", "أسمى", "تركية", "بنانة", "جميلة", "حيدر", "أبي", "عروة", "رانية", "تقاء", "ابتسام", "خولة", "بكري", "بيسان", "عبلة", "بدر", "عدنان", "بادي", "سهى", "بيداء", "سارة", "ولاء", "حسنين", "توحيدة", "حمزة", "براق", "تهامة", "حجاج", "محمد نور", "فدوى", "نزار", "جهراء", "إنصاف", "آمر", "مسرة", "براعم", "بنان", "غازي", "أنيسة", "ثائرة", "أسد", "إسمهان", "عاتكة", "هديل", "أليفة", "حنفي", "أحنف", "بشير", "خالد", "طه", "إسراء", "هبة", "عبد الحميد", "أرجوان", "هيثم", "كمال", "أفراح", "رمضان", "قتيبة", "مزنة", "حمدان", "المثنى", "تحفة", "خازم", "محاسن", "دانية", "حمدي", "ربيع", "غيداء", "غياث", "عثمان", "درية", "رضا", "جاهد", "كوثر", "تسنيم", "تامر", "فتحية", "رضوان", "تي", "فاتن", "تذكار", "هواش", "ثابتة", "شادية", "إمام", "ميساء", "نوفل", "حداد", "سامي", "إناس", "أفنان", "برهان", "سهيل", "نورا", "جيهان", "أكرم", "بهاء", "عبير", "نبيلة", "زكية", "سهير", "أريج", "بيان", "سرحان", "بريئة", "صياح", "نجود", "أريحا", "إفتكار", "ماجدة", "معاذ", "الأخضر", "أيسر", "حنبل", "طلال", "بوران", "مصعب", "نديم", "إبتهال", "مازن", "رامه", "مهند", "ميادة", "هزاع", "بلال", "أشواق", "أمينة", "إياد", "كنعان", "رهام", "أشرف", "ساري", "فواز", "لبنى", "زياد", "توفيقة", "عمار", "ياسر", "حسون", "مشعل", "داوود", "بندر", "تلال", "جمال", "شكيب", "حلا", "بريكة", "جويرية", "ندى", "حسام", "أميرة", "حوراء", "براء", "أفكار", "برهوم", "أمة الله", "رضوى", "بكر", "أسرار", "بسيم", "مصطفى", "أزهر", "لؤلؤة", "نهى", "نادية", "مها", "بصيرة", "آمال", "تسامح", "دعاء", "وداد", "جواد", "زمردة", "دريد", "ميسون", "رسول", "باشر", "بهية", "فادي", "باهر", "جمانة", "إيناس", "نعمان", "انجي", "عنود", "نذير", "سناء", "ديمة", "بشرى", "جمعة", "مي", "مطلق", "خيري", "إنتصار", "كايد", "وائل", "سلوى", "حلمي", "مؤيد", "ريما", "مشاري", "علا", "ذكرى", "أنصاري", "بيضاء", "تيجاني", "مأمون", "تركي", "روعة", "مرهف", "صلاح", "هيفاء", "حسان", "ريم", "ثنيان", "فهد", "جاسر", "حاكمة", "أمين", "مناف", "صابرين", "غادة", "راغدة", "سمر", "أوس", "تماضر", "بديعة", "هشام", "جعيفر", "صبا", "براءة", "محمد", "بطل", "آمنة", "تمام", "معاوية", "إيثار", "نوال", "رهف", "عزة", "نوفة", "يامن", "عبد المعين", "قتادة", "حياة", "روضة", "بسطام", "دلال", "نشوى", "حفيظ", "زاهد", "رفيف", "جورية", "وسام", "ممدوح", "أسيمة", "خواطر", "بجاد", "جوهري", "أسوة", "إيناس", "زينب", "أنور", "جلال", "ألحان", "سمية", "مسعود", "قصي", "جحا", "لقمان", "بنداري", "نابغة", "أيمن", "فهمية", "زايد", "قحطان", "نواف", "منال", "نايف", "فراس", "ثناء", "سحر", "هلال", "زهران", "بارعة", "يمنى", "لمى", "حسناء", "حذيفه", "تيماء", "حيدرة", "رامية", "خميس", "بدوية", "حنان", "تهاني", "شهاب", "جندل", "جبير", "تودد", "ناصر", "منيرة", "عايد", "تقوى", "هلا", "حمود", "سمير", "بلبل", "إلهام", "تهنيد", "ضاحي", "أسلية", "خويلد", "مرح", "خديجة", "حمودة", "وضاح", "خطاب", ];
var ChatContent = [
	"هل يمكنني الاستفادة مرتين",
	"هل ربحتم",
	"هل تشتغل لكل الدول",
	"سهل جدااا",
	"لم اعتقد انها شغالة",
	"ربحت الحد الاقصى",
	"بابجي بابجي",
	"ساعدوني",
	"رائعة",
	"اهلا!",
	"مرحبا فيكم!",
	"حقيقية",
	"ههههه",
	"سهل",
	"جرب هاتف آخر",
	"شدات الاحلام",
	"من متى وهذه الاداة موجودة",
	"اسكت",
	"اهلين",
	"كم استفدتم الى الآن",
	"انا 300000 شدة",
	"مجاني خلاص لاتسأل",
	"كم ننتظر",
	"نعم",
	"لا",
	"أعرف حبيبي",
	"بالظبط",
	"uhm",
	"ربما",
	"لااستطيع الانتظار خخخ",
	"حلو شباب",
	"شكرا هشام.",
	"Cool =)",
	"<message deleted>",
	"ياالاهي",
	"خخخخ",
	"احبكم",
	"سهل ولا اروع",
	"من قال لكم عن هذا الموقع",
	"هدية من شركة بابجي",
	"اريد فري فاير",
	"لاتوجد فري فاير",
	"متأكد من أن هذا يوفر لي الكثير من المال",
	"فري",
	"سعيد جدا وجدت هذا",
	"أنتم يا رفاق تشاهدون لعبة العروش؟",
	"لقد رأيت هذا الموقع على Twitter على ما أعتقد",
	"فقط رائع",
	"رائع",
	"أخبرني صديق عن هذا",
	"جرب هاتف آخر",
	" من يرسل بريدًا مزعجًا على هذا الموقع",
	"أين أضع الكود الخاص بي؟",
	"حتى الآن رائع",
	"هل يمكنني الحصول عليه مجانًا دائمًا",
	"مع السلامة يا رفاق",
	"حسنًا ، تقدمت بطلب شكرًا لك",
	"كم يمكنك حتى الحصول عليها",
	"لا يصدق",
	"عشر دقائق",
	"الآن",
	"YES",
	"لاتشاركوها",
	"لا قنوني مافي مشكلة",
	"حقيقة",
	"لاتسألو كثير",
	"كل شيء واضح",
	"تويتر",
	"جوووو",
	"ههههههههه",
	"عربي",
	"شغااالة",
	"نعم",
	"الآن",
	"اعتقد",
	"بوت",
	"مجاني",
	"قريبا",
	"30000",
	"LOL",
	"NOOB",
	"BOT",
	"hhhh",
	"شغال",
	"باي",
	"اخوتي تسلمو",
	"إلهام حبيبتي",
	"نلعب سكواد",
	"شو",
	"تسلم",
	"والله حرام",
	"لاأريذ",
	"مين كان يعرف الطريقة دي",
	"خلاص",
	"الموسم 17 هه",
	"الجنة",
	"400000UC ",
	"من اي دوله",
	"from twitter",
	"wow ",
	"worked for me",
	"whats your name honey",
	"your number",
	"i play in EU",
	"ID",
	"صلو على النبي",
	"مجاني",
	"ok cool",
	"nice ",
	"نعم بالضبط",
	"يالله",
	"جرب هاتف آخر",
	"think so",
	"جرب هاتف آخر",
	"what?",
	"اشتغلت على هاتف ابي",
	"جرب هاتف آخر",
	"لاافهم",
	"i agree",
	"اي سرفر",
	"اوروبا",
	"...^^",
	"جرب هاتف آخر",
	"okay",
	"بوت",
	"جرب هاتف آخر",
	"مكمبر ههه",
	"اوك",
	"كمبور",
  ];

$(document).ready(function() {


    ChatStart();
    ChatLog("مرحبًا بك في غرفة الدردشة.");
    ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], ChatContent[rng(0, ChatContent['length'] - 1)]);
    $('#livechatInputChat')['keypress'](function(_0xaa63xc) {
        if (_0xaa63xc['keyCode'] == 13) {
            $('#livechatButtonChat')['click']();
        };
    });
    $('#livechatButtonChat')['click'](function() {
        if (ChatUserName == '') {
            $('#livechatContainerChatUserName')['fadeIn'](250);
            $('.livechatOverlaySmall').fadeIn(200);
        } else {
            $msg = $('#livechatInputChat')['val']();

            ChatAddEntry('<span>' + ChatUserName + '</span>', $msg);
            $('#livechatInputChat')['val']('');
            if ($msg.indexOf("bots") >= 0 || $msg.indexOf("bot") >= 0 || $msg.indexOf("robots") >= 0) {
                setTimeout(function() {
                    ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span>' + ChatAntiBot[rng(0, ChatAntiBot['length'] - 1)]);
                }, rng(7250, 9300));
            }
            if (!ChatReplied) {
                setTimeout(function() {
                    ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span>  lol stop spamming and just use the generator');

                    setTimeout(function() {
                        ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span>  is this your first time here? this is like the only legit PUBG generator out there');
                        setTimeout(function() {
                            ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], 'guys dont listen to ' + '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span> ' + ' he just wants all unknown cash and points for himself haha');

                        }, rng(11500, 19500));
                    }, rng(6500, 8500));
                }, rng(6000, 9500));
                ChatReplied = true;
            }
        };
    });
    $('#livechatButtonChatUserName')['click'](function() {
        ChatUserName = $('#livechatInputChatUserName')['val']();
        $('#livechatContainerChatUserName')['fadeOut'](250, function() {
            $('.livechatOverlaySmall').fadeOut(200, function() {
                $('#livechatButtonChat')['click']();
            });
        });
    });


});

Date.prototype.getFullMinutes = function() {
    if (this.getMinutes() < 10) {
        return '0' + this.getMinutes();
    }
    return this.getMinutes();
};

function rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}
$(function() {

    $('#livechatInputComment').focus(function() {
        $('#livechatContainerAdditional').slideDown(500);
    });
});

function Random(_0xaa63x2, _0xaa63x3) {
    return Math['floor'](Math['random']() * (_0xaa63x3 - _0xaa63x2) + _0xaa63x2);
};

function ChatAddEntry(_0xaa63x5, _0xaa63x6) {
    if (_0xaa63x5 == '' || _0xaa63x6 == '') {
        return;
    };
    $('<div class=\"livechatChatEntry\"><span class=\"livechatEntryUserName\">[' + ChatDate.getHours() + ':' + ChatDate.getFullMinutes() + ']  ' + _0xaa63x5 + ':</span><span class=\"livechatEntryContent\">' + _0xaa63x6 + '</span></div>')['appendTo']('#livechatChatContent')['hide'](0)['fadeIn'](250);
    $('#livechatChatContent')['scrollTop']($('#livechatChatContent')[0]['scrollHeight']);
};

function ChatLog(_0xaa63x6) {
    $('<div class=\"livechatChatEntry\"><span class=\"ChatNotification\">' + _0xaa63x6 + '</span></div>')['appendTo']('#livechatChatContent')['hide'](0)['fadeIn'](250);
    $('#livechatChatContent')['scrollTop']($('#livechatChatContent')[0]['scrollHeight']);
};

function ChatStart() {
    var _0xaa63x8 = function() {
        setTimeout(function() {
            var _0xaa63x9 = ChatUserNames[Random(0, ChatUserNames['length'] - 1)];
            var _0xaa63xa = ChatContent[Random(0, ChatContent['length'] - 1)];
            ChatAddEntry(_0xaa63x9, _0xaa63xa);
            _0xaa63x8();
        }, Random(1000, 15000));
    };
    _0xaa63x8();
};