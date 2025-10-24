# linux network ip virtual interface - veth pair

## usage

```sh
# 두개의 가상 인터페이스를 veth pair로 생성 (두개의 인터페이스가 서로 연결됨)
ip link add <interface1> type veth peer name <interface2>
# ip link add veth-red type veth peer name veth-blue

# 각각의 가상 네트워크 인터페이스를 네임스페이스에 할당
ip link set <interface> netns <namespace>
# ip link set veth-red netns red
# ip link set veth-blue netns blue

# 각각의 네임스페이스 내에서 네트워크 인터페이스에 IP 주소 할당
ip netns exec <namespace> ip addr add <ip> dev <interface>
# ip netns exec red ip addr add 192.168.15.1 dev veth-red
# ip netns exec blue ip addr add 192.168.15.2 dev veth-blue

# 네임스페이스 내에서 네트워크 인터페이스 활성화
ip netns exec <namespace> ip link set <interface> up
# ip netns exec red ip link set veth-red up
# ip netns exec blue ip link set veth-blue up
```
