// pages/navmain/timer/timer.js
var num = 0.00, flag = 1;
var timerID;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    btncolor: ["#00ff94", "#ff0094", "#94ff00"],
    num: num,
    flag: flag
  },
  start: function () {
    var that = this;
    if (flag == 1) {
      timerID = setInterval(() => {
        that.timer()
      }, 10);
      flag = 0;
    }
  },
  stop: function () {
    var that = this;
    flag = 1;
    clearInterval(timerID)
  },
  restart: function () {
    var that = this;
    num = 0;
    flag = 1;
    that.setData({
      num: 0
    })
  },
  timer: function () {
    var that = this;
    console.log(num, flag)
    if (num >= 0 && num <= 999999) {  /*避免无限计时*/
      that.setData({
        num: (num += 0.01).toFixed(2)
      })
    } else {
      that.setData({
        num: 0
      })
      console.log(num, flag)
    }
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let audio = wx.createInnerAudioContext()
    audio.src = "/audio/PatrickStar.mp3"
    audio.play()
  },
})