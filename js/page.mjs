(() => {
  // node_modules/@oddbird/css-anchor-positioning/dist/css-anchor-positioning-fn.js
  var ha = Object.defineProperty;
  var fa = Object.defineProperties;
  var pa = Object.getOwnPropertyDescriptors;
  var Rr = Object.getOwnPropertySymbols;
  var da = Object.prototype.hasOwnProperty;
  var ma = Object.prototype.propertyIsEnumerable;
  var Mr = (e2, t2, n2) => t2 in e2 ? ha(e2, t2, { enumerable: true, configurable: true, writable: true, value: n2 }) : e2[t2] = n2;
  var _ = (e2, t2) => {
    for (var n2 in t2 || (t2 = {}))
      da.call(t2, n2) && Mr(e2, n2, t2[n2]);
    if (Rr)
      for (var n2 of Rr(t2))
        ma.call(t2, n2) && Mr(e2, n2, t2[n2]);
    return e2;
  };
  var Z = (e2, t2) => fa(e2, pa(t2));
  var H = (e2, t2, n2) => new Promise((r2, i2) => {
    var o2 = (l2) => {
      try {
        c(n2.next(l2));
      } catch (a2) {
        i2(a2);
      }
    }, s2 = (l2) => {
      try {
        c(n2.throw(l2));
      } catch (a2) {
        i2(a2);
      }
    }, c = (l2) => l2.done ? r2(l2.value) : Promise.resolve(l2.value).then(o2, s2);
    c((n2 = n2.apply(e2, t2)).next());
  });
  var Gn = Math.min;
  var lt = Math.max;
  var Zt = Math.round;
  var Mt = Math.floor;
  var $e = (e2) => ({
    x: e2,
    y: e2
  });
  function ga(e2, t2) {
    return typeof e2 == "function" ? e2(t2) : e2;
  }
  function ba(e2) {
    return _({
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, e2);
  }
  function ya(e2) {
    return typeof e2 != "number" ? ba(e2) : {
      top: e2,
      right: e2,
      bottom: e2,
      left: e2
    };
  }
  function Jt(e2) {
    const {
      x: t2,
      y: n2,
      width: r2,
      height: i2
    } = e2;
    return {
      width: r2,
      height: i2,
      top: n2,
      left: t2,
      right: t2 + r2,
      bottom: n2 + i2,
      x: t2,
      y: n2
    };
  }
  function ka(e2, t2) {
    return H(this, null, function* () {
      var n2;
      t2 === void 0 && (t2 = {});
      const {
        x: r2,
        y: i2,
        platform: o2,
        rects: s2,
        elements: c,
        strategy: l2
      } = e2, {
        boundary: a2 = "clippingAncestors",
        rootBoundary: u = "viewport",
        elementContext: h2 = "floating",
        altBoundary: d = false,
        padding: m = 0
      } = ga(t2, e2), w = ya(m), C = c[d ? h2 === "floating" ? "reference" : "floating" : h2], b = Jt(yield o2.getClippingRect({
        element: (n2 = yield o2.isElement == null ? void 0 : o2.isElement(C)) == null || n2 ? C : C.contextElement || (yield o2.getDocumentElement == null ? void 0 : o2.getDocumentElement(c.floating)),
        boundary: a2,
        rootBoundary: u,
        strategy: l2
      })), x = h2 === "floating" ? {
        x: r2,
        y: i2,
        width: s2.floating.width,
        height: s2.floating.height
      } : s2.reference, T = yield o2.getOffsetParent == null ? void 0 : o2.getOffsetParent(c.floating), v = (yield o2.isElement == null ? void 0 : o2.isElement(T)) ? (yield o2.getScale == null ? void 0 : o2.getScale(T)) || {
        x: 1,
        y: 1
      } : {
        x: 1,
        y: 1
      }, A = Jt(o2.convertOffsetParentRelativeRectToViewportRelativeRect ? yield o2.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: c,
        rect: x,
        offsetParent: T,
        strategy: l2
      }) : x);
      return {
        top: (b.top - A.top + w.top) / v.y,
        bottom: (A.bottom - b.bottom + w.bottom) / v.y,
        left: (b.left - A.left + w.left) / v.x,
        right: (A.right - b.right + w.right) / v.x
      };
    });
  }
  function hn() {
    return typeof window != "undefined";
  }
  function bt(e2) {
    return to(e2) ? (e2.nodeName || "").toLowerCase() : "#document";
  }
  function fe(e2) {
    var t2;
    return (e2 == null || (t2 = e2.ownerDocument) == null ? void 0 : t2.defaultView) || window;
  }
  function Pe(e2) {
    var t2;
    return (t2 = (to(e2) ? e2.ownerDocument : e2.document) || window.document) == null ? void 0 : t2.documentElement;
  }
  function to(e2) {
    return hn() ? e2 instanceof Node || e2 instanceof fe(e2).Node : false;
  }
  function we(e2) {
    return hn() ? e2 instanceof Element || e2 instanceof fe(e2).Element : false;
  }
  function _e(e2) {
    return hn() ? e2 instanceof HTMLElement || e2 instanceof fe(e2).HTMLElement : false;
  }
  function Nr(e2) {
    return !hn() || typeof ShadowRoot == "undefined" ? false : e2 instanceof ShadowRoot || e2 instanceof fe(e2).ShadowRoot;
  }
  function It(e2) {
    const {
      overflow: t2,
      overflowX: n2,
      overflowY: r2,
      display: i2
    } = ve(e2);
    return /auto|scroll|overlay|hidden|clip/.test(t2 + r2 + n2) && !["inline", "contents"].includes(i2);
  }
  function xa(e2) {
    return ["table", "td", "th"].includes(bt(e2));
  }
  function fn(e2) {
    return [":popover-open", ":modal"].some((t2) => {
      try {
        return e2.matches(t2);
      } catch (n2) {
        return false;
      }
    });
  }
  function ur(e2) {
    const t2 = hr(), n2 = we(e2) ? ve(e2) : e2;
    return n2.transform !== "none" || n2.perspective !== "none" || (n2.containerType ? n2.containerType !== "normal" : false) || !t2 && (n2.backdropFilter ? n2.backdropFilter !== "none" : false) || !t2 && (n2.filter ? n2.filter !== "none" : false) || ["transform", "perspective", "filter"].some((r2) => (n2.willChange || "").includes(r2)) || ["paint", "layout", "strict", "content"].some((r2) => (n2.contain || "").includes(r2));
  }
  function wa(e2) {
    let t2 = We(e2);
    for (; _e(t2) && !ft(t2); ) {
      if (ur(t2))
        return t2;
      if (fn(t2))
        return null;
      t2 = We(t2);
    }
    return null;
  }
  function hr() {
    return typeof CSS == "undefined" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
  }
  function ft(e2) {
    return ["html", "body", "#document"].includes(bt(e2));
  }
  function ve(e2) {
    return fe(e2).getComputedStyle(e2);
  }
  function pn(e2) {
    return we(e2) ? {
      scrollLeft: e2.scrollLeft,
      scrollTop: e2.scrollTop
    } : {
      scrollLeft: e2.scrollX,
      scrollTop: e2.scrollY
    };
  }
  function We(e2) {
    if (bt(e2) === "html")
      return e2;
    const t2 = (
      // Step into the shadow DOM of the parent of a slotted node.
      e2.assignedSlot || // DOM Element detected.
      e2.parentNode || // ShadowRoot detected.
      Nr(e2) && e2.host || // Fallback.
      Pe(e2)
    );
    return Nr(t2) ? t2.host : t2;
  }
  function no(e2) {
    const t2 = We(e2);
    return ft(t2) ? e2.ownerDocument ? e2.ownerDocument.body : e2.body : _e(t2) && It(t2) ? t2 : no(t2);
  }
  function Lt(e2, t2, n2) {
    var r2;
    t2 === void 0 && (t2 = []), n2 === void 0 && (n2 = true);
    const i2 = no(e2), o2 = i2 === ((r2 = e2.ownerDocument) == null ? void 0 : r2.body), s2 = fe(i2);
    if (o2) {
      const c = Vn(s2);
      return t2.concat(s2, s2.visualViewport || [], It(i2) ? i2 : [], c && n2 ? Lt(c) : []);
    }
    return t2.concat(i2, Lt(i2, [], n2));
  }
  function Vn(e2) {
    return e2.parent && Object.getPrototypeOf(e2.parent) ? e2.frameElement : null;
  }
  function ro(e2) {
    const t2 = ve(e2);
    let n2 = parseFloat(t2.width) || 0, r2 = parseFloat(t2.height) || 0;
    const i2 = _e(e2), o2 = i2 ? e2.offsetWidth : n2, s2 = i2 ? e2.offsetHeight : r2, c = Zt(n2) !== o2 || Zt(r2) !== s2;
    return c && (n2 = o2, r2 = s2), {
      width: n2,
      height: r2,
      $: c
    };
  }
  function fr(e2) {
    return we(e2) ? e2 : e2.contextElement;
  }
  function ct(e2) {
    const t2 = fr(e2);
    if (!_e(t2))
      return $e(1);
    const n2 = t2.getBoundingClientRect(), {
      width: r2,
      height: i2,
      $: o2
    } = ro(t2);
    let s2 = (o2 ? Zt(n2.width) : n2.width) / r2, c = (o2 ? Zt(n2.height) : n2.height) / i2;
    return (!s2 || !Number.isFinite(s2)) && (s2 = 1), (!c || !Number.isFinite(c)) && (c = 1), {
      x: s2,
      y: c
    };
  }
  var va = /* @__PURE__ */ $e(0);
  function io(e2) {
    const t2 = fe(e2);
    return !hr() || !t2.visualViewport ? va : {
      x: t2.visualViewport.offsetLeft,
      y: t2.visualViewport.offsetTop
    };
  }
  function Sa(e2, t2, n2) {
    return t2 === void 0 && (t2 = false), !n2 || t2 && n2 !== fe(e2) ? false : t2;
  }
  function Qe(e2, t2, n2, r2) {
    t2 === void 0 && (t2 = false), n2 === void 0 && (n2 = false);
    const i2 = e2.getBoundingClientRect(), o2 = fr(e2);
    let s2 = $e(1);
    t2 && (r2 ? we(r2) && (s2 = ct(r2)) : s2 = ct(e2));
    const c = Sa(o2, n2, r2) ? io(o2) : $e(0);
    let l2 = (i2.left + c.x) / s2.x, a2 = (i2.top + c.y) / s2.y, u = i2.width / s2.x, h2 = i2.height / s2.y;
    if (o2) {
      const d = fe(o2), m = r2 && we(r2) ? fe(r2) : r2;
      let w = d, k = Vn(w);
      for (; k && r2 && m !== w; ) {
        const C = ct(k), b = k.getBoundingClientRect(), x = ve(k), T = b.left + (k.clientLeft + parseFloat(x.paddingLeft)) * C.x, v = b.top + (k.clientTop + parseFloat(x.paddingTop)) * C.y;
        l2 *= C.x, a2 *= C.y, u *= C.x, h2 *= C.y, l2 += T, a2 += v, w = fe(k), k = Vn(w);
      }
    }
    return Jt({
      width: u,
      height: h2,
      x: l2,
      y: a2
    });
  }
  function pr(e2, t2) {
    const n2 = pn(e2).scrollLeft;
    return t2 ? t2.left + n2 : Qe(Pe(e2)).left + n2;
  }
  function oo(e2, t2, n2) {
    n2 === void 0 && (n2 = false);
    const r2 = e2.getBoundingClientRect(), i2 = r2.left + t2.scrollLeft - (n2 ? 0 : (
      // RTL <body> scrollbar.
      pr(e2, r2)
    )), o2 = r2.top + t2.scrollTop;
    return {
      x: i2,
      y: o2
    };
  }
  function Ca(e2) {
    let {
      elements: t2,
      rect: n2,
      offsetParent: r2,
      strategy: i2
    } = e2;
    const o2 = i2 === "fixed", s2 = Pe(r2), c = t2 ? fn(t2.floating) : false;
    if (r2 === s2 || c && o2)
      return n2;
    let l2 = {
      scrollLeft: 0,
      scrollTop: 0
    }, a2 = $e(1);
    const u = $e(0), h2 = _e(r2);
    if ((h2 || !h2 && !o2) && ((bt(r2) !== "body" || It(s2)) && (l2 = pn(r2)), _e(r2))) {
      const m = Qe(r2);
      a2 = ct(r2), u.x = m.x + r2.clientLeft, u.y = m.y + r2.clientTop;
    }
    const d = s2 && !h2 && !o2 ? oo(s2, l2, true) : $e(0);
    return {
      width: n2.width * a2.x,
      height: n2.height * a2.y,
      x: n2.x * a2.x - l2.scrollLeft * a2.x + u.x + d.x,
      y: n2.y * a2.y - l2.scrollTop * a2.y + u.y + d.y
    };
  }
  function Ta(e2) {
    return Array.from(e2.getClientRects());
  }
  function Aa(e2) {
    const t2 = Pe(e2), n2 = pn(e2), r2 = e2.ownerDocument.body, i2 = lt(t2.scrollWidth, t2.clientWidth, r2.scrollWidth, r2.clientWidth), o2 = lt(t2.scrollHeight, t2.clientHeight, r2.scrollHeight, r2.clientHeight);
    let s2 = -n2.scrollLeft + pr(e2);
    const c = -n2.scrollTop;
    return ve(r2).direction === "rtl" && (s2 += lt(t2.clientWidth, r2.clientWidth) - i2), {
      width: i2,
      height: o2,
      x: s2,
      y: c
    };
  }
  function Oa(e2, t2) {
    const n2 = fe(e2), r2 = Pe(e2), i2 = n2.visualViewport;
    let o2 = r2.clientWidth, s2 = r2.clientHeight, c = 0, l2 = 0;
    if (i2) {
      o2 = i2.width, s2 = i2.height;
      const a2 = hr();
      (!a2 || a2 && t2 === "fixed") && (c = i2.offsetLeft, l2 = i2.offsetTop);
    }
    return {
      width: o2,
      height: s2,
      x: c,
      y: l2
    };
  }
  function Ea(e2, t2) {
    const n2 = Qe(e2, true, t2 === "fixed"), r2 = n2.top + e2.clientTop, i2 = n2.left + e2.clientLeft, o2 = _e(e2) ? ct(e2) : $e(1), s2 = e2.clientWidth * o2.x, c = e2.clientHeight * o2.y, l2 = i2 * o2.x, a2 = r2 * o2.y;
    return {
      width: s2,
      height: c,
      x: l2,
      y: a2
    };
  }
  function Dr(e2, t2, n2) {
    let r2;
    if (t2 === "viewport")
      r2 = Oa(e2, n2);
    else if (t2 === "document")
      r2 = Aa(Pe(e2));
    else if (we(t2))
      r2 = Ea(t2, n2);
    else {
      const i2 = io(e2);
      r2 = {
        x: t2.x - i2.x,
        y: t2.y - i2.y,
        width: t2.width,
        height: t2.height
      };
    }
    return Jt(r2);
  }
  function so(e2, t2) {
    const n2 = We(e2);
    return n2 === t2 || !we(n2) || ft(n2) ? false : ve(n2).position === "fixed" || so(n2, t2);
  }
  function La(e2, t2) {
    const n2 = t2.get(e2);
    if (n2)
      return n2;
    let r2 = Lt(e2, [], false).filter((c) => we(c) && bt(c) !== "body"), i2 = null;
    const o2 = ve(e2).position === "fixed";
    let s2 = o2 ? We(e2) : e2;
    for (; we(s2) && !ft(s2); ) {
      const c = ve(s2), l2 = ur(s2);
      !l2 && c.position === "fixed" && (i2 = null), (o2 ? !l2 && !i2 : !l2 && c.position === "static" && !!i2 && ["absolute", "fixed"].includes(i2.position) || It(s2) && !l2 && so(e2, s2)) ? r2 = r2.filter((u) => u !== s2) : i2 = c, s2 = We(s2);
    }
    return t2.set(e2, r2), r2;
  }
  function $a(e2) {
    let {
      element: t2,
      boundary: n2,
      rootBoundary: r2,
      strategy: i2
    } = e2;
    const s2 = [...n2 === "clippingAncestors" ? fn(t2) ? [] : La(t2, this._c) : [].concat(n2), r2], c = s2[0], l2 = s2.reduce((a2, u) => {
      const h2 = Dr(t2, u, i2);
      return a2.top = lt(h2.top, a2.top), a2.right = Gn(h2.right, a2.right), a2.bottom = Gn(h2.bottom, a2.bottom), a2.left = lt(h2.left, a2.left), a2;
    }, Dr(t2, c, i2));
    return {
      width: l2.right - l2.left,
      height: l2.bottom - l2.top,
      x: l2.left,
      y: l2.top
    };
  }
  function _a(e2) {
    const {
      width: t2,
      height: n2
    } = ro(e2);
    return {
      width: t2,
      height: n2
    };
  }
  function Pa(e2, t2, n2) {
    const r2 = _e(t2), i2 = Pe(t2), o2 = n2 === "fixed", s2 = Qe(e2, true, o2, t2);
    let c = {
      scrollLeft: 0,
      scrollTop: 0
    };
    const l2 = $e(0);
    if (r2 || !r2 && !o2)
      if ((bt(t2) !== "body" || It(i2)) && (c = pn(t2)), r2) {
        const d = Qe(t2, true, o2, t2);
        l2.x = d.x + t2.clientLeft, l2.y = d.y + t2.clientTop;
      } else i2 && (l2.x = pr(i2));
    const a2 = i2 && !r2 && !o2 ? oo(i2, c) : $e(0), u = s2.left + c.scrollLeft - l2.x - a2.x, h2 = s2.top + c.scrollTop - l2.y - a2.y;
    return {
      x: u,
      y: h2,
      width: s2.width,
      height: s2.height
    };
  }
  function Sn(e2) {
    return ve(e2).position === "static";
  }
  function jr(e2, t2) {
    if (!_e(e2) || ve(e2).position === "fixed")
      return null;
    if (t2)
      return t2(e2);
    let n2 = e2.offsetParent;
    return Pe(e2) === n2 && (n2 = n2.ownerDocument.body), n2;
  }
  function ao(e2, t2) {
    const n2 = fe(e2);
    if (fn(e2))
      return n2;
    if (!_e(e2)) {
      let i2 = We(e2);
      for (; i2 && !ft(i2); ) {
        if (we(i2) && !Sn(i2))
          return i2;
        i2 = We(i2);
      }
      return n2;
    }
    let r2 = jr(e2, t2);
    for (; r2 && xa(r2) && Sn(r2); )
      r2 = jr(r2, t2);
    return r2 && ft(r2) && Sn(r2) && !ur(r2) ? n2 : r2 || wa(e2) || n2;
  }
  var za = function(e2) {
    return H(this, null, function* () {
      const t2 = this.getOffsetParent || ao, n2 = this.getDimensions, r2 = yield n2(e2.floating);
      return {
        reference: Pa(e2.reference, yield t2(e2.floating), e2.strategy),
        floating: {
          x: 0,
          y: 0,
          width: r2.width,
          height: r2.height
        }
      };
    });
  };
  function Ia(e2) {
    return ve(e2).direction === "rtl";
  }
  var ee = {
    convertOffsetParentRelativeRectToViewportRelativeRect: Ca,
    getDocumentElement: Pe,
    getClippingRect: $a,
    getOffsetParent: ao,
    getElementRects: za,
    getClientRects: Ta,
    getDimensions: _a,
    getScale: ct,
    isElement: we,
    isRTL: Ia
  };
  function Ra(e2, t2) {
    let n2 = null, r2;
    const i2 = Pe(e2);
    function o2() {
      var c;
      clearTimeout(r2), (c = n2) == null || c.disconnect(), n2 = null;
    }
    function s2(c, l2) {
      c === void 0 && (c = false), l2 === void 0 && (l2 = 1), o2();
      const {
        left: a2,
        top: u,
        width: h2,
        height: d
      } = e2.getBoundingClientRect();
      if (c || t2(), !h2 || !d)
        return;
      const m = Mt(u), w = Mt(i2.clientWidth - (a2 + h2)), k = Mt(i2.clientHeight - (u + d)), C = Mt(a2), x = {
        rootMargin: -m + "px " + -w + "px " + -k + "px " + -C + "px",
        threshold: lt(0, Gn(1, l2)) || 1
      };
      let T = true;
      function v(A) {
        const P = A[0].intersectionRatio;
        if (P !== l2) {
          if (!T)
            return s2();
          P ? s2(false, P) : r2 = setTimeout(() => {
            s2(false, 1e-7);
          }, 1e3);
        }
        T = false;
      }
      try {
        n2 = new IntersectionObserver(v, Z(_({}, x), {
          // Handle <iframe>s
          root: i2.ownerDocument
        }));
      } catch (A) {
        n2 = new IntersectionObserver(v, x);
      }
      n2.observe(e2);
    }
    return s2(true), o2;
  }
  function lo(e2, t2, n2, r2) {
    r2 === void 0 && (r2 = {});
    const {
      ancestorScroll: i2 = true,
      ancestorResize: o2 = true,
      elementResize: s2 = typeof ResizeObserver == "function",
      layoutShift: c = typeof IntersectionObserver == "function",
      animationFrame: l2 = false
    } = r2, a2 = fr(e2), u = i2 || o2 ? [...a2 ? Lt(a2) : [], ...Lt(t2)] : [];
    u.forEach((b) => {
      i2 && b.addEventListener("scroll", n2, {
        passive: true
      }), o2 && b.addEventListener("resize", n2);
    });
    const h2 = a2 && c ? Ra(a2, n2) : null;
    let d = -1, m = null;
    s2 && (m = new ResizeObserver((b) => {
      let [x] = b;
      x && x.target === a2 && m && (m.unobserve(t2), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
        var T;
        (T = m) == null || T.observe(t2);
      })), n2();
    }), a2 && !l2 && m.observe(a2), m.observe(t2));
    let w, k = l2 ? Qe(e2) : null;
    l2 && C();
    function C() {
      const b = Qe(e2);
      k && (b.x !== k.x || b.y !== k.y || b.width !== k.width || b.height !== k.height) && n2(), k = b, w = requestAnimationFrame(C);
    }
    return n2(), () => {
      var b;
      u.forEach((x) => {
        i2 && x.removeEventListener("scroll", n2), o2 && x.removeEventListener("resize", n2);
      }), h2 == null || h2(), (b = m) == null || b.disconnect(), m = null, l2 && cancelAnimationFrame(w);
    };
  }
  var Ma = ka;
  var De = 0;
  var y = 1;
  var $ = 2;
  var G = 3;
  var F = 4;
  var Te = 5;
  var dn = 6;
  var te = 7;
  var se = 8;
  var I = 9;
  var L = 10;
  var B = 11;
  var z = 12;
  var W = 13;
  var Rt = 14;
  var ae = 15;
  var ne = 16;
  var re = 17;
  var ce = 18;
  var pe = 19;
  var Se = 20;
  var M = 21;
  var E = 22;
  var V = 23;
  var ue = 24;
  var X = 25;
  var Na = 0;
  function Q(e2) {
    return e2 >= 48 && e2 <= 57;
  }
  function He(e2) {
    return Q(e2) || // 0 .. 9
    e2 >= 65 && e2 <= 70 || // A .. F
    e2 >= 97 && e2 <= 102;
  }
  function dr(e2) {
    return e2 >= 65 && e2 <= 90;
  }
  function Da(e2) {
    return e2 >= 97 && e2 <= 122;
  }
  function ja(e2) {
    return dr(e2) || Da(e2);
  }
  function Fa(e2) {
    return e2 >= 128;
  }
  function en(e2) {
    return ja(e2) || Fa(e2) || e2 === 95;
  }
  function co(e2) {
    return en(e2) || Q(e2) || e2 === 45;
  }
  function Ba(e2) {
    return e2 >= 0 && e2 <= 8 || e2 === 11 || e2 >= 14 && e2 <= 31 || e2 === 127;
  }
  function tn(e2) {
    return e2 === 10 || e2 === 13 || e2 === 12;
  }
  function Xe(e2) {
    return tn(e2) || e2 === 32 || e2 === 9;
  }
  function Le(e2, t2) {
    return !(e2 !== 92 || tn(t2) || t2 === Na);
  }
  function qt(e2, t2, n2) {
    return e2 === 45 ? en(t2) || t2 === 45 || Le(t2, n2) : en(e2) ? true : e2 === 92 ? Le(e2, t2) : false;
  }
  function Cn(e2, t2, n2) {
    return e2 === 43 || e2 === 45 ? Q(t2) ? 2 : t2 === 46 && Q(n2) ? 3 : 0 : e2 === 46 ? Q(t2) ? 2 : 0 : Q(e2) ? 1 : 0;
  }
  function uo(e2) {
    return e2 === 65279 || e2 === 65534 ? 1 : 0;
  }
  var Kn = new Array(128);
  var Wa = 128;
  var Gt = 130;
  var ho = 131;
  var mr = 132;
  var fo = 133;
  for (let e2 = 0; e2 < Kn.length; e2++)
    Kn[e2] = Xe(e2) && Gt || Q(e2) && ho || en(e2) && mr || Ba(e2) && fo || e2 || Wa;
  function Tn(e2) {
    return e2 < 128 ? Kn[e2] : mr;
  }
  function ut(e2, t2) {
    return t2 < e2.length ? e2.charCodeAt(t2) : 0;
  }
  function Yn(e2, t2, n2) {
    return n2 === 13 && ut(e2, t2 + 1) === 10 ? 2 : 1;
  }
  function ht(e2, t2, n2) {
    let r2 = e2.charCodeAt(t2);
    return dr(r2) && (r2 = r2 | 32), r2 === n2;
  }
  function $t(e2, t2, n2, r2) {
    if (n2 - t2 !== r2.length || t2 < 0 || n2 > e2.length)
      return false;
    for (let i2 = t2; i2 < n2; i2++) {
      const o2 = r2.charCodeAt(i2 - t2);
      let s2 = e2.charCodeAt(i2);
      if (dr(s2) && (s2 = s2 | 32), s2 !== o2)
        return false;
    }
    return true;
  }
  function Ha(e2, t2) {
    for (; t2 >= 0 && Xe(e2.charCodeAt(t2)); t2--)
      ;
    return t2 + 1;
  }
  function Nt(e2, t2) {
    for (; t2 < e2.length && Xe(e2.charCodeAt(t2)); t2++)
      ;
    return t2;
  }
  function An(e2, t2) {
    for (; t2 < e2.length && Q(e2.charCodeAt(t2)); t2++)
      ;
    return t2;
  }
  function pt(e2, t2) {
    if (t2 += 2, He(ut(e2, t2 - 1))) {
      for (const r2 = Math.min(e2.length, t2 + 5); t2 < r2 && He(ut(e2, t2)); t2++)
        ;
      const n2 = ut(e2, t2);
      Xe(n2) && (t2 += Yn(e2, t2, n2));
    }
    return t2;
  }
  function Dt(e2, t2) {
    for (; t2 < e2.length; t2++) {
      const n2 = e2.charCodeAt(t2);
      if (!co(n2)) {
        if (Le(n2, ut(e2, t2 + 1))) {
          t2 = pt(e2, t2) - 1;
          continue;
        }
        break;
      }
    }
    return t2;
  }
  function mn(e2, t2) {
    let n2 = e2.charCodeAt(t2);
    if ((n2 === 43 || n2 === 45) && (n2 = e2.charCodeAt(t2 += 1)), Q(n2) && (t2 = An(e2, t2 + 1), n2 = e2.charCodeAt(t2)), n2 === 46 && Q(e2.charCodeAt(t2 + 1)) && (t2 += 2, t2 = An(e2, t2)), ht(
      e2,
      t2,
      101
      /* e */
    )) {
      let r2 = 0;
      n2 = e2.charCodeAt(t2 + 1), (n2 === 45 || n2 === 43) && (r2 = 1, n2 = e2.charCodeAt(t2 + 2)), Q(n2) && (t2 = An(e2, t2 + 1 + r2 + 1));
    }
    return t2;
  }
  function On(e2, t2) {
    for (; t2 < e2.length; t2++) {
      const n2 = e2.charCodeAt(t2);
      if (n2 === 41) {
        t2++;
        break;
      }
      Le(n2, ut(e2, t2 + 1)) && (t2 = pt(e2, t2));
    }
    return t2;
  }
  function po(e2) {
    if (e2.length === 1 && !He(e2.charCodeAt(0)))
      return e2[0];
    let t2 = parseInt(e2, 16);
    return (t2 === 0 || // If this number is zero,
    t2 >= 55296 && t2 <= 57343 || // or is for a surrogate,
    t2 > 1114111) && (t2 = 65533), String.fromCodePoint(t2);
  }
  var mo = [
    "EOF-token",
    "ident-token",
    "function-token",
    "at-keyword-token",
    "hash-token",
    "string-token",
    "bad-string-token",
    "url-token",
    "bad-url-token",
    "delim-token",
    "number-token",
    "percentage-token",
    "dimension-token",
    "whitespace-token",
    "CDO-token",
    "CDC-token",
    "colon-token",
    "semicolon-token",
    "comma-token",
    "[-token",
    "]-token",
    "(-token",
    ")-token",
    "{-token",
    "}-token",
    "comment-token"
  ];
  var Ua = 16 * 1024;
  function nn(e2 = null, t2) {
    return e2 === null || e2.length < t2 ? new Uint32Array(Math.max(t2 + 1024, Ua)) : e2;
  }
  var Fr = 10;
  var qa = 12;
  var Br = 13;
  function Wr(e2) {
    const t2 = e2.source, n2 = t2.length, r2 = t2.length > 0 ? uo(t2.charCodeAt(0)) : 0, i2 = nn(e2.lines, n2), o2 = nn(e2.columns, n2);
    let s2 = e2.startLine, c = e2.startColumn;
    for (let l2 = r2; l2 < n2; l2++) {
      const a2 = t2.charCodeAt(l2);
      i2[l2] = s2, o2[l2] = c++, (a2 === Fr || a2 === Br || a2 === qa) && (a2 === Br && l2 + 1 < n2 && t2.charCodeAt(l2 + 1) === Fr && (l2++, i2[l2] = s2, o2[l2] = c), s2++, c = 1);
    }
    i2[n2] = s2, o2[n2] = c, e2.lines = i2, e2.columns = o2, e2.computed = true;
  }
  var Ga = class {
    constructor() {
      this.lines = null, this.columns = null, this.computed = false;
    }
    setSource(t2, n2 = 0, r2 = 1, i2 = 1) {
      this.source = t2, this.startOffset = n2, this.startLine = r2, this.startColumn = i2, this.computed = false;
    }
    getLocation(t2, n2) {
      return this.computed || Wr(this), {
        source: n2,
        offset: this.startOffset + t2,
        line: this.lines[t2],
        column: this.columns[t2]
      };
    }
    getLocationRange(t2, n2, r2) {
      return this.computed || Wr(this), {
        source: r2,
        start: {
          offset: this.startOffset + t2,
          line: this.lines[t2],
          column: this.columns[t2]
        },
        end: {
          offset: this.startOffset + n2,
          line: this.lines[n2],
          column: this.columns[n2]
        }
      };
    }
  };
  var de = 16777215;
  var Ae = 24;
  var Va = /* @__PURE__ */ new Map([
    [$, E],
    [M, E],
    [pe, Se],
    [V, ue]
  ]);
  var Ka = class {
    constructor(t2, n2) {
      this.setSource(t2, n2);
    }
    reset() {
      this.eof = false, this.tokenIndex = -1, this.tokenType = 0, this.tokenStart = this.firstCharOffset, this.tokenEnd = this.firstCharOffset;
    }
    setSource(t2 = "", n2 = () => {
    }) {
      t2 = String(t2 || "");
      const r2 = t2.length, i2 = nn(this.offsetAndType, t2.length + 1), o2 = nn(this.balance, t2.length + 1);
      let s2 = 0, c = 0, l2 = 0, a2 = -1;
      for (this.offsetAndType = null, this.balance = null, n2(t2, (u, h2, d) => {
        switch (u) {
          default:
            o2[s2] = r2;
            break;
          case c: {
            let m = l2 & de;
            for (l2 = o2[m], c = l2 >> Ae, o2[s2] = m, o2[m++] = s2; m < s2; m++)
              o2[m] === r2 && (o2[m] = s2);
            break;
          }
          case M:
          case $:
          case pe:
          case V:
            o2[s2] = l2, c = Va.get(u), l2 = c << Ae | s2;
            break;
        }
        i2[s2++] = u << Ae | d, a2 === -1 && (a2 = h2);
      }), i2[s2] = De << Ae | r2, o2[s2] = r2, o2[r2] = r2; l2 !== 0; ) {
        const u = l2 & de;
        l2 = o2[u], o2[u] = r2;
      }
      this.source = t2, this.firstCharOffset = a2 === -1 ? 0 : a2, this.tokenCount = s2, this.offsetAndType = i2, this.balance = o2, this.reset(), this.next();
    }
    lookupType(t2) {
      return t2 += this.tokenIndex, t2 < this.tokenCount ? this.offsetAndType[t2] >> Ae : De;
    }
    lookupTypeNonSC(t2) {
      for (let n2 = this.tokenIndex; n2 < this.tokenCount; n2++) {
        const r2 = this.offsetAndType[n2] >> Ae;
        if (r2 !== W && r2 !== X && t2-- === 0)
          return r2;
      }
      return De;
    }
    lookupOffset(t2) {
      return t2 += this.tokenIndex, t2 < this.tokenCount ? this.offsetAndType[t2 - 1] & de : this.source.length;
    }
    lookupOffsetNonSC(t2) {
      for (let n2 = this.tokenIndex; n2 < this.tokenCount; n2++) {
        const r2 = this.offsetAndType[n2] >> Ae;
        if (r2 !== W && r2 !== X && t2-- === 0)
          return n2 - this.tokenIndex;
      }
      return De;
    }
    lookupValue(t2, n2) {
      return t2 += this.tokenIndex, t2 < this.tokenCount ? $t(
        this.source,
        this.offsetAndType[t2 - 1] & de,
        this.offsetAndType[t2] & de,
        n2
      ) : false;
    }
    getTokenStart(t2) {
      return t2 === this.tokenIndex ? this.tokenStart : t2 > 0 ? t2 < this.tokenCount ? this.offsetAndType[t2 - 1] & de : this.offsetAndType[this.tokenCount] & de : this.firstCharOffset;
    }
    substrToCursor(t2) {
      return this.source.substring(t2, this.tokenStart);
    }
    isBalanceEdge(t2) {
      return this.balance[this.tokenIndex] < t2;
    }
    isDelim(t2, n2) {
      return n2 ? this.lookupType(n2) === I && this.source.charCodeAt(this.lookupOffset(n2)) === t2 : this.tokenType === I && this.source.charCodeAt(this.tokenStart) === t2;
    }
    skip(t2) {
      let n2 = this.tokenIndex + t2;
      n2 < this.tokenCount ? (this.tokenIndex = n2, this.tokenStart = this.offsetAndType[n2 - 1] & de, n2 = this.offsetAndType[n2], this.tokenType = n2 >> Ae, this.tokenEnd = n2 & de) : (this.tokenIndex = this.tokenCount, this.next());
    }
    next() {
      let t2 = this.tokenIndex + 1;
      t2 < this.tokenCount ? (this.tokenIndex = t2, this.tokenStart = this.tokenEnd, t2 = this.offsetAndType[t2], this.tokenType = t2 >> Ae, this.tokenEnd = t2 & de) : (this.eof = true, this.tokenIndex = this.tokenCount, this.tokenType = De, this.tokenStart = this.tokenEnd = this.source.length);
    }
    skipSC() {
      for (; this.tokenType === W || this.tokenType === X; )
        this.next();
    }
    skipUntilBalanced(t2, n2) {
      let r2 = t2, i2, o2;
      e:
        for (; r2 < this.tokenCount; r2++) {
          if (i2 = this.balance[r2], i2 < t2)
            break e;
          switch (o2 = r2 > 0 ? this.offsetAndType[r2 - 1] & de : this.firstCharOffset, n2(this.source.charCodeAt(o2))) {
            case 1:
              break e;
            case 2:
              r2++;
              break e;
            default:
              this.balance[i2] === r2 && (r2 = i2);
          }
        }
      this.skip(r2 - this.tokenIndex);
    }
    forEachToken(t2) {
      for (let n2 = 0, r2 = this.firstCharOffset; n2 < this.tokenCount; n2++) {
        const i2 = r2, o2 = this.offsetAndType[n2], s2 = o2 & de, c = o2 >> Ae;
        r2 = s2, t2(c, i2, s2, n2);
      }
    }
    dump() {
      const t2 = new Array(this.tokenCount);
      return this.forEachToken((n2, r2, i2, o2) => {
        t2[o2] = {
          idx: o2,
          type: mo[n2],
          chunk: this.source.substring(r2, i2),
          balance: this.balance[o2]
        };
      }), t2;
    }
  };
  function gn(e2, t2) {
    function n2(h2) {
      return h2 < c ? e2.charCodeAt(h2) : 0;
    }
    function r2() {
      if (a2 = mn(e2, a2), qt(n2(a2), n2(a2 + 1), n2(a2 + 2))) {
        u = z, a2 = Dt(e2, a2);
        return;
      }
      if (n2(a2) === 37) {
        u = B, a2++;
        return;
      }
      u = L;
    }
    function i2() {
      const h2 = a2;
      if (a2 = Dt(e2, a2), $t(e2, h2, a2, "url") && n2(a2) === 40) {
        if (a2 = Nt(e2, a2 + 1), n2(a2) === 34 || n2(a2) === 39) {
          u = $, a2 = h2 + 4;
          return;
        }
        s2();
        return;
      }
      if (n2(a2) === 40) {
        u = $, a2++;
        return;
      }
      u = y;
    }
    function o2(h2) {
      for (h2 || (h2 = n2(a2++)), u = Te; a2 < e2.length; a2++) {
        const d = e2.charCodeAt(a2);
        switch (Tn(d)) {
          case h2:
            a2++;
            return;
          case Gt:
            if (tn(d)) {
              a2 += Yn(e2, a2, d), u = dn;
              return;
            }
            break;
          case 92:
            if (a2 === e2.length - 1)
              break;
            const m = n2(a2 + 1);
            tn(m) ? a2 += Yn(e2, a2 + 1, m) : Le(d, m) && (a2 = pt(e2, a2) - 1);
            break;
        }
      }
    }
    function s2() {
      for (u = te, a2 = Nt(e2, a2); a2 < e2.length; a2++) {
        const h2 = e2.charCodeAt(a2);
        switch (Tn(h2)) {
          case 41:
            a2++;
            return;
          case Gt:
            if (a2 = Nt(e2, a2), n2(a2) === 41 || a2 >= e2.length) {
              a2 < e2.length && a2++;
              return;
            }
            a2 = On(e2, a2), u = se;
            return;
          case 34:
          case 39:
          case 40:
          case fo:
            a2 = On(e2, a2), u = se;
            return;
          case 92:
            if (Le(h2, n2(a2 + 1))) {
              a2 = pt(e2, a2) - 1;
              break;
            }
            a2 = On(e2, a2), u = se;
            return;
        }
      }
    }
    e2 = String(e2 || "");
    const c = e2.length;
    let l2 = uo(n2(0)), a2 = l2, u;
    for (; a2 < c; ) {
      const h2 = e2.charCodeAt(a2);
      switch (Tn(h2)) {
        case Gt:
          u = W, a2 = Nt(e2, a2 + 1);
          break;
        case 34:
          o2();
          break;
        case 35:
          co(n2(a2 + 1)) || Le(n2(a2 + 1), n2(a2 + 2)) ? (u = F, a2 = Dt(e2, a2 + 1)) : (u = I, a2++);
          break;
        case 39:
          o2();
          break;
        case 40:
          u = M, a2++;
          break;
        case 41:
          u = E, a2++;
          break;
        case 43:
          Cn(h2, n2(a2 + 1), n2(a2 + 2)) ? r2() : (u = I, a2++);
          break;
        case 44:
          u = ce, a2++;
          break;
        case 45:
          Cn(h2, n2(a2 + 1), n2(a2 + 2)) ? r2() : n2(a2 + 1) === 45 && n2(a2 + 2) === 62 ? (u = ae, a2 = a2 + 3) : qt(h2, n2(a2 + 1), n2(a2 + 2)) ? i2() : (u = I, a2++);
          break;
        case 46:
          Cn(h2, n2(a2 + 1), n2(a2 + 2)) ? r2() : (u = I, a2++);
          break;
        case 47:
          n2(a2 + 1) === 42 ? (u = X, a2 = e2.indexOf("*/", a2 + 2), a2 = a2 === -1 ? e2.length : a2 + 2) : (u = I, a2++);
          break;
        case 58:
          u = ne, a2++;
          break;
        case 59:
          u = re, a2++;
          break;
        case 60:
          n2(a2 + 1) === 33 && n2(a2 + 2) === 45 && n2(a2 + 3) === 45 ? (u = Rt, a2 = a2 + 4) : (u = I, a2++);
          break;
        case 64:
          qt(n2(a2 + 1), n2(a2 + 2), n2(a2 + 3)) ? (u = G, a2 = Dt(e2, a2 + 1)) : (u = I, a2++);
          break;
        case 91:
          u = pe, a2++;
          break;
        case 92:
          Le(h2, n2(a2 + 1)) ? i2() : (u = I, a2++);
          break;
        case 93:
          u = Se, a2++;
          break;
        case 123:
          u = V, a2++;
          break;
        case 125:
          u = ue, a2++;
          break;
        case ho:
          r2();
          break;
        case mr:
          i2();
          break;
        default:
          u = I, a2++;
      }
      t2(u, l2, l2 = a2);
    }
  }
  var nt = null;
  var q = class _q {
    static createItem(t2) {
      return {
        prev: null,
        next: null,
        data: t2
      };
    }
    constructor() {
      this.head = null, this.tail = null, this.cursor = null;
    }
    createItem(t2) {
      return _q.createItem(t2);
    }
    // cursor helpers
    allocateCursor(t2, n2) {
      let r2;
      return nt !== null ? (r2 = nt, nt = nt.cursor, r2.prev = t2, r2.next = n2, r2.cursor = this.cursor) : r2 = {
        prev: t2,
        next: n2,
        cursor: this.cursor
      }, this.cursor = r2, r2;
    }
    releaseCursor() {
      const { cursor: t2 } = this;
      this.cursor = t2.cursor, t2.prev = null, t2.next = null, t2.cursor = nt, nt = t2;
    }
    updateCursors(t2, n2, r2, i2) {
      let { cursor: o2 } = this;
      for (; o2 !== null; )
        o2.prev === t2 && (o2.prev = n2), o2.next === r2 && (o2.next = i2), o2 = o2.cursor;
    }
    *[Symbol.iterator]() {
      for (let t2 = this.head; t2 !== null; t2 = t2.next)
        yield t2.data;
    }
    // getters
    get size() {
      let t2 = 0;
      for (let n2 = this.head; n2 !== null; n2 = n2.next)
        t2++;
      return t2;
    }
    get isEmpty() {
      return this.head === null;
    }
    get first() {
      return this.head && this.head.data;
    }
    get last() {
      return this.tail && this.tail.data;
    }
    // convertors
    fromArray(t2) {
      let n2 = null;
      this.head = null;
      for (let r2 of t2) {
        const i2 = _q.createItem(r2);
        n2 !== null ? n2.next = i2 : this.head = i2, i2.prev = n2, n2 = i2;
      }
      return this.tail = n2, this;
    }
    toArray() {
      return [...this];
    }
    toJSON() {
      return [...this];
    }
    // array-like methods
    forEach(t2, n2 = this) {
      const r2 = this.allocateCursor(null, this.head);
      for (; r2.next !== null; ) {
        const i2 = r2.next;
        r2.next = i2.next, t2.call(n2, i2.data, i2, this);
      }
      this.releaseCursor();
    }
    forEachRight(t2, n2 = this) {
      const r2 = this.allocateCursor(this.tail, null);
      for (; r2.prev !== null; ) {
        const i2 = r2.prev;
        r2.prev = i2.prev, t2.call(n2, i2.data, i2, this);
      }
      this.releaseCursor();
    }
    reduce(t2, n2, r2 = this) {
      let i2 = this.allocateCursor(null, this.head), o2 = n2, s2;
      for (; i2.next !== null; )
        s2 = i2.next, i2.next = s2.next, o2 = t2.call(r2, o2, s2.data, s2, this);
      return this.releaseCursor(), o2;
    }
    reduceRight(t2, n2, r2 = this) {
      let i2 = this.allocateCursor(this.tail, null), o2 = n2, s2;
      for (; i2.prev !== null; )
        s2 = i2.prev, i2.prev = s2.prev, o2 = t2.call(r2, o2, s2.data, s2, this);
      return this.releaseCursor(), o2;
    }
    some(t2, n2 = this) {
      for (let r2 = this.head; r2 !== null; r2 = r2.next)
        if (t2.call(n2, r2.data, r2, this))
          return true;
      return false;
    }
    map(t2, n2 = this) {
      const r2 = new _q();
      for (let i2 = this.head; i2 !== null; i2 = i2.next)
        r2.appendData(t2.call(n2, i2.data, i2, this));
      return r2;
    }
    filter(t2, n2 = this) {
      const r2 = new _q();
      for (let i2 = this.head; i2 !== null; i2 = i2.next)
        t2.call(n2, i2.data, i2, this) && r2.appendData(i2.data);
      return r2;
    }
    nextUntil(t2, n2, r2 = this) {
      if (t2 === null)
        return;
      const i2 = this.allocateCursor(null, t2);
      for (; i2.next !== null; ) {
        const o2 = i2.next;
        if (i2.next = o2.next, n2.call(r2, o2.data, o2, this))
          break;
      }
      this.releaseCursor();
    }
    prevUntil(t2, n2, r2 = this) {
      if (t2 === null)
        return;
      const i2 = this.allocateCursor(t2, null);
      for (; i2.prev !== null; ) {
        const o2 = i2.prev;
        if (i2.prev = o2.prev, n2.call(r2, o2.data, o2, this))
          break;
      }
      this.releaseCursor();
    }
    // mutation
    clear() {
      this.head = null, this.tail = null;
    }
    copy() {
      const t2 = new _q();
      for (let n2 of this)
        t2.appendData(n2);
      return t2;
    }
    prepend(t2) {
      return this.updateCursors(null, t2, this.head, t2), this.head !== null ? (this.head.prev = t2, t2.next = this.head) : this.tail = t2, this.head = t2, this;
    }
    prependData(t2) {
      return this.prepend(_q.createItem(t2));
    }
    append(t2) {
      return this.insert(t2);
    }
    appendData(t2) {
      return this.insert(_q.createItem(t2));
    }
    insert(t2, n2 = null) {
      if (n2 !== null)
        if (this.updateCursors(n2.prev, t2, n2, t2), n2.prev === null) {
          if (this.head !== n2)
            throw new Error("before doesn't belong to list");
          this.head = t2, n2.prev = t2, t2.next = n2, this.updateCursors(null, t2);
        } else
          n2.prev.next = t2, t2.prev = n2.prev, n2.prev = t2, t2.next = n2;
      else
        this.updateCursors(this.tail, t2, null, t2), this.tail !== null ? (this.tail.next = t2, t2.prev = this.tail) : this.head = t2, this.tail = t2;
      return this;
    }
    insertData(t2, n2) {
      return this.insert(_q.createItem(t2), n2);
    }
    remove(t2) {
      if (this.updateCursors(t2, t2.prev, t2, t2.next), t2.prev !== null)
        t2.prev.next = t2.next;
      else {
        if (this.head !== t2)
          throw new Error("item doesn't belong to list");
        this.head = t2.next;
      }
      if (t2.next !== null)
        t2.next.prev = t2.prev;
      else {
        if (this.tail !== t2)
          throw new Error("item doesn't belong to list");
        this.tail = t2.prev;
      }
      return t2.prev = null, t2.next = null, t2;
    }
    push(t2) {
      this.insert(_q.createItem(t2));
    }
    pop() {
      return this.tail !== null ? this.remove(this.tail) : null;
    }
    unshift(t2) {
      this.prepend(_q.createItem(t2));
    }
    shift() {
      return this.head !== null ? this.remove(this.head) : null;
    }
    prependList(t2) {
      return this.insertList(t2, this.head);
    }
    appendList(t2) {
      return this.insertList(t2);
    }
    insertList(t2, n2) {
      return t2.head === null ? this : (n2 != null ? (this.updateCursors(n2.prev, t2.tail, n2, t2.head), n2.prev !== null ? (n2.prev.next = t2.head, t2.head.prev = n2.prev) : this.head = t2.head, n2.prev = t2.tail, t2.tail.next = n2) : (this.updateCursors(this.tail, t2.tail, null, t2.head), this.tail !== null ? (this.tail.next = t2.head, t2.head.prev = this.tail) : this.head = t2.head, this.tail = t2.tail), t2.head = null, t2.tail = null, this);
    }
    replace(t2, n2) {
      "head" in n2 ? this.insertList(n2, t2) : this.insert(n2, t2), this.remove(t2);
    }
  };
  function bn(e2, t2) {
    const n2 = Object.create(SyntaxError.prototype), r2 = new Error();
    return Object.assign(n2, {
      name: e2,
      message: t2,
      get stack() {
        return (r2.stack || "").replace(/^(.+\n){1,3}/, `${e2}: ${t2}
`);
      }
    });
  }
  var En = 100;
  var Hr = 60;
  var Ur = "    ";
  function qr({ source: e2, line: t2, column: n2, baseLine: r2, baseColumn: i2 }, o2) {
    function s2(w, k) {
      return a2.slice(w, k).map(
        (C, b) => String(w + b + 1).padStart(d) + " |" + C
      ).join(`
`);
    }
    const c = `
`.repeat(Math.max(r2 - 1, 0)), l2 = " ".repeat(Math.max(i2 - 1, 0)), a2 = (c + l2 + e2).split(/\r\n?|\n|\f/), u = Math.max(1, t2 - o2) - 1, h2 = Math.min(t2 + o2, a2.length + 1), d = Math.max(4, String(h2).length) + 1;
    let m = 0;
    n2 += (Ur.length - 1) * (a2[t2 - 1].substr(0, n2 - 1).match(/\t/g) || []).length, n2 > En && (m = n2 - Hr + 3, n2 = Hr - 2);
    for (let w = u; w <= h2; w++)
      w >= 0 && w < a2.length && (a2[w] = a2[w].replace(/\t/g, Ur), a2[w] = (m > 0 && a2[w].length > m ? "\u2026" : "") + a2[w].substr(m, En - 2) + (a2[w].length > m + En - 1 ? "\u2026" : ""));
    return [
      s2(u, t2),
      new Array(n2 + d + 2).join("-") + "^",
      s2(t2, h2)
    ].filter(Boolean).join(`
`).replace(/^(\s+\d+\s+\|\n)+/, "").replace(/\n(\s+\d+\s+\|)+$/, "");
  }
  function Gr(e2, t2, n2, r2, i2, o2 = 1, s2 = 1) {
    return Object.assign(bn("SyntaxError", e2), {
      source: t2,
      offset: n2,
      line: r2,
      column: i2,
      sourceFragment(l2) {
        return qr({ source: t2, line: r2, column: i2, baseLine: o2, baseColumn: s2 }, isNaN(l2) ? 0 : l2);
      },
      get formattedMessage() {
        return `Parse error: ${e2}
` + qr({ source: t2, line: r2, column: i2, baseLine: o2, baseColumn: s2 }, 2);
      }
    });
  }
  function Ya(e2) {
    const t2 = this.createList();
    let n2 = false;
    const r2 = {
      recognizer: e2
    };
    for (; !this.eof; ) {
      switch (this.tokenType) {
        case X:
          this.next();
          continue;
        case W:
          n2 = true, this.next();
          continue;
      }
      let i2 = e2.getNode.call(this, r2);
      if (i2 === void 0)
        break;
      n2 && (e2.onWhiteSpace && e2.onWhiteSpace.call(this, i2, t2, r2), n2 = false), t2.push(i2);
    }
    return n2 && e2.onWhiteSpace && e2.onWhiteSpace.call(this, null, t2, r2), t2;
  }
  var Vr = () => {
  };
  var Qa = 33;
  var Xa = 35;
  var Ln = 59;
  var Kr = 123;
  var Yr = 0;
  function Za(e2) {
    return function() {
      return this[e2]();
    };
  }
  function $n(e2) {
    const t2 = /* @__PURE__ */ Object.create(null);
    for (const n2 of Object.keys(e2)) {
      const r2 = e2[n2], i2 = r2.parse || r2;
      i2 && (t2[n2] = i2);
    }
    return t2;
  }
  function Ja(e2) {
    const t2 = {
      context: /* @__PURE__ */ Object.create(null),
      features: Object.assign(/* @__PURE__ */ Object.create(null), e2.features),
      scope: Object.assign(/* @__PURE__ */ Object.create(null), e2.scope),
      atrule: $n(e2.atrule),
      pseudo: $n(e2.pseudo),
      node: $n(e2.node)
    };
    for (const [n2, r2] of Object.entries(e2.parseContext))
      switch (typeof r2) {
        case "function":
          t2.context[n2] = r2;
          break;
        case "string":
          t2.context[n2] = Za(r2);
          break;
      }
    return _(_({
      config: t2
    }, t2), t2.node);
  }
  function el(e2) {
    let t2 = "", n2 = "<unknown>", r2 = false, i2 = Vr, o2 = false;
    const s2 = new Ga(), c = Object.assign(new Ka(), Ja(e2 || {}), {
      parseAtrulePrelude: true,
      parseRulePrelude: true,
      parseValue: true,
      parseCustomProperty: false,
      readSequence: Ya,
      consumeUntilBalanceEnd: () => 0,
      consumeUntilLeftCurlyBracket(a2) {
        return a2 === Kr ? 1 : 0;
      },
      consumeUntilLeftCurlyBracketOrSemicolon(a2) {
        return a2 === Kr || a2 === Ln ? 1 : 0;
      },
      consumeUntilExclamationMarkOrSemicolon(a2) {
        return a2 === Qa || a2 === Ln ? 1 : 0;
      },
      consumeUntilSemicolonIncluded(a2) {
        return a2 === Ln ? 2 : 0;
      },
      createList() {
        return new q();
      },
      createSingleNodeList(a2) {
        return new q().appendData(a2);
      },
      getFirstListNode(a2) {
        return a2 && a2.first;
      },
      getLastListNode(a2) {
        return a2 && a2.last;
      },
      parseWithFallback(a2, u) {
        const h2 = this.tokenIndex;
        try {
          return a2.call(this);
        } catch (d) {
          if (o2)
            throw d;
          this.skip(h2 - this.tokenIndex);
          const m = u.call(this);
          return o2 = true, i2(d, m), o2 = false, m;
        }
      },
      lookupNonWSType(a2) {
        let u;
        do
          if (u = this.lookupType(a2++), u !== W && u !== X)
            return u;
        while (u !== Yr);
        return Yr;
      },
      charCodeAt(a2) {
        return a2 >= 0 && a2 < t2.length ? t2.charCodeAt(a2) : 0;
      },
      substring(a2, u) {
        return t2.substring(a2, u);
      },
      substrToCursor(a2) {
        return this.source.substring(a2, this.tokenStart);
      },
      cmpChar(a2, u) {
        return ht(t2, a2, u);
      },
      cmpStr(a2, u, h2) {
        return $t(t2, a2, u, h2);
      },
      consume(a2) {
        const u = this.tokenStart;
        return this.eat(a2), this.substrToCursor(u);
      },
      consumeFunctionName() {
        const a2 = t2.substring(this.tokenStart, this.tokenEnd - 1);
        return this.eat($), a2;
      },
      consumeNumber(a2) {
        const u = t2.substring(this.tokenStart, mn(t2, this.tokenStart));
        return this.eat(a2), u;
      },
      eat(a2) {
        if (this.tokenType !== a2) {
          const u = mo[a2].slice(0, -6).replace(/-/g, " ").replace(/^./, (m) => m.toUpperCase());
          let h2 = `${/[[\](){}]/.test(u) ? `"${u}"` : u} is expected`, d = this.tokenStart;
          switch (a2) {
            case y:
              this.tokenType === $ || this.tokenType === te ? (d = this.tokenEnd - 1, h2 = "Identifier is expected but function found") : h2 = "Identifier is expected";
              break;
            case F:
              this.isDelim(Xa) && (this.next(), d++, h2 = "Name is expected");
              break;
            case B:
              this.tokenType === L && (d = this.tokenEnd, h2 = "Percent sign is expected");
              break;
          }
          this.error(h2, d);
        }
        this.next();
      },
      eatIdent(a2) {
        (this.tokenType !== y || this.lookupValue(0, a2) === false) && this.error(`Identifier "${a2}" is expected`), this.next();
      },
      eatDelim(a2) {
        this.isDelim(a2) || this.error(`Delim "${String.fromCharCode(a2)}" is expected`), this.next();
      },
      getLocation(a2, u) {
        return r2 ? s2.getLocationRange(
          a2,
          u,
          n2
        ) : null;
      },
      getLocationFromList(a2) {
        if (r2) {
          const u = this.getFirstListNode(a2), h2 = this.getLastListNode(a2);
          return s2.getLocationRange(
            u !== null ? u.loc.start.offset - s2.startOffset : this.tokenStart,
            h2 !== null ? h2.loc.end.offset - s2.startOffset : this.tokenStart,
            n2
          );
        }
        return null;
      },
      error(a2, u) {
        const h2 = typeof u != "undefined" && u < t2.length ? s2.getLocation(u) : this.eof ? s2.getLocation(Ha(t2, t2.length - 1)) : s2.getLocation(this.tokenStart);
        throw new Gr(
          a2 || "Unexpected input",
          t2,
          h2.offset,
          h2.line,
          h2.column,
          s2.startLine,
          s2.startColumn
        );
      }
    });
    return Object.assign(function(a2, u) {
      t2 = a2, u = u || {}, c.setSource(t2, gn), s2.setSource(
        t2,
        u.offset,
        u.line,
        u.column
      ), n2 = u.filename || "<unknown>", r2 = !!u.positions, i2 = typeof u.onParseError == "function" ? u.onParseError : Vr, o2 = false, c.parseAtrulePrelude = "parseAtrulePrelude" in u ? !!u.parseAtrulePrelude : true, c.parseRulePrelude = "parseRulePrelude" in u ? !!u.parseRulePrelude : true, c.parseValue = "parseValue" in u ? !!u.parseValue : true, c.parseCustomProperty = "parseCustomProperty" in u ? !!u.parseCustomProperty : false;
      const { context: h2 = "default", onComment: d } = u;
      if (!(h2 in c.context))
        throw new Error("Unknown context `" + h2 + "`");
      typeof d == "function" && c.forEachToken((w, k, C) => {
        if (w === X) {
          const b = c.getLocation(k, C), x = $t(t2, C - 2, C, "*/") ? t2.slice(k + 2, C - 2) : t2.slice(k + 2, C);
          d(x, b);
        }
      });
      const m = c.context[h2].call(c, u);
      return c.eof || c.error(), m;
    }, {
      SyntaxError: Gr,
      config: c.config
    });
  }
  var gr = {};
  var br = {};
  var Qr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  br.encode = function(e2) {
    if (0 <= e2 && e2 < Qr.length)
      return Qr[e2];
    throw new TypeError("Must be between 0 and 63: " + e2);
  };
  br.decode = function(e2) {
    var t2 = 65, n2 = 90, r2 = 97, i2 = 122, o2 = 48, s2 = 57, c = 43, l2 = 47, a2 = 26, u = 52;
    return t2 <= e2 && e2 <= n2 ? e2 - t2 : r2 <= e2 && e2 <= i2 ? e2 - r2 + a2 : o2 <= e2 && e2 <= s2 ? e2 - o2 + u : e2 == c ? 62 : e2 == l2 ? 63 : -1;
  };
  var go = br;
  var yr = 5;
  var bo = 1 << yr;
  var yo = bo - 1;
  var ko = bo;
  function tl(e2) {
    return e2 < 0 ? (-e2 << 1) + 1 : (e2 << 1) + 0;
  }
  function nl(e2) {
    var t2 = (e2 & 1) === 1, n2 = e2 >> 1;
    return t2 ? -n2 : n2;
  }
  gr.encode = function(t2) {
    var n2 = "", r2, i2 = tl(t2);
    do
      r2 = i2 & yo, i2 >>>= yr, i2 > 0 && (r2 |= ko), n2 += go.encode(r2);
    while (i2 > 0);
    return n2;
  };
  gr.decode = function(t2, n2, r2) {
    var i2 = t2.length, o2 = 0, s2 = 0, c, l2;
    do {
      if (n2 >= i2)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (l2 = go.decode(t2.charCodeAt(n2++)), l2 === -1)
        throw new Error("Invalid base64 digit: " + t2.charAt(n2 - 1));
      c = !!(l2 & ko), l2 &= yo, o2 = o2 + (l2 << s2), s2 += yr;
    } while (c);
    r2.value = nl(o2), r2.rest = n2;
  };
  var yn = {};
  (function(e2) {
    function t2(f, p, S) {
      if (p in f)
        return f[p];
      if (arguments.length === 3)
        return S;
      throw new Error('"' + p + '" is a required argument.');
    }
    e2.getArg = t2;
    var n2 = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, r2 = /^data:.+\,.+$/;
    function i2(f) {
      var p = f.match(n2);
      return p ? {
        scheme: p[1],
        auth: p[2],
        host: p[3],
        port: p[4],
        path: p[5]
      } : null;
    }
    e2.urlParse = i2;
    function o2(f) {
      var p = "";
      return f.scheme && (p += f.scheme + ":"), p += "//", f.auth && (p += f.auth + "@"), f.host && (p += f.host), f.port && (p += ":" + f.port), f.path && (p += f.path), p;
    }
    e2.urlGenerate = o2;
    var s2 = 32;
    function c(f) {
      var p = [];
      return function(S) {
        for (var g = 0; g < p.length; g++)
          if (p[g].input === S) {
            var K = p[0];
            return p[0] = p[g], p[g] = K, p[0].result;
          }
        var R = f(S);
        return p.unshift({
          input: S,
          result: R
        }), p.length > s2 && p.pop(), R;
      };
    }
    var l2 = c(function(p) {
      var S = p, g = i2(p);
      if (g) {
        if (!g.path)
          return p;
        S = g.path;
      }
      for (var K = e2.isAbsolute(S), R = [], be = 0, Y = 0; ; )
        if (be = Y, Y = S.indexOf("/", be), Y === -1) {
          R.push(S.slice(be));
          break;
        } else
          for (R.push(S.slice(be, Y)); Y < S.length && S[Y] === "/"; )
            Y++;
      for (var ze, Ue = 0, Y = R.length - 1; Y >= 0; Y--)
        ze = R[Y], ze === "." ? R.splice(Y, 1) : ze === ".." ? Ue++ : Ue > 0 && (ze === "" ? (R.splice(Y + 1, Ue), Ue = 0) : (R.splice(Y, 2), Ue--));
      return S = R.join("/"), S === "" && (S = K ? "/" : "."), g ? (g.path = S, o2(g)) : S;
    });
    e2.normalize = l2;
    function a2(f, p) {
      f === "" && (f = "."), p === "" && (p = ".");
      var S = i2(p), g = i2(f);
      if (g && (f = g.path || "/"), S && !S.scheme)
        return g && (S.scheme = g.scheme), o2(S);
      if (S || p.match(r2))
        return p;
      if (g && !g.host && !g.path)
        return g.host = p, o2(g);
      var K = p.charAt(0) === "/" ? p : l2(f.replace(/\/+$/, "") + "/" + p);
      return g ? (g.path = K, o2(g)) : K;
    }
    e2.join = a2, e2.isAbsolute = function(f) {
      return f.charAt(0) === "/" || n2.test(f);
    };
    function u(f, p) {
      f === "" && (f = "."), f = f.replace(/\/$/, "");
      for (var S = 0; p.indexOf(f + "/") !== 0; ) {
        var g = f.lastIndexOf("/");
        if (g < 0 || (f = f.slice(0, g), f.match(/^([^\/]+:\/)?\/*$/)))
          return p;
        ++S;
      }
      return Array(S + 1).join("../") + p.substr(f.length + 1);
    }
    e2.relative = u;
    var h2 = function() {
      var f = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in f);
    }();
    function d(f) {
      return f;
    }
    function m(f) {
      return k(f) ? "$" + f : f;
    }
    e2.toSetString = h2 ? d : m;
    function w(f) {
      return k(f) ? f.slice(1) : f;
    }
    e2.fromSetString = h2 ? d : w;
    function k(f) {
      if (!f)
        return false;
      var p = f.length;
      if (p < 9 || f.charCodeAt(p - 1) !== 95 || f.charCodeAt(p - 2) !== 95 || f.charCodeAt(p - 3) !== 111 || f.charCodeAt(p - 4) !== 116 || f.charCodeAt(p - 5) !== 111 || f.charCodeAt(p - 6) !== 114 || f.charCodeAt(p - 7) !== 112 || f.charCodeAt(p - 8) !== 95 || f.charCodeAt(p - 9) !== 95)
        return false;
      for (var S = p - 10; S >= 0; S--)
        if (f.charCodeAt(S) !== 36)
          return false;
      return true;
    }
    function C(f, p, S) {
      var g = v(f.source, p.source);
      return g !== 0 || (g = f.originalLine - p.originalLine, g !== 0) || (g = f.originalColumn - p.originalColumn, g !== 0 || S) || (g = f.generatedColumn - p.generatedColumn, g !== 0) || (g = f.generatedLine - p.generatedLine, g !== 0) ? g : v(f.name, p.name);
    }
    e2.compareByOriginalPositions = C;
    function b(f, p, S) {
      var g;
      return g = f.originalLine - p.originalLine, g !== 0 || (g = f.originalColumn - p.originalColumn, g !== 0 || S) || (g = f.generatedColumn - p.generatedColumn, g !== 0) || (g = f.generatedLine - p.generatedLine, g !== 0) ? g : v(f.name, p.name);
    }
    e2.compareByOriginalPositionsNoSource = b;
    function x(f, p, S) {
      var g = f.generatedLine - p.generatedLine;
      return g !== 0 || (g = f.generatedColumn - p.generatedColumn, g !== 0 || S) || (g = v(f.source, p.source), g !== 0) || (g = f.originalLine - p.originalLine, g !== 0) || (g = f.originalColumn - p.originalColumn, g !== 0) ? g : v(f.name, p.name);
    }
    e2.compareByGeneratedPositionsDeflated = x;
    function T(f, p, S) {
      var g = f.generatedColumn - p.generatedColumn;
      return g !== 0 || S || (g = v(f.source, p.source), g !== 0) || (g = f.originalLine - p.originalLine, g !== 0) || (g = f.originalColumn - p.originalColumn, g !== 0) ? g : v(f.name, p.name);
    }
    e2.compareByGeneratedPositionsDeflatedNoLine = T;
    function v(f, p) {
      return f === p ? 0 : f === null ? 1 : p === null ? -1 : f > p ? 1 : -1;
    }
    function A(f, p) {
      var S = f.generatedLine - p.generatedLine;
      return S !== 0 || (S = f.generatedColumn - p.generatedColumn, S !== 0) || (S = v(f.source, p.source), S !== 0) || (S = f.originalLine - p.originalLine, S !== 0) || (S = f.originalColumn - p.originalColumn, S !== 0) ? S : v(f.name, p.name);
    }
    e2.compareByGeneratedPositionsInflated = A;
    function P(f) {
      return JSON.parse(f.replace(/^\)]}'[^\n]*\n/, ""));
    }
    e2.parseSourceMapInput = P;
    function O(f, p, S) {
      if (p = p || "", f && (f[f.length - 1] !== "/" && p[0] !== "/" && (f += "/"), p = f + p), S) {
        var g = i2(S);
        if (!g)
          throw new Error("sourceMapURL could not be parsed");
        if (g.path) {
          var K = g.path.lastIndexOf("/");
          K >= 0 && (g.path = g.path.substring(0, K + 1));
        }
        p = a2(o2(g), p);
      }
      return l2(p);
    }
    e2.computeSourceURL = O;
  })(yn);
  var xo = {};
  var kr = yn;
  var xr = Object.prototype.hasOwnProperty;
  var Ye = typeof Map != "undefined";
  function Re() {
    this._array = [], this._set = Ye ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  Re.fromArray = function(t2, n2) {
    for (var r2 = new Re(), i2 = 0, o2 = t2.length; i2 < o2; i2++)
      r2.add(t2[i2], n2);
    return r2;
  };
  Re.prototype.size = function() {
    return Ye ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  };
  Re.prototype.add = function(t2, n2) {
    var r2 = Ye ? t2 : kr.toSetString(t2), i2 = Ye ? this.has(t2) : xr.call(this._set, r2), o2 = this._array.length;
    (!i2 || n2) && this._array.push(t2), i2 || (Ye ? this._set.set(t2, o2) : this._set[r2] = o2);
  };
  Re.prototype.has = function(t2) {
    if (Ye)
      return this._set.has(t2);
    var n2 = kr.toSetString(t2);
    return xr.call(this._set, n2);
  };
  Re.prototype.indexOf = function(t2) {
    if (Ye) {
      var n2 = this._set.get(t2);
      if (n2 >= 0)
        return n2;
    } else {
      var r2 = kr.toSetString(t2);
      if (xr.call(this._set, r2))
        return this._set[r2];
    }
    throw new Error('"' + t2 + '" is not in the set.');
  };
  Re.prototype.at = function(t2) {
    if (t2 >= 0 && t2 < this._array.length)
      return this._array[t2];
    throw new Error("No element indexed by " + t2);
  };
  Re.prototype.toArray = function() {
    return this._array.slice();
  };
  xo.ArraySet = Re;
  var wo = {};
  var vo = yn;
  function rl(e2, t2) {
    var n2 = e2.generatedLine, r2 = t2.generatedLine, i2 = e2.generatedColumn, o2 = t2.generatedColumn;
    return r2 > n2 || r2 == n2 && o2 >= i2 || vo.compareByGeneratedPositionsInflated(e2, t2) <= 0;
  }
  function kn() {
    this._array = [], this._sorted = true, this._last = { generatedLine: -1, generatedColumn: 0 };
  }
  kn.prototype.unsortedForEach = function(t2, n2) {
    this._array.forEach(t2, n2);
  };
  kn.prototype.add = function(t2) {
    rl(this._last, t2) ? (this._last = t2, this._array.push(t2)) : (this._sorted = false, this._array.push(t2));
  };
  kn.prototype.toArray = function() {
    return this._sorted || (this._array.sort(vo.compareByGeneratedPositionsInflated), this._sorted = true), this._array;
  };
  wo.MappingList = kn;
  var yt = gr;
  var U = yn;
  var rn = xo.ArraySet;
  var il = wo.MappingList;
  function ge(e2) {
    e2 || (e2 = {}), this._file = U.getArg(e2, "file", null), this._sourceRoot = U.getArg(e2, "sourceRoot", null), this._skipValidation = U.getArg(e2, "skipValidation", false), this._ignoreInvalidMapping = U.getArg(e2, "ignoreInvalidMapping", false), this._sources = new rn(), this._names = new rn(), this._mappings = new il(), this._sourcesContents = null;
  }
  ge.prototype._version = 3;
  ge.fromSourceMap = function(t2, n2) {
    var r2 = t2.sourceRoot, i2 = new ge(Object.assign(n2 || {}, {
      file: t2.file,
      sourceRoot: r2
    }));
    return t2.eachMapping(function(o2) {
      var s2 = {
        generated: {
          line: o2.generatedLine,
          column: o2.generatedColumn
        }
      };
      o2.source != null && (s2.source = o2.source, r2 != null && (s2.source = U.relative(r2, s2.source)), s2.original = {
        line: o2.originalLine,
        column: o2.originalColumn
      }, o2.name != null && (s2.name = o2.name)), i2.addMapping(s2);
    }), t2.sources.forEach(function(o2) {
      var s2 = o2;
      r2 !== null && (s2 = U.relative(r2, o2)), i2._sources.has(s2) || i2._sources.add(s2);
      var c = t2.sourceContentFor(o2);
      c != null && i2.setSourceContent(o2, c);
    }), i2;
  };
  ge.prototype.addMapping = function(t2) {
    var n2 = U.getArg(t2, "generated"), r2 = U.getArg(t2, "original", null), i2 = U.getArg(t2, "source", null), o2 = U.getArg(t2, "name", null);
    !this._skipValidation && this._validateMapping(n2, r2, i2, o2) === false || (i2 != null && (i2 = String(i2), this._sources.has(i2) || this._sources.add(i2)), o2 != null && (o2 = String(o2), this._names.has(o2) || this._names.add(o2)), this._mappings.add({
      generatedLine: n2.line,
      generatedColumn: n2.column,
      originalLine: r2 != null && r2.line,
      originalColumn: r2 != null && r2.column,
      source: i2,
      name: o2
    }));
  };
  ge.prototype.setSourceContent = function(t2, n2) {
    var r2 = t2;
    this._sourceRoot != null && (r2 = U.relative(this._sourceRoot, r2)), n2 != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[U.toSetString(r2)] = n2) : this._sourcesContents && (delete this._sourcesContents[U.toSetString(r2)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  };
  ge.prototype.applySourceMap = function(t2, n2, r2) {
    var i2 = n2;
    if (n2 == null) {
      if (t2.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      i2 = t2.file;
    }
    var o2 = this._sourceRoot;
    o2 != null && (i2 = U.relative(o2, i2));
    var s2 = new rn(), c = new rn();
    this._mappings.unsortedForEach(function(l2) {
      if (l2.source === i2 && l2.originalLine != null) {
        var a2 = t2.originalPositionFor({
          line: l2.originalLine,
          column: l2.originalColumn
        });
        a2.source != null && (l2.source = a2.source, r2 != null && (l2.source = U.join(r2, l2.source)), o2 != null && (l2.source = U.relative(o2, l2.source)), l2.originalLine = a2.line, l2.originalColumn = a2.column, a2.name != null && (l2.name = a2.name));
      }
      var u = l2.source;
      u != null && !s2.has(u) && s2.add(u);
      var h2 = l2.name;
      h2 != null && !c.has(h2) && c.add(h2);
    }, this), this._sources = s2, this._names = c, t2.sources.forEach(function(l2) {
      var a2 = t2.sourceContentFor(l2);
      a2 != null && (r2 != null && (l2 = U.join(r2, l2)), o2 != null && (l2 = U.relative(o2, l2)), this.setSourceContent(l2, a2));
    }, this);
  };
  ge.prototype._validateMapping = function(t2, n2, r2, i2) {
    if (n2 && typeof n2.line != "number" && typeof n2.column != "number") {
      var o2 = "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.";
      if (this._ignoreInvalidMapping)
        return typeof console != "undefined" && console.warn && console.warn(o2), false;
      throw new Error(o2);
    }
    if (!(t2 && "line" in t2 && "column" in t2 && t2.line > 0 && t2.column >= 0 && !n2 && !r2 && !i2)) {
      if (t2 && "line" in t2 && "column" in t2 && n2 && "line" in n2 && "column" in n2 && t2.line > 0 && t2.column >= 0 && n2.line > 0 && n2.column >= 0 && r2)
        return;
      var o2 = "Invalid mapping: " + JSON.stringify({
        generated: t2,
        source: r2,
        original: n2,
        name: i2
      });
      if (this._ignoreInvalidMapping)
        return typeof console != "undefined" && console.warn && console.warn(o2), false;
      throw new Error(o2);
    }
  };
  ge.prototype._serializeMappings = function() {
    for (var t2 = 0, n2 = 1, r2 = 0, i2 = 0, o2 = 0, s2 = 0, c = "", l2, a2, u, h2, d = this._mappings.toArray(), m = 0, w = d.length; m < w; m++) {
      if (a2 = d[m], l2 = "", a2.generatedLine !== n2)
        for (t2 = 0; a2.generatedLine !== n2; )
          l2 += ";", n2++;
      else if (m > 0) {
        if (!U.compareByGeneratedPositionsInflated(a2, d[m - 1]))
          continue;
        l2 += ",";
      }
      l2 += yt.encode(a2.generatedColumn - t2), t2 = a2.generatedColumn, a2.source != null && (h2 = this._sources.indexOf(a2.source), l2 += yt.encode(h2 - s2), s2 = h2, l2 += yt.encode(a2.originalLine - 1 - i2), i2 = a2.originalLine - 1, l2 += yt.encode(a2.originalColumn - r2), r2 = a2.originalColumn, a2.name != null && (u = this._names.indexOf(a2.name), l2 += yt.encode(u - o2), o2 = u)), c += l2;
    }
    return c;
  };
  ge.prototype._generateSourcesContent = function(t2, n2) {
    return t2.map(function(r2) {
      if (!this._sourcesContents)
        return null;
      n2 != null && (r2 = U.relative(n2, r2));
      var i2 = U.toSetString(r2);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, i2) ? this._sourcesContents[i2] : null;
    }, this);
  };
  ge.prototype.toJSON = function() {
    var t2 = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    return this._file != null && (t2.file = this._file), this._sourceRoot != null && (t2.sourceRoot = this._sourceRoot), this._sourcesContents && (t2.sourcesContent = this._generateSourcesContent(t2.sources, t2.sourceRoot)), t2;
  };
  ge.prototype.toString = function() {
    return JSON.stringify(this.toJSON());
  };
  var ol = ge;
  var Xr = /* @__PURE__ */ new Set(["Atrule", "Selector", "Declaration"]);
  function sl(e2) {
    const t2 = new ol(), n2 = {
      line: 1,
      column: 0
    }, r2 = {
      line: 0,
      // should be zero to add first mapping
      column: 0
    }, i2 = {
      line: 1,
      column: 0
    }, o2 = {
      generated: i2
    };
    let s2 = 1, c = 0, l2 = false;
    const a2 = e2.node;
    e2.node = function(d) {
      if (d.loc && d.loc.start && Xr.has(d.type)) {
        const m = d.loc.start.line, w = d.loc.start.column - 1;
        (r2.line !== m || r2.column !== w) && (r2.line = m, r2.column = w, n2.line = s2, n2.column = c, l2 && (l2 = false, (n2.line !== i2.line || n2.column !== i2.column) && t2.addMapping(o2)), l2 = true, t2.addMapping({
          source: d.loc.source,
          original: r2,
          generated: n2
        }));
      }
      a2.call(this, d), l2 && Xr.has(d.type) && (i2.line = s2, i2.column = c);
    };
    const u = e2.emit;
    e2.emit = function(d, m, w) {
      for (let k = 0; k < d.length; k++)
        d.charCodeAt(k) === 10 ? (s2++, c = 0) : c++;
      u(d, m, w);
    };
    const h2 = e2.result;
    return e2.result = function() {
      return l2 && t2.addMapping(o2), {
        css: h2(),
        map: t2
      };
    }, e2;
  }
  var al = 43;
  var ll = 45;
  var _n = (e2, t2) => {
    if (e2 === I && (e2 = t2), typeof e2 == "string") {
      const n2 = e2.charCodeAt(0);
      return n2 > 127 ? 32768 : n2 << 8;
    }
    return e2;
  };
  var So = [
    [y, y],
    [y, $],
    [y, te],
    [y, se],
    [y, "-"],
    [y, L],
    [y, B],
    [y, z],
    [y, ae],
    [y, M],
    [G, y],
    [G, $],
    [G, te],
    [G, se],
    [G, "-"],
    [G, L],
    [G, B],
    [G, z],
    [G, ae],
    [F, y],
    [F, $],
    [F, te],
    [F, se],
    [F, "-"],
    [F, L],
    [F, B],
    [F, z],
    [F, ae],
    [z, y],
    [z, $],
    [z, te],
    [z, se],
    [z, "-"],
    [z, L],
    [z, B],
    [z, z],
    [z, ae],
    ["#", y],
    ["#", $],
    ["#", te],
    ["#", se],
    ["#", "-"],
    ["#", L],
    ["#", B],
    ["#", z],
    ["#", ae],
    // https://github.com/w3c/csswg-drafts/pull/6874
    ["-", y],
    ["-", $],
    ["-", te],
    ["-", se],
    ["-", "-"],
    ["-", L],
    ["-", B],
    ["-", z],
    ["-", ae],
    // https://github.com/w3c/csswg-drafts/pull/6874
    [L, y],
    [L, $],
    [L, te],
    [L, se],
    [L, L],
    [L, B],
    [L, z],
    [L, "%"],
    [L, ae],
    // https://github.com/w3c/csswg-drafts/pull/6874
    ["@", y],
    ["@", $],
    ["@", te],
    ["@", se],
    ["@", "-"],
    ["@", ae],
    // https://github.com/w3c/csswg-drafts/pull/6874
    [".", L],
    [".", B],
    [".", z],
    ["+", L],
    ["+", B],
    ["+", z],
    ["/", "*"]
  ];
  var cl = So.concat([
    [y, F],
    [z, F],
    [F, F],
    [G, M],
    [G, Te],
    [G, ne],
    [B, B],
    [B, z],
    [B, $],
    [B, "-"],
    [E, y],
    [E, $],
    [E, B],
    [E, z],
    [E, F],
    [E, "-"]
  ]);
  function Co(e2) {
    const t2 = new Set(
      e2.map(([n2, r2]) => _n(n2) << 16 | _n(r2))
    );
    return function(n2, r2, i2) {
      const o2 = _n(r2, i2), s2 = i2.charCodeAt(0);
      return (s2 === ll && r2 !== y && r2 !== $ && r2 !== ae || s2 === al ? t2.has(n2 << 16 | s2 << 8) : t2.has(n2 << 16 | o2)) && this.emit(" ", W, true), o2;
    };
  }
  var ul = Co(So);
  var To = Co(cl);
  var Zr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    safe: To,
    spec: ul
  }, Symbol.toStringTag, { value: "Module" }));
  var hl = 92;
  function fl(e2, t2) {
    if (typeof t2 == "function") {
      let n2 = null;
      e2.children.forEach((r2) => {
        n2 !== null && t2.call(this, n2), this.node(r2), n2 = r2;
      });
      return;
    }
    e2.children.forEach(this.node, this);
  }
  function pl(e2) {
    gn(e2, (t2, n2, r2) => {
      this.token(t2, e2.slice(n2, r2));
    });
  }
  function dl(e2) {
    const t2 = /* @__PURE__ */ new Map();
    for (let [n2, r2] of Object.entries(e2.node))
      typeof (r2.generate || r2) == "function" && t2.set(n2, r2.generate || r2);
    return function(n2, r2) {
      let i2 = "", o2 = 0, s2 = {
        node(l2) {
          if (t2.has(l2.type))
            t2.get(l2.type).call(c, l2);
          else
            throw new Error("Unknown node type: " + l2.type);
        },
        tokenBefore: To,
        token(l2, a2) {
          o2 = this.tokenBefore(o2, l2, a2), this.emit(a2, l2, false), l2 === I && a2.charCodeAt(0) === hl && this.emit(`
`, W, true);
        },
        emit(l2) {
          i2 += l2;
        },
        result() {
          return i2;
        }
      };
      r2 && (typeof r2.decorator == "function" && (s2 = r2.decorator(s2)), r2.sourceMap && (s2 = sl(s2)), r2.mode in Zr && (s2.tokenBefore = Zr[r2.mode]));
      const c = {
        node: (l2) => s2.node(l2),
        children: fl,
        token: (l2, a2) => s2.token(l2, a2),
        tokenize: pl
      };
      return s2.node(n2), s2.result();
    };
  }
  function ml(e2) {
    return {
      fromPlainObject(t2) {
        return e2(t2, {
          enter(n2) {
            n2.children && !(n2.children instanceof q) && (n2.children = new q().fromArray(n2.children));
          }
        }), t2;
      },
      toPlainObject(t2) {
        return e2(t2, {
          leave(n2) {
            n2.children && n2.children instanceof q && (n2.children = n2.children.toArray());
          }
        }), t2;
      }
    };
  }
  var { hasOwnProperty: wr } = Object.prototype;
  var xt = function() {
  };
  function Jr(e2) {
    return typeof e2 == "function" ? e2 : xt;
  }
  function ei(e2, t2) {
    return function(n2, r2, i2) {
      n2.type === t2 && e2.call(this, n2, r2, i2);
    };
  }
  function gl(e2, t2) {
    const n2 = t2.structure, r2 = [];
    for (const i2 in n2) {
      if (wr.call(n2, i2) === false)
        continue;
      let o2 = n2[i2];
      const s2 = {
        name: i2,
        type: false,
        nullable: false
      };
      Array.isArray(o2) || (o2 = [o2]);
      for (const c of o2)
        c === null ? s2.nullable = true : typeof c == "string" ? s2.type = "node" : Array.isArray(c) && (s2.type = "list");
      s2.type && r2.push(s2);
    }
    return r2.length ? {
      context: t2.walkContext,
      fields: r2
    } : null;
  }
  function bl(e2) {
    const t2 = {};
    for (const n2 in e2.node)
      if (wr.call(e2.node, n2)) {
        const r2 = e2.node[n2];
        if (!r2.structure)
          throw new Error("Missed `structure` field in `" + n2 + "` node type definition");
        t2[n2] = gl(n2, r2);
      }
    return t2;
  }
  function ti(e2, t2) {
    const n2 = e2.fields.slice(), r2 = e2.context, i2 = typeof r2 == "string";
    return t2 && n2.reverse(), function(o2, s2, c, l2) {
      let a2;
      i2 && (a2 = s2[r2], s2[r2] = o2);
      for (const u of n2) {
        const h2 = o2[u.name];
        if (!u.nullable || h2) {
          if (u.type === "list") {
            if (t2 ? h2.reduceRight(l2, false) : h2.reduce(l2, false))
              return true;
          } else if (c(h2))
            return true;
        }
      }
      i2 && (s2[r2] = a2);
    };
  }
  function ni({
    StyleSheet: e2,
    Atrule: t2,
    Rule: n2,
    Block: r2,
    DeclarationList: i2
  }) {
    return {
      Atrule: {
        StyleSheet: e2,
        Atrule: t2,
        Rule: n2,
        Block: r2
      },
      Rule: {
        StyleSheet: e2,
        Atrule: t2,
        Rule: n2,
        Block: r2
      },
      Declaration: {
        StyleSheet: e2,
        Atrule: t2,
        Rule: n2,
        Block: r2,
        DeclarationList: i2
      }
    };
  }
  function yl(e2) {
    const t2 = bl(e2), n2 = {}, r2 = {}, i2 = Symbol("break-walk"), o2 = Symbol("skip-node");
    for (const a2 in t2)
      wr.call(t2, a2) && t2[a2] !== null && (n2[a2] = ti(t2[a2], false), r2[a2] = ti(t2[a2], true));
    const s2 = ni(n2), c = ni(r2), l2 = function(a2, u) {
      function h2(b, x, T) {
        const v = d.call(C, b, x, T);
        return v === i2 ? true : v === o2 ? false : !!(w.hasOwnProperty(b.type) && w[b.type](b, C, h2, k) || m.call(C, b, x, T) === i2);
      }
      let d = xt, m = xt, w = n2, k = (b, x, T, v) => b || h2(x, T, v);
      const C = {
        break: i2,
        skip: o2,
        root: a2,
        stylesheet: null,
        atrule: null,
        atrulePrelude: null,
        rule: null,
        selector: null,
        block: null,
        declaration: null,
        function: null
      };
      if (typeof u == "function")
        d = u;
      else if (u && (d = Jr(u.enter), m = Jr(u.leave), u.reverse && (w = r2), u.visit)) {
        if (s2.hasOwnProperty(u.visit))
          w = u.reverse ? c[u.visit] : s2[u.visit];
        else if (!t2.hasOwnProperty(u.visit))
          throw new Error("Bad value `" + u.visit + "` for `visit` option (should be: " + Object.keys(t2).sort().join(", ") + ")");
        d = ei(d, u.visit), m = ei(m, u.visit);
      }
      if (d === xt && m === xt)
        throw new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
      h2(a2);
    };
    return l2.break = i2, l2.skip = o2, l2.find = function(a2, u) {
      let h2 = null;
      return l2(a2, function(d, m, w) {
        if (u.call(this, d, m, w))
          return h2 = d, i2;
      }), h2;
    }, l2.findLast = function(a2, u) {
      let h2 = null;
      return l2(a2, {
        reverse: true,
        enter(d, m, w) {
          if (u.call(this, d, m, w))
            return h2 = d, i2;
        }
      }), h2;
    }, l2.findAll = function(a2, u) {
      const h2 = [];
      return l2(a2, function(d, m, w) {
        u.call(this, d, m, w) && h2.push(d);
      }), h2;
    }, l2;
  }
  function kl(e2) {
    return e2;
  }
  function xl(e2) {
    const { min: t2, max: n2, comma: r2 } = e2;
    return t2 === 0 && n2 === 0 ? r2 ? "#?" : "*" : t2 === 0 && n2 === 1 ? "?" : t2 === 1 && n2 === 0 ? r2 ? "#" : "+" : t2 === 1 && n2 === 1 ? "" : (r2 ? "#" : "") + (t2 === n2 ? "{" + t2 + "}" : "{" + t2 + "," + (n2 !== 0 ? n2 : "") + "}");
  }
  function wl(e2) {
    switch (e2.type) {
      case "Range":
        return " [" + (e2.min === null ? "-\u221E" : e2.min) + "," + (e2.max === null ? "\u221E" : e2.max) + "]";
      default:
        throw new Error("Unknown node type `" + e2.type + "`");
    }
  }
  function vl(e2, t2, n2, r2) {
    const i2 = e2.combinator === " " || r2 ? e2.combinator : " " + e2.combinator + " ", o2 = e2.terms.map((s2) => vr(s2, t2, n2, r2)).join(i2);
    return e2.explicit || n2 ? (r2 || o2[0] === "," ? "[" : "[ ") + o2 + (r2 ? "]" : " ]") : o2;
  }
  function vr(e2, t2, n2, r2) {
    let i2;
    switch (e2.type) {
      case "Group":
        i2 = vl(e2, t2, n2, r2) + (e2.disallowEmpty ? "!" : "");
        break;
      case "Multiplier":
        return vr(e2.term, t2, n2, r2) + t2(xl(e2), e2);
      case "Type":
        i2 = "<" + e2.name + (e2.opts ? t2(wl(e2.opts), e2.opts) : "") + ">";
        break;
      case "Property":
        i2 = "<'" + e2.name + "'>";
        break;
      case "Keyword":
        i2 = e2.name;
        break;
      case "AtKeyword":
        i2 = "@" + e2.name;
        break;
      case "Function":
        i2 = e2.name + "(";
        break;
      case "String":
      case "Token":
        i2 = e2.value;
        break;
      case "Comma":
        i2 = ",";
        break;
      default:
        throw new Error("Unknown node type `" + e2.type + "`");
    }
    return t2(i2, e2);
  }
  function Sr(e2, t2) {
    let n2 = kl, r2 = false, i2 = false;
    return typeof t2 == "function" ? n2 = t2 : t2 && (r2 = !!t2.forceBraces, i2 = !!t2.compact, typeof t2.decorate == "function" && (n2 = t2.decorate)), vr(e2, n2, r2, i2);
  }
  var ri = { offset: 0, line: 1, column: 1 };
  function Sl(e2, t2) {
    const n2 = e2.tokens, r2 = e2.longestMatch, i2 = r2 < n2.length && n2[r2].node || null, o2 = i2 !== t2 ? i2 : null;
    let s2 = 0, c = 0, l2 = 0, a2 = "", u, h2;
    for (let d = 0; d < n2.length; d++) {
      const m = n2[d].value;
      d === r2 && (c = m.length, s2 = a2.length), o2 !== null && n2[d].node === o2 && (d <= r2 ? l2++ : l2 = 0), a2 += m;
    }
    return r2 === n2.length || l2 > 1 ? (u = jt(o2 || t2, "end") || wt(ri, a2), h2 = wt(u)) : (u = jt(o2, "start") || wt(jt(t2, "start") || ri, a2.slice(0, s2)), h2 = jt(o2, "end") || wt(u, a2.substr(s2, c))), {
      css: a2,
      mismatchOffset: s2,
      mismatchLength: c,
      start: u,
      end: h2
    };
  }
  function jt(e2, t2) {
    const n2 = e2 && e2.loc && e2.loc[t2];
    return n2 ? "line" in n2 ? wt(n2) : n2 : null;
  }
  function wt({ offset: e2, line: t2, column: n2 }, r2) {
    const i2 = {
      offset: e2,
      line: t2,
      column: n2
    };
    if (r2) {
      const o2 = r2.split(/\n|\r\n?|\f/);
      i2.offset += r2.length, i2.line += o2.length - 1, i2.column = o2.length === 1 ? i2.column + r2.length : o2.pop().length + 1;
    }
    return i2;
  }
  var kt = function(e2, t2) {
    const n2 = bn(
      "SyntaxReferenceError",
      e2 + (t2 ? " `" + t2 + "`" : "")
    );
    return n2.reference = t2, n2;
  };
  var Cl = function(e2, t2, n2, r2) {
    const i2 = bn("SyntaxMatchError", e2), {
      css: o2,
      mismatchOffset: s2,
      mismatchLength: c,
      start: l2,
      end: a2
    } = Sl(r2, n2);
    return i2.rawMessage = e2, i2.syntax = t2 ? Sr(t2) : "<generic>", i2.css = o2, i2.mismatchOffset = s2, i2.mismatchLength = c, i2.message = e2 + `
  syntax: ` + i2.syntax + `
   value: ` + (o2 || "<empty string>") + `
  --------` + new Array(i2.mismatchOffset + 1).join("-") + "^", Object.assign(i2, l2), i2.loc = {
      source: n2 && n2.loc && n2.loc.source || "<unknown>",
      start: l2,
      end: a2
    }, i2;
  };
  var Ft = /* @__PURE__ */ new Map();
  var rt = /* @__PURE__ */ new Map();
  var on = 45;
  var Pn = Tl;
  var ii = Al;
  function Cr(e2, t2) {
    return t2 = t2 || 0, e2.length - t2 >= 2 && e2.charCodeAt(t2) === on && e2.charCodeAt(t2 + 1) === on;
  }
  function Ao(e2, t2) {
    if (t2 = t2 || 0, e2.length - t2 >= 3 && e2.charCodeAt(t2) === on && e2.charCodeAt(t2 + 1) !== on) {
      const n2 = e2.indexOf("-", t2 + 2);
      if (n2 !== -1)
        return e2.substring(t2, n2 + 1);
    }
    return "";
  }
  function Tl(e2) {
    if (Ft.has(e2))
      return Ft.get(e2);
    const t2 = e2.toLowerCase();
    let n2 = Ft.get(t2);
    if (n2 === void 0) {
      const r2 = Cr(t2, 0), i2 = r2 ? "" : Ao(t2, 0);
      n2 = Object.freeze({
        basename: t2.substr(i2.length),
        name: t2,
        prefix: i2,
        vendor: i2,
        custom: r2
      });
    }
    return Ft.set(e2, n2), n2;
  }
  function Al(e2) {
    if (rt.has(e2))
      return rt.get(e2);
    let t2 = e2, n2 = e2[0];
    n2 === "/" ? n2 = e2[1] === "/" ? "//" : "/" : n2 !== "_" && n2 !== "*" && n2 !== "$" && n2 !== "#" && n2 !== "+" && n2 !== "&" && (n2 = "");
    const r2 = Cr(t2, n2.length);
    if (!r2 && (t2 = t2.toLowerCase(), rt.has(t2))) {
      const c = rt.get(t2);
      return rt.set(e2, c), c;
    }
    const i2 = r2 ? "" : Ao(t2, n2.length), o2 = t2.substr(0, n2.length + i2.length), s2 = Object.freeze({
      basename: t2.substr(o2.length),
      name: t2.substr(n2.length),
      hack: n2,
      vendor: i2,
      prefix: o2,
      custom: r2
    });
    return rt.set(e2, s2), s2;
  }
  var Oo = [
    "initial",
    "inherit",
    "unset",
    "revert",
    "revert-layer"
  ];
  var _t = 43;
  var Oe = 45;
  var zn = 110;
  var it = true;
  var Ol = false;
  function Qn(e2, t2) {
    return e2 !== null && e2.type === I && e2.value.charCodeAt(0) === t2;
  }
  function Tt(e2, t2, n2) {
    for (; e2 !== null && (e2.type === W || e2.type === X); )
      e2 = n2(++t2);
    return t2;
  }
  function Ne(e2, t2, n2, r2) {
    if (!e2)
      return 0;
    const i2 = e2.value.charCodeAt(t2);
    if (i2 === _t || i2 === Oe) {
      if (n2)
        return 0;
      t2++;
    }
    for (; t2 < e2.value.length; t2++)
      if (!Q(e2.value.charCodeAt(t2)))
        return 0;
    return r2 + 1;
  }
  function In(e2, t2, n2) {
    let r2 = false, i2 = Tt(e2, t2, n2);
    if (e2 = n2(i2), e2 === null)
      return t2;
    if (e2.type !== L)
      if (Qn(e2, _t) || Qn(e2, Oe)) {
        if (r2 = true, i2 = Tt(n2(++i2), i2, n2), e2 = n2(i2), e2 === null || e2.type !== L)
          return 0;
      } else
        return t2;
    if (!r2) {
      const o2 = e2.value.charCodeAt(0);
      if (o2 !== _t && o2 !== Oe)
        return 0;
    }
    return Ne(e2, r2 ? 0 : 1, r2, i2);
  }
  function El(e2, t2) {
    let n2 = 0;
    if (!e2)
      return 0;
    if (e2.type === L)
      return Ne(e2, 0, Ol, n2);
    if (e2.type === y && e2.value.charCodeAt(0) === Oe) {
      if (!ht(e2.value, 1, zn))
        return 0;
      switch (e2.value.length) {
        case 2:
          return In(t2(++n2), n2, t2);
        case 3:
          return e2.value.charCodeAt(2) !== Oe ? 0 : (n2 = Tt(t2(++n2), n2, t2), e2 = t2(n2), Ne(e2, 0, it, n2));
        default:
          return e2.value.charCodeAt(2) !== Oe ? 0 : Ne(e2, 3, it, n2);
      }
    } else if (e2.type === y || Qn(e2, _t) && t2(n2 + 1).type === y) {
      if (e2.type !== y && (e2 = t2(++n2)), e2 === null || !ht(e2.value, 0, zn))
        return 0;
      switch (e2.value.length) {
        case 1:
          return In(t2(++n2), n2, t2);
        case 2:
          return e2.value.charCodeAt(1) !== Oe ? 0 : (n2 = Tt(t2(++n2), n2, t2), e2 = t2(n2), Ne(e2, 0, it, n2));
        default:
          return e2.value.charCodeAt(1) !== Oe ? 0 : Ne(e2, 2, it, n2);
      }
    } else if (e2.type === z) {
      let r2 = e2.value.charCodeAt(0), i2 = r2 === _t || r2 === Oe ? 1 : 0, o2 = i2;
      for (; o2 < e2.value.length && Q(e2.value.charCodeAt(o2)); o2++)
        ;
      return o2 === i2 || !ht(e2.value, o2, zn) ? 0 : o2 + 1 === e2.value.length ? In(t2(++n2), n2, t2) : e2.value.charCodeAt(o2 + 1) !== Oe ? 0 : o2 + 2 === e2.value.length ? (n2 = Tt(t2(++n2), n2, t2), e2 = t2(n2), Ne(e2, 0, it, n2)) : Ne(e2, o2 + 2, it, n2);
    }
    return 0;
  }
  var Ll = 43;
  var Eo = 45;
  var Lo = 63;
  var $l = 117;
  function Xn(e2, t2) {
    return e2 !== null && e2.type === I && e2.value.charCodeAt(0) === t2;
  }
  function _l(e2, t2) {
    return e2.value.charCodeAt(0) === t2;
  }
  function vt(e2, t2, n2) {
    let r2 = 0;
    for (let i2 = t2; i2 < e2.value.length; i2++) {
      const o2 = e2.value.charCodeAt(i2);
      if (o2 === Eo && n2 && r2 !== 0)
        return vt(e2, t2 + r2 + 1, false), 6;
      if (!He(o2) || ++r2 > 6)
        return 0;
    }
    return r2;
  }
  function Bt(e2, t2, n2) {
    if (!e2)
      return 0;
    for (; Xn(n2(t2), Lo); ) {
      if (++e2 > 6)
        return 0;
      t2++;
    }
    return t2;
  }
  function Pl(e2, t2) {
    let n2 = 0;
    if (e2 === null || e2.type !== y || !ht(e2.value, 0, $l) || (e2 = t2(++n2), e2 === null))
      return 0;
    if (Xn(e2, Ll))
      return e2 = t2(++n2), e2 === null ? 0 : e2.type === y ? Bt(vt(e2, 0, true), ++n2, t2) : Xn(e2, Lo) ? Bt(1, ++n2, t2) : 0;
    if (e2.type === L) {
      const r2 = vt(e2, 1, true);
      return r2 === 0 ? 0 : (e2 = t2(++n2), e2 === null ? n2 : e2.type === z || e2.type === L ? !_l(e2, Eo) || !vt(e2, 1, false) ? 0 : n2 + 1 : Bt(r2, n2, t2));
    }
    return e2.type === z ? Bt(vt(e2, 1, true), ++n2, t2) : 0;
  }
  var zl = ["calc(", "-moz-calc(", "-webkit-calc("];
  var Tr = /* @__PURE__ */ new Map([
    [$, E],
    [M, E],
    [pe, Se],
    [V, ue]
  ]);
  function xe(e2, t2) {
    return t2 < e2.length ? e2.charCodeAt(t2) : 0;
  }
  function $o(e2, t2) {
    return $t(e2, 0, e2.length, t2);
  }
  function _o(e2, t2) {
    for (let n2 = 0; n2 < t2.length; n2++)
      if ($o(e2, t2[n2]))
        return true;
    return false;
  }
  function Po(e2, t2) {
    return t2 !== e2.length - 2 ? false : xe(e2, t2) === 92 && // U+005C REVERSE SOLIDUS (\)
    Q(xe(e2, t2 + 1));
  }
  function xn(e2, t2, n2) {
    if (e2 && e2.type === "Range") {
      const r2 = Number(
        n2 !== void 0 && n2 !== t2.length ? t2.substr(0, n2) : t2
      );
      if (isNaN(r2) || e2.min !== null && r2 < e2.min && typeof e2.min != "string" || e2.max !== null && r2 > e2.max && typeof e2.max != "string")
        return true;
    }
    return false;
  }
  function Il(e2, t2) {
    let n2 = 0, r2 = [], i2 = 0;
    e:
      do {
        switch (e2.type) {
          case ue:
          case E:
          case Se:
            if (e2.type !== n2)
              break e;
            if (n2 = r2.pop(), r2.length === 0) {
              i2++;
              break e;
            }
            break;
          case $:
          case M:
          case pe:
          case V:
            r2.push(n2), n2 = Tr.get(e2.type);
            break;
        }
        i2++;
      } while (e2 = t2(i2));
    return i2;
  }
  function me(e2) {
    return function(t2, n2, r2) {
      return t2 === null ? 0 : t2.type === $ && _o(t2.value, zl) ? Il(t2, n2) : e2(t2, n2, r2);
    };
  }
  function j(e2) {
    return function(t2) {
      return t2 === null || t2.type !== e2 ? 0 : 1;
    };
  }
  function Rl(e2) {
    if (e2 === null || e2.type !== y)
      return 0;
    const t2 = e2.value.toLowerCase();
    return _o(t2, Oo) || $o(t2, "default") ? 0 : 1;
  }
  function zo(e2) {
    return e2 === null || e2.type !== y || xe(e2.value, 0) !== 45 || xe(e2.value, 1) !== 45 ? 0 : 1;
  }
  function Ml(e2) {
    return !zo(e2) || e2.value === "--" ? 0 : 1;
  }
  function Nl(e2) {
    if (e2 === null || e2.type !== F)
      return 0;
    const t2 = e2.value.length;
    if (t2 !== 4 && t2 !== 5 && t2 !== 7 && t2 !== 9)
      return 0;
    for (let n2 = 1; n2 < t2; n2++)
      if (!He(xe(e2.value, n2)))
        return 0;
    return 1;
  }
  function Dl(e2) {
    return e2 === null || e2.type !== F || !qt(xe(e2.value, 1), xe(e2.value, 2), xe(e2.value, 3)) ? 0 : 1;
  }
  function jl(e2, t2) {
    if (!e2)
      return 0;
    let n2 = 0, r2 = [], i2 = 0;
    e:
      do {
        switch (e2.type) {
          case dn:
          case se:
            break e;
          case ue:
          case E:
          case Se:
            if (e2.type !== n2)
              break e;
            n2 = r2.pop();
            break;
          case re:
            if (n2 === 0)
              break e;
            break;
          case I:
            if (n2 === 0 && e2.value === "!")
              break e;
            break;
          case $:
          case M:
          case pe:
          case V:
            r2.push(n2), n2 = Tr.get(e2.type);
            break;
        }
        i2++;
      } while (e2 = t2(i2));
    return i2;
  }
  function Fl(e2, t2) {
    if (!e2)
      return 0;
    let n2 = 0, r2 = [], i2 = 0;
    e:
      do {
        switch (e2.type) {
          case dn:
          case se:
            break e;
          case ue:
          case E:
          case Se:
            if (e2.type !== n2)
              break e;
            n2 = r2.pop();
            break;
          case $:
          case M:
          case pe:
          case V:
            r2.push(n2), n2 = Tr.get(e2.type);
            break;
        }
        i2++;
      } while (e2 = t2(i2));
    return i2;
  }
  function Ie(e2) {
    return e2 && (e2 = new Set(e2)), function(t2, n2, r2) {
      if (t2 === null || t2.type !== z)
        return 0;
      const i2 = mn(t2.value, 0);
      if (e2 !== null) {
        const o2 = t2.value.indexOf("\\", i2), s2 = o2 === -1 || !Po(t2.value, o2) ? t2.value.substr(i2) : t2.value.substring(i2, o2);
        if (e2.has(s2.toLowerCase()) === false)
          return 0;
      }
      return xn(r2, t2.value, i2) ? 0 : 1;
    };
  }
  function Bl(e2, t2, n2) {
    return e2 === null || e2.type !== B || xn(n2, e2.value, e2.value.length - 1) ? 0 : 1;
  }
  function Io(e2) {
    return typeof e2 != "function" && (e2 = function() {
      return 0;
    }), function(t2, n2, r2) {
      return t2 !== null && t2.type === L && Number(t2.value) === 0 ? 1 : e2(t2, n2, r2);
    };
  }
  function Wl(e2, t2, n2) {
    if (e2 === null)
      return 0;
    const r2 = mn(e2.value, 0);
    return !(r2 === e2.value.length) && !Po(e2.value, r2) || xn(n2, e2.value, r2) ? 0 : 1;
  }
  function Hl(e2, t2, n2) {
    if (e2 === null || e2.type !== L)
      return 0;
    let r2 = xe(e2.value, 0) === 43 || // U+002B PLUS SIGN (+)
    xe(e2.value, 0) === 45 ? 1 : 0;
    for (; r2 < e2.value.length; r2++)
      if (!Q(xe(e2.value, r2)))
        return 0;
    return xn(n2, e2.value, r2) ? 0 : 1;
  }
  var Ul = {
    "ident-token": j(y),
    "function-token": j($),
    "at-keyword-token": j(G),
    "hash-token": j(F),
    "string-token": j(Te),
    "bad-string-token": j(dn),
    "url-token": j(te),
    "bad-url-token": j(se),
    "delim-token": j(I),
    "number-token": j(L),
    "percentage-token": j(B),
    "dimension-token": j(z),
    "whitespace-token": j(W),
    "CDO-token": j(Rt),
    "CDC-token": j(ae),
    "colon-token": j(ne),
    "semicolon-token": j(re),
    "comma-token": j(ce),
    "[-token": j(pe),
    "]-token": j(Se),
    "(-token": j(M),
    ")-token": j(E),
    "{-token": j(V),
    "}-token": j(ue)
  };
  var ql = {
    // token type aliases
    string: j(Te),
    ident: j(y),
    // percentage
    percentage: me(Bl),
    // numeric
    zero: Io(),
    number: me(Wl),
    integer: me(Hl),
    // complex types
    "custom-ident": Rl,
    "dashed-ident": zo,
    "custom-property-name": Ml,
    "hex-color": Nl,
    "id-selector": Dl,
    // element( <id-selector> )
    "an-plus-b": El,
    urange: Pl,
    "declaration-value": jl,
    "any-value": Fl
  };
  function Gl(e2) {
    const {
      angle: t2,
      decibel: n2,
      frequency: r2,
      flex: i2,
      length: o2,
      resolution: s2,
      semitones: c,
      time: l2
    } = e2 || {};
    return {
      dimension: me(Ie(null)),
      angle: me(Ie(t2)),
      decibel: me(Ie(n2)),
      frequency: me(Ie(r2)),
      flex: me(Ie(i2)),
      length: me(Io(Ie(o2))),
      resolution: me(Ie(s2)),
      semitones: me(Ie(c)),
      time: me(Ie(l2))
    };
  }
  function Vl(e2) {
    return _(_(_({}, Ul), ql), Gl(e2));
  }
  var Kl = [
    // absolute length units https://www.w3.org/TR/css-values-3/#lengths
    "cm",
    "mm",
    "q",
    "in",
    "pt",
    "pc",
    "px",
    // font-relative length units https://drafts.csswg.org/css-values-4/#font-relative-lengths
    "em",
    "rem",
    "ex",
    "rex",
    "cap",
    "rcap",
    "ch",
    "rch",
    "ic",
    "ric",
    "lh",
    "rlh",
    // viewport-percentage lengths https://drafts.csswg.org/css-values-4/#viewport-relative-lengths
    "vw",
    "svw",
    "lvw",
    "dvw",
    "vh",
    "svh",
    "lvh",
    "dvh",
    "vi",
    "svi",
    "lvi",
    "dvi",
    "vb",
    "svb",
    "lvb",
    "dvb",
    "vmin",
    "svmin",
    "lvmin",
    "dvmin",
    "vmax",
    "svmax",
    "lvmax",
    "dvmax",
    // container relative lengths https://drafts.csswg.org/css-contain-3/#container-lengths
    "cqw",
    "cqh",
    "cqi",
    "cqb",
    "cqmin",
    "cqmax"
  ];
  var Yl = ["deg", "grad", "rad", "turn"];
  var Ql = ["s", "ms"];
  var Xl = ["hz", "khz"];
  var Zl = ["dpi", "dpcm", "dppx", "x"];
  var Jl = ["fr"];
  var ec = ["db"];
  var tc = ["st"];
  var oi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    angle: Yl,
    decibel: ec,
    flex: Jl,
    frequency: Xl,
    length: Kl,
    resolution: Zl,
    semitones: tc,
    time: Ql
  }, Symbol.toStringTag, { value: "Module" }));
  function nc(e2, t2, n2) {
    return Object.assign(bn("SyntaxError", e2), {
      input: t2,
      offset: n2,
      rawMessage: e2,
      message: e2 + `
  ` + t2 + `
--` + new Array((n2 || t2.length) + 1).join("-") + "^"
    });
  }
  var rc = 9;
  var ic = 10;
  var oc = 12;
  var sc = 13;
  var ac = 32;
  var lc = class {
    constructor(t2) {
      this.str = t2, this.pos = 0;
    }
    charCodeAt(t2) {
      return t2 < this.str.length ? this.str.charCodeAt(t2) : 0;
    }
    charCode() {
      return this.charCodeAt(this.pos);
    }
    nextCharCode() {
      return this.charCodeAt(this.pos + 1);
    }
    nextNonWsCode(t2) {
      return this.charCodeAt(this.findWsEnd(t2));
    }
    skipWs() {
      this.pos = this.findWsEnd(this.pos);
    }
    findWsEnd(t2) {
      for (; t2 < this.str.length; t2++) {
        const n2 = this.str.charCodeAt(t2);
        if (n2 !== sc && n2 !== ic && n2 !== oc && n2 !== ac && n2 !== rc)
          break;
      }
      return t2;
    }
    substringToPos(t2) {
      return this.str.substring(this.pos, this.pos = t2);
    }
    eat(t2) {
      this.charCode() !== t2 && this.error("Expect `" + String.fromCharCode(t2) + "`"), this.pos++;
    }
    peek() {
      return this.pos < this.str.length ? this.str.charAt(this.pos++) : "";
    }
    error(t2) {
      throw new nc(t2, this.str, this.pos);
    }
  };
  var cc = 9;
  var uc = 10;
  var hc = 12;
  var fc = 13;
  var pc = 32;
  var Ro = 33;
  var Ar = 35;
  var si = 38;
  var sn = 39;
  var Mo = 40;
  var dc = 41;
  var No = 42;
  var Or = 43;
  var Er = 44;
  var ai = 45;
  var Lr = 60;
  var Do = 62;
  var Zn = 63;
  var mc = 64;
  var wn = 91;
  var $r = 93;
  var an = 123;
  var li = 124;
  var ci = 125;
  var ui = 8734;
  var Pt = new Uint8Array(128).map(
    (e2, t2) => /[a-zA-Z0-9\-]/.test(String.fromCharCode(t2)) ? 1 : 0
  );
  var hi = {
    " ": 1,
    "&&": 2,
    "||": 3,
    "|": 4
  };
  function ln(e2) {
    return e2.substringToPos(
      e2.findWsEnd(e2.pos)
    );
  }
  function dt(e2) {
    let t2 = e2.pos;
    for (; t2 < e2.str.length; t2++) {
      const n2 = e2.str.charCodeAt(t2);
      if (n2 >= 128 || Pt[n2] === 0)
        break;
    }
    return e2.pos === t2 && e2.error("Expect a keyword"), e2.substringToPos(t2);
  }
  function cn(e2) {
    let t2 = e2.pos;
    for (; t2 < e2.str.length; t2++) {
      const n2 = e2.str.charCodeAt(t2);
      if (n2 < 48 || n2 > 57)
        break;
    }
    return e2.pos === t2 && e2.error("Expect a number"), e2.substringToPos(t2);
  }
  function gc(e2) {
    const t2 = e2.str.indexOf("'", e2.pos + 1);
    return t2 === -1 && (e2.pos = e2.str.length, e2.error("Expect an apostrophe")), e2.substringToPos(t2 + 1);
  }
  function fi(e2) {
    let t2 = null, n2 = null;
    return e2.eat(an), e2.skipWs(), t2 = cn(e2), e2.skipWs(), e2.charCode() === Er ? (e2.pos++, e2.skipWs(), e2.charCode() !== ci && (n2 = cn(e2), e2.skipWs())) : n2 = t2, e2.eat(ci), {
      min: Number(t2),
      max: n2 ? Number(n2) : 0
    };
  }
  function bc(e2) {
    let t2 = null, n2 = false;
    switch (e2.charCode()) {
      case No:
        e2.pos++, t2 = {
          min: 0,
          max: 0
        };
        break;
      case Or:
        e2.pos++, t2 = {
          min: 1,
          max: 0
        };
        break;
      case Zn:
        e2.pos++, t2 = {
          min: 0,
          max: 1
        };
        break;
      case Ar:
        e2.pos++, n2 = true, e2.charCode() === an ? t2 = fi(e2) : e2.charCode() === Zn ? (e2.pos++, t2 = {
          min: 0,
          max: 0
        }) : t2 = {
          min: 1,
          max: 0
        };
        break;
      case an:
        t2 = fi(e2);
        break;
      default:
        return null;
    }
    return {
      type: "Multiplier",
      comma: n2,
      min: t2.min,
      max: t2.max,
      term: null
    };
  }
  function mt(e2, t2) {
    const n2 = bc(e2);
    return n2 !== null ? (n2.term = t2, e2.charCode() === Ar && e2.charCodeAt(e2.pos - 1) === Or ? mt(e2, n2) : n2) : t2;
  }
  function Rn(e2) {
    const t2 = e2.peek();
    return t2 === "" ? null : {
      type: "Token",
      value: t2
    };
  }
  function yc(e2) {
    let t2;
    return e2.eat(Lr), e2.eat(sn), t2 = dt(e2), e2.eat(sn), e2.eat(Do), mt(e2, {
      type: "Property",
      name: t2
    });
  }
  function kc(e2) {
    let t2 = null, n2 = null, r2 = 1;
    return e2.eat(wn), e2.charCode() === ai && (e2.peek(), r2 = -1), r2 == -1 && e2.charCode() === ui ? e2.peek() : (t2 = r2 * Number(cn(e2)), Pt[e2.charCode()] !== 0 && (t2 += dt(e2))), ln(e2), e2.eat(Er), ln(e2), e2.charCode() === ui ? e2.peek() : (r2 = 1, e2.charCode() === ai && (e2.peek(), r2 = -1), n2 = r2 * Number(cn(e2)), Pt[e2.charCode()] !== 0 && (n2 += dt(e2))), e2.eat($r), {
      type: "Range",
      min: t2,
      max: n2
    };
  }
  function xc(e2) {
    let t2, n2 = null;
    return e2.eat(Lr), t2 = dt(e2), e2.charCode() === Mo && e2.nextCharCode() === dc && (e2.pos += 2, t2 += "()"), e2.charCodeAt(e2.findWsEnd(e2.pos)) === wn && (ln(e2), n2 = kc(e2)), e2.eat(Do), mt(e2, {
      type: "Type",
      name: t2,
      opts: n2
    });
  }
  function wc(e2) {
    const t2 = dt(e2);
    return e2.charCode() === Mo ? (e2.pos++, {
      type: "Function",
      name: t2
    }) : mt(e2, {
      type: "Keyword",
      name: t2
    });
  }
  function vc(e2, t2) {
    function n2(i2, o2) {
      return {
        type: "Group",
        terms: i2,
        combinator: o2,
        disallowEmpty: false,
        explicit: false
      };
    }
    let r2;
    for (t2 = Object.keys(t2).sort((i2, o2) => hi[i2] - hi[o2]); t2.length > 0; ) {
      r2 = t2.shift();
      let i2 = 0, o2 = 0;
      for (; i2 < e2.length; i2++) {
        const s2 = e2[i2];
        s2.type === "Combinator" && (s2.value === r2 ? (o2 === -1 && (o2 = i2 - 1), e2.splice(i2, 1), i2--) : (o2 !== -1 && i2 - o2 > 1 && (e2.splice(
          o2,
          i2 - o2,
          n2(e2.slice(o2, i2), r2)
        ), i2 = o2 + 1), o2 = -1));
      }
      o2 !== -1 && t2.length && e2.splice(
        o2,
        i2 - o2,
        n2(e2.slice(o2, i2), r2)
      );
    }
    return r2;
  }
  function jo(e2) {
    const t2 = [], n2 = {};
    let r2, i2 = null, o2 = e2.pos;
    for (; r2 = Cc(e2); )
      r2.type !== "Spaces" && (r2.type === "Combinator" ? ((i2 === null || i2.type === "Combinator") && (e2.pos = o2, e2.error("Unexpected combinator")), n2[r2.value] = true) : i2 !== null && i2.type !== "Combinator" && (n2[" "] = true, t2.push({
        type: "Combinator",
        value: " "
      })), t2.push(r2), i2 = r2, o2 = e2.pos);
    return i2 !== null && i2.type === "Combinator" && (e2.pos -= o2, e2.error("Unexpected combinator")), {
      type: "Group",
      terms: t2,
      combinator: vc(t2, n2) || " ",
      disallowEmpty: false,
      explicit: false
    };
  }
  function Sc(e2) {
    let t2;
    return e2.eat(wn), t2 = jo(e2), e2.eat($r), t2.explicit = true, e2.charCode() === Ro && (e2.pos++, t2.disallowEmpty = true), t2;
  }
  function Cc(e2) {
    let t2 = e2.charCode();
    if (t2 < 128 && Pt[t2] === 1)
      return wc(e2);
    switch (t2) {
      case $r:
        break;
      case wn:
        return mt(e2, Sc(e2));
      case Lr:
        return e2.nextCharCode() === sn ? yc(e2) : xc(e2);
      case li:
        return {
          type: "Combinator",
          value: e2.substringToPos(
            e2.pos + (e2.nextCharCode() === li ? 2 : 1)
          )
        };
      case si:
        return e2.pos++, e2.eat(si), {
          type: "Combinator",
          value: "&&"
        };
      case Er:
        return e2.pos++, {
          type: "Comma"
        };
      case sn:
        return mt(e2, {
          type: "String",
          value: gc(e2)
        });
      case pc:
      case cc:
      case uc:
      case fc:
      case hc:
        return {
          type: "Spaces",
          value: ln(e2)
        };
      case mc:
        return t2 = e2.nextCharCode(), t2 < 128 && Pt[t2] === 1 ? (e2.pos++, {
          type: "AtKeyword",
          name: dt(e2)
        }) : Rn(e2);
      case No:
      case Or:
      case Zn:
      case Ar:
      case Ro:
        break;
      case an:
        if (t2 = e2.nextCharCode(), t2 < 48 || t2 > 57)
          return Rn(e2);
        break;
      default:
        return Rn(e2);
    }
  }
  function Fo(e2) {
    const t2 = new lc(e2), n2 = jo(t2);
    return t2.pos !== e2.length && t2.error("Unexpected input"), n2.terms.length === 1 && n2.terms[0].type === "Group" ? n2.terms[0] : n2;
  }
  var St = function() {
  };
  function pi(e2) {
    return typeof e2 == "function" ? e2 : St;
  }
  function Tc(e2, t2, n2) {
    function r2(s2) {
      switch (i2.call(n2, s2), s2.type) {
        case "Group":
          s2.terms.forEach(r2);
          break;
        case "Multiplier":
          r2(s2.term);
          break;
        case "Type":
        case "Property":
        case "Keyword":
        case "AtKeyword":
        case "Function":
        case "String":
        case "Token":
        case "Comma":
          break;
        default:
          throw new Error("Unknown type: " + s2.type);
      }
      o2.call(n2, s2);
    }
    let i2 = St, o2 = St;
    if (typeof t2 == "function" ? i2 = t2 : t2 && (i2 = pi(t2.enter), o2 = pi(t2.leave)), i2 === St && o2 === St)
      throw new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
    r2(e2);
  }
  var Ac = {
    decorator(e2) {
      const t2 = [];
      let n2 = null;
      return Z(_({}, e2), {
        node(r2) {
          const i2 = n2;
          n2 = r2, e2.node.call(this, r2), n2 = i2;
        },
        emit(r2, i2, o2) {
          t2.push({
            type: i2,
            value: r2,
            node: o2 ? null : n2
          });
        },
        result() {
          return t2;
        }
      });
    }
  };
  function Oc(e2) {
    const t2 = [];
    return gn(
      e2,
      (n2, r2, i2) => t2.push({
        type: n2,
        value: e2.slice(r2, i2),
        node: null
      })
    ), t2;
  }
  function Ec(e2, t2) {
    return typeof e2 == "string" ? Oc(e2) : t2.generate(e2, Ac);
  }
  var N = { type: "Match" };
  var D = { type: "Mismatch" };
  var _r = { type: "DisallowEmpty" };
  var Lc = 40;
  var $c = 41;
  function J(e2, t2, n2) {
    return t2 === N && n2 === D || e2 === N && t2 === N && n2 === N ? e2 : (e2.type === "If" && e2.else === D && t2 === N && (t2 = e2.then, e2 = e2.match), {
      type: "If",
      match: e2,
      then: t2,
      else: n2
    });
  }
  function Bo(e2) {
    return e2.length > 2 && e2.charCodeAt(e2.length - 2) === Lc && e2.charCodeAt(e2.length - 1) === $c;
  }
  function di(e2) {
    return e2.type === "Keyword" || e2.type === "AtKeyword" || e2.type === "Function" || e2.type === "Type" && Bo(e2.name);
  }
  function Jn(e2, t2, n2) {
    switch (e2) {
      case " ": {
        let r2 = N;
        for (let i2 = t2.length - 1; i2 >= 0; i2--) {
          const o2 = t2[i2];
          r2 = J(
            o2,
            r2,
            D
          );
        }
        return r2;
      }
      case "|": {
        let r2 = D, i2 = null;
        for (let o2 = t2.length - 1; o2 >= 0; o2--) {
          let s2 = t2[o2];
          if (di(s2) && (i2 === null && o2 > 0 && di(t2[o2 - 1]) && (i2 = /* @__PURE__ */ Object.create(null), r2 = J(
            {
              type: "Enum",
              map: i2
            },
            N,
            r2
          )), i2 !== null)) {
            const c = (Bo(s2.name) ? s2.name.slice(0, -1) : s2.name).toLowerCase();
            if (!(c in i2)) {
              i2[c] = s2;
              continue;
            }
          }
          i2 = null, r2 = J(
            s2,
            N,
            r2
          );
        }
        return r2;
      }
      case "&&": {
        if (t2.length > 5)
          return {
            type: "MatchOnce",
            terms: t2,
            all: true
          };
        let r2 = D;
        for (let i2 = t2.length - 1; i2 >= 0; i2--) {
          const o2 = t2[i2];
          let s2;
          t2.length > 1 ? s2 = Jn(
            e2,
            t2.filter(function(c) {
              return c !== o2;
            }),
            false
          ) : s2 = N, r2 = J(
            o2,
            s2,
            r2
          );
        }
        return r2;
      }
      case "||": {
        if (t2.length > 5)
          return {
            type: "MatchOnce",
            terms: t2,
            all: false
          };
        let r2 = n2 ? N : D;
        for (let i2 = t2.length - 1; i2 >= 0; i2--) {
          const o2 = t2[i2];
          let s2;
          t2.length > 1 ? s2 = Jn(
            e2,
            t2.filter(function(c) {
              return c !== o2;
            }),
            true
          ) : s2 = N, r2 = J(
            o2,
            s2,
            r2
          );
        }
        return r2;
      }
    }
  }
  function _c(e2) {
    let t2 = N, n2 = Pr(e2.term);
    if (e2.max === 0)
      n2 = J(
        n2,
        _r,
        D
      ), t2 = J(
        n2,
        null,
        // will be a loop
        D
      ), t2.then = J(
        N,
        N,
        t2
        // make a loop
      ), e2.comma && (t2.then.else = J(
        { type: "Comma", syntax: e2 },
        t2,
        D
      ));
    else
      for (let r2 = e2.min || 1; r2 <= e2.max; r2++)
        e2.comma && t2 !== N && (t2 = J(
          { type: "Comma", syntax: e2 },
          t2,
          D
        )), t2 = J(
          n2,
          J(
            N,
            N,
            t2
          ),
          D
        );
    if (e2.min === 0)
      t2 = J(
        N,
        N,
        t2
      );
    else
      for (let r2 = 0; r2 < e2.min - 1; r2++)
        e2.comma && t2 !== N && (t2 = J(
          { type: "Comma", syntax: e2 },
          t2,
          D
        )), t2 = J(
          n2,
          t2,
          D
        );
    return t2;
  }
  function Pr(e2) {
    if (typeof e2 == "function")
      return {
        type: "Generic",
        fn: e2
      };
    switch (e2.type) {
      case "Group": {
        let t2 = Jn(
          e2.combinator,
          e2.terms.map(Pr),
          false
        );
        return e2.disallowEmpty && (t2 = J(
          t2,
          _r,
          D
        )), t2;
      }
      case "Multiplier":
        return _c(e2);
      case "Type":
      case "Property":
        return {
          type: e2.type,
          name: e2.name,
          syntax: e2
        };
      case "Keyword":
        return {
          type: e2.type,
          name: e2.name.toLowerCase(),
          syntax: e2
        };
      case "AtKeyword":
        return {
          type: e2.type,
          name: "@" + e2.name.toLowerCase(),
          syntax: e2
        };
      case "Function":
        return {
          type: e2.type,
          name: e2.name.toLowerCase() + "(",
          syntax: e2
        };
      case "String":
        return e2.value.length === 3 ? {
          type: "Token",
          value: e2.value.charAt(1),
          syntax: e2
        } : {
          type: e2.type,
          value: e2.value.substr(1, e2.value.length - 2).replace(/\\'/g, "'"),
          syntax: e2
        };
      case "Token":
        return {
          type: e2.type,
          value: e2.value,
          syntax: e2
        };
      case "Comma":
        return {
          type: e2.type,
          syntax: e2
        };
      default:
        throw new Error("Unknown node type:", e2.type);
    }
  }
  function Vt(e2, t2) {
    return typeof e2 == "string" && (e2 = Fo(e2)), {
      type: "MatchGraph",
      match: Pr(e2),
      syntax: t2 || null,
      source: e2
    };
  }
  var { hasOwnProperty: mi } = Object.prototype;
  var Pc = 0;
  var zc = 1;
  var er = 2;
  var Wo = 3;
  var gi = "Match";
  var Ic = "Mismatch";
  var Rc = "Maximum iteration number exceeded (please fill an issue on https://github.com/csstree/csstree/issues)";
  var bi = 15e3;
  function Mc(e2) {
    let t2 = null, n2 = null, r2 = e2;
    for (; r2 !== null; )
      n2 = r2.prev, r2.prev = t2, t2 = r2, r2 = n2;
    return t2;
  }
  function Mn(e2, t2) {
    if (e2.length !== t2.length)
      return false;
    for (let n2 = 0; n2 < e2.length; n2++) {
      const r2 = t2.charCodeAt(n2);
      let i2 = e2.charCodeAt(n2);
      if (i2 >= 65 && i2 <= 90 && (i2 = i2 | 32), i2 !== r2)
        return false;
    }
    return true;
  }
  function Nc(e2) {
    return e2.type !== I ? false : e2.value !== "?";
  }
  function yi(e2) {
    return e2 === null ? true : e2.type === ce || e2.type === $ || e2.type === M || e2.type === pe || e2.type === V || Nc(e2);
  }
  function ki(e2) {
    return e2 === null ? true : e2.type === E || e2.type === Se || e2.type === ue || e2.type === I && e2.value === "/";
  }
  function Dc(e2, t2, n2) {
    function r2() {
      do
        x++, b = x < e2.length ? e2[x] : null;
      while (b !== null && (b.type === W || b.type === X));
    }
    function i2(A) {
      const P = x + A;
      return P < e2.length ? e2[P] : null;
    }
    function o2(A, P) {
      return {
        nextState: A,
        matchStack: v,
        syntaxStack: h2,
        thenStack: d,
        tokenIndex: x,
        prev: P
      };
    }
    function s2(A) {
      d = {
        nextState: A,
        matchStack: v,
        syntaxStack: h2,
        prev: d
      };
    }
    function c(A) {
      m = o2(A, m);
    }
    function l2() {
      v = {
        type: zc,
        syntax: t2.syntax,
        token: b,
        prev: v
      }, r2(), w = null, x > T && (T = x);
    }
    function a2() {
      h2 = {
        syntax: t2.syntax,
        opts: t2.syntax.opts || h2 !== null && h2.opts || null,
        prev: h2
      }, v = {
        type: er,
        syntax: t2.syntax,
        token: v.token,
        prev: v
      };
    }
    function u() {
      v.type === er ? v = v.prev : v = {
        type: Wo,
        syntax: h2.syntax,
        token: v.token,
        prev: v
      }, h2 = h2.prev;
    }
    let h2 = null, d = null, m = null, w = null, k = 0, C = null, b = null, x = -1, T = 0, v = {
      type: Pc,
      syntax: null,
      token: null,
      prev: null
    };
    for (r2(); C === null && ++k < bi; )
      switch (t2.type) {
        case "Match":
          if (d === null) {
            if (b !== null && (x !== e2.length - 1 || b.value !== "\\0" && b.value !== "\\9")) {
              t2 = D;
              break;
            }
            C = gi;
            break;
          }
          if (t2 = d.nextState, t2 === _r)
            if (d.matchStack === v) {
              t2 = D;
              break;
            } else
              t2 = N;
          for (; d.syntaxStack !== h2; )
            u();
          d = d.prev;
          break;
        case "Mismatch":
          if (w !== null && w !== false)
            (m === null || x > m.tokenIndex) && (m = w, w = false);
          else if (m === null) {
            C = Ic;
            break;
          }
          t2 = m.nextState, d = m.thenStack, h2 = m.syntaxStack, v = m.matchStack, x = m.tokenIndex, b = x < e2.length ? e2[x] : null, m = m.prev;
          break;
        case "MatchGraph":
          t2 = t2.match;
          break;
        case "If":
          t2.else !== D && c(t2.else), t2.then !== N && s2(t2.then), t2 = t2.match;
          break;
        case "MatchOnce":
          t2 = {
            type: "MatchOnceBuffer",
            syntax: t2,
            index: 0,
            mask: 0
          };
          break;
        case "MatchOnceBuffer": {
          const O = t2.syntax.terms;
          if (t2.index === O.length) {
            if (t2.mask === 0 || t2.syntax.all) {
              t2 = D;
              break;
            }
            t2 = N;
            break;
          }
          if (t2.mask === (1 << O.length) - 1) {
            t2 = N;
            break;
          }
          for (; t2.index < O.length; t2.index++) {
            const f = 1 << t2.index;
            if (!(t2.mask & f)) {
              c(t2), s2({
                type: "AddMatchOnce",
                syntax: t2.syntax,
                mask: t2.mask | f
              }), t2 = O[t2.index++];
              break;
            }
          }
          break;
        }
        case "AddMatchOnce":
          t2 = {
            type: "MatchOnceBuffer",
            syntax: t2.syntax,
            index: 0,
            mask: t2.mask
          };
          break;
        case "Enum":
          if (b !== null) {
            let O = b.value.toLowerCase();
            if (O.indexOf("\\") !== -1 && (O = O.replace(/\\[09].*$/, "")), mi.call(t2.map, O)) {
              t2 = t2.map[O];
              break;
            }
          }
          t2 = D;
          break;
        case "Generic": {
          const O = h2 !== null ? h2.opts : null, f = x + Math.floor(t2.fn(b, i2, O));
          if (!isNaN(f) && f > x) {
            for (; x < f; )
              l2();
            t2 = N;
          } else
            t2 = D;
          break;
        }
        case "Type":
        case "Property": {
          const O = t2.type === "Type" ? "types" : "properties", f = mi.call(n2, O) ? n2[O][t2.name] : null;
          if (!f || !f.match)
            throw new Error(
              "Bad syntax reference: " + (t2.type === "Type" ? "<" + t2.name + ">" : "<'" + t2.name + "'>")
            );
          if (w !== false && b !== null && t2.type === "Type" && // https://drafts.csswg.org/css-values-4/#custom-idents
          // When parsing positionally-ambiguous keywords in a property value, a <custom-ident> production
          // can only claim the keyword if no other unfulfilled production can claim it.
          (t2.name === "custom-ident" && b.type === y || // https://drafts.csswg.org/css-values-4/#lengths
          // ... if a `0` could be parsed as either a <number> or a <length> in a property (such as line-height),
          // it must parse as a <number>
          t2.name === "length" && b.value === "0")) {
            w === null && (w = o2(t2, m)), t2 = D;
            break;
          }
          a2(), t2 = f.matchRef || f.match;
          break;
        }
        case "Keyword": {
          const O = t2.name;
          if (b !== null) {
            let f = b.value;
            if (f.indexOf("\\") !== -1 && (f = f.replace(/\\[09].*$/, "")), Mn(f, O)) {
              l2(), t2 = N;
              break;
            }
          }
          t2 = D;
          break;
        }
        case "AtKeyword":
        case "Function":
          if (b !== null && Mn(b.value, t2.name)) {
            l2(), t2 = N;
            break;
          }
          t2 = D;
          break;
        case "Token":
          if (b !== null && b.value === t2.value) {
            l2(), t2 = N;
            break;
          }
          t2 = D;
          break;
        case "Comma":
          b !== null && b.type === ce ? yi(v.token) ? t2 = D : (l2(), t2 = ki(b) ? D : N) : t2 = yi(v.token) || ki(b) ? N : D;
          break;
        case "String":
          let A = "", P = x;
          for (; P < e2.length && A.length < t2.value.length; P++)
            A += e2[P].value;
          if (Mn(A, t2.value)) {
            for (; x < P; )
              l2();
            t2 = N;
          } else
            t2 = D;
          break;
        default:
          throw new Error("Unknown node type: " + t2.type);
      }
    switch (C) {
      case null:
        console.warn("[csstree-match] BREAK after " + bi + " iterations"), C = Rc, v = null;
        break;
      case gi:
        for (; h2 !== null; )
          u();
        break;
      default:
        v = null;
    }
    return {
      tokens: e2,
      reason: C,
      iterations: k,
      match: v,
      longestMatch: T
    };
  }
  function xi(e2, t2, n2) {
    const r2 = Dc(e2, t2, n2 || {});
    if (r2.match === null)
      return r2;
    let i2 = r2.match, o2 = r2.match = {
      syntax: t2.syntax || null,
      match: []
    };
    const s2 = [o2];
    for (i2 = Mc(i2).prev; i2 !== null; ) {
      switch (i2.type) {
        case er:
          o2.match.push(o2 = {
            syntax: i2.syntax,
            match: []
          }), s2.push(o2);
          break;
        case Wo:
          s2.pop(), o2 = s2[s2.length - 1];
          break;
        default:
          o2.match.push({
            syntax: i2.syntax || null,
            token: i2.token.value,
            node: i2.token.node
          });
      }
      i2 = i2.prev;
    }
    return r2;
  }
  function Ho(e2) {
    function t2(i2) {
      return i2 === null ? false : i2.type === "Type" || i2.type === "Property" || i2.type === "Keyword";
    }
    function n2(i2) {
      if (Array.isArray(i2.match)) {
        for (let o2 = 0; o2 < i2.match.length; o2++)
          if (n2(i2.match[o2]))
            return t2(i2.syntax) && r2.unshift(i2.syntax), true;
      } else if (i2.node === e2)
        return r2 = t2(i2.syntax) ? [i2.syntax] : [], true;
      return false;
    }
    let r2 = null;
    return this.matched !== null && n2(this.matched), r2;
  }
  function jc(e2, t2) {
    return zr(this, e2, (n2) => n2.type === "Type" && n2.name === t2);
  }
  function Fc(e2, t2) {
    return zr(this, e2, (n2) => n2.type === "Property" && n2.name === t2);
  }
  function Bc(e2) {
    return zr(this, e2, (t2) => t2.type === "Keyword");
  }
  function zr(e2, t2, n2) {
    const r2 = Ho.call(e2, t2);
    return r2 === null ? false : r2.some(n2);
  }
  var Wc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    getTrace: Ho,
    isKeyword: Bc,
    isProperty: Fc,
    isType: jc
  }, Symbol.toStringTag, { value: "Module" }));
  function Uo(e2) {
    return "node" in e2 ? e2.node : Uo(e2.match[0]);
  }
  function qo(e2) {
    return "node" in e2 ? e2.node : qo(e2.match[e2.match.length - 1]);
  }
  function wi(e2, t2, n2, r2, i2) {
    function o2(c) {
      if (c.syntax !== null && c.syntax.type === r2 && c.syntax.name === i2) {
        const l2 = Uo(c), a2 = qo(c);
        e2.syntax.walk(t2, function(u, h2, d) {
          if (u === l2) {
            const m = new q();
            do {
              if (m.appendData(h2.data), h2.data === a2)
                break;
              h2 = h2.next;
            } while (h2 !== null);
            s2.push({
              parent: d,
              nodes: m
            });
          }
        });
      }
      Array.isArray(c.match) && c.match.forEach(o2);
    }
    const s2 = [];
    return n2.matched !== null && o2(n2.matched), s2;
  }
  var { hasOwnProperty: At } = Object.prototype;
  function Nn(e2) {
    return typeof e2 == "number" && isFinite(e2) && Math.floor(e2) === e2 && e2 >= 0;
  }
  function vi(e2) {
    return !!e2 && Nn(e2.offset) && Nn(e2.line) && Nn(e2.column);
  }
  function Hc(e2, t2) {
    return function(r2, i2) {
      if (!r2 || r2.constructor !== Object)
        return i2(r2, "Type of node should be an Object");
      for (let o2 in r2) {
        let s2 = true;
        if (At.call(r2, o2) !== false) {
          if (o2 === "type")
            r2.type !== e2 && i2(r2, "Wrong node type `" + r2.type + "`, expected `" + e2 + "`");
          else if (o2 === "loc") {
            if (r2.loc === null)
              continue;
            if (r2.loc && r2.loc.constructor === Object)
              if (typeof r2.loc.source != "string")
                o2 += ".source";
              else if (!vi(r2.loc.start))
                o2 += ".start";
              else if (!vi(r2.loc.end))
                o2 += ".end";
              else
                continue;
            s2 = false;
          } else if (t2.hasOwnProperty(o2)) {
            s2 = false;
            for (let c = 0; !s2 && c < t2[o2].length; c++) {
              const l2 = t2[o2][c];
              switch (l2) {
                case String:
                  s2 = typeof r2[o2] == "string";
                  break;
                case Boolean:
                  s2 = typeof r2[o2] == "boolean";
                  break;
                case null:
                  s2 = r2[o2] === null;
                  break;
                default:
                  typeof l2 == "string" ? s2 = r2[o2] && r2[o2].type === l2 : Array.isArray(l2) && (s2 = r2[o2] instanceof q);
              }
            }
          } else
            i2(r2, "Unknown field `" + o2 + "` for " + e2 + " node type");
          s2 || i2(r2, "Bad value for `" + e2 + "." + o2 + "`");
        }
      }
      for (const o2 in t2)
        At.call(t2, o2) && At.call(r2, o2) === false && i2(r2, "Field `" + e2 + "." + o2 + "` is missed");
    };
  }
  function Go(e2, t2) {
    const n2 = [];
    for (let r2 = 0; r2 < e2.length; r2++) {
      const i2 = e2[r2];
      if (i2 === String || i2 === Boolean)
        n2.push(i2.name.toLowerCase());
      else if (i2 === null)
        n2.push("null");
      else if (typeof i2 == "string")
        n2.push(i2);
      else if (Array.isArray(i2))
        n2.push("List<" + (Go(i2, t2) || "any") + ">");
      else
        throw new Error("Wrong value `" + i2 + "` in `" + t2 + "` structure definition");
    }
    return n2.join(" | ");
  }
  function Uc(e2, t2) {
    const n2 = t2.structure, r2 = {
      type: String,
      loc: true
    }, i2 = {
      type: '"' + e2 + '"'
    };
    for (const o2 in n2) {
      if (At.call(n2, o2) === false)
        continue;
      const s2 = r2[o2] = Array.isArray(n2[o2]) ? n2[o2].slice() : [n2[o2]];
      i2[o2] = Go(s2, e2 + "." + o2);
    }
    return {
      docs: i2,
      check: Hc(e2, r2)
    };
  }
  function qc(e2) {
    const t2 = {};
    if (e2.node) {
      for (const n2 in e2.node)
        if (At.call(e2.node, n2)) {
          const r2 = e2.node[n2];
          if (r2.structure)
            t2[n2] = Uc(n2, r2);
          else
            throw new Error("Missed `structure` field in `" + n2 + "` node type definition");
        }
    }
    return t2;
  }
  var Gc = Vt(Oo.join(" | "));
  function tr(e2, t2, n2) {
    const r2 = {};
    for (const i2 in e2)
      e2[i2].syntax && (r2[i2] = n2 ? e2[i2].syntax : Sr(e2[i2].syntax, { compact: t2 }));
    return r2;
  }
  function Vc(e2, t2, n2) {
    const r2 = {};
    for (const [i2, o2] of Object.entries(e2))
      r2[i2] = {
        prelude: o2.prelude && (n2 ? o2.prelude.syntax : Sr(o2.prelude.syntax, { compact: t2 })),
        descriptors: o2.descriptors && tr(o2.descriptors, t2, n2)
      };
    return r2;
  }
  function Kc(e2) {
    for (let t2 = 0; t2 < e2.length; t2++)
      if (e2[t2].value.toLowerCase() === "var(")
        return true;
    return false;
  }
  function Yc(e2) {
    const t2 = e2.terms[0];
    return e2.explicit === false && e2.terms.length === 1 && t2.type === "Multiplier" && t2.comma === true;
  }
  function ye(e2, t2, n2) {
    return _({
      matched: e2,
      iterations: n2,
      error: t2
    }, Wc);
  }
  function ot(e2, t2, n2, r2) {
    const i2 = Ec(n2, e2.syntax);
    let o2;
    return Kc(i2) ? ye(null, new Error("Matching for a tree with var() is not supported")) : (r2 && (o2 = xi(i2, e2.cssWideKeywordsSyntax, e2)), (!r2 || !o2.match) && (o2 = xi(i2, t2.match, e2), !o2.match) ? ye(
      null,
      new Cl(o2.reason, t2.syntax, n2, o2),
      o2.iterations
    ) : ye(o2.match, null, o2.iterations));
  }
  var Si = class {
    constructor(t2, n2, r2) {
      if (this.cssWideKeywordsSyntax = Gc, this.syntax = n2, this.generic = false, this.units = _({}, oi), this.atrules = /* @__PURE__ */ Object.create(null), this.properties = /* @__PURE__ */ Object.create(null), this.types = /* @__PURE__ */ Object.create(null), this.structure = r2 || qc(t2), t2) {
        if (t2.units)
          for (const i2 of Object.keys(oi))
            Array.isArray(t2.units[i2]) && (this.units[i2] = t2.units[i2]);
        if (t2.types)
          for (const [i2, o2] of Object.entries(t2.types))
            this.addType_(i2, o2);
        if (t2.generic) {
          this.generic = true;
          for (const [i2, o2] of Object.entries(Vl(this.units)))
            this.addType_(i2, o2);
        }
        if (t2.atrules)
          for (const [i2, o2] of Object.entries(t2.atrules))
            this.addAtrule_(i2, o2);
        if (t2.properties)
          for (const [i2, o2] of Object.entries(t2.properties))
            this.addProperty_(i2, o2);
      }
    }
    checkStructure(t2) {
      function n2(o2, s2) {
        i2.push({ node: o2, message: s2 });
      }
      const r2 = this.structure, i2 = [];
      return this.syntax.walk(t2, function(o2) {
        r2.hasOwnProperty(o2.type) ? r2[o2.type].check(o2, n2) : n2(o2, "Unknown node type `" + o2.type + "`");
      }), i2.length ? i2 : false;
    }
    createDescriptor(t2, n2, r2, i2 = null) {
      const o2 = {
        type: n2,
        name: r2
      }, s2 = {
        type: n2,
        name: r2,
        parent: i2,
        serializable: typeof t2 == "string" || t2 && typeof t2.type == "string",
        syntax: null,
        match: null,
        matchRef: null
        // used for properties when a syntax referenced as <'property'> in other syntax definitions
      };
      return typeof t2 == "function" ? s2.match = Vt(t2, o2) : (typeof t2 == "string" ? Object.defineProperty(s2, "syntax", {
        get() {
          return Object.defineProperty(s2, "syntax", {
            value: Fo(t2)
          }), s2.syntax;
        }
      }) : s2.syntax = t2, Object.defineProperty(s2, "match", {
        get() {
          return Object.defineProperty(s2, "match", {
            value: Vt(s2.syntax, o2)
          }), s2.match;
        }
      }), n2 === "Property" && Object.defineProperty(s2, "matchRef", {
        get() {
          const c = s2.syntax, l2 = Yc(c) ? Vt(Z(_({}, c), {
            terms: [c.terms[0].term]
          }), o2) : null;
          return Object.defineProperty(s2, "matchRef", {
            value: l2
          }), l2;
        }
      })), s2;
    }
    addAtrule_(t2, n2) {
      n2 && (this.atrules[t2] = {
        type: "Atrule",
        name: t2,
        prelude: n2.prelude ? this.createDescriptor(n2.prelude, "AtrulePrelude", t2) : null,
        descriptors: n2.descriptors ? Object.keys(n2.descriptors).reduce(
          (r2, i2) => (r2[i2] = this.createDescriptor(n2.descriptors[i2], "AtruleDescriptor", i2, t2), r2),
          /* @__PURE__ */ Object.create(null)
        ) : null
      });
    }
    addProperty_(t2, n2) {
      n2 && (this.properties[t2] = this.createDescriptor(n2, "Property", t2));
    }
    addType_(t2, n2) {
      n2 && (this.types[t2] = this.createDescriptor(n2, "Type", t2));
    }
    checkAtruleName(t2) {
      if (!this.getAtrule(t2))
        return new kt("Unknown at-rule", "@" + t2);
    }
    checkAtrulePrelude(t2, n2) {
      const r2 = this.checkAtruleName(t2);
      if (r2)
        return r2;
      const i2 = this.getAtrule(t2);
      if (!i2.prelude && n2)
        return new SyntaxError("At-rule `@" + t2 + "` should not contain a prelude");
      if (i2.prelude && !n2 && !ot(this, i2.prelude, "", false).matched)
        return new SyntaxError("At-rule `@" + t2 + "` should contain a prelude");
    }
    checkAtruleDescriptorName(t2, n2) {
      const r2 = this.checkAtruleName(t2);
      if (r2)
        return r2;
      const i2 = this.getAtrule(t2), o2 = Pn(n2);
      if (!i2.descriptors)
        return new SyntaxError("At-rule `@" + t2 + "` has no known descriptors");
      if (!i2.descriptors[o2.name] && !i2.descriptors[o2.basename])
        return new kt("Unknown at-rule descriptor", n2);
    }
    checkPropertyName(t2) {
      if (!this.getProperty(t2))
        return new kt("Unknown property", t2);
    }
    matchAtrulePrelude(t2, n2) {
      const r2 = this.checkAtrulePrelude(t2, n2);
      if (r2)
        return ye(null, r2);
      const i2 = this.getAtrule(t2);
      return i2.prelude ? ot(this, i2.prelude, n2 || "", false) : ye(null, null);
    }
    matchAtruleDescriptor(t2, n2, r2) {
      const i2 = this.checkAtruleDescriptorName(t2, n2);
      if (i2)
        return ye(null, i2);
      const o2 = this.getAtrule(t2), s2 = Pn(n2);
      return ot(this, o2.descriptors[s2.name] || o2.descriptors[s2.basename], r2, false);
    }
    matchDeclaration(t2) {
      return t2.type !== "Declaration" ? ye(null, new Error("Not a Declaration node")) : this.matchProperty(t2.property, t2.value);
    }
    matchProperty(t2, n2) {
      if (ii(t2).custom)
        return ye(null, new Error("Lexer matching doesn't applicable for custom properties"));
      const r2 = this.checkPropertyName(t2);
      return r2 ? ye(null, r2) : ot(this, this.getProperty(t2), n2, true);
    }
    matchType(t2, n2) {
      const r2 = this.getType(t2);
      return r2 ? ot(this, r2, n2, false) : ye(null, new kt("Unknown type", t2));
    }
    match(t2, n2) {
      return typeof t2 != "string" && (!t2 || !t2.type) ? ye(null, new kt("Bad syntax")) : ((typeof t2 == "string" || !t2.match) && (t2 = this.createDescriptor(t2, "Type", "anonymous")), ot(this, t2, n2, false));
    }
    findValueFragments(t2, n2, r2, i2) {
      return wi(this, n2, this.matchProperty(t2, n2), r2, i2);
    }
    findDeclarationValueFragments(t2, n2, r2) {
      return wi(this, t2.value, this.matchDeclaration(t2), n2, r2);
    }
    findAllFragments(t2, n2, r2) {
      const i2 = [];
      return this.syntax.walk(t2, {
        visit: "Declaration",
        enter: (o2) => {
          i2.push.apply(i2, this.findDeclarationValueFragments(o2, n2, r2));
        }
      }), i2;
    }
    getAtrule(t2, n2 = true) {
      const r2 = Pn(t2);
      return (r2.vendor && n2 ? this.atrules[r2.name] || this.atrules[r2.basename] : this.atrules[r2.name]) || null;
    }
    getAtrulePrelude(t2, n2 = true) {
      const r2 = this.getAtrule(t2, n2);
      return r2 && r2.prelude || null;
    }
    getAtruleDescriptor(t2, n2) {
      return this.atrules.hasOwnProperty(t2) && this.atrules.declarators && this.atrules[t2].declarators[n2] || null;
    }
    getProperty(t2, n2 = true) {
      const r2 = ii(t2);
      return (r2.vendor && n2 ? this.properties[r2.name] || this.properties[r2.basename] : this.properties[r2.name]) || null;
    }
    getType(t2) {
      return hasOwnProperty.call(this.types, t2) ? this.types[t2] : null;
    }
    validate() {
      function t2(i2, o2, s2, c) {
        if (s2.has(o2))
          return s2.get(o2);
        s2.set(o2, false), c.syntax !== null && Tc(c.syntax, function(l2) {
          if (l2.type !== "Type" && l2.type !== "Property")
            return;
          const a2 = l2.type === "Type" ? i2.types : i2.properties, u = l2.type === "Type" ? n2 : r2;
          (!hasOwnProperty.call(a2, l2.name) || t2(i2, l2.name, u, a2[l2.name])) && s2.set(o2, true);
        }, this);
      }
      let n2 = /* @__PURE__ */ new Map(), r2 = /* @__PURE__ */ new Map();
      for (const i2 in this.types)
        t2(this, i2, n2, this.types[i2]);
      for (const i2 in this.properties)
        t2(this, i2, r2, this.properties[i2]);
      return n2 = [...n2.keys()].filter((i2) => n2.get(i2)), r2 = [...r2.keys()].filter((i2) => r2.get(i2)), n2.length || r2.length ? {
        types: n2,
        properties: r2
      } : null;
    }
    dump(t2, n2) {
      return {
        generic: this.generic,
        units: this.units,
        types: tr(this.types, !n2, t2),
        properties: tr(this.properties, !n2, t2),
        atrules: Vc(this.atrules, !n2, t2)
      };
    }
    toString() {
      return JSON.stringify(this.dump());
    }
  };
  function Dn(e2, t2) {
    return typeof t2 == "string" && /^\s*\|/.test(t2) ? typeof e2 == "string" ? e2 + t2 : t2.replace(/^\s*\|\s*/, "") : t2 || null;
  }
  function Ci(e2, t2) {
    const n2 = /* @__PURE__ */ Object.create(null);
    for (const [r2, i2] of Object.entries(e2))
      if (i2) {
        n2[r2] = {};
        for (const o2 of Object.keys(i2))
          t2.includes(o2) && (n2[r2][o2] = i2[o2]);
      }
    return n2;
  }
  function nr(e2, t2) {
    const n2 = _({}, e2);
    for (const [r2, i2] of Object.entries(t2))
      switch (r2) {
        case "generic":
          n2[r2] = !!i2;
          break;
        case "units":
          n2[r2] = _({}, e2[r2]);
          for (const [o2, s2] of Object.entries(i2))
            n2[r2][o2] = Array.isArray(s2) ? s2 : [];
          break;
        case "atrules":
          n2[r2] = _({}, e2[r2]);
          for (const [o2, s2] of Object.entries(i2)) {
            const c = n2[r2][o2] || {}, l2 = n2[r2][o2] = {
              prelude: c.prelude || null,
              descriptors: _({}, c.descriptors)
            };
            if (s2) {
              l2.prelude = s2.prelude ? Dn(l2.prelude, s2.prelude) : l2.prelude || null;
              for (const [a2, u] of Object.entries(s2.descriptors || {}))
                l2.descriptors[a2] = u ? Dn(l2.descriptors[a2], u) : null;
              Object.keys(l2.descriptors).length || (l2.descriptors = null);
            }
          }
          break;
        case "types":
        case "properties":
          n2[r2] = _({}, e2[r2]);
          for (const [o2, s2] of Object.entries(i2))
            n2[r2][o2] = Dn(n2[r2][o2], s2);
          break;
        case "scope":
        case "features":
          n2[r2] = _({}, e2[r2]);
          for (const [o2, s2] of Object.entries(i2))
            n2[r2][o2] = _(_({}, n2[r2][o2]), s2);
          break;
        case "parseContext":
          n2[r2] = _(_({}, e2[r2]), i2);
          break;
        case "atrule":
        case "pseudo":
          n2[r2] = _(_({}, e2[r2]), Ci(i2, ["parse"]));
          break;
        case "node":
          n2[r2] = _(_({}, e2[r2]), Ci(i2, ["name", "structure", "parse", "generate", "walkContext"]));
          break;
      }
    return n2;
  }
  function Vo(e2) {
    const t2 = el(e2), n2 = yl(e2), r2 = dl(e2), { fromPlainObject: i2, toPlainObject: o2 } = ml(n2), s2 = {
      lexer: null,
      createLexer: (c) => new Si(c, s2, s2.lexer.structure),
      tokenize: gn,
      parse: t2,
      generate: r2,
      walk: n2,
      find: n2.find,
      findLast: n2.findLast,
      findAll: n2.findAll,
      fromPlainObject: i2,
      toPlainObject: o2,
      fork(c) {
        const l2 = nr({}, e2);
        return Vo(
          typeof c == "function" ? c(l2, Object.assign) : nr(l2, c)
        );
      }
    };
    return s2.lexer = new Si({
      generic: e2.generic,
      units: e2.units,
      types: e2.types,
      atrules: e2.atrules,
      properties: e2.properties,
      node: e2.node
    }, s2), s2;
  }
  var Qc = (e2) => Vo(nr({}, e2));
  var Xc = {
    generic: true,
    units: {
      angle: [
        "deg",
        "grad",
        "rad",
        "turn"
      ],
      decibel: [
        "db"
      ],
      flex: [
        "fr"
      ],
      frequency: [
        "hz",
        "khz"
      ],
      length: [
        "cm",
        "mm",
        "q",
        "in",
        "pt",
        "pc",
        "px",
        "em",
        "rem",
        "ex",
        "rex",
        "cap",
        "rcap",
        "ch",
        "rch",
        "ic",
        "ric",
        "lh",
        "rlh",
        "vw",
        "svw",
        "lvw",
        "dvw",
        "vh",
        "svh",
        "lvh",
        "dvh",
        "vi",
        "svi",
        "lvi",
        "dvi",
        "vb",
        "svb",
        "lvb",
        "dvb",
        "vmin",
        "svmin",
        "lvmin",
        "dvmin",
        "vmax",
        "svmax",
        "lvmax",
        "dvmax",
        "cqw",
        "cqh",
        "cqi",
        "cqb",
        "cqmin",
        "cqmax"
      ],
      resolution: [
        "dpi",
        "dpcm",
        "dppx",
        "x"
      ],
      semitones: [
        "st"
      ],
      time: [
        "s",
        "ms"
      ]
    },
    types: {
      "abs()": "abs( <calc-sum> )",
      "absolute-size": "xx-small|x-small|small|medium|large|x-large|xx-large|xxx-large",
      "acos()": "acos( <calc-sum> )",
      "alpha-value": "<number>|<percentage>",
      "angle-percentage": "<angle>|<percentage>",
      "angular-color-hint": "<angle-percentage>",
      "angular-color-stop": "<color>&&<color-stop-angle>?",
      "angular-color-stop-list": "[<angular-color-stop> [, <angular-color-hint>]?]# , <angular-color-stop>",
      "animateable-feature": "scroll-position|contents|<custom-ident>",
      "asin()": "asin( <calc-sum> )",
      "atan()": "atan( <calc-sum> )",
      "atan2()": "atan2( <calc-sum> , <calc-sum> )",
      attachment: "scroll|fixed|local",
      "attr()": "attr( <attr-name> <type-or-unit>? [, <attr-fallback>]? )",
      "attr-matcher": "['~'|'|'|'^'|'$'|'*']? '='",
      "attr-modifier": "i|s",
      "attribute-selector": "'[' <wq-name> ']'|'[' <wq-name> <attr-matcher> [<string-token>|<ident-token>] <attr-modifier>? ']'",
      "auto-repeat": "repeat( [auto-fill|auto-fit] , [<line-names>? <fixed-size>]+ <line-names>? )",
      "auto-track-list": "[<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>? <auto-repeat> [<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>?",
      axis: "block|inline|vertical|horizontal",
      "baseline-position": "[first|last]? baseline",
      "basic-shape": "<inset()>|<circle()>|<ellipse()>|<polygon()>|<path()>",
      "bg-image": "none|<image>",
      "bg-layer": "<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<box>||<box>",
      "bg-position": "[[left|center|right|top|bottom|<length-percentage>]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]|[center|[left|right] <length-percentage>?]&&[center|[top|bottom] <length-percentage>?]]",
      "bg-size": "[<length-percentage>|auto]{1,2}|cover|contain",
      "blur()": "blur( <length> )",
      "blend-mode": "normal|multiply|screen|overlay|darken|lighten|color-dodge|color-burn|hard-light|soft-light|difference|exclusion|hue|saturation|color|luminosity",
      box: "border-box|padding-box|content-box",
      "brightness()": "brightness( <number-percentage> )",
      "calc()": "calc( <calc-sum> )",
      "calc-sum": "<calc-product> [['+'|'-'] <calc-product>]*",
      "calc-product": "<calc-value> ['*' <calc-value>|'/' <number>]*",
      "calc-value": "<number>|<dimension>|<percentage>|<calc-constant>|( <calc-sum> )",
      "calc-constant": "e|pi|infinity|-infinity|NaN",
      "cf-final-image": "<image>|<color>",
      "cf-mixing-image": "<percentage>?&&<image>",
      "circle()": "circle( [<shape-radius>]? [at <position>]? )",
      "clamp()": "clamp( <calc-sum>#{3} )",
      "class-selector": "'.' <ident-token>",
      "clip-source": "<url>",
      color: "<color-base>|currentColor|<system-color>|<device-cmyk()>|<light-dark()>|<-non-standard-color>",
      "color-stop": "<color-stop-length>|<color-stop-angle>",
      "color-stop-angle": "<angle-percentage>{1,2}",
      "color-stop-length": "<length-percentage>{1,2}",
      "color-stop-list": "[<linear-color-stop> [, <linear-color-hint>]?]# , <linear-color-stop>",
      combinator: "'>'|'+'|'~'|['|' '|']",
      "common-lig-values": "[common-ligatures|no-common-ligatures]",
      "compat-auto": "searchfield|textarea|push-button|slider-horizontal|checkbox|radio|square-button|menulist|listbox|meter|progress-bar|button",
      "composite-style": "clear|copy|source-over|source-in|source-out|source-atop|destination-over|destination-in|destination-out|destination-atop|xor",
      "compositing-operator": "add|subtract|intersect|exclude",
      "compound-selector": "[<type-selector>? <subclass-selector>*]!",
      "compound-selector-list": "<compound-selector>#",
      "complex-selector": "<complex-selector-unit> [<combinator>? <complex-selector-unit>]*",
      "complex-selector-list": "<complex-selector>#",
      "conic-gradient()": "conic-gradient( [from <angle>]? [at <position>]? , <angular-color-stop-list> )",
      "contextual-alt-values": "[contextual|no-contextual]",
      "content-distribution": "space-between|space-around|space-evenly|stretch",
      "content-list": "[<string>|contents|<image>|<counter>|<quote>|<target>|<leader()>|<attr()>]+",
      "content-position": "center|start|end|flex-start|flex-end",
      "content-replacement": "<image>",
      "contrast()": "contrast( [<number-percentage>] )",
      "cos()": "cos( <calc-sum> )",
      counter: "<counter()>|<counters()>",
      "counter()": "counter( <counter-name> , <counter-style>? )",
      "counter-name": "<custom-ident>",
      "counter-style": "<counter-style-name>|symbols( )",
      "counter-style-name": "<custom-ident>",
      "counters()": "counters( <counter-name> , <string> , <counter-style>? )",
      "cross-fade()": "cross-fade( <cf-mixing-image> , <cf-final-image>? )",
      "cubic-bezier-timing-function": "ease|ease-in|ease-out|ease-in-out|cubic-bezier( <number [0,1]> , <number> , <number [0,1]> , <number> )",
      "deprecated-system-color": "ActiveBorder|ActiveCaption|AppWorkspace|Background|ButtonFace|ButtonHighlight|ButtonShadow|ButtonText|CaptionText|GrayText|Highlight|HighlightText|InactiveBorder|InactiveCaption|InactiveCaptionText|InfoBackground|InfoText|Menu|MenuText|Scrollbar|ThreeDDarkShadow|ThreeDFace|ThreeDHighlight|ThreeDLightShadow|ThreeDShadow|Window|WindowFrame|WindowText",
      "discretionary-lig-values": "[discretionary-ligatures|no-discretionary-ligatures]",
      "display-box": "contents|none",
      "display-inside": "flow|flow-root|table|flex|grid|ruby",
      "display-internal": "table-row-group|table-header-group|table-footer-group|table-row|table-cell|table-column-group|table-column|table-caption|ruby-base|ruby-text|ruby-base-container|ruby-text-container",
      "display-legacy": "inline-block|inline-list-item|inline-table|inline-flex|inline-grid",
      "display-listitem": "<display-outside>?&&[flow|flow-root]?&&list-item",
      "display-outside": "block|inline|run-in",
      "drop-shadow()": "drop-shadow( <length>{2,3} <color>? )",
      "east-asian-variant-values": "[jis78|jis83|jis90|jis04|simplified|traditional]",
      "east-asian-width-values": "[full-width|proportional-width]",
      "element()": "element( <custom-ident> , [first|start|last|first-except]? )|element( <id-selector> )",
      "ellipse()": "ellipse( [<shape-radius>{2}]? [at <position>]? )",
      "ending-shape": "circle|ellipse",
      "env()": "env( <custom-ident> , <declaration-value>? )",
      "exp()": "exp( <calc-sum> )",
      "explicit-track-list": "[<line-names>? <track-size>]+ <line-names>?",
      "family-name": "<string>|<custom-ident>+",
      "feature-tag-value": "<string> [<integer>|on|off]?",
      "feature-type": "@stylistic|@historical-forms|@styleset|@character-variant|@swash|@ornaments|@annotation",
      "feature-value-block": "<feature-type> '{' <feature-value-declaration-list> '}'",
      "feature-value-block-list": "<feature-value-block>+",
      "feature-value-declaration": "<custom-ident> : <integer>+ ;",
      "feature-value-declaration-list": "<feature-value-declaration>",
      "feature-value-name": "<custom-ident>",
      "fill-rule": "nonzero|evenodd",
      "filter-function": "<blur()>|<brightness()>|<contrast()>|<drop-shadow()>|<grayscale()>|<hue-rotate()>|<invert()>|<opacity()>|<saturate()>|<sepia()>",
      "filter-function-list": "[<filter-function>|<url>]+",
      "final-bg-layer": "<'background-color'>||<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<box>||<box>",
      "fixed-breadth": "<length-percentage>",
      "fixed-repeat": "repeat( [<integer [1,\u221E]>] , [<line-names>? <fixed-size>]+ <line-names>? )",
      "fixed-size": "<fixed-breadth>|minmax( <fixed-breadth> , <track-breadth> )|minmax( <inflexible-breadth> , <fixed-breadth> )",
      "font-stretch-absolute": "normal|ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded|<percentage>",
      "font-variant-css21": "[normal|small-caps]",
      "font-weight-absolute": "normal|bold|<number [1,1000]>",
      "frequency-percentage": "<frequency>|<percentage>",
      "general-enclosed": "[<function-token> <any-value>? )]|[( <any-value>? )]",
      "generic-family": "<generic-script-specific>|<generic-complete>|<generic-incomplete>|<-non-standard-generic-family>",
      "generic-name": "serif|sans-serif|cursive|fantasy|monospace",
      "geometry-box": "<shape-box>|fill-box|stroke-box|view-box",
      gradient: "<linear-gradient()>|<repeating-linear-gradient()>|<radial-gradient()>|<repeating-radial-gradient()>|<conic-gradient()>|<repeating-conic-gradient()>|<-legacy-gradient>",
      "grayscale()": "grayscale( <number-percentage> )",
      "grid-line": "auto|<custom-ident>|[<integer>&&<custom-ident>?]|[span&&[<integer>||<custom-ident>]]",
      "historical-lig-values": "[historical-ligatures|no-historical-ligatures]",
      "hsl()": "hsl( <hue> <percentage> <percentage> [/ <alpha-value>]? )|hsl( <hue> , <percentage> , <percentage> , <alpha-value>? )",
      "hsla()": "hsla( <hue> <percentage> <percentage> [/ <alpha-value>]? )|hsla( <hue> , <percentage> , <percentage> , <alpha-value>? )",
      hue: "<number>|<angle>",
      "hue-rotate()": "hue-rotate( <angle> )",
      "hwb()": "hwb( [<hue>|none] [<percentage>|none] [<percentage>|none] [/ [<alpha-value>|none]]? )",
      "hypot()": "hypot( <calc-sum># )",
      image: "<url>|<image()>|<image-set()>|<element()>|<paint()>|<cross-fade()>|<gradient>",
      "image()": "image( <image-tags>? [<image-src>? , <color>?]! )",
      "image-set()": "image-set( <image-set-option># )",
      "image-set-option": "[<image>|<string>] [<resolution>||type( <string> )]",
      "image-src": "<url>|<string>",
      "image-tags": "ltr|rtl",
      "inflexible-breadth": "<length-percentage>|min-content|max-content|auto",
      "inset()": "inset( <length-percentage>{1,4} [round <'border-radius'>]? )",
      "invert()": "invert( <number-percentage> )",
      "keyframes-name": "<custom-ident>|<string>",
      "keyframe-block": "<keyframe-selector># { <declaration-list> }",
      "keyframe-block-list": "<keyframe-block>+",
      "keyframe-selector": "from|to|<percentage>|<timeline-range-name> <percentage>",
      "lab()": "lab( [<percentage>|<number>|none] [<percentage>|<number>|none] [<percentage>|<number>|none] [/ [<alpha-value>|none]]? )",
      "layer()": "layer( <layer-name> )",
      "layer-name": "<ident> ['.' <ident>]*",
      "lch()": "lch( [<percentage>|<number>|none] [<percentage>|<number>|none] [<hue>|none] [/ [<alpha-value>|none]]? )",
      "leader()": "leader( <leader-type> )",
      "leader-type": "dotted|solid|space|<string>",
      "length-percentage": "<length>|<percentage>",
      "light-dark()": "light-dark( <color> , <color> )",
      "line-names": "'[' <custom-ident>* ']'",
      "line-name-list": "[<line-names>|<name-repeat>]+",
      "line-style": "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset",
      "line-width": "<length>|thin|medium|thick",
      "linear-color-hint": "<length-percentage>",
      "linear-color-stop": "<color> <color-stop-length>?",
      "linear-gradient()": "linear-gradient( [<angle>|to <side-or-corner>]? , <color-stop-list> )",
      "log()": "log( <calc-sum> , <calc-sum>? )",
      "mask-layer": "<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||<geometry-box>||[<geometry-box>|no-clip]||<compositing-operator>||<masking-mode>",
      "mask-position": "[<length-percentage>|left|center|right] [<length-percentage>|top|center|bottom]?",
      "mask-reference": "none|<image>|<mask-source>",
      "mask-source": "<url>",
      "masking-mode": "alpha|luminance|match-source",
      "matrix()": "matrix( <number>#{6} )",
      "matrix3d()": "matrix3d( <number>#{16} )",
      "max()": "max( <calc-sum># )",
      "media-and": "<media-in-parens> [and <media-in-parens>]+",
      "media-condition": "<media-not>|<media-and>|<media-or>|<media-in-parens>",
      "media-condition-without-or": "<media-not>|<media-and>|<media-in-parens>",
      "media-feature": "( [<mf-plain>|<mf-boolean>|<mf-range>] )",
      "media-in-parens": "( <media-condition> )|<media-feature>|<general-enclosed>",
      "media-not": "not <media-in-parens>",
      "media-or": "<media-in-parens> [or <media-in-parens>]+",
      "media-query": "<media-condition>|[not|only]? <media-type> [and <media-condition-without-or>]?",
      "media-query-list": "<media-query>#",
      "media-type": "<ident>",
      "mf-boolean": "<mf-name>",
      "mf-name": "<ident>",
      "mf-plain": "<mf-name> : <mf-value>",
      "mf-range": "<mf-name> ['<'|'>']? '='? <mf-value>|<mf-value> ['<'|'>']? '='? <mf-name>|<mf-value> '<' '='? <mf-name> '<' '='? <mf-value>|<mf-value> '>' '='? <mf-name> '>' '='? <mf-value>",
      "mf-value": "<number>|<dimension>|<ident>|<ratio>",
      "min()": "min( <calc-sum># )",
      "minmax()": "minmax( [<length-percentage>|min-content|max-content|auto] , [<length-percentage>|<flex>|min-content|max-content|auto] )",
      "mod()": "mod( <calc-sum> , <calc-sum> )",
      "name-repeat": "repeat( [<integer [1,\u221E]>|auto-fill] , <line-names>+ )",
      "named-color": "transparent|aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen",
      "namespace-prefix": "<ident>",
      "ns-prefix": "[<ident-token>|'*']? '|'",
      "number-percentage": "<number>|<percentage>",
      "numeric-figure-values": "[lining-nums|oldstyle-nums]",
      "numeric-fraction-values": "[diagonal-fractions|stacked-fractions]",
      "numeric-spacing-values": "[proportional-nums|tabular-nums]",
      nth: "<an-plus-b>|even|odd",
      "opacity()": "opacity( [<number-percentage>] )",
      "overflow-position": "unsafe|safe",
      "outline-radius": "<length>|<percentage>",
      "page-body": "<declaration>? [; <page-body>]?|<page-margin-box> <page-body>",
      "page-margin-box": "<page-margin-box-type> '{' <declaration-list> '}'",
      "page-margin-box-type": "@top-left-corner|@top-left|@top-center|@top-right|@top-right-corner|@bottom-left-corner|@bottom-left|@bottom-center|@bottom-right|@bottom-right-corner|@left-top|@left-middle|@left-bottom|@right-top|@right-middle|@right-bottom",
      "page-selector-list": "[<page-selector>#]?",
      "page-selector": "<pseudo-page>+|<ident> <pseudo-page>*",
      "page-size": "A5|A4|A3|B5|B4|JIS-B5|JIS-B4|letter|legal|ledger",
      "path()": "path( [<fill-rule> ,]? <string> )",
      "paint()": "paint( <ident> , <declaration-value>? )",
      "perspective()": "perspective( [<length [0,\u221E]>|none] )",
      "polygon()": "polygon( <fill-rule>? , [<length-percentage> <length-percentage>]# )",
      position: "[[left|center|right]||[top|center|bottom]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]?|[[left|right] <length-percentage>]&&[[top|bottom] <length-percentage>]]",
      "pow()": "pow( <calc-sum> , <calc-sum> )",
      "pseudo-class-selector": "':' <ident-token>|':' <function-token> <any-value> ')'",
      "pseudo-element-selector": "':' <pseudo-class-selector>|<legacy-pseudo-element-selector>",
      "pseudo-page": ": [left|right|first|blank]",
      quote: "open-quote|close-quote|no-open-quote|no-close-quote",
      "radial-gradient()": "radial-gradient( [<ending-shape>||<size>]? [at <position>]? , <color-stop-list> )",
      ratio: "<number [0,\u221E]> [/ <number [0,\u221E]>]?",
      "ray()": "ray( <angle>&&<ray-size>?&&contain?&&[at <position>]? )",
      "ray-size": "closest-side|closest-corner|farthest-side|farthest-corner|sides",
      "relative-selector": "<combinator>? <complex-selector>",
      "relative-selector-list": "<relative-selector>#",
      "relative-size": "larger|smaller",
      "rem()": "rem( <calc-sum> , <calc-sum> )",
      "repeat-style": "repeat-x|repeat-y|[repeat|space|round|no-repeat]{1,2}",
      "repeating-conic-gradient()": "repeating-conic-gradient( [from <angle>]? [at <position>]? , <angular-color-stop-list> )",
      "repeating-linear-gradient()": "repeating-linear-gradient( [<angle>|to <side-or-corner>]? , <color-stop-list> )",
      "repeating-radial-gradient()": "repeating-radial-gradient( [<ending-shape>||<size>]? [at <position>]? , <color-stop-list> )",
      "reversed-counter-name": "reversed( <counter-name> )",
      "rgb()": "rgb( <percentage>{3} [/ <alpha-value>]? )|rgb( <number>{3} [/ <alpha-value>]? )|rgb( <percentage>#{3} , <alpha-value>? )|rgb( <number>#{3} , <alpha-value>? )",
      "rgba()": "rgba( <percentage>{3} [/ <alpha-value>]? )|rgba( <number>{3} [/ <alpha-value>]? )|rgba( <percentage>#{3} , <alpha-value>? )|rgba( <number>#{3} , <alpha-value>? )",
      "rotate()": "rotate( [<angle>|<zero>] )",
      "rotate3d()": "rotate3d( <number> , <number> , <number> , [<angle>|<zero>] )",
      "rotateX()": "rotateX( [<angle>|<zero>] )",
      "rotateY()": "rotateY( [<angle>|<zero>] )",
      "rotateZ()": "rotateZ( [<angle>|<zero>] )",
      "round()": "round( <rounding-strategy>? , <calc-sum> , <calc-sum> )",
      "rounding-strategy": "nearest|up|down|to-zero",
      "saturate()": "saturate( <number-percentage> )",
      "scale()": "scale( [<number>|<percentage>]#{1,2} )",
      "scale3d()": "scale3d( [<number>|<percentage>]#{3} )",
      "scaleX()": "scaleX( [<number>|<percentage>] )",
      "scaleY()": "scaleY( [<number>|<percentage>] )",
      "scaleZ()": "scaleZ( [<number>|<percentage>] )",
      "scroll()": "scroll( [<axis>||<scroller>]? )",
      scroller: "root|nearest",
      "self-position": "center|start|end|self-start|self-end|flex-start|flex-end",
      "shape-radius": "<length-percentage>|closest-side|farthest-side",
      "sign()": "sign( <calc-sum> )",
      "skew()": "skew( [<angle>|<zero>] , [<angle>|<zero>]? )",
      "skewX()": "skewX( [<angle>|<zero>] )",
      "skewY()": "skewY( [<angle>|<zero>] )",
      "sepia()": "sepia( <number-percentage> )",
      shadow: "inset?&&<length>{2,4}&&<color>?",
      "shadow-t": "[<length>{2,3}&&<color>?]",
      shape: "rect( <top> , <right> , <bottom> , <left> )|rect( <top> <right> <bottom> <left> )",
      "shape-box": "<box>|margin-box",
      "side-or-corner": "[left|right]||[top|bottom]",
      "sin()": "sin( <calc-sum> )",
      "single-animation": "<'animation-duration'>||<easing-function>||<'animation-delay'>||<single-animation-iteration-count>||<single-animation-direction>||<single-animation-fill-mode>||<single-animation-play-state>||[none|<keyframes-name>]||<single-animation-timeline>",
      "single-animation-direction": "normal|reverse|alternate|alternate-reverse",
      "single-animation-fill-mode": "none|forwards|backwards|both",
      "single-animation-iteration-count": "infinite|<number>",
      "single-animation-play-state": "running|paused",
      "single-animation-timeline": "auto|none|<dashed-ident>|<scroll()>|<view()>",
      "single-transition": "[none|<single-transition-property>]||<time>||<easing-function>||<time>||<transition-behavior-value>",
      "single-transition-property": "all|<custom-ident>",
      size: "closest-side|farthest-side|closest-corner|farthest-corner|<length>|<length-percentage>{2}",
      "sqrt()": "sqrt( <calc-sum> )",
      "step-position": "jump-start|jump-end|jump-none|jump-both|start|end",
      "step-timing-function": "step-start|step-end|steps( <integer> [, <step-position>]? )",
      "subclass-selector": "<id-selector>|<class-selector>|<attribute-selector>|<pseudo-class-selector>",
      "supports-condition": "not <supports-in-parens>|<supports-in-parens> [and <supports-in-parens>]*|<supports-in-parens> [or <supports-in-parens>]*",
      "supports-in-parens": "( <supports-condition> )|<supports-feature>|<general-enclosed>",
      "supports-feature": "<supports-decl>|<supports-selector-fn>",
      "supports-decl": "( <declaration> )",
      "supports-selector-fn": "selector( <complex-selector> )",
      symbol: "<string>|<image>|<custom-ident>",
      "tan()": "tan( <calc-sum> )",
      target: "<target-counter()>|<target-counters()>|<target-text()>",
      "target-counter()": "target-counter( [<string>|<url>] , <custom-ident> , <counter-style>? )",
      "target-counters()": "target-counters( [<string>|<url>] , <custom-ident> , <string> , <counter-style>? )",
      "target-text()": "target-text( [<string>|<url>] , [content|before|after|first-letter]? )",
      "time-percentage": "<time>|<percentage>",
      "timeline-range-name": "cover|contain|entry|exit|entry-crossing|exit-crossing",
      "easing-function": "linear|<cubic-bezier-timing-function>|<step-timing-function>",
      "track-breadth": "<length-percentage>|<flex>|min-content|max-content|auto",
      "track-list": "[<line-names>? [<track-size>|<track-repeat>]]+ <line-names>?",
      "track-repeat": "repeat( [<integer [1,\u221E]>] , [<line-names>? <track-size>]+ <line-names>? )",
      "track-size": "<track-breadth>|minmax( <inflexible-breadth> , <track-breadth> )|fit-content( <length-percentage> )",
      "transform-function": "<matrix()>|<translate()>|<translateX()>|<translateY()>|<scale()>|<scaleX()>|<scaleY()>|<rotate()>|<skew()>|<skewX()>|<skewY()>|<matrix3d()>|<translate3d()>|<translateZ()>|<scale3d()>|<scaleZ()>|<rotate3d()>|<rotateX()>|<rotateY()>|<rotateZ()>|<perspective()>",
      "transform-list": "<transform-function>+",
      "transition-behavior-value": "normal|allow-discrete",
      "translate()": "translate( <length-percentage> , <length-percentage>? )",
      "translate3d()": "translate3d( <length-percentage> , <length-percentage> , <length> )",
      "translateX()": "translateX( <length-percentage> )",
      "translateY()": "translateY( <length-percentage> )",
      "translateZ()": "translateZ( <length> )",
      "type-or-unit": "string|color|url|integer|number|length|angle|time|frequency|cap|ch|em|ex|ic|lh|rlh|rem|vb|vi|vw|vh|vmin|vmax|mm|Q|cm|in|pt|pc|px|deg|grad|rad|turn|ms|s|Hz|kHz|%",
      "type-selector": "<wq-name>|<ns-prefix>? '*'",
      "var()": "var( <custom-property-name> , <declaration-value>? )",
      "view()": "view( [<axis>||<'view-timeline-inset'>]? )",
      "viewport-length": "auto|<length-percentage>",
      "visual-box": "content-box|padding-box|border-box",
      "wq-name": "<ns-prefix>? <ident-token>",
      "-legacy-gradient": "<-webkit-gradient()>|<-legacy-linear-gradient>|<-legacy-repeating-linear-gradient>|<-legacy-radial-gradient>|<-legacy-repeating-radial-gradient>",
      "-legacy-linear-gradient": "-moz-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-linear-gradient( <-legacy-linear-gradient-arguments> )",
      "-legacy-repeating-linear-gradient": "-moz-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )",
      "-legacy-linear-gradient-arguments": "[<angle>|<side-or-corner>]? , <color-stop-list>",
      "-legacy-radial-gradient": "-moz-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-radial-gradient( <-legacy-radial-gradient-arguments> )",
      "-legacy-repeating-radial-gradient": "-moz-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )",
      "-legacy-radial-gradient-arguments": "[<position> ,]? [[[<-legacy-radial-gradient-shape>||<-legacy-radial-gradient-size>]|[<length>|<percentage>]{2}] ,]? <color-stop-list>",
      "-legacy-radial-gradient-size": "closest-side|closest-corner|farthest-side|farthest-corner|contain|cover",
      "-legacy-radial-gradient-shape": "circle|ellipse",
      "-non-standard-font": "-apple-system-body|-apple-system-headline|-apple-system-subheadline|-apple-system-caption1|-apple-system-caption2|-apple-system-footnote|-apple-system-short-body|-apple-system-short-headline|-apple-system-short-subheadline|-apple-system-short-caption1|-apple-system-short-footnote|-apple-system-tall-body",
      "-non-standard-color": "-moz-ButtonDefault|-moz-ButtonHoverFace|-moz-ButtonHoverText|-moz-CellHighlight|-moz-CellHighlightText|-moz-Combobox|-moz-ComboboxText|-moz-Dialog|-moz-DialogText|-moz-dragtargetzone|-moz-EvenTreeRow|-moz-Field|-moz-FieldText|-moz-html-CellHighlight|-moz-html-CellHighlightText|-moz-mac-accentdarkestshadow|-moz-mac-accentdarkshadow|-moz-mac-accentface|-moz-mac-accentlightesthighlight|-moz-mac-accentlightshadow|-moz-mac-accentregularhighlight|-moz-mac-accentregularshadow|-moz-mac-chrome-active|-moz-mac-chrome-inactive|-moz-mac-focusring|-moz-mac-menuselect|-moz-mac-menushadow|-moz-mac-menutextselect|-moz-MenuHover|-moz-MenuHoverText|-moz-MenuBarText|-moz-MenuBarHoverText|-moz-nativehyperlinktext|-moz-OddTreeRow|-moz-win-communicationstext|-moz-win-mediatext|-moz-activehyperlinktext|-moz-default-background-color|-moz-default-color|-moz-hyperlinktext|-moz-visitedhyperlinktext|-webkit-activelink|-webkit-focus-ring-color|-webkit-link|-webkit-text",
      "-non-standard-image-rendering": "optimize-contrast|-moz-crisp-edges|-o-crisp-edges|-webkit-optimize-contrast",
      "-non-standard-overflow": "overlay|-moz-scrollbars-none|-moz-scrollbars-horizontal|-moz-scrollbars-vertical|-moz-hidden-unscrollable",
      "-non-standard-size": "intrinsic|min-intrinsic|-webkit-fill-available|-webkit-fit-content|-webkit-min-content|-webkit-max-content|-moz-available|-moz-fit-content|-moz-min-content|-moz-max-content",
      "-webkit-gradient()": "-webkit-gradient( <-webkit-gradient-type> , <-webkit-gradient-point> [, <-webkit-gradient-point>|, <-webkit-gradient-radius> , <-webkit-gradient-point>] [, <-webkit-gradient-radius>]? [, <-webkit-gradient-color-stop>]* )",
      "-webkit-gradient-color-stop": "from( <color> )|color-stop( [<number-zero-one>|<percentage>] , <color> )|to( <color> )",
      "-webkit-gradient-point": "[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]",
      "-webkit-gradient-radius": "<length>|<percentage>",
      "-webkit-gradient-type": "linear|radial",
      "-webkit-mask-box-repeat": "repeat|stretch|round",
      "-ms-filter-function-list": "<-ms-filter-function>+",
      "-ms-filter-function": "<-ms-filter-function-progid>|<-ms-filter-function-legacy>",
      "-ms-filter-function-progid": "'progid:' [<ident-token> '.']* [<ident-token>|<function-token> <any-value>? )]",
      "-ms-filter-function-legacy": "<ident-token>|<function-token> <any-value>? )",
      "absolute-color-base": "<hex-color>|<absolute-color-function>|<named-color>|transparent",
      "absolute-color-function": "rgb( ) >|<rgba()>|<hsl()>|<hsla()>|<hwb()>|<lab()>|<lch()>|<oklab()>|<oklch()>|<color()>",
      age: "child|young|old",
      "attr-name": "<wq-name>",
      "attr-fallback": "<any-value>",
      "bg-clip": "<box>|border|text",
      bottom: "<length>|auto",
      "container-name": "<custom-ident>",
      "container-condition": "not <query-in-parens>|<query-in-parens> [[and <query-in-parens>]*|[or <query-in-parens>]*]",
      "coord-box": "content-box|padding-box|border-box|fill-box|stroke-box|view-box",
      "generic-voice": "[<age>? <gender> <integer>?]",
      gender: "male|female|neutral",
      "generic-script-specific": "generic( kai )|generic( fangsong )|generic( nastaliq )",
      "generic-complete": "serif|sans-serif|system-ui|cursive|fantasy|math|monospace",
      "generic-incomplete": "ui-serif|ui-sans-serif|ui-monospace|ui-rounded",
      "-non-standard-generic-family": "-apple-system|BlinkMacSystemFont",
      left: "<length>|auto",
      "color-base": "<hex-color>|<color-function>|<named-color>|<color-mix()>|transparent",
      "color-function": "<rgb()>|<rgba()>|<hsl()>|<hsla()>|<hwb()>|<lab()>|<lch()>|<oklab()>|<oklch()>|<color()>",
      "system-color": "AccentColor|AccentColorText|ActiveText|ButtonBorder|ButtonFace|ButtonText|Canvas|CanvasText|Field|FieldText|GrayText|Highlight|HighlightText|LinkText|Mark|MarkText|SelectedItem|SelectedItemText|VisitedText",
      "device-cmyk()": "<legacy-device-cmyk-syntax>|<modern-device-cmyk-syntax>",
      "legacy-device-cmyk-syntax": "device-cmyk( <number>#{4} )",
      "modern-device-cmyk-syntax": "device-cmyk( <cmyk-component>{4} [/ [<alpha-value>|none]]? )",
      "cmyk-component": "<number>|<percentage>|none",
      "color-mix()": "color-mix( <color-interpolation-method> , [<color>&&<percentage [0,100]>?]#{2} )",
      "color-interpolation-method": "in [<rectangular-color-space>|<polar-color-space> <hue-interpolation-method>?|<custom-color-space>]",
      "color-space": "<rectangular-color-space>|<polar-color-space>|<custom-color-space>",
      "rectangular-color-space": "srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|lab|oklab|xyz|xyz-d50|xyz-d65",
      "polar-color-space": "hsl|hwb|lch|oklch",
      "custom-color-space": "<dashed-ident>",
      "hue-interpolation-method": "[shorter|longer|increasing|decreasing] hue",
      paint: "none|<color>|<url> [none|<color>]?|context-fill|context-stroke",
      "palette-identifier": "<dashed-ident>",
      right: "<length>|auto",
      "scope-start": "<forgiving-selector-list>",
      "scope-end": "<forgiving-selector-list>",
      "forgiving-selector-list": "<complex-real-selector-list>",
      "forgiving-relative-selector-list": "<relative-real-selector-list>",
      "selector-list": "<complex-selector-list>",
      "complex-real-selector-list": "<complex-real-selector>#",
      "simple-selector-list": "<simple-selector>#",
      "relative-real-selector-list": "<relative-real-selector>#",
      "complex-selector-unit": "[<compound-selector>? <pseudo-compound-selector>*]!",
      "complex-real-selector": "<compound-selector> [<combinator>? <compound-selector>]*",
      "relative-real-selector": "<combinator>? <complex-real-selector>",
      "pseudo-compound-selector": "<pseudo-element-selector> <pseudo-class-selector>*",
      "simple-selector": "<type-selector>|<subclass-selector>",
      "legacy-pseudo-element-selector": "':' [before|after|first-line|first-letter]",
      "single-animation-composition": "replace|add|accumulate",
      "svg-length": "<percentage>|<length>|<number>",
      "svg-writing-mode": "lr-tb|rl-tb|tb-rl|lr|rl|tb",
      top: "<length>|auto",
      x: "<number>",
      y: "<number>",
      declaration: "<ident-token> : <declaration-value>? ['!' important]?",
      "declaration-list": "[<declaration>? ';']* <declaration>?",
      url: "url( <string> <url-modifier>* )|<url-token>",
      "url-modifier": "<ident>|<function-token> <any-value> )",
      "number-zero-one": "<number [0,1]>",
      "number-one-or-greater": "<number [1,\u221E]>",
      "color()": "color( <colorspace-params> [/ [<alpha-value>|none]]? )",
      "colorspace-params": "[<predefined-rgb-params>|<xyz-params>]",
      "predefined-rgb-params": "<predefined-rgb> [<number>|<percentage>|none]{3}",
      "predefined-rgb": "srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020",
      "xyz-params": "<xyz-space> [<number>|<percentage>|none]{3}",
      "xyz-space": "xyz|xyz-d50|xyz-d65",
      "oklab()": "oklab( [<percentage>|<number>|none] [<percentage>|<number>|none] [<percentage>|<number>|none] [/ [<alpha-value>|none]]? )",
      "oklch()": "oklch( [<percentage>|<number>|none] [<percentage>|<number>|none] [<hue>|none] [/ [<alpha-value>|none]]? )",
      "offset-path": "<ray()>|<url>|<basic-shape>",
      "query-in-parens": "( <container-condition> )|( <size-feature> )|style( <style-query> )|<general-enclosed>",
      "size-feature": "<mf-plain>|<mf-boolean>|<mf-range>",
      "style-feature": "<declaration>",
      "style-query": "<style-condition>|<style-feature>",
      "style-condition": "not <style-in-parens>|<style-in-parens> [[and <style-in-parens>]*|[or <style-in-parens>]*]",
      "style-in-parens": "( <style-condition> )|( <style-feature> )|<general-enclosed>",
      "-non-standard-display": "-ms-inline-flexbox|-ms-grid|-ms-inline-grid|-webkit-flex|-webkit-inline-flex|-webkit-box|-webkit-inline-box|-moz-inline-stack|-moz-box|-moz-inline-box",
      "inset-area": "[[left|center|right|span-left|span-right|x-start|x-end|span-x-start|span-x-end|x-self-start|x-self-end|span-x-self-start|span-x-self-end|span-all]||[top|center|bottom|span-top|span-bottom|y-start|y-end|span-y-start|span-y-end|y-self-start|y-self-end|span-y-self-start|span-y-self-end|span-all]|[block-start|center|block-end|span-block-start|span-block-end|span-all]||[inline-start|center|inline-end|span-inline-start|span-inline-end|span-all]|[self-block-start|self-block-end|span-self-block-start|span-self-block-end|span-all]||[self-inline-start|self-inline-end|span-self-inline-start|span-self-inline-end|span-all]|[start|center|end|span-start|span-end|span-all]{1,2}|[self-start|center|self-end|span-self-start|span-self-end|span-all]{1,2}]",
      "position-area": "[[left|center|right|span-left|span-right|x-start|x-end|span-x-start|span-x-end|x-self-start|x-self-end|span-x-self-start|span-x-self-end|span-all]||[top|center|bottom|span-top|span-bottom|y-start|y-end|span-y-start|span-y-end|y-self-start|y-self-end|span-y-self-start|span-y-self-end|span-all]|[block-start|center|block-end|span-block-start|span-block-end|span-all]||[inline-start|center|inline-end|span-inline-start|span-inline-end|span-all]|[self-block-start|center|self-block-end|span-self-block-start|span-self-block-end|span-all]||[self-inline-start|center|self-inline-end|span-self-inline-start|span-self-inline-end|span-all]|[start|center|end|span-start|span-end|span-all]{1,2}|[self-start|center|self-end|span-self-start|span-self-end|span-all]{1,2}]",
      "anchor()": "anchor( <anchor-element>?&&<anchor-side> , <length-percentage>? )",
      "anchor-side": "inside|outside|top|left|right|bottom|start|end|self-start|self-end|<percentage>|center",
      "anchor-size()": "anchor-size( [<anchor-element>||<anchor-size>]? , <length-percentage>? )",
      "anchor-size": "width|height|block|inline|self-block|self-inline",
      "anchor-element": "<dashed-ident>",
      "try-size": "most-width|most-height|most-block-size|most-inline-size",
      "try-tactic": "flip-block||flip-inline||flip-start",
      "font-variant-css2": "normal|small-caps",
      "font-width-css3": "normal|ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded",
      "system-family-name": "caption|icon|menu|message-box|small-caption|status-bar"
    },
    properties: {
      "--*": "<declaration-value>",
      "-ms-accelerator": "false|true",
      "-ms-block-progression": "tb|rl|bt|lr",
      "-ms-content-zoom-chaining": "none|chained",
      "-ms-content-zooming": "none|zoom",
      "-ms-content-zoom-limit": "<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>",
      "-ms-content-zoom-limit-max": "<percentage>",
      "-ms-content-zoom-limit-min": "<percentage>",
      "-ms-content-zoom-snap": "<'-ms-content-zoom-snap-type'>||<'-ms-content-zoom-snap-points'>",
      "-ms-content-zoom-snap-points": "snapInterval( <percentage> , <percentage> )|snapList( <percentage># )",
      "-ms-content-zoom-snap-type": "none|proximity|mandatory",
      "-ms-filter": "<string>",
      "-ms-flow-from": "[none|<custom-ident>]#",
      "-ms-flow-into": "[none|<custom-ident>]#",
      "-ms-grid-columns": "none|<track-list>|<auto-track-list>",
      "-ms-grid-rows": "none|<track-list>|<auto-track-list>",
      "-ms-high-contrast-adjust": "auto|none",
      "-ms-hyphenate-limit-chars": "auto|<integer>{1,3}",
      "-ms-hyphenate-limit-lines": "no-limit|<integer>",
      "-ms-hyphenate-limit-zone": "<percentage>|<length>",
      "-ms-ime-align": "auto|after",
      "-ms-overflow-style": "auto|none|scrollbar|-ms-autohiding-scrollbar",
      "-ms-scrollbar-3dlight-color": "<color>",
      "-ms-scrollbar-arrow-color": "<color>",
      "-ms-scrollbar-base-color": "<color>",
      "-ms-scrollbar-darkshadow-color": "<color>",
      "-ms-scrollbar-face-color": "<color>",
      "-ms-scrollbar-highlight-color": "<color>",
      "-ms-scrollbar-shadow-color": "<color>",
      "-ms-scrollbar-track-color": "<color>",
      "-ms-scroll-chaining": "chained|none",
      "-ms-scroll-limit": "<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>",
      "-ms-scroll-limit-x-max": "auto|<length>",
      "-ms-scroll-limit-x-min": "<length>",
      "-ms-scroll-limit-y-max": "auto|<length>",
      "-ms-scroll-limit-y-min": "<length>",
      "-ms-scroll-rails": "none|railed",
      "-ms-scroll-snap-points-x": "snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )",
      "-ms-scroll-snap-points-y": "snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )",
      "-ms-scroll-snap-type": "none|proximity|mandatory",
      "-ms-scroll-snap-x": "<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>",
      "-ms-scroll-snap-y": "<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>",
      "-ms-scroll-translation": "none|vertical-to-horizontal",
      "-ms-text-autospace": "none|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space",
      "-ms-touch-select": "grippers|none",
      "-ms-user-select": "none|element|text",
      "-ms-wrap-flow": "auto|both|start|end|maximum|clear",
      "-ms-wrap-margin": "<length>",
      "-ms-wrap-through": "wrap|none",
      "-moz-appearance": "none|button|button-arrow-down|button-arrow-next|button-arrow-previous|button-arrow-up|button-bevel|button-focus|caret|checkbox|checkbox-container|checkbox-label|checkmenuitem|dualbutton|groupbox|listbox|listitem|menuarrow|menubar|menucheckbox|menuimage|menuitem|menuitemtext|menulist|menulist-button|menulist-text|menulist-textfield|menupopup|menuradio|menuseparator|meterbar|meterchunk|progressbar|progressbar-vertical|progresschunk|progresschunk-vertical|radio|radio-container|radio-label|radiomenuitem|range|range-thumb|resizer|resizerpanel|scale-horizontal|scalethumbend|scalethumb-horizontal|scalethumbstart|scalethumbtick|scalethumb-vertical|scale-vertical|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|separator|sheet|spinner|spinner-downbutton|spinner-textfield|spinner-upbutton|splitter|statusbar|statusbarpanel|tab|tabpanel|tabpanels|tab-scroll-arrow-back|tab-scroll-arrow-forward|textfield|textfield-multiline|toolbar|toolbarbutton|toolbarbutton-dropdown|toolbargripper|toolbox|tooltip|treeheader|treeheadercell|treeheadersortarrow|treeitem|treeline|treetwisty|treetwistyopen|treeview|-moz-mac-unified-toolbar|-moz-win-borderless-glass|-moz-win-browsertabbar-toolbox|-moz-win-communicationstext|-moz-win-communications-toolbox|-moz-win-exclude-glass|-moz-win-glass|-moz-win-mediatext|-moz-win-media-toolbox|-moz-window-button-box|-moz-window-button-box-maximized|-moz-window-button-close|-moz-window-button-maximize|-moz-window-button-minimize|-moz-window-button-restore|-moz-window-frame-bottom|-moz-window-frame-left|-moz-window-frame-right|-moz-window-titlebar|-moz-window-titlebar-maximized",
      "-moz-binding": "<url>|none",
      "-moz-border-bottom-colors": "<color>+|none",
      "-moz-border-left-colors": "<color>+|none",
      "-moz-border-right-colors": "<color>+|none",
      "-moz-border-top-colors": "<color>+|none",
      "-moz-context-properties": "none|[fill|fill-opacity|stroke|stroke-opacity]#",
      "-moz-float-edge": "border-box|content-box|margin-box|padding-box",
      "-moz-force-broken-image-icon": "0|1",
      "-moz-image-region": "<shape>|auto",
      "-moz-orient": "inline|block|horizontal|vertical",
      "-moz-outline-radius": "<outline-radius>{1,4} [/ <outline-radius>{1,4}]?",
      "-moz-outline-radius-bottomleft": "<outline-radius>",
      "-moz-outline-radius-bottomright": "<outline-radius>",
      "-moz-outline-radius-topleft": "<outline-radius>",
      "-moz-outline-radius-topright": "<outline-radius>",
      "-moz-stack-sizing": "ignore|stretch-to-fit",
      "-moz-text-blink": "none|blink",
      "-moz-user-focus": "ignore|normal|select-after|select-before|select-menu|select-same|select-all|none",
      "-moz-user-input": "auto|none|enabled|disabled",
      "-moz-user-modify": "read-only|read-write|write-only",
      "-moz-window-dragging": "drag|no-drag",
      "-moz-window-shadow": "default|menu|tooltip|sheet|none",
      "-webkit-appearance": "none|button|button-bevel|caps-lock-indicator|caret|checkbox|default-button|inner-spin-button|listbox|listitem|media-controls-background|media-controls-fullscreen-background|media-current-time-display|media-enter-fullscreen-button|media-exit-fullscreen-button|media-fullscreen-button|media-mute-button|media-overlay-play-button|media-play-button|media-seek-back-button|media-seek-forward-button|media-slider|media-sliderthumb|media-time-remaining-display|media-toggle-closed-captions-button|media-volume-slider|media-volume-slider-container|media-volume-sliderthumb|menulist|menulist-button|menulist-text|menulist-textfield|meter|progress-bar|progress-bar-value|push-button|radio|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbargripper-horizontal|scrollbargripper-vertical|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|searchfield-cancel-button|searchfield-decoration|searchfield-results-button|searchfield-results-decoration|slider-horizontal|slider-vertical|sliderthumb-horizontal|sliderthumb-vertical|square-button|textarea|textfield|-apple-pay-button",
      "-webkit-border-before": "<'border-width'>||<'border-style'>||<color>",
      "-webkit-border-before-color": "<color>",
      "-webkit-border-before-style": "<'border-style'>",
      "-webkit-border-before-width": "<'border-width'>",
      "-webkit-box-reflect": "[above|below|right|left]? <length>? <image>?",
      "-webkit-line-clamp": "none|<integer>",
      "-webkit-mask": "[<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||[<box>|border|padding|content|text]||[<box>|border|padding|content]]#",
      "-webkit-mask-attachment": "<attachment>#",
      "-webkit-mask-clip": "[<box>|border|padding|content|text]#",
      "-webkit-mask-composite": "<composite-style>#",
      "-webkit-mask-image": "<mask-reference>#",
      "-webkit-mask-origin": "[<box>|border|padding|content]#",
      "-webkit-mask-position": "<position>#",
      "-webkit-mask-position-x": "[<length-percentage>|left|center|right]#",
      "-webkit-mask-position-y": "[<length-percentage>|top|center|bottom]#",
      "-webkit-mask-repeat": "<repeat-style>#",
      "-webkit-mask-repeat-x": "repeat|no-repeat|space|round",
      "-webkit-mask-repeat-y": "repeat|no-repeat|space|round",
      "-webkit-mask-size": "<bg-size>#",
      "-webkit-overflow-scrolling": "auto|touch",
      "-webkit-tap-highlight-color": "<color>",
      "-webkit-text-fill-color": "<color>",
      "-webkit-text-stroke": "<length>||<color>",
      "-webkit-text-stroke-color": "<color>",
      "-webkit-text-stroke-width": "<length>",
      "-webkit-touch-callout": "default|none",
      "-webkit-user-modify": "read-only|read-write|read-write-plaintext-only",
      "accent-color": "auto|<color>",
      "align-content": "normal|<baseline-position>|<content-distribution>|<overflow-position>? <content-position>",
      "align-items": "normal|stretch|<baseline-position>|[<overflow-position>? <self-position>]",
      "align-self": "auto|normal|stretch|<baseline-position>|<overflow-position>? <self-position>",
      "align-tracks": "[normal|<baseline-position>|<content-distribution>|<overflow-position>? <content-position>]#",
      all: "initial|inherit|unset|revert|revert-layer",
      "anchor-name": "none|<dashed-ident>#",
      "anchor-scope": "none|all|<dashed-ident>#",
      animation: "<single-animation>#",
      "animation-composition": "<single-animation-composition>#",
      "animation-delay": "<time>#",
      "animation-direction": "<single-animation-direction>#",
      "animation-duration": "<time>#",
      "animation-fill-mode": "<single-animation-fill-mode>#",
      "animation-iteration-count": "<single-animation-iteration-count>#",
      "animation-name": "[none|<keyframes-name>]#",
      "animation-play-state": "<single-animation-play-state>#",
      "animation-range": "[<'animation-range-start'> <'animation-range-end'>?]#",
      "animation-range-end": "[normal|<length-percentage>|<timeline-range-name> <length-percentage>?]#",
      "animation-range-start": "[normal|<length-percentage>|<timeline-range-name> <length-percentage>?]#",
      "animation-timing-function": "<easing-function>#",
      "animation-timeline": "<single-animation-timeline>#",
      appearance: "none|auto|textfield|menulist-button|<compat-auto>",
      "aspect-ratio": "auto|<ratio>",
      azimuth: "<angle>|[[left-side|far-left|left|center-left|center|center-right|right|far-right|right-side]||behind]|leftwards|rightwards",
      "backdrop-filter": "none|<filter-function-list>",
      "backface-visibility": "visible|hidden",
      background: "[<bg-layer> ,]* <final-bg-layer>",
      "background-attachment": "<attachment>#",
      "background-blend-mode": "<blend-mode>#",
      "background-clip": "<bg-clip>#",
      "background-color": "<color>",
      "background-image": "<bg-image>#",
      "background-origin": "<box>#",
      "background-position": "<bg-position>#",
      "background-position-x": "[center|[[left|right|x-start|x-end]? <length-percentage>?]!]#",
      "background-position-y": "[center|[[top|bottom|y-start|y-end]? <length-percentage>?]!]#",
      "background-repeat": "<repeat-style>#",
      "background-size": "<bg-size>#",
      "block-size": "<'width'>",
      border: "<line-width>||<line-style>||<color>",
      "border-block": "<'border-top-width'>||<'border-top-style'>||<color>",
      "border-block-color": "<'border-top-color'>{1,2}",
      "border-block-style": "<'border-top-style'>",
      "border-block-width": "<'border-top-width'>",
      "border-block-end": "<'border-top-width'>||<'border-top-style'>||<color>",
      "border-block-end-color": "<'border-top-color'>",
      "border-block-end-style": "<'border-top-style'>",
      "border-block-end-width": "<'border-top-width'>",
      "border-block-start": "<'border-top-width'>||<'border-top-style'>||<color>",
      "border-block-start-color": "<'border-top-color'>",
      "border-block-start-style": "<'border-top-style'>",
      "border-block-start-width": "<'border-top-width'>",
      "border-bottom": "<line-width>||<line-style>||<color>",
      "border-bottom-color": "<'border-top-color'>",
      "border-bottom-left-radius": "<length-percentage>{1,2}",
      "border-bottom-right-radius": "<length-percentage>{1,2}",
      "border-bottom-style": "<line-style>",
      "border-bottom-width": "<line-width>",
      "border-collapse": "collapse|separate",
      "border-color": "<color>{1,4}",
      "border-end-end-radius": "<length-percentage>{1,2}",
      "border-end-start-radius": "<length-percentage>{1,2}",
      "border-image": "<'border-image-source'>||<'border-image-slice'> [/ <'border-image-width'>|/ <'border-image-width'>? / <'border-image-outset'>]?||<'border-image-repeat'>",
      "border-image-outset": "[<length>|<number>]{1,4}",
      "border-image-repeat": "[stretch|repeat|round|space]{1,2}",
      "border-image-slice": "<number-percentage>{1,4}&&fill?",
      "border-image-source": "none|<image>",
      "border-image-width": "[<length-percentage>|<number>|auto]{1,4}",
      "border-inline": "<'border-top-width'>||<'border-top-style'>||<color>",
      "border-inline-end": "<'border-top-width'>||<'border-top-style'>||<color>",
      "border-inline-color": "<'border-top-color'>{1,2}",
      "border-inline-style": "<'border-top-style'>",
      "border-inline-width": "<'border-top-width'>",
      "border-inline-end-color": "<'border-top-color'>",
      "border-inline-end-style": "<'border-top-style'>",
      "border-inline-end-width": "<'border-top-width'>",
      "border-inline-start": "<'border-top-width'>||<'border-top-style'>||<color>",
      "border-inline-start-color": "<'border-top-color'>",
      "border-inline-start-style": "<'border-top-style'>",
      "border-inline-start-width": "<'border-top-width'>",
      "border-left": "<line-width>||<line-style>||<color>",
      "border-left-color": "<color>",
      "border-left-style": "<line-style>",
      "border-left-width": "<line-width>",
      "border-radius": "<length-percentage>{1,4} [/ <length-percentage>{1,4}]?",
      "border-right": "<line-width>||<line-style>||<color>",
      "border-right-color": "<color>",
      "border-right-style": "<line-style>",
      "border-right-width": "<line-width>",
      "border-spacing": "<length> <length>?",
      "border-start-end-radius": "<length-percentage>{1,2}",
      "border-start-start-radius": "<length-percentage>{1,2}",
      "border-style": "<line-style>{1,4}",
      "border-top": "<line-width>||<line-style>||<color>",
      "border-top-color": "<color>",
      "border-top-left-radius": "<length-percentage>{1,2}",
      "border-top-right-radius": "<length-percentage>{1,2}",
      "border-top-style": "<line-style>",
      "border-top-width": "<line-width>",
      "border-width": "<line-width>{1,4}",
      bottom: "<length>|<percentage>|auto",
      "box-align": "start|center|end|baseline|stretch",
      "box-decoration-break": "slice|clone",
      "box-direction": "normal|reverse|inherit",
      "box-flex": "<number>",
      "box-flex-group": "<integer>",
      "box-lines": "single|multiple",
      "box-ordinal-group": "<integer>",
      "box-orient": "horizontal|vertical|inline-axis|block-axis|inherit",
      "box-pack": "start|center|end|justify",
      "box-shadow": "none|<shadow>#",
      "box-sizing": "content-box|border-box",
      "break-after": "auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region",
      "break-before": "auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region",
      "break-inside": "auto|avoid|avoid-page|avoid-column|avoid-region",
      "caption-side": "top|bottom|block-start|block-end|inline-start|inline-end",
      caret: "<'caret-color'>||<'caret-shape'>",
      "caret-color": "auto|<color>",
      "caret-shape": "auto|bar|block|underscore",
      clear: "none|left|right|both|inline-start|inline-end",
      clip: "<shape>|auto",
      "clip-path": "<clip-source>|[<basic-shape>||<geometry-box>]|none",
      "clip-rule": "nonzero|evenodd",
      color: "<color>",
      "color-interpolation-filters": "auto|sRGB|linearRGB",
      "color-scheme": "normal|[light|dark|<custom-ident>]+&&only?",
      "column-count": "<integer>|auto",
      "column-fill": "auto|balance|balance-all",
      "column-gap": "normal|<length-percentage>",
      "column-rule": "<'column-rule-width'>||<'column-rule-style'>||<'column-rule-color'>",
      "column-rule-color": "<color>",
      "column-rule-style": "<'border-style'>",
      "column-rule-width": "<'border-width'>",
      "column-span": "none|all",
      "column-width": "<length>|auto",
      columns: "<'column-width'>||<'column-count'>",
      contain: "none|strict|content|[[size||inline-size]||layout||style||paint]",
      "contain-intrinsic-size": "[auto? [none|<length>]]{1,2}",
      "contain-intrinsic-block-size": "auto? [none|<length>]",
      "contain-intrinsic-height": "auto? [none|<length>]",
      "contain-intrinsic-inline-size": "auto? [none|<length>]",
      "contain-intrinsic-width": "auto? [none|<length>]",
      container: "<'container-name'> [/ <'container-type'>]?",
      "container-name": "none|<custom-ident>+",
      "container-type": "normal||[size|inline-size]",
      content: "normal|none|[<content-replacement>|<content-list>] [/ [<string>|<counter>]+]?",
      "content-visibility": "visible|auto|hidden",
      "counter-increment": "[<counter-name> <integer>?]+|none",
      "counter-reset": "[<counter-name> <integer>?|<reversed-counter-name> <integer>?]+|none",
      "counter-set": "[<counter-name> <integer>?]+|none",
      cursor: "[[<url> [<x> <y>]? ,]* [auto|default|none|context-menu|help|pointer|progress|wait|cell|crosshair|text|vertical-text|alias|copy|move|no-drop|not-allowed|e-resize|n-resize|ne-resize|nw-resize|s-resize|se-resize|sw-resize|w-resize|ew-resize|ns-resize|nesw-resize|nwse-resize|col-resize|row-resize|all-scroll|zoom-in|zoom-out|grab|grabbing|hand|-webkit-grab|-webkit-grabbing|-webkit-zoom-in|-webkit-zoom-out|-moz-grab|-moz-grabbing|-moz-zoom-in|-moz-zoom-out]]",
      d: "none|path( <string> )",
      cx: "<length>|<percentage>",
      cy: "<length>|<percentage>",
      direction: "ltr|rtl",
      display: "[<display-outside>||<display-inside>]|<display-listitem>|<display-internal>|<display-box>|<display-legacy>|<-non-standard-display>",
      "dominant-baseline": "auto|use-script|no-change|reset-size|ideographic|alphabetic|hanging|mathematical|central|middle|text-after-edge|text-before-edge",
      "empty-cells": "show|hide",
      "field-sizing": "content|fixed",
      fill: "<paint>",
      "fill-opacity": "<number-zero-one>",
      "fill-rule": "nonzero|evenodd",
      filter: "none|<filter-function-list>|<-ms-filter-function-list>",
      flex: "none|[<'flex-grow'> <'flex-shrink'>?||<'flex-basis'>]",
      "flex-basis": "content|<'width'>",
      "flex-direction": "row|row-reverse|column|column-reverse",
      "flex-flow": "<'flex-direction'>||<'flex-wrap'>",
      "flex-grow": "<number>",
      "flex-shrink": "<number>",
      "flex-wrap": "nowrap|wrap|wrap-reverse",
      float: "left|right|none|inline-start|inline-end",
      font: "[[<'font-style'>||<font-variant-css2>||<'font-weight'>||<font-width-css3>]? <'font-size'> [/ <'line-height'>]? <'font-family'>#]|<system-family-name>|<-non-standard-font>",
      "font-family": "[<family-name>|<generic-family>]#",
      "font-feature-settings": "normal|<feature-tag-value>#",
      "font-kerning": "auto|normal|none",
      "font-language-override": "normal|<string>",
      "font-optical-sizing": "auto|none",
      "font-palette": "normal|light|dark|<palette-identifier>",
      "font-variation-settings": "normal|[<string> <number>]#",
      "font-size": "<absolute-size>|<relative-size>|<length-percentage>",
      "font-size-adjust": "none|[ex-height|cap-height|ch-width|ic-width|ic-height]? [from-font|<number>]",
      "font-smooth": "auto|never|always|<absolute-size>|<length>",
      "font-stretch": "<font-stretch-absolute>",
      "font-style": "normal|italic|oblique <angle>?",
      "font-synthesis": "none|[weight||style||small-caps||position]",
      "font-synthesis-position": "auto|none",
      "font-synthesis-small-caps": "auto|none",
      "font-synthesis-style": "auto|none",
      "font-synthesis-weight": "auto|none",
      "font-variant": "normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>||stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )||[small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps]||<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero||<east-asian-variant-values>||<east-asian-width-values>||ruby]",
      "font-variant-alternates": "normal|[stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )]",
      "font-variant-caps": "normal|small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps",
      "font-variant-east-asian": "normal|[<east-asian-variant-values>||<east-asian-width-values>||ruby]",
      "font-variant-emoji": "normal|text|emoji|unicode",
      "font-variant-ligatures": "normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>]",
      "font-variant-numeric": "normal|[<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero]",
      "font-variant-position": "normal|sub|super",
      "font-weight": "<font-weight-absolute>|bolder|lighter",
      "forced-color-adjust": "auto|none",
      gap: "<'row-gap'> <'column-gap'>?",
      grid: "<'grid-template'>|<'grid-template-rows'> / [auto-flow&&dense?] <'grid-auto-columns'>?|[auto-flow&&dense?] <'grid-auto-rows'>? / <'grid-template-columns'>",
      "grid-area": "<grid-line> [/ <grid-line>]{0,3}",
      "grid-auto-columns": "<track-size>+",
      "grid-auto-flow": "[row|column]||dense",
      "grid-auto-rows": "<track-size>+",
      "grid-column": "<grid-line> [/ <grid-line>]?",
      "grid-column-end": "<grid-line>",
      "grid-column-gap": "<length-percentage>",
      "grid-column-start": "<grid-line>",
      "grid-gap": "<'grid-row-gap'> <'grid-column-gap'>?",
      "grid-row": "<grid-line> [/ <grid-line>]?",
      "grid-row-end": "<grid-line>",
      "grid-row-gap": "<length-percentage>",
      "grid-row-start": "<grid-line>",
      "grid-template": "none|[<'grid-template-rows'> / <'grid-template-columns'>]|[<line-names>? <string> <track-size>? <line-names>?]+ [/ <explicit-track-list>]?",
      "grid-template-areas": "none|<string>+",
      "grid-template-columns": "none|<track-list>|<auto-track-list>|subgrid <line-name-list>?",
      "grid-template-rows": "none|<track-list>|<auto-track-list>|subgrid <line-name-list>?",
      "hanging-punctuation": "none|[first||[force-end|allow-end]||last]",
      height: "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|stretch|<-non-standard-size>",
      "hyphenate-character": "auto|<string>",
      "hyphenate-limit-chars": "[auto|<integer>]{1,3}",
      hyphens: "none|manual|auto",
      "image-orientation": "from-image|<angle>|[<angle>? flip]",
      "image-rendering": "auto|crisp-edges|pixelated|optimizeSpeed|optimizeQuality|<-non-standard-image-rendering>",
      "image-resolution": "[from-image||<resolution>]&&snap?",
      "ime-mode": "auto|normal|active|inactive|disabled",
      "initial-letter": "normal|[<number> <integer>?]",
      "initial-letter-align": "[auto|alphabetic|hanging|ideographic]",
      "inline-size": "<'width'>",
      "input-security": "auto|none",
      inset: "<'top'>{1,4}",
      "inset-area": "none|<inset-area>",
      "inset-block": "<'top'>{1,2}",
      "inset-block-end": "<'top'>",
      "inset-block-start": "<'top'>",
      "inset-inline": "<'top'>{1,2}",
      "inset-inline-end": "<'top'>",
      "inset-inline-start": "<'top'>",
      isolation: "auto|isolate",
      "justify-content": "normal|<content-distribution>|<overflow-position>? [<content-position>|left|right]",
      "justify-items": "normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]|legacy|legacy&&[left|right|center]",
      "justify-self": "auto|normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]",
      "justify-tracks": "[normal|<content-distribution>|<overflow-position>? [<content-position>|left|right]]#",
      left: "<length>|<percentage>|auto",
      "letter-spacing": "normal|<length-percentage>",
      "line-break": "auto|loose|normal|strict|anywhere",
      "line-clamp": "none|<integer>",
      "line-height": "normal|<number>|<length>|<percentage>",
      "line-height-step": "<length>",
      "list-style": "<'list-style-type'>||<'list-style-position'>||<'list-style-image'>",
      "list-style-image": "<image>|none",
      "list-style-position": "inside|outside",
      "list-style-type": "<counter-style>|<string>|none",
      margin: "[<length>|<percentage>|auto]{1,4}",
      "margin-block": "<'margin-left'>{1,2}",
      "margin-block-end": "<'margin-left'>",
      "margin-block-start": "<'margin-left'>",
      "margin-bottom": "<length>|<percentage>|auto",
      "margin-inline": "<'margin-left'>{1,2}",
      "margin-inline-end": "<'margin-left'>",
      "margin-inline-start": "<'margin-left'>",
      "margin-left": "<length>|<percentage>|auto",
      "margin-right": "<length>|<percentage>|auto",
      "margin-top": "<length>|<percentage>|auto",
      "margin-trim": "none|in-flow|all",
      marker: "none|<url>",
      "marker-end": "none|<url>",
      "marker-mid": "none|<url>",
      "marker-start": "none|<url>",
      mask: "<mask-layer>#",
      "mask-border": "<'mask-border-source'>||<'mask-border-slice'> [/ <'mask-border-width'>? [/ <'mask-border-outset'>]?]?||<'mask-border-repeat'>||<'mask-border-mode'>",
      "mask-border-mode": "luminance|alpha",
      "mask-border-outset": "[<length>|<number>]{1,4}",
      "mask-border-repeat": "[stretch|repeat|round|space]{1,2}",
      "mask-border-slice": "<number-percentage>{1,4} fill?",
      "mask-border-source": "none|<image>",
      "mask-border-width": "[<length-percentage>|<number>|auto]{1,4}",
      "mask-clip": "[<geometry-box>|no-clip]#",
      "mask-composite": "<compositing-operator>#",
      "mask-image": "<mask-reference>#",
      "mask-mode": "<masking-mode>#",
      "mask-origin": "<geometry-box>#",
      "mask-position": "<position>#",
      "mask-repeat": "<repeat-style>#",
      "mask-size": "<bg-size>#",
      "mask-type": "luminance|alpha",
      "masonry-auto-flow": "[pack|next]||[definite-first|ordered]",
      "math-depth": "auto-add|add( <integer> )|<integer>",
      "math-shift": "normal|compact",
      "math-style": "normal|compact",
      "max-block-size": "<'max-width'>",
      "max-height": "none|<length-percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|stretch|<-non-standard-size>",
      "max-inline-size": "<'max-width'>",
      "max-lines": "none|<integer>",
      "max-width": "none|<length-percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|stretch|<-non-standard-size>",
      "min-block-size": "<'min-width'>",
      "min-height": "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|stretch|<-non-standard-size>",
      "min-inline-size": "<'min-width'>",
      "min-width": "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|stretch|<-non-standard-size>",
      "mix-blend-mode": "<blend-mode>|plus-lighter",
      "object-fit": "fill|contain|cover|none|scale-down",
      "object-position": "<position>",
      offset: "[<'offset-position'>? [<'offset-path'> [<'offset-distance'>||<'offset-rotate'>]?]?]! [/ <'offset-anchor'>]?",
      "offset-anchor": "auto|<position>",
      "offset-distance": "<length-percentage>",
      "offset-path": "none|<offset-path>||<coord-box>",
      "offset-position": "normal|auto|<position>",
      "offset-rotate": "[auto|reverse]||<angle>",
      opacity: "<alpha-value>",
      order: "<integer>",
      orphans: "<integer>",
      outline: "[<'outline-width'>||<'outline-style'>||<'outline-color'>]",
      "outline-color": "auto|<color>",
      "outline-offset": "<length>",
      "outline-style": "auto|<'border-style'>",
      "outline-width": "<line-width>",
      overflow: "[visible|hidden|clip|scroll|auto]{1,2}|<-non-standard-overflow>",
      "overflow-anchor": "auto|none",
      "overflow-block": "visible|hidden|clip|scroll|auto",
      "overflow-clip-box": "padding-box|content-box",
      "overflow-clip-margin": "<visual-box>||<length [0,\u221E]>",
      "overflow-inline": "visible|hidden|clip|scroll|auto",
      "overflow-wrap": "normal|break-word|anywhere",
      "overflow-x": "visible|hidden|clip|scroll|auto",
      "overflow-y": "visible|hidden|clip|scroll|auto",
      overlay: "none|auto",
      "overscroll-behavior": "[contain|none|auto]{1,2}",
      "overscroll-behavior-block": "contain|none|auto",
      "overscroll-behavior-inline": "contain|none|auto",
      "overscroll-behavior-x": "contain|none|auto",
      "overscroll-behavior-y": "contain|none|auto",
      padding: "[<length>|<percentage>]{1,4}",
      "padding-block": "<'padding-left'>{1,2}",
      "padding-block-end": "<'padding-left'>",
      "padding-block-start": "<'padding-left'>",
      "padding-bottom": "<length>|<percentage>",
      "padding-inline": "<'padding-left'>{1,2}",
      "padding-inline-end": "<'padding-left'>",
      "padding-inline-start": "<'padding-left'>",
      "padding-left": "<length>|<percentage>",
      "padding-right": "<length>|<percentage>",
      "padding-top": "<length>|<percentage>",
      page: "auto|<custom-ident>",
      "page-break-after": "auto|always|avoid|left|right|recto|verso",
      "page-break-before": "auto|always|avoid|left|right|recto|verso",
      "page-break-inside": "auto|avoid",
      "paint-order": "normal|[fill||stroke||markers]",
      perspective: "none|<length>",
      "perspective-origin": "<position>",
      "place-content": "<'align-content'> <'justify-content'>?",
      "place-items": "<'align-items'> <'justify-items'>?",
      "place-self": "<'align-self'> <'justify-self'>?",
      "pointer-events": "auto|none|visiblePainted|visibleFill|visibleStroke|visible|painted|fill|stroke|all|inherit",
      position: "static|relative|absolute|sticky|fixed|-webkit-sticky",
      "position-anchor": "<anchor-element>",
      "position-try": "<'position-try-order'>? <'position-try-fallbacks'>",
      "position-try-fallbacks": "none|[[<dashed-ident>||<try-tactic>]|<'position-area'>]#",
      "position-try-order": "normal|<try-size>",
      "position-visibility": "always|[anchors-valid||anchors-visible||no-overflow]",
      "print-color-adjust": "economy|exact",
      quotes: "none|auto|[<string> <string>]+",
      r: "<length>|<percentage>",
      resize: "none|both|horizontal|vertical|block|inline",
      right: "<length>|<percentage>|auto",
      rotate: "none|<angle>|[x|y|z|<number>{3}]&&<angle>",
      "row-gap": "normal|<length-percentage>",
      "ruby-align": "start|center|space-between|space-around",
      "ruby-merge": "separate|collapse|auto",
      "ruby-position": "[alternate||[over|under]]|inter-character",
      rx: "<length>|<percentage>",
      ry: "<length>|<percentage>",
      scale: "none|<number>{1,3}",
      "scrollbar-color": "auto|<color>{2}",
      "scrollbar-gutter": "auto|stable&&both-edges?",
      "scrollbar-width": "auto|thin|none",
      "scroll-behavior": "auto|smooth",
      "scroll-margin": "<length>{1,4}",
      "scroll-margin-block": "<length>{1,2}",
      "scroll-margin-block-start": "<length>",
      "scroll-margin-block-end": "<length>",
      "scroll-margin-bottom": "<length>",
      "scroll-margin-inline": "<length>{1,2}",
      "scroll-margin-inline-start": "<length>",
      "scroll-margin-inline-end": "<length>",
      "scroll-margin-left": "<length>",
      "scroll-margin-right": "<length>",
      "scroll-margin-top": "<length>",
      "scroll-padding": "[auto|<length-percentage>]{1,4}",
      "scroll-padding-block": "[auto|<length-percentage>]{1,2}",
      "scroll-padding-block-start": "auto|<length-percentage>",
      "scroll-padding-block-end": "auto|<length-percentage>",
      "scroll-padding-bottom": "auto|<length-percentage>",
      "scroll-padding-inline": "[auto|<length-percentage>]{1,2}",
      "scroll-padding-inline-start": "auto|<length-percentage>",
      "scroll-padding-inline-end": "auto|<length-percentage>",
      "scroll-padding-left": "auto|<length-percentage>",
      "scroll-padding-right": "auto|<length-percentage>",
      "scroll-padding-top": "auto|<length-percentage>",
      "scroll-snap-align": "[none|start|end|center]{1,2}",
      "scroll-snap-coordinate": "none|<position>#",
      "scroll-snap-destination": "<position>",
      "scroll-snap-points-x": "none|repeat( <length-percentage> )",
      "scroll-snap-points-y": "none|repeat( <length-percentage> )",
      "scroll-snap-stop": "normal|always",
      "scroll-snap-type": "none|[x|y|block|inline|both] [mandatory|proximity]?",
      "scroll-snap-type-x": "none|mandatory|proximity",
      "scroll-snap-type-y": "none|mandatory|proximity",
      "scroll-timeline": "[<'scroll-timeline-name'>||<'scroll-timeline-axis'>]#",
      "scroll-timeline-axis": "[block|inline|x|y]#",
      "scroll-timeline-name": "[none|<dashed-ident>]#",
      "shape-image-threshold": "<alpha-value>",
      "shape-margin": "<length-percentage>",
      "shape-outside": "none|[<shape-box>||<basic-shape>]|<image>",
      "shape-rendering": "auto|optimizeSpeed|crispEdges|geometricPrecision",
      "tab-size": "<integer>|<length>",
      "table-layout": "auto|fixed",
      "text-align": "start|end|left|right|center|justify|match-parent",
      "text-align-last": "auto|start|end|left|right|center|justify",
      "text-anchor": "start|middle|end",
      "text-combine-upright": "none|all|[digits <integer>?]",
      "text-decoration": "<'text-decoration-line'>||<'text-decoration-style'>||<'text-decoration-color'>||<'text-decoration-thickness'>",
      "text-decoration-color": "<color>",
      "text-decoration-line": "none|[underline||overline||line-through||blink]|spelling-error|grammar-error",
      "text-decoration-skip": "none|[objects||[spaces|[leading-spaces||trailing-spaces]]||edges||box-decoration]",
      "text-decoration-skip-ink": "auto|all|none",
      "text-decoration-style": "solid|double|dotted|dashed|wavy",
      "text-decoration-thickness": "auto|from-font|<length>|<percentage>",
      "text-emphasis": "<'text-emphasis-style'>||<'text-emphasis-color'>",
      "text-emphasis-color": "<color>",
      "text-emphasis-position": "[over|under]&&[right|left]",
      "text-emphasis-style": "none|[[filled|open]||[dot|circle|double-circle|triangle|sesame]]|<string>",
      "text-indent": "<length-percentage>&&hanging?&&each-line?",
      "text-justify": "auto|inter-character|inter-word|none",
      "text-orientation": "mixed|upright|sideways",
      "text-overflow": "[clip|ellipsis|<string>]{1,2}",
      "text-rendering": "auto|optimizeSpeed|optimizeLegibility|geometricPrecision",
      "text-shadow": "none|<shadow-t>#",
      "text-size-adjust": "none|auto|<percentage>",
      "text-spacing-trim": "space-all|normal|space-first|trim-start|trim-both|trim-all|auto",
      "text-transform": "none|capitalize|uppercase|lowercase|full-width|full-size-kana",
      "text-underline-offset": "auto|<length>|<percentage>",
      "text-underline-position": "auto|from-font|[under||[left|right]]",
      "text-wrap": "wrap|nowrap|balance|stable|pretty",
      "text-wrap-mode": "auto|wrap|nowrap",
      "text-wrap-style": "auto|balance|stable|pretty",
      "timeline-scope": "none|<dashed-ident>#",
      top: "<length>|<percentage>|auto",
      "touch-action": "auto|none|[[pan-x|pan-left|pan-right]||[pan-y|pan-up|pan-down]||pinch-zoom]|manipulation",
      transform: "none|<transform-list>",
      "transform-box": "content-box|border-box|fill-box|stroke-box|view-box",
      "transform-origin": "[<length-percentage>|left|center|right|top|bottom]|[[<length-percentage>|left|center|right]&&[<length-percentage>|top|center|bottom]] <length>?",
      "transform-style": "flat|preserve-3d",
      transition: "<single-transition>#",
      "transition-behavior": "<transition-behavior-value>#",
      "transition-delay": "<time>#",
      "transition-duration": "<time>#",
      "transition-property": "none|<single-transition-property>#",
      "transition-timing-function": "<easing-function>#",
      translate: "none|<length-percentage> [<length-percentage> <length>?]?",
      "unicode-bidi": "normal|embed|isolate|bidi-override|isolate-override|plaintext|-moz-isolate|-moz-isolate-override|-moz-plaintext|-webkit-isolate|-webkit-isolate-override|-webkit-plaintext",
      "user-select": "auto|text|none|contain|all",
      "vector-effect": "none|non-scaling-stroke|non-scaling-size|non-rotation|fixed-position",
      "vertical-align": "baseline|sub|super|text-top|text-bottom|middle|top|bottom|<percentage>|<length>",
      "view-timeline": "[<'view-timeline-name'> <'view-timeline-axis'>?]#",
      "view-timeline-axis": "[block|inline|x|y]#",
      "view-timeline-inset": "[[auto|<length-percentage>]{1,2}]#",
      "view-timeline-name": "none|<dashed-ident>#",
      "view-transition-name": "none|<custom-ident>",
      visibility: "visible|hidden|collapse",
      "white-space": "normal|pre|nowrap|pre-wrap|pre-line|break-spaces|[<'white-space-collapse'>||<'text-wrap'>||<'white-space-trim'>]",
      "white-space-collapse": "collapse|discard|preserve|preserve-breaks|preserve-spaces|break-spaces",
      widows: "<integer>",
      width: "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|stretch|<-non-standard-size>",
      "will-change": "auto|<animateable-feature>#",
      "word-break": "normal|break-all|keep-all|break-word|auto-phrase",
      "word-spacing": "normal|<length>",
      "word-wrap": "normal|break-word",
      "writing-mode": "horizontal-tb|vertical-rl|vertical-lr|sideways-rl|sideways-lr|<svg-writing-mode>",
      x: "<length>|<percentage>",
      y: "<length>|<percentage>",
      "z-index": "auto|<integer>",
      zoom: "normal|reset|<number>|<percentage>",
      "-moz-background-clip": "padding|border",
      "-moz-border-radius-bottomleft": "<'border-bottom-left-radius'>",
      "-moz-border-radius-bottomright": "<'border-bottom-right-radius'>",
      "-moz-border-radius-topleft": "<'border-top-left-radius'>",
      "-moz-border-radius-topright": "<'border-bottom-right-radius'>",
      "-moz-control-character-visibility": "visible|hidden",
      "-moz-osx-font-smoothing": "auto|grayscale",
      "-moz-user-select": "none|text|all|-moz-none",
      "-ms-flex-align": "start|end|center|baseline|stretch",
      "-ms-flex-item-align": "auto|start|end|center|baseline|stretch",
      "-ms-flex-line-pack": "start|end|center|justify|distribute|stretch",
      "-ms-flex-negative": "<'flex-shrink'>",
      "-ms-flex-pack": "start|end|center|justify|distribute",
      "-ms-flex-order": "<integer>",
      "-ms-flex-positive": "<'flex-grow'>",
      "-ms-flex-preferred-size": "<'flex-basis'>",
      "-ms-interpolation-mode": "nearest-neighbor|bicubic",
      "-ms-grid-column-align": "start|end|center|stretch",
      "-ms-grid-row-align": "start|end|center|stretch",
      "-ms-hyphenate-limit-last": "none|always|column|page|spread",
      "-webkit-background-clip": "[<box>|border|padding|content|text]#",
      "-webkit-column-break-after": "always|auto|avoid",
      "-webkit-column-break-before": "always|auto|avoid",
      "-webkit-column-break-inside": "always|auto|avoid",
      "-webkit-font-smoothing": "auto|none|antialiased|subpixel-antialiased",
      "-webkit-mask-box-image": "[<url>|<gradient>|none] [<length-percentage>{4} <-webkit-mask-box-repeat>{2}]?",
      "-webkit-print-color-adjust": "economy|exact",
      "-webkit-text-security": "none|circle|disc|square",
      "-webkit-user-drag": "none|element|auto",
      "-webkit-user-select": "auto|none|text|all",
      "alignment-baseline": "auto|baseline|before-edge|text-before-edge|middle|central|after-edge|text-after-edge|ideographic|alphabetic|hanging|mathematical",
      "baseline-shift": "baseline|sub|super|<svg-length>",
      behavior: "<url>+",
      cue: "<'cue-before'> <'cue-after'>?",
      "cue-after": "<url> <decibel>?|none",
      "cue-before": "<url> <decibel>?|none",
      "glyph-orientation-horizontal": "<angle>",
      "glyph-orientation-vertical": "<angle>",
      kerning: "auto|<svg-length>",
      pause: "<'pause-before'> <'pause-after'>?",
      "pause-after": "<time>|none|x-weak|weak|medium|strong|x-strong",
      "pause-before": "<time>|none|x-weak|weak|medium|strong|x-strong",
      rest: "<'rest-before'> <'rest-after'>?",
      "rest-after": "<time>|none|x-weak|weak|medium|strong|x-strong",
      "rest-before": "<time>|none|x-weak|weak|medium|strong|x-strong",
      src: "[<url> [format( <string># )]?|local( <family-name> )]#",
      speak: "auto|never|always",
      "speak-as": "normal|spell-out||digits||[literal-punctuation|no-punctuation]",
      stroke: "<paint>",
      "stroke-dasharray": "none|[<svg-length>+]#",
      "stroke-dashoffset": "<svg-length>",
      "stroke-linecap": "butt|round|square",
      "stroke-linejoin": "miter|round|bevel",
      "stroke-miterlimit": "<number-one-or-greater>",
      "stroke-opacity": "<number-zero-one>",
      "stroke-width": "<svg-length>",
      "unicode-range": "<urange>#",
      "voice-balance": "<number>|left|center|right|leftwards|rightwards",
      "voice-duration": "auto|<time>",
      "voice-family": "[[<family-name>|<generic-voice>] ,]* [<family-name>|<generic-voice>]|preserve",
      "voice-pitch": "<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]",
      "voice-range": "<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]",
      "voice-rate": "[normal|x-slow|slow|medium|fast|x-fast]||<percentage>",
      "voice-stress": "normal|strong|moderate|none|reduced",
      "voice-volume": "silent|[[x-soft|soft|medium|loud|x-loud]||<decibel>]",
      "white-space-trim": "none|discard-before||discard-after||discard-inner",
      "position-area": "none|<position-area>"
    },
    atrules: {
      charset: {
        prelude: "<string>",
        descriptors: null
      },
      "counter-style": {
        prelude: "<counter-style-name>",
        descriptors: {
          "additive-symbols": "[<integer>&&<symbol>]#",
          fallback: "<counter-style-name>",
          negative: "<symbol> <symbol>?",
          pad: "<integer>&&<symbol>",
          prefix: "<symbol>",
          range: "[[<integer>|infinite]{2}]#|auto",
          "speak-as": "auto|bullets|numbers|words|spell-out|<counter-style-name>",
          suffix: "<symbol>",
          symbols: "<symbol>+",
          system: "cyclic|numeric|alphabetic|symbolic|additive|[fixed <integer>?]|[extends <counter-style-name>]"
        }
      },
      document: {
        prelude: "[<url>|url-prefix( <string> )|domain( <string> )|media-document( <string> )|regexp( <string> )]#",
        descriptors: null
      },
      "font-palette-values": {
        prelude: "<dashed-ident>",
        descriptors: {
          "base-palette": "light|dark|<integer [0,\u221E]>",
          "font-family": "<family-name>#",
          "override-colors": "[<integer [0,\u221E]> <absolute-color-base>]#"
        }
      },
      "font-face": {
        prelude: null,
        descriptors: {
          "ascent-override": "normal|<percentage>",
          "descent-override": "normal|<percentage>",
          "font-display": "[auto|block|swap|fallback|optional]",
          "font-family": "<family-name>",
          "font-feature-settings": "normal|<feature-tag-value>#",
          "font-variation-settings": "normal|[<string> <number>]#",
          "font-stretch": "<font-stretch-absolute>{1,2}",
          "font-style": "normal|italic|oblique <angle>{0,2}",
          "font-weight": "<font-weight-absolute>{1,2}",
          "line-gap-override": "normal|<percentage>",
          "size-adjust": "<percentage>",
          src: "[<url> [format( <string># )]?|local( <family-name> )]#",
          "unicode-range": "<urange>#"
        }
      },
      "font-feature-values": {
        prelude: "<family-name>#",
        descriptors: null
      },
      import: {
        prelude: "[<string>|<url>] [layer|layer( <layer-name> )]? [supports( [<supports-condition>|<declaration>] )]? <media-query-list>?",
        descriptors: null
      },
      keyframes: {
        prelude: "<keyframes-name>",
        descriptors: null
      },
      layer: {
        prelude: "[<layer-name>#|<layer-name>?]",
        descriptors: null
      },
      media: {
        prelude: "<media-query-list>",
        descriptors: null
      },
      namespace: {
        prelude: "<namespace-prefix>? [<string>|<url>]",
        descriptors: null
      },
      page: {
        prelude: "<page-selector-list>",
        descriptors: {
          bleed: "auto|<length>",
          marks: "none|[crop||cross]",
          "page-orientation": "upright|rotate-left|rotate-right",
          size: "<length>{1,2}|auto|[<page-size>||[portrait|landscape]]"
        }
      },
      "position-try": {
        prelude: "<dashed-ident>",
        descriptors: {
          top: "<'top'>",
          left: "<'left'>",
          bottom: "<'bottom'>",
          right: "<'right'>",
          "inset-block-start": "<'inset-block-start'>",
          "inset-block-end": "<'inset-block-end'>",
          "inset-inline-start": "<'inset-inline-start'>",
          "inset-inline-end": "<'inset-inline-end'>",
          "inset-block": "<'inset-block'>",
          "inset-inline": "<'inset-inline'>",
          inset: "<'inset'>",
          "margin-top": "<'margin-top'>",
          "margin-left": "<'margin-left'>",
          "margin-bottom": "<'margin-bottom'>",
          "margin-right": "<'margin-right'>",
          "margin-block-start": "<'margin-block-start'>",
          "margin-block-end": "<'margin-block-end'>",
          "margin-inline-start": "<'margin-inline-start'>",
          "margin-inline-end": "<'margin-inline-end'>",
          margin: "<'margin'>",
          "margin-block": "<'margin-block'>",
          "margin-inline": "<'margin-inline'>",
          width: "<'width'>",
          height: "<'height'>",
          "min-width": "<'min-width'>",
          "min-height": "<'min-height'>",
          "max-width": "<'max-width'>",
          "max-height": "<'max-height'>",
          "block-size": "<'block-size'>",
          "inline-size": "<'inline-size'>",
          "min-block-size": "<'min-block-size'>",
          "min-inline-size": "<'min-inline-size'>",
          "max-block-size": "<'max-block-size'>",
          "max-inline-size": "<'max-inline-size'>",
          "align-self": "<'align-self'>|anchor-center",
          "justify-self": "<'justify-self'>|anchor-center"
        }
      },
      property: {
        prelude: "<custom-property-name>",
        descriptors: {
          syntax: "<string>",
          inherits: "true|false",
          "initial-value": "<declaration-value>?"
        }
      },
      scope: {
        prelude: "[( <scope-start> )]? [to ( <scope-end> )]?",
        descriptors: null
      },
      "starting-style": {
        prelude: null,
        descriptors: null
      },
      supports: {
        prelude: "<supports-condition>",
        descriptors: null
      },
      container: {
        prelude: "[<container-name>]? <container-condition>",
        descriptors: null
      },
      nest: {
        prelude: "<complex-selector-list>",
        descriptors: null
      }
    }
  };
  var Ee = 43;
  var he = 45;
  var Kt = 110;
  var Ge = true;
  var Zc = false;
  function Yt(e2, t2) {
    let n2 = this.tokenStart + e2;
    const r2 = this.charCodeAt(n2);
    for ((r2 === Ee || r2 === he) && (t2 && this.error("Number sign is not allowed"), n2++); n2 < this.tokenEnd; n2++)
      Q(this.charCodeAt(n2)) || this.error("Integer is expected", n2);
  }
  function st(e2) {
    return Yt.call(this, 0, e2);
  }
  function Me(e2, t2) {
    if (!this.cmpChar(this.tokenStart + e2, t2)) {
      let n2 = "";
      switch (t2) {
        case Kt:
          n2 = "N is expected";
          break;
        case he:
          n2 = "HyphenMinus is expected";
          break;
      }
      this.error(n2, this.tokenStart + e2);
    }
  }
  function jn() {
    let e2 = 0, t2 = 0, n2 = this.tokenType;
    for (; n2 === W || n2 === X; )
      n2 = this.lookupType(++e2);
    if (n2 !== L)
      if (this.isDelim(Ee, e2) || this.isDelim(he, e2)) {
        t2 = this.isDelim(Ee, e2) ? Ee : he;
        do
          n2 = this.lookupType(++e2);
        while (n2 === W || n2 === X);
        n2 !== L && (this.skip(e2), st.call(this, Ge));
      } else
        return null;
    return e2 > 0 && this.skip(e2), t2 === 0 && (n2 = this.charCodeAt(this.tokenStart), n2 !== Ee && n2 !== he && this.error("Number sign is expected")), st.call(this, t2 !== 0), t2 === he ? "-" + this.consume(L) : this.consume(L);
  }
  var Jc = "AnPlusB";
  var eu = {
    a: [String, null],
    b: [String, null]
  };
  function Ko() {
    const e2 = this.tokenStart;
    let t2 = null, n2 = null;
    if (this.tokenType === L)
      st.call(this, Zc), n2 = this.consume(L);
    else if (this.tokenType === y && this.cmpChar(this.tokenStart, he))
      switch (t2 = "-1", Me.call(this, 1, Kt), this.tokenEnd - this.tokenStart) {
        case 2:
          this.next(), n2 = jn.call(this);
          break;
        case 3:
          Me.call(this, 2, he), this.next(), this.skipSC(), st.call(this, Ge), n2 = "-" + this.consume(L);
          break;
        default:
          Me.call(this, 2, he), Yt.call(this, 3, Ge), this.next(), n2 = this.substrToCursor(e2 + 2);
      }
    else if (this.tokenType === y || this.isDelim(Ee) && this.lookupType(1) === y) {
      let r2 = 0;
      switch (t2 = "1", this.isDelim(Ee) && (r2 = 1, this.next()), Me.call(this, 0, Kt), this.tokenEnd - this.tokenStart) {
        case 1:
          this.next(), n2 = jn.call(this);
          break;
        case 2:
          Me.call(this, 1, he), this.next(), this.skipSC(), st.call(this, Ge), n2 = "-" + this.consume(L);
          break;
        default:
          Me.call(this, 1, he), Yt.call(this, 2, Ge), this.next(), n2 = this.substrToCursor(e2 + r2 + 1);
      }
    } else if (this.tokenType === z) {
      const r2 = this.charCodeAt(this.tokenStart), i2 = r2 === Ee || r2 === he;
      let o2 = this.tokenStart + i2;
      for (; o2 < this.tokenEnd && Q(this.charCodeAt(o2)); o2++)
        ;
      o2 === this.tokenStart + i2 && this.error("Integer is expected", this.tokenStart + i2), Me.call(this, o2 - this.tokenStart, Kt), t2 = this.substring(e2, o2), o2 + 1 === this.tokenEnd ? (this.next(), n2 = jn.call(this)) : (Me.call(this, o2 - this.tokenStart + 1, he), o2 + 2 === this.tokenEnd ? (this.next(), this.skipSC(), st.call(this, Ge), n2 = "-" + this.consume(L)) : (Yt.call(this, o2 - this.tokenStart + 2, Ge), this.next(), n2 = this.substrToCursor(o2 + 1)));
    } else
      this.error();
    return t2 !== null && t2.charCodeAt(0) === Ee && (t2 = t2.substr(1)), n2 !== null && n2.charCodeAt(0) === Ee && (n2 = n2.substr(1)), {
      type: "AnPlusB",
      loc: this.getLocation(e2, this.tokenStart),
      a: t2,
      b: n2
    };
  }
  function tu(e2) {
    if (e2.a) {
      const t2 = e2.a === "+1" && "n" || e2.a === "1" && "n" || e2.a === "-1" && "-n" || e2.a + "n";
      if (e2.b) {
        const n2 = e2.b[0] === "-" || e2.b[0] === "+" ? e2.b : "+" + e2.b;
        this.tokenize(t2 + n2);
      } else
        this.tokenize(t2);
    } else
      this.tokenize(e2.b);
  }
  var nu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: tu,
    name: Jc,
    parse: Ko,
    structure: eu
  }, Symbol.toStringTag, { value: "Module" }));
  function Ti() {
    return this.Raw(this.consumeUntilLeftCurlyBracketOrSemicolon, true);
  }
  function ru() {
    for (let e2 = 1, t2; t2 = this.lookupType(e2); e2++) {
      if (t2 === ue)
        return true;
      if (t2 === V || t2 === G)
        return false;
    }
    return false;
  }
  var iu = "Atrule";
  var ou = "atrule";
  var su = {
    name: String,
    prelude: ["AtrulePrelude", "Raw", null],
    block: ["Block", null]
  };
  function Yo(e2 = false) {
    const t2 = this.tokenStart;
    let n2, r2, i2 = null, o2 = null;
    switch (this.eat(G), n2 = this.substrToCursor(t2 + 1), r2 = n2.toLowerCase(), this.skipSC(), this.eof === false && this.tokenType !== V && this.tokenType !== re && (this.parseAtrulePrelude ? i2 = this.parseWithFallback(this.AtrulePrelude.bind(this, n2, e2), Ti) : i2 = Ti.call(this, this.tokenIndex), this.skipSC()), this.tokenType) {
      case re:
        this.next();
        break;
      case V:
        this.eat(V), hasOwnProperty.call(this.atrule, r2) && typeof this.atrule[r2].block == "function" ? o2 = this.atrule[r2].block.call(this, e2) : o2 = this.Block(ru.call(this)), this.eof || this.eat(ue);
        break;
    }
    return {
      type: "Atrule",
      loc: this.getLocation(t2, this.tokenStart),
      name: n2,
      prelude: i2,
      block: o2
    };
  }
  function au(e2) {
    this.token(G, "@" + e2.name), e2.prelude !== null && this.node(e2.prelude), e2.block ? (this.token(V, "{"), this.node(e2.block), this.token(ue, "}")) : this.token(re, ";");
  }
  var lu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: au,
    name: iu,
    parse: Yo,
    structure: su,
    walkContext: ou
  }, Symbol.toStringTag, { value: "Module" }));
  var cu = "AtrulePrelude";
  var uu = "atrulePrelude";
  var hu = {
    children: [[]]
  };
  function Qo(e2) {
    let t2 = null;
    return e2 !== null && (e2 = e2.toLowerCase()), this.skipSC(), hasOwnProperty.call(this.atrule, e2) && typeof this.atrule[e2].prelude == "function" ? t2 = this.atrule[e2].prelude.call(this) : t2 = this.readSequence(this.scope.AtrulePrelude), this.skipSC(), this.eof !== true && this.tokenType !== V && this.tokenType !== re && this.error("Semicolon or block is expected"), {
      type: "AtrulePrelude",
      loc: this.getLocationFromList(t2),
      children: t2
    };
  }
  function fu(e2) {
    this.children(e2);
  }
  var pu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: fu,
    name: cu,
    parse: Qo,
    structure: hu,
    walkContext: uu
  }, Symbol.toStringTag, { value: "Module" }));
  var du = 36;
  var Xo = 42;
  var Qt = 61;
  var mu = 94;
  var rr = 124;
  var gu = 126;
  function bu() {
    this.eof && this.error("Unexpected end of input");
    const e2 = this.tokenStart;
    let t2 = false;
    return this.isDelim(Xo) ? (t2 = true, this.next()) : this.isDelim(rr) || this.eat(y), this.isDelim(rr) ? this.charCodeAt(this.tokenStart + 1) !== Qt ? (this.next(), this.eat(y)) : t2 && this.error("Identifier is expected", this.tokenEnd) : t2 && this.error("Vertical line is expected"), {
      type: "Identifier",
      loc: this.getLocation(e2, this.tokenStart),
      name: this.substrToCursor(e2)
    };
  }
  function yu() {
    const e2 = this.tokenStart, t2 = this.charCodeAt(e2);
    return t2 !== Qt && // =
    t2 !== gu && // ~=
    t2 !== mu && // ^=
    t2 !== du && // $=
    t2 !== Xo && // *=
    t2 !== rr && this.error("Attribute selector (=, ~=, ^=, $=, *=, |=) is expected"), this.next(), t2 !== Qt && (this.isDelim(Qt) || this.error("Equal sign is expected"), this.next()), this.substrToCursor(e2);
  }
  var ku = "AttributeSelector";
  var xu = {
    name: "Identifier",
    matcher: [String, null],
    value: ["String", "Identifier", null],
    flags: [String, null]
  };
  function Zo() {
    const e2 = this.tokenStart;
    let t2, n2 = null, r2 = null, i2 = null;
    return this.eat(pe), this.skipSC(), t2 = bu.call(this), this.skipSC(), this.tokenType !== Se && (this.tokenType !== y && (n2 = yu.call(this), this.skipSC(), r2 = this.tokenType === Te ? this.String() : this.Identifier(), this.skipSC()), this.tokenType === y && (i2 = this.consume(y), this.skipSC())), this.eat(Se), {
      type: "AttributeSelector",
      loc: this.getLocation(e2, this.tokenStart),
      name: t2,
      matcher: n2,
      value: r2,
      flags: i2
    };
  }
  function wu(e2) {
    this.token(I, "["), this.node(e2.name), e2.matcher !== null && (this.tokenize(e2.matcher), this.node(e2.value)), e2.flags !== null && this.token(y, e2.flags), this.token(I, "]");
  }
  var vu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: wu,
    name: ku,
    parse: Zo,
    structure: xu
  }, Symbol.toStringTag, { value: "Module" }));
  var Su = 38;
  function Jo() {
    return this.Raw(null, true);
  }
  function Ai() {
    return this.parseWithFallback(this.Rule, Jo);
  }
  function Oi() {
    return this.Raw(this.consumeUntilSemicolonIncluded, true);
  }
  function Cu() {
    if (this.tokenType === re)
      return Oi.call(this, this.tokenIndex);
    const e2 = this.parseWithFallback(this.Declaration, Oi);
    return this.tokenType === re && this.next(), e2;
  }
  var Tu = "Block";
  var Au = "block";
  var Ou = {
    children: [[
      "Atrule",
      "Rule",
      "Declaration"
    ]]
  };
  function es(e2) {
    const t2 = e2 ? Cu : Ai, n2 = this.tokenStart;
    let r2 = this.createList();
    e:
      for (; !this.eof; )
        switch (this.tokenType) {
          case ue:
            break e;
          case W:
          case X:
            this.next();
            break;
          case G:
            r2.push(this.parseWithFallback(this.Atrule.bind(this, e2), Jo));
            break;
          default:
            e2 && this.isDelim(Su) ? r2.push(Ai.call(this)) : r2.push(t2.call(this));
        }
    return {
      type: "Block",
      loc: this.getLocation(n2, this.tokenStart),
      children: r2
    };
  }
  function Eu(e2) {
    this.children(e2, (t2) => {
      t2.type === "Declaration" && this.token(re, ";");
    });
  }
  var Lu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: Eu,
    name: Tu,
    parse: es,
    structure: Ou,
    walkContext: Au
  }, Symbol.toStringTag, { value: "Module" }));
  var $u = "Brackets";
  var _u = {
    children: [[]]
  };
  function ts(e2, t2) {
    const n2 = this.tokenStart;
    let r2 = null;
    return this.eat(pe), r2 = e2.call(this, t2), this.eof || this.eat(Se), {
      type: "Brackets",
      loc: this.getLocation(n2, this.tokenStart),
      children: r2
    };
  }
  function Pu(e2) {
    this.token(I, "["), this.children(e2), this.token(I, "]");
  }
  var zu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: Pu,
    name: $u,
    parse: ts,
    structure: _u
  }, Symbol.toStringTag, { value: "Module" }));
  var Iu = "CDC";
  var Ru = [];
  function ns() {
    const e2 = this.tokenStart;
    return this.eat(ae), {
      type: "CDC",
      loc: this.getLocation(e2, this.tokenStart)
    };
  }
  function Mu() {
    this.token(ae, "-->");
  }
  var Nu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: Mu,
    name: Iu,
    parse: ns,
    structure: Ru
  }, Symbol.toStringTag, { value: "Module" }));
  var Du = "CDO";
  var ju = [];
  function rs() {
    const e2 = this.tokenStart;
    return this.eat(Rt), {
      type: "CDO",
      loc: this.getLocation(e2, this.tokenStart)
    };
  }
  function Fu() {
    this.token(Rt, "<!--");
  }
  var Bu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: Fu,
    name: Du,
    parse: rs,
    structure: ju
  }, Symbol.toStringTag, { value: "Module" }));
  var Wu = 46;
  var Hu = "ClassSelector";
  var Uu = {
    name: String
  };
  function is() {
    return this.eatDelim(Wu), {
      type: "ClassSelector",
      loc: this.getLocation(this.tokenStart - 1, this.tokenEnd),
      name: this.consume(y)
    };
  }
  function qu(e2) {
    this.token(I, "."), this.token(y, e2.name);
  }
  var Gu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: qu,
    name: Hu,
    parse: is,
    structure: Uu
  }, Symbol.toStringTag, { value: "Module" }));
  var Vu = 43;
  var Ei = 47;
  var Ku = 62;
  var Yu = 126;
  var Qu = "Combinator";
  var Xu = {
    name: String
  };
  function os() {
    const e2 = this.tokenStart;
    let t2;
    switch (this.tokenType) {
      case W:
        t2 = " ";
        break;
      case I:
        switch (this.charCodeAt(this.tokenStart)) {
          case Ku:
          case Vu:
          case Yu:
            this.next();
            break;
          case Ei:
            this.next(), this.eatIdent("deep"), this.eatDelim(Ei);
            break;
          default:
            this.error("Combinator is expected");
        }
        t2 = this.substrToCursor(e2);
        break;
    }
    return {
      type: "Combinator",
      loc: this.getLocation(e2, this.tokenStart),
      name: t2
    };
  }
  function Zu(e2) {
    this.tokenize(e2.name);
  }
  var Ju = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: Zu,
    name: Qu,
    parse: os,
    structure: Xu
  }, Symbol.toStringTag, { value: "Module" }));
  var eh = 42;
  var th = 47;
  var nh = "Comment";
  var rh = {
    value: String
  };
  function ss() {
    const e2 = this.tokenStart;
    let t2 = this.tokenEnd;
    return this.eat(X), t2 - e2 + 2 >= 2 && this.charCodeAt(t2 - 2) === eh && this.charCodeAt(t2 - 1) === th && (t2 -= 2), {
      type: "Comment",
      loc: this.getLocation(e2, this.tokenStart),
      value: this.substring(e2 + 2, t2)
    };
  }
  function ih(e2) {
    this.token(X, "/*" + e2.value + "*/");
  }
  var oh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: ih,
    name: nh,
    parse: ss,
    structure: rh
  }, Symbol.toStringTag, { value: "Module" }));
  var sh = /* @__PURE__ */ new Set([ne, E, De]);
  var ah = "Condition";
  var lh = {
    kind: String,
    children: [[
      "Identifier",
      "Feature",
      "FeatureFunction",
      "FeatureRange",
      "SupportsDeclaration"
    ]]
  };
  function Li(e2) {
    return this.lookupTypeNonSC(1) === y && sh.has(this.lookupTypeNonSC(2)) ? this.Feature(e2) : this.FeatureRange(e2);
  }
  var ch = {
    media: Li,
    container: Li,
    supports() {
      return this.SupportsDeclaration();
    }
  };
  function as(e2 = "media") {
    const t2 = this.createList();
    e: for (; !this.eof; )
      switch (this.tokenType) {
        case X:
        case W:
          this.next();
          continue;
        case y:
          t2.push(this.Identifier());
          break;
        case M: {
          let n2 = this.parseWithFallback(
            () => ch[e2].call(this, e2),
            () => null
          );
          n2 || (n2 = this.parseWithFallback(
            () => {
              this.eat(M);
              const r2 = this.Condition(e2);
              return this.eat(E), r2;
            },
            () => this.GeneralEnclosed(e2)
          )), t2.push(n2);
          break;
        }
        case $: {
          let n2 = this.parseWithFallback(
            () => this.FeatureFunction(e2),
            () => null
          );
          n2 || (n2 = this.GeneralEnclosed(e2)), t2.push(n2);
          break;
        }
        default:
          break e;
      }
    return t2.isEmpty && this.error("Condition is expected"), {
      type: "Condition",
      loc: this.getLocationFromList(t2),
      kind: e2,
      children: t2
    };
  }
  function uh(e2) {
    e2.children.forEach((t2) => {
      t2.type === "Condition" ? (this.token(M, "("), this.node(t2), this.token(E, ")")) : this.node(t2);
    });
  }
  var hh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: uh,
    name: ah,
    parse: as,
    structure: lh
  }, Symbol.toStringTag, { value: "Module" }));
  var ls = 33;
  var fh = 35;
  var ph = 36;
  var dh = 38;
  var mh = 42;
  var gh = 43;
  var $i = 47;
  function bh() {
    return this.Raw(this.consumeUntilExclamationMarkOrSemicolon, true);
  }
  function yh() {
    return this.Raw(this.consumeUntilExclamationMarkOrSemicolon, false);
  }
  function kh() {
    const e2 = this.tokenIndex, t2 = this.Value();
    return t2.type !== "Raw" && this.eof === false && this.tokenType !== re && this.isDelim(ls) === false && this.isBalanceEdge(e2) === false && this.error(), t2;
  }
  var xh = "Declaration";
  var wh = "declaration";
  var vh = {
    important: [Boolean, String],
    property: String,
    value: ["Value", "Raw"]
  };
  function cs() {
    const e2 = this.tokenStart, t2 = this.tokenIndex, n2 = Ch.call(this), r2 = Cr(n2), i2 = r2 ? this.parseCustomProperty : this.parseValue, o2 = r2 ? yh : bh;
    let s2 = false, c;
    this.skipSC(), this.eat(ne);
    const l2 = this.tokenIndex;
    if (r2 || this.skipSC(), i2 ? c = this.parseWithFallback(kh, o2) : c = o2.call(this, this.tokenIndex), r2 && c.type === "Value" && c.children.isEmpty) {
      for (let a2 = l2 - this.tokenIndex; a2 <= 0; a2++)
        if (this.lookupType(a2) === W) {
          c.children.appendData({
            type: "WhiteSpace",
            loc: null,
            value: " "
          });
          break;
        }
    }
    return this.isDelim(ls) && (s2 = Th.call(this), this.skipSC()), this.eof === false && this.tokenType !== re && this.isBalanceEdge(t2) === false && this.error(), {
      type: "Declaration",
      loc: this.getLocation(e2, this.tokenStart),
      important: s2,
      property: n2,
      value: c
    };
  }
  function Sh(e2) {
    this.token(y, e2.property), this.token(ne, ":"), this.node(e2.value), e2.important && (this.token(I, "!"), this.token(y, e2.important === true ? "important" : e2.important));
  }
  function Ch() {
    const e2 = this.tokenStart;
    if (this.tokenType === I)
      switch (this.charCodeAt(this.tokenStart)) {
        case mh:
        case ph:
        case gh:
        case fh:
        case dh:
          this.next();
          break;
        case $i:
          this.next(), this.isDelim($i) && this.next();
          break;
      }
    return this.tokenType === F ? this.eat(F) : this.eat(y), this.substrToCursor(e2);
  }
  function Th() {
    this.eat(I), this.skipSC();
    const e2 = this.consume(y);
    return e2 === "important" ? true : e2;
  }
  var Ah = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: Sh,
    name: xh,
    parse: cs,
    structure: vh,
    walkContext: wh
  }, Symbol.toStringTag, { value: "Module" }));
  var Oh = 38;
  function Fn() {
    return this.Raw(this.consumeUntilSemicolonIncluded, true);
  }
  var Eh = "DeclarationList";
  var Lh = {
    children: [[
      "Declaration",
      "Atrule",
      "Rule"
    ]]
  };
  function us() {
    const e2 = this.createList();
    for (; !this.eof; )
      switch (this.tokenType) {
        case W:
        case X:
        case re:
          this.next();
          break;
        case G:
          e2.push(this.parseWithFallback(this.Atrule.bind(this, true), Fn));
          break;
        default:
          this.isDelim(Oh) ? e2.push(this.parseWithFallback(this.Rule, Fn)) : e2.push(this.parseWithFallback(this.Declaration, Fn));
      }
    return {
      type: "DeclarationList",
      loc: this.getLocationFromList(e2),
      children: e2
    };
  }
  function $h(e2) {
    this.children(e2, (t2) => {
      t2.type === "Declaration" && this.token(re, ";");
    });
  }
  var _h = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: $h,
    name: Eh,
    parse: us,
    structure: Lh
  }, Symbol.toStringTag, { value: "Module" }));
  var Ph = "Dimension";
  var zh = {
    value: String,
    unit: String
  };
  function hs() {
    const e2 = this.tokenStart, t2 = this.consumeNumber(z);
    return {
      type: "Dimension",
      loc: this.getLocation(e2, this.tokenStart),
      value: t2,
      unit: this.substring(e2 + t2.length, this.tokenStart)
    };
  }
  function Ih(e2) {
    this.token(z, e2.value + e2.unit);
  }
  var Rh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: Ih,
    name: Ph,
    parse: hs,
    structure: zh
  }, Symbol.toStringTag, { value: "Module" }));
  var Mh = 47;
  var Nh = "Feature";
  var Dh = {
    kind: String,
    name: String,
    value: ["Identifier", "Number", "Dimension", "Ratio", "Function", null]
  };
  function fs(e2) {
    const t2 = this.tokenStart;
    let n2, r2 = null;
    if (this.eat(M), this.skipSC(), n2 = this.consume(y), this.skipSC(), this.tokenType !== E) {
      switch (this.eat(ne), this.skipSC(), this.tokenType) {
        case L:
          this.lookupNonWSType(1) === I ? r2 = this.Ratio() : r2 = this.Number();
          break;
        case z:
          r2 = this.Dimension();
          break;
        case y:
          r2 = this.Identifier();
          break;
        case $:
          r2 = this.parseWithFallback(
            () => {
              const i2 = this.Function(this.readSequence, this.scope.Value);
              return this.skipSC(), this.isDelim(Mh) && this.error(), i2;
            },
            () => this.Ratio()
          );
          break;
        default:
          this.error("Number, dimension, ratio or identifier is expected");
      }
      this.skipSC();
    }
    return this.eof || this.eat(E), {
      type: "Feature",
      loc: this.getLocation(t2, this.tokenStart),
      kind: e2,
      name: n2,
      value: r2
    };
  }
  function jh(e2) {
    this.token(M, "("), this.token(y, e2.name), e2.value !== null && (this.token(ne, ":"), this.node(e2.value)), this.token(E, ")");
  }
  var Fh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: jh,
    name: Nh,
    parse: fs,
    structure: Dh
  }, Symbol.toStringTag, { value: "Module" }));
  var Bh = "FeatureFunction";
  var Wh = {
    kind: String,
    feature: String,
    value: ["Declaration", "Selector"]
  };
  function Hh(e2, t2) {
    const r2 = (this.features[e2] || {})[t2];
    return typeof r2 != "function" && this.error(`Unknown feature ${t2}()`), r2;
  }
  function ps(e2 = "unknown") {
    const t2 = this.tokenStart, n2 = this.consumeFunctionName(), r2 = Hh.call(this, e2, n2.toLowerCase());
    this.skipSC();
    const i2 = this.parseWithFallback(
      () => {
        const o2 = this.tokenIndex, s2 = r2.call(this);
        return this.eof === false && this.isBalanceEdge(o2) === false && this.error(), s2;
      },
      () => this.Raw(null, false)
    );
    return this.eof || this.eat(E), {
      type: "FeatureFunction",
      loc: this.getLocation(t2, this.tokenStart),
      kind: e2,
      feature: n2,
      value: i2
    };
  }
  function Uh(e2) {
    this.token($, e2.feature + "("), this.node(e2.value), this.token(E, ")");
  }
  var qh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: Uh,
    name: Bh,
    parse: ps,
    structure: Wh
  }, Symbol.toStringTag, { value: "Module" }));
  var _i = 47;
  var Gh = 60;
  var Pi = 61;
  var Vh = 62;
  var Kh = "FeatureRange";
  var Yh = {
    kind: String,
    left: ["Identifier", "Number", "Dimension", "Ratio", "Function"],
    leftComparison: String,
    middle: ["Identifier", "Number", "Dimension", "Ratio", "Function"],
    rightComparison: [String, null],
    right: ["Identifier", "Number", "Dimension", "Ratio", "Function", null]
  };
  function Bn() {
    switch (this.skipSC(), this.tokenType) {
      case L:
        return this.isDelim(_i, this.lookupOffsetNonSC(1)) ? this.Ratio() : this.Number();
      case z:
        return this.Dimension();
      case y:
        return this.Identifier();
      case $:
        return this.parseWithFallback(
          () => {
            const e2 = this.Function(this.readSequence, this.scope.Value);
            return this.skipSC(), this.isDelim(_i) && this.error(), e2;
          },
          () => this.Ratio()
        );
      default:
        this.error("Number, dimension, ratio or identifier is expected");
    }
  }
  function zi(e2) {
    if (this.skipSC(), this.isDelim(Gh) || this.isDelim(Vh)) {
      const t2 = this.source[this.tokenStart];
      return this.next(), this.isDelim(Pi) ? (this.next(), t2 + "=") : t2;
    }
    if (this.isDelim(Pi))
      return "=";
    this.error(`Expected ${e2 ? '":", ' : ""}"<", ">", "=" or ")"`);
  }
  function ds(e2 = "unknown") {
    const t2 = this.tokenStart;
    this.skipSC(), this.eat(M);
    const n2 = Bn.call(this), r2 = zi.call(this, n2.type === "Identifier"), i2 = Bn.call(this);
    let o2 = null, s2 = null;
    return this.lookupNonWSType(0) !== E && (o2 = zi.call(this), s2 = Bn.call(this)), this.skipSC(), this.eat(E), {
      type: "FeatureRange",
      loc: this.getLocation(t2, this.tokenStart),
      kind: e2,
      left: n2,
      leftComparison: r2,
      middle: i2,
      rightComparison: o2,
      right: s2
    };
  }
  function Qh(e2) {
    this.token(M, "("), this.node(e2.left), this.tokenize(e2.leftComparison), this.node(e2.middle), e2.right && (this.tokenize(e2.rightComparison), this.node(e2.right)), this.token(E, ")");
  }
  var Xh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: Qh,
    name: Kh,
    parse: ds,
    structure: Yh
  }, Symbol.toStringTag, { value: "Module" }));
  var Zh = "Function";
  var Jh = "function";
  var ef = {
    name: String,
    children: [[]]
  };
  function ms(e2, t2) {
    const n2 = this.tokenStart, r2 = this.consumeFunctionName(), i2 = r2.toLowerCase();
    let o2;
    return o2 = t2.hasOwnProperty(i2) ? t2[i2].call(this, t2) : e2.call(this, t2), this.eof || this.eat(E), {
      type: "Function",
      loc: this.getLocation(n2, this.tokenStart),
      name: r2,
      children: o2
    };
  }
  function tf(e2) {
    this.token($, e2.name + "("), this.children(e2), this.token(E, ")");
  }
  var nf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: tf,
    name: Zh,
    parse: ms,
    structure: ef,
    walkContext: Jh
  }, Symbol.toStringTag, { value: "Module" }));
  var rf = "GeneralEnclosed";
  var of = {
    kind: String,
    function: [String, null],
    children: [[]]
  };
  function gs(e2) {
    const t2 = this.tokenStart;
    let n2 = null;
    this.tokenType === $ ? n2 = this.consumeFunctionName() : this.eat(M);
    const r2 = this.parseWithFallback(
      () => {
        const i2 = this.tokenIndex, o2 = this.readSequence(this.scope.Value);
        return this.eof === false && this.isBalanceEdge(i2) === false && this.error(), o2;
      },
      () => this.createSingleNodeList(
        this.Raw(null, false)
      )
    );
    return this.eof || this.eat(E), {
      type: "GeneralEnclosed",
      loc: this.getLocation(t2, this.tokenStart),
      kind: e2,
      function: n2,
      children: r2
    };
  }
  function sf(e2) {
    e2.function ? this.token($, e2.function + "(") : this.token(M, "("), this.children(e2), this.token(E, ")");
  }
  var af = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: sf,
    name: rf,
    parse: gs,
    structure: of
  }, Symbol.toStringTag, { value: "Module" }));
  var lf = "XXX";
  var cf = "Hash";
  var uf = {
    value: String
  };
  function bs() {
    const e2 = this.tokenStart;
    return this.eat(F), {
      type: "Hash",
      loc: this.getLocation(e2, this.tokenStart),
      value: this.substrToCursor(e2 + 1)
    };
  }
  function hf(e2) {
    this.token(F, "#" + e2.value);
  }
  var ff = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: hf,
    name: cf,
    parse: bs,
    structure: uf,
    xxx: lf
  }, Symbol.toStringTag, { value: "Module" }));
  var pf = "Identifier";
  var df = {
    name: String
  };
  function ys() {
    return {
      type: "Identifier",
      loc: this.getLocation(this.tokenStart, this.tokenEnd),
      name: this.consume(y)
    };
  }
  function mf(e2) {
    this.token(y, e2.name);
  }
  var gf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: mf,
    name: pf,
    parse: ys,
    structure: df
  }, Symbol.toStringTag, { value: "Module" }));
  var bf = "IdSelector";
  var yf = {
    name: String
  };
  function ks() {
    const e2 = this.tokenStart;
    return this.eat(F), {
      type: "IdSelector",
      loc: this.getLocation(e2, this.tokenStart),
      name: this.substrToCursor(e2 + 1)
    };
  }
  function kf(e2) {
    this.token(I, "#" + e2.name);
  }
  var xf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: kf,
    name: bf,
    parse: ks,
    structure: yf
  }, Symbol.toStringTag, { value: "Module" }));
  var wf = 46;
  var vf = "Layer";
  var Sf = {
    name: String
  };
  function xs() {
    let e2 = this.consume(y);
    for (; this.isDelim(wf); )
      this.eat(I), e2 += "." + this.consume(y);
    return {
      type: "Layer",
      loc: this.getLocation(this.tokenStart, this.tokenEnd),
      name: e2
    };
  }
  function Cf(e2) {
    this.tokenize(e2.name);
  }
  var Tf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: Cf,
    name: vf,
    parse: xs,
    structure: Sf
  }, Symbol.toStringTag, { value: "Module" }));
  var Af = "LayerList";
  var Of = {
    children: [[
      "Layer"
    ]]
  };
  function ws() {
    const e2 = this.createList();
    for (this.skipSC(); !this.eof && (e2.push(this.Layer()), this.lookupTypeNonSC(0) === ce); )
      this.skipSC(), this.next(), this.skipSC();
    return {
      type: "LayerList",
      loc: this.getLocationFromList(e2),
      children: e2
    };
  }
  function Ef(e2) {
    this.children(e2, () => this.token(ce, ","));
  }
  var Lf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: Ef,
    name: Af,
    parse: ws,
    structure: Of
  }, Symbol.toStringTag, { value: "Module" }));
  var $f = "MediaQuery";
  var _f = {
    modifier: [String, null],
    mediaType: [String, null],
    condition: ["Condition", null]
  };
  function vs() {
    const e2 = this.tokenStart;
    let t2 = null, n2 = null, r2 = null;
    if (this.skipSC(), this.tokenType === y && this.lookupTypeNonSC(1) !== M) {
      const i2 = this.consume(y), o2 = i2.toLowerCase();
      switch (o2 === "not" || o2 === "only" ? (this.skipSC(), t2 = o2, n2 = this.consume(y)) : n2 = i2, this.lookupTypeNonSC(0)) {
        case y: {
          this.skipSC(), this.eatIdent("and"), r2 = this.Condition("media");
          break;
        }
        case V:
        case re:
        case ce:
        case De:
          break;
        default:
          this.error("Identifier or parenthesis is expected");
      }
    } else
      switch (this.tokenType) {
        case y:
        case M:
        case $: {
          r2 = this.Condition("media");
          break;
        }
        case V:
        case re:
        case De:
          break;
        default:
          this.error("Identifier or parenthesis is expected");
      }
    return {
      type: "MediaQuery",
      loc: this.getLocation(e2, this.tokenStart),
      modifier: t2,
      mediaType: n2,
      condition: r2
    };
  }
  function Pf(e2) {
    e2.mediaType ? (e2.modifier && this.token(y, e2.modifier), this.token(y, e2.mediaType), e2.condition && (this.token(y, "and"), this.node(e2.condition))) : e2.condition && this.node(e2.condition);
  }
  var zf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: Pf,
    name: $f,
    parse: vs,
    structure: _f
  }, Symbol.toStringTag, { value: "Module" }));
  var If = "MediaQueryList";
  var Rf = {
    children: [[
      "MediaQuery"
    ]]
  };
  function Ss() {
    const e2 = this.createList();
    for (this.skipSC(); !this.eof && (e2.push(this.MediaQuery()), this.tokenType === ce); )
      this.next();
    return {
      type: "MediaQueryList",
      loc: this.getLocationFromList(e2),
      children: e2
    };
  }
  function Mf(e2) {
    this.children(e2, () => this.token(ce, ","));
  }
  var Nf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: Mf,
    name: If,
    parse: Ss,
    structure: Rf
  }, Symbol.toStringTag, { value: "Module" }));
  var Df = 38;
  var jf = "NestingSelector";
  var Ff = {};
  function Cs() {
    const e2 = this.tokenStart;
    return this.eatDelim(Df), {
      type: "NestingSelector",
      loc: this.getLocation(e2, this.tokenStart)
    };
  }
  function Bf() {
    this.token(I, "&");
  }
  var Wf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: Bf,
    name: jf,
    parse: Cs,
    structure: Ff
  }, Symbol.toStringTag, { value: "Module" }));
  var Hf = "Nth";
  var Uf = {
    nth: ["AnPlusB", "Identifier"],
    selector: ["SelectorList", null]
  };
  function Ts() {
    this.skipSC();
    const e2 = this.tokenStart;
    let t2 = e2, n2 = null, r2;
    return this.lookupValue(0, "odd") || this.lookupValue(0, "even") ? r2 = this.Identifier() : r2 = this.AnPlusB(), t2 = this.tokenStart, this.skipSC(), this.lookupValue(0, "of") && (this.next(), n2 = this.SelectorList(), t2 = this.tokenStart), {
      type: "Nth",
      loc: this.getLocation(e2, t2),
      nth: r2,
      selector: n2
    };
  }
  function qf(e2) {
    this.node(e2.nth), e2.selector !== null && (this.token(y, "of"), this.node(e2.selector));
  }
  var Gf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: qf,
    name: Hf,
    parse: Ts,
    structure: Uf
  }, Symbol.toStringTag, { value: "Module" }));
  var Vf = "Number";
  var Kf = {
    value: String
  };
  function As() {
    return {
      type: "Number",
      loc: this.getLocation(this.tokenStart, this.tokenEnd),
      value: this.consume(L)
    };
  }
  function Yf(e2) {
    this.token(L, e2.value);
  }
  var Qf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: Yf,
    name: Vf,
    parse: As,
    structure: Kf
  }, Symbol.toStringTag, { value: "Module" }));
  var Xf = "Operator";
  var Zf = {
    value: String
  };
  function Os() {
    const e2 = this.tokenStart;
    return this.next(), {
      type: "Operator",
      loc: this.getLocation(e2, this.tokenStart),
      value: this.substrToCursor(e2)
    };
  }
  function Jf(e2) {
    this.tokenize(e2.value);
  }
  var ep = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: Jf,
    name: Xf,
    parse: Os,
    structure: Zf
  }, Symbol.toStringTag, { value: "Module" }));
  var tp = "Parentheses";
  var np = {
    children: [[]]
  };
  function Es(e2, t2) {
    const n2 = this.tokenStart;
    let r2 = null;
    return this.eat(M), r2 = e2.call(this, t2), this.eof || this.eat(E), {
      type: "Parentheses",
      loc: this.getLocation(n2, this.tokenStart),
      children: r2
    };
  }
  function rp(e2) {
    this.token(M, "("), this.children(e2), this.token(E, ")");
  }
  var ip = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: rp,
    name: tp,
    parse: Es,
    structure: np
  }, Symbol.toStringTag, { value: "Module" }));
  var op = "Percentage";
  var sp = {
    value: String
  };
  function Ls() {
    return {
      type: "Percentage",
      loc: this.getLocation(this.tokenStart, this.tokenEnd),
      value: this.consumeNumber(B)
    };
  }
  function ap(e2) {
    this.token(B, e2.value + "%");
  }
  var lp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: ap,
    name: op,
    parse: Ls,
    structure: sp
  }, Symbol.toStringTag, { value: "Module" }));
  var cp = "PseudoClassSelector";
  var up = "function";
  var hp = {
    name: String,
    children: [["Raw"], null]
  };
  function $s() {
    const e2 = this.tokenStart;
    let t2 = null, n2, r2;
    return this.eat(ne), this.tokenType === $ ? (n2 = this.consumeFunctionName(), r2 = n2.toLowerCase(), this.lookupNonWSType(0) == E ? t2 = this.createList() : hasOwnProperty.call(this.pseudo, r2) ? (this.skipSC(), t2 = this.pseudo[r2].call(this), this.skipSC()) : (t2 = this.createList(), t2.push(
      this.Raw(null, false)
    )), this.eat(E)) : n2 = this.consume(y), {
      type: "PseudoClassSelector",
      loc: this.getLocation(e2, this.tokenStart),
      name: n2,
      children: t2
    };
  }
  function fp(e2) {
    this.token(ne, ":"), e2.children === null ? this.token(y, e2.name) : (this.token($, e2.name + "("), this.children(e2), this.token(E, ")"));
  }
  var pp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: fp,
    name: cp,
    parse: $s,
    structure: hp,
    walkContext: up
  }, Symbol.toStringTag, { value: "Module" }));
  var dp = "PseudoElementSelector";
  var mp = "function";
  var gp = {
    name: String,
    children: [["Raw"], null]
  };
  function _s() {
    const e2 = this.tokenStart;
    let t2 = null, n2, r2;
    return this.eat(ne), this.eat(ne), this.tokenType === $ ? (n2 = this.consumeFunctionName(), r2 = n2.toLowerCase(), this.lookupNonWSType(0) == E ? t2 = this.createList() : hasOwnProperty.call(this.pseudo, r2) ? (this.skipSC(), t2 = this.pseudo[r2].call(this), this.skipSC()) : (t2 = this.createList(), t2.push(
      this.Raw(null, false)
    )), this.eat(E)) : n2 = this.consume(y), {
      type: "PseudoElementSelector",
      loc: this.getLocation(e2, this.tokenStart),
      name: n2,
      children: t2
    };
  }
  function bp(e2) {
    this.token(ne, ":"), this.token(ne, ":"), e2.children === null ? this.token(y, e2.name) : (this.token($, e2.name + "("), this.children(e2), this.token(E, ")"));
  }
  var yp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: bp,
    name: dp,
    parse: _s,
    structure: gp,
    walkContext: mp
  }, Symbol.toStringTag, { value: "Module" }));
  var Ii = 47;
  function Ri() {
    switch (this.skipSC(), this.tokenType) {
      case L:
        return this.Number();
      case $:
        return this.Function(this.readSequence, this.scope.Value);
      default:
        this.error("Number of function is expected");
    }
  }
  var kp = "Ratio";
  var xp = {
    left: ["Number", "Function"],
    right: ["Number", "Function", null]
  };
  function Ps() {
    const e2 = this.tokenStart, t2 = Ri.call(this);
    let n2 = null;
    return this.skipSC(), this.isDelim(Ii) && (this.eatDelim(Ii), n2 = Ri.call(this)), {
      type: "Ratio",
      loc: this.getLocation(e2, this.tokenStart),
      left: t2,
      right: n2
    };
  }
  function wp(e2) {
    this.node(e2.left), this.token(I, "/"), e2.right ? this.node(e2.right) : this.node(L, 1);
  }
  var vp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: wp,
    name: kp,
    parse: Ps,
    structure: xp
  }, Symbol.toStringTag, { value: "Module" }));
  function Sp() {
    return this.tokenIndex > 0 && this.lookupType(-1) === W ? this.tokenIndex > 1 ? this.getTokenStart(this.tokenIndex - 1) : this.firstCharOffset : this.tokenStart;
  }
  var Cp = "Raw";
  var Tp = {
    value: String
  };
  function zs(e2, t2) {
    const n2 = this.getTokenStart(this.tokenIndex);
    let r2;
    return this.skipUntilBalanced(this.tokenIndex, e2 || this.consumeUntilBalanceEnd), t2 && this.tokenStart > n2 ? r2 = Sp.call(this) : r2 = this.tokenStart, {
      type: "Raw",
      loc: this.getLocation(n2, r2),
      value: this.substring(n2, r2)
    };
  }
  function Ap(e2) {
    this.tokenize(e2.value);
  }
  var Op = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: Ap,
    name: Cp,
    parse: zs,
    structure: Tp
  }, Symbol.toStringTag, { value: "Module" }));
  function Mi() {
    return this.Raw(this.consumeUntilLeftCurlyBracket, true);
  }
  function Ep() {
    const e2 = this.SelectorList();
    return e2.type !== "Raw" && this.eof === false && this.tokenType !== V && this.error(), e2;
  }
  var Lp = "Rule";
  var $p = "rule";
  var _p = {
    prelude: ["SelectorList", "Raw"],
    block: ["Block"]
  };
  function Is() {
    const e2 = this.tokenIndex, t2 = this.tokenStart;
    let n2, r2;
    return this.parseRulePrelude ? n2 = this.parseWithFallback(Ep, Mi) : n2 = Mi.call(this, e2), this.skipSC(), this.eat(V), r2 = this.Block(true), this.eof || this.eat(ue), {
      type: "Rule",
      loc: this.getLocation(t2, this.tokenStart),
      prelude: n2,
      block: r2
    };
  }
  function Pp(e2) {
    this.node(e2.prelude), this.token(V, "{"), this.node(e2.block), this.token(ue, "}");
  }
  var zp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: Pp,
    name: Lp,
    parse: Is,
    structure: _p,
    walkContext: $p
  }, Symbol.toStringTag, { value: "Module" }));
  var Ip = "Scope";
  var Rp = {
    root: ["SelectorList", "Raw", null],
    limit: ["SelectorList", "Raw", null]
  };
  function Rs() {
    let e2 = null, t2 = null;
    this.skipSC();
    const n2 = this.tokenStart;
    return this.tokenType === M && (this.next(), this.skipSC(), e2 = this.parseWithFallback(
      this.SelectorList,
      () => this.Raw(false, true)
    ), this.skipSC(), this.eat(E)), this.lookupNonWSType(0) === y && (this.skipSC(), this.eatIdent("to"), this.skipSC(), this.eat(M), this.skipSC(), t2 = this.parseWithFallback(
      this.SelectorList,
      () => this.Raw(false, true)
    ), this.skipSC(), this.eat(E)), {
      type: "Scope",
      loc: this.getLocation(n2, this.tokenStart),
      root: e2,
      limit: t2
    };
  }
  function Mp(e2) {
    e2.root && (this.token(M, "("), this.node(e2.root), this.token(E, ")")), e2.limit && (this.token(y, "to"), this.token(M, "("), this.node(e2.limit), this.token(E, ")"));
  }
  var Np = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: Mp,
    name: Ip,
    parse: Rs,
    structure: Rp
  }, Symbol.toStringTag, { value: "Module" }));
  var Dp = "Selector";
  var jp = {
    children: [[
      "TypeSelector",
      "IdSelector",
      "ClassSelector",
      "AttributeSelector",
      "PseudoClassSelector",
      "PseudoElementSelector",
      "Combinator"
    ]]
  };
  function Ms() {
    const e2 = this.readSequence(this.scope.Selector);
    return this.getFirstListNode(e2) === null && this.error("Selector is expected"), {
      type: "Selector",
      loc: this.getLocationFromList(e2),
      children: e2
    };
  }
  function Fp(e2) {
    this.children(e2);
  }
  var Bp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: Fp,
    name: Dp,
    parse: Ms,
    structure: jp
  }, Symbol.toStringTag, { value: "Module" }));
  var Wp = "SelectorList";
  var Hp = "selector";
  var Up = {
    children: [[
      "Selector",
      "Raw"
    ]]
  };
  function Ns() {
    const e2 = this.createList();
    for (; !this.eof; ) {
      if (e2.push(this.Selector()), this.tokenType === ce) {
        this.next();
        continue;
      }
      break;
    }
    return {
      type: "SelectorList",
      loc: this.getLocationFromList(e2),
      children: e2
    };
  }
  function qp(e2) {
    this.children(e2, () => this.token(ce, ","));
  }
  var Gp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: qp,
    name: Wp,
    parse: Ns,
    structure: Up,
    walkContext: Hp
  }, Symbol.toStringTag, { value: "Module" }));
  var ir = 92;
  var Ds = 34;
  var Vp = 39;
  function js(e2) {
    const t2 = e2.length, n2 = e2.charCodeAt(0), r2 = n2 === Ds || n2 === Vp ? 1 : 0, i2 = r2 === 1 && t2 > 1 && e2.charCodeAt(t2 - 1) === n2 ? t2 - 2 : t2 - 1;
    let o2 = "";
    for (let s2 = r2; s2 <= i2; s2++) {
      let c = e2.charCodeAt(s2);
      if (c === ir) {
        if (s2 === i2) {
          s2 !== t2 - 1 && (o2 = e2.substr(s2 + 1));
          break;
        }
        if (c = e2.charCodeAt(++s2), Le(ir, c)) {
          const l2 = s2 - 1, a2 = pt(e2, l2);
          s2 = a2 - 1, o2 += po(e2.substring(l2 + 1, a2));
        } else
          c === 13 && e2.charCodeAt(s2 + 1) === 10 && s2++;
      } else
        o2 += e2[s2];
    }
    return o2;
  }
  function Kp(e2, t2) {
    const n2 = '"', r2 = Ds;
    let i2 = "", o2 = false;
    for (let s2 = 0; s2 < e2.length; s2++) {
      const c = e2.charCodeAt(s2);
      if (c === 0) {
        i2 += "\uFFFD";
        continue;
      }
      if (c <= 31 || c === 127) {
        i2 += "\\" + c.toString(16), o2 = true;
        continue;
      }
      c === r2 || c === ir ? (i2 += "\\" + e2.charAt(s2), o2 = false) : (o2 && (He(c) || Xe(c)) && (i2 += " "), i2 += e2.charAt(s2), o2 = false);
    }
    return n2 + i2 + n2;
  }
  var Yp = "String";
  var Qp = {
    value: String
  };
  function Fs() {
    return {
      type: "String",
      loc: this.getLocation(this.tokenStart, this.tokenEnd),
      value: js(this.consume(Te))
    };
  }
  function Xp(e2) {
    this.token(Te, Kp(e2.value));
  }
  var Zp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: Xp,
    name: Yp,
    parse: Fs,
    structure: Qp
  }, Symbol.toStringTag, { value: "Module" }));
  var Jp = 33;
  function Ni() {
    return this.Raw(null, false);
  }
  var ed = "StyleSheet";
  var td = "stylesheet";
  var nd = {
    children: [[
      "Comment",
      "CDO",
      "CDC",
      "Atrule",
      "Rule",
      "Raw"
    ]]
  };
  function Bs() {
    const e2 = this.tokenStart, t2 = this.createList();
    let n2;
    for (; !this.eof; ) {
      switch (this.tokenType) {
        case W:
          this.next();
          continue;
        case X:
          if (this.charCodeAt(this.tokenStart + 2) !== Jp) {
            this.next();
            continue;
          }
          n2 = this.Comment();
          break;
        case Rt:
          n2 = this.CDO();
          break;
        case ae:
          n2 = this.CDC();
          break;
        case G:
          n2 = this.parseWithFallback(this.Atrule, Ni);
          break;
        default:
          n2 = this.parseWithFallback(this.Rule, Ni);
      }
      t2.push(n2);
    }
    return {
      type: "StyleSheet",
      loc: this.getLocation(e2, this.tokenStart),
      children: t2
    };
  }
  function rd(e2) {
    this.children(e2);
  }
  var id = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: rd,
    name: ed,
    parse: Bs,
    structure: nd,
    walkContext: td
  }, Symbol.toStringTag, { value: "Module" }));
  var od = "SupportsDeclaration";
  var sd = {
    declaration: "Declaration"
  };
  function Ws() {
    const e2 = this.tokenStart;
    this.eat(M), this.skipSC();
    const t2 = this.Declaration();
    return this.eof || this.eat(E), {
      type: "SupportsDeclaration",
      loc: this.getLocation(e2, this.tokenStart),
      declaration: t2
    };
  }
  function ad(e2) {
    this.token(M, "("), this.node(e2.declaration), this.token(E, ")");
  }
  var ld = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: ad,
    name: od,
    parse: Ws,
    structure: sd
  }, Symbol.toStringTag, { value: "Module" }));
  var cd = 42;
  var Di = 124;
  function Wn() {
    this.tokenType !== y && this.isDelim(cd) === false && this.error("Identifier or asterisk is expected"), this.next();
  }
  var ud = "TypeSelector";
  var hd = {
    name: String
  };
  function Hs() {
    const e2 = this.tokenStart;
    return this.isDelim(Di) ? (this.next(), Wn.call(this)) : (Wn.call(this), this.isDelim(Di) && (this.next(), Wn.call(this))), {
      type: "TypeSelector",
      loc: this.getLocation(e2, this.tokenStart),
      name: this.substrToCursor(e2)
    };
  }
  function fd(e2) {
    this.tokenize(e2.name);
  }
  var pd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: fd,
    name: ud,
    parse: Hs,
    structure: hd
  }, Symbol.toStringTag, { value: "Module" }));
  var Us = 43;
  var qs = 45;
  var or = 63;
  function Ct(e2, t2) {
    let n2 = 0;
    for (let r2 = this.tokenStart + e2; r2 < this.tokenEnd; r2++) {
      const i2 = this.charCodeAt(r2);
      if (i2 === qs && t2 && n2 !== 0)
        return Ct.call(this, e2 + n2 + 1, false), -1;
      He(i2) || this.error(
        t2 && n2 !== 0 ? "Hyphen minus" + (n2 < 6 ? " or hex digit" : "") + " is expected" : n2 < 6 ? "Hex digit is expected" : "Unexpected input",
        r2
      ), ++n2 > 6 && this.error("Too many hex digits", r2);
    }
    return this.next(), n2;
  }
  function Wt(e2) {
    let t2 = 0;
    for (; this.isDelim(or); )
      ++t2 > e2 && this.error("Too many question marks"), this.next();
  }
  function dd(e2) {
    this.charCodeAt(this.tokenStart) !== e2 && this.error((e2 === Us ? "Plus sign" : "Hyphen minus") + " is expected");
  }
  function md() {
    let e2 = 0;
    switch (this.tokenType) {
      case L:
        if (e2 = Ct.call(this, 1, true), this.isDelim(or)) {
          Wt.call(this, 6 - e2);
          break;
        }
        if (this.tokenType === z || this.tokenType === L) {
          dd.call(this, qs), Ct.call(this, 1, false);
          break;
        }
        break;
      case z:
        e2 = Ct.call(this, 1, true), e2 > 0 && Wt.call(this, 6 - e2);
        break;
      default:
        if (this.eatDelim(Us), this.tokenType === y) {
          e2 = Ct.call(this, 0, true), e2 > 0 && Wt.call(this, 6 - e2);
          break;
        }
        if (this.isDelim(or)) {
          this.next(), Wt.call(this, 5);
          break;
        }
        this.error("Hex digit or question mark is expected");
    }
  }
  var gd = "UnicodeRange";
  var bd = {
    value: String
  };
  function Gs() {
    const e2 = this.tokenStart;
    return this.eatIdent("u"), md.call(this), {
      type: "UnicodeRange",
      loc: this.getLocation(e2, this.tokenStart),
      value: this.substrToCursor(e2)
    };
  }
  function yd(e2) {
    this.tokenize(e2.value);
  }
  var kd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: yd,
    name: gd,
    parse: Gs,
    structure: bd
  }, Symbol.toStringTag, { value: "Module" }));
  var xd = 32;
  var sr = 92;
  var wd = 34;
  var vd = 39;
  var Sd = 40;
  var Vs = 41;
  function Cd(e2) {
    const t2 = e2.length;
    let n2 = 4, r2 = e2.charCodeAt(t2 - 1) === Vs ? t2 - 2 : t2 - 1, i2 = "";
    for (; n2 < r2 && Xe(e2.charCodeAt(n2)); )
      n2++;
    for (; n2 < r2 && Xe(e2.charCodeAt(r2)); )
      r2--;
    for (let o2 = n2; o2 <= r2; o2++) {
      let s2 = e2.charCodeAt(o2);
      if (s2 === sr) {
        if (o2 === r2) {
          o2 !== t2 - 1 && (i2 = e2.substr(o2 + 1));
          break;
        }
        if (s2 = e2.charCodeAt(++o2), Le(sr, s2)) {
          const c = o2 - 1, l2 = pt(e2, c);
          o2 = l2 - 1, i2 += po(e2.substring(c + 1, l2));
        } else
          s2 === 13 && e2.charCodeAt(o2 + 1) === 10 && o2++;
      } else
        i2 += e2[o2];
    }
    return i2;
  }
  function Td(e2) {
    let t2 = "", n2 = false;
    for (let r2 = 0; r2 < e2.length; r2++) {
      const i2 = e2.charCodeAt(r2);
      if (i2 === 0) {
        t2 += "\uFFFD";
        continue;
      }
      if (i2 <= 31 || i2 === 127) {
        t2 += "\\" + i2.toString(16), n2 = true;
        continue;
      }
      i2 === xd || i2 === sr || i2 === wd || i2 === vd || i2 === Sd || i2 === Vs ? (t2 += "\\" + e2.charAt(r2), n2 = false) : (n2 && He(i2) && (t2 += " "), t2 += e2.charAt(r2), n2 = false);
    }
    return "url(" + t2 + ")";
  }
  var Ad = "Url";
  var Od = {
    value: String
  };
  function Ks() {
    const e2 = this.tokenStart;
    let t2;
    switch (this.tokenType) {
      case te:
        t2 = Cd(this.consume(te));
        break;
      case $:
        this.cmpStr(this.tokenStart, this.tokenEnd, "url(") || this.error("Function name must be `url`"), this.eat($), this.skipSC(), t2 = js(this.consume(Te)), this.skipSC(), this.eof || this.eat(E);
        break;
      default:
        this.error("Url or Function is expected");
    }
    return {
      type: "Url",
      loc: this.getLocation(e2, this.tokenStart),
      value: t2
    };
  }
  function Ed(e2) {
    this.token(te, Td(e2.value));
  }
  var Ld = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: Ed,
    name: Ad,
    parse: Ks,
    structure: Od
  }, Symbol.toStringTag, { value: "Module" }));
  var $d = "Value";
  var _d = {
    children: [[]]
  };
  function Ys() {
    const e2 = this.tokenStart, t2 = this.readSequence(this.scope.Value);
    return {
      type: "Value",
      loc: this.getLocation(e2, this.tokenStart),
      children: t2
    };
  }
  function Pd(e2) {
    this.children(e2);
  }
  var zd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: Pd,
    name: $d,
    parse: Ys,
    structure: _d
  }, Symbol.toStringTag, { value: "Module" }));
  var Id = Object.freeze({
    type: "WhiteSpace",
    loc: null,
    value: " "
  });
  var Rd = "WhiteSpace";
  var Md = {
    value: String
  };
  function Qs() {
    return this.eat(W), Id;
  }
  function Nd(e2) {
    this.token(W, e2.value);
  }
  var Dd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    generate: Nd,
    name: Rd,
    parse: Qs,
    structure: Md
  }, Symbol.toStringTag, { value: "Module" }));
  var Xs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    AnPlusB: nu,
    Atrule: lu,
    AtrulePrelude: pu,
    AttributeSelector: vu,
    Block: Lu,
    Brackets: zu,
    CDC: Nu,
    CDO: Bu,
    ClassSelector: Gu,
    Combinator: Ju,
    Comment: oh,
    Condition: hh,
    Declaration: Ah,
    DeclarationList: _h,
    Dimension: Rh,
    Feature: Fh,
    FeatureFunction: qh,
    FeatureRange: Xh,
    Function: nf,
    GeneralEnclosed: af,
    Hash: ff,
    IdSelector: xf,
    Identifier: gf,
    Layer: Tf,
    LayerList: Lf,
    MediaQuery: zf,
    MediaQueryList: Nf,
    NestingSelector: Wf,
    Nth: Gf,
    Number: Qf,
    Operator: ep,
    Parentheses: ip,
    Percentage: lp,
    PseudoClassSelector: pp,
    PseudoElementSelector: yp,
    Ratio: vp,
    Raw: Op,
    Rule: zp,
    Scope: Np,
    Selector: Bp,
    SelectorList: Gp,
    String: Zp,
    StyleSheet: id,
    SupportsDeclaration: ld,
    TypeSelector: pd,
    UnicodeRange: kd,
    Url: Ld,
    Value: zd,
    WhiteSpace: Dd
  }, Symbol.toStringTag, { value: "Module" }));
  var jd = Z(_({
    generic: true
  }, Xc), {
    node: Xs
  });
  var Fd = 35;
  var Bd = 42;
  var ji = 43;
  var Wd = 45;
  var Hd = 47;
  var Ud = 117;
  function Zs(e2) {
    switch (this.tokenType) {
      case F:
        return this.Hash();
      case ce:
        return this.Operator();
      case M:
        return this.Parentheses(this.readSequence, e2.recognizer);
      case pe:
        return this.Brackets(this.readSequence, e2.recognizer);
      case Te:
        return this.String();
      case z:
        return this.Dimension();
      case B:
        return this.Percentage();
      case L:
        return this.Number();
      case $:
        return this.cmpStr(this.tokenStart, this.tokenEnd, "url(") ? this.Url() : this.Function(this.readSequence, e2.recognizer);
      case te:
        return this.Url();
      case y:
        return this.cmpChar(this.tokenStart, Ud) && this.cmpChar(this.tokenStart + 1, ji) ? this.UnicodeRange() : this.Identifier();
      case I: {
        const t2 = this.charCodeAt(this.tokenStart);
        if (t2 === Hd || t2 === Bd || t2 === ji || t2 === Wd)
          return this.Operator();
        t2 === Fd && this.error("Hex or identifier is expected", this.tokenStart + 1);
        break;
      }
    }
  }
  var qd = {
    getNode: Zs
  };
  var Gd = 35;
  var Vd = 38;
  var Kd = 42;
  var Yd = 43;
  var Qd = 47;
  var Fi = 46;
  var Xd = 62;
  var Zd = 124;
  var Jd = 126;
  function em(e2, t2) {
    t2.last !== null && t2.last.type !== "Combinator" && e2 !== null && e2.type !== "Combinator" && t2.push({
      // FIXME: this.Combinator() should be used instead
      type: "Combinator",
      loc: null,
      name: " "
    });
  }
  function tm() {
    switch (this.tokenType) {
      case pe:
        return this.AttributeSelector();
      case F:
        return this.IdSelector();
      case ne:
        return this.lookupType(1) === ne ? this.PseudoElementSelector() : this.PseudoClassSelector();
      case y:
        return this.TypeSelector();
      case L:
      case B:
        return this.Percentage();
      case z:
        this.charCodeAt(this.tokenStart) === Fi && this.error("Identifier is expected", this.tokenStart + 1);
        break;
      case I: {
        switch (this.charCodeAt(this.tokenStart)) {
          case Yd:
          case Xd:
          case Jd:
          case Qd:
            return this.Combinator();
          case Fi:
            return this.ClassSelector();
          case Kd:
          case Zd:
            return this.TypeSelector();
          case Gd:
            return this.IdSelector();
          case Vd:
            return this.NestingSelector();
        }
        break;
      }
    }
  }
  var nm = {
    onWhiteSpace: em,
    getNode: tm
  };
  function rm() {
    return this.createSingleNodeList(
      this.Raw(null, false)
    );
  }
  function im() {
    const e2 = this.createList();
    if (this.skipSC(), e2.push(this.Identifier()), this.skipSC(), this.tokenType === ce) {
      e2.push(this.Operator());
      const t2 = this.tokenIndex, n2 = this.parseCustomProperty ? this.Value(null) : this.Raw(this.consumeUntilExclamationMarkOrSemicolon, false);
      if (n2.type === "Value" && n2.children.isEmpty) {
        for (let r2 = t2 - this.tokenIndex; r2 <= 0; r2++)
          if (this.lookupType(r2) === W) {
            n2.children.appendData({
              type: "WhiteSpace",
              loc: null,
              value: " "
            });
            break;
          }
      }
      e2.push(n2);
    }
    return e2;
  }
  function Bi(e2) {
    return e2 !== null && e2.type === "Operator" && (e2.value[e2.value.length - 1] === "-" || e2.value[e2.value.length - 1] === "+");
  }
  var om = {
    getNode: Zs,
    onWhiteSpace(e2, t2) {
      Bi(e2) && (e2.value = " " + e2.value), Bi(t2.last) && (t2.last.value += " ");
    },
    expression: rm,
    var: im
  };
  var sm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    AtrulePrelude: qd,
    Selector: nm,
    Value: om
  }, Symbol.toStringTag, { value: "Module" }));
  var am = /* @__PURE__ */ new Set(["none", "and", "not", "or"]);
  var lm = {
    parse: {
      prelude() {
        const e2 = this.createList();
        if (this.tokenType === y) {
          const t2 = this.substring(this.tokenStart, this.tokenEnd);
          am.has(t2.toLowerCase()) || e2.push(this.Identifier());
        }
        return e2.push(this.Condition("container")), e2;
      },
      block(e2 = false) {
        return this.Block(e2);
      }
    }
  };
  var cm = {
    parse: {
      prelude: null,
      block() {
        return this.Block(true);
      }
    }
  };
  function Hn(e2, t2) {
    return this.parseWithFallback(
      () => {
        try {
          return e2.call(this);
        } finally {
          this.skipSC(), this.lookupNonWSType(0) !== E && this.error();
        }
      },
      t2 || (() => this.Raw(null, true))
    );
  }
  var Wi = {
    layer() {
      this.skipSC();
      const e2 = this.createList(), t2 = Hn.call(this, this.Layer);
      return (t2.type !== "Raw" || t2.value !== "") && e2.push(t2), e2;
    },
    supports() {
      this.skipSC();
      const e2 = this.createList(), t2 = Hn.call(
        this,
        this.Declaration,
        () => Hn.call(this, () => this.Condition("supports"))
      );
      return (t2.type !== "Raw" || t2.value !== "") && e2.push(t2), e2;
    }
  };
  var um = {
    parse: {
      prelude() {
        const e2 = this.createList();
        switch (this.tokenType) {
          case Te:
            e2.push(this.String());
            break;
          case te:
          case $:
            e2.push(this.Url());
            break;
          default:
            this.error("String or url() is expected");
        }
        return this.skipSC(), this.tokenType === y && this.cmpStr(this.tokenStart, this.tokenEnd, "layer") ? e2.push(this.Identifier()) : this.tokenType === $ && this.cmpStr(this.tokenStart, this.tokenEnd, "layer(") && e2.push(this.Function(null, Wi)), this.skipSC(), this.tokenType === $ && this.cmpStr(this.tokenStart, this.tokenEnd, "supports(") && e2.push(this.Function(null, Wi)), (this.lookupNonWSType(0) === y || this.lookupNonWSType(0) === M) && e2.push(this.MediaQueryList()), e2;
      },
      block: null
    }
  };
  var hm = {
    parse: {
      prelude() {
        return this.createSingleNodeList(
          this.LayerList()
        );
      },
      block() {
        return this.Block(false);
      }
    }
  };
  var fm = {
    parse: {
      prelude() {
        return this.createSingleNodeList(
          this.MediaQueryList()
        );
      },
      block(e2 = false) {
        return this.Block(e2);
      }
    }
  };
  var pm = {
    parse: {
      prelude() {
        return this.createSingleNodeList(
          this.SelectorList()
        );
      },
      block() {
        return this.Block(true);
      }
    }
  };
  var dm = {
    parse: {
      prelude() {
        return this.createSingleNodeList(
          this.SelectorList()
        );
      },
      block() {
        return this.Block(true);
      }
    }
  };
  var mm = {
    parse: {
      prelude() {
        return this.createSingleNodeList(
          this.Scope()
        );
      },
      block(e2 = false) {
        return this.Block(e2);
      }
    }
  };
  var gm = {
    parse: {
      prelude: null,
      block(e2 = false) {
        return this.Block(e2);
      }
    }
  };
  var bm = {
    parse: {
      prelude() {
        return this.createSingleNodeList(
          this.Condition("supports")
        );
      },
      block(e2 = false) {
        return this.Block(e2);
      }
    }
  };
  var ym = {
    container: lm,
    "font-face": cm,
    import: um,
    layer: hm,
    media: fm,
    nest: pm,
    page: dm,
    scope: mm,
    "starting-style": gm,
    supports: bm
  };
  function km() {
    const e2 = this.createList();
    this.skipSC();
    e: for (; !this.eof; ) {
      switch (this.tokenType) {
        case y:
          e2.push(this.Identifier());
          break;
        case Te:
          e2.push(this.String());
          break;
        case ce:
          e2.push(this.Operator());
          break;
        case E:
          break e;
        default:
          this.error("Identifier, string or comma is expected");
      }
      this.skipSC();
    }
    return e2;
  }
  var qe = {
    parse() {
      return this.createSingleNodeList(
        this.SelectorList()
      );
    }
  };
  var Un = {
    parse() {
      return this.createSingleNodeList(
        this.Selector()
      );
    }
  };
  var xm = {
    parse() {
      return this.createSingleNodeList(
        this.Identifier()
      );
    }
  };
  var wm = {
    parse: km
  };
  var Ht = {
    parse() {
      return this.createSingleNodeList(
        this.Nth()
      );
    }
  };
  var vm = {
    dir: xm,
    has: qe,
    lang: wm,
    matches: qe,
    is: qe,
    "-moz-any": qe,
    "-webkit-any": qe,
    where: qe,
    not: qe,
    "nth-child": Ht,
    "nth-last-child": Ht,
    "nth-last-of-type": Ht,
    "nth-of-type": Ht,
    slotted: Un,
    host: Un,
    "host-context": Un
  };
  var Sm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    AnPlusB: Ko,
    Atrule: Yo,
    AtrulePrelude: Qo,
    AttributeSelector: Zo,
    Block: es,
    Brackets: ts,
    CDC: ns,
    CDO: rs,
    ClassSelector: is,
    Combinator: os,
    Comment: ss,
    Condition: as,
    Declaration: cs,
    DeclarationList: us,
    Dimension: hs,
    Feature: fs,
    FeatureFunction: ps,
    FeatureRange: ds,
    Function: ms,
    GeneralEnclosed: gs,
    Hash: bs,
    IdSelector: ks,
    Identifier: ys,
    Layer: xs,
    LayerList: ws,
    MediaQuery: vs,
    MediaQueryList: Ss,
    NestingSelector: Cs,
    Nth: Ts,
    Number: As,
    Operator: Os,
    Parentheses: Es,
    Percentage: Ls,
    PseudoClassSelector: $s,
    PseudoElementSelector: _s,
    Ratio: Ps,
    Raw: zs,
    Rule: Is,
    Scope: Rs,
    Selector: Ms,
    SelectorList: Ns,
    String: Fs,
    StyleSheet: Bs,
    SupportsDeclaration: Ws,
    TypeSelector: Hs,
    UnicodeRange: Gs,
    Url: Ks,
    Value: Ys,
    WhiteSpace: Qs
  }, Symbol.toStringTag, { value: "Module" }));
  var Cm = {
    parseContext: {
      default: "StyleSheet",
      stylesheet: "StyleSheet",
      atrule: "Atrule",
      atrulePrelude(e2) {
        return this.AtrulePrelude(e2.atrule ? String(e2.atrule) : null);
      },
      mediaQueryList: "MediaQueryList",
      mediaQuery: "MediaQuery",
      condition(e2) {
        return this.Condition(e2.kind);
      },
      rule: "Rule",
      selectorList: "SelectorList",
      selector: "Selector",
      block() {
        return this.Block(true);
      },
      declarationList: "DeclarationList",
      declaration: "Declaration",
      value: "Value"
    },
    features: {
      supports: {
        selector() {
          return this.Selector();
        }
      },
      container: {
        style() {
          return this.Declaration();
        }
      }
    },
    scope: sm,
    atrule: ym,
    pseudo: vm,
    node: Sm
  };
  var Tm = {
    node: Xs
  };
  var Am = Qc(_(_(_({}, jd), Cm), Tm));
  function un(e2) {
    const t2 = {};
    for (const n2 of Object.keys(e2)) {
      let r2 = e2[n2];
      r2 && (Array.isArray(r2) || r2 instanceof q ? r2 = r2.map(un) : r2.constructor === Object && (r2 = un(r2))), t2[n2] = r2;
    }
    return t2;
  }
  var {
    tokenize: Kg,
    parse: Om,
    generate: Em,
    lexer: Yg,
    createLexer: Qg,
    walk: Fe,
    find: Xg,
    findLast: Zg,
    findAll: Jg,
    toPlainObject: eb,
    fromPlainObject: tb,
    fork: nb
  } = Am;
  var Lm = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
  var ke = (e2 = 21) => {
    let t2 = "", n2 = e2;
    for (; n2--; )
      t2 += Lm[Math.random() * 64 | 0];
    return t2;
  };
  var oe = ke();
  function Ir(e2) {
    return !!(e2 && e2.type === "Function" && e2.name === "anchor");
  }
  function Be(e2) {
    return Om(e2, {
      parseAtrulePrelude: false,
      parseCustomProperty: true
    });
  }
  function le(e2) {
    return Em(e2, {
      // Default `safe` adds extra (potentially breaking) spaces for compatibility
      // with old browsers.
      mode: "spec"
    });
  }
  function $m(e2) {
    return e2.type === "Declaration";
  }
  function _m(e2) {
    return e2.toArray().reduce(
      (t2, n2) => n2.type === "Operator" && n2.value === "," ? (t2.push([]), t2) : (n2.type === "Identifier" && t2[t2.length - 1].push(n2), t2),
      [[]]
    );
  }
  function ar(e2) {
    return e2 ? e2.children.map((t2) => {
      var i2;
      let n2;
      ((i2 = t2.children.last) == null ? void 0 : i2.type) === "PseudoElementSelector" && (t2 = un(t2), n2 = le(t2.children.last), t2.children.pop());
      const r2 = le(t2);
      return {
        selector: r2 + (n2 != null ? n2 : ""),
        elementPart: r2,
        pseudoElementPart: n2
      };
    }).toArray() : [];
  }
  var lr = {
    "position-anchor": `--position-anchor-${oe}`,
    "anchor-scope": `--anchor-scope-${oe}`,
    "anchor-name": `--anchor-name-${oe}`,
    left: `--left-${oe}`,
    right: `--right-${oe}`,
    top: `--top-${oe}`,
    bottom: `--bottom-${oe}`,
    "inset-block-start": `--inset-block-start-${oe}`,
    "inset-block-end": `--inset-block-end-${oe}`,
    "inset-inline-start": `--inset-inline-start-${oe}`,
    "inset-inline-end": `--inset-inline-end-${oe}`,
    "inset-block": `--inset-block-${oe}`,
    "inset-inline": `--inset-inline-${oe}`,
    inset: `--inset-${oe}`
  };
  function Pm(e2, t2) {
    return $m(e2) && lr[e2.property] && t2 ? (t2.children.appendData(Z(_({}, e2), {
      property: lr[e2.property]
    })), { updated: true }) : {};
  }
  function zm(e2) {
    for (const t2 of e2) {
      let n2 = false;
      const r2 = Be(t2.css);
      Fe(r2, {
        visit: "Declaration",
        enter(i2) {
          var c;
          const o2 = (c = this.rule) == null ? void 0 : c.block, { updated: s2 } = Pm(i2, o2);
          s2 && (n2 = true);
        }
      }), n2 && (t2.css = le(r2), t2.changed = true);
    }
    return e2.some((t2) => t2.changed === true);
  }
  var Js = /* @__PURE__ */ ((e2) => (e2.All = "all", e2.None = "none", e2))(Js || {});
  function Ce(e2, t2) {
    var r2;
    return t2 = (r2 = lr[t2]) != null ? r2 : t2, (e2 instanceof HTMLElement ? getComputedStyle(e2) : e2.computedStyle).getPropertyValue(t2).trim();
  }
  function gt(e2, t2, n2) {
    return Ce(e2, t2) === n2;
  }
  function Im(e2, { selector: t2, pseudoElementPart: n2 }) {
    const r2 = getComputedStyle(e2, n2), i2 = document.createElement("div"), o2 = document.createElement("style");
    i2.id = `fake-pseudo-element-${ke()}`;
    for (const c of Array.from(r2)) {
      const l2 = r2.getPropertyValue(c);
      i2.style.setProperty(c, l2);
    }
    o2.textContent += `#${i2.id}${n2} { content: ${r2.content}; }`, o2.textContent += `${t2} { display: none !important; }`, document.head.append(o2);
    const s2 = n2 === "::before" ? "afterbegin" : "beforeend";
    return e2.insertAdjacentElement(s2, i2), { fakePseudoElement: i2, sheet: o2, computedStyle: r2 };
  }
  function Rm(e2) {
    let t2 = e2;
    for (; t2; ) {
      if (gt(t2, "overflow", "scroll"))
        return t2;
      t2 = t2.parentElement;
    }
    return t2;
  }
  function Mm(e2) {
    let t2 = Rm(e2);
    return t2 === document.documentElement && (t2 = null), t2 != null ? t2 : { scrollTop: 0, scrollLeft: 0 };
  }
  function Nm(e2) {
    const { elementPart: t2, pseudoElementPart: n2 } = e2, r2 = [];
    if (n2 && !(n2 === "::before" || n2 === "::after")) return r2;
    const s2 = Array.from(
      document.querySelectorAll(t2)
    );
    if (!n2)
      return r2.push(...s2), r2;
    for (const c of s2) {
      const { fakePseudoElement: l2, sheet: a2, computedStyle: u } = Im(
        c,
        e2
      ), h2 = l2.getBoundingClientRect(), { scrollY: d, scrollX: m } = globalThis, w = Mm(c);
      r2.push({
        fakePseudoElement: l2,
        computedStyle: u,
        removeFakePseudoElement() {
          l2.remove(), a2.remove();
        },
        // For https://floating-ui.com/docs/autoupdate#ancestorscroll to work on
        // `VirtualElement`s.
        contextElement: c,
        // https://floating-ui.com/docs/virtual-elements
        getBoundingClientRect() {
          const { scrollY: k, scrollX: C } = globalThis, { scrollTop: b, scrollLeft: x } = w;
          return DOMRect.fromRect({
            y: h2.y + (d - k) + (w.scrollTop - b),
            x: h2.x + (m - C) + (w.scrollLeft - x),
            width: h2.width,
            height: h2.height
          });
        }
      });
    }
    return r2;
  }
  function Dm(e2, t2) {
    const n2 = Ce(e2, "anchor-name");
    return t2 ? n2.split(",").map((r2) => r2.trim()).includes(t2) : !n2;
  }
  function jm(e2, t2) {
    const n2 = Ce(e2, "anchor-scope");
    return n2 === t2 || n2 === "all";
  }
  var Hi = "InvalidMimeType";
  function Fm(e2) {
    return !!((e2.type === "text/css" || e2.rel === "stylesheet") && e2.href);
  }
  function Bm(e2) {
    const t2 = new URL(e2.href, document.baseURI);
    if (Fm(e2) && t2.origin === location.origin)
      return t2;
  }
  function Wm(e2) {
    return H(this, null, function* () {
      return (yield Promise.all(
        e2.map((n2) => H(this, null, function* () {
          var r2;
          if (!n2.url)
            return n2;
          if ((r2 = n2.el) != null && r2.disabled)
            return null;
          try {
            const i2 = yield fetch(n2.url.toString()), o2 = i2.headers.get("content-type");
            if (!(o2 != null && o2.startsWith("text/css"))) {
              const c = new Error(
                `Error loading ${n2.url}: expected content-type "text/css", got "${o2}".`
              );
              throw c.name = Hi, c;
            }
            const s2 = yield i2.text();
            return Z(_({}, n2), { css: s2 });
          } catch (i2) {
            if (i2 instanceof Error && i2.name === Hi)
              return console.warn(i2), null;
            throw i2;
          }
        }))
      )).filter((n2) => n2 !== null);
    });
  }
  var Ui = '[style*="anchor"]';
  function Hm(e2) {
    const t2 = e2 ? e2.filter(
      (r2) => r2 instanceof HTMLElement && r2.matches(Ui)
    ) : Array.from(
      document.querySelectorAll(Ui)
    ), n2 = [];
    return t2.filter((r2) => r2 instanceof HTMLElement).forEach((r2) => {
      const i2 = ke(12), o2 = "data-has-inline-styles";
      r2.setAttribute(o2, i2);
      const s2 = r2.getAttribute("style"), c = `[${o2}="${i2}"] { ${s2} }`;
      n2.push({ el: r2, css: c });
    }), n2;
  }
  function Um(e2, t2) {
    return H(this, null, function* () {
      const n2 = e2 != null ? e2 : Array.from(document.querySelectorAll("link, style")), r2 = [];
      n2.filter((s2) => s2 instanceof HTMLElement).forEach((s2) => {
        if (s2.tagName.toLowerCase() === "link") {
          const c = Bm(s2);
          c && r2.push({ el: s2, url: c });
        }
        s2.tagName.toLowerCase() === "style" && r2.push({ el: s2, css: s2.innerHTML });
      });
      const i2 = t2 ? e2 != null ? e2 : [] : void 0, o2 = Hm(i2);
      return yield Wm([...r2, ...o2]);
    });
  }
  var ea = [
    "left",
    "right",
    "top",
    "bottom",
    "inset-block-start",
    "inset-block-end",
    "inset-inline-start",
    "inset-inline-end",
    "inset-block",
    "inset-inline",
    "inset"
  ];
  function zt(e2) {
    return ea.includes(e2);
  }
  var ta = [
    "margin-block-start",
    "margin-block-end",
    "margin-block",
    "margin-inline-start",
    "margin-inline-end",
    "margin-inline",
    "margin-bottom",
    "margin-left",
    "margin-right",
    "margin-top",
    "margin"
  ];
  function qm(e2) {
    return ta.includes(e2);
  }
  var na = [
    "width",
    "height",
    "min-width",
    "min-height",
    "max-width",
    "max-height",
    "block-size",
    "inline-size",
    "min-block-size",
    "min-inline-size",
    "max-block-size",
    "max-inline-size"
  ];
  function vn(e2) {
    return na.includes(e2);
  }
  var ra = [
    "justify-self",
    "align-self",
    "place-self"
  ];
  function Gm(e2) {
    return ra.includes(e2);
  }
  var Vm = [
    ...ea,
    ...ta,
    ...na,
    ...ra,
    "position-anchor",
    "position-area"
  ];
  var Km = [
    "top",
    "left",
    "right",
    "bottom",
    "start",
    "end",
    "self-start",
    "self-end",
    "center"
  ];
  function ia(e2) {
    return Km.includes(e2);
  }
  var Ym = [
    "width",
    "height",
    "block",
    "inline",
    "self-block",
    "self-inline"
  ];
  function Qm(e2) {
    return Ym.includes(e2);
  }
  var Xm = [
    "left",
    "center",
    "right",
    "span-left",
    "span-right",
    "x-start",
    "x-end",
    "span-x-start",
    "span-x-end",
    "x-self-start",
    "x-self-end",
    "span-x-self-start",
    "span-x-self-end",
    "span-all",
    "top",
    "bottom",
    "span-top",
    "span-bottom",
    "y-start",
    "y-end",
    "span-y-start",
    "span-y-end",
    "y-self-start",
    "y-self-end",
    "span-y-self-start",
    "span-y-self-end",
    "block-start",
    "block-end",
    "span-block-start",
    "span-block-end",
    "inline-start",
    "inline-end",
    "span-inline-start",
    "span-inline-end",
    "self-block-start",
    "self-block-end",
    "span-self-block-start",
    "span-self-block-end",
    "self-inline-start",
    "self-inline-end",
    "span-self-inline-start",
    "span-self-inline-end",
    "start",
    "end",
    "span-start",
    "span-end",
    "self-start",
    "self-end",
    "span-self-start",
    "span-self-end"
  ];
  var Zm = [
    "normal",
    "most-width",
    "most-height",
    "most-block-size",
    "most-inline-size"
  ];
  var Jm = [
    "flip-block",
    "flip-inline",
    "flip-start"
  ];
  function oa(e2) {
    return Xm.includes(e2);
  }
  function eg(e2) {
    return e2.type === "Declaration";
  }
  function tg(e2) {
    return e2.type === "Declaration" && e2.property === "position-try-fallbacks";
  }
  function ng(e2) {
    return e2.type === "Declaration" && e2.property === "position-try-order";
  }
  function rg(e2) {
    return e2.type === "Declaration" && e2.property === "position-try";
  }
  function ig(e2) {
    return e2.type === "Atrule" && e2.name === "position-try";
  }
  function og(e2) {
    return Jm.includes(e2);
  }
  function sg(e2) {
    return Zm.includes(e2);
  }
  function ag(e2, t2) {
    const n2 = document.querySelector(e2);
    if (n2) {
      let r2 = cg(n2);
      return t2.forEach((i2) => {
        r2 = sa(r2, i2);
      }), r2;
    }
  }
  function lg(e2, t2) {
    let n2 = e2.declarations;
    return t2.forEach((r2) => {
      n2 = sa(n2, r2);
    }), n2;
  }
  function cg(e2) {
    const t2 = {};
    return Vm.forEach((n2) => {
      const r2 = Ce(
        e2,
        `--${n2}-${oe}`
      );
      r2 && (t2[n2] = r2);
    }), t2;
  }
  var ug = {
    "flip-block": {
      top: "bottom",
      bottom: "top",
      "inset-block-start": "inset-block-end",
      "inset-block-end": "inset-block-start",
      "margin-top": "margin-bottom",
      "margin-bottom": "margin-top"
    },
    "flip-inline": {
      left: "right",
      right: "left",
      "inset-inline-start": "inset-inline-end",
      "inset-inline-end": "inset-inline-start",
      "margin-left": "margin-right",
      "margin-right": "margin-left"
    },
    "flip-start": {
      left: "top",
      right: "bottom",
      top: "left",
      bottom: "right",
      "inset-block-start": "inset-block-end",
      "inset-block-end": "inset-block-start",
      "inset-inline-start": "inset-inline-end",
      "inset-inline-end": "inset-inline-start",
      "inset-block": "inset-inline",
      "inset-inline": "inset-block"
    }
  };
  var hg = {
    "flip-block": {
      top: "bottom",
      bottom: "top",
      start: "end",
      end: "start",
      "self-end": "self-start",
      "self-start": "self-end"
    },
    "flip-inline": {
      left: "right",
      right: "left",
      start: "end",
      end: "start",
      "self-end": "self-start",
      "self-start": "self-end"
    },
    "flip-start": {
      top: "left",
      left: "top",
      right: "bottom",
      bottom: "right"
    }
  };
  var fg = {
    "flip-block": {
      top: "bottom",
      bottom: "top",
      start: "end",
      end: "start"
    },
    "flip-inline": {
      left: "right",
      right: "left",
      start: "end",
      end: "start"
    },
    "flip-start": {
      // TODO: Requires fuller logic
    }
  };
  function pg(e2, t2) {
    return ug[t2][e2] || e2;
  }
  function dg(e2, t2) {
    return hg[t2][e2] || e2;
  }
  function mg(e2, t2) {
    if (t2 === "flip-start")
      return e2;
    {
      const n2 = fg[t2];
      return e2.split("-").map((r2) => n2[r2] || r2).join("-");
    }
  }
  function gg(e2, t2, n2) {
    if (e2 === "margin") {
      const [r2, i2, o2, s2] = t2.children.toArray();
      n2 === "flip-block" ? s2 ? t2.children.fromArray([o2, i2, r2, s2]) : o2 && t2.children.fromArray([o2, i2, r2]) : n2 === "flip-inline" && s2 && t2.children.fromArray([r2, s2, o2, i2]);
    } else if (e2 === "margin-block") {
      const [r2, i2] = t2.children.toArray();
      n2 === "flip-block" && i2 && t2.children.fromArray([i2, r2]);
    } else if (e2 === "margin-inline") {
      const [r2, i2] = t2.children.toArray();
      n2 === "flip-inline" && i2 && t2.children.fromArray([i2, r2]);
    }
  }
  var bg = (e2, t2) => {
    var i2;
    return ((i2 = Be(`#id{${e2}: ${t2};}`).children.first) == null ? void 0 : i2.block.children.first).value;
  };
  function sa(e2, t2) {
    const n2 = {};
    return Object.entries(e2).forEach(([r2, i2]) => {
      var l2;
      const o2 = r2, s2 = bg(o2, i2), c = pg(o2, t2);
      c !== o2 && ((l2 = n2[o2]) != null || (n2[o2] = "revert")), Fe(s2, {
        visit: "Function",
        enter(a2) {
          Ir(a2) && a2.children.forEach((u) => {
            Ot(u) && ia(u.name) && (u.name = dg(u.name, t2));
          });
        }
      }), o2 === "position-area" && s2.children.forEach((a2) => {
        Ot(a2) && oa(a2.name) && (a2.name = mg(a2.name, t2));
      }), o2.startsWith("margin") && gg(o2, s2, t2), n2[c] = le(s2);
    }), n2;
  }
  function aa(e2) {
    const t2 = _m(e2), n2 = [];
    return t2.forEach((r2) => {
      const i2 = {
        atRules: [],
        tactics: [],
        positionAreas: []
      };
      r2.forEach((o2) => {
        og(o2.name) ? i2.tactics.push(o2.name) : o2.name.startsWith("--") ? i2.atRules.push(o2.name) : oa(o2.name) && i2.positionAreas.push(o2.name);
      }), i2.positionAreas.length ? n2.push({
        positionArea: i2.positionAreas[0],
        type: "position-area"
      }) : i2.atRules.length && i2.tactics.length ? n2.push({
        tactics: i2.tactics,
        atRule: i2.atRules[0],
        type: "at-rule-with-try-tactic"
      }) : i2.atRules.length ? n2.push({
        atRule: i2.atRules[0],
        type: "at-rule"
      }) : i2.tactics.length && n2.push({
        tactics: i2.tactics,
        type: "try-tactic"
      });
    }), n2;
  }
  function yg(e2) {
    return tg(e2) && e2.value.children.first ? aa(e2.value.children) : [];
  }
  function kg(e2) {
    if (rg(e2) && e2.value.children.first) {
      const t2 = un(e2);
      let n2;
      const r2 = t2.value.children.first.name;
      r2 && sg(r2) && (n2 = r2, t2.value.children.shift());
      const i2 = aa(t2.value.children);
      return { order: n2, options: i2 };
    }
    return {};
  }
  function xg(e2) {
    return ng(e2) && e2.value.children.first ? {
      order: e2.value.children.first.name
    } : {};
  }
  function wg(e2) {
    const { order: t2, options: n2 } = kg(e2);
    if (t2 || n2)
      return { order: t2, options: n2 };
    const { order: r2 } = xg(e2), i2 = yg(e2);
    return r2 || i2 ? { order: r2, options: i2 } : {};
  }
  function vg(e2) {
    return zt(e2.property) || qm(e2.property) || vn(e2.property) || Gm(e2.property) || ["position-anchor", "position-area"].includes(e2.property);
  }
  function Sg(e2) {
    var t2, n2;
    if (ig(e2) && ((t2 = e2.prelude) != null && t2.value) && ((n2 = e2.block) != null && n2.children)) {
      const r2 = e2.prelude.value, i2 = e2.block.children.filter(
        (s2) => eg(s2) && vg(s2)
      ), o2 = {
        uuid: `${r2}-try-${ke(12)}`,
        declarations: Object.fromEntries(
          i2.map((s2) => [s2.property, le(s2.value)])
        )
      };
      return { name: r2, tryBlock: o2 };
    }
    return {};
  }
  function Cg(e2) {
    const t2 = {}, n2 = {}, r2 = {};
    for (const i2 of e2) {
      const o2 = Be(i2.css);
      Fe(o2, {
        visit: "Atrule",
        enter(s2) {
          const { name: c, tryBlock: l2 } = Sg(s2);
          c && l2 && (t2[c] = l2);
        }
      });
    }
    for (const i2 of e2) {
      let o2 = false;
      const s2 = /* @__PURE__ */ new Set(), c = Be(i2.css);
      Fe(c, {
        visit: "Declaration",
        enter(l2) {
          var w;
          const a2 = (w = this.rule) == null ? void 0 : w.prelude, u = ar(a2);
          if (!u.length) return;
          const { order: h2, options: d } = wg(l2), m = {};
          h2 && (m.order = h2), u.forEach(({ selector: k }) => {
            var C, b;
            d == null || d.forEach((x) => {
              var v, A, P;
              let T;
              if (x.type === "at-rule")
                T = x.atRule;
              else if (x.type === "try-tactic") {
                T = `${k}-${x.tactics.join("-")}`;
                const O = ag(
                  k,
                  x.tactics
                );
                O && (t2[T] = {
                  uuid: `${k}-${x.tactics.join("-")}-try-${ke(12)}`,
                  declarations: O
                });
              } else if (x.type === "at-rule-with-try-tactic") {
                T = `${k}-${x.atRule}-${x.tactics.join("-")}`;
                const O = t2[x.atRule], f = lg(
                  O,
                  x.tactics
                );
                f && (t2[T] = {
                  uuid: `${k}-${x.atRule}-${x.tactics.join("-")}-try-${ke(12)}`,
                  declarations: f
                });
              }
              if (T && t2[T]) {
                const O = `[data-anchor-polyfill="${t2[T].uuid}"]`;
                (v = n2[O]) != null || (n2[O] = []), n2[O].push(k), s2.has(T) || ((A = m.fallbacks) != null || (m.fallbacks = []), m.fallbacks.push(t2[T]), s2.add(T), (P = this.stylesheet) == null || P.children.prependData({
                  type: "Rule",
                  prelude: {
                    type: "Raw",
                    value: O
                  },
                  block: {
                    type: "Block",
                    children: new q().fromArray(
                      Object.entries(t2[T].declarations).map(
                        ([f, p]) => ({
                          type: "Declaration",
                          important: true,
                          property: f,
                          value: {
                            type: "Raw",
                            value: p
                          }
                        })
                      )
                    )
                  }
                }), o2 = true);
              }
            }), Object.keys(m).length > 0 && (r2[k] ? (m.order && (r2[k].order = m.order), m.fallbacks && ((b = (C = r2[k]).fallbacks) != null || (C.fallbacks = []), r2[k].fallbacks.push(
              ...m.fallbacks
            ))) : r2[k] = m);
          });
        }
      }), o2 && (i2.css = le(c), i2.changed = true);
    }
    return { fallbackTargets: n2, validPositions: r2 };
  }
  function Tg(e2, t2) {
    return !e2 || e2 === t2 ? false : la(e2) ? e2.document.contains(t2) : e2.contains(t2);
  }
  function la(e2) {
    return !!(e2 && e2 === e2.window);
  }
  function Ag(e2) {
    return gt(e2, "position", "fixed");
  }
  function cr(e2) {
    return !!(e2 && (Ag(e2) || gt(e2, "position", "absolute")));
  }
  function qi(e2, t2) {
    return e2.compareDocumentPosition(t2) & Node.DOCUMENT_POSITION_FOLLOWING;
  }
  function Og(e2) {
    return H(this, null, function* () {
      return yield ee.getOffsetParent(e2);
    });
  }
  function qn(e2) {
    return H(this, null, function* () {
      if (!["absolute", "fixed"].includes(Ce(e2, "position")))
        return yield Og(e2);
      let t2 = e2.parentElement;
      for (; t2; ) {
        if (!gt(t2, "position", "static") && gt(t2, "display", "block"))
          return t2;
        t2 = t2.parentElement;
      }
      return window;
    });
  }
  function Eg(e2, t2, n2, r2) {
    return H(this, null, function* () {
      const i2 = yield qn(e2), o2 = yield qn(n2);
      if (!(Tg(o2, e2) || la(o2)) || i2 === o2 && !(!cr(e2) || qi(e2, n2)))
        return false;
      if (i2 !== o2) {
        let s2;
        const c = [];
        for (s2 = i2; s2 && s2 !== o2 && s2 !== window; )
          c.push(s2), s2 = yield qn(s2);
        const l2 = c[c.length - 1];
        if (l2 instanceof HTMLElement && !(!cr(l2) || qi(l2, n2)))
          return false;
      }
      {
        let s2 = e2.parentElement;
        for (; s2; ) {
          if (gt(s2, "content-visibility", "hidden"))
            return false;
          s2 = s2.parentElement;
        }
      }
      return !(t2 && r2 && Gi(e2, t2, r2) !== Gi(n2, t2, r2));
    });
  }
  function Gi(e2, t2, n2) {
    for (; !(e2.matches(n2) && jm(e2, t2)); ) {
      if (!e2.parentElement)
        return null;
      e2 = e2.parentElement;
    }
    return e2;
  }
  function Lg(e2, t2, n2, r2) {
    return H(this, null, function* () {
      if (!(e2 instanceof HTMLElement && n2.length && cr(e2)))
        return null;
      const i2 = n2.flatMap(Nm).filter((s2) => Dm(s2, t2)), o2 = r2.map((s2) => s2.selector).join(",") || null;
      for (let s2 = i2.length - 1; s2 >= 0; s2--) {
        const c = i2[s2], l2 = "fakePseudoElement" in c;
        if (yield Eg(
          l2 ? c.fakePseudoElement : c,
          t2,
          e2,
          o2
        ))
          return l2 && c.removeFakePseudoElement(), c;
      }
      return null;
    });
  }
  function $g(e2) {
    return e2.type === "Declaration" && e2.property === "anchor-name";
  }
  function _g(e2) {
    return e2.type === "Declaration" && e2.property === "anchor-scope";
  }
  function ca(e2) {
    return !!(e2 && e2.type === "Function" && e2.name === "anchor-size");
  }
  function Xt(e2) {
    return !!(e2 && e2.type === "Function" && e2.name === "var");
  }
  function Ot(e2) {
    return !!(e2.type === "Identifier" && e2.name);
  }
  function Pg(e2) {
    return !!(e2.type === "Percentage" && e2.value);
  }
  function Vi(e2, t2) {
    let n2, r2, i2, o2 = "", s2 = false, c;
    const l2 = [];
    e2.children.toArray().forEach((d) => {
      if (s2) {
        o2 = `${o2}${le(d)}`;
        return;
      }
      if (d.type === "Operator" && d.value === ",") {
        s2 = true;
        return;
      }
      l2.push(d);
    });
    let [a2, u] = l2;
    if (u || (u = a2, a2 = void 0), a2 && (Ot(a2) && a2.name.startsWith("--") ? n2 = a2.name : Xt(a2) && a2.children.first && (c = a2.children.first.name)), u)
      if (Ir(e2)) {
        if (Ot(u) && ia(u.name))
          r2 = u.name;
        else if (Pg(u)) {
          const d = Number(u.value);
          r2 = Number.isNaN(d) ? void 0 : d;
        }
      } else ca(e2) && Ot(u) && Qm(u.name) && (i2 = u.name);
    const h2 = `--anchor-${ke(12)}`;
    return Object.assign(e2, {
      type: "Raw",
      value: `var(${h2})`,
      children: null
    }), Reflect.deleteProperty(e2, "name"), {
      anchorName: n2,
      anchorSide: r2,
      anchorSize: i2,
      fallbackValue: o2 || "0px",
      customPropName: c,
      uuid: h2
    };
  }
  function Ki(e2) {
    return e2.value.children.map(
      ({ name: t2 }) => t2
    );
  }
  var at = {};
  var je = {};
  var Ke = {};
  var Et = {};
  var Ve = {};
  function zg() {
    at = {}, je = {}, Ke = {}, Et = {}, Ve = {};
  }
  function Ig(e2, t2) {
    var n2;
    if ((Ir(e2) || ca(e2)) && t2) {
      if (t2.property.startsWith("--")) {
        const r2 = le(t2.value), i2 = Vi(e2);
        return Et[i2.uuid] = r2, Ke[t2.property] = [
          ...(n2 = Ke[t2.property]) != null ? n2 : [],
          i2
        ], { changed: true };
      }
      if (zt(t2.property) || vn(t2.property)) {
        const r2 = Vi(e2);
        return { prop: t2.property, data: r2, changed: true };
      }
    }
    return {};
  }
  function Rg(e2, t2) {
    return H(this, null, function* () {
      let n2 = t2.anchorName;
      const r2 = t2.customPropName;
      if (e2 && !n2) {
        const c = Ce(
          e2,
          "position-anchor"
        );
        c ? n2 = c : r2 && (n2 = Ce(e2, r2));
      }
      const i2 = n2 ? at[n2] || [] : [], o2 = n2 ? je[Js.All] || [] : [], s2 = n2 ? je[n2] || [] : [];
      return yield Lg(
        e2,
        n2 || null,
        i2,
        [...o2, ...s2]
      );
    });
  }
  function Mg(e2) {
    return H(this, null, function* () {
      var l2, a2, u, h2, d, m, w;
      const t2 = {};
      zg();
      const { fallbackTargets: n2, validPositions: r2 } = Cg(e2);
      for (const k of e2) {
        let C = false;
        const b = Be(k.css);
        Fe(b, function(x) {
          var f, p, S, g, K;
          const T = (f = this.rule) == null ? void 0 : f.prelude, v = ar(T);
          if ($g(x) && v.length)
            for (const R of Ki(x))
              (p = at[R]) != null || (at[R] = []), at[R].push(...v);
          if (_g(x) && v.length)
            for (const R of Ki(x))
              (S = je[R]) != null || (je[R] = []), je[R].push(...v);
          const {
            prop: A,
            data: P,
            changed: O
          } = Ig(x, this.declaration);
          if (A && P && v.length)
            for (const { selector: R } of v)
              t2[R] = Z(_({}, t2[R]), {
                [A]: [...(K = (g = t2[R]) == null ? void 0 : g[A]) != null ? K : [], P]
              });
          O && (C = true);
        }), C && (k.css = le(b), k.changed = true);
      }
      const i2 = new Set(Object.keys(Ke)), o2 = {}, s2 = (k) => {
        var x, T, v, A, P;
        const C = [], b = new Set((T = (x = o2[k]) == null ? void 0 : x.names) != null ? T : []);
        for (; b.size > 0; )
          for (const O of b)
            C.push(...(v = Ke[O]) != null ? v : []), b.delete(O), (P = (A = o2[O]) == null ? void 0 : A.names) != null && P.length && o2[O].names.forEach((f) => b.add(f));
        return C;
      };
      for (; i2.size > 0; ) {
        const k = [];
        for (const C of e2) {
          let b = false;
          const x = Be(C.css);
          Fe(x, {
            visit: "Function",
            enter(T) {
              var O, f;
              const v = (O = this.rule) == null ? void 0 : O.prelude, A = this.declaration, P = A == null ? void 0 : A.property;
              if ((v == null ? void 0 : v.children.isEmpty) === false && Xt(T) && A && P && T.children.first && i2.has(
                T.children.first.name
              ) && // For now, we only want assignments to other CSS custom properties
              P.startsWith("--")) {
                const p = T.children.first, S = (f = Ke[p.name]) != null ? f : [], g = s2(p.name);
                if (!(S.length || g.length))
                  return;
                const K = `${p.name}-anchor-${ke(12)}`, R = le(A.value);
                Et[K] = R, o2[P] || (o2[P] = { names: [], uuids: [] });
                const be = o2[P];
                be.names.includes(p.name) || be.names.push(p.name), be.uuids.push(K), k.push(P), p.name = K, b = true;
              }
            }
          }), b && (C.css = le(x), C.changed = true);
        }
        i2.clear(), k.forEach((C) => i2.add(C));
      }
      for (const k of e2) {
        let C = false;
        const b = Be(k.css);
        Fe(b, {
          visit: "Function",
          enter(x) {
            var P, O, f, p, S, g, K;
            const T = (P = this.rule) == null ? void 0 : P.prelude, v = this.declaration, A = v == null ? void 0 : v.property;
            if ((T == null ? void 0 : T.children.isEmpty) === false && Xt(x) && v && A && x.children.first && // Now we only want assignments to inset/sizing properties
            (zt(A) || vn(A))) {
              const R = x.children.first, be = (O = Ke[R.name]) != null ? O : [], Y = s2(R.name);
              if (!(be.length || Y.length))
                return;
              const ze = `${A}-${ke(12)}`;
              if (Y.length) {
                const Ze = /* @__PURE__ */ new Set([R.name]);
                for (; Ze.size > 0; )
                  for (const Je of Ze) {
                    const ie = o2[Je];
                    if ((f = ie == null ? void 0 : ie.names) != null && f.length && ((p = ie == null ? void 0 : ie.uuids) != null && p.length))
                      for (const et of ie.names)
                        for (const tt of ie.uuids)
                          Ve[tt] = Z(_({}, Ve[tt]), {
                            // - `key` (`propUuid`) is the property-specific
                            //   uuid to append to the new custom property name
                            // - `value` is the new property-specific custom
                            //   property value to use
                            [ze]: `${et}-${ze}`
                          });
                    Ze.delete(Je), (S = ie == null ? void 0 : ie.names) != null && S.length && ie.names.forEach((et) => Ze.add(et));
                  }
              }
              const Ue = ar(T);
              for (const Ze of [...be, ...Y]) {
                const Je = _({}, Ze), ie = `--anchor-${ke(12)}-${A}`, et = Je.uuid;
                Je.uuid = ie;
                for (const { selector: tt } of Ue)
                  t2[tt] = Z(_({}, t2[tt]), {
                    [A]: [...(K = (g = t2[tt]) == null ? void 0 : g[A]) != null ? K : [], Je]
                  });
                Ve[et] = Z(_({}, Ve[et]), {
                  // - `key` (`propUuid`) is the property-specific
                  //   uuid to append to the new custom property name
                  // - `value` is the new property-specific custom
                  //   property value to use
                  [ze]: ie
                });
              }
              R.name = `${R.name}-${ze}`, C = true;
            }
          }
        }), C && (k.css = le(b), k.changed = true);
      }
      if (Object.keys(Ve).length > 0)
        for (const k of e2) {
          let C = false;
          const b = Be(k.css);
          Fe(b, {
            visit: "Function",
            enter(x) {
              var T, v, A, P;
              if (Xt(x) && ((v = (T = x.children.first) == null ? void 0 : T.name) != null && v.startsWith(
                "--"
              )) && ((P = (A = this.declaration) == null ? void 0 : A.property) != null && P.startsWith("--")) && this.block) {
                const O = x.children.first, f = Ve[O.name];
                if (f)
                  for (const [p, S] of Object.entries(f))
                    this.block.children.appendData({
                      type: "Declaration",
                      important: false,
                      property: `${this.declaration.property}-${p}`,
                      value: {
                        type: "Raw",
                        value: le(this.declaration.value).replace(
                          `var(${O.name})`,
                          `var(${S})`
                        )
                      }
                    }), C = true;
                Et[O.name] && (this.declaration.value = {
                  type: "Raw",
                  value: Et[O.name]
                }, C = true);
              }
            }
          }), C && (k.css = le(b), k.changed = true);
        }
      const c = /* @__PURE__ */ new Map();
      for (const [k, C] of Object.entries(t2)) {
        let b;
        k.startsWith("[data-anchor-polyfill=") && ((l2 = n2[k]) != null && l2.length) ? b = document.querySelectorAll(n2[k].join(",")) : b = document.querySelectorAll(k);
        for (const [x, T] of Object.entries(C))
          for (const v of T)
            for (const A of b) {
              const P = yield Rg(A, v), O = `--anchor-${ke(12)}`;
              c.set(A, Z(_({}, (a2 = c.get(A)) != null ? a2 : {}), {
                [v.uuid]: O
              })), A.setAttribute(
                "style",
                `${v.uuid}: var(${O}); ${(u = A.getAttribute("style")) != null ? u : ""}`
              ), r2[k] = Z(_({}, r2[k]), {
                declarations: Z(_({}, (h2 = r2[k]) == null ? void 0 : h2.declarations), {
                  [x]: [
                    ...(w = (m = (d = r2[k]) == null ? void 0 : d.declarations) == null ? void 0 : m[x]) != null ? w : [],
                    Z(_({}, v), { anchorEl: P, targetEl: A, uuid: O })
                  ]
                })
              });
            }
      }
      return { rules: r2, inlineStyles: c, anchorScopes: je };
    });
  }
  var Ng = [
    "crossorigin",
    "href",
    "integrity",
    "referrerpolicy"
  ];
  function Yi(e2, t2, n2 = false) {
    return H(this, null, function* () {
      const r2 = [];
      for (const { el: i2, css: o2, changed: s2 } of e2) {
        const c = { el: i2, css: o2, changed: false };
        if (s2) {
          if (i2.tagName.toLowerCase() === "style")
            i2.innerHTML = o2;
          else if (i2 instanceof HTMLLinkElement) {
            const l2 = new Blob([o2], { type: "text/css" }), a2 = URL.createObjectURL(l2), u = document.createElement("link");
            for (const d of i2.getAttributeNames())
              if (!d.startsWith("on") && !Ng.includes(d)) {
                const m = i2.getAttribute(d);
                m !== null && u.setAttribute(d, m);
              }
            u.setAttribute("href", a2);
            const h2 = new Promise((d) => {
              u.onload = d;
            });
            i2.insertAdjacentElement("beforebegin", u), yield h2, i2.remove(), c.el = u;
          } else if (i2.hasAttribute("data-has-inline-styles")) {
            const l2 = i2.getAttribute("data-has-inline-styles");
            if (l2) {
              const a2 = `[data-has-inline-styles="${l2}"]{`;
              let h2 = o2.slice(a2.length, 0 - "}".length);
              const d = t2 == null ? void 0 : t2.get(i2);
              if (d)
                for (const [m, w] of Object.entries(d))
                  h2 = `${m}: var(${w}); ${h2}`;
              i2.setAttribute("style", h2);
            }
          }
        }
        n2 && i2.hasAttribute("data-has-inline-styles") && i2.removeAttribute("data-has-inline-styles"), r2.push(c);
      }
      return r2;
    });
  }
  var Dg = Z(_({}, ee), { _c: /* @__PURE__ */ new Map() });
  var ua = (e2) => H(void 0, null, function* () {
    var n2, r2, i2;
    let t2 = yield (n2 = ee.getOffsetParent) == null ? void 0 : n2.call(ee, e2);
    return (yield (r2 = ee.isElement) == null ? void 0 : r2.call(ee, t2)) || (t2 = (yield (i2 = ee.getDocumentElement) == null ? void 0 : i2.call(ee, e2)) || window.document.documentElement), t2;
  });
  var jg = (e2, t2) => {
    let n2;
    switch (e2) {
      case "start":
      case "self-start":
        n2 = 0;
        break;
      case "end":
      case "self-end":
        n2 = 100;
        break;
      default:
        typeof e2 == "number" && !Number.isNaN(e2) && (n2 = e2);
    }
    if (n2 !== void 0)
      return t2 ? 100 - n2 : n2;
  };
  var Fg = (e2, t2) => {
    let n2;
    switch (e2) {
      case "block":
      case "self-block":
        n2 = t2 ? "width" : "height";
        break;
      case "inline":
      case "self-inline":
        n2 = t2 ? "height" : "width";
        break;
    }
    return n2;
  };
  var Qi = (e2) => {
    switch (e2) {
      case "top":
      case "bottom":
        return "y";
      case "left":
      case "right":
        return "x";
    }
    return null;
  };
  var Bg = (e2) => {
    switch (e2) {
      case "x":
        return "width";
      case "y":
        return "height";
    }
    return null;
  };
  var Xi = (e2) => Ce(e2, "display") === "inline";
  var Zi = (e2, t2) => (t2 === "x" ? ["border-left-width", "border-right-width"] : ["border-top-width", "border-bottom-width"]).reduce(
    (r2, i2) => r2 + parseInt(Ce(e2, i2), 10),
    0
  ) || 0;
  var Ut = (e2, t2) => parseInt(Ce(e2, `margin-${t2}`), 10) || 0;
  var Wg = (e2) => ({
    top: Ut(e2, "top"),
    right: Ut(e2, "right"),
    bottom: Ut(e2, "bottom"),
    left: Ut(e2, "left")
  });
  var Ji = (s2) => H(void 0, [s2], function* ({
    targetEl: e2,
    targetProperty: t2,
    anchorRect: n2,
    anchorSide: r2,
    anchorSize: i2,
    fallback: o2
  }) {
    var c;
    if (!((i2 || r2 !== void 0) && e2 && n2))
      return o2;
    if (i2) {
      if (!vn(t2))
        return o2;
      let l2;
      switch (i2) {
        case "width":
        case "height":
          l2 = i2;
          break;
        default: {
          let a2 = false;
          const u = Ce(e2, "writing-mode");
          a2 = u.startsWith("vertical-") || u.startsWith("sideways-"), l2 = Fg(i2, a2);
        }
      }
      return l2 ? `${n2[l2]}px` : o2;
    }
    if (r2 !== void 0) {
      let l2, a2;
      const u = Qi(t2);
      if (!(zt(t2) && u && (!zt(r2) || u === Qi(r2))))
        return o2;
      switch (r2) {
        case "left":
          l2 = 0;
          break;
        case "right":
          l2 = 100;
          break;
        case "top":
          l2 = 0;
          break;
        case "bottom":
          l2 = 100;
          break;
        case "center":
          l2 = 50;
          break;
        default:
          if (e2) {
            const m = (yield (c = ee.isRTL) == null ? void 0 : c.call(ee, e2)) || false;
            l2 = jg(r2, m);
          }
      }
      const h2 = typeof l2 == "number" && !Number.isNaN(l2), d = Bg(u);
      if (h2 && d) {
        (t2 === "bottom" || t2 === "right") && (a2 = yield ua(e2));
        let m = n2[u] + n2[d] * (l2 / 100);
        switch (t2) {
          case "bottom": {
            if (!a2)
              break;
            let w = a2.clientHeight;
            if (w === 0 && Xi(a2)) {
              const k = Zi(a2, u);
              w = a2.offsetHeight - k;
            }
            m = w - m;
            break;
          }
          case "right": {
            if (!a2)
              break;
            let w = a2.clientWidth;
            if (w === 0 && Xi(a2)) {
              const k = Zi(a2, u);
              w = a2.offsetWidth - k;
            }
            m = w - m;
            break;
          }
        }
        return `${m}px`;
      }
    }
    return o2;
  });
  function Hg(e2, t2 = false) {
    return H(this, null, function* () {
      const n2 = document.documentElement;
      for (const [r2, i2] of Object.entries(e2))
        for (const o2 of i2) {
          const s2 = o2.anchorEl, c = o2.targetEl;
          if (s2 && c)
            lo(
              s2,
              c,
              () => H(this, null, function* () {
                const l2 = yield ee.getElementRects({
                  reference: s2,
                  floating: c,
                  strategy: "absolute"
                }), a2 = yield Ji({
                  targetEl: c,
                  targetProperty: r2,
                  anchorRect: l2.reference,
                  anchorSide: o2.anchorSide,
                  anchorSize: o2.anchorSize,
                  fallback: o2.fallbackValue
                });
                n2.style.setProperty(o2.uuid, a2);
              }),
              { animationFrame: t2 }
            );
          else {
            const l2 = yield Ji({
              targetProperty: r2,
              anchorSide: o2.anchorSide,
              anchorSize: o2.anchorSize,
              fallback: o2.fallbackValue
            });
            n2.style.setProperty(o2.uuid, l2);
          }
        }
    });
  }
  function eo(e2, t2) {
    return H(this, null, function* () {
      const n2 = yield ee.getElementRects({
        reference: e2,
        floating: e2,
        strategy: "absolute"
      });
      return yield Ma(
        {
          x: e2.offsetLeft,
          y: e2.offsetTop,
          platform: Dg,
          rects: n2,
          elements: { floating: e2 },
          strategy: "absolute"
        },
        {
          boundary: t2,
          rootBoundary: "document",
          padding: Wg(e2)
        }
      );
    });
  }
  function Ug(e2, t2, n2 = false) {
    return H(this, null, function* () {
      if (!t2.length)
        return;
      const r2 = document.querySelectorAll(e2);
      for (const i2 of r2) {
        let o2 = false;
        const s2 = yield ua(i2);
        lo(
          // We're just checking whether the target element overflows, so we don't
          // care about the position of the anchor element in this case. Passing in
          // an empty object instead of a reference element avoids unnecessarily
          // watching for irrelevant changes.
          {},
          i2,
          () => H(this, null, function* () {
            if (o2)
              return;
            o2 = true, i2.removeAttribute("data-anchor-polyfill");
            const c = yield eo(i2, s2);
            if (Object.values(c).every((l2) => l2 <= 0)) {
              i2.removeAttribute("data-anchor-polyfill-last-successful"), o2 = false;
              return;
            }
            for (const [l2, { uuid: a2 }] of t2.entries()) {
              i2.setAttribute("data-anchor-polyfill", a2);
              const u = yield eo(i2, s2);
              if (Object.values(u).every((h2) => h2 <= 0)) {
                i2.setAttribute("data-anchor-polyfill-last-successful", a2), o2 = false;
                break;
              }
              if (l2 === t2.length - 1) {
                const h2 = i2.getAttribute(
                  "data-anchor-polyfill-last-successful"
                );
                h2 ? i2.setAttribute("data-anchor-polyfill", h2) : i2.removeAttribute("data-anchor-polyfill"), o2 = false;
                break;
              }
            }
          }),
          { animationFrame: n2, layoutShift: false }
        );
      }
    });
  }
  function qg(e2, t2 = false) {
    return H(this, null, function* () {
      var n2, r2;
      for (const i2 of Object.values(e2))
        yield Hg((n2 = i2.declarations) != null ? n2 : {}, t2);
      for (const [i2, o2] of Object.entries(e2))
        yield Ug(
          i2,
          (r2 = o2.fallbacks) != null ? r2 : [],
          t2
        );
    });
  }
  function Gg(e2 = {}) {
    const t2 = typeof e2 == "boolean" ? { useAnimationFrame: e2 } : e2, n2 = t2.useAnimationFrame === void 0 ? !!window.UPDATE_ANCHOR_ON_ANIMATION_FRAME : t2.useAnimationFrame;
    return Array.isArray(t2.elements) || (t2.elements = void 0), Object.assign(t2, { useAnimationFrame: n2 });
  }
  function rb(e2) {
    return H(this, null, function* () {
      const t2 = Gg(
        e2 != null ? e2 : window.ANCHOR_POSITIONING_POLYFILL_OPTIONS
      );
      let n2 = yield Um(t2.elements, t2.excludeInlineStyles);
      (yield zm(n2)) && (n2 = yield Yi(n2));
      const { rules: i2, inlineStyles: o2 } = yield Mg(n2);
      return Object.values(i2).length && (yield Yi(n2, o2, true), yield qg(i2, t2.useAnimationFrame)), i2;
    });
  }

  // node_modules/preline/dist/carousel.mjs
  var t = { 189: (t2, e2, s2) => {
    s2.d(e2, { LO: () => i2 });
    const i2 = { xs: 0, sm: 640, md: 768, lg: 1024, xl: 1280, "2xl": 1536 };
  }, 615: (t2, e2, s2) => {
    s2.d(e2, { A: () => i2 });
    class i2 {
      constructor(t3, e3, s3) {
        this.el = t3, this.options = e3, this.events = s3, this.el = t3, this.options = e3, this.events = {};
      }
      createCollection(t3, e3) {
        var s3;
        t3.push({ id: (null === (s3 = null == e3 ? void 0 : e3.el) || void 0 === s3 ? void 0 : s3.id) || t3.length + 1, element: e3 });
      }
      fireEvent(t3, e3 = null) {
        if (this.events.hasOwnProperty(t3)) return this.events[t3](e3);
      }
      on(t3, e3) {
        this.events[t3] = e3;
      }
    }
  }, 926: (t2, e2, s2) => {
    s2.d(e2, { en: () => r2, fc: () => n2, sg: () => i2 });
    const i2 = (t3, e3 = 200) => {
      let s3;
      return (...i3) => {
        clearTimeout(s3), s3 = setTimeout(() => {
          t3.apply(void 0, i3);
        }, e3);
      };
    }, n2 = (t3) => {
      const e3 = document.createElement("template");
      return t3 = t3.trim(), e3.innerHTML = t3, e3.content.firstChild;
    }, r2 = (t3, e3, s3 = " ", i3 = "add") => {
      t3.split(s3).forEach((t4) => "add" === i3 ? e3.classList.add(t4) : e3.classList.remove(t4));
    };
  } };
  var e = {};
  function s(i2) {
    var n2 = e[i2];
    if (void 0 !== n2) return n2.exports;
    var r2 = e[i2] = { exports: {} };
    return t[i2](r2, r2.exports, s), r2.exports;
  }
  s.d = (t2, e2) => {
    for (var i2 in e2) s.o(e2, i2) && !s.o(t2, i2) && Object.defineProperty(t2, i2, { enumerable: true, get: e2[i2] });
  }, s.o = (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2);
  var i = {};
  s.d(i, { A: () => h });
  var n = s(926);
  var r = s(615);
  var o = s(189);
  var l = class _l2 extends r.A {
    constructor(t2, e2) {
      var s2, i2, n2, r2, o2;
      super(t2, e2);
      const l2 = t2.getAttribute("data-hs-carousel"), h2 = l2 ? JSON.parse(l2) : {}, a2 = Object.assign(Object.assign({}, h2), e2);
      this.currentIndex = a2.currentIndex || 0, this.loadingClasses = a2.loadingClasses ? `${a2.loadingClasses}`.split(",") : null, this.dotsItemClasses = a2.dotsItemClasses ? a2.dotsItemClasses : null, this.isAutoHeight = void 0 !== a2.isAutoHeight && a2.isAutoHeight, this.isAutoPlay = void 0 !== a2.isAutoPlay && a2.isAutoPlay, this.isCentered = void 0 !== a2.isCentered && a2.isCentered, this.isDraggable = void 0 !== a2.isDraggable && a2.isDraggable, this.isInfiniteLoop = void 0 !== a2.isInfiniteLoop && a2.isInfiniteLoop, this.isRTL = void 0 !== a2.isRTL && a2.isRTL, this.isSnap = void 0 !== a2.isSnap && a2.isSnap, this.hasSnapSpacers = void 0 === a2.hasSnapSpacers || a2.hasSnapSpacers, this.speed = a2.speed || 4e3, this.updateDelay = a2.updateDelay || 0, this.slidesQty = a2.slidesQty || 1, this.loadingClassesRemove = (null === (s2 = this.loadingClasses) || void 0 === s2 ? void 0 : s2[0]) ? this.loadingClasses[0].split(" ") : "opacity-0", this.loadingClassesAdd = (null === (i2 = this.loadingClasses) || void 0 === i2 ? void 0 : i2[1]) ? this.loadingClasses[1].split(" ") : "", this.afterLoadingClassesAdd = (null === (n2 = this.loadingClasses) || void 0 === n2 ? void 0 : n2[2]) ? this.loadingClasses[2].split(" ") : "", this.container = this.el.querySelector(".hs-carousel") || null, this.inner = this.el.querySelector(".hs-carousel-body") || null, this.slides = this.el.querySelectorAll(".hs-carousel-slide") || [], this.prev = this.el.querySelector(".hs-carousel-prev") || null, this.next = this.el.querySelector(".hs-carousel-next") || null, this.dots = this.el.querySelector(".hs-carousel-pagination") || null, this.info = this.el.querySelector(".hs-carousel-info") || null, this.infoTotal = (null === (r2 = null == this ? void 0 : this.info) || void 0 === r2 ? void 0 : r2.querySelector(".hs-carousel-info-total")) || null, this.infoCurrent = (null === (o2 = null == this ? void 0 : this.info) || void 0 === o2 ? void 0 : o2.querySelector(".hs-carousel-info-current")) || null, this.sliderWidth = this.el.getBoundingClientRect().width, this.isDragging = false, this.dragStartX = null, this.initialTranslateX = null, this.touchX = { start: 0, end: 0 }, this.resizeContainer = document.querySelector("body"), this.resizeContainerWidth = 0, this.init();
    }
    setIsSnap() {
      const t2 = this.container.getBoundingClientRect(), e2 = t2.left + t2.width / 2;
      let s2 = null, i2 = null, n2 = 1 / 0;
      Array.from(this.inner.children).forEach((t3) => {
        const i3 = t3.getBoundingClientRect(), r2 = this.inner.getBoundingClientRect(), o2 = i3.left + i3.width / 2 - r2.left, l2 = Math.abs(e2 - (r2.left + o2));
        l2 < n2 && (n2 = l2, s2 = t3);
      }), s2 && (i2 = Array.from(this.slides).findIndex((t3) => t3 === s2)), this.setIndex(i2), this.dots && this.setCurrentDot();
    }
    prevClick() {
      this.goToPrev(), this.isAutoPlay && (this.resetTimer(), this.setTimer());
    }
    nextClick() {
      this.goToNext(), this.isAutoPlay && (this.resetTimer(), this.setTimer());
    }
    containerScroll() {
      clearTimeout(this.isScrolling), this.isScrolling = setTimeout(() => {
        this.setIsSnap();
      }, 100);
    }
    elementTouchStart(t2) {
      this.touchX.start = t2.changedTouches[0].screenX;
    }
    elementTouchEnd(t2) {
      this.touchX.end = t2.changedTouches[0].screenX, this.detectDirection();
    }
    innerMouseDown(t2) {
      this.handleDragStart(t2);
    }
    innerTouchStart(t2) {
      this.handleDragStart(t2);
    }
    documentMouseMove(t2) {
      this.handleDragMove(t2);
    }
    documentTouchMove(t2) {
      this.handleDragMove(t2);
    }
    documentMouseUp() {
      this.handleDragEnd();
    }
    documentTouchEnd() {
      this.handleDragEnd();
    }
    dotClick(t2) {
      this.goTo(t2), this.isAutoPlay && (this.resetTimer(), this.setTimer());
    }
    init() {
      this.createCollection(window.$hsCarouselCollection, this), this.inner && (this.calculateWidth(), this.isDraggable && !this.isSnap && this.initDragHandling()), this.prev && (this.onPrevClickListener = () => this.prevClick(), this.prev.addEventListener("click", this.onPrevClickListener)), this.next && (this.onNextClickListener = () => this.nextClick(), this.next.addEventListener("click", this.onNextClickListener)), this.dots && this.initDots(), this.info && this.buildInfo(), this.slides.length && (this.addCurrentClass(), this.isInfiniteLoop || this.addDisabledClass(), this.isAutoPlay && this.autoPlay()), setTimeout(() => {
        this.isSnap && this.setIsSnap(), this.loadingClassesRemove && ("string" == typeof this.loadingClassesRemove ? this.inner.classList.remove(this.loadingClassesRemove) : this.inner.classList.remove(...this.loadingClassesRemove)), this.loadingClassesAdd && ("string" == typeof this.loadingClassesAdd ? this.inner.classList.add(this.loadingClassesAdd) : this.inner.classList.add(...this.loadingClassesAdd)), this.inner && this.afterLoadingClassesAdd && setTimeout(() => {
          "string" == typeof this.afterLoadingClassesAdd ? this.inner.classList.add(this.afterLoadingClassesAdd) : this.inner.classList.add(...this.afterLoadingClassesAdd);
        });
      }, 400), this.isSnap && (this.onContainerScrollListener = () => this.containerScroll(), this.container.addEventListener("scroll", this.onContainerScrollListener)), this.el.classList.add("init"), this.isSnap || (this.onElementTouchStartListener = (t2) => this.elementTouchStart(t2), this.onElementTouchEndListener = (t2) => this.elementTouchEnd(t2), this.el.addEventListener("touchstart", this.onElementTouchStartListener), this.el.addEventListener("touchend", this.onElementTouchEndListener)), this.observeResize();
    }
    initDragHandling() {
      const t2 = this.inner;
      this.onInnerMouseDownListener = (t3) => this.innerMouseDown(t3), this.onInnerTouchStartListener = (t3) => this.innerTouchStart(t3), this.onDocumentMouseMoveListener = (t3) => this.documentMouseMove(t3), this.onDocumentTouchMoveListener = (t3) => this.documentTouchMove(t3), this.onDocumentMouseUpListener = () => this.documentMouseUp(), this.onDocumentTouchEndListener = () => this.documentTouchEnd(), t2 && (t2.addEventListener("mousedown", this.onInnerMouseDownListener), t2.addEventListener("touchstart", this.onInnerTouchStartListener, { passive: true }), document.addEventListener("mousemove", this.onDocumentMouseMoveListener), document.addEventListener("touchmove", this.onDocumentTouchMoveListener, { passive: false }), document.addEventListener("mouseup", this.onDocumentMouseUpListener), document.addEventListener("touchend", this.onDocumentTouchEndListener));
    }
    getTranslateXValue() {
      var t2;
      const e2 = window.getComputedStyle(this.inner).transform;
      if ("none" !== e2) {
        const s2 = null === (t2 = e2.match(/matrix.*\((.+)\)/)) || void 0 === t2 ? void 0 : t2[1].split(", ");
        if (s2) {
          let t3 = parseFloat(6 === s2.length ? s2[4] : s2[12]);
          return this.isRTL && (t3 = -t3), isNaN(t3) || 0 === t3 ? 0 : -t3;
        }
      }
      return 0;
    }
    removeClickEventWhileDragging(t2) {
      t2.preventDefault();
    }
    handleDragStart(t2) {
      t2.preventDefault(), this.isDragging = true, this.dragStartX = this.getEventX(t2), this.initialTranslateX = this.isRTL ? this.getTranslateXValue() : -this.getTranslateXValue(), this.inner.classList.add("dragging");
    }
    handleDragMove(t2) {
      if (!this.isDragging) return;
      this.inner.querySelectorAll("a:not(.prevented-click)").forEach((t3) => {
        t3.classList.add("prevented-click"), t3.addEventListener("click", this.removeClickEventWhileDragging);
      });
      let e2 = this.getEventX(t2) - this.dragStartX;
      this.isRTL && (e2 = -e2);
      const s2 = this.initialTranslateX + e2;
      this.setTranslate((() => {
        let t3 = this.sliderWidth * this.slides.length / this.getCurrentSlidesQty() - this.sliderWidth;
        const e3 = this.sliderWidth, i2 = (e3 - e3 / this.getCurrentSlidesQty()) / 2, n2 = this.isCentered ? i2 : 0;
        this.isCentered && (t3 += i2);
        const r2 = -t3;
        return this.isRTL ? s2 < n2 ? n2 : s2 > t3 ? r2 : -s2 : s2 > n2 ? n2 : s2 < -t3 ? r2 : s2;
      })());
    }
    handleDragEnd() {
      if (!this.isDragging) return;
      this.isDragging = false;
      const t2 = this.sliderWidth / this.getCurrentSlidesQty(), e2 = this.getTranslateXValue();
      let s2 = Math.round(e2 / t2);
      this.isRTL && (s2 = Math.round(e2 / t2)), this.inner.classList.remove("dragging"), setTimeout(() => {
        this.calculateTransform(s2), this.dots && this.setCurrentDot(), this.dragStartX = null, this.initialTranslateX = null, this.inner.querySelectorAll("a.prevented-click").forEach((t3) => {
          t3.classList.remove("prevented-click"), t3.removeEventListener("click", this.removeClickEventWhileDragging);
        });
      });
    }
    getEventX(t2) {
      return t2 instanceof MouseEvent ? t2.clientX : t2.touches[0].clientX;
    }
    getCurrentSlidesQty() {
      if ("object" == typeof this.slidesQty) {
        const t2 = document.body.clientWidth;
        let e2 = 0;
        return Object.keys(this.slidesQty).forEach((s2) => {
          t2 >= (typeof s2 + 1 == "number" ? this.slidesQty[s2] : o.LO[s2]) && (e2 = this.slidesQty[s2]);
        }), e2;
      }
      return this.slidesQty;
    }
    buildSnapSpacers() {
      const t2 = this.inner.querySelector(".hs-snap-before"), e2 = this.inner.querySelector(".hs-snap-after");
      t2 && t2.remove(), e2 && e2.remove();
      const s2 = this.sliderWidth, i2 = s2 / 2 - s2 / this.getCurrentSlidesQty() / 2, r2 = (0, n.fc)(`<div class="hs-snap-before" style="height: 100%; width: ${i2}px"></div>`), o2 = (0, n.fc)(`<div class="hs-snap-after" style="height: 100%; width: ${i2}px"></div>`);
      this.inner.prepend(r2), this.inner.appendChild(o2);
    }
    initDots() {
      this.el.querySelectorAll(".hs-carousel-pagination-item").length ? this.setDots() : this.buildDots(), this.dots && this.setCurrentDot();
    }
    buildDots() {
      this.dots.innerHTML = "";
      const t2 = !this.isCentered && this.slidesQty ? this.slides.length - (this.getCurrentSlidesQty() - 1) : this.slides.length;
      for (let e2 = 0; e2 < t2; e2++) {
        const t3 = this.buildSingleDot(e2);
        this.dots.append(t3);
      }
    }
    setDots() {
      this.dotsItems = this.dots.querySelectorAll(".hs-carousel-pagination-item"), this.dotsItems.forEach((t2, e2) => {
        const s2 = t2.getAttribute("data-carousel-pagination-item-target");
        this.singleDotEvents(t2, s2 ? +s2 : e2);
      });
    }
    goToCurrentDot() {
      const t2 = this.dots, e2 = t2.getBoundingClientRect(), s2 = t2.scrollLeft, i2 = t2.scrollTop, n2 = t2.clientWidth, r2 = t2.clientHeight, o2 = this.dotsItems[this.currentIndex], l2 = o2.getBoundingClientRect(), h2 = l2.left - e2.left + s2, a2 = h2 + o2.clientWidth, d = l2.top - e2.top + i2, c = d + o2.clientHeight;
      let u = s2, g = i2;
      (h2 < s2 || a2 > s2 + n2) && (u = a2 - n2), (d < i2 || c > i2 + r2) && (g = c - r2), t2.scrollTo({ left: u, top: g, behavior: "smooth" });
    }
    buildInfo() {
      this.infoTotal && this.setInfoTotal(), this.infoCurrent && this.setInfoCurrent();
    }
    setInfoTotal() {
      this.infoTotal.innerText = `${this.slides.length}`;
    }
    setInfoCurrent() {
      this.infoCurrent.innerText = `${this.currentIndex + 1}`;
    }
    buildSingleDot(t2) {
      const e2 = (0, n.fc)("<span></span>");
      return this.dotsItemClasses && (0, n.en)(this.dotsItemClasses, e2), this.singleDotEvents(e2, t2), e2;
    }
    singleDotEvents(t2, e2) {
      this.onDotClickListener = () => this.dotClick(e2), t2.addEventListener("click", this.onDotClickListener);
    }
    observeResize() {
      new ResizeObserver((0, n.sg)((t2) => {
        for (let e2 of t2) {
          const t3 = e2.contentRect.width;
          t3 !== this.resizeContainerWidth && (this.recalculateWidth(), this.dots && this.initDots(), this.addCurrentClass(), this.resizeContainerWidth = t3);
        }
      }, this.updateDelay)).observe(this.resizeContainer);
    }
    calculateWidth() {
      this.isSnap || (this.inner.style.width = this.sliderWidth * this.slides.length / this.getCurrentSlidesQty() + "px"), this.slides.forEach((t2) => {
        t2.style.width = this.sliderWidth / this.getCurrentSlidesQty() + "px";
      }), this.calculateTransform();
    }
    addCurrentClass() {
      if (this.isSnap) {
        const t2 = Math.floor(this.getCurrentSlidesQty() / 2);
        for (let e2 = 0; e2 < this.slides.length; e2++) {
          const s2 = this.slides[e2];
          e2 <= this.currentIndex + t2 && e2 >= this.currentIndex - t2 ? s2.classList.add("active") : s2.classList.remove("active");
        }
      } else {
        const t2 = this.isCentered ? this.currentIndex + this.getCurrentSlidesQty() + (this.getCurrentSlidesQty() - 1) : this.currentIndex + this.getCurrentSlidesQty();
        this.slides.forEach((e2, s2) => {
          s2 >= this.currentIndex && s2 < t2 ? e2.classList.add("active") : e2.classList.remove("active");
        });
      }
    }
    setCurrentDot() {
      const t2 = (t3, e2) => {
        let s2 = false;
        const i2 = Math.floor(this.getCurrentSlidesQty() / 2);
        s2 = this.isSnap && !this.hasSnapSpacers ? e2 === (this.getCurrentSlidesQty() % 2 == 0 ? this.currentIndex - i2 + 1 : this.currentIndex - i2) : e2 === this.currentIndex, s2 ? t3.classList.add("active") : t3.classList.remove("active");
      };
      this.dotsItems ? this.dotsItems.forEach((e2, s2) => t2(e2, s2)) : this.dots.querySelectorAll(":scope > *").forEach((e2, s2) => t2(e2, s2));
    }
    setElementToDisabled(t2) {
      t2.classList.add("disabled"), "BUTTON" !== t2.tagName && "INPUT" !== t2.tagName || t2.setAttribute("disabled", "disabled");
    }
    unsetElementToDisabled(t2) {
      t2.classList.remove("disabled"), "BUTTON" !== t2.tagName && "INPUT" !== t2.tagName || t2.removeAttribute("disabled");
    }
    addDisabledClass() {
      if (!this.prev || !this.next) return false;
      const t2 = getComputedStyle(this.inner).getPropertyValue("gap"), e2 = Math.floor(this.getCurrentSlidesQty() / 2);
      let s2 = 0, i2 = 0, n2 = false, r2 = false;
      this.isSnap ? (s2 = this.currentIndex, i2 = this.hasSnapSpacers ? this.slides.length - 1 : this.slides.length - e2 - 1, n2 = this.hasSnapSpacers ? 0 === s2 : this.getCurrentSlidesQty() % 2 == 0 ? s2 - e2 < 0 : s2 - e2 == 0, r2 = s2 >= i2 && this.container.scrollLeft + this.container.clientWidth + (parseFloat(t2) || 0) >= this.container.scrollWidth) : (s2 = this.currentIndex, i2 = this.isCentered ? this.slides.length - this.getCurrentSlidesQty() + (this.getCurrentSlidesQty() - 1) : this.slides.length - this.getCurrentSlidesQty(), n2 = 0 === s2, r2 = s2 >= i2), n2 ? (this.unsetElementToDisabled(this.next), this.setElementToDisabled(this.prev)) : r2 ? (this.unsetElementToDisabled(this.prev), this.setElementToDisabled(this.next)) : (this.unsetElementToDisabled(this.prev), this.unsetElementToDisabled(this.next));
    }
    autoPlay() {
      this.setTimer();
    }
    setTimer() {
      this.timer = setInterval(() => {
        this.currentIndex === this.slides.length - 1 ? this.goTo(0) : this.goToNext();
      }, this.speed);
    }
    resetTimer() {
      clearInterval(this.timer);
    }
    detectDirection() {
      const { start: t2, end: e2 } = this.touchX;
      e2 < t2 && this.goToNext(), e2 > t2 && this.goToPrev();
    }
    calculateTransform(t2) {
      void 0 !== t2 && (this.currentIndex = t2), this.currentIndex > this.slides.length - this.getCurrentSlidesQty() && !this.isCentered && (this.currentIndex = this.slides.length - this.getCurrentSlidesQty());
      const e2 = this.sliderWidth, s2 = e2 / this.getCurrentSlidesQty();
      let i2 = this.currentIndex * s2;
      if (this.isSnap && !this.isCentered && this.container.scrollLeft < e2 && this.container.scrollLeft + s2 / 2 > e2 && (this.container.scrollLeft = this.container.scrollWidth), this.isCentered && !this.isSnap) {
        const t3 = (e2 - s2) / 2;
        if (0 === this.currentIndex) i2 = -t3;
        else if (this.currentIndex >= this.slides.length - this.getCurrentSlidesQty() + (this.getCurrentSlidesQty() - 1)) {
          i2 = this.slides.length * s2 - e2 + t3;
        } else i2 = this.currentIndex * s2 - t3;
      }
      this.isSnap || (this.inner.style.transform = this.isRTL ? `translate(${i2}px, 0px)` : `translate(${-i2}px, 0px)`), this.isAutoHeight && (this.inner.style.height = `${this.slides[this.currentIndex].clientHeight}px`), this.dotsItems && this.goToCurrentDot(), this.addCurrentClass(), this.isInfiniteLoop || this.addDisabledClass(), this.isSnap && this.hasSnapSpacers && this.buildSnapSpacers(), this.infoCurrent && this.setInfoCurrent();
    }
    setTranslate(t2) {
      this.inner.style.transform = this.isRTL ? `translate(${-t2}px, 0px)` : `translate(${t2}px, 0px)`;
    }
    setIndex(t2) {
      this.currentIndex = t2, this.addCurrentClass(), this.isInfiniteLoop || this.addDisabledClass();
    }
    recalculateWidth() {
      this.sliderWidth = this.inner.parentElement.getBoundingClientRect().width, this.calculateWidth(), this.sliderWidth !== this.inner.parentElement.getBoundingClientRect().width && this.recalculateWidth();
    }
    goToPrev() {
      if (this.currentIndex > 0 ? this.currentIndex-- : this.currentIndex = this.slides.length - this.getCurrentSlidesQty(), this.isSnap) {
        const t2 = this.sliderWidth / this.getCurrentSlidesQty();
        this.container.scrollBy({ left: Math.max(-this.container.scrollLeft, -t2), behavior: "smooth" }), this.addCurrentClass(), this.isInfiniteLoop || this.addDisabledClass();
      } else this.calculateTransform();
      this.dots && this.setCurrentDot();
    }
    goToNext() {
      const t2 = this.isCentered ? this.slides.length - this.getCurrentSlidesQty() + (this.getCurrentSlidesQty() - 1) : this.slides.length - this.getCurrentSlidesQty();
      if (this.currentIndex < t2 ? this.currentIndex++ : this.currentIndex = 0, this.isSnap) {
        const t3 = this.sliderWidth / this.getCurrentSlidesQty(), e2 = this.container.scrollWidth - this.container.clientWidth;
        this.container.scrollBy({ left: Math.min(t3, e2 - this.container.scrollLeft), behavior: "smooth" }), this.addCurrentClass(), this.isInfiniteLoop || this.addDisabledClass();
      } else this.calculateTransform();
      this.dots && this.setCurrentDot();
    }
    goTo(t2) {
      const e2 = this.currentIndex;
      if (this.currentIndex = t2, this.isSnap) {
        const t3 = this.sliderWidth / this.getCurrentSlidesQty(), s2 = e2 > this.currentIndex ? e2 - this.currentIndex : this.currentIndex - e2, i2 = e2 > this.currentIndex ? -t3 * s2 : t3 * s2;
        this.container.scrollBy({ left: i2, behavior: "smooth" }), this.addCurrentClass(), this.isInfiniteLoop || this.addDisabledClass();
      } else this.calculateTransform();
      this.dots && this.setCurrentDot();
    }
    destroy() {
      var t2, e2;
      if (this.loadingClassesAdd && ("string" == typeof this.loadingClassesAdd ? this.inner.classList.remove(this.loadingClassesAdd) : this.inner.classList.remove(...this.loadingClassesAdd)), this.inner && this.afterLoadingClassesAdd && setTimeout(() => {
        "string" == typeof this.afterLoadingClassesAdd ? this.inner.classList.remove(this.afterLoadingClassesAdd) : this.inner.classList.remove(...this.afterLoadingClassesAdd);
      }), this.el.classList.remove("init"), this.inner.classList.remove("dragging"), this.slides.forEach((t3) => t3.classList.remove("active")), (null === (t2 = null == this ? void 0 : this.dotsItems) || void 0 === t2 ? void 0 : t2.length) && this.dotsItems.forEach((t3) => t3.classList.remove("active")), this.prev.classList.remove("disabled"), this.next.classList.remove("disabled"), this.inner.style.width = "", this.slides.forEach((t3) => t3.style.width = ""), this.isSnap || (this.inner.style.transform = ""), this.isAutoHeight && (this.inner.style.height = ""), this.prev.removeEventListener("click", this.onPrevClickListener), this.next.removeEventListener("click", this.onNextClickListener), this.container.removeEventListener("scroll", this.onContainerScrollListener), this.el.removeEventListener("touchstart", this.onElementTouchStartListener), this.el.removeEventListener("touchend", this.onElementTouchEndListener), this.inner.removeEventListener("mousedown", this.onInnerMouseDownListener), this.inner.removeEventListener("touchstart", this.onInnerTouchStartListener), document.removeEventListener("mousemove", this.onDocumentMouseMoveListener), document.removeEventListener("touchmove", this.onDocumentTouchMoveListener), document.removeEventListener("mouseup", this.onDocumentMouseUpListener), document.removeEventListener("touchend", this.onDocumentTouchEndListener), this.inner.querySelectorAll("a:not(.prevented-click)").forEach((t3) => {
        t3.classList.remove("prevented-click"), t3.removeEventListener("click", this.removeClickEventWhileDragging);
      }), (null === (e2 = null == this ? void 0 : this.dotsItems) || void 0 === e2 ? void 0 : e2.length) || this.dots.querySelectorAll(":scope > *").length) {
        ((null == this ? void 0 : this.dotsItems) || this.dots.querySelectorAll(":scope > *")).forEach((t3) => t3.removeEventListener("click", this.onDotClickListener)), this.dots.innerHTML = null;
      }
      this.inner.querySelector(".hs-snap-before").remove(), this.inner.querySelector(".hs-snap-after").remove(), this.dotsItems = null, this.isDragging = false, this.dragStartX = null, this.initialTranslateX = null, window.$hsCarouselCollection = window.$hsCarouselCollection.filter(({ element: t3 }) => t3.el !== this.el);
    }
    static getInstance(t2, e2) {
      const s2 = window.$hsCarouselCollection.find((e3) => e3.element.el === ("string" == typeof t2 ? document.querySelector(t2) : t2));
      return s2 ? e2 ? s2 : s2.element : null;
    }
    static autoInit() {
      window.$hsCarouselCollection || (window.$hsCarouselCollection = []), window.$hsCarouselCollection && (window.$hsCarouselCollection = window.$hsCarouselCollection.filter(({ element: t2 }) => document.contains(t2.el))), document.querySelectorAll("[data-hs-carousel]:not(.--prevent-on-load-init)").forEach((t2) => {
        window.$hsCarouselCollection.find((e2) => {
          var s2;
          return (null === (s2 = null == e2 ? void 0 : e2.element) || void 0 === s2 ? void 0 : s2.el) === t2;
        }) || new _l2(t2);
      });
    }
  };
  window.addEventListener("load", () => {
    l.autoInit();
  }), "undefined" != typeof window && (window.HSCarousel = l);
  var h = l;
  var a = i.A;

  // <stdin>
  polyfillPage();
  async function polyfillPage() {
    if (!("anchorName" in document.documentElement.style)) {
      await rb({
        useAnimationFrame: true
      });
    }
  }
})();
/*! Bundled license information:

preline/dist/carousel.mjs:
  (*
   * HSCarousel
   * @version: 3.0.0
   * @author: Preline Labs Ltd.
   * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
   * Copyright 2024 Preline Labs Ltd.
   *)
*/
