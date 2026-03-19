( () => {
    var e = {
        9858: function(e, t, a) {
            "use strict";
            var i = a(3949)
              , n = a(5134);
            let o = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            };
            function s(e, t) {
                n.dispatchCustomEvent(e, "IX3_COMPONENT_STATE_CHANGE", {
                    component: "dropdown",
                    state: t
                })
            }
            let d = /^#[a-zA-Z0-9\-_]+$/;
            i.define("dropdown", e.exports = function(e, t) {
                var a, c, r = t.debounce, l = {}, f = i.env(), p = !1, g = i.env.touch, u = ".w-dropdown", y = "w--open", I = n.triggers, m = "focusout" + u, T = "keydown" + u, E = "mouseenter" + u, b = "mousemove" + u, O = "mouseleave" + u, h = (g ? "click" : "mouseup") + u, v = "w-close" + u, L = "setting" + u, S = e(document);
                function w() {
                    a = f && i.env("design"),
                    (c = S.find(u)).each(x)
                }
                function x(t, n) {
                    var s, c, l, p, g, I, b, O, w, x, A = e(n), U = e.data(n, u);
                    U || (U = e.data(n, u, {
                        open: !1,
                        el: A,
                        config: {},
                        selectedIdx: -1
                    })),
                    U.toggle = U.el.children(".w-dropdown-toggle"),
                    U.list = U.el.children(".w-dropdown-list"),
                    U.links = U.list.find("a:not(.w-dropdown .w-dropdown a)"),
                    U.complete = (s = U,
                    function() {
                        s.list.removeClass(y),
                        s.toggle.removeClass(y),
                        s.manageZ && s.el.css("z-index", "")
                    }
                    ),
                    U.mouseLeave = (c = U,
                    function() {
                        c.hovering = !1,
                        c.links.is(":focus") || _(c)
                    }
                    ),
                    U.mouseUpOutside = ((l = U).mouseUpOutside && S.off(h, l.mouseUpOutside),
                    r(function(t) {
                        if (l.open) {
                            var a = e(t.target);
                            if (!a.closest(".w-dropdown-toggle").length) {
                                var n = -1 === e.inArray(l.el[0], a.parents(u))
                                  , o = i.env("editor");
                                if (n) {
                                    if (o) {
                                        var s = 1 === a.parents().length && 1 === a.parents("svg").length
                                          , d = a.parents(".w-editor-bem-EditorHoverControls").length;
                                        if (s || d)
                                            return
                                    }
                                    _(l)
                                }
                            }
                        }
                    })),
                    U.mouseMoveOutside = (p = U,
                    r(function(t) {
                        if (p.open) {
                            var a = e(t.target);
                            if (-1 === e.inArray(p.el[0], a.parents(u))) {
                                var i = a.parents(".w-editor-bem-EditorHoverControls").length
                                  , n = a.parents(".w-editor-bem-RTToolbar").length
                                  , o = e(".w-editor-bem-EditorOverlay")
                                  , s = o.find(".w-editor-edit-outline").length || o.find(".w-editor-bem-RTToolbar").length;
                                if (i || n || s)
                                    return;
                                p.hovering = !1,
                                _(p)
                            }
                        }
                    })),
                    R(U);
                    var V = U.toggle.attr("id")
                      , B = U.list.attr("id");
                    V || (V = "w-dropdown-toggle-" + t),
                    B || (B = "w-dropdown-list-" + t),
                    U.toggle.attr("id", V),
                    U.toggle.attr("aria-controls", B),
                    U.toggle.attr("aria-haspopup", "menu"),
                    U.toggle.attr("aria-expanded", "false"),
                    U.toggle.find(".w-icon-dropdown-toggle").attr("aria-hidden", "true"),
                    "BUTTON" !== U.toggle.prop("tagName") && (U.toggle.attr("role", "button"),
                    U.toggle.attr("tabindex") || U.toggle.attr("tabindex", "0")),
                    U.list.attr("id", B),
                    U.list.attr("aria-labelledby", V),
                    U.links.each(function(e, t) {
                        t.hasAttribute("tabindex") || t.setAttribute("tabindex", "0"),
                        d.test(t.hash) && t.addEventListener("click", _.bind(null, U))
                    }),
                    U.el.off(u),
                    U.toggle.off(u),
                    U.nav && U.nav.off(u);
                    var k = N(U, !0);
                    a && U.el.on(L, (g = U,
                    function(e, t) {
                        t = t || {},
                        R(g),
                        !0 === t.open && M(g),
                        !1 === t.open && _(g, {
                            immediate: !0
                        })
                    }
                    )),
                    a || (f && (U.hovering = !1,
                    _(U)),
                    U.config.hover && U.toggle.on(E, (I = U,
                    function() {
                        I.hovering = !0,
                        M(I)
                    }
                    )),
                    U.el.on(v, k),
                    U.el.on(T, (b = U,
                    function(e) {
                        if (!a && b.open)
                            switch (b.selectedIdx = b.links.index(document.activeElement),
                            e.keyCode) {
                            case o.HOME:
                                if (!b.open)
                                    return;
                                return b.selectedIdx = 0,
                                C(b),
                                e.preventDefault();
                            case o.END:
                                if (!b.open)
                                    return;
                                return b.selectedIdx = b.links.length - 1,
                                C(b),
                                e.preventDefault();
                            case o.ESCAPE:
                                return _(b),
                                b.toggle.focus(),
                                e.stopPropagation();
                            case o.ARROW_RIGHT:
                            case o.ARROW_DOWN:
                                return b.selectedIdx = Math.min(b.links.length - 1, b.selectedIdx + 1),
                                C(b),
                                e.preventDefault();
                            case o.ARROW_LEFT:
                            case o.ARROW_UP:
                                return b.selectedIdx = Math.max(-1, b.selectedIdx - 1),
                                C(b),
                                e.preventDefault()
                            }
                    }
                    )),
                    U.el.on(m, (O = U,
                    r(function(e) {
                        var {relatedTarget: t, target: a} = e
                          , i = O.el[0];
                        return i.contains(t) || i.contains(a) || _(O),
                        e.stopPropagation()
                    }))),
                    U.toggle.on(h, k),
                    U.toggle.on(T, (x = N(w = U, !0),
                    function(e) {
                        if (!a) {
                            if (!w.open)
                                switch (e.keyCode) {
                                case o.ARROW_UP:
                                case o.ARROW_DOWN:
                                    return e.stopPropagation()
                                }
                            switch (e.keyCode) {
                            case o.SPACE:
                            case o.ENTER:
                                return x(),
                                e.stopPropagation(),
                                e.preventDefault()
                            }
                        }
                    }
                    )),
                    U.nav = U.el.closest(".w-nav"),
                    U.nav.on(v, k))
                }
                function R(e) {
                    var t = Number(e.el.css("z-index"));
                    e.manageZ = 900 === t || 901 === t,
                    e.config = {
                        hover: "true" === e.el.attr("data-hover") && !g,
                        delay: e.el.attr("data-delay")
                    }
                }
                function N(e, t) {
                    return r(function(a) {
                        if (e.open || a && "w-close" === a.type)
                            return _(e, {
                                forceClose: t
                            });
                        M(e)
                    })
                }
                function M(t) {
                    if (!t.open) {
                        n = t.el[0],
                        c.each(function(t, a) {
                            var i = e(a);
                            i.is(n) || i.has(n).length || i.triggerHandler(v)
                        }),
                        t.open = !0,
                        t.list.addClass(y),
                        t.toggle.addClass(y),
                        t.toggle.attr("aria-expanded", "true"),
                        I.intro(0, t.el[0]),
                        s(t.el[0], "open"),
                        i.redraw.up(),
                        t.manageZ && t.el.css("z-index", 901);
                        var n, o = i.env("editor");
                        a || S.on(h, t.mouseUpOutside),
                        t.hovering && !o && t.el.on(O, t.mouseLeave),
                        t.hovering && o && S.on(b, t.mouseMoveOutside),
                        window.clearTimeout(t.delayId)
                    }
                }
                function _(e, {immediate: t, forceClose: a}={}) {
                    if (e.open && (!e.config.hover || !e.hovering || a)) {
                        e.toggle.attr("aria-expanded", "false"),
                        e.open = !1;
                        var i = e.config;
                        if (I.outro(0, e.el[0]),
                        s(e.el[0], "close"),
                        S.off(h, e.mouseUpOutside),
                        S.off(b, e.mouseMoveOutside),
                        e.el.off(O, e.mouseLeave),
                        window.clearTimeout(e.delayId),
                        !i.delay || t)
                            return e.complete();
                        e.delayId = window.setTimeout(e.complete, i.delay)
                    }
                }
                function C(e) {
                    e.links[e.selectedIdx] && e.links[e.selectedIdx].focus()
                }
                return l.ready = w,
                l.design = function() {
                    p && S.find(u).each(function(t, a) {
                        e(a).triggerHandler(v)
                    }),
                    p = !1,
                    w()
                }
                ,
                l.preview = function() {
                    p = !0,
                    w()
                }
                ,
                l
            }
            )
        },
        2458: function(e, t, a) {
            "use strict";
            var i = a(3949)
              , n = "w-condition-invisible"
              , o = "." + n;
            function s(e) {
                return !!(e.$el && e.$el.closest(o).length)
            }
            function d(e, t) {
                for (var a = e; a >= 0; a--)
                    if (!s(t[a]))
                        return a;
                return -1
            }
            function c(e, t) {
                for (var a = e; a <= t.length - 1; a++)
                    if (!s(t[a]))
                        return a;
                return -1
            }
            function r(e, t) {
                e.attr("aria-label") || e.attr("aria-label", t)
            }
            i.define("lightbox", e.exports = function(e) {
                var t, a, o, l = {}, f = i.env(), p = function(e, t, a, i) {
                    var o, l, f, p = a.tram, g = Array.isArray, u = /(^|\s+)/g, y = [], I = [];
                    function m(e, t) {
                        return y = g(e) ? e : [e],
                        l || m.build(),
                        y.filter(function(e) {
                            return !s(e)
                        }).length > 1 && (l.items = l.empty,
                        y.forEach(function(e, t) {
                            var a = k("thumbnail")
                              , i = k("item").prop("tabIndex", 0).attr("aria-controls", "w-lightbox-view").attr("role", "tab").append(a);
                            r(i, `show item ${t + 1} of ${y.length}`),
                            s(e) && i.addClass(n),
                            l.items = l.items.add(i),
                            N(e.thumbnailUrl || e.url, function(e) {
                                e.prop("width") > e.prop("height") ? A(e, "wide") : A(e, "tall"),
                                a.append(A(e, "thumbnail-image"))
                            })
                        }),
                        l.strip.empty().append(l.items),
                        A(l.content, "group")),
                        p(U(l.lightbox, "hide").trigger("focus")).add("opacity .3s").start({
                            opacity: 1
                        }),
                        A(l.html, "noscroll"),
                        m.show(t || 0)
                    }
                    function T(e) {
                        return function(t) {
                            this === t.target && (t.stopPropagation(),
                            t.preventDefault(),
                            e())
                        }
                    }
                    m.build = function() {
                        return m.destroy(),
                        (l = {
                            html: a(t.documentElement),
                            empty: a()
                        }).arrowLeft = k("control left inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"),
                        l.arrowRight = k("control right inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"),
                        l.close = k("control close").attr("role", "button"),
                        r(l.arrowLeft, "previous image"),
                        r(l.arrowRight, "next image"),
                        r(l.close, "close lightbox"),
                        l.spinner = k("spinner").attr("role", "progressbar").attr("aria-live", "polite").attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuemin", 0).attr("aria-valuemax", 100).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"),
                        l.strip = k("strip").attr("role", "tablist"),
                        f = new M(l.spinner,_("hide")),
                        l.content = k("content").append(l.spinner, l.arrowLeft, l.arrowRight, l.close),
                        l.container = k("container").append(l.content, l.strip),
                        l.lightbox = k("backdrop hide").append(l.container),
                        l.strip.on("click", C("item"), h),
                        l.content.on("swipe", v).on("click", C("left"), E).on("click", C("right"), b).on("click", C("close"), O).on("click", C("image, caption"), b),
                        l.container.on("click", C("view"), O).on("dragstart", C("img"), S),
                        l.lightbox.on("keydown", w).on("focusin", L),
                        a(i).append(l.lightbox),
                        m
                    }
                    ,
                    m.destroy = function() {
                        l && (U(l.html, "noscroll"),
                        l.lightbox.remove(),
                        l = void 0)
                    }
                    ,
                    m.show = function(e) {
                        if (e !== o) {
                            var t, i = y[e];
                            if (!i)
                                return m.hide();
                            if (s(i)) {
                                if (e < o) {
                                    var n = d(e - 1, y);
                                    e = n > -1 ? n : e
                                } else {
                                    var r = c(e + 1, y);
                                    e = r > -1 ? r : e
                                }
                                i = y[e]
                            }
                            var g = o;
                            return o = e,
                            l.spinner.attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"),
                            f.show(),
                            N(i.html && (t = i.width,
                            "data:image/svg+xml;charset=utf-8," + encodeURI('<svg xmlns="http://www.w3.org/2000/svg" width="' + t + '" height="' + i.height + '"/>')) || i.url, function(t) {
                                if (e === o) {
                                    var n, s, r = k("figure", "figure").append(A(t, "image")), u = k("frame").append(r), I = k("view").prop("tabIndex", 0).attr("id", "w-lightbox-view").append(u);
                                    i.html && ((s = (n = a(i.html)).is("iframe")) && n.on("load", m),
                                    r.append(A(n, "embed"))),
                                    i.caption && r.append(k("caption", "figcaption").text(i.caption)),
                                    l.spinner.before(I),
                                    s || m()
                                }
                                function m() {
                                    if (l.spinner.attr("aria-hidden", !0).attr("aria-busy", !1).attr("aria-valuenow", 100).attr("aria-valuetext", "Loaded image"),
                                    f.hide(),
                                    e !== o)
                                        return void I.remove();
                                    let t = -1 === d(e - 1, y);
                                    V(l.arrowLeft, "inactive", t),
                                    B(l.arrowLeft, t),
                                    t && l.arrowLeft.is(":focus") && l.arrowRight.focus();
                                    let a = -1 === c(e + 1, y);
                                    if (V(l.arrowRight, "inactive", a),
                                    B(l.arrowRight, a),
                                    a && l.arrowRight.is(":focus") && l.arrowLeft.focus(),
                                    l.view ? (p(l.view).add("opacity .3s").start({
                                        opacity: 0
                                    }).then((i = l.view,
                                    function() {
                                        i.remove()
                                    }
                                    )),
                                    p(I).add("opacity .3s").add("transform .3s").set({
                                        x: e > g ? "80px" : "-80px"
                                    }).start({
                                        opacity: 1,
                                        x: 0
                                    })) : I.css("opacity", 1),
                                    l.view = I,
                                    l.view.prop("tabIndex", 0),
                                    l.items) {
                                        U(l.items, "active"),
                                        l.items.removeAttr("aria-selected");
                                        var i, n, s, r, u, m, T, E, b, O = l.items.eq(e);
                                        A(O, "active"),
                                        O.attr("aria-selected", !0),
                                        s = O.get(0),
                                        r = l.strip.get(0),
                                        u = s.offsetLeft,
                                        m = s.clientWidth,
                                        T = r.scrollLeft,
                                        E = r.clientWidth,
                                        b = r.scrollWidth - E,
                                        u < T ? n = Math.max(0, u + m - E) : u + m > E + T && (n = Math.min(u, b)),
                                        null != n && p(l.strip).add("scroll-left 500ms").start({
                                            "scroll-left": n
                                        })
                                    }
                                }
                            }),
                            l.close.prop("tabIndex", 0),
                            a(":focus").addClass("active-lightbox"),
                            0 === I.length && (a("body").children().each(function() {
                                a(this).hasClass("w-lightbox-backdrop") || a(this).is("script") || (I.push({
                                    node: a(this),
                                    hidden: a(this).attr("aria-hidden"),
                                    tabIndex: a(this).attr("tabIndex")
                                }),
                                a(this).attr("aria-hidden", !0).attr("tabIndex", -1))
                            }),
                            l.close.focus()),
                            m
                        }
                    }
                    ,
                    m.hide = function() {
                        return p(l.lightbox).add("opacity .3s").start({
                            opacity: 0
                        }).then(R),
                        m
                    }
                    ,
                    m.prev = function() {
                        var e = d(o - 1, y);
                        e > -1 && m.show(e)
                    }
                    ,
                    m.next = function() {
                        var e = c(o + 1, y);
                        e > -1 && m.show(e)
                    }
                    ;
                    var E = T(m.prev)
                      , b = T(m.next)
                      , O = T(m.hide)
                      , h = function(e) {
                        var t = a(this).index();
                        e.preventDefault(),
                        m.show(t)
                    }
                      , v = function(e, t) {
                        e.preventDefault(),
                        "left" === t.direction ? m.next() : "right" === t.direction && m.prev()
                    }
                      , L = function() {
                        this.focus()
                    };
                    function S(e) {
                        e.preventDefault()
                    }
                    function w(e) {
                        var t = e.keyCode;
                        27 === t || x(t, "close") ? m.hide() : 37 === t || x(t, "left") ? m.prev() : 39 === t || x(t, "right") ? m.next() : x(t, "item") && a(":focus").click()
                    }
                    function x(e, t) {
                        if (13 !== e && 32 !== e)
                            return !1;
                        var i = a(":focus").attr("class")
                          , n = _(t).trim();
                        return i.includes(n)
                    }
                    function R() {
                        l && (l.strip.scrollLeft(0).empty(),
                        U(l.html, "noscroll"),
                        A(l.lightbox, "hide"),
                        l.view && l.view.remove(),
                        U(l.content, "group"),
                        A(l.arrowLeft, "inactive"),
                        A(l.arrowRight, "inactive"),
                        o = l.view = void 0,
                        I.forEach(function(e) {
                            var t = e.node;
                            t && (e.hidden ? t.attr("aria-hidden", e.hidden) : t.removeAttr("aria-hidden"),
                            e.tabIndex ? t.attr("tabIndex", e.tabIndex) : t.removeAttr("tabIndex"))
                        }),
                        I = [],
                        a(".active-lightbox").removeClass("active-lightbox").focus())
                    }
                    function N(e, t) {
                        var a = k("img", "img");
                        return a.one("load", function() {
                            t(a)
                        }),
                        a.attr("src", e),
                        a
                    }
                    function M(e, t, a) {
                        this.$element = e,
                        this.className = t,
                        this.delay = a || 200,
                        this.hide()
                    }
                    function _(e, t) {
                        return e.replace(u, (t ? " ." : " ") + "w-lightbox-")
                    }
                    function C(e) {
                        return _(e, !0)
                    }
                    function A(e, t) {
                        return e.addClass(_(t))
                    }
                    function U(e, t) {
                        return e.removeClass(_(t))
                    }
                    function V(e, t, a) {
                        return e.toggleClass(_(t), a)
                    }
                    function B(e, t) {
                        return e.attr("aria-hidden", t).attr("tabIndex", t ? -1 : 0)
                    }
                    function k(e, i) {
                        return A(a(t.createElement(i || "div")), e)
                    }
                    M.prototype.show = function() {
                        var e = this;
                        e.timeoutId || (e.timeoutId = setTimeout(function() {
                            e.$element.removeClass(e.className),
                            delete e.timeoutId
                        }, e.delay))
                    }
                    ,
                    M.prototype.hide = function() {
                        if (this.timeoutId) {
                            clearTimeout(this.timeoutId),
                            delete this.timeoutId;
                            return
                        }
                        this.$element.addClass(this.className)
                    }
                    ;
                    var G = e.navigator.userAgent
                      , P = G.match(/(iPhone|iPad|iPod);[^OS]*OS (\d)/);
                    if (G.indexOf("Android ") > -1 && -1 === G.indexOf("Chrome") || P && !(P[2] > 7)) {
                        var F = t.createElement("style");
                        t.head.appendChild(F),
                        e.addEventListener("resize", D, !0),
                        D()
                    }
                    function D() {
                        var t = e.innerHeight
                          , a = e.innerWidth
                          , i = ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + t + "px}.w-lightbox-view {width:" + a + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .86 * t + "px}.w-lightbox-image {max-width:" + a + "px;max-height:" + t + "px}.w-lightbox-group .w-lightbox-image {max-height:" + .86 * t + "px}.w-lightbox-strip {padding: 0 " + .01 * t + "px}.w-lightbox-item {width:" + .1 * t + "px;padding:" + .02 * t + "px " + .01 * t + "px}.w-lightbox-thumbnail {height:" + .1 * t + "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + .96 * t + "px}.w-lightbox-content {margin-top:" + .02 * t + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .84 * t + "px}.w-lightbox-image {max-width:" + .96 * a + "px;max-height:" + .96 * t + "px}.w-lightbox-group .w-lightbox-image {max-width:" + .823 * a + "px;max-height:" + .84 * t + "px}}";
                        F.textContent = i
                    }
                    return m
                }(window, document, e, f ? "#lightbox-mountpoint" : "body"), g = e(document), u = ".w-lightbox";
                function y(e) {
                    var t, a, i, n = e.el.children(".w-json").html();
                    if (!n) {
                        e.items = [];
                        return
                    }
                    try {
                        n = JSON.parse(n)
                    } catch (e) {
                        console.error("Malformed lightbox JSON configuration.", e)
                    }
                    (t = n).images && (t.images.forEach(function(e) {
                        e.type = "image"
                    }),
                    t.items = t.images),
                    t.embed && (t.embed.type = "video",
                    t.items = [t.embed]),
                    t.groupId && (t.group = t.groupId),
                    n.items.forEach(function(t) {
                        t.$el = e.el
                    }),
                    (a = n.group) ? ((i = o[a]) || (i = o[a] = []),
                    e.items = i,
                    n.items.length && (e.index = i.length,
                    i.push.apply(i, n.items))) : (e.items = n.items,
                    e.index = 0)
                }
                return l.ready = l.design = l.preview = function() {
                    a = f && i.env("design"),
                    p.destroy(),
                    o = {},
                    (t = g.find(u)).webflowLightBox(),
                    t.each(function() {
                        r(e(this), "open lightbox"),
                        e(this).attr("aria-haspopup", "dialog")
                    })
                }
                ,
                jQuery.fn.extend({
                    webflowLightBox: function() {
                        e.each(this, function(t, i) {
                            var n, o = e.data(i, u);
                            o || (o = e.data(i, u, {
                                el: e(i),
                                mode: "images",
                                images: [],
                                embed: ""
                            })),
                            o.el.off(u),
                            y(o),
                            a ? o.el.on("setting" + u, y.bind(null, o)) : o.el.on("click" + u, (n = o,
                            function() {
                                n.items.length && p(n.items, n.index || 0)
                            }
                            )).on("click" + u, function(e) {
                                e.preventDefault()
                            })
                        })
                    }
                }),
                l
            }
            )
        },
        3467: function(e, t, a) {
            a(9461),
            a(7624),
            a(286),
            a(8334),
            a(2338),
            a(3695),
            a(322),
            a(941),
            a(5134),
            a(1655),
            a(2444),
            a(3973),
            a(9904),
            a(1724),
            a(2458),
            a(9858),
            a(9719)
        },
        9719: function() {
            function e() {
                let e = Webflow.require("ix3");
                e.ready().then( () => {
                    let t = e.getInstance();
                    t && (t.register([{
                        id: "i-9278aa00",
                        scope: {
                            type: "site"
                        },
                        triggers: [["wf:hover", {
                            controlType: "standard",
                            pluginConfig: {
                                type: "mouseenter",
                                hover: "each"
                            }
                        }, ["wf:class", ["button-link"], {
                            relationship: "none",
                            firstMatchOnly: !1
                        }]], ["wf:hover", {
                            control: "reverse",
                            controlType: "standard",
                            pluginConfig: {
                                type: "mouseleave",
                                hover: "each"
                            }
                        }, ["wf:class", ["button-link"], {
                            relationship: "none",
                            firstMatchOnly: !1
                        }]]],
                        timelineIds: ["t-684be892"],
                        conditionalPlayback: [{
                            type: "breakpoint",
                            behavior: "dont-animate",
                            breakpoints: ["medium", "small", "tiny"]
                        }],
                        deleted: !1
                    }, {
                        id: "i-9cfd889f",
                        scope: {
                            type: "site"
                        },
                        triggers: [["wf:hover", {
                            controlType: "standard",
                            pluginConfig: {
                                type: "mouseenter",
                                hover: "each"
                            }
                        }, ["wf:class", ["logo-first"], {
                            relationship: "none",
                            firstMatchOnly: !1
                        }]], ["wf:hover", {
                            control: "reverse",
                            controlType: "standard",
                            pluginConfig: {
                                type: "mouseleave",
                                hover: "each"
                            }
                        }, ["wf:class", ["logo-first"], {
                            relationship: "none",
                            firstMatchOnly: !1
                        }]]],
                        timelineIds: ["t-c3e575a6"],
                        conditionalPlayback: [{
                            type: "breakpoint",
                            behavior: "dont-animate",
                            breakpoints: ["small", "tiny"]
                        }],
                        deleted: !1
                    }, {
                        id: "i-71f79395",
                        scope: {
                            type: "site"
                        },
                        triggers: [["wf:click", {
                            control: "togglePlayReverse",
                            controlType: "standard",
                            pluginConfig: {
                                click: "each"
                            }
                        }, ["wf:class", ["hamburger-wrapper"], {
                            relationship: "none",
                            firstMatchOnly: !1
                        }]], ["wf:click", {
                            control: "togglePlayReverse",
                            controlType: "standard",
                            pluginConfig: {
                                click: "each"
                            }
                        }, ["wf:class", ["hamburger-wrapper"], {
                            relationship: "none",
                            firstMatchOnly: !1
                        }]]],
                        timelineIds: ["t-7ef230dc"],
                        deleted: !1
                    }, {
                        id: "i-79000ffc",
                        scope: {
                            type: "site"
                        },
                        triggers: [["wf:scroll", {
                            controlType: "scroll",
                            scrollTriggerConfig: {
                                clamp: !0,
                                start: "top top",
                                end: "bottom top",
                                scrub: .8,
                                enter: "play",
                                leave: "none",
                                enterBack: "none",
                                leaveBack: "none"
                            }
                        }, ["wf:class", ["main-content"], {
                            relationship: "none",
                            firstMatchOnly: !1
                        }]]],
                        timelineIds: ["t-7712c5d6"],
                        deleted: !1
                    }, {
                        id: "i-aac5a765",
                        scope: {
                            type: "site"
                        },
                        triggers: [["wf:hover", {
                            controlType: "standard",
                            pluginConfig: {
                                type: "mouseenter",
                                hover: "each"
                            }
                        }, ["wf:class", ["button-arrow"], {
                            relationship: "none",
                            firstMatchOnly: !1
                        }]], ["wf:hover", {
                            control: "reverse",
                            controlType: "standard",
                            pluginConfig: {
                                type: "mouseleave",
                                hover: "each"
                            }
                        }, ["wf:class", ["button-arrow"], {
                            relationship: "none",
                            firstMatchOnly: !1
                        }]]],
                        timelineIds: ["t-94839421"],
                        conditionalPlayback: [{
                            type: "breakpoint",
                            behavior: "dont-animate",
                            breakpoints: ["medium", "small", "tiny"]
                        }],
                        deleted: !1
                    }, {
                        id: "i-872f2192",
                        scope: {
                            type: "site"
                        },
                        triggers: [["wf:hover", {
                            controlType: "standard",
                            pluginConfig: {
                                type: "mouseenter",
                                hover: "each"
                            }
                        }, ["wf:class", ["contact-team"], {
                            relationship: "none",
                            firstMatchOnly: !1
                        }]], ["wf:hover", {
                            control: "reverse",
                            controlType: "standard",
                            pluginConfig: {
                                type: "mouseleave",
                                hover: "each"
                            }
                        }, ["wf:class", ["contact-team"], {
                            relationship: "none",
                            firstMatchOnly: !1
                        }]]],
                        timelineIds: ["t-454d1fe3"],
                        conditionalPlayback: [{
                            type: "breakpoint",
                            behavior: "dont-animate",
                            breakpoints: ["medium", "small", "tiny"]
                        }],
                        deleted: !1
                    }, {
                        id: "i-5e278336",
                        scope: {
                            type: "site"
                        },
                        triggers: [["wf:hover", {
                            controlType: "standard",
                            pluginConfig: {
                                type: "mouseenter",
                                hover: "each"
                            }
                        }, ["wf:class", ["button-big-menu"], {
                            relationship: "none",
                            firstMatchOnly: !1
                        }]], ["wf:hover", {
                            control: "reverse",
                            controlType: "standard",
                            pluginConfig: {
                                type: "mouseleave",
                                hover: "each"
                            }
                        }, ["wf:class", ["button-big-menu"], {
                            relationship: "none",
                            firstMatchOnly: !1
                        }]]],
                        timelineIds: ["t-2bbb0f45"],
                        conditionalPlayback: [{
                            type: "breakpoint",
                            behavior: "dont-animate",
                            breakpoints: ["small", "tiny", "medium"]
                        }],
                        deleted: !1
                    }, {
                        id: "i-671f77b2",
                        scope: {
                            type: "site"
                        },
                        triggers: [["wf:hover", {
                            controlType: "standard",
                            pluginConfig: {
                                type: "mouseenter",
                                hover: "each"
                            }
                        }, ["wf:class", ["social-icon"], {
                            relationship: "none",
                            firstMatchOnly: !1
                        }]], ["wf:hover", {
                            control: "reverse",
                            controlType: "standard",
                            pluginConfig: {
                                type: "mouseleave",
                                hover: "each"
                            }
                        }, ["wf:class", ["social-icon"], {
                            relationship: "none",
                            firstMatchOnly: !1
                        }]]],
                        timelineIds: ["t-41279e96"],
                        conditionalPlayback: [{
                            type: "breakpoint",
                            behavior: "dont-animate",
                            breakpoints: ["medium", "small", "tiny"]
                        }],
                        deleted: !1
                    }, {
                        id: "i-f793c6c6",
                        scope: {
                            type: "site"
                        },
                        triggers: [["wf:hover", {
                            controlType: "standard",
                            pluginConfig: {
                                type: "mouseenter",
                                hover: "each"
                            }
                        }, ["wf:class", ["logo-wrapper-card"], {
                            relationship: "none",
                            firstMatchOnly: !1
                        }]], ["wf:hover", {
                            control: "reverse",
                            controlType: "standard",
                            pluginConfig: {
                                type: "mouseleave",
                                hover: "each"
                            }
                        }, ["wf:class", ["logo-wrapper-card"], {
                            relationship: "none",
                            firstMatchOnly: !1
                        }]]],
                        timelineIds: ["t-bcd93483"],
                        conditionalPlayback: [{
                            type: "breakpoint",
                            behavior: "dont-animate",
                            breakpoints: ["medium", "small", "tiny"]
                        }],
                        deleted: !1
                    }, {
                        id: "i-46a8f000",
                        scope: {
                            type: "site"
                        },
                        triggers: [["wf:click", {
                            control: "togglePlayReverse",
                            controlType: "standard",
                            pluginConfig: {
                                click: "each"
                            }
                        }, ["wf:class", ["annual-switch"], {
                            relationship: "none",
                            firstMatchOnly: !1
                        }]]],
                        timelineIds: ["t-e3f7eab7"],
                        deleted: !1
                    }, {
                        id: "i-68f31c91",
                        scope: {
                            type: "site"
                        },
                        triggers: [["wf:scroll", {
                            controlType: "scroll",
                            scrollTriggerConfig: {
                                clamp: !0,
                                start: "top bottom",
                                end: "top center",
                                scrub: null,
                                enter: "play",
                                leave: "none",
                                enterBack: "none",
                                leaveBack: "none"
                            }
                        }, ["wf:class", ["h2._01"], {
                            relationship: "none",
                            firstMatchOnly: !1
                        }]]],
                        timelineIds: ["t-d7dcfb99"],
                        deleted: !1
                    }, {
                        id: "i-51412bbb",
                        scope: {
                            type: "pages",
                            value: ["699ed6f18aceafc086e38a65"]
                        },
                        triggers: [["wf:load", {
                            controlType: "load"
                        }]],
                        timelineIds: ["t-e3a9dde8"],
                        deleted: !1
                    }, {
                        id: "i-f8767ddd",
                        scope: {
                            type: "pages",
                            value: ["699ed6f18aceafc086e38a65"]
                        },
                        triggers: [["wf:load", {
                            controlType: "load"
                        }]],
                        timelineIds: ["t-c47c4e76"],
                        deleted: !1
                    }, {
                        id: "i-1ceaa810",
                        scope: {
                            type: "pages",
                            value: ["699ed6f18aceafc086e38a65", "699ed6f18aceafc086e38a6e"]
                        },
                        triggers: [["wf:scroll", {
                            controlType: "scroll",
                            scrollTriggerConfig: {
                                clamp: !0,
                                start: "15% center",
                                end: "bottom 90%",
                                scrub: .8,
                                enter: "play",
                                leave: "none",
                                enterBack: "none",
                                leaveBack: "none"
                            }
                        }, ["wf:class", ["section-about"], {
                            relationship: "none",
                            firstMatchOnly: !1
                        }]]],
                        timelineIds: ["t-3e27a5ff"],
                        deleted: !1
                    }, {
                        id: "i-bce3da57",
                        scope: {
                            type: "pages",
                            value: ["699ed6f18aceafc086e38a65"]
                        },
                        triggers: [["wf:scroll", {
                            controlType: "scroll",
                            scrollTriggerConfig: {
                                clamp: !0,
                                start: "top top",
                                end: "bottom 70%",
                                scrub: .7,
                                enter: "play",
                                leave: "none",
                                enterBack: "none",
                                leaveBack: "none"
                            }
                        }, ["wf:class", ["video-showreel"], {
                            relationship: "none",
                            firstMatchOnly: !1
                        }]]],
                        timelineIds: ["t-bece48f7"],
                        conditionalPlayback: [{
                            type: "breakpoint",
                            behavior: "dont-animate",
                            breakpoints: ["tiny"]
                        }],
                        deleted: !1
                    }, {
                        id: "i-12a2b89e",
                        scope: {
                            type: "pages",
                            value: ["699ed6f18aceafc086e38a65"]
                        },
                        triggers: [["wf:load", {
                            controlType: "load"
                        }]],
                        timelineIds: ["t-3cc91c00"],
                        deleted: !1
                    }], [{
                        id: "t-684be892",
                        deleted: !1,
                        actions: [{
                            id: "ta-68cda2e1",
                            targets: [["wf:class", ["line-absolute"], {
                                relationship: "within",
                                filterBy: ["wf:trigger-only", ""],
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .3,
                                position: .1,
                                ease: 2
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    x: ["-110%", "0%"]
                                }
                            }
                        }, {
                            id: "ta-a97b15b6",
                            targets: [["wf:class", ["navigation-text-main"], {
                                relationship: "within",
                                filterBy: ["wf:trigger-only", ""],
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .25,
                                position: .1,
                                stagger: {
                                    amount: .15
                                },
                                ease: 2
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    y: [null, "-101%"]
                                }
                            },
                            splitText: {
                                type: "chars"
                            }
                        }]
                    }, {
                        id: "t-c3e575a6",
                        deleted: !1,
                        actions: [{
                            id: "ta-cc9adf90",
                            targets: [["wf:class", ["top-text.logo.animated"], {
                                relationship: "within",
                                filterBy: ["wf:trigger-only", ""],
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .35,
                                position: 0,
                                stagger: {
                                    amount: .1
                                },
                                ease: 9
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    y: ["150%", "0%"]
                                }
                            },
                            splitText: {
                                type: "chars",
                                mask: "chars"
                            }
                        }]
                    }, {
                        id: "t-7ef230dc",
                        deleted: !1,
                        actions: [{
                            id: "ta-ba777273",
                            targets: [["wf:class", ["fixed-menu"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .6,
                                position: 0,
                                ease: 2
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    x: ["100%", "0%"]
                                }
                            }
                        }, {
                            id: "ta-d19f8a5c",
                            targets: [["wf:class", ["navbar-skew-wrapper"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .6,
                                position: 0,
                                ease: {
                                    type: "customEase",
                                    bezierCurve: "M0,160 C112,160 32,0 160,0 "
                                }
                            },
                            properties: {
                                "wf:transform": {
                                    width: [null, "0px"],
                                    height: [null, "100%"]
                                }
                            }
                        }, {
                            id: "ta-f4de9f85",
                            targets: [["wf:class", ["hamburger-line._01"], {
                                relationship: "within",
                                filterBy: ["wf:trigger-only", ""],
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .2,
                                position: .2,
                                ease: 2
                            },
                            properties: {
                                "wf:transform": {
                                    y: [null, "6px"]
                                }
                            }
                        }, {
                            id: "ta-2ccf5cbc",
                            targets: [["wf:class", ["hamburger-line._02"], {
                                relationship: "within",
                                filterBy: ["wf:trigger-only", ""],
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .2,
                                position: .2,
                                ease: 2
                            },
                            properties: {
                                "wf:transform": {
                                    y: [null, "-6px"]
                                }
                            }
                        }, {
                            id: "ta-edcd0ebe",
                            targets: [["wf:class", ["text-small-menu"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .25,
                                position: .22,
                                stagger: {
                                    amount: .15
                                },
                                ease: 5
                            },
                            properties: {
                                "wf:transform": {
                                    y: [null, "-130%"]
                                }
                            },
                            splitText: {
                                type: "chars"
                            }
                        }, {
                            id: "ta-896fcc54",
                            targets: [["wf:class", ["page-overlay-main"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .3,
                                position: 0,
                                ease: 2
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", "100%"]
                                }
                            }
                        }]
                    }, {
                        id: "t-7712c5d6",
                        deleted: !1,
                        actions: [{
                            id: "ta-4f421d77",
                            targets: [["wf:class", ["line-small-divider"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: 3,
                                position: .08,
                                stagger: {
                                    each: .03,
                                    from: "end"
                                },
                                ease: 2
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    height: ["0%", "120%"]
                                }
                            }
                        }, {
                            id: "ta-0cfa26d2",
                            targets: [["wf:class", ["hero-image"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: 1.05,
                                position: 0,
                                ease: {
                                    type: "expoScale",
                                    startingScale: .2,
                                    endingScale: 1,
                                    templateCurve: "none.inOut"
                                }
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    y: ["0vh", "10vh"],
                                    scale: [1, 1.1]
                                }
                            }
                        }]
                    }, {
                        id: "t-94839421",
                        deleted: !1,
                        actions: [{
                            id: "ta-96c1541f",
                            targets: [["wf:class", ["button-small-name"], {
                                relationship: "within",
                                filterBy: ["wf:trigger-only", ""],
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .25,
                                position: 0,
                                stagger: {
                                    amount: .15
                                },
                                ease: 2
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    y: ["0%", "-101%"]
                                }
                            },
                            splitText: {
                                type: "chars"
                            }
                        }]
                    }, {
                        id: "t-454d1fe3",
                        deleted: !1,
                        actions: [{
                            id: "ta-9ad09323",
                            targets: [["wf:class", ["arrow-black"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .2,
                                position: 0,
                                ease: 2
                            },
                            properties: {
                                "wf:transform": {
                                    x: [null, "-14px"]
                                }
                            }
                        }, {
                            id: "ta-ab3822b4",
                            targets: [["wf:class", ["smaller-text._01"], {
                                relationship: "within",
                                filterBy: ["wf:trigger-only", ""],
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .25,
                                position: 0,
                                stagger: {
                                    amount: .15
                                },
                                ease: 2
                            },
                            properties: {
                                "wf:transform": {
                                    y: [null, "-100%"]
                                }
                            },
                            splitText: {
                                type: "chars"
                            }
                        }, {
                            id: "ta-79c66e77",
                            targets: [["wf:class", ["slot-live-overlay"], {
                                relationship: "within",
                                filterBy: ["wf:trigger-only", ""],
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .3,
                                position: 0,
                                stagger: {
                                    each: .2
                                },
                                ease: 5
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    y: ["100%", "0%"]
                                }
                            }
                        }, {
                            id: "ta-ba6b707b",
                            targets: [["wf:class", ["blur-div"], {
                                relationship: "within",
                                filterBy: ["wf:trigger-only", ""],
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: 0,
                                position: 0
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["100%", "100%"]
                                }
                            }
                        }]
                    }, {
                        id: "t-2bbb0f45",
                        deleted: !1,
                        actions: [{
                            id: "ta-8b2078de",
                            targets: [["wf:class", ["big-text-btn"], {
                                relationship: "within",
                                filterBy: ["wf:trigger-only", ""],
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .3,
                                position: 0,
                                ease: 1
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    x: ["-28px", "0px"]
                                }
                            }
                        }, {
                            id: "ta-e47073fa",
                            targets: [["wf:class", ["number-small-big-menu"], {
                                relationship: "within",
                                filterBy: ["wf:trigger-only", ""],
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .2,
                                position: 0,
                                ease: 1
                            },
                            properties: {
                                "wf:transform": {
                                    y: [null, "-14px"]
                                }
                            }
                        }, {
                            id: "ta-f473d745",
                            targets: [["wf:class", ["button-big-line-overlay"], {
                                relationship: "within",
                                filterBy: ["wf:trigger-only", ""],
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .4,
                                position: .1,
                                ease: 1
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    width: ["0%", "100%"]
                                }
                            }
                        }, {
                            id: "ta-c40f92de",
                            targets: [["wf:class", ["button-big-arrow"], {
                                relationship: "within",
                                filterBy: ["wf:trigger-only", ""],
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .2,
                                position: .31,
                                ease: 30
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", "100%"],
                                    y: ["-5px", "0px"],
                                    scale: [.6, 1],
                                    rotation: ["40deg", "0deg"]
                                }
                            }
                        }]
                    }, {
                        id: "t-41279e96",
                        deleted: !1,
                        actions: [{
                            id: "ta-538ee292",
                            targets: [["wf:class", ["social-tooltip"], {
                                relationship: "within",
                                filterBy: ["wf:trigger-only", ""],
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .3,
                                position: 0,
                                ease: 30
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", "100%"],
                                    x: ["20px", "0px"],
                                    y: ["10px", "0px"],
                                    rotation: ["15deg", "0deg"],
                                    scale: [.9, 1]
                                }
                            }
                        }]
                    }, {
                        id: "t-bcd93483",
                        deleted: !1,
                        actions: [{
                            id: "ta-c96e44ac",
                            targets: [["wf:class", ["testimonials-card"], {
                                relationship: "within",
                                filterBy: ["wf:trigger-only", ""],
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .3,
                                position: 0,
                                ease: 30
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", "100%"],
                                    x: ["60px", "0px"],
                                    y: ["-60px", "0px"],
                                    rotation: ["15deg", "0deg"],
                                    scale: [.9, 1]
                                }
                            }
                        }]
                    }, {
                        id: "t-e3f7eab7",
                        deleted: !1,
                        actions: [{
                            id: "ta-a3a1d03e",
                            targets: [["wf:class", ["top-text.gray"], {
                                relationship: "within",
                                filterBy: ["wf:trigger-only", ""],
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .2,
                                position: 0,
                                ease: 2
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["50%", "100%"]
                                }
                            }
                        }, {
                            id: "ta-03497f34",
                            targets: [["wf:class", ["switch-circle"], {
                                relationship: "within",
                                filterBy: ["wf:trigger-only", ""],
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .2,
                                position: 0,
                                ease: 2
                            },
                            properties: {
                                "wf:transform": {
                                    x: [null, "19px"]
                                }
                            }
                        }, {
                            id: "ta-7b83657e",
                            targets: [["wf:class", ["switch"], {
                                relationship: "within",
                                filterBy: ["wf:trigger-only", ""],
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .2,
                                position: 0,
                                ease: 2
                            },
                            properties: {
                                "wf:transform": {},
                                "wf:style": {
                                    backgroundColor: [null, "hsla(14, 100.00%, 50.00%, 1.00)"]
                                }
                            }
                        }, {
                            id: "ta-0fc7f15a",
                            targets: [["wf:class", ["card-title.for-prc"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .2,
                                position: 0,
                                stagger: {
                                    amount: .15
                                },
                                ease: 2
                            },
                            properties: {
                                "wf:transform": {
                                    y: [null, "-31px"]
                                }
                            },
                            splitText: {
                                type: "chars"
                            }
                        }]
                    }, {
                        id: "t-d7dcfb99",
                        deleted: !1,
                        actions: [{
                            id: "ta-4dd71d0a",
                            targets: [["wf:trigger-only", "", {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .3,
                                position: 0,
                                stagger: {
                                    amount: .26,
                                    from: "start"
                                },
                                ease: 6
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", "100%"],
                                    yPercent: ["100%", "0%"]
                                }
                            },
                            splitText: {
                                type: "chars",
                                mask: "chars"
                            }
                        }]
                    }, {
                        id: "t-e3a9dde8",
                        deleted: !1,
                        actions: [{
                            id: "ta-9e51b0a2",
                            targets: [["wf:class", ["subhead.slide._01"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .4,
                                position: 2,
                                stagger: {
                                    amount: .1
                                },
                                ease: 2
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    y: ["0%", "-120%"]
                                }
                            },
                            splitText: {
                                type: "chars"
                            }
                        }, {
                            id: "ta-e98d010a",
                            targets: [["wf:class", ["subhead.slide._02"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .4,
                                position: 2.1,
                                stagger: {
                                    amount: .1
                                },
                                ease: 2
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    y: ["0%", "-100%"]
                                }
                            },
                            splitText: {
                                type: "chars"
                            }
                        }, {
                            id: "ta-78019137",
                            targets: [["wf:class", ["subhead.slide._02"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .4,
                                position: 4,
                                stagger: {
                                    amount: .1
                                },
                                ease: 2
                            },
                            properties: {
                                "wf:transform": {
                                    y: [null, "-220%"]
                                }
                            },
                            splitText: {
                                type: "chars"
                            }
                        }, {
                            id: "ta-1e6a3960",
                            targets: [["wf:class", ["subhead.slide._03"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .4,
                                position: 4.1,
                                stagger: {
                                    amount: .1
                                },
                                ease: 2
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    y: ["0%", "-200%"]
                                }
                            },
                            splitText: {
                                type: "chars"
                            }
                        }, {
                            id: "ta-5a6ed3ee",
                            targets: [["wf:class", ["subhead.slide._03"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .4,
                                position: 6,
                                stagger: {
                                    amount: .1
                                },
                                ease: 2
                            },
                            properties: {
                                "wf:transform": {
                                    y: [null, "-320%"]
                                }
                            },
                            splitText: {
                                type: "chars"
                            }
                        }, {
                            id: "ta-6dcfa7ca",
                            targets: [["wf:class", ["subhead.slide._04"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .4,
                                position: 6.1,
                                stagger: {
                                    amount: .1
                                },
                                ease: 2
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    y: ["0%", "-300%"]
                                }
                            },
                            splitText: {
                                type: "chars"
                            }
                        }, {
                            id: "ta-746354e2",
                            targets: [["wf:class", ["subhead.slide._04"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .4,
                                position: 8,
                                stagger: {
                                    amount: .1
                                },
                                ease: 2
                            },
                            properties: {
                                "wf:transform": {
                                    y: [null, "-420%"]
                                }
                            },
                            splitText: {
                                type: "chars"
                            }
                        }, {
                            id: "ta-7d165af2",
                            targets: [["wf:class", ["subhead.slide._01"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .4,
                                position: 8.1,
                                stagger: {
                                    amount: .1
                                },
                                ease: 2
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    y: ["300%", "0%"]
                                }
                            },
                            splitText: {
                                type: "chars"
                            }
                        }],
                        settings: {
                            repeat: -1,
                            yoyo: !1
                        }
                    }, {
                        id: "t-c47c4e76",
                        deleted: !1,
                        actions: [{
                            id: "ta-f88ee11a",
                            targets: [["wf:class", ["intro"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: 0,
                                position: 0
                            },
                            tt: 3,
                            properties: {
                                "wf:class": {},
                                "wf:transform": {
                                    display: [null, "flex"]
                                },
                                "wf:style": {}
                            }
                        }, {
                            id: "ta-3732bed6",
                            targets: [["wf:class", ["loader-text-overflow"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .05,
                                position: 0,
                                ease: 2
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", "0%"]
                                }
                            }
                        }, {
                            id: "ta-1a95000b",
                            targets: [["wf:class", ["top-text.loader.scale"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                position: .02,
                                stagger: {
                                    each: .07
                                },
                                ease: 8
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", "100%"],
                                    x: ["30px", null],
                                    scale: [10, 1]
                                }
                            },
                            splitText: {
                                type: "chars"
                            }
                        }, {
                            id: "ta-a406e03e",
                            targets: [["wf:class", ["top-text.loader.scale"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                position: .94,
                                ease: 8
                            },
                            properties: {
                                "wf:transform": {
                                    x: [null, "0px"]
                                }
                            },
                            splitText: {
                                type: "chars"
                            }
                        }, {
                            id: "ta-7f3191ff",
                            targets: [["wf:class", ["loader-text-overflow"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .3,
                                position: 1.29,
                                ease: 2
                            },
                            properties: {
                                "wf:transform": {
                                    opacity: [null, "100%"]
                                }
                            }
                        }, {
                            id: "ta-0ea3e485",
                            targets: [["wf:class", ["top-text.loader.animated._01"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .3,
                                position: 1.8,
                                ease: 2
                            },
                            properties: {
                                "wf:transform": {
                                    y: [null, "-100%"]
                                }
                            }
                        }, {
                            id: "ta-8cf59ec3",
                            targets: [["wf:class", ["top-text.loader.animated._02"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .3,
                                position: 1.81,
                                ease: 2
                            },
                            properties: {
                                "wf:transform": {
                                    y: [null, "-100%"]
                                }
                            }
                        }, {
                            id: "ta-cafce408",
                            targets: [["wf:class", ["top-text.loader.animated._02"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .3,
                                position: 2.2,
                                ease: 2
                            },
                            properties: {
                                "wf:transform": {
                                    y: [null, "-200%"]
                                }
                            }
                        }, {
                            id: "ta-84b23530",
                            targets: [["wf:class", ["top-text.loader.animated._03"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .3,
                                position: 2.21,
                                ease: 2
                            },
                            properties: {
                                "wf:transform": {
                                    y: [null, "-200%"]
                                }
                            }
                        }, {
                            id: "ta-72ff8142",
                            targets: [["wf:class", ["top-text.loader.animated._03"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .3,
                                position: 2.61,
                                ease: 2
                            },
                            properties: {
                                "wf:transform": {
                                    y: [null, "-300%"]
                                }
                            }
                        }, {
                            id: "ta-16bf09f8",
                            targets: [["wf:class", ["top-text.loader.animated._04"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .3,
                                position: 2.62,
                                ease: 2
                            },
                            properties: {
                                "wf:transform": {
                                    y: [null, "-300%"]
                                }
                            }
                        }, {
                            id: "ta-7a64e2a2",
                            targets: [["wf:class", ["logo-loader-overflow"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .05,
                                position: .94,
                                ease: 2
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    height: ["300px", "50px"]
                                }
                            }
                        }, {
                            id: "ta-0551bd41",
                            targets: [["wf:class", ["logo-load"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .3,
                                position: 2.92,
                                ease: 2
                            },
                            properties: {
                                "wf:transform": {
                                    y: [null, "-120%"]
                                }
                            }
                        }, {
                            id: "ta-ad49d1ed",
                            targets: [["wf:class", ["intro"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                position: 3.06,
                                ease: 2
                            },
                            properties: {
                                "wf:transform": {
                                    y: [null, "-100%"]
                                }
                            }
                        }, {
                            id: "ta-c69ae8a1",
                            targets: [["wf:class", ["navigation-top"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }], ["wf:class", ["hero-content"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                position: 3.24,
                                ease: 8
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", "100%"],
                                    y: ["10vw", "0vw"]
                                }
                            }
                        }]
                    }, {
                        id: "t-3e27a5ff",
                        deleted: !1,
                        actions: [{
                            id: "ta-b014dae5",
                            targets: [["wf:class", ["photo-main._01"], {
                                relationship: "within",
                                filterBy: ["wf:trigger-only", ""],
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .15,
                                position: .01,
                                ease: 2
                            },
                            properties: {
                                "wf:transform": {
                                    y: [null, "-110%"]
                                }
                            }
                        }, {
                            id: "ta-0d0dfd4b",
                            targets: [["wf:class", ["image-animation._02"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .17,
                                position: 0,
                                ease: 3
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    scale: [1.6, 1]
                                }
                            }
                        }, {
                            id: "ta-9fac11b9",
                            targets: [["wf:class", ["text-animation-card._01"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .1,
                                position: .02,
                                stagger: {
                                    each: .05
                                },
                                ease: 2
                            },
                            properties: {
                                "wf:transform": {
                                    opacity: [null, "0%"],
                                    y: [null, "-100%"]
                                }
                            },
                            splitText: {
                                type: "lines"
                            }
                        }, {
                            id: "ta-0caf56fc",
                            targets: [["wf:class", ["card-text._01"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .06,
                                position: .02,
                                stagger: {
                                    amount: .03
                                },
                                ease: 2
                            },
                            properties: {
                                "wf:transform": {
                                    opacity: [null, "0%"],
                                    y: [null, "-100%"]
                                }
                            },
                            splitText: {
                                type: "lines"
                            }
                        }, {
                            id: "ta-42740793",
                            targets: [["wf:class", ["text-animation-card._02"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .1,
                                position: .04,
                                stagger: {
                                    amount: .05
                                },
                                ease: 2
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", "100%"],
                                    y: ["100%", "0%"]
                                }
                            },
                            splitText: {
                                type: "lines"
                            }
                        }, {
                            id: "ta-f4b8c567",
                            targets: [["wf:class", ["card-text._02"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .06,
                                position: .14,
                                stagger: {
                                    amount: .03
                                },
                                ease: 2
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", "100%"],
                                    y: ["100%", "0%"]
                                }
                            },
                            splitText: {
                                type: "lines"
                            }
                        }, {
                            id: "ta-5448f699",
                            targets: [["wf:class", ["photo-main._02"], {
                                relationship: "within",
                                filterBy: ["wf:trigger-only", ""],
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .15,
                                position: .5,
                                ease: 2
                            },
                            properties: {
                                "wf:transform": {
                                    y: [null, "-110%"]
                                }
                            }
                        }, {
                            id: "ta-29e6a813",
                            targets: [["wf:class", ["image-animation._03"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .17,
                                position: .49,
                                ease: 3
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    scale: [1.6, 1]
                                }
                            }
                        }, {
                            id: "ta-398e7c88",
                            targets: [["wf:class", ["text-animation-card._02"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .1,
                                position: .52,
                                stagger: {
                                    amount: .05
                                },
                                ease: 2
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["100%", "0%"],
                                    y: ["0%", "-100%"]
                                }
                            },
                            splitText: {
                                type: "lines"
                            }
                        }, {
                            id: "ta-e62f025a",
                            targets: [["wf:class", ["card-text._02"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .06,
                                position: .53,
                                stagger: {
                                    amount: .03
                                },
                                ease: 2
                            },
                            properties: {
                                "wf:transform": {
                                    opacity: [null, "0%"],
                                    y: [null, "-100%"]
                                }
                            },
                            splitText: {
                                type: "lines"
                            }
                        }, {
                            id: "ta-6fbc97a1",
                            targets: [["wf:class", ["text-animation-card._03"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .1,
                                position: .58,
                                stagger: {
                                    amount: .05
                                },
                                ease: 2
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", "100%"],
                                    y: ["100%", "0%"]
                                }
                            },
                            splitText: {
                                type: "lines"
                            }
                        }, {
                            id: "ta-54688aa1",
                            targets: [["wf:class", ["card-text._03"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .06,
                                position: .65,
                                stagger: {
                                    amount: .03
                                },
                                ease: 2
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", "100%"],
                                    y: ["100%", "0%"]
                                }
                            },
                            splitText: {
                                type: "lines"
                            }
                        }]
                    }, {
                        id: "t-bece48f7",
                        deleted: !1,
                        actions: [{
                            id: "ta-a3c9a93f",
                            targets: [["wf:class", ["h1.full-section._01"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: 0,
                                position: 0,
                                ease: 0
                            },
                            tt: 3,
                            properties: {
                                "wf:class": {
                                    class: {
                                        selectors: [],
                                        operation: "addClass"
                                    }
                                },
                                "wf:transform": {
                                    x: [null, "70px"],
                                    y: [null, "120%"]
                                }
                            }
                        }, {
                            id: "ta-277ee692",
                            targets: [["wf:class", ["h1.full-section._02"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: 0,
                                position: 0,
                                ease: 0
                            },
                            tt: 3,
                            properties: {
                                "wf:class": {
                                    class: {
                                        selectors: [],
                                        operation: "addClass"
                                    }
                                },
                                "wf:transform": {
                                    x: [null, "-70px"],
                                    y: [null, "120%"]
                                }
                            }
                        }, {
                            id: "ta-50618b16",
                            targets: [["wf:class", ["video-link"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: 0,
                                position: 0,
                                ease: 0
                            },
                            tt: 3,
                            properties: {
                                "wf:class": {},
                                "wf:transform": {
                                    scale: [null, .9],
                                    opacity: [null, "0%"]
                                }
                            }
                        }, {
                            id: "ta-37ca56ea",
                            targets: [["wf:class", ["h1.full-section._01"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .02,
                                position: 0,
                                stagger: {
                                    each: .005
                                },
                                ease: 11
                            },
                            properties: {
                                "wf:transform": {
                                    y: [null, "-120%"]
                                }
                            },
                            splitText: {
                                type: "chars"
                            }
                        }, {
                            id: "ta-5fce6492",
                            targets: [["wf:class", ["h1.full-section._02"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .02,
                                position: .03,
                                stagger: {
                                    each: .005
                                },
                                ease: 11
                            },
                            properties: {
                                "wf:transform": {
                                    y: [null, "-120%"]
                                }
                            },
                            splitText: {
                                type: "chars"
                            }
                        }, {
                            id: "ta-9901b739",
                            targets: [["wf:class", ["h1.full-section._01"], {
                                relationship: "within",
                                filterBy: ["wf:trigger-only", ""],
                                firstMatchOnly: !1
                            }], ["wf:class", ["h1.full-section._02"], {
                                relationship: "within",
                                filterBy: ["wf:trigger-only", ""],
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .02,
                                position: .06,
                                ease: 2
                            },
                            properties: {
                                "wf:transform": {
                                    x: [null, "0px"]
                                }
                            }
                        }, {
                            id: "ta-30049c7d",
                            targets: [["wf:class", ["video-link"], {
                                relationship: "within",
                                filterBy: ["wf:trigger-only", ""],
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .02,
                                position: .08,
                                ease: 11
                            },
                            properties: {
                                "wf:transform": {
                                    scale: [null, 1],
                                    opacity: [null, "100%"]
                                }
                            }
                        }, {
                            id: "ta-4b28fac0",
                            targets: [["wf:class", ["video-image"], {
                                relationship: "within",
                                filterBy: ["wf:trigger-only", ""],
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .3,
                                position: .1,
                                ease: 0
                            },
                            properties: {
                                "wf:transform": {
                                    opacity: [null, "70%"],
                                    y: [null, "5%"],
                                    scale: [null, 1.1]
                                }
                            }
                        }]
                    }, {
                        id: "t-3cc91c00",
                        deleted: !1,
                        actions: [{
                            id: "ta-41e38320",
                            targets: [["wf:class", [], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .05,
                                position: 0,
                                ease: 2
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", null]
                                }
                            }
                        }, {
                            id: "ta-f391c5e6",
                            targets: [["wf:inst", ["699ed6f18aceafc086e38a65", "668513fa-96bc-a471-9254-1244961a6485"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .3,
                                position: .02,
                                stagger: {
                                    amount: .2
                                },
                                ease: 3
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    y: ["900%", "0%"],
                                    opacity: ["0%", "100%"]
                                }
                            },
                            splitText: {
                                type: "chars"
                            }
                        }, {
                            id: "ta-4ea19131",
                            targets: [["wf:class", [], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: 1,
                                position: .68,
                                ease: 6
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    y: ["0%", "-120%"]
                                }
                            }
                        }, {
                            id: "ta-65b5eb04",
                            targets: [["wf:inst", ["699ed6f18aceafc086e38a65", "ce714b43-ca02-f75e-a30b-e50c0386be7f"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: 1.6,
                                position: .19,
                                ease: 6
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    y: ["10%", "0%"]
                                }
                            }
                        }, {
                            id: "ta-20c0c84a",
                            targets: [["wf:class", [""], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                position: 1.35,
                                stagger: {
                                    each: .09
                                },
                                ease: 2
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    scale: [0, 1]
                                }
                            }
                        }, {
                            id: "ta-b73f7a39",
                            targets: [["wf:inst", ["699ed6f18aceafc086e38a65", "11f4fc70-8a2d-088c-43e4-29580902aa2d"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .4,
                                position: 1.56,
                                stagger: {
                                    amount: .5
                                },
                                ease: 3
                            },
                            tt: 1,
                            properties: {
                                "wf:transform": {
                                    y: ["100%", null]
                                }
                            },
                            splitText: {
                                type: "chars",
                                mask: "chars"
                            }
                        }, {
                            id: "ta-75cabaca",
                            targets: [["wf:inst", ["699ed6f18aceafc086e38a65", "57b5af3e-8de7-1a3d-0bcc-71e02f1dacc5"], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .4,
                                position: 2.08,
                                stagger: {
                                    amount: .5
                                },
                                ease: 3
                            },
                            tt: 1,
                            properties: {
                                "wf:transform": {
                                    y: ["100%", null]
                                }
                            },
                            splitText: {
                                type: "chars",
                                mask: "chars"
                            }
                        }, {
                            id: "ta-7a9d7304",
                            targets: [["wf:class", [""], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: .2,
                                position: 3.06,
                                ease: 7
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["0%", "100%"]
                                }
                            }
                        }, {
                            id: "ta-67e84272",
                            targets: [["wf:class", [""], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                position: 2.65,
                                stagger: {
                                    amount: .4
                                },
                                ease: 3
                            },
                            tt: 1,
                            properties: {
                                "wf:transform": {
                                    y: ["100%", null]
                                }
                            },
                            splitText: {
                                type: "words",
                                mask: "words"
                            }
                        }, {
                            id: "ta-9ca0f401",
                            targets: [["wf:class", [], {
                                relationship: "none",
                                firstMatchOnly: !1
                            }]],
                            timing: {
                                duration: 0,
                                position: 3.29,
                                ease: 2
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    opacity: ["100%", null]
                                }
                            }
                        }]
                    }]),
                    window.dispatchEvent(new CustomEvent("__wf_ix3_ready")),
                    document.documentElement.classList.add("w-mod-ix3"))
                }
                )
            }
            Webflow.require("ix2").init({
                events: {
                    "e-93": {
                        id: "e-93",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-260"
                            }
                        },
                        mediaQueries: ["medium", "small", "tiny"],
                        target: {
                            selector: ".hero-pricing-div",
                            originalId: "6825ea9eb7381332f90db208|d60c3446-b29e-86a4-7341-0279a74119e1",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".hero-pricing-div",
                            originalId: "6825ea9eb7381332f90db208|d60c3446-b29e-86a4-7341-0279a74119e1",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 300,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x18fc83cb2ea
                    },
                    "e-149": {
                        id: "e-149",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-365"
                            }
                        },
                        mediaQueries: ["medium", "small", "tiny"],
                        target: {
                            selector: ".hero-pricing-link",
                            originalId: "6825ea9eb7381332f90db208|13f98ad5-89df-8ab9-69f0-05f554263e55",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".hero-pricing-link",
                            originalId: "6825ea9eb7381332f90db208|13f98ad5-89df-8ab9-69f0-05f554263e55",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 300,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x18fc83c77d8
                    },
                    "e-186": {
                        id: "e-186",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-187"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "c406bd2e-a066-15b4-8717-9d5ba6e07a98",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "c406bd2e-a066-15b4-8717-9d5ba6e07a98",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 15,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x196b5573085
                    },
                    "e-260": {
                        id: "e-260",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-261"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "c406bd2e-a066-15b4-8717-9d5ba6e07a99",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "c406bd2e-a066-15b4-8717-9d5ba6e07a99",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x196fc2329e4
                    },
                    "e-262": {
                        id: "e-262",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-263"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "c406bd2e-a066-15b4-8717-9d5ba6e07a9c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "c406bd2e-a066-15b4-8717-9d5ba6e07a9c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x196fc234194
                    },
                    "e-264": {
                        id: "e-264",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-265"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "c406bd2e-a066-15b4-8717-9d5ba6e07a9e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "c406bd2e-a066-15b4-8717-9d5ba6e07a9e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x196fc237724
                    },
                    "e-1063": {
                        id: "e-1063",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1064"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "df305e81-b48d-c5fc-e32e-e795c1b8a94b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "df305e81-b48d-c5fc-e32e-e795c1b8a94b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x198bcd9523b
                    },
                    "e-1104": {
                        id: "e-1104",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1105"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".wrok-card-wrapper",
                            originalId: "699ed6f18aceafc086e38a65|f02d5005-9aa8-c402-61f1-7e323a8e0b81",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".wrok-card-wrapper",
                            originalId: "699ed6f18aceafc086e38a65|f02d5005-9aa8-c402-61f1-7e323a8e0b81",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 15,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x199ec85ea2c
                    },
                    "e-1134": {
                        id: "e-1134",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1135"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".service-item",
                            originalId: "c2839d10-ba96-7988-8bad-d65fd19ecb18",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".service-item",
                            originalId: "c2839d10-ba96-7988-8bad-d65fd19ecb18",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x199f1fbe0a1
                    },
                    "e-1136": {
                        id: "e-1136",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInTop",
                                autoStopEventId: "e-1137"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "65ae50dc-c2e2-aac2-89ea-e734043c6018",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "65ae50dc-c2e2-aac2-89ea-e734043c6018",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 5,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "TOP",
                            effectIn: !0
                        },
                        createdOn: 0x199f1ff286a
                    },
                    "e-1138": {
                        id: "e-1138",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1139"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "65ae50dc-c2e2-aac2-89ea-e734043c601f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "65ae50dc-c2e2-aac2-89ea-e734043c601f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 5,
                            scrollOffsetUnit: "%",
                            delay: 100,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x199f1ff4c5a
                    },
                    "e-1140": {
                        id: "e-1140",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1141"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "65ae50dc-c2e2-aac2-89ea-e734043c6026",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "65ae50dc-c2e2-aac2-89ea-e734043c6026",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 5,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x199f1ff78d3
                    },
                    "e-1142": {
                        id: "e-1142",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1143"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "65ae50dc-c2e2-aac2-89ea-e734043c602d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "65ae50dc-c2e2-aac2-89ea-e734043c602d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 5,
                            scrollOffsetUnit: "%",
                            delay: 300,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x199f1ffaa5c
                    },
                    "e-1144": {
                        id: "e-1144",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1145"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "a1aafccb-4331-a733-4b8d-24cbb3e4ecd1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "a1aafccb-4331-a733-4b8d-24cbb3e4ecd1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 3,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x199f1ffd4d9
                    },
                    "e-1146": {
                        id: "e-1146",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1147"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "a1aafccb-4331-a733-4b8d-24cbb3e4ecdb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "a1aafccb-4331-a733-4b8d-24cbb3e4ecdb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 3,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x199f1fff6d6
                    },
                    "e-1148": {
                        id: "e-1148",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1149"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "a1aafccb-4331-a733-4b8d-24cbb3e4ecf1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "a1aafccb-4331-a733-4b8d-24cbb3e4ecf1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 3,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x199f20014f6
                    },
                    "e-1150": {
                        id: "e-1150",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1151"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "a1aafccb-4331-a733-4b8d-24cbb3e4ecfc",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "a1aafccb-4331-a733-4b8d-24cbb3e4ecfc",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 3,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x199f2003424
                    },
                    "e-1152": {
                        id: "e-1152",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1153"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "a1aafccb-4331-a733-4b8d-24cbb3e4ecfe",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "a1aafccb-4331-a733-4b8d-24cbb3e4ecfe",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 3,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x199f20053d1
                    },
                    "e-1222": {
                        id: "e-1222",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1223"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "699ed6f18aceafc086e38a65|0b3fba00-485a-ccae-cf4e-2508ee5c7bbb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a65|0b3fba00-485a-ccae-cf4e-2508ee5c7bbb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a91d64350
                    },
                    "e-1224": {
                        id: "e-1224",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1225"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "699ed6f18aceafc086e38a65|3b94190e-aeef-faf5-e182-2633d31f0d5a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a65|3b94190e-aeef-faf5-e182-2633d31f0d5a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a91d66e7e
                    },
                    "e-1226": {
                        id: "e-1226",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1227"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".item-wrapper",
                            originalId: "699ed6f18aceafc086e38a65|f20b2d31-a485-ad00-82e8-34afac845bba",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".item-wrapper",
                            originalId: "699ed6f18aceafc086e38a65|f20b2d31-a485-ad00-82e8-34afac845bba",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a91d6a35c
                    },
                    "e-1228": {
                        id: "e-1228",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1229"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "699ed6f18aceafc086e38a65|db653101-3a9f-9012-40ad-24029248e22f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a65|db653101-3a9f-9012-40ad-24029248e22f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a91d6e40b
                    },
                    "e-1230": {
                        id: "e-1230",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1231"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "699ed6f18aceafc086e38a65|65c5b745-1429-2408-d8e6-3cf8f68cf928",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a65|65c5b745-1429-2408-d8e6-3cf8f68cf928",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a91d709bf
                    },
                    "e-1232": {
                        id: "e-1232",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1233"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".project-content",
                            originalId: "699ed6f18aceafc086e38a65|5e037f65-cf63-29d2-37b6-515bd639d9ca",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".project-content",
                            originalId: "699ed6f18aceafc086e38a65|5e037f65-cf63-29d2-37b6-515bd639d9ca",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a91db9c40
                    },
                    "e-1374": {
                        id: "e-1374",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1375"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "699ed6f18aceafc086e38a7c|98e5a629-040a-2bd7-1756-9510235945fb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a7c|98e5a629-040a-2bd7-1756-9510235945fb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 1200,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19be524fdd2
                    },
                    "e-1384": {
                        id: "e-1384",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInTop",
                                autoStopEventId: "e-1385"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "699ed6f18aceafc086e38a7d|98e5a629-040a-2bd7-1756-9510235945e7",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a7d|98e5a629-040a-2bd7-1756-9510235945e7",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 800,
                            direction: "TOP",
                            effectIn: !0
                        },
                        createdOn: 0x19be53d951a
                    },
                    "e-1386": {
                        id: "e-1386",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1387"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "699ed6f18aceafc086e38a7d|98e5a629-040a-2bd7-1756-9510235945fb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a7d|98e5a629-040a-2bd7-1756-9510235945fb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 1200,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19be53d951a
                    },
                    "e-1391": {
                        id: "e-1391",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1392"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "699ed6f18aceafc086e38a7c|c4817a30-3707-76ea-317f-b1a2c3f37a10",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a7c|c4817a30-3707-76ea-317f-b1a2c3f37a10",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 800,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19be53f06e3
                    },
                    "e-1394": {
                        id: "e-1394",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInTop",
                                autoStopEventId: "e-1395"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "699ed6f18aceafc086e38a7c|184bdfaa-f9a6-e147-86cf-6f8f37a3d74b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a7c|184bdfaa-f9a6-e147-86cf-6f8f37a3d74b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 800,
                            direction: "TOP",
                            effectIn: !0
                        },
                        createdOn: 0x19be65fc68f
                    },
                    "e-1513": {
                        id: "e-1513",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1514"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "699ed6f18aceafc086e38a6e|0b3fba00-485a-ccae-cf4e-2508ee5c7bbb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a6e|0b3fba00-485a-ccae-cf4e-2508ee5c7bbb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19c0f1a2da0
                    },
                    "e-1515": {
                        id: "e-1515",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1516"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "699ed6f18aceafc086e38a6e|3b94190e-aeef-faf5-e182-2633d31f0d5a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a6e|3b94190e-aeef-faf5-e182-2633d31f0d5a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19c0f1a2da0
                    },
                    "e-1517": {
                        id: "e-1517",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1518"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "699ed6f18aceafc086e38a6e|db653101-3a9f-9012-40ad-24029248e22f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a6e|db653101-3a9f-9012-40ad-24029248e22f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19c0f1a2da0
                    },
                    "e-1519": {
                        id: "e-1519",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1520"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "699ed6f18aceafc086e38a6e|65c5b745-1429-2408-d8e6-3cf8f68cf928",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a6e|65c5b745-1429-2408-d8e6-3cf8f68cf928",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19c0f1a2da0
                    },
                    "e-1565": {
                        id: "e-1565",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-2232"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "699ed6f18aceafc086e38a72|0b3fba00-485a-ccae-cf4e-2508ee5c7bbb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a72|0b3fba00-485a-ccae-cf4e-2508ee5c7bbb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19c0f22f693
                    },
                    "e-1567": {
                        id: "e-1567",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1568"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "699ed6f18aceafc086e38a72|3b94190e-aeef-faf5-e182-2633d31f0d5a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a72|3b94190e-aeef-faf5-e182-2633d31f0d5a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19c0f22f693
                    },
                    "e-1569": {
                        id: "e-1569",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-2223"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "699ed6f18aceafc086e38a72|db653101-3a9f-9012-40ad-24029248e22f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a72|db653101-3a9f-9012-40ad-24029248e22f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19c0f22f693
                    },
                    "e-1571": {
                        id: "e-1571",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-2230"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "699ed6f18aceafc086e38a72|65c5b745-1429-2408-d8e6-3cf8f68cf928",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a72|65c5b745-1429-2408-d8e6-3cf8f68cf928",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19c0f22f693
                    },
                    "e-1708": {
                        id: "e-1708",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1709"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "699ed6f18aceafc086e38a75|0b3fba00-485a-ccae-cf4e-2508ee5c7bbb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a75|0b3fba00-485a-ccae-cf4e-2508ee5c7bbb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19c100099fb
                    },
                    "e-1710": {
                        id: "e-1710",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1711"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "699ed6f18aceafc086e38a75|3b94190e-aeef-faf5-e182-2633d31f0d5a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a75|3b94190e-aeef-faf5-e182-2633d31f0d5a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19c100099fb
                    },
                    "e-1712": {
                        id: "e-1712",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1713"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "699ed6f18aceafc086e38a75|db653101-3a9f-9012-40ad-24029248e22f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a75|db653101-3a9f-9012-40ad-24029248e22f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19c100099fb
                    },
                    "e-1714": {
                        id: "e-1714",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1715"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "699ed6f18aceafc086e38a75|65c5b745-1429-2408-d8e6-3cf8f68cf928",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a75|65c5b745-1429-2408-d8e6-3cf8f68cf928",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19c100099fb
                    },
                    "e-1787": {
                        id: "e-1787",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1788"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "699ed6f18aceafc086e38a78|0b3fba00-485a-ccae-cf4e-2508ee5c7bbb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a78|0b3fba00-485a-ccae-cf4e-2508ee5c7bbb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19c10db0549
                    },
                    "e-1789": {
                        id: "e-1789",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1790"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "699ed6f18aceafc086e38a78|3b94190e-aeef-faf5-e182-2633d31f0d5a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a78|3b94190e-aeef-faf5-e182-2633d31f0d5a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19c10db0549
                    },
                    "e-1791": {
                        id: "e-1791",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1792"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "699ed6f18aceafc086e38a78|db653101-3a9f-9012-40ad-24029248e22f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a78|db653101-3a9f-9012-40ad-24029248e22f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19c10db0549
                    },
                    "e-1793": {
                        id: "e-1793",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1794"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "699ed6f18aceafc086e38a78|65c5b745-1429-2408-d8e6-3cf8f68cf928",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a78|65c5b745-1429-2408-d8e6-3cf8f68cf928",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19c10db0549
                    },
                    "e-1952": {
                        id: "e-1952",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1953"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "699ed6f18aceafc086e38a6e|e2c6c403-5b03-a841-804f-27cda4fa7855",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a6e|e2c6c403-5b03-a841-804f-27cda4fa7855",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19c1af411c8
                    },
                    "e-1976": {
                        id: "e-1976",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1977"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "699ed6f18aceafc086e38a6e|02e62b17-2d2b-58b8-d9dc-41f8d34bfcfa",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a6e|02e62b17-2d2b-58b8-d9dc-41f8d34bfcfa",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19c1afe677a
                    },
                    "e-1978": {
                        id: "e-1978",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1979"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "699ed6f18aceafc086e38a6e|02e62b17-2d2b-58b8-d9dc-41f8d34bfcfd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a6e|02e62b17-2d2b-58b8-d9dc-41f8d34bfcfd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19c1afe677a
                    },
                    "e-1980": {
                        id: "e-1980",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-1981"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "699ed6f18aceafc086e38a6e|02e62b17-2d2b-58b8-d9dc-41f8d34bfd00",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a6e|02e62b17-2d2b-58b8-d9dc-41f8d34bfd00",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 5,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x19c1afe677a
                    },
                    "e-1982": {
                        id: "e-1982",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1983"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "699ed6f18aceafc086e38a6e|02e62b17-2d2b-58b8-d9dc-41f8d34bfd63",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a6e|02e62b17-2d2b-58b8-d9dc-41f8d34bfd63",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19c1afe677a
                    },
                    "e-2045": {
                        id: "e-2045",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-2046"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "27eb354a-fcce-9a8d-a738-4459bfb2d219",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "27eb354a-fcce-9a8d-a738-4459bfb2d219",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 5,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19c6b16112e
                    },
                    "e-2198": {
                        id: "e-2198",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "NAVBAR_CLOSE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-239",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-2200"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "3f11dda1-59af-fb4a-c839-097037349a12",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "3f11dda1-59af-fb4a-c839-097037349a12",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19c951ec4aa
                    },
                    "e-2200": {
                        id: "e-2200",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "NAVBAR_OPEN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-235",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-2198"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "3f11dda1-59af-fb4a-c839-097037349a12",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "3f11dda1-59af-fb4a-c839-097037349a12",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19c951ec4aa
                    },
                    "e-2202": {
                        id: "e-2202",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-246",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "699ed6f18aceafc086e38a65|ec015b33-9a50-336d-2e03-0d3123de86d0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a65|ec015b33-9a50-336d-2e03-0d3123de86d0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-246-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x1990ff8f759
                    },
                    "e-2203": {
                        id: "e-2203",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-247",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "699ed6f18aceafc086e38a65|c241ff96-b3bb-064f-293f-7edacc41ffcc",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a65|c241ff96-b3bb-064f-293f-7edacc41ffcc",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-247-p",
                            smoothing: 90,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 80
                        }],
                        createdOn: 0x1990ffcc25b
                    },
                    "e-2204": {
                        id: "e-2204",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-246",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "699ed6f18aceafc086e38a65|0f4de98b-0c4a-dd0e-d659-f775c7baca04",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a65|0f4de98b-0c4a-dd0e-d659-f775c7baca04",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-246-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19ca08ad408
                    },
                    "e-2207": {
                        id: "e-2207",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_MOVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-251",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "699ed6f18aceafc086e38a65",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a65",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-251-p",
                            selectedAxis: "X_AXIS",
                            basedOn: "VIEWPORT",
                            reverse: !1,
                            smoothing: 90,
                            restingState: 50
                        }, {
                            continuousParameterGroupId: "a-251-p-2",
                            selectedAxis: "Y_AXIS",
                            basedOn: "VIEWPORT",
                            reverse: !1,
                            smoothing: 90,
                            restingState: 50
                        }],
                        createdOn: 0x19cb39ef6c0
                    },
                    "e-2208": {
                        id: "e-2208",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-252",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-2209"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".thumb-link-wrapper",
                            originalId: "2a297b0d-4979-a14b-49af-bfcf9256c9e6",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".thumb-link-wrapper",
                            originalId: "2a297b0d-4979-a14b-49af-bfcf9256c9e6",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19bf735ce8b
                    },
                    "e-2209": {
                        id: "e-2209",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-253",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-2208"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".thumb-link-wrapper",
                            originalId: "2a297b0d-4979-a14b-49af-bfcf9256c9e6",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".thumb-link-wrapper",
                            originalId: "2a297b0d-4979-a14b-49af-bfcf9256c9e6",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19bf735ce8c
                    },
                    "e-2224": {
                        id: "e-2224",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-255",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-2225"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".toggle-wrapper",
                            originalId: "699ed6f18aceafc086e38a65|abb370a3-11d7-de18-9cf1-85a01ebe1cdb",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".toggle-wrapper",
                            originalId: "699ed6f18aceafc086e38a65|abb370a3-11d7-de18-9cf1-85a01ebe1cdb",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19b99c92373
                    },
                    "e-2225": {
                        id: "e-2225",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_SECOND_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-256",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-2224"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".toggle-wrapper",
                            originalId: "699ed6f18aceafc086e38a65|abb370a3-11d7-de18-9cf1-85a01ebe1cdb",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".toggle-wrapper",
                            originalId: "699ed6f18aceafc086e38a65|abb370a3-11d7-de18-9cf1-85a01ebe1cdb",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19b99c92375
                    },
                    "e-2228": {
                        id: "e-2228",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_START",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-257",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-2229"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "699ed6f18aceafc086e38a65",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a65",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19cbab577b2
                    },
                    "e-2230": {
                        id: "e-2230",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-258",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-2231"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".blog-main-wrapper",
                            originalId: "66ec0f031f832b00669c54d0|b15cc58e-053e-5d7f-ffea-2c0ed793a72d",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".blog-main-wrapper",
                            originalId: "66ec0f031f832b00669c54d0|b15cc58e-053e-5d7f-ffea-2c0ed793a72d",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1920f1bdd59
                    },
                    "e-2231": {
                        id: "e-2231",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-259",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-2230"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".blog-main-wrapper",
                            originalId: "66ec0f031f832b00669c54d0|b15cc58e-053e-5d7f-ffea-2c0ed793a72d",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".blog-main-wrapper",
                            originalId: "66ec0f031f832b00669c54d0|b15cc58e-053e-5d7f-ffea-2c0ed793a72d",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1920f1bdd5b
                    },
                    "e-2232": {
                        id: "e-2232",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-260",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-2233"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".blog-main-wrapper",
                            originalId: "66ec0f031f832b00669c54d0|b15cc58e-053e-5d7f-ffea-2c0ed793a72d",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".blog-main-wrapper",
                            originalId: "66ec0f031f832b00669c54d0|b15cc58e-053e-5d7f-ffea-2c0ed793a72d",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1920f1d3288
                    },
                    "e-2233": {
                        id: "e-2233",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-261",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-2232"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".blog-main-wrapper",
                            originalId: "66ec0f031f832b00669c54d0|b15cc58e-053e-5d7f-ffea-2c0ed793a72d",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".blog-main-wrapper",
                            originalId: "66ec0f031f832b00669c54d0|b15cc58e-053e-5d7f-ffea-2c0ed793a72d",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1920f1d328a
                    },
                    "e-2234": {
                        id: "e-2234",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-262",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "699ed6f18aceafc086e38a65|c0e07456-1f63-68fc-9b2c-761334496c07",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a65|c0e07456-1f63-68fc-9b2c-761334496c07",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-262-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19320880673
                    },
                    "e-2235": {
                        id: "e-2235",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-247",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "699ed6f18aceafc086e38a72|38093fcb-efa5-7cd9-0797-07307297c97a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a72|38093fcb-efa5-7cd9-0797-07307297c97a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-247-p",
                            smoothing: 90,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 80
                        }],
                        createdOn: 0x19cbe5612e0
                    },
                    "e-2236": {
                        id: "e-2236",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-246",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "699ed6f18aceafc086e38a72|38093fcb-efa5-7cd9-0797-07307297c983",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a72|38093fcb-efa5-7cd9-0797-07307297c983",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-246-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19cbe5612e0
                    },
                    "e-2237": {
                        id: "e-2237",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-262",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "699ed6f18aceafc086e38a75|445757ee-9205-a9a3-c7c0-a32a5258cd03",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a75|445757ee-9205-a9a3-c7c0-a32a5258cd03",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-262-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19cbe6378fe
                    },
                    "e-2238": {
                        id: "e-2238",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-2239"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "69a993e7cc38205232312749|0b3fba00-485a-ccae-cf4e-2508ee5c7bbb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69a993e7cc38205232312749|0b3fba00-485a-ccae-cf4e-2508ee5c7bbb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19cbe69c502
                    },
                    "e-2240": {
                        id: "e-2240",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-2241"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "69a993e7cc38205232312749|3b94190e-aeef-faf5-e182-2633d31f0d5a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69a993e7cc38205232312749|3b94190e-aeef-faf5-e182-2633d31f0d5a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19cbe69c502
                    },
                    "e-2242": {
                        id: "e-2242",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-2243"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "69a993e7cc38205232312749|db653101-3a9f-9012-40ad-24029248e22f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69a993e7cc38205232312749|db653101-3a9f-9012-40ad-24029248e22f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19cbe69c502
                    },
                    "e-2244": {
                        id: "e-2244",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-2245"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "69a993e7cc38205232312749|65c5b745-1429-2408-d8e6-3cf8f68cf928",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69a993e7cc38205232312749|65c5b745-1429-2408-d8e6-3cf8f68cf928",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19cbe69c502
                    },
                    "e-2246": {
                        id: "e-2246",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_MOVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-251",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "69a993e7cc38205232312749",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "69a993e7cc38205232312749",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-251-p",
                            selectedAxis: "X_AXIS",
                            basedOn: "VIEWPORT",
                            reverse: !1,
                            smoothing: 90,
                            restingState: 50
                        }, {
                            continuousParameterGroupId: "a-251-p-2",
                            selectedAxis: "Y_AXIS",
                            basedOn: "VIEWPORT",
                            reverse: !1,
                            smoothing: 90,
                            restingState: 50
                        }],
                        createdOn: 0x19cbe7ddab5
                    },
                    "e-2248": {
                        id: "e-2248",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-247",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "699ed6f18aceafc086e38a6a|31981d41-e5ff-1eef-e37c-abfa24ac0b90",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a6a|31981d41-e5ff-1eef-e37c-abfa24ac0b90",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-247-p",
                            smoothing: 90,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 80
                        }],
                        createdOn: 0x19cc00244c4
                    },
                    "e-2249": {
                        id: "e-2249",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-246",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "699ed6f18aceafc086e38a6a|31981d41-e5ff-1eef-e37c-abfa24ac0b99",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a6a|31981d41-e5ff-1eef-e37c-abfa24ac0b99",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-246-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19cc00244c4
                    },
                    "e-2250": {
                        id: "e-2250",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-262",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "699ed6f18aceafc086e38a6d|13913d2f-392c-8da7-de09-93e7e0520135",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a6d|13913d2f-392c-8da7-de09-93e7e0520135",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-262-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19cc01163f9
                    },
                    "e-2251": {
                        id: "e-2251",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "DROPDOWN_OPEN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-263",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-2252"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "699ed6f18aceafc086e38a65|930752cd-daa4-5352-6fc8-ce6de004993f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a65|930752cd-daa4-5352-6fc8-ce6de004993f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19c8b3f29cb
                    },
                    "e-2252": {
                        id: "e-2252",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "DROPDOWN_CLOSE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-264",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-2251"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "699ed6f18aceafc086e38a65|930752cd-daa4-5352-6fc8-ce6de004993f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "699ed6f18aceafc086e38a65|930752cd-daa4-5352-6fc8-ce6de004993f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19c8b3f29ce
                    },
                    "e-2253": {
                        id: "e-2253",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-265",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-2254"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".template-slide",
                            originalId: "699ed6f18aceafc086e38a65|930752cd-daa4-5352-6fc8-ce6de0049948",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".template-slide",
                            originalId: "699ed6f18aceafc086e38a65|930752cd-daa4-5352-6fc8-ce6de0049948",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19cc3a782a9
                    },
                    "e-2254": {
                        id: "e-2254",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-266",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-2253"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".template-slide",
                            originalId: "699ed6f18aceafc086e38a65|930752cd-daa4-5352-6fc8-ce6de0049948",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".template-slide",
                            originalId: "699ed6f18aceafc086e38a65|930752cd-daa4-5352-6fc8-ce6de0049948",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19cc3a782ac
                    },
                    "e-2257": {
                        id: "e-2257",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-267",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-2258"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            appliesTo: "PAGE",
                            styleBlockIds: [],
                            id: "699ed6f18aceafc086e38a65"
                        },
                        targets: [],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 4,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19ce18e2eac
                    },
                    "e-2258": {
                        id: "e-2258",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-268",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-2257"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            appliesTo: "PAGE",
                            styleBlockIds: [],
                            id: "699ed6f18aceafc086e38a65"
                        },
                        targets: [],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19ce18e2ead
                    }
                },
                actionLists: {
                    "a-239": {
                        id: "a-239",
                        title: "Navbar Close",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-239-n",
                                actionTypeId: "PLUGIN_LOTTIE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".lottie-white",
                                        selectorGuids: ["b61dad6a-5e96-211c-5318-40f3261f4922"]
                                    },
                                    value: 0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17a9ec8f4a7
                    },
                    "a-235": {
                        id: "a-235",
                        title: "Navbar Open",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-235-n",
                                actionTypeId: "PLUGIN_LOTTIE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 600,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".lottie-white",
                                        selectorGuids: ["b61dad6a-5e96-211c-5318-40f3261f4922"]
                                    },
                                    value: 66
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17a9ec81501
                    },
                    "a-246": {
                        id: "a-246",
                        title: "Project Image Animation",
                        continuousParameterGroups: [{
                            id: "a-246-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-246-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "PARENT",
                                            selector: ".work-wrapper",
                                            selectorGuids: ["2077dea0-a4dc-301d-4a29-060a9e96868f"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-246-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "SIBLINGS",
                                            selector: ".text-info-bottom",
                                            selectorGuids: ["596ead9e-e06b-7d8a-04e7-a12ad72fa7fd"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-246-n-5",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "SIBLINGS",
                                            selector: ".text-info-bottom",
                                            selectorGuids: ["596ead9e-e06b-7d8a-04e7-a12ad72fa7fd"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 10,
                                actionItems: [{
                                    id: "a-246-n-6",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "SIBLINGS",
                                            selector: ".text-info-bottom",
                                            selectorGuids: ["596ead9e-e06b-7d8a-04e7-a12ad72fa7fd"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-246-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "PARENT",
                                            selector: ".work-wrapper",
                                            selectorGuids: ["2077dea0-a4dc-301d-4a29-060a9e96868f"]
                                        },
                                        yValue: 45,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-246-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "SIBLINGS",
                                            selector: ".text-info-bottom",
                                            selectorGuids: ["596ead9e-e06b-7d8a-04e7-a12ad72fa7fd"]
                                        },
                                        yValue: -10,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x180f155ea78
                    },
                    "a-247": {
                        id: "a-247",
                        title: "Card Grow",
                        continuousParameterGroups: [{
                            id: "a-247-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-247-n",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "inOutSine",
                                        duration: 500,
                                        target: {
                                            useEventTarget: !0,
                                            id: "699ed6f18aceafc086e38a65|c241ff96-b3bb-064f-293f-7edacc41ffcc"
                                        },
                                        xValue: .5,
                                        yValue: .5,
                                        locked: !0
                                    }
                                }, {
                                    id: "a-247-n-5",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "inOutSine",
                                        duration: 500,
                                        target: {
                                            useEventTarget: !0,
                                            id: "699ed6f18aceafc086e38a65|c241ff96-b3bb-064f-293f-7edacc41ffcc"
                                        },
                                        zValue: 18,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-247-n-12",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".main-image",
                                            selectorGuids: ["4627472b-005c-226b-e5b0-3aff8cdcbb6e"]
                                        },
                                        yValue: 10,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-247-n-2",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "inOutSine",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".image-bacgkround",
                                            selectorGuids: ["4627472b-005c-226b-e5b0-3aff8cdcbb6f"]
                                        },
                                        xValue: 3,
                                        yValue: 3,
                                        locked: !0
                                    }
                                }, {
                                    id: "a-247-n-15",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".image-bacgkround",
                                            selectorGuids: ["4627472b-005c-226b-e5b0-3aff8cdcbb6f"]
                                        },
                                        zValue: 8,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }]
                            }, {
                                keyframe: 45,
                                actionItems: [{
                                    id: "a-247-n-3",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "inOutSine",
                                        duration: 500,
                                        target: {
                                            useEventTarget: !0,
                                            id: "699ed6f18aceafc086e38a65|c241ff96-b3bb-064f-293f-7edacc41ffcc"
                                        },
                                        xValue: 1,
                                        yValue: 1,
                                        locked: !0
                                    }
                                }, {
                                    id: "a-247-n-4",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "inOutSine",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".image-bacgkround",
                                            selectorGuids: ["4627472b-005c-226b-e5b0-3aff8cdcbb6f"]
                                        },
                                        xValue: 1,
                                        yValue: 1,
                                        locked: !0
                                    }
                                }, {
                                    id: "a-247-n-6",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "inOutSine",
                                        duration: 500,
                                        target: {
                                            useEventTarget: !0,
                                            id: "699ed6f18aceafc086e38a65|c241ff96-b3bb-064f-293f-7edacc41ffcc"
                                        },
                                        zValue: 0,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-247-n-13",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".main-image",
                                            selectorGuids: ["4627472b-005c-226b-e5b0-3aff8cdcbb6e"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-247-n-16",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".image-bacgkround",
                                            selectorGuids: ["4627472b-005c-226b-e5b0-3aff8cdcbb6f"]
                                        },
                                        zValue: 0,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-247-n-9",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "inOutSine",
                                        duration: 500,
                                        target: {
                                            useEventTarget: !0,
                                            id: "699ed6f18aceafc086e38a65|c241ff96-b3bb-064f-293f-7edacc41ffcc"
                                        },
                                        xValue: .4,
                                        yValue: .4,
                                        locked: !0
                                    }
                                }, {
                                    id: "a-247-n-10",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "inOutSine",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".image-bacgkround",
                                            selectorGuids: ["4627472b-005c-226b-e5b0-3aff8cdcbb6f"]
                                        },
                                        xValue: 3,
                                        yValue: 3,
                                        locked: !0
                                    }
                                }, {
                                    id: "a-247-n-11",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "inOutSine",
                                        duration: 500,
                                        target: {
                                            useEventTarget: !0,
                                            id: "699ed6f18aceafc086e38a65|c241ff96-b3bb-064f-293f-7edacc41ffcc"
                                        },
                                        zValue: -18,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-247-n-14",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".main-image",
                                            selectorGuids: ["4627472b-005c-226b-e5b0-3aff8cdcbb6e"]
                                        },
                                        yValue: -50,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-247-n-17",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".image-bacgkround",
                                            selectorGuids: ["4627472b-005c-226b-e5b0-3aff8cdcbb6f"]
                                        },
                                        zValue: -8,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x1990ffccd17
                    },
                    "a-251": {
                        id: "a-251",
                        title: "Service Image",
                        continuousParameterGroups: [{
                            id: "a-251-p",
                            type: "MOUSE_X",
                            parameterLabel: "Mouse X",
                            continuousActionGroups: []
                        }, {
                            id: "a-251-p-2",
                            type: "MOUSE_Y",
                            parameterLabel: "Mouse Y",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-251-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".thumb-image-wrap",
                                            selectorGuids: ["ab756b66-4d96-8d53-c648-fde742dae6e9"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-251-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".thumb-image-wrap",
                                            selectorGuids: ["ab756b66-4d96-8d53-c648-fde742dae6e9"]
                                        },
                                        yValue: 50,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x19cb39f1209
                    },
                    "a-252": {
                        id: "a-252",
                        title: "Client Hover In",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-252-n",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".thumb-image-wrap",
                                        selectorGuids: ["ab756b66-4d96-8d53-c648-fde742dae6e9"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-252-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".thumb-image",
                                        selectorGuids: ["ab756b66-4d96-8d53-c648-fde742dae6eb"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-252-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".thumb-image-mask",
                                        selectorGuids: ["ab756b66-4d96-8d53-c648-fde742dae6ea"]
                                    },
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-252-n-9",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".card-text.rl",
                                        selectorGuids: ["79e05fdf-a426-25af-64b8-c075e34c23fb", "42912b01-0098-a911-2a11-aaef84fa70ff"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-252-n-4",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".thumb-image-wrap",
                                        selectorGuids: ["ab756b66-4d96-8d53-c648-fde742dae6e9"]
                                    },
                                    value: "block"
                                }
                            }, {
                                id: "a-252-n-5",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.32, .94, .6, 1],
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".thumb-image",
                                        selectorGuids: ["ab756b66-4d96-8d53-c648-fde742dae6eb"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-252-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.32, .94, .6, 1],
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".thumb-image-mask",
                                        selectorGuids: ["ab756b66-4d96-8d53-c648-fde742dae6ea"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-252-n-7",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        selector: ".thumb-title",
                                        selectorGuids: ["ab756b66-4d96-8d53-c648-fde742dae6ee"]
                                    },
                                    value: .1,
                                    unit: ""
                                }
                            }, {
                                id: "a-252-n-8",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".thumb-title",
                                        selectorGuids: ["ab756b66-4d96-8d53-c648-fde742dae6ee"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-252-n-10",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".card-text.rl",
                                        selectorGuids: ["79e05fdf-a426-25af-64b8-c075e34c23fb", "42912b01-0098-a911-2a11-aaef84fa70ff"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19bf735d6b9
                    },
                    "a-253": {
                        id: "a-253",
                        title: "Client Hover Out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-253-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        selector: ".thumb-title",
                                        selectorGuids: ["ab756b66-4d96-8d53-c648-fde742dae6ee"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-253-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.32, .94, .6, 1],
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".thumb-image-mask",
                                        selectorGuids: ["ab756b66-4d96-8d53-c648-fde742dae6ea"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-253-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.32, .94, .6, 1],
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".thumb-image",
                                        selectorGuids: ["ab756b66-4d96-8d53-c648-fde742dae6eb"]
                                    },
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-253-n-7",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".card-text.rl",
                                        selectorGuids: ["79e05fdf-a426-25af-64b8-c075e34c23fb", "42912b01-0098-a911-2a11-aaef84fa70ff"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-253-n-4",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".thumb-image-wrap",
                                        selectorGuids: ["ab756b66-4d96-8d53-c648-fde742dae6e9"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-253-n-5",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.32, .94, .6, 1],
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".thumb-image",
                                        selectorGuids: ["ab756b66-4d96-8d53-c648-fde742dae6eb"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-253-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.32, .94, .6, 1],
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".thumb-image-mask",
                                        selectorGuids: ["ab756b66-4d96-8d53-c648-fde742dae6ea"]
                                    },
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19bf735d6b9
                    },
                    "a-255": {
                        id: "a-255",
                        title: "Toggle First Click",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-255-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".toggle-content",
                                        selectorGuids: ["5eaabcdd-7c4c-a4dc-368f-f08ee36c89a4"]
                                    },
                                    heightValue: 0,
                                    widthUnit: "PX",
                                    heightUnit: "PX",
                                    locked: !1
                                }
                            }, {
                                id: "a-255-n-2",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".line-2",
                                        selectorGuids: ["5eaabcdd-7c4c-a4dc-368f-f08ee36c89a0"]
                                    },
                                    zValue: 90,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-255-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".toggle-space",
                                        selectorGuids: ["5eaabcdd-7c4c-a4dc-368f-f08ee36c899e"]
                                    },
                                    yValue: 5,
                                    xUnit: "PX",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-255-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".toggle-space",
                                        selectorGuids: ["5eaabcdd-7c4c-a4dc-368f-f08ee36c899e"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-255-n-5",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".line-2",
                                        selectorGuids: ["5eaabcdd-7c4c-a4dc-368f-f08ee36c89a0"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-255-n-6",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".toggle-content",
                                        selectorGuids: ["5eaabcdd-7c4c-a4dc-368f-f08ee36c89a4"]
                                    },
                                    widthUnit: "PX",
                                    heightUnit: "AUTO",
                                    locked: !1
                                }
                            }, {
                                id: "a-255-n-7",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 200,
                                    easing: "ease",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".toggle-space",
                                        selectorGuids: ["5eaabcdd-7c4c-a4dc-368f-f08ee36c899e"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-255-n-8",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 200,
                                    easing: "ease",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".toggle-space",
                                        selectorGuids: ["5eaabcdd-7c4c-a4dc-368f-f08ee36c899e"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x16f1f3ac6a2
                    },
                    "a-256": {
                        id: "a-256",
                        title: "Toggle Second Click",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-256-n",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".line-2",
                                        selectorGuids: ["5eaabcdd-7c4c-a4dc-368f-f08ee36c89a0"]
                                    },
                                    zValue: 90,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-256-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".toggle-space",
                                        selectorGuids: ["5eaabcdd-7c4c-a4dc-368f-f08ee36c899e"]
                                    },
                                    yValue: 5,
                                    xUnit: "PX",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-256-n-3",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".toggle-space",
                                        selectorGuids: ["5eaabcdd-7c4c-a4dc-368f-f08ee36c899e"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-256-n-4",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 200,
                                    easing: "ease",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".toggle-content",
                                        selectorGuids: ["5eaabcdd-7c4c-a4dc-368f-f08ee36c89a4"]
                                    },
                                    heightValue: 0,
                                    widthUnit: "PX",
                                    heightUnit: "PX",
                                    locked: !1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x16f1f3ac6a2
                    },
                    "a-257": {
                        id: "a-257",
                        title: "Logo Carousel",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-257-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "699ed6f18aceafc086e38a65|99d28c64-3400-f3bc-0af5-dbbffcca2ba9"
                                    },
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-257-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 6e4,
                                    target: {
                                        id: "699ed6f18aceafc086e38a65|99d28c64-3400-f3bc-0af5-dbbffcca2ba9"
                                    },
                                    xValue: -65,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-257-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        id: "699ed6f18aceafc086e38a65|99d28c64-3400-f3bc-0af5-dbbffcca2ba9"
                                    },
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19cbab59f3f
                    },
                    "a-258": {
                        id: "a-258",
                        title: "Arrow Hover In",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-258-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".buton-icon-svg",
                                        selectorGuids: ["ebececb0-e44e-dd3f-94ae-49daf41e708f"]
                                    },
                                    xValue: 0,
                                    yValue: null,
                                    xUnit: "px",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-258-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".buton-icon-svg.is-absolute",
                                        selectorGuids: ["ebececb0-e44e-dd3f-94ae-49daf41e708f", "ebececb0-e44e-dd3f-94ae-49daf41e7096"]
                                    },
                                    xValue: -30,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-258-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outExpo",
                                    duration: 800,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".buton-icon-svg",
                                        selectorGuids: ["ebececb0-e44e-dd3f-94ae-49daf41e708f"]
                                    },
                                    xValue: 30,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-258-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outExpo",
                                    duration: 800,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".buton-icon-svg.is-absolute",
                                        selectorGuids: ["ebececb0-e44e-dd3f-94ae-49daf41e708f", "ebececb0-e44e-dd3f-94ae-49daf41e7096"]
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1895b27b4e3
                    },
                    "a-259": {
                        id: "a-259",
                        title: "Arrow Hover Out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-259-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".buton-icon-svg",
                                        selectorGuids: ["ebececb0-e44e-dd3f-94ae-49daf41e708f"]
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-259-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".buton-icon-svg.is-absolute",
                                        selectorGuids: ["ebececb0-e44e-dd3f-94ae-49daf41e708f", "ebececb0-e44e-dd3f-94ae-49daf41e7096"]
                                    },
                                    xValue: -30,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1895b27b4e3
                    },
                    "a-260": {
                        id: "a-260",
                        title: "Blog Hover In",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-260-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outCirc",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".paralax-image",
                                        selectorGuids: ["ebececb0-e44e-dd3f-94ae-49daf41e7093"]
                                    },
                                    xValue: 1.05,
                                    yValue: 1.05,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1920f1d3bf5
                    },
                    "a-261": {
                        id: "a-261",
                        title: "Blog Hover Out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-261-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outCirc",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".paralax-image",
                                        selectorGuids: ["ebececb0-e44e-dd3f-94ae-49daf41e7093"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1920f1d3bf5
                    },
                    "a-262": {
                        id: "a-262",
                        title: "Main Image Parallax 10%",
                        continuousParameterGroups: [{
                            id: "a-262-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-262-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".paralax-image",
                                            selectorGuids: ["ebececb0-e44e-dd3f-94ae-49daf41e7093"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-262-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".paralax-image",
                                            selectorGuids: ["ebececb0-e44e-dd3f-94ae-49daf41e7093"]
                                        },
                                        yValue: 10,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x192059a2051
                    },
                    "a-263": {
                        id: "a-263",
                        title: "Dropdown Open",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-263-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".template-navigator-pages-wrap",
                                        selectorGuids: ["a9d9b454-b7c2-1b39-0c3e-531f9fb3e2c3"]
                                    },
                                    yValue: 24,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-263-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".template-navigator-pages-wrap",
                                        selectorGuids: ["a9d9b454-b7c2-1b39-0c3e-531f9fb3e2c3"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-263-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".template-navigator-pages-wrap",
                                        selectorGuids: ["a9d9b454-b7c2-1b39-0c3e-531f9fb3e2c3"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-263-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".template-navigator-pages-wrap",
                                        selectorGuids: ["a9d9b454-b7c2-1b39-0c3e-531f9fb3e2c3"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19c8b3f33f9
                    },
                    "a-264": {
                        id: "a-264",
                        title: "Dropdown Close",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-264-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".template-navigator-pages-wrap",
                                        selectorGuids: ["a9d9b454-b7c2-1b39-0c3e-531f9fb3e2c3"]
                                    },
                                    yValue: 24,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-264-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".template-navigator-pages-wrap",
                                        selectorGuids: ["a9d9b454-b7c2-1b39-0c3e-531f9fb3e2c3"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19c8b3f33f9
                    },
                    "a-265": {
                        id: "a-265",
                        title: "Pres Hover In",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-265-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".template-slide",
                                        selectorGuids: ["a9d9b454-b7c2-1b39-0c3e-531f9fb3e2bb"]
                                    },
                                    value: .4,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19cc3a78b7d
                    },
                    "a-266": {
                        id: "a-266",
                        title: "Pres Hover Out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-266-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".template-slide",
                                        selectorGuids: ["a9d9b454-b7c2-1b39-0c3e-531f9fb3e2bb"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19cc3a78b7d
                    },
                    "a-267": {
                        id: "a-267",
                        title: "Template Pages Show",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-267-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".template-navigator",
                                        selectorGuids: ["a9d9b454-b7c2-1b39-0c3e-531f9fb3e2c2"]
                                    },
                                    yValue: 150,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-267-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 250,
                                    target: {
                                        selector: ".template-navigator",
                                        selectorGuids: ["a9d9b454-b7c2-1b39-0c3e-531f9fb3e2c2"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        createdOn: 0x19ce193d068,
                        useFirstGroupAsInitialState: !0
                    },
                    "a-268": {
                        id: "a-268",
                        title: "Template Pages Hide",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-268-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 250,
                                    target: {
                                        selector: ".template-navigator",
                                        selectorGuids: ["a9d9b454-b7c2-1b39-0c3e-531f9fb3e2c2"]
                                    },
                                    yValue: 150,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        createdOn: 0x19ce193d068,
                        useFirstGroupAsInitialState: !1
                    },
                    slideInBottom: {
                        id: "slideInBottom",
                        useFirstGroupAsInitialState: !0,
                        actionItemGroups: [{
                            actionItems: [{
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    duration: 0,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    value: 0
                                }
                            }]
                        }, {
                            actionItems: [{
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    duration: 0,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    xValue: 0,
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 1e3,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 1e3,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    value: 1
                                }
                            }]
                        }]
                    },
                    fadeIn: {
                        id: "fadeIn",
                        useFirstGroupAsInitialState: !0,
                        actionItemGroups: [{
                            actionItems: [{
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    duration: 0,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    value: 0
                                }
                            }]
                        }, {
                            actionItems: [{
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 1e3,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    value: 1
                                }
                            }]
                        }]
                    },
                    slideInTop: {
                        id: "slideInTop",
                        useFirstGroupAsInitialState: !0,
                        actionItemGroups: [{
                            actionItems: [{
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    duration: 0,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    value: 0
                                }
                            }]
                        }, {
                            actionItems: [{
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    duration: 0,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    xValue: 0,
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 1e3,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    value: 1
                                }
                            }, {
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 1e3,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }]
                    }
                },
                site: {
                    mediaQueries: [{
                        key: "main",
                        min: 992,
                        max: 1e4
                    }, {
                        key: "medium",
                        min: 768,
                        max: 991
                    }, {
                        key: "small",
                        min: 480,
                        max: 767
                    }, {
                        key: "tiny",
                        min: 0,
                        max: 479
                    }]
                }
            }),
            "complete" === document.readyState ? e() : document.addEventListener("readystatechange", () => {
                "complete" === document.readyState && e()
            }
            )
        }
    }
      , t = {};
    function a(i) {
        var n = t[i];
        if (void 0 !== n)
            return n.exports;
        var o = t[i] = {
            id: i,
            loaded: !1,
            exports: {}
        };
        return e[i].call(o.exports, o, o.exports, a),
        o.loaded = !0,
        o.exports
    }
    a.m = e,
    a.d = (e, t) => {
        for (var i in t)
            a.o(t, i) && !a.o(e, i) && Object.defineProperty(e, i, {
                enumerable: !0,
                get: t[i]
            })
    }
    ,
    a.hmd = e => ((e = Object.create(e)).children || (e.children = []),
    Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
            throw Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
        }
    }),
    e),
    a.g = ( () => {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }
    )(),
    a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    a.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    a.nmd = e => (e.paths = [],
    e.children || (e.children = []),
    e),
    ( () => {
        var e = [];
        a.O = (t, i, n, o) => {
            if (i) {
                o = o || 0;
                for (var s = e.length; s > 0 && e[s - 1][2] > o; s--)
                    e[s] = e[s - 1];
                e[s] = [i, n, o];
                return
            }
            for (var d = 1 / 0, s = 0; s < e.length; s++) {
                for (var [i,n,o] = e[s], c = !0, r = 0; r < i.length; r++)
                    (!1 & o || d >= o) && Object.keys(a.O).every(e => a.O[e](i[r])) ? i.splice(r--, 1) : (c = !1,
                    o < d && (d = o));
                if (c) {
                    e.splice(s--, 1);
                    var l = n();
                    void 0 !== l && (t = l)
                }
            }
            return t
        }
    }
    )(),
    a.rv = () => "1.3.9",
    ( () => {
        var e = {
            335: 0
        };
        a.O.j = t => 0 === e[t];
        var t = (t, i) => {
            var n, o, [s,d,c] = i, r = 0;
            if (s.some(t => 0 !== e[t])) {
                for (n in d)
                    a.o(d, n) && (a.m[n] = d[n]);
                if (c)
                    var l = c(a)
            }
            for (t && t(i); r < s.length; r++)
                o = s[r],
                a.o(e, o) && e[o] && e[o][0](),
                e[o] = 0;
            return a.O(l)
        }
          , i = self.webpackChunk = self.webpackChunk || [];
        i.forEach(t.bind(null, 0)),
        i.push = t.bind(null, i.push.bind(i))
    }
    )(),
    a.ruid = "bundler=rspack@1.3.9";
    var i = a.O(void 0, ["753", "54", "577"], function() {
        return a(3467)
    });
    i = a.O(i)
}
)();
