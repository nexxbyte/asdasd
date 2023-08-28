new Vue ({
    el : "#trading-platform",
    data : {
        doneRender : false,
        //reremder modal key
        rerenderKey : 0,

        //color mode
        colormode : false,

        //modals checker
        annmodal: false,
        mainmodal: false,
        wlistmodal: false,
        ordmodal : false,

        //inner main modal content
        imm : [dpw=false, rfr=false, crd=false, 
            prd=false, ovr=false, plr=false,
            uns=false, tra=false, pac=false, 
            set=false, fme=false, tus=false],

        credsChange : false,
        pdetEm : false,
        pdetMo : false,
        viewPlRes : false,
        viewUoRes : false,
        viewTrRes : false,
        //DEPO WITH
        depowithmain : true,
        snew :false,
        depform:false,
        witform:false,
        dreqsub:false,
        wreqsub:false,
        depact : false,
        witact : false,

        //top statistics
        tss : [cur=true, cre=true, unr=true, mpl=true, mar=true, plo=false, odd=true, oam=false],
        //if stats are hidden
        statsHide : false,
        //order ticket advanced date
        adCheck : false,
        //order ticket confirm
        confirmedTicket : false,
        confOrdModal : false,
        goodtillval : false,
        expirydateval: false,
        //forecast grid
        forGridModal : false,
        //ALERTS
        pdetemail : false,
        pdetmobil : false,
        prefalert : false,
        dmessage : false,
        wmessage : false
    },
    mounted () {this.doneRender = true},
    methods : {
        checkDepWit : function() {
            if(this.depact){this.depform = true} else if(this.witact){this.witform = true}
        },
        resetPos : function(e) {
            $(e).closest(".inner-cont").css("left", "0");
            $(e).closest(".inner-cont").css("top", "0");
            //resets active inner main modal content
            for(var i = 0; i < this.imm.length; i++) {
                this.imm[i] = false;
            }
            //resets ordtick
            if($(".order-ticket .inner-cont").hasClass("lg")){
                $(".order-ticket .inner-cont").removeClass("lg");
            }
            $("#fut-ord").removeClass("active");
            $("#fut-ord-content").removeClass("active");
            $("#cur-ord").addClass("active");
            $("#cur-ord-content").addClass("active");
            //remove advance dates normal / positional radios
            this.adCheck = false;
            //removes error messages
            $(".error-message").removeClass("show");
            //confirm ticket reset
            this.confirmedTicket = false;
            this.goodtillval = false;
            this.expirydateval = false;
            //depo with reset
            this.depowithmain = true;
            this.snew = false;
            this.depform=false;
            this.witform=false,
            this.dreqsub=false;
            this.wreqsub=false;
            this.depact=false;
            this.witact=false;
            this.dmessage=false;
            this.wmessage=false;
        },
        resetDepoWith : function() {
            //depo with reset
            this.depowithmain = true;
            this.snew = false;
            this.depform=false;
            this.witform=false,
            this.dreqsub=false;
            this.wreqsub=false;
            this.depact=false;
            this.witact=false;
            this.dmessage=false;
            this.wmessage=false;
        },
        resetInner : function(n) {
            //resets active inner main modal content
            for(var i = 0; i < this.imm.length; i++) {
                this.imm[i] = false;
            }
            //change active
            this.imm[n] = true;

            //rerender key to rerender element
            ++this.rerenderKey;
        },
        checkDepoAm : function(){
            console.log("#deposit-amount").val());
            if($("#deposit-amount").val() == "") {
                this.dmessage = true;
            } else {
                this.dreqsub = true;
            }
        },
        checkWithAm : function(){
            console.log("#withdraw-amount").val());
            if($("#withdraw-amount").val() == "") {
                this.wmessage = true;
            } else {
                this.wreqsub = true;
            }
        },
        spbookCheck :function(){
            checkAll();
        },
        spbookUnCheck :function(){
            unCheckAll();
        },
        leftnavDrop : function(ind) {
            $(".left-accord .outer li:nth-child("+ind+") .inner").slideDown(200);
            $(".left-accord .outer li:nth-child("+ind+") .inner").toggleClass("active");
        },
        resetAccords : function() {
            resetAccordion();
        },
        toggleDdown : function() {        
            $(".mcount-ddown ul").toggleClass("active");
        },
        //reset alerts
        resetAlerts : function() {
            this.prefalert = false;
            this.pdetmobil = false;
            this.pdetemail = false;
        }
    }
});

