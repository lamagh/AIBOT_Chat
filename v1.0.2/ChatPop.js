var i = 0;
var txt = "I am a GPT powered AI bot. How can i help you today?";
var speed = 1;
var id = "";
var prmptOld = "";
var newChat = true;
var state = "chatConversation";
var cookieCheckId = undefined;
var height = "30px";
var error = "";

var _URL = "https://aicbapis.ctsdemo.ae";
var ImageURL = "http://www.botfrontend.ctsdemo.ae/";

var botColor = "";
var botBackgroundColor = "";
var botChatColor = "";
var botIcon = "";
var botChatColor = "";
var botName = "";
var userChatColor = "";
var welcomeMessage = "";
var buttonColor = "";
var placeHolder = "";

var backgroundColor = "";

function getBotBranding() {
  $.ajax({
    url: `${_URL}/api/ChatBot/GetBotBranding/${key}/${botId}`,
    type: "GET",
    contentType: "application/json; charset=utf-8",
    retries: 2,
    success: (data) => {
      console.log("data: ", data);
      botBackgroundColor = data.botBackgroundColor;
      botIcon = data.botIcon;
      botChatColor = data.botChatColor;
      botName = data.botName;
      buttonColor = data.buttonColor;
      userChatColor = data.userChatColor;

      backgroundColor = data.botBackgroundColor;
      txt = data.welcomeMessage;

      console.log(botColor);
      welcomeMessage = data.welcomeMessage;
      $(".welcomeMessage").text(data.welcomeMessage);
      $("#newmessage").attr("placeHolder", data.placeHolderText);
      $(".robotImage").attr("src", `data:image/jpeg;base64,${botIcon}`);
      $("#botSvg").attr("src", `data:image/jpeg;base64,${botIcon}`);
      $("#TermsAndCondition").text(data.termsAndConditions);
      $(".botButton").css("background-color", data.buttonColor);
      $(".chat-header").css("background-color", data.topBannerColor);
      $(".botButtonBackground").css("background-color", data.buttonColor);

      $(".chat-view").css("background", backgroundColor);
      $(".chat-content").css("background", backgroundColor);
      $(".main-container").css("background", backgroundColor);
      // $(".bot-icon-light-blue").css("background-color", buttonColor);
    },
    error: () => {},
  });
}

var handledCookie = false;

var decrypted = "";
// var ncid = "4hZ0qO1J11PRakfMTjw8lw2";

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

