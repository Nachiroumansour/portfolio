// Rendu de la page blog-details.html via ?post=slug
// Requiert BLOG_POSTS (chargé via blog-data.js)

function getUrlParam(name) {
  const m = new RegExp('(?:[?&])' + name + '=([^&#]*)').exec(location.search);
  return m ? decodeURIComponent(m[1].replace(/\+/g, ' ')) : '';
}

function renderPost(post) {
  const root = document.getElementById('post-content');
  if (!root) return;
  if (!post) {
    root.innerHTML = `
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center">
          <h2>Article introuvable</h2>
          <p>L'article demandé n'existe pas.</p>
          <a href="blogs.html" class="butn butn-md bg-main text-light radius-5 mt-30">
            <span>Retour au blog</span>
          </a>
        </div>
      </div>
    `;
    return;
  }

  document.title = `${post.title} - Mansour Nachirou`;

  const date = formatBlogDate(post.date);
  const contentHtml = post.content
    .map((p) => `<div class="text mb-20"><p>${p}</p></div>`) 
    .join('');

  root.innerHTML = `
    <section class="sec-box main-post section-padding">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="caption text-center">
            <div class="gat">
              <a href="#0"><span>${post.category}</span></a>
              ${post.tags.slice(0, 2).map(t=>`<a href="#0"><span>${t}</span></a>`).join('')}
            </div>
            <h1 class="fz-55 mt-30">${post.title}</h1>
            <p class="sub-title mt-15">${date} - Par ${post.author}</p>
          </div>
          <div class="main-img mb-80 mt-40">
            <img src="${post.cover}" alt="${post.title}" class="radius-5">
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-9">
          <div class="cont">
            ${contentHtml}
            <div class="mb-50 mt-50">
              <div class="row">
                <div class="col-sm-6">
                  <div class="iner-img sm-mb30">
                    <img src="${post.images?.[0] || post.cover}" alt="${post.title}">
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="iner-img">
                    <img src="${post.images?.[1] || post.cover}" alt="${post.title}">
                  </div>
                </div>
              </div>
            </div>

            <div class="info-area flex mt-20 pb-20 pt-20 bord-thin-top bord-thin-bottom">
              <div>
                <div class="tags flex">
                  <div class="valign">
                    <span>Tags :</span>
                  </div>
                  <div>
                    ${post.tags.map(t=>`<a href="#">${t}</a>`).join('')}
                  </div>
                </div>
              </div>
              <div class="ml-auto">
                <div class="share-icon flex">
                  <div class="valign">
                    <span>Partager :</span>
                  </div>
                  <div>
                    <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://www.twitter.com/"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderRelated(currentSlug) {
  const wrap = document.getElementById('related-posts');
  if (!wrap) return;
  const posts = BLOG_POSTS.filter((p) => p.slug !== currentSlug).slice(0, 3);
  const row = document.createElement('div');
  row.className = 'row md-marg';
  posts.forEach((p) => {
    const date = formatBlogDate(p.date);
    row.insertAdjacentHTML('beforeend', `
      <div class="col-lg-4">
        <div class="item md-mb30">
          <div class="img">
            <img src="${p.cover}" alt="${p.title}">
          </div>
          <div class="box">
            <div class="cont">
              <span class="date"><i class="fas fa-calendar-alt mr-10 main-color"></i> ${date}</span>
              <h5><a href="blog-details.html?post=${p.slug}">${p.title}</a></h5>
            </div>
            <div class="info d-flex align-items-center">
              <div>
                <span><i class="fas fa-user fz-12 mr-5"></i> ${p.author}</span>
              </div>
              <div class="ml-auto">
                <a href="blog-details.html?post=${p.slug}">Lire plus <svg class="ml-5" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z" fill="currentColor"></path></svg></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `);
  });
  wrap.appendChild(row);
}

function initBlogDetailsPage() {
  const slug = getUrlParam('post');
  const post = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];
  renderPost(post);
  renderRelated(post.slug);
}

document.addEventListener('DOMContentLoaded', initBlogDetailsPage);
