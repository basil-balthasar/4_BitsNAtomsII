let image = document.querySelector("img");

document.addEventListener("DOMContentLoaded", function() {
    if(fnBrowserDetect() != "not detected"){
        document.querySelector("h1").innerText="Oh you are a "+ fnBrowserDetect() +" user... I see ;)";
    }else{
        document.querySelector("h1").innerText="This site unfortunately does not support your browser.";
        image.src = "https://upload.wikimedia.org/wikipedia/commons/0/03/Noto_Emoji_KitKat_1f622.svg";
    }
});


/**
 * checking for browser function from https://codepedia.info/detect-browser-in-javascript
 * changed by adding the image src and returning the browser name
 */
function fnBrowserDetect(){    
        let userAgent = navigator.userAgent;
        let browserName;
        

        if(userAgent.match(/chrome|chromium|crios/i)){
            browserName = "chrome";
            image.src = "https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg";
        }else if(userAgent.match(/firefox|fxios/i)){
            browserName = "firefox";
            image.src = "https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg";
        }else if(userAgent.match(/safari/i)){
            browserName = "safari";
            image.src = "https://upload.wikimedia.org/wikipedia/commons/5/52/Safari_browser_logo.svg";
        }else if(userAgent.match(/opr\//i)){
            browserName = "opera";
            image.src = "https://upload.wikimedia.org/wikipedia/commons/6/6e/Opera_2015_logo.svg";
        } else if(userAgent.match(/edg/i)){
            browserName = "edge";
            image.src = "https://upload.wikimedia.org/wikipedia/commons/f/f6/Edge_Logo_2019.svg";
        }else{
            browserName = "not detected";
        }
         /** changed into return for easier use in this case */
        return browserName;
  }