$(document).ready(function () {
  function addlinks() {
    var link = document.createElement("link");
    link.href =
      "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css";
    link.rel = "stylesheet";
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);

    //
    var link2 = document.createElement("link");
    link2.href =
      "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
    link2.rel = "text/css";
    link2.crossOrigin = "anonymous";
    document.head.appendChild(link2);

    //
    var link3 = document.createElement("link");
    link3.href = "https://fonts.googleapis.com";
    link3.rel = "preconnect";
    link3.crossOrigin = "anonymous";
    document.head.appendChild(link3);

    var link4 = document.createElement("link");
    link4.href = "https://fonts.gstatic.com";
    link4.rel = "preconnect";
    link4.crossOrigin = "anonymous";
    document.head.appendChild(link4);
  }
  var scriptUrls = [
    "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js",
    "https://cdn.jsdelivr.net/npm/marked/marked.min.js",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
    "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js",
  ];

  function loadScript(url) {
    return $.getScript(url);
  }

  function loadScriptsInParallel() {
    var scriptPromises = scriptUrls.map(function (url) {
      return loadScript(url);
    });

    return $.when.apply($, scriptPromises);
  }

  function loadCSS(url) {
    return new Promise(function (resolve, reject) {
      var link = document.createElement("link");
      link.href = url.link;
      link.rel = url.rel;
      link.type = url.type;

      link.onload = resolve;
      link.onerror = reject;

      document.head.appendChild(link);
    });
  }

  // Load CSS/Stylesheets from dynamically created link elements
  function loadStylesheetsFromDynamicallyCreatedLinks() {
    var cssUrls = [
      {
        link: "https://fonts.googleapis.com",
        rel: "preconnect",
        type: "text/css",
      },
      {
        link: "https://fonts.gstatic.com",
        rel: "preconnect",
        type: "text/css",
      },
      {
        link: "https://fonts.googleapis.com",
        rel: "preconnect",
        type: "text/css",
      },
      {
        link: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
        rel: "stylesheet",
        type: "text/css",
      },
      {
        link: "https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap",
        rel: "stylesheet",
        type: "text/css",
      },
      {
        link: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
        rel: "stylesheet",
        type: "text/css",
      },
    ];

    var cssPromises = cssUrls.map(function (cssUrl) {
      return loadCSS(cssUrl);
    });

    return Promise.all(cssPromises);
  }

  function addScripts() {
    loadScriptsInParallel().then(function () {
      console.log("All scripts loaded in parallel.");
    });
  }

  $(function () {
    addScripts();

    loadStylesheetsFromDynamicallyCreatedLinks().then(function () {
      console.log(
        "All stylesheets loaded from dynamically created link elements."
      );
    });

    getBotBranding();
    $("#newmessage").keyup(function (event) {
      var length = $(this).val().length;
      var height = $(this).height();
      if (length > 57 && height == 26) {
        $("#newmessage").css("height", "50px");
      }
      if (length > 107 && height == 46) {
        $("#newmessage").css("height", "orm70px");
      }
      if (length < 107 && height > 50) {
        $("#newmessage").css("height", "50px");
      }
      if (length < 57 && height > 26) {
        $("#newmessage").css("height", "30px");
      }

      var keycode = event.keyCode ? event.keyCode : event.which;
      var ip = $("#newmessage").val();
      if (keycode == 13 && ip.length == 0) {
        event.preventDefault();
        return false;
      }

      if (event.which === 32 && this.selectionStart === 0) {
        event.preventDefault();
      }
      ip = ip.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      if (0 == ip.length) {
        return;
      }
      if (keycode == 13 && $("#pendingResponse").val() != "0") {
        sendResponse();
      }
      if (keycode == 13) {
        event.preventDefault();
        return false;
      }
    });

    $("#prevChatSearch").keydown(function (e) {
      var keycode = e.keyCode ? e.keyCode : e.which;
      var searchText = $("#prevChatSearch").val();
      console.log(searchText);
      console.log(searchText.length);
      if (keycode == 13 && searchText.length == 0) {
        e.preventDefault();
        return false;
      }
      if (e.which === 32 && this.selectionStart === 0) {
        e.preventDefault();
      }
      searchText = searchText.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      if (0 == searchText.length) {
        return;
      }
      // if (keycode == 13) {
      //   $(".send-icon").click();
      // }
      console.log("oi");

      searchRooms(searchText);

      if (keycode == 13) {
        e.preventDefault();
        return false;
      }
    });
  });
  var body = `
  <div id="container">
    <!-- Main Menu -->
    <div id="main" class="chat-content main-view position-relative" style="display:none">
      <div class="main-container col-md-12 pt-3 pl-3 pr-3 pb-3">
        <div class="">
          <div id="minimize" class="text-right minimize-icon col-1">
          <i class="fa fa-minus white" aria-hidden="true" ></i>
          </div>
          <div id="closeIcon" class="text-right close-icon col-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="26.671" height="26.671" viewBox="0 0 26.671 26.671">
              <path id="create-account"
                d="M17.737,8.085l-6.5-.122-.122-6.5A1.309,1.309,0,0,0,9.837.185L9,.169A1.2,1.2,0,0,0,7.777,1.4L7.9,7.9,1.4,7.779A1.2,1.2,0,0,0,.169,9.006l.016.833a1.309,1.309,0,0,0,1.275,1.275l6.5.122.122,6.5A1.309,1.309,0,0,0,9.36,19.012l.833.016A1.2,1.2,0,0,0,11.421,17.8L11.3,11.3l6.5.122a1.2,1.2,0,0,0,1.228-1.228l-.016-.832A1.31,1.31,0,0,0,17.737,8.085Z"
                transform="translate(13.335 -0.239) rotate(45)" fill="#fff" />
            </svg>
          </div>
        </div>
        <div class="text-center">
          <img  class="robotImage" alt="robot" />
          <p class="main-title welcomeMessage" >${welcomeMessage}</p>
          <p id="error" class="disclaimer"></p>
        </div>
      </div>
      <div class="px-3 mb-5">
      <div id="newQuestion"class="botButton mb-5 main-new-chat mx-4">
       <div class="d-flex justify-content-center align-items-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.0929 10.9711C23.0928 10.7748 22.9784 10.6032 22.8019 10.5315L7.87289 4.48078C7.68081 4.40296 7.4533 4.45718 7.30393 4.61646C7.15445 4.77567 7.11467 5.00598 7.20447 5.19277L10.3593 11.7517L7.21305 18.697C7.12357 18.8947 7.16363 19.1201 7.31323 19.2611L7.3135 19.2613C7.46317 19.402 7.69054 19.4283 7.88234 19.327L22.8025 11.4461C22.98 11.3523 23.0931 11.1669 23.0932 10.9709L23.0929 10.9711ZM8.71134 17.7756L11.2361 12.2024L14.1889 12.0213C14.4671 12.0043 14.6922 11.7648 14.6921 11.486C14.6921 11.2072 14.4666 10.9954 14.1883 11.0124L11.2353 11.1936L8.70365 5.93044L21.3967 11.0751L8.71134 17.7756Z" fill="white"/>
          </svg>
        <p class="main-new-ask mx-2 fw-semibold botButtonBackground">Start a New Chat</p>
       </div>
    </div>
    <div id="prevChats" class="botBorderButton main-prev-chat mb-2 mx-4">
      <div class="d-flex justify-content-between align-items-center">
        <p class="main-prev-chat fw-medium mx-2">Your Previous Chats</p>
        <img src = "${ImageURL}/assets/arrow-right.svg" class = "mx-3 mt-1"/>
      </div>
    </div>
    <div id="termsBtn" class=" botBorderButton main-terms mb-5 mx-4">
      <div class="d-flex justify-content-between align-items-center">
          <p class="main-prev-chat fw-medium mx-2">Terms And Conditions</p>
          <img src = "${ImageURL}/assets/arrow-right.svg" class = "mx-3 mt-1"/>
      </div>
    </div>
    <div id="signOut" class="SignOutButton">Sign Out</div>
      </div>
    </div>

    <!-- Previous Conversations -->
    <div id="previousConversations" class="chat-view position-relative" style="display:none">
      <div class="row chat-header m-auto justify-content-between">
            <div class="row">
            <div class = "d-flex align-items-center px-0 pt-2 justify-content-end">
              <div id="minimize3" class="">
              <img src = "${ImageURL}/assets/max.svg">
              </div>
              <div id="minimize3" class="mx-2">
              <img src = "${ImageURL}/assets/mini.svg">
              </div>
              <div id="closeIcon3" class="">
                <img src = "${ImageURL}/assets/close.svg">
              </div>
            </div>
          </div>
          <div class="col-12 my-auto pl-1 py-1 d-flex align-items-center justify-content-between">
           <div class="d-flex align-items-center">
              <div id="goBack2" class="p-2 backButton">
                  <img src = "${ImageURL}/assets/back.svg">
                  <span class="mx-2 fs-5 fw-medium">Your Previous Chats</span>
              </div>
            </div>
          </div>
      </div>
      <div id="prevChatsContainer" class="col-md-12 py-2 px-4 ">
        <div class="position-relative search-input-container mt-2 mb-3">
        <textarea rows={1} id="prevChatSearch" class="search-input fw-normal d-flex" 
            placeholder="Search Chat" ></textarea>
        </div>
        <div id="prevContainer">
          <div class = "d-flex justify-content-between align-items-center border-bottom py-3">
              <div class = "d-flex align-items-center">
               <img src ="${ImageURL}/assets/chat.svg"/>
               <p class = "mx-2 m-0 fw-medium fs-7 d-inline-block text-truncate" style="max-width: 90%;">What are some effective ways to reduce stress and anxiety?</p>
              </div>
              <div class="dropdown">
              <button class="btn " type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src = "${ImageURL}/assets/more.svg"/ class = "blk">
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item border-bottom" href="#">Download</a></li>
                <li><a class="dropdown-item border-bottom" href="#">Delete</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>



    
    <!-- Chat Conversation -->
    <div id="chatConversation" class="chat-view position-relative" style="display:none">
      <div class="row chat-header m-auto justify-content-between">
          <div class="row">
            <div class = "d-flex align-items-center px-0 pt-2 justify-content-end">
              <div id="minimize3" class="">
              <img src = "${ImageURL}/assets/max.svg">
              </div>
              <div id="minimize3" class="mx-2">
              <img src = "${ImageURL}/assets/mini.svg">
              </div>
              <div id="closeIcon3" class="">
                <img src = "${ImageURL}/assets/close.svg">
              </div>
            </div>
          </div>
        <div class="col-12 my-auto pl-1 py-1 d-flex align-items-center justify-content-between">
            <div class = "d-flex align-items-center">
            <div id="goBack" class="p-2 backButton">
              <img src = "${ImageURL}/assets/back.svg"> 
              <span class = "mx-2 fs-5 fw-medium">New Chat</span>
            </div>
         </div>
         <div class="dropdown">
          <button class="btn " type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src = "${ImageURL}/assets/more.svg"/>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item border-bottom" href="#">Download</a></li>
            <li><a class="dropdown-item border-bottom" href="#">Delete</a></li>
          </ul>
        </div>


        </div>
        
        
      </div>
      <div id="chats" class="col-md-12 chats pt-3 pl-2 pr-3 pb-3">
      <input type="hidden" id="pendingResponse" value="0">
        <div id="fullchat">
       
        </div>
      </div>
      <div class="col-md-12 p-2 input-container bg-white">
        <div class ="d-flex align-items-center ">
        <button class = "btn p-2"><img src = "${ImageURL}/assets/add.svg" ></button>
        <button class = "btn p-2"><img src = "${ImageURL}/assets/mic.svg" ></button>
        <div class = "w-100">
        <input  type="text" id="newmessage" class="message-input px-4 py-1" placeholder="Type your message!"
              style="font-size:18px;" />
            <input id="PromptResponse" name="PromptResponse" type="hidden" value="0" />
        </div>
          <div class="mx-2" id="sendResponse">
            <button class = "btn p-2"><img src="${ImageURL}/assets/send.svg" /></button>
          </div>
      </div>


      </div>
    </div>
    <!-- LoginScreen -->
    <div id="LoginScreen"  class="chat-content login-view position-relative" style="display:none">
    
    <div id="closeIcon" class="text-right close-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26.671"
        height="26.671"
        viewBox="0 0 26.671 26.671"
      >
        <path
          id="create-account"
          d="M17.737,8.085l-6.5-.122-.122-6.5A1.309,1.309,0,0,0,9.837.185L9,.169A1.2,1.2,0,0,0,7.777,1.4L7.9,7.9,1.4,7.779A1.2,1.2,0,0,0,.169,9.006l.016.833a1.309,1.309,0,0,0,1.275,1.275l6.5.122.122,6.5A1.309,1.309,0,0,0,9.36,19.012l.833.016A1.2,1.2,0,0,0,11.421,17.8L11.3,11.3l6.5.122a1.2,1.2,0,0,0,1.228-1.228l-.016-.832A1.31,1.31,0,0,0,17.737,8.085Z"
          transform="translate(13.335 -0.239) rotate(45)"
          fill="#fff"
        />
      </svg>
    </div>
    <div class="text-center main-help">
      <img  class="robotImage LoginRobo" alt="robot"  />
    </div>
 
  <div  class="row mx-4 mt-5 px-5">
    <label>Email Address</label>
    <input value="" type="email" class="w-100 login-input" id="userName"/>
  </div>
  <div class="row mx-4 mt-4 px-5">
    <label>Password</label>
    <input value="" type="email" class="w-100 login-input" id="Password" />
  </div>
  <div class="row mx-4 mt-4 px-5">
    <button class="w-100 login-btn" id="loginButton">Login</button>
  </div>




</div>

    <!-- Terms & Conditions -->
    <div id="terms" class="chat-view position-relative" style="display:none">
    <div class="row chat-header m-auto justify-content-between">
        <div class="row">
        <div class = "d-flex align-items-center px-0 pt-2 justify-content-end">
          <div id="minimize3" class="">
          <img src = "${ImageURL}/assets/max.svg">
          </div>
          <div id="minimize3" class="mx-2">
          <img src = "${ImageURL}/assets/mini.svg">
          </div>

          
          <div id="closeIcon3" class="">
            <img src = "${ImageURL}/assets/close.svg">
          </div>
        </div>
        </div>
        <div class="col-12 my-auto pl-1 py-1 d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <div id="goBack3" class="p-2 backButton">
              <img src = "${ImageURL}/assets/back.svg">
              <span class="mx-2 fs-5 fw-medium">Terms and Conditions</span>
            </div>
          </div>
       </div>
        
      </div>
      <div class="p-4">
        <h5 class="terms-title">Terms and Conditions</h5>
        <div id="TermsAndCondition" ></div>
      </div>
    </div>
  </div>

  <div class="hide-chat-box bot-icon d-flex justify-content-center float-right align-items-center">
    <img id="botSvg" class="robotImage" src= alt="bot" />
    <svg xmlns="http://www.w3.org/2000/svg" width="26.671" height="26.671" viewBox="0 0 26.671 26.671" class="close-button">
    <path id="create-account"
      d="M17.737,8.085l-6.5-.122-.122-6.5A1.309,1.309,0,0,0,9.837.185L9,.169A1.2,1.2,0,0,0,7.777,1.4L7.9,7.9,1.4,7.779A1.2,1.2,0,0,0,.169,9.006l.016.833a1.309,1.309,0,0,0,1.275,1.275l6.5.122.122,6.5A1.309,1.309,0,0,0,9.36,19.012l.833.016A1.2,1.2,0,0,0,11.421,17.8L11.3,11.3l6.5.122a1.2,1.2,0,0,0,1.228-1.228l-.016-.832A1.31,1.31,0,0,0,17.737,8.085Z"
      transform="translate(13.335 -0.239) rotate(45)" fill="#fff" />
  </svg>
  </div>
`;

  $(".chat-main").append(body);
  typeWriter();
  $("#sendmessage").disabled = true;
  getCookie();
  console.log("Fetch Cats");
  fetchChats();

  $("#chatMain").on("click", ".hide-chat-box", function () {
    console.log(localStorage.getItem("token"));
    $.ajax({
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      url: `https://ctsapitesting.ctsdemo.ae/auth/validate`,
      type: "GET",
      contentType: "application/json; charset=utf-8",
      retries: 2,
      success: (data) => {
        displayScreens();
      },
      error: (data) => {
        $("#LoginScreen").show();
      },
    });
    /// here

    // if(checkToken()){

    // }else{
    //   $("#LoginScreen").toggle();
    // }
  });

  function displayScreens() {
    console.log("displayScreens");
    if (
      "previous" === state &&
      $(`#previousConversations`).css("visibility") === "collapse"
    ) {
      $("#previousConversations").css("visibility", "visible");
    } else if (
      "previous" === state &&
      $("#previousConversations").is(":visible")
    ) {
      $("#previousConversations").css("visibility", "collapse");
    } else if (
      "previous" === state &&
      $("#chatConversation").css("visibility") === "collapse"
    ) {
      $("#chatConversation").css("visibility", "visible");
    } else if ("previous" === state && $("#chatConversation").is(":visible")) {
      $("#chatConversation").css("visibility", "collapse");
    } else if (
      "chatConversation" === state &&
      $("#chatConversation").css("visibility") === "collapse"
    ) {
      $("#chatConversation").css("visibility", "visible");
    } else if (
      "chatConversation" === state &&
      $("#chatConversation").is(":visible")
    ) {
      $("#chatConversation").css("visibility", "collapse");
    } else if (
      "terms" === state &&
      $("#terms").css("visibility") === "collapse"
    ) {
      $("#terms").css("visibility", "visible");
    } else if ("terms" === state && $("#terms").is(":visible")) {
      $("#terms").css("visibility", "collapse");
    } else {
      $("#main").toggle();
    }

    $(this).css("background-color", buttonColor);

    $("#botSvg").toggle();
    $(".close-button").toggle();
  }

  function checkToken() {
    var token = localStorage.getItem("token");
    if (token == "" || token == null) {
      return false;
    } else {
      return true;
    }
  }

  $("#chatMain").on("click", "#closeIcon", function () {
    state = "";
    $("#main").toggle();
    $(".hide-chat-box").css("background-color", "");
    $("#botSvg").toggle();
    $(".close-button").toggle();
  });

  $("#chatMain").on("click", "#minimize", function () {
    state = "";
    $("#main").toggle();
    $(".hide-chat-box").css("background-color", "");
    $("#botSvg").toggle();
    $(".close-button").toggle();
  });

  $("#chatMain").on("click", "#closeIcon2", function () {
    state = "";
    $("#previousConversations").toggle();
    $(".hide-chat-box").css("background-color", "");
    $("#botSvg").toggle();
    $(".close-button").toggle();
  });

  $("#chatMain").on("click", "#minimize2", function () {
    state = "previous";
    $("#previousConversations").css("visibility", "collapse");
    $(".hide-chat-box").css("background-color", "");
    $("#botSvg").toggle();
    $(".close-button").toggle();
  });

  $("#chatMain").on("click", "#closeIcon3", function () {
    state = "";
    $("#chatConversation").toggle();
    $(".hide-chat-box").css("background-color", "");
    $("#botSvg").toggle();
    $(".close-button").toggle();
  });

  $("#chatMain").on("click", "#closeIcon4", function () {
    state = "";
    $("#terms").toggle();
    $(".hide-chat-box").css("background-color", "");
    $("#botSvg").toggle();
    $(".close-button").toggle();
  });

  $("#chatMain").on("click", "#minimize3", function () {
    state = "chatConversation";
    $("#chatConversation").css("visibility", "collapse");
    $(".hide-chat-box").css("background-color", "");
    $("#botSvg").toggle();
    $(".close-button").toggle();
  });

  $("#chatMain").on("click", "#minimize4", function () {
    state = "terms";
    $("#terms").css("visibility", "collapse");
    $(".hide-chat-box").css("background-color", "");
    $("#botSvg").toggle();
    $(".close-button").toggle();
  });

  $("#chatMain").on("click", "#newQuestion", function () {
    id = "";
    txt = welcomeMessage;
    prmptOld = "";
    state = "chatConversation";
    newChat = true;
    $("#fullchat").html("");
    $("#PromptResponse").val(0);
    $("#chats").removeClass("chats2");
    typeWriter();
    $("#chatConversation").toggle();
    $("#main").toggle();
  });

  $("#chatMain").on("click", "#prevChats", function () {
    state = "previous";
    $("#previousConversations").toggle();
    $("#main").toggle();
  });

  $("#chatMain").on("click", "#termsBtn", function () {
    state = "terms";
    $("#terms").toggle();
    $("#main").toggle();
  });

  $("#chatMain").on("click", "#goBack", function () {
    console.log($("#pendingResponse").val());
    if ($("#pendingResponse").val() == "0") {
      return;
    }

    $("#chatConversation").toggle();
    $("#newmessage").val("");
    if (true === newChat) {
      $("#main").toggle();
      $("#chats").removeClass("chats2");
    } else {
      $("#chatActions").toggleClass("d-none", "d-block");
      $("#chats").addClass("chats2");
      $("#previousConversations").toggle();
    }
  });

  $("#chatMain").on("click", "#goBack2", function () {
    if ($("#pendingResponse").val() == "0") {
      return;
    }
    $("#previousConversations").toggle();
    $("#prevChatSearch").val("").trigger("keyup");
    $("#newmessage").val("");
    $("#main").toggle();
  });

  $("#chatMain").on("click", "#goBack3", function () {
    if ($("#pendingResponse").val() == "0") {
      return;
    }
    $("#newmessage").val("");
    $("#terms").toggle();
    $("#main").toggle();
  });

  $("#chatMain").on("click", "#deleteChat", function () {
    $.ajax({
      headers: {
        "X-Content-Type-Options": "nosniff",
        "Content-Security-Policy": "script-src 'self'",
      },
      url: `${_URL}/Chatbot/DeleteChat/${id}`,
      type: "DELETE",
      success: function (result) {
        if (true === result) {
          $("#prevContainer").html("");
          fetchChats();
          $("#chatConversation").toggle();
          $("#chatActions").toggleClass("d-none", "d-block");
          $("#chats").addClass("chats2");
          $("#previousConversations").toggle();
        }
      },
    });
  });

  $("#chatMain").on("click", "#downloadChat", function () {
    $.get(`${_URL}/api/Chatbot/GetChatFile/${id}`, function (data) {
      var newTab = window.open(data, "_blank");
      newTab.location;
    });
  });

  $("#prevChatsContainer").on("click", ".prev-chat-container", function () {
    id = this.id;
    newChat = false;
    $("#fullchat").html("");
    console.log(id);

    $("#chatActions").toggleClass("d-none", "d-block");
    $("#chats").addClass("chats2");

    $.ajax({
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      url: `${_URL}/Chat/GetChatDetailsById/${id}`,
      type: "GET",
      success: function (data) {
        console.log(data);
        data.cd.map((message) => {
          var div = document.createElement("div");
          if (false === message?.isUserNotBot) {
            div = `
          <div class="row message-container">
          <div class="col-md-2 text-center">
          <img  class="robot-image-sm mx-2 mt-4 robotImage"    
         src="data:image/jpeg;base64,${botIcon}"
          alt="robot" />
           <p class="sender mb-1">${botName}</p>
          </div>
          <div class="col-md-8 ml-2">
            <div id="message">
              <p class="mb-0 message-text">${message?.text}</p>
            </div>
          </div>
        </div>
        `; //robot
          } else {
            div.innerHTML = `
          <div class="row justify-content-end message-container">
            <div class="col-md-8 receiver-message">
              <div id="message2">
                <p class="mb-0 message-text">${message?.text}</p>
              </div>
            </div>
          </div>
          `; //users
          }
          prmptOld = message?.text.toString();
          $("#fullchat").append(div);
        });
      },
    });
    $("#chatMain").scrollTop($(".chats")[0].scrollHeight);
    $("#chatConversation").toggle();
    $("#previousConversations").toggle();
  });

  $("#chatMain").on("click", "#sendResponse", function () {
    sendResponse();
  });

  function sendResponse() {
    var ip = $("#newmessage").val();
    ip = ip.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    if (0 == ip.length) {
      return;
    }
    if (projectID == "00000000-0000-0000-0000-000000000000") {
      WorkOutResponses(ip);
    } else {
      WorkOutResponses_KnowledgeBase(ip);
    }
  }

  $("#chatMain").on("click", "#signOut", function () {
    localStorage.setItem("token", "");

    $("#LoginScreen").toggle();
    $("#main").toggle();
    $("#Password").val("");
    $("#userName").val("");
  });

  $("#chatMain").on("click", "#loginButton", function () {
    console.log("here??");
    $.ajax({
      // headers: {
      //   "X-Content-Type-Options": "nosniff",
      //   "Content-Security-Policy": "script-src 'self'",
      // },
      url: `https://ctsapitesting.ctsdemo.ae/auth/login`,
      type: "POST",
      contentType: "application/json; charset=utf-8",

      data: JSON.stringify({
        username: $("#userName").val(),
        password: $("#Password").val(),
      }),

      success: function (data) {
        console.log(data);
        localStorage.setItem("token", data.token);

        $("#LoginScreen").toggle();
        $("#main").toggle();
      },
      error: function () {
        console.log("??????");
      },
    });
  });

  $("#chatMain").on("keydown", "#newmessage", function (event) {
    var keycode = event.keyCode ? event.keyCode : event.which;
    var ip = $("#newmessage").val();
    console.log(keycode);
    if (keycode == 13 && ip.length == 0) {
      event.preventDefault();
      return false;
    }

    if (event.which === 32 && this.selectionStart === 0) {
      event.preventDefault();
    }
    ip = ip.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    if (0 == ip.length) {
      return;
    }
    if (keycode == 13 && $("#pendingResponse").val() != "0") {
      sendResponse();
    }
    if (keycode == 13) {
      event.preventDefault();
      return false;
    }
  });
});

