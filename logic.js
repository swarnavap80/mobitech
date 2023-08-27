function scrollDown() {
    // Smoothly scroll the page down by 500 pixels
    window.scrollBy({ top: 800, left: 0, behavior: 'smooth' });
    
   
  }
 

  let title = document.querySelector('#static');
  let name1 = " THE BEST PHONES IN THE REGION";
  let index = 1;
  
  
  const typeWriter = ()=> {
      
      let new_title = name1.slice(0,index);
      
      title.innerText = new_title;
      
      index++;
      
  
     setTimeout(() => {typeWriter()}, 100);
  }
  
  
  
  
  
  typeWriter();