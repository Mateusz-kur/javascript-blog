'use strict';
{
  const templates = {
    articleLink: Handlebars.compile(document.querySelector('#template-article-link').innerHTML),
    tagCloudLink: Handlebars.compile(document.querySelector('#template-tag-cloud-links').innerHTML),
    authorsCloudLinks: Handlebars.compile(document.querySelector('#template-authors-cloud-links').innerHTML),
    rightTagLinks: Handlebars.compile(document.querySelector('#template-right-tag-links').innerHTML),
    rightAuthorsLinks: Handlebars.compile(document.querySelector('#template-right-authors-links').innerHTML),

  };


  const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optTagsListSelector = '.tags .list',
  optCloudClassCount = 5,
  optCloudClassRefix = 'tag-size-',
  optAuthorListSelector = '.authors';



  const titleClickHandler = function(event) {
    event.preventDefault();
    const clickedElement = this;
  
    /*[DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }
  
    /*[DONE] add class 'active' to the clicked link */
    clickedElement.classList.add('active');
  
    /*[DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.post');

    for(let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
    }
    /*[DONE] get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');
  
    /* [DONE]find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);
  
    /*[DONE] add class 'active' to the correct article */
    targetArticle.classList.add('active');
  
  };


  function generateTitleLinks(customSelector = '') {

    /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector + customSelector);

    let html = '';
    for (let article of articles) {

      /* get the article id */
      const articleId = article.getAttribute('id');

      /* find the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;

      /* get the title from the title element */

      /* create HTML of the link */
      //const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

      const linkHTMLData = {id: articleId, title: articleTitle};
      const linkHTML = templates.articleLink(linkHTMLData);

      /* insert link into titleList */
      html = html + linkHTML;
    }
    titleList.innerHTML = html;
  }

  generateTitleLinks();

  const links = document.querySelectorAll('.titles a');

  for(let link of links) {
    link.addEventListener('click', titleClickHandler);
  }


  function generateAuthors() {

    const allAuthors = {};

    // find all articles
    const articles = document.querySelectorAll(optArticleSelector);

    // generate authors in all articles
    for (let article of articles) {

      const authorsWrapper = article.querySelector('.post-author');
      
      let html='';

      const dataAuthors = article.getAttribute('data-author');

      //const linkHTML = '<a href="#author-'+ dataAuthors +'">' + dataAuthors + '</a>';

      const linkHTMLData = {id: dataAuthors, title: dataAuthors};
      const linkHTML = templates.authorsCloudLinks(linkHTMLData);

      html = html + linkHTML;

      // add author to allAuthors object
      if (!allAuthors[dataAuthors]) {
        allAuthors[dataAuthors] = 1;

      }else {
        allAuthors[dataAuthors]++;

      }
      authorsWrapper.innerHTML = html;
    }

    // add authors link to the author list
    const authorList = document.querySelector(optAuthorListSelector);
    let allAuthorsData = {author: []};

    for (let author in allAuthors) {
      //allAuthorsHTML += '<li><a href="#author-' + author +'">' + author + '</a></li>';
      allAuthorsData.author.push({
        author: author,
      });
      
    }
    authorList.innerHTML = templates.rightAuthorsLinks(allAuthorsData);
    
  }
  generateAuthors();


  function authorClickHandler(event) {

    event.preventDefault();

    const clickedElement = this;

    const href = clickedElement.getAttribute('href');

    const author = href.replace('#author-', '');

    const activeAuthor = document.querySelectorAll('a.active[href^="#author-"]');

    for (let authors of activeAuthor) {

      authors.classList.remove('active');

    }

    const authorsLinks = document.querySelectorAll('a[href="#' + href + '"]');

    for (let foundAuthor of authorsLinks) {

      foundAuthor.classList.add('active');

    }

    generateTitleLinks('[data-author="' + author+ '"]');
  }

  function addClickListenersToAuthors() {

    const linksAuthors = document.querySelectorAll('.post-author a');
  
    for(let link of linksAuthors) {
    
      link.addEventListener('click', authorClickHandler);

    }
    const rightAuthorsLinks = document.querySelectorAll('.authors li a');

    for(let link of rightAuthorsLinks) {

      link.addEventListener('click', authorClickHandler);
      
    }

  }
  addClickListenersToAuthors();

  function calculateTagsParams(tags){
    const params = {max: 0, min: 999999};

    for (let tag in tags) {
      
      params.max = Math.max(tags[tag], params.max);

      params.min = Math.min(tags[tag], params.min);
      
    }

    return params;
  }

  function calculateTagClass(count, params) {
    const normaLizedCount = count - params.min;
    const normaLizedMax = params.max - params.min;
    const percentage = normaLizedCount/normaLizedMax;
    const classNumber = Math.floor(percentage * (optCloudClassCount -1) +1);

    return optCloudClassRefix + classNumber;
  }

  function generateTags() {
    /* [NEW] create a new variable allTags with an empty object */
    let allTags = {};
  
    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);
  
    /* START LOOP: for every article: */
    for (let article of articles) {
  
      /* find tags wrapper */
      const tagsWrapper = article.querySelector(optArticleTagsSelector);
  
      /* make html variable with empty string */
      let html = '';
  
      /* get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');
  
      /* split tags into array */
      const articleTagsArray = articleTags.split(' ');
  
      /* START LOOP: for each tag */
      for (let tag of articleTagsArray) {
        
        /* generate HTML of the link */
        //const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';

        const linkHTMLData = {id: tag, title: tag};
        const linkHTML = templates.tagCloudLink(linkHTMLData);
  
        /* add generated code to html variable */
        html = html + linkHTML;
  
        /* [NEW] check if this link is NOT already in allTags */
        if (!allTags[tag]) {

          /* [NEW] add tag to allTags object */
          allTags[tag] = 1;

        } else {
            allTags[tag]++;
        }
        /* END LOOP: for each tag */
      }
      /* insert HTML of all the links into the tags wrapper */
      tagsWrapper.innerHTML = html;
  
      /* END LOOP: for every article: */
    }
    /* [NEW] find list of tags in right column */
    const tagList = document.querySelector('.tags');
  
    /*[NEW] create variable for all links HTML code */
    const tagsParams = calculateTagsParams(allTags);
    
    const allTagsData = {tags: []};

    /* [NEW] START LOOP: for each tag in allTags:*/
    for (let tag in allTags) {

      /* [NEW] generate code of a link and add it to allTagsHTML */
      //allTagsHTML += '<li><a href="#tag-' + tag + '" class="' + calculateTagClass(allTags[tag], tagsParams) +'"' + '>' + tag +'</a></li>';
      allTagsData.tags.push({
        tag: tag,
        count: allTags[tag],
        className: calculateTagClass(allTags[tag], tagsParams)
      });
      /* [NEW] END LOOP: for each tag in allTags: */
    }
    /* [NEW] add HTML from allTagsHTML to tagList */
    tagList.innerHTML = templates.rightTagLinks(allTagsData);
  }
  generateTags();



  function tagClickHandler(event) {
    /* prevent default action for this event */
    event.preventDefault();
  
    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
    
    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');

    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');

    /* find all tag links with class active */
    const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');

    /* START LOOP: for each active tag link */
    for (let tags of activeTags) {

      /* remove class active */
      tags.classList.remove('active');

      /* END LOOP: for each active tag link */
    }
    /* find all tag links with "href" attribute equal to the "href" constant */
    const tagLinks = document.querySelectorAll('a[href="' + href + '"]');

    /* START LOOP: for each found tag link */
    for (let foundTag of tagLinks){
  
      /* add class active */
      foundTag.classList.add('active');
  
      /* END LOOP: for each found tag link */
    }
    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');
  }

  function addClickListenersToTags(){
    /* find all links to tags */
    let links = document.querySelectorAll('a[href^="#tag-"]');
  
    /* START LOOP: for each link */
    for(let link of links) {
  
      /* add tagClickHandler as event listener for that link */
      link.addEventListener('click', tagClickHandler);

      /* END LOOP: for each link */
    }
  }
  addClickListenersToTags();



}