function typeWriter(type = "HCT GPT") {
  var div = document.createElement("div");
  i = 0;
  $("#pendingResponse").val(0);
  if ("HCT GPT" == type) {
    div.innerHTML = `
    <div class=" message-container">
      <div class="text-center d-flex flex-column justify-content-start">
        <img  class="robot-image-sm mx-2 mt-4 robotImage"    
         src="data:image/jpeg;base64,${botIcon}"
          alt="robot" />
      </div>
      <div class="ml-2">
          <p class="sender mb-1">${botName}</p>
          <div class = "d-flex">
            <div id="message">
                <p class="mb-0 message-text" style="color:${botChatColor}" ></p>
            </div>
            <div class  = " d-flex flex-column justify-content-start">
                <button class = "btn"><img src = "${ImageURL}/assets/copy.svg"/></button>
            </div>
          </div>
      </div>
    </div>
    `; //robot
  } else {
    div.innerHTML = `
    <div class="row justify-content-end message-container">
      <div class="col-md-8 receiver-message">
        <div id="message2">
          <p class="mb-0 message-text" style="color:${botChatColor}" ></p>
        </div>
      </div>
    </div>
    `; //users
  }
  $("#fullchat").append(div);
  $("#chatMain").scrollTop($(".chats")[0].scrollHeight);
  typeText();
}

