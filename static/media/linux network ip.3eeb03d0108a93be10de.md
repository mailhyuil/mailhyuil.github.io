# linux network ip

## install

```sh
brew install iproute2mac
```

## usage

> 명령어에서 dev는 device를 의미한다.

```sh
# network interface
ip link # show network interfaces
ip link set <interface> up # enable interface
ip link set <interface> down # disable interface

# ip address
ip addr # show ip address
ip addr add <ip> dev <interface> # add ip address
ip addr del <ip> dev <interface> # delete ip address

# routing table
ip route # show routing table
ip route add <network> via <gateway> # add route
ip route del <network> via <gateway> # delete route
ip route add default via <gateway> # add default route

# arp table
ip neigh # show arp table
ip neigh add <ip> lladdr <mac> dev <interface> # add arp entry
ip neigh del <ip> dev <interface> # delete arp entry

# namespace
ip netns # show network namespace
ip netns add <name> # add network namespace
ip netns exec <name> <command> # execute command in network namespace
ip netns del <name> # delete network namespace
```
