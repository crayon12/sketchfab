<template>
  <li class="item" >
    <div class="model-card" >
      <div class="model-card-thumbnail">
        <!--封面-->
        <div class="image-container" style="width:100%; ;  background-image: url('/static/image/256144.jpeg');">
          <div style="padding-top:62.6%;"></div>
        </div>
        <div class="model-card-overlay"></div>
        <a class="model-card-filter" ></a>
        <a class="model-card-preview" >
          <i class="fa fa-search"></i>
        </a>
        <!--模型信息-->
        <div class="model-card-information">
          <div class="model-card-left-extra">
            <div class="model-card-stats">
              <span class="model-card-views">268</span>
            </div>
            <div class="help like-button star-like-button popover-container model-card-like-button model-card-stats" data-action="like-model">
              <span class="count">42</span>
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
            <div class="model-card-stats animation-stat">
              <span title="Model has 1 animation" class="model-card-animations">1</span>
            </div>
            <div class="model-card-stats comments-stat">
              <a class="model-card-comments" >11</a>
            </div>
          </div>
        </div>
      </div>
      <!--用户信息-->
      <div class="model-card-meta model-card-with-user">
        <div class="model-card-name">
          <span class="model-name">
              <a class="label" title="Animated Emma in a Straw Hat 3D">Animated Emma in a Straw Hat 3D</a>
              <span class="flag-staffpicked" title="Staff Picks"></span>
          </span>
        </div>

        <div class="model-card-extra">
          <div class="model-card-user" >
            <a class="user-name">
              <div class="wrapper js-summary-trigger">
                <div class="avatar user-summary-anchor" >
                  <div class="image-container" style="width:34px; ;  background-image: url('/static/image/userImg.jpeg');">
                    <div style="padding-top:100.0%;"></div>
                  </div>
                </div>

                <div class="text">
                  by
                  <div class="username-wrapper" title="E Lynx">E Lynx</div>
                </div>
                <span class="flag flag-pro">Pro</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
	export default {
		name: 'model-box',
		data () {
			return {}
		}
	}
</script>
