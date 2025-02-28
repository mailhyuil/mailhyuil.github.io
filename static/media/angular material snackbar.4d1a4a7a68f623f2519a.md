# angular material snackbar

## project.json

> prebuilt-themes 추가

```json
"styles": [
  "apps/admin/src/styles.scss",
  "node_modules/@angular/material/prebuilt-themes/cyan-orange.css",
],
```

## snackbar.scss

```scss
@use "@angular/material" as mat;

.mat-mdc-snack-bar-container {
  @include mat.snack-bar-overrides(
    (
      container-shape: 10px,
      button-color: white,
      supporting-text-font: pretendard,
      supporting-text-line-height: 20px,
      supporting-text-color: white,
      supporting-text-size: 14px,
      supporting-text-weight: 600,
    )
  );
  &.snackbar-primary {
    @include mat.snack-bar-overrides(
      (
        container-color: #1e88e5,
      )
    );
  }
  &.snackbar-success {
    @include mat.snack-bar-overrides(
      (
        container-color: #43a047,
      )
    );
  }
  &.snackbar-danger {
    @include mat.snack-bar-overrides(
      (
        container-color: #e53935,
      )
    );
  }
  &.snackbar-warning {
    @include mat.snack-bar-overrides(
      (
        container-color: #fb8c00,
      )
    );
  }
}
```