//CHECKBOXES
$(".left-check input").on("change",function(){
    if($(this).closest(".left-check").next().hasClass("active")){
        $(this).closest(".left-check").next().slideUp(200);
    }else {
        $(this).closest(".left-check").next().slideDown(200);
    }
    $(this).closest(".left-check").next().toggleClass("active");
});

//WLIST MODAL FILTER
var filterq = false;
$(window).click(function(){
    if(filterq) {
        $(".filter-cont").removeClass("active");
        filterq = false;
    }
});
$(".filter-cont").click(function(event){
    event.stopPropagation();    
    if(!filterq) {
        $(this).addClass("active");
        filterq = true;
    }
});

$(".wlist-filter-drop li").click(function(){
    $("#wlist-filter").val($(this).text());
});

$(".filter-cont .clear-button").click(function(){
    $("#wlist-filter").val("");
})

//MAIN MODAL ACCORDION
$(".left-accord .outer li h3").click(function(){
    var inner = $(this).next(".inner");
    if ($(inner).hasClass("active")){
        $(inner).slideUp(200);
    } else {$(inner).slideDown(200)}
    $(inner).toggleClass("active");
});

//MODAL DRAGGING
$(".inner-cont").draggable({handle : ".top"});

//ORDER TABLE DOCKING SIZES
$("#sdock").click(function(){
    if (!($(".table-orders").hasClass("sm"))){
        $(".table-orders").removeClass("min");$(".table-games").removeClass("full");
        $(".table-orders").removeClass("lg");$(".table-games").removeClass("sm");
        $(".table-orders").removeClass("md");$(".table-games").removeClass("md");
        $(".table-orders").addClass("sm");$(".table-games").addClass("lg");
    }
});
$("#mdock").click(function(){
    if (!($(".table-orders").hasClass("md"))){
        $(".table-orders").removeClass("min");$(".table-games").removeClass("full");
        $(".table-orders").removeClass("lg");$(".table-games").removeClass("lg");
        $(".table-orders").removeClass("sm");$(".table-games").removeClass("sm");
        $(".table-orders").addClass("md");$(".table-games").addClass("md");
    }
});
$("#ldock").click(function(){
    if (!($(".table-orders").hasClass("lg"))){
        $(".table-orders").removeClass("min");$(".table-games").removeClass("full");
        $(".table-orders").removeClass("sm");$(".table-games").removeClass("lg");
        $(".table-orders").removeClass("md");$(".table-games").removeClass("md");
        $(".table-orders").addClass("lg");$(".table-games").addClass("sm");
    }
});

//TOP STATS
$(".top-stats .stats").click(function(){
    $(".top-stats .show-hide-stats").toggleClass("active");
});

//MY ACCOUNT DROPDOWN
$(".mcount-ddown .top").click(function(){
    var el = $(this).closest(".mcount-ddown").find("ul");
    $(el).toggleClass("active");
});

//COUNTRY DROPDOWN
$(".country-ddown .top").click(function(){
    var el = $(this).closest(".country-ddown").find("ul");
    $(el).toggleClass("active");
});

//SETTINGS
//spbook check uncheck
function checkAll(){
    for(var i = 0; i < $(".spbook-check-list li input:checkbox").length; i++) {
        if(!($($(".spbook-check-list li input:checkbox")[i]).prop('checked'))) {
            $($(".spbook-check-list li input:checkbox")[i]).prop('checked', true);
        }
    }
}
function unCheckAll(){
    for(var i = 0; i < $(".spbook-check-list li input:checkbox").length; i++) {
        if($($(".spbook-check-list li input:checkbox")[i]).prop('checked')) {
            $($(".spbook-check-list li input:checkbox")[i]).prop('checked', false);
        }
    }
}

//SPORT TABS CHANGE CONTENT BELOW
const sportTabs = $(".sport-cat-tabs ul li");
const sportTable = $(".table-games");
$(sportTabs).click(function(){
    for(var i = 0; i < sportTabs.length; i++){
        $(sportTabs[i]).removeClass("active");
        $(sportTable[i]).removeClass("active");
    }
    $(this).addClass("active");
    $(sportTable[$(this).index()]).addClass("active");
});

//SPORT FILTER TABS
const filterTabs = $(".filter-tabs ul li");
$(filterTabs).click(function(){
    for(var i = 0; i < filterTabs.length; i++){
        $(filterTabs[i]).removeClass("active");
    }
    $(this).addClass("active");
});

