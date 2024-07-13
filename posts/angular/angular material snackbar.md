# angular material snackbar

> material cdk의 overlay와 portal을 이용한 spinner

## snackbar.scss

```scss
.mat-mdc-snack-bar-container {
  --mdc-snackbar-container-shape: 10px;
  --mdc-snackbar-supporting-text-font: pretendard;
  --mdc-snackbar-supporting-text-line-height: 20px;
  --mdc-snackbar-supporting-text-size: 14px;
  --mdc-snackbar-supporting-text-weight: 600;
  --mdc-snackbar-supporting-text-color: white;
  --mat-snack-bar-button-color: white;
  &.snackbar-primary {
    --mdc-snackbar-container-color: #1e88e5;
  }
  &.snackbar-success {
    --mdc-snackbar-container-color: #43a047;
  }
  &.snackbar-danger {
    --mdc-snackbar-container-color: #e53935;
  }
  &.snackbar-warning {
    --mdc-snackbar-container-color: #fb8c00;
  }
}
```
