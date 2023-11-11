# p5js vector

## Vector (벡터)

> 크기와 방향을 가진 물리량
>
> > 화살표 방향 : 벡터의 방향
> >
> > > 화살표 길이 : 벡터의 크기

## 유클리드 벡터

- 크기와 방향을 가진 객체

## Scala (스칼라)

- 크기만 가진 물리량

## 목적지를 향하는 벡터(단위 벡터) 구하기

> direction = 원하는 위치 - 현재 위치
>
> > direction을 정규화 -> normalize()

## 함수

```
set() 벡터의 x, y, z 성분을 설정합니다.

copy() 벡터의 복사본을 가져와 p5.Vector 객체를 반환합니다.

add() x, y, z 성분을 벡터에 더하거나, 한 벡터를 다른 벡터에 더하거나, 또는 2개의 독립 벡터를 더합니다. 2개의 독립 벡터를 더하는 메소드는 정적 메소드에 해당하며, p5.Vector를 반환합니다. 다른 메소드들은 벡터에 직접 작용합니다. 자세한 내용을 위해서 예제를 참고할 수 있습니다.

rem() 한 벡터를 다른 벡터로 나눌 때의 나머지(remainder)를 구합니다.

sub() x, y, z성분을 벡터에서 빼거나, 한 벡터에서 다른 벡터를 빼거나, 또는 2개의 독립 벡터를 뺍니다. 2개의 독립 벡터를 빼는 메소드는 정적 메소드에 해당하며, p5.Vector를 반환합니다. 다른 메소드들은 벡터에 직접 작용합니다. 자세한 내용은 예제를 참고할 수 있습니다.

mult() 벡터에 스칼라를 곱합니다. 정적 메소드인 경우 새로운 p5.Vector를 생성하는 반면, 정적 메소드가 아닌 경우 벡터에 직접 작용합니다. 자세한 내용을 위해서 예제를 참고할 수 있습니다.

div() 벡터를 스칼라로 나눕니다. 정적 메소드인 경우 새로운 p5.Vector를 생성하는 반면, 정적 메소드가 아닌 경우 벡터에 직접 작용합니다. 자세한 내용을 위해서 예제를 참고할 수 있습니다.

mag() 벡터의 크기(길이)를 계산하고 그 결과를 실수(float)으로 반환합니다. (이는 수식 sqrt(x*x + y*y + z*z)과도 같습니다.)

magSq() 벡터의 제곱 크기를 계산하고 그 결과를 실수(float)로 반환합니다. (이는 수식 sqrt(x*x + y*y + z*z)과도 같습니다.) 벡터를 비교하는 등의 경우에서 실제 길이를 포함하지 않으면 더 빠르게 계산됩니다.

dot() 두 벡터의 내적을 계산합니다. 2개의 독립 벡터의 내적을 계산하는 메소드는 정적 메소드에 해당합니다. 자세한 내용을 위해서 예제를 참고할 수 있습니다.

cross() 두 벡터의 외적으로 구성된 벡터를 계산하고 반환합니다. 정적 및 비정적 메소드 모두 새로운 p5.Vector를 반환합니다. 자세한 내용을 위해서 예제를 참고할 수 있습니다.

dist() 두 점 사이의 유클리드 거리를 계산합니다 (점을 벡터 객체로 간주).

normalize() 벡터를 길이 1로 정규화합니다. (단위 벡터로 만듭니다.)

limit() 벡터의 크기를 매개변수 max의 값으로 제한합니다.

setMag() 벡터의 크기를 매개변수 len의 값으로 제한합니다.

heading() 벡터의 회전 각도를 계산합니다. (2D 벡터만 해당)

setHeading() 벡터를 회전시킵니다 (2D 벡터만 해당. 벡터의 크기는 유지됩니다.

rotate() 벡터를 특정 각도로 회전하되 (2D 벡터만 해당), 크기는 동일하게 유지합니다.

angleBetween() 두 벡터 사이의 각도 (라디안 단위)를 계산하고 반환합니다.

lerp() 한 벡터와 다른 벡터를 선형적으로 보간합니다.

reflect() 2D 선 또는 3D 평면의 법선에 들어오는 벡터를 반영합니다. 이 메소드는 벡터에 직접 작용합니다.

array() 벡터의 표현을 실수 배열로 반환합니다. 이는 일시적으로만 사용됩니다. 다른 경우에도, p5.Vector.copy() 메소드를 통해 배열에 내용을 복사해야 합니다.

equals() p5.Vector에 대한 평등 검사

fromAngle() 특정 각도에서 새로운 2D 벡터를 생성합니다.

fromAngles() 구면각 (spherical angle)의 쌍에서 새로운 3D 벡터를 생성합니다.

random2D() 임의의 각도에서 새로운 2D 단위 벡터를 생성합니다.

random3D() 새로운 임의의 3D 단위 벡터를 생성합니다.
```