'use strict';

/*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });*/
/*const links = document.querySelectorAll('.titles a');

for(let link of links){
  console.log(link);
}*/
/*const titleClickHandler = function(){
    console.log('Link was clicked!');
  }
  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }*/

  const titleClickHandler = function(event){
    const clickedElement = this;
    console.log('Link was clicked!');
  
    /*[DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
        activeLink.classList.remove('active');
    }
  
    /* add class 'active' to the clicked link */
    console.log('clickedElement:' , clickedElement);
    clickedElement.classList.add('active');
  
    /*[DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.post a.active')
        for (let activeArticle of activeArticles) {
            activeArticle.classList.remove('active');
        }
  
    /* get 'href' attribute from the clicked link */
  
    /* find the correct article using the selector (value of 'href' attribute) */
  
    /* add class 'active' to the correct article */
  }
  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }