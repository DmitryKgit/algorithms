function gcd(n, m) {
    if (n < m) {
        [n, m] = [m, n];
    }
    while (n > 0) {
        n %= m;
    }
    return n;
}
gcd(12, 16);