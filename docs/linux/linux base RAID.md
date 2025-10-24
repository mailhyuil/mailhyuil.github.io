# linux base RAID

> 여러 개의 독립적인 디스크를 하나의 논리적인 유닛으로 묶어서, 데이터 보안, 성능을 끌어올리는 개념
>
> 물리적 고장 시 가용성을 유지하기 위한 것, 백업이 아님 (파일을 지워버리면 복구 불가)
>
> > 일반: RAID 1, RAID 5
> >
> > 기업 서버: RAID 5, RAID 6
> >
> > 기업 고성능 서버: RAID 10

## RAID 0 (Stripe)

> 데이터를 디스크 여러 개에 나눠서 저장
>
> > 속도 빠름, 안전성 x, 최소 2 disk

## RAID 1 (Mirror)

> 동일한 데이터를 여러 개의 디스크에 저장
>
> > 속도 보통, 안전성 o, 최소 2 disk

## RAID 5 (Striped with Parity)

> 오류 복구용 데이터(Parity)와 데이터가 섞여서 저장됨
>
> > Parity는 XOR 연산을 통해 생성됨 (오류를 감지하고 복구할 수 있는 수학적 방법)
> >
> > > 속도 좋음, 안전성 o, 최소 3 disk

```txt
디스크1	디스크2	디스크3
A	   B	   A⊕B

# A가 손상되었을 때
A = (A⊕B) ⊕ B
```

## RAID 6 (Striped with Double Parity)

> RAID 5와 비슷하지만, Parity가 두 개로 늘어남
>
> > 속도 느림, 안전성 o, 최소 4 disk

```txt
디스크1	디스크2	디스크3	디스크4
A	   B	   C	   A⊕B⊕C

# A가 손상되었을 때
A = (A⊕B⊕C) ⊕ B ⊕ C
```

## RAID 10 (1+0)

> RAID 1과 RAID 0을 조합한 형태
>
> > 데이터를 미러링 후 스트라이프
> >
> > > 속도 빠름, 안전성 o, 최소 4 disk
