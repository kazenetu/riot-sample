riot.tag('todo-item', '<li> <span id="item_display{opts.index}" hide="{this.isEdit}">{ opts.title }</span> <input id = "item_text{opts.index}" show="{this.isEdit}" type="text" value="{ opts.title }"></input> <button class="btn btn-default" hide="{this.isEdit}" onclick="{edit}">Edit</button> <button class="btn btn-default" show="{this.isEdit}" onclick="{send}">OK</button> <button class="btn btn-default" show="{this.isEdit}" onclick="{cancel}">Cancel</button> </li>', function(opts) {
    this.isEdit = false;
    this.edit = function(e) {
      this['item_text{opts.index}'].value = this['item_display{opts.index}'].innerText;
      this.isEdit=true;
    }.bind(this);
    this.send = function(e) {
      var text = this['item_text{opts.index}'].value;
      obs.trigger("upd",opts.index,text);
      this.isEdit=false;
    }.bind(this);
    this.cancel = function(e) {
      this.isEdit=false;
    }.bind(this);
    var that = this;
    this.on("updated", function() {
      that.root.title=opts.title;
      that.update();
    });
  
});
