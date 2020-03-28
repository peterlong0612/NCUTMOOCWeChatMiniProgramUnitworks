// pages/navmain/multmedia/multmedia.js

const audioContext = wx.createInnerAudioContext();
audioContext.volume = 0.5
audioContext.src = "/audio/PatrickStar.mp3"
// var flag =0

audioContext.onPlay(() => {
  console.log('开始播放')


}),
audioContext.onPause(()=>{
  console.log('播放暂停')
  // imageSrc =  
})

audioContext.onError((res)=>{
  console.log(res.errMsg)
  console.log(res.errCode)
})

Page({

  /**
   * 页面的初始数据
   */
  data: {
    vol:audioContext.volume,
    songselect:0,
    // imageSrc:["/icons/play.png", "/icons/parse.png"],
    pc_imageSrc: "/icons/play.png",
    // flag:flag
  },

  volChanging(e){
    // let vol = e.currenTarget.dataset.vol
    let value = e.detail.value;
    console.log('音量：',value)
    audioContext.volume = value
    // this.setData({
    //   vol:value
    // })
  },

  pause_continue:function(e){
    console.log("进入函数 || 暂停状态为",audioContext.paused)
    if(audioContext.paused){
      audioContext.play()
      console.log('play')
      this.setData({
        // flag:1,
        pc_imageSrc: "/icons/pause.png"
      })
      // console.log("setData之后 flag",flag)
    }
    
    if( !audioContext.paused ){
      audioContext.pause()
      console.log('pause')
      this.setData({
        // flag: 0,
        pc_imageSrc: "/icons/play.png"
      })
      // console.log("setData之后 flag", flag)
    }
    console.log("函数结束 || 暂停状态为", audioContext.paused)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // audioContext.play()
    console.log('页面加载onLoad')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('页面初次渲染onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('页面显示onShow')
    console.log('暂停？',audioContext.paused)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('页面隐藏onHide')
    audioContext.stop()
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    audioContext.stop()
    console.log('页面卸载onUnload')
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