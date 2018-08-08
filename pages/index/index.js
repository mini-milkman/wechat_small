var postData = require("../../data/post-data.js");
var postData_length = postData.postList.length;
Page({
  data: {
    // text:"这是一个页面"
    postList: postData.postList,
    postLength:postData.postList.length,
    index: 0,
    bc_default: '#FBFBFB',
    bc_right: '#98FB98',
    bc_wrong: '#FF99B4',
    bcA: '',
    bcB: '',
    bcC: '',
    bcD: '',
    ny: '显示答案',
    defen: 0,
    display_index:0
  },

  onLoad: function(options){
    var that=this;
    var newindex;
    var newdefen;
    newindex = options.index;
    newdefen = options.defen;
    
    if (!newindex){
      newindex=0;
      newdefen=0;
    };
    var aa = postData.postList.slice(parseInt(newindex) > postData_length ? postData_length : parseInt(newindex), (parseInt(newindex) + 2) > postData_length ? postData_length : (parseInt(newindex)+2))
    //if(aa.length==0){
      //that.gotoend();
    //}
    //else{
      
      this.setData({
        postList: aa,
        defen: parseInt(newdefen),
        display_index: 0,
        index: parseInt(newindex)
      });
    //}
  },
  nextQuestion: function () {
    var that = this;
    if (that.data.index < that.data.postList.length - 1) {
      this.setData({
        index: that.data.index + 1,
        display_index:that.data.display_index+1,
        bcA: that.data.bc_default,
        bcB: that.data.bc_default,
        bcC: that.data.bc_default,
        bcD: that.data.bc_default,
        ny: '显示答案'

      });
    }
  },
  lastQuestion: function () {
    var that = this;
    var displau_num = (that.data.display_index - 1) > 0 ? that.data.display_index - 1:0;
    if (that.data.index > 0) {
      this.setData({
        index: that.data.index - 1,
        display_index: displau_num,
        ny: '显示答案'
      });
    }
  },
  btnOpClick: function (e) {
    var that = this;
    var select_value = e.currentTarget.id;
    var select = select_value.split('.')[0];
    var select_text = select_value.split('.')[1];
    //var jieg = postData.postList[that.data.index].daan;
    var jieg = that.data.postList[that.data.display_index].daan;
    if (select_text == jieg) {
      if (that.data.index < that.data.postList.length - 1) {
        that.ifright(select);
        that.nextQuestion();     
      }
      else {
        that.ifright(select);
        that.gotonext();
      }
    }
    else {
      if (select == 'A') {
        this.setData({ bcA: that.data.bc_wrong });
      }
      else if (select == 'B') {
        this.setData({ bcB: that.data.bc_wrong });
      }
      else if (select == 'C') {
        this.setData({ bcC: that.data.bc_wrong });
      }
      else if (select == 'D') {
        this.setData({ bcD: that.data.bc_wrong });
      }
      else if (select == 'E') {
        this.setData({ bcE: that.data.bc_wrong });
      }
    }
  },

  ifright:function(select){
    var that=this;
    if (select == 'A') {
      this.setData({ bcA: that.data.bc_right });
    }
    else if (select == 'B') {
      this.setData({ bcB: that.data.bc_right });
    }
    else if (select == 'C') {
      this.setData({ bcC: that.data.bc_right });
    }
    else if (select == 'D') {
      this.setData({ bcD: that.data.bc_right });
    }
    this.setData({
      defen: that.data.defen + 2
    })

  },

  gotonext: function () {
    
    wx.redirectTo({
      url: './../tiaozhuan/tiaozhuan?defen=' + this.data.defen + "&index=" + (this.data.index + 1) + "&num=" + this.data.postLength
    })
  },

  gotoend: function () {
    wx.navigateTo({
      url: './../end/end'
    })
  },
  xianshi: function () {
    var that = this;
    this.setData({
      ny: '答案是：' + that.data.postList[that.data.index].daan
    })
  }
})