function typeText() {
  if (i < txt.length) {
    $(".chats").scrollTop($(".chats")[0].scrollHeight);
    var lastmessage = $(".message-container").find(".message-text").last();
    lastmessage.html(lastmessage.html() + txt.charAt(i));
    i++;
    setTimeout(typeText, speed);
  } else {
    $("#pendingResponse").val(1);
  }
}

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

async function WorkOutResponses(ip) {
  if (/\S/.test(ip)) {
    await StartWriter(ip, "You");

    var prompt = ip;

    console.log(prmptOld);
    if (prmptOld.length > 0) {
      var oldprompt = prmptOld;
    } else {
      var oldprompt = $("#PromptResponse").val();
    }
    if (id.length > 0) {
      var chatId = id;
    } else {
      var chatId = uuidv4();
    }

    $.ajax({
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      url: `${_URL}/Chat/BOTChatGPT`,
      type: "POST",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify({
        botId: botId,
        chatType: 0,
        chatId: chatId,
        IsInternet: false,
        oldPrompt: oldprompt.replace(/^\\n/gm, ""),
        prompt: prompt.replace(/^\n/gm, ""),
      }),
      success: (data) => {
        $("#PromptResponse").val(data); // this will set hidden field value
        fetchChats();
        awaitMessageDone(data);
      },
      error: (error) => {
        // alert(error?.statusText);
        fetchChats();
      },
    });

    id = chatId;
  }
}
async function WorkOutResponses_KnowledgeBase(ip) {
  if (/\S/.test(ip)) {
    await StartWriter(ip, "You");

    var prompt = ip;

    console.log(prmptOld);
    if (prmptOld.length > 0) {
      var oldprompt = prmptOld;
    } else {
      var oldprompt = $("#PromptResponse").val();
    }
    if (id.length > 0) {
      var chatId = id;
    } else {
      var chatId = "00000000-0000-0000-0000-000000000000";
    }

    var incomingPrompt = prompt.replace(/^\n/gm, "");
    $.ajax({
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      url: `${_URL}/Azure/ChatWithData/${chatId}/${projectID}/${incomingPrompt}?BotId=${botId}`,
      type: "POST",
      contentType: "application/json; charset=utf-8",
      success: (data) => {
        $("#PromptResponse").val(data); // this will set hidden field value
        fetchChats();
        awaitMessageDone(data.re);
      },
      error: (error) => {
        // alert(error?.statusText);
        fetchChats();
      },
    });

    id = chatId;
  }
}
function awaitMessageDone(data) {
  if ($("#pendingResponse").val() == "0") {
    setTimeout(() => {
      awaitMessageDone();
    }, 500);
  } else {
    StartWriter(data, "HCT GPT");
  }
}

