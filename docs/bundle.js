!function (e) {
  var t = {};function n(r) {
    if (t[r]) return t[r].exports;var o = t[r] = { i: r, l: !1, exports: {} };return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: r });
  }, n.r = function (e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 1);
}([function (e, t, n) {
  var r;
  /*!
   * jQuery JavaScript Library v3.3.1
   * https://jquery.com/
   *
   * Includes Sizzle.js
   * https://sizzlejs.com/
   *
   * Copyright JS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2018-01-20T17:24Z
   */
  /*!
   * jQuery JavaScript Library v3.3.1
   * https://jquery.com/
   *
   * Includes Sizzle.js
   * https://sizzlejs.com/
   *
   * Copyright JS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2018-01-20T17:24Z
   */
  !function (t, n) {
    "use strict";
    "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");return n(e);
    } : n(t);
  }("undefined" != typeof window ? window : this, function (n, o) {
    "use strict";
    var i = [],
        s = n.document,
        a = Object.getPrototypeOf,
        u = i.slice,
        l = i.concat,
        c = i.push,
        f = i.indexOf,
        p = {},
        d = p.toString,
        h = p.hasOwnProperty,
        g = h.toString,
        v = g.call(Object),
        m = {},
        y = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
        x = function (e) {
      return null != e && e === e.window;
    },
        b = { type: !0, src: !0, noModule: !0 };function w(e, t, n) {
      var r,
          o = (t = t || s).createElement("script");if (o.text = e, n) for (r in b) n[r] && (o[r] = n[r]);t.head.appendChild(o).parentNode.removeChild(o);
    }function T(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? p[d.call(e)] || "object" : typeof e;
    }var C = function (e, t) {
      return new C.fn.init(e, t);
    },
        k = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function E(e) {
      var t = !!e && "length" in e && e.length,
          n = T(e);return !y(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }C.fn = C.prototype = { jquery: "3.3.1", constructor: C, length: 0, toArray: function () {
        return u.call(this);
      }, get: function (e) {
        return null == e ? u.call(this) : e < 0 ? this[e + this.length] : this[e];
      }, pushStack: function (e) {
        var t = C.merge(this.constructor(), e);return t.prevObject = this, t;
      }, each: function (e) {
        return C.each(this, e);
      }, map: function (e) {
        return this.pushStack(C.map(this, function (t, n) {
          return e.call(t, n, t);
        }));
      }, slice: function () {
        return this.pushStack(u.apply(this, arguments));
      }, first: function () {
        return this.eq(0);
      }, last: function () {
        return this.eq(-1);
      }, eq: function (e) {
        var t = this.length,
            n = +e + (e < 0 ? t : 0);return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      }, end: function () {
        return this.prevObject || this.constructor();
      }, push: c, sort: i.sort, splice: i.splice }, C.extend = C.fn.extend = function () {
      var e,
          t,
          n,
          r,
          o,
          i,
          s = arguments[0] || {},
          a = 1,
          u = arguments.length,
          l = !1;for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || y(s) || (s = {}), a === u && (s = this, a--); a < u; a++) if (null != (e = arguments[a])) for (t in e) n = s[t], s !== (r = e[t]) && (l && r && (C.isPlainObject(r) || (o = Array.isArray(r))) ? (o ? (o = !1, i = n && Array.isArray(n) ? n : []) : i = n && C.isPlainObject(n) ? n : {}, s[t] = C.extend(l, i, r)) : void 0 !== r && (s[t] = r));return s;
    }, C.extend({ expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
        throw new Error(e);
      }, noop: function () {}, isPlainObject: function (e) {
        var t, n;return !(!e || "[object Object]" !== d.call(e)) && (!(t = a(e)) || "function" == typeof (n = h.call(t, "constructor") && t.constructor) && g.call(n) === v);
      }, isEmptyObject: function (e) {
        var t;for (t in e) return !1;return !0;
      }, globalEval: function (e) {
        w(e);
      }, each: function (e, t) {
        var n,
            r = 0;if (E(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;return e;
      }, trim: function (e) {
        return null == e ? "" : (e + "").replace(k, "");
      }, makeArray: function (e, t) {
        var n = t || [];return null != e && (E(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n;
      }, inArray: function (e, t, n) {
        return null == t ? -1 : f.call(t, e, n);
      }, merge: function (e, t) {
        for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];return e.length = o, e;
      }, grep: function (e, t, n) {
        for (var r = [], o = 0, i = e.length, s = !n; o < i; o++) !t(e[o], o) !== s && r.push(e[o]);return r;
      }, map: function (e, t, n) {
        var r,
            o,
            i = 0,
            s = [];if (E(e)) for (r = e.length; i < r; i++) null != (o = t(e[i], i, n)) && s.push(o);else for (i in e) null != (o = t(e[i], i, n)) && s.push(o);return l.apply([], s);
      }, guid: 1, support: m }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = i[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
      p["[object " + t + "]"] = t.toLowerCase();
    });var S =
    /*!
     * Sizzle CSS Selector Engine v2.3.3
     * https://sizzlejs.com/
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2016-08-08
     */
    function (e) {
      var t,
          n,
          r,
          o,
          i,
          s,
          a,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v,
          m,
          y,
          x,
          b = "sizzle" + 1 * new Date(),
          w = e.document,
          T = 0,
          C = 0,
          k = se(),
          E = se(),
          S = se(),
          N = function (e, t) {
        return e === t && (f = !0), 0;
      },
          j = {}.hasOwnProperty,
          D = [],
          A = D.pop,
          q = D.push,
          L = D.push,
          H = D.slice,
          O = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;return -1;
      },
          P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          M = "[\\x20\\t\\r\\n\\f]",
          R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
          $ = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
          B = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)",
          I = new RegExp(M + "+", "g"),
          W = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
          F = new RegExp("^" + M + "*," + M + "*"),
          _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
          z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
          X = new RegExp(B),
          U = new RegExp("^" + R + "$"),
          V = { ID: new RegExp("^#(" + R + ")"), CLASS: new RegExp("^\\.(" + R + ")"), TAG: new RegExp("^(" + R + "|[*])"), ATTR: new RegExp("^" + $), PSEUDO: new RegExp("^" + B), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + P + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
          Y = /^(?:input|select|textarea|button)$/i,
          G = /^h\d$/i,
          Q = /^[^{]+\{\s*\[native \w/,
          J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          K = /[+~]/,
          Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
          ee = function (e, t, n) {
        var r = "0x" + t - 65536;return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
      },
          te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          ne = function (e, t) {
        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
      },
          re = function () {
        p();
      },
          oe = ye(function (e) {
        return !0 === e.disabled && ("form" in e || "label" in e);
      }, { dir: "parentNode", next: "legend" });try {
        L.apply(D = H.call(w.childNodes), w.childNodes), D[w.childNodes.length].nodeType;
      } catch (e) {
        L = { apply: D.length ? function (e, t) {
            q.apply(e, H.call(t));
          } : function (e, t) {
            for (var n = e.length, r = 0; e[n++] = t[r++];);e.length = n - 1;
          } };
      }function ie(e, t, r, o) {
        var i,
            a,
            l,
            c,
            f,
            h,
            m,
            y = t && t.ownerDocument,
            T = t ? t.nodeType : 9;if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;if (!o && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
          if (11 !== T && (f = J.exec(e))) if (i = f[1]) {
            if (9 === T) {
              if (!(l = t.getElementById(i))) return r;if (l.id === i) return r.push(l), r;
            } else if (y && (l = y.getElementById(i)) && x(t, l) && l.id === i) return r.push(l), r;
          } else {
            if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;if ((i = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(i)), r;
          }if (n.qsa && !S[e + " "] && (!v || !v.test(e))) {
            if (1 !== T) y = t, m = e;else if ("object" !== t.nodeName.toLowerCase()) {
              for ((c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), a = (h = s(e)).length; a--;) h[a] = "#" + c + " " + me(h[a]);m = h.join(","), y = K.test(e) && ge(t.parentNode) || t;
            }if (m) try {
              return L.apply(r, y.querySelectorAll(m)), r;
            } catch (e) {} finally {
              c === b && t.removeAttribute("id");
            }
          }
        }return u(e.replace(W, "$1"), t, r, o);
      }function se() {
        var e = [];return function t(n, o) {
          return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = o;
        };
      }function ae(e) {
        return e[b] = !0, e;
      }function ue(e) {
        var t = d.createElement("fieldset");try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), t = null;
        }
      }function le(e, t) {
        for (var n = e.split("|"), o = n.length; o--;) r.attrHandle[n[o]] = t;
      }function ce(e, t) {
        var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;if (r) return r;if (n) for (; n = n.nextSibling;) if (n === t) return -1;return e ? 1 : -1;
      }function fe(e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e;
        };
      }function pe(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
        };
      }function de(e) {
        return function (t) {
          return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && oe(t) === e : t.disabled === e : "label" in t && t.disabled === e;
        };
      }function he(e) {
        return ae(function (t) {
          return t = +t, ae(function (n, r) {
            for (var o, i = e([], n.length, t), s = i.length; s--;) n[o = i[s]] && (n[o] = !(r[o] = n[o]));
          });
        });
      }function ge(e) {
        return e && void 0 !== e.getElementsByTagName && e;
      }for (t in n = ie.support = {}, i = ie.isXML = function (e) {
        var t = e && (e.ownerDocument || e).documentElement;return !!t && "HTML" !== t.nodeName;
      }, p = ie.setDocument = function (e) {
        var t,
            o,
            s = e ? e.ownerDocument || e : w;return s !== d && 9 === s.nodeType && s.documentElement ? (h = (d = s).documentElement, g = !i(d), w !== d && (o = d.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", re, !1) : o.attachEvent && o.attachEvent("onunload", re)), n.attributes = ue(function (e) {
          return e.className = "i", !e.getAttribute("className");
        }), n.getElementsByTagName = ue(function (e) {
          return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
        }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function (e) {
          return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length;
        }), n.getById ? (r.filter.ID = function (e) {
          var t = e.replace(Z, ee);return function (e) {
            return e.getAttribute("id") === t;
          };
        }, r.find.ID = function (e, t) {
          if (void 0 !== t.getElementById && g) {
            var n = t.getElementById(e);return n ? [n] : [];
          }
        }) : (r.filter.ID = function (e) {
          var t = e.replace(Z, ee);return function (e) {
            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");return n && n.value === t;
          };
        }, r.find.ID = function (e, t) {
          if (void 0 !== t.getElementById && g) {
            var n,
                r,
                o,
                i = t.getElementById(e);if (i) {
              if ((n = i.getAttributeNode("id")) && n.value === e) return [i];for (o = t.getElementsByName(e), r = 0; i = o[r++];) if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
            }return [];
          }
        }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
          return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
        } : function (e, t) {
          var n,
              r = [],
              o = 0,
              i = t.getElementsByTagName(e);if ("*" === e) {
            for (; n = i[o++];) 1 === n.nodeType && r.push(n);return r;
          }return i;
        }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
          if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
        }, m = [], v = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function (e) {
          h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]");
        }), ue(function (e) {
          e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t = d.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
        })), (n.matchesSelector = Q.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) {
          n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), m.push("!=", B);
        }), v = v.length && new RegExp(v.join("|")), m = m.length && new RegExp(m.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function (e, t) {
          var n = 9 === e.nodeType ? e.documentElement : e,
              r = t && t.parentNode;return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
        } : function (e, t) {
          if (t) for (; t = t.parentNode;) if (t === e) return !0;return !1;
        }, N = t ? function (e, t) {
          if (e === t) return f = !0, 0;var r = !e.compareDocumentPosition - !t.compareDocumentPosition;return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1);
        } : function (e, t) {
          if (e === t) return f = !0, 0;var n,
              r = 0,
              o = e.parentNode,
              i = t.parentNode,
              s = [e],
              a = [t];if (!o || !i) return e === d ? -1 : t === d ? 1 : o ? -1 : i ? 1 : c ? O(c, e) - O(c, t) : 0;if (o === i) return ce(e, t);for (n = e; n = n.parentNode;) s.unshift(n);for (n = t; n = n.parentNode;) a.unshift(n);for (; s[r] === a[r];) r++;return r ? ce(s[r], a[r]) : s[r] === w ? -1 : a[r] === w ? 1 : 0;
        }, d) : d;
      }, ie.matches = function (e, t) {
        return ie(e, null, null, t);
      }, ie.matchesSelector = function (e, t) {
        if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!m || !m.test(t)) && (!v || !v.test(t))) try {
          var r = y.call(e, t);if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
        } catch (e) {}return ie(t, d, null, [e]).length > 0;
      }, ie.contains = function (e, t) {
        return (e.ownerDocument || e) !== d && p(e), x(e, t);
      }, ie.attr = function (e, t) {
        (e.ownerDocument || e) !== d && p(e);var o = r.attrHandle[t.toLowerCase()],
            i = o && j.call(r.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;return void 0 !== i ? i : n.attributes || !g ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
      }, ie.escape = function (e) {
        return (e + "").replace(te, ne);
      }, ie.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }, ie.uniqueSort = function (e) {
        var t,
            r = [],
            o = 0,
            i = 0;if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(N), f) {
          for (; t = e[i++];) t === e[i] && (o = r.push(i));for (; o--;) e.splice(r[o], 1);
        }return c = null, e;
      }, o = ie.getText = function (e) {
        var t,
            n = "",
            r = 0,
            i = e.nodeType;if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else for (; t = e[r++];) n += o(t);return n;
      }, (r = ie.selectors = { cacheLength: 50, createPseudo: ae, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (e) {
            return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
          }, CHILD: function (e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ie.error(e[0]), e;
          }, PSEUDO: function (e) {
            var t,
                n = !e[6] && e[2];return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
          } }, filter: { TAG: function (e) {
            var t = e.replace(Z, ee).toLowerCase();return "*" === e ? function () {
              return !0;
            } : function (e) {
              return e.nodeName && e.nodeName.toLowerCase() === t;
            };
          }, CLASS: function (e) {
            var t = k[e + " "];return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && k(e, function (e) {
              return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
            });
          }, ATTR: function (e, t, n) {
            return function (r) {
              var o = ie.attr(r, e);return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(I, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"));
            };
          }, CHILD: function (e, t, n, r, o) {
            var i = "nth" !== e.slice(0, 3),
                s = "last" !== e.slice(-4),
                a = "of-type" === t;return 1 === r && 0 === o ? function (e) {
              return !!e.parentNode;
            } : function (t, n, u) {
              var l,
                  c,
                  f,
                  p,
                  d,
                  h,
                  g = i !== s ? "nextSibling" : "previousSibling",
                  v = t.parentNode,
                  m = a && t.nodeName.toLowerCase(),
                  y = !u && !a,
                  x = !1;if (v) {
                if (i) {
                  for (; g;) {
                    for (p = t; p = p[g];) if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;h = g = "only" === e && !h && "nextSibling";
                  }return !0;
                }if (h = [s ? v.firstChild : v.lastChild], s && y) {
                  for (x = (d = (l = (c = (f = (p = v)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();) if (1 === p.nodeType && ++x && p === t) {
                    c[e] = [T, d, x];break;
                  }
                } else if (y && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x) for (; (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++x || (y && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p !== t)););return (x -= o) === r || x % r == 0 && x / r >= 0;
              }
            };
          }, PSEUDO: function (e, t) {
            var n,
                o = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);return o[b] ? o(t) : o.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function (e, n) {
              for (var r, i = o(e, t), s = i.length; s--;) e[r = O(e, i[s])] = !(n[r] = i[s]);
            }) : function (e) {
              return o(e, 0, n);
            }) : o;
          } }, pseudos: { not: ae(function (e) {
            var t = [],
                n = [],
                r = a(e.replace(W, "$1"));return r[b] ? ae(function (e, t, n, o) {
              for (var i, s = r(e, null, o, []), a = e.length; a--;) (i = s[a]) && (e[a] = !(t[a] = i));
            }) : function (e, o, i) {
              return t[0] = e, r(t, null, i, n), t[0] = null, !n.pop();
            };
          }), has: ae(function (e) {
            return function (t) {
              return ie(e, t).length > 0;
            };
          }), contains: ae(function (e) {
            return e = e.replace(Z, ee), function (t) {
              return (t.textContent || t.innerText || o(t)).indexOf(e) > -1;
            };
          }), lang: ae(function (e) {
            return U.test(e || "") || ie.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
              var n;do {
                if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
              } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
            };
          }), target: function (t) {
            var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
          }, root: function (e) {
            return e === h;
          }, focus: function (e) {
            return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
          }, enabled: de(!1), disabled: de(!0), checked: function (e) {
            var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
          }, selected: function (e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
          }, empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;return !0;
          }, parent: function (e) {
            return !r.pseudos.empty(e);
          }, header: function (e) {
            return G.test(e.nodeName);
          }, input: function (e) {
            return Y.test(e.nodeName);
          }, button: function (e) {
            var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
          }, text: function (e) {
            var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
          }, first: he(function () {
            return [0];
          }), last: he(function (e, t) {
            return [t - 1];
          }), eq: he(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }), even: he(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);return e;
          }), odd: he(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);return e;
          }), lt: he(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);return e;
          }), gt: he(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);return e;
          }) } }).pseudos.nth = r.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) r.pseudos[t] = fe(t);for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t);function ve() {}function me(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;return r;
      }function ye(e, t, n) {
        var r = t.dir,
            o = t.next,
            i = o || r,
            s = n && "parentNode" === i,
            a = C++;return t.first ? function (t, n, o) {
          for (; t = t[r];) if (1 === t.nodeType || s) return e(t, n, o);return !1;
        } : function (t, n, u) {
          var l,
              c,
              f,
              p = [T, a];if (u) {
            for (; t = t[r];) if ((1 === t.nodeType || s) && e(t, n, u)) return !0;
          } else for (; t = t[r];) if (1 === t.nodeType || s) if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[r] || t;else {
            if ((l = c[i]) && l[0] === T && l[1] === a) return p[2] = l[2];if (c[i] = p, p[2] = e(t, n, u)) return !0;
          }return !1;
        };
      }function xe(e) {
        return e.length > 1 ? function (t, n, r) {
          for (var o = e.length; o--;) if (!e[o](t, n, r)) return !1;return !0;
        } : e[0];
      }function be(e, t, n, r, o) {
        for (var i, s = [], a = 0, u = e.length, l = null != t; a < u; a++) (i = e[a]) && (n && !n(i, r, o) || (s.push(i), l && t.push(a)));return s;
      }function we(e, t, n, r, o, i) {
        return r && !r[b] && (r = we(r)), o && !o[b] && (o = we(o, i)), ae(function (i, s, a, u) {
          var l,
              c,
              f,
              p = [],
              d = [],
              h = s.length,
              g = i || function (e, t, n) {
            for (var r = 0, o = t.length; r < o; r++) ie(e, t[r], n);return n;
          }(t || "*", a.nodeType ? [a] : a, []),
              v = !e || !i && t ? g : be(g, p, e, a, u),
              m = n ? o || (i ? e : h || r) ? [] : s : v;if (n && n(v, m, a, u), r) for (l = be(m, d), r(l, [], a, u), c = l.length; c--;) (f = l[c]) && (m[d[c]] = !(v[d[c]] = f));if (i) {
            if (o || e) {
              if (o) {
                for (l = [], c = m.length; c--;) (f = m[c]) && l.push(v[c] = f);o(null, m = [], l, u);
              }for (c = m.length; c--;) (f = m[c]) && (l = o ? O(i, f) : p[c]) > -1 && (i[l] = !(s[l] = f));
            }
          } else m = be(m === s ? m.splice(h, m.length) : m), o ? o(null, s, m, u) : L.apply(s, m);
        });
      }function Te(e) {
        for (var t, n, o, i = e.length, s = r.relative[e[0].type], a = s || r.relative[" "], u = s ? 1 : 0, c = ye(function (e) {
          return e === t;
        }, a, !0), f = ye(function (e) {
          return O(t, e) > -1;
        }, a, !0), p = [function (e, n, r) {
          var o = !s && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));return t = null, o;
        }]; u < i; u++) if (n = r.relative[e[u].type]) p = [ye(xe(p), n)];else {
          if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
            for (o = ++u; o < i && !r.relative[e[o].type]; o++);return we(u > 1 && xe(p), u > 1 && me(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace(W, "$1"), n, u < o && Te(e.slice(u, o)), o < i && Te(e = e.slice(o)), o < i && me(e));
          }p.push(n);
        }return xe(p);
      }return ve.prototype = r.filters = r.pseudos, r.setFilters = new ve(), s = ie.tokenize = function (e, t) {
        var n,
            o,
            i,
            s,
            a,
            u,
            l,
            c = E[e + " "];if (c) return t ? 0 : c.slice(0);for (a = e, u = [], l = r.preFilter; a;) {
          for (s in n && !(o = F.exec(a)) || (o && (a = a.slice(o[0].length) || a), u.push(i = [])), n = !1, (o = _.exec(a)) && (n = o.shift(), i.push({ value: n, type: o[0].replace(W, " ") }), a = a.slice(n.length)), r.filter) !(o = V[s].exec(a)) || l[s] && !(o = l[s](o)) || (n = o.shift(), i.push({ value: n, type: s, matches: o }), a = a.slice(n.length));if (!n) break;
        }return t ? a.length : a ? ie.error(e) : E(e, u).slice(0);
      }, a = ie.compile = function (e, t) {
        var n,
            o = [],
            i = [],
            a = S[e + " "];if (!a) {
          for (t || (t = s(e)), n = t.length; n--;) (a = Te(t[n]))[b] ? o.push(a) : i.push(a);(a = S(e, function (e, t) {
            var n = t.length > 0,
                o = e.length > 0,
                i = function (i, s, a, u, c) {
              var f,
                  h,
                  v,
                  m = 0,
                  y = "0",
                  x = i && [],
                  b = [],
                  w = l,
                  C = i || o && r.find.TAG("*", c),
                  k = T += null == w ? 1 : Math.random() || .1,
                  E = C.length;for (c && (l = s === d || s || c); y !== E && null != (f = C[y]); y++) {
                if (o && f) {
                  for (h = 0, s || f.ownerDocument === d || (p(f), a = !g); v = e[h++];) if (v(f, s || d, a)) {
                    u.push(f);break;
                  }c && (T = k);
                }n && ((f = !v && f) && m--, i && x.push(f));
              }if (m += y, n && y !== m) {
                for (h = 0; v = t[h++];) v(x, b, s, a);if (i) {
                  if (m > 0) for (; y--;) x[y] || b[y] || (b[y] = A.call(u));b = be(b);
                }L.apply(u, b), c && !i && b.length > 0 && m + t.length > 1 && ie.uniqueSort(u);
              }return c && (T = k, l = w), x;
            };return n ? ae(i) : i;
          }(i, o))).selector = e;
        }return a;
      }, u = ie.select = function (e, t, n, o) {
        var i,
            u,
            l,
            c,
            f,
            p = "function" == typeof e && e,
            d = !o && s(e = p.selector || e);if (n = n || [], 1 === d.length) {
          if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
            if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;p && (t = t.parentNode), e = e.slice(u.shift().value.length);
          }for (i = V.needsContext.test(e) ? 0 : u.length; i-- && (l = u[i], !r.relative[c = l.type]);) if ((f = r.find[c]) && (o = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
            if (u.splice(i, 1), !(e = o.length && me(u))) return L.apply(n, o), n;break;
          }
        }return (p || a(e, d))(o, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n;
      }, n.sortStable = b.split("").sort(N).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e) {
        return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
      }), ue(function (e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
      }) || le("type|href|height|width", function (e, t, n) {
        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
      }), n.attributes && ue(function (e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
      }) || le("value", function (e, t, n) {
        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
      }), ue(function (e) {
        return null == e.getAttribute("disabled");
      }) || le(P, function (e, t, n) {
        var r;if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
      }), ie;
    }(n);C.find = S, C.expr = S.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = S.uniqueSort, C.text = S.getText, C.isXMLDoc = S.isXML, C.contains = S.contains, C.escapeSelector = S.escape;var N = function (e, t, n) {
      for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
        if (o && C(e).is(n)) break;r.push(e);
      }return r;
    },
        j = function (e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);return n;
    },
        D = C.expr.match.needsContext;function A(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }var q = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function L(e, t, n) {
      return y(t) ? C.grep(e, function (e, r) {
        return !!t.call(e, r, e) !== n;
      }) : t.nodeType ? C.grep(e, function (e) {
        return e === t !== n;
      }) : "string" != typeof t ? C.grep(e, function (e) {
        return f.call(t, e) > -1 !== n;
      }) : C.filter(t, e, n);
    }C.filter = function (e, t, n) {
      var r = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r, e) ? [r] : [] : C.find.matches(e, C.grep(t, function (e) {
        return 1 === e.nodeType;
      }));
    }, C.fn.extend({ find: function (e) {
        var t,
            n,
            r = this.length,
            o = this;if ("string" != typeof e) return this.pushStack(C(e).filter(function () {
          for (t = 0; t < r; t++) if (C.contains(o[t], this)) return !0;
        }));for (n = this.pushStack([]), t = 0; t < r; t++) C.find(e, o[t], n);return r > 1 ? C.uniqueSort(n) : n;
      }, filter: function (e) {
        return this.pushStack(L(this, e || [], !1));
      }, not: function (e) {
        return this.pushStack(L(this, e || [], !0));
      }, is: function (e) {
        return !!L(this, "string" == typeof e && D.test(e) ? C(e) : e || [], !1).length;
      } });var H,
        O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(C.fn.init = function (e, t, n) {
      var r, o;if (!e) return this;if (n = n || H, "string" == typeof e) {
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : O.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);if (r[1]) {
          if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : s, !0)), q.test(r[1]) && C.isPlainObject(t)) for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);return this;
        }return (o = s.getElementById(r[2])) && (this[0] = o, this.length = 1), this;
      }return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this);
    }).prototype = C.fn, H = C(s);var P = /^(?:parents|prev(?:Until|All))/,
        M = { children: !0, contents: !0, next: !0, prev: !0 };function R(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType;);return e;
    }C.fn.extend({ has: function (e) {
        var t = C(e, this),
            n = t.length;return this.filter(function () {
          for (var e = 0; e < n; e++) if (C.contains(this, t[e])) return !0;
        });
      }, closest: function (e, t) {
        var n,
            r = 0,
            o = this.length,
            i = [],
            s = "string" != typeof e && C(e);if (!D.test(e)) for (; r < o; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
          i.push(n);break;
        }return this.pushStack(i.length > 1 ? C.uniqueSort(i) : i);
      }, index: function (e) {
        return e ? "string" == typeof e ? f.call(C(e), this[0]) : f.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      }, add: function (e, t) {
        return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))));
      }, addBack: function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
      } }), C.each({ parent: function (e) {
        var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
      }, parents: function (e) {
        return N(e, "parentNode");
      }, parentsUntil: function (e, t, n) {
        return N(e, "parentNode", n);
      }, next: function (e) {
        return R(e, "nextSibling");
      }, prev: function (e) {
        return R(e, "previousSibling");
      }, nextAll: function (e) {
        return N(e, "nextSibling");
      }, prevAll: function (e) {
        return N(e, "previousSibling");
      }, nextUntil: function (e, t, n) {
        return N(e, "nextSibling", n);
      }, prevUntil: function (e, t, n) {
        return N(e, "previousSibling", n);
      }, siblings: function (e) {
        return j((e.parentNode || {}).firstChild, e);
      }, children: function (e) {
        return j(e.firstChild);
      }, contents: function (e) {
        return A(e, "iframe") ? e.contentDocument : (A(e, "template") && (e = e.content || e), C.merge([], e.childNodes));
      } }, function (e, t) {
      C.fn[e] = function (n, r) {
        var o = C.map(this, t, n);return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = C.filter(r, o)), this.length > 1 && (M[e] || C.uniqueSort(o), P.test(e) && o.reverse()), this.pushStack(o);
      };
    });var $ = /[^\x20\t\r\n\f]+/g;function B(e) {
      return e;
    }function I(e) {
      throw e;
    }function W(e, t, n, r) {
      var o;try {
        e && y(o = e.promise) ? o.call(e).done(t).fail(n) : e && y(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r));
      } catch (e) {
        n.apply(void 0, [e]);
      }
    }C.Callbacks = function (e) {
      e = "string" == typeof e ? function (e) {
        var t = {};return C.each(e.match($) || [], function (e, n) {
          t[n] = !0;
        }), t;
      }(e) : C.extend({}, e);var t,
          n,
          r,
          o,
          i = [],
          s = [],
          a = -1,
          u = function () {
        for (o = o || e.once, r = t = !0; s.length; a = -1) for (n = s.shift(); ++a < i.length;) !1 === i[a].apply(n[0], n[1]) && e.stopOnFalse && (a = i.length, n = !1);e.memory || (n = !1), t = !1, o && (i = n ? [] : "");
      },
          l = { add: function () {
          return i && (n && !t && (a = i.length - 1, s.push(n)), function t(n) {
            C.each(n, function (n, r) {
              y(r) ? e.unique && l.has(r) || i.push(r) : r && r.length && "string" !== T(r) && t(r);
            });
          }(arguments), n && !t && u()), this;
        }, remove: function () {
          return C.each(arguments, function (e, t) {
            for (var n; (n = C.inArray(t, i, n)) > -1;) i.splice(n, 1), n <= a && a--;
          }), this;
        }, has: function (e) {
          return e ? C.inArray(e, i) > -1 : i.length > 0;
        }, empty: function () {
          return i && (i = []), this;
        }, disable: function () {
          return o = s = [], i = n = "", this;
        }, disabled: function () {
          return !i;
        }, lock: function () {
          return o = s = [], n || t || (i = n = ""), this;
        }, locked: function () {
          return !!o;
        }, fireWith: function (e, n) {
          return o || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || u()), this;
        }, fire: function () {
          return l.fireWith(this, arguments), this;
        }, fired: function () {
          return !!r;
        } };return l;
    }, C.extend({ Deferred: function (e) {
        var t = [["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2], ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]],
            r = "pending",
            o = { state: function () {
            return r;
          }, always: function () {
            return i.done(arguments).fail(arguments), this;
          }, catch: function (e) {
            return o.then(null, e);
          }, pipe: function () {
            var e = arguments;return C.Deferred(function (n) {
              C.each(t, function (t, r) {
                var o = y(e[r[4]]) && e[r[4]];i[r[1]](function () {
                  var e = o && o.apply(this, arguments);e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, o ? [e] : arguments);
                });
              }), e = null;
            }).promise();
          }, then: function (e, r, o) {
            var i = 0;function s(e, t, r, o) {
              return function () {
                var a = this,
                    u = arguments,
                    l = function () {
                  var n, l;if (!(e < i)) {
                    if ((n = r.apply(a, u)) === t.promise()) throw new TypeError("Thenable self-resolution");l = n && ("object" == typeof n || "function" == typeof n) && n.then, y(l) ? o ? l.call(n, s(i, t, B, o), s(i, t, I, o)) : (i++, l.call(n, s(i, t, B, o), s(i, t, I, o), s(i, t, B, t.notifyWith))) : (r !== B && (a = void 0, u = [n]), (o || t.resolveWith)(a, u));
                  }
                },
                    c = o ? l : function () {
                  try {
                    l();
                  } catch (n) {
                    C.Deferred.exceptionHook && C.Deferred.exceptionHook(n, c.stackTrace), e + 1 >= i && (r !== I && (a = void 0, u = [n]), t.rejectWith(a, u));
                  }
                };e ? c() : (C.Deferred.getStackHook && (c.stackTrace = C.Deferred.getStackHook()), n.setTimeout(c));
              };
            }return C.Deferred(function (n) {
              t[0][3].add(s(0, n, y(o) ? o : B, n.notifyWith)), t[1][3].add(s(0, n, y(e) ? e : B)), t[2][3].add(s(0, n, y(r) ? r : I));
            }).promise();
          }, promise: function (e) {
            return null != e ? C.extend(e, o) : o;
          } },
            i = {};return C.each(t, function (e, n) {
          var s = n[2],
              a = n[5];o[n[1]] = s.add, a && s.add(function () {
            r = a;
          }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), s.add(n[3].fire), i[n[0]] = function () {
            return i[n[0] + "With"](this === i ? void 0 : this, arguments), this;
          }, i[n[0] + "With"] = s.fireWith;
        }), o.promise(i), e && e.call(i, i), i;
      }, when: function (e) {
        var t = arguments.length,
            n = t,
            r = Array(n),
            o = u.call(arguments),
            i = C.Deferred(),
            s = function (e) {
          return function (n) {
            r[e] = this, o[e] = arguments.length > 1 ? u.call(arguments) : n, --t || i.resolveWith(r, o);
          };
        };if (t <= 1 && (W(e, i.done(s(n)).resolve, i.reject, !t), "pending" === i.state() || y(o[n] && o[n].then))) return i.then();for (; n--;) W(o[n], s(n), i.reject);return i.promise();
      } });var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;C.Deferred.exceptionHook = function (e, t) {
      n.console && n.console.warn && e && F.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }, C.readyException = function (e) {
      n.setTimeout(function () {
        throw e;
      });
    };var _ = C.Deferred();function z() {
      s.removeEventListener("DOMContentLoaded", z), n.removeEventListener("load", z), C.ready();
    }C.fn.ready = function (e) {
      return _.then(e).catch(function (e) {
        C.readyException(e);
      }), this;
    }, C.extend({ isReady: !1, readyWait: 1, ready: function (e) {
        (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0, !0 !== e && --C.readyWait > 0 || _.resolveWith(s, [C]));
      } }), C.ready.then = _.then, "complete" === s.readyState || "loading" !== s.readyState && !s.documentElement.doScroll ? n.setTimeout(C.ready) : (s.addEventListener("DOMContentLoaded", z), n.addEventListener("load", z));var X = function (e, t, n, r, o, i, s) {
      var a = 0,
          u = e.length,
          l = null == n;if ("object" === T(n)) for (a in o = !0, n) X(e, t, a, n[a], !0, i, s);else if (void 0 !== r && (o = !0, y(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
        return l.call(C(e), n);
      })), t)) for (; a < u; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));return o ? e : l ? t.call(e) : u ? t(e[0], n) : i;
    },
        U = /^-ms-/,
        V = /-([a-z])/g;function Y(e, t) {
      return t.toUpperCase();
    }function G(e) {
      return e.replace(U, "ms-").replace(V, Y);
    }var Q = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };function J() {
      this.expando = C.expando + J.uid++;
    }J.uid = 1, J.prototype = { cache: function (e) {
        var t = e[this.expando];return t || (t = {}, Q(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
      }, set: function (e, t, n) {
        var r,
            o = this.cache(e);if ("string" == typeof t) o[G(t)] = n;else for (r in t) o[G(r)] = t[r];return o;
      }, get: function (e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
      }, access: function (e, t, n) {
        return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
      }, remove: function (e, t) {
        var n,
            r = e[this.expando];if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match($) || []).length;for (; n--;) delete r[t[n]];
          }(void 0 === t || C.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
        }
      }, hasData: function (e) {
        var t = e[this.expando];return void 0 !== t && !C.isEmptyObject(t);
      } };var K = new J(),
        Z = new J(),
        ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        te = /[A-Z]/g;function ne(e, t, n) {
      var r;if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(te, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
        try {
          n = function (e) {
            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e);
          }(n);
        } catch (e) {}Z.set(e, t, n);
      } else n = void 0;return n;
    }C.extend({ hasData: function (e) {
        return Z.hasData(e) || K.hasData(e);
      }, data: function (e, t, n) {
        return Z.access(e, t, n);
      }, removeData: function (e, t) {
        Z.remove(e, t);
      }, _data: function (e, t, n) {
        return K.access(e, t, n);
      }, _removeData: function (e, t) {
        K.remove(e, t);
      } }), C.fn.extend({ data: function (e, t) {
        var n,
            r,
            o,
            i = this[0],
            s = i && i.attributes;if (void 0 === e) {
          if (this.length && (o = Z.get(i), 1 === i.nodeType && !K.get(i, "hasDataAttrs"))) {
            for (n = s.length; n--;) s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(i, r, o[r]));K.set(i, "hasDataAttrs", !0);
          }return o;
        }return "object" == typeof e ? this.each(function () {
          Z.set(this, e);
        }) : X(this, function (t) {
          var n;if (i && void 0 === t) return void 0 !== (n = Z.get(i, e)) ? n : void 0 !== (n = ne(i, e)) ? n : void 0;this.each(function () {
            Z.set(this, e, t);
          });
        }, null, t, arguments.length > 1, null, !0);
      }, removeData: function (e) {
        return this.each(function () {
          Z.remove(this, e);
        });
      } }), C.extend({ queue: function (e, t, n) {
        var r;if (e) return t = (t || "fx") + "queue", r = K.get(e, t), n && (!r || Array.isArray(n) ? r = K.access(e, t, C.makeArray(n)) : r.push(n)), r || [];
      }, dequeue: function (e, t) {
        t = t || "fx";var n = C.queue(e, t),
            r = n.length,
            o = n.shift(),
            i = C._queueHooks(e, t);"inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, function () {
          C.dequeue(e, t);
        }, i)), !r && i && i.empty.fire();
      }, _queueHooks: function (e, t) {
        var n = t + "queueHooks";return K.get(e, n) || K.access(e, n, { empty: C.Callbacks("once memory").add(function () {
            K.remove(e, [t + "queue", n]);
          }) });
      } }), C.fn.extend({ queue: function (e, t) {
        var n = 2;return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? C.queue(this[0], e) : void 0 === t ? this : this.each(function () {
          var n = C.queue(this, e, t);C._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && C.dequeue(this, e);
        });
      }, dequeue: function (e) {
        return this.each(function () {
          C.dequeue(this, e);
        });
      }, clearQueue: function (e) {
        return this.queue(e || "fx", []);
      }, promise: function (e, t) {
        var n,
            r = 1,
            o = C.Deferred(),
            i = this,
            s = this.length,
            a = function () {
          --r || o.resolveWith(i, [i]);
        };for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) (n = K.get(i[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));return a(), o.promise(t);
      } });var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        oe = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
        ie = ["Top", "Right", "Bottom", "Left"],
        se = function (e, t) {
      return "none" === (e = t || e).style.display || "" === e.style.display && C.contains(e.ownerDocument, e) && "none" === C.css(e, "display");
    },
        ae = function (e, t, n, r) {
      var o,
          i,
          s = {};for (i in t) s[i] = e.style[i], e.style[i] = t[i];for (i in o = n.apply(e, r || []), t) e.style[i] = s[i];return o;
    };function ue(e, t, n, r) {
      var o,
          i,
          s = 20,
          a = r ? function () {
        return r.cur();
      } : function () {
        return C.css(e, t, "");
      },
          u = a(),
          l = n && n[3] || (C.cssNumber[t] ? "" : "px"),
          c = (C.cssNumber[t] || "px" !== l && +u) && oe.exec(C.css(e, t));if (c && c[3] !== l) {
        for (u /= 2, l = l || c[3], c = +u || 1; s--;) C.style(e, t, c + l), (1 - i) * (1 - (i = a() / u || .5)) <= 0 && (s = 0), c /= i;c *= 2, C.style(e, t, c + l), n = n || [];
      }return n && (c = +c || +u || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = o)), o;
    }var le = {};function ce(e) {
      var t,
          n = e.ownerDocument,
          r = e.nodeName,
          o = le[r];return o || (t = n.body.appendChild(n.createElement(r)), o = C.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), le[r] = o, o);
    }function fe(e, t) {
      for (var n, r, o = [], i = 0, s = e.length; i < s; i++) (r = e[i]).style && (n = r.style.display, t ? ("none" === n && (o[i] = K.get(r, "display") || null, o[i] || (r.style.display = "")), "" === r.style.display && se(r) && (o[i] = ce(r))) : "none" !== n && (o[i] = "none", K.set(r, "display", n)));for (i = 0; i < s; i++) null != o[i] && (e[i].style.display = o[i]);return e;
    }C.fn.extend({ show: function () {
        return fe(this, !0);
      }, hide: function () {
        return fe(this);
      }, toggle: function (e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
          se(this) ? C(this).show() : C(this).hide();
        });
      } });var pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };function ve(e, t) {
      var n;return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? C.merge([e], n) : n;
    }function me(e, t) {
      for (var n = 0, r = e.length; n < r; n++) K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"));
    }ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;var ye,
        xe,
        be = /<|&#?\w+;/;function we(e, t, n, r, o) {
      for (var i, s, a, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((i = e[d]) || 0 === i) if ("object" === T(i)) C.merge(p, i.nodeType ? [i] : i);else if (be.test(i)) {
        for (s = s || f.appendChild(t.createElement("div")), a = (de.exec(i) || ["", ""])[1].toLowerCase(), u = ge[a] || ge._default, s.innerHTML = u[1] + C.htmlPrefilter(i) + u[2], c = u[0]; c--;) s = s.lastChild;C.merge(p, s.childNodes), (s = f.firstChild).textContent = "";
      } else p.push(t.createTextNode(i));for (f.textContent = "", d = 0; i = p[d++];) if (r && C.inArray(i, r) > -1) o && o.push(i);else if (l = C.contains(i.ownerDocument, i), s = ve(f.appendChild(i), "script"), l && me(s), n) for (c = 0; i = s[c++];) he.test(i.type || "") && n.push(i);return f;
    }ye = s.createDocumentFragment().appendChild(s.createElement("div")), (xe = s.createElement("input")).setAttribute("type", "radio"), xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), ye.appendChild(xe), m.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked, ye.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue;var Te = s.documentElement,
        Ce = /^key/,
        ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ee = /^([^.]*)(?:\.(.+)|)/;function Se() {
      return !0;
    }function Ne() {
      return !1;
    }function je() {
      try {
        return s.activeElement;
      } catch (e) {}
    }function De(e, t, n, r, o, i) {
      var s, a;if ("object" == typeof t) {
        for (a in "string" != typeof n && (r = r || n, n = void 0), t) De(e, a, n, r, t[a], i);return e;
      }if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = Ne;else if (!o) return e;return 1 === i && (s = o, (o = function (e) {
        return C().off(e), s.apply(this, arguments);
      }).guid = s.guid || (s.guid = C.guid++)), e.each(function () {
        C.event.add(this, t, o, r, n);
      });
    }C.event = { global: {}, add: function (e, t, n, r, o) {
        var i,
            s,
            a,
            u,
            l,
            c,
            f,
            p,
            d,
            h,
            g,
            v = K.get(e);if (v) for (n.handler && (n = (i = n).handler, o = i.selector), o && C.find.matchesSelector(Te, o), n.guid || (n.guid = C.guid++), (u = v.events) || (u = v.events = {}), (s = v.handle) || (s = v.handle = function (t) {
          return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0;
        }), l = (t = (t || "").match($) || [""]).length; l--;) d = g = (a = Ee.exec(t[l]) || [])[1], h = (a[2] || "").split(".").sort(), d && (f = C.event.special[d] || {}, d = (o ? f.delegateType : f.bindType) || d, f = C.event.special[d] || {}, c = C.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: o, needsContext: o && C.expr.match.needsContext.test(o), namespace: h.join(".") }, i), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, s) || e.addEventListener && e.addEventListener(d, s)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, c) : p.push(c), C.event.global[d] = !0);
      }, remove: function (e, t, n, r, o) {
        var i,
            s,
            a,
            u,
            l,
            c,
            f,
            p,
            d,
            h,
            g,
            v = K.hasData(e) && K.get(e);if (v && (u = v.events)) {
          for (l = (t = (t || "").match($) || [""]).length; l--;) if (d = g = (a = Ee.exec(t[l]) || [])[1], h = (a[2] || "").split(".").sort(), d) {
            for (f = C.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = i = p.length; i--;) c = p[i], !o && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(i, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));s && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || C.removeEvent(e, d, v.handle), delete u[d]);
          } else for (d in u) C.event.remove(e, d + t[l], n, r, !0);C.isEmptyObject(u) && K.remove(e, "handle events");
        }
      }, dispatch: function (e) {
        var t,
            n,
            r,
            o,
            i,
            s,
            a = C.event.fix(e),
            u = new Array(arguments.length),
            l = (K.get(this, "events") || {})[a.type] || [],
            c = C.event.special[a.type] || {};for (u[0] = a, t = 1; t < arguments.length; t++) u[t] = arguments[t];if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
          for (s = C.event.handlers.call(this, a, l), t = 0; (o = s[t++]) && !a.isPropagationStopped();) for (a.currentTarget = o.elem, n = 0; (i = o.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(i.namespace) || (a.handleObj = i, a.data = i.data, void 0 !== (r = ((C.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u)) && !1 === (a.result = r) && (a.preventDefault(), a.stopPropagation()));return c.postDispatch && c.postDispatch.call(this, a), a.result;
        }
      }, handlers: function (e, t) {
        var n,
            r,
            o,
            i,
            s,
            a = [],
            u = t.delegateCount,
            l = e.target;if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (i = [], s = {}, n = 0; n < u; n++) void 0 === s[o = (r = t[n]).selector + " "] && (s[o] = r.needsContext ? C(o, this).index(l) > -1 : C.find(o, this, null, [l]).length), s[o] && i.push(r);i.length && a.push({ elem: l, handlers: i });
        }return l = this, u < t.length && a.push({ elem: l, handlers: t.slice(u) }), a;
      }, addProp: function (e, t) {
        Object.defineProperty(C.Event.prototype, e, { enumerable: !0, configurable: !0, get: y(t) ? function () {
            if (this.originalEvent) return t(this.originalEvent);
          } : function () {
            if (this.originalEvent) return this.originalEvent[e];
          }, set: function (t) {
            Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
          } });
      }, fix: function (e) {
        return e[C.expando] ? e : new C.Event(e);
      }, special: { load: { noBubble: !0 }, focus: { trigger: function () {
            if (this !== je() && this.focus) return this.focus(), !1;
          }, delegateType: "focusin" }, blur: { trigger: function () {
            if (this === je() && this.blur) return this.blur(), !1;
          }, delegateType: "focusout" }, click: { trigger: function () {
            if ("checkbox" === this.type && this.click && A(this, "input")) return this.click(), !1;
          }, _default: function (e) {
            return A(e.target, "a");
          } }, beforeunload: { postDispatch: function (e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
          } } } }, C.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }, C.Event = function (e, t) {
      if (!(this instanceof C.Event)) return new C.Event(e, t);e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Se : Ne, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0;
    }, C.Event.prototype = { constructor: C.Event, isDefaultPrevented: Ne, isPropagationStopped: Ne, isImmediatePropagationStopped: Ne, isSimulated: !1, preventDefault: function () {
        var e = this.originalEvent;this.isDefaultPrevented = Se, e && !this.isSimulated && e.preventDefault();
      }, stopPropagation: function () {
        var e = this.originalEvent;this.isPropagationStopped = Se, e && !this.isSimulated && e.stopPropagation();
      }, stopImmediatePropagation: function () {
        var e = this.originalEvent;this.isImmediatePropagationStopped = Se, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
      } }, C.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function (e) {
        var t = e.button;return null == e.which && Ce.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
      } }, C.event.addProp), C.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
      C.event.special[e] = { delegateType: t, bindType: t, handle: function (e) {
          var n,
              r = e.relatedTarget,
              o = e.handleObj;return r && (r === this || C.contains(this, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
        } };
    }), C.fn.extend({ on: function (e, t, n, r) {
        return De(this, e, t, n, r);
      }, one: function (e, t, n, r) {
        return De(this, e, t, n, r, 1);
      }, off: function (e, t, n) {
        var r, o;if (e && e.preventDefault && e.handleObj) return r = e.handleObj, C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;if ("object" == typeof e) {
          for (o in e) this.off(o, t, e[o]);return this;
        }return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ne), this.each(function () {
          C.event.remove(this, e, n, t);
        });
      } });var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        qe = /<script|<style|<link/i,
        Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
        He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e, t) {
      return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e;
    }function Pe(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }function Me(e) {
      return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
    }function Re(e, t) {
      var n, r, o, i, s, a, u, l;if (1 === t.nodeType) {
        if (K.hasData(e) && (i = K.access(e), s = K.set(t, i), l = i.events)) for (o in delete s.handle, s.events = {}, l) for (n = 0, r = l[o].length; n < r; n++) C.event.add(t, o, l[o][n]);Z.hasData(e) && (a = Z.access(e), u = C.extend({}, a), Z.set(t, u));
      }
    }function $e(e, t, n, r) {
      t = l.apply([], t);var o,
          i,
          s,
          a,
          u,
          c,
          f = 0,
          p = e.length,
          d = p - 1,
          h = t[0],
          g = y(h);if (g || p > 1 && "string" == typeof h && !m.checkClone && Le.test(h)) return e.each(function (o) {
        var i = e.eq(o);g && (t[0] = h.call(this, o, i.html())), $e(i, t, n, r);
      });if (p && (i = (o = we(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === o.childNodes.length && (o = i), i || r)) {
        for (a = (s = C.map(ve(o, "script"), Pe)).length; f < p; f++) u = o, f !== d && (u = C.clone(u, !0, !0), a && C.merge(s, ve(u, "script"))), n.call(e[f], u, f);if (a) for (c = s[s.length - 1].ownerDocument, C.map(s, Me), f = 0; f < a; f++) u = s[f], he.test(u.type || "") && !K.access(u, "globalEval") && C.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? C._evalUrl && C._evalUrl(u.src) : w(u.textContent.replace(He, ""), c, u));
      }return e;
    }function Be(e, t, n) {
      for (var r, o = t ? C.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || C.cleanData(ve(r)), r.parentNode && (n && C.contains(r.ownerDocument, r) && me(ve(r, "script")), r.parentNode.removeChild(r));return e;
    }C.extend({ htmlPrefilter: function (e) {
        return e.replace(Ae, "<$1></$2>");
      }, clone: function (e, t, n) {
        var r,
            o,
            i,
            s,
            a,
            u,
            l,
            c = e.cloneNode(!0),
            f = C.contains(e.ownerDocument, e);if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e))) for (s = ve(c), r = 0, o = (i = ve(e)).length; r < o; r++) a = i[r], u = s[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(a.type) ? u.checked = a.checked : "input" !== l && "textarea" !== l || (u.defaultValue = a.defaultValue);if (t) if (n) for (i = i || ve(e), s = s || ve(c), r = 0, o = i.length; r < o; r++) Re(i[r], s[r]);else Re(e, c);return (s = ve(c, "script")).length > 0 && me(s, !f && ve(e, "script")), c;
      }, cleanData: function (e) {
        for (var t, n, r, o = C.event.special, i = 0; void 0 !== (n = e[i]); i++) if (Q(n)) {
          if (t = n[K.expando]) {
            if (t.events) for (r in t.events) o[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);n[K.expando] = void 0;
          }n[Z.expando] && (n[Z.expando] = void 0);
        }
      } }), C.fn.extend({ detach: function (e) {
        return Be(this, e, !0);
      }, remove: function (e) {
        return Be(this, e);
      }, text: function (e) {
        return X(this, function (e) {
          return void 0 === e ? C.text(this) : this.empty().each(function () {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
          });
        }, null, e, arguments.length);
      }, append: function () {
        return $e(this, arguments, function (e) {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e);
        });
      }, prepend: function () {
        return $e(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = Oe(this, e);t.insertBefore(e, t.firstChild);
          }
        });
      }, before: function () {
        return $e(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      }, after: function () {
        return $e(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      }, empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(ve(e, !1)), e.textContent = "");return this;
      }, clone: function (e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map(function () {
          return C.clone(this, e, t);
        });
      }, html: function (e) {
        return X(this, function (e) {
          var t = this[0] || {},
              n = 0,
              r = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !qe.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = C.htmlPrefilter(e);try {
              for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(ve(t, !1)), t.innerHTML = e);t = 0;
            } catch (e) {}
          }t && this.empty().append(e);
        }, null, e, arguments.length);
      }, replaceWith: function () {
        var e = [];return $e(this, arguments, function (t) {
          var n = this.parentNode;C.inArray(this, e) < 0 && (C.cleanData(ve(this)), n && n.replaceChild(t, this));
        }, e);
      } }), C.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
      C.fn[e] = function (e) {
        for (var n, r = [], o = C(e), i = o.length - 1, s = 0; s <= i; s++) n = s === i ? this : this.clone(!0), C(o[s])[t](n), c.apply(r, n.get());return this.pushStack(r);
      };
    });var Ie = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
        We = function (e) {
      var t = e.ownerDocument.defaultView;return t && t.opener || (t = n), t.getComputedStyle(e);
    },
        Fe = new RegExp(ie.join("|"), "i");function _e(e, t, n) {
      var r,
          o,
          i,
          s,
          a = e.style;return (n = n || We(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || C.contains(e.ownerDocument, e) || (s = C.style(e, t)), !m.pixelBoxStyles() && Ie.test(s) && Fe.test(t) && (r = a.width, o = a.minWidth, i = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = o, a.maxWidth = i)), void 0 !== s ? s + "" : s;
    }function ze(e, t) {
      return { get: function () {
          if (!e()) return (this.get = t).apply(this, arguments);delete this.get;
        } };
    }!function () {
      function e() {
        if (c) {
          l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Te.appendChild(l).appendChild(c);var e = n.getComputedStyle(c);r = "1%" !== e.top, u = 12 === t(e.marginLeft), c.style.right = "60%", a = 36 === t(e.right), o = 36 === t(e.width), c.style.position = "absolute", i = 36 === c.offsetWidth || "absolute", Te.removeChild(l), c = null;
        }
      }function t(e) {
        return Math.round(parseFloat(e));
      }var r,
          o,
          i,
          a,
          u,
          l = s.createElement("div"),
          c = s.createElement("div");c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === c.style.backgroundClip, C.extend(m, { boxSizingReliable: function () {
          return e(), o;
        }, pixelBoxStyles: function () {
          return e(), a;
        }, pixelPosition: function () {
          return e(), r;
        }, reliableMarginLeft: function () {
          return e(), u;
        }, scrollboxSize: function () {
          return e(), i;
        } }));
    }();var Xe = /^(none|table(?!-c[ea]).+)/,
        Ue = /^--/,
        Ve = { position: "absolute", visibility: "hidden", display: "block" },
        Ye = { letterSpacing: "0", fontWeight: "400" },
        Ge = ["Webkit", "Moz", "ms"],
        Qe = s.createElement("div").style;function Je(e) {
      var t = C.cssProps[e];return t || (t = C.cssProps[e] = function (e) {
        if (e in Qe) return e;for (var t = e[0].toUpperCase() + e.slice(1), n = Ge.length; n--;) if ((e = Ge[n] + t) in Qe) return e;
      }(e) || e), t;
    }function Ke(e, t, n) {
      var r = oe.exec(t);return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }function Ze(e, t, n, r, o, i) {
      var s = "width" === t ? 1 : 0,
          a = 0,
          u = 0;if (n === (r ? "border" : "content")) return 0;for (; s < 4; s += 2) "margin" === n && (u += C.css(e, n + ie[s], !0, o)), r ? ("content" === n && (u -= C.css(e, "padding" + ie[s], !0, o)), "margin" !== n && (u -= C.css(e, "border" + ie[s] + "Width", !0, o))) : (u += C.css(e, "padding" + ie[s], !0, o), "padding" !== n ? u += C.css(e, "border" + ie[s] + "Width", !0, o) : a += C.css(e, "border" + ie[s] + "Width", !0, o));return !r && i >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - u - a - .5))), u;
    }function et(e, t, n) {
      var r = We(e),
          o = _e(e, t, r),
          i = "border-box" === C.css(e, "boxSizing", !1, r),
          s = i;if (Ie.test(o)) {
        if (!n) return o;o = "auto";
      }return s = s && (m.boxSizingReliable() || o === e.style[t]), ("auto" === o || !parseFloat(o) && "inline" === C.css(e, "display", !1, r)) && (o = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (o = parseFloat(o) || 0) + Ze(e, t, n || (i ? "border" : "content"), s, r, o) + "px";
    }function tt(e, t, n, r, o) {
      return new tt.prototype.init(e, t, n, r, o);
    }C.extend({ cssHooks: { opacity: { get: function (e, t) {
            if (t) {
              var n = _e(e, "opacity");return "" === n ? "1" : n;
            }
          } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function (e, t, n, r) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var o,
              i,
              s,
              a = G(t),
              u = Ue.test(t),
              l = e.style;if (u || (t = Je(a)), s = C.cssHooks[t] || C.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, r)) ? o : l[t];"string" === (i = typeof n) && (o = oe.exec(n)) && o[1] && (n = ue(e, t, o), i = "number"), null != n && n == n && ("number" === i && (n += o && o[3] || (C.cssNumber[a] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
        }
      }, css: function (e, t, n, r) {
        var o,
            i,
            s,
            a = G(t);return Ue.test(t) || (t = Je(a)), (s = C.cssHooks[t] || C.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = _e(e, t, r)), "normal" === o && t in Ye && (o = Ye[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o;
      } }), C.each(["height", "width"], function (e, t) {
      C.cssHooks[t] = { get: function (e, n, r) {
          if (n) return !Xe.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : ae(e, Ve, function () {
            return et(e, t, r);
          });
        }, set: function (e, n, r) {
          var o,
              i = We(e),
              s = "border-box" === C.css(e, "boxSizing", !1, i),
              a = r && Ze(e, t, r, s, i);return s && m.scrollboxSize() === i.position && (a -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - Ze(e, t, "border", !1, i) - .5)), a && (o = oe.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = C.css(e, t)), Ke(0, n, a);
        } };
    }), C.cssHooks.marginLeft = ze(m.reliableMarginLeft, function (e, t) {
      if (t) return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ae(e, { marginLeft: 0 }, function () {
        return e.getBoundingClientRect().left;
      })) + "px";
    }), C.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      C.cssHooks[e + t] = { expand: function (n) {
          for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) o[e + ie[r] + t] = i[r] || i[r - 2] || i[0];return o;
        } }, "margin" !== e && (C.cssHooks[e + t].set = Ke);
    }), C.fn.extend({ css: function (e, t) {
        return X(this, function (e, t, n) {
          var r,
              o,
              i = {},
              s = 0;if (Array.isArray(t)) {
            for (r = We(e), o = t.length; s < o; s++) i[t[s]] = C.css(e, t[s], !1, r);return i;
          }return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
        }, e, t, arguments.length > 1);
      } }), C.Tween = tt, tt.prototype = { constructor: tt, init: function (e, t, n, r, o, i) {
        this.elem = e, this.prop = n, this.easing = o || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (C.cssNumber[n] ? "" : "px");
      }, cur: function () {
        var e = tt.propHooks[this.prop];return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
      }, run: function (e) {
        var t,
            n = tt.propHooks[this.prop];return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this;
      } }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = { _default: { get: function (e) {
          var t;return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
        }, set: function (e) {
          C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[C.cssProps[e.prop]] && !C.cssHooks[e.prop] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit);
        } } }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = { set: function (e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      } }, C.easing = { linear: function (e) {
        return e;
      }, swing: function (e) {
        return .5 - Math.cos(e * Math.PI) / 2;
      }, _default: "swing" }, C.fx = tt.prototype.init, C.fx.step = {};var nt,
        rt,
        ot = /^(?:toggle|show|hide)$/,
        it = /queueHooks$/;function st() {
      rt && (!1 === s.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(st) : n.setTimeout(st, C.fx.interval), C.fx.tick());
    }function at() {
      return n.setTimeout(function () {
        nt = void 0;
      }), nt = Date.now();
    }function ut(e, t) {
      var n,
          r = 0,
          o = { height: e };for (t = t ? 1 : 0; r < 4; r += 2 - t) o["margin" + (n = ie[r])] = o["padding" + n] = e;return t && (o.opacity = o.width = e), o;
    }function lt(e, t, n) {
      for (var r, o = (ct.tweeners[t] || []).concat(ct.tweeners["*"]), i = 0, s = o.length; i < s; i++) if (r = o[i].call(n, t, e)) return r;
    }function ct(e, t, n) {
      var r,
          o,
          i = 0,
          s = ct.prefilters.length,
          a = C.Deferred().always(function () {
        delete u.elem;
      }),
          u = function () {
        if (o) return !1;for (var t = nt || at(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), i = 0, s = l.tweens.length; i < s; i++) l.tweens[i].run(r);return a.notifyWith(e, [l, r, n]), r < 1 && s ? n : (s || a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l]), !1);
      },
          l = a.promise({ elem: e, props: C.extend({}, t), opts: C.extend(!0, { specialEasing: {}, easing: C.easing._default }, n), originalProperties: t, originalOptions: n, startTime: nt || at(), duration: n.duration, tweens: [], createTween: function (t, n) {
          var r = C.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);return l.tweens.push(r), r;
        }, stop: function (t) {
          var n = 0,
              r = t ? l.tweens.length : 0;if (o) return this;for (o = !0; n < r; n++) l.tweens[n].run(1);return t ? (a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l, t])) : a.rejectWith(e, [l, t]), this;
        } }),
          c = l.props;for (!function (e, t) {
        var n, r, o, i, s;for (n in e) if (o = t[r = G(n)], i = e[n], Array.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), (s = C.cssHooks[r]) && ("expand" in s)) for (n in i = s.expand(i), delete e[r], i) (n in e) || (e[n] = i[n], t[n] = o);else t[r] = o;
      }(c, l.opts.specialEasing); i < s; i++) if (r = ct.prefilters[i].call(l, e, c, l.opts)) return y(r.stop) && (C._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;return C.map(c, lt, l), y(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), C.fx.timer(C.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l;
    }C.Animation = C.extend(ct, { tweeners: { "*": [function (e, t) {
          var n = this.createTween(e, t);return ue(n.elem, e, oe.exec(t), n), n;
        }] }, tweener: function (e, t) {
        y(e) ? (t = e, e = ["*"]) : e = e.match($);for (var n, r = 0, o = e.length; r < o; r++) n = e[r], ct.tweeners[n] = ct.tweeners[n] || [], ct.tweeners[n].unshift(t);
      }, prefilters: [function (e, t, n) {
        var r,
            o,
            i,
            s,
            a,
            u,
            l,
            c,
            f = "width" in t || "height" in t,
            p = this,
            d = {},
            h = e.style,
            g = e.nodeType && se(e),
            v = K.get(e, "fxshow");for (r in n.queue || (null == (s = C._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
          s.unqueued || a();
        }), s.unqueued++, p.always(function () {
          p.always(function () {
            s.unqueued--, C.queue(e, "fx").length || s.empty.fire();
          });
        })), t) if (o = t[r], ot.test(o)) {
          if (delete t[r], i = i || "toggle" === o, o === (g ? "hide" : "show")) {
            if ("show" !== o || !v || void 0 === v[r]) continue;g = !0;
          }d[r] = v && v[r] || C.style(e, r);
        }if ((u = !C.isEmptyObject(t)) || !C.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = K.get(e, "display")), "none" === (c = C.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = C.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === C.css(e, "float") && (u || (p.done(function () {
          h.display = l;
        }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
          h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
        })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = K.access(e, "fxshow", { display: l }), i && (v.hidden = !g), g && fe([e], !0), p.done(function () {
          for (r in g || fe([e]), K.remove(e, "fxshow"), d) C.style(e, r, d[r]);
        })), u = lt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
      }], prefilter: function (e, t) {
        t ? ct.prefilters.unshift(e) : ct.prefilters.push(e);
      } }), C.speed = function (e, t, n) {
      var r = e && "object" == typeof e ? C.extend({}, e) : { complete: n || !n && t || y(e) && e, duration: e, easing: n && t || t && !y(t) && t };return C.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in C.fx.speeds ? r.duration = C.fx.speeds[r.duration] : r.duration = C.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
        y(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue);
      }, r;
    }, C.fn.extend({ fadeTo: function (e, t, n, r) {
        return this.filter(se).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
      }, animate: function (e, t, n, r) {
        var o = C.isEmptyObject(e),
            i = C.speed(t, n, r),
            s = function () {
          var t = ct(this, C.extend({}, e), i);(o || K.get(this, "finish")) && t.stop(!0);
        };return s.finish = s, o || !1 === i.queue ? this.each(s) : this.queue(i.queue, s);
      }, stop: function (e, t, n) {
        var r = function (e) {
          var t = e.stop;delete e.stop, t(n);
        };return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
          var t = !0,
              o = null != e && e + "queueHooks",
              i = C.timers,
              s = K.get(this);if (o) s[o] && s[o].stop && r(s[o]);else for (o in s) s[o] && s[o].stop && it.test(o) && r(s[o]);for (o = i.length; o--;) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), t = !1, i.splice(o, 1));!t && n || C.dequeue(this, e);
        });
      }, finish: function (e) {
        return !1 !== e && (e = e || "fx"), this.each(function () {
          var t,
              n = K.get(this),
              r = n[e + "queue"],
              o = n[e + "queueHooks"],
              i = C.timers,
              s = r ? r.length : 0;for (n.finish = !0, C.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);delete n.finish;
        });
      } }), C.each(["toggle", "show", "hide"], function (e, t) {
      var n = C.fn[t];C.fn[t] = function (e, r, o) {
        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, o);
      };
    }), C.each({ slideDown: ut("show"), slideUp: ut("hide"), slideToggle: ut("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
      C.fn[e] = function (e, n, r) {
        return this.animate(t, e, n, r);
      };
    }), C.timers = [], C.fx.tick = function () {
      var e,
          t = 0,
          n = C.timers;for (nt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);n.length || C.fx.stop(), nt = void 0;
    }, C.fx.timer = function (e) {
      C.timers.push(e), C.fx.start();
    }, C.fx.interval = 13, C.fx.start = function () {
      rt || (rt = !0, st());
    }, C.fx.stop = function () {
      rt = null;
    }, C.fx.speeds = { slow: 600, fast: 200, _default: 400 }, C.fn.delay = function (e, t) {
      return e = C.fx && C.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (t, r) {
        var o = n.setTimeout(t, e);r.stop = function () {
          n.clearTimeout(o);
        };
      });
    }, function () {
      var e = s.createElement("input"),
          t = s.createElement("select").appendChild(s.createElement("option"));e.type = "checkbox", m.checkOn = "" !== e.value, m.optSelected = t.selected, (e = s.createElement("input")).value = "t", e.type = "radio", m.radioValue = "t" === e.value;
    }();var ft,
        pt = C.expr.attrHandle;C.fn.extend({ attr: function (e, t) {
        return X(this, C.attr, e, t, arguments.length > 1);
      }, removeAttr: function (e) {
        return this.each(function () {
          C.removeAttr(this, e);
        });
      } }), C.extend({ attr: function (e, t, n) {
        var r,
            o,
            i = e.nodeType;if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === i && C.isXMLDoc(e) || (o = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? ft : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (r = o.get(e, t)) ? r : null == (r = C.find.attr(e, t)) ? void 0 : r);
      }, attrHooks: { type: { set: function (e, t) {
            if (!m.radioValue && "radio" === t && A(e, "input")) {
              var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
            }
          } } }, removeAttr: function (e, t) {
        var n,
            r = 0,
            o = t && t.match($);if (o && 1 === e.nodeType) for (; n = o[r++];) e.removeAttribute(n);
      } }), ft = { set: function (e, t, n) {
        return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n;
      } }, C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = pt[t] || C.find.attr;pt[t] = function (e, t, r) {
        var o,
            i,
            s = t.toLowerCase();return r || (i = pt[s], pt[s] = o, o = null != n(e, t, r) ? s : null, pt[s] = i), o;
      };
    });var dt = /^(?:input|select|textarea|button)$/i,
        ht = /^(?:a|area)$/i;function gt(e) {
      return (e.match($) || []).join(" ");
    }function vt(e) {
      return e.getAttribute && e.getAttribute("class") || "";
    }function mt(e) {
      return Array.isArray(e) ? e : "string" == typeof e && e.match($) || [];
    }C.fn.extend({ prop: function (e, t) {
        return X(this, C.prop, e, t, arguments.length > 1);
      }, removeProp: function (e) {
        return this.each(function () {
          delete this[C.propFix[e] || e];
        });
      } }), C.extend({ prop: function (e, t, n) {
        var r,
            o,
            i = e.nodeType;if (3 !== i && 8 !== i && 2 !== i) return 1 === i && C.isXMLDoc(e) || (t = C.propFix[t] || t, o = C.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t];
      }, propHooks: { tabIndex: { get: function (e) {
            var t = C.find.attr(e, "tabindex");return t ? parseInt(t, 10) : dt.test(e.nodeName) || ht.test(e.nodeName) && e.href ? 0 : -1;
          } } }, propFix: { for: "htmlFor", class: "className" } }), m.optSelected || (C.propHooks.selected = { get: function (e) {
        var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
      }, set: function (e) {
        var t = e.parentNode;t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
      } }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      C.propFix[this.toLowerCase()] = this;
    }), C.fn.extend({ addClass: function (e) {
        var t,
            n,
            r,
            o,
            i,
            s,
            a,
            u = 0;if (y(e)) return this.each(function (t) {
          C(this).addClass(e.call(this, t, vt(this)));
        });if ((t = mt(e)).length) for (; n = this[u++];) if (o = vt(n), r = 1 === n.nodeType && " " + gt(o) + " ") {
          for (s = 0; i = t[s++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");o !== (a = gt(r)) && n.setAttribute("class", a);
        }return this;
      }, removeClass: function (e) {
        var t,
            n,
            r,
            o,
            i,
            s,
            a,
            u = 0;if (y(e)) return this.each(function (t) {
          C(this).removeClass(e.call(this, t, vt(this)));
        });if (!arguments.length) return this.attr("class", "");if ((t = mt(e)).length) for (; n = this[u++];) if (o = vt(n), r = 1 === n.nodeType && " " + gt(o) + " ") {
          for (s = 0; i = t[s++];) for (; r.indexOf(" " + i + " ") > -1;) r = r.replace(" " + i + " ", " ");o !== (a = gt(r)) && n.setAttribute("class", a);
        }return this;
      }, toggleClass: function (e, t) {
        var n = typeof e,
            r = "string" === n || Array.isArray(e);return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : y(e) ? this.each(function (n) {
          C(this).toggleClass(e.call(this, n, vt(this), t), t);
        }) : this.each(function () {
          var t, o, i, s;if (r) for (o = 0, i = C(this), s = mt(e); t = s[o++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);else void 0 !== e && "boolean" !== n || ((t = vt(this)) && K.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""));
        });
      }, hasClass: function (e) {
        var t,
            n,
            r = 0;for (t = " " + e + " "; n = this[r++];) if (1 === n.nodeType && (" " + gt(vt(n)) + " ").indexOf(t) > -1) return !0;return !1;
      } });var yt = /\r/g;C.fn.extend({ val: function (e) {
        var t,
            n,
            r,
            o = this[0];return arguments.length ? (r = y(e), this.each(function (n) {
          var o;1 === this.nodeType && (null == (o = r ? e.call(this, n, C(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = C.map(o, function (e) {
            return null == e ? "" : e + "";
          })), (t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o));
        })) : o ? (t = C.valHooks[o.type] || C.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(yt, "") : null == n ? "" : n : void 0;
      } }), C.extend({ valHooks: { option: { get: function (e) {
            var t = C.find.attr(e, "value");return null != t ? t : gt(C.text(e));
          } }, select: { get: function (e) {
            var t,
                n,
                r,
                o = e.options,
                i = e.selectedIndex,
                s = "select-one" === e.type,
                a = s ? null : [],
                u = s ? i + 1 : o.length;for (r = i < 0 ? u : s ? i : 0; r < u; r++) if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
              if (t = C(n).val(), s) return t;a.push(t);
            }return a;
          }, set: function (e, t) {
            for (var n, r, o = e.options, i = C.makeArray(t), s = o.length; s--;) ((r = o[s]).selected = C.inArray(C.valHooks.option.get(r), i) > -1) && (n = !0);return n || (e.selectedIndex = -1), i;
          } } } }), C.each(["radio", "checkbox"], function () {
      C.valHooks[this] = { set: function (e, t) {
          if (Array.isArray(t)) return e.checked = C.inArray(C(e).val(), t) > -1;
        } }, m.checkOn || (C.valHooks[this].get = function (e) {
        return null === e.getAttribute("value") ? "on" : e.value;
      });
    }), m.focusin = "onfocusin" in n;var xt = /^(?:focusinfocus|focusoutblur)$/,
        bt = function (e) {
      e.stopPropagation();
    };C.extend(C.event, { trigger: function (e, t, r, o) {
        var i,
            a,
            u,
            l,
            c,
            f,
            p,
            d,
            g = [r || s],
            v = h.call(e, "type") ? e.type : e,
            m = h.call(e, "namespace") ? e.namespace.split(".") : [];if (a = d = u = r = r || s, 3 !== r.nodeType && 8 !== r.nodeType && !xt.test(v + C.event.triggered) && (v.indexOf(".") > -1 && (v = (m = v.split(".")).shift(), m.sort()), c = v.indexOf(":") < 0 && "on" + v, (e = e[C.expando] ? e : new C.Event(v, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : C.makeArray(t, [e]), p = C.event.special[v] || {}, o || !p.trigger || !1 !== p.trigger.apply(r, t))) {
          if (!o && !p.noBubble && !x(r)) {
            for (l = p.delegateType || v, xt.test(l + v) || (a = a.parentNode); a; a = a.parentNode) g.push(a), u = a;u === (r.ownerDocument || s) && g.push(u.defaultView || u.parentWindow || n);
          }for (i = 0; (a = g[i++]) && !e.isPropagationStopped();) d = a, e.type = i > 1 ? l : p.bindType || v, (f = (K.get(a, "events") || {})[e.type] && K.get(a, "handle")) && f.apply(a, t), (f = c && a[c]) && f.apply && Q(a) && (e.result = f.apply(a, t), !1 === e.result && e.preventDefault());return e.type = v, o || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(g.pop(), t) || !Q(r) || c && y(r[v]) && !x(r) && ((u = r[c]) && (r[c] = null), C.event.triggered = v, e.isPropagationStopped() && d.addEventListener(v, bt), r[v](), e.isPropagationStopped() && d.removeEventListener(v, bt), C.event.triggered = void 0, u && (r[c] = u)), e.result;
        }
      }, simulate: function (e, t, n) {
        var r = C.extend(new C.Event(), n, { type: e, isSimulated: !0 });C.event.trigger(r, null, t);
      } }), C.fn.extend({ trigger: function (e, t) {
        return this.each(function () {
          C.event.trigger(e, t, this);
        });
      }, triggerHandler: function (e, t) {
        var n = this[0];if (n) return C.event.trigger(e, t, n, !0);
      } }), m.focusin || C.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      var n = function (e) {
        C.event.simulate(t, e.target, C.event.fix(e));
      };C.event.special[t] = { setup: function () {
          var r = this.ownerDocument || this,
              o = K.access(r, t);o || r.addEventListener(e, n, !0), K.access(r, t, (o || 0) + 1);
        }, teardown: function () {
          var r = this.ownerDocument || this,
              o = K.access(r, t) - 1;o ? K.access(r, t, o) : (r.removeEventListener(e, n, !0), K.remove(r, t));
        } };
    });var wt = n.location,
        Tt = Date.now(),
        Ct = /\?/;C.parseXML = function (e) {
      var t;if (!e || "string" != typeof e) return null;try {
        t = new n.DOMParser().parseFromString(e, "text/xml");
      } catch (e) {
        t = void 0;
      }return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t;
    };var kt = /\[\]$/,
        Et = /\r?\n/g,
        St = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;function jt(e, t, n, r) {
      var o;if (Array.isArray(t)) C.each(t, function (t, o) {
        n || kt.test(e) ? r(e, o) : jt(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r);
      });else if (n || "object" !== T(t)) r(e, t);else for (o in t) jt(e + "[" + o + "]", t[o], n, r);
    }C.param = function (e, t) {
      var n,
          r = [],
          o = function (e, t) {
        var n = y(t) ? t() : t;r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function () {
        o(this.name, this.value);
      });else for (n in e) jt(n, e[n], t, o);return r.join("&");
    }, C.fn.extend({ serialize: function () {
        return C.param(this.serializeArray());
      }, serializeArray: function () {
        return this.map(function () {
          var e = C.prop(this, "elements");return e ? C.makeArray(e) : this;
        }).filter(function () {
          var e = this.type;return this.name && !C(this).is(":disabled") && Nt.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e));
        }).map(function (e, t) {
          var n = C(this).val();return null == n ? null : Array.isArray(n) ? C.map(n, function (e) {
            return { name: t.name, value: e.replace(Et, "\r\n") };
          }) : { name: t.name, value: n.replace(Et, "\r\n") };
        }).get();
      } });var Dt = /%20/g,
        At = /#.*$/,
        qt = /([?&])_=[^&]*/,
        Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ht = /^(?:GET|HEAD)$/,
        Ot = /^\/\//,
        Pt = {},
        Mt = {},
        Rt = "*/".concat("*"),
        $t = s.createElement("a");function Bt(e) {
      return function (t, n) {
        "string" != typeof t && (n = t, t = "*");var r,
            o = 0,
            i = t.toLowerCase().match($) || [];if (y(n)) for (; r = i[o++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
      };
    }function It(e, t, n, r) {
      var o = {},
          i = e === Mt;function s(a) {
        var u;return o[a] = !0, C.each(e[a] || [], function (e, a) {
          var l = a(t, n, r);return "string" != typeof l || i || o[l] ? i ? !(u = l) : void 0 : (t.dataTypes.unshift(l), s(l), !1);
        }), u;
      }return s(t.dataTypes[0]) || !o["*"] && s("*");
    }function Wt(e, t) {
      var n,
          r,
          o = C.ajaxSettings.flatOptions || {};for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);return r && C.extend(!0, e, r), e;
    }$t.href = wt.href, C.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: wt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Rt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": C.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (e, t) {
        return t ? Wt(Wt(e, C.ajaxSettings), t) : Wt(C.ajaxSettings, e);
      }, ajaxPrefilter: Bt(Pt), ajaxTransport: Bt(Mt), ajax: function (e, t) {
        "object" == typeof e && (t = e, e = void 0), t = t || {};var r,
            o,
            i,
            a,
            u,
            l,
            c,
            f,
            p,
            d,
            h = C.ajaxSetup({}, t),
            g = h.context || h,
            v = h.context && (g.nodeType || g.jquery) ? C(g) : C.event,
            m = C.Deferred(),
            y = C.Callbacks("once memory"),
            x = h.statusCode || {},
            b = {},
            w = {},
            T = "canceled",
            k = { readyState: 0, getResponseHeader: function (e) {
            var t;if (c) {
              if (!a) for (a = {}; t = Lt.exec(i);) a[t[1].toLowerCase()] = t[2];t = a[e.toLowerCase()];
            }return null == t ? null : t;
          }, getAllResponseHeaders: function () {
            return c ? i : null;
          }, setRequestHeader: function (e, t) {
            return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), this;
          }, overrideMimeType: function (e) {
            return null == c && (h.mimeType = e), this;
          }, statusCode: function (e) {
            var t;if (e) if (c) k.always(e[k.status]);else for (t in e) x[t] = [x[t], e[t]];return this;
          }, abort: function (e) {
            var t = e || T;return r && r.abort(t), E(0, t), this;
          } };if (m.promise(k), h.url = ((e || h.url || wt.href) + "").replace(Ot, wt.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match($) || [""], null == h.crossDomain) {
          l = s.createElement("a");try {
            l.href = h.url, l.href = l.href, h.crossDomain = $t.protocol + "//" + $t.host != l.protocol + "//" + l.host;
          } catch (e) {
            h.crossDomain = !0;
          }
        }if (h.data && h.processData && "string" != typeof h.data && (h.data = C.param(h.data, h.traditional)), It(Pt, h, t, k), c) return k;for (p in (f = C.event && h.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Ht.test(h.type), o = h.url.replace(At, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Dt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (Ct.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(qt, "$1"), d = (Ct.test(o) ? "&" : "?") + "_=" + Tt++ + d), h.url = o + d), h.ifModified && (C.lastModified[o] && k.setRequestHeader("If-Modified-Since", C.lastModified[o]), C.etag[o] && k.setRequestHeader("If-None-Match", C.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && k.setRequestHeader("Content-Type", h.contentType), k.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : h.accepts["*"]), h.headers) k.setRequestHeader(p, h.headers[p]);if (h.beforeSend && (!1 === h.beforeSend.call(g, k, h) || c)) return k.abort();if (T = "abort", y.add(h.complete), k.done(h.success), k.fail(h.error), r = It(Mt, h, t, k)) {
          if (k.readyState = 1, f && v.trigger("ajaxSend", [k, h]), c) return k;h.async && h.timeout > 0 && (u = n.setTimeout(function () {
            k.abort("timeout");
          }, h.timeout));try {
            c = !1, r.send(b, E);
          } catch (e) {
            if (c) throw e;E(-1, e);
          }
        } else E(-1, "No Transport");function E(e, t, s, a) {
          var l,
              p,
              d,
              b,
              w,
              T = t;c || (c = !0, u && n.clearTimeout(u), r = void 0, i = a || "", k.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || 304 === e, s && (b = function (e, t, n) {
            for (var r, o, i, s, a = e.contents, u = e.dataTypes; "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));if (r) for (o in a) if (a[o] && a[o].test(r)) {
              u.unshift(o);break;
            }if (u[0] in n) i = u[0];else {
              for (o in n) {
                if (!u[0] || e.converters[o + " " + u[0]]) {
                  i = o;break;
                }s || (s = o);
              }i = i || s;
            }if (i) return i !== u[0] && u.unshift(i), n[i];
          }(h, k, s)), b = function (e, t, n, r) {
            var o,
                i,
                s,
                a,
                u,
                l = {},
                c = e.dataTypes.slice();if (c[1]) for (s in e.converters) l[s.toLowerCase()] = e.converters[s];for (i = c.shift(); i;) if (e.responseFields[i] && (n[e.responseFields[i]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = i, i = c.shift()) if ("*" === i) i = u;else if ("*" !== u && u !== i) {
              if (!(s = l[u + " " + i] || l["* " + i])) for (o in l) if ((a = o.split(" "))[1] === i && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                !0 === s ? s = l[o] : !0 !== l[o] && (i = a[0], c.unshift(a[1]));break;
              }if (!0 !== s) if (s && e.throws) t = s(t);else try {
                t = s(t);
              } catch (e) {
                return { state: "parsererror", error: s ? e : "No conversion from " + u + " to " + i };
              }
            }return { state: "success", data: t };
          }(h, b, k, l), l ? (h.ifModified && ((w = k.getResponseHeader("Last-Modified")) && (C.lastModified[o] = w), (w = k.getResponseHeader("etag")) && (C.etag[o] = w)), 204 === e || "HEAD" === h.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = b.state, p = b.data, l = !(d = b.error))) : (d = T, !e && T || (T = "error", e < 0 && (e = 0))), k.status = e, k.statusText = (t || T) + "", l ? m.resolveWith(g, [p, T, k]) : m.rejectWith(g, [k, T, d]), k.statusCode(x), x = void 0, f && v.trigger(l ? "ajaxSuccess" : "ajaxError", [k, h, l ? p : d]), y.fireWith(g, [k, T]), f && (v.trigger("ajaxComplete", [k, h]), --C.active || C.event.trigger("ajaxStop")));
        }return k;
      }, getJSON: function (e, t, n) {
        return C.get(e, t, n, "json");
      }, getScript: function (e, t) {
        return C.get(e, void 0, t, "script");
      } }), C.each(["get", "post"], function (e, t) {
      C[t] = function (e, n, r, o) {
        return y(n) && (o = o || r, r = n, n = void 0), C.ajax(C.extend({ url: e, type: t, dataType: o, data: n, success: r }, C.isPlainObject(e) && e));
      };
    }), C._evalUrl = function (e) {
      return C.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
    }, C.fn.extend({ wrapAll: function (e) {
        var t;return this[0] && (y(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          for (var e = this; e.firstElementChild;) e = e.firstElementChild;return e;
        }).append(this)), this;
      }, wrapInner: function (e) {
        return y(e) ? this.each(function (t) {
          C(this).wrapInner(e.call(this, t));
        }) : this.each(function () {
          var t = C(this),
              n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
        });
      }, wrap: function (e) {
        var t = y(e);return this.each(function (n) {
          C(this).wrapAll(t ? e.call(this, n) : e);
        });
      }, unwrap: function (e) {
        return this.parent(e).not("body").each(function () {
          C(this).replaceWith(this.childNodes);
        }), this;
      } }), C.expr.pseudos.hidden = function (e) {
      return !C.expr.pseudos.visible(e);
    }, C.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, C.ajaxSettings.xhr = function () {
      try {
        return new n.XMLHttpRequest();
      } catch (e) {}
    };var Ft = { 0: 200, 1223: 204 },
        _t = C.ajaxSettings.xhr();m.cors = !!_t && "withCredentials" in _t, m.ajax = _t = !!_t, C.ajaxTransport(function (e) {
      var t, r;if (m.cors || _t && !e.crossDomain) return { send: function (o, i) {
          var s,
              a = e.xhr();if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (s in e.xhrFields) a[s] = e.xhrFields[s];for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) a.setRequestHeader(s, o[s]);t = function (e) {
            return function () {
              t && (t = r = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? i(0, "error") : i(a.status, a.statusText) : i(Ft[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders()));
            };
          }, a.onload = t(), r = a.onerror = a.ontimeout = t("error"), void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function () {
            4 === a.readyState && n.setTimeout(function () {
              t && r();
            });
          }, t = t("abort");try {
            a.send(e.hasContent && e.data || null);
          } catch (e) {
            if (t) throw e;
          }
        }, abort: function () {
          t && t();
        } };
    }), C.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }), C.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (e) {
          return C.globalEval(e), e;
        } } }), C.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), C.ajaxTransport("script", function (e) {
      var t, n;if (e.crossDomain) return { send: function (r, o) {
          t = C("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", n = function (e) {
            t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type);
          }), s.head.appendChild(t[0]);
        }, abort: function () {
          n && n();
        } };
    });var zt,
        Xt = [],
        Ut = /(=)\?(?=&|$)|\?\?/;C.ajaxSetup({ jsonp: "callback", jsonpCallback: function () {
        var e = Xt.pop() || C.expando + "_" + Tt++;return this[e] = !0, e;
      } }), C.ajaxPrefilter("json jsonp", function (e, t, r) {
      var o,
          i,
          s,
          a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");if (a || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ut, "$1" + o) : !1 !== e.jsonp && (e.url += (Ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
        return s || C.error(o + " was not called"), s[0];
      }, e.dataTypes[0] = "json", i = n[o], n[o] = function () {
        s = arguments;
      }, r.always(function () {
        void 0 === i ? C(n).removeProp(o) : n[o] = i, e[o] && (e.jsonpCallback = t.jsonpCallback, Xt.push(o)), s && y(i) && i(s[0]), s = i = void 0;
      }), "script";
    }), m.createHTMLDocument = ((zt = s.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === zt.childNodes.length), C.parseHTML = function (e, t, n) {
      return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (m.createHTMLDocument ? ((r = (t = s.implementation.createHTMLDocument("")).createElement("base")).href = s.location.href, t.head.appendChild(r)) : t = s), o = q.exec(e), i = !n && [], o ? [t.createElement(o[1])] : (o = we([e], t, i), i && i.length && C(i).remove(), C.merge([], o.childNodes)));var r, o, i;
    }, C.fn.load = function (e, t, n) {
      var r,
          o,
          i,
          s = this,
          a = e.indexOf(" ");return a > -1 && (r = gt(e.slice(a)), e = e.slice(0, a)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && C.ajax({ url: e, type: o || "GET", dataType: "html", data: t }).done(function (e) {
        i = arguments, s.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e);
      }).always(n && function (e, t) {
        s.each(function () {
          n.apply(this, i || [e.responseText, t, e]);
        });
      }), this;
    }, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
      C.fn[t] = function (e) {
        return this.on(t, e);
      };
    }), C.expr.pseudos.animated = function (e) {
      return C.grep(C.timers, function (t) {
        return e === t.elem;
      }).length;
    }, C.offset = { setOffset: function (e, t, n) {
        var r,
            o,
            i,
            s,
            a,
            u,
            l = C.css(e, "position"),
            c = C(e),
            f = {};"static" === l && (e.style.position = "relative"), a = c.offset(), i = C.css(e, "top"), u = C.css(e, "left"), ("absolute" === l || "fixed" === l) && (i + u).indexOf("auto") > -1 ? (s = (r = c.position()).top, o = r.left) : (s = parseFloat(i) || 0, o = parseFloat(u) || 0), y(t) && (t = t.call(e, n, C.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + o), "using" in t ? t.using.call(e, f) : c.css(f);
      } }, C.fn.extend({ offset: function (e) {
        if (arguments.length) return void 0 === e ? this : this.each(function (t) {
          C.offset.setOffset(this, e, t);
        });var t,
            n,
            r = this[0];return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0;
      }, position: function () {
        if (this[0]) {
          var e,
              t,
              n,
              r = this[0],
              o = { top: 0, left: 0 };if ("fixed" === C.css(r, "position")) t = r.getBoundingClientRect();else {
            for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;e && e !== r && 1 === e.nodeType && ((o = C(e).offset()).top += C.css(e, "borderTopWidth", !0), o.left += C.css(e, "borderLeftWidth", !0));
          }return { top: t.top - o.top - C.css(r, "marginTop", !0), left: t.left - o.left - C.css(r, "marginLeft", !0) };
        }
      }, offsetParent: function () {
        return this.map(function () {
          for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;return e || Te;
        });
      } }), C.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
      var n = "pageYOffset" === t;C.fn[e] = function (r) {
        return X(this, function (e, r, o) {
          var i;if (x(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === o) return i ? i[t] : e[r];i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o;
        }, e, r, arguments.length);
      };
    }), C.each(["top", "left"], function (e, t) {
      C.cssHooks[t] = ze(m.pixelPosition, function (e, n) {
        if (n) return n = _e(e, t), Ie.test(n) ? C(e).position()[t] + "px" : n;
      });
    }), C.each({ Height: "height", Width: "width" }, function (e, t) {
      C.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
        C.fn[r] = function (o, i) {
          var s = arguments.length && (n || "boolean" != typeof o),
              a = n || (!0 === o || !0 === i ? "margin" : "border");return X(this, function (t, n, o) {
            var i;return x(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? C.css(t, n, a) : C.style(t, n, o, a);
          }, t, s ? o : void 0, s);
        };
      });
    }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
      C.fn[t] = function (e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
      };
    }), C.fn.extend({ hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      } }), C.fn.extend({ bind: function (e, t, n) {
        return this.on(e, null, t, n);
      }, unbind: function (e, t) {
        return this.off(e, null, t);
      }, delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      }, undelegate: function (e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
      } }), C.proxy = function (e, t) {
      var n, r, o;if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return r = u.call(arguments, 2), (o = function () {
        return e.apply(t || this, r.concat(u.call(arguments)));
      }).guid = e.guid = e.guid || C.guid++, o;
    }, C.holdReady = function (e) {
      e ? C.readyWait++ : C.ready(!0);
    }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = A, C.isFunction = y, C.isWindow = x, C.camelCase = G, C.type = T, C.now = Date.now, C.isNumeric = function (e) {
      var t = C.type(e);return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }, void 0 === (r = function () {
      return C;
    }.apply(t, [])) || (e.exports = r);var Vt = n.jQuery,
        Yt = n.$;return C.noConflict = function (e) {
      return n.$ === C && (n.$ = Yt), e && n.jQuery === C && (n.jQuery = Vt), C;
    }, o || (n.jQuery = n.$ = C), C;
  });
}, function (e, t, n) {
  "use strict";
  n.r(t);var r = n(0),
      o = n.n(r);const i = { Yoko: 0, Tate: 1 };class s {
    constructor(e, t, n) {
      this.roomNo = e, this.clusterNo = e, this.position = [t, n], this.walls = { top: null, left: null, right: null, bottom: null };
    }html() {
      const e = [];null == this.walls.top || this.walls.top.isBroken || e.push("border-top"), null == this.walls.right || this.walls.right.isBroken || e.push("border-right"), null == this.walls.bottom || this.walls.bottom.isBroken || e.push("border-bottom"), null == this.walls.left || this.walls.left.isBroken || e.push("border-left");const t = [];return 0 === this.position[0] && (0 !== this.position[1] && t.push("</div>"), t.push('<div class="d-flex flex-nowrap">')), t.push(`<div class="room ${e.join(" ")}"></div>`), t.join("");
    }
  }class a {
    constructor(e, t, n, r, o, i, s) {
      this.index = e, this.position = [[t, n], [r, o]], this.direction = i, this.isBreakable = s, this.isBroken = !1;
    }
  }o()(document).ready(() => {
    const e = [];new class {
      constructor(e, t) {
        this.rooms = [], this.roomMap = new Map(), this.walls = [], this.clusters = new Map();let n = 0,
            r = 0;for (let o = 0; o < e; o++) for (let u = 0; u < t; u++) {
          const l = new s(n, u, o);this.rooms.push(l), this.roomMap.set(`${u}_${o}`, l);const c = new Set();if (c.add(n), this.clusters.set(n, c), n++, 0 === o) {
            const e = new a(r, u, o, u + 1, o, i.Yoko, !1);r++, this.walls.push(e), l.walls.top = e;
          }if (u === t - 1) {
            const e = new a(r, u + 1, o, u + 1, o + 1, i.Tate, !1);r++, this.walls.push(e), l.walls.right = e;
          }const f = new a(r, u, o, u, o + 1, i.Tate, 0 !== u);r++, this.walls.push(f), l.walls.left = f;const p = new a(r, u, o + 1, u + 1, o + 1, i.Yoko, o !== e - 1);r++, this.walls.push(p), l.walls.bottom = p;
        }
      }shuffle(e) {
        for (let t = e.length - 1; t > 0; t--) {
          const n = Math.floor(Math.random() * (t + 1)),
                r = e[t];e[t] = e[n], e[n] = r;
        }return e;
      }getAdjacentRooms(e) {
        const t = [],
              n = e.position[0];return e.direction === i.Tate ? (t.push(this.roomMap.get(`${n[0]}_${n[1]}`)), 0 !== n[0] && t.push(this.roomMap.get(`${n[0] - 1}_${n[1]}`))) : (t.push(this.roomMap.get(`${n[0]}_${n[1]}`)), 0 !== n[1] && t.push(this.roomMap.get(`${n[0]}_${n[1] - 1}`))), t;
      }isBreakableWall(e) {
        if (!e.isBreakable) return !1;const t = this.getAdjacentRooms(e);return t.length > 1 && t[0].clusterNo !== t[1].clusterNo;
      }mergeCluster(e) {
        const t = this.getAdjacentRooms(e);if (t.length > 1) {
          const e = t[0].clusterNo,
                n = this.clusters.get(e),
                r = t[1].clusterNo;this.clusters.get(r).forEach(t => {
            this.rooms[t].clusterNo = e, n.add(t);
          }), this.clusters.delete(r);
        }
      }make() {
        return this.shuffle(this.walls).some(e => {
          if (this.isBreakableWall(e) && (e.isBroken = !0, this.mergeCluster(e), 1 === this.clusters.size)) return !0;
        }), this.rooms;
      }
    }(12, 12).make().forEach(t => {
      e.push(t.html());
    });const t = e.join("");o()("#maze").append(t), o()(".room").on("click", function () {
      o()(this).addClass("selected-room");
    });
  });
}]);
