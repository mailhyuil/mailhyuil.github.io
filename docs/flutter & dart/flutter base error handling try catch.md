# flutter base error handling try catch

| 레이어                     | try-catch 넣어야 하나? | 이유                  |
| ------------------------ | ----------------- | ------------------- |
| **Widget**               | ❌ 거의 안 넣음        | UI는 에러 처리보다 “표현” 역할 (error message text, toast, alert, dialog, snackbar) |
| **Provider (ViewModel)** | 🔶 상황에 따라         | 에러를 UI 상태로 바꿀 때     |
| **Repository**           | ✅ 반드시             | 네트워크/DB 등 실제 실패 지점  |
