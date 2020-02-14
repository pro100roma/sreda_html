Share = {
    me : function(el){
        Share.popup(el.href);
        return false;
    },

    popup: function(url) {
        window.open(url,'','toolbar=0,status=0,width=626,height=436');
    }
};