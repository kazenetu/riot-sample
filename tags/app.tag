<app>
  <script src="todo-item.js"></script>

  <h1>{ opts.heading }</h1>
  <form onsubmit="{ add }">
    <input>
    <button class="btn btn-default">Add #{ items.length + 1 }</button>
  </form>
  <ul>
    <todo-item each="{ item, i in items }" title="{ item.title }" index="{i}"></todo-item>
  </ul>
  <script>
    this.items = [];

    //子供のjsを取得する
    if(opts.useTag === undefined){
      $.ajax({
          url: './todo-item.js',
          type: 'get',
          dataType: 'script'
      })
      .done(function (response) {
        if(opts.items !== undefined){
          this.items = opts.items;
        }
      });
    }

    //リストを追加する
    add(e) {
      var input = e.target[0];
      this.items.push({ title: input.value });
      input.value = '';
    }

    //更新依頼メッセージを受信、リストアイテムを更新する
    var that = this;
    obs.on("upd", function(index,text) {
        that.items[index].title=text;
    });

  </script>
</app>
