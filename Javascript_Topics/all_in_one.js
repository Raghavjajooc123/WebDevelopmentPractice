function formvalidate() {
    var username = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("pass").value;
    var regxphone = /^[6-9]\d{9}$/
    var regxemail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

    // /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2-8})(.[a-z]{2-8})?$/ <=this is written by me
    // My very logical Regular expression does'nt works in this case
    // /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/ <=this is copied from net.

    if (username.trim() == "") {
        document.getElementById("invalid1").style.visibility = "visible"
        return false;
    }

    else if (email.trim() == "") {
        document.getElementById("invalid2").style.visibility = "visible"
        return false;
    }

    else if (phone.trim() == "") {
        document.getElementById("invalid3").style.visibility = "visible"
        return false;
    }

    else if (password.trim() == "") {
        document.getElementById("li1").style.visibility = "visible"
        return false;
    }
    else if (password.trim().length < 8) {
        document.getElementById("li2").style.visibility = "visible"
        return false;
    }

    else if (regxphone.test(phone) == false) {
        document.getElementById("invalid3").style.visibility = "visible"
        return false;
    }

    else if (regxemail.test(email) == false) {
        document.getElementById("invalid2").style.visibility = "visible"
        return false;
    }

    else {
        document.getElementsByClassName(".invalid,.invalidpass").style.visibility = "hidden"
        return true;
    }
}

// fade in and fade out using javascript

var id1=0
var op=0
function fadeout(){
    id1=setInterval(hide,80)
}
function hide(){
    var img1=document.getElementById("img1")
    op=Number(window.getComputedStyle(img1).getPropertyValue("opacity"));
    if(op>0){
        op=op-0.1;
        img1.style.opacity=op;
    }
    else{
    clearInterval(id1);   
    }
}
var id2=0
var op=0
function fadein(){
    id2=setInterval(show,80)
}
function show(){
    var img1=document.getElementById("img1")
    op=Number(window.getComputedStyle(img1).getPropertyValue("opacity"));
    if(op<1){
        op=op+0.1;
        img1.style.opacity=op;
    }
    else{
    clearInterval(id2);   
    }
}

// now jquery effects starts from here

$(document).ready(function(){
    
    $("#slidey").click(function(){
        $("#img2").slideUp(300)
    })

    $("#slido").click(function(){
        $("#img2").slideDown(300)
    })
    
    $("#left").click(function(){
        $(".square").animate({
            opacity:0.5,
            right:'500px'
        },1000)
    })

    $("#center").click(function(){
        $(".square").animate({
            opacity:1,
            right:'0px'
        },1000)
    })

})

var a =document.getElementById("firstno").Value
var b =document.getElementById("secondno").Value
var c=a+b;
$('#add').click(function(){
    $("#result").html(`The Result is ${c}`)
})

$("#panels").accordion({
    collapsible:true,
    animate:300,

    icons:{
        header:"ui-icon-plus",
        activeHeader:"ui-icon-minus"
    },
    heightStyle:true
})
$("#datetime").datepicker({
    changeYear:true,
    changeMonthes:true,
    showWeek:true,
    showOtherMonths:true
})
$(".imgt").tooltip({
    track:true,
    show:{
        effect:"blind",
        duration:300
    },
    hide:{
        effect:"explode",
        duration:200
    }
})
$('#auto').autocomplete(
    {
    source:["Rajasthan","Madhya Pradesh","Jammu and Kashmir","Uttar Pradesh","Madhya Pradesh","Punjab","Manipur",
            "West Bengal","Orrisa","Jharkhand","Arunachal Pradesh","Mizoram","Gujrat","Delhi","Kerela"]
    },
    {
    autoFocus:true,
    delay:0,
    minLength:1    
    });
$(".squares").draggable({
    containment:"parent",
    cursor:"grabbing",
    opacity:"0.8",
    snap:true,
    snapTolerance:20
})
$(".sort").sortable({
    opacity:0.8,
    distance:40,
    containment:"parent",
    cursor:"grabbing",
})
$(".resizimg").resizable({
    maxWidth:300,
    maxHeight:300,
    autoHide:true,
    ghost:true,
    aspectRatio:true
})
$(".msg").dialog({
    title:"A Quick Start",
    madal:true,
    width:700,
    height:650,
    buttons:[
        {
            text:"close",
            icon:"ui-icon-squaresmall-close",
            click:function(){
                $(this).dialog("close")
            }
        },
        {
            text:"OK",
            icon:"ui-icon-check",
            click:function(){
                $(this).dialog("close")
            }
        }
    ]
})