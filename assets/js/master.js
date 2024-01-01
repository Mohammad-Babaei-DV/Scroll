  
         let mainscroll = document.getElementsByTagName('main')[0]
         let main = document.getElementsByTagName('div')[0]
         let mainclientw = main.clientWidth
         let span = document.getElementById('span')
         let fig = document.querySelectorAll('.bus>figure') 
         let bus = document.getElementsByClassName('bus')[0]
         let right = document.getElementById('right')
         let left = document.getElementById('left')
         let turn = 0


         bus.style.width= (mainclientw*(fig.length))+'px'

         fig.forEach((val)=>{
            val.style.width=mainclientw+'px'
         })
         
       
         mainscroll.addEventListener('scroll',(e)=>{
            let st =e.target.scrollTop
              
          
             
                if (st>0 && st<200) {
                    bus.style.left=0
                     turn =0
                    // console.log('scroll 1  '+turn);
                } 
                if (st>250 && st<350) {
                    bus.style.left=-((main.clientWidth))+'px'
                    turn =1 
                    // console.log('scroll 2  '+turn);
                }
                if (st>400 && st<550) {
                    bus.style.left=-((main.clientWidth)*2)+'px' 
                    turn =2
                    // console.log('scroll 3  '+turn);
                }
                if (st>600 && st<750) {
                    bus.style.left=-((main.clientWidth)*3)+'px'  
                    turn =3
                    // console.log('scroll 4  '+turn);
                }
                if (st>800 && st<950) {
                    bus.style.left=-((main.clientWidth)*4)+'px'
                    turn =4  
                    // console.log('scroll 5  '+turn);
                }

            })
             // console.log('right old '+turn);
             right.addEventListener('click',()=>{
                if (turn == 0) {
                    bus.style.left=-((main.clientWidth))+'px'
                    turn++
                }else if (turn == 1) {
                    bus.style.left=-((main.clientWidth)*2)+'px'
                    turn++  
                }else if (turn == 2) {
                    bus.style.left=-((main.clientWidth)*3)+'px'
                    turn++
                }else if (turn == 3) {
                    bus.style.left=-((main.clientWidth)*4)+'px'
                    turn++ 
                } 
                // console.log('right new '+turn);
            })
           
            // console.log('left old '+turn);
            left.addEventListener('click',()=>{
                if ((turn) == 4) {
                    bus.style.left=-((main.clientWidth)*3)+'px'
                    turn-- 
                   
                }else if ((turn) == 3) {
                    bus.style.left=-((main.clientWidth)*2)+'px'
                    turn--
                    
                }else if ((turn)== 2) {
                    bus.style.left=-((main.clientWidth))+'px'
                    turn-- 
                }else if ((turn)== 1) {
                    bus.style.left=0
                    turn--
                }
                // console.log('left new '+turn);
            })

