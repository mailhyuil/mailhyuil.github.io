# animation sal.js css로 사용하기

## sal.scss

```scss
/**
 * Settings
 */

$sal-animation-duration: 0.5s !default;
$sal-animation-delay: 0s !default;
$sal-animation-easing: ease !default;
$sal-slide-offset: 20% !default;
$sal-zoom-in-scale: 0.9 !default;
$sal-zoom-out-scale: 1.1 !default;
$sal-flip-rotate: 91deg !default;

/**
  * Easings
  */

$sal-easings: (
  linear: linear,
  ease: ease,
  ease-in: ease-in,
  ease-out: ease-out,
  ease-in-out: ease-in-out,

  ease-in-cubic: cubic-bezier(0.55, 0.055, 0.675, 0.19),
  ease-out-cubic: cubic-bezier(0.215, 0.61, 0.355, 1),
  ease-in-out-cubic: cubic-bezier(0.645, 0.045, 0.355, 1),
  ease-in-circ: cubic-bezier(0.6, 0.04, 0.98, 0.335),
  ease-out-circ: cubic-bezier(0.075, 0.82, 0.165, 1),
  ease-in-out-circ: cubic-bezier(0.785, 0.135, 0.15, 0.86),
  ease-in-expo: cubic-bezier(0.95, 0.05, 0.795, 0.035),
  ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1),
  ease-in-out-expo: cubic-bezier(1, 0, 0, 1),
  ease-in-quad: cubic-bezier(0.55, 0.085, 0.68, 0.53),
  ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94),
  ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955),
  ease-in-quart: cubic-bezier(0.895, 0.03, 0.685, 0.22),
  ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1),
  ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1),
  ease-in-quint: cubic-bezier(0.755, 0.05, 0.855, 0.06),
  ease-out-quint: cubic-bezier(0.23, 1, 0.32, 1),
  ease-in-out-quint: cubic-bezier(0.86, 0, 0.07, 1),
  ease-in-sine: cubic-bezier(0.47, 0, 0.745, 0.715),
  ease-out-sine: cubic-bezier(0.39, 0.575, 0.565, 1),
  ease-in-out-sine: cubic-bezier(0.445, 0.05, 0.55, 0.95),
  ease-in-back: cubic-bezier(0.6, -0.28, 0.735, 0.045),
  ease-out-back: cubic-bezier(0.175, 0.885, 0.32, 1.275),
  ease-in-out-back: cubic-bezier(0.68, -0.55, 0.265, 1.55),
);

/**
  * Core
  */

[data-sal] {
  transition-duration: var(--sal-duration, $sal-animation-duration);
  transition-delay: var(--sal-delay, $sal-animation-delay);
  transition-timing-function: var(--sal-easing, $sal-animation-easing);
}

@variants {
  /**
     * Delay
     */
  .sal-delay-0 {
    --sal-delay: 0s;
  }
  @for $i from 1 through 10 {
    .sal-delay-#{$i * 100} {
      --sal-delay: #{$i * 100}ms;
    }
  }

  /**
     * Duration
     */
  .sal-duration-0 {
    --sal-duration: 0s;
  }
  @for $i from 2 through 20 {
    .sal-duration-#{$i * 100} {
      --sal-duration: #{$i * 100}ms;
    }
  }

  /**
      * Easings
      */
  @each $key, $value in $sal-easings {
    .sal-#{$key} {
      --sal-easing: $value;
    }
  }

  /**
      * Animations
      */

  // Fade
  .sal-fade {
    opacity: 0;
    transition-property: opacity;
  }

  // Slide
  .sal-slide-up {
    opacity: 0;
    transition-property: opacity, transform;
    transform: translateY(var(--sal-slide-offset, $sal-slide-offset));
  }

  .sal-slide-down {
    opacity: 0;
    transition-property: opacity, transform;
    transform: translateY(calc(var(--sal-slide-offset, $sal-slide-offset) * -1));
  }

  .sal-slide-left {
    opacity: 0;
    transition-property: opacity, transform;
    transform: translateX(var(--sal-slide-offset, $sal-slide-offset));
  }

  .sal-slide-right {
    opacity: 0;
    transition-property: opacity, transform;
    transform: translateX(calc(var(--sal-slide-offset, $sal-slide-offset) * -1));
  }

  // Zoom
  .sal-zoom-in {
    opacity: 0;
    transition-property: opacity, transform;
    transform: scale(var(--sal-zoom-in-scale, $sal-zoom-in-scale));
  }

  .sal-zoom-out {
    opacity: 0;
    transition-property: opacity, transform;
    transform: scale(var(--sal-zoom-out-scale, $sal-zoom-out-scale));
  }

  // Flip
  .sal-flip-left {
    opacity: 1;
    backface-visibility: hidden;
    transition-property: transform;
    transform: perspective(2000px) rotateY(calc(var(--sal-flip-rotate, $sal-flip-rotate) * -1));
  }

  .sal-flip-right {
    opacity: 1;
    backface-visibility: hidden;
    transition-property: transform;
    transform: perspective(2000px) rotateY(var(--sal-flip-rotate, $sal-flip-rotate));
  }

  .sal-flip-up {
    opacity: 1;
    backface-visibility: hidden;
    transition-property: transform;
    transform: perspective(2000px) rotateX(calc(var(--sal-flip-rotate, $sal-flip-rotate) * -1));
  }

  .sal-flip-down {
    opacity: 1;
    backface-visibility: hidden;
    transition-property: transform;
    transform: perspective(2000px) rotateX(var(--sal-flip-rotate, $sal-flip-rotate));
  }
}

[data-sal].sal-animate,
body.sal-disabled [data-sal] {
  transform: none;
  opacity: 1;
}

// don't animate for users that prefer reduced motion
@media screen and (prefers-reduced-motion: reduce) {
  [data-sal] {
    transform: none !important;
    opacity: 1 !important;
  }
}
```

## usage

```html
<h1 class="sal-slide-left" data-sal>hello world</h1>
```