async function StartWriter(prompt, mperson) {
  txt = prompt;
  typeWriter(mperson);
  $("#newmessage").val("");
}

function fetchChats() {
  var url = "";
  if (projectID == "00000000-0000-0000-0000-000000000000") {
    url = `${_URL}/Chat/GetAllIndividualChats`;
  } else {
    url = `${_URL}/Chat/GetAllIndividualInstituteChats/${projectID}`;
  }

  $("#prevContainer").html("");
  $.ajax({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    url: url,
    type: "GET",
    contentType: "application/json; charset=utf-8",
    retries: 2,
    success: (data) => {
      console.log("PrevData", data);
      data.map((chat) => {
        var div = document.createElement("div");
        div = `
        <div class="row mx-0 mt-3 prev-chat-container" id='${chat?.chatId}'>
          <div class="col-10 chat-list-item">
            <p class="chat-title mb-0">${chat?.chatTitle}</p>
           
          
            </div>
          <div class="col-2 text-right my-auto">
            <img class="prev-chat-arrow-small" src="${ImageURL}/assets/arrow-small.png" />
            <img class="prev-chat-arrow-yellow" src="${ImageURL}/assets/arrow-small-yellow.png" />
          </div>
        </div>
        `;
        $("#prevContainer").append(div);
      });
    },
    error: function () {
      // $("#error").text("Error, please refresh the page.");
    },
  });
}

