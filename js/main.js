function handleOutboundLinkClicks(event) {
  ga('send', 'event', {
    eventCategory: 'Outbound Link',
    eventAction: 'click',
    eventLabel: event.target.href,
    transport: 'beacon'
  });
}

var elements = document.getElementsByTagName('a');
for(var i = 0, len = elements.length; i < len; i++) {
    elements[i].onclick = handleOutboundLinkClicks;
}