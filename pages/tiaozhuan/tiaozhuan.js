Page({
  data:{
    defen:null,
    index:null,
    postLength:null,
  },
  onLoad:function(options){
    this.setData({
      defen: options.defen,
      index:options.index,
      postLength: options.num

    })
  }, 
  gotonext: function (options) {
    var that= this;
    if (that.data.index >= this.data.postLength){
      that.gotoend();
    }
    else{
      wx.redirectTo({
        url: './../index/index?defen=' + this.data.defen + "&index=" + (this.data.index)
      })
    }
    
  },

  gotoend: function () {  
    wx.navigateTo({
      url: './../end/end'
    })
  },
})