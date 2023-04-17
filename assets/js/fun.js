
window.onload = function(){
    // checking cookie mode
    let colorMode;
    let cookieExist = (document.cookie.match(/^(?:.*;)?\s*colorMode\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1];
    if (cookieExist != null) {
        colorMode = str_obj(document.cookie).colorMode;
    }else{
        document.cookie = "colorMode=dark; max-age=31104000; path=/";
        colorMode = 'true';
    }

    // setting mode with respect to cookie
    if (colorMode == 'dark') {
        enableDarkMode();
    }else if(colorMode == 'light'){
        enableLightMode();
    }
}

function toggleMode(){
    let styleTagExists;
    var head = document.querySelector('head');
    var toggleMode = document.querySelector('#toggleMode');
    // Check if it contains any <style> elements
    if (toggleMode.classList.contains('fa-toggle-off')) {
        // Enable Dark Mode
        enableDarkMode();
        toggleMode.classList.remove('fa-toggle-off');
        toggleMode.classList.add('fa-toggle-on');
    } else {
        // Enable light mode 
        toggleMode.classList.remove('fa-toggle-on');
        toggleMode.classList.add('fa-toggle-off');
        enableLightMode();
    }
}

function enableDarkMode() {
    document.cookie = "colorMode=dark; max-age=31104000; path=/"; 
    $('body').css('background-color', 'rgb(32,33,35)');
    $('header .nav, header h1 a').css('color', 'rgb(218,218,218)');
    $('.cat a, .date, .f-card .fa-ellipsis-v').css('color', 'rgb(194, 194, 194)');
    $('.f-card_small .title a').css('color', 'white');
    $('.options, .settings').css({
        'background-color': '#353740',
        'border-color': 'rgb(218, 218, 218)'
      });

      $('.options .menu-head span, .settings .menu-head span, .options .menus, .settings .menus, .settings .menus i, .options .menus i').css('color', 'rgb(231, 231, 231)');
      $('.options .menu-head, .settings .menu-head').css('border-color', 'rgb(231, 231, 231)');
      var toggleMode = document.querySelector('#toggleMode');
      toggleMode.classList.remove('fa-toggle-off');
      toggleMode.classList.add('fa-toggle-on'); 
      $('#toggleMode').css('color','#8f8fed');
      
}

function enableLightMode(){
    document.cookie = "colorMode=light; max-age=31104000; path=/";
    $('body').css('background-color', 'rgb(218, 218, 218)');
    $('header .nav, header h1 a').css('color', 'rgba(32,33,35)');

    $('.cat a, .date, .f-card .fa-ellipsis-v').css('color', 'rgba(32,33,35)');

    $('.f-card_small .title a').css('color', 'rgba(32,33,35)');

    $('.options, .settings').css({
    'border-color': '#353740',
    'background-color': 'rgb(218, 218, 218)'
    });

    $('.accounts').css('background-color','white');

    $('.accounts').css('background-color: white');
    $('.options .menu-head span, .settings .menu-head span, .options .menus, .accounts .menu-head span, .settings .menus, .settings .menus i, .options .menus i').css('color', 'rgb(32,33,35)');
    $('.options .menu-head, .settings .menu-head, .accounts .menu-head').css('border-color', 'rgb(32, 33, 35)');
    var toggleMode = document.querySelector('#toggleMode');
    toggleMode.classList.remove('fa-toggle-on');
    toggleMode.classList.add('fa-toggle-off');
    $('#toggleMode').css('color','rgb(32,33,35)');
   
}



let settingState = document.getElementById('settings');
let optionsState = document.getElementById('s-options');
let accountsState = document.getElementById('accounts');
let overlay = document.getElementById('opt-overlay');

function toggleUser(){

}

function str_obj(str) {
    str = str.split('; ');
    var result = {};
    for (var i = 0; i < str.length; i++) {
        var cur = str[i].split('=');
        result[cur[0]] = cur[1];
    }
    return result;
}

function removeOptions(){
    if(settingState.style.display == 'block'){
        settingState.style.display = 'none';
    }else if(optionsState.style.display == 'block'){
        optionsState.style.display = 'none';
    }else if(accountsState.style.display == 'block'){
        accountsState.style.display = 'none';
    }
    overlay.style.display = 'none';
    
}


function toggleSetting(){
    if(settingState.style.display == 'none'){
        settingState.style.display = 'block';
        overlay.style.display = 'block';
    }else{
        settingState.style.display = 'none';
    }
}

function toggleOptions(){
    if(optionsState.style.display == 'none'){
        optionsState.style.display = 'block';
        overlay.style.display = 'block';
    }else{
        optionsState.style.display = 'none';
    }
}
function toggleAccounts(){
    if(accountsState.style.display == 'none'){
        accountsState.style.display = 'block';
        overlay.style.display = 'block';
    }else{
        accountsState.style.display = 'none';
    }
}
