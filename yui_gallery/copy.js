var Y = YUI();
YUI().add("common", function(a) {
    a.namespace("wretch");
    a.firstTime = true;
    a.wretch = {};
    a.wretch.timer = {};
    a.wretch.pseudoClass = true;
    if (a.UA.ie > 0) {
        if (!document.documentMode || document.documentMode < 8) {
            a.wretch.pseudoClass = false
        }
    }
    a.wretch.go = function(f, d, b) {
        if (a.one(f) !== null) {
            a.on("domready", d)
        }
        try {
            if (a.firstTime && Modernizr) {
                a.on("load", function() {
                    a.Modernizr = Modernizr;
                    a.firstTime = false
                })
            }
        } catch (c) {
        }
    };
    a.wretch.randArray = function(e) {
        var d = [], c = 0;
        var g = function(i, h) {
            if (i.length === 0) {
                i.push(h);
                return false
            }
            for (var b = 0; b < i.length; b++) {
                if (i[b] === h) {
                    return false
                }
            }
            return true
        };
        for (var f = 0; ; f++) {
            c = parseInt(Math.floor(Math.random() * 100 % e), 10);
            if (g(d, c)) {
                d.push(c)
            }
            if (d.length === e) {
                return d
            }
        }
        return d
    };
    a.wretch.delay = function(f, d, b, h, g) {
        try {
            if (this.timer.hasOwnProperty("cancel")) {
                this.timer.cancel()
            }
            this.timer = a.later(300, g, d, f, false)
        } catch (c) {
            this.timer = a.later(300, g, d, f, false)
        }
    };
   
   
    a.on("domready", function() {
        if (a.wretch.anchor !== "") {
        }
        var c = new a.ImgLoadGroup({foldDistance: 0});
        var d = a.all("img"), b;
        for (var e = 0; e < d.size(); e++) {
            b = d.item(e).get("id");
            if (b === "") {
                b = "wretchImg-" + e;
                d.item(e).set("id", b)
            }
            c.registerImage({domId: b,srcUrl: d.item(e).getAttribute("src")})
        }
    })
}, "1", {requires: ["node", "event", "event-custom", "imageloader"]});

