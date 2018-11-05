const baseURL="http://wx.xiaozhangbao.com/Eleven";

const setUserProvince = (p,c,a) => {//写入用户省份 市 区
    sessionStorage.setItem("province",p);
    sessionStorage.setItem("city",c);
    sessionStorage.setItem("area",a);
}

 const getUserProvince = () => {//读取用户省份 市 区
    return {
        province: sessionStorage.getItem("province"),
        city: sessionStorage.getItem("city"),
        area: sessionStorage.getItem("area")
    }
}

 const setUserId = (userId) => { //写入用户Id
    sessionStorage.setItem("userId",userId);
}

 const getUserId = () => { //读取用户Id
    return sessionStorage.getItem("userId");
}

 const getUserPhone = (Phone) => {//读取用户电话
    return sessionStorage.getItem(Phone);
}

 const setActivityId = (activityId) => { //写入活动ID
    localStorage.setItem("activityId",activityId);
}

 const getActivityId = () => { //读取活动Id
    return localStorage.getItem("activityId");
}
