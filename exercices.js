/**
*	Exercice n°0
*/

function escape(s) {
  // Warmup.

  return '<script>console.log("'+s+'");</script>';
}

/**
*	Exercice n°1
*/

function escape(s) {
  // Escaping scheme courtesy of Adobe Systems, Inc.
  s = s.replace(/"/g, '\\"');
  return '<script>console.log("' + s + '");</script>';
}

/**
*	Exercice n°2
*/

function escape(s) {
  s = JSON.stringify(s);
  return '<script>console.log(' + s + ');</script>';
}

/**
*	Exercice n°3
*/

function escape(s) {
  var url = 'javascript:console.log(' + JSON.stringify(s) + ')';
  console.log(url);

  var a = document.createElement('a');
  a.href = url;
  document.body.appendChild(a);
  a.click();
}

/**
*	Exercice n°4
*/

function escape(s) {
  var text = s.replace(/</g, '&lt;').replace('"', '&quot;');
  // URLs
  text = text.replace(/(http:\/\/\S+)/g, '<a href="$1">$1</a>');
  // [[img123|Description]]
  text = text.replace(/\[\[(\w+)\|(.+?)\]\]/g, '<img alt="$2" src="$1.gif">');
  return text;
}

/**
*	Exercice n°5
*/

function escape(s) {
  // Level 4 had a typo, thanks Alok.
  // If your solution for 4 still works here, you can go back and get more points on level 4 now.

  var text = s.replace(/</g, '&lt;').replace(/"/g, '&quot;');
  // URLs
  text = text.replace(/(http:\/\/\S+)/g, '<a href="$1">$1</a>');
  // [[img123|Description]]
  text = text.replace(/\[\[(\w+)\|(.+?)\]\]/g, '<img alt="$2" src="$1.gif">');
  return text;
}

/**
*	Exercice n°6
*/

function escape(s) {
  // Slightly too lazy to make two input fields.
  // Pass in something like "TextNode#foo"
  var m = s.split(/#/);

  // Only slightly contrived at this point.
  var a = document.createElement('div');
  a.appendChild(document['create'+m[0]].apply(document, m.slice(1)));
  return a.innerHTML;
}

/**
*	Exercice n°7
*/

function escape(s) {
  // Pass inn "callback#userdata"
  var thing = s.split(/#/);

  if (!/^[a-zA-Z\[\]']*$/.test(thing[0])) return 'Invalid callback';
  var obj = {'userdata': thing[1] };
  var json = JSON.stringify(obj).replace(/</g, '\\u003c');
  return "<script>" + thing[0] + "(" + json +")</script>";
}


/**
*	Exercice n°8
*/

function escape(s) {
  // Courtesy of Skandiabanken
  return '<script>console.log("' + s.toUpperCase() + '")</script>';
}

/**
*	Exercice n°9
*/

function escape(s) {
  // This is sort of a spoiler for the last level :-)

  if (/[\\<>]/.test(s)) return '-';

  return '<script>console.log("' + s.toUpperCase() + '")</script>';
}

/**
*	Exercice n°10
*/

function escape(s) {
  function htmlEscape(s) {
    return s.replace(/./g, function(x) {
       return { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&#39;' }[x] || x;
     });
  }

  function expandTemplate(template, args) {
    return template.replace(
        /{(\w+)}/g,
        function(_, n) {
           return htmlEscape(args[n]);
         });
  }
  
  return expandTemplate(
    "                                                \n\
      <h2>Hello, <span id=name></span>!</h2>         \n\
      <script>                                       \n\
         var v = document.getElementById('name');    \n\
         v.innerHTML = '<a href=#>{name}</a>';       \n\
      <\/script>                                     \n\
    ",
    { name : s }
  );
}

/**
*	Exercice n°11
*/

function escape(s) {
  // Spoiler for level 2
  s = JSON.stringify(s).replace(/<\/script/gi, '');

  return '<script>console.log(' + s + ');</script>';
}

/**
*	Exercice n°12
*/

function escape(s) {
  // Pass inn "callback#userdata"
  var thing = s.split(/#/);

  if (!/^[a-zA-Z\[\]']*$/.test(thing[0])) return 'Invalid callback';
  var obj = {'userdata': thing[1] };
  var json = JSON.stringify(obj).replace(/\//g, '\\/');
  return "<script>" + thing[0] + "(" + json +")</script>";
}