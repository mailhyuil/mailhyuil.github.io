# linux network ip

## install

```sh
brew install iproute2mac
```

## usage

```sh
ip link # show network interfaces
ip link set <interface> up # enable interface
ip link set <interface> down # disable interface

ip addr # show ip address
ip addr add <ip> dev <interface> # add ip address
ip addr del <ip> dev <interface> # delete ip address

ip route # show routing table
ip route add <network> via <gateway> # add route
ip route del <network> via <gateway> # delete route
ip route add default via <gateway> # add default route

ip neigh # show arp table
ip neigh add <ip> lladdr <mac> dev <interface> # add arp entry
ip neigh del <ip> dev <interface> # delete arp entry
```
