var local_database = [{
  "name": "收取关山五十州上句是什么？",
  //"daan": "A",
  "daan": "男儿何不带吴钩",
  "content": ["男儿何不带吴钩", "天若有情天亦老", "大漠沙如雪", "主父西游何时归"]
},
{
  "name": "危乎高哉上句是什么？",
  //"daan": "B",
  "daan": "蜀道难，难于上青天",
  "content": ["明朝散发弄扁舟", "蜀道难，难于上青天", "床前明月光", "吾爱孟夫子"]
},
{
  "name": "感时花溅泪下句是什么？",
  "daan": "恨别鸟惊心",
  "content": ["也无风雨也无晴", "明月几时有", "恨别鸟惊心", "老夫聊发少年狂"]
}
];

//var local_database=[];
//var local_file='./test.txt';
//var fso = new XMLHttpRequest();
//local_database = local_database.concat(fso.open("GET",local_file,true));

//source_database打乱顺序后的list
var source_database;
var tempContent;
var indexList;

var list_length=local_database.length;

//改变选项顺序
function change_content_sort(value_json)
{  
  for (var x = 0; x <getJsonLength(value_json);x++){
    tempContent=[];
    indexList = [];
    indexList=indexList.concat(init_index_list(value_json[x].content));    
    tempContent = tempContent.concat(changeSort(indexList, value_json[x].content));
    value_json[x].content = tempContent;
  }
  return value_json;
};

//判断json长度
function getJsonLength(jsonData){
  var jsonlength=0;
  for(var item in jsonData){
      jsonlength++;
  }
  return jsonlength;

}

//初始化下标数list
function init_index_list(init_list){
  var index_list = []
  for (var i = 0; i < init_list.length; i++) {
    index_list[i] = i
  };
  return index_list;
};

//随机改变list顺序
function changeSort(index_base,list_base){
  index_base=index_base.sort(randomsort);
  source_database = [];
  for (var q = 0; q < list_base.length;q++){
    var temp=list_base[index_base[q]]
    source_database.push(temp)
  };
  return source_database;
};

//随机方法
function randomsort(a,b){
  return Math.random()-0.5;
};

module.exports = {
  postList: changeSort(init_index_list(local_database),change_content_sort(local_database))
}