let Mock = require("mockjs")
let data = [{
    id: 0,
    name: "猪猪侠",
    text: "童话里做英雄"
},
{
    id: 1,
    name: "超人强",
    text: "童话里做英雄"
},
{
    id: 2,
    name: "菲菲公主",
    text: "童话里做英雄"
},
{
    id: 3,
    name: "小呆呆",
    text: "童话里做英雄"
},
{
    id: 4,
    name: "迷糊老师",
    text: "童话里做英雄"
}]
Mock.mock("/api/homeindex", "get", function (config) {
    console.log(config)
    return data

})