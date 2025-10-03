# linux network ip virtual interface (linux bridge)

## usage

```sh
# 가상 인터페이스를 bridge로 생성
ip link add <bridge_interface> type bridge
# ip link add br0 type bridge

# bridge 인터페이스 활성화
ip link set dev <bridge_interface> up
# ip link set dev br0 up

# 가상 인터페이스와 가상 인터페이스를 위한 bridge 인터페이스를 생성하여 연결
ip link add <interface> type veth peer name <bridge_interface_for_veth>
# ip link add veth-red type veth peer name veth-red-br
# ip link add veth-blue type veth peer name veth-red-br
# ip link add veth-green type veth peer name veth-red-br

# 가상 인터페이스를 네임스페이스에 할당
ip link set <interface> netns <namespace>
# ip link set veth-red netns red
# ip link set veth-blue netns blue
# ip link set veth-green netns green

# 네임스페이스 내에서 네트워크 인터페이스에 IP 주소 할당
ip link set <bridge_interface> master <bridge_interface>
# ip link set veth-red-br master br0
# ip link set veth-blue-br master br0
# ip link set veth-green-br master br0

# 네임스페이스 내에서 네트워크 인터페이스에 IP 주소 할당
ip netns exec <namespace> ip addr add <ip> dev <interface>
# ip netns exec red ip addr add 192.168.15.1 dev veth-red
# ip netns exec blue ip addr add 192.168.15.1 dev veth-blue
# ip netns exec green ip addr add 192.168.15.1 dev veth-green
```
