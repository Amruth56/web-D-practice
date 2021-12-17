
        let para=document.getElementById('first');
        para.addEventListener("mouseover",function run(){
            alert("Mouse Inside")

        })

        // para.addEventListener("mouseout",function run(){
        //     alert("Mouse outside")

        // })  

        // para.addEventListener("mouseover",function run(){
        //     alert("Mouse Inside")

        // })

        function toggleHide(){
           let btn = document.getElementById('btn');
           let para = document.getElementById('first');

           if(para.style.display != 'none'){
           para.style.display='none';
        }

           else{
            para.style.display="block";
           }
        }