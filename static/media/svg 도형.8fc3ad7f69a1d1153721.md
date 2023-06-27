# svg

## rect

```
<svg width="400" height="110">
  <rect x="50" y="20" rx="20" ry="20" width="150" height="150"/>
</svg>
```

## circle

```
<svg height="100" width="100">
  <circle cx="50" cy="50" r="40"/>
</svg>
```

## ellipse

```
<svg height="140" width="500">
  <ellipse cx="200" cy="80" rx="100" ry="50"/>
</svg>
```

## line

```
<svg height="210" width="500">
  <line x1="0" y1="0" x2="200" y2="200"/>
</svg>
```

## polygon

```
<svg height="210" width="500">
  <polygon points="200,10 250,190 160,210"/>
</svg>
```

## polyline

```
<svg height="200" width="500">
  <polyline points="20,20 40,25 60,40 80,120 120,140 200,180"/>
</svg>
```

## path

```
<svg height="210" width="400">
  <path d="M150 0 L75 200 L225 200 Z" />
</svg>
```

## text

```
<svg height="60" width="200">
  <text x="0" y="15" fill="red">I love SVG</text>
</svg>
```

## g

> 도형 요소들을 그룹화

```
<svg>
  <g>
    <circle cx="50" cy="50" r="30" fill="red" />
    <rect x="80" y="20" width="50" height="50" fill="blue" />
    <path d="M20,80 L80,80 L50,120 Z" fill="green" />
  </g>
</svg>
```
