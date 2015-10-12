(function(){var e=this;function f(a,b){var c=a.split("."),d=e;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var t;c.length&&(t=c.shift());)c.length||void 0===b?d=d[t]?d[t]:d[t]={}:d[t]=b}function g(a,b){function c(){}c.prototype=b.prototype;a.q=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.p=function(a,c,O){var M=Array.prototype.slice.call(arguments,2);return b.prototype[c].apply(a,M)}};function h(a){this.message=a||""}g(h,Error);f("javascript.util.EmptyStackException",h);h.prototype.name="EmptyStackException";function k(a){this.message=a||""}g(k,Error);f("javascript.util.IndexOutOfBoundsException",k);k.prototype.name="IndexOutOfBoundsException";function l(){}f("javascript.util.Iterator",l);l.prototype.hasNext=l.prototype.c;l.prototype.next=l.prototype.next;l.prototype.remove=l.prototype.remove;function m(){}f("javascript.util.Collection",m);function n(){}g(n,m);f("javascript.util.List",n);function p(){}f("javascript.util.Map",p);function q(a){this.message=a||""}g(q,Error);f("javascript.util.NoSuchElementException",q);q.prototype.name="NoSuchElementException";function r(a){this.message=a||""}g(r,Error);r.prototype.name="OperationNotSupported";function s(a){this.a=[];a instanceof m&&this.e(a)}g(s,n);f("javascript.util.ArrayList",s);s.prototype.a=null;s.prototype.add=function(a){this.a.push(a);return!0};s.prototype.add=s.prototype.add;s.prototype.e=function(a){for(a=a.f();a.c();)this.add(a.next());return!0};s.prototype.addAll=s.prototype.e;s.prototype.set=function(a,b){var c=this.a[a];this.a[a]=b;return c};s.prototype.set=s.prototype.set;s.prototype.f=function(){return new u(this)};s.prototype.iterator=s.prototype.f;
    s.prototype.get=function(a){if(0>a||a>=this.size())throw new k;return this.a[a]};s.prototype.get=s.prototype.get;s.prototype.g=function(){return 0===this.a.length};s.prototype.isEmpty=s.prototype.g;s.prototype.size=function(){return this.a.length};s.prototype.size=s.prototype.size;s.prototype.h=function(){for(var a=[],b=0,c=this.a.length;b<c;b++)a.push(this.a[b]);return a};s.prototype.toArray=s.prototype.h;
    s.prototype.remove=function(a){for(var b=!1,c=0,d=this.a.length;c<d;c++)if(this.a[c]===a){this.a.splice(c,1);b=!0;break}return b};s.prototype.remove=s.prototype.remove;function u(a){this.j=a}f("$jscomp.scope.Iterator_",u);u.prototype.j=null;u.prototype.b=0;u.prototype.next=function(){if(this.b===this.j.size())throw new q;return this.j.get(this.b++)};u.prototype.next=u.prototype.next;u.prototype.c=function(){return this.b<this.j.size()?!0:!1};u.prototype.hasNext=u.prototype.c;
    u.prototype.remove=function(){throw new r;};u.prototype.remove=u.prototype.remove;function v(){}f("javascript.util.Arrays",v);
    v.sort=function(){var a=arguments[0],b,c,d;if(1===arguments.length)a.sort();else if(2===arguments.length)c=arguments[1],d=function(a,b){return c.compare(a,b)},a.sort(d);else if(3===arguments.length)for(b=a.slice(arguments[1],arguments[2]),b.sort(),d=a.slice(0,arguments[1]).concat(b,a.slice(arguments[2],a.length)),a.splice(0,a.length),b=0;b<d.length;b++)a.push(d[b]);else if(4===arguments.length)for(b=a.slice(arguments[1],arguments[2]),c=arguments[3],d=function(a,b){return c.compare(a,b)},b.sort(d),
                                                                                                                                                                                                                                                                                                                                                                                                                         d=a.slice(0,arguments[1]).concat(b,a.slice(arguments[2],a.length)),a.splice(0,a.length),b=0;b<d.length;b++)a.push(d[b])};v.asList=function(a){for(var b=new s,c=0,d=a.length;c<d;c++)b.add(a[c]);return b};function w(){this.i={}}g(w,p);f("javascript.util.HashMap",w);w.prototype.i=null;w.prototype.get=function(a){return this.i[a]||null};w.prototype.get=w.prototype.get;w.prototype.put=function(a,b){return this.i[a]=b};w.prototype.put=w.prototype.put;w.prototype.m=function(){var a=new s,b;for(b in this.i)this.i.hasOwnProperty(b)&&a.add(this.i[b]);return a};w.prototype.values=w.prototype.m;w.prototype.size=function(){return this.m().size()};w.prototype.size=w.prototype.size;function x(){}g(x,m);f("javascript.util.Set",x);function y(a){this.a=[];a instanceof m&&this.e(a)}g(y,x);f("javascript.util.HashSet",y);y.prototype.a=null;y.prototype.contains=function(a){for(var b=0,c=this.a.length;b<c;b++)if(this.a[b]===a)return!0;return!1};y.prototype.contains=y.prototype.contains;y.prototype.add=function(a){if(this.contains(a))return!1;this.a.push(a);return!0};y.prototype.add=y.prototype.add;y.prototype.e=function(a){for(a=a.f();a.c();)this.add(a.next());return!0};y.prototype.addAll=y.prototype.e;
    y.prototype.remove=function(){throw new r;};y.prototype.remove=y.prototype.remove;y.prototype.size=function(){return this.a.length};y.prototype.g=function(){return 0===this.a.length};y.prototype.isEmpty=y.prototype.g;y.prototype.h=function(){for(var a=[],b=0,c=this.a.length;b<c;b++)a.push(this.a[b]);return a};y.prototype.toArray=y.prototype.h;y.prototype.f=function(){return new z(this)};y.prototype.iterator=y.prototype.f;function z(a){this.k=a}f("$jscomp.scope.Iterator_$1",z);z.prototype.k=null;
    z.prototype.b=0;z.prototype.next=function(){if(this.b===this.k.size())throw new q;return this.k.a[this.b++]};z.prototype.next=z.prototype.next;z.prototype.c=function(){return this.b<this.k.size()?!0:!1};z.prototype.hasNext=z.prototype.c;z.prototype.remove=function(){throw new r;};z.prototype.remove=z.prototype.remove;function A(){}g(A,p);f("javascript.util.SortedMap",A);function B(){}g(B,x);f("javascript.util.SortedSet",B);function C(){this.a=[]}g(C,n);f("javascript.util.Stack",C);C.prototype.a=null;C.prototype.push=function(a){this.a.push(a);return a};C.prototype.push=C.prototype.push;C.prototype.pop=function(){if(0===this.a.length)throw new h;return this.a.pop()};C.prototype.pop=C.prototype.pop;C.prototype.o=function(){if(0===this.a.length)throw new h;return this.a[this.a.length-1]};C.prototype.peek=C.prototype.o;C.prototype.empty=function(){return 0===this.a.length?!0:!1};C.prototype.empty=C.prototype.empty;
    C.prototype.g=function(){return this.empty()};C.prototype.isEmpty=C.prototype.g;C.prototype.search=function(a){return this.a.indexOf(a)};C.prototype.search=C.prototype.search;C.prototype.size=function(){return this.a.length};C.prototype.size=C.prototype.size;C.prototype.h=function(){for(var a=[],b=0,c=this.a.length;b<c;b++)a.push(this.a[b]);return a};C.prototype.toArray=C.prototype.h;function D(a){return null==a?null:a.parent}function E(a,b){null!==a&&(a.color=b)}function F(a){return null==a?null:a.left}function G(a){return null==a?null:a.right}function H(){this.d=null;this.n=0}g(H,A);f("javascript.util.TreeMap",H);H.prototype.get=function(a){for(var b=this.d;null!==b;){var c=a.compareTo(b.key);if(0>c)b=b.left;else if(0<c)b=b.right;else return b.value}return null};H.prototype.get=H.prototype.get;
    H.prototype.put=function(a,b){if(null===this.d)return this.d={key:a,value:b,left:null,right:null,parent:null,color:0},this.n=1,null;var c=this.d,d,t;do if(d=c,t=a.compareTo(c.key),0>t)c=c.left;else if(0<t)c=c.right;else return d=c.value,c.value=b,d;while(null!==c);c={key:a,left:null,right:null,value:b,parent:d,color:0};0>t?d.left=c:d.right=c;for(c.color=1;null!=c&&c!=this.d&&1==c.parent.color;)D(c)==F(D(D(c)))?(d=G(D(D(c))),1==(null==d?0:d.color)?(E(D(c),0),E(d,0),E(D(D(c)),1),c=D(D(c))):(c==G(D(c))&&
        (c=D(c),I(this,c)),E(D(c),0),E(D(D(c)),1),J(this,D(D(c))))):(d=F(D(D(c))),1==(null==d?0:d.color)?(E(D(c),0),E(d,0),E(D(D(c)),1),c=D(D(c))):(c==F(D(c))&&(c=D(c),J(this,c)),E(D(c),0),E(D(D(c)),1),I(this,D(D(c)))));this.d.color=0;this.n++;return null};H.prototype.put=H.prototype.put;H.prototype.m=function(){var a=new s,b;b=this.d;if(null!=b)for(;null!=b.left;)b=b.left;if(null!==b)for(a.add(b.value);null!==(b=K(b));)a.add(b.value);return a};H.prototype.values=H.prototype.m;
    function I(a,b){if(null!=b){var c=b.right;b.right=c.left;null!=c.left&&(c.left.parent=b);c.parent=b.parent;null==b.parent?a.d=c:b.parent.left==b?b.parent.left=c:b.parent.right=c;c.left=b;b.parent=c}}function J(a,b){if(null!=b){var c=b.left;b.left=c.right;null!=c.right&&(c.right.parent=b);c.parent=b.parent;null==b.parent?a.d=c:b.parent.right==b?b.parent.right=c:b.parent.left=c;c.right=b;b.parent=c}}
    function K(a){if(null===a)return null;if(null!==a.right)for(var b=a.right;null!==b.left;)b=b.left;else for(b=a.parent;null!==b&&a===b.right;)a=b,b=b.parent;return b}H.prototype.size=function(){return this.n};H.prototype.size=H.prototype.size;function L(a){this.a=[];a instanceof m&&this.e(a)}g(L,B);f("javascript.util.TreeSet",L);L.prototype.a=null;L.prototype.contains=function(a){for(var b=0,c=this.a.length;b<c;b++)if(0===this.a[b].compareTo(a))return!0;return!1};L.prototype.contains=L.prototype.contains;L.prototype.add=function(a){if(this.contains(a))return!1;for(var b=0,c=this.a.length;b<c;b++)if(1===this.a[b].compareTo(a))return this.a.splice(b,0,a),!0;this.a.push(a);return!0};L.prototype.add=L.prototype.add;
    L.prototype.e=function(a){for(a=a.f();a.c();)this.add(a.next());return!0};L.prototype.addAll=L.prototype.e;L.prototype.remove=function(){throw new r;};L.prototype.remove=L.prototype.remove;L.prototype.size=function(){return this.a.length};L.prototype.size=L.prototype.size;L.prototype.g=function(){return 0===this.a.length};L.prototype.isEmpty=L.prototype.g;L.prototype.h=function(){for(var a=[],b=0,c=this.a.length;b<c;b++)a.push(this.a[b]);return a};L.prototype.toArray=L.prototype.h;L.prototype.f=function(){return new N(this)};
    L.prototype.iterator=L.prototype.f;function N(a){this.l=a}f("$jscomp.scope.Iterator_$2",N);N.prototype.l=null;N.prototype.b=0;N.prototype.next=function(){if(this.b===this.l.size())throw new q;return this.l.a[this.b++]};N.prototype.next=N.prototype.next;N.prototype.c=function(){return this.b<this.l.size()?!0:!1};N.prototype.hasNext=N.prototype.c;N.prototype.remove=function(){throw new r;};N.prototype.remove=N.prototype.remove;}).call(this);
