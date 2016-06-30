const BUILDING_ACTION = 'building';
const BUILT_ACTION = 'built';

// Note the below template uses the website variable, which is injected by the
// loader source code (index.js)

const overlay = document.createElement( 'div' );
overlay.setAttribute(
    'style', `
    position:fixed;
    /* arbitrarily high enough to go over devtools lol */
    z-index: 999999999;
    top:0;
    bottom:0;
    left:0;
    right:0;
    text-align:center;
    display:none;
    `
);

overlay.innerHTML = `
<div style="
    position:absolute;
    z-index:1;
    top:0;
    bottom:0;
    left:0;
    right:0;
    opacity:0.5;
    background:#000;
"></div>
<div style="
    position:relative;
    z-index:2;
    background:#fff;
    border-radius:12px;
    box-shadow:0 0 20px #000;
    margin-top:10px;
    width:530px;
    min-height:812px;
    display:inline-block;
">
    <h2
        style="
            position: relative;
            z-index: 2;
            background: linear-gradient(#333344, #000);
            padding: 20px;
            box-shadow: 0 0 10px #000;
            border-radius: 4px 4px 0 0;
            color: #fff;
            font-size:30px;
            line-height: 30px;
            margin: 0;
        "
    ><span
        style="
            font-size:15px;
            color:#ddd;
        "
    >(bundle rebuilding)</span> webpack-hot-2048</h2>
        <div style="
            position:absolute;
            top:20px;
            right:0;
            bottom:0;
            left:0;
        ">
        <iframe
            src="${website}"
            width="530px"
            height="100%"
        />
    </div>
</div>
`;

document.body.appendChild( overlay );

// How does this work? The contents of this file are concatenated along with
// the contents of https://github.com/glenjamin/webpack-hot-middleware/blob/master/client.js
// in the loader index.js file. You can see on the last lines of that linked
// file that we can access the subscribe functions on module.exports. I'm not
// proud.
module.exports.subscribeAll(function subAll( message ) {
    if( message.action === BUILDING_ACTION ) {
        overlay.style.display = 'block';
        overlay.querySelector('iframe').contentWindow.focus();
    } else if( message.action === BUILT_ACTION ) {
        overlay.style.display = 'none';
    }
});

