riot.tag('tf-personality-blend', '<div class="tf-blends-container"> <div class="tf-badges"> <div class="tf-badge" riot-style="border-color: {this.type1.border};"> <div class="tf-badge-background"></div> <img riot-src="{this.type1.badge.image_medium}"> </div> <div class="tf-badge" riot-style="border-color: {this.type2.border};"> <div class="tf-badge-background"></div> <img riot-src="{this.type2.badge.image_medium}"> </div> </div> <h2>{this.type1.name} / {this.type2.name}</h2> <div class="description">{this.description}</div> </div>', '@font-face { font-family: "Source Sans Pro"; font-style: normal; font-weight: 400; src: local(\'Source Sans Pro\'), local(\'Source Sans Pro\'), url("https://s3.amazonaws.com/traitify-cdn/assets/fonts/source-sans-pro.woff") format(\'woff\'); } .tf-blends-container .tf-badge-background{ width: 100%; height: 100%; position: absolute; opacity: .2; top: 0px; left: 0px; } .tf-blends-container{ width: 100%; } .tf-blends-container{ font-family: "Source Sans Pro"; padding: 10px; } .tf-blends-container.ie{ font-family: "Helvetica Neue", Helvetica, Arial, "sans-serif"; } .tf-blends-container div, img{ box-sizing: content-box; width: 100%; } .tf-blends-container .tf-badge{ width: 22%; padding:12%; position: relative; border-radius: 50%; border: 2px solid; display: inline-block; overflow: hidden; } .tf-blends-container .tf-badge:first-child{ margin-right: -4%; z-index: 1; } .tf-blends-container .tf-badge:last-child{ margin-left: -4%; } .tf-blends-container .tf-badges{ width: 100%; max-width: 330px; margin: 0px auto; text-align:center; } .tf-blends-container h2{ text-align: center; font-size: 25px; font-weight: 400; } .tf-blends-container .description{ max-width: 800px; margin: 0px auto; text-align: justify; }', function(opts) {var that;

this.assessmentId = opts.assessmentId || this.root.getAttribute("assessment-id");

that = this;

this.initialize = function() {
  that.type1 = that.personality_blend.personality_type_1;
  that.type2 = that.personality_blend.personality_type_2;
  that.type1.bg = that.type1.badge.color_1;
  that.type1.border = that.type1.badge.color_1;
  that.type2.bg = that.type2.badge.color_1;
  that.type2.border = that.type2.badge.color_1;
  that.description = that.personality_blend.description;
  return that.update();
};

if (opts.personality_blend) {
  that.personality_blend = opts.personality_blend;
  that.initialize();
} else if (this.assessmentId) {
  window.Traitify.getPersonalityTypes(this.assessmentId).then(function(results) {
    that.personality_blend = results.personality_blend;
    return that.initialize();
  });
}

});