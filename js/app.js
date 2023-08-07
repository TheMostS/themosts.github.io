function createEl(t) {
    var e = document.createElement("div");
    return e.innerHTML = t.trim(),
    e.firstChild
}
function createSvgEl(t) {
    return createEl('\n    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' + t.trim() + "</svg>\n  ")
}
function createSvgChildEl(t) {
    return createSvgEl(t).firstChild
}
function createLine(t) {
    return createSvgChildEl('\n    <rect x="' + t.x + '" y="' + t.y + '" width="' + t.width + '" height="' + t.height + '" fill="' + t.color + '">\n  ')
}
(function() {
    function n(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
    var h, I, o, a, c, d, s, p, g, m, t, z, r, l, y, b, v, f, u, w, e, i, x, M, S, _, k, C, A, T, R, E, H, q, X, F, L, j, Y, O, P, N, G, W, D, V, B, Z, $, U, K, J, Q, tt, et, nt, rt, it, ot, at, st;
    function lt(t) {
        var e, n, r;
        for (this.obj = {},
        n = 0,
        r = t.length; n < r; n++)
            e = t[n],
            this.obj[e] = 1
    }
    function ut(t) {
        this.parts = t,
        this.format = n(this.format, this),
        this.interpolate = n(this.interpolate, this)
    }
    function ht(t) {
        this.format = n(this.format, this),
        this.interpolate = n(this.interpolate, this),
        this.obj = t
    }
    function ft(t) {
        this.format = n(this.format, this),
        this.interpolate = n(this.interpolate, this),
        this.value = parseFloat(t)
    }
    function ct(t) {
        this.values = t,
        this.format = n(this.format, this),
        this.interpolate = n(this.interpolate, this)
    }
    function dt(t, e) {
        this.rgb = null != t ? t : {},
        this.format = e,
        this.toRgba = n(this.toRgba, this),
        this.toRgb = n(this.toRgb, this),
        this.toHex = n(this.toHex, this)
    }
    function pt(t) {
        this.color = t,
        this.format = n(this.format, this),
        this.interpolate = n(this.interpolate, this)
    }
    function mt(t) {
        this.props = t,
        this.applyRotateCenter = n(this.applyRotateCenter, this),
        this.format = n(this.format, this),
        this.interpolate = n(this.interpolate, this)
    }
    function gt(t) {
        this.m = t,
        this.applyProperties = n(this.applyProperties, this),
        this.decompose = n(this.decompose, this),
        this.m || (this.m = w.createSVGMatrix())
    }
    function yt(t) {
        this.els = t,
        this.combine = n(this.combine, this),
        this.normalize = n(this.normalize, this),
        this.length = n(this.length, this),
        this.cross = n(this.cross, this),
        this.dot = n(this.dot, this),
        this.e = n(this.e, this)
    }
    function bt() {
        this.toMatrix = n(this.toMatrix, this),
        this.format = n(this.format, this),
        this.interpolate = n(this.interpolate, this)
    }
    function vt(t) {
        this.els = t,
        this.toString = n(this.toString, this),
        this.decompose = n(this.decompose, this),
        this.inverse = n(this.inverse, this),
        this.augment = n(this.augment, this),
        this.toRightTriangular = n(this.toRightTriangular, this),
        this.transpose = n(this.transpose, this),
        this.multiply = n(this.multiply, this),
        this.dup = n(this.dup, this),
        this.e = n(this.e, this)
    }
    T = function() {
        return "visible" === document.visibilityState || null != k.tests
    }
    ,
    it = [],
    "undefined" != typeof document && null !== document && document.addEventListener("visibilitychange", function() {
        for (var t, e = [], n = 0, r = it.length; n < r; n++)
            t = it[n],
            e.push(t(T()));
        return e
    }),
    X = function(t) {
        return it.push(t)
    }
    ,
    x = function(t) {
        var e, n, r = {};
        for (e in t)
            n = t[e],
            r[e] = n;
        return r
    }
    ,
    e = function(i) {
        var o = {};
        return function() {
            for (var t, e = "", n = 0, r = arguments.length; n < r; n++)
                e += arguments[n].toString() + ",";
            return (t = o[e]) || (o[e] = t = i.apply(this, arguments)),
            t
        }
    }
    ,
    q = function(a) {
        return function(r) {
            var i, o;
            return r instanceof Array || r instanceof NodeList || r instanceof HTMLCollection ? function() {
                var t, e, n = [];
                for (o = t = 0,
                e = r.length; 0 <= e ? t < e : e < t; o = 0 <= e ? ++t : --t)
                    (i = Array.prototype.slice.call(arguments, 1)).splice(0, 0, r[o]),
                    n.push(a.apply(this, i));
                return n
            }
            .apply(this, arguments) : a.apply(this, arguments)
        }
    }
    ,
    v = function(t, e) {
        var n, r, i = [];
        for (n in e)
            r = e[n],
            i.push(null != t[n] ? t[n] : t[n] = r);
        return i
    }
    ,
    f = function(t, e) {
        var n, r, i;
        if (null != t.style)
            return u(t, e);
        for (n in i = [],
        e)
            r = e[n],
            i.push(t[n] = r.format());
        return i
    }
    ,
    u = function(t, e) {
        var n, r, i, o, a;
        for (r in e = F(e),
        o = [],
        n = R(t),
        e)
            a = e[r],
            et.contains(r) ? o.push([r, a]) : (null != a.format && (a = a.format()),
            "number" == typeof a && (a = "" + a + rt(r, a)),
            n && U.contains(r) ? t.setAttribute(r, a) : t.style[j(r)] = a);
        if (0 < o.length)
            return n ? ((i = new m).applyProperties(o),
            t.setAttribute("transform", i.decompose().format())) : (a = o.map(function(t) {
                return nt(t[0], t[1])
            }).join(" "),
            t.style[j("transform")] = a)
    }
    ,
    R = function(t) {
        var e, n;
        return "undefined" != typeof SVGElement && null !== SVGElement && "undefined" != typeof SVGSVGElement && null !== SVGSVGElement ? t instanceof SVGElement && !(t instanceof SVGSVGElement) : null != (e = null != (n = k.tests) && "function" == typeof n.isSVG ? n.isSVG(t) : void 0) && e
    }
    ,
    P = function(t, e) {
        var n = Math.pow(10, e);
        return Math.round(t * n) / n
    }
    ,
    lt.prototype.contains = function(t) {
        return 1 === this.obj[t]
    }
    ,
    tt = function(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        })
    }
    ,
    Y = new (t = lt)("marginTop,marginLeft,marginBottom,marginRight,paddingTop,paddingLeft,paddingBottom,paddingRight,top,left,bottom,right,translateX,translateY,translateZ,perspectiveX,perspectiveY,perspectiveZ,width,height,maxWidth,maxHeight,minWidth,minHeight,borderRadius".split(",")),
    _ = new t("rotate,rotateX,rotateY,rotateZ,skew,skewX,skewY,skewZ".split(",")),
    et = new t("translate,translateX,translateY,translateZ,scale,scaleX,scaleY,scaleZ,rotate,rotateX,rotateY,rotateZ,rotateC,rotateCX,rotateCY,skew,skewX,skewY,skewZ,perspective".split(",")),
    U = new t("accent-height,ascent,azimuth,baseFrequency,baseline-shift,bias,cx,cy,d,diffuseConstant,divisor,dx,dy,elevation,filterRes,fx,fy,gradientTransform,height,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,letter-spacing,limitingConeAngle,markerHeight,markerWidth,numOctaves,order,overline-position,overline-thickness,pathLength,points,pointsAtX,pointsAtY,pointsAtZ,r,radius,rx,ry,seed,specularConstant,specularExponent,stdDeviation,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,surfaceScale,target,targetX,targetY,transform,underline-position,underline-thickness,viewBox,width,x,x1,x2,y,y1,y2,z".split(",")),
    rt = function(t, e) {
        return "number" != typeof e ? "" : Y.contains(t) ? "px" : _.contains(t) ? "deg" : ""
    }
    ,
    nt = function(t, e) {
        var n, r = ("" + e).match(/^([0-9.-]*)([^0-9]*)$/);
        return null != r ? (e = r[1],
        n = r[2]) : e = parseFloat(e),
        e = P(parseFloat(e), 10),
        null != n && "" !== n || (n = rt(t, e)),
        t + "(" + e + n + ")"
    }
    ,
    F = function(t) {
        var e, n, r, i, o, a, s, l = {};
        for (r in t)
            if (i = t[r],
            et.contains(r))
                if ((n = r.match(/(translate|rotateC|rotate|skew|scale|perspective)(X|Y|Z|)/)) && 0 < n[2].length)
                    l[r] = i;
                else
                    for (o = 0,
                    a = (s = ["X", "Y", "Z"]).length; o < a; o++)
                        e = s[o],
                        l[n[1] + e] = i;
            else
                l[r] = i;
        return l
    }
    ,
    S = function(t) {
        var e = "opacity" === t ? 1 : 0;
        return "" + e + rt(t, e)
    }
    ,
    C = function(t, e) {
        var n, r, i, o, a, s, l, u, h, f = {}, c = R(t);
        if (null != t.style)
            for (i = window.getComputedStyle(t, null),
            a = 0,
            l = e.length; a < l; a++)
                n = e[a],
                et.contains(n) ? null == f.transform && (r = c ? new m(null != (h = t.transform.baseVal.consolidate()) ? h.matrix : void 0) : g.fromTransform(i[j("transform")]),
                f.transform = r.decompose()) : (null == (o = i[n]) && U.contains(n) && (o = t.getAttribute(n)),
                "" !== o && null != o || (o = S(n)),
                f[n] = M(o));
        else
            for (s = 0,
            u = e.length; s < u; s++)
                f[n = e[s]] = M(t[n]);
        return f
    }
    ,
    M = function(t) {
        for (var e, n = [a, s, d, p], r = 0, i = n.length; r < i; r++)
            if (null != (e = n[r].create(t)))
                return e;
        return null
    }
    ,
    ut.prototype.interpolate = function(t, e) {
        for (var n, r = this.parts, i = t.parts, o = [], a = n = 0, s = Math.min(r.length, i.length); 0 <= s ? n < s : s < n; a = 0 <= s ? ++n : --n)
            null != r[a].interpolate ? o.push(r[a].interpolate(i[a], e)) : o.push(r[a]);
        return new ut(o)
    }
    ,
    ut.prototype.format = function() {
        return this.parts.map(function(t) {
            return null != t.format ? t.format() : t
        }).join("")
    }
    ,
    ut.create = function(t) {
        var e, n, r, i, o, a, s, l, u, h, f;
        for (t = "" + t,
        r = [],
        l = 0,
        h = (s = [{
            re: /(#[a-f\d]{3,6})/gi,
            klass: c,
            parse: function(t) {
                return t
            }
        }, {
            re: /(rgba?\([0-9.]*, ?[0-9.]*, ?[0-9.]*(?:, ?[0-9.]*)?\))/gi,
            klass: c,
            parse: function(t) {
                return t
            }
        }, {
            re: /([-+]?[\d.]+)/gi,
            klass: d,
            parse: parseFloat
        }]).length; l < h; l++)
            for (o = (a = s[l]).re; n = o.exec(t); )
                r.push({
                    index: n.index,
                    length: n[1].length,
                    interpolable: a.klass.create(a.parse(n[1]))
                });
        for (i = [],
        u = e = 0,
        f = (r = r.sort(function(t, e) {
            return t.index > e.index
        })).length; u < f; u++)
            (n = r[u]).index < e || (n.index > e && i.push(t.substring(e, n.index)),
            i.push(n.interpolable),
            e = n.index + n.length);
        return e < t.length && i.push(t.substring(e)),
        new ut(i)
    }
    ,
    p = ut,
    ht.prototype.interpolate = function(t, e) {
        var n, r, i = this.obj, o = t.obj, a = {};
        for (n in i)
            null != (r = i[n]).interpolate ? a[n] = r.interpolate(o[n], e) : a[n] = r;
        return new ht(a)
    }
    ,
    ht.prototype.format = function() {
        return this.obj
    }
    ,
    ht.create = function(t) {
        var e, n, r;
        if (t instanceof Object) {
            for (e in n = {},
            t)
                r = t[e],
                n[e] = M(r);
            return new ht(n)
        }
        return null
    }
    ,
    s = ht,
    ft.prototype.interpolate = function(t, e) {
        var n = this.value;
        return new ft((t.value - n) * e + n)
    }
    ,
    ft.prototype.format = function() {
        return P(this.value, 5)
    }
    ,
    ft.create = function(t) {
        return "number" == typeof t ? new ft(t) : null
    }
    ,
    d = ft,
    ct.prototype.interpolate = function(t, e) {
        for (var n, r = this.values, i = t.values, o = [], a = n = 0, s = Math.min(r.length, i.length); 0 <= s ? n < s : s < n; a = 0 <= s ? ++n : --n)
            null != r[a].interpolate ? o.push(r[a].interpolate(i[a], e)) : o.push(r[a]);
        return new ct(o)
    }
    ,
    ct.prototype.format = function() {
        return this.values.map(function(t) {
            return null != t.format ? t.format() : t
        })
    }
    ,
    ct.createFromArray = function(t) {
        var e = t.map(function(t) {
            return M(t) || t
        });
        return new ct(e = e.filter(function(t) {
            return null != t
        }))
    }
    ,
    ct.create = function(t) {
        return t instanceof Array ? ct.createFromArray(t) : null
    }
    ,
    a = ct,
    dt.fromHex = function(t) {
        var e, n = t.match(/^#([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i);
        return null != n && (t = "#" + n[1] + n[1] + n[2] + n[2] + n[3] + n[3]),
        null != (e = t.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i)) ? new dt({
            r: parseInt(e[1], 16),
            g: parseInt(e[2], 16),
            b: parseInt(e[3], 16),
            a: 1
        },"hex") : null
    }
    ,
    dt.fromRgb = function(t) {
        var e, n = t.match(/^rgba?\(([0-9.]*), ?([0-9.]*), ?([0-9.]*)(?:, ?([0-9.]*))?\)$/);
        return null != n ? new dt({
            r: parseFloat(n[1]),
            g: parseFloat(n[2]),
            b: parseFloat(n[3]),
            a: parseFloat(null != (e = n[4]) ? e : 1)
        },null != n[4] ? "rgba" : "rgb") : null
    }
    ,
    dt.componentToHex = function(t) {
        var e = t.toString(16);
        return 1 === e.length ? "0" + e : e
    }
    ,
    dt.prototype.toHex = function() {
        return "#" + dt.componentToHex(this.rgb.r) + dt.componentToHex(this.rgb.g) + dt.componentToHex(this.rgb.b)
    }
    ,
    dt.prototype.toRgb = function() {
        return "rgb(" + this.rgb.r + ", " + this.rgb.g + ", " + this.rgb.b + ")"
    }
    ,
    dt.prototype.toRgba = function() {
        return "rgba(" + this.rgb.r + ", " + this.rgb.g + ", " + this.rgb.b + ", " + this.rgb.a + ")"
    }
    ,
    h = dt,
    pt.prototype.interpolate = function(t, e) {
        for (var n, r, i = this.color, o = t.color, a = {}, s = ["r", "g", "b"], l = 0, u = s.length; l < u; l++)
            n = s[l],
            r = Math.round((o.rgb[n] - i.rgb[n]) * e + i.rgb[n]),
            a[n] = Math.min(255, Math.max(0, r));
        return n = "a",
        r = P((o.rgb[n] - i.rgb[n]) * e + i.rgb[n], 5),
        a[n] = Math.min(1, Math.max(0, r)),
        new pt(new h(a,o.format))
    }
    ,
    pt.prototype.format = function() {
        return "hex" === this.color.format ? this.color.toHex() : "rgb" === this.color.format ? this.color.toRgb() : "rgba" === this.color.format ? this.color.toRgba() : void 0
    }
    ,
    pt.create = function(t) {
        var e;
        if ("string" == typeof t)
            return null != (e = h.fromHex(t) || h.fromRgb(t)) ? new pt(e) : null
    }
    ,
    c = pt,
    mt.prototype.interpolate = function(t, e) {
        for (var n, r, i, o, a, s, l, u, h = {}, f = ["translate", "scale", "rotate"], c = 0, d = f.length; c < d; c++)
            for (h[r = f[c]] = [],
            n = i = 0,
            l = this.props[r].length; 0 <= l ? i < l : l < i; n = 0 <= l ? ++i : --i)
                h[r][n] = (t.props[r][n] - this.props[r][n]) * e + this.props[r][n];
        for (n = o = 1; o <= 2; n = ++o)
            h.rotate[n] = t.props.rotate[n];
        for (a = 0,
        s = (u = ["skew"]).length; a < s; a++)
            h[r = u[a]] = (t.props[r] - this.props[r]) * e + this.props[r];
        return new mt(h)
    }
    ,
    mt.prototype.format = function() {
        return "translate(" + this.props.translate.join(",") + ") rotate(" + this.props.rotate.join(",") + ") skewX(" + this.props.skew + ") scale(" + this.props.scale.join(",") + ")"
    }
    ,
    mt.prototype.applyRotateCenter = function(t) {
        var e, n, r, i, o = w.createSVGMatrix();
        for (o = (o = (o = o.translate(t[0], t[1])).rotate(this.props.rotate[0])).translate(-t[0], -t[1]),
        n = new m(o).decompose().props.translate,
        i = [],
        e = r = 0; r <= 1; e = ++r)
            i.push(this.props.translate[e] -= n[e]);
        return i
    }
    ,
    o = mt,
    w = "undefined" != typeof document && null !== document ? document.createElementNS("http://www.w3.org/2000/svg", "svg") : void 0,
    gt.prototype.decompose = function() {
        var t, e = new z([this.m.a, this.m.b]), n = new z([this.m.c, this.m.d]), r = e.length(), i = e.dot(n);
        return e = e.normalize(),
        t = n.combine(e, 1, -i).length(),
        new o({
            translate: [this.m.e, this.m.f],
            rotate: [180 * Math.atan2(this.m.b, this.m.a) / Math.PI, this.rotateCX, this.rotateCY],
            scale: [r, t],
            skew: i / t * 180 / Math.PI
        })
    }
    ,
    gt.prototype.applyProperties = function(t) {
        for (var e, n, r, i, o, a = {}, s = 0, l = t.length; s < l; s++)
            a[(n = t[s])[0]] = n[1];
        for (e in a)
            r = a[e],
            "translateX" === e ? this.m = this.m.translate(r, 0) : "translateY" === e ? this.m = this.m.translate(0, r) : "scaleX" === e ? this.m = this.m.scale(r, 1) : "scaleY" === e ? this.m = this.m.scale(1, r) : "rotateZ" === e ? this.m = this.m.rotate(r) : "skewX" === e ? this.m = this.m.skewX(r) : "skewY" === e && (this.m = this.m.skewY(r));
        return this.rotateCX = null != (i = a.rotateCX) ? i : 0,
        this.rotateCY = null != (o = a.rotateCY) ? o : 0
    }
    ,
    m = gt,
    yt.prototype.e = function(t) {
        return t < 1 || t > this.els.length ? null : this.els[t - 1]
    }
    ,
    yt.prototype.dot = function(t) {
        var e = t.els || t
          , n = 0
          , r = this.els.length;
        if (r !== e.length)
            return null;
        for (r += 1; --r; )
            n += this.els[r - 1] * e[r - 1];
        return n
    }
    ,
    yt.prototype.cross = function(t) {
        var e, n = t.els || t;
        return 3 !== this.els.length || 3 !== n.length ? null : new yt([(e = this.els)[1] * n[2] - e[2] * n[1], e[2] * n[0] - e[0] * n[2], e[0] * n[1] - e[1] * n[0]])
    }
    ,
    yt.prototype.length = function() {
        for (var t, e = 0, n = this.els, r = 0, i = n.length; r < i; r++)
            t = n[r],
            e += Math.pow(t, 2);
        return Math.sqrt(e)
    }
    ,
    yt.prototype.normalize = function() {
        var t, e, n = this.length(), r = [], i = this.els;
        for (e in i)
            t = i[e],
            r[e] = t / n;
        return new yt(r)
    }
    ,
    yt.prototype.combine = function(t, e, n) {
        for (var r, i = [], o = r = 0, a = this.els.length; 0 <= a ? r < a : a < r; o = 0 <= a ? ++r : --r)
            i[o] = e * this.els[o] + n * t.els[o];
        return new yt(i)
    }
    ,
    z = yt,
    bt.prototype.interpolate = function(t, e, n) {
        var r, i, o, a, s, l, u, h, f, c, d, p, m, g, y, b, v, w;
        for (null == n && (n = null),
        o = this,
        i = new bt,
        p = 0,
        b = (v = ["translate", "scale", "skew", "perspective"]).length; p < b; p++)
            for (i[u = v[p]] = [],
            a = m = 0,
            w = o[u].length - 1; 0 <= w ? m <= w : w <= m; a = 0 <= w ? ++m : --m)
                null == n || -1 < n.indexOf(u) || -1 < n.indexOf("" + u + ["x", "y", "z"][a]) ? i[u][a] = (t[u][a] - o[u][a]) * e + o[u][a] : i[u][a] = o[u][a];
        if (null == n || -1 !== n.indexOf("rotate")) {
            if (h = o.quaternion,
            f = t.quaternion,
            (r = h[0] * f[0] + h[1] * f[1] + h[2] * f[2] + h[3] * f[3]) < 0) {
                for (a = g = 0; g <= 3; a = ++g)
                    h[a] = -h[a];
                r = -r
            }
            for (s = .05 < r + 1 ? .05 <= 1 - r ? (d = Math.acos(r),
            l = 1 / Math.sin(d),
            c = Math.sin(d * (1 - e)) * l,
            Math.sin(d * e) * l) : (c = 1 - e,
            e) : (f[0] = -h[1],
            f[1] = h[0],
            f[2] = -h[3],
            f[3] = h[2],
            c = Math.sin(piDouble * (.5 - e)),
            Math.sin(piDouble * e)),
            i.quaternion = [],
            a = y = 0; y <= 3; a = ++y)
                i.quaternion[a] = h[a] * c + f[a] * s
        } else
            i.quaternion = o.quaternion;
        return i
    }
    ,
    bt.prototype.format = function() {
        return this.toMatrix().toString()
    }
    ,
    bt.prototype.toMatrix = function() {
        for (var t, e, n, r, i, o, a, s, l, u, h, f, c, d = this, p = g.I(4), m = u = 0; u <= 3; m = ++u)
            p.els[m][3] = d.perspective[m];
        for (a = (n = d.quaternion)[0],
        s = n[1],
        l = n[2],
        o = n[3],
        r = d.skew,
        e = [[1, 0], [2, 0], [2, 1]],
        m = h = 2; 0 <= h; m = --h)
            r[m] && ((i = g.I(4)).els[e[m][0]][e[m][1]] = r[m],
            p = p.multiply(i));
        for (p = p.multiply(new g([[1 - 2 * (s * s + l * l), 2 * (a * s - l * o), 2 * (a * l + s * o), 0], [2 * (a * s + l * o), 1 - 2 * (a * a + l * l), 2 * (s * l - a * o), 0], [2 * (a * l - s * o), 2 * (s * l + a * o), 1 - 2 * (a * a + s * s), 0], [0, 0, 0, 1]])),
        m = f = 0; f <= 2; m = ++f) {
            for (t = c = 0; c <= 2; t = ++c)
                p.els[m][t] *= d.scale[m];
            p.els[3][m] = d.translate[m]
        }
        return p
    }
    ,
    I = bt,
    vt.prototype.e = function(t, e) {
        return t < 1 || t > this.els.length || e < 1 || e > this.els[0].length ? null : this.els[t - 1][e - 1]
    }
    ,
    vt.prototype.dup = function() {
        return new vt(this.els)
    }
    ,
    vt.prototype.multiply = function(t) {
        var e, n, r, i, o, a, s, l, u, h, f, c = !!t.modulus, d = t.els || t;
        for (void 0 === d[0][0] && (d = new vt(d).els),
        a = u = this.els.length,
        s = d[0].length,
        n = this.els[0].length,
        r = [],
        u += 1; --u; )
            for (r[i = a - u] = [],
            h = s,
            h += 1; --h; ) {
                for (o = s - h,
                f = 0,
                l = n,
                l += 1; --l; )
                    e = n - l,
                    f += this.els[i][e] * d[e][o];
                r[i][o] = f
            }
        return d = new vt(r),
        c ? d.col(1) : d
    }
    ,
    vt.prototype.transpose = function() {
        var t, e, n, r = this.els.length, i = this.els[0].length, o = [], a = i;
        for (a += 1; --a; )
            for (o[t = i - a] = [],
            n = r,
            n += 1; --n; )
                e = r - n,
                o[t][e] = this.els[e][t];
        return new vt(o)
    }
    ,
    vt.prototype.toRightTriangular = function() {
        for (var t, e, n, r, i, o, a, s, l, u, h = this.dup(), f = this.els.length, c = f, d = this.els[0].length; --f; ) {
            if (e = c - f,
            0 === h.els[e][e])
                for (n = a = l = 1 + e; l <= c ? a < c : c < a; n = l <= c ? ++a : --a)
                    if (0 !== h.els[n][e]) {
                        for (t = [],
                        i = d,
                        i += 1; --i; )
                            o = d - i,
                            t.push(h.els[e][o] + h.els[n][o]);
                        h.els[e] = t;
                        break
                    }
            if (0 !== h.els[e][e])
                for (n = s = u = 1 + e; u <= c ? s < c : c < s; n = u <= c ? ++s : --s) {
                    for (r = h.els[n][e] / h.els[e][e],
                    t = [],
                    i = d,
                    i += 1; --i; )
                        o = d - i,
                        t.push(o <= e ? 0 : h.els[n][o] - h.els[e][o] * r);
                    h.els[n] = t
                }
        }
        return h
    }
    ,
    vt.prototype.augment = function(t) {
        var e, n, r, i, o, a, s, l, u = t.els || t;
        if (void 0 === u[0][0] && (u = new vt(u).els),
        n = (e = this.dup()).els[0].length,
        o = s = e.els.length,
        a = u[0].length,
        s !== u.length)
            return null;
        for (s += 1; --s; )
            for (r = o - s,
            l = a,
            l += 1; --l; )
                i = a - l,
                e.els[r][n + i] = u[r][i];
        return e
    }
    ,
    vt.prototype.inverse = function() {
        var t, e, n, r, i, o, a, s, l = this.els.length, u = l, h = this.augment(vt.I(l)).toRightTriangular(), f = h.els[0].length, c = [];
        for (l += 1; --l; ) {
            for (e = [],
            o = f,
            c[n = l - 1] = [],
            t = h.els[n][n],
            o += 1; --o; )
                a = f - o,
                i = h.els[n][a] / t,
                e.push(i),
                u <= a && c[n].push(i);
            for (h.els[n] = e,
            r = s = 0; 0 <= n ? s < n : n < s; r = 0 <= n ? ++s : --s) {
                for (e = [],
                o = f,
                o += 1; --o; )
                    a = f - o,
                    e.push(h.els[r][a] - h.els[n][a] * h.els[r][n]);
                h.els[r] = e
            }
        }
        return new vt(c)
    }
    ,
    vt.I = function(t) {
        var e, n, r, i = [], o = t;
        for (t += 1; --t; )
            for (i[e = o - t] = [],
            r = o,
            r += 1; --r; )
                n = o - r,
                i[e][n] = e == n ? 1 : 0;
        return new vt(i)
    }
    ,
    vt.prototype.decompose = function() {
        for (var t, e, n, r, i, o, a, s, l, u, h, f, c, d, p, m, g, y, b, v, w, x, M, S, _, k, C, A, T, R = [], E = [], H = [], q = [], X = [], F = b = 0; b <= 3; F = ++b)
            for (X[F] = [],
            t = v = 0; v <= 3; t = ++v)
                X[F][t] = this.els[F][t];
        if (0 === X[3][3])
            return !1;
        for (F = w = 0; w <= 3; F = ++w)
            for (t = x = 0; x <= 3; t = ++x)
                X[F][t] /= X[3][3];
        for (r = this.dup(),
        F = M = 0; M <= 2; F = ++M)
            r.els[F][3] = 0;
        if (r.els[3][3] = 1,
        0 !== X[0][3] || 0 !== X[1][3] || 0 !== X[2][3]) {
            for (o = new z(X.slice(0, 4)[3]),
            q = r.inverse().transpose().multiply(o).els,
            F = S = 0; S <= 2; F = ++S)
                X[F][3] = 0;
            X[3][3] = 1
        } else
            q = [0, 0, 0, 1];
        for (F = _ = 0; _ <= 2; F = ++_)
            R[F] = X[3][F],
            X[3][F] = 0;
        for (s = [],
        F = k = 0; k <= 2; F = ++k)
            s[F] = new z(X[F].slice(0, 3));
        if (E[0] = s[0].length(),
        s[0] = s[0].normalize(),
        H[0] = s[0].dot(s[1]),
        s[1] = s[1].combine(s[0], 1, -H[0]),
        E[1] = s[1].length(),
        s[1] = s[1].normalize(),
        H[0] /= E[1],
        H[1] = s[0].dot(s[2]),
        s[2] = s[2].combine(s[0], 1, -H[1]),
        H[2] = s[1].dot(s[2]),
        s[2] = s[2].combine(s[1], 1, -H[2]),
        E[2] = s[2].length(),
        s[2] = s[2].normalize(),
        H[1] /= E[2],
        H[2] /= E[2],
        n = s[1].cross(s[2]),
        s[0].dot(n) < 0)
            for (F = C = 0; C <= 2; F = ++C)
                for (E[F] *= -1,
                t = A = 0; A <= 2; t = ++A)
                    s[F].els[t] *= -1;
        for (c in l = function(t, e) {
            return s[t].els[e]
        }
        ,
        (a = [])[1] = Math.asin(-l(0, 2)),
        0 !== Math.cos(a[1]) ? (a[0] = Math.atan2(l(1, 2), l(2, 2)),
        a[2] = Math.atan2(l(0, 1), l(0, 0))) : (a[0] = Math.atan2(-l(2, 0), l(1, 1)),
        a[1] = 0),
        1e-4 < (h = l(0, 0) + l(1, 1) + l(2, 2) + 1) ? (p = .25 / (u = .5 / Math.sqrt(h)),
        m = (l(2, 1) - l(1, 2)) * u,
        g = (l(0, 2) - l(2, 0)) * u,
        y = (l(1, 0) - l(0, 1)) * u) : p = l(0, 0) > l(1, 1) && l(0, 0) > l(2, 2) ? (m = .25 * (u = 2 * Math.sqrt(1 + l(0, 0) - l(1, 1) - l(2, 2))),
        g = (l(0, 1) + l(1, 0)) / u,
        y = (l(0, 2) + l(2, 0)) / u,
        (l(2, 1) - l(1, 2)) / u) : l(1, 1) > l(2, 2) ? (u = 2 * Math.sqrt(1 + l(1, 1) - l(0, 0) - l(2, 2)),
        m = (l(0, 1) + l(1, 0)) / u,
        g = .25 * u,
        y = (l(1, 2) + l(2, 1)) / u,
        (l(0, 2) - l(2, 0)) / u) : (u = 2 * Math.sqrt(1 + l(2, 2) - l(0, 0) - l(1, 1)),
        m = (l(0, 2) + l(2, 0)) / u,
        g = (l(1, 2) + l(2, 1)) / u,
        y = .25 * u,
        (l(1, 0) - l(0, 1)) / u),
        T = [m, g, y, p],
        (i = new I).translate = R,
        i.scale = E,
        i.skew = H,
        i.quaternion = T,
        i.perspective = q,
        i.rotate = a,
        i)
            for (e in f = i[c])
                d = f[e],
                isNaN(d) && (f[e] = 0);
        return i
    }
    ,
    vt.prototype.toString = function() {
        for (var t, e, n, r = "matrix3d(", i = e = 0; e <= 3; i = ++e)
            for (t = n = 0; n <= 3; t = ++n)
                r += P(this.els[i][t], 10),
                3 === i && 3 === t || (r += ",");
        return r += ")"
    }
    ,
    vt.matrixForTransform = e(function(t) {
        var e, n, r, i, o, a = document.createElement("div");
        return a.style.position = "absolute",
        a.style.visibility = "hidden",
        a.style[j("transform")] = t,
        document.body.appendChild(a),
        e = null != (r = null != (i = (n = window.getComputedStyle(a, null)).transform) ? i : n[j("transform")]) ? r : null != (o = k.tests) ? o.matrixForTransform(t) : void 0,
        document.body.removeChild(a),
        e
    }),
    vt.fromTransform = function(t) {
        for (var e, n, r = null != t ? t.match(/matrix3?d?\(([-0-9,e \.]*)\)/) : void 0, i = r ? 6 === (e = (e = r[1].split(",")).map(parseFloat)).length ? [e[0], e[1], 0, 0, e[2], e[3], 0, 0, 0, 0, 1, 0, e[4], e[5], 0, 1] : e : [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], o = [], a = n = 0; n <= 3; a = ++n)
            o.push(i.slice(4 * a, 4 * a + 4));
        return new vt(o)
    }
    ,
    g = vt,
    L = e(function(t) {
        var e, n, r, i, o, a, s, l, u, h;
        if (void 0 !== document.body.style[t])
            return "";
        for (o = "",
        a = 0,
        l = (i = t.split("-")).length; a < l; a++)
            o += (r = i[a]).substring(0, 1).toUpperCase() + r.substring(1);
        for (s = 0,
        u = (h = ["Webkit", "Moz", "ms"]).length; s < u; s++)
            if (e = (n = h[s]) + o,
            void 0 !== document.body.style[e])
                return n;
        return ""
    }),
    j = e(function(t) {
        var e = L(t);
        return "Moz" === e ? "" + e + (t.substring(0, 1).toUpperCase() + t.substring(1)) : "" !== e ? "-" + e.toLowerCase() + "-" + tt(t) : tt(t)
    }),
    O = "undefined" != typeof window && null !== window ? window.requestAnimationFrame : void 0,
    y = [],
    V = !(b = []),
    B = 1,
    "undefined" != typeof window && null !== window && window.addEventListener("keyup", function(t) {
        if (68 === t.keyCode && t.shiftKey && t.ctrlKey)
            return k.toggleSlow()
    }),
    null == O && (E = 0,
    O = function(t) {
        var e = Date.now()
          , n = Math.max(0, 16 - (e - E))
          , r = window.setTimeout(function() {
            return t(e + n)
        }, n);
        return E = e + n,
        r
    }
    ),
    N = G = !1,
    $ = function() {
        if (!G)
            return G = !0,
            O(W)
    }
    ,
    W = function(t) {
        var e, n, r, i;
        if (!N) {
            for (n = [],
            r = 0,
            i = y.length; r < i; r++)
                e = y[r],
                l(t, e) || n.push(e);
            return 0 === (y = y.filter(function(t) {
                return -1 === n.indexOf(t)
            })).length ? G = !1 : O(W)
        }
        O(W)
    }
    ,
    l = function(t, e) {
        var n, r, i, o, a, s, l, u;
        if (null == e.tStart && (e.tStart = t),
        o = (t - e.tStart) / e.options.duration,
        a = e.curve(o),
        r = {},
        1 <= o)
            r = e.curve.returnsToSelf ? e.properties.start : e.properties.end;
        else
            for (n in u = e.properties.start)
                i = u[n],
                r[n] = A(i, e.properties.end[n], a);
        return f(e.el, r),
        "function" == typeof (s = e.options).change && s.change(e.el),
        1 <= o && "function" == typeof (l = e.options).complete && l.complete(e.el),
        o < 1
    }
    ,
    A = function(t, e, n) {
        return null != t && null != t.interpolate ? t.interpolate(e, n) : null
    }
    ,
    Z = function(t, e, n, r) {
        var i, o, a, s, l, u, h, f;
        if (null != r && (b = b.filter(function(t) {
            return t.id !== r
        })),
        k.stop(t, {
            timeout: !1
        }),
        !n.animated)
            return k.css(t, e),
            void ("function" == typeof n.complete && n.complete(this));
        for (s in e = F(e),
        u = C(t, Object.keys(e)),
        i = {},
        h = [],
        e)
            f = e[s],
            null != t.style && et.contains(s) ? h.push([s, f]) : ((o = M(f))instanceof d && null != t.style && (o = new p([o, rt(s, 0)])),
            i[s] = o);
        return 0 < h.length && ((a = R(t)) ? (l = new m).applyProperties(h) : (f = h.map(function(t) {
            return nt(t[0], t[1])
        }).join(" "),
        l = g.fromTransform(g.matrixForTransform(f))),
        i.transform = l.decompose(),
        a && u.transform.applyRotateCenter([i.transform.props.rotate[1], i.transform.props.rotate[2]])),
        y.push({
            el: t,
            properties: {
                start: u,
                end: i
            },
            options: n,
            curve: n.type.call(n.type, n)
        }),
        $()
    }
    ,
    Q = [],
    J = 0,
    D = function(t) {
        if (T())
            return t.realTimeoutId = setTimeout(function() {
                return t.fn(),
                i(t.id)
            }, t.delay)
    }
    ,
    r = function(t, e) {
        var n = {
            id: J += 1,
            tStart: Date.now(),
            fn: t,
            delay: e,
            originalDelay: e
        };
        return D(n),
        Q.push(n),
        J
    }
    ,
    i = function(e) {
        return Q = Q.filter(function(t) {
            return t.id === e && clearTimeout(t.realTimeoutId),
            t.id !== e
        })
    }
    ,
    H = function(t, e) {
        var n;
        return null != t ? (n = t - e.tStart,
        e.originalDelay - n) : e.originalDelay
    }
    ,
    "undefined" != typeof window && null !== window && window.addEventListener("unload", function() {}),
    K = null,
    X(function(t) {
        var e, n, r, i, o, a, s, l, u, h;
        if (N = !t,
        t) {
            if (G)
                for (n = Date.now() - K,
                o = 0,
                l = y.length; o < l; o++)
                    null != (e = y[o]).tStart && (e.tStart += n);
            for (a = 0,
            u = Q.length; a < u; a++)
                (r = Q[a]).delay = H(K, r),
                D(r);
            return K = null
        }
        for (K = Date.now(),
        h = [],
        i = 0,
        s = Q.length; i < s; i++)
            r = Q[i],
            h.push(clearTimeout(r.realTimeoutId));
        return h
    }),
    (k = {
        linear: function() {
            return function(t) {
                return t
            }
        },
        spring: function(r) {
            var u, h, f, e, c;
            return null == r && (r = {}),
            v(r, k.spring.defaults),
            f = Math.max(1, r.frequency / 20),
            e = Math.pow(20, r.friction / 100),
            c = r.anticipationSize / 1e3,
            Math.max(0, c),
            u = function(t) {
                var e = c / (1 - c)
                  , n = e / e;
                return (.8 - n) / e * t * r.anticipationStrength / 100 + n
            }
            ,
            h = function(t) {
                return Math.pow(e / 10, -t) * (1 - t)
            }
            ,
            function(t) {
                var e, n, r, i, o, a, s, l = t / (1 - c) - c / (1 - c);
                return t < c ? (s = c / (1 - c) - c / (1 - c),
                a = 0 / (1 - c) - c / (1 - c),
                o = Math.acos(1 / u(s)),
                r = (Math.acos(1 / u(a)) - o) / (f * -c),
                e = u) : (e = h,
                o = 0,
                r = 1),
                n = e(l),
                i = f * (t - c) * r + o,
                1 - n * Math.cos(i)
            }
        },
        bounce: function(t) {
            var r, e, i, n;
            return null == t && (t = {}),
            v(t, k.bounce.defaults),
            i = Math.max(1, t.frequency / 20),
            n = Math.pow(20, t.friction / 100),
            r = function(t) {
                return Math.pow(n / 10, -t) * (1 - t)
            }
            ,
            (e = function(t) {
                var e = r(t)
                  , n = i * t * 1 - 1.57;
                return e * Math.cos(n)
            }
            ).returnsToSelf = !0,
            e
        },
        gravity: function(a) {
            var s, i, o, l, t, r;
            return null == a && (a = {}),
            v(a, k.gravity.defaults),
            i = Math.min(a.bounciness / 1250, .8),
            l = a.elasticity / 1e3,
            o = [],
            s = function() {
                var t = Math.sqrt(.02)
                  , e = {
                    a: -t,
                    b: t,
                    H: 1
                };
                for (a.returnsToSelf && (e.a = 0,
                e.b = 2 * e.b); .001 < e.H; )
                    s = e.b - e.a,
                    e = {
                        a: e.b,
                        b: e.b + s * i,
                        H: e.H * i * i
                    };
                return e.b
            }(),
            r = function(t, e, n, r) {
                var i, o = (i = 2 / (s = e - t) * r - 1 - 2 * t / s) * i * n - n + 1;
                return a.returnsToSelf && (o = 1 - o),
                o
            }
            ,
            function() {
                var t, e, n = Math.sqrt(2 / (100 * s * s)), r = {
                    a: -n,
                    b: n,
                    H: 1
                };
                for (a.returnsToSelf && (r.a = 0,
                r.b = 2 * r.b),
                o.push(r),
                t = s,
                e = []; r.b < 1 && .001 < r.H; )
                    t = r.b - r.a,
                    r = {
                        a: r.b,
                        b: r.b + t * i,
                        H: r.H * l
                    },
                    e.push(o.push(r))
            }(),
            (t = function(t) {
                for (var e = 0, n = o[e]; !(t >= n.a && t <= n.b) && (n = o[e += 1]); )
                    ;
                return n ? r(n.a, n.b, n.H, t) : a.returnsToSelf ? 0 : 1
            }
            ).returnsToSelf = a.returnsToSelf,
            t
        },
        forceWithGravity: function(t) {
            return null == t && (t = {}),
            v(t, k.forceWithGravity.defaults),
            t.returnsToSelf = !0,
            k.gravity(t)
        }
    }).bezier = (ot = function(t, e, n, r, i) {
        return Math.pow(1 - t, 3) * e + 3 * Math.pow(1 - t, 2) * t * n + 3 * (1 - t) * Math.pow(t, 2) * r + Math.pow(t, 3) * i
    }
    ,
    at = function(t, e, n, r, i) {
        return {
            x: ot(t, e.x, n.x, r.x, i.x),
            y: ot(t, e.y, n.y, r.y, i.y)
        }
    }
    ,
    st = function(t, e, n) {
        for (var r, i, o, a, s, l, u = null, h = 0, f = e.length; h < f && (t >= (r = e[h])(0).x && t <= r(1).x && (u = r),
        null === u); h++)
            ;
        if (!u)
            return n ? 0 : 1;
        for (l = u(a = ((s = 1) + (o = 0)) / 2).x,
        i = 0; 1e-4 < Math.abs(t - l) && i < 100; )
            l < t ? o = a : s = a,
            l = u(a = (s + o) / 2).x,
            i += 1;
        return u(a).y
    }
    ,
    function(t) {
        var r, e, i;
        return null == t && (t = {}),
        i = t.points,
        r = function() {
            var t, e, n;
            for (t in r = [],
            n = function(e, n) {
                var t = function(t) {
                    return at(t, e, e.cp[e.cp.length - 1], n.cp[0], n)
                };
                return r.push(t)
            }
            ,
            i) {
                if ((e = parseInt(t)) >= i.length - 1)
                    break;
                n(i[e], i[e + 1])
            }
            return r
        }(),
        (e = function(t) {
            return 0 === t ? 0 : 1 === t ? 1 : st(t, r, this.returnsToSelf)
        }
        ).returnsToSelf = 0 === i[i.length - 1].y,
        e
    }
    ),
    k.easeInOut = function(t) {
        var e, n;
        return null == t && (t = {}),
        e = null != (n = t.friction) ? n : k.easeInOut.defaults.friction,
        k.bezier({
            points: [{
                x: 0,
                y: 0,
                cp: [{
                    x: .92 - e / 1e3,
                    y: 0
                }]
            }, {
                x: 1,
                y: 1,
                cp: [{
                    x: .08 + e / 1e3,
                    y: 1
                }]
            }]
        })
    }
    ,
    k.easeIn = function(t) {
        var e, n;
        return null == t && (t = {}),
        e = null != (n = t.friction) ? n : k.easeIn.defaults.friction,
        k.bezier({
            points: [{
                x: 0,
                y: 0,
                cp: [{
                    x: .92 - e / 1e3,
                    y: 0
                }]
            }, {
                x: 1,
                y: 1,
                cp: [{
                    x: 1,
                    y: 1
                }]
            }]
        })
    }
    ,
    k.easeOut = function(t) {
        var e, n;
        return null == t && (t = {}),
        e = null != (n = t.friction) ? n : k.easeOut.defaults.friction,
        k.bezier({
            points: [{
                x: 0,
                y: 0,
                cp: [{
                    x: 0,
                    y: 0
                }]
            }, {
                x: 1,
                y: 1,
                cp: [{
                    x: .08 + e / 1e3,
                    y: 1
                }]
            }]
        })
    }
    ,
    k.spring.defaults = {
        frequency: 300,
        friction: 200,
        anticipationSize: 0,
        anticipationStrength: 0
    },
    k.bounce.defaults = {
        frequency: 300,
        friction: 200
    },
    k.forceWithGravity.defaults = k.gravity.defaults = {
        bounciness: 400,
        elasticity: 200
    },
    k.easeInOut.defaults = k.easeIn.defaults = k.easeOut.defaults = {
        friction: 500
    },
    k.css = q(function(t, e) {
        return u(t, e, !0)
    }),
    k.animate = q(function(t, e, n) {
        var r;
        return null == n && (n = {}),
        n = x(n),
        v(n, {
            type: k.easeInOut,
            duration: 1e3,
            delay: 0,
            animated: !0
        }),
        n.duration = Math.max(0, n.duration * B),
        n.delay = Math.max(0, n.delay),
        0 === n.delay ? Z(t, e, n) : (r = k.setTimeout(function() {
            return Z(t, e, n, r)
        }, n.delay),
        b.push({
            id: r,
            el: t
        }))
    }),
    k.stop = q(function(e, n) {
        return null == n && (n = {}),
        null == n.timeout && (n.timeout = !0),
        n.timeout && (b = b.filter(function(t) {
            return t.el !== e || null != n.filter && !n.filter(t) || (k.clearTimeout(t.id),
            !1)
        })),
        y = y.filter(function(t) {
            return t.el !== e
        })
    }),
    k.setTimeout = function(t, e) {
        return r(t, e * B)
    }
    ,
    k.clearTimeout = function(t) {
        return i(t)
    }
    ,
    k.toggleSlow = function() {
        return B = (V = !V) ? 3 : 1,
        "undefined" != typeof console && null !== console && "function" == typeof console.log ? console.log("dynamics.js: slow animations " + (V ? "enabled" : "disabled")) : void 0
    }
    ,
    "object" == typeof module && "object" == typeof module.exports ? module.exports = k : "function" == typeof define ? define("dynamics", function() {
        return k
    }) : window.dynamics = k
}
).call(this),
function(u) {
    var o = /^\s+/
      , a = /\s+$/
      , r = 0
      , s = u.round
      , h = u.min
      , f = u.max
      , t = u.random;
    function c(t, e) {
        if (e = e || {},
        (t = t || "")instanceof c)
            return t;
        if (!(this instanceof c))
            return new c(t,e);
        var n = function(t) {
            var e = {
                r: 0,
                g: 0,
                b: 0
            }
              , n = 1
              , r = !1
              , i = !1;
            "string" == typeof t && (t = function(t) {
                t = t.replace(o, "").replace(a, "").toLowerCase();
                var e, n = !1;
                if (C[t])
                    t = C[t],
                    n = !0;
                else if ("transparent" == t)
                    return {
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 0,
                        format: "name"
                    };
                if (e = L.rgb.exec(t))
                    return {
                        r: e[1],
                        g: e[2],
                        b: e[3]
                    };
                if (e = L.rgba.exec(t))
                    return {
                        r: e[1],
                        g: e[2],
                        b: e[3],
                        a: e[4]
                    };
                if (e = L.hsl.exec(t))
                    return {
                        h: e[1],
                        s: e[2],
                        l: e[3]
                    };
                if (e = L.hsla.exec(t))
                    return {
                        h: e[1],
                        s: e[2],
                        l: e[3],
                        a: e[4]
                    };
                if (e = L.hsv.exec(t))
                    return {
                        h: e[1],
                        s: e[2],
                        v: e[3]
                    };
                if (e = L.hsva.exec(t))
                    return {
                        h: e[1],
                        s: e[2],
                        v: e[3],
                        a: e[4]
                    };
                if (e = L.hex8.exec(t))
                    return {
                        a: function(t) {
                            return H(t) / 255
                        }(e[1]),
                        r: H(e[2]),
                        g: H(e[3]),
                        b: H(e[4]),
                        format: n ? "name" : "hex8"
                    };
                if (e = L.hex6.exec(t))
                    return {
                        r: H(e[1]),
                        g: H(e[2]),
                        b: H(e[3]),
                        format: n ? "name" : "hex"
                    };
                if (e = L.hex3.exec(t))
                    return {
                        r: H(e[1] + "" + e[1]),
                        g: H(e[2] + "" + e[2]),
                        b: H(e[3] + "" + e[3]),
                        format: n ? "name" : "hex"
                    };
                return !1
            }(t));
            "object" == typeof t && (j(t.r) && j(t.g) && j(t.b) ? (e = function(t, e, n) {
                return {
                    r: 255 * R(t, 255),
                    g: 255 * R(e, 255),
                    b: 255 * R(n, 255)
                }
            }(t.r, t.g, t.b),
            r = !0,
            i = "%" === String(t.r).substr(-1) ? "prgb" : "rgb") : j(t.h) && j(t.s) && j(t.v) ? (t.s = X(t.s),
            t.v = X(t.v),
            e = function(t, e, n) {
                t = 6 * R(t, 360),
                e = R(e, 100),
                n = R(n, 100);
                var r = u.floor(t)
                  , i = t - r
                  , o = n * (1 - e)
                  , a = n * (1 - i * e)
                  , s = n * (1 - (1 - i) * e)
                  , l = r % 6;
                return {
                    r: 255 * [n, a, o, o, s, n][l],
                    g: 255 * [s, n, n, a, o, o][l],
                    b: 255 * [o, o, s, n, n, a][l]
                }
            }(t.h, t.s, t.v),
            r = !0,
            i = "hsv") : j(t.h) && j(t.s) && j(t.l) && (t.s = X(t.s),
            t.l = X(t.l),
            e = function(t, e, n) {
                var r, i, o;
                function a(t, e, n) {
                    return n < 0 && (n += 1),
                    1 < n && --n,
                    n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
                }
                {
                    var s, l;
                    t = R(t, 360),
                    e = R(e, 100),
                    n = R(n, 100),
                    0 === e ? r = i = o = n : (r = a(l = 2 * n - (s = n < .5 ? n * (1 + e) : n + e - n * e), s, t + 1 / 3),
                    i = a(l, s, t),
                    o = a(l, s, t - 1 / 3))
                }
                return {
                    r: 255 * r,
                    g: 255 * i,
                    b: 255 * o
                }
            }(t.h, t.s, t.l),
            r = !0,
            i = "hsl"),
            t.hasOwnProperty("a") && (n = t.a));
            return n = T(n),
            {
                ok: r,
                format: t.format || i,
                r: h(255, f(e.r, 0)),
                g: h(255, f(e.g, 0)),
                b: h(255, f(e.b, 0)),
                a: n
            }
        }(t);
        this._originalInput = t,
        this._r = n.r,
        this._g = n.g,
        this._b = n.b,
        this._a = n.a,
        this._roundA = s(100 * this._a) / 100,
        this._format = e.format || n.format,
        this._gradientType = e.gradientType,
        this._r < 1 && (this._r = s(this._r)),
        this._g < 1 && (this._g = s(this._g)),
        this._b < 1 && (this._b = s(this._b)),
        this._ok = n.ok,
        this._tc_id = r++
    }
    function i(t, e, n) {
        t = R(t, 255),
        e = R(e, 255),
        n = R(n, 255);
        var r, i = f(t, e, n), o = h(t, e, n), a = (i + o) / 2;
        if (i == o)
            r = l = 0;
        else {
            var s = i - o
              , l = .5 < a ? s / (2 - i - o) : s / (i + o);
            switch (i) {
            case t:
                r = (e - n) / s + (e < n ? 6 : 0);
                break;
            case e:
                r = (n - t) / s + 2;
                break;
            case n:
                r = (t - e) / s + 4
            }
            r /= 6
        }
        return {
            h: r,
            s: l,
            l: a
        }
    }
    function l(t, e, n) {
        t = R(t, 255),
        e = R(e, 255),
        n = R(n, 255);
        var r, i = f(t, e, n), o = h(t, e, n), a = i, s = i - o, l = 0 === i ? 0 : s / i;
        if (i == o)
            r = 0;
        else {
            switch (i) {
            case t:
                r = (e - n) / s + (e < n ? 6 : 0);
                break;
            case e:
                r = (n - t) / s + 2;
                break;
            case n:
                r = (t - e) / s + 4
            }
            r /= 6
        }
        return {
            h: r,
            s: l,
            v: a
        }
    }
    function e(t, e, n, r) {
        var i = [q(s(t).toString(16)), q(s(e).toString(16)), q(s(n).toString(16))];
        return r && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("")
    }
    function d(t, e, n, r) {
        var i;
        return [q((i = r,
        u.round(255 * parseFloat(i)).toString(16))), q(s(t).toString(16)), q(s(e).toString(16)), q(s(n).toString(16))].join("")
    }
    function n(t, e) {
        e = 0 === e ? 0 : e || 10;
        var n = c(t).toHsl();
        return n.s -= e / 100,
        n.s = E(n.s),
        c(n)
    }
    function p(t, e) {
        e = 0 === e ? 0 : e || 10;
        var n = c(t).toHsl();
        return n.s += e / 100,
        n.s = E(n.s),
        c(n)
    }
    function m(t) {
        return c(t).desaturate(100)
    }
    function g(t, e) {
        e = 0 === e ? 0 : e || 10;
        var n = c(t).toHsl();
        return n.l += e / 100,
        n.l = E(n.l),
        c(n)
    }
    function y(t, e) {
        e = 0 === e ? 0 : e || 10;
        var n = c(t).toRgb();
        return n.r = f(0, h(255, n.r - s(-e / 100 * 255))),
        n.g = f(0, h(255, n.g - s(-e / 100 * 255))),
        n.b = f(0, h(255, n.b - s(-e / 100 * 255))),
        c(n)
    }
    function b(t, e) {
        e = 0 === e ? 0 : e || 10;
        var n = c(t).toHsl();
        return n.l -= e / 100,
        n.l = E(n.l),
        c(n)
    }
    function v(t, e) {
        var n = c(t).toHsl()
          , r = (n.h + e) % 360;
        return n.h = r < 0 ? 360 + r : r,
        c(n)
    }
    function w(t) {
        var e = c(t).toHsl();
        return e.h = (e.h + 180) % 360,
        c(e)
    }
    function x(t) {
        var e = c(t).toHsl()
          , n = e.h;
        return [c(t), c({
            h: (n + 120) % 360,
            s: e.s,
            l: e.l
        }), c({
            h: (n + 240) % 360,
            s: e.s,
            l: e.l
        })]
    }
    function M(t) {
        var e = c(t).toHsl()
          , n = e.h;
        return [c(t), c({
            h: (n + 90) % 360,
            s: e.s,
            l: e.l
        }), c({
            h: (n + 180) % 360,
            s: e.s,
            l: e.l
        }), c({
            h: (n + 270) % 360,
            s: e.s,
            l: e.l
        })]
    }
    function S(t) {
        var e = c(t).toHsl()
          , n = e.h;
        return [c(t), c({
            h: (n + 72) % 360,
            s: e.s,
            l: e.l
        }), c({
            h: (n + 216) % 360,
            s: e.s,
            l: e.l
        })]
    }
    function _(t, e, n) {
        e = e || 6,
        n = n || 30;
        var r = c(t).toHsl()
          , i = 360 / n
          , o = [c(t)];
        for (r.h = (r.h - (i * e >> 1) + 720) % 360; --e; )
            r.h = (r.h + i) % 360,
            o.push(c(r));
        return o
    }
    function k(t, e) {
        e = e || 6;
        for (var n = c(t).toHsv(), r = n.h, i = n.s, o = n.v, a = [], s = 1 / e; e--; )
            a.push(c({
                h: r,
                s: i,
                v: o
            })),
            o = (o + s) % 1;
        return a
    }
    c.prototype = {
        isDark: function() {
            return this.getBrightness() < 128
        },
        isLight: function() {
            return !this.isDark()
        },
        isValid: function() {
            return this._ok
        },
        getOriginalInput: function() {
            return this._originalInput
        },
        getFormat: function() {
            return this._format
        },
        getAlpha: function() {
            return this._a
        },
        getBrightness: function() {
            var t = this.toRgb();
            return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3
        },
        getLuminance: function() {
            var t = this.toRgb()
              , e = t.r / 255
              , n = t.g / 255
              , r = t.b / 255
              , i = e <= .03928 ? e / 12.92 : u.pow((.055 + e) / 1.055, 2.4)
              , o = n <= .03928 ? n / 12.92 : u.pow((.055 + n) / 1.055, 2.4)
              , a = r <= .03928 ? r / 12.92 : u.pow((.055 + r) / 1.055, 2.4);
            return .2126 * i + .7152 * o + .0722 * a
        },
        setAlpha: function(t) {
            return this._a = T(t),
            this._roundA = s(100 * this._a) / 100,
            this
        },
        toHsv: function() {
            var t = l(this._r, this._g, this._b);
            return {
                h: 360 * t.h,
                s: t.s,
                v: t.v,
                a: this._a
            }
        },
        toHsvString: function() {
            var t = l(this._r, this._g, this._b)
              , e = s(360 * t.h)
              , n = s(100 * t.s)
              , r = s(100 * t.v);
            return 1 == this._a ? "hsv(" + e + ", " + n + "%, " + r + "%)" : "hsva(" + e + ", " + n + "%, " + r + "%, " + this._roundA + ")"
        },
        toHsl: function() {
            var t = i(this._r, this._g, this._b);
            return {
                h: 360 * t.h,
                s: t.s,
                l: t.l,
                a: this._a
            }
        },
        toHslString: function() {
            var t = i(this._r, this._g, this._b)
              , e = s(360 * t.h)
              , n = s(100 * t.s)
              , r = s(100 * t.l);
            return 1 == this._a ? "hsl(" + e + ", " + n + "%, " + r + "%)" : "hsla(" + e + ", " + n + "%, " + r + "%, " + this._roundA + ")"
        },
        toHex: function(t) {
            return e(this._r, this._g, this._b, t)
        },
        toHexString: function(t) {
            return "#" + this.toHex(t)
        },
        toHex8: function() {
            return d(this._r, this._g, this._b, this._a)
        },
        toHex8String: function() {
            return "#" + this.toHex8()
        },
        toRgb: function() {
            return {
                r: s(this._r),
                g: s(this._g),
                b: s(this._b),
                a: this._a
            }
        },
        toRgbString: function() {
            return 1 == this._a ? "rgb(" + s(this._r) + ", " + s(this._g) + ", " + s(this._b) + ")" : "rgba(" + s(this._r) + ", " + s(this._g) + ", " + s(this._b) + ", " + this._roundA + ")"
        },
        toPercentageRgb: function() {
            return {
                r: s(100 * R(this._r, 255)) + "%",
                g: s(100 * R(this._g, 255)) + "%",
                b: s(100 * R(this._b, 255)) + "%",
                a: this._a
            }
        },
        toPercentageRgbString: function() {
            return 1 == this._a ? "rgb(" + s(100 * R(this._r, 255)) + "%, " + s(100 * R(this._g, 255)) + "%, " + s(100 * R(this._b, 255)) + "%)" : "rgba(" + s(100 * R(this._r, 255)) + "%, " + s(100 * R(this._g, 255)) + "%, " + s(100 * R(this._b, 255)) + "%, " + this._roundA + ")"
        },
        toName: function() {
            return 0 === this._a ? "transparent" : !(this._a < 1) && A[e(this._r, this._g, this._b, !0)] || !1
        },
        toFilter: function(t) {
            var e = "#" + d(this._r, this._g, this._b, this._a)
              , n = e
              , r = this._gradientType ? "GradientType = 1, " : "";
            return t && (n = c(t).toHex8String()),
            "progid:DXImageTransform.Microsoft.gradient(" + r + "startColorstr=" + e + ",endColorstr=" + n + ")"
        },
        toString: function(t) {
            var e = !!t;
            t = t || this._format;
            var n = !1
              , r = this._a < 1 && 0 <= this._a;
            return e || !r || "hex" !== t && "hex6" !== t && "hex3" !== t && "name" !== t ? ("rgb" === t && (n = this.toRgbString()),
            "prgb" === t && (n = this.toPercentageRgbString()),
            "hex" !== t && "hex6" !== t || (n = this.toHexString()),
            "hex3" === t && (n = this.toHexString(!0)),
            "hex8" === t && (n = this.toHex8String()),
            "name" === t && (n = this.toName()),
            "hsl" === t && (n = this.toHslString()),
            "hsv" === t && (n = this.toHsvString()),
            n || this.toHexString()) : "name" === t && 0 === this._a ? this.toName() : this.toRgbString()
        },
        clone: function() {
            return c(this.toString())
        },
        _applyModification: function(t, e) {
            var n = t.apply(null, [this].concat([].slice.call(e)));
            return this._r = n._r,
            this._g = n._g,
            this._b = n._b,
            this.setAlpha(n._a),
            this
        },
        lighten: function() {
            return this._applyModification(g, arguments)
        },
        brighten: function() {
            return this._applyModification(y, arguments)
        },
        darken: function() {
            return this._applyModification(b, arguments)
        },
        desaturate: function() {
            return this._applyModification(n, arguments)
        },
        saturate: function() {
            return this._applyModification(p, arguments)
        },
        greyscale: function() {
            return this._applyModification(m, arguments)
        },
        spin: function() {
            return this._applyModification(v, arguments)
        },
        _applyCombination: function(t, e) {
            return t.apply(null, [this].concat([].slice.call(e)))
        },
        analogous: function() {
            return this._applyCombination(_, arguments)
        },
        complement: function() {
            return this._applyCombination(w, arguments)
        },
        monochromatic: function() {
            return this._applyCombination(k, arguments)
        },
        splitcomplement: function() {
            return this._applyCombination(S, arguments)
        },
        triad: function() {
            return this._applyCombination(x, arguments)
        },
        tetrad: function() {
            return this._applyCombination(M, arguments)
        }
    },
    c.fromRatio = function(t, e) {
        if ("object" == typeof t) {
            var n = {};
            for (var r in t)
                t.hasOwnProperty(r) && (n[r] = "a" === r ? t[r] : X(t[r]));
            t = n
        }
        return c(t, e)
    }
    ,
    c.equals = function(t, e) {
        return !(!t || !e) && c(t).toRgbString() == c(e).toRgbString()
    }
    ,
    c.random = function() {
        return c.fromRatio({
            r: t(),
            g: t(),
            b: t()
        })
    }
    ,
    c.mix = function(t, e, n) {
        n = 0 === n ? 0 : n || 50;
        var r = c(t).toRgb()
          , i = c(e).toRgb()
          , o = n / 100
          , a = 2 * o - 1
          , s = i.a - r.a
          , l = a * s == -1 ? a : (a + s) / (1 + a * s)
          , u = 1 - (l = (l + 1) / 2);
        return c({
            r: i.r * l + r.r * u,
            g: i.g * l + r.g * u,
            b: i.b * l + r.b * u,
            a: i.a * o + r.a * (1 - o)
        })
    }
    ,
    c.readability = function(t, e) {
        var n = c(t)
          , r = c(e);
        return (u.max(n.getLuminance(), r.getLuminance()) + .05) / (u.min(n.getLuminance(), r.getLuminance()) + .05)
    }
    ,
    c.isReadable = function(t, e, n) {
        var r = c.readability(t, e)
          , i = !1
          , o = function(t) {
            var e, n;
            e = ((t = t || {
                level: "AA",
                size: "small"
            }).level || "AA").toUpperCase(),
            n = (t.size || "small").toLowerCase(),
            "AA" !== e && "AAA" !== e && (e = "AA");
            "small" !== n && "large" !== n && (n = "small");
            return {
                level: e,
                size: n
            }
        }(n);
        switch (o.level + o.size) {
        case "AAsmall":
        case "AAAlarge":
            i = 4.5 <= r;
            break;
        case "AAlarge":
            i = 3 <= r;
            break;
        case "AAAsmall":
            i = 7 <= r
        }
        return i
    }
    ,
    c.mostReadable = function(t, e, n) {
        for (var r, i = null, o = 0, a = (n = n || {}).includeFallbackColors, s = n.level, l = n.size, u = 0; u < e.length; u++)
            o < (r = c.readability(t, e[u])) && (o = r,
            i = c(e[u]));
        return c.isReadable(t, i, {
            level: s,
            size: l
        }) || !a ? i : (n.includeFallbackColors = !1,
        c.mostReadable(t, ["#fff", "#000"], n))
    }
    ;
    var C = c.names = {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "0ff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000",
        blanchedalmond: "ffebcd",
        blue: "00f",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        burntsienna: "ea7e5d",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "0ff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgreen: "006400",
        darkgrey: "a9a9a9",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkslategrey: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dimgrey: "696969",
        dodgerblue: "1e90ff",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "f0f",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        green: "008000",
        greenyellow: "adff2f",
        grey: "808080",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgray: "d3d3d3",
        lightgreen: "90ee90",
        lightgrey: "d3d3d3",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslategray: "789",
        lightslategrey: "789",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "0f0",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "f0f",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370db",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "db7093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        rebeccapurple: "663399",
        red: "f00",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        slategrey: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        wheat: "f5deb3",
        white: "fff",
        whitesmoke: "f5f5f5",
        yellow: "ff0",
        yellowgreen: "9acd32"
    }
      , A = c.hexNames = function(t) {
        var e = {};
        for (var n in t)
            t.hasOwnProperty(n) && (e[t[n]] = n);
        return e
    }(C);
    function T(t) {
        return t = parseFloat(t),
        (isNaN(t) || t < 0 || 1 < t) && (t = 1),
        t
    }
    function R(t, e) {
        var n;
        "string" == typeof (n = t) && -1 != n.indexOf(".") && 1 === parseFloat(n) && (t = "100%");
        var r, i = "string" == typeof (r = t) && -1 != r.indexOf("%");
        return t = h(e, f(0, parseFloat(t))),
        i && (t = parseInt(t * e, 10) / 100),
        u.abs(t - e) < 1e-6 ? 1 : t % e / parseFloat(e)
    }
    function E(t) {
        return h(1, f(0, t))
    }
    function H(t) {
        return parseInt(t, 16)
    }
    function q(t) {
        return 1 == t.length ? "0" + t : "" + t
    }
    function X(t) {
        return t <= 1 && (t = 100 * t + "%"),
        t
    }
    var F, I, z, L = (I = "[\\s|\\(]+(" + (F = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + F + ")[,|\\s]+(" + F + ")\\s*\\)?",
    z = "[\\s|\\(]+(" + F + ")[,|\\s]+(" + F + ")[,|\\s]+(" + F + ")[,|\\s]+(" + F + ")\\s*\\)?",
    {
        CSS_UNIT: new RegExp(F),
        rgb: new RegExp("rgb" + I),
        rgba: new RegExp("rgba" + z),
        hsl: new RegExp("hsl" + I),
        hsla: new RegExp("hsla" + z),
        hsv: new RegExp("hsv" + I),
        hsva: new RegExp("hsva" + z),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    });
    function j(t) {
        return L.CSS_UNIT.exec(t)
    }
    "undefined" != typeof module && module.exports ? module.exports = c : "function" == typeof define && define.amd ? define(function() {
        return c
    }) : window.tinycolor = c
}(Math);
var pageEl = document.querySelector("#page")
  , introEl = document.querySelector("#intro")
  , stripesEl = document.querySelector("#stripes")
  , logoContainer = document.querySelector("#logo-container")
  , logo = logoContainer.querySelector("svg")
  , logoPath = logo.querySelector("path")
  , windowWidth = document.body.clientWidth
  , windowHeight = document.body.clientHeight;
function _animateStripes(l) {
    var u = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
    u.count = u.count || 10,
    u.sizeRatio = u.sizeRatio || 1;
    for (var h = [], t = 0; t < u.count; t++)
        !function(e) {
            var t = void 0
              , t = u.color ? u.color : tinycolor("hsl(" + Math.round(360 * Math.random()) + ", 80%, 65%)").toRgbString()
              , n = Math.max(windowWidth, 1e3)
              , r = Math.round(n / 10 + Math.random() * n / 10) * u.sizeRatio
              , i = Math.round(10 * Math.random() + 2) * u.sizeRatio
              , o = void 0
              , a = {
                x: (o = u.point ? {
                    x: Math.round(u.point.x - r / 2 + 200 * Math.random() - 100),
                    y: Math.round(u.point.y - i / 2 + 50 * Math.random() - 25)
                } : {
                    x: Math.round((windowWidth + r) * Math.random() - r),
                    y: Math.round(windowHeight * Math.random())
                }).x,
                y: o.y,
                width: r,
                height: i,
                color: t
            }
              , s = createLine(a);
            s.style.display = "none",
            l.appendChild(s),
            dynamics.setTimeout(function() {
                s.style.display = "block",
                dynamics.setTimeout(function() {
                    a.x += 100 * Math.random() - 50,
                    a.y += 20 * Math.random() - 10,
                    s.setAttribute("x", a.x),
                    s.setAttribute("y", a.y);
                    var t = u.transform({
                        width: a.width,
                        height: a.height
                    });
                    s.setAttribute("width", t.width),
                    s.setAttribute("height", t.height),
                    dynamics.setTimeout(function() {
                        l.removeChild(s)
                    }, u.delay("hide", e))
                }, u.delay("transform", e))
            }, u.delay("show", e)),
            h.push(s)
        }(t);
    return h
}
function animateBlackStripes(t) {
    var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
    n.sizeRatio = 3,
    n.color = "#101214",
    n.delay = function(t, e) {
        return "show" === t ? n.delayShow ? 50 * Math.random() : 0 : "transform" === t ? 20 * Math.random() + 2 * e : "hide" === t ? 100 : void 0
    }
    ,
    n.transform = function(t) {
        return {
            width: t.width / 2,
            height: t.height / 5
        }
    }
    ,
    _animateStripes(t, n)
}
function animateColoredStripes(t) {
    var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
    e.delay = function(t, e) {
        return "show" === t ? 300 * Math.random() : "transform" === t ? 20 * Math.random() : "hide" === t ? 100 : void 0
    }
    ,
    e.transform = function(t) {
        return {
            width: t.width / 2,
            height: t.height / 5
        }
    }
    ,
    _animateStripes(t, e)
}
var totalMaskIdx = 0;
function createMasksWithStripes(t, e) {
    for (var n = arguments.length <= 2 || void 0 === arguments[2] ? 10 : arguments[2], r = [], i = 0; i < t; i++)
        r.push([]);
    for (var o = [], a = totalMaskIdx; a < totalMaskIdx + r.length; a++)
        o.push("clipPath" + a);
    totalMaskIdx += r.length;
    for (var s = 0, l = 0, u = 0, h = n; ; ) {
        var f = Math.max(10 * h, Math.round(Math.random() * e.width));
        if (r[s].push("\n      M " + l + "," + u + " L " + (l + f) + "," + u + " L " + (l + f) + "," + (u + h) + " L " + l + "," + (u + h) + " Z\n    "),
        (s += 1) >= r.length && (s = 0),
        (l += f) > e.width && (l = 0,
        u += h,
        h = Math.round(Math.random() * n + n / 2)),
        u >= e.height)
            break
    }
    return r.forEach(function(t, e) {
        var n = createSvgChildEl('<clipPath id="' + o[e] + '">\n      <path d="' + t.join(" ") + '" fill="white"></path>\n    </clipPath>');
        document.querySelector("#clip-paths g").appendChild(n)
    }),
    o
}
function cloneAndStripeElement(t, e, n) {
    var r = t.cloneNode(!0)
      , i = t.getBoundingClientRect()
      , o = n.getBoundingClientRect()
      , i = {
        top: i.top - o.top,
        left: i.left - o.left,
        width: i.width,
        height: i.height
    }
      , a = window.getComputedStyle(t);
    return dynamics.css(r, {
        position: "absolute",
        left: Math.round(i.left + window.scrollX),
        top: Math.round(i.top + window.scrollY),
        width: Math.ceil(i.width),
        height: Math.ceil(i.height),
        display: "none",
        pointerEvents: "none",
        background: "#101214",
        fontSize: a.fontSize,
        fontFamily: a.fontFamily,
        color: a.color,
        textDecoration: a.textDecoration
    }),
    n.appendChild(r),
    r.style["-webkit-clip-path"] = "url(/#" + e + ")",
    r.style["clip-path"] = "url(/#" + e + ")",
    r
}
var contentEls = []
  , originalContentEls = document.querySelectorAll("#header-content, #content");
function showContent() {
    for (var o = 0, t = 0; t < contentEls.length; t++)
        !function(t) {
            var e = contentEls[t]
              , n = 50 + Math.round(350 * Math.random())
              , r = {
                translateX: Math.round(40 * Math.random() - 20)
            }
              , i = e.getAttribute("data-idx") <= 3;
            dynamics.css(e, r),
            dynamics.setTimeout(function() {
                dynamics.css(e, {
                    display: ""
                })
            }, n),
            o = Math.max(o, n),
            dynamics.setTimeout(function() {
                dynamics.css(e, {
                    translateX: Math.round(r.translateX / -5)
                })
            }, n + 100),
            dynamics.setTimeout(function() {
                dynamics.css(e, {
                    translateX: 0,
                    translateY: 0
                }),
                i || e.parentNode.removeChild(e)
            }, n + 150),
            i && (dynamics.setTimeout(function() {
                dynamics.css(e, {
                    translateX: Math.round(r.translateX / -2)
                })
            }, n + 300),
            dynamics.setTimeout(function() {
                e.parentNode.removeChild(e)
            }, n + 550))
        }(t);
    dynamics.setTimeout(function() {
        for (var t = 0; t < originalContentEls.length; t++)
            originalContentEls[t].style.visibility = "visible"
    }, o)
}
!function() {
    for (var t = originalContentEls, e = (pageEl.getBoundingClientRect(),
    0); e < t.length; e++) {
        for (var n = t[e], r = createMasksWithStripes(6, n.getBoundingClientRect()), i = 0; i < r.length; i++) {
            var o = cloneAndStripeElement(n, r[i], pageEl);
            o.setAttribute("data-idx", i),
            contentEls.push(o);
            for (var a = o.querySelectorAll("h2, ul > li > a, a.more, h1, p, path"), s = 0; s < a.length; s++) {
                var l = tinycolor("hsl(" + Math.round(360 * Math.random()) + ", 80%, 65%)").toRgbString();
                dynamics.css(a[s], {
                    color: l,
                    fill: l
                })
            }
        }
        n.style.visibility = "hidden"
    }
}(),
function() {
    animateBlackStripes(stripesEl, {
        count: 200
    }),
    animateColoredStripes(stripesEl, {
        count: 100
    }),
    dynamics.css(pageEl, {
        scale: .95
    }),
    dynamics.animate(pageEl, {
        scale: 1
    }, {
        type: dynamics.easeInOut,
        friction: 500,
        duration: 4e3
    }),
    dynamics.css(logo, {
        scale: 1
    }),
    dynamics.animate(logo, {
        scale: .9
    }, {
        duration: 1500,
        type: dynamics.easeOut
    });
    var t = tinycolor("hsl(" + Math.round(360 * Math.random()) + ", 80%, 65%)");
    function e() {
        dynamics.css(logoContainer, {
            scale: .5,
            translateX: 100 * Math.random() - 50
        }),
        dynamics.setTimeout(function() {
            dynamics.css(logoContainer, {
                translateX: 10,
                scale: .55
            })
        }, 100),
        dynamics.setTimeout(function() {
            dynamics.css(logoContainer, {
                translateX: 0,
                scale: .5
            })
        }, 150)
    }
    dynamics.animate(logoPath, {
        fill: t.toRgbString()
    }, {
        duration: 700
    }),
    t = tinycolor("hsl(" + Math.round(360 * Math.random()) + ", 80%, 65%)"),
    dynamics.animate(logoPath, {
        fill: t.toRgbString()
    }, {
        duration: 700,
        delay: 700
    }),
    e(),
    dynamics.setTimeout(function() {
        logoContainer.style.visibility = "visible"
    }, 1),
    dynamics.setTimeout(function() {
        e(),
        animateBlackStripes(stripesEl, {
            count: 200,
            delayShow: !0
        }),
        animateColoredStripes(stripesEl, {
            count: 100
        })
    }, 1e3),
    dynamics.setTimeout(function() {
        introEl.style.backgroundColor = "transparent",
        dynamics.css(logoContainer, {
            scale: 1,
            translateX: Math.random() * windowWidth - windowWidth / 2,
            translateY: Math.random() * windowHeight - windowHeight / 2
        }),
        showContent()
    }, 1300),
    dynamics.setTimeout(function() {
        dynamics.css(logoContainer, {
            scale: .75
        })
    }, 1350),
    dynamics.setTimeout(function() {
        logo.style.display = "none"
    }, 1400),
    dynamics.setTimeout(function() {
        document.body.removeChild(introEl)
    }, 3e3)
}(),
function() {
    document.querySelector("#page-stripes");
    var t = document.querySelectorAll("a");
    function e() {
        for (var t = document.querySelector("#header-logo"), e = t.getBoundingClientRect(), n = 10 + 10 * Math.random(), r = createMasksWithStripes(n, e, Math.round(100 / n)), i = [], o = 0; o < r.length; o++) {
            var a = cloneAndStripeElement(t, r[o], document.body)
              , s = a.querySelector("path")
              , l = tinycolor("hsl(" + Math.round(360 * Math.random()) + ", 80%, 65%)");
            dynamics.css(s, {
                fill: l.toRgbString()
            }),
            i.push(a)
        }
        for (var u = 0; u < i.length; u++)
            !function(t) {
                var e = i[t]
                  , n = 100 * Math.random();
                dynamics.setTimeout(function() {
                    e.style.display = "",
                    dynamics.css(e, {
                        translateX: 100 * Math.random() - 50
                    })
                }, n),
                dynamics.setTimeout(function() {
                    dynamics.css(e, {
                        translateX: 20 * Math.random() - 10
                    })
                }, 50 + n),
                dynamics.setTimeout(function() {
                    dynamics.css(e, {
                        translateX: 5 * Math.random() - 2.5
                    })
                }, 100 + n),
                dynamics.setTimeout(function() {
                    document.body.removeChild(e)
                }, 150 + n)
            }(u)
    }
    function n(t) {
        for (var n, h, f, c, r = t.target; r && "a" !== r.tagName.toLowerCase(); )
            r = r.parentNode;
        r && (f = !0,
        c = (h = r).getBoundingClientRect(),
        function n() {
            for (var r = createMasksWithStripes(3, c, 3), i = [], t = 0; t < r.length; t++) {
                var e = cloneAndStripeElement(h, r[t], document.body)
                  , o = Array.prototype.slice.apply(e.querySelectorAll("path"));
                o.push(e);
                for (var a = 0; a < o.length; a++) {
                    var s = tinycolor("hsl(" + Math.round(360 * Math.random()) + ", 80%, 65%)")
                      , l = s.toRgbString();
                    dynamics.css(o[a], {
                        color: l,
                        fill: l
                    })
                }
                e.style.display = "",
                i.push(e)
            }
            for (var u = 0; u < i.length; u++)
                !function(t) {
                    var e = i[t];
                    dynamics.css(e, {
                        translateX: Math.random() * 10 - 5
                    }),
                    dynamics.setTimeout(function() {
                        dynamics.css(e, {
                            translateX: 0
                        })
                    }, 50),
                    dynamics.setTimeout(function() {
                        dynamics.css(e, {
                            translateX: Math.random() * 5 - 2.5
                        })
                    }, 100),
                    dynamics.setTimeout(function() {
                        document.body.removeChild(e)
                    }, 150)
                }(u);
            dynamics.setTimeout(function() {
                f && n();
                for (var t = 0; t < r.length; t++) {
                    var e = document.querySelector("#" + r[t]);
                    e.parentNode.removeChild(e)
                }
            }, 1e3 * Math.random())
        }(),
        n = {
            stop: function() {
                f = !1
            }
        },
        r.addEventListener("mouseout", function t(e) {
            r.removeEventListener("mouseout", t),
            n.stop()
        }))
    }
    if (dynamics.setTimeout(function t() {
        dynamics.setTimeout(function() {
            e(),
            t()
        }, 100 + 5e3 * Math.random())
    }, 4e3),
    document.querySelector("#header-logo").addEventListener("mouseover", e),
    !("ontouchstart"in window))
        for (var r = 0; r < t.length; r++)
            t[r].addEventListener("mouseover", n)
}();
