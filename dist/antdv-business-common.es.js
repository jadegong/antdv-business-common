import { defineComponent as at, resolveComponent as B, openBlock as x, createElementBlock as K, createVNode as st, withCtx as R, Fragment as ot, renderList as ut, createBlock as J, createTextVNode as dt, toDisplayString as ft } from "vue";
var X = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, z = {}, lt = {
  get exports() {
    return z;
  },
  set exports(o) {
    z = o;
  }
};
(function(o, c) {
  (function(M, v) {
    o.exports = v();
  })(X, function() {
    var M = 1e3, v = 6e4, S = 36e5, T = "millisecond", w = "second", O = "minute", _ = "hour", g = "day", $ = "week", m = "month", q = "quarter", k = "year", Y = "date", G = "Invalid Date", et = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, nt = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, rt = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(r) {
      var n = ["th", "st", "nd", "rd"], t = r % 100;
      return "[" + r + (n[(t - 20) % 10] || n[t] || n[0]) + "]";
    } }, F = function(r, n, t) {
      var i = String(r);
      return !i || i.length >= n ? r : "" + Array(n + 1 - i.length).join(t) + r;
    }, it = { s: F, z: function(r) {
      var n = -r.utcOffset(), t = Math.abs(n), i = Math.floor(t / 60), e = t % 60;
      return (n <= 0 ? "+" : "-") + F(i, 2, "0") + ":" + F(e, 2, "0");
    }, m: function r(n, t) {
      if (n.date() < t.date())
        return -r(t, n);
      var i = 12 * (t.year() - n.year()) + (t.month() - n.month()), e = n.clone().add(i, m), s = t - e < 0, a = n.clone().add(i + (s ? -1 : 1), m);
      return +(-(i + (t - e) / (s ? e - a : a - e)) || 0);
    }, a: function(r) {
      return r < 0 ? Math.ceil(r) || 0 : Math.floor(r);
    }, p: function(r) {
      return { M: m, y: k, w: $, d: g, D: Y, h: _, m: O, s: w, ms: T, Q: q }[r] || String(r || "").toLowerCase().replace(/s$/, "");
    }, u: function(r) {
      return r === void 0;
    } }, L = "en", A = {};
    A[L] = rt;
    var E = function(r) {
      return r instanceof N;
    }, U = function r(n, t, i) {
      var e;
      if (!n)
        return L;
      if (typeof n == "string") {
        var s = n.toLowerCase();
        A[s] && (e = s), t && (A[s] = t, e = s);
        var a = n.split("-");
        if (!e && a.length > 1)
          return r(a[0]);
      } else {
        var u = n.name;
        A[u] = n, e = u;
      }
      return !i && e && (L = e), e || !i && L;
    }, h = function(r, n) {
      if (E(r))
        return r.clone();
      var t = typeof n == "object" ? n : {};
      return t.date = r, t.args = arguments, new N(t);
    }, d = it;
    d.l = U, d.i = E, d.w = function(r, n) {
      return h(r, { locale: n.$L, utc: n.$u, x: n.$x, $offset: n.$offset });
    };
    var N = function() {
      function r(t) {
        this.$L = U(t.locale, null, !0), this.parse(t);
      }
      var n = r.prototype;
      return n.parse = function(t) {
        this.$d = function(i) {
          var e = i.date, s = i.utc;
          if (e === null)
            return new Date(NaN);
          if (d.u(e))
            return new Date();
          if (e instanceof Date)
            return new Date(e);
          if (typeof e == "string" && !/Z$/i.test(e)) {
            var a = e.match(et);
            if (a) {
              var u = a[2] - 1 || 0, l = (a[7] || "0").substring(0, 3);
              return s ? new Date(Date.UTC(a[1], u, a[3] || 1, a[4] || 0, a[5] || 0, a[6] || 0, l)) : new Date(a[1], u, a[3] || 1, a[4] || 0, a[5] || 0, a[6] || 0, l);
            }
          }
          return new Date(e);
        }(t), this.$x = t.x || {}, this.init();
      }, n.init = function() {
        var t = this.$d;
        this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
      }, n.$utils = function() {
        return d;
      }, n.isValid = function() {
        return this.$d.toString() !== G;
      }, n.isSame = function(t, i) {
        var e = h(t);
        return this.startOf(i) <= e && e <= this.endOf(i);
      }, n.isAfter = function(t, i) {
        return h(t) < this.startOf(i);
      }, n.isBefore = function(t, i) {
        return this.endOf(i) < h(t);
      }, n.$g = function(t, i, e) {
        return d.u(t) ? this[i] : this.set(e, t);
      }, n.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, n.valueOf = function() {
        return this.$d.getTime();
      }, n.startOf = function(t, i) {
        var e = this, s = !!d.u(i) || i, a = d.p(t), u = function(H, y) {
          var b = d.w(e.$u ? Date.UTC(e.$y, y, H) : new Date(e.$y, y, H), e);
          return s ? b : b.endOf(g);
        }, l = function(H, y) {
          return d.w(e.toDate()[H].apply(e.toDate("s"), (s ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(y)), e);
        }, f = this.$W, p = this.$M, C = this.$D, D = "set" + (this.$u ? "UTC" : "");
        switch (a) {
          case k:
            return s ? u(1, 0) : u(31, 11);
          case m:
            return s ? u(1, p) : u(0, p + 1);
          case $:
            var W = this.$locale().weekStart || 0, j = (f < W ? f + 7 : f) - W;
            return u(s ? C - j : C + (6 - j), p);
          case g:
          case Y:
            return l(D + "Hours", 0);
          case _:
            return l(D + "Minutes", 1);
          case O:
            return l(D + "Seconds", 2);
          case w:
            return l(D + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, n.endOf = function(t) {
        return this.startOf(t, !1);
      }, n.$set = function(t, i) {
        var e, s = d.p(t), a = "set" + (this.$u ? "UTC" : ""), u = (e = {}, e[g] = a + "Date", e[Y] = a + "Date", e[m] = a + "Month", e[k] = a + "FullYear", e[_] = a + "Hours", e[O] = a + "Minutes", e[w] = a + "Seconds", e[T] = a + "Milliseconds", e)[s], l = s === g ? this.$D + (i - this.$W) : i;
        if (s === m || s === k) {
          var f = this.clone().set(Y, 1);
          f.$d[u](l), f.init(), this.$d = f.set(Y, Math.min(this.$D, f.daysInMonth())).$d;
        } else
          u && this.$d[u](l);
        return this.init(), this;
      }, n.set = function(t, i) {
        return this.clone().$set(t, i);
      }, n.get = function(t) {
        return this[d.p(t)]();
      }, n.add = function(t, i) {
        var e, s = this;
        t = Number(t);
        var a = d.p(i), u = function(p) {
          var C = h(s);
          return d.w(C.date(C.date() + Math.round(p * t)), s);
        };
        if (a === m)
          return this.set(m, this.$M + t);
        if (a === k)
          return this.set(k, this.$y + t);
        if (a === g)
          return u(1);
        if (a === $)
          return u(7);
        var l = (e = {}, e[O] = v, e[_] = S, e[w] = M, e)[a] || 1, f = this.$d.getTime() + t * l;
        return d.w(f, this);
      }, n.subtract = function(t, i) {
        return this.add(-1 * t, i);
      }, n.format = function(t) {
        var i = this, e = this.$locale();
        if (!this.isValid())
          return e.invalidDate || G;
        var s = t || "YYYY-MM-DDTHH:mm:ssZ", a = d.z(this), u = this.$H, l = this.$m, f = this.$M, p = e.weekdays, C = e.months, D = function(y, b, I, V) {
          return y && (y[b] || y(i, s)) || I[b].slice(0, V);
        }, W = function(y) {
          return d.s(u % 12 || 12, y, "0");
        }, j = e.meridiem || function(y, b, I) {
          var V = y < 12 ? "AM" : "PM";
          return I ? V.toLowerCase() : V;
        }, H = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: f + 1, MM: d.s(f + 1, 2, "0"), MMM: D(e.monthsShort, f, C, 3), MMMM: D(C, f), D: this.$D, DD: d.s(this.$D, 2, "0"), d: String(this.$W), dd: D(e.weekdaysMin, this.$W, p, 2), ddd: D(e.weekdaysShort, this.$W, p, 3), dddd: p[this.$W], H: String(u), HH: d.s(u, 2, "0"), h: W(1), hh: W(2), a: j(u, l, !0), A: j(u, l, !1), m: String(l), mm: d.s(l, 2, "0"), s: String(this.$s), ss: d.s(this.$s, 2, "0"), SSS: d.s(this.$ms, 3, "0"), Z: a };
        return s.replace(nt, function(y, b) {
          return b || H[y] || a.replace(":", "");
        });
      }, n.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, n.diff = function(t, i, e) {
        var s, a = d.p(i), u = h(t), l = (u.utcOffset() - this.utcOffset()) * v, f = this - u, p = d.m(this, u);
        return p = (s = {}, s[k] = p / 12, s[m] = p, s[q] = p / 3, s[$] = (f - l) / 6048e5, s[g] = (f - l) / 864e5, s[_] = f / S, s[O] = f / v, s[w] = f / M, s)[a] || f, e ? p : d.a(p);
      }, n.daysInMonth = function() {
        return this.endOf(m).$D;
      }, n.$locale = function() {
        return A[this.$L];
      }, n.locale = function(t, i) {
        if (!t)
          return this.$L;
        var e = this.clone(), s = U(t, i, !0);
        return s && (e.$L = s), e;
      }, n.clone = function() {
        return d.w(this.$d, this);
      }, n.toDate = function() {
        return new Date(this.valueOf());
      }, n.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, n.toISOString = function() {
        return this.$d.toISOString();
      }, n.toString = function() {
        return this.$d.toUTCString();
      }, r;
    }(), Q = N.prototype;
    return h.prototype = Q, [["$ms", T], ["$s", w], ["$m", O], ["$H", _], ["$W", g], ["$M", m], ["$y", k], ["$D", Y]].forEach(function(r) {
      Q[r[1]] = function(n) {
        return this.$g(n, r[0], r[1]);
      };
    }), h.extend = function(r, n) {
      return r.$i || (r(n, N, h), r.$i = !0), h;
    }, h.locale = U, h.isDayjs = E, h.unix = function(r) {
      return h(1e3 * r);
    }, h.en = A[L], h.Ls = A, h.p = {}, h;
  });
})(lt);
const tt = z;
var P = {}, ht = {
  get exports() {
    return P;
  },
  set exports(o) {
    P = o;
  }
};
(function(o, c) {
  (function(M, v) {
    o.exports = v();
  })(X, function() {
    return function(M, v) {
      v.prototype.isSameOrAfter = function(S, T) {
        return this.isSame(S, T) || this.isAfter(S, T);
      };
    };
  });
})(ht);
const ct = P;
tt.extend(ct);
const pt = at({
  name: "TypeDatePicker",
  props: {
    range: {
      type: Boolean,
      default: () => !1
    },
    value: {
      type: Object,
      default: () => ({ type: "day", date: "" })
    },
    // 自定义展示那几种类型单选按钮，默认天/周/月
    dateTypes: {
      type: Array,
      default: () => [{ key: "day", desc: "天" }, { key: "week", desc: "周" }, { key: "month", desc: "月" }]
    }
  },
  computed: {
    // 自定义禁选时间，默认今天可选今天以前
    disabledDate() {
      return (o) => o.isSameOrAfter(tt().startOf(this.value.type || "day"));
    }
  },
  methods: {
    /**
     * 时间类型改变回调
     */
    onTypeChange(o) {
      const c = o.target.value;
      this.$emit("onTypeDateValueChange", { type: c, date: this.range ? [] : "" });
    },
    /**
     * 选择回调
     */
    onDateChange(o, c) {
      this.$emit("onTypeDateValueChange", { type: this.value.type, date: o });
    }
  }
}), $t = (o, c) => {
  const M = o.__vccOpts || o;
  for (const [v, S] of c)
    M[v] = S;
  return M;
};
function yt(o, c, M, v, S, T) {
  const w = B("a-radio"), O = B("a-radio-group"), _ = B("a-range-picker"), g = B("a-date-picker");
  return x(), K("span", null, [
    st(O, {
      value: o.value.type,
      "onUpdate:value": c[0] || (c[0] = ($) => o.value.type = $),
      onChange: o.onTypeChange
    }, {
      default: R(() => [
        (x(!0), K(ot, null, ut(o.dateTypes, ($) => (x(), J(w, {
          key: $.key,
          value: $.key
        }, {
          default: R(() => [
            dt(ft($.desc), 1)
          ]),
          _: 2
        }, 1032, ["value"]))), 128))
      ]),
      _: 1
    }, 8, ["value", "onChange"]),
    o.range ? (x(), J(_, {
      key: 0,
      value: o.value.date,
      "onUpdate:value": c[1] || (c[1] = ($) => o.value.date = $),
      "disabled-date": o.disabledDate,
      onChange: o.onDateChange
    }, null, 8, ["value", "disabled-date", "onChange"])) : (x(), J(g, {
      key: 1,
      picker: o.value.type === "day" ? "date" : o.value.type,
      "disabled-date": o.disabledDate,
      value: o.value.date,
      "onUpdate:value": c[2] || (c[2] = ($) => o.value.date = $),
      onChange: o.onDateChange
    }, null, 8, ["picker", "disabled-date", "value", "onChange"]))
  ]);
}
const vt = /* @__PURE__ */ $t(pt, [["render", yt]]), Z = {
  install(o) {
    o.component("type-date-picker", vt);
  }
}, gt = {
  install(o) {
    var c;
    (c = Z.install) == null || c.call(Z, o);
  }
};
export {
  vt as TypeDatePicker,
  Z as TypeDatePickerPlugin,
  gt as default
};
