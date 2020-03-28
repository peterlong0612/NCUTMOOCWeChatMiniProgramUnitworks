// pages/unit6work/swiperTch/swiperTch.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images:['/images/拼盘.png','/images/拼盘2.png','/images/白桃树莓冰.png'],
    auto:true,
    circular:false,
    ver:false,
    interval:false,
    intervaltime:5000
  },


  changeAuto:function(e){
    this.setData({
      auto: !this.data.auto,
      // auto: !this.auto
    })
  },
  changeCircular:function(e){
    this.setData({
      circular: !this.data.circular
    })
  },
  changeVer:function(e){
    this.setData({
      ver: !this.data.ver
    })
  },
  changeInterval:function(e){
    this.setData({
      interval:!this.data.interval,
      intervaltime: (this.intervaltime+2500)%5000
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})