pred_url = "https://sf-pyw.mosyag.in/m04/api/forecasts"
$("#main-header").click(function() {
	$.getJSON(pred_url, function(data) {
		advice = data["prophecies"];
		set_content_in_divs(advice);
	});


});


function set_content_in_divs(paragraphs) {
  $.each(paragraphs, function(i, d) {
    p = $("#p-" + i)
    p.html("<p>" + d + "</p>")
  })
}