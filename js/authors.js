function generateAuthors() {

    const articles = document.querySelectorAll(optArticleSelector);

    for (let authors of articles) {

      const authorsWrapper = authors.querySelector('.post-author');
      
      let html='by ';

      const dataAuthors = authors.getAttribute('data-author');

      const linkHTML = '<a href="#">' + dataAuthors + '</a>';

      html = html + linkHTML;

      authorsWrapper.innerHTML = html;
    }

  }
  generateAuthors();


  function authorClickHandler(event) {

    event.preventDefault();

    const clickedElement = this;

    const href = clickedElement.getAttribute('href');

    const author = href.replace('#tag-', '');

    const activeAuthor = document.querySelectorAll('a.active[href^="#tag-"]');

    for (let authors of activeAuthor) {

      authors.classList.remove('active');

    }

    const authorsLinks = document.querySelectorAll('a[href="' + href + '"]');

    for (let foundAuthor of tagLinks) {

      foundAuthor.classList.add('active');

    }

    generateTitleLinks('[data-tags="' + author+ '"]');
  }
  authorClickHandler();



  function addClickListenersToAuthors() {

    const linksAuthors = document.querySelectorAll('.post-author');
  
    for(let link of linksAuthors) {
      
      link.addEventListener('click', tagClickHandler);

    }

  }
  addClickListenersToAuthors();
