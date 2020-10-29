// このファイルに処理を記述する

// モックの本来は動的に作る部分をコメントアウトしておく

// addボタンの処理

// addボタンが押されたら
// 1 入力文字のチェック
// 空文字なら何もしない
// 何か入力されていたら
// 2 ulの中にliとして表示する
// 表示するliには右側にdeleateボタンが表示されているようにする
// 追加されるliはどんどん下に追加されていく

// addボタン要素の取得

　let addbtn = document.querySelector("#btn");

// addbtnが押されたときのイベントを取得(addEventListener)
// イベントを察知したい要素　addEventListener(察知したいイベント,function(){イベントが発生したら行いたい処理});
 addbtn.addEventListener("click",function(){
   // １入力文字のチェック
   // 入力文字の取得 (inputの時はtext.contentではなくvalue)
   let input_text = document.querySelector("#input").value;
   //input_textが空じゃなかったら処理を行う 
     if( input_text != ""){
   // 2 ulの中にliとして表示する
   // 親要素のulを変数に取得する
   let todo_list = document.querySelector(".todo-list");
   // 追加予定のliタグを生成する
   let li =  document.createElement("li");
   // listの中は<li></li>が入ってる
   // liのクラスにlistを追加
   li.classList.add("list");
   // li<li class = "list"></li>が入ってる

   // 生成したliタグの文字を入力された文字（input_text)にする（代入する）
   li.textContent = input_text;
   // li<li class = "list">入力された文字</li>
   console.log(li);

   // liタグを作ったら実際にタグをulに追加する（appendChild)


     }




 });
  
