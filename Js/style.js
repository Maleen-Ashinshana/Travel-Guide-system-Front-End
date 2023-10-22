$('#user_login').css({display:"none"})
$('#guide-admin-page').css({display:"none"})
document.getElementById("admin-navLink").addEventListener("click",function (){
    $('#admin-login').css({display:"block",position:'relative',top:'0%'})
    /*$('#main').css({position:'absolute',leaf:'38%',justifyContent:'center',alignItems:'center'})*/
    $('#firstPage').css({display:"none"})
    // $('#div2').css({display:"none"})
    $('#user_login').css({display:"none"})
})
document.getElementById("btn-register").addEventListener('click',function (){
    $('#user_login').css({display:"block",position: "relative",top: "0%"})
    $('#firstPage').css({display:"none"})
    $('#div2').css({display:"none"})
})
document.getElementById("btn-user-register").addEventListener('click',function (){
    $('#div2').css({display:"block"})
    $('#div1').css({display:"none"})
})
/*document.getElementById("btn-new-user-register").addEventListener('click',function (){
    $('#div2').css({display:"none"})
    $('#div1').css({display:"block"})
    /!*$('#user_login').css({display:"block"})*!/
})*/
document.getElementById("btn-admin-login").addEventListener('click',function (){
    $('#guide-admin-page').css({display:"block",position:'relative',top:'0'})
    $('#admin-login').css({display:"none"})
})