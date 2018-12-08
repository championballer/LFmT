const $checkbox = $("<label><input type='checkbox'> Allow PDF downloads</label>");
$('#links').append($checkbox);

const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdfLinks = $('a[href$=".pdf"]');

$secureLinks.addClass('secure');
$pdfLinks.addClass('pdf');

$pdfLinks.on('click',function(event){
	if($(':checked').length==0)
	{
		event.preventDefault();
		alert("Please check the box to unlock the link to download.");
	}
});