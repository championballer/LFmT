$('#flashMessage').hide();
$('#flashMessage').slideDown(1000);
$('#flashMessage').delay(3000);
$('#flashMessage').slideUp(1000);

const title = "My Fist Blog Post:";
const content = "This is my first blog entry";

$('#blogTitlePreview').text(title);
$('#blogContentPreview').text(content);