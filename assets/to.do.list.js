// このファイルに処理を記述する

// モックの本来は動的に作る部分をコメントアウトしておく

// addボタンの処理

// addボタンが押されたら
// 1 入力文字のチェック
// 空文字なら何もしない
// 何か入力されていたら
// 2 ulの中にliとして表示する
// ３　表示するliには右側にdeleateボタンが表示されているようにする
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

  for(i=0 ; i<li.length; i++)
    if (i % 2 === 0) {
      todo_list.appendChild(li);
      li.classList.add("list2");

    } else {
      todo_list.appendChild(li);
      li.classList.add("list1");
     };
   // li.classList.add("list1");
   // // li<li class = "list"></li>が入ってる

   // 生成したliタグの文字を入力された文字（input_text)にする（代入する）
   li.textContent = input_text;
   // li<li class = "list">入力された文字</li>
   console.log(li);

   // liの中にdeleteボタンとなるdivタグを追加
   let div_delete = document.createElement("div");
   // div_deleteには<div></div>が入ってる

　　//divにクラス名deleateを指定 
   div_delete.classList.add("delete");
   // div_deleteには<div class = "delete"></div>が入っている
　　div_delete.classList.add("fas");
　　div_delete.classList.add("fa-trash-alt");
　　//生成したdivタグを親要素liに追加 
   li.appendChild(div_delete);　
  // liには<li class ="list>入力された文字<div class="delete">Delete</div></li>が入っている　 　　

   // deleteボタンの処理
   // 押されたリストの全部が消える
   // 押されたDeleteボタンの親要素のli
   div_delete.addEventListener("click", function(){
   // this Deleteボタン
   // this.parentElement Deleteを含んだliタグ
   let hantei = confirm("本当に削除しますか？");
　　//オッケーが押されたら削除する
     if(hantei == true){
      this.parentElement.remove();
     }

   });

   // liタグを作ったら実際にタグをulに追加する（appendChild)
   // todo_list.appendChild(li);

   document.querySelector("#input").value = "";

}
});
