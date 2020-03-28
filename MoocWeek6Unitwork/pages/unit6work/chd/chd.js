// pages/unit6work/chd/chd.js
var m;

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  calc: function(e) {
    // console.log("e.detail.value = ", e.detail.value.cd)
    m = parseFloat(e.detail.value.cd);
    console.log("m =", m)
    this.setData({
      chdinput: m,
      UM: m * 1e6,
      feet: m * 3.28084,
      _in: m * 39.37008,
      yd: m * 1.093613,
      mile: m * 0.000621371,
      nmi: m * 0.000539957,
      zhang: m * 0.333333,
      hand: m * 5.36
    })
  },

  reset: function() {
    this.setData({
      chdinput: '',
      UM: '',
      feet: '',
      _in: '',
      yd: '',
      mile: '',
      nmi: '',
      zhang: '',
      hand: ''
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})