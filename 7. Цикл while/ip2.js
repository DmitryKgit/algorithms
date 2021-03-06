/*
ip адреса
1) Чтобы найти АДРЕС СЕТИ, выпишите те биты IP АДРЕСА, где у маски 1.
Затем запишите 0 там где у маски 0.
Переведите каждый байт в десятичную СС.

2) Чтобы найти НОМЕР КОМПЬЮТЕРА, выпишите те биты IP АДРЕСА, где у маски 0.
Переведите двоичное число в десятичную СС, игнорируя точки.

3) Количество компьютеров в сети равно 2^N - 2, где N - количество нулей в маске.

4) Количество адресов в сети равно 2^N, где N - количество нулей в маске.

5) broadcast addr = net adr + 2^n-1, где n число нулей в маске.
Прибавляя, учтите, что в 0 байте может быть число только от 0 до 255, а числа 256, 512 и более - биты в 1 байте.
*/


/*
0)  ip                              0000 1010. 0000 0000. 0000 0000. 1000 1001  == 10.0.0.137
    mask                            1111 1111. 1111 1111. 1111 1111. 1100 0000  == 255.255.255.192
    арес сети                       0000 1010. 0000 0000. 0000 0000. 1000 0000  == 10.0.0.192
    номер компьютера                                                      1001  == 9
    количество компьютеров                                                      == 62

1)  ip                              1100 0000. 1010 1000. 1101 1111. 1101 1001  == 192.168.223.217
    mask                            1111 1111. 1111 1111. 1110 0000. 0000 0000  == 255.255.224.0
    арес сети                       1100 0000. 1010 1000. 1100 0000. 0000 0000  == 192.168.192.0
    номер компьютера                                         1 1111. 1101 1001  == 8153
    количество компьютеров                                                      == 8190

2)  ip                              1100 0000. 1010 1000. 1011 1111. 0111 0101  == 192.168.191.117
    mask                            1111 1111. 1111 1111. 1100 0000. 0000 0000  == 255.255.192.0
    арес сети                       1100 0000. 1010 1000. 1000 0000. 0000 0000  == 192.168.128.0
    номер компьютера                                        11 1111. 0111 0101  == 16245
    количество компьютеров                                            2^14 - 2  == 16382

3)  ip                              1100 0000. 1010 1000. 0000 1010. 1111 1011  == 192.168.10.251
    mask                            1111 1111. 1111 1111. 1111 1111. 1100 0000  == 255.255.255.192
    арес сети                       1100 0000. 1010 1000. 0000 1010. 1100 0000  == 192.168.10.192
    номер компьютера                                                   11 1011  == 59
    количество компьютеров                                             11 1110  == 62

4)  ip                              0000 1010. 0000 1010. 0000 0000. 1111 1001  == 10.10.0.249
    mask                            1111 1111. 1111 1111. 1111 1111. 1110 0000  == 255.255.255.224
    арес сети                       0000 1010. 0000 1010. 0000 0000. 1110 0000  == 10.10.0.224
    номер компьютера                                                    1 1001  == 25
    количество компьютеров                                              1 1110  == 30

5)  ip                              1100 0000. 1010 1000. 1111 0110. 1000 0110  == 192.168.246.134
    mask                            1111 1111. 1111 1111. 1110 0000. 0000 0000  == 255.255.224.0
    арес сети                       1100 0000. 1010 1000. 1110 0000. 1110 0000  == 192.168.224.0
    номер компьютера                                         1 0110. 1000 0110  == 5766
    количество компьютеров                                   1 1111. 1111 1110  == 8190

6)  ip                              1100 0000. 1010 1000. 1110 0011. 0110 1110  == 192.168.227.112
    mask                            1111 1111. 1111 1111. 1111 1110. 0000 0000  == 255.255.254.0
    арес сети                       1100 0000. 1010 1000. 1110 0010. 0000 0000  == 192.168.226.0
    номер компьютера                                              1. 0110 1110  == 366
    количество компьютеров                                             2^9 - 2  == 510

a)  ip                              1100 0000. 1010 1000. 1111 1010. 1101 0011  == 192.168.250.211
    mask                            1111 1111. 1111 1111. 1111 0000. 0000 0000  == 255.255.240.0
    арес сети                       1100 0000. 1010 1000. 1111 0000. 0000 0000  == 192.168.240.0
    номер компьютера                                           1010. 1101 0011  == 2771
    количество компьютеров                                            2^12 - 2  == 4094

b)  ip                              1100 0000. 1010 1000. 0111 0001. 0110 1111  == 192.168.113.111
    mask                            1111 1111. 1111 1111. 1111 1110. 0000 0000  == 255.255.254.0
    арес сети                       1100 0000. 1010 1000. 0111 0000. 0000 0000  == 192.168.112.0
    номер компьютера                                              1. 0110 1111  == 367
    количество компьютеров                                             2^9 - 2  == 510

c)  ip                              0000 1010. 0000 1010. 1011 1101. 0000 0011  == 10.10.189.3
    mask                            1111 1111. 1111 1111. 1100 0000. 0000 0000  == 255.255.192.0
    арес сети                       0000 1010. 0000 1010. 1000 0000. 0000 0000  == 10.10.128.0
    номер компьютера                                        11 1101. 0000 0011  == 15619
    количество компьютеров                                            2^14 - 2  == 16382

d)  ip                              0000 1010. 0000 1010. 0111 1011. 0000 0011  == 10.10.123.3
    mask                            1111 1111. 1111 1111. 1111 1000. 0000 0000  == 255.255.248.0
    арес сети                       0000 1010. 0000 1010. 0111 1000. 0000 0000  == 10.10.120.0
    номер компьютера                                            011. 0000 0011  == 771
    количество компьютеров                                            2^11 - 2  == 2046

e)  ip                              1010 1010. 0000 0000. 0111 0111. 0000 0011  == 172.0.119.3
    mask                            1111 1111. 1111 1111. 1110 0000. 0000 0000  == 255.255.224.0 
    арес сети                       1010 1010. 0000 0000. 0110 0000. 0000 0000  == 172.0.96.0
    номер компьютера                                         1 0111. 0000 0011  == 5891
    количество компьютеров                                            2^13 - 2  == 8190
*/





