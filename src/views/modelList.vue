<template>
    <div>
      <header-part></header-part>
      <!--内容-->
      <div class="content ">
        <!--顶部-->
        <header>
          <div class="header-content">
            <div class="header-menu container">
              <div class="elements">
                <div class="item title active">
                  <a>
                    <i class="fa custom-icons icon-cube-outline-01"></i>
                    <span>All categories</span>
                  </a>
                </div>
                <div class="item">
                  <a data-value="3badf36bd9f549bdba295334d75e04d3" class="active">
                    <i class="fa gaming"></i>
                    <span>Gaming</span>
                  </a>
                </div>
                <div class="item">
                  <a data-value="86f23935367b4a1f9647c8a20e03d716">
                    <i class="fa cultural-heritage"></i>
                    <span>Cultural Heritage</span>
                  </a>
                </div>
                <div class="item">
                  <a data-value="2d643ff5ed03405b9c34ecdffff9d8d8">
                    <i class="fa characters"></i>
                    <span>Characters</span>
                  </a>
                </div>
                <div class="item">
                  <a data-value="22a2f677efad4d7bbca5ad45f9b5868e">
                    <i class="fa cars-vehicles"></i>
                    <span>Cars &amp; vehicles</span>
                  </a>
                </div>
                <div class="item out">
                  <a data-value="c51b29706d4e4e93a82e5eea7cbe6f91">
                    <i class="fa places-scenes"></i>
                    <span>Places &amp; scenes</span>
                  </a>
                </div>
                <div class="item out">
                  <a data-value="ed9e048550b2478eb1ab2faaba192832">
                    <i class="fa animals-creatures"></i>
                    <span>Animals &amp; Creatures</span>
                  </a>
                </div>
                <div class="item out">
                  <a data-value="d7cebaeca8604ebab1480e413404b679">
                    <i class="fa products-technology"></i>
                    <span>Products &amp; Technology</span>
                  </a>
                </div>
                <div class="item out">
                  <a data-value="3f8d0eab859c45ae8ea3af1033d6f3e4">
                    <i class="fa weapons"></i>
                    <span>Weapons</span>
                  </a>
                </div>
                <div class="item out">
                  <a data-value="f825c721edb541dbbc8cd210123616c7">
                    <i class="fa architecture"></i>
                    <span>Architecture</span>
                  </a>
                </div>
                <div class="item out">
                  <a data-value="17d20ca7b35243d4a45171838b50704c">
                    <i class="fa science-nature-education"></i>
                    <span>Science, Nature &amp; Education</span>
                  </a>
                </div>
              </div>

              <div class="more filter" style="display: block;">
                <a>More <i class="fa fa-angle-down fa-1"></i></a>
                <div class="menu">
                  <ul class="form-menu-select">
                    <li class="item">
                      <a class="label">Places &amp; scenes</a>
                    </li>
                    <li class="item ">
                      <a class="label" >Animals &amp; Creatures</a>
                    </li>
                    <li class="item">
                      <a class="label">Products &amp; Technology</a>
                    </li>
                    <li class="item">
                      <a class="label">Weapons</a>
                    </li>
                    <li class="item">
                      <a class="label" >
                        Architecture</a>
                    </li>
                    <li class="item">
                      <a class="label">Science, Nature &amp; Education</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="responsive-header-menu">
              <a class="element all" ><span>All categories</span> <i class="fa fa-angle-down fa-1"></i></a>
              <a class="element model-filters">FILTERS <i class="fa fa-angle-down fa-1"></i></a>
            </div>

          </div>


          <div class="container responsive">

            <div class="page-title">
              <h1 class="actual-title">
                Models
              </h1>
              <div class="breadcrumb">
                <div class="filter-element">
                  <a data-action="clear-filter" data-filter="date" data-value="7">
                    This week</a>
                </div>
              </div>
            </div>

            <div class="query-parameters explore">
              <div class="query-filters">
                <div class="filter filters">
                  <a class="name">
                    <label>Filters</label>
                  </a>
                </div>

                <div class="explore-filters-container model-filters js-menu-filters">

                  <div class="filter features js-menu-features">
                    <a class="name">
                      <label>Features</label>
                    </a>
                    <div class="menu">
                      <ul class="form-menu-toggle">
                        <li class="item togglable" data-value="downloadable">
                          <a class="label">
                            Downloadable
                          </a>
                          <div class="checkbox"></div>
                        </li>
                        <li class="item togglable" data-value="animated">
                          <a class="label">
                            Animated
                          </a>
                          <div class="checkbox"></div>
                        </li>
                        <li class="item togglable" data-value="staffpicked">
                          <a class="label">
                            Staff picks
                          </a>
                          <div class="checkbox"></div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="filter date js-menu-date">
                    <a class="name">
                      <label>Date</label>
                    </a>
                    <div class="menu">
                      <ul class="form-menu-select">
                        <li class="item" data-value="default">
                          <a class="label">
                            All time
                          </a>
                        </li>

                        <li class="item" data-value="31">
                          <a class="label">
                            This month
                          </a>
                        </li>

                        <li class="item active" data-value="7">
                          <a class="label">
                            This week
                          </a>
                        </li>

                        <li class="item" data-value="1">
                          <a class="label">
                            This day
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="filter security js-menu-restricted">
                    <a class="name">
                      <label>Safety</label>
                    </a>
                    <div class="menu">
                      <ul class="form-menu-toggle">
                        <li class="item togglable">
                          <a class="label">
                            Show age-restricted
                          </a>
                          <div class="checkbox"></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="query-sorts">
                <label class="query-label">
                  Sort by
                </label>
                <div class="options">
                  <a class="option help active" data-value="-likeCount"><div class="tooltip tooltip-down">Most liked</div><i class="icon fa fa-star"></i></a>
                  <a class="option help" data-value="-viewCount"><div class="tooltip tooltip-down">Most viewed</div><i class="icon custom-icons icon-eye-icon"></i></a>
                  <a class="option help" data-value="-publishedAt"><div class="tooltip tooltip-down">Most recent</div><i class="icon fa fa-clock-o"></i></a>
                </div>
              </div>
            </div>


          </div>
        </header>
        <!--列表 wrap-->
        <section class="one-column container explore-container">
          <div class="header"></div>
          <div class="middle">
            <div class="explore-content">
              <div class="grid infinite-grid grid-models no-more-before">
                <div class="items-container">
                  <div class="spinner"></div>

                  <div class="empty-state-wrapper hidden default" style="display: none;"><div class="no-result">No result</div>
                  </div>
                  <div class="filtered-state hidden" style="display: none;">
                    <div class="no-result">No result</div>
                  </div>

                  <ul class="items">
                    <li class="item" style="-webkit-animation-delay: 1837ms; animation-delay:1189ms;">
                      <div class="model-card" >
                        <div class="model-card-thumbnail">
                          <div class="image-container" style="width: 100%; background-image: url('/static/image/256144.jpeg');">
                            <div style="padding-top:62.6%;"></div>
                          </div>
                          <div class="model-card-overlay"></div>
                          <a class="model-card-filter" href="model.html"></a>
                          <a class="model-card-preview" data-action="open-preview">
                            <i class="fa fa-search"></i>
                          </a>


                          <div class="model-card-information">
                            <div class="model-card-left-extra">
                              <div class="model-card-stats">
                                <span class="model-card-views">2.3k</span>
                              </div>

                              <div class="help like-button star-like-button popover-container model-card-like-button model-card-stats" data-action="like">
                                <span class="count">122</span>
                                <span class="tooltip liked-content tooltip-up">Like</span>
                                <span class="tooltip unliked-content tooltip-up">Unlike</span>

                                <!--分享-->
                                <!--<div class="popover share-popover hidden down-arrow middle-arrow">-->
                                <!--<p>Thanks!</p>-->
                                <!--<p>Also share?</p>-->

                                <!--<a data-action="share-on-twitter" class="icon fa fa-twitter"></a>-->
                                <!--<a data-action="share-on-google-plus" class="icon fa fa-google-plus"></a>-->
                                <!--<a data-action="share-on-facebook" class="icon fa fa-facebook"></a>-->
                                <!--<a data-action="share-on-pinterest" class="icon fa fa-pinterest"></a>-->
                                <!--</div>-->
                              </div>
                            </div>

                            <div class="model-card-right-extra">
                              <div class="model-card-stats download-start">
                                <span class="model-card-downloads">178</span>
                              </div>

                              <div class="model-card-stats comments-stat">
                                <a class="model-card-comments" >15</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="model-card-meta model-card-with-user">
                          <div class="model-card-name">
                                            <span class="model-name">
                                                <a class="label"  title="Fishing Boat (200th Model)">Fishing Boat (200th Model)</a>
                                                <a href="/models/staffpicks" class="flag-staffpicked" title="See all staff picks"></a>
                                            </span>
                          </div>

                          <div class="model-card-extra">
                            <div class="model-card-user" >
                              <a class="user-name" >
                                <div class="wrapper js-summary-trigger">
                                  <div class="avatar user-summary-anchor">
                                    <div class="image-container" style="width:34px; ;  background-image: url('/static/image/userImg.jpeg');">
                                      <div style="padding-top:100.0%;"></div>
                                    </div>
                                  </div>

                                  <div class="text">
                                    by
                                    <div class="username-wrapper">Renafox</div>
                                  </div>
                                  <span class="flag flag-pro">Pro</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="item" style="-webkit-animation-delay: 1837ms; animation-delay:1189ms;">
                      <div class="model-card" >
                        <div class="model-card-thumbnail">
                          <div class="image-container" style="width: 100%; background-image: url('/static/image/256144.jpeg');">
                            <div style="padding-top:62.6%;"></div>
                          </div>
                          <div class="model-card-overlay"></div>
                          <a class="model-card-filter" ></a>
                          <a class="model-card-preview" data-action="open-preview">
                            <i class="fa fa-search"></i>
                          </a>


                          <div class="model-card-information">
                            <div class="model-card-left-extra">
                              <div class="model-card-stats">
                                <span class="model-card-views">2.3k</span>
                              </div>

                              <div class="help like-button star-like-button popover-container model-card-like-button model-card-stats" data-action="like">
                                <span class="count">122</span>
                                <span class="tooltip liked-content tooltip-up">Like</span>
                                <span class="tooltip unliked-content tooltip-up">Unlike</span>

                                <!--分享-->
                                <!--<div class="popover share-popover hidden down-arrow middle-arrow">-->
                                <!--<p>Thanks!</p>-->
                                <!--<p>Also share?</p>-->

                                <!--<a data-action="share-on-twitter" class="icon fa fa-twitter"></a>-->
                                <!--<a data-action="share-on-google-plus" class="icon fa fa-google-plus"></a>-->
                                <!--<a data-action="share-on-facebook" class="icon fa fa-facebook"></a>-->
                                <!--<a data-action="share-on-pinterest" class="icon fa fa-pinterest"></a>-->
                                <!--</div>-->
                              </div>
                            </div>

                            <div class="model-card-right-extra">
                              <div class="model-card-stats download-start">
                                <span class="model-card-downloads">178</span>
                              </div>

                              <div class="model-card-stats comments-stat">
                                <a class="model-card-comments" >15</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="model-card-meta model-card-with-user">
                          <div class="model-card-name">
                                            <span class="model-name">
                                                <a class="label"  title="Fishing Boat (200th Model)">Fishing Boat (200th Model)</a>
                                                <a href="/models/staffpicks" class="flag-staffpicked" title="See all staff picks"></a>
                                            </span>
                          </div>

                          <div class="model-card-extra">
                            <div class="model-card-user" >
                              <a class="user-name" >
                                <div class="wrapper js-summary-trigger">
                                  <div class="avatar user-summary-anchor">
                                    <div class="image-container" style="width:34px; ;  background-image: url('/static/image/userImg.jpeg');">
                                      <div style="padding-top:100.0%;"></div>
                                    </div>
                                  </div>

                                  <div class="text">
                                    by
                                    <div class="username-wrapper">Renafox</div>
                                  </div>
                                  <span class="flag flag-pro">Pro</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="item" style="-webkit-animation-delay: 1837ms; animation-delay:1189ms;">
                      <div class="model-card" >
                        <div class="model-card-thumbnail">
                          <div class="image-container" style="width: 100%; background-image: url('/static/image/256144.jpeg');">
                            <div style="padding-top:62.6%;"></div>
                          </div>
                          <div class="model-card-overlay"></div>
                          <a class="model-card-filter" ></a>
                          <a class="model-card-preview" data-action="open-preview">
                            <i class="fa fa-search"></i>
                          </a>


                          <div class="model-card-information">
                            <div class="model-card-left-extra">
                              <div class="model-card-stats">
                                <span class="model-card-views">2.3k</span>
                              </div>

                              <div class="help like-button star-like-button popover-container model-card-like-button model-card-stats" data-action="like">
                                <span class="count">122</span>
                                <span class="tooltip liked-content tooltip-up">Like</span>
                                <span class="tooltip unliked-content tooltip-up">Unlike</span>

                                <!--分享-->
                                <!--<div class="popover share-popover hidden down-arrow middle-arrow">-->
                                <!--<p>Thanks!</p>-->
                                <!--<p>Also share?</p>-->

                                <!--<a data-action="share-on-twitter" class="icon fa fa-twitter"></a>-->
                                <!--<a data-action="share-on-google-plus" class="icon fa fa-google-plus"></a>-->
                                <!--<a data-action="share-on-facebook" class="icon fa fa-facebook"></a>-->
                                <!--<a data-action="share-on-pinterest" class="icon fa fa-pinterest"></a>-->
                                <!--</div>-->
                              </div>
                            </div>

                            <div class="model-card-right-extra">
                              <div class="model-card-stats download-start">
                                <span class="model-card-downloads">178</span>
                              </div>

                              <div class="model-card-stats comments-stat">
                                <a class="model-card-comments" >15</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="model-card-meta model-card-with-user">
                          <div class="model-card-name">
                                            <span class="model-name">
                                                <a class="label"  title="Fishing Boat (200th Model)">Fishing Boat (200th Model)</a>
                                                <a href="/models/staffpicks" class="flag-staffpicked" title="See all staff picks"></a>
                                            </span>
                          </div>

                          <div class="model-card-extra">
                            <div class="model-card-user" >
                              <a class="user-name" >
                                <div class="wrapper js-summary-trigger">
                                  <div class="avatar user-summary-anchor">
                                    <div class="image-container" style="width:34px; ;  background-image: url('/static/image/userImg.jpeg');">
                                      <div style="padding-top:100.0%;"></div>
                                    </div>
                                  </div>

                                  <div class="text">
                                    by
                                    <div class="username-wrapper">Renafox</div>
                                  </div>
                                  <span class="flag flag-pro">Pro</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="item" style="-webkit-animation-delay: 1837ms; animation-delay:1189ms;">
                      <div class="model-card" >
                        <div class="model-card-thumbnail">
                          <div class="image-container" style="width: 100%; background-image: url('/static/image/256144.jpeg');">
                            <div style="padding-top:62.6%;"></div>
                          </div>
                          <div class="model-card-overlay"></div>
                          <a class="model-card-filter" ></a>
                          <a class="model-card-preview" data-action="open-preview">
                            <i class="fa fa-search"></i>
                          </a>


                          <div class="model-card-information">
                            <div class="model-card-left-extra">
                              <div class="model-card-stats">
                                <span class="model-card-views">2.3k</span>
                              </div>

                              <div class="help like-button star-like-button popover-container model-card-like-button model-card-stats" data-action="like">
                                <span class="count">122</span>
                                <span class="tooltip liked-content tooltip-up">Like</span>
                                <span class="tooltip unliked-content tooltip-up">Unlike</span>

                                <!--分享-->
                                <!--<div class="popover share-popover hidden down-arrow middle-arrow">-->
                                <!--<p>Thanks!</p>-->
                                <!--<p>Also share?</p>-->

                                <!--<a data-action="share-on-twitter" class="icon fa fa-twitter"></a>-->
                                <!--<a data-action="share-on-google-plus" class="icon fa fa-google-plus"></a>-->
                                <!--<a data-action="share-on-facebook" class="icon fa fa-facebook"></a>-->
                                <!--<a data-action="share-on-pinterest" class="icon fa fa-pinterest"></a>-->
                                <!--</div>-->
                              </div>
                            </div>

                            <div class="model-card-right-extra">
                              <div class="model-card-stats download-start">
                                <span class="model-card-downloads">178</span>
                              </div>

                              <div class="model-card-stats comments-stat">
                                <a class="model-card-comments" >15</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="model-card-meta model-card-with-user">
                          <div class="model-card-name">
                                            <span class="model-name">
                                                <a class="label"  title="Fishing Boat (200th Model)">Fishing Boat (200th Model)</a>
                                                <a href="/models/staffpicks" class="flag-staffpicked" title="See all staff picks"></a>
                                            </span>
                          </div>

                          <div class="model-card-extra">
                            <div class="model-card-user" >
                              <a class="user-name" >
                                <div class="wrapper js-summary-trigger">
                                  <div class="avatar user-summary-anchor">
                                    <div class="image-container" style="width:34px; ;  background-image: url('/static/image/userImg.jpeg');">
                                      <div style="padding-top:100.0%;"></div>
                                    </div>
                                  </div>

                                  <div class="text">
                                    by
                                    <div class="username-wrapper">Renafox</div>
                                  </div>
                                  <span class="flag flag-pro">Pro</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="item" style="-webkit-animation-delay: 1837ms; animation-delay:1189ms;">
                      <div class="model-card" >
                        <div class="model-card-thumbnail">
                          <div class="image-container" style="width: 100%; background-image: url('/static/image/256144.jpeg');">
                            <div style="padding-top:62.6%;"></div>
                          </div>
                          <div class="model-card-overlay"></div>
                          <a class="model-card-filter" ></a>
                          <a class="model-card-preview" data-action="open-preview">
                            <i class="fa fa-search"></i>
                          </a>


                          <div class="model-card-information">
                            <div class="model-card-left-extra">
                              <div class="model-card-stats">
                                <span class="model-card-views">2.3k</span>
                              </div>

                              <div class="help like-button star-like-button popover-container model-card-like-button model-card-stats" data-action="like">
                                <span class="count">122</span>
                                <span class="tooltip liked-content tooltip-up">Like</span>
                                <span class="tooltip unliked-content tooltip-up">Unlike</span>

                                <!--分享-->
                                <!--<div class="popover share-popover hidden down-arrow middle-arrow">-->
                                <!--<p>Thanks!</p>-->
                                <!--<p>Also share?</p>-->

                                <!--<a data-action="share-on-twitter" class="icon fa fa-twitter"></a>-->
                                <!--<a data-action="share-on-google-plus" class="icon fa fa-google-plus"></a>-->
                                <!--<a data-action="share-on-facebook" class="icon fa fa-facebook"></a>-->
                                <!--<a data-action="share-on-pinterest" class="icon fa fa-pinterest"></a>-->
                                <!--</div>-->
                              </div>
                            </div>

                            <div class="model-card-right-extra">
                              <div class="model-card-stats download-start">
                                <span class="model-card-downloads">178</span>
                              </div>

                              <div class="model-card-stats comments-stat">
                                <a class="model-card-comments" >15</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="model-card-meta model-card-with-user">
                          <div class="model-card-name">
                                            <span class="model-name">
                                                <a class="label"  title="Fishing Boat (200th Model)">Fishing Boat (200th Model)</a>
                                                <a href="/models/staffpicks" class="flag-staffpicked" title="See all staff picks"></a>
                                            </span>
                          </div>

                          <div class="model-card-extra">
                            <div class="model-card-user" >
                              <a class="user-name" >
                                <div class="wrapper js-summary-trigger">
                                  <div class="avatar user-summary-anchor">
                                    <div class="image-container" style="width:34px; ;  background-image: url('/static/image/userImg.jpeg');">
                                      <div style="padding-top:100.0%;"></div>
                                    </div>
                                  </div>

                                  <div class="text">
                                    by
                                    <div class="username-wrapper">Renafox</div>
                                  </div>
                                  <span class="flag flag-pro">Pro</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="item" style="-webkit-animation-delay: 1837ms; animation-delay:1189ms;">
                      <div class="model-card" >
                        <div class="model-card-thumbnail">
                          <div class="image-container" style="width: 100%; background-image: url('/static/image/256144.jpeg');">
                            <div style="padding-top:62.6%;"></div>
                          </div>
                          <div class="model-card-overlay"></div>
                          <a class="model-card-filter" ></a>
                          <a class="model-card-preview" data-action="open-preview">
                            <i class="fa fa-search"></i>
                          </a>


                          <div class="model-card-information">
                            <div class="model-card-left-extra">
                              <div class="model-card-stats">
                                <span class="model-card-views">2.3k</span>
                              </div>

                              <div class="help like-button star-like-button popover-container model-card-like-button model-card-stats" data-action="like">
                                <span class="count">122</span>
                                <span class="tooltip liked-content tooltip-up">Like</span>
                                <span class="tooltip unliked-content tooltip-up">Unlike</span>

                                <!--分享-->
                                <!--<div class="popover share-popover hidden down-arrow middle-arrow">-->
                                <!--<p>Thanks!</p>-->
                                <!--<p>Also share?</p>-->

                                <!--<a data-action="share-on-twitter" class="icon fa fa-twitter"></a>-->
                                <!--<a data-action="share-on-google-plus" class="icon fa fa-google-plus"></a>-->
                                <!--<a data-action="share-on-facebook" class="icon fa fa-facebook"></a>-->
                                <!--<a data-action="share-on-pinterest" class="icon fa fa-pinterest"></a>-->
                                <!--</div>-->
                              </div>
                            </div>

                            <div class="model-card-right-extra">
                              <div class="model-card-stats download-start">
                                <span class="model-card-downloads">178</span>
                              </div>

                              <div class="model-card-stats comments-stat">
                                <a class="model-card-comments" >15</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="model-card-meta model-card-with-user">
                          <div class="model-card-name">
                                            <span class="model-name">
                                                <a class="label"  title="Fishing Boat (200th Model)">Fishing Boat (200th Model)</a>
                                                <a href="/models/staffpicks" class="flag-staffpicked" title="See all staff picks"></a>
                                            </span>
                          </div>

                          <div class="model-card-extra">
                            <div class="model-card-user" >
                              <a class="user-name" >
                                <div class="wrapper js-summary-trigger">
                                  <div class="avatar user-summary-anchor">
                                    <div class="image-container" style="width:34px; ;  background-image: url('/static/image/userImg.jpeg');">
                                      <div style="padding-top:100.0%;"></div>
                                    </div>
                                  </div>

                                  <div class="text">
                                    by
                                    <div class="username-wrapper">Renafox</div>
                                  </div>
                                  <span class="flag flag-pro">Pro</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="item" style="-webkit-animation-delay: 1837ms; animation-delay:1189ms;">
                      <div class="model-card" >
                        <div class="model-card-thumbnail">
                          <div class="image-container" style="width: 100%; background-image: url('/static/image/256144.jpeg');">
                            <div style="padding-top:62.6%;"></div>
                          </div>
                          <div class="model-card-overlay"></div>
                          <a class="model-card-filter" ></a>
                          <a class="model-card-preview" data-action="open-preview">
                            <i class="fa fa-search"></i>
                          </a>


                          <div class="model-card-information">
                            <div class="model-card-left-extra">
                              <div class="model-card-stats">
                                <span class="model-card-views">2.3k</span>
                              </div>

                              <div class="help like-button star-like-button popover-container model-card-like-button model-card-stats" data-action="like">
                                <span class="count">122</span>
                                <span class="tooltip liked-content tooltip-up">Like</span>
                                <span class="tooltip unliked-content tooltip-up">Unlike</span>

                                <!--分享-->
                                <!--<div class="popover share-popover hidden down-arrow middle-arrow">-->
                                <!--<p>Thanks!</p>-->
                                <!--<p>Also share?</p>-->

                                <!--<a data-action="share-on-twitter" class="icon fa fa-twitter"></a>-->
                                <!--<a data-action="share-on-google-plus" class="icon fa fa-google-plus"></a>-->
                                <!--<a data-action="share-on-facebook" class="icon fa fa-facebook"></a>-->
                                <!--<a data-action="share-on-pinterest" class="icon fa fa-pinterest"></a>-->
                                <!--</div>-->
                              </div>
                            </div>

                            <div class="model-card-right-extra">
                              <div class="model-card-stats download-start">
                                <span class="model-card-downloads">178</span>
                              </div>

                              <div class="model-card-stats comments-stat">
                                <a class="model-card-comments" >15</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="model-card-meta model-card-with-user">
                          <div class="model-card-name">
                                            <span class="model-name">
                                                <a class="label"  title="Fishing Boat (200th Model)">Fishing Boat (200th Model)</a>
                                                <a href="/models/staffpicks" class="flag-staffpicked" title="See all staff picks"></a>
                                            </span>
                          </div>

                          <div class="model-card-extra">
                            <div class="model-card-user" >
                              <a class="user-name" >
                                <div class="wrapper js-summary-trigger">
                                  <div class="avatar user-summary-anchor">
                                    <div class="image-container" style="width:34px; ;  background-image: url('/static/image/userImg.jpeg');">
                                      <div style="padding-top:100.0%;"></div>
                                    </div>
                                  </div>

                                  <div class="text">
                                    by
                                    <div class="username-wrapper">Renafox</div>
                                  </div>
                                  <span class="flag flag-pro">Pro</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="item" style="-webkit-animation-delay: 1837ms; animation-delay:1189ms;">
                      <div class="model-card" >
                        <div class="model-card-thumbnail">
                          <div class="image-container" style="width: 100%; background-image: url('/static/image/256144.jpeg');">
                            <div style="padding-top:62.6%;"></div>
                          </div>
                          <div class="model-card-overlay"></div>
                          <a class="model-card-filter" ></a>
                          <a class="model-card-preview" data-action="open-preview">
                            <i class="fa fa-search"></i>
                          </a>


                          <div class="model-card-information">
                            <div class="model-card-left-extra">
                              <div class="model-card-stats">
                                <span class="model-card-views">2.3k</span>
                              </div>

                              <div class="help like-button star-like-button popover-container model-card-like-button model-card-stats" data-action="like">
                                <span class="count">122</span>
                                <span class="tooltip liked-content tooltip-up">Like</span>
                                <span class="tooltip unliked-content tooltip-up">Unlike</span>

                                <!--分享-->
                                <!--<div class="popover share-popover hidden down-arrow middle-arrow">-->
                                <!--<p>Thanks!</p>-->
                                <!--<p>Also share?</p>-->

                                <!--<a data-action="share-on-twitter" class="icon fa fa-twitter"></a>-->
                                <!--<a data-action="share-on-google-plus" class="icon fa fa-google-plus"></a>-->
                                <!--<a data-action="share-on-facebook" class="icon fa fa-facebook"></a>-->
                                <!--<a data-action="share-on-pinterest" class="icon fa fa-pinterest"></a>-->
                                <!--</div>-->
                              </div>
                            </div>

                            <div class="model-card-right-extra">
                              <div class="model-card-stats download-start">
                                <span class="model-card-downloads">178</span>
                              </div>

                              <div class="model-card-stats comments-stat">
                                <a class="model-card-comments" >15</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="model-card-meta model-card-with-user">
                          <div class="model-card-name">
                                            <span class="model-name">
                                                <a class="label"  title="Fishing Boat (200th Model)">Fishing Boat (200th Model)</a>
                                                <a href="/models/staffpicks" class="flag-staffpicked" title="See all staff picks"></a>
                                            </span>
                          </div>

                          <div class="model-card-extra">
                            <div class="model-card-user" >
                              <a class="user-name" >
                                <div class="wrapper js-summary-trigger">
                                  <div class="avatar user-summary-anchor">
                                    <div class="image-container" style="width:34px; ;  background-image: url('/static/image/userImg.jpeg');">
                                      <div style="padding-top:100.0%;"></div>
                                    </div>
                                  </div>

                                  <div class="text">
                                    by
                                    <div class="username-wrapper">Renafox</div>
                                  </div>
                                  <span class="flag flag-pro">Pro</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="item" style="-webkit-animation-delay: 1837ms; animation-delay:1189ms;">
                      <div class="model-card" >
                        <div class="model-card-thumbnail">
                          <div class="image-container" style="width: 100%; background-image: url('/static/image/256144.jpeg');">
                            <div style="padding-top:62.6%;"></div>
                          </div>
                          <div class="model-card-overlay"></div>
                          <a class="model-card-filter" ></a>
                          <a class="model-card-preview" data-action="open-preview">
                            <i class="fa fa-search"></i>
                          </a>


                          <div class="model-card-information">
                            <div class="model-card-left-extra">
                              <div class="model-card-stats">
                                <span class="model-card-views">2.3k</span>
                              </div>

                              <div class="help like-button star-like-button popover-container model-card-like-button model-card-stats" data-action="like">
                                <span class="count">122</span>
                                <span class="tooltip liked-content tooltip-up">Like</span>
                                <span class="tooltip unliked-content tooltip-up">Unlike</span>

                                <!--分享-->
                                <!--<div class="popover share-popover hidden down-arrow middle-arrow">-->
                                <!--<p>Thanks!</p>-->
                                <!--<p>Also share?</p>-->

                                <!--<a data-action="share-on-twitter" class="icon fa fa-twitter"></a>-->
                                <!--<a data-action="share-on-google-plus" class="icon fa fa-google-plus"></a>-->
                                <!--<a data-action="share-on-facebook" class="icon fa fa-facebook"></a>-->
                                <!--<a data-action="share-on-pinterest" class="icon fa fa-pinterest"></a>-->
                                <!--</div>-->
                              </div>
                            </div>

                            <div class="model-card-right-extra">
                              <div class="model-card-stats download-start">
                                <span class="model-card-downloads">178</span>
                              </div>

                              <div class="model-card-stats comments-stat">
                                <a class="model-card-comments" >15</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="model-card-meta model-card-with-user">
                          <div class="model-card-name">
                                            <span class="model-name">
                                                <a class="label"  title="Fishing Boat (200th Model)">Fishing Boat (200th Model)</a>
                                                <a href="/models/staffpicks" class="flag-staffpicked" title="See all staff picks"></a>
                                            </span>
                          </div>

                          <div class="model-card-extra">
                            <div class="model-card-user" >
                              <a class="user-name" >
                                <div class="wrapper js-summary-trigger">
                                  <div class="avatar user-summary-anchor">
                                    <div class="image-container" style="width:34px; ;  background-image: url('/static/image/userImg.jpeg');">
                                      <div style="padding-top:100.0%;"></div>
                                    </div>
                                  </div>

                                  <div class="text">
                                    by
                                    <div class="username-wrapper">Renafox</div>
                                  </div>
                                  <span class="flag flag-pro">Pro</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="item" style="-webkit-animation-delay: 1837ms; animation-delay:1189ms;">
                      <div class="model-card" >
                        <div class="model-card-thumbnail">
                          <div class="image-container" style="width: 100%; background-image: url('/static/image/256144.jpeg');">
                            <div style="padding-top:62.6%;"></div>
                          </div>
                          <div class="model-card-overlay"></div>
                          <a class="model-card-filter" ></a>
                          <a class="model-card-preview" data-action="open-preview">
                            <i class="fa fa-search"></i>
                          </a>


                          <div class="model-card-information">
                            <div class="model-card-left-extra">
                              <div class="model-card-stats">
                                <span class="model-card-views">2.3k</span>
                              </div>

                              <div class="help like-button star-like-button popover-container model-card-like-button model-card-stats" data-action="like">
                                <span class="count">122</span>
                                <span class="tooltip liked-content tooltip-up">Like</span>
                                <span class="tooltip unliked-content tooltip-up">Unlike</span>

                                <!--分享-->
                                <!--<div class="popover share-popover hidden down-arrow middle-arrow">-->
                                <!--<p>Thanks!</p>-->
                                <!--<p>Also share?</p>-->

                                <!--<a data-action="share-on-twitter" class="icon fa fa-twitter"></a>-->
                                <!--<a data-action="share-on-google-plus" class="icon fa fa-google-plus"></a>-->
                                <!--<a data-action="share-on-facebook" class="icon fa fa-facebook"></a>-->
                                <!--<a data-action="share-on-pinterest" class="icon fa fa-pinterest"></a>-->
                                <!--</div>-->
                              </div>
                            </div>

                            <div class="model-card-right-extra">
                              <div class="model-card-stats download-start">
                                <span class="model-card-downloads">178</span>
                              </div>

                              <div class="model-card-stats comments-stat">
                                <a class="model-card-comments" >15</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="model-card-meta model-card-with-user">
                          <div class="model-card-name">
                                            <span class="model-name">
                                                <a class="label"  title="Fishing Boat (200th Model)">Fishing Boat (200th Model)</a>
                                                <a href="/models/staffpicks" class="flag-staffpicked" title="See all staff picks"></a>
                                            </span>
                          </div>

                          <div class="model-card-extra">
                            <div class="model-card-user" >
                              <a class="user-name" >
                                <div class="wrapper js-summary-trigger">
                                  <div class="avatar user-summary-anchor">
                                    <div class="image-container" style="width:34px; ;  background-image: url('/static/image/userImg.jpeg');">
                                      <div style="padding-top:100.0%;"></div>
                                    </div>
                                  </div>

                                  <div class="text">
                                    by
                                    <div class="username-wrapper">Renafox</div>
                                  </div>
                                  <span class="flag flag-pro">Pro</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="item" style="-webkit-animation-delay: 1837ms; animation-delay:1189ms;">
                      <div class="model-card" >
                        <div class="model-card-thumbnail">
                          <div class="image-container" style="width: 100%; background-image: url('/static/image/256144.jpeg');">
                            <div style="padding-top:62.6%;"></div>
                          </div>
                          <div class="model-card-overlay"></div>
                          <a class="model-card-filter" ></a>
                          <a class="model-card-preview" data-action="open-preview">
                            <i class="fa fa-search"></i>
                          </a>


                          <div class="model-card-information">
                            <div class="model-card-left-extra">
                              <div class="model-card-stats">
                                <span class="model-card-views">2.3k</span>
                              </div>

                              <div class="help like-button star-like-button popover-container model-card-like-button model-card-stats" data-action="like">
                                <span class="count">122</span>
                                <span class="tooltip liked-content tooltip-up">Like</span>
                                <span class="tooltip unliked-content tooltip-up">Unlike</span>

                                <!--分享-->
                                <!--<div class="popover share-popover hidden down-arrow middle-arrow">-->
                                <!--<p>Thanks!</p>-->
                                <!--<p>Also share?</p>-->

                                <!--<a data-action="share-on-twitter" class="icon fa fa-twitter"></a>-->
                                <!--<a data-action="share-on-google-plus" class="icon fa fa-google-plus"></a>-->
                                <!--<a data-action="share-on-facebook" class="icon fa fa-facebook"></a>-->
                                <!--<a data-action="share-on-pinterest" class="icon fa fa-pinterest"></a>-->
                                <!--</div>-->
                              </div>
                            </div>

                            <div class="model-card-right-extra">
                              <div class="model-card-stats download-start">
                                <span class="model-card-downloads">178</span>
                              </div>

                              <div class="model-card-stats comments-stat">
                                <a class="model-card-comments" >15</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="model-card-meta model-card-with-user">
                          <div class="model-card-name">
                                            <span class="model-name">
                                                <a class="label"  title="Fishing Boat (200th Model)">Fishing Boat (200th Model)</a>
                                                <a href="/models/staffpicks" class="flag-staffpicked" title="See all staff picks"></a>
                                            </span>
                          </div>

                          <div class="model-card-extra">
                            <div class="model-card-user" >
                              <a class="user-name" >
                                <div class="wrapper js-summary-trigger">
                                  <div class="avatar user-summary-anchor">
                                    <div class="image-container" style="width:34px; ;  background-image: url('/static/image/userImg.jpeg');">
                                      <div style="padding-top:100.0%;"></div>
                                    </div>
                                  </div>

                                  <div class="text">
                                    by
                                    <div class="username-wrapper">Renafox</div>
                                  </div>
                                  <span class="flag flag-pro">Pro</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="item" style="-webkit-animation-delay: 1837ms; animation-delay:1189ms;">
                      <div class="model-card" >
                        <div class="model-card-thumbnail">
                          <div class="image-container" style="width: 100%; background-image: url('/static/image/256144.jpeg');">
                            <div style="padding-top:62.6%;"></div>
                          </div>
                          <div class="model-card-overlay"></div>
                          <a class="model-card-filter" ></a>
                          <a class="model-card-preview" data-action="open-preview">
                            <i class="fa fa-search"></i>
                          </a>


                          <div class="model-card-information">
                            <div class="model-card-left-extra">
                              <div class="model-card-stats">
                                <span class="model-card-views">2.3k</span>
                              </div>

                              <div class="help like-button star-like-button popover-container model-card-like-button model-card-stats" data-action="like">
                                <span class="count">122</span>
                                <span class="tooltip liked-content tooltip-up">Like</span>
                                <span class="tooltip unliked-content tooltip-up">Unlike</span>

                                <!--分享-->
                                <!--<div class="popover share-popover hidden down-arrow middle-arrow">-->
                                <!--<p>Thanks!</p>-->
                                <!--<p>Also share?</p>-->

                                <!--<a data-action="share-on-twitter" class="icon fa fa-twitter"></a>-->
                                <!--<a data-action="share-on-google-plus" class="icon fa fa-google-plus"></a>-->
                                <!--<a data-action="share-on-facebook" class="icon fa fa-facebook"></a>-->
                                <!--<a data-action="share-on-pinterest" class="icon fa fa-pinterest"></a>-->
                                <!--</div>-->
                              </div>
                            </div>

                            <div class="model-card-right-extra">
                              <div class="model-card-stats download-start">
                                <span class="model-card-downloads">178</span>
                              </div>

                              <div class="model-card-stats comments-stat">
                                <a class="model-card-comments" >15</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="model-card-meta model-card-with-user">
                          <div class="model-card-name">
                                            <span class="model-name">
                                                <a class="label"  title="Fishing Boat (200th Model)">Fishing Boat (200th Model)</a>
                                                <a href="/models/staffpicks" class="flag-staffpicked" title="See all staff picks"></a>
                                            </span>
                          </div>

                          <div class="model-card-extra">
                            <div class="model-card-user" >
                              <a class="user-name" >
                                <div class="wrapper js-summary-trigger">
                                  <div class="avatar user-summary-anchor" data-uId="1">
                                    <div class="image-container" style="width:34px; ;  background-image: url('/static/image/userImg.jpeg');">
                                      <div style="padding-top:100.0%;"></div>
                                    </div>
                                  </div>

                                  <div class="text">
                                    by
                                    <div class="username-wrapper">Renafox</div>
                                  </div>
                                  <span class="flag flag-pro">Pro</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>

                </div>
                <button class="button btn-huge load-previous" data-action="load-previous">
                  Load previous items
                </button>

                <button class="button btn-huge btn-primary load-next" data-action="load-next">
                  Load more
                  <i class="icon fa fa-arrow-down can-scroll"></i>
                </button>
              </div>
            </div>

          </div>

        </section>
        <!--底部-->
        <footer-part></footer-part>
      </div>

      <!--隐藏部分 用户信息弹框-->
      <div class="user-summary   " style="left: auto; bottom: auto;display: none">
        <!--用户信息-->
        <div class="user">
          <a>
            <div class="image-container" style="width: 104px; background-image: url(/static/image/userImg.jpeg);">
              <div style="padding-top: 100%;"></div>
            </div>
          </a>
          <div class="info">
            <!--用户名-->
            <p class="name" title="Adipriatna"><a href="/adipriatna">Adipriatna</a></p>
            <!--用户简介-->
            <p class="tagline" title="Hi~"><a href="/adipriatna">Hi~</a></p>

            <div class="follow-wrapper">
                    <span class="toggle-button follow-button" data-action="follow">
                        <a class="button btn-primary toggle btn-medium">
                            <i class="icon fa fa-plus"></i>Follow
                        </a>
                        <a class="button btn-important untoggle btn-medium">
                            <span class="toggled">
                                Following
                            </span>
                            <span class="untoggled">Unfollow</span>
                        </a>
                    </span>
              <p class="follow-count"><a><span>515</span> followers</a></p>
            </div>
          </div>
        </div>
        <!--用户作品列表-->
        <div class="models">
          <a href="https://sketchfab.com/models/abceb47289434de0b2702cec878ecc8c">
            <div class="image-container" style="width: 133px; background-image: url(&quot;https://dg5bepmjyhz9h.cloudfront.net/urls/abceb47289434de0b2702cec878ecc8c/dist/thumbnails/fa2e285d00c340ceb1e9f014fdaa05f9/200x200.jpeg&quot;);"><div style="padding-top: 66.1654%;"></div></div>
          </a>

          <a href="https://sketchfab.com/models/b1a27cb7a04f4a96a895e3565095765f">
            <div class="image-container" style="width: 133px; background-image: url(&quot;https://dg5bepmjyhz9h.cloudfront.net/urls/b1a27cb7a04f4a96a895e3565095765f/dist/thumbnails/591f0c8aca494b6d826af30743be3d72/200x200.jpeg&quot;);"><div style="padding-top: 66.1654%;"></div></div>
          </a>

          <a href="https://sketchfab.com/models/56cce93abd8a485cbdc5bfff37a59f11">
            <div class="image-container" style="width: 133px; background-image: url(&quot;https://dg5bepmjyhz9h.cloudfront.net/urls/56cce93abd8a485cbdc5bfff37a59f11/dist/thumbnails/252b3e39007e45368a40e067df4af514/256x144.jpeg&quot;);"><div style="padding-top: 66.1654%;"></div></div>
          </a>
        </div>
        <div class="stats">
          <p class="model-count">14 models</p>
          <p class="view-count">53k views</p>
          <p class="like-count">1.7k likes</p>
        </div>

      </div>
      <div class="overlay" style="display: none;" id="model-filters">
        <i class="custom-icons icon-ion-close-round-icon" data-action="close-overlay"></i>
        <div class="content">
          <div class="responsive-filters">
            <section class="features">
              <div class="title">FEATURES</div>

              <div class="form-checkbox-list">
                <input id="Downloadable" class="form-checkbox" type="checkbox" name="Downloadable" value="downloadable">
                <label class="form-checkbox-actor" for="Downloadable">
                  <span>Downloadable</span>
                </label>
              </div>

              <div class="form-checkbox-list">
                <input id="Animated" class="form-checkbox" type="checkbox" name="Animated" value="animated">
                <label class="form-checkbox-actor" for="Animated">
                  <span>Animated</span>
                </label>
              </div>

              <div class="form-checkbox-list">
                <input id="Staff picks" class="form-checkbox" type="checkbox" name="Staff picks" value="staffpicked">
                <label class="form-checkbox-actor" for="Staff picks">
                  <span>Staff picks</span>
                </label>
              </div>

            </section>

            <section class="order-by">
              <div class="title">ORDER BY</div>
              <ul class="horizontal-button-list">
                <li class="horizontal-button-block" data-value="-likeCount">
                  <a>Likes</a>
                </li>

                <li class="horizontal-button-block" data-value="-viewCount">
                  <a>Views</a>
                </li>

                <li class="horizontal-button-block" data-value="-publishedAt">
                  <a>Date</a>
                </li>
              </ul>
            </section>

            <section class="date">
              <div class="title">DATE</div>
              <ul class="horizontal-button-list">
                <li class="horizontal-button-block" data-value="">
                  <a>All time</a>
                </li>

                <li class="horizontal-button-block" data-value="1">
                  <a>Today</a>
                </li>

                <li class="horizontal-button-block" data-value="7">
                  <a>Week</a>
                </li>

                <li class="horizontal-button-block active" data-value="31">
                  <a>Month</a>
                </li>
              </ul>
            </section>

            <section class="security">
              <div class="title">SECURITY</div>

              <div class="form-checkbox-list">
                <input id="Show age-restricted" class="form-checkbox" type="checkbox" name="Show age-restricted" value="restricted">
                <label class="form-checkbox-actor" for="Show age-restricted">
                  <span>Show age-restricted</span>
                </label>
              </div>
            </section>

            <section>
              <button class="apply-responsive button btn-primary">APPLY</button>
            </section>
          </div>
        </div>
      </div>
      <div class="overlay" style="display: none;" id="all">
        <i class="custom-icons icon-ion-close-round-icon"  data-action="close-overlay"></i>
        <div class="content categories">
          <div class="item title active">
            <a class="active">
              <i class="fa custom-icons icon-cube-outline-01"></i>
              <span>All categories</span>
            </a>
          </div>

          <div class="item">
            <a data-value="3badf36bd9f549bdba295334d75e04d3">
              <i class="fa gaming"></i>
              <span>Gaming</span>
            </a>
          </div>

          <div class="item">
            <a data-value="86f23935367b4a1f9647c8a20e03d716">
              <i class="fa cultural-heritage"></i>
              <span>Cultural Heritage</span>
            </a>
          </div>

          <div class="item">
            <a data-value="2d643ff5ed03405b9c34ecdffff9d8d8">
              <i class="fa characters"></i>
              <span>Characters</span>
            </a>
          </div>

          <div class="item">
            <a data-value="22a2f677efad4d7bbca5ad45f9b5868e">
              <i class="fa cars-vehicles"></i>
              <span>Cars &amp; vehicles</span>
            </a>
          </div>

          <div class="item">
            <a data-value="c51b29706d4e4e93a82e5eea7cbe6f91">
              <i class="fa places-scenes"></i>
              <span>Places &amp; scenes</span>
            </a>
          </div>

          <div class="item">
            <a data-value="ed9e048550b2478eb1ab2faaba192832">
              <i class="fa animals-creatures"></i>
              <span>Animals &amp; Creatures</span>
            </a>
          </div>

          <div class="item">
            <a data-value="d7cebaeca8604ebab1480e413404b679">
              <i class="fa products-technology"></i>
              <span>Products &amp; Technology</span>
            </a>
          </div>

          <div class="item">
            <a data-value="3f8d0eab859c45ae8ea3af1033d6f3e4">
              <i class="fa weapons"></i>
              <span>Weapons</span>
            </a>
          </div>

          <div class="item">
            <a data-value="f825c721edb541dbbc8cd210123616c7">
              <i class="fa architecture"></i>
              <span>Architecture</span>
            </a>
          </div>

          <div class="item">
            <a data-value="17d20ca7b35243d4a45171838b50704c">
              <i class="fa science-nature-education"></i>
              <span>Science, Nature &amp; Education</span>
            </a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

	export default {
		name: 'modelList',
		data () {
			return {}
		}
	}
</script>
