const myNodeList = document.querySelectorAll('p');
  const nds =[0,0,0,0,0,0,0,0,0,0,0,0];
  const das =[0,0,0,0,0,0,0,0,0,0,0,0];
  const ass =[0,0,0,0,0,0,0,0,0,0,0,0];
  setInterval(function(){
    let nd1 = Math.floor(Math.random()*100);
    let da1 = Math.floor(Math.random()*100);   
    let as1 = Math.floor(Math.random()*100);

    function fsRandomNhietDo(){
                       
      if(nd1<20){
        document.getElementById('nhietDo').style.background='#FF7F50';
      }else if(nd1<40){
        document.getElementById('nhietDo').style.background='#FF7256';
      }else if(nd1<60){
        document.getElementById('nhietDo').style.background='#EE5C42';
      }else if(nd1<80){
        document.getElementById('nhietDo').style.background='#FF0000';
      }else {
        document.getElementById('nhietDo').style.background='#8B3626';
      }
  }
                
    function fsRandomDoAm(){ 
                        if(da1<20){
                            document.getElementById('doAm').style.background='#BBFFFF';
                        }else if(da1<40){
                            document.getElementById('doAm').style.background='#AFEEEE';
                        }else if(da1<60){
                            document.getElementById('doAm').style.background='#7AC5CD';
                        }else if(da1<80){
                            document.getElementById('doAm').style.background='#5F9EA0';
                        }else {
                            document.getElementById('doAm').style.background='#53868B';
                        }
                    }
                    
                    function fsRandomAnhSang(){
                        
                        if(as1<20){
                            document.getElementById('anhSang').style.background='#9AFF9A';
                        }else if(as1<40){
                            document.getElementById('anhSang').style.background='#7CCD7C';
                        }else if(as1<60){
                            document.getElementById('anhSang').style.background='#00FF7F';
                        }else if(as1<80){
                            document.getElementById('anhSang').style.background='#00CD66';
                        }else {
                            document.getElementById('anhSang').style.background='#2E8B57';
                        }
                    }
               
                    fsRandomNhietDo();
                    fsRandomDoAm();
                    fsRandomAnhSang();

                    function bieuDo(){
                        nds.push(nd1); nds.shift();
                        das.push(da1); das.shift();
                        ass.push(as1); ass.shift();
                    }
                    bieuDo();
               
                for(var i = 0; i < nds.length;i++){
                       myNodeList[0].textContent = `${nd1} °C`;
                       myNodeList[1].textContent = da1 + ' %';
                       myNodeList[2].textContent = as1 +' lux';
                    }; 
            
                    Highcharts.chart('container', {
                        title: {
                          text: 'BIỂU ĐỒ'
                        },
    
                        yAxis: {
                            min:0,
                            max:100,
                        },
                        
                        xAxis: {
                            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                          
                        },
                        
                        options: {
                            scales: {
                              y: {
                                beginAtZero: true, 
                                
                            }
                          },},
                        
                        
                        series: [{
                          name: 'Độ ẩm',
                          data: 
                        }, {
                          name: 'Nhiệt độ',
                          marker: {
                            symbol: 'square',
                          },
                          data:
                        },{
                          name: 'Ánh sáng',
                          data:
                        },],
                        });},2000);

 
function myImage(){
    if(confirm('Bật đèn không?')==true){
        led = document.getElementById('myImage').src='bongdensang.jpg';
    }else if(confirm('Tắt đèn không?')==true){
        led = document.getElementById('myImage').src='bongden.jpg'
    }
}
            
function led2(){
    if(confirm('Bật đèn không?')==true){
        a = document.getElementById('led2').src='bongdensang.jpg';
    }else if(confirm('Tắt đèn không?')==true){
        a = document.getElementById('led2').src='bongden.jpg'
    }
}