//ORDERS TABS
const orderTabs = $(".ordrs-tabs li");
const orderTables = $(".order-table");
$(orderTabs).click(function(){
    for(var i = 0; i < orderTabs.length; i++){
        $(orderTabs[i]).removeClass("active");
        $(orderTables[i]).removeClass("active");
    }
    $(orderTables[$(orderTabs).index($(this))]).addClass("active");
    $(this).addClass("active");
});

function resetAccordion () {
    for(var i = 0; i < $(".left-accord .outer li .inner").length; i++) {
        var inners = $(".left-accord .outer li .inner");
        if($(inners[i]).hasClass("active")) {
            $(inners[i]).hide();
            $(inners[i]).toggleClass("active");
        }
    }
    //resets deposit withdraw
    $("#depowith .cont").removeClass("show");
    $("#depowith .main-depo-with").addClass("show");
}


//MINIMIZE TABLE ORDERS
$(".orders-ddown").click(function(){
    $(".table-games").toggleClass("full");
    $(".table-orders").toggleClass("min");
    minimizeQue = !minimizeQue;
});

//SHOW HIDE TABLE GAMES STATS
$(".btns .plus").click(function(){
    if(!($(this).closest(".tgames-row").hasClass("show-stats"))) {
        $(this).closest(".tgames-row").find(".stats").slideDown(200);
        $(this).closest(".tgames-row").addClass("show-stats");
    }
});
$(".btns .minus").click(function(){
    if($(this).closest(".tgames-row").hasClass("show-stats")) {
        $(this).closest(".tgames-row").find(".stats").slideUp(200);
        $(this).closest(".tgames-row").removeClass("show-stats");
    }
});
$(".dtime").click(function() {
    if(!($(this).closest(".tgames-row").hasClass("show-stats"))) {
        $(this).closest(".tgames-row").find(".stats").slideDown(200);
        $(this).closest(".tgames-row").addClass("show-stats");
    } else {
        $(this).closest(".tgames-row").find(".stats").slideUp(200);
        $(this).closest(".tgames-row").removeClass("show-stats");
    }
});
$(".ord-ticket-click-wrapper .match").click(function() {
    if(!($(this).closest(".tgames-row").hasClass("show-stats"))) {
        $(this).closest(".tgames-row").find(".stats").slideDown(200);
        $(this).closest(".tgames-row").addClass("show-stats");
    } else {
        $(this).closest(".tgames-row").find(".stats").slideUp(200);
        $(this).closest(".tgames-row").removeClass("show-stats");
    }
});
$(".ord-ticket-click-wrapper li:nth-child(2)").click(function() {
    if(!($(this).closest(".tgames-row").hasClass("show-stats"))) {
        $(this).closest(".tgames-row").find(".stats").slideDown(200);
        $(this).closest(".tgames-row").addClass("show-stats");
    } else {
        $(this).closest(".tgames-row").find(".stats").slideUp(200);
        $(this).closest(".tgames-row").removeClass("show-stats");
    }
});

//TABLE GAMES ITEM STAR
$(".btns .star").click(function(){
    console.log("asdasd");
    if($(this).hasClass("active")) {
        $(this).find("img").attr("src", "images/bstar-item.png");
    } else {
    console.log($(this).find("img"));
        $(this).find("img").attr("src", "images/bstar-item-fill.png");
    }
    $(this).toggleClass("active");
});

//DATEPICKERS
$("#start-time-from").datepicker();
$("#start-time-to").datepicker();

//filter by match time
$("#filter-by-match-time").click(function(){
    $("#match-time-dates-filter").toggleClass("active");
    $(".market-select").toggleClass("active");
});

//orders click
$("#jbms-rad").click(function(){
    console.log("trigger");
   if (!($(".when-order-expires").hasClass("active"))) {
       $(".when-order-expires").addClass("active");
   }
});
$("#custom-rad").click(function(){
    console.log("trigger");
   if (!($(".when-order-expires").hasClass("active"))) {
       $(".when-order-expires").addClass("active");
   }
});
$("#cancel-rad").click(function(){
    console.log("trigger");
   if ($(".when-order-expires").hasClass("active")) {
       $(".when-order-expires").removeClass("active");
   }
});

$("#cur-ord").click(function(){
    if(!($(this).hasClass("active"))){
        $("#fut-ord").removeClass("active");
        $("#fut-ord-content").removeClass("active");
        $(this).addClass("active");
        $("#cur-ord-content").addClass("active");
    }
});
$("#fut-ord").click(function(){
    if(!($(this).hasClass("active"))){
        $("#cur-ord").removeClass("active");
        $("#cur-ord-content").removeClass("active");
        $(this).addClass("active");
        $("#fut-ord-content").addClass("active");
    }
});