YUI.add("wfp-cover", function(b) {
    b.namespace("wretch");
    var a = b.wretch;
    a.coverStory = {}
}, "0.1", {requires: ["common"]});
Y.use("wfp-cover", "dd", "node-event-simulate", function(b) {
    var a = b.wretch;
    a.coverStory = {};
    a.coverStory.img = b.all("#wfp-cover .block");
    a.coverStory.gallery = b.one("#wfp-cover .gallery");
    a.coverStory.pagination = b.all("#wfp-cover .pagi") || null;
    a.coverStory.size = a.coverStory.img.size();
    a.coverStory.order = ["first", "second", "third", "fourth"];
    a.coverStory.randomArray = [];
    a.coverStory.stopPlay = false;
    a.coverStory.numb = false;
    if (a.coverStory.size !== 0) {
        a.coverStory.randomArray = a.randArray(a.coverStory.size)
    }
    a.coverStory.single = function() {
        var g = this.randomArray[0];
        now = g;
        var c = function(e) {
            a.coverStory.img.removeClass("atbat");
            a.coverStory.img.item(e).addClass("atbat");
            a.coverStory.pagination.removeClass("on");
            a.coverStory.pagination.item(e).addClass("on")
        };
        this.pagination.on("click", function(h) {
            h.currentTarget.addClass("on");
            c(parseInt(h.target.getAttribute("target"), 10) - 1)
        });
        this.pagination.on("mouseenter", function(h) {
            a.coverStory.gallery.addClass("numb")
        });
        this.gallery.on("mouseenter", function(h) {
            this.addClass("numb")
        });
        this.gallery.on("mouseleave", function(h) {
            this.removeClass("numb")
        });
        if (this.img.size() > 0) {
            this.img.item(g).addClass("atbat")
        }
        if (this.pagination.size() > 1) {
            this.pagination.item(g).addClass("on");
            this.img.item(g).addClass("atbat")
        }
        b.one("#wfp-cover .title").insert('<span class="shadow"></span>', "after");
        setInterval(function() {
            if (!a.coverStory.gallery.hasClass("numb") && a.coverStory.pagination.size() > 1) {
                now++;
                c(now % a.coverStory.size)
            }
        }, 5000);
        try {
            var f = b.one("#wfp-cover.single-layout .left .title").getComputedStyle("height");
            b.one("#wfp-cover.single-layout .left .shadow").setStyle("top", (parseInt(f, 10) + 18) + "px")
        } catch (d) {
        }
    };
    a.coverStory.carousel = function() {
        var c = 0, e = this.size, h = 1, f = -1;
        this.gallery.insert('<div class="shiftBtn"><span class="up"></span></div><div class="shiftBtn"><span class="down"></span></div>');
        h = Math.floor(Math.random() * 100 % e, 10);
        now = h;
        h === 0 ? c = e - 1 : c = h - 1;
        var g = function() {
            var j = a.coverStory.img;
            j.addClass("todugout invis");
            for (var k = 0; k < e; k += 1) {
                if (k < e) {
                    if (k === h && h === 0) {
                        j.item(e - 1).replaceClass("todugout", "out");
                        j.item(k).replaceClass("todugout", "atbat")
                    } else {
                        switch (k) {
                            case (h % e - 1) % e:
                                j.item(k).replaceClass("todugout", "out");
                                break;
                            case (h % e + 1) % e:
                                j.item(k).replaceClass("todugout", "onDeck");
                                break;
                            case (h % e + 2) % e:
                                j.item(k).replaceClass("todugout", "inTheHole");
                                break;
                            case h:
                                j.item(k).replaceClass("todugout", "atbat");
                                break
                        }
                    }
                    if (!a.pseudoClass || document.documentMode === 8) {
                        var l = b.Node.create('<div class="ieshadow"/>');
                        j.item(k).append(l);
                        l.setContent(j.item(k).getAttribute("data-title"))
                    }
                }
                j.item(k).append(b.Node.create("<span>" + (k + 1) + "/" + e + "</span>"));
                setInterval(function() {
                    if (!a.coverStory.stopPlay && a.coverStory.pagination.size() > 1) {
                        b.one("span.down").simulate("click")
                    }
                }, 5000)
            }
            b.one("#wfp-cover .out").on("mouseenter", function() {
                a.coverStory.gallery.addClass("reversed")
            });
            b.one("#wfp-cover .onDeck").on("mouseleave", function() {
                a.coverStory.gallery.removeClass("reversed")
            });
            b.one("#wfp-cover .down").on("mouseenter", function() {
                a.coverStory.gallery.removeClass("reversed")
            });
            b.one("#wfp-cover .up").on("mouseenter", function() {
                a.coverStory.gallery.addClass("reversed")
            });
            b.one("#wfp-cover .bd").append('<div class="mask"></div>');
            b.one("#wfp-cover .shiftBtn").on("mouseenter", function(i) {
                if (i.currentTarget.hasClass("up")) {
                    i.currentTarget.addClass("up-on")
                } else {
                    i.currentTarget.addClass("down-on")
                }
            });
            b.one("#wfp-cover .shiftBtn").on("mouseleave", function(i) {
                if (i.currentTarget.hasClass("up")) {
                    i.currentTarget.removeClass("up-on")
                } else {
                    i.currentTarget.removeClass("down-on")
                }
            });
            setTimeout(function() {
                b.all(".todugout").replaceClass("todugout", "bench");
                j.removeClass("invis")
            }, 500)
        };
        var d = function(n, m) {
            var j = function(o) {
                setTimeout(function() {
                    if (m === "down") {
                        a.coverStory.img.item(c).setAttribute("class", "block bench");
                        if (c === e - 1) {
                            c = 0
                        } else {
                            c++
                        }
                    } else {
                        if (c === 0) {
                            c = e - 1
                        } else {
                            c--
                        }
                    }
                    b.all(".todugout").setAttribute("class", "block bench");
                    a.coverStory.img.removeClass("numb");
                    a.coverStory.numb = false;
                    o.removeClass("numb")
                }, 500)
            };
            if (n.currentTarget.hasClass("numb")) {
                return
            } else {
                a.coverStory.img.addClass("numb");
                n.currentTarget.addClass("numb");
                if (m === "down") {
                    a.coverStory.gallery.removeClass("reversed");
                    a.coverStory.img.item(c).setAttribute("class", "block todugout");
                    a.coverStory.img.item((c + 1) % e).setAttribute("class", "block out");
                    a.coverStory.img.item((c + 2) % e).setAttribute("class", "block atbat");
                    a.coverStory.img.item((c + 3) % e).setAttribute("class", "block onDeck");
                    a.coverStory.img.item((c + 4) % e).setAttribute("class", "block inTheHole");
                    j(n.currentTarget)
                } else {
                    var i = b.one(".atbat"), k = b.one(".onDeck"), l = b.one(".inTheHole");
                    a.coverStory.gallery.addClass("reversed");
                    a.coverStory.img.setAttribute("class", "block todugout");
                    a.coverStory.img.item(c).setAttribute("class", "block atbat");
                    i.setAttribute("class", "block onDeck");
                    k.setAttribute("class", "block inTheHole");
                    l.setAttribute("class", "block todugout");
                    a.coverStory.img.item((c + e - 1) % e).setAttribute("class", "block out");
                    f = c;
                    j(n.currentTarget)
                }
            }
        };
        b.all(".shiftBtn span").on("click", function(i) {
            if (i.currentTarget.hasClass("up")) {
                d(i, "up")
            } else {
                d(i, "down")
            }
        });
        b.one("span.up").on("mouseenter", function() {
            a.coverStory.gallery.addClass("reversed")
        });
        this.img.on("click", function(k) {
            var j = k.target, i;
            k.halt();
            if (k.currentTarget && k.currentTarget.hasClass("atbat")) {
                i = b.one(".atbat a").getAttribute("href");
                window.open(i);
                return
            }
            if (a.coverStory.numb) {
                return
            }
            a.coverStory.numb = true;
            if (k.currentTarget.hasClass("out") && !k.currentTarget.hasClass("numb")) {
                k.halt();
                d(k, "up")
            } else {
                if (k.currentTarget.hasClass("onDeck") && !k.currentTarget.hasClass("numb")) {
                    k.halt();
                    d(k, "down")
                }
            }
        });
        g()
    };
    a.coverStory.mess = function() {
        var i = {a: {set: {p1: {y: "5",x: "473",r: "8",z: "3",matrix: ["0.99026807", "0.13917310", "-0.13917310", "0.99026807"]},p2: {y: "191",x: "483",r: "5",z: "5",matrix: ["0.99619470", "-0.08715574", "0.08715574", "0.99619470"]},p3: {y: "86",x: "166",r: "13",z: "2",matrix: ["0.97437006", "-0.22495105", "0.22495105", "0.97437006"]},p4: {y: "-25",x: "268",r: "-24",z: "4",matrix: ["0.91354546", "0.40673664", "-0.40673664", "0.91354546"]},p5: {y: "160",x: "227",r: "-14",z: "6",matrix: ["0.99254615", "0.12186934", "-0.12186934", "0.99254615"]}}},b: {set: {p1: {y: "-34",x: "448",r: "-14",z: "3",matrix: ["0.97029573", "0.24192190", "-0.24192190", "0.97029573"]},p2: {y: "146",x: "489",r: "14",z: "5",matrix: ["0.97029573", "-0.24192190", "0.24192190", "0.97029573"]},p3: {y: "110",x: "144",r: "-10",z: "3",matrix: ["0.98480775", "0.17364818", "-0.17364818", "0.98480775"]},p4: {y: "-37",x: "237",r: "9",z: "2",matrix: ["0.98768834", "-0.15643447", "0.15643447", "0.98768834"]},p5: {y: "191",x: "223",r: "-7",z: "6",matrix: ["0.99254615", "0.12186934", "-0.12186934", "0.99254615"]}}},c: {set: {p1: {y: "-17",x: "437",r: "9",z: "2",matrix: ["0.98768834", "-0.15643447", "0.15643447", "0.98768834"]},p2: {y: "111",x: "529",r: "11",z: "5",matrix: ["0.98162718", "-0.19080900", "0.19080900", "0.98162718"]},p3: {y: "18",x: "247",r: "-10",z: "3",matrix: ["0.98480775", "0.17364818", "-0.17364818", "0.98480775"]},p4: {y: "128",x: "173",r: "-5",z: "4",matrix: ["0.99619470", "0.08715574", "-0.08715574", "0.99619470"]},p5: {y: "171",x: "237",r: "14",z: "6",matrix: ["0.97029573", "-0.24192190", "0.24192190", "0.97029573"]}}}}, e = [], d = 0;
        var f = function(s, p, m) {
            for (var l in s) {
                if (typeof (s[l]) === "object") {
                    f(s[l], l, m)
                } else {
                    switch (l) {
                        case "x":
                            var k = s[l];
                            break;
                        case "y":
                            var t = s[l];
                            break;
                        case "r":
                            var n = s[l];
                            break;
                        case "z":
                            var q = s[l];
                            break;
                        default:
                            e.push(s[l]);
                            break
                    }
                }
            }
            g(k, t, n, q, p, m)
        };
        var g = function(k, s, o, q, l, n) {
            if (k && s && o && q && l) {
                var p = parseInt(l.replace(/p/, ""), 10) - 1;
                l = a.coverStory.randomArray[parseInt(l.replace(/p/, ""), 10) - 1];
                if (n.item(l)) {
                    if (!Modernizr.csstransforms) {
                        var m = "progid:DXImageTransform.Microsoft.Matrix(M11=" + e[(p * 4) + 0] + ", M12=" + e[(p * 4) + 1] + ", M21=" + e[(p * 4) + 2] + ", M22=" + e[(p * 4) + 3] + ',sizingMethod="auto expand");';
                        n.item(l).setStyle("filter", m)
                    }
                    n.item(l).setStyle("left", k + "px");
                    n.item(l).setStyle("top", s + "px");
                    n.item(l).setStyle("zIndex", q);
                    n.item(l).setStyle(uaPrefix + "-transform", "rotate(" + o + "deg)");
                    n.item(l).setStyle("MozTransform", "rotate(" + o + "deg)")
                }
            }
        };
        var c = function(m) {
            for (var k = 0; k < m.size(); k++) {
                var l = b.Node.create('<div class="ieshadow"/>');
                m.item(k).append(l)
            }
        };
        var h = function() {
            if (b.UA.gecko > 0) {
                uaPrefix = "-moz"
            }
            if (b.UA.ie > 0) {
                uaPrefix = "-ms";
                if (!a.pseudoClass) {
                    c(b.all(".block"))
                }
            }
            if (b.UA.opera) {
                uaPrefix = "-o"
            }
            if (b.UA.webkit) {
                uaPrefix = "-webkit"
            }
        };
        var j = function() {
            b.one("#wfp-cover .title").insert('<div class="decoration-line"></div>', "after")
        };
        h();
        j();
        switch (b.one("#cover-sub-type").getAttribute("value")) {
            case "a":
                f(i.a, null, this.img);
                break;
            case "b":
                f(i.b, null, this.img);
                break;
            case "c":
                f(i.c, null, this.img);
                break;
            default:
                f(i.a, null, this.img);
                break
        }
        this.img.item(this.randomArray[0]).addClass("atbat");
        this.img.on("click", function(k) {
            try {
                if (k.currentTarget.hasClass("atbat")) {
                    k.halt();
                    window.open(k.currentTarget.one("a").getAttribute("href"))
                } else {
                    this.removeClass("atbat");
                    k.halt();
                    k.currentTarget.addClass("atbat")
                }
            } catch (k) {
            }
        });
        b.on("domready", function() {
            var k = b.one("#wfp-cover.mess-layout .ad-logo");
            if (k) {
                setTimeout(function() {
                    k.setStyle("display", "block")
                }, 2000)
            }
        })
    };
    a.coverStory.stack = function() {
        var f = 0, k = b.one("#wfp-cover #cover-auto"), l = ["first", "second", "third", "fourth"], h = a.randArray(this.size), m = [], c = this.randomArray[0], d = c;
        for (var e = 0; e < this.size; e++) {
            this.img.item(e).addClass(l[h[e]] + "-block")
        }
        if (this.pagination.size() > 1) {
            this.pagination.item(h[0]).addClass("on")
        }
        var g = function(p) {
            for (var n = 0; n < p.size(); n++) {
                var o = b.Node.create('<div class="ieshadow"/>');
                p.item(n).append(o);
                o.setContent(p.item(n).getAttribute("data-title"))
            }
        };
        var j = function(q, o, r) {
            if (q.hasClass(o)) {
                return
            } else {
                var t = b.one("#wfp-cover .first-block");
                var p = r || q;
                var s = p.getAttribute("class");
                p.replaceClass(s, "stop-block block");
                setTimeout(function() {
                    p.replaceClass("stop-block", "first-block");
                    t.replaceClass("first-block", s)
                }, 200);
                b.all("#wfp-cover .pagination span.on").removeClass("on");
                if (r) {
                    q.addClass("on")
                } else {
                    for (var n = 0; n < a.coverStory.size; n += 1) {
                        if (a.coverStory.img.item(n) === p) {
                            a.coverStory.pagination.item(n).addClass("on");
                            break
                        }
                    }
                }
                return
            }
        };
        if (b.one("#wfp-cover.dark")) {
            b.one("#wfp-cover").append('<div class="fakebg"></div>')
        }
        a.coverStory.img.on("click", function(i) {
            i.halt();
            if (!i.currentTarget.hasClass("first-block")) {
                j(i.currentTarget, "first-block")
            } else {
                window.open(i.currentTarget.one("a").getAttribute("href"))
            }
        });
        a.coverStory.pagination.on("click", function(i) {
            var o = parseInt(i.currentTarget.getAttribute("target"), 10) - 1;
            j(i.currentTarget, "on", a.coverStory.img.item(o));
            i.halt()
        });
        if (!a.pseudoClass || document.documentMode === 8) {
            g(this.img)
        }
        if (k === true || k === "true") {
            setInterval(function() {
                f = f % this.size;
                j(a.coverStory.pagination.item(f), "on", a.coverStory.img.item(f));
                f++
            }, 5000)
        }
        b.on("domready", function() {
            if (document.documentMode === 8) {
                b.one("#wfp-cover").addClass("ie-8")
            }
            setInterval(function() {
                if (!a.coverStory.stopPlay && a.coverStory.pagination.size() > 1) {
                    d++;
                    j(a.coverStory.img.item(d % a.coverStory.size), "first-block")
                }
            }, 5000)
        })
    }
});
Y.use("wfp-cover", function(b) {
    var a = b.wretch;
    a.coverStory.init = function() {
        var c = b.one("#wfp-cover #cover-type").getAttribute("value");
        switch (c) {
            case "stack":
                a.coverStory.stack();
                break;
            case "mess":
                a.coverStory.mess();
                break;
            case "carousel":
                a.coverStory.carousel();
                break;
            case "single":
                a.coverStory.single();
                break
        }
        a.coverStory.pagination.on("mouseenter", function(d) {
            d.target.addClass("mouseon")
        });
        a.coverStory.pagination.on("mouseleave", function(d) {
            d.currentTarget.removeClass("mouseon")
        });
        b.one("#wfp-cover").on("mouseenter", function(d) {
            a.coverStory.stopPlay = true
        });
        b.one("#wfp-cover").on("mouseleave", function(d) {
            a.coverStory.stopPlay = false
        })
    };
    a.go("#wfp-cover", a.coverStory.init)
});



