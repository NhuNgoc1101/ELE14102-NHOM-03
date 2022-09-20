function myFunction1() {
  var x = document.getElementById("nhietDo").value;
 
      if(x<0){
        alert('Nhập sai, mời nhập lại!');
      }else if(x <10){
      nhietDo.style.backgroundColor = "green";
  }else if(x<50){
      nhietDo.style.backgroundColor = "blue";
  }else{
      nhietDo.style.backgroundColor = "red";
      alert('Nhiệt độ quá cao!');
  }
  }
function myFunction2() {
  var y = document.getElementById("doAm").value;
    
    if(y<0){
      alert('Nhập sai, mời nhập lại!');
    }else if(y <200){
      doAm.style.backgroundColor = "green";
    }else if(y<500){
      doAm.style.backgroundColor = "blue";
    }else{
      doAm.style.backgroundColor = "red";
      alert('Độ ẩm quá cao!');
    }
  }
function myFunction3() {
  var z = document.getElementById("anhSang").value;
    if(z<0){
      alert('Nhập sai, mời nhập lại!');   
    }else if( z <30){
      anhSang.style.backgroundColor = "green";
    }else if(z<80){
      anhSang.style.backgroundColor = "blue";
    }else{
      anhSang.style.backgroundColor = "red";
      alert('Độ sáng quá cao!');
    }
}

