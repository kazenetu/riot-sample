<todo-item>
  <li>
    <span id='item_display{opts.index}' hide='{this.isEdit}'>{ opts.title }</span>
    <input  id = "item_text{opts.index}" show='{this.isEdit}'  type="text" value="{ opts.title }"></input>
    <button id = "item_edit{opts.index}" class="btn btn-default" hide='{this.isEdit}' onclick='{edit}'>Edit</button>
    <button id = "item_ok{opts.index}" class="btn btn-default" show='{this.isEdit}' onclick='{send}'>OK</button>
    <button id = "item_cancel{opts.index}" class="btn btn-default" show='{this.isEdit}' onclick='{cancel}'>Cancel</button>
  </li>

  <script>
    //編集フラグ
    this.isEdit = false;

    //編集モードに切り替える
    edit(e){
      this['item_text{opts.index}'].value = this['item_display{opts.index}'].innerText;
      this.isEdit=true;
    }

    //更新する
    send(e){
      //更新依頼メッセージを発信する
      var text = this['item_text{opts.index}'].value;
      obs.trigger("upd",opts.index,text);
      this.isEdit=false;
    }

    //更新をキャンセルする
    cancel(e){
      this.isEdit=false;
    }

    //更新メッセージを受信、更新する
    var that = this;
    this.on("updated", function() {
      that.root.title=opts.title;
      that.update();
    });
  </script>
</todo-item>
