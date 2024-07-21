# 강한 참조 & 약한 참조

## 강한 참조 (Strong Reference)

> new를 통해서 객체를 생성하면 생기는 참조
>
> > 자바의 기본 참조 유형
> >
> > > 참조되고 있는 한 GC 대상이 되지 않는다

## 소프트 참조 (Soft Reference)

> SoftReference 클래스를 이용하여 생성
>
> > 메모리가 부족해지는 경우 제거된다.

## 약한 참조 (Weak Reference)

> WeakReference 클래스를 이용하여 생성
>
> > GC 실행 시 무조건 제거된다
