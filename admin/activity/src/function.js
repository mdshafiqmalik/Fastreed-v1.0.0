// get anpnymous data onload



$.post( "src/anonymous.php", {which : 'guests'}, function(data){
    updateContent(data, 'devices', 'Devices');
});

$.post( "src/anonymous.php", {which : 'guests_sessions'}, function(data){
    updateContent(data, 'sessions', 'Sessions');
});

$.post( "src/anonymous.php", {which : 'sessionVisits'}, function(data){
    updateContent(data, 'views', 'Views');
});

function updateContent(data, viewId, name){
    let today = data.today;
    let yesterday = data.yesterday;
    let growth, pl, arrow, border;
    if(yesterday === 0 || today === 0){
        growth = 0;
        pl = 'profit';
        arrow = 'up'
        border = "green";
    }else{
        if(yesterday > today){
            growth = today/yesterday*100;
            growth = 100-growth;
            growth = '-'+growth;
            growth = parseInt(growth);
            pl = 'loss';
            arrow = 'down'
            border = "orangered";
        }else{
            growth = today/yesterday*100;
            growth = parseInt(growth);
            growth = growth-100;
            pl = 'profit';
            arrow = 'up'
            border = "green";
        }
    }
    $(`#${viewId}`).html(`
    <span class="number">${today}<span class="percent ${pl}">${growth}% </span><li class="${pl} rotate-${arrow} fa fa-play"></li></span>
    <span class="last">${yesterday}</span>
    <span class="entity">${name}</span>
    `);
    $(`#${viewId}`).css('border', `1px solid ${border}`);

}
