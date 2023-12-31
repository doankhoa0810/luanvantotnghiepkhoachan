! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(b) {
    function f(c) {
        return k.raw ? c : encodeURIComponent(c)
    }

    function g(c) {
        return k.raw ? c : decodeURIComponent(c)
    }

    function d(c) {
        return f(k.json ? JSON.stringify(c) : String(c))
    }

    function j(c) {
        0 === c.indexOf('"') && (c = c.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return c = decodeURIComponent(c.replace(a, " ")), k.json ? JSON.parse(c) : c
        } catch (i) {}
    }

    function h(e, l) {
        var c = k.raw ? e : j(e);
        return b.isFunction(l) ? l(c) : c
    }
    var a = /\+/g,
        k = b.cookie = function(z, i, y) {
            if (arguments.length > 1 && !b.isFunction(i)) {
                if (y = b.extend({}, k.defaults, y), "number" == typeof y.expires) {
                    var e = y.expires,
                        n = y.expires = new Date;
                    n.setMilliseconds(n.getMilliseconds() + 86400000 * e)
                }
                return document.cookie = [f(z), "=", d(i), y.expires ? "; expires=" + y.expires.toUTCString() : "", y.path ? "; path=" + y.path : "", y.domain ? "; domain=" + y.domain : "", y.secure ? "; secure" : ""].join("")
            }
            for (var o = z ? void 0 : {}, w = document.cookie ? document.cookie.split("; ") : [], u = 0, v = w.length; v > u; u++) {
                var A = w[u].split("="),
                    q = g(A.shift()),
                    r = A.join("=");
                if (z === q) {
                    o = h(r, i);
                    break
                }
                z || void 0 === (r = h(r)) || (o[q] = r)
            }
            return o
        };
    k.defaults = {}, b.removeCookie = function(c, e) {
        return b.cookie(c, "", b.extend({}, e, {
            expires: -1
        })), !b.cookie(c)
    }
});

function setCookie(a, d, c) {
    try {
        $.cookie(a, d, {
            expires: c,
            path: "/"
        })
    } catch (b) {
        return null
    }
}

function getCookie(a) {
    try {
        return $.cookie(a)
    } catch (b) {
        return null
    }
};