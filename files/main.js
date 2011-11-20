
// Page Navigation Selector
$(document).ready( function() {

	// set any current links in the #nav to be "active"
	$("#nav a").each(function(){
		var href = this.getAttribute('href',2);

		var location = new String( document.location );
		location = location.substr(location.length-href.length, href.length )

		if ( location == href) {
			$(this).addClass("active");
		}
	});


	// set any current links in the #nav to be "active"
	$("#aside li a").each(function(){
		var href = this.getAttribute('href',1);

		var location = new String( document.location );
		location = location.substr(location.length-href.length, href.length )

		if ( location == href) {
			$(this).addClass("active");
		}
	});


});



// Open External Links as Blank Targets via Unobtrusive JavaScript
// http://perishablepress.com/press/2007/11/20/open-external-links-as-blank-targets-via-unobtrusive-javascript/

function externalLinks() {
	if (!document.getElementsByTagName) return;
	var anchors = document.getElementsByTagName("a");
	for (var i=0; i<anchors.length; i++) {
		var anchor = anchors[i];
		if (
			anchor.getAttribute("href") && ( 
			anchor.getAttribute("rel") == "external" || 
			anchor.getAttribute("rel") == "external nofollow" || 
			anchor.getAttribute("rel") == "nofollow external" )
			)
		anchor.target = "_blank";
	}
}
window.onload = function() {
	externalLinks();
}