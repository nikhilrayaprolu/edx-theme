!function(e){e(["jquery","backbone"],function($,e){"use strict";return e.View.extend({el:"#discovery-form",events:{"submit form":"submitForm"},initialize:function(){this.$searchField=this.$el.find("input"),this.$searchButton=this.$el.find("button"),this.$message=this.$el.find("#discovery-message"),this.$loadingIndicator=this.$el.find("#loading-indicator")},submitForm:function(e){e.preventDefault(),this.doSearch()},doSearch:function(e){e?this.$searchField.val(e):e=this.$searchField.val(),this.trigger("search",$.trim(e)),this.$message.empty()},clearSearch:function(){this.$message.empty(),this.$searchField.val("")},showLoadingIndicator:function(){this.$message.empty(),this.$loadingIndicator.removeClass("hidden")},hideLoadingIndicator:function(){this.$loadingIndicator.addClass("hidden")},showNotFoundMessage:function(e){var i=interpolate(gettext('We couldn\'t find any results for "%s".'),[_.escape(e)]);this.$message.html(i)},showNumberOfResults:function(e){var i=interpolate(gettext("Displaying <span>%s course(s).</span>"),[_.escape(e)]);this.$message.html(i)},showErrorMessage:function(){this.$message.html(gettext("There was an error, try searching again."))}})})}(define||RequireJS.define);