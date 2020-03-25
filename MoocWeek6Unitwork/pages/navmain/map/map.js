// pages/navmain/map/map.js
Page({
  data: {
    longtitude: 104.060739, //经度
    laitude: 30.572324, //纬度
    markers: [{
      id: 1,
      longtitude: 104.060739, //经度
      laitude: 30.572324, //纬度
      iconPath: 'image/location.png', //标记点图标
      label: { //标记点标签
        content: '我的位置', //标记点文本
        color: '#0000FF', //标记点文本颜色
        bgColor: '#FFFF00', //标记点文本背景颜色
        fontSize: 20
      }
    }, {
        longtitude: 104.060739, //经度
        laitude: 30.572324, //纬度
      iconPath: 'image/location.png' //标记点图标
    }]
  },

  chooseLocation: function() {
    wx.chooseLocation({ //选择位置
      success: function(res) {
        console.log(res)
      },
    })
  },
  openLocation: function() {
    wx.getLocation({ //获取位置
      type: 'gcj02',
      success: function(res) {
        wx.openLocation({ //打开位置
          latitude: res.latitude,
          longitude: res.longitude,
          scale: 28,
        })
      },
    })
  }
})