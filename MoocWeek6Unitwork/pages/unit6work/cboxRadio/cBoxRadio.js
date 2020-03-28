// pages/unit6work/cboxRadio/cBoxRadio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    degree:'60deg'
  },

  checkboxchange: function(e) {
    var colors = [];
    var ch = '';
    colors = e.detail.value;

    // for (var i = 0 ; i<colors.length; i++){
    //   if('eblack' in )
    // }

    for(var i in colors){
      if(colors[i] == 'eblack'){
        ch +='black,'
      }
      if (colors[i] == 'eblue') {
        ch +='#0094ff,'
      }
      if (colors[i] == 'ered') {
        ch +='#ff0094,'
      }
      if (colors[i] == 'egreen') {
        ch +='#94ff00,'
      }
      if (colors[i] == 'ewhite') {
        ch +='white,'
      }
    }

    // ch -= ch[ch.length-1];  /**减去末尾 逗号 */
    // ch -= ch[-1];  /**减去末尾 逗号 */
    ch = ch.slice(0,-1);
    
    console.log("颜色ch",ch);
    this.setData({
      color:ch
    })
  },

  radiochange: function(e) {
    this.setData({
      degree:e.detail.value,
    })
    console.log("角度" ,e.detail.value);
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