function searchRooms(SearchText) {
  // var SearchText = e.value;
  // console.log(e.key);
  // console.log(e.keyCode);
  // if ((e.key === "Enter" || e.keyCode === 13) && SearchText.trim() == "") {
  //   alert("dsf");
  //   return;
  // }

  console.log("searching /...");
  if (SearchText.trim() == "") {
    $.ajax({
      headers: {
        "X-Content-Type-Options": "nosniff",
        "Content-Security-Policy": "script-src 'self'",
      },
      url: `${_URL}/ChatBot/ChatList/${decrypted}`,
      type: "GET",
      success: function (data) {
        $("#prevContainer").html("");
        data.map((chat) => {
          var div = document.createElement("div");
          div = `
        <div class="row mx-0 mt-3 prev-chat-container" id='${chat?.chatid}'>
          <div class="col-10 chat-list-item">
            <p class="chat-title mb-0">${chat?.chattitle}</p>
            <p class="chat-date mb-0">Created Date : ${moment(
              chat?.dateadded
            ).format("DD MMMM YYYY")}</p>
            <p class="chat-date">Last Modified : ${moment(
              chat?.lastModifiedDate
            ).format("DD MMMM YYYY")}</p>
            </div>
          <div class="col-2 text-right my-auto">
            <img class="prev-chat-arrow-small" src="${ImageURL}/assets/arrow-small.png" />
            <img class="prev-chat-arrow-yellow" src="${ImageURL}/assets/arrow-small-yellow.png" />
          </div>
        </div>
        `;
          $("#prevContainer").append(div);
        });
      },
    });
  } else {
    $.ajax({
      headers: {
        "X-Content-Type-Options": "nosniff",
        "Content-Security-Policy": "script-src 'self'",
      },
      url: `${_URL}/ChatBot/SearchChatList/${SearchText}/${decrypted}`,
      type: "GET",
      success: function (data) {
        $("#prevContainer").html("");
        data.map((chat) => {
          var div = document.createElement("div");
          div = `
      <div class="row mx-0 mt-3 prev-chat-container" id='${chat?.chatid}'>
        <div class="col-10 chat-list-item">
          <p class="chat-title mb-0">${chat?.chattitle}</p>
          <p class="chat-date mb-0">Created Date : ${moment(
            chat?.dateadded
          ).format("DD MMMM YYYY")}</p>
          <p class="chat-date">Last Modified : ${moment(
            chat?.lastModifiedDate
          ).format("DD MMMM YYYY")}</p>
        </div>
        <div class="col-2 text-right my-auto">
          <img class="prev-chat-arrow-small" src="${ImageURL}/assets/arrow-small.png" />
          <img class="prev-chat-arrow-yellow" src="botfrontend.ctsdemo.ae/assets/arrow-small-yellow.png" />
        </div>
      </div>
      `;
          $("#prevContainer").append(div);
        });
      },
    });
  }
}
