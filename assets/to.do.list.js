let data;
          if(localStorage.getItem("mytodoList")){
          data = JSON.parse(localStorage.getItem("mytodoList")); //データを取り出してdataに代入
          }else{
          data = [];
}
          console.log(data);

          for(let i = 0; i < data.length ;i++){
          add_li_tag(data[i]);
}

let addbtn = document.querySelector("#btn");

          addbtn.addEventListener("click",function(){

          let input_text = document.querySelector("#input").value;

          if( input_text != ""){

          add_li_tag(input_text);

          data.push(input_text);

           localStorage.setItem('mytodoList',JSON.stringify(data));

          document.querySelector("#input").value = "";

}
});

function add_li_tag(task_text){ 

         let todo_list = document.querySelector(".todo-list");
   
         let todo_li = document.querySelectorAll("li");
   
         let li =  document.createElement("li"); 

         let i = todo_li.length;

         if (i % 2 === 0) {
                todo_list.appendChild(li);
                li.classList.add("list2");
         } else {
                todo_list.appendChild(li);
                li.classList.add("list1");
         };

console.log (i);

        li.textContent = task_text;
  
console.log(li);


        let div_delete = document.createElement("div");
 
　    　 div_delete.classList.add("fas");
　　
        div_delete.classList.add("fa-trash-alt");

        li.appendChild(div_delete);　

        div_delete.addEventListener("click", function(){

             let hantei = confirm("本当に削除しますか？");

             if(hantei == true){
             this.parentElement.remove();

             //data配列からも削除する
             let del_text = this.parentElement.textContent;
             data.splice(data.indexOf(del_text),1);


             localStorage.setItem('mytodoList',JSON.stringify(data));

             let todo_list_children = document.querySelector(".todo-list").children;

             console.log(todo_list_children);
              
              for(let i = 0; i < todo_list_children.length ;i++){
                todo_list_children[i].remove();
              }
             

             // またliタグを振り直す
             for(let i = 0; i < data.length ;i++){
                add_li_tag(data[i]);
             }

        }
})
}







