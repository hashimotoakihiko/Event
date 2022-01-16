let button = document.querySelector("button"); 
// clickイベントを登録します 

button.addEventListener('click', function(){ 
  // // div要素の中身は「clickされました」となります。
  // let el = document.querySelector("div"); 
  // el.textContent = "clickされました"; 
  // thisは変数buttonを指しています 2 
  this.textContent = "clickされました"; 

}); 



//ポイント1. 何かしらのアクションとDOM操作を紐付けている部分をイベントという 
//ポイント2. イベントの待ち受けには addEventListener()を利⽤する
  要素.addEventListener("イベント文字列", function() { 
  // DOM操作など 
  }); 
//ポイント3. addEventListener() 内の関数では this は、イベントリスナーを登録した要素⾃体を指す 
