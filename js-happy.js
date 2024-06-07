




document.getElementById('btnProduct').onclick = function(){
    calcCost();
    
  };
  
  function calcCost(){


    let currentPrice = 4000;



    //вписка пременных
    //Юр/физ лицо
    let checkbox1 = document.getElementById('checkbox1')
    if(checkbox1.checked){
       
    
        checkbox1 = +document.getElementById('checkbox1').value;
      

    }else{
        checkbox1 = 0;
    }

    let checkbox2 = document.getElementById('checkbox2')
    if(checkbox2.checked){
       
    
        checkbox2 = +document.getElementById('checkbox2').value;
        
    }else{
        checkbox2 = 0;
    }

    // выбор количесва гостей
    let checkbox3 = document.getElementById('checkbox3')
    if(checkbox3.checked){
       
    
        checkbox3 = +document.getElementById('checkbox3').value;
    }else{
        checkbox3 = 0;
    }
    let checkbox4 = document.getElementById('checkbox4')
    if(checkbox4.checked){
       
    
        checkbox4 = +document.getElementById('checkbox4').value;
    }else{
        checkbox4 = 0;
    }
    let checkbox5 = document.getElementById('checkbox5')
    if(checkbox5.checked){
       
    
        checkbox5 = +document.getElementById('checkbox5').value;
    }else{
        checkbox5 = 0;
    }
    let checkbox6 = document.getElementById('checkbox6')
    if(checkbox6.checked){
       
    
        checkbox6 = +document.getElementById('checkbox6').value;
    }else{
        checkbox6 = 0;
    }
    // способ оплаты
    let checkbox7 = document.getElementById('checkbox7')
    if(checkbox7.checked){
       
    
        checkbox7 = +document.getElementById('checkbox7').value;
    }else{
        checkbox7 = 0;
    }
    let checkbox8 = document.getElementById('checkbox8')
    if(checkbox8.checked){
       
    
        checkbox8 = +document.getElementById('checkbox8').value;
    }else{
        checkbox8 = 0;
    }
    // продолжительность
    let checkbox9 = document.getElementById('checkbox9')
    if(checkbox9.checked){
       
    
        checkbox9 = +document.getElementById('checkbox9').value;
    }else{
        checkbox9 = 0;
    }
    let checkbox10 = document.getElementById('checkbox10')
    if(checkbox10.checked){
       
    
        checkbox10 = +document.getElementById('checkbox10').value;
    }else{
        checkbox10 = 0;
    }
    let checkbox11 = document.getElementById('checkbox11')
    if(checkbox11.checked){
       
    
        checkbox11 = +document.getElementById('checkbox11').value;
    }else{
        checkbox11 = 0;
    }
    let checkbox12 = document.getElementById('checkbox12')
    if(checkbox12.checked){
       
    
        checkbox12 = +document.getElementById('checkbox12').value;
    }else{
        checkbox12 = 0;
    }
    //день
    let day = +document.getElementById('day').value;
    
    
    
    //вывод суммы
    
    let total = currentPrice + checkbox1 + checkbox2 + checkbox3 + checkbox4 + checkbox5 +checkbox6 + checkbox7 + checkbox8 + checkbox9 + checkbox10 + checkbox11 + checkbox12 + day;
    console.log(typeof(total))
   
  
  
  
    //вывод блока.
    document.getElementById('priceProduct').innerHTML = total;
    document.getElementById('infoProduct').style.display = 'block';

     //проверка на пустое знчаение
  
    // if (checkbox1 == 0){
    //     document.getElementById('infoProduct').style.display = 'none';
    //     alert('Заполните поле организатор');
    //     return;
    // }
    
   
    
  };