$(".ot-select").click(function(){
    if(!($(this).hasClass("focused"))) {
        $(".ot-select").removeClass("focused");
        $(this).addClass("focused");
    }
})

//GAME ITEMS ORDER SELECTOR
$(".ha-home-sel").click(function(){
    $(".outer-wrapper").removeClass("active");
    $(".home-away").addClass("active");
    if(!($(".ha-home").hasClass("focused"))) {
        $(".ot-select").removeClass("focused");
        $(".ha-home").addClass("focused");
    }
});
$(".ha-away-sel").click(function(){
    $(".outer-wrapper").removeClass("active");
    $(".home-away").addClass("active");
    if(!($("#ha-away").hasClass("focused"))) {
        $(".ot-select").removeClass("focused");
        $(".ha-away").addClass("focused");
    }
});
$(".ou-over-sel").click(function(){
    $(".outer-wrapper").removeClass("active");
    $(".over-under").addClass("active");
    if(!($(".ou-over").hasClass("focused"))) {
        $(".ot-select").removeClass("focused");
        $(".ou-over").addClass("focused");
    }
});
$(".ou-under-sel").click(function(){
    $(".outer-wrapper").removeClass("active");
    $(".over-under").addClass("active");
    if(!($(".ou-under").hasClass("focused"))) {
        $(".ot-select").removeClass("focused");
        $(".ou-under").addClass("focused");
    }
});
$(".hda-home-sel").click(function(){
    $(".order-ticket .inner-cont").addClass("lg");
    $(".outer-wrapper").removeClass("active");
    $(".home-draw-away").addClass("active");
    if(!($(".hda-home").hasClass("focused"))) {
        $(".ot-select").removeClass("focused");
        $(".hda-home").addClass("focused");
    }
});
$(".hda-draw-sel").click(function(){
    $(".order-ticket .inner-cont").addClass("lg");
    $(".outer-wrapper").removeClass("active");
    $(".home-draw-away").addClass("active");
    if(!($(".hda-draw").hasClass("focused"))) {
        $(".ot-select").removeClass("focused");
        $(".hda-draw").addClass("focused");
    }
});
$(".hda-away-sel").click(function(){
    $(".order-ticket .inner-cont").addClass("lg");
    $(".outer-wrapper").removeClass("active");
    $(".home-draw-away").addClass("active");
    if(!($(".hda-away").hasClass("focused"))) {
        $(".ot-select").removeClass("focused");
        $(".hda-away").addClass("focused");
    }
});

//WATCHLIST CHECK ALL UNCHECK ALL
$("#check-all-wlist").click(function(){
    var checkboxes = $(".checkbox-row input[type='checkbox']");
    for(var i=0; i < checkboxes.length; i++) {
        $(checkboxes[i]).prop("checked", true);
    }
    $(".right-check").slideDown(200);
    $(".right-check").addClass("active");
});
$("#uncheck-all-wlist").click(function(){
    var checkboxes = $(".checkbox-row input[type='checkbox']");
    for(var i=0; i < checkboxes.length; i++) {
        $(checkboxes[i]).prop("checked", false);
    }
    $(".right-check").slideUp(200);
    $(".right-check").removeClass("active");
});

$("#goverment-id-file").on("change", function(){
    var path = $(this).val();
    var npath = path.replace("C:\\fakepath\\", "");
    if(npath == "") {
        npath = "Choose file...";
        $(this).next().find("p").text(npath);
    } else {
        $(this).next().find("p").text(npath);
    }
});
$("#proof-add-file").on("change", function(){
    var path = $(this).val();
    var npath = path.replace("C:\\fakepath\\", "");
    if(npath == "") {
        npath = "Choose file...";
        $(this).next().find("p").text(npath);
    } else {
        $(this).next().find("p").text(npath);
    }
});
$("#draggable").mousedown(function(){
    if(!($(this).hasClass("dragging"))) {
        $(this).addClass("dragging");
        $(".table-games, .table-orders").removeClass("sm");
        $(".table-games, .table-orders").removeClass("md");
        $(".table-games, .table-orders").removeClass("lg");
        $(".table-orders").removeClass("min");
        $(".table-games").removeClass("full");
    }
})
$("#draggable").mouseup(function(){
    if($(this).hasClass("dragging")) {
        $(this).removeClass("dragging");
    }
})

$(".table-games").customResize({
    handleSelector: "#draggable",
    resizeWidth: false
});