
javascript:(
            function() {
              var win = window.open();
              var code = encodeURIComponent(document.body.innerHTML);
              var act = document.createElement('form');
              act.action = 'http://localhost:4567/';
              act.method = 'post';
              act.name = 'myform';
              act.id = 'myform';
              var hid = document.createElement('input');
              hid.type = 'hidden';
              hid.name = 'body';
              hid.value = code;
              var hid2 = document.createElement('input');
              hid2.type = 'hidden';
              hid2.name = 'urls';
              hid2.value = encodeURIComponent(location.href);
              act.appendChild(hid);
              act.appendChild(hid2);
              win.document.body.appendChild(act);
              win.document.getElementById('myform').submit();
            }
)();

