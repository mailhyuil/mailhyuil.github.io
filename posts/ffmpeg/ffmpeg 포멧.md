# ffmpeg 포멧

## video format

```sh
WebM
# WebM은 Google에서 개발한 오픈 웹용 비디오 포맷으로 VP8 또는 VP9 비디오 코덱과 Opus 오디오 코덱을 사용합니다. 일부 브라우저에서는 WebM을 지원하며, VP9 코덱을 지원하는 브라우저에서 뛰어난 품질과 압축률을 제공합니다.

MP4 (MPEG-4 Part 14)
# MP4는 가장 보편적으로 사용되는 비디오 컨테이너 포맷 중 하나입니다. H.264(AVC) 및 H.265(HEVC) 코덱과 함께 사용되며, 대부분의 브라우저에서 지원됩니다.

TS(MPEG-TS) & M3U8 # HLS (HTTP Live Streaming)
# TS 파일은 비디오와 오디오가 합쳐진 작은 파일 단위 스트리밍

M4S(MPD) # MPEG-DASH (Dynamic Adaptive Streaming over HTTP)
# m4s 파일은 Video와 Audio 파일을 각각 별도의 스트리밍으로 파일을 내려보냅니다.
# 초기 파일에 Audio와 Video 파일 디코딩 track 정보를 포함하고 있습니다. (init.m4s)
```

## audio format

```sh
MP3 (MPEG Audio Layer III)
# MP3는 오래된 포맷이지만 여전히 많은 브라우저와 플랫폼에서 지원됩니다. 음악 및 오디오 스트리밍에 널리 사용됩니다.

AAC (Advanced Audio Coding)
# AAC는 높은 오디오 품질을 제공하면서도 비교적 낮은 비트레이트로 압축하는데 사용되는 포맷입니다. 대부분의 브라우저에서 지원됩니다.

Opus
# Opus는 다목적 오디오 코덱으로, 낮은 대역폭에서도 뛰어난 품질과 효율성을 제공합니다. 실시간 음성 통화, 온라인 게임, 음악 스트리밍 등에 사용됩니다.
```
