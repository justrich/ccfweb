// Generate container for iFrame content so it can be centered and
// styled appropriately.
function embedIframe(elem) {
    let embedURL = elem.getAttribute('embed-url');
    let mediaType = elem.getAttribute('media-type');
    var subtype = 'default';
    var sandboxTokens = [
        'allow-same-origin',
        'allow-scripts',
        'allow-top-navigation-by-user-activation'
    ];

    if( ! embedURL ) {
        console.log(elem + " is missing embed-url");
        return;
    }
    if( ! mediaType ) {
        console.log(elem + " is missing media-type");
        return;
    }
    if(mediaType.toLowerCase().includes('apple')){
        subtype = 'apple'
        // Append dark mode modifier to podcast episodes.
        if( mediaType.toLowerCase().includes('podcast-episode') ) {
            embedURL += "&theme=dark";
        }
    }
    if(mediaType.toLowerCase().includes('spotify')){
        subtype = 'spotify';
        // "Open in spotify" links in the iFrame want
        // to open external windows.
        sandboxTokens.push('allow-popups');
    }
    let iFrame = document.createElement('iframe');
    iFrame.id = mediaType;
    iFrame.className = "embedMedia";
    iFrame.src = embedURL;
    iFrame.allowFullscreen = false;
    if(mediaType.toLowerCase().includes('youtube')){
        subtype='youtube';
        iFrame.allow = 'autoplay *; encrypted-media *; clipboard-write; fullscreen';
    } else {
        iFrame.allow = 'autoplay *; encrypted-media *; clipboard-write';
    }
    iFrame.loading = 'lazy';
    iFrame.sandbox.add(...sandboxTokens);

    let outerDiv = document.createElement('div');
    outerDiv.className = 'mediaWrapperOuter ' + subtype;
    let innerDiv = document.createElement('div');
    innerDiv.className = 'mediaWrapperInner ' + subtype;
    innerDiv.appendChild(iFrame);
    outerDiv.appendChild(innerDiv);

    let lightbox = document.getElementById('lightbox');
    lightbox.innerHTML = '';
    lightbox.appendChild(outerDiv);
    lightbox.style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {

    //create lightbox div in the footer
    var newdiv = document.createElement("div");
    newdiv.setAttribute('id',"lightbox");
    document.body.appendChild(newdiv);

    //remove the clicked lightbox
    document.getElementById('lightbox').addEventListener("click", function(event) {
        if(event.target.id != 'next' && event.target.id != 'prev'){
            this.innerHTML = '';
            document.getElementById('lightbox').style.display = 'none';
        }
    });

    // Handle generic lightboxed media.
    var elements = document.querySelectorAll('a.lightbox-media');
    elements.forEach(element => {
        element.addEventListener("click", function(event) {
            event.preventDefault();
            embedIframe(this);
        });
    });
});