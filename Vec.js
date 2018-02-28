class Vector {
    static zero(sz) {
        return (new Array(sz)).fill(0);
    }

    static distance(x, y) {
        var t = 0;
        for (var i = 0; i < x.length; ++i) {
            t += (x[i] - y[i]) * (x[i] - y[i]);
        }
        return t;
    }

    static add(x, y) {
        for (var i = 0; i < x.length; ++i) {
            x[i] += y[i];
        }
    }

    static sub(x, y) {
        for (var i = 0; i < x.length; ++i) {
            x[i] -= y[i];
        }
    }

    static div(x, s) {
        for (var i = 0; i < x.length; ++i) {
            x[i] /= s;
        }
    }

    static mul(x, s) {
        for (var i = 0; i < x.length; ++i) {
            x[i] *= s;
        }
    }

    static dot(x, y) {
        var t = 0;
        for (var i = 0; i < x.length; ++i) {
            t += (x[i] * y[i]);
        }
        return t;
    }

    static closest(p, cs) {
        var i = 0;
        var d = Vector.distance(p, cs[0]);
        for (var j = 1; j < cs.length; ++j) {
            var d2 = Vector.distance(p, cs[j]);
            if (d2 < d) {
                d = d2;
                i = j;
            }
        }
        return i;
    }

    static sum(x) {
        return x.reduce((tot, x) => tot + x, 0);
    }

    static randomPositive(sz) {
        return Array.from(new Array(sz), () => Math.random());
    }

    static random(sz) {
        return Array.from(new Array(sz), () => 2 * Math.random() - 1);
    }

    static randomUnit(sz) {
        var rnd = Vector.random(sz);
        var len = Math.sqrt(Vector.dot(rnd, rnd));
        Vector.div(rnd, len);
        return rnd;
    }

    static randomUnitPositive(sz) {
        var rnd = Vector.random(sz);
        var len = Math.sqrt(Vector.dot(rnd, rnd));
        return Vector.div(rnd, len);
    }
}

module.exports = Vector;
