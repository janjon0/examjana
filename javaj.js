function cliick(){
   let radio=document.querySelectorAll("input[type='radio']");
   let yes=0;
   let no=0;
   for(let i= 0 ; i<radio.length;i++){
       if(radio[i].checked && radio[i].value=='yes'){
           yes++;
       }
       else if (radio[i].checked && radio[i].value=='no'){
          no++;
       }}
       alert(`yes=${yes},no=${no}`);
   } 
