# flutter Inherited Widget
> 권장되지 않음 Provider 패키지를 사용해라
>> 최상위 위젯에 있는 데이터를 최하위 위젯이 사용하고 싶다면 Props Drilling을 해야한다.
>>> 최상위 위젯을 InheritedWidget으로 상속하고 of() 메소도를 정의해서 그 아래에 있는 모든 위젯들이 데이터를 사용할 수 있다. 
>>>> of() 메소드로 데이터를 가져올 수 있다.