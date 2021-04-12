
  function generateTags() {
    /* [NEW] create a new variable allTags with an empty array */
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
        const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
  
        /* add generated code to html variable */
        html = html + linkHTML;
  
        /* [NEW] check if this link is NOT already in allTags */
        if ( allTags.indexOf(linkHTML) == -1) {

          /* [NEW] add generated code to allTags array */
          allTags.push(linkHTML);
        }

        /* END LOOP: for each tag */
      }
  
      /* insert HTML of all the links into the tags wrapper */
      tagsWrapper.innerHTML(html);
  
      /* END LOOP: for every article: */
    }
  
    /* [NEW] find list of tags in right column */
    const tagList = document.querySelector('.tags');
  
    /* [NEW] add html from allTags to tagList */
    tagList.innerHTML = allTags.join(' ');
  }
  generateTags();











  function generateTags(){
    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);

    /* START LOOP: for every article: */
    for (let article of articles) {

      /* find tags wrapper */
      const tagsWrapper = article.querySelector(optArticleTagsSelector);

      /* make html variable with empty string */
      let html ='';

      /* get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');

      /* split tags into array */
      const articleTagsArray = articleTags.split(' ');

      /* START LOOP: for each tag */
      for (let tag of articleTagsArray) {
      
        /* generate HTML of the link */
        const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';

        /* add generated code to html variable */
        html = html + linkHTML;
        

        /* END LOOP: for each tag */
      }
      /* insert HTML of all the links into the tags wrapper */
      tagsWrapper.innerHTML = html;

      /* END LOOP: for every article: */
    }
  }


/*
  <li>
  <a href="#">
    <span class="author-name">Kitty Toebean</span>
  </a>
</li>
<li>
  <a href="#">
    <span class="author-name">Theo Tabby</span>
  </a>
</li>
<li>
  <a href="#">
    <span class="author-name">George Tuxedo</span>
  </a>
</li>
<li>
  <a href="#">
    <span class="author-name">Marion Berry</span>
  </a>
</li>
*/






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
      const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';

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
  
  let allTagsHTML = '';

  /* [NEW] START LOOP: for each tag in allTags:*/
  for (let tag in allTags) {

    /* [NEW] generate code of a link and add it to allTagsHTML */
    allTagsHTML += '<li><a href="#tag-' + tag + '" class="' + calculateTagClass(allTags[tag], tagsParams) +'"' + '>' + tag +'</a></li>';
  
    /* [NEW] END LOOP: for each tag in allTags: */
  }

  /* [NEW] add HTML from allTagsHTML to tagList */
  tagList.innerHTML = allTagsHTML;
}
generateTags();
 