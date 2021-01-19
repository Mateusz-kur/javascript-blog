/*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });
*/
const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
    console.log(event)
  
    /* remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
        activeLink.classList.remove('active');
    }
  
    /* add class 'active' to the clicked link */
    clickedElement
        activeLink.classList.add('active')
        console.log('clickedElement:', clickedElement);
  
    /* remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.titles active');

    for(let activeArticle of activeArticles){
        activeArticle.classList.remove('active');
    }
  
    /* get 'href' attribute from the clicked link */
    const articleSelector = clickedElement;
    clickedElement.getAttribute("href");
    console.log(articleSelector);
  
    /* find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);
    console.log(targetArticle);
  
    /* add class 'active' to the correct article */
    clickedElement
        targetArticle.classList.add('active')
        console.log('clickedElement:', clickedElement);
  }
  
  {
    const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';
  
  function generateTitleLinks(){
  
    /* remove contents of titleList */
    const titleList;
    querySelector(optTitleListSelector) = titleList;
    function clearMessages(){
        document.titleList.innerHTML = '';
    }
    let html = '';
    for (let article of articles) {
  
    /* for each article */
        const articles = optArticleSelector;

        for (const article of optArticleSelector) {
        
        }
  
      /* get the article id */
      const articleId = articleId.getAttribute("id")
  
      /* find the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
  
      /* get the title from the title element */
  
      /* create HTML of the link */
      const linkHTML = '<li><a href="#" ' +articleId+ '><span>' +articleTitle+ '</span></a></li>';
      console.log(linkHTML);
  
      /* insert link into html variable */
      html = html + linkHTML;
    }
    titleList.innerHTML = html;

    const links = document.querySelectorAll('.titles a');
    console.log(links);
    
    for(let link of links){
      link.addEventListener('click', titleClickHandler);
    }
  }
  
  generateTitleLinks();
  }