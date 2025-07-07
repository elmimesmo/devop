let todoVector =[ /*{
         //pedidos: 1,
         //name: 'Make dinner', 
         //dueDate: '2022-12-22',
         //numMesa: 12}, { 
         //pedidos: 2,
         //name: 'Wash dishes', 
         //dueDate: '2022-12-22',
         //numMesa: 1}*/];
      
let pedido = 0;

      function addTodo() {
        
         const tela = document.querySelector('.js-name-input');
         const mesa = document.querySelector('.js-mesa');
         const data = document.querySelector('.js-data');

         pedido++;         
         const guard1 = tela.value;
         const guard2 = data.value;
         const guard3 = mesa.value;

         if(guard1 === ''){
            alert('Por favor, preencha o pedido.');
         } else if(guard2 === ''){
            alert('Preencha a data.');
         } else if(guard3 ===''){
            alert('O número da mesa?'); 
         } else {
            todoVector.push(
               {pedidos: pedido,
               name: guard1,
               dueDate: guard2,
               numMesa: guard3 
            });
            console.log(todoVector);
            tela.value ='';
            mesa.value ='';
         
            renderTodoList();
         }
      }

      function renderTodoList(){
         let todoListHTML ='';
         let ordemDoPedido = 1;
         for(let i=0; i< todoVector.length; i++){
            const todo = todoVector[i];
            const name = todo.name;
            const dueDate = todo.dueDate;
            const numMesa = todo.numMesa;
            const pedido = todo.pedidos;
            //<font color="red">
            //<p class="js-ordemPedido css-ordemPedido">
            /* <p class= "js-ordemPedido css-ordemPedido"> 
                     ${pedido} - 
                  </p> */
             
            const html = ` 
               <div class="css-menu">
                  <div class="js-ordemPedido css-ordemPedido"> 
                     ${pedido} º
                  </div>  
               </div>
               <div class="css-menu"> 
                  ${name}
               </div>
               <div class="css-menu">
                  ${numMesa}
               </div>
               <div class="css-menu">
                  ${dueDate}
               </div>

               <div class="css-menu"> 
                  <button class="css-botoes" onclick="   
                     todoVector.splice(${i}, 1);
                     console.log(todoVector);
                     renderTodoList();
                  "> Remover 
                  </button>
               </div>`;
            

             todoListHTML += html;
             document.querySelector('.js-list').innerHTML = todoListHTML; 
             console.log(todoListHTML);
         }  
         
         document.querySelector('.js-list').innerHTML = todoListHTML; 
         console.log(todoListHTML);

      }
