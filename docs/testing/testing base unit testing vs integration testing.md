# testing base unit testing vs integration testing

```txt
Integration tests tell you whether it's working. Unit tests tell you what isn't working. So long as everything is working, you "don't need" the unit tests - but once something is wrong, it's very nice to have the unit test point you directly to the problem. As you say, they serve different purposes; it's good to have both.

To directly address your subject: integration tests aren't a problem, aren't the problem. Using them instead of unit tests is.

통합테스트는 동작하는지 안하는지를 알려주는 테스트, 유닛 테스트는 무엇이 동작하지 않는지를 알려주는 테스트입니다.
만약 모든 것이 동작한다고 가정하면 당신은 unit test가 필요하지 않습니다. 하지만 무언가 동작하지 않는다면 유닛테스트는 무엇이 동작하지 않는지를 바로 알려줄 수 있는 좋은 테스트입니다.

즉, 통합테스트는 모든게 잘 동작하는지를 알려주고, 유닛테스트는 무엇이 동작하지 않는지를 정확하게 알려줄 수 있는 테스트입니다.
```
