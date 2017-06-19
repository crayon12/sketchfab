<template>
    <div>
      <!--顶部 大屏-->
      <header id="main-header" class="top  box-shadow-none">
        <div class="container">
          <div class="logo">
            <router-link class="link" to="/">
              <img src="/static/image/logo.png" width="121" height="30" class="visual" alt="Sketchfab">
            </router-link>
          </div>
          <ul class="navigation">
            <li class="section">
              <a href="" class="link show-hover-menu">Explore</a>
              <ul class="hover-menu large-menu" style="">
                <li class="title right">CATEGORIES</li>
                <li class="left-column">
                  <a href="">
                    <i class="fa fa-gamepad"></i>
                    <span>Gaming</span>
                  </a>
                </li>
                <li class="left-column">
                  <a href="">
                    <i class="fa fa-university"></i>
                    <span>Cultural Heritage</span>
                  </a>
                </li>
                <li class="left-column">
                  <a href="">
                    <i class="fa fa-female"></i>
                    <span>Characters</span>
                  </a>
                </li>
                <li class="left-column">
                  <a href="">
                    <i class="fa fa-car"></i>
                    <span>Cars &amp; vehicles</span>
                  </a>
                </li>
                <li class="left-column">
                  <a href="">
                    <i class="fa fa-sun-o"></i>
                    <span>Places &amp; scenes</span>
                  </a>
                </li>
                <li class="left-column">
                  <a href="">
                    <i class="fa fa-bug"></i>
                    <span>Animals &amp; Creatures</span>
                  </a>
                </li>
                <li class="left-column">
                  <a href="">
                    <i class="fa fa-headphones"></i>
                    <span>Products &amp; Technology</span>
                  </a>
                </li>
                <li class="left-column">
                  <a href="">
                    <i class="fa fa-bomb"></i>
                    <span>Weapons</span>
                  </a>
                </li>
                <li class="left-column">
                  <a href="">
                    <i class="fa fa-building-o"></i>
                    <span>Architecture</span>
                  </a>
                </li>
                <li class="left-column">
                  <a href="">
                    <i class="fa fa-compass"></i>
                    <span>Science, Nature &amp; Education</span>
                  </a>
                </li>
                <li class="separator-vertical"></li>
                <li class="title right">HIGHLIGHTS</li>
                <li class="right-column"><a href="">Popular</a></li>
                <li class="right-column"><a href="">Staff picks</a></li>
                <li class="right-column"><a href="">Animations</a></li>
                <li class="right-column"><a href="">Virtual Reality</a></li>
                <li class="right-column"><a href="">Downloadable</a></li>
                <li class="title right">COLLECTIONS</li>
                <li class="right-column"><a href="">All collections</a></li>
                <li class="white-space"></li>
              </ul>
            </li>
            <li class="section">
              <a href="" class="link show-hover-menu">Community</a>
              <ul class="hover-menu" style="">
                <li><a href="">All users</a></li>
                <li><a href="">Pros</a></li>
                <li><a href="">Forum</a></li>
              </ul>
            </li>
          </ul>

          <form class="search" data-action="search" action="../components/model">
            <div class="box">
              <button class="search-icon fa fa-search" type="submit"></button>
              <input class="value header-search-form" type="text" name="query" placeholder="Search" autocapitalize="none" autocomplete="off" autocorrect="off" maxlength="128">
              <a href="#" class="clear hidden"></a>
            </div>
            <button class="header-search-cancel" data-action="exit-search">Cancel</button>
          </form>

          <div class="actions">
            <!--用户未登录-->
            <!--<div class="anonymous">
                <a href="/login" class="button btn-medium login" data-action="open-login">Login</a>
                or
                <a href="/signup" class="button btn-medium btn-secondary signup" data-action="open-signup">Sign Up</a>
                <a href="/signup?next=/upload" class="button btn-medium btn-primary signup-upload" data-action="open-signup-upload">
                    <i class="icon fa fa-arrow-up"></i>
                    Upload
                </a>
            </div>-->

            <!--用户登录-->
            <a class="button btn-medium btn-primary download" data-action="open-upload">
              <i class="icon fa fa-arrow-up"></i>
              Upload
            </a>
            <div class="user">
              <a class="infos show-hover-menu" href="https://sketchfab.com/yjt">
                <div class="avatar">
                  <div class="image-container" style="width:32px;background-image: url('/static/image/avatar.jpeg');">
                    <div style="padding-top:100.0%;"></div>
                  </div>
                </div>
              </a>
              <ul class="hover-menu" style="">
                <li>
                  <a class="user-name" href="https://sketchfab.com/yjt">
                    <div class="wrapper " >
                      <div class="text">
                        <div class="username-wrapper" title="yjt">yjt</div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="separator"></li>
                <li><a href="/">Newsfeed</a></li>
                <li><a href="">Models</a></li>
                <li><a href="">Collections</a></li>
                <li><a href="">Likes</a></li>
                <li class="separator"></li>
                <li><a href="">Settings</a></li>
                <li><a href="">Invite friends</a></li>

                <li><a href="">Go Pro</a></li>

                <li><a href="https://help.sketchfab.com/hc/en-us?utm_source=website&amp;utm_campaign=header">Help &amp; FAQ</a></li>
                <li class="separator"></li>
                <li>
                  <form action="" method="post">
                    <input type="hidden" name="csrfmiddlewaretoken" value="jNzkzce0U5jLqW3W8De7VWmA0zTV6pa4DwmZXzJXr1ppfGpdl76NpmYZFyAvQm0v">
                    <button type="submit" class="btn-textified">Logout</button>
                  </form>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </header>
      <!--顶部 中小屏-->
      <header id="responsive-header" class="responsive-top">
        <a class="togglenavigation" data-action="toggle-navigation">
          <i class="fa fa-bars"></i>
        </a>
        <div class="logo">
          <a href="index.html">
            <img src="/static/image/logo.png" width="100" height="25" alt="Sketchfab" style="margin-top: 7px;">
          </a>
        </div>
        <a class="opensearch" data-action="open-search">
          <i class="fa fa-search"></i>
        </a>
        <form class="search" action="" method="get" data-action="search">
          <div class="inner">
            <input class="search-field" type="search" name="query" placeholder="Search">
            <a href="#" class="clear hidden"></a>
            <button type="button" class="closesearch" data-action="close-search">
              Cancel
            </button>
          </div>
        </form>
      </header>

      <!--菜单列表  中小屏-->
      <div class="responsive-navigation">

        <!--未登录-->
        <!--<div class="inner">
            <div class="responsive-navigation-auth">
                <a href="/login" class="button btn-medium btn-primary login">Login</a>
                <a href="/signup" class="signup">No account? Sign up</a>
            </div>

            <ul class="section navigation">
                <li>
                    <a class="link title" href="/">Home</a>
                </li>
                <li>
                    <a class="link title" >Explore</a>
                    <ul class="section">
                        <li><a class="link" >Popular</a></li>
                        <li><a class="link" >Staff picks</a></li>
                        <li><a class="link">Animations</a></li>
                        <li><a class="link" >Virtual Reality</a></li>
                        <li><a class="link" >Collections</a></li>
                    </ul>
                </li>
                <li>
                    <a class="link title">Community</a>
                    <ul class="section">
                        <li><a class="link" >All users</a></li>
                        <li><a class="link" >Pros</a></li>
                        <li><a class="link" >Forum</a></li>
                        <li><a class="link">Help &amp; FAQ</a></li>
                    </ul>
                </li>
                <li>
                    <a class="link title" >Blog</a>
                    <ul class="section">
                        <li><a class="linkavigation">New on Sketchfab</a></li>
                        <li><a class="link">Community stories</a></li>
                        <li><a class="link">Contests</a></li>
                        <li><a class="link">Events</a></li>
                        <li><a class="link">Tutorials</a></li>
                        <li><a class="link">Inside Sketchfab</a></li>
                    </ul>
                </li>
            </ul>
        </div>-->

        <!--用户登录-->
        <div class="inner">
          <ul class="section navigation">
            <li>
              <a class="user-name">
                <div class="wrapper ">
                  <div class="avatar " >
                    <div class="image-container" style="width:20px; ;  background-image: url('/static/image/avatar.jpeg');">
                      <div style="padding-top:100.0%;"></div>
                    </div>
                  </div>
                  <div class="text">
                    <div class="username-wrapper" title="yjt">yjt</div>
                  </div>
                </div>
              </a>
              <ul class="section">
                <li><a class="link" href="/">Newsfeed</a></li>
                <li><a class="link" href="https://sketchfab.com/yjt/models">Models</a></li>
                <li><a class="link" href="https://sketchfab.com/yjt/collections">Collections</a></li>
                <li><a class="link" href="https://sketchfab.com/yjt/likes">Likes</a></li>
              </ul>
            </li>
            <li>
              <a class="link title" href="/models/popular">Explore</a>
              <ul class="section">
                <li><a class="link" href="/models/popular">Popular</a></li>
                <li><a class="link" href="/models/staffpicks">Staff picks</a></li>
                <li><a class="link" href="/models?date=week&amp;features=animated&amp;sort_by=-likeCount">Animations</a></li>
                <li><a class="link" href="/virtual-reality">Virtual Reality</a></li>
                <li><a class="link" href="/collections/popular">Collections</a></li>
              </ul>
            </li>
            <li>
              <a class="link title" href="/members">Community</a>
              <ul class="section">
                <li><a class="link" href="/members">All users</a></li>
                <li><a class="link" href="/members/pros">Pros</a></li>
                <li><a class="link" href="https://forum.sketchfab.com?utm_source=website&amp;utm_campaign=responsive_navigation">Forum</a></li>
                <li><a class="link" href="https://help.sketchfab.com/hc/en-us?utm_source=website&amp;utm_campaign=responsive_navigation">Help &amp; FAQ</a></li>
              </ul>
            </li>
            <li>
              <a class="link title" href="https://blog.sketchfab.com?utm_source=website&amp;utm_campaign=responsive_navigation" target="_blank">Blog</a>
              <ul class="section">
                <li><a class="link" >New on Sketchfab</a></li>
                <li><a class="link" >Community stories</a></li>
                <li><a class="link" >Contests</a></li>
                <li><a class="link" >Events</a></li>
                <li><a class="link" >Tutorials</a></li>
                <li><a class="link" >Inside Sketchfab</a></li>
              </ul>
            </li>
            <li>
              <a class="link title" >My profile</a>
              <ul class="section">
                <li><a class="link" href="/settings/profile">Settings</a></li>
                <li class="link"><a href="/plans">Go Pro</a></li>
                <li>
                  <form action="/logout" method="post">
                    <input type="hidden"  >
                    <button type="submit" class="btn-textified">Logout</button>
                  </form>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="responsive-navigation-bind-out"></div>
    </div>
</template>

<script>
	export default {
		name: 'header-part',
		data () {
			return {}
		}
	}
</script>
