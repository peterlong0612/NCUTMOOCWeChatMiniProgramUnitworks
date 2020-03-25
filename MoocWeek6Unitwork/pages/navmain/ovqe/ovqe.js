// pages/navmain/ovqe/ovqe.js

var a, b, c, delta, x1, x2;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: 'Hello, world!'
  },

  formsubmit: function(e) {
    a = parseFloat(e.detail.value.a);
    //a = parseFloat('');
    b = parseFloat(e.detail.value.b);
    c = parseFloat(e.detail.value.c);

    if (e.detail.value.b == '') {
      b = 0;
    }
    if (e.detail.value.c == '') {
      c = 0;
    }

    delta = b * b - 4 * a * c;

    // this.setData({
    //   result: a
    // })
    // 无输入则abc为null（object类型），判断不能用==null
    // !a==0好像也不行，有0会被判true？
    if (e.detail.value.a == '') {
      this.setData({
        result: '熬夜多了连参数都忘了输了？'
      })
    } else if (a == 0) {
      wx.showToast({
        icon: 'fail',
        title: 'a=0！非二次方程',
        duration: 2000
      })
    } else if (delta < 0) {
      this.setData({
        result: 'delta<0，无实根！'
      })
    } else {
      let temp = Math.sqrt(delta);
      x1 = (-b + temp) / (2 * a);
      x2 = (-b - temp) / (2 * a);
      this.setData({
        result: 'x1为：' + x1 + '， x2为：' + x2

      })
    }
  },

  reset: function(e) {
    this.setData({
      result: '加油！'
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