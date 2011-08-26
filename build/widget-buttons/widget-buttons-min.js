YUI.add("widget-buttons",function(b){var j="boundingBox",i="visible",h="click",m="renderUI",g="bindUI",n="syncUI",l="button",a="button-content",f="button-wrapper",e="buttonsChange",d=b.ClassNameManager.getClassName,c=b.Node.create;function k(o){b.after(this._renderUIButtons,this,m);b.after(this._bindUIButtons,this,g);b.after(this._syncUIButtons,this,n);}k.ATTRS={buttons:{value:[{type:"close"}],validator:b.Lang.isArray}};k.DEFAULT_BUTTONS={"close":{value:'<div style="background:url(http://yui.yahooapis.com/3.4.0pr3/build/panel/assets/skins/sam/sprite_icons.gif) no-repeat; width:13px; height:13px; background-position: 0 2px;"></div>',action:function(o){o.preventDefault();this.hide();},section:b.WidgetStdMod.HEADER}};k.BUTTON_CLASS_NAMES={button:d(l),content:d(a),wrapper:b.Widget.getClassName(f)};k.TEMPLATES={defaultTemplate:"<a href={href} class='"+k.BUTTON_CLASS_NAMES.button+"'><span class='"+k.BUTTON_CLASS_NAMES.content+"'>{value}</span></a>",wrapper:"<span class='"+k.BUTTON_CLASS_NAMES.wrapper+"'></span>",clearfix:"<div style='clear:both;'></div>"};k.prototype={_hdBtnNode:null,_ftBtnNode:null,_buttonsArray:[],_uiHandlesButtons:[],_renderUIButtons:function(){this._removeButtonNode(true,true);this._hdBtnNode=c(k.TEMPLATES.wrapper);this._ftBtnNode=c(k.TEMPLATES.wrapper);this._createButtons();},_bindUIButtons:function(){var o=this;b.each(this._buttonsArray,function(p){o._attachEventsToButton(p);});this.after(e,this._afterButtonsChange);},_syncUIButtons:function(){if(this._hdBtnNode.hasChildNodes()){this.setStdModContent(b.WidgetStdMod.HEADER,this._hdBtnNode,b.WidgetStdMod.AFTER);this._appendClearFix();}if(this._ftBtnNode.hasChildNodes()){this.setStdModContent(b.WidgetStdMod.FOOTER,this._ftBtnNode,b.WidgetStdMod.AFTER);}},addButton:function(o){var p=this.get("buttons");p.push(o);this.set("buttons",p);},_createButtons:function(){var t=this.get("buttons"),q="",p="",s,o=this,r;b.each(t,function(u){if(u.type&&k.DEFAULT_BUTTONS[u.type]){u=k.DEFAULT_BUTTONS[u.type];}q=b.Lang.sub(k.TEMPLATES.defaultTemplate,{href:u.href||"#",value:u.value});s=c(q);o._buttonsArray.push({node:s,cb:u.action});if(u.section===b.WidgetStdMod.HEADER){o._hdBtnNode.appendChild(s);}else{if(u.section===b.WidgetStdMod.FOOTER){o._ftBtnNode.appendChild(s);}else{}}});return true;},_appendClearFix:function(){this.setStdModContent(b.WidgetStdMod.HEADER,c(k.TEMPLATES.clearfix),b.WidgetStdMod.AFTER);},_attachEventsToButton:function(p){this._uiHandlesButtons.push(p.node.after(h,p.cb,this));},_afterButtonsChange:function(o){this._detachEventsFromButtons();this._renderUIButtons();this._bindUIButtons();this._syncUIButtons();},_removeButtonNode:function(o,p){if(o&&this._hdBtnNode&&this._hdBtnNode.hasChildNodes()){this._hdBtnNode.remove();this._hdBtnNode=null;}if(p&&this._ftBtnNode&&this._ftBtnNode.hasChildNodes()){this._ftBtnNode.remove();this._ftBtnNode=null;}},_detachEventsFromButtons:function(){b.each(this._uiHandlesButtons,function(o){o.detach();});this._uiHandlesButtons=[];}};b.WidgetButtons=k;},"@VERSION@",{requires:["base-build","widget","widget-stdmod"]});