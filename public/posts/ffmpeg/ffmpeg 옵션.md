# ffmpeg option

```sh
# input (filepath, url ...)
-i : input file

# codec (h264, aac ...)
-vcodec / -c:v : video codec
-acodec / -c:a : audio codec

# filter (scale, crop ...)
-vf : video filter
-af : audio filter

# bitrate (k, M, G)
-b:v : video bitrate
-b:a : audio bitrate

# quality (0 ~ 51)
-qscale:v : video quality
-qscale:a : audio quality

# format (mp4, avi ...)
-f : format

# size (width x height)
-s : size

# frame rate (fps)
-r : frame rate

# duration (hh:mm:ss)
-t : duration

# start time (hh:mm:ss)
-ss : start time

# end time (hh:mm:ss)
-to : end time

# preset (ultrafast, superfast, veryfast, faster, fast, medium, slow, slower, veryslow, placebo)
-preset : preset
```
