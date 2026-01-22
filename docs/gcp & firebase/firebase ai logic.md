# firebase ai logic

- client 중심의 ai 패키지
- Cloud Functions 비용이 들지 않고 API 호출만 발생

## install

```sh
# 최신 AI SDK 추가
flutter pub add firebase_ai firebase_core
# Firebase 설정 (이미 했다면 생략)
flutterfire configure
```

## ai_agent_service.dart

```dart
import 'package:firebase_ai/firebase_ai.dart';

class AIAgentService {
  late final GenerativeModel _model;
  ChatSession? _chatSession;

  AIAgentService() {
    // 1. 모델 초기화 (비용 효율적인 Gemini 1.5 Flash 권장)
    _model = FirebaseAI.instance.generativeModel(
      modelName: 'gemini-1.5-flash',
      // 시스템 프롬프트: AI의 정체성과 규칙 부여 (비용 절감 및 정확도 향상)
      systemInstruction: Content.system('''
        당신은 중고거래 채팅방의 안전 도우미입니다.
        1. 사용자의 대화에서 사기 패턴(외부 결제 유도, 과도한 개인정보 요구 등)을 감시하세요.
        2. 사기가 의심되면 [SCAM_ALERT] 태그와 함께 이유를 짧게 말하세요.
        3. 평소에는 대화를 자연스럽게 이어갈 수 있도록 다음 대화 키워드를 3개 추천하세요.
        형식: 응답내용 | 추천1, 추천2, 추천3
      '''),
    );
    _chatSession = _model.startChat();
  }

  // 스트리밍으로 메시지 보내기
  Stream<String> sendMessageStream(String message) async* {
    final response = _chatSession!.sendMessageStream(Content.text(message));
    
    await for (final chunk in response) {
      if (chunk.text != null) {
        yield chunk.text!;
      }
    }
  }
}
```

## ai_agent_controller.dart

```dart
class ChatController {
  final AIAgentService _aiService = AIAgentService();
  DateTime? _lastCallTime;

  Future<void> handleUserMessage(String text) async {
    // 장치 1: 시간 기반 제한 (예: 5초에 한 번만 질문 가능)
    if (_lastCallTime != null && 
        DateTime.now().difference(_lastCallTime!).inSeconds < 5) {
      print("잠시 후 다시 시도해주세요.");
      return;
    }

    // 장치 2: 키워드 필터링 (AI를 부를 가치가 있는가?)
    final scamKeywords = ['입금', '계좌', '카톡', '택배'];
    bool worthChecking = scamKeywords.any((k) => text.contains(k));

    if (worthChecking) {
      _lastCallTime = DateTime.now();
      // AI 호출 로직 실행...
    }
  }
}
```

## UI

```dart
// UI 예시
StreamBuilder<String>(
  stream: _aiAgentService.sendMessageStream("입금은 어떻게 하나요?"),
  builder: (context, snapshot) {
    if (snapshot.hasData) {
      final data = snapshot.data!;
      // [SCAM_ALERT]가 포함되어 있다면 빨간색 경고창 띄우기
      bool isScam = data.contains('[SCAM_ALERT]');
      return Column(
        children: [
          if (isScam) WarningWidget("주의: 사기 위험이 감지되었습니다!"),
          Text(data.split('|')[0]), // 답변 내용
        ],
      );
    }
    return CircularProgressIndicator();
  },
);
```
